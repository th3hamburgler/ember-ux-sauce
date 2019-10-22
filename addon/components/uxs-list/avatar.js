import Component from '@ember/component';
import layout from '../../templates/components/uxs-list/avatar';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  computed
} from '@ember/object';

export default Component.extend(BEMComponent, Clickable, Testable, {
  // Properties
  base: 'uxs-list__avatar',
  layout,
  size: 'large',
  alt: 'Avatar image',
  // Computed
  iconSize: computed('icon', 'size', function() {
    if (this.icon) {
      return `icon-${this.size}`;
    }
  }),
  textSize: computed('text', 'size', function() {
    if (this.text) {
      return `text-${this.size}`;
    }
  }),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style',
      '*size',
      'icon',
      'text',
      'image',
      '*iconSize',
      '*textSize',
    ]);
  }
}).reopenClass({
  positionalParams: ['text'],
});