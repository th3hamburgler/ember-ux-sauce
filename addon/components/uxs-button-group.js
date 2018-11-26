import Component from '@ember/component';
import {
  equal
} from '@ember/object/computed';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-button-group';

/**
  A component to render group of buttons

  ```hbs
  {{#uxs-button-group
    align=align
    disabled=disabled
    padded=padded
    row=row
    style=style
    as |group|
  }}
    {{group.button "Save" style="primary"}}
    {{group.button "Save & Publish" style="primary"}}
    {{group.link "Cancel" "docs.forms.buttons" style="warning"}}
  {{/uxs-button-group}}
  ```
  @class UXS Button Group
  @public
  @yield {Hash} tab
  @yield {Component} group.button
  @yield {Component} group.link
*/
export default Component.extend(BEMComponent, Testable, {
  // Attribues
  /**
    The base css class name 'uxs-tabs'

    @field base
    @type String
   */
  base: 'uxs-button-group',
  layout,
  // Arguments
  /**
    Set the alignment of the buttons. This will only take effect if the group is in column layout (row=false)

    UXS ships with three align options: left, center (default) & right

    @argument align
    @type     String
    @default  "left"
    @public
   */
  align: 'left',
  /**
    Set to true to disable all buttons in the group.

    This will activate it's disabled style and also prevent any actions from being fired and links working.

    @argument disabled
    @type     Boolean
    @default  false
    @public
   */
  disabled: false,
  /**
    Set to true to add some horizontal padding to the group

    @argument padded
    @type     Boolean
    @default  false
    @public
   */
  padded: false,
  /**
    Set to true to display child buttons in a row instead of a column

    @argument row
    @type     Boolean
    @default  false
    @public
   */
  row: false,
  /**
    Set the style of the groups background.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-tabs--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  style: null,
  // Computed
  isAlignCenter: equal('align', 'center'),
  isAlignLeft: equal('align', 'left'),
  isAlignRight: equal('align', 'right'),
  // Methods
  /**
   * init - state
   *
   * @return object  this
   */
  init() {
    this._super(...arguments);

    this.registerModifiers([
      '*align',
      'disabled',
      'inline',
      'padded',
      'row',
      '*size',
      '*style',
    ]);

  },
  /**
   * Init any property defaults
   */
  getDefaultProps() {
    return {
      disabled: false,
      inline: false,
      mini: false,
    };
  },
});