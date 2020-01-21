import LinkComponent from '@ember/routing/link-component';
import layout from '../templates/components/uxs-link-to';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

export default LinkComponent.extend(Accessible, BEMComponent, Testable, {
  layout,
  base: 'uxs-link'
});