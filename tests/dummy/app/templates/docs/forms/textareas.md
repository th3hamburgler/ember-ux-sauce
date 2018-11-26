# Form Textareas

The form textarea component extends from embers _textarea_ component. As such you can pass any of the standard [textarea attributes](https://guides.emberjs.com/v2.18.0/templates/input-helpers/#toc_text-areas)

## Basic Usage

Let's look at a basic example with two way binding on the value and an action on pressing enter

{{docs/uxs-form-textarea/basic-demo}}

<!-- {{#docs-demo as |demo|}}

  {{#demo.example name="form-textarea"}}
    {{uxs-form-textarea value=value enter=(action "enterPressed" value)}}
  {{/demo.example}}

  {{demo.snippet 'form-textarea.hbs'}}
  {{demo.snippet 'form-textarea-action.js'}}

{{/docs-demo}} -->

<!-- <h2>Further Usage</h2>

This example includes futher attributes to control the input:

{{#docs-demo as |demo|}}

  {{#demo.example name="form-textarea-further"}}
    {{uxs-form-textarea
      value=value
      rows=rows
      cols=cols
      placeholder=placeholder
      disabled=disabled
      maxlength=maxlength
      wrap=wrap
      readonly=readonly
      autofocus=autofocus
      spellcheck=spellcheck
    }}
  {{/demo.example}}

  {{demo.snippet 'form-textarea-further.hbs'}}

{{/docs-demo}}

<table class="docs-args-table">
  <tr>
    <td>value</td>
    <td>{{input placeholder="Value" value=value}}</td>
    <td><em>String</em></td>
  </tr>
  <tr>
    <td>rows</td>
    <td>{{input placeholder="Value" value=rows type="number"}}</td>
    <td><em>String</em></td>
  </tr>
  <tr>
    <td>cols</td>
    <td>{{input placeholder="Value" value=cols type="number"}}</td>
    <td><em>String</em></td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>{{input placeholder="Value" value=placeholder}}</td>
    <td><em>String</em></td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>{{docs-toggle value=disabled}}</td>
    <td><em>Boolean</em></td>
  </tr>
  <tr>
    <td>maxlength</td>
    <td>{{input type="number" value=maxlength}}</td>
    <td><em>Number</em></td>
  </tr>
  <tr>
    <td>wrap</td>
    <td>{{docs-toggle value=wrap}}</td>
    <td><em>Boolean</em></td>
  </tr>
  <tr>
    <td>readonly</td>
    <td>{{docs-toggle value=readonly}}</td>
    <td><em>Boolean</em></td>
  </tr>
  <tr>
    <td>autofocus</td>
    <td>{{docs-toggle value=autofocus}}</td>
    <td><em>Boolean</em></td>
  </tr>
  <tr>
    <td>spellcheck</td>
    <td>{{docs-toggle value=spellcheck}}</td>
    <td><em>Boolean</em></td>
  </tr>
  <tr>
    <td></td>
    <td colspan="2"><em>Possible Values: "text", "password", "number",
    "hidden", "email", "search", "tel", "url"</em></td>
  </tr>
</table>

-->

## Styles Usage

You can customise the look of your textarea with the style attribute.

{{docs/uxs-form-textarea/all-styles}}

{{args-table/align-options}}
{{args-table/form-type-options}}
{{args-table/size-options}}
{{args-table/style-options}}
{{args-table/weight-options}}

<!--
{{#docs-demo as |demo|}}

  {{#demo.example name="form-textarea-styles"}}

    <div class="p">
      {{#each darkStyles as |style|}}

        <div class="mb">
          {{uxs-form-textarea
            value=value
            style=style
            placeholder=(concat (capitalize style) " Style")
          }}
        </div>

      {{/each}}
    </div>
    <div class="bg-dark p">
    {{#each lightStyles as |style|}}

      <div class="mb">
        {{uxs-form-textarea
          value=value
          style=style
          placeholder=(concat (capitalize style) " Style")
        }}
      </div>

    {{/each}}
    </div>

  {{/demo.example}}

  {{demo.snippet "form-textarea-styles.hbs"}}

{{/docs-demo}} -->
