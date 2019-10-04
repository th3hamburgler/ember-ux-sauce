import Component from '@ember/component';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import Colorable from 'ember-ux-sauce/mixins/colorable';
import Datable from 'ember-ux-sauce/mixins/datable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../../templates/components/uxs-data/item';

/**
  A component to render a data item. Data Items can house lable, value and tips. They can also contain groups of values

  ```hbs
  {{uxs-data/item "My Label" "My Value" "My Tip"}}

  {{#uxs-data/item as |item|}}
    {{item.label "My Label"}}
    {{item.value "My Value"}}
    {{item.tip "My Tip"}}
  {{/uxs-data}}
  ```
  @class UXS Data Item
  @public
  @yield {Hash} item
  @yield {Component} item.label
  @yield {Component} item.value
  @yield {Component} item.tip
  @yield {Component} item.group
*/
export default Component.extend(Accessible, BEMComponent, Colorable, Datable, Testable, {

  /**
    The base css class name that the BEM Component
    mixin will use.
    @property base
    @type String
   */
  base: 'uxs-data__item',

  /**
   Reference to the template file this component will use
   @property layout
   @type String
   */
  layout,

  /**
    Sets the role attribute
    @property role
    @default  listitem
    @type     String
    @see      accessible
    @public
   */
  role: 'listitem',

  /**
    Shortcut to defining the label text of this item

    @argument label
    @default  null
    @type     String
    @public
  */
  label: null,

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
    Set the color the components text.

    UXS ships with the following stock colors: primary, accent, warning, error, dark, grey, mid, light & white. More can be added to the $defaultColors array.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _--my-custom-style_

    @property color
    @default  null
    @see      colorable
    @type     String
  */

  /**
    Set the style of the component.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white. More can be added to the $defaultColors array. This will set the background color of the component and set a contrasting base color for the text

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _--my-custom-style_

    @property style
    @default  null
    @see      colorable
    @type     String
  */

  /**
    Shortcut to defining the tip text of this item

    @argument tip
    @default  null
    @type     String
    @public
  */
  tip: null,

  /**
    Shortcut to defining the value text of this item

    @argument value
    @default  null
    @type     String
    @public
  */
  value: null,

}).reopenClass({
  positionalParams: ['label', 'value', 'tip'],
});