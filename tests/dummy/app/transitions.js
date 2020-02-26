export default function() {

  const duration = 400;

  // Fade in the modal overlay
  this.transition(
    this.matchSelector('#modal-overlay'),
    this.toValue((toValue, fromValue) => toValue === null || fromValue === null),
    this.use('fade', {
      duration: duration
    })
  );

  // Slide drawer model in from the left side of screen
  this.transition(
    this.matchSelector('.drawer-modal__container'),
    this.toValue((toValue, fromValue) => {
      return toValue === 0 && fromValue === null
    }),
    this.use('to-right', {
      duration: duration
    })
  );

  // Slide drawer model out to the left side of screen
  this.transition(
    this.matchSelector('.drawer-modal__container'),
    this.toValue((toValue, fromValue) => {
      return toValue === null && fromValue === 0
    }),
    this.use('to-left', {
      duration: duration
    })
  );
}