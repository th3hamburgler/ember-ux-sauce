import Component from '@ember/component';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../../templates/components/uxs-list/x-subheading';
import {
  inject as service
} from '@ember/service';
import {
  computed,
  get,
  set
} from '@ember/object';

/**
  A component to render a list subheading component

  ```hbs
  {{#uxs-list as |list|}}
    {{list.subheading "My Subheading"}}
  {{/uxs-list}}

  {{#uxs-list as |list|}}
    {{#list.subheading as |subheading}}
      {{subheading.icon "add"}}
      {{subheading.text  "My Subheading"}}
      {{subheading.toggle value=toggled onToggle=(action (mut toggled))}}
    {{/list.subheading}}
  {{/uxs-list}}

  ```
  @class UXS List Subheading
  @public
  @yield {Hash} subheading
  @yield {Component} subheading.icon
  @yield {Component} subheading.text
  @yield {Component} subheading.toggle
*/
export default Component.extend(BEMComponent, {
  // Service
  subheadingState: service('uxs-list-subheading-cache'),
  // Attributes
  /**
    The base css class name 'uxs-list__subheading'

    @field base
    @type String
   */
  base: 'uxs-list__subheading',
  layout,
  tagName: 'div',
  // Arguments
  /**
    Should the subheading have a border?

    @argument bordered
    @type     boolean
    @default  true
    @public
   */
  bordered: true,
  /**
    Set the style of the subheading component.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-splash--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  style: null,
  /**
    Set this to true if you are using the yielded components.

    @argument yield
    @type     boolean
    @default  false
    @public
   */
  yield: false,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['bordered', '*style']);
  },
  // Computed
  showSubheading: computed('text', 'sort', function() {
    let text = get(this, 'text'),
      sort = get(this, 'sort'),
      currentValue = get(this, 'subheadingState.value'),
      currentSort = get(this, 'subheadingState.sort');

    if (text !== currentValue || sort !== currentSort) {
      // Side Effect - Bad!
      set(this, 'subheadingState.value', text);
      set(this, 'subheadingState.sort', sort);
      return true;
    }
  }),
}).reopenClass({
  positionalParams: ['text', 'sort'],
});