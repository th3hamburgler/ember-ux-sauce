import Component from '@ember/component';
import EmberObject from '@ember/object';
import styles from '../../../utils/consts/styles';
import {
  computed
} from '@ember/object';

export default Component.extend({
  styles: styles,
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
  // BEGIN-SNIPPET pagination-all-styles-demo.js
  actions: {
    paginateResults(pagination) {
      window.alert(`page = ${pagination.page},  size = ${pagination.size}`);
    }
  }
  // END-SNIPPET
});