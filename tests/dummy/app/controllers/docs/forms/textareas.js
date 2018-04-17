import Controller from '@ember/controller';
import Ember from 'ember';
import {
  computed
} from '@ember/object';

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
  // Computed
  darkStyles: computed(function() {
    return [
      'primary',
      'accent',
      'dark',
      'grey',
      'success',
      'warning',
      'error',
    ];
  }),
  lightStyles: computed(function() {
    return [
      'mid',
      'light',
      'white',
    ];
  }),
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