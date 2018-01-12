import Controller from '@ember/controller';
import {
  set
} from '@ember/object';

export default Controller.extend({
  // Attributes
  disabled: false,
  title: 'Ms',
  firstName: 'Frida',
  lastName: 'Wardlaw',
  // Methods
  init() {
    this._super(...arguments);
    set(this, 'titles', ['Mr', 'Mrs', 'Ms', 'Mx']);
  },
});