import { find } from '@ember/test-helpers';
import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-navbar', 'Integration | Component | uxs navbar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs `{{uxs-navbar title="MyApp"}}`);

  assert.equal(find('*').textContent.trim(), 'MyApp');
});