import Mixin from '@ember/object/mixin';

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
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*size',
    ]);
  },
  registerModifiers: function() {
    if (this._super) {
      this._super(...arguments);
    }
  },
});