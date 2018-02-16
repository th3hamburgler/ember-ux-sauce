import Component from '@ember/component';
import layout from '../templates/components/uxs-menu';
import Styleable from 'ember-ux-sauce/mixins/styleable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

export default Component.extend(BEMComponent, Styleable, Testable, {
  // Attributes
  base: 'uxs-menu',
  bordered: true,
  layout,
  // Methods
  init() {
    this.registerModifiers([
      'detail',
      'horizontal',
      'bordered',
    ])
    this._super(...arguments);
  },
  getDefaultProps() {
    return {
      align: 'left',
      detail: false,
      bordered: true,
    };
  },
});