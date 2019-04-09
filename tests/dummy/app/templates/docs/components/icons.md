# Icons

The icon component is used to render icons from the <a href="https://material.io/icons/">Material Icons</a> font library.

To see a full list of arguments check out the [api page](../api/components/uxs-icon)

## Simple Usage

Let's look at a basic example of a name control where you require two inputs to sit alongside each other

{{docs/uxs-icon/basic-demo}}

## Action Usage

You can pass action closures to icons

{{docs/uxs-icon/action-demo}}

## SVG Icons

The default source of icons is from googles font library. If you prefer you can use your own svg icons. UXS uses [ember-svg-jar](https://github.com/ivanvotti/ember-svg-jar) to manage svg assets.

Just add the svg files to your public directory and visit the development server at _/ember-svg-jar/index.html_.

To use svg icons set the _svg_ attribute to true and pass the path to the image as the first parameter

{{docs/uxs-icon/svg-demo}}

## Testable Elements

This component provides the following test selectors.

### data-test-icon

{{args-table/align-options}}
{{args-table/size-options}}
{{args-table/style-options}}
{{args-table/weight-options}}
