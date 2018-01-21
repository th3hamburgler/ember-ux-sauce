import Component from '@ember/component';
import layout from '../templates/components/uxs-nav';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  equal
} from '@ember/object/computed';

export default Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-nav',
  layout,
  // Computed
  isAlignedLeft: equal('align', 'left'),
  isAlignedCenter: equal('align', 'center'),
  isAlignedRight: equal('align', 'right'),
  // Methods
  init() {
    this.registerModifiers([
      'detail',
      'isAlignedCenter:center',
      'horizontal',
      'isAlignedLeft:left',
      'isAlignedRight:center',
    ])
    this._super(...arguments);
  },
  getDefaultProps() {
    return {
      align: 'left',
    };
  },
});