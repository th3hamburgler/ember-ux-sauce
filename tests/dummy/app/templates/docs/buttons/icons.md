# Icons

The uxs-icon and uxs-icon-link components on their own are generally used for actions. This could be to trigger a custom ember action or in the case of uxs-icon-link, navigate to a new route.

The icons are defined as svgs. A selection of icon from the <a href="https://material.io/icons/">Material Icons</a> framework has been used in this dummy project. To use your own icons
just add the svg files to your public directory and visit the development server at _/ember-svg-jar/index.html_.

## Display Types

### Regular

<div class="uxs">
  {{uxs-icon "alarm_on"}}
</div>

### Large

<div class="uxs">
  {{uxs-icon "alarm_add" style="large"}}
</div>

## Usage

Let's look at a basic example. You can play around with some of the arguments in this demo.

{{docs/uxs-icon/basic-demo}}

## API

To see a full list of arguments for this component check out the api pages:

-   [uxs-icon](/docs/api/components/uxs-icon)
