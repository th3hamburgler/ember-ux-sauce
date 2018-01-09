import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-form-control', 'Integration | Component | uxs form control', {
  integration: true
});

test('it renders a default button', function(assert) {

  this.render(hbs `{{uxs-form-control name="my-control"}}`);

  let $control = this.$('[data-test-uxs-form__control="my-control"]');

  assert.equal($control.text().trim(), '');

  assert.equal($control.attr("class"), 'uxs-form__control ember-view', 'Has correct classes');
});

test('it renders a control with label & input props', function(assert) {

  this.set('value', 'foo');

  this.render(hbs `{{uxs-form-control label="My Label" name="my-control" type="text" value=value}}`);

  let $control = this.$('[data-test-uxs-form__control="my-control"]'),
    $label = this.$('[data-test-uxs-form__label="my-control"]'),
    $input = this.$('[data-test-uxs-form__input="my-control"]');

  assert.equal($control.attr("class"), 'uxs-form__control ember-view', 'Has correct classes');

  assert.equal($label.text().trim(), 'My Label');
  assert.equal($label.attr("class"), 'uxs-form__label ember-view', 'Has correct classes');

  assert.equal($input.val(), this.get('value'), 'Has correct input value')
  assert.equal($input.attr("class"), 'ember-text-field uxs-form__input ember-view', 'Has correct classes');
});

test('it renders a control with custom children', function(assert) {

  this.set('value', 'foo');

  this.render(hbs `{{#uxs-form-control name="my-control" as |control|}}
    {{control.label "My Label"}}
    {{control.input value=value}}
    {{control.tip "Think of a unique usename. This will be publicly visible."}}
  {{/uxs-form-control}}`);

  let $control = this.$('[data-test-uxs-form__control="my-control"]'),
    $label = this.$('[data-test-uxs-form__label="my-control"]'),
    $input = this.$('[data-test-uxs-form__input="my-control"]');

  assert.equal($control.attr("class"), 'uxs-form__control ember-view', 'Has correct classes');

  assert.equal($label.text().trim(), 'My Label');
  assert.equal($label.attr("class"), 'uxs-form__label ember-view', 'Has correct classes');

  assert.equal($input.val(), this.get('value'), 'Has correct input value')
  assert.equal($input.attr("class"), 'ember-text-field uxs-form__input ember-view', 'Has correct classes');
});