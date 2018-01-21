import Component from '@ember/component';
import layout from '../templates/components/uxs-li';
import Textable from '../mixins/textable';

const Content = Component.extend(Textable, {
  base: 'uxs-li',
  layout,
  tagName: 'li',
});

Content.reopenClass({
  positionalParams: ['text'],
});

export default Content;