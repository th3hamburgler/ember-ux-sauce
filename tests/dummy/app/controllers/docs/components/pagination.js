import Controller from '@ember/controller';

export default Controller.extend({
  // Actions
  // BEGIN-SNIPPET pagination
  actions: {
    paginateResults(pagination) {
      window.alert(`page = ${pagination.page},  size = ${pagination.size}`);
    }
  }
  // END-SNIPPET
});