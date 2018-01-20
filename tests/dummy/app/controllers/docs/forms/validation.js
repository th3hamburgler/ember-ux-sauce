import Controller from '@ember/controller';
// BEGIN-SNIPPET form-validation
export default Controller.extend({
  actions: {
    login(model) {
      window.alert(`Login ${model.username}`);
    },
  },
});
// END-SNIPPET