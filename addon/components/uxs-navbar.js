import Component from '@ember/component';
import layout from '../templates/components/uxs-navbar';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  computed,
  get
} from '@ember/object';
import {
  isEmpty
} from '@ember/utils';

export default Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-navbar',
  layout,
  toggleIcon: 'menu',
  // Computed
  parentStyle: computed('style', function() {
    const style = get(this, 'style');
    if (!isEmpty(style)) {
      return `parent-${style}`;
    }
  }),
  // Methods
  init() {
    this.registerModifiers(['fixed', '*style'])
    this._super(...arguments);
  },
  getDefaultProps() {
    return {
      title: 'AppName',
      style: 'dark',
    };
  },
});