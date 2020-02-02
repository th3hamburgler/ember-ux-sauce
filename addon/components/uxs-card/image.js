import Component from '@ember/component';
import layout from '../../templates/components/uxs-card/image';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';

export default Component.extend(BEMComponent, Testable, {
  attributeBindings: ['src'],
  base: 'uxs-card__image',
  tagName: 'img',
  layout,
}).reopenClass({
  positionalParams: ['src'],
});