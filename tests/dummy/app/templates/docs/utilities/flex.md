# Flex Utility Classes

The following classes are available to use to apply flexbox styles to your designs. Utility classes will always override any component styles. They can be applied to raw html or ember components

## Flex Direction

Utilities for controlling the direction of flex items as well as setting `display:flex;` which is needed for any of the flex css rules.

### Classes

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.fx-row</td>
      <td>
        display:flex;<br>
        flex-direction:row;
      </td>
    </tr>
    <tr>
      <td>.fx-row-reverse</td>
      <td>
        display:flex;<br>
        flex-direction:row-reverse;
      </td>
    </tr>
    <tr>
      <td>.fx-col</td>
      <td>
        display:flex;<br>
        flex-direction:column;
      </td>
    </tr>
    <tr>
      <td>.fx-col-reverse</td>
      <td>
        display:flex;<br>
        flex-direction:column-reverse;
      </td>
    </tr>
  </tbody>
</table>

### Example

{{docs/utilities/flex-direction}}

### Responsive

To apply a flex direction utility only at a specific breakpoint, add a `{screen}:` prefix to the existing class name. For example, adding the class `md:fx-row` to an element would apply the `flex-row` utility at medium screen sizes and above.

## Flex Wrap

Utilities for controlling how flex items wrap.

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.fx-w-no-wrap</td>
      <td>flex-wrap:nowrap;</td>
    </tr>
    <tr>
      <td>.fx-w-wrap</td>
      <td>flex-wrap:wrap;</td>
    </tr>
    <tr>
      <td>.fx-w-wrap-reverse</td>
      <td>flex-wrap:wrap-reverse;</td>
    </tr>
  </tbody>
</table>

### Example

{{docs/utilities/flex-wrap}}

### Responsive

To apply a flex wrap utility only at a specific breakpoint, add a `{screen}:` prefix to the existing class name. For example, adding the class `md:fx-wrap` to an element would apply the `flex-wrap` utility at medium screen sizes and above.

## Align Items

Utilities for controlling how flex items are positioned along a container's cross axis.

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.fx-ai-stretch</td>
      <td>align-items: stretch;</td>
    </tr>
    <tr>
      <td>.fx-ai-start</td>
      <td>align-items: flex-start;</td>
    </tr>
    <tr>
      <td>.fx-ai-center</td>
      <td>align-items: center;</td>
    </tr>
    <tr>
      <td>.fx-ai-end</td>
      <td>align-items: flex-end;</td>
    </tr>
    <tr>
      <td>.fx-ai-baseline</td>
      <td>align-items: baseline;</td>
    </tr>
  </tbody>
</table>

### Example

{{docs/utilities/align-items}}

### Responsive

To apply an align items utility only at a specific breakpoint, add a `{screen}:` prefix to the existing class name. For example, adding the class `md:fx-ai-center` to an element would apply the `align-items` utility at medium screen sizes and above.

## Align Content

Utilities for controlling how lines are positioned in multi-line flex containers.

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.fx-ac-start</td>
      <td>align-content: flex-start;</td>
    </tr>
    <tr>
      <td>.fx-ac-center</td>
      <td>align-content: center;</td>
    </tr>
    <tr>
      <td>.fx-ac-end</td>
      <td>align-content: flex-end;</td>
    </tr>
    <tr>
      <td>.fx-ac-between</td>
      <td>align-content: space-between;</td>
    </tr>
    <tr>
      <td>.fx-ac-around</td>
      <td>align-content: space-around;</td>
    </tr>
  </tbody>
</table>

### Example

{{docs/utilities/align-content}}

### Responsive

To apply an align content utility only at a specific breakpoint, add a `{screen}:` prefix to the existing class name. For example, adding the class `md:fx-ac-center` to an element would apply the `align-content` utility at medium screen sizes and above.

## Align Self

Utilities for controlling how an individual flex item is positioned along its container's cross axis.

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.fx-as-auto</td>
      <td>align-self:auto;</td>
    </tr>
    <tr>
      <td>.fx-as-start</td>
      <td>align-self:start;</td>
    </tr>
    <tr>
      <td>.fx-as-center</td>
      <td>align-self:center;</td>
    </tr>
    <tr>
      <td>.fx-as-end</td>
      <td>align-self:flex-end;</td>
    </tr>
    <tr>
      <td>.fx-as-stretch</td>
      <td>align-self:stretch;</td>
    </tr>
  </tbody>
</table>

### Example

{{docs/utilities/align-self}}

### Responsive

To apply an align self utility only at a specific breakpoint, add a `{screen}:` prefix to the existing class name. For example, adding the class `md:fx-as-center` to an element would apply the `align-self` utility at medium screen sizes and above.

## Justify Content

