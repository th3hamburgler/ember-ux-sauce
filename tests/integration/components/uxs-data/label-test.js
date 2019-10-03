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

module('Integration | Component | uxs-data/label', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a uxs-data/label', async function(assert) {

    await render(hbs `{{uxs-data/label "My Label"}}`);

    assert.equal(this.element.textContent.trim(), "My Label");

    // Template block usage:
    await render(hbs `
      {{#uxs-data/label}}
        My Label
      {{/uxs-data/label}}
    `);

    assert.equal(this.element.textContent.trim(), "My Label");
  });

  test('it renders a uxs-data/label with bem modifiers', async function(assert) {

    // Check default classes
    await render(hbs `{{uxs-data/label "My Label"}}`);

    // Should have the following classes
    hasClasses(assert, this.element.querySelector('[data-test-data-label]'), [
      'uxs-data__label',
      'uxs-data__label--list',
    ]);

    // Check modifier classes
    await render(hbs `{{uxs-data/label
      "My Label"
      align="right"
      color="primary"
      display="cell"
      inset=true
      name="my-label"
      padded=true
      size="small"
      style="light"
      truncate=true
      weight="light"
    }}`);

    // Should have the following classes
    hasClasses(assert, this.element.querySelector('[data-test-data-label="my-label"]'), [
      'uxs-data__label',
      'uxs-data__label--al-right',
      'uxs-data__label--cell',
      'uxs-data__label--c-primary',
      'uxs-data__label--s-small',
      'uxs-data__label--light',
      'uxs-data__label--inset',
      'uxs-data__label--padded',
      'uxs-data__label--w-light',
      'uxs-data__label--truncate',
    ]);

  });

});