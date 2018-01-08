import EmberObject from '@ember/object';
import AccessibleMixin from 'ember-ux-sauce/mixins/accessible';
import { module, test } from 'qunit';

module('Unit | Mixin | accessible');

// Replace this with your real tests.
test('it works', function(assert) {
  let AccessibleObject = EmberObject.extend(AccessibleMixin);
  let subject = AccessibleObject.create();
  assert.ok(subject);
});
