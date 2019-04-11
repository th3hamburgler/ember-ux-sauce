import Component from '@ember/component';
import layout from '../../templates/components/uxs-tiles/tile';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

/**
  A component to render a tile component

  ```hbs
  {{uxs-tiles/row.tile size="medium"}}
  ```
  @class UXS Tiles/Tile
  @public
*/
export default Component.extend(Testable, BEMComponent, {
  layout,
  // Attributes
  /**
    The base css class name 'uxs-tiles__item'

    @field base
    @type String
   */
  base: 'uxs-tiles__item',
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
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'scroll',
      '*size',
      '*style',
    ]);
  },
});