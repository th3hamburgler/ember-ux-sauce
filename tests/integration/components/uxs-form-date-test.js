import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';
import {
  setFlatpickrDate
} from 'ember-flatpickr/test-support/helpers';
import EmberObject from '@ember/object';

moduleForComponent('uxs-form-date', 'Integration | Component | uxs form date', {
  integration: true
});

test('it renders a default date input', function(assert) {

  let date = moment('1983-06-28').toDate(),
    newDate = moment('1982-11-27').toDate();

  this.set('date', date);

  this.render(hbs `{{uxs-form-date date=date name="date" onChange=(action (mut date))}}`);

  let selector = '[data-test-uxs-form__input="date"]',
    $input = this.$(selector);

  assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
  assert.equal($input.val(), '28/06/83', 'Has correct value');
  assert.equal($input.attr("class"), 'uxs uxs-form__input uxs-form__input--date ember-view flatpickr-input', 'Has correct classes');

  // change the value
  setFlatpickrDate(selector, newDate);

  // input is updated
  assert.equal($input.val(), '27/11/82', 'Has value changed');
  assert.equal(moment(this.get('date')[0]).format(), moment(newDate).format(), 'Has model changed');
});

test('it renders a model bound date input', function(assert) {

  let date = moment('1983-06-28').toDate(),
    newDate = moment('1982-11-27').toDate(),
    model = EmberObject.create({
      date: date
    });

  this.set('model', model);

  this.render(hbs `{{uxs-form-date model=model name="date" onChange=(action (mut model.date))}}`);

  let selector = '[data-test-uxs-form__input="date"]',
    $input = this.$(selector);

  assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
  assert.equal($input.val(), '28/06/83', 'Has correct value');
  assert.equal($input.attr("class"), 'uxs uxs-form__input uxs-form__input--date ember-view flatpickr-input', 'Has correct classes');

  // change the value
  setFlatpickrDate(selector, newDate);

  // input is updated
  assert.equal($input.val(), '27/11/82', 'Has value changed');
  assert.equal(moment(this.get('model.date')[0]).format(), moment(newDate).format(), 'Has model changed');
});