import Component from '@ember/component';
import layout from '../templates/components/uxs-avatar-icon';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  alias
} from '@ember/object/computed';
const IconAvatar = Component.extend(BEMComponent, Testable, {
  base: 'uxs-icon-avatar',
  layout,
  // Computed
  bordered: alias('border'),
  rounded: alias('round'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'bordered',
      'rounded',
      'selected',
      '*size',
      '*style'
    ]);
  },
  getDefaultProps() {
    return {
      size: 'medium',
      style: 'dark',
    };
  },
});

IconAvatar.reopenClass({
  positionalParams: ['icon'],
});

export default IconAvatar;