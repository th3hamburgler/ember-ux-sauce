import Mixin from '@ember/object/mixin';
import {
  PropTypes
} from 'ember-prop-types';
import {
  get
} from '@ember/object';
import {
  bool
} from '@ember/object/computed';
/**
  A mixin to add click support to a component.
  @class Clickable
  @namespace Mixins
  @public
*/
export default Mixin.create({
  // Attributes
  /**
    The name of the action to fire on click
    @property onClick
    @default  null
    @type     {string}
    @public
  */
  onClick: null,
  /**
   * Mixins Property Managment config
   *
   @property propTypes
   @type     {Object}
   @private
   */
  propTypes: {
    action: PropTypes.oneOfType([
      PropTypes.null,
      PropTypes.func,
    ]),
  },
  /**
    Add a role to the item for accessibility
    @property role
    @default  'button'
    @type     {string}
    @public
  */
  role: 'button',
  // Actions
  click() {
    let action = get(this, 'onClick');
    if (!this.get('disabled') && action) {
      action();
    }
  },
  hasClickAction: bool('onClick'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['disabled', 'hasClickAction:clickable'])
  },
});