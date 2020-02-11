# List Items

Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.

[List API Docs](/docs/api/components/uxs-list)

## List Types

### Single-line list

Single-line list items contain a maximum of one line of text.

{{#uxs-list as |list|}}
  {{#each rows as |row|}}
    {{#list.item as |item|}}
      {{#item.aside}}
        {{item.avatar "face" icon=true color="grey"}}
      {{/item.aside}}
      {{#item.body}}
        {{item.title "One Line Item"}}
      {{/item.body}}
      {{#item.aside}}
        {{item.meta "More"}}
      {{/item.aside}}
    {{/list.item}}
  {{/each}}
{{/uxs-list}}

### Two-line list

Two-line list items contain a maximum of two lines of text.

{{#uxs-list as |list|}}
  {{#each rows as |row|}}
    {{#list.item as |item|}}
      {{#item.aside}}
        {{item.avatar "face" icon=true color="grey"}}
      {{/item.aside}}
      {{#item.body}}
        {{item.title "One Line Item"}}
        {{item.meta "Secondary Text"}}
      {{/item.body}}
      {{#item.aside}}
        {{item.meta "More"}}
      {{/item.aside}}
    {{/list.item}}
  {{/each}}
{{/uxs-list}}

### Three-line list

Three-line list items contains a maximum of three lines of text.

{{#uxs-list as |list|}}
  {{#each rows as |row|}}
    {{#list.item as |item|}}
      {{#item.aside}}
        {{item.avatar "face" icon=true color="grey"}}
      {{/item.aside}}
      {{#item.body}}
        {{item.title "One Line Item"}}
        {{item.meta "Secondary line text"}}
        {{item.meta "Tertiary line text."}}
      {{/item.body}}
      {{#item.aside}}
        {{item.meta "More"}}
      {{/item.aside}}
    {{/list.item}}
  {{/each}}
{{/uxs-list}}

## Structure

### Items

A list should be easily scannable, and any `list.item` in a list can be used to anchor and align list item content. Scannability is improved when elements (such as supporting visual and primary text) are placed in consistent locations across list items.

[List Item API Docs](/docs/api/components/uxs-list/item)

If you need a list item to link to another route when it is clicked anywhere then you can use the `list.itemLink` component which yeilds the same child components and adds the ember link-to params to take in a route name and any parameters.

[List Link Item API Docs](/docs/api/components/uxs-list/item-link)

List items can contain two types of child components to control their horizontal layout and structure

### Body

The `item.body` component should be used to contain the primary text. This components width will scale with the available space.

[List Body API Docs](/docs/api/components/uxs-list/body)

### Aside

The `item.aside` component should be used to contain any supporting visual data like avatars and icons. It can also be used to display clickable secondary actions icons and meta text.

[List Aside API Docs](/docs/api/components/uxs-list/aside)

<!--
## Basic Example

This is a simple list containing just a title for each item.

{{docs/uxs-list-item/basic-demo}}

## Adding more content

This is a list contains some meta data and includes a bottom border. By defining the lines & border property on the list component, these properties are passed to each item and will set the height and bottom-border.

{{docs/uxs-list-item/content-demo}}

## Avatars and Actions

This is a list that includes some horizontal layout for the avatar and item. We use the aside and body contextual components to split up each items layout.
There is a variaty of avatar components you can use in lists including: image, text and icon avatars. See the {{link-to "avatars page" "docs.lists.avatars"}} for details.

{{docs/uxs-list-item/avatar-demo}}

## Item Links

Often you'll want to link your list items to other routes. the _uxs-list_ component yields out:

-   _list.item-link_
-   _list.aside-link_
-   _list.body-link_

Just treat the same as the non _link_ alternatives with the route name & any params passed in as positional params.

{{docs/uxs-list-item/link-demo}} -->
