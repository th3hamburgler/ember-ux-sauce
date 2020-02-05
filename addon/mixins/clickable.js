import Mixin from '@ember/object/mixin';
import {
  or
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
    The name of the action to fire on click<br>
    NOTE: if you assign a value to this action it will block the dom event and prevent bubbling by default

    @property onClick
    @default  null
    @type     closure
    @public
  */
  onClick: null,
  /**
    The name of the task performed on click
    @property task
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
  /**
    Set to true to disable the component.<br>
    This will activate it's disabled style and also prevent any actions from being fired.<br>
    If the button is passed a task it will display the loading state automatically while the task is running

    @property disabled
    @type     Boolean
    @default  false
    @public
   */
  disabled: oneWay('task.isRunning'),
  /**
    Set to true if the component has already been pressed or should be disabled while another action takes place.<br>
    If the button is passed a task it will display the loading state automatically while the task is running<br>
    This will activate it's loading style and also prevent any actions from being fired..

    @property loading
    @type     Boolean
    @default  false
    @public
   */
  loading: oneWay('task.isRunning'),
  // Events
  click(event) {
    let task = this.get('task'),
      onClick = this.get('onClick');

    if (task) {
      task.perform();
      return this.bubbles;
    } else if (onClick) {
      onClick(event);
      return this.bubbles;
    } else {
      // This component is not clickable - make
      // sure we return true to bubble the dom
      return true;
    }
  },
  hasClickAction: or('onClick', 'task'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['disabled', 'hasClickAction:clickable'])
  },
});