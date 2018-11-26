# Form Date & Time Inputs

The form dat & time input component extends from the <em>FlatPickr</em> addon component. As such you can pass any of it's attributes [attributes](http://ember-flatpickr.shipshape.io/)

## Basic Usage

Let's look at a basic example with a change action called when changing the value.

The value of a datetime input should be one of the following:

-   A single dateObject
-   A single string containing a date formatted accordingly to dateFormat
-   An array of dateObject
-   An array of string containing dates formatted accordingly to dateFormat

The following actions; onChange (required), onClose, onOpen, will receive 3 parameters:

-   An array of dateObjects
-   A string formatted accordingly to dateFormat representing the last selected date
-   The Flatpickr instance

{{docs/uxs-form-date/basic-demo}}

Styles Usage

You can customise the look of your datetime input with the style attribute.

{{docs/uxs-form-date/all-styles}}

{{args-table/align-options}}
{{args-table/form-type-options}}
{{args-table/size-options}}
{{args-table/style-options}}
{{args-table/weight-options}}
