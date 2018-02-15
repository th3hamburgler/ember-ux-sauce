import EmberObject from '@ember/object';
import StyleableMixin from 'ember-ux-sauce/mixins/styleable';
import { module, test } from 'qunit';

module('Unit | Mixin | styleable');

// Replace this with your real tests.
test('it works', function(assert) {
  let StyleableObject = EmberObject.extend(StyleableMixin);
  let subject = StyleableObject.create();
  assert.ok(subject);
});
