import Component from '@ember/component';
import layout from '../templates/components/uxs-preamble';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import Styleable from 'ember-ux-sauce/mixins/styleable';
import Clickable from 'ember-ux-sauce/mixins/clickable';

export default Component.extend(BEMComponent, Clickable, Styleable, Testable, {
  // Attributes
  base: 'uxs-preamble',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*style',
    ]);
  },
});