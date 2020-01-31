import Component from '@ember/component';
import layout from '../templates/components/uxs-app-bar';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
export const APP_BAR_STYLES = {
  REGULAR: 'regular',
  EXTENDED: 'extended',
};
export default Component.extend(Accessible, BEMComponent, Testable, {
  base: 'uxs-app-bar',
  layout,
  // Attributes
  /**
    Set the color of the bar.

    UXS ships with the following stock color: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-app-bar--my-custom-color_

    @argument color
    @type     String
    @default  null
    @public
   */
  color: 'accent',
  /**
    Set the style of the app bar.

    UXS ships with the following styles:
    - regular
    - extended

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-bar--my-custom-style

    @argument style
    @type     String
    @default  null
    @public
   */
  style: APP_BAR_STYLES.REGULAR,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*color',
      '*style',
    ]);
  },
});