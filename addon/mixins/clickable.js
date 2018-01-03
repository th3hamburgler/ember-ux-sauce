import Ember from 'ember';

const {
  Mixin
} = Ember;

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
    @property action
    @default  null
    @type     {string}
    @public
  */
  action: null,

  /**
    Prevents the action from firing when true
    @property disabled
    @default  null
    @type     {boolean}
    @public
  */
  disabled: null,
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
    if (!this.get('disabled')) {
      this.sendAction('action', this);
    }
  },
});
