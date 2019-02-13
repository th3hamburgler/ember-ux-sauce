# List Items

List items are used to render each item of you list. The items tend to contain 1 - 3 "columns" of data. These could be an avatar, text or actions.

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

{{docs/uxs-list-item/link-demo}}
