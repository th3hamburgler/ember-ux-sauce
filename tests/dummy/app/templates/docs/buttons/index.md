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
  {{uxs-button "Button" icon="favorite"}}
</div>

### Outlined

<div class="uxs">
  {{uxs-button "Button" icon="favorite" style="outlined"}}
</div>

### Naked

<div class="uxs">
  {{uxs-button "Button" icon="favorite" style="naked"}}
</div>

## Usage

Let's look at a basic example. You can play around with some of the arguments in this demo.

{{docs/uxs-button/basic-demo}}

## Button Links

Button links are available when you need a button to link to another route. The parameter pattern is the same at ember's built in [link-to component](https://guides.emberjs.com/release/templates/links/).

{{docs/uxs-button-link/basic-demo}}

## API

To see a full list of arguments for these components check out the api pages:

-   [uxs-button](/docs/api/components/uxs-button)
-   [uxs-button-link](/docs/api/components/uxs-button-link)
