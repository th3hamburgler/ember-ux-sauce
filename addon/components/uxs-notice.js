import Component from '@ember/component';
import layout from '../templates/components/uxs-notice';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  bool
} from '@ember/object/computed';

/**
  This component can be used to display some key info to a user before the main content is displayed.

  ```hbs
  {{uxs-notice text style=style truncated=truncated}}
  ```
  @class UXS Notice
  @public
  @yield {Hash} notice
  @yield {Component} notice.icon uxs-icon
  @yield {Component} notice.link uxs-button-link
  @yield {Component} notice.button uxs-button
  @yield {Component} notice.text uxs-text
*/
const Notice = Component.extend(BEMComponent, Clickable, Testable, {
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
  /**
    Set to true to tuncate text to one line

    @argument truncated
    @type     Boolean
    @default  false
    @public
   */
  truncated: false,
  /**
    Set the style of the component.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  /**
    The name of the action to fire on click
    @argument onClick
    @default  null
    @type     {string}
    @public
  */
  /**
    Set to true to disable the component.

    This will activate it's disabled style and also prevent any actions from being fired.

    @argument disabled
    @type     Boolean
    @default  false
    @public
   */
  // Computed
  hasText: bool('text'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style',
      'truncated',
      'hasText:has-text',
    ]);
  },
  getDefaultProps() {
    return {
      style: 'default',
      truncated: true,
    };
  },
});

Notice.reopenClass({
  positionalParams: ['text'],
});

export default Notice;