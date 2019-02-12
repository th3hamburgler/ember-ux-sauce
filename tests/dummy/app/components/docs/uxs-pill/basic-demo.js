import Component from '@ember/component';

export default Component.extend({
  disabled: false,
  rounded: true,
  text: "my pill",
  style: null,
  size: 'small',
  // BEGIN-SNIPPET pill-basic-demo.js
  actions: {
    tapPill() {
      window.alert(`Pill hit!`);
    },
  },
  // END-SNIPPET
});