import Component from '@ember/component';
import layout from '../templates/components/uxs-navbar';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

export default Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-navbar',
  layout,
  // Methods
  init() {
    this.registerModifiers(['fixed'])
    this._super(...arguments);
  },
  getDefaultProps() {
    return {
      title: 'AppName',
    };
  },
});