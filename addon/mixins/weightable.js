import Mixin from '@ember/object/mixin';
import {
  computed
} from '@ember/object';

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

  // Computed
  weightModifier: computed('weight', function() {
    if (this.weight) {
      return `w-${this.weight}`;
    }
  }),

  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*weightModifier',
    ]);
  },
});