import Component from '@ember/component';
import layout from '../templates/components/uxs-heading';
import Textable from '../mixins/textable';

/**
  A typographic component to render heading text

  ```hbs
  {{uxs-heading "Lorem ipsum dolar"}}

  {{#uxs-heading}}Lorem ipsum dolar"{{/uxs-heading}}
  ```

  @class UXSHeading
*/
export default Component.extend(Textable, {
  //
  // Properties
  // ---------
  /**
    The BEM base name for this component: "heading"

    @property base
    @type     String
    @default  "heading"
    @public
   */
  base: 'heading',

  /**
    The test selector name defines the name of the [data-test-*] attribute binding<br/>
    _Default is "heading"_

    @property testSelectorName
    @default  true
    @type     String
    @public
  */

  /**
    The base property is used as the value for test selectors.<br/>
    _Default is the value of "name"

    @property testSelectorValue
    @default  true
    @type     String
    @public
  */

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
    The text to be rendered inside this component<br>
    _This can be passed in as the first positional parameter_

    @argument text*
    @type String
  */
  text: '',
  //
  // Methods
  // -------
  init() {
    this._super(...arguments);
    this.registerModifiers(['giant', 'huge']);
  },
}).reopenClass({
  positionalParams: ['text'],
});