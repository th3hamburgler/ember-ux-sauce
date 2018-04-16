import Component from '@ember/component';
import layout from '../templates/components/uxs-list';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';

export default Component.extend(BEMComponent, Testable, {
  base: 'uxs-list',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'bordered',
      '*style'
    ]);
  },
  /**
   * Init any property defaults
   */
  getDefaultProps() {
    return {
      style: 'white',
    };
  },
});