import EmberObject from '@ember/object';
import ScalableMixin from 'ember-ux-sauce/mixins/scalable';
import { module, test } from 'qunit';

module('Unit | Mixin | scalable', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ScalableObject = EmberObject.extend(ScalableMixin);
    let subject = ScalableObject.create();
    assert.ok(subject);
  });
});
