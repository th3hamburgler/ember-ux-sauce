import Component from '@ember/component';
import layout from '../templates/components/uxs-text';
import Textable from '../mixins/textable';
import {
  set
} from '@ember/object';
import {
  PropTypes
} from 'ember-prop-types';

/**
  A typographic component to render text

  ```hbs
  {{uxs-text "Lorem ipsum dolar"}}

  {{#uxs-text}}Lorem ipsum dolar"{{/uxs-text}}
  ```

  @class Text
*/
export default Component.extend(Textable, {
  //
  // Properties
  // ---------
  /**
    The BEM base name for this component: "uxs-heading"

    @property base
    @type     String
    @default  "uxs-text"
    @public
   */
  base: 'uxs-text',

  /**
    The test selector name defines the name of the [data-test-*] attribute binding<br/>
    _Default is "text"_

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
    @type     String
  */
  align: null,

  /**
  The name of the component. This property also defaults to the value for test selectors.<br/>

  The default is true, which ensures the test selector is added. If set to false the test selector is not rendered.

    @argument name
    @type     Boolean|String
  */

  /**
    Adds a style modifier to the component. Standard options are "white", "light", "mid", "grey", "dark", "primary", "accent", "success", "warning"  or "error". Defaults to no style (inheret)
    Default values will set the text color.

    @argument size
    @type String
  */

  /**
    Adds a style modifier to the component. Standard options are "white", "light", "mid", "grey", "dark", "primary", "accent", "success", "warning"  or "error". Defaults to no style (inheret)
    Default values will set the text color.

    @argument style
    @type String
  */

  /**
    The text weight, "light", "normal", "bold" or "heavy". Defaults to null (inheret)

    @argument weight
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
    this.registerModifiers([
      '*size',
      '*weight',
    ]);

    set(this, 'propTypes', {
      size: PropTypes.string,
      style: PropTypes.string,
      weight: PropTypes.string,
    });
  },
  getDefaultProps() {
    return {
      size: '',
      style: '',
      weight: '',
    };
  },
}).reopenClass({
  positionalParams: ['text'],
});