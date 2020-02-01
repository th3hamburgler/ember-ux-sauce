import Component from '@ember/component';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-nav-bar';
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
  @class UXS Nav Bar
  @public
  @yield {Hash} bar
  @yield {Component} bar.logo
  @yield {Component} bar.menu
  @yield {Component} bar.mobileNav
  @yield {Component} bar.desktopNav
*/
export default Component.extend(BEMComponent, Testable, {
  // Properties
  base: 'uxs-nav-bar',
  layout,
  fixed: false,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['fixed']);
  },
});