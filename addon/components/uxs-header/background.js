import Component from '@ember/component';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  computed,
  get
} from '@ember/object';
import {
  htmlSafe
} from '@ember/string';

export default Component.extend(BEMComponent, {
  // Attributes
  attributeBindings: ['cssStyles:style'],
  base: 'uxs-header__image',
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
      return htmlSafe(`background-image:url(${image})`);
    }
  }),
});