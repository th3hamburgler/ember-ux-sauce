# Typography

Common typography components.

## Headings

{{#docs-demo as |demo|}}

  {{#demo.example name="headings.hbs"}}

    {{uxs-heading
      "Heading Text"
      align=align
      style=style
      huge=huge
      giant=giant
    }}

  {{/demo.example}}

  {{demo.snippet "headings.hbs"}}

{{/docs-demo}}

<table class="docs-args-table">
  <tr>
    <td>align</td>
    <td>{{input placeholder="Align Value" value=align}}</td>
    <td><em>String</em></td>
  </tr>
  <tr>
    <td>style</td>
    <td>{{input placeholder="Style Value" value=style}}</td>
    <td><em>String</em></td>
  </tr>
  <tr>
    <td>giant</td>
    <td>{{docs-toggle value=giant}}</td>
    <td><em>Boolean</em></td>
  </tr>
  <tr>
    <td>huge</td>
    <td>{{docs-toggle value=huge}}</td>
    <td><em>Boolean</em></td>
  </tr>
</table>

## Subheadings

{{#docs-demo as |demo|}}

  {{#demo.example name="subheadings.hbs"}}

    {{uxs-subheading
      "Subheading Text"
      align=align
      style=style
    }}

  {{/demo.example}}

  {{demo.snippet "subheadings.hbs"}}

{{/docs-demo}}

## Content Text

{{#docs-demo as |demo|}}

  {{#demo.example name="contents.hbs"}}

    {{#uxs-content
      align=align
      style=style
    }}Lacinia et parturient mus quam cum bibendum ut ut consequat mi at a a viverra sociosqu scelerisque ligula a class. Parturient eu donec ullamcorper vestibulum fermentum dui penatibus ullamcorper mi a nascetur vestibulum a nostra consectetur a pulvinar dignissim integer fermentum laoreet leo condimentum dapibus hac scelerisque. Lacus dis vitae a sapien parturient inceptos sociis etiam a at ac eros mus eu est nam mi curabitur urna malesuada lacus metus malesuada vitae. Neque vestibulum a eros auctor venenatis adipiscing adipiscing parturient ornare nisl gravida adipiscing litora inceptos adipiscing praesent in porta a morbi lectus porttitor mattis at elit.{{/uxs-content}}

  {{/demo.example}}

  {{demo.snippet "contents.hbs"}}

{{/docs-demo}}

## Detail Text

{{#docs-demo as |demo|}}

  {{#demo.example name="details.hbs"}}

    {{#uxs-detail align=align style=style}}Lacinia et parturient mus quam cum bibendum ut ut consequat mi at a a viverra sociosqu scelerisque ligula a class. Parturient eu donec ullamcorper vestibulum fermentum dui penatibus ullamcorper mi a nascetur vestibulum a nostra consectetur a pulvinar dignissim integer fermentum laoreet leo condimentum dapibus hac scelerisque. Lacus dis vitae a sapien parturient inceptos sociis etiam a at ac eros mus eu est nam mi curabitur urna malesuada lacus metus malesuada vitae. Neque vestibulum a eros auctor venenatis adipiscing adipiscing parturient ornare nisl gravida adipiscing litora inceptos adipiscing praesent in porta a morbi lectus porttitor mattis at elit.{{/uxs-detail}}

  {{/demo.example}}

  {{demo.snippet "details.hbs"}}

{{/docs-demo}}
