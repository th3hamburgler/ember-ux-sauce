import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  // Computed
  handleTip: computed('model.handle', function() {
    const len = this.model.handle.length;
    return `${len}/32`;
  }),
  // Methods
  init() {
    this._super(...arguments);
    this.set('animalOptions', ['Cat', 'Cow', 'Dog', 'Fish', 'Hamster', 'Horse', 'Pig', 'A really really long option name that will need truncating']);
  },
  // Actions
  actions: {
    save() {
      window.console.log('Submit Form');
    },
    setDate(date, format) {
      window.console.log(date, format);
      this.model.set('dob', format);
    }
  },
});