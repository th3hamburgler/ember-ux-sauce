# SASS Variables

Here are the common sass variables used in uxs, along with their default values.

You can customise the look of your own apps with them.

Each component has it's own subset of variables that can also be customised.

## 1. The Grid

```
// The grid baseline dimension used thoughout the app
$baseline: 25px;

// The default browser font-size used to convert units to rem
$root-fs: 16px;
```

## 2. Media Queries

```
$breakpoints: (
  "phone"       : 480px,
  "tablet"      : 768px,
  "tablet-wide" : 1024px,
  "desktop"     : 1248px,
  "desktop-wide": 1440px
);
```

## 3. Animations

```
// The default time for css transition animations
$transition-duration: 0.2s;

// The default timing function for css transition animations
$transition-timing-function: cubic-bezier(.4,0,.2,1);
```

## 4. Typography

### Typefaces & Weights

The default styles use one typeface throughout, but it is possible to customise the typeface and weights for text throughout the system.

```
// The default type face
$font-family: 'Lato';

// The default typeface body text
$type-body-family: $font-family, sans-serif;

// The default weight for body text
$type-body-weight: 400;

// The default typeface light text
$type-light-family: $font-family, sans-serif;

// The default weight for light text
$type-light-weight: 300;

// The default typeface bold text
$type-bold-family: $font-family, sans-serif;

// The default weight for bold text
$type-bold-weight: 700;

// Hash of sizes used thoughout system as modifiers in our mixins
$defaultWeights: (
  "bold"  : 700,
  "normal": 400,
  "thin"  : 300,
);
```


### Font Sizes & Line Hights

The following font sizes are set on a [modular scale](https://www.modularscale.com/). This scale can be tweaked or you can assign constant values to the individual font size variables.

We also set some default max-width lengths for our body font-sizes. Anything from 45 to 75 characters is regarded as a satisfactory length of line for a single-column page The 66-character line (counting both letters and spaces) is ideal [http://mikeyanderson.com/optimal_characters_per_line]


```
// Our base font size to use with the scale
$type-base: 18px;
// A scale to use on our type sizes
$type-scale: 1.618;

// Max with for content text
$max-width-medium: rs(20);

// Max with for detail text
$max-width-small: rs(13);

// The default font-sizes
$s-giant: scale($type-base, 3, $type-scale);
$s-huge: scale($type-base, 2, $type-scale);
$s-large: scale($type-base, 1, $type-scale);
$s-medium: $type-base;
$s-small: scale($type-base, -1, $type-scale);
$s-tiny: scale($type-base, -2, $type-scale);

// Sizes used as style modifiers in our mixins
$defaultSizes: (
  "giant" : $s-giant,
  "huge"  : $s-huge,
  "large" : $s-large,
  "medium": $s-medium,
  "small" : $s-small,
  "tiny"  : $s-tiny,
);

// The default line-heights - adhere to the grid!
$lh-giant: rs(4);
$lh-huge: rs(3);
$lh-large: rs(2);
$lh-medium: rs(1);
$lh-small: rs(1);
$lh-tiny: rs(1);

// Line heights used as style modifiers in our mixins
$defaultLineHights: (
  "giant" : $lh-giant,
  "huge"  : $lh-huge,
  "large" : $lh-large,
  "medium": $lh-medium,
  "small" : $lh-small,
  "tiny"  : $lh-tiny,
);

```

## 5. Color Pallet

Futher info on the color pallet is available at the [settings > colors](/docs/settings/colors) page.

```
// Set to true for high contrast theme (not yet in production)
$high-contrast: false;

// A colors lightness that when exceed will require a dark contrast
$contrast-threshold: 60;

// Base Colors
$c-dark: #141414!default;
$c-grey: shade-light($c-dark, 5, 15)!default;
$c-mid: shade-light($c-dark, 10, 15)!default;
$c-light: shade-light($c-dark, 14, 15)!default;
$c-white: rgb(255,255,255)!default;

// Theme Colors
$c-primary: #1C77C3;
$c-accent: #8F3985;
$c-success: #5FAD56;
$c-error: #DB3A34;
$c-warning: #ECA400;

// Colors used as style modifiers in our mixins
$defaultColors: (
  "primary": $c-primary,
  "accent" : $c-accent,
  "success": $c-success,
  "error"  : $c-error,
  "warning": $c-warning,
  "dark"   : $c-dark,
  "grey"   : $c-grey,
  "mid"    : $c-mid,
  "light"  : $c-light,
  "white"  : $c-white,
)
```

The lightness a color should exceed to require a dark contrast color
