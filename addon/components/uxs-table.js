import Component from '@ember/component';
import layout from '../templates/components/uxs-table';
import Textable from '../mixins/textable';

export default Component.extend(Textable, {
  base: 'uxs-table',
  layout,
  tagName: 'table',
});