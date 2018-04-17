import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-form-dropdown-multiple', 'Integration | Component | uxs form dropdown multiple', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uxs-form-dropdown-multiple}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#uxs-form-dropdown-multiple}}
      template block text
    {{/uxs-form-dropdown-multiple}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
