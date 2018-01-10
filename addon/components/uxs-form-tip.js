import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Component from '@ember/component';
import layout from '../templates/components/uxs-form-tip';

const FormTip = Component.extend(BEMComponent, PropTypeMixin, Testable, {
  // Attributes
  base: 'uxs-form__tip',
  layout,
  // Methods
  init() {
    this.set('modifiers', [
      'disabled',
      'error',
      'required',
      'success',
      'warning',
    ]);
    this._super(...arguments);
    this.set('propTypes', {
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