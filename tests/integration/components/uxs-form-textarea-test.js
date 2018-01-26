import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

moduleForComponent('uxs-form-textarea', 'Integration | Component | uxs form textarea', {
  integration: true
});

test('it renders a default textarea', function(assert) {
  this.set('value', 'foo');

  this.render(hbs `{{uxs-form-textarea value=value name="my-textarea"}}`);

  let $textarea = this.$('[data-test-uxs-form__input="my-textarea"]')

  assert.equal($textarea.prop("tagName"), 'TEXTAREA', 'Has correct tag name');
  assert.equal($textarea.val(), 'foo', 'Has correct value');
  assert.equal($textarea.attr("class"), 'ember-text-area uxs uxs-form__input uxs-form__input--textarea ember-view', true, 'Has correct classes');

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
  assert.equal($textarea.attr("class"), 'ember-text-area uxs uxs-form__input uxs-form__input--disabled uxs-form__input--textarea ember-view', true, 'Has correct classes');
  assert.equal($textarea[0].hasAttribute('aria-disabled'), true, 'has aria disabled attr');
  assert.equal($textarea[0].hasAttribute('disabled'), true, 'has disabled attr');
});

test('it renders an textarea bound to a model property', function(assert) {

  let model = EmberObject.create({
    foo: 'bar'
  });
  this.set('model', model);

  this.render(hbs `{{uxs-form-textarea name="foo" model=model}}`);

  let $textarea = this.$('[data-test-uxs-form__input="foo"]');

  assert.equal($textarea.val(), 'bar', 'Has correct value');

  // change the model
  this.set('model.foo', 'boop');

  assert.equal($textarea.val(), 'boop', 'Value is updated after model property is changed');

  // change the value
  $textarea.val('hello darkness').change();

  assert.equal(model.get('foo'), 'hello darkness', 'Input change updates bound model property');
});