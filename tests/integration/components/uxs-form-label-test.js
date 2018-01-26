import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-form-label', 'Integration | Component | uxs form label', {
  integration: true
});

test('it renders', function(assert) {
  this.set('label', 'Username');

  this.render(hbs `{{uxs-form-label label name="my-label"}}`);

  let $label = this.$('[data-test-uxs-form__label="my-label"]')

  assert.equal($label.prop("tagName"), 'LABEL', 'Has correct tag name');
  assert.equal($label.text().trim(), 'Username', 'Has correct text');
  assert.equal($label.attr("class"), 'uxs uxs-form__label ember-view', true, 'Has correct classes');
});

test('it renders a required label', function(assert) {
  this.set('label', 'Username');
  this.set('required', true);
  this.set('error', false);

  this.render(hbs `{{uxs-form-label label name="my-label" required=required error=error}}`);

  let $label = this.$('[data-test-uxs-form__label="my-label"]')

  assert.equal($label.prop("tagName"), 'LABEL', 'Has correct tag name');
  assert.equal($label.text().trim(), 'Username', 'Has correct text');
  assert.equal($label.attr("class"), 'uxs uxs-form__label uxs-form__label--required ember-view', true, 'Has correct classes');

  // change error

  this.set('error', true);

  assert.equal($label.attr("class"), 'uxs uxs-form__label uxs-form__label--error uxs-form__label--required ember-view', true, 'Has correct classes');
});