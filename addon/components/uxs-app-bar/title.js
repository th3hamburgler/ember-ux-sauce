import Text from 'ember-ux-sauce/components/uxs-text';

export default Text.extend({
  // Properties
  base: 'uxs-app-bar__title',
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['*color', '*style']);
  },
});