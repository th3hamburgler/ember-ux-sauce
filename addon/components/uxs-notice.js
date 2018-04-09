import Component from '@ember/component';
import layout from '../templates/components/uxs-notice';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  bool
} from '@ember/object/computed';

const Notice = Component.extend(BEMComponent, Clickable, Testable, {
  // Attributes
  base: 'uxs-notice',
  layout,
  // Computed
  hasText: bool('text'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style',
      'truncated',
      'hasText:has-text',
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