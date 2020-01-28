import Component from '@ember/component';
import layout from '../../templates/components/uxs-form/input';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  FORM_STYLES
} from '../uxs-form';
import {
  isEmpty
} from '@ember/utils';

const LABEL_BASE_CLASS = 'uxs-form__label';

export default Component.extend(BEMComponent, Testable, {
  base: 'uxs-form__input-container',
  layout,
  b: "uxs-form",
  // Attributes
  /**
    Set to true to disable this text input.

    The disabled state will just effect the visual appearance of the text input

    @argument disabled
    @type     Boolean
    @default  false
    @public
   */
  disabled: false,
  /**
    Set the style of the text input.

    UXS ships with the following styles:
    - filled
    - outlined

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-form__input--my-custom-style

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
      'disabled',
      '*style',
      'inactive',
      'active',
    ]);
  },
  didUpdateAttrs() {
    this._super(...arguments);
    this.updateLabelActiveState();
  },
  updateLabelActiveState() {
    if (!isEmpty(this.value) && this.value.length > 0) {
      const label = this.findInputsLabel();
      label.classList.add('active');
    } else {
      const label = this.findInputsLabel();
      label.classList.remove('active');
    }
  },
  findInputsLabel() {
    const elements = this.element.parentNode.querySelectorAll(`.${LABEL_BASE_CLASS}`);
    if (elements.length > 0) {
      return elements[0];
    }
  },
  // Actions
  actions: {
    focusIn() {
      const label = this.findInputsLabel();
      label.classList.add('focused');
    },
    focusOut() {
      const label = this.findInputsLabel();
      label.classList.remove('focused');
    },
    keyUp() {

    }
  }
});