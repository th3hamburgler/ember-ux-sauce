import Component from '@ember/component';
import layout from '../templates/components/uxs-table';
import Textable from '../mixins/textable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

export default Component.extend(BEMComponent, Textable, {
  // Attributes
  base: 'uxs-table',
  layout,
  tagName: 'table',
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['*style']);
  },
});