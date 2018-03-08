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
import TextField from '@ember/component/text-field';
import {
  equal
} from '@ember/object/computed';


export default TextField.extend(Accessible, BEMComponent, PropTypeMixin, Testable, {
  // Attributes
  base: 'uxs-form__input',
  // Computed
  isEmail: equal('type', 'email'),
  isWeek: equal('type', 'week'),
  isMonth: equal('type', 'month'),
  isYear: equal('type', 'year'),
  isHidden: equal('type', 'hidden'),
  isNumber: equal('type', 'number'),
  isPassword: equal('type', 'password'),
  isSearch: equal('type', 'search'),
  isTel: equal('type', 'tel'),
  isText: equal('type', 'text'),
  isURL: equal('type', 'url'),
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
      'isEmail:email',
      'error',
      'isHidden:hidden',
      'inline',
      'isNumber:number',
      'isPassword:password',
      'isSearch:search',
      'success',
      'isTel:tel',
      'isText:text',
      'isURL:url',
      'warning',
      'isWeek:week',
      'isMonth:month',
      'isYear:year',
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
      type: PropTypes.oneOf(['email', 'hidden', 'number', 'password', 'search', 'tel', 'text', 'url', 'week', 'month', 'year']),
      disabled: PropTypes.boolean,
      error: PropTypes.boolean,
      success: PropTypes.boolean,
      warning: PropTypes.boolean,
    });
  },
  getDefaultProps() {
    return {
      type: 'text',
    };
  },
});