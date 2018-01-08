import Ember from 'ember';
import layout from '../templates/components/uxs-button';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';

const {
  Component,
} = Ember;

const Button = Component.extend(Buttonable, Clickable, PropTypeMixin, {
  // Attributes
  layout,
  propTypes: {
    loading: PropTypes.bool,
    loadingText: PropTypes.string,
  },
});

Button.reopenClass({
  positionalParams: ['text'],
});

export default Button;
