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
import hasClasses from '../../helpers/has-classes';

module('Integration | Component | uxs-data', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs `{{uxs-data}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs `
      {{#uxs-data}}
        template block text
      {{/uxs-data}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it has accessibility roles', async function(assert) {

    await render(hbs `{{uxs-data name="my-data"}}`);

    const list = this.element.querySelector('[data-test-data=my-data]');

    assert.equal(list.getAttribute('role'), 'list');

  });
  test('it renders uxs-data and passes arguments to children', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // Template block usage:
    await render(hbs `
      {{#uxs-data
        padded=true
        inset=true
        display="cell"
        name="my-data"
        style="primary"
        color="accent"
      as |data|}}
        {{#data.item
        as |item|}}
          {{item.label "My Label"}}
          {{item.value "My Value"}}
          {{item.tip "My Tip"}}
        {{/data.item}}
      {{/uxs-data}}
    `);

    let data = this.element.querySelector('[data-test-data="my-data"]'),
      item = this.element.querySelector('[data-test-data-item="my-data"]'),
      label = this.element.querySelector('[data-test-data-label="my-data"]'),
      value = this.element.querySelector('[data-test-data-value="my-data"]'),
      tip = this.element.querySelector('[data-test-data-tip="my-data"]');

    // Should have the following classes
    hasClasses(assert, data, [
      'uxs-data',
      'uxs-data--cell',
      'uxs-data--inset',
      'uxs-data--padded',
      'uxs-data--primary',
      'uxs-data--c-accent',
    ]);
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