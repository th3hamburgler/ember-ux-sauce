import Component from '@ember/component';
import layout from '../templates/components/uxs-tiles';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  computed,
  get,
  set
} from '@ember/object';

/**
  A component to render a tile row component

  ```hbs
  {{uxs-tiles size="medium" as |row|}}
    {{row.tile}}
    {{row.tile}}
    {{row.tile}}
  {{/uxs-tiles}}
  ```
  @class UXS Tiles
  @public
  @yield {Hash} row
  @yield {Component} row.tile
*/
export default Component.extend(Testable, BEMComponent, {
  layout,
  // Attributes
  /**
    The base css class name 'uxs-tiles__group'

    @field base
    @type String
   */
  base: 'uxs-tiles__group',
  /**
    Set the size of child tiles

    UXS ships with three align options: small, medium & large

    @argument size
    @type     String
    @default  "medium"
    @public
   */
  size: 'medium',
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
  // Capacity
  capacity: computed('size', function() {
    switch (get(this, 'size')) {
      case 'small':
        return 5;
      case 'medium':
        return 3;
      case 'large':
        return 2;
    }
  }),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'scroll',
      '*style',
    ]);
  },
  didInsertElement() {
    this.autoDetectScrollMode();
  },
  /**
   * Auto detect when scroll is needed
   **/
  autoDetectScrollMode() {
    // let theInnerHtml = this.element;
    const capacity = get(this, 'capacity'),
      selector = `#${this.elementId} .uxs-tiles__item`,
      numberOfTiles = document.querySelectorAll(selector).length;

    const allowScroll = get(this, 'scroll');
    if(allowScroll == undefined || allowScroll) {
      if (numberOfTiles > capacity) {
        set(this, 'scroll', true);
      }
    }
  }
});