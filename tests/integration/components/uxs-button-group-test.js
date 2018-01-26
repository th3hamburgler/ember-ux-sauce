import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-button-group', 'Integration | Component | uxs button group', {
  integration: true
});

test('it renders a default button', function(assert) {

  this.render(hbs `{{uxs-button-group name="my-group"}}`);

  let $group = this.$('[data-test-uxs-button-group="my-group"]');

  assert.equal($group.text().trim(), '');

  assert.equal($group.attr("class"), 'uxs uxs-button-group ember-view', 'Has correct classes');

});

test('it renders a block group with buttons', function(assert) {

  this.render(hbs `
    {{#uxs-button-group name="my-group" as |group|}}
      {{group.button "Button"}}
      {{group.link "Link"}}
    {{/uxs-button-group}}
  `);

  let $group = this.$('[data-test-uxs-button-group="my-group"]'),
    $buttons = this.$('[data-test-uxs-button]');

  assert.equal($buttons.length, 2, 'Has correct classes');

  assert.equal($group.attr("class"), 'uxs uxs-button-group ember-view', 'Has correct classes');

});

test('it renders an inline group with buttons', function(assert) {

  this.set('inline', true);
  this.set('align', 'right');

  this.render(hbs `
    {{#uxs-button-group name="my-group" inline=inline align=align as |group|}}
      {{group.button "Button"}}
      {{group.link "Link"}}
    {{/uxs-button-group}}
  `);

  let $group = this.$('[data-test-uxs-button-group="my-group"]'),
    $buttons = this.$('[data-test-uxs-button]');

  assert.equal($buttons.length, 2, 'Has correct classes');

  assert.equal($group.attr("class"), 'uxs uxs-button-group uxs-button-group--inline uxs-button-group--right ember-view', 'Has correct classes');

});

test('it renders a mini disabled group', function(assert) {

  this.set('disabled', true);
  this.set('mini', true);

  this.render(hbs `
    {{#uxs-button-group name="my-group" disabled=disabled mini=mini as |group|}}
      {{group.button "Button"}}
      {{group.link "Link"}}
    {{/uxs-button-group}}
  `);

  let $group = this.$('[data-test-uxs-button-group="my-group"]'),
    $buttons = this.$('[data-test-uxs-button]');

  assert.equal($buttons.length, 2, 'Has correct classes');

  assert.equal($group.attr("class"), 'uxs uxs-button-group uxs-button-group--disabled uxs-button-group--mini ember-view', 'Has correct classes');

});