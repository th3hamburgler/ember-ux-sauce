import Route from '@ember/routing/route';

export default Route.extend({
  /* SNIPPET BEGIN form-validation-route */
  model: function() {
    return this.store.createRecord('session');
  },
  /* SNIPPET END */
});