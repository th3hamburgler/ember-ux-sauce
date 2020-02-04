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

module('Integration | Component | uxs-fab-link', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a uxs-fab-link', async function(assert) {
    await render(hbs `{{uxs-fab-link "add" "docs.fabs"}}`);

    assert.equal(this.element.querySelector('[data-test-fab-icon]').tagName, 'svg');
  });

  test('it renders a uxs-fab-link with bem modifiers', async function(assert) {

    // Check default classes
    await render(hbs `{{uxs-fab-link "add" "docs.fabs"}}`);

    // Should have the following default classes
    hasClasses(assert, this.element.querySelector('[data-test-fab]'), [
      'uxs-fab',
      'uxs-fab--regular',
      'uxs-fab--primary',
    ]);

    // Check modifier classes
    await render(hbs `{{uxs-fab-link
      "add"
      "docs.fabs"
      style="mini"
      color="accent"
      name="my-fab"
    }}`);

    // Should have the following classes
    hasClasses(assert, this.element.querySelector('[data-test-fab="my-fab"]'), [
      'uxs-fab',
      'uxs-fab--mini',
      'uxs-fab--accent',
    ]);
  });

  test('it renders a uxs-fab-link in a disabled state', async function(assert) {
    // Check default classes
    await render(hbs `{{uxs-fab-link "add" "docs.fabs" disabled=true}}`);

    // Should have the following default classes
    hasClasses(assert, this.element.querySelector('[data-test-fab]'), [
      'uxs-fab',
      'uxs-fab--regular',
      'uxs-fab--primary',
      'uxs-fab--disabled',
      'disabled'
    ]);
  });

  test('it renders a uxs-fab-link in a extend style', async function(assert) {
    // Check state with just text
    await render(hbs `{{uxs-fab-link "My Button" "docs.fabs" style="extended"}}`);

    // Should have the following default classes
    hasClasses(assert, this.element.querySelector('[data-test-fab]'), [
      'uxs-fab',
      'uxs-fab--extended',
      'uxs-fab--primary',
    ]);
    assert.equal(this.element.querySelector('[data-test-fab-icon]'), null);
    assert.equal(this.element.querySelector('[data-test-fab-text]').textContent.trim(), 'My Button');

    // Check state with text and icon
    await render(hbs `{{uxs-fab-link "My Button" "docs.fabs" icon="add" style="extended"}}`);

    // Should have the following default classes
    hasClasses(assert, this.element.querySelector('[data-test-fab]'), [
      'uxs-fab',
      'uxs-fab--extended',
      'uxs-fab--primary',
    ]);

    assert.ok(this.element.querySelector('[data-test-fab-icon]'));
    assert.equal(this.element.querySelector('[data-test-fab-icon]').tagName, 'svg');
    assert.equal(this.element.querySelector('[data-test-fab-text]').textContent.trim(), 'My Button');

  });
});