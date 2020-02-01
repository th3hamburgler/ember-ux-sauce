import Mixin from '@ember/object/mixin';
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
    Add a role to the item for accessibility
    @property role
    @default  'button'
    @type     {string}
    @public
  */
  role: 'button',
  /**
    Return true to allow this components events to
    bubble to parent elements
    @property bubbles
    @default  false
    @type     {boolean}
    @public
  */
  bubbles: false,
  // Events
  click(event) {
    let action = get(this, 'onClick');
    if (!this.get('disabled') && action) {
      action(event);
      return this.bubbles;
    }
  },
  hasClickAction: bool('onClick'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['disabled', 'hasClickAction:clickable'])
  },
});