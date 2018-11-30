import Component from '@ember/component';
import layout from '../templates/components/uxs-navbar';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  computed,
  get
} from '@ember/object';
import {
  isEmpty
} from '@ember/utils';

/**
  A component to render a navigation bar

  ```hbs
  {{#uxs-navbar as |bar|}}
    {{#bar.menu as |nav|}}
      {{nav.item "Home"}}
      {{nav.item "Account"}}
      {{nav.item "Logout"}}
    {{/bar.menu}}
  {{/uxs-navbar}}
  ```
  @class UXS Navbar
  @public
  @yield {Hash} bar
  @yield {Component} bar.logo
  @yield {Component} bar.menu
  @yield {Component} bar.mobileNav
  @yield {Component} bar.desktopNav
*/
export default Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-navbar',
  layout,
  /**
    Define the menu icon that will toggle the offscreen menu

    @argument toggleIcon
    @type     string
    @default  "menu"
    @public
   */
  toggleIcon: 'menu',
  // Computed
  parentStyle: computed('style', function() {
    const style = get(this, 'style');
    if (!isEmpty(style)) {
      return `parent-${style}`;
    }
  }),
  // Methods
  init() {
    this.registerModifiers(['fixed', '*style'])
    this._super(...arguments);
  },
  getDefaultProps() {
    return {
      title: 'AppName',
      style: 'dark',
    };
  },
});