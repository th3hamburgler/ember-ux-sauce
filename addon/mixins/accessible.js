import Ember from 'ember';

const {
  Mixin,
} = Ember;

export default Mixin.create({
  attributeBindings: [
    'disabled:aria-disabled',
    'label:aria-label',
    'role',
  ],
});
