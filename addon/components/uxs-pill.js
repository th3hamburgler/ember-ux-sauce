import Component from '@ember/component';
import layout from '../templates/components/uxs-pill';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from '../mixins/testable';
import Clickable from '../mixins/clickable';
import {
  bool
} from '@ember/object/computed';

const Pill = Component.extend(BEMComponent, Clickable, Testable, {
  // Attributes
  base: 'uxs-pill',
  layout,
  size: 'small',
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
});

Pill.reopenClass({
  positionalParams: ['text'],
});

export default Pill;