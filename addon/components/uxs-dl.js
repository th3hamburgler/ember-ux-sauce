import Component from '@ember/component';
import layout from '../templates/components/uxs-dl';
import Textable from '../mixins/textable';

export default Component.extend(Textable, {
  base: 'uxs-dl',
  layout,
  tagName: 'dl',
});