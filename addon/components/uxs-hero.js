import Component from '@ember/component';
import layout from '../templates/components/uxs-hero';
import Textable from '../mixins/textable';

export default Component.extend(Textable, {
  base: 'uxs-hero',
  layout,
});