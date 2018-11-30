import Component from '@ember/component';
import EmberObject from '@ember/object';
import {
  computed
} from '@ember/object';

export default Component.extend({
  style: "light",
  // Computed
  model: computed(function() {
    return new EmberObject({
      meta: {
        size: 25,
        page: 2,
        total: 250,
      }
    });
  }),
  // Actions
  // BEGIN-SNIPPET pagination-basic-demo.js
  actions: {
    paginateResults(pagination) {
      window.alert(`page = ${pagination.page},  size = ${pagination.size}`);
    }
  }
  // END-SNIPPET
});