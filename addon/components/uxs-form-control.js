import Component from '@ember/component';
import {
  computed
} from '@ember/object';

import {
  bool,
  equal,
} from '@ember/object/computed';
import {
  A
} from '@ember/array';
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
    return textInputs.includes(this.get('type'));
  }),
  hasTextArea: equal('type', 'textarea'),
  hasLabel: bool('label'),
  hasTip: bool('tip'),
  hasWarning: bool('warning'),
  // Methods
  init() {
    this.set('modifiers', [
      'disabled',
    ]);
    this._super(...arguments);
    this.set('propTypes', {
      text: PropTypes.string,
    });
  },
});