import Mixin from '@ember/object/mixin';
/**
  A mixing to give grouped functionality to the component

  @class Groupable
  @public
*/
export default Mixin.create({
  /**
    Set to true if this component is part of a group

    @property grouped
    @default  null
    @type     Boolean
    @public
  */
  grouped: false,

  //
  // Methods
  //
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'grouped'
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