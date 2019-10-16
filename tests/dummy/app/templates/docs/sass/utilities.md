# Utility Classes

## Spacing Scale

The following spacing scale defines the modifiers and scale of spacing helper classess. The key is the modifer and value is the scale.

```
$spacing-scale: (
  "0" : 0,
  "½" : 0.5,
  "1" : 1,
  "1½": 1.5,
  "2" : 2,
  "3" : 3,
  "4" : 4,
  "5" : 5,
  "6" : 6,
  "8" : 8,
  "12": 12,
  "16": 16,
);
```

## Customising Spacing Units

By default the spacing scale is shared by padding, margin, width & height. _$defaultSpacing_ defines the $baseline ratio to scale, the _$spacing_ has then sets the ratio at the different media query breakpoints.

By default spacing is **12.5px** on mobile and **25px** on tablets and larger.

```
$defaultSpacing: 0.5;

$spacing: (
  "tablet": 1,
);
```

<table class="docs-table-auto docs-w-full">
  <thead>
    <tr>
      <th class="lh-1 pr-1 ta-l">Name</th>
      <th class="lh-1 pr-1 ta-l">Pixels</th>
      <th class="lh-1 pr-1 ta-l">Size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="lh-1 pr-½">0</td>
      <td class="lh-1 pr-½">0px</td>
      <td class="lh-1 pr-½">
        <div class="h-1 w-0 bg-p"></div>
      </td>
    </tr>
    <tr>
      <td class="lh-1 pr-½">½</td>
      <td class="lh-1 pr-½">12.5px</td>
      <td class="lh-1 pr-½">
        <div class="h-1 w-½ bg-p"></div>
      </td>
    </tr>
    <tr>
      <td class="lh-1 pr-½">1</td>
      <td class="lh-1 pr-½">25px</td>
      <td class="lh-1 pr-½">
        <div class="h-1 w-1 bg-p"></div>
      </td>
    </tr>
    <tr>
      <td class="lh-1 pr-1½">1½</td>
      <td class="lh-1 pr-1½">37.5px</td>
      <td class="lh-1 pr-1½">
        <div class="h-1 w-1½ bg-p"></div>
      </td>
    </tr>
    <tr>
      <td class="lh-1 pr-½">2</td>
      <td class="lh-1 pr-½">50px</td>
      <td class="lh-1 pr-½">
        <div class="h-1 w-2 bg-p"></div>
      </td>
    </tr>
    <tr>
      <td class="lh-1 pr-½">3</td>
      <td class="lh-1 pr-½">75px</td>
      <td class="lh-1 pr-½">
        <div class="h-1 w-3 bg-p"></div>
      </td>
    </tr>
    <tr>
      <td class="lh-1 pr-½">4</td>
      <td class="lh-1 pr-½">100px</td>
      <td class="lh-1 pr-½">
        <div class="h-1 w-4 bg-p"></div>
      </td>
    </tr>
    <tr>
      <td class="lh-1 pr-½">5</td>
      <td class="lh-1 pr-½">125px</td>
      <td class="lh-1 pr-½">
        <div class="h-1 w-5 bg-p"></div>
      </td>
    </tr>
    <tr>
      <td class="lh-1 pr-½">6</td>
      <td class="lh-1 pr-½">150px</td>
      <td class="lh-1 pr-½">
        <div class="h-1 w-6 bg-p"></div>
      </td>
    </tr>
    <tr>
      <td class="lh-1 pr-½">8</td>
      <td class="lh-1 pr-½">200px</td>
      <td class="lh-1 pr-½">
        <div class="h-1 w-8 bg-p"></div>
      </td>
    </tr>
    <tr>
      <td class="lh-1 pr-½">12</td>
      <td class="lh-1 pr-½">300px</td>
      <td class="lh-1 pr-½">
        <div class="h-1 w-12 bg-p"></div>
      </td>
    </tr>
    <tr>
      <td class="lh-1 pr-½">16</td>
      <td class="lh-1 pr-½">400px</td>
      <td class="lh-1 pr-½">
        <div class="h-1 w-16 bg-p"></div>
      </td>
    </tr>
  </tbody>
