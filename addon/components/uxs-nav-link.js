import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import LinkComponent from '@ember/routing/link-component';

export default LinkComponent.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-nav__item',
});