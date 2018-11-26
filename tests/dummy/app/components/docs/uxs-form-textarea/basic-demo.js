import Component from '@ember/component';

export default Component.extend({
  // Attributes
  disabled: false,
  cols: null,
  rows: 4,
  inline: false,
  placeholder: 'enter text',
  style: null,
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