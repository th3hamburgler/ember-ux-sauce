import Component from '@ember/component';
import layout from '../templates/components/uxs-app';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  set
} from '@ember/object';

export default Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-app',
  layout,
  init() {
    set(this, 'modifiers', ['fixedNav:has-fixed-navbar']);
    this._super(...arguments);
  },
});