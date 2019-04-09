import Component from '@ember/component';
import {
  set
} from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    set(this, 'align', 'left');
    set(this, 'disabled', false);
  },
  // Actions
  actions: {
    sayHello() {
      window.alert("Mmmmmm, tasty");
    }
  }
});