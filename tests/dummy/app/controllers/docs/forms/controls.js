import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  // Attributes
  disabled: false,
  label: 'Username',
  type: 'textarea',
  value: 'foo',
  tip: 'This is a hint',
  warning: '',
  error: '',
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