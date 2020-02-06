# Icons

The uxs-icon and uxs-icon-link components on their own are generally used for actions. This could be to trigger a custom ember action or in the case of uxs-icon-link, navigate to a new route.

The icons are rendered as svgs. A selection of icons from the <a href="https://material.io/icons/">Material Icons</a> framework has been used in this dummy project.

To use your own icons just add the svg files to your public directory and visit the development server at _/ember-svg-jar/index.html_ to preview all icons in the app.

## Display Types

There are two standard styles of icon.

### Regular

<div class="uxs pt">
  {{uxs-icon "alarm_on"}}
</div>

### Large

<div class="uxs pt">
  {{uxs-icon "alarm_add" style="large"}}
</div>

## Usage

Let's look at a basic example. You can play around with some of the arguments in this demo.

[API Docs](/docs/api/components/uxs-icon)

{{docs/uxs-icon/basic-demo}}

## Icon Links

Icon links are available when you need an icon to link to another route. The parameter pattern is the same at ember's built in [link-to component](https://guides.emberjs.com/release/templates/links/).

[API Docs](/docs/api/components/uxs-icon-link)

{{docs/uxs-icon-link/basic-demo}}
