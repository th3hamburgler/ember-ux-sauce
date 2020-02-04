# Typography

Common typography styles & components.

## The Type System

The type scale is based on [Google's Material Design](https://material.io/design/typography/the-type-system.html#applying-the-type-scale) includes a range of contrasting styles that support the needs of your product and its content.

The type scale is a combination of 13 styles that are supported by the type system. It contains reusable categories of text, each with an intended application and meaning.

## Components

### Headlines

In the type scale, headlines span from a range of 1 through 6. Headlines are the largest text on the screen, reserved for short, important text or numerals.

[Api Docs](api/components/uxs-headline).

{{docs/typography/headline-type}}

### Subtitles

Subtitles are smaller than headlines. They are typically reserved for medium-emphasis text that is shorter in length.

[Api Docs](api/components/uxs-subtitle).

{{docs/typography/subtitle-type}}

### Body

Body text comes in ranges 1-2, and it’s typically used for long-form writing as it works well for small text sizes.

[Api Docs](api/components/uxs-body).

{{docs/typography/body-type}}

### Caption and overline

Caption and overline text (text with a line above it) are the smallest font sizes. They are used sparingly to annotate imagery or to introduce a headline.

[Api Docs Caption](api/components/uxs-caption) | [Api Docs Overline](api/components/uxs-overline).

{{docs/typography/caption-overline-type}}

### Button

Button text is a call to action used different types of buttons (such as text, outlined and contained buttons) and in tabs, dialogs, and cards. Button text is typically an all caps.

There is no button type component in uxs as it's used for the functional button component but you can use the uxs-text component to render the button type.

[Api Docs](api/components/uxs-text).

{{docs/typography/button-type}}

### Typography

The typography component is a tagless component that yields out all the above type components. This is a convenience component for you to use when working with a lot of structured text.

[Api Docs](api/components/uxs-typography).

{{docs/typography/typography-type}}
