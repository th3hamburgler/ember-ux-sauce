import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
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
  isHidden: equal('type', 'hidden'),
  isNumber: equal('type', 'number'),
  isPassword: equal('type', 'password'),
  isSearch: equal('type', 'search'),
  isTel: equal('type', 'tel'),
  isText: equal('type', 'text'),
  isURL: equal('type', 'url'),
  // Methods
  init() {
    this.set('modifiers', [
      'disabled',
      'isEmail:email',
      'error',
      'isHidden:hidden',
      'isNumber:number',
      'isPassword:password',
      'isSearch:search',
      'success',
      'isTel:tel',
      'isText:text',
      'isURL:url',
      'warning',
    ]);
    this._super(...arguments);
    this.set('propTypes', {
      type: PropTypes.oneOf(['email', 'hidden', 'number', 'password', 'search', 'tel', 'text', 'url']),
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