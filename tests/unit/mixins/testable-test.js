import Ember from 'ember';
import TestableMixin from 'ember-ux-sauce/mixins/testable';
import { module, test } from 'qunit';

module('Unit | Mixin | testable');

// Replace this with your real tests.
test('it works', function(assert) {
  let TestableObject = Ember.Object.extend(TestableMixin);
  let subject = TestableObject.create();
  assert.ok(subject);
});
