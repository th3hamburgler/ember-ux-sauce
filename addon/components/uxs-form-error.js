import Component from '@ember/component';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-form-error';

const FormError = Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-form__error',
  layout,
  // Methods
  init() {
    this.registerModifiers(['disabled']);
    this._super(...arguments);
  },
});

FormError.reopenClass({
  positionalParams: ['text']
});

export default FormError;