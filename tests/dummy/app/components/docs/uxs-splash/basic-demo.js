import Component from '@ember/component';
import {
  set
} from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    set(this, 'align', 'center');
  },
});