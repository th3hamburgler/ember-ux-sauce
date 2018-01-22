import Component from '@ember/component';
import layout from '../templates/components/uxs-heading';
import Textable from '../mixins/textable';

const Heading = Component.extend(Textable, {
  base: 'heading',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['giant', 'huge']);
  },
});

Heading.reopenClass({
  positionalParams: ['text'],
});

export default Heading;