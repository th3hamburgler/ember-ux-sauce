import Component from '@ember/component';
import layout from '../templates/components/uxs-notice';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';

const Notice = Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-notice',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style',
      'truncated'
    ]);
  },
  getDefaultProps() {
    return {
      style: 'default',
      truncated: true,
    };
  },
});

Notice.reopenClass({
  positionalParams: ['text'],
});

export default Notice;