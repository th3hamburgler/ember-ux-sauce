import Component from '@ember/component';

export default Component.extend({
  icon: "save",
  // Actions
  // BEGIN-SNIPPET icon-action-demo.js
  actions: {
    save() {
      window.alert("Ola!");
    }
  }
  // END-SNIPPET
});