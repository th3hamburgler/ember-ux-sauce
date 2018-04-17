import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  // Attributes
  type: null,
  style: null,
  padded: true,
  // Computed
  styles: computed(function() {
    return [
      'primary',
      'accent',
      'dark',
      'grey',
      'mid',
      'light',
      'white',
      'success',
      'warning',
      'error',
    ];
  }),
});