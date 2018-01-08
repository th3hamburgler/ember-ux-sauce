import EmberObject from '@ember/object';
import ButtonableMixin from 'ember-ux-sauce/mixins/buttonable';
import { module, test } from 'qunit';

module('Unit | Mixin | buttonable');

// Replace this with your real tests.
test('it works', function(assert) {
  let ButtonableObject = EmberObject.extend(ButtonableMixin);
  let subject = ButtonableObject.create();
  assert.ok(subject);
});
