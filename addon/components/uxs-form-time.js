import FlatPickr from 'ember-ux-sauce/components/uxs-flatpickr';

export default FlatPickr.extend({
  // Attributes
  type: 'time',
  enableTime: true,
  noCalendar: true,
  dateFormat: 'H:i',
});