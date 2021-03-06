import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  size: 'medium',
  border: false,
  round: false,
  // Computed
  darkStyles: computed(function() {
    return [
      'primary',
      'accent',
      'dark',
      'grey',
      'success',
      'warning',
      'error',
    ];
  }),
  lightStyles: computed(function() {
    return [
      'mid',
      'light',
      'white',
    ];
  }),
});