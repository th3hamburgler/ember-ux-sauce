import Component from '@ember/component';
import layout from '../templates/components/uxs-table-row';
import Textable from '../mixins/textable';

export default Component.extend(Textable, {
  base: 'uxs-table__row',
  layout,
  tagName: 'tr',
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['section', 'highlight', 'record']);
  },
});