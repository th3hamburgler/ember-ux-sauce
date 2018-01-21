// import Component from '@ember/component';
// import layout from '../templates/components/uxs-form-date';
import FlatPickr from 'ember-flatpickr/components/ember-flatpickr';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  defineProperty,
  get,
  set
} from '@ember/object';
import {
  alias,
  equal,
  oneWay
} from '@ember/object/computed';

export default FlatPickr.extend(Accessible, BEMComponent, Testable, {
  // Attributes
  base: 'uxs-form__input',
  // Computed
  isDate: equal('type', 'date'),
  isTime: equal('type', 'time'),
  isDateTime: equal('type', 'datetime'),
  date: oneWay('value'),
  // Methods
  init() {
    this._super(...arguments);
    this.initModifiers();
    this.initModelComputedProperties();
    this.initDefaultAttributes();
  },
  /**
   * Set the properties to bind to BEM modifier classes
   */
  initModifiers() {
    this.registerModifiers([
      'disabled',
      'isDate:date',
      'isDateTime:datetime',
      'error',
      'inlineInput:inline',
      'isTime:time',
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
  initDefaultAttributes() {
    set(this.attrs, 'enableTime', get(this, 'enableTime'));
    set(this.attrs, 'noCalendar', get(this, 'noCalendar'));
    set(this.attrs, 'dateFormat', get(this, 'dateFormat'));
    set(this.attrs, 'date', get(this, 'date'));
  },
});