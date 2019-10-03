import Component from '@ember/component';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-data';

/**
  A component to render group of buttons

  ```hbs
  {{#uxs-data |data|}}
    {{data.item "Label" "Value"}}
    {{data.item "Another Label" "Value"}}
  {{/uxs-data}}
  ```
  @class UXS Data
  @public
  @yield {Hash} data
  @yield {Component} data.item
*/
export default Component.extend(BEMComponent, Testable, {

  /**
    The base css class name that the BEM Component
    mixin will use.
    @field base
    @type String
   */
  base: 'uxs-data',
  /**
   Reference to the template file this component will use
   @field layout
   @type String
   */
  layout,

  // -------
  // Methods
  // -------
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*display',
      'inset',
      'padded'
    ]);
  },
});