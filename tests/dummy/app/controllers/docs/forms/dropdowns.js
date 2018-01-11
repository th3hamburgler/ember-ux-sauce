import Controller from '@ember/controller';
import {
  set
} from '@ember/object';

export default Controller.extend({
  // Attributes
  name: 'Miguel',
  // Methods
  init() {
    this._super(...arguments);
    set(this, 'names', ['Stefan', 'Miguel', 'Tomster', 'Pluto']);
  },
  // Actions
  actions: {
    foo() {}
  }
});