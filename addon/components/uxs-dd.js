import Component from '@ember/component';
import layout from '../templates/components/uxs-dd';
import Textable from '../mixins/textable';

const Content = Component.extend(Textable, {
  base: 'uxs-dl__description',
  layout,
  tagName: 'dd',
});

Content.reopenClass({
  positionalParams: ['text'],
});

export default Content;