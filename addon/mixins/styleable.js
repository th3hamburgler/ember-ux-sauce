import Mixin from '@ember/object/mixin';
import {
  computed,
  get
} from '@ember/object';

export default Mixin.create({
  classNameBindings: ['styleClass'],
  // Computed
  styleClass: computed('style', function() {
    const base = get(this, 'base'),
      style = get(this, 'style');
    if (style) {
      return `${base}--${style}`;
    }
  }),
});