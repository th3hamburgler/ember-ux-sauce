# Colors

Utilities for controlling colors.

## Background Color

Utilities for controlling an element's background color.

### Background Color Classes

Control the background color of an element using the `.bg-{color}` utilities. This utility will also set the text color of the element to either `$c-light` or `$c-dark` depending on which has the best contrast. If you want to customise the text color to you can combine the `.bg-{color}` & `.c-{color}` utilities.

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.bg-primary</td>
      <td>background-color: $c-primary;</td>
      <td class="uxs">
        <div class="h-2 w-4 bg-primary fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bg-accent</td>
      <td>background-color: $c-accent;</td>
      <td class="uxs">
        <div class="h-2 w-4 bg-accent fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bg-success</td>
      <td>background-color: $c-success;</td>
      <td class="uxs">
        <div class="h-2 w-4 bg-success fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bg-error</td>
      <td>background-color: $c-error;</td>
      <td class="uxs">
        <div class="h-2 w-4 bg-error fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bg-warning</td>
      <td>background-color: $c-warning;</td>
      <td class="uxs">
        <div class="h-2 w-4 bg-warning fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bg-dark</td>
      <td>background-color: $c-dark;</td>
      <td class="uxs">
        <div class="h-2 w-4 bg-dark fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bg-grey</td>
      <td>background-color: $c-grey;</td>
      <td class="uxs">
        <div class="h-2 w-4 bg-grey fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bg-mid</td>
      <td>background-color: $c-mid;</td>
      <td class="uxs">
        <div class="h-2 w-4 bg-mid fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bg-light</td>
      <td>background-color: $c-light;</td>
      <td class="uxs">
        <div class="h-2 w-4 bg-light fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bg-white</td>
      <td>background-color: $c-white;</td>
      <td class="uxs">
        <div class="h-2 w-4 bg-white fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bg-transparent</td>
      <td>background-color: transparent;</td>
      <td class="uxs">
        <div class="h-2 w-4 bg-transparent fw-black ta-center" style="background-image: url('/images/transparent-bg.svg'); fw-black ta-center">Aa</div>
      </td>
    </tr>
  </tbody>
</table>

## Text Color

Utilities for controlling the text color of an element.

### Text Color Classes

Control the text color of an element using the `.c-{color}` utilities.

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.c-primary</td>
      <td>color: $c-primary;</td>
      <td class="uxs">
        <div class="h-2 w-4 c-primary fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.c-accent</td>
      <td>color: $c-accent;</td>
      <td class="uxs">
        <div class="h-2 w-4 c-accent fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.c-success</td>
      <td>color: $c-success;</td>
      <td class="uxs">
        <div class="h-2 w-4 c-success fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.c-error</td>
      <td>color: $c-error;</td>
      <td class="uxs">
        <div class="h-2 w-4 c-error fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.c-warning</td>
      <td>color: $c-warning;</td>
      <td class="uxs">
        <div class="h-2 w-4 c-warning fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.c-dark</td>
      <td>color: $c-dark;</td>
      <td class="uxs">
        <div class="h-2 w-4 c-dark fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.c-grey</td>
      <td>color: $c-grey;</td>
      <td class="uxs">
        <div class="h-2 w-4 c-grey fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.c-mid</td>
      <td>color: $c-mid;</td>
      <td class="uxs">
        <div class="h-2 w-4 bg-dark c-mid fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.c-light</td>
      <td>color: $c-light;</td>
      <td class="uxs">
        <div class="h-2 w-4 bg-dark c-light fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.c-white</td>
      <td>color: $c-white;</td>
      <td class="uxs">
        <div class="h-2 w-4 bg-dark c-white fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.c-transparent</td>
      <td>color: transparent;</td>
      <td class="uxs">
        <div class="h-2 w-4 c-transparent fw-black ta-center" style="background-image: url('/images/transparent-bg.svg'); fw-black ta-center">Aa</div>
      </td>
    </tr>
  </tbody>
</table>

## Border Color

### Border Color Classes

Control the border color of an element using the `.bc-{color}` utilities.

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.bc-primary</td>
      <td>border-color: $c-primary;</td>
      <td class="uxs">
        <div class="h-2 w-4 bc-primary b-1 fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bc-accent</td>
      <td>border-color: $c-accent;</td>
      <td class="uxs">
        <div class="h-2 w-4 bc-accent b-1 fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bc-success</td>
      <td>border-color: $c-success;</td>
      <td class="uxs">
        <div class="h-2 w-4 bc-success b-1 fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bc-error</td>
      <td>border-color: $c-error;</td>
      <td class="uxs">
        <div class="h-2 w-4 bc-error b-1 fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bc-warning</td>
      <td>border-color: $c-warning;</td>
      <td class="uxs">
        <div class="h-2 w-4 bc-warning b-1 fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bc-dark</td>
      <td>border-color: $c-dark;</td>
      <td class="uxs">
        <div class="h-2 w-4 bc-dark b-1 fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bc-grey</td>
      <td>border-color: $c-grey;</td>
      <td class="uxs">
        <div class="h-2 w-4 bc-grey b-1 fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bc-mid</td>
      <td>border-color: $c-mid;</td>
      <td class="uxs">
        <div class="h-2 w-4 bc-mid b-1 fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bc-light</td>
      <td>border-color: $c-light;</td>
      <td class="uxs">
        <div class="h-2 w-4 bc-light b-1 fw-black ta-center">Aa</div>
      </td>
    </tr>
    <tr>
      <td>.bc-white</td>
      <td>border-color: $c-white;</td>
      <td class="uxs">
        <div class="h-2 w-4 bc-white b-1 fw-black ta-center">Aa</div>
      </td>
    </tr>
  </tbody>
</table>

## Opacity

Utilities for controlling the opacity of an element.

### Opacity Classes

<table class="docs-var-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Properties</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.op-100</td>
      <td>opacity: 1;</td>
    </tr>
    <tr>
      <td>.op-80</td>
      <td>opacity: 0.8;</td>
    </tr>
    <tr>
      <td>.op-60</td>
      <td>opacity: 0.6;</td>
    </tr>
    <tr>
      <td>.op-40</td>
      <td>opacity: 0.4;</td>
    </tr>
    <tr>
      <td>.op-20</td>
      <td>opacity: 0.2;</td>
    </tr>
    <tr>
      <td>.op-0</td>
      <td>opacity: 0;</td>
    </tr>
  </tbody>
</table>

### Opacity Examples

{{docs/utilities/element-opacity}}
