import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    login(model) {
      window.alert('Login')
      Ember.Logger.log(model);
    },
  },
});