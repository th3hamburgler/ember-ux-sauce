import Component from '@ember/component';
import layout from '../../templates/components/uxs-list/item';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';

/**
  A component to render a list item

  ```hbs
  {{#uxs-list as |item|}}
    {{#item.item}}
      ...
    {{/item.item}}
  {{/uxs-list}}
  ```
  @class UXS List Item
  @yield {Component} item.body uxs-div
  @yield {Component} item.aside uxs-div
  @yield {Component} item.title uxs-text
  @yield {Component} item.meta uxs-text
  @yield {Component} item.metaLink uxs-link
  @yield {Component} item.avatar uxs-list/avatar
  @yield {Component} item.action uxs-icon
  @yield {Component} item.actionLink uxs-icon-link
  @public
*/
export default Component.extend(BEMComponent, Clickable, Testable, {
  /**
    Path to the component template file

    @property layout
    @type     String
    @private
    */
  layout,
  /**
   The BEM base name for this component

   @argument base
   @type     String
   @default  'uxs-list__item'
   @public
   */
  base: 'uxs-list__item',
  /**
    Include a bottom border to each list item. <br>
    This is inherited from the parent uxs-list's border by default

    @argument bordered
    @type     Boolean
    @default  true
    @public
   */
  bordered: true,
  /**
    Set to true to disable this item.

    This will activate it's disabled style and also prevent any actions from being fired.

    @argument disabled
    @type     Boolean
    @default  false
    @public
   */
  disabled: false,
  /**
    Add a custom name to your item, used for aria labels & test selectors.

    @argument name
    @type     String
    @default  null
    @public
   */
  name: true,
  /**
    Add an html role to the component for accessibility

    @argument role
    @default  'link'
    @type     string
    @public
  */
  role: 'item',
  /**
    The html tag name for the root of the component

    @argument  tagName
    @type       String
    @default    'div'
    @public
    */
  tagName: 'div',
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'bordered',
      'disabled'
    ]);
  }
});