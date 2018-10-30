import Component from '@ember/component';
import layout from '../templates/components/uxs-table';
import Textable from '../mixins/textable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
/**
  A table component to render data

  ```hbs
  {{#uxs-table as |table|}}
    {{#table.row as |row|}}
      {{row.heading "Food"}}
      {{row.heading "Caloires (g)" numeric=true}}
    {{/table.row}}
    {{#table.row section=true as |row|}}
      {{row.cell "Frozen yoghurt"}}
      {{row.cell "159" numeric=true}}
    {{/table.row}}
  {{/uxs-table}}
  ```

  @class UXSTable
  @public
  @yield {Hash} table
  @yield {Component} table.row
*/
export default Component.extend(BEMComponent, Textable, {
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
  base: 'uxs-table',

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
  tagName: 'table',
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
    Stretch table to full width

    @argument fullWidth
    @default false
    @type Boolean
  */
  fullWidth: false,

  /**
    Add some vertical padding to the table

    @argument padding
    @default false
    @type Boolean
  */
  padding: false,

  /**
  The name of the component. This property also defaults to the value for test selectors.<br/>

  The default is true, which ensures the test selector is added. If set to false the test selector is not rendered.

    @argument name
    @type     Boolean|String
  */

  /**
    Style the table as a record table

    @argument record
    @default false
    @type Boolean
  */
  record: false,

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
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['fullWidth:full-width', 'padding', 'record']);
  },
});