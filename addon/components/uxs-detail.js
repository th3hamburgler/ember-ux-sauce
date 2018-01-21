import Component from '@ember/component';
import layout from '../templates/components/uxs-detail';
import Textable from '../mixins/textable';

const Detail = Component.extend(Textable, {
  base: 'detail',
  layout,
});

Detail.reopenClass({
  positionalParams: ['text'],
});

export default Detail;