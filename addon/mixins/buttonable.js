import {
  computed
} from '@ember/object';
import {
  equal,
  alias
} from '@ember/object/computed';
import Mixin from '@ember/object/mixin';
import {
  dasherize
} from '@ember/string';
import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  get
} from '@ember/object';

export default Mixin.create(Accessible, BEMComponent, PropTypeMixin, Testable, {
  // Attributes
  attributeBindings: ['type'],
  base: 'uxs-button',
  propTypes: {
    inline: PropTypes.bool,
    mini: PropTypes.bool,
    naked: PropTypes.bool,
    selected: PropTypes.bool,
    prefix: PropTypes.bool,
    suffix: PropTypes.bool,
    style: PropTypes.string,
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
  },
  // Computed
  // isAccent: equal('style', 'accent'),
  // isBlack: equal('style', 'black'),
  // isGray: equal('style', 'gray'),
  // isPrimary: equal('style', 'primary'),
  // isWhite: equal('style', 'white'),
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
    let text = get(this, 'text');
    if (text) {
      return dasherize(get(this, 'text'));
    }
    return true;
  }),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'disabled',
      'inline',
      'loading',
      'mini',
      'naked',
      'selected',
      '*style',
      '*size',
      'prefix',
      'suffix',
    ]);
  },
  /**
   * Init any property defaults
   */
  getDefaultProps() {
    return {
      style: null,
      loadingText: 'Loading…',
    };
  },
});