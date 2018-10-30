import Component from '@ember/component';
import layout from '../templates/components/uxs-ol';
import Textable from '../mixins/textable';
/**
  A typographic component to render ordered lists

  ```hbs
  {#uxs-ol as |list|}}
    {{list.item "Item One"}}
    {{list.item "Item Two"}}
    {{#list.ol as |sublist|}}
      {{sublist.item "Item Three a"}}
      {{sublist.item "Item Three b"}}
    {{/list.ol}}
    {{list.item "Item Four"}}
  {{/uxs-ol}}
  ```

  @class UXSOL
  @public
  @yield {Hash} list
  @yield {Component} list.ol
  @yield {Component} list.ul
  @yield {Component} list.li
*/
export default Component.extend(Textable, {
  //
  // Properties
  // ---------
  /**
    The BEM base name for this component: "uxs-text"

    @property base
    @type     String
    @default  "uxs-text"
    @public
   */
  base: 'uxs-ol',

  //
  // Private
  // ---------
  /**
    The path to the handlbars template

    @property layout
    @type     String
    @private
   */
  layout,
  tagName: 'ol',
  //
  // Arguments
  // ---------

  /**
    The text align direction, "left", "center", "right" or "justified". Defaults to no alignment (inheret)

    @argument align
    @default  null
    @type     String
  */

  /**
    Adds a color modifier to the component. Standard options are "white", "light", "mid", "grey", "dark", "primary", "accent", "success", "warning"  or "error". Defaults to no style (inheret).

    @argument color
    @type String
  */

  /**
  The name of the component. This property also defaults to the value for test selectors.<br/>

  The default is true, which ensures the test selector is added. If set to false the test selector is not rendered.

    @argument name
    @type     Boolean|String
  */

  /**
    Adds a style modifier to the component. Standard options are "white", "light", "mid", "grey", "dark", "primary", "accent", "success", "warning"  or "error". Defaults to no style (inheret).

    @argument style
    @type String
  */

  /**
    Define the size of the component. Standard options are "giant", "huge", "large", "medium", "small", or "tiny". Defaults to no size (inhered)

    @argument size
    @default null
    @type String
  */

  /**
    Define the weight of the component. Standard options are "bold", "medium" or "light". Defaults to no weight (inhered)

    @argument weight
    @default null
    @type String
  */
});