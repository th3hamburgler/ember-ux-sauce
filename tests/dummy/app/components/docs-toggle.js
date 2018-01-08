import Component from '@ember/component';

export default Component.extend({
  // Arguments
  tagName: 'button',
  // Events
  click() {
    this.toggleProperty('value');
  }
});
