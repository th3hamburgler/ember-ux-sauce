import { find } from '@ember/test-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-navbar/mobile-nav', 'Integration | Component | uxs navbar/mobile nav', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uxs-navbar/mobile-nav}}`);

  assert.equal(find('*').textContent.trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uxs-navbar/mobile-nav}}
      template block text
    {{/uxs-navbar/mobile-nav}}
  `);

  assert.equal(find('*').textContent.trim(), 'template block text');
});
