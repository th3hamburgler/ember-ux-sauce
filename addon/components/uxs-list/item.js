import Component from '@ember/component';
import layout from '../../templates/components/uxs-list/item';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';

export default Component.extend(BEMComponent, Clickable, Testable, {
  // Properties
  base: 'uxs-list__item',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'bordered',
      '*style',
    ]);
  }
});