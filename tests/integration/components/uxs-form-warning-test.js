import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-form-warning', 'Integration | Component | uxs form warning', {
  integration: true
});



test('it renders', function(assert) {
  this.set('warning', 'Oooh, that\'s not good');

  this.render(hbs `{{uxs-form-warning warning name="my-warning"}}`);

  let $warning = this.$('[data-test-uxs-form__warning="my-warning"]')

  assert.equal($warning.prop("tagName"), 'DIV', 'Has correct tag name');
  assert.equal($warning.text().trim(), 'Oooh, that\'s not good', 'Has correct text');
  assert.equal($warning.attr("class"), 'uxs uxs-form__warning ember-view', true, 'Has correct classes');
});

test('it renders a disabled warning', function(assert) {
  this.set('warning', 'Oooh, that\'s not good');
  this.set('disabled', true);

  this.render(hbs `{{uxs-form-warning warning name="my-warning" disabled=disabled}}`);

  let $warning = this.$('[data-test-uxs-form__warning="my-warning"]')

  assert.equal($warning.prop("tagName"), 'DIV', 'Has correct tag name');
  assert.equal($warning.text().trim(), 'Oooh, that\'s not good', 'Has correct text');
  assert.equal($warning.attr("class"), 'uxs uxs-form__warning uxs-form__warning--disabled ember-view', true, 'Has correct classes');
});