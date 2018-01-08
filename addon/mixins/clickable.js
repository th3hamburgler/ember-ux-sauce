import Mixin from '@ember/object/mixin';
// import get from '@ember/object/get';
import {
  PropTypes
} from 'ember-prop-types';

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
    @property clickAction
    @default  null
    @type     {string}
    @public
  */
  clickAction: null,
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
    if (!this.get('disabled') && this.get('clickAction')) {
      this.get('clickAction')();
    }
  },
});
