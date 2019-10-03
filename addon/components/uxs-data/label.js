import Component from '@ember/component';
import Datable from 'ember-ux-sauce/mixins/datable';
import Groupable from 'ember-ux-sauce/mixins/groupable';
import Testable from 'ember-ux-sauce/mixins/testable';
import Textable from 'ember-ux-sauce/mixins/textable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../../templates/components/uxs-data/label';

/**
  A component to render a data label

  ```hbs
  {{#uxs-data/label "My Label"}}
  ```
  @class UXS Data Label
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
  base: 'uxs-data__label',

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

    @argument padded
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
    The text value for the label, this can be passed in at the first positional parameter

    @argument text
    @default  ""
    @type     String
    @public
  */
  text: "",

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
}).reopenClass({
  positionalParams: ['text'],
});