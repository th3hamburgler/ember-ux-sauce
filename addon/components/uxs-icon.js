import {
  PropTypes
} from 'ember-prop-types';
import Component from '@ember/component';
import layout from '../templates/components/uxs-icon';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import {
  set
} from '@ember/object';

const FormTip = Component.extend(Buttonable, Clickable, {
  // Attributes
  base: 'uxs-icon',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'disabled',
      '*size',
      '*style',
      'inline',
    ]);
    set(this, 'propTypes', {
      icon: PropTypes.string,
      disabled: PropTypes.boolean,
      style: PropTypes.string,
      size: PropTypes.string,
    });
  },
  getDefaultProps() {
    return {
      style: null,
      disabled: false,
      size: 'medium',
    };
  },
});

FormTip.reopenClass({
  positionalParams: ['icon']
});

export default FormTip;