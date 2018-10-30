import Component from '@ember/component';
import layout from '../templates/components/uxs-table-cell';
import Textable from '../mixins/textable';

const Cell = Component.extend(Textable, {
  base: 'uxs-table__cell',
  layout,
  tagName: 'td',
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['highlight', 'small', 'numeric', 'section', 'record']);
  },
});

Cell.reopenClass({
  positionalParams: ['text'],
});

export default Cell;