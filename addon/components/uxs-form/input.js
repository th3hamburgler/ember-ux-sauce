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
import {
  bool
} from '@ember/object/computed';

export default Component.extend(BEMComponent, Testable, {
  base: 'uxs-form__input-container',
  layout,
  b: "uxs-form",
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
    Define the type of input

    @argument type
    @type     String
    @default  text
    @public
   */
  type: 'text',
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
    @default  filled
    @public
   */
  style: FORM_STYLES.FILLED,
  /**
    Add prefixed text the the input

    @argument prefixText
    @type     String
    @default  null
    @public
   */
  prefixText: null,
  /**
    Add suffixed text the the input

    @argument suffixText
    @type     String
    @default  null
    @public
   */
  suffixText: null,
  /**
    Add prefixed icon the the input

    @argument prefixText
    @type     String
    @default  null
    @public
   */
  prefixIcon: null,
  /**
    Add suffixed icon the the input

    @argument suffixText
    @type     String
    @default  null
    @public
   */
  suffixIcon: null,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'disabled',
      '*align',
      '*style',
      'inactive',
      'invalid',
      'active',
      'hasPrefix:has-prefix',
      'hasSuffix:has-suffix',
    ]);
  },
  didInsertElement() {
    this._super(...arguments);
    this.updateLabelActiveState();
  },
  didUpdateAttrs() {
    this._super(...arguments);
    this.updateLabelActiveState();
  },
  updateLabelActiveState() {
    if (!isEmpty(this.value) && this.value.length > 0) {
      this.addClassToComponenets('active');
    } else {
      this.removeClassFromComponenets('active');
    }
  },
  findControlComponents() {
    let components = [];

    // Control
    const control = this.element.parentNode;
    if (control.classList.contains('.uxs-form__control')) {
      components.push(control);
    }

    // Label
    const elements = this.element.parentNode.querySelectorAll(`.uxs-form__label`);
    if (elements.length > 0) {
      components.push(elements[0]);
    }

    // Input Container
    const input = this.element;
    if (elements.length > 0) {
      components.push(input);
    }

    // Prefix / Suffix
    const fixes = this.element.querySelectorAll(`.uxs-form__prefix-text,.uxs-form__suffix-text`);
    if (fixes.length > 0) {
      fixes.forEach((f) => components.push(f));
    }

    return components;
  },
  addClassToComponenets(className) {
    const components = this.findControlComponents();
    components.forEach(component => component.classList.add(className));
  },
  removeClassFromComponenets(className) {
    const components = this.findControlComponents();
    components.forEach(component => component.classList.remove(className));
  },
  // Computed
  hasPrefix: bool('prefixText'),
  hasSuffix: bool('suffixText'),
  // Actions
  actions: {
    focusIn() {
      this.addClassToComponenets('focus');
    },
    focusOut() {
      this.removeClassFromComponenets('focus');
    },
    keyUp() {

    }
  }
});