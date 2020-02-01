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
  equal
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
  // Attributes
  layout,
  base: 'uxs-fab',
  tagName: 'button',
  param1: null,
  param2: null,
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
    - regular
    - mini
    - extended

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.button--my-custom-style

    @argument style
    @type     String
    @default  null
    @public
   */
  style: 'regular',
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
  _text: null,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style',
      '*color',
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