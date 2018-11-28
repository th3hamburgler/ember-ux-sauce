# List Items

List items are used to render each item of you list. The items tend to contain 1 - 3 "columns" of data. These could be an avatar, text or actions.

## Basic Example

This is a simple list containing just a title for each item.

{{#docs-demo as |demo|}}

  {{#demo.example name="list-items"}}

    {{#uxs-list as |list|}}
      {{#each items as |thing|}}
        {{#list.item as |item|}}
          {{item.title thing.title}}
        {{/list.item}}
      {{/each}}
    {{/uxs-list}}

  {{/demo.example}}

  {{demo.snippet "list-lists.hbs"}}

{{/docs-demo}}

## Adding more content

This is a list contains some meta data and includes a bottom border. By defining the lines & border property on the list component, these properties are passed to each item and will set the height and bottom-border.

{{#docs-demo as |demo|}}

  {{#demo.example name="list-items-bordered"}}

    {{#uxs-list lines=2 bordered=true as |list|}}
      {{#each items as |thing|}}
        {{#list.item as |item|}}
          {{#item.content}}
            {{item.title thing.title}}
            {{item.content thing.location}}
          {{/item.content}}
        {{/list.item}}
      {{/each}}
    {{/uxs-list}}

  {{/demo.example}}

  {{demo.snippet "list-items-bordered.hbs"}}

{{/docs-demo}}

## Avatars and Actions

This is a list that includes some horizontal layout for the avatar and item. We use the aside and body contextual components to split up each items layout.
There is a variaty of avatar components you can use in lists including: image, text and icon avatars. See the {{link-to "avatars page" "docs.lists.avatars"}} for details.

{{#docs-demo as |demo|}}

  {{#demo.example name="list-items-aside"}}

    {{#uxs-list lines=3 bordered=true as |list|}}
      {{#each items as |thing|}}
        {{#list.item as |item|}}
          {{#item.aside}}
            {{item.avatar "https://placeimg.com/100/100/any" round=true}}
          {{/item.aside}}
          {{#item.body}}
            {{item.title thing.title}}
            {{item.detail thing.location}}
            {{item.detail thing.email}}
          {{/item.body}}
          {{#item.aside}}
            {{item.action "keyboard_arrow_right"}}
          {{/item.aside}}
        {{/list.item}}
      {{/each}}
    {{/uxs-list}}

  {{/demo.example}}

  {{demo.snippet "list-items-aside.hbs"}}

{{/docs-demo}}

\## Styles Usage

You can customise the look of your list items by passing the style attribute to the list-item component, this will override any style passed to the parent list.

{{#docs-demo as |demo|}}

  {{#demo.example name="list-items-styles" class="bg-dark"}}

    {{#each styles as |style|}}

      {{#uxs-list style=style lines=3 bordered=true as |list|}}
        {{list.subheading (capitalize (concat style " Subheading"))}}
        {{#list.item as |item|}}
          {{#item.aside}}
            {{item.avatar "http://api.faceholder.io/faces?id=0" round=true}}
          {{/item.aside}}
          {{#item.body}}
            {{item.title (capitalize (concat style " List"))}}
            {{item.detail "foo"}}
            {{item.detail "bar"}}
          {{/item.body}}
          {{#item.aside}}
            {{item.action "invert_colors"}}
          {{/item.aside}}
        {{/list.item}}
        {{#list.item as |item|}}
          {{#item.aside}}
            {{item.avatarText "AA" round=true}}
          {{/item.aside}}
          {{#item.body}}
            {{item.title (capitalize (concat style " List"))}}
            {{item.detail "foo"}}
            {{item.detail "bar"}}
          {{/item.body}}
          {{#item.aside}}
            {{item.action "invert_colors"}}
          {{/item.aside}}
        {{/list.item}}
        {{#list.item as |item|}}
          {{#item.aside}}
            {{item.avatarIcon "beach_access" round=true}}
          {{/item.aside}}
          {{#item.body}}
            {{item.title (capitalize (concat style " List"))}}
            {{item.detail "foo"}}
            {{item.detail "bar"}}
          {{/item.body}}
          {{#item.aside}}
            {{item.action "invert_colors"}}
          {{/item.aside}}
        {{/list.item}}
      {{/uxs-list}}

    {{/each}}

  {{/demo.example}}

{{/docs-demo}}

## Properties

The uxs-list-item component has the following properties:

<table class="docs-args-table">
  <tr>
    <td>style</td>
    <td>Defined the color/style of the list.</td>
    <td><em>String</em></td>
  </tr>
  <tr>
    <td>bordered</td>
    <td>Adds a border to the bottom of the list item. <em>Default: false</em></td>
    <td><em>Boolean</em></td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>Disables the list item, will stop any action being fired. <em>Default: false</em></td>
    <td><em>Boolean</em></td>
  </tr>
  <tr>
    <td>lines</td>
    <td>Fixes the height to accomodate 1-3 lines of content in the body. <em>Default: 1</em></td>
    <td><em>Number (1-3)</em></td>
  </tr>
</table>

## Actions

The uxs-list-item component has the following actions:

<table class="docs-args-table">
  <tr>
    <td>list-item</td>
    <td>onClick</td>
    <td>Fired on list item component click.</td>
  </tr>
  <tr>
    <td>list-item.aside</td>
    <td>onClick</td>
    <td>Fired on list item aside component click.</td>
  </tr>
  <tr>
    <td>list-item.body</td>
    <td>onClick</td>
    <td>Fired on list item body component click.</td>
  </tr>
  <tr>
    <td>list-item.action</td>
    <td>onClick</td>
    <td>Fired on list item action component click.</td>
  </tr>
</table>

## Contextual Components

The <b>List Item</b> component has the following child components:

<table class="docs-args-table">
  <tr>
    <td>aside</td>
    <td>Alias of uxs-div, used to seperate horizontal layout blocks</td>
  </tr>
  <tr>
    <td>body</td>
    <td>Alias of uxs-div, used to seperate horizontal layout blocks, unlike aside, this component will grow to fill the available width</td>
  </tr>
  <tr>
    <td>title</td>
    <td>Alias of {{link-to "uxs-subheading" "docs.typography.index"}}</td>
  </tr>
  <tr>
    <td>content</td>
    <td>Alias of {{link-to "uxs-content" "docs.typography.index"}}</td>
  </tr>
  <tr>
    <td>detail</td>
    <td>Alias of {{link-to "uxs-detail" "docs.typography.index"}}</td>
  </tr>
  <tr>
    <td>avatar</td>
    <td>Alias of {{link-to "uxs-avatar" "docs.lists.avatars"}}</td>
  </tr>
  <tr>
    <td>avatarIcon</td>
    <td>Alias of {{link-to "uxs-avatar-icon" "docs.lists.avatars"}}</td>
  </tr>
  <tr>
    <td>avatarText</td>
    <td>Alias of {{link-to "uxs-avatar-text" "docs.lists.avatars"}}</td>
  </tr>
  <tr>
    <td>action</td>
    <td>Alias of {{link-to "uxs-icon" "docs.components.icons"}}</td>
  </tr>
</table>
