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
  hasInput: bool('type'),
  hasLabel: bool('label'),
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