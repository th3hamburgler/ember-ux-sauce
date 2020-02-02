import Component from '@ember/component';
import layout from '../../templates/components/uxs-snackbar/item';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';

export default Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-snackbar__item',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([]);
  },
});