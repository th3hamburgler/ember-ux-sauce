import Component from '@ember/component';
import layout from '../templates/components/uxs-button';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import {
  oneWay
} from '@ember/object/computed';
export const BUTTON_STYLES = {
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
  NAKED: 'naked',
};

/**
  A component to render a simple button

  ```hbs
  {{uxs-button "BUTTON TEXT"}}
  ```
  @class UXS Button
  @public
*/
const Button = Component.extend(Buttonable, Clickable, {
  /**
   The BEM base name for this component

   @argument base
   @type     String
   @default  'uxs-button'
   @public
   */
  base: 'uxs-button',
  /**
    Return true to allow this component event to
    bubble to parent elements

    @argument bubbles
    @default  false
    @type     {boolean}
    @public
  */
  bubbles: false,
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
  disabled: oneWay('task.isRunning'),
  /**
    Path to the component template file

    @property layout
    @type     String
    @private
    */
  layout,
  /**
    Set to true if the button has already been pressed or should be disabled while another action takes place. If the button is passed a task it will display the loading state automatically while the task is running

    If the _loadingText_ argument has been provided this will be displayed, defaults to "Loading…".

    This will activate it's loading style and also prevent any actions from being fired..

    @argument loading
    @type     Boolean
    @default  false
    @public
   */
  loading: oneWay('task.isRunning'),
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
    The name of the action to fire on click<br>
    NOTE: if you assign a value to this action it will block the dom event and prevent bubbling by default

    @argument onClick
    @default  null
    @type     closure
    @public
  */
  onClick: null,
  /**
    Add an html role to the item for accessibility

    @argument role
    @default  'button'
    @type     string
    @public
  */
  role: 'button',
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
    @default    'button'
    @public
    */
  tagName: 'button',
  /**
    The name of the ember concurrency task to
    perform on click. If a task is defined that
    will take presedence over an onClick action

    @argument task
    @default  null
    @type     task
    @public
  */
  task: null,
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