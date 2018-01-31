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
  showSubheading: computed('text', function() {
    let text = get(this, 'text'),
      currentValue = get(this, 'subheadingState.value');

    if (text !== currentValue) {
      set(this, 'subheadingState.value', text);
      return true;
    }
  }),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['bordered', ]);
  },
});

Subheading.reopenClass({
  positionalParams: ['text'],
});

export default Subheading;