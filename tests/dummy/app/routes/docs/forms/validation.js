import Route from '@ember/routing/route';

export default Route.extend({
  // BEGIN-SNIPPET form-validation-route
  model: function() {
    return this.store.createRecord('session');
  },
  // END-SNIPPET
});