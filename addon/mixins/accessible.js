import Mixin from '@ember/object/mixin';
import {
  PropTypes
} from 'ember-prop-types';

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
    'role',
  ],
  /**
    Prevents the action from firing when true
    @property disabled
    @default  null
    @type     {boolean}
    @public
  */
  disabled: false,
  /**
    Sets the an aria-label attribute
    @property label
    @default  null
    @type     {(string)}
    @public
   */
  label: false,
  /**
   * Mixins Property Managment config
   *
   @property propTypes
   @type     {Object}
   @private
   */
  propTypes: {
    disabled: PropTypes.bool,
    label: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.func,
    ]),
    role: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
  },
  /**
    Sets the role attribute
    @property role
    @default  null
    @type     {(string)}
    @public
   */
  role: false,
});
