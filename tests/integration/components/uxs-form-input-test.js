import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-form-input', 'Integration | Component | uxs form input', {
  integration: true
});

test('it renders a default input', function(assert) {
  this.set('value', 'foo');

  this.render(hbs `{{uxs-form-input value=value name="my-input"}}`);

  let $input = this.$('[data-test-uxs-form__input="my-input"]')

  assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
  assert.equal($input.val(), 'foo', 'Has correct value');
  assert.equal($input.attr("class"), 'ember-text-field uxs-form__input uxs-form__input--text ember-view', true, 'Has correct classes');

  // change the value
  $input.val('bar').change();

  assert.equal($input.val(), 'bar', 'Has value changed');
});

test('it renders a numeric input', function(assert) {
  this.set('value', 42);
  this.set('disabled', true);

  this.render(hbs `{{uxs-form-input type="number" value=value name="my-input" disabled=disabled}}`);

  let $input = this.$('[data-test-uxs-form__input="my-input"]')

  assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
  assert.equal($input.val(), 42, 'Has correct value');
  assert.equal($input.attr("class"), 'ember-text-field uxs-form__input uxs-form__input--disabled uxs-form__input--number ember-view', true, 'Has correct classes');
  assert.equal($input[0].hasAttribute('aria-disabled'), true, 'has aria disabled attr');
  assert.equal($input[0].hasAttribute('disabled'), true, 'has disabled attr');
});