import Component from '@ember/component';
import layout from '../../templates/components/uxs-dl/description';
import Textable from '../../mixins/textable';

/**
  A component to render definition list descriptions

  ```hbs
  {{uxs-dl/description "Item One"}}
  ```

  @class UXS DL/Item
  @public
*/
export default Component.extend(Textable, {
  /**
   The text align direction, 'left', 'center', 'right' or 'justified'.
   Defaults to no alignment (inheret from parents)

   @argument align
   @type     String
   @default  null
   @public
   */
  align: null,
  /**
   The BEM base name for this component

   @argument base
   @type     String
   @default  'uxs-dl__li'
   @public
   */
  base: 'uxs-dl__description',
  /**
    Adds a color modifier to the component.<br/>
    Standard options are 'white', 'light', 'mid', 'grey', 'dark', 'primary', 'accent', 'success', 'warning'  or 'error'.<br/>
    Defaults to no style (inheret from parents).

    @argument color
    @type String
    @public
    */
  color: null,
  /**
    Path to the component template file

    @property layout
    @type     String
    @private
    */
  layout,
  /**
    The name of the component.
    This property also used as the default value for the test selector attribute.<br/>
    The default is true, which ensures the test selector is added.<br/>
    If set to false the test selector is not rendered.

    @argument name
    @type     Boolean|String
    @public
    */
  name: true,
  /**
    Define the font-size of the component.<br/>
    Available scales are body-1 (16px) & body-2 (14px)<br/>
    Defaults to null (inherit font-size from parents)

    @argument scale
    @default null
    @type String
    @public
  */
  scale: null,
  /**
    The html tag name for the root of the component

    @argument  tagName
    @type       String
    @default    'ol'
    @public
    */
  tagName: 'dd',
  /**
    The text content of the component<br>
    This can be passed in as the 1st positional parameter

    @argument  tagName
    @type       String
    @default    'ol'
    @public
    */
  text: '',
  /**
    Set to true to truncate the text to one line

    @argument truncate
    @default null
    @type Boolean
    @public
  */
  truncate: false,
  /**
    Define the weight of the component.<br/>
    Standard options are 'bold', 'medium' or 'light'. Defaults to no weight (inhered)

    @argument weight
    @default null
    @type String
    @public
  */
  weight: null,
}).reopenClass({
  positionalParams: ['text'],
});