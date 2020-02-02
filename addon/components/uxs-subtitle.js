import Component from '@ember/component';
import layout from '../templates/components/uxs-subtitle';
import Textable from '../mixins/textable';
import {
  computed
} from '@ember/object';

/**
  A typographic component to render subtitle text

  ```hbs
  {{uxs-subtitle "Lorem ipsum dolar" 2}}

  {{#uxs-subtitle level=2}}Lorem ipsum dolar"{{/uxs-subtitle}}
  ```

  @class UXSHeading
*/
export default Component.extend(Textable, {
  //
  // Properties
  // ---------
  /**
    The BEM base name for this component: "subtitle-x"

    @property base
    @type     String
    @default  "subtitle"
    @public
   */
  base: computed('scale', function() {
    return `subtitle-${this.scale}`;
  }),

  level: 1,
  layout
}).reopenClass({
  positionalParams: ['text', 'scale'],
});