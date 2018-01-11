import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-icon', 'Integration | Component | uxs form icon', {
  integration: true
});

test('it renders', function(assert) {
  this.set('icon', 'add');

  this.render(hbs `{{uxs-icon icon name="my-icon"}}`);

  let $icon = this.$('[data-test-uxs-icon="my-icon"]')

  assert.equal($icon.prop("tagName"), 'DIV', 'Has correct tag name');
  assert.equal($icon.text().trim(), 'add', 'Has correct text');
  assert.equal($icon.attr("class"), 'uxs-icon ember-view', true, 'Has correct classes');
});

test('it renders a disabled icon', function(assert) {
  this.set('icon', 'add');
  this.set('primary', true);
  this.set('disabled', true);
  this.set('accent', false);
  this.set('error', false);
  this.set('warning', false);

  this.render(hbs `{{uxs-icon icon name="my-icon" disabled=disabled error=error primary=primary accent=accent warning=warning success=success}}`);

  let $icon = this.$('[data-test-uxs-icon="my-icon"]')

  assert.equal($icon.prop("tagName"), 'DIV', 'Has correct tag name');
  assert.equal($icon.text().trim(), 'add', 'Has correct text');
  assert.equal($icon.attr("class"), 'uxs-icon uxs-icon--disabled uxs-icon--primary ember-view', true, 'Has correct classes');

  // change error

  this.set('disabled', false);
  this.set('primary', false);
  this.set('accent', true);
  this.set('error', true);
  this.set('warning', true);

  assert.equal($icon.attr("class"), 'uxs-icon uxs-icon--accent uxs-icon--error uxs-icon--warning ember-view', true, 'Has correct classes');
});