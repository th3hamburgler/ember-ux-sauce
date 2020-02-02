import Component from '@ember/component';
import layout from '../../templates/components/uxs-snackbar/action';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';

export default Component.extend(BEMComponent, Clickable, Testable, {
  // Attributes
  base: 'uxs-snackbar__action',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([]);
  },
}).reopenClass({
  positionalParams: ['text']
});