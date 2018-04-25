import Component from '@ember/component';
import layout from '../templates/components/uxs-list';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  computed,
  get
} from '@ember/object';
import {
  isEmpty
} from '@ember/utils';

export default Component.extend(BEMComponent, Testable, {
  base: 'uxs-list',
  layout,
  // Computed
  parentStyle: computed('style', function() {
    const style = get(this, 'style');
    if (!isEmpty(style)) {
      return `parent-${style}`;
    }
  }),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'bordered',
      '*style'
    ]);
  },
  /**
   * Init any property defaults
   */
  getDefaultProps() {
    return {
      style: 'white',
      bordered: false,
      lines: 1,
    };
  },
});