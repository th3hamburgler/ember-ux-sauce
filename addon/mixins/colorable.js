import Mixin from '@ember/object/mixin';
import {
  get
} from '@ember/object';
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
    get(this, 'modifiers').pushObjects([
      'isAccent:c-accent',
      'isAlert:c-alert',
      'isPrimary:c-primary',
      'isWarning:c-warning',
    ]);
    this._super(...arguments);
    this.set('propTypes', {
      style: PropTypes.oneOfType([
        PropTypes.null,
        PropTypes.string,
      ]),
    });
  },
});