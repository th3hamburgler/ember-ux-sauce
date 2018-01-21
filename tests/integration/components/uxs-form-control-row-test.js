import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import {
  setFlatpickrDate
} from 'ember-flatpickr/test-support/helpers';
import moment from 'moment';

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

  let $icon = this.$('[data-test-uxs-form__icon="my-row"]');

  assert.equal($icon.attr("class"), 'uxs-form__icon uxs-form__icon--black uxs-form__icon--inline uxs-form__icon--prefix ember-view', 'Has correct icon classes');
  assert.equal($icon.text().trim(), 'add', 'Has correct icon value');

  this.set('disabled', true);

  assert.equal($icon.attr("class"), 'uxs-form__icon uxs-form__icon--black uxs-form__icon--disabled uxs-form__icon--inline uxs-form__icon--prefix ember-view', 'Has correct updated icon classes');

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

test('it renders a date control bound to a model property', function(assert) {

  let date = moment('1983-06-28').toDate(),
    newDate = moment('1982-11-27').toDate(),
    model = EmberObject.create({
      date: date
    });

  this.set('model', model);

  this.render(hbs `{{#uxs-form-control-row name="date" model=model as |control|}}
    {{control.date onChange=(action (mut model.date))}}
  {{/uxs-form-control-row}}`);

  let selector = '[data-test-uxs-form__input="date"]',
    $input = this.$(selector);

  assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
  assert.equal($input.val(), '28/06/83', 'Has correct value');
  assert.equal($input.attr("class"), 'uxs-form__input uxs-form__input--date uxs-form__input--inline ember-view flatpickr-input', 'Has correct classes');

  // change the value
  setFlatpickrDate(selector, newDate);

  // input is updated
  assert.equal($input.val(), '27/11/82', 'Has value changed');
  assert.equal(moment(this.get('model.date')[0]).format(), moment(newDate).format(), 'Has model changed');
});

test('it renders a date control bound to a model property', function(assert) {

  let date = moment('1983-06-28 21:30:00').toDate(),
    newDate = moment('1982-11-27 09:45:00').toDate(),
    model = EmberObject.create({
      date: date
    });

  this.set('model', model);

  this.render(hbs `{{#uxs-form-control-row name="date" model=model as |control|}}
    {{control.datetime model=model name="date" onChange=(action (mut model.date))}}
  {{/uxs-form-control-row}}`);

  let selector = '[data-test-uxs-form__input="date"]',
    $input = this.$(selector);

  assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
  assert.equal($input.val(), '28/06/83 21:30', 'Has correct value');
  assert.equal($input.attr("class"), 'uxs-form__input uxs-form__input--datetime uxs-form__input--inline ember-view flatpickr-input', 'Has correct classes');

  // change the value
  setFlatpickrDate(selector, newDate);

  // input is updated
  assert.equal($input.val(), '27/11/82 09:45', 'Has value changed');
  assert.equal(moment(this.get('model.date')[0]).format(), moment(newDate).format(), 'Has model changed');
});

test('it renders a time control bound to a model property', function(assert) {

  let date = moment('1983-06-28 21:30:00').toDate(),
    newDate = moment('1982-11-27 09:45:00').toDate(),
    model = EmberObject.create({
      date: date
    });

  this.set('model', model);

  this.render(hbs `{{#uxs-form-control-row name="date" model=model as |control|}}
    {{control.time model=model name="date" onChange=(action (mut model.date))}}
  {{/uxs-form-control-row}}`);

  let selector = '[data-test-uxs-form__input="date"]',
    $input = this.$(selector);

  assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
  assert.equal($input.val(), '21:30', 'Has correct value');
  assert.equal($input.attr("class"), 'uxs-form__input uxs-form__input--inline uxs-form__input--time ember-view flatpickr-input', 'Has correct classes');

  // change the value
  setFlatpickrDate(selector, newDate);

  // input is updated
  assert.equal($input.val(), '09:45', 'Has value changed');
  assert.equal(moment(this.get('model.date')[0]).format(), moment(newDate).format(), 'Has model changed');
});