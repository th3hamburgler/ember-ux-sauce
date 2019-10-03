import Component from '@ember/component';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../../templates/components/uxs-data/group';

export default Component.extend(BEMComponent, Testable, {

  /**
    The base css class name that the BEM Component
    mixin will use.
    @field base
    @type String
   */
  base: 'uxs-data__group',
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