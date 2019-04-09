# Breadcrumbs

Breadcrumbs are an important navigational element that supports wayfinding — making users aware of their current location within the hierarchical structure of an app.

Breadcrumbs are a list of links representing the current page and its “ancestors”, typically going all the way back to the app homepage.

The _uxs-breadcrumb_ component yields tab _link_ and _item_ components.

To see a full list of arguments check out the [api page](../api/components/uxs-breadcrumb)

## Usage

Let's look at a basic example. You can play around with some of the arguments in this demo.

{{docs/uxs-breadcrumb/basic-demo}}

## Explanation,

_uxs-breadcrumb_ is the wrapping component

The contextual component _crumb.link_ is an alias to embers core _link-to_ component. So you can use breadcrumb items that act link links.

The _crumb.item_ component lets you render breadcrumb items that are not links. So you can bind action events to them instead.

{{args-table/style-options}}
{{args-table/align-options}}
