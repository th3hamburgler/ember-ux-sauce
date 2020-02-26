import Mixin from '@ember/object/mixin';
import {
  computed
} from '@ember/object';
import {
  isEmpty
} from '@ember/utils';

/**
  A mixin to add media query based visibility to component

  @class Visible
  @namespace Mixins
  @public
*/
export default Mixin.create({

  /**
    The css display value of the root element
    when it is visible.

    Defaults to _flex-

    @property visibleDisplayType
    @default  'flex'
    @type     String
    @public
  */
  visibleDisplayType: 'flex',

  /**
    Set to true to set a display class on the root.
    The class used will depend on the value of _visibleDisplayType_
    Default is _flex_

    Pass in a media query code to display visible at a break point.
    e.g. visible="md" will add the md:flex class
    @property visible
    @default  null
    @type     String
    @public
  */
  visible: null,

  /**
    Set to true to set a hidden class on the root.
    e.g. _hidden_

    Pass in a media query code to hide at a break point.
    e.g. visible="lg" will add the lg:hidden class
    @property hidden
    @default  null
    @type     String
    @public
  */
  hidden: null,
  /**
    Bound properties to add classes to the component

    @property classNameBindings
    @default  []
    @type     String
    @private
  */
  classNameBindings: [
    'visibleClass',
    'hiddenClass'
  ],
  // Computeds
  visibleClass: computed('visible', function() {
    if (this.visible === true) {
      // visible on all devices
      return this.visibleDisplayType;
    }
    if (!isEmpty(this.visible)) {
      // return the visible mq class e.g. sm:flex
      return `${this.visible}:${this.visibleDisplayType}`;
    }
    return null;
  }),
  hiddenClass: computed('hidden', function() {
    if (this.hidden === true) {
      // hidden on all devices
      return 'hidden';
    }
    if (!isEmpty(this.hidden)) {
      // return the hidden mq class e.g. xl:hidden
      return `${this.hidden}:hidden`;
    }
    return null;
  }),
});