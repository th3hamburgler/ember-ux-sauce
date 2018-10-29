# Typography

UX Sauce comes with a default typography system to present your design and content as clearly and efficiently as possible.

You can use the base type component _uxs-type_ to present text around your application. The following page will demonstrate some of the arguments. To see a full list check out the [api page](/docs/api/components/uxs-text).

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

{{docs/uxs-text/sizes-demo}}

## Type Weights

The typography system comes with 3 weights; bold, medium and light. These can also be customised in the scss settings, you can also choose different typefaces for each weight.

### SCSS Defaults

    /** Typographic weights **/
    $type-body-family: 'Lato', sans-serif!default;
    $type-body-weight: 400!default;
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
