import Component from '@ember/component';
import {
  set
} from '@ember/object';

export default Component.extend({
  disabled: false,
  rounded: true,
  size: 'small',
  init() {
    this._super(...arguments);
    set(this, 'styles', ['primary', 'accent', 'warning', 'error', 'light', 'mid', 'grey', 'dark']);
  },
});