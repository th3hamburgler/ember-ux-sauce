import EmberObject from '@ember/object';
import TextableMixin from 'ember-ux-sauce/mixins/textable';
import { module, test } from 'qunit';

module('Unit | Mixin | textable');

// Replace this with your real tests.
test('it works', function(assert) {
  let TextableObject = EmberObject.extend(TextableMixin);
  let subject = TextableObject.create();
  assert.ok(subject);
});
