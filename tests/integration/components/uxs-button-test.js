import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-button', 'Integration | Component | uxs button', {
  integration: true
});

test('it renders a default button', function(assert) {

  this.render(hbs `{{uxs-button "My Button"}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  assert.equal($button.text().trim(), 'My Button');

  assert.equal($button.attr("class"), 'uxs-button uxs-button--primary ember-view', true, 'Has correct classes');

});

test('it renders a button with different styles', function(assert) {

  this.set('style', 'primary');

  this.render(hbs `{{uxs-button "My Button" style=style}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  assert.equal($button.attr("class"), 'uxs-button uxs-button--primary ember-view', true, 'Has correct classes');

  // Update style
  this.set('style', 'accent');

  assert.equal($button.attr("class"), 'uxs-button uxs-button--accent ember-view', true, 'Has correct classes after update');

});

test('it renders an inline button', function(assert) {

  this.set('inline', true);

  this.render(hbs `{{uxs-button "My Button" inline=inline}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  assert.equal($button.attr("class"), 'uxs-button uxs-button--inline uxs-button--primary ember-view', true, 'Has correct classes');
});

test('it renders a mini button', function(assert) {

  this.set('mini', true);

  this.render(hbs `{{uxs-button "My Button" mini=mini}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  assert.equal($button.attr("class"), 'uxs-button uxs-button--mini uxs-button--primary ember-view', true, 'Has correct classes');
});

test('it renders a naked button', function(assert) {

  this.set('naked', true);

  this.render(hbs `{{uxs-button "My Button" naked=naked}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  assert.equal($button.attr("class"), 'uxs-button uxs-button--naked uxs-button--primary ember-view', true, 'Has correct classes');
});

test('it renders a selected button', function(assert) {

  this.set('selected', true);

  this.render(hbs `{{uxs-button "My Button" selected=selected}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  assert.equal($button.attr("class"), 'uxs-button uxs-button--primary uxs-button--selected ember-view', true, 'Has correct classes');
});

test('it renders a loading button', function(assert) {

  this.set('loading', false);

  this.render(hbs `{{uxs-button "My Button" loadingText="Busy" loading=loading}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  assert.equal($button.text().trim(), 'My Button');
  assert.equal($button.attr("class"), 'uxs-button uxs-button--primary ember-view', true, 'Has correct classes');

  this.set('loading', true);

  assert.equal($button.text().trim(), 'Busy');
  assert.equal($button.attr("class"), 'uxs-button uxs-button--loading uxs-button--primary ember-view', true, 'Has correct classes');
});

test('it fires an action on button click', function(assert) {

  assert.expect(1);

  this.set('buttonClicked', (name) => {
    assert.ok(name, 'my-button');
  });

  this.render(hbs `{{uxs-button text="My Button" name="my-button" onClick=(action buttonClicked "my-button")}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  $button.click();

});

test('it does not fire an action on button click when disabled', function(assert) {

  assert.expect(1);

  this.set('buttonClicked', (name) => {
    assert.ok(name, 'my-button', 'action called');
  });

  this.render(hbs `{{uxs-button text="My Button" name="my-button" onClick=(action buttonClicked "my-button") disabled=true}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  $button.click();

  assert.equal($button.attr("class"), 'uxs-button uxs-button--disabled uxs-button--primary ember-view', 'Has correct classes');

});

test('test button accesibility', function(assert) {

  this.set('disabled', false);

  this.render(hbs `{{uxs-button "My Button" disabled=disabled}}`);

  let $button = this.$('[data-test-uxs-button="my-button"]');

  assert.equal($button.attr('aria-label'), 'My Button');
  assert.equal($button.attr('role'), 'button');

  this.set('disabled', true);

  assert.equal($button[0].hasAttribute('aria-disabled'), true);
});