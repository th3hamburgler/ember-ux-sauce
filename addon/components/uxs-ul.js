import Component from '@ember/component';
import layout from '../templates/components/uxs-ul';
import Textable from '../mixins/textable';

export default Component.extend(Textable, {
  base: 'uxs-ul',
  layout,
  tagName: 'ul',
});