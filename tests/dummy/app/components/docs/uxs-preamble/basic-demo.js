import Component from '@ember/component';

export default Component.extend({
  disabled: false,
  style: null,
  // BEGIN-SNIPPET preamble-basic-demo.js
  actions: {
    preamblePressed() {
      window.alert(`Preamble hit!`);
    },
  },
  // END-SNIPPET
});