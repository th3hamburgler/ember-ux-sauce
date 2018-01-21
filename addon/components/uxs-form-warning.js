import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
import Component from '@ember/component';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-form-warning';
import {
  set
} from '@ember/object';

const FormError = Component.extend(BEMComponent, PropTypeMixin, Testable, {
  // Attributes
  base: 'uxs-form__warning',
  layout,
  // Methods
  init() {
    this.registerModifiers(['disabled']);
    this._super(...arguments);
    set(this, 'propTypes', {
      text: PropTypes.string,
      disabled: PropTypes.boolean,
    });
  },
});

FormError.reopenClass({
  positionalParams: ['text']
});

export default FormError;