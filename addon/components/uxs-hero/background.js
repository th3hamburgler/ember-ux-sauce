import Component from '@ember/component';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  computed,
  get
} from '@ember/object';

export default Component.extend(BEMComponent, {
  // Attributes
  attributeBindings: ['style:cssStyles'],
  base: 'uxs-hero__image',
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style'
    ]);
  },
  // Computed
  cssStyles: computed('image', function() {
    const image = get(this, 'image');
    if (image) {
      return `background-image:url(${image})`;
    }
  }),
});