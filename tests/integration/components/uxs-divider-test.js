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

module('Integration | Component | uxs-divider', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a horizontal divider', async function(assert) {
    await render(hbs `{{uxs-divider}}`);

    assert.equal(this.element.querySelector('[data-test-divider]').textContent.trim(), "");

    // Should have the following default classes
    hasClasses(assert, this.element.querySelector('[data-test-divider]'), [
      'uxs-divider',
      'uxs-divider--horizontal',
    ]);
  });

  test('it renders a vertical divider', async function(assert) {
    await render(hbs `{{uxs-divider orientation="vertical"}}`);

    assert.equal(this.element.querySelector('[data-test-divider]').textContent.trim(), "");

    // Should have the following default classes
    hasClasses(assert, this.element.querySelector('[data-test-divider]'), [
      'uxs-divider',
      'uxs-divider--vertical',
    ]);
  });
});