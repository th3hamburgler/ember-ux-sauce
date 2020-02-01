import LinkComponent from '@ember/routing/link-component';
import layout from '../../templates/components/uxs-list/item';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';

export default LinkComponent.extend(BEMComponent, Testable, {
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