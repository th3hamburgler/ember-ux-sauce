import Component from '@ember/component';
import layout from '../templates/components/uxs-text';
import Textable from '../mixins/textable';
import {
  computed
} from '@ember/object';

/**
  A typographic component to render text

  ```hbs
  {{uxs-text "Lorem ipsum dolar"}}

  {{#uxs-text}}Lorem ipsum dolar"{{/uxs-text}}
  ```

  @class UXSText
*/
export default Component.extend(Textable, {
  layout,
  //
  // Properties
  // ---------
  type: 'body-1',
  /**
    The BEM base name for this component: "uxs-text"

    @property base
    @type     String
    @default  "uxs-text"
    @public
   */
  base: computed('type', function() {
    if (this.type) {
      return `uxs-${this.type}`;
    }
  }),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([]);
  },
}).reopenClass({
  positionalParams: ['text', 'type'],
});