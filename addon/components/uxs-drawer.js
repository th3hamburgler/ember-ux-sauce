import Component from '@ember/component';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-drawer';
/**
  A component to render a navigation bar

  ```hbs
  {{#uxs-drawer as |drawer|}}
    {{#drawer.header}}
      {{drawer.title "Foo"}}
      {{drawer.text "Bar"}}
    {{/drawer.header}}
    {{drawer.divider}}
    {{#drawer.menu as |menu|}}
      ...
    {{/drawer.menu}}
    {{drawer.spacer}}
  {{/uxs-drawer}}
  ```
  @class UXS Drawer
  @public
  @yield {Hash} drawer
  @yield {Component} drawer.header
  @yield {Component} drawer.title
  @yield {Component} drawer.text
  @yield {Component} drawer.drawer
  @yield {Component} drawer.spacer
  @yield {Component} drawer.menu
*/
export default Component.extend(BEMComponent, Testable, {
  /**
   The BEM base name for this component

   @argument base
   @type     String
   @default  'uxs-button'
   @public
   */
  base: 'uxs-drawer',
  /**
    Path to the component template file

    @property layout
    @type     String
    @private
    */
  layout,
  /**
   Set the style of this drawer. Available options are:
   - standard
   - modal
   - bottom

   @argument style
   @type     String
   @default  'standard'
   @public
   */
  style: 'standard',
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['*style']);
  },
});