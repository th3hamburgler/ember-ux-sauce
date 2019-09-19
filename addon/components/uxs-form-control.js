import Component from '@ember/component';
import {
  computed,
  defineProperty,
  get,
  set
} from '@ember/object';
import {
  A
} from '@ember/array';
import {
  alias,
  bool,
  equal,
  oneWay,
  or
} from '@ember/object/computed';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-form-control';

export default Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-form__control',
  classNameBindings: ['typeClass'],
  layout,
  // Computed
  typeClass: computed('base', 'type', function() {
    return `${get(this, 'base')}--${get(this, 'type')}`;
  }),
  hasError: or('hasAttrError', 'hasClientError'),
  hasAttrError: bool('error'),
  hasClientError: alias('hasValidationError'),
  isError: oneWay('validator.isInvalid'),
  hasTextInput: computed('type', function() {
    let textInputs = A([
      'text', 'password', 'number', 'hidden', 'email', 'search', 'tel', 'url'
    ]);
    return textInputs.includes(get(this, 'type'));
  }),
  hasTextArea: equal('type', 'textarea'),
  hasLabel: bool('label'),
  hasTip: bool('tip'),
  hasWarning: bool('warning'),
  hasValidationError: computed('validator.isDirty', 'isError', 'didValidate', function() {
    // only show errors when user has finished editing
    return get(this, 'didValidate') && get(this, 'isError');
  }),
  hasValidationWarning: computed('validator.{isDirty,warnings.[]}', 'isWarning', 'didValidate', function() {
    // only show warnings when user has finished editing
    return get(this, 'didValidate') && get(this, 'isWarning');
  }),
  // Methods
  init() {
    this.registerModifiers([
      'disabled',
      'compact',
      '*style',
      '*size',
      'hasError:error',
      'hasWarning:warning',
      'hasTip:tip',
      'rowControl:row-control',
    ]);
    this._super(...arguments);
    this.initValidator();
    this.initModelErrors();
  },
  getDefaultProps() {
    return {
      validateOnFocus: true,
    };
  },
  /**
   * Create a one way binding to the models ember cp validation object
   **/
  initValidator() {
    if (get(this, 'model')) {
      let propName = get(this, 'name');
      defineProperty(this, 'validator', oneWay(`model.validations.attrs.${propName}`));
    }
  },
  initModelErrors() {
    if (get(this, 'model')) {
      let propName = get(this, 'name');
      defineProperty(this, 'modelErrors', oneWay(`model.errors.${propName}`));
    }
  },
  // Events
  focusIn() {
    if (get(this, 'validateOnFocus')) {
      set(this, 'didValidate', false);
    }
  },
  focusOut() {
    if (get(this, 'validateOnFocus')) {
      set(this, 'didValidate', true);
    }
  },
});