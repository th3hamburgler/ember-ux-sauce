import Component from '@ember/component';
import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-form-label';

const FormLabel = Component.extend(BEMComponent, PropTypeMixin, Testable, {
  // Attributes
  base: 'uxs-form__label',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.set('propTypes', {
      text: PropTypes.string,
      disabled: PropTypes.boolean,
      required: PropTypes.boolean,
    });
    this.set('modifiers', [
      'disabled',
      'required',
    ]);
  },
});

FormLabel.reopenClass({
  positionalParams: ['text']
});

export default FormLabel;