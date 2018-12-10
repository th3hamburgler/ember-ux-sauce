import Component from '@ember/component';

export default Component.extend({
  disabled: false,
  truncated: false,
  style: null,
  // BEGIN-SNIPPET notice-button-demo.js
  actions: {
    closeNotice() {
      window.alert(`Close notice!`);
    },
  },
  // END-SNIPPET
});