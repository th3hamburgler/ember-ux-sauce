import Component from '@ember/component';
import layout from '../../templates/components/uxs-breadcrumb/item';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Styleable from 'ember-ux-sauce/mixins/styleable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

/**
  Display a clickable item in a uxs-breadcrumb

  ```hbs
  {{uxs-breadcrumb/item "My Action" onClick=(action "something")}}
  ```

  @class UXSBreadcrumb/Item
*/
export default Component.extend(BEMComponent, Clickable, Styleable, Testable, {
  layout,
  //
  // Arguments
  // ---------
  /**
    The BEM base name for this component

    @argument base
    @type     String
    @default  "uxs-menu__item"
    @public
   */
  base: 'uxs-breadcrumb__item',
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
    If set to true the link will be rendered small (detail) size

    @argument detail
    @default false
    @type Boolean
  */
  detail: false,
  /**
    The name of the action to fire on click
    @argument onClick
    @default  null
    @type     {string}
    @public
  */
  // Computed

  // Methods
  init() {
    this.registerModifiers([
      'detail',
    ])
    this._super(...arguments);
  },
}).reopenClass({
  positionalParams: ['textLabel']
});