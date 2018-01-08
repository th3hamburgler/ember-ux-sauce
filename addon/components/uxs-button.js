import Component from '@ember/component';
import layout from '../templates/components/uxs-button';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';

const Button = Component.extend(Buttonable, Clickable, PropTypeMixin, {
  // Attributes
  layout,
  // Methods
  init() {
    this._super(...arguments);

    this.get('propTypes', {
      loading: PropTypes.bool,
      loadingText: PropTypes.string,
    });
  },
});

Button.reopenClass({
  positionalParams: ['text'],
});

export default Button;
