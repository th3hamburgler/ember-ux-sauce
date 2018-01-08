import { alias } from '@ember/object/computed';
import LinkComponent from '@ember/routing/link-component';
import layout from '../templates/components/uxs-button-link';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';

export default LinkComponent.extend(Buttonable, {
  // Attributes
  layout,
  role: 'link',
  // Computed
  text: alias('linkTitle'),
});
