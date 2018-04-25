import Component from '@ember/component';
import layout from '../templates/components/uxs-list-notice';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  get
} from '@ember/object';
import {
  bool
} from '@ember/object/computed';

const Notice = Component.extend(BEMComponent, Testable, {
  base: 'uxs-list__notice',
  // Computed
  hasText: bool('text'),
  hasIcon: bool('icon'),
  hasAction: bool('actionText'),
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['*style']);
  },
  // Actions
  actions: {
    action() {
      const action = get(this, 'onClick');
      if (action) {
        action();
      }
    }
  }
});

Notice.reopenClass({
  positionalParams: ["text"],
});

export default Notice;