import FlatPickr from 'ember-ux-sauce/components/uxs-flatpickr';

export default FlatPickr.extend({
  // Attributes
  type: 'datetime',
  enableTime: true,
  noCalendar: false,
  dateFormat: 'd/m/y H:i',
});