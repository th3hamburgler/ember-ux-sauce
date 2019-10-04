import Mixin from '@ember/object/mixin';

/**
  A mixin to add accesibility attributes to a component
  @class Accessible
  @namespace Mixins
  @public
*/
export default Mixin.create({
  attributeBindings: [
    'disabled',
    'disabled:aria-disabled',
    'label:aria-label',
    'hidden:aria-hidden',
    'role',
  ],
  /**
    Prevents the action from firing when true
    @property disabled
    @default  null
    @type     Boolean
    @public
  */
  disabled: false,
  /**
    Sets the an aria-label attribute
    @property label
    @default  null
    @type     String
    @public
   */
  label: false,
  /**
    Sets the an aria-hidden attribute
    @property hidden
    @default  false
    @type     Boolean
    @public
   */
  hidden: false,
  /**
    Sets the role attribute
    @property role
    @default  null
    @type     String
    @public
   */
  role: false,
});