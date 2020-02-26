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

## Button Layout

### Block Buttons

Block level buttons span the full width of a parent and will have a bottom margin.

<div class="uxs">
  <div class="fx-col bg-light">
    {{uxs-button "Block Button" block=true}}
    {{uxs-button "Block Button" block=true color="accent"}}
  </div>
</div>

### Inline Buttons

Inline buttons will appear alongside other elements when wrapped in a flex row.
The include horizontal margins to space.

<div class="uxs">
  <div class="fx-row bg-light">
    {{uxs-button "Inline Button" inline=true}}
    {{uxs-button "Inline Button" inline=true color="accent"}}
  </div>
</div>

### Responsive Layout

Both _block_ and _inline_ attributes can accept a media query code to target layouts at different levels.

In this example the buttons appear inline on small devices (768px) and under and block on devices above

<div class="uxs bg-light">
  <div class="mb-2 fx-col sm:fx-row">
    {{uxs-button "Primary" block="sm" inline="sm"}}
    {{uxs-button "Secondary" color="accent" block="sm" inline="sm"}}
  </div>
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
