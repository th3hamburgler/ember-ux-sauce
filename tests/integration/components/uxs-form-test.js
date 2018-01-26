import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import {
  get
} from '@ember/object';
import jQuery from 'jquery';

moduleForComponent('uxs-form', 'Integration | Component | uxs form', {
  integration: true
});

test('it renders a default form', function(assert) {

  this.render(hbs `
    {{#uxs-form name="my-form"}}
      template block text
    {{/uxs-form}}
  `);

  let $form = this.$('[data-test-uxs-form="my-form"]');

  assert.equal($form.text().trim(), 'template block text');

  assert.equal($form.attr("class"), 'uxs uxs-form ember-view', true, 'Has correct classes');
});

test('it renders a form with a contextual control', function(assert) {

  let model = EmberObject.create({
    foo: 'bar'
  });
  this.set('model', model);

  this.render(hbs `
    {{#uxs-form name="my-form" model=model as |form|}}
      {{form.control name="foo" type="text" label="Foo"}}
    {{/uxs-form}}
  `);

  let $form = this.$('[data-test-uxs-form="my-form"]'),
    $input = this.$('[data-test-uxs-form__input="foo"]');

  assert.equal($input.val(), 'bar');

  assert.equal($form.attr("class"), 'uxs uxs-form ember-view', true, 'Has correct classes');
});

test('it submits a form with a contextual control button', function(assert) {

  assert.expect(1);

  let model = EmberObject.create({
    foo: 'bar'
  });
  this.set('model', model);
  this.set('submit', (model) => {
    assert.ok(get(model, 'foo'), 'bar');
    return false;
  });

  this.render(hbs `
    {{#uxs-form name="my-form" model=model onSubmit=(action submit model) as |form|}}
      {{form.control name="foo" type="text" label="Foo"}}
      {{form.submit "Submit" name="my-submit"}}
    {{/uxs-form}}
  `);

  let $submit = this.$('[data-test-uxs-button="my-submit"]');

  $submit.click();
});

test('it submits a form on input return', function(assert) {

  assert.expect(1);

  let model = EmberObject.create({
    foo: 'bar'
  });
  this.set('model', model);
  this.set('submit', (model) => {
    assert.ok(get(model, 'foo'), 'bar');
    return false;
  });

  this.render(hbs `
    {{#uxs-form name="my-form" model=model onSubmit=(action submit model) as |form|}}
      {{form.control name="foo" type="text" label="Foo"}}
      {{form.submit "Submit" name="my-submit"}}
    {{/uxs-form}}
  `);

  let selector = '[data-test-uxs-form__input="foo"]',
    $input = this.$(selector),
    event = jQuery.Event("keyup", {
      keyCode: 13
    });

  $input.trigger(event);

});

test('it does not submit a disabled form with a contextual control', function(assert) {

  assert.expect(0);

  let model = EmberObject.create({
    foo: 'bar'
  });
  this.set('model', model);
  this.set('submit', (model) => {
    assert.ok(get(model, 'foo'), 'bar');
  });

  this.render(hbs `
    {{#uxs-form disabled=true name="my-form" model=model onSubmit=(action submit model) as |form|}}
      {{form.control name="foo" type="text" label="Foo"}}
      {{form.submit "Submit" name="my-submit"}}
    {{/uxs-form}}
  `);

  let $submit = this.$('[data-test-uxs-button="my-submit"]');

  $submit.click();
});