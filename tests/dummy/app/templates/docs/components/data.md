# Data

Datalist are used to display record details, think of them as readonly form controls.

## Display Types

This component has a number of layouts, defined below. Use the _display_ argument to the uxs-data component to configure.

### List

Label, value & tips appear vertically stacked.

{{svg-jar "data-list"}}

### Inline

Label & value are stacked horizontally with the tip underneath.

{{svg-jar "data-inline"}}

### Table

Label & value are stacked horizontally, the value is right aligned and the tip underneath.

{{svg-jar "data-table"}}

### Cell

Label & value are stacked horizontally, the value is left aligned and lined up uniform between items. Tips are underneath.

{{svg-jar "data-cell"}}

## Examples

### Simple Usage

The following example renders a simple data component with three items. Each item's content is defined by _positionalParams_ in the following order (all are optional):

-   label
-   value
-   tip

{{docs/uxs-data/simple}}

### Contextual Usage

The next example renders the same data component using contextual components for item items child elements; label, value & tip.

In the first two items the child elements first _positionalParam_ defines the text. The third we yield out content via the block syntax.

The contextual approach gives you more control over the data components children.

{{docs/uxs-data/contextual}}

### Data Groups

This approach we use groups to render multiple values like an html definition list.

{{docs/uxs-data/groups}}

### Empty Values

Data items will by default render a "n/a" value if you pass in an empty value e.g. "". You can customise the empty string by passing the _emptyString_ attribute to _uxs-data_, _/item_ or _value_.

{{docs/uxs-data/empty}}

## Accessibility

The data component includes the following accessibility features.

The _uxs-data_ component has the _role="list"_ attribute. Child items have the _role="listitem"_ attribute.

For good accessibility make sure you add a label attribute to your _uxs-data/label_ usage. If you are passing label and value straight into _uxs-data/item_ the value will be set automatially. Otherwise you can do the following

  {{#uxs-data as |data|}}
    {{#data.item}}
      {{item.label "My Label"}}
      {{item.value "My Value" label="My Label"}}
    {{/data.item}}
  {{/uxs-data}}

## API

To see a full list of arguments for all the data components check out the api pages:

-   [uxs-data](../api/components/uxs-data)
-   [uxs-data/item](../api/components/uxs-data/item)
-   [uxs-data/label](../api/components/uxs-data/label)
-   [uxs-data/value](../api/components/uxs-data/value)
-   [uxs-data/tip](../api/components/uxs-data/tip)
-   [uxs-data/group](../api/components/uxs-data/group)
