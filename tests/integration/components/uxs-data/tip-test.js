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

module('Integration | Component | uxs-data/tip', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a uxs-data/tip', async function(assert) {
    // Set any properties with this.set('myProperty', 'tip');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs `{{uxs-data/tip "My Tip"}}`);

    assert.equal(this.element.textContent.trim(), 'My Tip');

    // Template block usage:
    await render(hbs `
      {{#uxs-data/tip}}
        My Tip
      {{/uxs-data/tip}}
    `);

    assert.equal(this.element.textContent.trim(), 'My Tip');
  });

  test('it renders a uxs-data/tip with bem modifiers', async function(assert) {

    // Check default classes
    await render(hbs `{{uxs-data/tip "My Tip"}}`);

    // Should have the following classes
    hasClasses(assert, this.element.querySelector('[data-test-data-tip]'), [
      'uxs-data__tip',
      'uxs-data__tip--list',
    ]);

    // Check modifier classes
    await render(hbs `{{uxs-data/tip
      "My Tip"
      align="right"
      color="primary"
      display="cell"
      inset=true
      name="my-tip"
      padded=true
      size="small"
      style="light"
      truncate=true
      weight="light"
    }}`);

    // Should have the following classes
    hasClasses(assert, this.element.querySelector('[data-test-data-tip="my-tip"]'), [
      'uxs-data__tip',
      'uxs-data__tip--al-right',
      'uxs-data__tip--cell',
      'uxs-data__tip--c-primary',
      'uxs-data__tip--s-small',
      'uxs-data__tip--light',
      'uxs-data__tip--inset',
      'uxs-data__tip--padded',
      'uxs-data__tip--w-light',
      'uxs-data__tip--truncate',
    ]);

  });

});