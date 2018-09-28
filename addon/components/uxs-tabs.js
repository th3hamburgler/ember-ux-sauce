import Component from '@ember/component';
import layout from '../templates/components/uxs-tabs';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
/**
  A component to render a tab menu

  ```hbs
  {{#uxs-tabs style=style as |tab|}}
    {{tab.link "Dog" "foo"}}
    {{tab.link "Cat" "bar"}}
    {{tab.item "fish" "foo" onClick(action "foobar")}}
  {{/uxs-tabs}}
  ```
  @class UXS Tabs
  @public
  @yield {Hash} tab
  @yield {Component} tab.link
  @yield {Component} tab.item
*/
export default Component.extend(BEMComponent, Testable, {
  // Attributes
  /**
    The base css class name 'uxs-tabs'

    @field base
    @type String
   */
  base: 'uxs-tabs',
  layout,
  // Arguments
  /**
    Set the alignment of the tabs items.

    UXS ships with three align options: left, center (default) & right

    @argument align
    @type     String
    @default  "center"
    @public
   */
  align: 'center',
  /**
    Set to true to disable the whole tab menu.

    This will activate it's disabled style and also prevent any actions from being fired and links working.

    @argument disabled
    @type     Boolean
    @default  false
    @public
   */
  disabled: false,
  /**
    Set the style of the tab menu.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-tabs--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  style: null,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*align',
      'disabled',
      '*style',
    ]);
  },
});