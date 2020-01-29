import Component from '@ember/component';
import layout from '../../templates/components/uxs-form/error';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  FORM_STYLES
} from '../uxs-form';

export default Component.extend(BEMComponent, Testable, {
  base: 'uxs-form__error',
  layout,
  // Attributes
  /**
    Define the text alignment of the input

    The following alignment options are supported:
    - left (default)
    - right
    - center
    - justify

    @argument align
    @type     String
    @default  left
    @public
   */
  align: 'left',
  /**
    Set to true to disable this error.

    The disabled state will just effect the visual appearance of the error

    @argument disabled
    @type     Boolean
    @default  false
    @public
   */
  disabled: false,
  /**
    Set the style of the error.

    UXS ships with the following styles:
    - filled
    - outlined

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-form__error--my-custom-style

    @argument style
    @type     String
    @default  null
    @public
   */
  style: FORM_STYLES.FILLED,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*align',
      'disabled',
      'invalid',
      '*style',
    ]);
  },
}).reopenClass({
  positionalParams: ['error'],
});