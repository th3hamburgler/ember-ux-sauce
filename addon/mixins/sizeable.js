import Mixin from '@ember/object/mixin';
import {
  computed
} from '@ember/object';

/**
  Add size modifier to a component

  @class Sizable
  @namespace Mixins
*/
export default Mixin.create({
  // Attributes
  /**
    Define the size of the component. Standard options are "giant", "huge", "large", "medium", "small", or "tiny". Defaults to no size (inhered)

    @property size
    @default null
    @type String
  */
  size: null,

  // Computed
  sizeModifier: computed('size', function() {
    if (this.size) {
      return `s-${this.size}`;
    }
  }),

  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*sizeModifier',
    ]);
  },
  /**
   * This is a placeholder function that will be overridden
   * by the registerModifiers function from BEMComponent mixin
   * for any component that uses this mixin
   */
  registerModifiers: function() {
    if (this._super) {
      this._super(...arguments);
    }
  },
});