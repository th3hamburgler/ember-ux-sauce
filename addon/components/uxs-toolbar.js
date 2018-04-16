import Component from '@ember/component';
import layout from '../templates/components/uxs-toolbar';
import Textable from '../mixins/textable';

export default Component.extend(Textable, {
  base: 'uxs-toolbar',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style'
    ]);
  },
});