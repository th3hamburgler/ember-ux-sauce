import Component from '@ember/component';
import layout from '../templates/components/uxs-list-item';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  equal
} from '@ember/object/computed';

export default Component.extend(BEMComponent, Testable, {
  base: 'uxs-list-item',
  layout,
  // Computed
  hasOneLine: equal('lines', 1),
  hasTwoLines: equal('lines', 2),
  hasThreeLines: equal('lines', 3),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'bordered',
      'hasOneLine:one-line',
      'hasTwoLines:two-lines',
      'hasThreeLines:three-lines',
    ]);
  },
  getDefaultProps() {
    return {
      lines: 1,
    };
  },
});