# Typography

Common typography components.

## Text

A basic component to render text with. It defaults to body text, but by using the arguments it can be customized.

{{#docs-demo as |demo|}}

  {{#demo.example name="text.hbs"}}

    {{uxs-text
      text
      align=textAlign
      size=textSize
      style=textStyle
      weight=textWeight
    }}

  {{/demo.example}}

  {{demo.snippet "text.hbs"}}

  <div class="p-4 bg-grey-lightest relative">

    <form class="w-full max-w-xs">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4">
             Text
          </label>
        </div>
        <div class="md:w-2/3">
          {{input
            value=text
            placeholder="Enter text value"
            class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker"
          }}
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4">
            Align
          </label>
        </div>
        <div class="md:w-2/3">
          {{input
            value=textAlign
            placeholder="Enter align value"
            list="alignment"
            class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker"
          }}
          <datalist id="alignment">
            <option>left</option>
            <option>center</option>
            <option>right</option>
            <option>justified</option>
          </datalist>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4">
            Size
          </label>
        </div>
        <div class="md:w-2/3">
          {{input
            value=textSize
            placeholder="Enter size value"
            list="sizes"
            class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker"
          }}
          <datalist id="sizes">
            <option>tiny</option>
            <option>small</option>
            <option>normal</option>
            <option>large</option>
            <option>huge</option>
            <option>giant</option>
          </datalist>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4">
            Style
          </label>
        </div>
        <div class="md:w-2/3">
          {{input
            value=textStyle
            placeholder="Enter style value"
            list="styles"
            class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker"
          }}
          <datalist id="styles">
            <option>dark</option>
            <option>grey</option>
            <option>mid</option>
            <option>light</option>
            <option>white</option>
            <option>primary</option>
            <option>accent</option>
            <option>success</option>
            <option>warning</option>
            <option>error</option>
          </datalist>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4">
            Weight
          </label>
        </div>
        <div class="md:w-2/3">
          {{input
            value=textWeight
            placeholder="Enter weight value"
            list="weights"
            class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker"
          }}
          <datalist id="weights">
            <option>light</option>
            <option>normal</option>
            <option>bold</option>
          </datalist>
        </div>
      </div>
    </form>

  </div>

{{/docs-demo}}

## Headings

{{#docs-demo as |demo|}}

  {{#demo.example name="headings.hbs"}}

    {{uxs-heading
      heading
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
      subheading
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
