import {
  alias
} from '@ember/object/computed';
import LinkComponent from '@ember/routing/link-component';
import layout from '../templates/components/uxs-button-link';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';

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
    Set to true to enable the button to appear inline with other buttons or inline components.
    The button will use the `inline-block` display property.

    @argument inline
    @type     Boolean
    @default  false
    @public
   */
  inline: false,
  /**
    __Deprecated__

    Use the _size="small"_ argument instead.

    @argument mini
    @type     Boolean
    @default  false
    @public
   */
  mini: null,
  /**
    Strip away any background styles and just display the buttons text.

    @argument naked
    @type     Boolean
    @default  false
    @public
   */
  naked: null,
  /**
    Add a custom name to your button, used for aria labels & test selectors.

    By default this will be the same as the _text_ argument unless you parse a different value.

    @argument name
    @type     String
    @default  null
    @public
   */
  name: null,
  /**
    Set the size of the button. Default is medium.

    UXS ships with the following stock sizes: giant, huge, large, medium, small, tiny.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.button--my-massive-size_

    @argument size
    @type     String
    @default  null
    @public
   */
  size: null,
  /**
    Set the style of the button.

    UXS ships with the following stock styles: secondary, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.button--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  style: null,
  /**
    The buttons text, this can be set as the first positional parameter.

    It will also default to the components name.

    @argument text
    @type     String
    @default  null
    @public
   */
  text: alias('linkTitle'),
});