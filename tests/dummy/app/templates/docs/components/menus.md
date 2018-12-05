# Menus

The uxs menu component is used to display lists of links and actions.

To see a full list of arguments check out the [api page](../api/components/uxs-menu)

## Simple Vertical Usage

Two simple examples. The menu widths adjusts to accommodate the content in keyline increments.

{{docs/uxs-menu/vertical-demo}}

## Simple Vertical Usage

This example shows a menu rendered horizontally

{{docs/uxs-menu/horizontal-demo}}

## Menu Items

The menu yeilds two components for handling items.

-   Use _item_ if you want to bind an action to the item - [api page](../api/components/uxs-menu/item)
-   Use _link_ if you want to transition to another route - [api page](../api/components/uxs-menu/route)

The following demo shows both in use as well as a disabled state for individual items.

{{docs/uxs-menu/item-demo}}

## Icons

Menu items & links support icons through the _leftIcon_ and _rightIcon_ attributes.

You can pass true to _hasLeftIcon_ & _hasRightIcon_ on the menu to ensure items without icons inherit the relevant padding.

{{docs/uxs-menu/icon-demo}}

## Dividers

Menus can include dividers to seperate items. These work on both vertical and horizontal menus.

{{docs/uxs-menu/divider-demo}}

## Secondary Text

Menu items & links support secondary text through the \__secondaryText_ attribute. This text will be displayed aligned right of the main text.

You can pass true to _hasSecondaryText_ on the menu to ensure items without secondary text inherit the relevant padding.

Secondary Text is only supported on left aligned & vertical menus.

{{docs/uxs-menu/secondary-text-demo}}

## Subheadings

Menu Items can include subheadings to split up items. Subheadings are not clickable.

View the subheading api [api page](../api/components/uxs-subheading)

{{docs/uxs-menu/subheading-demo}}

## Dropdown Menu

Most uses of uxs-menu will involve only displaying it on clicking the menu text/icon. UXS includes [ember-basic-dropdown](https://github.com/cibernox/ember-basic-dropdown) to use in this scenario.

You can use any component to act as your trigger (usually button, text or icon) and then include a uxs-menu in the dropdowns content.

{{docs/uxs-menu/dropdown-demo}}

{{args-table/align-options}}
{{args-table/size-options}}
{{args-table/style-options}}
{{args-table/weight-options}}
