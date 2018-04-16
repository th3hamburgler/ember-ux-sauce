import Component from '@ember/component';
import layout from '../templates/components/uxs-header';
import Textable from '../mixins/textable';

export default Component.extend(Textable, {
  base: 'uxs-header',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'image:with-image',
      '*style'
    ]);
  },
  /**
   * Init any property defaults
   */
  getDefaultProps() {
    return {
      style: 'primary',
    };
  },
});