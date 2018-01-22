import Component from '@ember/component';
import layout from '../templates/components/uxs-pane';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

export default Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-window__pane',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'aside',
      'detail',
      'full',
      'index',
      'main',
      'single',
      'splash',
    ]);
  },
});