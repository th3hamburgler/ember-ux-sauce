import Ember from 'ember';

const {
  Mixin,
} = Ember;

/**
  A mixin to add accesibility attributes to a component
  @class Accessible
  @namespace Mixins
  @public
*/
export default Mixin.create({
  attributeBindings: [
    'disabled:aria-disabled',
    'label:aria-label',
    'role',
  ],
  /**
    Sets the an aria-label attribute
    @property label
    @default  null
    @type     {(string)}
    @public
   */
  label: false,
  /**
    Sets the role attribute
    @property role
    @default  null
    @type     {(string)}
    @public
   */
  role: false,
});
