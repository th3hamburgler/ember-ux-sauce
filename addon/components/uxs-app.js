import Component from '@ember/component';
import layout from '../templates/components/uxs-app';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

export default Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-app',
  layout,
  init() {
    this._super(...arguments);
    this.registerModifiers(['fixedNav:has-fixed-navbar']);
  },
});