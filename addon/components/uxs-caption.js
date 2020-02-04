import Component from '@ember/component';
import layout from '../templates/components/uxs-caption';
import Textable from '../mixins/textable';

/**
  A typographic component to render caption text

  ```hbs
  {{uxs-caption "Lorem ipsum dolar"}}

  {{#uxs-caption}}Lorem ipsum dolar"{{/uxs-caption}}
  ```

  @class UXSHeading
*/
export default Component.extend(Textable, {
  //
  // Properties
  // ---------
  /**
    The BEM base name for this component: "caption-x"

    @property base
    @type     String
    @default  "caption"
    @public
   */
  base: 'uxs-caption',

  layout
}).reopenClass({
  positionalParams: ['text'],
});