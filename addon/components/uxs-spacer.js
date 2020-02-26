import Component from '@ember/component';
import layout from '../templates/components/uxs-spacer';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

/**
  Render a spacer

  ```hbs
  {{uxs-spacer}}
  ```

  @class UXS Spacer
  @public
*/
export default Component.extend(BEMComponent, Testable, {
  /**
   The BEM base name for this component

   @argument base
   @type     String
   @default  'uxs-spacer'
   @public
   */
  base: 'uxs-spacer',
  /**
    Path to the component template file

    @property layout
    @type     String
    @private
    */
  layout
});