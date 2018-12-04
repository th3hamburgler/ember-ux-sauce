import Mixin from '@ember/object/mixin';

export default Mixin.create({
  // Attributes
  /**
    Set the style of the component.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _--my-custom-style_

    @property style
    @type     String
    @default  null
    @public
   */
  style: null,
  // Methods
  init() {
    console.log("BOOP");
    this.registerModifiers([
      '*style',
    ]);
    this._super(...arguments);
  },
  registerModifiers: function() {
    if (this._super) {
      this._super(...arguments);
    }
  },
});