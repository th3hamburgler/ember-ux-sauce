# Buttons

The button and button-link components are used for actions. This could be to submit a form, trigger a custom ember action or in the case of button-link, navigate to a new route.

## Button Styles

UXS ships with 3 styles of buttons.

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

Buttons can also include icons.

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

[API Docs](/docs/api/components/uxs-button)

{{docs/uxs-button/basic-demo}}

## Button Links

Button links are available when you need a button to link to another route. The parameter pattern is the same at ember's built in [link-to component](https://guides.emberjs.com/release/templates/links/).

[API Docs](/docs/api/components/uxs-button-link)

{{docs/uxs-button-link/basic-demo}}
