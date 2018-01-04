import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  // Attributes
  text: 'Go to Patterns',
  disabled: false,
  inline: false,
  mini: false,
  naked: false,
  name: 'my-button',
  selected: false,
  style: 'primary',
});
