import Mixin from '@ember/object/mixin';
import {
  equal
} from '@ember/object/computed';
import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';

export default Mixin.create(PropTypeMixin, {
  // Attributes
  align: null,
  // Computed
  isAccent: equal('style', 'accent'),
  isAlert: equal('style', 'alert'),
  isPrimary: equal('style', 'primary'),
  isWarning: equal('style', 'warning'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'isAccent:c-accent',
      'isAlert:c-alert',
      'isPrimary:c-primary',
      'isWarning:c-warning',
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