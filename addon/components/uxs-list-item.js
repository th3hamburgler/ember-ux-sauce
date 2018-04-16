import Component from '@ember/component';
import layout from '../templates/components/uxs-list-item';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';
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

export default Component.extend(BEMComponent, Clickable, Testable, {
  base: 'uxs-list-item',
  layout,
  // Computed
  contrastStyle: computed('style', function() {
    const style = get(this, 'style');
    if (!isEmpty(style)) {
      if (['mid', 'light', 'white'].indexOf(style) !== -1) {
        Ember.Logger.log('dark ' + style);
        return 'dark';
      } else {
        Ember.Logger.log('white ' + style);
        return 'white';
      }
      Ember.Logger.log('empty ' + style);
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