import Component from '@ember/component';
import layout from '../templates/components/uxs-content';
import Textable from '../mixins/textable';

const Content = Component.extend(Textable, {
  base: 'content',
  layout,
});

Content.reopenClass({
  positionalParams: ['text'],
});

export default Content;