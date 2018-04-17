import Controller from '@ember/controller';
import Ember from 'ember';
import {
  computed,
  set
} from '@ember/object';

export default Controller.extend({
  // Attributes
  readonly: false,
  placeholder: 'Placeholder',
  disabled: false,
  size: null,
  maxlength: null,
  min: null,
  max: null,
  step: null,
  type: 'text',
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
    set(this, 'typeOptions', [
      'text',
      'password',
      'number',
      'hidden',
      'email',
      'search',
      'tel',
      'url',
    ]);
  },
  // Actions
  actions: {
    // BEGIN-SNIPPET form-input-action
    enterPressed(value) {
      Ember.Logger.log(`Enter pressed for ${value}`);
    }
    // END-SNIPPET
  }
});