import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('uxs-nav', 'Integration | Component | uxs nav', {
  integration: true
});

test('it renders a default nav', function(assert) {

  this.set('align', 'left');
  this.set('detail', false);
  this.set('horizontal', false);

  this.render(hbs `
    {{#uxs-nav
      align=align
      detail=detail
      horizontal=horizontal
      name="my-nav"
      as |nav|
    }}
      {{#nav.item name="my-item"}}Nav Item{{/nav.item}}
      {{nav.link "Nav Link" "docs" name="my-link"}}
    {{/uxs-nav}}
  `);

  let $nav = this.$('[data-test-uxs-nav="my-nav"]'),
    $item = this.$('[data-test-uxs-nav__item="my-item"]'),
    $link = this.$('[data-test-uxs-nav__item="my-link"]');

  assert.equal($item.text().trim(), 'Nav Item');
  assert.equal($link.text().trim(), 'Nav Link');

  assert.equal($nav.attr("class"), 'uxs uxs-nav uxs-nav--left ember-view', true, 'Has correct classes');

});