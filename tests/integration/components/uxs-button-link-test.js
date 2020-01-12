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

module('Integration | Component | uxs-button-link', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a uxs-button-link', async function(assert) {

    await render(hbs `{{uxs-button-link "My Button" "docs.button"}}`);

    assert.equal(this.element.querySelector('[data-test-button-text]').textContent.trim(), "My Button");

    // Template block usage:
    await render(hbs `
      {{#uxs-button-link "docs.button"}}
        My Button
      {{/uxs-button-link}}
    `);

    assert.equal(this.element.querySelector('[data-test-button-text]').textContent.trim(), "My Button");
  });

  test('it renders a uxs-button-link with bem modifiers', async function(assert) {

    // Check default classes
    await render(hbs `{{uxs-button-link "My Button" "docs.button"}}`);

    // Should have the following default classes
    hasClasses(assert, this.element.querySelector('[data-test-button]'), [
      'uxs-button',
      'uxs-button--contained',
      'uxs-button--rounded',
      'uxs-button--primary',
    ]);

    // Check modifier classes
    await render(hbs `{{uxs-button-link
      "My Button"
      "docs.button"
      style="outlined"
      color="accent"
      radius="round"
      name="my-button"
    }}`);

    // Should have the following classes
    hasClasses(assert, this.element.querySelector('[data-test-button="my-button"]'), [
      'uxs-button',
      'uxs-button--outlined',
      'uxs-button--accent',
      'uxs-button--round',
    ]);
  });
});