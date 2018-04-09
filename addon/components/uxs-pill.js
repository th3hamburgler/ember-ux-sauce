import Component from '@ember/component';
import layout from '../templates/components/uxs-pill';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from '../mixins/testable';

const Pill = Component.extend(BEMComponent, Testable, {
  base: 'uxs-pill',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'rounded',
      '*size',
      '*style',
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