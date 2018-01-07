import Ember from 'ember';
import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-button-group';

const {
  computed: {
    equal,
  },
} = Ember;

export default Ember.Component.extend(BEMComponent, PropTypeMixin, Testable, {
  // Attribues
  base: 'uxs-button-group',
  modifiers: [
    'isAlignCenter:center',
    'disabled',
    'inline',
    'isAlignLeft:left',
    'mini',
    'isAlignRight:right',
  ],
  propTypes: {
    align: PropTypes.oneOfType([
      PropTypes.null,
      PropTypes.string,
    ]),
    disabled: PropTypes.bool,
    inline: PropTypes.bool,
    mini: PropTypes.bool,
  },
  layout,
  // Computed
  isAlignCenter: equal('align', 'center'),
  isAlignLeft: equal('align', 'left'),
  isAlignRight: equal('align', 'right'),
  // Methods
  //
  /**
   * Init any property defaults
   */
  getDefaultProps() {
    return {
      disabled: false,
      inline: false,
      mini: false,
    };
  },
});
