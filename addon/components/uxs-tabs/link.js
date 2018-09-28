import LinkComponent from '@ember/routing/link-component';
import layout from '../../templates/components/uxs-tabs/link';
import Styleable from 'ember-ux-sauce/mixins/styleable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
/**
  A contextual component to render a tab link item

  ```hbs
  {{uxs-tabs/link "fish" "foo" model.id}}

  {{#uxs-tabs style=style as |tab|}}
    {{tab.link "fish" "foo" model.id}}
  {{/uxs-tabs}}
  ```
  @class UXS Tabs Link
  @public
*/
export default LinkComponent.extend(BEMComponent, Styleable, Testable, {
  /**
    The base css class name 'uxs-tabs__item'

    @field base
    @type String
   */
  base: 'uxs-tabs__item',
  // Arguments
  /**
    Set the alignment of the tab link item.

    UXS ships with three align options: left, center (default) & right

    @argument align
    @type     String
    @default  "center"
    @public
   */
  align: 'center',
  /**
    Set to true to disable the tab link item.

    This will activate it's disabled style and also prevent any action from being fired.

    @argument disabled
    @type     Boolean
    @default  false
    @public
   */
  disabled: false,
  /**
    Set the style of the tab link item.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-tabs--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  style: null,
  /**
    The title text of the link item

    This argment is passed in as positional parameter 1 if not rendered in block format

    @argument title
    @type     String
    @default  null
    @public
   */
  linkTitle: false,
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*align',
      'disabled',
      '*style',
    ]);
  },
});