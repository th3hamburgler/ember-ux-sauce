import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

moduleForComponent('uxs-form-control-row', 'Integration | Component | uxs form control row', {
  integration: true
});

test('it renders a default row', function(assert) {

  this.set('disabled', false);

  this.render(hbs `{{uxs-form-control-row name="my-row" disabled=disabled}}`);

  let $row = this.$('[data-test-uxs-form__control-row="my-row"]');

  assert.equal($row.text().trim(), '');
  assert.equal($row.attr("class"), 'uxs-form__control-row uxs-form__control-row--inline ember-view', 'Has correct classes');

  this.set('disabled', true);

  assert.equal($row.attr("class"), 'uxs-form__control-row uxs-form__control-row--disabled uxs-form__control-row--inline ember-view', 'Has correct classes');

});

test('it renders a row with a contextual input', function(assert) {

  let model = EmberObject.create({
    foo: 'bar'
  });
  this.set('model', model);
  this.set('disabled', false);

  this.render(hbs `{{#uxs-form-control-row model=model name="my-row" disabled=disabled as |control|}}
    {{control.input name="foo"}}
  {{/uxs-form-control-row}}`);

  let $input = this.$('[data-test-uxs-form__input="foo"]');

  assert.equal($input.attr("class"), 'ember-text-field uxs-form__input uxs-form__input--inline uxs-form__input--text ember-view', 'Has correct classes');
  assert.equal($input.val(), 'bar', 'Has correct value');

  this.set('disabled', true);

  assert.equal($input.attr("class"), 'ember-text-field uxs-form__input uxs-form__input--disabled uxs-form__input--inline uxs-form__input--text ember-view', 'Has correct classes');

});

test('it renders a row with a contextual textarea', function(assert) {

  let model = EmberObject.create({
    foo: 'bar'
  });
  this.set('model', model);
  this.set('disabled', false);

  this.render(hbs `{{#uxs-form-control-row model=model name="my-row" disabled=disabled as |control|}}
    {{control.textarea name="foo"}}
  {{/uxs-form-control-row}}`);

  let $input = this.$('[data-test-uxs-form__input="foo"]');

  assert.equal($input.attr("class"), 'ember-text-area uxs-form__input uxs-form__input--inline uxs-form__input--textarea ember-view', 'Has correct classes');
  assert.equal($input.val(), 'bar', 'Has correct value');

  this.set('disabled', true);

  assert.equal($input.attr("class"), 'ember-text-area uxs-form__input uxs-form__input--disabled uxs-form__input--inline uxs-form__input--textarea ember-view', 'Has correct classes');

});

test('it renders a row with a contextual icon', function(assert) {

  this.set('disabled', false);

  this.render(hbs `{{#uxs-form-control-row model=model name="my-row" disabled=disabled as |control|}}
    {{control.icon "add" prefix=true}}
  {{/uxs-form-control-row}}`);

  let $input = this.$('[data-test-uxs-form__icon="my-row"]');

  assert.equal($input.attr("class"), 'uxs-form__icon uxs-form__icon--inline uxs-form__icon--prefix ember-view', 'Has correct classes');
  assert.equal($input.text().trim(), 'add', 'Has correct value');

  this.set('disabled', true);

  assert.equal($input.attr("class"), 'uxs-form__icon uxs-form__icon--disabled uxs-form__icon--inline uxs-form__icon--prefix ember-view', 'Has correct classes');

});

test('it renders a row with a contextual button', function(assert) {

  this.set('disabled', false);

  this.render(hbs `{{#uxs-form-control-row model=model name="my-row" disabled=disabled as |control|}}
    {{control.button "Save"}}
  {{/uxs-form-control-row}}`);

  let $input = this.$('[data-test-uxs-button="my-row"]');

  assert.equal($input.attr("class"), 'uxs-button uxs-button--inline uxs-button--primary ember-view', 'Has correct classes');
  assert.equal($input.text().trim(), 'Save', 'Has correct value');

  this.set('disabled', true);

  assert.equal($input.attr("class"), 'uxs-button uxs-button--disabled uxs-button--inline uxs-button--primary ember-view', 'Has correct classes');

});

test('it renders a row with a contextual button link', function(assert) {

  this.set('disabled', false);

  this.render(hbs `{{#uxs-form-control-row model=model name="my-row" disabled=disabled as |control|}}
    {{control.link "Docs" "docs"}}
  {{/uxs-form-control-row}}`);

  let $input = this.$('[data-test-uxs-button="my-row"]');

  assert.equal($input.attr("class"), 'uxs-button uxs-button--inline uxs-button--primary ember-view', 'Has correct classes');
  assert.equal($input.text().trim(), 'Docs', 'Has correct value');

  this.set('disabled', true);

  assert.equal($input.attr("class"), 'disabled uxs-button uxs-button--disabled uxs-button--inline uxs-button--primary ember-view', 'Has correct disabled classes');

});