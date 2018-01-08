import EmberObject from '@ember/object';
import TestableMixin from 'ember-ux-sauce/mixins/testable';
import { module, test } from 'qunit';

module('Unit | Mixin | testable');

// Replace this with your real tests.
test('it works', function(assert) {
  let TestableObject = EmberObject.extend(TestableMixin);
  let subject = TestableObject.create();
  assert.ok(subject);
});
