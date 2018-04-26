import Mixin from '@ember/object/mixin';
import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';

export default Mixin.create(PropTypeMixin, {
  // Attributes
  align: null,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style',
    ]);
    this.set('propTypes', {
      style: PropTypes.oneOfType([
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
});