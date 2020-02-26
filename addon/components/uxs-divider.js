import Component from '@ember/component';
import layout from '../templates/components/uxs-divider';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

/**
  Render a divider

  ```hbs
  {{uxs-divider}}
  ```

  @class UXS divider
  @public
*/
export default Component.extend(BEMComponent, Testable, {
  /**
   The BEM base name for this component

   @argument base
   @type     String
   @default  'uxs-divider'
   @public
   */
  base: 'uxs-divider',
  /**
   The orientation of the divider horizontal (default) or vertical

   @argument orientation
   @type     String
   @default  'horizontal'
   @public
   */
  orientation: 'horizontal',
  /**
    The html tag name for the root of the component

    @argument  tagName
    @type       String
    @default    'hr'
    @public
    */
  tagName: 'hr',
  /**
    Path to the component template file

    @property layout
    @type     String
    @private
    */
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['*orientation']);
  },
});