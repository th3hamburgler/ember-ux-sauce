import Component from '@ember/component';
import layout from '../templates/components/uxs-caption';
import Textable from '../mixins/textable';

/**
  A typographic component to render caption text

  ```hbs
  {{uxs-caption "Lorem ipsum dolar"}}

  {{#uxs-caption}}Lorem ipsum dolar"{{/uxs-caption}}
  ```

  @class UXS Caption
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
   @default  'uxs-ol'
   @public
   */
  base: 'uxs-caption',
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
    The html tag name for the root of the component

    @argument  tagName
    @type       String
    @default    'ol'
    @public
    */
  tagName: 'p',
  /**
    Set to true to truncate the text to one line

    @argument truncate
    @type Boolean
    @default null
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