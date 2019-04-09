import Component from '@ember/component';
import layout from '../templates/components/uxs-breadcrumb';
import Alignable from 'ember-ux-sauce/mixins/alignable';
import Styleable from 'ember-ux-sauce/mixins/styleable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

/**
  Display a navigation breadcrumb trail

  ```hbs
  {{#uxs-breadcrumb as |menu|}}
    {{menu.link "App" "app.home"}}
    {{menu.link "People" "app.people"}}
    {{menu.item "Jim"}}
  {{/uxs-breadcrumb}}
  ```

  @class UXSBreadcrumb
  @yield {Hash} crumb
  @yield {Component} crumb.item uxs-breadcrumb/item
  @yield {Component} crumb.link uxs-breadcrumb/link
*/
export default Component.extend(BEMComponent, Alignable, Styleable, Testable, {
  layout,
  //
  // Arguments
  // ---------
  /**
    The BEM base name for this component

    @argument base
    @type     String
    @default  "uxs-breadcrumb"
    @public
   */
  base: 'uxs-breadcrumb',
  /**
    Set the style of the component.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  /**
    The text align direction, "left", "center", "right" or "justified". Defaults to no alignment (inheret)

    @argument align
    @default  null
    @type     String
  */
  /**
    If set to true the menu items will be rendered small (detail) size

    @argument detail
    @default false
    @type Boolean
  */
  detail: false,
  // Methods
  init() {
    this.registerModifiers([
      'detail',
    ])
    this._super(...arguments);
  },
});