import { copy } from '@ember/object/internals';
import { alias } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';
import Mixin from '@ember/object/mixin';
import Ember from 'ember';

/**
  A mixin to add ember test selectors to a component.
  @class Testable
  @namespace Mixins
  @public
*/
export default Mixin.create({
  // Attributes
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
  // Computed
  testSelectorValue: alias('name'),
  /**
    The base property is used as the value for test selectors.<br/>
    For example the foo-component would have the following selector:
    ```
    {{foo-component base="foo"}}

    [data-test-foo]
    ```

    **NOTE:** The base property is also used by the bem-component mixin. If you need test selector base to differ you can set _testSelectorName_ instead.
    @property base
    @default  true
    @type     {(string)}
    @public
  */
  testSelectorName: alias('base'),
  // Methods
  init() {
    this._super(...arguments);
    this._defineAttributeBindings();
  },
  /**
   * Add a attributeBindings computed property
   * that will add base classes
   */
  _defineAttributeBindings() {
    // Get existing bindings
    let attributeBindings = this.get('attributeBindings'),
      selector = this.get('testSelectorName');

    if (isEmpty(selector)) {
      Ember.Logger.warn(`Missing testSelectorName from Testable commponent. Please define "base".`);
    }

    // Create of modify attributeBindings
    if (isEmpty(attributeBindings)) {
      attributeBindings = [];
    } else {
      attributeBindings = copy(attributeBindings);
    }
    // Add attribute computed property
    attributeBindings.push(`testSelectorValue:data-test-${selector}`);

    this.set('attributeBindings', attributeBindings);
  },
});
