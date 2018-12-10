# Notice

This component can be used to display notices to the user.

To see a full list of arguments check out the [api page](../api/components/uxs-notice)

## Simple Usage

Let's look at a basic example of a notice.

{{docs/uxs-notice/basic-demo}}

## Usage with Icons

You can intergrate icons in a notice.

{{docs/uxs-notice/icon-demo}}

## Usage with Buttons & Links

Links & buttons can also be included in a notice.

{{docs/uxs-notice/button-demo}}

<!-- {{#docs-demo as |demo|}}

  {{#demo.example name="notice"}}

    {{#uxs-notice style="primary" truncated=truncated as |notice|}}
      {{notice.link "home" "docs"}}
      {{notice.text "This notice has a prefix link"}}
    {{/uxs-notice}}

    {{#uxs-notice style="accent" truncated=truncated as |notice|}}
      {{notice.text "This notice has a suffix button"}}
      {{notice.button "close"}}
    {{/uxs-notice}}

  {{/demo.example}}

  {{demo.snippet "notice.hbs"}}

{{/docs-demo}} -->

## Testable Elements

This component provides the following test selectors.

### data-test-notice

### data-test-notice-icon

### data-test-notice-text

### data-test-notice-button

### data-test-notice-link

{{args-table/style-options}}
