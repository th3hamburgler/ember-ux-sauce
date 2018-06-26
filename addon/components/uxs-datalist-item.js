import Component from '@ember/component';
import layout from '../templates/components/uxs-datalist-item';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  and,
  bool,
  not
} from '@ember/object/computed';

export default Component.extend(BEMComponent, Testable, {
  base: 'uxs-datalist__item',
  layout,
  empty: 'N/A',
  // Computed
  hasLabel: bool('label'),
  hasValue: bool('value'),
  hasEmpty: and('isNull', 'empty'),
  hasTip: bool('tip'),
  isNull: not('hasValue'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['bordered']);
  },
});