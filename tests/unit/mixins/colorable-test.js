import EmberObject from '@ember/object';
import ColorableMixin from 'ember-ux-sauce/mixins/colorable';
import { module, test } from 'qunit';

module('Unit | Mixin | colorable');

// Replace this with your real tests.
test('it works', function(assert) {
  let ColorableObject = EmberObject.extend(ColorableMixin);
  let subject = ColorableObject.create();
  assert.ok(subject);
});
