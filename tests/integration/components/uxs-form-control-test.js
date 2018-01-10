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
  this.set('disabled', false);

  this.render(hbs `{{uxs-form-control label="My Label" name="my-control" type="text" value=value disabled=disabled}}`);

  let $control = this.$('[data-test-uxs-form__control="my-control"]'),
    $label = this.$('[data-test-uxs-form__label="my-control"]'),
    $input = this.$('[data-test-uxs-form__input="my-control"]');

  assert.equal($control.attr("class"), 'uxs-form__control ember-view', 'Has correct classes');

  assert.equal($label.text().trim(), 'My Label');
  assert.equal($label.attr("class"), 'uxs-form__label ember-view', 'Has correct classes');

  assert.equal($input.val(), this.get('value'), 'Has correct input value')
  assert.equal($input.attr("class"), 'ember-text-field uxs-form__input uxs-form__input--text ember-view', 'Has correct classes');

  // Assert disabled state is passed to child components
  this.set('disabled', true);

  $control = this.$('[data-test-uxs-form__control="my-control"]');
  $label = this.$('[data-test-uxs-form__label="my-control"]');
  $input = this.$('[data-test-uxs-form__input="my-control"]');

  assert.equal($control.attr("class"), 'uxs-form__control uxs-form__control--disabled ember-view', 'Has correct classes');

  assert.equal($label.attr("class"), 'uxs-form__label uxs-form__label--disabled ember-view', 'Has correct classes');

  assert.equal($input.attr("class"), 'ember-text-field uxs-form__input uxs-form__input--disabled uxs-form__input--text ember-view', 'Has correct classes');
  assert.equal($input[0].hasAttribute('aria-disabled'), true, 'has aria disabled attr');
  assert.equal($input[0].hasAttribute('disabled'), true, 'has disabled attr');
});

test('it renders a control with a tip property', function(assert) {

  this.set('tip', 'Here\'s a hint...');
  this.set('disabled', false);

  this.render(hbs `{{uxs-form-control tip=tip name="my-control" disabled=disabled}}`);

  let $control = this.$('[data-test-uxs-form__control="my-control"]'),
    $tip = this.$('[data-test-uxs-form__tip="my-control"]');

  assert.equal($control.attr("class"), 'uxs-form__control ember-view', 'Has correct classes');

  assert.equal($tip.text().trim(), 'Here\'s a hint...');
  assert.equal($tip.attr("class"), 'uxs-form__tip ember-view', 'Has correct classes');

  this.set('disabled', true);

  assert.equal($tip.attr("class"), 'uxs-form__tip uxs-form__tip--disabled ember-view', 'Has correct classes');
});

test('it renders a control with a warning property', function(assert) {

  this.set('warning', 'I\'m warning you');
  this.set('disabled', false);

  this.render(hbs `{{uxs-form-control warning=warning name="my-control" disabled=disabled}}`);

  let $control = this.$('[data-test-uxs-form__control="my-control"]'),
    $warning = this.$('[data-test-uxs-form__warning="my-control"]');

  assert.equal($control.attr("class"), 'uxs-form__control ember-view', 'Has correct classes');

  assert.equal($warning.text().trim(), 'I\'m warning you');
  assert.equal($warning.attr("class"), 'uxs-form__warning ember-view', 'Has correct classes');

  this.set('disabled', true);

  assert.equal($warning.attr("class"), 'uxs-form__warning uxs-form__warning--disabled ember-view', 'Has correct classes');
});

test('it renders a control with a error property', function(assert) {

  this.set('error', 'Oh, that\'s not good');
  this.set('disabled', false);

  this.render(hbs `{{uxs-form-control error=error name="my-control" disabled=disabled}}`);

  let $control = this.$('[data-test-uxs-form__control="my-control"]'),
    $error = this.$('[data-test-uxs-form__error="my-control"]');

  assert.equal($control.attr("class"), 'uxs-form__control ember-view', 'Has correct classes');

  assert.equal($error.text().trim(), 'Oh, that\'s not good');
  assert.equal($error.attr("class"), 'uxs-form__error ember-view', 'Has correct classes');

  this.set('disabled', true);

  assert.equal($error.attr("class"), 'uxs-form__error uxs-form__error--disabled ember-view', 'Has correct classes');
});

test('it renders a control with custom children', function(assert) {

  this.set('value', 'foo');
  this.set('tip', 'Here\'s a hint...', 'assert tip text correct');
  this.set('warning', 'I\'m warning you');
  this.set('error', 'Oh, that\'s not good');

  this.render(hbs `{{#uxs-form-control name="my-control" as |control|}}
    {{control.label "My Label"}}
    {{control.input value=value}}
    {{control.tip tip}}
    {{control.warning warning}}
    {{control.error error}}
  {{/uxs-form-control}}`);

  let $control = this.$('[data-test-uxs-form__control="my-control"]'),
    $label = this.$('[data-test-uxs-form__label="my-control"]'),
    $input = this.$('[data-test-uxs-form__input="my-control"]'),
    $tip = this.$('[data-test-uxs-form__tip="my-control"]'),
    $warning = this.$('[data-test-uxs-form__warning="my-control"]'),
    $error = this.$('[data-test-uxs-form__error="my-control"]');

  assert.equal($control.attr("class"), 'uxs-form__control ember-view', 'Has correct classes');

  assert.equal($label.text().trim(), 'My Label');
  assert.equal($label.attr("class"), 'uxs-form__label ember-view', 'Has correct classes');

  assert.equal($input.val(), this.get('value'), 'Has correct input value')
  assert.equal($input.attr("class"), 'ember-text-field uxs-form__input uxs-form__input--text ember-view', 'Has correct classes');

  assert.equal($tip.text().trim(), 'Here\'s a hint...', 'assert tip text correct');
  assert.equal($tip.attr("class"), 'uxs-form__tip ember-view', 'Has correct classes');

  assert.equal($warning.text().trim(), 'I\'m warning you');
  assert.equal($warning.attr("class"), 'uxs-form__warning ember-view', 'Has correct classes');

  assert.equal($error.text().trim(), 'Oh, that\'s not good');
  assert.equal($error.attr("class"), 'uxs-form__error ember-view', 'Has correct classes');
});