import Component from '@ember/component';
import layout from '../../templates/components/uxs-navbar/logo';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
/**
  Render a logo image as either an svg element or img tag.

  ```hbs
  {{#uxs-navbar/logo "logo" svg=true}}

  {{#uxs-navbar/logo "logo.jpg" svg=false}}
  ```

  @class UXSIcon
*/
export default Component.extend(Accessible, BEMComponent, Testable, {
  layout,
  //
  // Arguments
  // ---------
  /**
    Alternative text for the image tag

    @argument alt
    @type     String
    @default  "Logo"
    @public
   */
  alt: 'Logo',
  /**
    The BEM base name for this component

    @argument base
    @type     String
    @default  "uxs-navbar__logo"
    @public
   */
  base: 'uxs-navbar__logo',
  /**
    Set to true to use an svg icon false for an image

    @argument svg
    @type     Boolean
    @default  true
    @public
   */
  svg: true,
  /**
    The path to either the image or svg file<br>
    Passed as the first positional parameter

    @argument base
    @type     String
    @default  "uxs-navbar__logo"
    @public
   */
  path: null,
}).reopenClass({
  positionalParams: ['path'],
});