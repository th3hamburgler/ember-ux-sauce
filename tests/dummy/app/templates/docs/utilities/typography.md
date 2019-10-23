# Typographic Utility Classes

The following classes are available to use to apply typographic styles to your designs. Utility classes will always override any component styles. They can be applied to raw html or ember components

## Typography

Utilities for setting the default typographic styles of text.

### Typographic Classes

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.t-headline-1</td>
      <td>
        font: 300 96px/96px sans-serif;<br>
        letter-spacing: -1.5px;<br>
        text-transform: none;
      </td>
    </tr>
    <tr>
      <td>.t-headline-2</td>
      <td>
        font: 300 60px/64px sans-serif;<br>
        letter-spacing: -0.5px;<br>
        text-transform: none;
      </td>
    </tr>
    <tr>
      <td>.t-headline-3</td>
      <td>
        font: 400 48px/56px sans-serif;<br>
        letter-spacing: 0;<br>
        text-transform: none;
      </td>
    </tr>
    <tr>
      <td>.t-headline-4</td>
      <td>
        font: 400 34px/40px sans-serif;<br>
        letter-spacing: 0.25px;<br>
        text-transform: none;
      </td>
    </tr>
    <tr>
      <td>.t-headline-5</td>
      <td>
        font: 400 24px/32px sans-serif;<br>
        letter-spacing: 0px;<br>
        text-transform: none;
      </td>
    </tr>
    <tr>
      <td>.t-headline-6</td>
      <td>
        font: 500 20px/24px sans-serif;<br>
        letter-spacing: 0.15px;<br>
        text-transform: none;
      </td>
    </tr>
    <tr>
      <td>.t-subtitle-1</td>
      <td>
        font: 400 16px/24px sans-serif;<br>
        letter-spacing: 0.15px;<br>
        text-transform: none;
      </td>
    </tr>
    <tr>
      <td>.t-subtitle-2</td>
      <td>
        font: 500 14px/24px sans-serif;<br>
        letter-spacing: 0.1px;<br>
        text-transform: none;
      </td>
    </tr>
    <tr>
      <td>.t-body-1</td>
      <td>
        font: 400 16px/24px sans-serif;<br>
        letter-spacing: 0.5px;<br>
        text-transform: none;
      </td>
    </tr>
    <tr>
      <td>.t-body-2</td>
      <td>
        font: 400 14px/24px sans-serif;<br>
        letter-spacing: 0.25px;<br>
        text-transform: none;
      </td>
    </tr>
    <tr>
      <td>.t-button</td>
      <td>
        font: 500 14px/24px sans-serif;<br>
        letter-spacing: 1.25px;<br>
        text-transform: uppercase;
      </td>
    </tr>
    <tr>
      <td>.t-caption</td>
      <td>
        font: 500 12px/16px sans-serif;<br>
        letter-spacing: 0.4px;<br>
        text-transform: none;
      </td>
    </tr>
    <tr>
      <td>.t-overline</td>
      <td>
        font: 500 10px/16px sans-serif;<br>
        letter-spacing: 1.5px;<br>
        text-transform: uppercase;
      </td>
    </tr>
  </tbody>
</table>

## Font Weight

Control the font weight of an element using the `.fw-{weight}` utilities.

### Font Weight Classes

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.fw-hairline</td>
      <td>font-weight: 100;</td>
    </tr>
    <tr>
      <td>.fw-thin</td>
      <td>font-weight: 200;</td>
    </tr>
    <tr>
      <td>.fw-light</td>
      <td>font-weight: 300;</td>
    </tr>
    <tr>
      <td>.fw-normal</td>
      <td>font-weight: 400;</td>
    </tr>
    <tr>
      <td>.fw-medium</td>
      <td>font-weight: 500;</td>
    </tr>
    <tr>
      <td>.fw-semibold</td>
      <td>font-weight: 600;</td>
    </tr>
    <tr>
      <td>.fw-bold</td>
      <td>font-weight: 700;</td>
    </tr>
    <tr>
      <td>.fw-extrabold</td>
      <td>font-weight: 800;</td>
    </tr>
    <tr>
      <td>.fw-black</td>
      <td>font-weight: 900;</td>
    </tr>
  </tbody>
</table>

### Responsive Font Weight

To control the `font-weight` of an element at a specific breakpoint, add a `{screen}:` prefix to any existing `font weight` utility. For example, use `md:fw-bold` to apply the `fw-bold` utility at only medium screen sizes and above.

### Font Weight Pseudo Classes

To control the font weight of an element on hover or focus, add the `hover:` or `focus:` prefix to any existing style and decoration utility. For example, use `hover:fw-bold` to apply the `fw-bold` utility on hover and `focus:fw-light` to apply the `fw-light` utility on focus.

## Text Align

### Text Align Classes

Utilities for controlling the alignment of text.

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.ta-center</td>
      <td>text-align: center;</td>
    </tr>
    <tr>
      <td>.ta-left</td>
      <td>text-align: left;</td>
    </tr>
    <tr>
      <td>.ta-justify</td>
      <td>text-align: justify;</td>
    </tr>
    <tr>
      <td>.ta-right</td>
      <td>text-align: right;</td>
    </tr>
  </tbody>
</table>

### Responsive Text Align

To control the `text-align` of an element at a specific breakpoint, add a `{screen}:` prefix to any existing text align utility. For example, use `md:ta-right` to apply the `ta-right` utility at only medium screen sizes and above.

## Text Decoration

### Text Decoration Classes

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.td-overline</td>
      <td>text-decoration: overline;</td>
    </tr>
    <tr>
      <td>.td-underline</td>
      <td>text-decoration: underline;</td>
    </tr>
    <tr>
      <td>.td-line-through</td>
      <td>text-decoration: line-through;</td>
    </tr>
    <tr>
      <td>.td-none</td>
      <td>text-decoration: none;</td>
    </tr>
  </tbody>
</table>

### Responsive Text Direction

To control the `text-direction` of an element at a specific breakpoint, add a `{screen}:` prefix to any existing text direction utility. For example, use `md:td-line-through` to apply the `td-line-through` utility at only medium screen sizes and above.

## Text Transform

Utilities for controlling the transformation of text.

### Text Transform Classes

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.tt-capitalize</td>
      <td>text-decoration: capitalize;</td>
    </tr>
    <tr>
      <td>.tt-lowercase</td>
      <td>text-decoration: lowercase;</td>
    </tr>
    <tr>
      <td>.tt-none</td>
      <td>text-decoration: none;</td>
    </tr>
    <tr>
      <td>.tt-uppercase</td>
      <td>text-decoration: uppercase;</td>
    </tr>
  </tbody>
</table>

### Responsive Text Transform

To control the `text-transform` of an element at a specific breakpoint, add a `{screen}:` prefix to any existing text transform utility. For example, use `md:tt-uppercase` to apply the `ta-uppercase` utility at only medium screen sizes and above.


## TODO

- font-family
- font-size
- font-style
- letter-spacing
- line-height
- placeholder color
