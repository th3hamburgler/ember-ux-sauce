import Mixin from '@ember/object/mixin';
/**
  Add text-align arguments to a component

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

  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*align',
    ]);
  },
  registerModifiers: function() {
    if (this._super) {
      this._super(...arguments);
    }
  },
});