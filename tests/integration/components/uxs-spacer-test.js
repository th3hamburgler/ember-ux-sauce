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

module('Integration | Component | uxs-spacer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs `{{uxs-spacer}}`);

    assert.equal(this.element.querySelector('[data-test-spacer]').textContent.trim(), "");

    // Should have the following default classes
    hasClasses(assert, this.element.querySelector('[data-test-spacer]'), [
      'uxs-spacer',
    ]);
  });
});