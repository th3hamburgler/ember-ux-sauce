import Mixin from '@ember/object/mixin';
import {
  computed,
} from '@ember/object';

/**
  A mixing to give a common functionality to components to
  set text and style (backgrounds)

  @class Colorable
  @public
*/
export default Mixin.create({
  // Attributes

  /**
    Set the color the components text.

    UXS ships with the following stock colors: primary, accent, warning, error, dark, grey, mid, light & white. More can be added to the $defaultColors array.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _--my-custom-style_

    @property color
    @default null
    @type String
  */
  color: null,

  colorModifier: computed('color', function() {
    if (this.color) {
      return `c-${this.color}`;
    }
  }),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*color'
    ]);
  },
  /**
   * This is a placeholder function that will be overridden
   * by the registerModifiers function from BEMComponent mixin
   * for any component that uses this mixin
   *
   * @function registerModifiers
   */
  registerModifiers: function() {
    if (this._super) {
      this._super(...arguments);
    }
  },
});