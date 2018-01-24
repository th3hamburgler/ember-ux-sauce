import Component from '@ember/component';
import layout from '../templates/components/uxs-nav-item';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

const NavItem = Component.extend(BEMComponent, Clickable, Testable, {
  // Attributes
  base: 'uxs-nav__item',
  layout,
});

NavItem.reopenClass({
  positionalParams: ['textLabel']
});

export default NavItem;