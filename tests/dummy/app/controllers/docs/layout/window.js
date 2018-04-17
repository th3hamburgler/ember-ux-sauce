import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';

export default Controller.extend({
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