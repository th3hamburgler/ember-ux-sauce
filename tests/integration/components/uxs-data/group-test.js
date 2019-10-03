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

module('Integration | Component | uxs-data/group', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders uxs-data/group', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs `{{uxs-data/group}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs `
      {{#uxs-data/group}}
        template block text
      {{/uxs-data/group}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it renders uxs-data/group with multiple items', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });


    // Template block usage:
    await render(hbs `
      {{#uxs-data/group as |group|}}
        {{group.value "Value One" name=1}}
        {{group.value "Value Two" name=2}}
        {{group.value "Value Three" name=3}}
      {{/uxs-data/group}}
    `);

    assert.equal(this.element.querySelector('[data-test-data-value="1"]').textContent.trim(), 'Value One');
    assert.equal(this.element.querySelector('[data-test-data-value="2"]').textContent.trim(), 'Value Two');
    assert.equal(this.element.querySelector('[data-test-data-value="3"]').textContent.trim(), 'Value Three');
  });

  test('it renders uxs-data/group and passes arguments to children', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs `
      {{#uxs-data/group
        padded=true
        inset=true
        display="cell"
        name="my-data"
      as |group|}}
       {{group.value "Value One"}}
      {{/uxs-data/group}}
    `);

    let group = this.element.querySelector('[data-test-data-group="my-data"]'),
      value1 = this.element.querySelector('[data-test-data-value="my-data"');

    // Should have the following classes
    hasClasses(assert, group, [
      'uxs-data__group',
      'uxs-data__group--cell',
      'uxs-data__group--inset',
      'uxs-data__group--padded',
    ]);
    hasClasses(assert, value1, [
      'uxs-data__value',
      'uxs-data__value--cell',
      'uxs-data__value--inset',
      'uxs-data__value--padded',
      'uxs-data__value--grouped',
    ]);
  });
});