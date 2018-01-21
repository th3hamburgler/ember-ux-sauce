import EmberObject from '@ember/object';
import AlignableMixin from 'ember-ux-sauce/mixins/alignable';
import { module, test } from 'qunit';

module('Unit | Mixin | alignable');

// Replace this with your real tests.
test('it works', function(assert) {
  let AlignableObject = EmberObject.extend(AlignableMixin);
  let subject = AlignableObject.create();
  assert.ok(subject);
});
