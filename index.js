'use strict';

module.exports = {
  name: 'ember-ux-sauce',
  setupPreprocessorRegistry(type, registry) {
    if (!this.isDevelopingAddon()) {
      const cpValidationsAddon = this.addons.find(addon => addon.name === 'ember-cp-validations');
      if (cpValidationsAddon && cpValidationsAddon.setupPreprocessorRegistry) {
        cpValidationsAddon.setupPreprocessorRegistry(type, registry);
      }
    }
  },
  included: function( /* app */ ) {
    this._super.included.apply(this, arguments);
  }
};