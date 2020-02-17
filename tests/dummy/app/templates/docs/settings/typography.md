# Typography

UX Sauce comes with a default typography system to present your design and content as clearly and efficiently as possible.

You can use the base type component _uxs-type_ to present text around your application. The following page will demonstrate some of the arguments. To see a full list check out the [api page](../api/components/uxs-text).

## Type Sizes

The default system provides 6 different sizes, from giant to tiny. Medium is defined as _18px_ and the other sizes are scaled relativly by 1.618 (The golden ratio). You can preview different scales using [Type Scale](https://type-scale.com/).

### SCSS Defaults

The following shows the default sizes we define in the uxs settings. All of these can be overwritten in you own app scss.

    // Base Sizes
    $type-scale: 1.618;
    $type-base: 18px;

    // Our default 6 sizes
    $s-giant: scale($type-base, 3, $type-scale)!default;
    $s-huge: scale($type-base, 2, $type-scale)!default;
    $s-large: scale($type-base, 1, $type-scale)!default;
    $s-medium: $type-base!default;
    $s-small: scale($type-base, -1, $type-scale)!default;
    $s-tiny: scale($type-base, -2, $type-scale)!default;

    // Hash of sizes used thoughout system as modifiers
    $defaultSizes: (
      "giant" : $s-giant,
      "huge"  : $s-huge,
      "large" : $s-large,
      "medium": $s-medium,
      "small" : $s-small,
      "tiny"  : $s-tiny,
    );

### Line Heights

Line hights are set to increments of the baseline size (25px).

The default values are shown below:

    /** The grid height used thoughout the system **/
    $baseline: 25px!default;
    /* Line heights of defined sizes */
    $defaultLineHights: (
      "giant" : $baseline*4,
      "huge"  : $baseline*3,
      "large" : $baseline*2,
      "medium": $baseline*1,
      "small" : $baseline*1,
      "tiny"  : $baseline*1,
    );

{{docs/uxs-text/sizes-demo}}

## Type Weights

The typography system comes with 3 weights; bold, medium and light. These can also be customised in the scss settings, you can also choose different typefaces for each weight.

### SCSS Defaults

    /** Typographic weights **/
    $type-regular-family: 'Lato', sans-serif!default;
    $type-regular-weight: 400!default;
    $type-light-family: 'Lato', sans-serif!default;
    $type-light-weight: 300!default;
    $type-bold-family: 'Lato', sans-serif!default;
    $type-bold-weight: 700!default;

    /** Hash of sizes used thoughout system as modifiers **/
    $defaultWeights: (
      "bold"  : 700,
      "normal": 400,
      "light" : 300,
    );

{{docs/uxs-text/weights-demo}}

## Text Alignment

The _align_ attribute has 4 options.

{{docs/uxs-text/align-demo}}

## Type Styles

Applying a style to the _uxs-type_ component will apply a background color to the text. The color of the text will be either dark or light, depending on the background color you have selected.

{{docs/uxs-text/styles-demo}}

## Type Colors

To define a specific type text color you can use the _color_ argument.

{{docs/uxs-text/colors-demo}}

## SCSS Mixins

When you need to create your own custom css styles or modifiers you can use the following mixins to keep things consistant.

<table class="docs-w-full docs-text-left docs-table-collapse">
  <thead>
    <tr>
      <th class="docs-text-sm docs-font-semibold docs-text-grey-darker docs-p-2 docs-bg-grey-lightest">Mixin</th>
      <th class="docs-text-sm docs-font-semibold docs-text-grey-darker docs-p-2 docs-bg-grey-lightest">Description</th>
    </tr>
  </thead>
  <tbody class="align-baseline">
    <tr>
      <td class="docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap">body-type</td>
      <td class="docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre">Set type and weight to default style</td>
    </tr>
    <tr>
      <td class="docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap">light-body-type</td>
      <td class="docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre">Set type and weight to light style</td>
    </tr>
    <tr>
      <td class="docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap">bold-body-type</td>
      <td class="docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre">Set type and weight to bold style</td>
    </tr>
    <tr>
      <td class="docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap">heading-font-size</td>
      <td class="docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre">Sets the size and height of text for headings.</td>
    </tr>
    <tr>
      <td class="docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap">subheading-font-size</td>
      <td class="docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre">Sets the size and height of text for subheadings.</td>
    </tr>
    <tr>
      <td class="docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap">content-font-size</td>
      <td class="docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre">Sets the size and height of text for content text.</td>
    </tr>
    <tr>
      <td class="docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap">detail-font-size</td>
      <td class="docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre">Sets the size and height of text for detail text.</td>
    </tr>
    <tr>
      <td class="docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap">type-heading</td>
      <td class="docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre">As well as size and height, also sets weight and style for headings.</td>
    </tr>
    <tr>
      <td class="docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap">type-subheading</td>
      <td class="docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre">As well as size and height, also sets weight and style for subheadings.</td>
    </tr>
    <tr>
      <td class="docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap">type-content</td>
      <td class="docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre">As well as size and height, also sets weight and style for content text.</td>
    </tr>
    <tr>
      <td class="docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap">type-detail</td>
      <td class="docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre">As well as size and height, also sets weight and style for detail text.</td>
    </tr>
    <tr>
      <td class="docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap">truncate-text</td>
      <td class="docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre">Truncate text to one line. ($boundary:100%)</td>
    </tr>
    <tr>
      <td class="docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap">link</td>
      <td class="docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre">Style text as a link. ($color:$c-dark, $hover-color:$c-primary)</td>
    </tr>
    <tr>
      <td class="docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap">label</td>
      <td class="docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre">Style text as a label.</td>
    </tr>
  </tbody>
</table>
