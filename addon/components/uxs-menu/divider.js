import Div from 'ember-ux-sauce/components/uxs-div';

export default Div.extend({
  // Properties
  base: 'uxs-menu__divider',
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['*style']);
  },
});