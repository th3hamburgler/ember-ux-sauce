import Component from '@ember/component';
import layout from '../templates/components/uxs-pill';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from '../mixins/testable';
import {
  bool
} from '@ember/object/computed';

const Pill = Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-pill',
  layout,
  // Computed
  hasPrefixIcon: bool('prefixIcon'),
  hasSuffixIcon: bool('suffixIcon'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'rounded',
      '*size',
      '*style',
      'hasPrefixIcon:with-prefix-icon',
      'hasSuffixIcon:with-suffix-icon',
    ]);
  },
  getDefaultProps() {
    return {
      size: 'small',
      style: 'default',
      rounded: true,
    };
  },
});

Pill.reopenClass({
  positionalParams: ['text'],
});

export default Pill;