import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-form-textarea';
import TextArea from '@ember/component/text-area';

export default TextArea.extend(Accessible, BEMComponent, PropTypeMixin, Testable, {
  // Attributes
  base: 'uxs-form__input',
  layout,
  // Computed
  textarea: true,
  // Methods
  init() {
    this.set('modifiers', [
      'disabled',
      'error',
      'textarea',
      'warning',
    ]);
    this._super(...arguments);
    this.set('propTypes', {
      rows: PropTypes.number,
      cols: PropTypes.number,
      placeholder: PropTypes.string,
      disabled: PropTypes.boolean,
      maxlength: PropTypes.number,
      tabindex: PropTypes.number,
      wrap: PropTypes.boolean,
      readonly: PropTypes.boolean,
      autofocus: PropTypes.boolean,
      spellcheck: PropTypes.boolean,
    });
  },
  getDefaultProps() {
    return {
      rows: 6,
    };
  },
});