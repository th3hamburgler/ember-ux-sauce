import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-datalist', 'Integration | Component | uxs datalist', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uxs-datalist}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uxs-datalist}}
      template block text
    {{/uxs-datalist}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
