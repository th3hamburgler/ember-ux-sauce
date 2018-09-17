import Component from '@ember/component';

export default Component.extend({
  // BEGIN-SNIPPET button-action-demo
  actions: {
    buttonPressed(name) {
      alert(`A button called "${name}" has been hit!`);
    },
  },
  // END-SNIPPET
});