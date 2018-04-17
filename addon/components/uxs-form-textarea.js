import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
import {
  defineProperty,
  set
} from '@ember/object';
import {
  alias,
  oneWay
} from '@ember/object/computed';
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
    this._super(...arguments);
    this.initModifiers();
    this.initModelComputedProperties();
    this.initPropTypes()
  },
  /**
   * Set the properties to bind to BEM modifier classes
   */
  initModifiers() {
    this.registerModifiers([
      'disabled',
      'error',
      'inline',
      'textarea',
      'warning',
      '*style',
    ]);
  },
  /**
   * If this control has a model and name defined
   * we create an alias for the bound value.
   * We also create a one way computed property to
   * read the current validation state of the property.
   */
  initModelComputedProperties() {
    let model = this.get('model'),
      propName = this.get('name');

    if (model && propName) {
      defineProperty(this, 'validator', oneWay(`model.validations.attrs.${propName}`));
      // map the value to mode.property - this can be overridden by passing value
      // property into this component
      defineProperty(this, 'value', alias(`model.${propName}`));
    }
  },
  /**
   * Set the prop type definitions
   */
  initPropTypes() {
    set(this, 'propTypes', {
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