import Ember from 'ember';
import layout from '../templates/components/uxs-button';
import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

const {
  Component,
  computed,
  computed: {
    alias,
    equal,
  },
  String: {
    dasherize,
  },
} = Ember;

const Button = Component.extend(Accessible, BEMComponent, Clickable, PropTypeMixin, Testable, {
  // Attributes
  base: 'uxs-button',
  layout,
  modifiers: [
    'isAccent:accent',
    'isBlack:black',
    'disabled',
    'inline',
    'isGray:gray',
    'mini',
    'naked',
    'isPrimary:primary',
    'selected',
    'isWhite:white',
  ],
  propTypes: {
    inline: PropTypes.bool,
    mini: PropTypes.bool,
    naked: PropTypes.bool,
    selected: PropTypes.bool,
    style: PropTypes.oneOf(['accent', 'black', 'gray', 'primary', 'white']),
    text: PropTypes.string.isRequired,
  },
  // Computed
  isAccent: equal('style', 'accent'),
  isBlack: equal('style', 'black'),
  isGray: equal('style', 'gray'),
  isPrimary: equal('style', 'primary'),
  isWhite: equal('style', 'white'),
  /**
   * Alias for the aria accesibility label
   */
  label: alias('text'),
  /**
   * Default the component name to dasherized text
   */
  name: computed('text', function() {
    return dasherize(this.get('text'));
  }),
  // Methods
  //
  /**
   * Init any property defaults
   */
  getDefaultProps() {
    return {
      style: 'primary',
    };
  },
});

Button.reopenClass({
  positionalParams: ['text'],
});

export default Button;
