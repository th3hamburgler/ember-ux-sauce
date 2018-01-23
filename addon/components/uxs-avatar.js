import Component from '@ember/component';
import layout from '../templates/components/uxs-avatar';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';

const Avatar = Component.extend(BEMComponent, Testable, {
  attributeBindings: ['src'],
  base: 'uxs-avatar',
  tagName: 'img',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'small',
      'large',
      'huge',
      'giant',
      'round',
    ]);
  },
});

Avatar.reopenClass({
  positionalParams: ['src'],
});

export default Avatar;