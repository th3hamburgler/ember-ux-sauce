# Dropdown Controls

The form drowdown component extends the [ember power select](https://ember-power-select.com/docs) component. As such you can pass any of the power select [attributes](https://ember-power-select.com/docs/api-reference)

## Basic Usage

Let's look at a basic example of using the drowdown component. It is always used in block format to enable flexible templationg of your options.

Power select aims to be totally flexible and because of that it doesn't try to make strong assumptions about how you want to use it. e.g. two way bind the selected property. Instead it embraces DDAU (Data Down Actions Up) philosophy so data flow always is unidirectional and explicit.

The _onchange_ event must be handled in your template. This example shows the most common use, update the property on select. For this we can use the ember _mut_ helper.

{{docs/uxs-dropdown/basic-demo}}

## Styles Usage

You can customise the look of your dropdown with the style attribute.

{{docs/uxs-dropdown/all-styles}}

{{args-table/align-options}}
{{args-table/form-type-options}}
{{args-table/size-options}}
{{args-table/style-options}}
{{args-table/weight-options}}
