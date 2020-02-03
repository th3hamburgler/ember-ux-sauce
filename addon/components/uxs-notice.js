import Component from '@ember/component';
import layout from '../templates/components/uxs-notice';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';

/**
  This component can be used to display some key info to a user before the main content is displayed.

  ```hbs
  {{uxs-notice text style=style truncated=truncated}}
  ```
  @class UXS Notice
  @public
  @yield {Hash} notice
  @yield {Component} notice.icon
  @yield {Component} notice.button text
  @yield {Component} notice.action
  @yield {Component} notice.linkAction
*/
const Notice = Component.extend(BEMComponent, Testable, {
  layout,
  //
  // Arguments
  // ---------
  /**
    The BEM base name for this component

    @argument base
    @type     String
    @default  "uxs-notice"
    @public
   */
  base: 'uxs-notice',

  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style',
      '*color',
    ]);
  },
});

Notice.reopenClass({
  positionalParams: ['text', 'icon'],
});

export default Notice;