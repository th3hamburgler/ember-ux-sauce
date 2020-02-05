import Component from '@ember/component';
import layout from '../templates/components/uxs-fab';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import {
  computed,
  get
} from '@ember/object';
import {
  bool,
  equal,
  oneWay
} from '@ember/object/computed';
import {
  alias
} from '@ember/object/computed';
export const FAB_STYLES = {
  REGULAR: 'regular',
  MINI: 'mini',
  EXTENDED: 'extended',
};

/**
  A component to render a simple fab button

  ```hbs
  {{uxs-fab "icon"}}
  ```
  @class UXS Fab
  @public
*/
const Fab = Component.extend(Buttonable, Clickable, {
  /**
   The BEM base name for this component

   @argument base
   @type     String
   @default  'uxs-button'
   @public
   */
  base: 'uxs-fab',
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
    Where to fix this fab on the screen:

    bottom-left
    bottom-right

    @argument fixed
    @type     String
    @default  null
    @public
  */
  fixed: null,
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
    For regular and mini style buttons param1 is the icon path.<br>
    For extended buttons, this should be the text value.<br>This can be set as the first positional parameter.<br>

    It will also default to the components name.

    @argument param1
    @type     String
    @default  null
    @private
   */
  param1: null,
  /**
    For extended buttons, param2 should be the optional icon path.<br>This can be set as the second positional parameter.<br>

    @argument param1
    @type     String
    @default  null
    @private
   */
  param2: null,
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

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-fab--my-custom-style

    @argument style
    @type     String
    @default  'regular'
    @public
   */
  style: FAB_STYLES.REGULAR,
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
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style',
      '*color',
      '*fixed',
      'selected',
    ]);
  },
  // Computed
  icon: computed('style', 'param1', 'param2', function() {
    const style = get(this, 'style'),
      p1 = get(this, 'param1'),
      p2 = get(this, 'param2');

    if (style === FAB_STYLES.EXTENDED) {
      return p2;
    } else {
      return p1;
    }
  }),
  text: computed('style', 'param1', 'param2', function() {
    const style = get(this, 'style'),
      p1 = get(this, 'param1'),
      p2 = get(this, 'param2');

    if (style === FAB_STYLES.EXTENDED) {
      return p1;
    } else {
      return p2;
    }
  }),
  showText: equal('style', FAB_STYLES.EXTENDED),
  showIcon: bool('icon'),
  loadingIcon: alias('icon'),
});

Fab.reopenClass({
  positionalParams: ['param1', 'param2'],
});

export default Fab;