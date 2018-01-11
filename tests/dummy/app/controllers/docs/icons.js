import Controller from '@ember/controller';

export default Controller.extend({
  // Actions
  // BEGIN-SNIPPET icon-actions
  actions: {
    save(icon) {
      alert(`icon "${icon}" has been hit!`);
    },
  },
  // END-SNIPPET
});