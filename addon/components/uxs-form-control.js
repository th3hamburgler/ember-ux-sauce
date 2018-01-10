import Component from '@ember/component';
import {
  bool
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
  hasInput: bool('type'),
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