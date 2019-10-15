import {
  module,
  test
} from 'qunit';
import {
  setupRenderingTest
} from 'ember-qunit';
import {
  render
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import hasClasses from '../../../helpers/has-classes';

module('Integration | Component | uxs-data/item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders uxs-data/item', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs `{{uxs-data/item}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs `
      {{#uxs-data/item}}
        template block text
      {{/uxs-data/item}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it renders a uxs-data/item with empty value', async function(assert) {
    let value;

    // Test component detects null values
    await render(hbs `{{uxs-data/item "My Label" "" "My Tip" name="my-data"}}`);
    value = this.element.querySelector('[data-test-data-value]');
    assert.equal(value.textContent.trim(), 'n/a');

    await render(hbs `{{uxs-data/item "My Label" null "My Tip" name="my-data"}}`);
    value = this.element.querySelector('[data-test-data-value]');
    assert.equal(value.textContent.trim(), 'n/a');

    await render(hbs `{{uxs-data/item "My Label"}}`);
    value = this.element.querySelector('[data-test-data-value]');
    assert.equal(value.textContent.trim(), 'n/a');

    // Test component detects common non null values
    await render(hbs `{{uxs-data/item "My Label" 0}}`);
    value = this.element.querySelector('[data-test-data-value]');
    assert.equal(value.textContent.trim(), '0');

    await render(hbs `{{uxs-data/item "My Label" "false"}}`);
    value = this.element.querySelector('[data-test-data-value]');
    assert.equal(value.textContent.trim(), 'false');

    // Test emptyText override
    await render(hbs `{{uxs-data/item "My Label" "" emptyText="Got nuthing"}}`);
    value = this.element.querySelector('[data-test-data-value]');
    assert.equal(value.textContent.trim(), 'Got nuthing');

    // Test empty does not show on block use
    await render(hbs `
    {{#uxs-data/item label="My Label" as |item|}}
      {{item.value "Foo"}}
    {{/uxs-data/item}}
    `);
    value = this.element.querySelector('[data-test-data-value]');
    assert.equal(value.textContent.trim(), 'Foo');

    await render(hbs `{{#uxs-data/item}}{{/uxs-data/item}}`);
    value = this.element.querySelector('[data-test-data-value]');
    assert.ok(!value);


  });

  test('it has accessibility roles', async function(assert) {

    await render(hbs `{{uxs-data/item "My Label" "My Value" "My Tip" name="my-data"}}`);

    const item = this.element.querySelector('[data-test-data-item=my-data]'),
      value = this.element.querySelector('[data-test-data-value=my-data]');

    assert.equal(item.getAttribute('role'), 'listitem');
    assert.equal(value.getAttribute('aria-label'), 'My Label');

  });

  test('it renders uxs-data/item with label, value and tip', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs `{{uxs-data/item "My Label" "My Value" "My Tip"}}`);

    assert.equal(this.element.querySelector('[data-test-data-label]').textContent.trim(), 'My Label');
    assert.equal(this.element.querySelector('[data-test-data-value]').textContent.trim(), 'My Value');
    assert.equal(this.element.querySelector('[data-test-data-tip]').textContent.trim(), 'My Tip');

    // Template block usage:
    await render(hbs `
      {{#uxs-data/item as |item|}}
        {{item.label "My Label"}}
        {{item.value "My Value"}}
        {{item.tip "My Tip"}}
      {{/uxs-data/item}}
    `);

    assert.equal(this.element.querySelector('[data-test-data-label]').textContent.trim(), 'My Label');
    assert.equal(this.element.querySelector('[data-test-data-value]').textContent.trim(), 'My Value');
    assert.equal(this.element.querySelector('[data-test-data-tip]').textContent.trim(), 'My Tip');
  });

  test('it renders uxs-data/item and passes arguments to children', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs `{{uxs-data/item
      "My Label"
      "My Value"
      "My Tip"
      padded=true
      inset=true
      display="cell"
      name="my-data"
    }}`);

    let item = this.element.querySelector('[data-test-data-item="my-data"]'),
      label = this.element.querySelector('[data-test-data-label="my-data"]'),
      value = this.element.querySelector('[data-test-data-value="my-data"]'),
      tip = this.element.querySelector('[data-test-data-tip="my-data"]');

    // Should have the following classes
    hasClasses(assert, item, [
      'uxs-data__item',
      'uxs-data__item--cell',
      'uxs-data__item--inset',
      'uxs-data__item--padded',
    ]);
    hasClasses(assert, label, [
      'uxs-data__label',
      'uxs-data__label--cell',
      'uxs-data__label--inset',
      'uxs-data__label--padded',
    ]);
    hasClasses(assert, value, [
      'uxs-data__value',
      'uxs-data__value--cell',
      'uxs-data__value--inset',
      'uxs-data__value--padded',
    ]);
    hasClasses(assert, tip, [
      'uxs-data__tip',
      'uxs-data__tip--cell',
      'uxs-data__tip--inset',
      'uxs-data__tip--padded',
    ]);

    // Template block usage:
    await render(hbs `
      {{#uxs-data/item
        padded=true
        inset=true
        display="cell"
        name="my-data"
      as |item|}}
        {{item.label "My Label"}}
        {{item.value "My Value"}}
        {{item.tip "My Tip"}}
      {{/uxs-data/item}}
    `);

    item = this.element.querySelector('[data-test-data-item="my-data"]');
    label = this.element.querySelector('[data-test-data-label="my-data"]');
    value = this.element.querySelector('[data-test-data-value="my-data"]');
    tip = this.element.querySelector('[data-test-data-tip="my-data"]');

    // Should have the following classes
    hasClasses(assert, item, [
      'uxs-data__item',
      'uxs-data__item--cell',
      'uxs-data__item--inset',
      'uxs-data__item--padded',
    ]);
    hasClasses(assert, label, [
      'uxs-data__label',
      'uxs-data__label--cell',
      'uxs-data__label--inset',
      'uxs-data__label--padded',
    ]);
    hasClasses(assert, value, [
      'uxs-data__value',
      'uxs-data__value--cell',
      'uxs-data__value--inset',
      'uxs-data__value--padded',
    ]);
    hasClasses(assert, tip, [
      'uxs-data__tip',
      'uxs-data__tip--cell',
      'uxs-data__tip--inset',
      'uxs-data__tip--padded',
    ]);
  });
});