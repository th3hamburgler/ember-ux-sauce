import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Component from '@ember/component';
import layout from '../templates/components/uxs-form-tip';
import {
  set
} from '@ember/object';

const FormTip = Component.extend(BEMComponent, PropTypeMixin, Testable, {
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
    ]);
    this._super(...arguments);
    set(this, 'propTypes', {
      text: PropTypes.string,
      disabled: PropTypes.boolean,
      error: PropTypes.error,
      required: PropTypes.boolean,
      success: PropTypes.boolean,
      warning: PropTypes.boolean,
    });
  },
});

FormTip.reopenClass({
  positionalParams: ['text']
});

export default FormTip;