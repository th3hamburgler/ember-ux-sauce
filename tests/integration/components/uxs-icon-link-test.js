import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-icon-link', 'Integration | Component | uxs icon link', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uxs-icon-link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uxs-icon-link}}
      template block text
    {{/uxs-icon-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
