import Ember from 'ember';
import ButtonableMixin from 'ember-ux-sauce/mixins/buttonable';
import { module, test } from 'qunit';

module('Unit | Mixin | buttonable');

// Replace this with your real tests.
test('it works', function(assert) {
  let ButtonableObject = Ember.Object.extend(ButtonableMixin);
  let subject = ButtonableObject.create();
  assert.ok(subject);
});
