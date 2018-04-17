import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';
import moment from 'moment';
import Ember from 'ember';

export default Controller.extend({
  // Attributes
  date: moment().format('YYYY-MM-DD'),
  time: moment().format('HH:mm'),
  datetime: moment().format(),
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
  // Actions
  actions: {
    // BEGIN-SNIPPET form-date-time-action
    setDate(dates, format, ref) {
      Ember.Logger.log({
        dates,
        format,
        ref
      });
    },
    setTime(dates, format, ref) {
      Ember.Logger.log({
        dates,
        format,
        ref
      });
    },
    // END-SNIPPET
  }
});