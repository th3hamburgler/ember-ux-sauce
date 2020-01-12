import {
  alias
} from '@ember/object/computed';
import LinkComponent from '@ember/routing/link-component';
import layout from '../templates/components/uxs-button-link';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import {
  BUTTON_STYLES
} from 'ember-ux-sauce/components/uxs-button';
/**
  A component to render a link as a simple button

  ```hbs
  {{uxs-button-link "BUTTON TEXT" "photos.edit" photo}}

  {{#uxs-button-link "photos.edit" photo}}
    BUTTON TEXT
  {{/uxs-button-link}}
  ```
  @class UXS Button Link
  @public
*/
export default LinkComponent.extend(Buttonable, {
  // Attributes
  layout,
  role: 'link',
  /**
    Set to true to disable this button.

    This will activate it's disabled style and also prevent any actions from being fired.

    @argument disabled
    @type     Boolean
    @default  false
    @public
   */
  disabled: false,

  /**
    Add a custom name to your button, used for aria labels & test selectors.

    By default this will be the same as the _text_ argument unless you parse a different value.

    @argument name
    @type     String
    @default  null
    @public
   */
  name: true,
  /**
    Set the style of the button.

    UXS ships with the following styles:
    - contained
    - outlined
    - naked

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.button--my-custom-style

    @argument color
    @type     String
    @default  null
    @public
   */
  style: BUTTON_STYLES.CONTAINED,
  /**
    The buttons text, this can be set as the first positional parameter.

    It will also default to the components name.

    @argument text
    @type     String
    @default  null
    @public
   */
  text: alias('linkTitle'),
  /**
    Set the border radius of the button.

    UXS ships with the following styles:
    - square
    - rounded
    - round

    @argument radius
    @type     String
    @default  null
    @public
   */
  radius: 'rounded',
  /**
    Set the color of the button.

    UXS ships with the following stock color: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.button--my-custom-color_

    @argument color
    @type     String
    @default  null
    @public
   */
  color: 'primary',
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style',
      '*color',
      'selected',
      '*radius'
    ]);
  },
});