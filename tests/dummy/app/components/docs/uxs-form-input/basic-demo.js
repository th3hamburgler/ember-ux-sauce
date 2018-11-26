import Component from '@ember/component';

export default Component.extend({
  // Attributes
  disabled: false,
  inline: false,
  placeholder: 'enter text',
  style: null,
  type: 'text',
  value: '',
  // Actions
  // BEGIN-SNIPPET form-input-basic-demo
  actions: {
    enterPressed(value) {
      window.alert(`${value} entered`);
    }
  }
  // END-SNIPPET
});