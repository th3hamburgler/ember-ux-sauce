import Controller from '@ember/controller';

export default Controller.extend({
  // Attributes
  text: 'The Button',
  disabled: false,
  inline: false,
  loading: false,
  mini: false,
  naked: false,
  name: 'my-button',
  selected: false,
  style: 'primary',
  // Actions
  // BEGIN-SNIPPET button-action
  actions: {
    submit(name) {
      alert(`"${name}" has been hit!`);
    },
  },
  // END-SNIPPET
});
