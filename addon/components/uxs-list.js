import Component from '@ember/component';
import layout from '../templates/components/uxs-list';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  computed,
  get
} from '@ember/object';
import {
  isEmpty
} from '@ember/utils';

/**
  A component to render a resource list

  ```hbs
  {{#uxs-list as |list|}}
    {{list.item ...}}
  {{/uxs-list}}
  ```
  @class UXS List
  @public
*/
export default Component.extend(BEMComponent, Testable, {
  // Attributes
  layout,
  /**
    The base css class name 'uxs-list'

    @field base
    @type String
   */
  base: 'uxs-list',
  // Arguments
  /**
    Set to true if this lists items should include a border

    @argument bordered
    @type     Boolean
    @default  false
    @public
   */
  bordered: false,
  /**
    Set to true if this list should grow to fit the flex box parent

    @argument grow
    @type     Boolean
    @default  false
    @public
   */
  grow: false,
  /**
    Set the style of the splash component.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-splash--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  style: null,
  // Computed
  parentStyle: computed('style', function() {
    const style = get(this, 'style');
    if (!isEmpty(style)) {
      return `parent-${style}`;
    }
  }),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'bordered',
      '*style',
      'grow',
    ]);
  },
});