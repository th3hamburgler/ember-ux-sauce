import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-form-label';
import Component from '@ember/component';

const FormLabel = Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-form__label',
  layout,
  tagName: 'label',
  // Methods
  init() {
    this.registerModifiers([
      'disabled',
      'error',
      'required',
      'success',
      'warning',
      '*style'
    ]);
    this._super(...arguments);
  },
});

FormLabel.reopenClass({
  positionalParams: ['text']
});

export default FormLabel;