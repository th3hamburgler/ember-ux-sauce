import Component from '@ember/component';
import {
  set
} from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    set(this, 'bordered', true);
    set(this, 'title', 'My Subheading');
  },
});