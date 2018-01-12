import FlatPickr from 'ember-ux-sauce/components/uxs-flatpickr';

export default FlatPickr.extend({
  // Attributes
  type: 'date',
  enableTime: true,
  noCalendar: false,
  dateFormat: 'd/m/y',
});