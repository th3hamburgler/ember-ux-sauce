import PowerSelect from 'ember-power-select/components/power-select';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  set
} from '@ember/object';

export default PowerSelect.extend(Accessible, BEMComponent, Testable, {
  // Attributes
  base: 'uxs-form__input',
  isDropdown: true,
  tagName: 'div',
  // Methods
  init() {
    this.initModifiers();

    this._super(...arguments);

    // this.initModelComputedProperties();
    // this.initPropTypes()
  },
  initModifiers() {
    set(this, 'modifiers', [
      'disabled',
      'isDropdown:dropdown',
      'error',
      'inline',
      'warning',
    ]);
  }
});