import Component from '@ember/component';
import layout from '../templates/components/uxs-avatar-text';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import Styleable from 'ember-ux-sauce/mixins/styleable';
import {
  equal,
} from '@ember/object/computed';

const TextAvatar = Component.extend(BEMComponent, Styleable, Testable, {
  base: 'uxs-text-avatar',
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

TextAvatar.reopenClass({
  positionalParams: ['text'],
});

export default TextAvatar;