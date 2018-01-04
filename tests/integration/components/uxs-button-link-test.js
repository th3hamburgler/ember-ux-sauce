import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-button-link', 'Integration | Component | uxs button link', {
  integration: true
});

test('it renders a default button', function(assert) {

  this.render(hbs `{{uxs-button-link "My Button" "index.docs"}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  assert.equal($button.text().trim(), 'My Button');

  assert.equal($button.attr("class"), 'uxs-button uxs-button--primary ember-view', true, 'Has correct classes');

});

test('it renders a button with different styles', function(assert) {

  this.set('style', 'primary');

  this.render(hbs `{{uxs-button-link "My Button" "index.docs" style=style}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  assert.equal($button.attr("class"), 'uxs-button uxs-button--primary ember-view', true, 'Has correct classes');

  // Update style
  this.set('style', 'accent');

  assert.equal($button.attr("class"), 'uxs-button uxs-button--accent ember-view', true, 'Has correct classes after update');

});

test('it renders an inline button', function(assert) {

  this.set('inline', true);

  this.render(hbs `{{uxs-button-link "My Button" "index.docs" inline=inline}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  assert.equal($button.attr("class"), 'uxs-button uxs-button--inline uxs-button--primary ember-view', true, 'Has correct classes');
});

test('it renders a mini button', function(assert) {

  this.set('mini', true);

  this.render(hbs `{{uxs-button-link "My Button" "index.docs" mini=mini}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  assert.equal($button.attr("class"), 'uxs-button uxs-button--mini uxs-button--primary ember-view', true, 'Has correct classes');
});

test('it renders a naked button', function(assert) {

  this.set('naked', true);

  this.render(hbs `{{uxs-button-link "My Button" "index.docs" naked=naked}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  assert.equal($button.attr("class"), 'uxs-button uxs-button--naked uxs-button--primary ember-view', true, 'Has correct classes');
});

test('it renders a selected button', function(assert) {

  this.set('selected', true);

  this.render(hbs `{{uxs-button-link "My Button" "index.docs" selected=selected}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  assert.equal($button.attr("class"), 'uxs-button uxs-button--primary uxs-button--selected ember-view', true, 'Has correct classes');
});

test('test button accesibility', function(assert) {

  this.set('disabled', false);

  this.render(hbs `{{uxs-button-link "My Button" "index.docs" disabled=disabled}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  assert.equal($button.attr('aria-label'), 'My Button');
  assert.equal($button.attr('role'), 'link');

  this.set('disabled', true);

  assert.equal($button[0].hasAttribute('aria-disabled'), true);
  assert.equal($button[0].hasAttribute('disabled'), true);
});
