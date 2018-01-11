import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import {
  clickTrigger,
  selectChoose
} from 'ember-power-select/test-support/helpers'



moduleForComponent('uxs-form-dropdown', 'Integration | Component | uxs form dropdown', {
  integration: true
});

test('it renders a default input', function(assert) {
  this.set('value', 'Miguel');
  this.set('names', ['Stefan', 'Miguel', 'Tomster', 'Pluto']);

  this.render(hbs `{{#uxs-form-dropdown
    selected=value
    name="my-dropdown"
    options=names
    onchange=(action (mut value))
    as |name|
  }}
    {{name}}
  {{/uxs-form-dropdown}}`);

  let selector = '[data-test-uxs-form__input="my-dropdown"] ',
    $input = this.$(selector)

  assert.equal($input.prop("tagName"), 'DIV', 'Has correct tag name');
  assert.equal($input.text().trim(), 'Miguel', 'Has correct value');
  assert.equal($input.attr("class"), 'uxs-form__input uxs-form__input--dropdown ember-view', 'Has correct classes');

  // open the dropdown
  clickTrigger(selector);

  assert.equal(this.$('.ember-power-select-dropdown .ember-power-select-option').length, 4, 'Dropdown is rendered');

  // select a new version
  selectChoose(selector, "Tomster");

  assert.equal($input.text().trim(), 'Tomster', 'Has value changed');
});