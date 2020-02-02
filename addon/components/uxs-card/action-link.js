import LinkComponent from '@ember/routing/link-component';
import layout from '../../templates/components/uxs-card/action-link';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';

export default LinkComponent.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-card__action',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([]);
  },
});