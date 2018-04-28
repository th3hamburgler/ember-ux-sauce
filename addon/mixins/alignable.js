import Mixin from '@ember/object/mixin';
import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
/**
  Add text-align arguments to a component

  @class Accessible
  @namespace Mixins
*/
export default Mixin.create(PropTypeMixin, {
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
    this.set('propTypes', {
      align: PropTypes.oneOfType([
        PropTypes.null,
        PropTypes.string,
      ]),
    });
  },
  registerModifiers: function() {
    if (this._super) {
      this._super(...arguments);
    }
  },
  /**
   * Init any property defaults
   */
  getDefaultProps() {
    return {
      align: 'left',
    };
  },
});