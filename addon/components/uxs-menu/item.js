import Component from '@ember/component';
import layout from '../../templates/components/uxs-menu/item';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Styleable from 'ember-ux-sauce/mixins/styleable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  computed
} from '@ember/object';
import {
  get,
  set
} from '@ember/object';

const NavItem = Component.extend(BEMComponent, Clickable, Styleable, Testable, {
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

NavItem.reopenClass({
  positionalParams: ['textLabel']
});

export default NavItem;