# Fabs (Floating Action Buttons)

The fab and fab-link component represents the primary action of a screen.

## Display Types

UXS ships with 3 styles of fab.

### Regular

<div class="uxs">
  {{uxs-fab "add"}}
</div>

### Mini

<div class="uxs">
  {{uxs-fab "add" style="mini"}}
</div>

### Extended

<div class="uxs">
  {{uxs-fab "Button" style="extended"}}
</div>

### Extended with icon

<div class="uxs">
  {{uxs-fab "Button" "add" style="extended"}}
</div>

## Usage

Let's look at a basic example. You can play around with some of the arguments in this demo.

[API Docs](/docs/api/components/uxs-fab)

{{docs/uxs-fab/basic-demo}}

## Fab Links

Fab links are available when you need a fab button to link to another route. The parameter pattern is the same at ember's built in [link-to component](https://guides.emberjs.com/release/templates/links/).

[API Docs](/docs/api/components/uxs-fab-link)

{{docs/uxs-fab-link/basic-demo}}
