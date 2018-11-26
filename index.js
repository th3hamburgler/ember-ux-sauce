'use strict';

module.exports = {
  name: require('./package').name,
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
  },
  // #TODO: Add back for power select
  // contentFor: function(type, config) {
  //   /**
  //    * Ensure we include the ember wormhole placeholder
  //    * in the main index.html dom
  //    **/
  //   if (type === 'body-footer') {
  //     var emberBasicDropdown = this.addons.filter(function(addon) {
  //       return addon.name === 'ember-power-select';
  //     })[0];
  //     return emberBasicDropdown.contentFor(type, config);
  //   } else {
  //     return '';
  //   }
  // },
};