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

module('Integration | Component | uxs-fab', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs `{{uxs-fab "my-icon"}}`);

    assert.equal(this.element.querySelector('[data-test-fab-icon]').textContent.trim(), 'my-icon');
  });

  test('it renders a uxs-fab with bem modifiers', async function(assert) {

    // Check default classes
    await render(hbs `{{uxs-fab "my-icon"}}`);

    // Should have the following default classes
    hasClasses(assert, this.element.querySelector('[data-test-fab]'), [
      'uxs-fab',
      'uxs-fab--regular',
      'uxs-fab--primary',
    ]);

    // Check modifier classes
    await render(hbs `{{uxs-fab
      "my-icon"
      style="mini"
      color="accent"
      disabled=true
      name="my-fab"
    }}`);

    // Should have the following classes
    hasClasses(assert, this.element.querySelector('[data-test-fab="my-fab"]'), [
      'uxs-fab',
      'uxs-fab--mini',
      'uxs-fab--accent',
      'uxs-fab--disabled',
    ]);
  });

  test('it renders a uxs-fab in a loading state', async function(assert) {
    // Check default classes
    await render(hbs `{{uxs-fab "my-icon" loading=true}}`);

    // Should have the following default classes
    hasClasses(assert, this.element.querySelector('[data-test-fab]'), [
      'uxs-fab',
      'uxs-fab--regular',
      'uxs-fab--primary',
      'uxs-fab--loading',
    ]);
  });
});