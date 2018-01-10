import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-form-tip', 'Integration | Component | uxs form tip', {
  integration: true
});

test('it renders', function(assert) {
  this.set('tip', 'How about I tell you a little story');

  this.render(hbs `{{uxs-form-tip tip name="my-tip"}}`);

  let $tip = this.$('[data-test-uxs-form__tip="my-tip"]')

  assert.equal($tip.prop("tagName"), 'DIV', 'Has correct tag name');
  assert.equal($tip.text().trim(), 'How about I tell you a little story', 'Has correct text');
  assert.equal($tip.attr("class"), 'uxs-form__tip ember-view', true, 'Has correct classes');
});

test('it renders a required tip', function(assert) {
  this.set('tip', 'How about I tell you a little story');
  this.set('required', true);
  this.set('error', false);
  this.set('warning', false);
  this.set('success', false);

  this.render(hbs `{{uxs-form-tip tip name="my-tip" required=required error=error warning=warning success=success}}`);

  let $tip = this.$('[data-test-uxs-form__tip="my-tip"]')

  assert.equal($tip.prop("tagName"), 'DIV', 'Has correct tag name');
  assert.equal($tip.text().trim(), 'How about I tell you a little story', 'Has correct text');
  assert.equal($tip.attr("class"), 'uxs-form__tip uxs-form__tip--required ember-view', true, 'Has correct classes');

  // change error

  this.set('error', true);
  this.set('warning', true);
  this.set('success', true);

  assert.equal($tip.attr("class"), 'uxs-form__tip uxs-form__tip--error uxs-form__tip--required uxs-form__tip--success uxs-form__tip--warning ember-view', true, 'Has correct classes');
});