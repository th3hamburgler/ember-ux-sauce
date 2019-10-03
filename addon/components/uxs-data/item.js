import Component from '@ember/component';
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
export default Component.extend(BEMComponent, Datable, Testable, {

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