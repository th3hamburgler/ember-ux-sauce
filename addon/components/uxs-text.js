import Component from '@ember/component';
import layout from '../templates/components/uxs-text';
import Textable from '../mixins/textable';
import {
  computed
} from '@ember/object';

/**
  A typographic component to render text

  ```hbs
  {{uxs-text "Lorem ipsum dolar" "headline-3"}}

  {{#uxs-text type="overline"}}Lorem ipsum dolar"{{/uxs-text}}
  ```

  @class UXS Text
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
  base: computed('type', function() {
    if (this.type) {
      return `uxs-${this.type}`;
    }
    return 'uxs-body-1';
  }),
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
  scale: 1,
  /**
    The html tag name for the root of the component

    @argument  tagName
    @type       String
    @default    'ol'
    @public
    */
  tagName: 'div',
  /**
    Set to true to truncate the text to one line

    @argument truncate
    @type Boolean
    @default null
    @public
  */
  truncate: false,
  /**
    Set to the name of the type scale you want to render.
    Available types are:<br>
    - headline-1~6<br>
    - subtitle-1~2<br>
    - body-1~2<br>
    - caption<br>
    - overline<br>
    - button

    @argument type
    @type     String
    @default  'body-1'
    @public
  */
  type: 'body-1',
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
  positionalParams: ['text', 'type'],
});