import Component from '@ember/component';
import layout from '../templates/components/uxs-avatar-text';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  alias
} from '@ember/object/computed';
const TextAvatar = Component.extend(BEMComponent, Testable, {
  base: 'uxs-text-avatar',
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

TextAvatar.reopenClass({
  positionalParams: ['text'],
});

export default TextAvatar;