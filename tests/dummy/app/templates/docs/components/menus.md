# Menus

The uxs menu component is used to display lists of links and actions.

To see a full list of arguments check out the [api page](/docs/api/components/uxs-menu)

## Simple Vertical Usage

Two simple examples. The menu widths adjusts to accommodate the content in keyline increments.

{{docs/uxs-menu/vertical-demo}}

## Simple Vertical Usage

This example shows a menu rendered horizontally

{{docs/uxs-menu/horizontal-demo}}

## Menu Items

The menu yeilds two components for handling items.

-   Use _item_ if you want to bind an action to the item - [api page](/docs/api/components/uxs-menu/item)
-   Use _link_ if you want to transition to another route - [api page](/docs/api/components/uxs-menu/route)

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

Menu Items support a secondaryText attribute.

## Subheadings

Menu Items can include subheadings to split up items.

## Dropdown Menu

Move to seperate page.

<!--

## Icons

Menu items supports icons through the leftIcon and rightIcon attributes.

{{#docs-demo as |demo|}}

  {{#demo.example name="menu-icons"}}

    <div class="f fr">
      <div class="mr">
        {{#uxs-menu hasLeftIcon=true as |menu|}}

          {{menu.item "Preview" leftIcon="visibility"}}
          {{menu.item "Share" leftIcon="person_add"}}
          {{menu.item "Get Links" disabled=true  leftIcon="link"}}
          {{menu.divider}}
          {{menu.item "Make Copy" leftIcon="content_copy"}}
          {{menu.item "Download" leftIcon="file_download"}}
          {{menu.divider}}
          {{menu.item "YouTube" leftIcon="delete"}}
        {{/uxs-menu}}
      </div>
      <div class="mr">
        {{#uxs-menu hasRightIcon=true as |menu|}}
          {{menu.item "Clear Config"}}
          {{menu.item "New Config" disabled=true rightIcon="person_add"}}
          {{menu.item "Project" rightIcon="settings"}}
          {{menu.item "Workspace" rightIcon="settings"}}
          {{menu.item "Bold" rightIcon="format_bold"}}
          {{menu.item "Italic" rightIcon="format_italic"}}
        {{/uxs-menu}}
      </div>
    </div>

  {{/demo.example}}

  {{demo.snippet "menu-icons.hbs"}}

{{/docs-demo}}

## Secondary Text

Menu Items support a secondaryText attribute.

{{#docs-demo as |demo|}}

  {{#demo.example name="menu-secondary-text"}}

    <div class="f fr">
      <div class="mr">
        {{#uxs-menu hasSecondaryText=true as |menu|}}
          {{menu.item "Bold" rightIcon="format_italic"}}
          {{menu.item "Italic" secondaryText="⌘I"}}
          {{menu.item "Underline" secondaryText="⌘U"}}
          {{menu.item "Strikethrough" secondaryText="Alt+Shift+5"}}
          {{menu.item "Superscript" secondaryText="⌘."}}
          {{menu.item "Subscript" secondaryText="⌘,"}}
          {{menu.divider}}
          {{menu.item "Clear Formatting" secondaryText="⌘/"}}
        {{/uxs-menu}}
      </div>
      <div class="mr">
        {{#uxs-menu hasSecondaryText=true as |menu|}}
          {{menu.item "Open" secondaryText="Cmd + O"}}
          {{menu.item "Paste in place" secondaryText="Shift + V"}}
          {{menu.item "Research" secondaryText="Opt + Shift + Cmd + I"}}
        {{/uxs-menu}}
      </div>
    </div>

  {{/demo.example}}

  {{demo.snippet "menu-secondary-text.hbs"}}

{{/docs-demo}}

## Subheadings

Menu Items can include subheadings to split up items.

{{#docs-demo as |demo|}}

  {{#demo.example name="menu-subheadings"}}

    <div class="f fr">

      <div class="mr">
        {{#uxs-menu hasLeftIcon=true as |menu|}}
          {{menu.subheading "Sort by"}}
          {{menu.item "Age"}}
          {{menu.item "Surname" leftIcon="arrow_upward"}}
          {{menu.item "Location"}}
        {{/uxs-menu}}
      </div>
      <div>
        {{#uxs-menu hasLeftIcon=true as |menu|}}
          {{menu.subheading "Filter by"}}
          {{menu.item "Age"}}
          {{menu.item "Surname" leftIcon="done"}}
          {{menu.item "Location"}}
        {{/uxs-menu}}
      </div>
    </div>

  {{/demo.example}}

  {{demo.snippet "menu-subheadings.hbs"}}

{{/docs-demo}}

## Dropdown Menu

You can use the basic dropdown component to display menus in your app.

{{#docs-demo as |demo|}}

  {{#demo.example name="button-menus"}}

    {{#basic-dropdown as |dropdown|}}
      {{#dropdown.trigger}}
        {{uxs-button "Click Me"}}
      {{/dropdown.trigger}}
      {{#dropdown.content class="uxs-ns"}}
        {{#uxs-menu as |menu|}}
          {{#menu.item}}Normal nav item{{/menu.item}}
          {{#menu.item}}And another{{/menu.item}}
          {{menu.separator}}
          {{#menu.link "docs.index"}}This one is a link{{/menu.link}}
        {{/uxs-menu}}
      {{/dropdown.content}}
    {{/basic-dropdown}}

  {{/demo.example}}

  {{demo.snippet "button-menus.hbs"}}

{{/docs-demo}}

## Icon Dropdown Menu

This is a menu with an icon trigger.

{{#docs-demo as |demo|}}

  {{#demo.example name="button-menus"}}

    {{#basic-dropdown as |dropdown|}}
      {{#dropdown.trigger}}
        {{uxs-icon "filter_list"}}
      {{/dropdown.trigger}}
      {{#dropdown.content class="uxs-ns"}}
        {{#uxs-menu as |menu|}}
          {{#menu.item}}Normal nav item{{/menu.item}}
          {{#menu.item}}And another{{/menu.item}}
          {{menu.separator}}
          {{#menu.link "docs.index"}}This one is a link{{/menu.link}}
        {{/uxs-menu}}
      {{/dropdown.content}}
    {{/basic-dropdown}}

  {{/demo.example}}

  {{demo.snippet "button-menus.hbs"}}

{{/docs-demo}}

## Styles Usage

You can customise the look of your menu with the style attribute.

{{#docs-demo class="bg-dark" as |demo|}}

  {{#demo.example name="menu-styles"}}

    {{#each styles as |style|}}

      {{#uxs-menu style=style class="mb" horizontal=true as |menu|}}
        {{menu.item (capitalize (concat style " Menu"))}}
        {{menu.item "Disabled Item" disabled=true}}
        {{menu.divider}}
        {{menu.link "Docs" "docs"}}
        {{menu.link "App" "app"}}
      {{/uxs-menu}}

    {{/each}}

    {{#each styles as |style|}}

      {{#uxs-menu class="mb" style=style horizontal=false as |menu|}}
        {{menu.item (capitalize (concat style " Menu"))}}
        {{menu.item "Disabled Item" disabled=true}}
        {{menu.divider}}
        {{menu.link "Docs" "docs"}}
        {{menu.link "App" "app"}}
      {{/uxs-menu}}
      <br>

    {{/each}}

  {{/demo.example}}

  {{demo.snippet "menu-styles.hbs"}}

{{/docs-demo}} -->

{{args-table/align-options}}
{{args-table/size-options}}
{{args-table/style-options}}
{{args-table/weight-options}}
