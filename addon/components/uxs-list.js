import Component from '@ember/component';
import layout from '../templates/components/uxs-list';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';

/**
  A component to render a resource list

  ```hbs
  {{#uxs-list as |list|}}
    {{list.item ...}}
  {{/uxs-list}}
  ```
  @class UXS List
  @yield {Hash} list
  @yield {Component} list.item uxs-list/item
  @yield {Component} list.itemLink uxs-list/item-link
  @yield {Component} list.notice uxs-list/notice
  @public
*/
export default Component.extend(BEMComponent, Testable, {
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
   @default  'uxs-list'
   @public
   */
  base: 'uxs-list',
  /**
    Include a bottom border to each list item

    @argument bordered
    @type     Boolean
    @default  true
    @public
   */
  bordered: true,
  /**
    Set to true if this list should grow vertically to fill the flex box parent

    @argument grow
    @type     Boolean
    @default  false
    @public
   */
  grow: false,
  /**
    Add a custom name to your component, used for aria labels & test selectors.

    By default this will be the same as the _text_ argument unless you parse a different value.

    @argument name
    @type     String
    @default  null
    @public
   */
  name: true,
  /**
    Add an html role to the component for accessibility

    @argument role
    @default  'list'
    @type     string
    @public
  */
  role: 'list',
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'bordered',
      'grow',
    ]);
  },
});