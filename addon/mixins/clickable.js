import Ember from 'ember';

const {
  Mixin
} = Ember;

export default Mixin.create({
  // Attributes
  role: 'button',
  // Actions
  click() {
    if (!this.get('disabled')) {
      this.sendAction('action', this);
    }
  },
});
