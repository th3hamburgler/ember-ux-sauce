import LinkComponent from '@ember/routing/link-component';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import layout from '../templates/components/uxs-list-link-item';
import {
  equal
} from '@ember/object/computed';
import {
  computed,
  get
} from '@ember/object';
import {
  isEmpty
} from '@ember/utils';

export default LinkComponent.extend(BEMComponent, Testable, {
  base: 'uxs-list-item',
  layout,
  // Computed
  parentStyle: computed('style', function() {
    const style = get(this, 'style');
    if (!isEmpty(style)) {
      return `parent-${style}`;
    }
  }),
  hasOneLine: equal('lines', 1),
  hasTwoLines: equal('lines', 2),
  hasThreeLines: equal('lines', 3),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'bordered',
      '*style',
      'hasOneLine:one-line',
      'hasTwoLines:two-lines',
      'hasThreeLines:three-lines',
    ]);
  },
});