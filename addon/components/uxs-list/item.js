import Component from '@ember/component';
import layout from '../../templates/components/uxs-list/item';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  oneWay
} from '@ember/object/computed';
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
    Return true to allow this component event to
    bubble to parent elements

    @argument bubbles
    @default  false
    @type     {boolean}
    @public
  */
  bubbles: false,
  /**
    Set to true to disable this component.

    This will activate it's disabled style and also prevent any actions from being fired.

    @argument disabled
    @type     Boolean
    @default  false
    @public
   */
  disabled: oneWay('task.isRunning'),
  /**
    Set to true if the component has already been pressed or should be disabled while another action takes place. If the component is passed a task it will display the loading state automatically while the task is running

    If the _loadingText_ argument has been provided this will be displayed, defaults to "Loading…".

    This will activate it's loading style and also prevent any actions from being fired..

    @argument loading
    @type     Boolean
    @default  false
    @public
   */
  loading: oneWay('task.isRunning'),
  /**
    Add a custom name to your item, used for aria labels & test selectors.

    @argument name
    @type     String
    @default  null
    @public
   */
  name: true,
  /**
    The name of the action to fire on click<br>
    NOTE: if you assign a value to this action it will block the dom event and prevent bubbling by default

    @argument onClick
    @default  null
    @type     closure
    @public
  */
  onClick: null,
  /**
    The name of the ember concurrency task to
    perform on click. If a task is defined that
    will take presedence over an onClick action

    @argument task
    @default  null
    @type     task
    @public
  */
  task: null,
  /**
    Add an html role to the component for accessibility

    @argument role
    @default  'link'
    @type     string
    @public
  */
  role: 'listitem',
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