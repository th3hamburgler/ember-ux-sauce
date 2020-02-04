import Mixin from '@ember/object/mixin';
import {
  computed
} from '@ember/object';

/**
  Add a text align modifier to a component

  @class Alignable
  @namespace Mixins
*/
export default Mixin.create({
  // Attributes
  /**
    The text align direction, "left", "center", "right" or "justified". Defaults to no alignment (inheret)

    @property align
    @type String
  */
  align: null,

  // Computed
  alignModifier: computed('align', function() {
    if (this.align) {
      return `al-${this.align}`;
    }
  }),

  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*alignModifier',
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