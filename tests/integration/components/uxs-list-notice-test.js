import {
  find
} from '@ember/test-helpers';
import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-list-notice', 'Integration | Component | uxs list notice', {
  integration: true
});

test('it renders an empty notice component', function(assert) {

  this.render(hbs `{{uxs-list-notice}}`);

  assert.equal(find('*').textContent.trim(), '');

  // Template block usage:
  this.render(hbs `
    {{#uxs-list-notice}}
      template block text
    {{/uxs-list-notice}}
  `);

  assert.equal(find('*').textContent.trim(), 'template block text');
});

// test('it renders a simple notice component', function(assert) {
//
//   // Handle any actions with this.on('myAction', function(val) { ... });
//
//   this.set('text', 'value');
//
//   this.render(hbs `{{uxs-list-notice text=text}}`);
//
//   assert.equal(find('["uxs-list-notice"]').textContent.trim(), 'value');
// });