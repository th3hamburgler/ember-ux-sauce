import Component from '@ember/component';
import layout from '../templates/components/uxs-subheading';
import Textable from '../mixins/textable';

const Subheading = Component.extend(Textable, {
  base: 'subheading',
  layout,
});

Subheading.reopenClass({
  positionalParams: ['text'],
});

export default Subheading;