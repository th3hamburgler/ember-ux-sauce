import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-list/x-subheading', 'Integration | Component | uxs list/x subheading', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uxs-list/x-subheading}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uxs-list/x-subheading}}
      template block text
    {{/uxs-list/x-subheading}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
