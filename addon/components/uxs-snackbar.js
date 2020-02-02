import Component from '@ember/component';
import layout from '../templates/components/uxs-snackbar';
import Alignable from 'ember-ux-sauce/mixins/alignable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';

export default Component.extend(Alignable, BEMComponent, Testable, {
  // Attributes
  base: 'uxs-snackbar',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['fixedNav:has-fixed-navbar']);
  },
});