import EmberObject from '@ember/object';
import DatableMixin from 'ember-ux-sauce/mixins/datable';
import { module, test } from 'qunit';

module('Unit | Mixin | datable', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let DatableObject = EmberObject.extend(DatableMixin);
    let subject = DatableObject.create();
    assert.ok(subject);
  });
});
