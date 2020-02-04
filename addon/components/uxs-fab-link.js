import LinkComponent from '@ember/routing/link-component';
import layout from '../templates/components/uxs-fab-link';
import {
  computed,
  get
} from '@ember/object';
import {
  alias,
  bool,
  equal
} from '@ember/object/computed';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import {
  FAB_STYLES
} from 'ember-ux-sauce/components/uxs-fab';

/**
  A component to render a simple fab button link

  ```hbs
  {{uxs-fab-link "icon" "route" param}}
  ```
  @class UXS Fab Link
  @public
*/
export default LinkComponent.extend(Buttonable, {
  layout,
  base: 'uxs-fab',
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
    The buttons text, this can be set as the first positional parameter.

    It will also default to the components name.

    @argument text
    @type     String
    @default  null
    @public
   */
  computedText: computed('style', 'linkTitle', 'text', function() {
    const style = get(this, 'style'),
      linkTitle = get(this, 'linkTitle'),
      text = get(this, 'text');

    if (style === FAB_STYLES.EXTENDED) {
      return linkTitle;
    } else {
      return text;
    }
  }),
  computedIcon: computed('style', 'linkTitle', 'icon', function() {
    const style = get(this, 'style'),
      linkTitle = get(this, 'linkTitle'),
      icon = get(this, 'icon');

    if (style === FAB_STYLES.EXTENDED) {
      return icon;
    } else {
      return linkTitle;
    }
  }),

  showText: equal('style', FAB_STYLES.EXTENDED),
  showIcon: bool('computedIcon'),
  loadingIcon: alias('computedIcon'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style',
      '*color',
      '*fixed',
      'selected',
      'disabled'
    ]);
  },
});