import Component from '@ember/component';
import layout from '../templates/components/uxs-avatar';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  alias
} from '@ember/object/computed';

const Avatar = Component.extend(BEMComponent, Testable, {
  attributeBindings: ['src'],
  base: 'uxs-avatar',
  tagName: 'img',
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

Avatar.reopenClass({
  positionalParams: ['src'],
});

export default Avatar;