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