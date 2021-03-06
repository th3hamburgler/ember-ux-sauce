# Buttons

The button component is used for clickable actions. This could be to submit a form or to trigger an ember action.

## Usage

Let's look at a basic example. You can play around with some of the arguments in this demo. To see a full list check out the [api page](../api/components/uxs-button)

{{docs/uxs-button/basic-demo}}

## Actions

The button component fires an action on tap/click. Actions are passed as [closure actions](https://dockyard.com/blog/2015/10/29/ember-best-practice-stop-bubbling-and-use-closure-actions).

The action will not be fired if the component is disabled or in a loading state.

{{docs/uxs-button/action-demo}}

## Inline Buttons

By default buttons will be displayed as block items. To set them as inline pass true to the _inline_ argument.

{{docs/uxs-button/inline-demo}}

## Stock Style Examples

Here's an example of the button in all it's stock styles:

{{docs/uxs-button/all-styles}}

## Stock Size Examples

Here's an example of the button in all it's stock sizes:

{{docs/uxs-button/all-sizes}}

{{args-table/size-options}}
{{args-table/style-options}}
