import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-form-label';

export default Ember.TextField.extend(BEMComponent, PropTypeMixin, Testable, {
  // Attributes
  base: 'uxs-form__input',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.set('propTypes', {
      type: PropTypes.string,
      disabled: PropTypes.boolean,
    });
    this.set('modifiers', [
      'disabled',
    ]);
  },
});