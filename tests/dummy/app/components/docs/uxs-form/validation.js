import Component from '@ember/component';

export default Component.extend({
  actions: {
    login(model) {
      window.alert(`Login ${model.username}`);
    },
  },
});