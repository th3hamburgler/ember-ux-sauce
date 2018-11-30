import Component from '@ember/component';
import layout from '../templates/components/uxs-icon';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import Clickable from 'ember-ux-sauce/mixins/clickable';

const FormTip = Component.extend(Buttonable, Clickable, {
  // Attributes
  base: 'uxs-icon',
  layout,
  style: null,
  disabled: false,
  size: 'medium',
  name: true,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'disabled',
      '*size',
      '*style',
      'inline',
    ]);
  },
});

FormTip.reopenClass({
  positionalParams: ['icon']
});

export default FormTip;