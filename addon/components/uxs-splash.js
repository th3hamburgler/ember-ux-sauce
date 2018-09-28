import Component from '@ember/component';
import layout from '../templates/components/uxs-splash';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

/**
  A component to render a tab menu

  ```hbs
  {{#uxs-splash as |splash|}}
    {{splash.icon "inbox"}}
    {{splash.title "Inbox Zero"}}
    {{splash.text "Congratulations, you have no more email!"}}
  {{/uxs-splash}}
  ```
  @class UXS Tabs
  @public
  @yield {Hash} tab
  @yield {Component} tab.icon
  @yield {Component} tab.title
  @yield {Component} tab.text
*/
export default Component.extend(BEMComponent, Testable, {
  // Attributes
  /**
    The base css class name 'uxs-splash'

    @field base
    @type String
   */
  base: 'uxs-splash',
  layout
});