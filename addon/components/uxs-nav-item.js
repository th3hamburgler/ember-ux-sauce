import Component from '@ember/component';
import layout from '../templates/components/uxs-nav-item';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  computed
} from '@ember/object';
import {
  get
} from '@ember/object';

const NavItem = Component.extend(BEMComponent, Clickable, Testable, {
  // Attributes
  base: 'uxs-nav__item',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['disabled']);
  },
  // Computed
  showRightIcon: computed('hasRightIcon', 'rightIcon', 'hasSecondaryText', 'secondaryText', function() {
    return get(this, 'hasRightIcon') || get(this, 'rightIcon') || get(this, 'hasSecondaryText') || get(this, 'secondaryText');
  }),
  showLeftIcon: computed('hasLeftIcon', 'leftIcon', function() {
    return get(this, 'hasLeftIcon') || get(this, 'leftIcon');
  }),
});

NavItem.reopenClass({
  positionalParams: ['textLabel']
});

export default NavItem;