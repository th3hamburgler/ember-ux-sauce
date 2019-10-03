import EmberObject from '@ember/object';
import GroupableMixin from 'ember-ux-sauce/mixins/groupable';
import { module, test } from 'qunit';

module('Unit | Mixin | groupable', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let GroupableObject = EmberObject.extend(GroupableMixin);
    let subject = GroupableObject.create();
    assert.ok(subject);
  });
});
