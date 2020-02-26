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
import {
  isEmpty
} from '@ember/utils';

export default Mixin.create(Accessible, BEMComponent, Testable, {
  // Attributes
  attributeBindings: ['type'],
  base: 'uxs-button',
  loadingText: 'Loading…',
  /**
   The set to true if you want this button to appear as a full width block
   This will set the button to 100% width of its parent and add a bottom margin.

   Pass in a media query code to display block at a break point and under.
   e.g. block="md" will add the uxs-button--md:block class

   @property block
   @type     String/Boolean
   @default  null
   @public
   */
  block: null,

  /**
   The set to true if you want this button to appear inline with other buttons.
   This will add horizontal margins.

   Pass in a media query code to display inline at a break point and above.
   e.g. inline="md" will add the uxs-button--md:inline class

   @property inline
   @type     String/Boolean
   @default  null
   @public
   */
  inline: null,
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
  /**
   * Enable the user to either set the button to block on
   * all devices _block=true_ or at and under a given mq level
   * _block="md"_
   */
  blockClass: computed('block', function() {
    if (this.block === true) {
      // visible on all devices
      return 'block';
    }
    if (!isEmpty(this.block)) {
      // return the visible mq class e.g. sm:block
      return `${this.block}:block`;
    }
    return null;
  }),
  /**
   * Enable the user to either set the button to inline on
   * all devices _inline=true_ or at and over a given mq level
   * _inline="md"_
   */
  inlineClass: computed('inline', function() {
    if (this.inline === true) {
      // visible on all devices
      return 'inline';
    }
    if (!isEmpty(this.inline)) {
      // return the visible mq class e.g. sm:inline
      return `${this.inline}:inline`;
    }
    return null;
  }),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'loading',
      'selected',
      '*blockClass',
      '*inlineClass',
    ]);
  },
});