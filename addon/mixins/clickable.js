import Mixin from '@ember/object/mixin';

import {
  bool
} from '@ember/object/computed';
import {
  oneWay
} from '@ember/object/computed';
/**
  A mixin to add click support to a component.
  @class Clickable
  @namespace Mixins
  @public
*/
export default Mixin.create({
  // Attributes
  /**
    The name of the action to fire on click
    @property onClick
    @default  null
    @type     closure
    @public
  */
  onClick: null, //() {},
  /**
    The name of the task performed on click
    @property teak
    @default  null
    @type     task
    @public
  */
  task: null,
  /**
    Add a role to the item for accessibility
    @property role
    @default  'button'
    @type     {string}
    @public
  */
  role: 'button',
  /**
    Return true to allow this components events to
    bubble to parent elements
    @property bubbles
    @default  false
    @type     {boolean}
    @public
  */
  bubbles: false,
  disabled: oneWay('task.isRunning'),
  loading: oneWay('task.isRunning'),

  // Events
  click(event) {
    let task = this.get('task'),
      onClick = this.get('onClick');

    if (task) {
      window.console.log('clickable: click', task, onClick, this);
      window.console.log('clickable: task');
      task.perform();
      return this.bubbles;
    } else if (onClick) {
      window.console.log('clickable: click', task, onClick, this);
      window.console.log('clickable: action');
      onClick(event);
      return this.bubbles;
    } else {
      // This component is not clickable - make
      // sure we return true to bubble the dom
      return true;
    }
  },
  hasClickAction: bool('onClick'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['disabled', 'hasClickAction:clickable'])
  },
});