import Component from '@ember/component';
import layout from '../templates/components/uxs-div';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  oneWay
} from '@ember/object/computed';
/**
  A component to render a general div component

  ```hbs
  {{#uxs-div}}
    ...
  {{/uxs-div}}
  ```
  @class UXS Div
  @public
*/
export default Component.extend(BEMComponent, Clickable, Testable, {
  /**
    Path to the component template file

    @property layout
    @type     String
    @private
    */
  layout,
  /**
   The BEM base name for this component

   @argument base
   @type     String
   @default  'uxs-div'
   @public
   */
  base: 'uxs-div',
  /**
    Return true to allow this component event to
    bubble to parent elements

    @argument bubbles
    @default  false
    @type     {boolean}
    @public
  */
  bubbles: false,
  /**
    Set to true to disable this component.

    This will activate it's disabled style and also prevent any actions from being fired.

    @argument disabled
    @type     Boolean
    @default  false
    @public
   */
  disabled: oneWay('task.isRunning'),
  /**
    Set to true if the component has already been pressed or should be disabled while another action takes place. If the component is passed a task it will display the loading state automatically while the task is running

    If the _loadingText_ argument has been provided this will be displayed, defaults to "Loading…".

    This will activate it's loading style and also prevent any actions from being fired..

    @argument loading
    @type     Boolean
    @default  false
    @public
   */
  loading: oneWay('task.isRunning'),
  /**
    The name property is used as the value for test selectors.<br/>
    For example the foo-component would have the following selector:
    ```
    {{foo-component name="bar"}}

    [data-test-foo="bar"]
    ```

    The default is true, which adds the attribute with no value.

    If set to false the test selector is not rendered.
    @property name
    @default  true
    @type     {(boolean|string)}
    @public
  */
  name: true,
  /**
    The name of the action to fire on click<br>
    NOTE: if you assign a value to this action it will block the dom event and prevent bubbling by default

    @argument onClick
    @default  null
    @type     closure
    @public
  */
  onClick: null,
  /**
    Add an html role to the component for accessibility

    @argument role
    @default  ''
    @type     string
    @public
  */
  role: '',
  /**
    Set's the component style to a selected state.

    Can be used to toggle components or to infer an active state without disabling the components action.

    @argument selected
    @type     Boolean
    @default  selected
    @public
   */
  selected: null,
  /**
    The html tag name for the root of the component

    @argument  tagName
    @type       String
    @default    'button'
    @public
    */
  tagName: 'div',
  /**
    The name of the ember concurrency task to
    perform on click. If a task is defined that
    will take presedence over an onClick action

    @argument task
    @default  null
    @type     task
    @public
  */
  task: null,
});