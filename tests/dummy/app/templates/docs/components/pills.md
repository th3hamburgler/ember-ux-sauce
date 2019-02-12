# Pills

Pills are comenly used to display tags or inline statuses. They are usually colored to reflect their content.

To see a full list of arguments check out the [api page](../api/components/uxs-pill)

## Simple Usage

Let's look at a basic example of a pill.

{{docs/uxs-pill/basic-demo}}

## Multiple Pills

If you want to display multiple pills along side each other just wrap them in a clearing component. e.g  `{{uxs-content}}` or `{{uxs-div clear=true}}`

{{docs/uxs-pill/multiple-demo}}

## Pills With Icons

Add icons to your pills.

{{docs/uxs-pill/icon-demo}}

## Pills With badges

Add badge counts to your pills.

<!--
{{#docs-demo as |demo|}}

  {{#demo.example name="icon-pills" class="uxs"}}

    {{#uxs-div class="clear"}}

      {{uxs-pill
        "primary"
        style="primary"
        size=size
        rounded=rounded
        prefixIcon="check_circle"
      }}

      {{uxs-pill
        "accent"
        style="accent"
        size=size
        rounded=rounded
        suffixIcon="account_circle"
      }}
      {{uxs-pill
        "warning"
        style="warning"
        size=size
        rounded=rounded
        prefixIcon="add_circle"
        suffixIcon="remove_circle"
      }}
      {{uxs-pill
        "error"
        style="error"
        size=size
        rounded=rounded
      }}
    {{/uxs-div}}

  {{/demo.example}}

  {{demo.snippet "icon-pills.hbs"}}

{{/docs-demo}} -->

## Testable Elements

This component provides the following test selectors.

### data-test-pill

{{args-table/style-options}}
{{args-table/size-options}}
