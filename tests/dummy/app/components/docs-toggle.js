import Ember from 'ember';
const {
  Component
} = Ember;

export default Component.extend({
  // Arguments
  tagName: 'button',
  // Events
  click() {
    this.toggleProperty('value');
  }
});
