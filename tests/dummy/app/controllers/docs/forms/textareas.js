import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  // Attributes
  value: '',
  rows: 5,
  cols: 20,
  placeholder: 'Placeholder',
  disabled: false,
  maxlength: null,
  wrap: false,
  readonly: false,
  autofocus: false,
  spellcheck: false,
  // Methods
  init() {
    this._super(...arguments);
  },
  // Actions
  actions: {
    // BEGIN-SNIPPET form-textarea-action
    enterPressed(value) {
      Ember.Logger.log(`Enter pressed for ${value}`);
    }
    // END-SNIPPET
  }
});