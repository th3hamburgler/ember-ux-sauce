import Component from '@ember/component';
import layout from '../templates/components/uxs-text';
import Textable from '../mixins/textable';
import {
  computed
} from '@ember/object';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import {
  oneWay
} from '@ember/object/computed';

/**
  A general typographic component to render text

  ```hbs
  {{uxs-text "Lorem ipsum dolar" "headline-3"}}

  {{#uxs-text type="overline"}}Lorem ipsum dolar"{{/uxs-text}}
  ```

  @class UXS Text
  @public
*/
export default Component.extend(Clickable, Textable, {
  /**
   The text align direction, 'left', 'center', 'right' or 'justified'.
   Defaults to no alignment (inheret from parents)

   @argument align
   @type     String
   @default  null
   @public
   */
  align: null,
  /**
   The BEM base name for this component.<br>
   Defaults to uxs-body-1 but can be changed by passing in a _type_ attribute<br>
   e.g. {{uxs-text "Foo" type="header-4"}}

   @argument base
   @type     String
   @default  'uxs-body-1'
   @public
   */
  base: computed('type', function() {
    if (this.type) {
      return `uxs-${this.type}`;
    }
    return 'uxs-body-1';
  }),
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
    Adds a color modifier to the component.<br/>
    Standard options are 'white', 'light', 'mid', 'grey', 'dark', 'primary', 'accent', 'success', 'warning'  or 'error'.<br/>
    Defaults to no style (inheret from parents).

    @argument color
    @type String
    @public
    */
  color: null,
  /**
    Path to the component template file

    @property layout
    @type     String
    @private
    */
  layout,
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
    Define the font-size of the component.<br/>
    Available scales are body-1 (16px) & body-2 (14px)<br/>
    Defaults to null (inherit font-size from parents)

    @argument scale
    @default null
    @type String
    @public
  */
  scale: 1,
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
    @default    'ol'
    @public
    */
  tagName: 'div',
  /**
    Set to true to truncate the text to one line

    @argument truncate
    @type Boolean
    @default null
    @public
  */
  truncate: false,
  /**
    Set to the name of the type scale you want to render.
    Available types are:<br>
    - headline-1~6<br>
    - subtitle-1~2<br>
    - body-1~2<br>
    - caption<br>
    - overline<br>
    - button

    @argument type
    @type     String
    @default  'body-1'
    @public
  */
  type: 'body-1',
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
  /**
    Define the weight of the component.<br/>
    Standard options are 'bold', 'medium' or 'light'. Defaults to no weight (inhered)

    @argument weight
    @default null
    @type String
    @public
  */
  weight: null,
}).reopenClass({
  positionalParams: ['text', 'type'],
});