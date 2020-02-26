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
  @yield {Component} bar.title
  @yield {Component} bar.spacer
  @yield {Component} bar.menu
  @yield {Component} bar.drawer
  @yield {Component} bar.drawerToggle
  @yield {Component} bar.modal
  @yield {Boolean} bar.isShowingDrawer
*/
export default Component.extend(BEMComponent, Testable, {
  /**
   The BEM base name for this component

   @argument base
   @type     String
   @default  'uxs-button'
   @public
   */
  base: 'uxs-nav-bar',
  /**
    Path to the component template file

    @property layout
    @type     String
    @private
    */
  layout,
  /**
   Set to true to fix the navbar to the top of the screen

   @argument fixed
   @type     Boolean
   @default  false
   @public
   */
  fixed: false,
  /**
   Set to true to display the nav drawer

   @argument isShowingDrawer
   @type     Boolean
   @default  false
   @public
   */
  isShowingDrawer: false,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['fixed']);
  },
  // Actions
  actions: {
    toggleDrawer() {
      this.toggleProperty('isShowingDrawer');
    },
  },
});