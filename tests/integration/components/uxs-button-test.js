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

module('Integration | Component | uxs-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a uxs-button', async function(assert) {

    await render(hbs `{{uxs-button "My Button"}}`);

    assert.equal(this.element.querySelector('[data-test-button-text]').textContent.trim(), "My Button");

    // Template block usage:
    await render(hbs `
      {{#uxs-button}}
        My Button
      {{/uxs-button}}
    `);

    assert.equal(this.element.querySelector('[data-test-button-text]').textContent.trim(), "My Button");
  });

  test('it renders a uxs-button with bem modifiers', async function(assert) {

    // Check default classes
    await render(hbs `{{uxs-button "My Button"}}`);

    // Should have the following default classes
    hasClasses(assert, this.element.querySelector('[data-test-button]'), [
      'uxs-button',
      'uxs-button--contained',
      'uxs-button--rounded',
      'uxs-button--primary',
    ]);

    // Check modifier classes
    await render(hbs `{{uxs-button
      "My Button"
      style="outlined"
      color="accent"
      disabled=true
      radius="round"
      name="my-button"
    }}`);

    // Should have the following classes
    hasClasses(assert, this.element.querySelector('[data-test-button="my-button"]'), [
      'uxs-button',
      'uxs-button--outlined',
      'uxs-button--accent',
      'uxs-button--disabled',
      'uxs-button--round',
    ]);
  });

  test('it renders a uxs-button in a loading state', async function(assert) {
    // Check default classes
    await render(hbs `{{uxs-button "My Button" loading=true}}`);

    // Should have the following default classes
    hasClasses(assert, this.element.querySelector('[data-test-button]'), [
      'uxs-button',
      'uxs-button--contained',
      'uxs-button--rounded',
      'uxs-button--primary',
      'uxs-button--loading',
    ]);
  });
});