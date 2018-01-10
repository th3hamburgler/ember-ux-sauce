import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-form-textarea', 'Integration | Component | uxs form textarea', {
  integration: true
});

test('it renders a default textarea', function(assert) {
  this.set('value', 'foo');

  this.render(hbs `{{uxs-form-textarea value=value name="my-textarea"}}`);

  let $textarea = this.$('[data-test-uxs-form__input="my-textarea"]')

  assert.equal($textarea.prop("tagName"), 'TEXTAREA', 'Has correct tag name');
  assert.equal($textarea.val(), 'foo', 'Has correct value');
  assert.equal($textarea.attr("class"), 'ember-text-area uxs-form__input uxs-form__input--textarea ember-view', true, 'Has correct classes');

  // change the value
  $textarea.val('bar').change();

  assert.equal($textarea.val(), 'bar', 'Has value changed');
});

test('it renders a numeric textarea', function(assert) {
  this.set('value', 42);
  this.set('disabled', true);

  this.render(hbs `{{uxs-form-textarea type="number" value=value name="my-textarea" disabled=disabled}}`);

  let $textarea = this.$('[data-test-uxs-form__input="my-textarea"]')

  assert.equal($textarea.prop("tagName"), 'TEXTAREA', 'Has correct tag name');
  assert.equal($textarea.val(), 42, 'Has correct value');
  assert.equal($textarea.attr("class"), 'ember-text-area uxs-form__input uxs-form__input--disabled uxs-form__input--textarea ember-view', true, 'Has correct classes');
  assert.equal($textarea[0].hasAttribute('aria-disabled'), true, 'has aria disabled attr');
  assert.equal($textarea[0].hasAttribute('disabled'), true, 'has disabled attr');
});