Utilities for controlling how flex items are positioned along a container's main axis.

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.fx-jc-start</td>
      <td>justify-content: flex-start;</td>
    </tr>
    <tr>
      <td>.fx-jc-center</td>
      <td>justify-content: center;</td>
    </tr>
    <tr>
      <td>.fx-jc-end</td>
      <td>justify-content: flex-end;</td>
    </tr>
    <tr>
      <td>.fx-jc-between</td>
      <td>justify-content: space-between;</td>
    </tr>
    <tr>
      <td>.fx-jc-around</td>
      <td>justify-content: space-around;</td>
    </tr>
  </tbody>
</table>

### Example

{{docs/utilities/justify-content}}

### Responsive

To apply a justify content utility only at a specific breakpoint, add a `{screen}:` prefix to the existing class name. For example, adding the class `md:fx-jc-start` to an element would apply the `justify-content` utility at medium screen sizes and above.

## Flex

Utilities for controlling how flex items both grow and shrink.

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.fx-initial</td>
      <td>flex: 0 1 auto;</td>
    </tr>
    <tr>
      <td>.fx-1</td>
      <td>flex: 1 1 0;</td>
    </tr>
    <tr>
      <td>.fx-auto</td>
      <td>flex: 1 1 auto;</td>
    </tr>
    <tr>
      <td>.fx-none</td>
      <td>flex: none;</td>
    </tr>
  </tbody>
</table>

### Initial

Use `.fx-initial` to allow a flex item to shrink but not grow, taking into account its initial size.

### Flex 1

Use `.fx-1` to allow a flex item to grow and shrink as needed, ignoring its initial size.

### Auto
Use `.fx-auto` to allow a flex item to grow and shrink, taking into account its initial size.

### None

Use `.flex-none` to prevent a flex item from growing or shrinking.

### Responsive

To apply a flex utility only at a specific breakpoint, add a `{screen}:` prefix to the existing class name. For example, adding the class `md:fx-auto` to an element would apply the `flex` utility at medium screen sizes and above.

## Flex Grow

Utilities for controlling how flex items grow.

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.fx-g</td>
      <td>flex-grow: 1;</td>
    </tr>
    <tr>
      <td>.fx-g-none</td>
      <td>flex-grow: 0;</td>
    </tr>
  </tbody>
</table>

### Grow

Use `.fx-g` to allow a flex item to grow to fill any available space.

### Don't Grow

Use `.fx-g-none` to prevent a flex item from growing.

### Responsive

To apply a flex-grow utility only at a specific breakpoint, add a `{screen}:` prefix to the existing class name. For example, adding the class `md:fx-g` to an element would apply the `flex-grow` utility at medium screen sizes and above.

## Flex Shrink

Utilities for controlling how flex items shrink.

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.fx-s</td>
      <td>flex-shrink: 1;</td>
    </tr>
    <tr>
      <td>.fx-s-none</td>
      <td>flex-shrink: 0;</td>
    </tr>
  </tbody>
</table>

### Shrink

Use .flex-shrink to allow a flex item to shrink if needed

### Don't Shrink

Use .flex-shrink to prevent a flex item from shrinking.

### Responsive

To apply a flex-shrink utility only at a specific breakpoint, add a `{screen}:` prefix to the existing class name. For example, adding the class `md:fx-s` to an element would apply the `flex-shrink` utility at medium screen sizes and above.

## Order

Utilities for controlling the order of flex items.

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.fx-o-first</td>
      <td>order:-9999;</td>
    </tr>
    <tr>
      <td>.fx-o-last</td>
      <td>order:9999;</td>
    </tr>
    <tr>
      <td>.fx-o-none</td>
      <td>order:0;</td>
    </tr>
    <tr>
      <td>.fx-o-1</td>
      <td>order:1;</td>
    </tr>
    <tr>
      <td>.fx-o-2</td>
      <td>order:2;</td>
    </tr>
    <tr>
      <td>.fx-o-3</td>
      <td>order:3;</td>
    </tr>
    <tr>
      <td>.fx-o-4</td>
      <td>order:4;</td>
    </tr>
    <tr>
      <td>.fx-o-5</td>
      <td>order:5;</td>
    </tr>
    <tr>
      <td>.fx-o-6</td>
      <td>order:6;</td>
    </tr>
    <tr>
      <td>.fx-o-7</td>
      <td>order:7;</td>
    </tr>
    <tr>
      <td>.fx-o-8</td>
      <td>order:8;</td>
    </tr>
    <tr>
      <td>.fx-o-9</td>
      <td>order:9;</td>
    </tr>
  </tbody>
</table>

### Usage

Use .fx-o-{order} to render flex items in a different order than they appear in the DOM.

### Responsive

To apply a flex order utility only at a specific breakpoint, add a `{screen}:` prefix to the existing class name. For example, adding the class `md:fx-o-7` to an element would apply the `order` utility at medium screen sizes and above.
