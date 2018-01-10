import Controller from '@ember/controller';

export default Controller.extend({
  // Attributes
  disabled: false,
  label: 'Username',
  type: 'textarea',
  value: 'foo',
  tip: 'This is a hint',
  warning: '',
  error: '',
});