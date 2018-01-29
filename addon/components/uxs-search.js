import Component from '@ember/component';
import layout from '../templates/components/uxs-search';
// import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  set
} from '@ember/object';

export default Component.extend(BEMComponent, {
  // Attributes
  base: 'uxs-search',
  closeIcon: 'close',
  layout,
  searchIcon: 'search',
  tagName: '',
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['showSearch:open']);
  },
  // Actions
  actions: {
    openSearch() {
      set(this, 'showSearch', true);
    },
    closeSearch() {
      set(this, 'showSearch', false);
    }
  }
});