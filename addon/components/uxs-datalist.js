import Component from '@ember/component';
import layout from '../templates/components/uxs-datalist';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

/**
  Datalist used to display infomation in a read only format

  ```hbs
  {{#uxs-datalist as |list|}}
    {{list.item label="Label" value="Value"}}
  {{/uxs-datalist}}}}
  ```

  @class UXSDatalist
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
  base: 'uxs-datalist',
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
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['*style', 'bordered']);
  },
});