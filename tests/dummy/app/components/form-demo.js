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
  // Actions
  actions: {
    save() {
      window.console.log('Submit Form');
    },
  },
});