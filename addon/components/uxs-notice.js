import Component from '@ember/component';
import layout from '../templates/components/uxs-notice';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  equal
} from '@ember/object/computed';

const Notice = Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-notice',
  layout,
  // Computed
  isError: equal('style', 'error'),
  isWarning: equal('style', 'warning'),
  isSuccess: equal('style', 'success'),
  isPrimary: equal('style', 'primary'),
  isAccent: equal('style', 'accent'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'isError:error',
      'isWarning:warning',
      'isSuccess:success',
      'isPrimary:primary',
      'isAccent:accent',
    ]);
  },
});

Notice.reopenClass({
  positionalParams: ['text'],
});

export default Notice;