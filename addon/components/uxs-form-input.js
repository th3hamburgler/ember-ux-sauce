import {
  defineProperty,
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

export default TextField.extend(Accessible, BEMComponent, Testable, {
  // Attributes
  base: 'uxs-form__input',
  type: 'text',
  // Computed
  isEmail: equal('type', 'email'),
  isHidden: equal('type', 'hidden'),
  isNumber: equal('type', 'number'),
  isPassword: equal('type', 'password'),
  isSearch: equal('type', 'search'),
  isTel: equal('type', 'tel'),
  isText: equal('type', 'text'),
  isURL: equal('type', 'url'),
  isWeek: equal('type', 'week'),
  isMonth: equal('type', 'month'),
  isYear: equal('type', 'year'),
  // Methods
  init() {
    this._super(...arguments);
    this.initModifiers();
    this.initModelComputedProperties();
  },
  /**
   * Set the properties to bind to BEM modifier classes
   */
  initModifiers() {
    this.registerModifiers([
      'disabled',
      '*style',
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
      'isWeek:week',
      'isMonth:month',
      'isYear:year',
      'warning',
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
});