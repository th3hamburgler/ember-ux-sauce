import Component from '@ember/component';
import moment from 'moment';

export default Component.extend({
  // Attributes
  date: moment().format('YYYY-MM-DD'),
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
    // END-SNIPPET
  }
});