import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Component from '@ember/component';
import layout from '../templates/components/uxs-form-tip';

const FormTip = Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-form__tip',
  layout,
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

FormTip.reopenClass({
  positionalParams: ['text']
});

export default FormTip;