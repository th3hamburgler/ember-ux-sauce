import {
  copy
} from '@ember/object/internals';
import {
  alias
} from '@ember/object/computed';
import {
  isEmpty
} from '@ember/utils';
import Mixin from '@ember/object/mixin';
import Ember from 'ember';
import {
  dasherize
} from '@ember/string';

/**
  A mixin to add ember test selectors to a component.

  This mixin adds an attribute binding to the component to produce a [test selector](https://github.com/simplabs/ember-test-selectors).

  By default these attributes are removed in production builds
  
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
    By default a components base property is used as the value for test selectors.
    e.g.
    ```
    {{foo-component base="foo"}}

    [data-test-foo]
    ```

    If you want the test selector to differ you can set it's testSelectorName
    e.g
    ```
    {{foo-component base="foo" testSelectorName="bar"}}

    [data-test-bar]
    ```

    @property testSelectorName
    @default  null
    @type     {(string)}
    @public
  */
  testSelectorName: null,
  // Methods
  init() {
    this._super(...arguments);
    this._defineAttributeBindings();
  },
  /**
   * Find the test selector value for this element
   */
  _getTestSelectorName() {
    let selector = this.get('testSelectorName');

    if (isEmpty(selector)) {
      selector = this.get('base');
    }

    selector = dasherize(selector);
    // turn BEM selectors into dasherised strings
    selector = selector.replace('--', '-');
    selector = selector.replace('__', '-');
    // remove prefix
    selector = selector.replace('uxs-', '');

    return selector;
  },
  /**
   * Add a attributeBindings computed property
   * that will add base classes
   */
  _defineAttributeBindings() {
    // Get existing bindings
    let attributeBindings = this.get('attributeBindings'),
      selector = this._getTestSelectorName();

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