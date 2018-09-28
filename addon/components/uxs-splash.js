import Component from '@ember/component';
import layout from '../templates/components/uxs-splash';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

/**
  A component to render a splash component

  ```hbs
  {{#uxs-splash as |splash|}}
    {{splash.icon "inbox"}}
    {{splash.title "Inbox Zero"}}
    {{splash.text "Congratulations, you have no more email!"}}
  {{/uxs-splash}}
  ```
  @class UXS Splash
  @public
  @yield {Hash} splash
  @yield {Component} splash.icon
  @yield {Component} splash.title
  @yield {Component} splash.text
*/
export default Component.extend(BEMComponent, Testable, {
  // Attributes
  /**
    The base css class name 'uxs-splash'

    @field base
    @type String
   */
  base: 'uxs-splash',
  layout,
  // Arguments
  /**
    Set the alignment of the splash component.

    UXS ships with three align options: left, center (default) & right

    @argument align
    @type     String
    @default  "center"
    @public
   */
  align: 'center',
  /**
    Set the style of the splash component.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-splash--my-custom-style_

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
      '*style',
    ]);
  },
});