import LinkComponent from '@ember/routing/link-component';
import layout from '../templates/components/uxs-button-link';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import {
  alias
} from '@ember/object/computed';
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
  /**
   The BEM base name for this component

   @argument base
   @type     String
   @default  'uxs-button'
   @public
   */
  base: 'uxs-button',
  /**
    Set the color of the button.

    UXS ships with the following stock color: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-button--my-custom-color_

    @argument color
    @type     String
    @default  'primary'
    @public
   */
  color: 'primary',
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
    Path to the component template file

    @property layout
    @type     String
    @private
    */
  layout,
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
    Add an html role to the item for accessibility

    @argument role
    @default  'link'
    @type     string
    @public
  */
  role: 'link',
  /**
    Set's the button style to a selected state.

    Can be used to toggle buttons or to infer an active state without disabling the buttons action.

    @argument selected
    @type     Boolean
    @default  selected
    @public
   */
  selected: null,
  /**
    Set the style of the button.

    UXS ships with the following styles:
    - contained (default)
    - outlined
    - naked

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-button--my-custom-style

    @argument style
    @type     String
    @default  'default'
    @public
   */
  style: BUTTON_STYLES.CONTAINED,
  /**
    The html tag name for the root of the component

    @argument  tagName
    @type       String
    @default    'a'
    @public
    */
  tagName: 'a',
  /**
    Set the border radius of the button.

    UXS ships with the following styles:
    - rounded (default)
    - round
    - square

    @argument radius
    @type     String
    @default  'rounded'
    @public
   */
  radius: 'rounded',
  /**
    The buttons text, this can be set as the first positional parameter.

    It will also default to the components name.

    @argument text
    @type     String
    @default  null
    @public
   */
  text: alias('linkTitle'),

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