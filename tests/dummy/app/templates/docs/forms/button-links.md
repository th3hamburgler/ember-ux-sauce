# Button Links

The button-link component is like the button component but extends the Ember [link-to component](https://guides.emberjs.com/release/templates/links/) so you can link to other routes

## Usage

Let's look at a basic example. This button links to the quickstart route. You can play around with some of the arguments in this demo. To see a full list check out the [api page](/docs/api/components/uxs-button-link)

{{docs/uxs-button-link/basic-demo}}

## Inline Buttons

By default link-buttons will be displayed as block items. To set them as inline pass true to the _inline_ argument.

<div class="docs-flex docs-items-center docs-bg-blue docs-text-white docs-text-sm docs-font-bold docs-px-4 docs-py-3" role="alert">
  <svg class="docs-fill-current docs-w-4 docs-h-4 docs-mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
  <span>Because button links extend from the link-to component their active (selected) state will be detected automatically.</span>
</div>

{{docs/uxs-button-link/inline-demo}}

## Stock Style Examples

Here's an example of the button in all it's stock styles:

{{docs/uxs-button-link/all-styles}}

## Stock Size Examples

Here's an example of the button in all it's stock sizes:

{{docs/uxs-button-link/all-sizes}}
