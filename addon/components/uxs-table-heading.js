import Component from '@ember/component';
import layout from '../templates/components/uxs-table-heading';
import Textable from '../mixins/textable';

const Heading = Component.extend(Textable, {
  base: 'uxs-table__heading',
  layout,
  tagName: 'th',
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['highlight', 'small', 'numeric', 'section']);
  },
});

Heading.reopenClass({
  positionalParams: ['text'],
});

export default Heading;