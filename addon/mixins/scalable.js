import Mixin from '@ember/object/mixin';
/**
  A mixing to give a text scale modifier functionality to text components

  @class Scalable
  @namespace Mixins
  @public
*/
export default Mixin.create({

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
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
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