import Component from '@ember/component';
import layout from '../templates/components/uxs-div';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';
import Styleable from 'ember-ux-sauce/mixins/styleable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  equal
} from '@ember/object/computed';

export default Component.extend(BEMComponent, Clickable, Styleable, Testable, {
  base: 'uxs-div',
  clear: false,
  layout,
  // Computed
  small: equal('size', 'small'),
  medium: equal('size', 'medium'),
  large: equal('size', 'large'),
  huge: equal('size', 'huge'),
  giant: equal('size', 'giant'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'clear',
      'small',
      'medium',
      'large',
      'huge',
      'giant',
    ]);
  },
  getDefaultProps() {
    return {
      size: 'medium',
    };
  },
});