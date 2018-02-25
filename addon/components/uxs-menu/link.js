import LinkComponent from '@ember/routing/link-component';
import layout from '../../templates/components/uxs-menu/link';
import Styleable from 'ember-ux-sauce/mixins/styleable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  computed,
  get,
  set
} from '@ember/object';

export default LinkComponent.extend(BEMComponent, Styleable, Testable, {
  // Attributes
  base: 'uxs-menu__item',
  layout,
  // Computed
  showRightIcon: computed('hasRightIcon', 'rightIcon', 'hasSecondaryText', 'secondaryText', function() {
    return get(this, 'hasRightIcon') || get(this, 'rightIcon') || get(this, 'hasSecondaryText') || get(this, 'secondaryText');
  }),
  showLeftIcon: computed('hasLeftIcon', 'leftIcon', function() {
    return get(this, 'hasLeftIcon') || get(this, 'leftIcon');
  }),
  // Methods
  init() {
    this.registerModifiers([
      'detail',
      'horizontal',
    ])
    this._super(...arguments);
  },
  click() {
    this._super(...arguments);
    if (get(this, 'showingModal') === true) {
      set(this, 'showingModal', false);
    }
  },
});