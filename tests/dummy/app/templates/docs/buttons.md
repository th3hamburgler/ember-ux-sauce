# Buttons

The button and button-link components are used for actions. This could be to submit a form, trigger a custom ember action or in the case of button-link, navigate to a new route.

To see a full list check out the [api page](../api/components/uxs-button)

## Display Types

### Contained

<div class="uxs">
  {{uxs-button "Button"}}
</div>

### Outlined

<div class="uxs">
  {{uxs-button "Button" style="outlined"}}
</div>

### Naked

<div class="uxs">
  {{uxs-button "Button" style="naked"}}
</div>

## Leading Icon

### Contained

<div class="uxs">
  {{uxs-button "Button" icon="star"}}
</div>

### Outlined

<div class="uxs">
  {{uxs-button "Button" icon="star" style="outlined"}}
</div>

### Naked

<div class="uxs">
  {{uxs-button "Button" icon="star" style="naked"}}
</div>

## Usage

Let's look at a basic example. You can play around with some of the arguments in this demo. To see a full list check out the [api page](../api/components/uxs-button)

{{docs/uxs-button/basic-demo}}

## Button Links

Button links are available when you need a button to link to another route. The parameter pattern is the same at ember's built in [link-to component](https://guides.emberjs.com/release/templates/links/).

<div class="uxs">
  {{uxs-button-link "Button" "docs.buttons"}}
</div>

<!--



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
-->
