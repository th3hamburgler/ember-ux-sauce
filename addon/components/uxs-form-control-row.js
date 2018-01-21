import Component from '@ember/component';
import {
  PropTypes
} from 'ember-prop-types';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-form-control-row';
import {
  set,
} from '@ember/object';

export default Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-form__control-row',
  inline: true,
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'disabled',
      'inline',
    ]);
    set(this, 'propTypes', {
      inline: PropTypes.boolean,
    });
  },
});