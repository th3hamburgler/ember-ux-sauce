import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  numberOfColumns: 24,

  columns: computed('numberOfColumns', function() {
    const columns = new Array();

    for (var i = 1; i <= this.numberOfColumns; i++) {
      columns.push(i);
    }
    return columns;
  }),

});