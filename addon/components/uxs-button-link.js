import Ember from 'ember';
import layout from '../templates/components/uxs-button-link';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';

const {
  computed: {
    alias,
  },
  LinkComponent,
} = Ember;

export default LinkComponent.extend(Buttonable, {
  // Attributes
  layout,
  role: 'link',
  // Computed
  text: alias('linkTitle'),
});
