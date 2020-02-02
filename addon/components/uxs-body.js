import Component from '@ember/component';
import layout from '../templates/components/uxs-body';
import Textable from '../mixins/textable';
import {
  computed
} from '@ember/object';

/**
  A typographic component to render body text

  ```hbs
  {{uxs-body "Lorem ipsum dolar" 2}}

  {{#uxs-body level=2}}Lorem ipsum dolar"{{/uxs-body}}
  ```

  @class UXSHeading
*/
export default Component.extend(Textable, {
  //
  // Properties
  // ---------
  /**
    The BEM base name for this component: "body-x"

    @property base
    @type     String
    @default  "body"
    @public
   */
  base: computed('level', 'paragraph', function() {
    if (this.paragraph) {
      return `t-paragraph-${this.level}`;
    } else {
      return `t-body-${this.level}`;
    }
  }),

  level: 1,
  layout
}).reopenClass({
  positionalParams: ['text', 'level', 'paragraph'],
});