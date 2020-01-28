# Form

{{#uxs-form as |form|}}

   <!-- Standard Control inc date / dropdown -->
  {{form.control
    type="text"
    name="email"
    label="Email"
    tip="Please enter your email address"
  }}

   <!-- Yield Control inc date / dropdown -->
  {{#form.control
    type="text"
    name="email"
  as |control|
  }}
    {{control.input}}
  {{/form.control}}

  <!-- Prefixes/Suffix -->
  {{form.control
    type="text"
    name="email"
    label="Email"
    tip="Please enter your gmail address"
    suffixText="@wearesauce.io"
  }}

  {{#form.control
    type="text"
    name="email"
  as |control|
  }}
    {{control.input prefixIcon="face"}}
  {{/form.control}}


{{/uxs-form}}


<!-- ## Model bound form

This following example shows a form bound to an ember model demonstrating a variety of basic controls. -->

<!-- {{docs/uxs-form/model-bound-form}} -->
