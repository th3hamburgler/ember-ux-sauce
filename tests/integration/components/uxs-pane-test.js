import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-pane', 'Integration | Component | uxs pane', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uxs-pane}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uxs-pane}}
      template block text
    {{/uxs-pane}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
