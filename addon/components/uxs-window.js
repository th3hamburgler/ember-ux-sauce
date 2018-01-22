import Component from '@ember/component';
import layout from '../templates/components/uxs-window';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  computed
} from '@ember/object';
import {
  bool
} from '@ember/object/computed';
import {
  get
} from '@ember/object';

export default Component.extend(BEMComponent, Testable, {
  // Attributes
  attributeBindings: ['backgroundImage:style'],
  base: 'uxs-window',
  layout,
  // Computed
  splash: bool('image'),
  backgroundImage: computed('image', function() {
    let image = get(this, 'image');
    if (image) {
      return `background-image:url(${image})`;
    }
  }),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'splash',
    ]);
  },
});