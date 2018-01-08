import { computed } from '@ember/object';
import { equal, alias } from '@ember/object/computed';
import Mixin from '@ember/object/mixin';
import { dasherize } from '@ember/string';
import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

export default Mixin.create(Accessible, BEMComponent, PropTypeMixin, Testable, {
  // Attributes
  base: 'uxs-button',
  modifiers: [
    'isAccent:accent',
    'isBlack:black',
    'disabled',
    'inline',
    'isGray:gray',
    'loading',
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
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
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
   * If used in block format text will be null, so return true
   * The name property should be set manually in block usage
   */
  name: computed('text', function() {
    let text = this.get('text');
    if (text) {
      return dasherize(this.get('text'));
    }
    return true;
  }),
  // Methods
  //
  /**
   * Init any property defaults
   */
  getDefaultProps() {
    return {
      style: 'primary',
      loadingText: 'Loading…',
    };
  },
});
