import Component from '@ember/component';
import layout from '../templates/components/uxs-typography';

/**
  A typographic component to yield type components

  ```hbs
  {{#uxs-typography as |t|}}
    {{t.headline "Headline" 3 align="center"}}
    {{t.subtitle "A Subtitle"}}
    {{t.body "Adipiscing consequat a potenti a mollis suspendisse orci a id sagittis posuere vestibulum suspendisse suspendisse sed nisi.Odio." 1 true}}
  {{/uxs-typography}}
  ```

  @class UXS Typography
  @public
  @yield {Hash} t
  @yield {Component} t.headline
  @yield {Component} t.subtitle
  @yield {Component} t.body
  @yield {Component} t.button
  @yield {Component} t.caption
  @yield {Component} t.overline
  @yield {Component} t.text
*/
export default Component.extend({
  /**
    The html tag name for the root of the component

    @argument  tagName
    @type       String
    @default    ''
    @public
    */
  tagName: '',
  layout
});