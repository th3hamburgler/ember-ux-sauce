import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-form-label';
import Component from '@ember/component';

const FormLabel = Component.extend(BEMComponent, PropTypeMixin, Testable, {
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

FormLabel.reopenClass({
  positionalParams: ['text']
});

export default FormLabel;