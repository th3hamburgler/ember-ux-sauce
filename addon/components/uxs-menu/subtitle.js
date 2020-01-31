import Text from 'ember-ux-sauce/components/uxs-text';

export default Text.extend({
  // Properties
  base: 'uxs-menu__subtitle',
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['*style']);
  },
});