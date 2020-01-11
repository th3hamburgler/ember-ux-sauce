import Component from '@ember/component';
import layout from '../templates/components/uxs-button';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import Clickable from 'ember-ux-sauce/mixins/clickable';

/**
  A component to render a simple button

  ```hbs
  {{uxs-button "BUTTON TEXT"}}
  ```
  @class UXS Button
  @public
*/
const Button = Component.extend(Buttonable, Clickable, {
  // Attributes
  layout,
  tagName: 'button',
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
    Set to true if the button has already been pressed or should be disabled while another action takes place.

    If the _loadingText_ argument has been provided this will be displayed, defaults to "Loading…".

    This will activate it's loading style and also prevent any actions from being fired..

    @argument loading
    @type     Boolean
    @default  false
    @public
   */
  loading: false,

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
    - contained
    - outlined
    - naked

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.button--my-custom-style

    @argument color
    @type     String
    @default  null
    @public
   */
  style: 'contained',
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
  /**
    The buttons text, this can be set as the first positional parameter.

    It will also default to the components name.

    @argument text
    @type     String
    @default  null
    @public
   */
  text: null,
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

Button.reopenClass({
  positionalParams: ['text'],
});

export default Button;