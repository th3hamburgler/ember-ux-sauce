import Component from '@ember/component';
import layout from '../templates/components/uxs-list-subheading';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

/**
  A component to render a list subheading component

  ```hbs
  {{uxs-list-subheading "My Subheading"}}
  ```
  @class UXS List Subheading
  @public
  @yield {Hash} subheading
*/
const Subheading = Component.extend(BEMComponent, {
  // Attributes
  /**
    The base css class name 'uxs-list__subheading'

    @field base
    @type String
   */
  base: 'uxs-list__subheading',
  layout,
  tagName: '',
  // Arguments
  /**
    Should the subheading have a border?

    @argument bordered
    @type     boolean
    @default  true
    @public
   */
  bordered: true,
  /**
    Set the style of the subheading component.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.uxs-splash--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  style: null,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['bordered', '*style']);
  },
});

Subheading.reopenClass({
  positionalParams: ['text', 'sort'],
});

export default Subheading;