import Controller from '@ember/controller';

export default Controller.extend({
  // Attributes
  icon: 'check',
  style: 'primary',
  disabled: false,
  size: 'small',
  // Actions
  // BEGIN-SNIPPET icon-actions
  actions: {
    save(icon) {
      alert(`icon "${icon}" has been hit!`);
    },
  },
  // END-SNIPPET
});