# Fabs (Floating Action Buttons)

The fab and fab-link component represents the primary action of a screen.

## Display Types

### Regular

<div class="uxs">
  {{uxs-fab "add"}}
  {{uxs-fab-link "add" "docs.index"}}
</div>

### Mini

<div class="uxs">
  {{uxs-fab "add" style="mini"}}
  {{uxs-fab-link "add" "docs.index" style="mini"}}
</div>

### Extended

<div class="uxs">
  {{uxs-fab "Button" style="extended"}}
  {{uxs-fab-link "Button" "docs.index" style="extended"}}
</div>

### Extended with icon

<div class="uxs">
  {{uxs-fab "Button" "add" style="extended"}}
  {{uxs-fab-link "Button" "docs.index" icon="add" style="extended"}}
</div>

## Usage

Let's look at a basic example. You can play around with some of the arguments in this demo.

{{docs/uxs-fab/basic-demo}}

## Fab Links

Fab links are available when you need a fab button to link to another route. The parameter pattern is the same at ember's built in [link-to component](https://guides.emberjs.com/release/templates/links/).

{{docs/uxs-fab-link/basic-demo}}

## API

To see a full list of arguments for these components check out the api pages:

-   [uxs-fab](/docs/api/components/uxs-fab)
-   [uxs-fab-link](/docs/api/components/uxs-fab-link)
