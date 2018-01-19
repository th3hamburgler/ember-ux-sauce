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
  bool,
  equal,
  oneWay,
} from '@ember/object/computed';
import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-form-control';

export default Component.extend(BEMComponent, PropTypeMixin, Testable, {
  // Attributes
  base: 'uxs-form__control',
  layout,
  // Computed
  hasError: bool('error'),
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
  isError: oneWay('validator.isInvalid'),
  //isWarning
  // Methods
  init() {
    set(this, 'modifiers', [
      'disabled',
    ]);
    this._super(...arguments);
    set(this, 'propTypes', {
      text: PropTypes.string,
      validateOnFocus: PropTypes.boolean,
    });
    this.initValidator();
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