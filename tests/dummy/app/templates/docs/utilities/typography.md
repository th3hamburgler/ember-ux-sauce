# Typographic Utility Classes

The following classes are available to use to apply typographic styles to your designs. Utility classes will always override any component styles. They can be applied to raw html or ember components

```
<div class="type-headline-2">This div has a headline style</div>

{{uxs-text "This text is bold" class="fw-bold">
```

## Font Weights

Utilities for controlling the font weight of an element.

{{uxs-caption ".fw-hairline"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="fw-hairline mb-1"}}

{{uxs-caption ".fw-thin"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="fw-thin mb-1"}}

{{uxs-caption ".fw-light"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="fw-light mb-1"}}

{{uxs-caption ".fw-normal"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="fw-normal mb-1"}}

{{uxs-caption ".fw-medium"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="fw-medium mb-1"}}

{{uxs-caption ".fw-semibold"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="fw-semibold mb-1"}}

{{uxs-caption ".fw-bold"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="fw-bold mb-1"}}

{{uxs-caption ".fw-extrabold"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="fw-extrabold mb-1"}}

{{uxs-caption ".fw-black"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="fw-black mb-1"}}

### Hover Classes

To control the font weight of an element on hover, add the hover: prefix to any existing style and decoration utility. For example, use hover:fw-bold to apply the fw-bold utility on hover.

<div class="uxs w-full p bw hover:fw-bold">Hover over this text</div>

### Focus Classes

To control the font weight of an element on focus, add the focus: prefix to any existing style and decoration utility. For example, use focus:fw-bold to apply the fw-bold utility on focus.

<input class="uxs type-body-1 w-full p bw focus:fw-bold" value="Focus me">

## Text Align

Utilities for controlling the alignment of text.

{{uxs-caption ".ta-left"}}
{{uxs-text "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugit, enim molestiae praesentium eveniet, recusandae et error beatae facilis ex harum consequuntur, quia pariatur non. Doloribus illo, ullam blanditiis ab." class="ta-left mb-1"}}

{{uxs-caption ".ta-center"}}
{{uxs-text "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugit, enim molestiae praesentium eveniet, recusandae et error beatae facilis ex harum consequuntur, quia pariatur non. Doloribus illo, ullam blanditiis ab." class="ta-center mb-1"}}

{{uxs-caption ".ta-right"}}
{{uxs-text "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugit, enim molestiae praesentium eveniet, recusandae et error beatae facilis ex harum consequuntur, quia pariatur non. Doloribus illo, ullam blanditiis ab." class="ta-right mb-1"}}

{{uxs-caption ".ta-justify"}}
{{uxs-text "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugit, enim molestiae praesentium eveniet, recusandae et error beatae facilis ex harum consequuntur, quia pariatur non. Doloribus illo, ullam blanditiis ab." class="ta-justify mb-1"}}


## Text Decoration

Utilities for controlling the decoration of text.

{{uxs-caption ".td-overline"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="td-overline mb-1"}}

{{uxs-caption ".td-underline"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="td-underline mb-1"}}

{{uxs-caption ".td-line-through"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="td-line-through mb-1"}}

{{uxs-caption ".td-none"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="td-none mb-1"}}

## Text transform

Utilities for transforming the case of text. Use the .tt-none to preserve the original casing.

{{uxs-caption ".tt-capitalize"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="tt-capitalize mb-1"}}

{{uxs-caption ".tt-lowercase"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="tt-lowercase mb-1"}}

{{uxs-caption ".tt-none"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="tt-none mb-1"}}

{{uxs-caption ".tt-uppercase"}}
{{uxs-text "The quick brown fox jumped over the lazy dog." class="tt-uppercase mb-1"}}
