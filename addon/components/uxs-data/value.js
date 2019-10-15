import Component from '@ember/component';
import Datable from 'ember-ux-sauce/mixins/datable';
import Groupable from 'ember-ux-sauce/mixins/groupable';
import Testable from 'ember-ux-sauce/mixins/testable';
import Textable from 'ember-ux-sauce/mixins/textable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../../templates/components/uxs-data/value';
import {
  computed
} from '@ember/object';
import {
  isEmpty
} from '@ember/utils';

/**
  A component to render a data value

  ```hbs
  {{#uxs-data/value "My Value"}}
  ```
  @class UXS Data Value
  @public
*/
export default Component.extend(BEMComponent, Datable, Groupable, Testable, Textable, {

  //
  // Arguments
  // ---------

  /**
    The base css class name that the BEM Component
    mixin will use.
    @property base
    @type     String
   */
  base: 'uxs-data__value',

  /**
    The text align direction, "left", "center", "right" or "justified". Defaults to no alignment (inheret)

    @argument align
    @default  null
    @type     String
    @see      alignable
    @public
  */

  /**
    Set the color the components text.

    UXS ships with the following stock colors: primary, accent, warning, error, dark, grey, mid, light & white. More can be added to the $defaultColors array.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _--my-custom-style_

    @argument color
    @default  null
    @type     String
    @see      colorable
    @public
  */

  /**
    Defines the type of layout this data component is presented in

    UXS ships with the following display layouts: list, inline, tabel, cell

    @argument display
    @default  "list"
    @type     String
    @see      datable
    @public
  */

  /**
    If set to true the data components content is displayed "inset" (inside padding) horizontally.

    @argument inset
    @default  false
    @type     Boolean
    @see      datable
    @public
  */

  /**
    If set to true the data components content is displayed "offset" (outside padding) horizontally.

    @argument display
    @default  null
    @type     String
    @see      datable
    @public
  */

  /**
    Define the size of the component. Standard options are "giant", "huge", "large", "medium", "small", or "tiny". Defaults to no size (inhered)

    @argument size
    @default  null
    @type     String
    @see      sizable
    @public
  */

  /**
    The text for the value, this can be passed in at the first positional parameter

    @argument text
    @default  ""
    @type     String
    @public
  */
  text: "",

  /**
    The text to return if the given value is empty

    @argument text
    @default  "n/a"
    @type     String
    @public
  */
  emptyText: "n/a",

  /**
    Set to true to truncate the text to one line

    @argument truncate
    @default  null
    @type     Boolean
    @public
  */

  /**
    Define the weight of the component. Standard options are "bold", "medium" or "light". Defaults to no weight (inhered)

    @argument    weight
    @default  null
    @type     String
    @see      weightable
    @public
  */

  /**
   Reference to the template file this component will use
   @property  layout
   @type      String
   */
  layout,
  // Computed
  computedText: computed('text', 'emptyText', function() {
    window.console.log(this.text, isEmpty(this.text));
    if (isEmpty(this.text)) {
      return this.emptyText;
    }
    return this.text;
  }),
}).reopenClass({
  positionalParams: ['text'],
});