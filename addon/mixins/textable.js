import Mixin from '@ember/object/mixin';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import Alignable from '../mixins/alignable';
import Colorable from '../mixins/colorable';
import Sizable from '../mixins/sizeable';
import Weightable from '../mixins/weightable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  computed
} from '@ember/object';

/**
  A mixing to give a common functionality to text components

  @class Textable
  @public
*/
export default Mixin.create(Accessible, Alignable, Colorable, Sizable, Weightable, BEMComponent, {
  //
  // Arguments
  // ---------

  /**
    The text align direction, "left", "center", "right" or "justified". Defaults to no alignment (inheret)

    @property align
    @default  null
    @type     String
    @see      alignable
    @public
  */

  /**
    Set the color the components text.

    UXS ships with the following stock colors: primary, accent, warning, error, dark, grey, mid, light & white. More can be added to the $defaultColors array.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _--my-custom-style_

    @property color
    @default  null
    @type     String
    @see      colorable
    @public
  */

  /**
    Define the size of the component. Standard options are "giant", "huge", "large", "medium", "small", or "tiny". Defaults to no size (inhered)

    @property size
    @default  null
    @type     String
    @see      sizable
    @public
  */

  /**
    Set to true to truncate the text to one line

    @property truncate
    @default null
    @type Boolean
    @public
  */
  truncate: false,

  /**
    Define the weight of the component. Standard options are "bold", "medium" or "light". Defaults to no weight (inhered)

    @property weight
    @default  null
    @type     String
    @see      weightable
    @public
  */

  typeMod: computed('type', function() {
    if (this.type) {
      return `ty-${this.type}`;
    }
  }),

  //
  // Methods
  //
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'truncate',
      '*typeMod',
    ]);
  },
  /**
   * This is a placeholder function that will be overridden
   * by the registerModifiers function from BEMComponent mixin
   * for any component that uses this mixin
   */
  registerModifiers: function() {
    if (this._super) {
      this._super(...arguments);
    }
  },
});