import Component from '@ember/component';
import layout from '../../templates/components/uxs-form/control';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  FORM_STYLES
} from '../uxs-form';
import {
  bool,
  or
} from '@ember/object/computed';

export default Component.extend(Testable, BEMComponent, {
  // Properties
  base: 'uxs-form__control',
  layout,
  // Attributes
  /**
    Set to true to disable this form.

    The disabled state will be passed to any child controls it yields.

    @argument disabled
    @type     Boolean
    @default  false
    @public
   */
  disabled: false,
  /**
    Set to true to render an invalid control

    The invalid state will be passed to any child controls it yields.

    @argument disabled
    @type     Boolean
    @default  false
    @public
   */
  invalid: false,
  /**
    Set the style of the form.

    The style will be passed to any child controls it yields.

    UXS ships with the following styles:
    - filled
    - outlined

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-form__control--my-custom-style

    @argument style
    @type     String
    @default  null
    @public
   */
  style: FORM_STYLES.FILLED,
  // Computed
  hasError: bool('error'),
  isInvalid: or('hasError', 'invalid'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'disabled',
      '*style',
      'isInvalid:invalid',
    ]);
  },
});