</table>

## Padding

### .p-{scale}

Apply padding to all sides

```
<div class="p-0 ..."></div>
<div class="p-½ ..."></div>
<div class="p-1 ..."></div>
<div class="p-1½ ..."></div>
<div class="p-2 ..."></div>
<div class="p-3 ..."></div>
// etc...
```

### .ph-{scale}

Apply padding to left and right

```
<div class="ph-0 ..."></div>
<div class="ph-½ ..."></div>
<div class="ph-1 ..."></div>
<div class="ph-1½ ..."></div>
<div class="ph-2 ..."></div>
<div class="ph-3 ..."></div>
// etc...
```

### .pv-{scale}

Apply padding to top and bottom

```
<div class="pv-0 ..."></div>
<div class="pv-½ ..."></div>
<div class="pv-1 ..."></div>
<div class="pv-1½ ..."></div>
<div class="pv-2 ..."></div>
<div class="pv-3 ..."></div>
// etc...
```

### .pt-{scale}, .pr-{scale}, .pb-{scale}, .pl-{scale}

Apply padding to an individual side: top, right, bottom & left

```
<div class="pt-0 ..."></div>
<div class="pr-½ ..."></div>
<div class="pb-1 ..."></div>
<div class="pl-1½ ..."></div>
<div class="pt-2 ..."></div>
<div class="pr-3 ..."></div>
// etc...
```

### Customising Padding Utilities

```
$defaultPadding: $defaultSpacing;

$padding: $spacing;
```

## Margin

### .m-{scale}

Apply margin to all sides

```
<div class="m-0 ..."></div>
<div class="m-½ ..."></div>
<div class="m-1 ..."></div>
<div class="m-1½ ..."></div>
<div class="m-2 ..."></div>
<div class="m-3 ..."></div>
// etc...
```

### .mh-{scale}

Apply margin to left and right

```
<div class="mh-0 ..."></div>
<div class="mh-½ ..."></div>
<div class="mh-1 ..."></div>
<div class="mh-1½ ..."></div>
<div class="mh-2 ..."></div>
<div class="mh-3 ..."></div>
// etc...
```

### .mv-{scale}

Apply margin to top and bottom

```
<div class="mv-0 ..."></div>
<div class="mv-½ ..."></div>
<div class="mv-1 ..."></div>
<div class="mv-1½ ..."></div>
<div class="mv-2 ..."></div>
<div class="mv-3 ..."></div>
// etc...
```

### .mt-{scale}, .mr-{scale}, .mb-{scale}, .ml-{scale}

Apply margin to an individual side: top, right, bottom & left

```
<div class="mt-0 ..."></div>
<div class="mr-½ ..."></div>
<div class="mb-1 ..."></div>
<div class="ml-1½ ..."></div>
<div class="mt-2 ..."></div>
<div class="mr-3 ..."></div>
// etc...
```

### Customising Margin Utilities

```
$defaultMargin: $defaultSpacing;

$margin: $spacing;
```

## Width

### .w-{scale}

Utility for setting the width of an element

```
<div class="w-0 ..."></div>
<div class="w-½ ..."></div>
<div class="w-1 ..."></div>
<div class="w-1½ ..."></div>
<div class="w-2 ..."></div>
<div class="w-3 ..."></div>
// etc...
```

### .w-a

Use .w-a to let the browser calculate and select the width for the element.

```
.w-a {
  width: auto;
}
```

### Customising Width Utilities

```
$defaultPadding: $defaultSpacing;

$width: $spacing;
```

## Height

### .h-{scale}

Utility for setting the height of an element

```
<div class="h-0 ..."></div>
<div class="h-½ ..."></div>
<div class="h-1 ..."></div>
<div class="h-1½ ..."></div>
<div class="h-2 ..."></div>
<div class="h-3 ..."></div>
// etc...
```

### .h-a

Use .h-a to let the browser calculate and select the height for the element.

```
.h-a {
  height: auto;
}
```

### Customising Height Utilities

```
$defaultHeight: $defaultSpacing;

$height: $spacing;
```
