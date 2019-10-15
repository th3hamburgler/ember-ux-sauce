# Sass Utilities

UXS comes with a few useful sass functions you can use in your own sass files.

## Strip Unit

_@param_ $pixels<br>
_@return_ $number

Removes any unit from a string and return the number.

```
strip-unit(24px); // 24
```

## REM Size

_@param_ $pixels<br>
_@return_ $rem

This Convert a pixels unit into rems (root em). By default the root font-size is 16px, so the above would return 1.5rem;

```
rem-size(24px); // 1.5rem
```

## RS (Grid REM)

_@param_ $ratio<br>
_@param_ $modifier<br>
_@return_ $rem

Takes a grid number and converts to the equivalent rem size.

You can use the optional modifier in the second param to alter the returned value in pixels. A common use here is to take into account a border size keeping the vertical rhythm in place. The number of pixels is subtracted from the first value.

The default grid size is 8px and can be overridded with the `$baseline` variable.

```
rs(4); // 2rem

rs(4, 1); // 1.9375rem
```

## Shade Light

_@param_ $base-color<br>
_@param_ $step<br>
_@param_ $steps:5<br>
_@return_ $rem

Take a color and lighten it by stepped intervals.

```
shade-light($c-primary, 2);

shade-light($c-accent, 5, 10);
```

## Shade Dark

_@param_ $base-color<br>
_@param_ $step<br>
_@param_ $steps:5<br>
_@return_ $rem

Take a color and lighten it by stepped intervals.

```
shade-dark($c-primary, 2);

shade-dark($c-accent, 5, 10);
```

## Contrast Color

_@param_ $color<br>
_@param_ $dark-color:$c-dark<br>
_@param_ $light-color:$c-light<br>
_@return_ $color

Take any hex color and return either a light or dark contract color depending on which has a better contrast.

You can tweak the threshold of the light/dark with $contrast-threshold

```
contrast-color($c-accent);

contrast-color($c-accent, #111, #EEE);
```
