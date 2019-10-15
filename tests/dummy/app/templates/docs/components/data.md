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

## SASS Variables

To customise the data components style you can override the following sass variables.

<table class="docs-table-auto docs-w-full docs-mb-4 docs-mt-4">
<thead>
  <tr>
    <th class="docs-text-left docs-pb-2">Name</th>
    <th class="docs-text-left docs-pb-2">Default</th>
    <th class="docs-text-left docs-pb-2">Unit</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-item-v-padding</td>
    <td>1</td>
    <td>baselines</td>
  </tr>
  <tr>
    <td colspan="3" class="docs-text-grey-dark docs-italic docs-pb-2">Sets the vertical padding of the item</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-item-h-padding</td>
    <td>1</td>
    <td>baselines</td>
  </tr>
  <tr>
    <td colspan="3" class="docs-text-grey-dark docs-italic docs-pb-2">Sets the horizontal padding between items children. e.g. the gep between and inline label and value</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-item-border-size</td>
    <td>1</td>
    <td>pixels</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-item-border-style</td>
    <td>solid</td>
    <td>string</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-item-border-color</td>
    <td>$c-light</td>
    <td>color</td>
  </tr>
  <tr>
    <td colspan="3" class="docs-text-grey-dark docs-italic docs-pb-2">Style the bottom border of each item</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-item-inset</td>
    <td>2</td>
    <td>baselines</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-item-inset-tablet</td>
    <td>3</td>
    <td>baselines</td>
  </tr>
  <tr>
    <td colspan="3" class="docs-text-grey-dark docs-italic docs-pb-2">Horizontal padding of an item when "inset"</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-item-h-margin</td>
    <td>2</td>
    <td>baselines</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-item-h-margin-tablet</td>
    <td>3</td>
    <td>baselines</td>
  </tr>
  <tr>
    <td colspan="3" class="docs-text-grey-dark docs-italic docs-pb-2">Horizontal margin of an item when "padded"</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-default-lh</td>
    <td>3</td>
    <td>baselines</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-label-lh</td>
    <td>$data-default-lh</td>
    <td>baselines</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-value-lh</td>
    <td>$data-default-lh</td>
    <td>baselines</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-tip-lh</td>
    <td>$data-default-lh</td>
    <td>baselines</td>
  </tr>
  <tr>
    <td colspan="3" class="docs-text-grey-dark docs-italic docs-pb-2">Set the line height of the data's text elements</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-default-fs</td>
    <td>$s-medium</td>
    <td>rem</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-label-fs</td>
    <td>$data-default-fs</td>
    <td>rem</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-value-fs</td>
    <td>$data-default-fs</td>
    <td>rem</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-tip-fs</td>
    <td>$s-small</td>
    <td>rem</td>
  </tr>
  <tr>
    <td colspan="3" class="docs-text-grey-dark docs-italic docs-pb-2">Set the font-size of the data's text elements</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-default-fw</td>
    <td>400</td>
    <td>weight</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-label-fw</td>
    <td>700</td>
    <td>weight</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-value-fw</td>
    <td>100</td>
    <td>weight</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-tip-fw</td>
    <td>100</td>
    <td>weight</td>
  </tr>
  <tr>
    <td colspan="3" class="docs-text-grey-dark docs-italic docs-pb-2">Set the font-weight of the data's text elements</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-default-tt</td>
    <td>none</td>
    <td>weight</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-label-tt</td>
    <td>uppercase</td>
    <td>text-transform</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-value-tt</td>
    <td>$data-default-tt</td>
    <td>text-transform</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-tip-tt</td>
    <td>$data-default-tt</td>
    <td>text-transform</td>
  </tr>
  <tr>
    <td colspan="3" class="docs-text-grey-dark docs-italic docs-pb-2">Set the text-transform style of the data's text elements</td>
  </tr>
  <tr>
    <td class="docs-text-grey-darker docs-font-bold">$data-value-indent</td>
    <td>2</td>
    <td>baseline</td>
  </tr>
  <tr>
    <td colspan="3" class="docs-text-grey-dark docs-italic docs-pb-2">Set the left indentation of the data list value elements</td>
  </tr>
</tbody>
</table>

## API

To see a full list of arguments for all the data components check out the api pages:

-   [uxs-data](../api/components/uxs-data)
-   [uxs-data/item](../api/components/uxs-data/item)
-   [uxs-data/label](../api/components/uxs-data/label)
-   [uxs-data/value](../api/components/uxs-data/value)
-   [uxs-data/tip](../api/components/uxs-data/tip)
-   [uxs-data/group](../api/components/uxs-data/group)
