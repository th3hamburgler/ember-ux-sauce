import Component from '@ember/component';
import layout from '../templates/components/uxs-overline';
import Textable from '../mixins/textable';

/**
  A typographic component to render overline text

  ```hbs
  {{uxs-overline "Lorem ipsum dolar"}}

  {{#uxs-overline}}Lorem ipsum dolar"{{/uxs-overline}}
  ```

  @class UXSHeading
*/
export default Component.extend(Textable, {
  //
  // Properties
  // ---------
  /**
    The BEM base name for this component: "overline-x"

    @property base
    @type     String
    @default  "overline"
    @public
   */
  base: 'uxs-overline',

  layout
}).reopenClass({
  positionalParams: ['text'],
});