import LinkComponent from '@ember/routing/link-component';
import layout from '../../templates/components/uxs-breadcrumb/link';
import Styleable from 'ember-ux-sauce/mixins/styleable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

/**
  Display link to another route within a uxs-menu

  ```hbs
  {{uxs-breadcrumb/link "My Route" "route.name"}}
  ```

  @class UXSBreadcrumb/Link
*/
export default LinkComponent.extend(BEMComponent, Styleable, Testable, {
  layout,
  //
  // Arguments
  // ---------
  /**
    The BEM base name for this component

    @argument base
    @type     String
    @default  "uxs-menu__item"
    @public
   */
  base: 'uxs-breadcrumb__item',
  /**
    Set the style of the component.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  /**
    If set to true the link will be rendered small (detail) size

    @argument detail
    @default false
    @type Boolean
  */
  detail: false,
  // Methods
  init() {
    this.registerModifiers([
      'detail',
      'disabled',
    ])
    this._super(...arguments);
  },
});