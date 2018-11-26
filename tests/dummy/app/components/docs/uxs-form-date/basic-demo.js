import Component from '@ember/component';
import moment from 'moment';

export default Component.extend({
  // Attributes
  disabled: false,
  inline: false,
  style: null,
  date: moment().format('YYYY-MM-DD'),
  time: moment().format('HH:mm'),
  datetime: moment().format(),
  // Actions
  actions: {
    // BEGIN-SNIPPET form-date-time-action
    setDate(dates, format, ref) {
      window.alert({
        dates,
        format,
        ref
      });
    },
    setTime(dates, format, ref) {
      window.alert({
        dates,
        format,
        ref
      });
    },
    // END-SNIPPET
  }
});