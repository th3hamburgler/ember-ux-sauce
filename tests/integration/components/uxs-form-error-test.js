import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-form-error', 'Integration | Component | uxs form error', {
  integration: true
});

test('it renders', function(assert) {
  this.set('error', 'Oooh, that\'s not good');

  this.render(hbs `{{uxs-form-error error name="my-error"}}`);

  let $error = this.$('[data-test-uxs-form__error="my-error"]')

  assert.equal($error.prop("tagName"), 'DIV', 'Has correct tag name');
  assert.equal($error.text().trim(), 'Oooh, that\'s not good', 'Has correct text');
  assert.equal($error.attr("class"), 'uxs uxs-form__error ember-view', true, 'Has correct classes');
});

test('it renders a disabled error', function(assert) {
  this.set('error', 'Oooh, that\'s not good');
  this.set('disabled', true);

  this.render(hbs `{{uxs-form-error error name="my-error" disabled=disabled}}`);

  let $error = this.$('[data-test-uxs-form__error="my-error"]')

  assert.equal($error.prop("tagName"), 'DIV', 'Has correct tag name');
  assert.equal($error.text().trim(), 'Oooh, that\'s not good', 'Has correct text');
  assert.equal($error.attr("class"), 'uxs uxs-form__error uxs-form__error--disabled ember-view', true, 'Has correct classes');
});