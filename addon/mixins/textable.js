import Mixin from '@ember/object/mixin';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import Alignable from '../mixins/alignable';
import Colorable from '../mixins/colorable';
import Weightable from '../mixins/weightable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

/**
  A mixing to give a common functionality to text components

  @class Textable
  @namespace Mixins
  @public
*/
export default Mixin.create(Accessible, Alignable, Colorable, Weightable, BEMComponent, {
  /**
   The text align direction, "left", "center", "right" or "justified".
   Defaults to no alignment (inheret from parents)

   @property align
   @default  null
   @type     String
   */
  align: null,
  /**
    Adds a color modifier to the component.<br/>
    Standard options are "white", "light", "mid", "grey", "dark", "primary", "accent", "success", "warning"  or "error".<br/>
    Defaults to no style (inheret from parents).

    @property color
    @type     String
    @public
    */
  color: null,
  /**
    The name of the component.
    This property also used as the default value for the test selector attribute.<br/>
    The default is true, which ensures the test selector is added.<br/>
    If set to false the test selector is not rendered.

    @property name
    @type     Boolean|String
    @public
    */
  name: true,
  /**
    Define the font-size of the component.<br/>
    Available scales are body-1 (16px) & body-2 (14px)<br/>
    Defaults to null (inherit font-size from parents)

    @property scale
    @default  null
    @type     String
    @public
  */
  scale: null,
  /**
    Set to true to truncate the text to one line

    @property truncate
    @default  false
    @type     Boolean
    @public
  */
  truncate: false,
  /**
    Define the weight of the component.<br/>
    Standard options are "bold", "medium" or "light". Defaults to no weight (inhered)

    @property weight
    @default  null
    @type     String
    @public
  */
  weight: null,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'truncate',
      '*scale'
    ]);
  },
  /**
   * This is a placeholder function that will be overridden
   * by the registerModifiers function from BEMComponent mixin
   * for any component that uses this mixin
   *
   * @function registerModifiers
   * @abstract
   */
  registerModifiers: function() {
    if (this._super) {
      this._super(...arguments);
    }
  },
});