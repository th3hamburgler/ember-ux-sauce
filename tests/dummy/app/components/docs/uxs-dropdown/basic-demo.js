import Component from '@ember/component';
import {
  set
} from '@ember/object';

export default Component.extend({
  // Attributes
  name: 'Miguel',
  names: null,
  disabled: false,
  inline: false,
  placeholder: 'enter text',
  style: null,
  type: 'text',
  value: '',
  // Computed
  init() {
    this._super(...arguments);
    set(this, 'nameOptions', ['Stefan', 'Miguel', 'Tomster', 'Pluto']);
    set(this, 'names', ['Miguel', 'Pluto']);
  },
  // Actions
  actions: {
    select() {}
  }
});