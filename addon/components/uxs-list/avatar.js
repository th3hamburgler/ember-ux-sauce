import Component from '@ember/component';
import layout from '../../templates/components/uxs-list/avatar';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  computed
} from '@ember/object';

const AVATAR_SIZES = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
  },
  AVATAR_STYLES = {
    ICON: 'icon',
    TEXT: 'text',
    IMAGE: 'image',
  };

/**
  A component to render a list avatar

  ```hbs
  {{uxs-list/avatar "JW"}}

  {{uxs-list/avatar "face" icon=true}}

  {{uxs-list/avatar "https://..." image=true}}
  ```
  @class UXS List Avatar
  @public
*/
export default Component.extend(BEMComponent, Clickable, Testable, {
  /**
    Path to the component template file

    @property layout
    @type     String
    @private
    */
  layout,

  /**
    Set the alt text of the avatar to describe the image

    @argument alt
    @type     String
    @default  'Avatar'
    @public
   */
  alt: 'Avatar',
  /**
   The BEM base name for this component

   @argument base
   @type     String
   @default  'uxs-list'
   @public
   */
  base: 'uxs-list__avatar',
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
    @default  'primary'
    @public
   */
  color: 'accent',
  /**
    Set the avatars content. Depending on the type of avatar this could be text, an svg path or image location.<br>
    This can be passed as the first positional parameter.

    @argument alt
    @type     String
    @default  null
    @public
   */
  content: null,

  size: AVATAR_SIZES.MEDIUM,
  style: AVATAR_STYLES.TEXT,

  /**
    Set to true to display an svg icon

    @argument icon
    @type     Boolean
    @default  false
    @public
   */
  icon: false,

  // Computed
  // iconSize: computed('icon', 'size', function() {
  //   if (this.icon) {
  //     return `icon-${this.size}`;
  //   }
  // }),
  // textSize: computed('text', 'size', function() {
  //   if (this.text) {
  //     return `text-${this.size}`;
  //   }
  // }),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*color',
      '*size',
      '*type',
      // '*iconSize',
      // '*textSize',
    ]);
  }
}).reopenClass({
  positionalParams: ['content'],
});