import Controller from '@ember/controller';
/* SNIPPET BEGIN form-validation-controller */
export default Controller.extend({
  actions: {
    login(model) {
      window.alert(`Login ${model.username}`);
    },
  },
});
/* SNIPPET END */