import Component from '@ember/component';

export default Component.extend({
  disabled: false,
  truncated: false,
  text: "This is my notice, you can change it",
  style: null,
  // BEGIN-SNIPPET notice-basic-demo.js
  actions: {
    tapNotice() {
      window.alert(`Notice hit!`);
    },
  },
  // END-SNIPPET
});