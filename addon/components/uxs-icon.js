import Component from '@ember/component';
import layout from '../templates/components/uxs-icon';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import Clickable from 'ember-ux-sauce/mixins/clickable';

/**
  Render either a font or svg icon.

  ```hbs
  {{#uxs-icon "check_circle"}}
  ```

  @class UXSIcon
*/
const FormTip = Component.extend(Buttonable, Clickable, {
  layout,
  //
  // Arguments
  // ---------
  /**
    The BEM base name for this component

    @argument base
    @type     String
    @default  "uxs-icon"
    @public
   */
  base: 'uxs-icon',
  /**
    Set the style of the component.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-icon--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  style: null,
  /**
    Set to true to use an svg icon

    @argument svg
    @type     Boolean
    @default  false
    @public
   */
  svg: false,
  /**
    Set to true to disable this component.

    This will activate it's disabled style and also prevent any actions from being fired and links working.

    @argument disabled
    @type     Boolean
    @default  false
    @public
   */
  disabled: false,
  /**
    Style the icon inline with sibling components.

    @argument inline
    @type     Boolean
    @default  false
    @public
   */
  inline: false,
  /**
    Set the size of the component. Default is medium.

    UXS ships with the following stock sizes: giant, huge, large, medium, small, tiny.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.button--my-massive-size_

    @argument size
    @type     String
    @default  null
    @public
   */
  size: 'medium',

  /**
    The name of the component, will be used as the value for all test selectors.
    If set to false the test selector is not rendered.

    @argument name
    @default  true
    @type     {(boolean,string)}
    @public
  */
  name: true,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'disabled',
      '*size',
      '*style',
      'inline',
    ]);
  },
});

FormTip.reopenClass({
  positionalParams: ['icon']
});

export default FormTip;