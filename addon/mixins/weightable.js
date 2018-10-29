import Mixin from '@ember/object/mixin';
/**
  Add weight argument to a component

  @class Weightable
  @namespace Mixins
*/
export default Mixin.create({
  // Attributes
  /**
    Define the weight of the component. Standard options are "bold", "medium" or "light". Defaults to no weight (inhered)

    @property weight
    @default null
    @type String
  */
  weight: null,

  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*weight',
    ]);
  },
});