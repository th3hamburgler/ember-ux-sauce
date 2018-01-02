import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  // Attributes
  text: 'The Button',
  disabled: false,
  inline: false,
  mini: false,
  naked: false,
  selected: false,
  style: 'primary',
  // Actions
  // BEGIN-SNIPPET button-action
  actions: {
    submit(button) {
      alert(`${button.get('text')} has been hit!`);
    },
  },
  // END-SNIPPET
});
