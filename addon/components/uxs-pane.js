import Component from '@ember/component';
import layout from '../templates/components/uxs-pane';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  computed,
  get
} from '@ember/object';

/**
  A component to render group of buttons

  ```hbs
  {{#uxs-pane}}
    ...Content
  {{/uxs-pane}}
  ```
  @class UXS Pane
  @public
*/

export default Component.extend(BEMComponent, Testable, {
  // Attributes
  /**
    The base css class name 'uxs-tabs'

    @field base
    @type String
   */
  base: 'uxs-window__pane',
  layout,
  // Arguments
  /**
    Set to true to display an aside style pane

    @argument aside
    @type     Boolean
    @default  false
    @public
   */
  aside: false,
  /**
    Set to true to display a detail style pane

    @argument detail
    @type     Boolean
    @default  false
    @public
   */
  detail: false,
  /**
    Set to true to display an index style pane

    @argument index
    @type     Boolean
    @default  false
    @public
   */
  index: false,
  /**
    Set to true to display a main style pane

    @argument main
    @type     Boolean
    @default  false
    @public
   */
  main: false,
  /**
    Set the mobile order of the pane. 1 to 9 supported

    @argument order
    @type     Int
    @default  null
    @public
   */
  order: false,
  /**
    Set to true to add some padding to the pane

    @argument padded
    @type     Boolean
    @default  false
    @public
   */
  padded: false,
  /**
    Set to true to display a single style pane

    @argument single
    @type     Boolean
    @default  false
    @public
   */
  single: false,
  /**
    Set to true to display a splash style pane

    @argument splash
    @type     Boolean
    @default  false
    @public
   */
  splash: false,
  /**
    Set to true to display a split style pane

    @argument split
    @type     Boolean
    @default  false
    @public
   */
  split: false,
  /**
    Set the style of the panes background.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-pane--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  style: null,
  /**
    Set the type of pane, an alternative to using the bolean arguments for main, aside etc

    UXS ships with the following stock pane types: aside, detail, index, main, single, splash & split.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-pane--my-custom-type_

    @argument type
    @type     String
    @default  null
    @public
   */
  type: null,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'aside',
      'detail',
      'full',
      'index',
      'main',
      'single',
      'splash',
      'padded',
      '*type',
      '*style',
      '*_order',
    ]);
  },
  // Computed
  _order: computed('order', 'aside', 'index', 'detail', 'main', function() {
    let order = get(this, 'order');

    if (!order) {
      if (get(this, 'aside')) {
        order = 1;
      } else if (get(this, 'main')) {
        order = 2;
      } else {
        order = 1;
      }
    }
    return `mobile-order-${order}`;
  }),
});