import EmberObject from '@ember/object';
import VisibleMixin from 'ember-ux-sauce/mixins/visible';
import {
  module,
  test
} from 'qunit';

module('Unit | Mixin | visible', function() {

  test('test visible class binding', function(assert) {
    let VisibleObject = EmberObject.extend(VisibleMixin);

    let subject = VisibleObject.create();

    subject.visible = true;

    assert.equal(subject.visibleClass, 'flex');
  });

  test('test visible class binding with custom display value', function(assert) {
    let VisibleObject = EmberObject.extend(VisibleMixin);

    let subject = VisibleObject.create();

    subject.visible = true;
    subject.visibleDisplayType = 'block';

    assert.equal(subject.visibleClass, 'block');
  });

  test('test hidden class binding', function(assert) {
    let VisibleObject = EmberObject.extend(VisibleMixin);

    let subject = VisibleObject.create();

    subject.hidden = true;


    assert.equal(subject.hiddenClass, 'hidden');
  });

  test('test visible class binding at media query', function(assert) {
    let VisibleObject = EmberObject.extend(VisibleMixin);

    let subject = VisibleObject.create();

    subject.visible = 'md';

    assert.equal(subject.visibleClass, 'md:flex');
  });

  test('test visible class binding with custom display value at media query', function(assert) {
    let VisibleObject = EmberObject.extend(VisibleMixin);

    let subject = VisibleObject.create();

    subject.visible = 'sm';
    subject.visibleDisplayType = 'block';

    assert.equal(subject.visibleClass, 'sm:block');
  });

  test('test hidden class when null at media query', function(assert) {
    let VisibleObject = EmberObject.extend(VisibleMixin);

    let subject = VisibleObject.create();

    subject.hidden = 'lg';


    assert.equal(subject.hiddenClass, 'lg:hidden');
  });

  test('test visible class when null', function(assert) {
    let VisibleObject = EmberObject.extend(VisibleMixin);

    let subject = VisibleObject.create();

    subject.visible = null;

    assert.equal(subject.visibleClass, null);
  });

  test('test hidden class  when null', function(assert) {
    let VisibleObject = EmberObject.extend(VisibleMixin);

    let subject = VisibleObject.create();

    subject.hidden = null;


    assert.equal(subject.hiddenClass, null);
  });
});