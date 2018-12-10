import Component from '@ember/component';
import layout from '../templates/components/uxs-preamble';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import Styleable from 'ember-ux-sauce/mixins/styleable';
import Clickable from 'ember-ux-sauce/mixins/clickable';

/**
  This component can be used to display some key info to a user before the main content is displayed.

  ```hbs
  {{#uxs-preamble style=style class="mb" as |pre|}}
    {{pre.icon "date_range" prefix=true}}
    {{pre.content
      "This is a default preamble. Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent augue parturient aptent rhoncus parturient a aptent."
    }}
  {{/uxs-preamble}}
  ```
  @class UXS Preamble
  @public
  @yield {Hash} pre
  @yield {Component} pre.icon uxs-icon
  @yield {Component} pre.body uxs-div
  @yield {Component} pre.content uxs-content
*/
export default Component.extend(BEMComponent, Clickable, Styleable, Testable, {
  layout,
  //
  // Arguments
  // ---------
  /**
    The BEM base name for this component

    @argument base
    @type     String
    @default  "uxs-preamble"
    @public
   */
  base: 'uxs-preamble',
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
    The name of the action to fire on click
    @argument onClick
    @default  null
    @type     {string}
    @public
  */
  /**
    Set to true to disable the component.

    This will activate it's disabled style and also prevent any actions from being fired.

    @argument disabled
    @type     Boolean
    @default  false
    @public
   */
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style',
    ]);
  },
});