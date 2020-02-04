import {
  computed
} from '@ember/object';
import {
  alias
} from '@ember/object/computed';
import Mixin from '@ember/object/mixin';
import {
  dasherize
} from '@ember/string';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  get
} from '@ember/object';

export default Mixin.create(Accessible, BEMComponent, Testable, {
  // Attributes
  attributeBindings: ['type'],
  base: 'uxs-button',
  loadingText: 'Loading…',
  // Computed
  // isAccent: equal('style', 'accent'),
  // isBlack: equal('style', 'black'),
  // isGray: equal('style', 'gray'),
  // isPrimary: equal('style', 'primary'),
  // isWhite: equal('style', 'white'),
  /**
   * Alias for the aria accesibility label
   *
   * @computed label
   * @type     String
   * @public
   */
  label: alias('text'),
  /**
   * Default the component name to dasherized text
   * If used in block format text will be null, so return true
   * The name property should be set manually in block usage
   *
   * @computed name
   * @type     String
   * @public
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
      'loading',
      'selected',
    ]);
  },
});