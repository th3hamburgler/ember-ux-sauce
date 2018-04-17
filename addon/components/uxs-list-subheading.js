import Component from '@ember/component';
import layout from '../templates/components/uxs-list-subheading';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  inject as service
} from '@ember/service';
import {
  computed
} from '@ember/object';
import {
  get,
  set
} from '@ember/object';

const Subheading = Component.extend(BEMComponent, {
  // Service
  subheadingState: service('uxs-list-subheading-cache'),
  // Attributes
  base: 'uxs-list__subheading',
  layout,
  tagName: '',
  // Computed
  showSubheading: computed('text', 'sort', function() {
    let text = get(this, 'text'),
      sort = get(this, 'sort'),
      currentValue = get(this, 'subheadingState.value'),
      currentSort = get(this, 'subheadingState.sort');

    if (text !== currentValue || sort !== currentSort) {
      set(this, 'subheadingState.value', text);
      set(this, 'subheadingState.sort', sort);
      return true;
    }
  }),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['bordered', '*style']);
  },
});

Subheading.reopenClass({
  positionalParams: ['text', 'sort'],
});

export default Subheading;