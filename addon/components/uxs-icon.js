import Component from '@ember/component';
import layout from '../templates/components/uxs-icon';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Visible from 'ember-ux-sauce/mixins/visible';
import {
  oneWay
} from '@ember/object/computed';

export const ICON_STYLES = {
  REGULAR: 'regular',
  LARGE: 'large',
};
/**
  Render a svg icon.

  ```hbs
  {{uxs-icon "path.to.svg"}}
  ```

  @class UXS Icon
  @public
*/
const Icon = Component.extend(Buttonable, Clickable, Visible, {
  /**
   The BEM base name for this component

   @argument base
   @type     String
   @default  'uxs-icon'
   @public
   */
  base: 'uxs-icon',
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
    Set the color of the component.

    UXS ships with the following stock color: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-component--my-custom-color_

    @argument color
    @type     String
    @default  'dark'
    @public
   */
  color: 'dark',
  /**
    Set to true to disable this component.

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
    Set to true if the component has already been pressed or should be disabled while another action takes place. If the component is passed a task it will display the loading state automatically while the task is running

    If the _loadingText_ argument has been provided this will be displayed, defaults to "Loading…".

    This will activate it's loading style and also prevent any actions from being fired..

    @argument loading
    @type     Boolean
    @default  false
    @public
   */
  loading: oneWay('task.isRunning'),
  /**
    Add a custom name to your component, used for aria labels & test selectors.

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
    Add an html role to the component for accessibility

    @argument role
    @default  'button'
    @type     string
    @public
  */
  role: 'button',
  /**
    Set's the component style to a selected state.

    Can be used to toggle components or to infer an active state without disabling the components action.

    @argument selected
    @type     Boolean
    @default  selected
    @public
   */
  selected: null,
  /**
    Set the style of the component.

    UXS ships with the following styles:
    - contained (default)
    - outlined
    - naked

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-component--my-custom-style

    @argument style
    @type     String
    @default  'regular'
    @public
   */
  style: ICON_STYLES.REGULAR,
  /**
    The html tag name for the root of the component

    @argument  tagName
    @type       String
    @default    'div'
    @public
    */
  tagName: 'div',
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
    The icon svg path, this can be set as the first positional parameter.

    It will also default to the components name.

    @argument icon
    @type     String
    @default  null
    @public
   */
  icon: null,

  /**
    The css display value of the root element
    when it is visible.

    Defaults to _flex-

    @argument visibleDisplayType
    @default  'flex'
    @type     String
    @public
  */
  visibleDisplayType: 'flex',

  /**
    Set to true to set a display class on the root.
    The class used will depend on the value of _visibleDisplayType_
    Default is _flex_

    Pass in a media query code to display visible at a break point.
    e.g. visible="md" will add the md:flex class
    @argument visible
    @default  null
    @type     String
    @public
  */
  visible: null,

  /**
    Set to true to set a hidden class on the root.
    e.g. _hidden_

    Pass in a media query code to hide at a break point.
    e.g. visible="lg" will add the lg:hidden class
    @argument hidden
    @default  null
    @type     String
    @public
  */
  hidden: null,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style',
      '*color',
      'selected',
    ]);
  },
});

Icon.reopenClass({
  positionalParams: ['icon']
});

export default Icon;