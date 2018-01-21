import Component from '@ember/component';
import layout from '../templates/components/uxs-ol';
import Textable from '../mixins/textable';

export default Component.extend(Textable, {
  base: 'uxs-ol',
  layout,
  tagName: 'ol',
});