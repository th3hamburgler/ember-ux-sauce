import Component from '@ember/component';
import layout from '../templates/components/uxs-datalist-item';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  and,
  bool,
  not,
  or
} from '@ember/object/computed';

/**
  Datalist items display a lable and value of a property

  ```hbs
  {{#uxs-datalist as |list|}}
    {{list.item
      label=label
      value=value
      tip=tip
      empty=empty
    }}
  {{/uxs-datalist}}
  ```

  @class UXSDatalistItem
  @yield {Hash} item
  @yield {Component} item.row
  @yield {Component} item.group
  @yield {Component} item.label
  @yield {Component} item.value
  @yield {Component} item.empty
  @yield {Component} item.tip
*/
export default Component.extend(BEMComponent, Testable, {
  layout,
  //
  // Arguments
  // ---------
  /**
    The BEM base name for this component

    @argument base
    @type     String
    @default  "uxs-datalist"
    @public
   */
  base: 'uxs-datalist__item',
  /**
    A string to display as the label

    @argument label
    @type     String
    @default  null
    @public
   */
  label: null,
  /**
    A string to display as the value

    @argument value
    @type     String
    @default  null
    @public
   */
  value: null,
  /**
    A string to display as the tooltip

    @argument tip
    @type     String
    @default  null
    @public
   */
  tip: null,
  /**
    A string to show if the value is empty

    @argument empty
    @type     String
    @default  "N/A"
    @public
   */
  empty: 'N/A',
  /**
    If true, each data item will have a bottom border

    @argument bordered
    @type     boolean
    @default  true
    @public
   */
  bordered: true,
  /**
    The name of the component, will be used as the value for all test selectors.
    If set to false the test selector is not rendered.

    @argument name
    @default  true
    @type     {(boolean,string)}
    @public
  */
  /**
    Set the style of the datalist component.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-datalist--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  //
  // Computed
  //
  hasLabel: bool('label'),
  hasValue: bool('value'),
  hasEmpty: and('isNull', 'empty'),
  hasContent: or('hasValue', 'hasEmpty'),
  hasTip: bool('tip'),
  isNull: not('hasValue'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['bordered', '*style']);
  },
});