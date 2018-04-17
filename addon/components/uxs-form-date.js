import FlatPickr from 'ember-ux-sauce/components/uxs-flatpickr';

export default FlatPickr.extend({
  // Attributes
  type: 'date',
  enableTime: false,
  noCalendar: false,
  dateFormat: 'd/m/y',
});