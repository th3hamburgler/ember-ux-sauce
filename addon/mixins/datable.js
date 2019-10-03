import Mixin from '@ember/object/mixin';
/**
  A mixing to give a common functionality to data components

  @class Datable
  @public
*/
export default Mixin.create({
  /**
    Defines the type of layout this data component is presented in

    UXS ships with the following display layouts: list, inline, tabel, cell

    @property display
    @default  "list"
    @type     String
    @public
  */
  display: 'list',
  /**
    If set to true the data components content is displayed "inset" (inside padding) horizontally.

    @property inset
    @default  false
    @type     Boolean
    @public
  */
  inset: false,
  /**
    If set to true the data components content is displayed "offset" (outside padding) horizontally.

    @property padded
    @default  null
    @type     String
    @public
  */
  padded: false,

  //
  // Methods
  //
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*display',
      'inset',
      'padded'
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