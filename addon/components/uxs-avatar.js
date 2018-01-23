import Component from '@ember/component';
import layout from '../templates/components/uxs-avatar';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  equal
} from '@ember/object/computed';

const Avatar = Component.extend(BEMComponent, Testable, {
  attributeBindings: ['src'],
  base: 'uxs-avatar',
  tagName: 'img',
  layout,
  // Computed
  small: equal('size', 'small'),
  medium: equal('size', 'medium'),
  large: equal('size', 'large'),
  huge: equal('size', 'huge'),
  giant: equal('size', 'giant'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'border',
      'small',
      'large',
      'huge',
      'giant',
      'round',
    ]);
  },
  getDefaultProps() {
    return {
      size: 'medium',
    };
  },
});

Avatar.reopenClass({
  positionalParams: ['src'],
});

export default Avatar;