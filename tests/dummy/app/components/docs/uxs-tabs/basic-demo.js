import Component from '@ember/component';
import {
  set
} from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    set(this, 'align', 'center');
    set(this, 'disabled', false);
  },
  // Actions
  actions: {
    swimFish() {
      window.alert("Swim fishy, swim");
    }
  }
});