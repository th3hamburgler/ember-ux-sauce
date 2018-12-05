import LinkComponent from '@ember/routing/link-component';
import layout from '../../templates/components/uxs-menu/link';
import Styleable from 'ember-ux-sauce/mixins/styleable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  computed,
  get,
  set
} from '@ember/object';

/**
  Display link to another route within a uxs-menu

  ```hbs
  {{#uxs-menu as |menu|}}
    {{menu.link "My Route" "route.name"}}
  {{/uxs-menu}}
  ```

  @class UXSMenu/Link
*/
export default LinkComponent.extend(BEMComponent, Styleable, Testable, {
  layout,
  //
  // Arguments
  // ---------
  /**
    The BEM base name for this component

    @argument base
    @type     String
    @default  "uxs-menu__item"
    @public
   */
  base: 'uxs-menu__item',
  /**
    If true, the link will be displayed horizontally

    @argument horizontal
    @type     boolean
    @default  false
    @public
   */
  horizontal: false,
  /**
    Set the style of the component.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  /**
    If set to true the link will be rendered small (detail) size

    @argument detail
    @default false
    @type Boolean
  */
  detail: false,
  /**
    If set to true the link will include a left padding to account for icons.

    @argument hasLeftIcon
    @default false
    @type Boolean
  */
  hasLeftIcon: false,
  /**
    If set to true the link will include a right padding to account for icons.

    @argument hasRightIcon
    @default false
    @type Boolean
  */
  hasRightIcon: false,
  /**
    If set the link will contain an icon on the right

    @argument rightIcon
    @default  null
    @type     String
    @public
  */
  rightIcon: null,
  /**
    If set the link will contain an icon on the left

    @argument leftIcon
    @default  null
    @type     String
    @public
  */
  leftIcon: null,
  /**
    If set to true the link will include padding to account for secondary text.

    @argument hasSecondaryText
    @default false
    @type Boolean
  */
  hasSecondaryText: false,
  /**
    Sets secondary text in the link

    @argument secondaryText
    @default  null
    @type     String
    @public
  */
  secondaryText: null,
  // Computed
  showRightIcon: computed('hasRightIcon', 'rightIcon', 'hasSecondaryText', 'secondaryText', function() {
    return get(this, 'hasRightIcon') || get(this, 'rightIcon') || get(this, 'hasSecondaryText') || get(this, 'secondaryText');
  }),
  showLeftIcon: computed('hasLeftIcon', 'leftIcon', function() {
    return get(this, 'hasLeftIcon') || get(this, 'leftIcon');
  }),
  // Methods
  init() {
    this.registerModifiers([
      'detail',
      'horizontal',
      'disabled',
    ])
    this._super(...arguments);
  },
  click() {
    this._super(...arguments);
    if (get(this, 'showingModal') === true) {
      set(this, 'showingModal', false);
    }
  },
});