import Component from '@ember/component';
import layout from '../templates/components/uxs-form';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  all,
  task,
  timeout
} from 'ember-concurrency';
export const FORM_STYLES = {
  FILLED: 'filled',
  OUTLINED: 'outlined',
};

/**
  A component to render a form control

  ```hbs
  {{#uxs-form as |form|}}
    //...
  {{/uxs-form}}
  ```
  @class UXS Form
  @public
*/
export default Component.extend(BEMComponent, Testable, {
  // Propertoes
  attributeBindings: ['novalidate'],
  base: 'uxs-form',
  novalidate: true,
  tagName: 'form',
  layout,
  // Attributes
  /**
    Set to true to disable this form.

    The disabled state will be passed to any child controls it yields.

    @argument disabled
    @type     Boolean
    @default  false
    @public
   */
  disabled: false,
  /**
    Set the style of the form.

    The style will be passed to any child controls it yields.

    UXS ships with the following styles:
    - filled
    - outlined

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-form--my-custom-style

    @argument style
    @type     String
    @default  null
    @public
   */
  style: FORM_STYLES.OUTLINED,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['disabled', '*style']);
  },
  /**
    Action to be called on the submission of the form

    @argument onSubmit
    @type     function
    @default  {}()
    @public
   */
  onSubmit() {},
  afterSubmit() {},
  onInvalid() {},
  // Events
  submit(event) {
    event.preventDefault();
    this.submitTask.perform();
  },
  // Tasks
  submitTask: task(function*() {
    console.log('submitTask');
    // Add a small artificail delay on from submission
    // to give the user a better experience
    yield all([
      timeout(750),
      this.onSubmit(),
    ]);
    yield this.afterSubmit();
  })
});