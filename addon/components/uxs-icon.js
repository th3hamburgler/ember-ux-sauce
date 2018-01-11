import {
  PropTypes
} from 'ember-prop-types';
import Component from '@ember/component';
import layout from '../templates/components/uxs-icon';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import Clickable from 'ember-ux-sauce/mixins/clickable';

const FormTip = Component.extend(Buttonable, Clickable, {
  // Attributes
  base: 'uxs-icon',
  layout,
  // Methods
  init() {
    this.set('modifiers', [
      'accent',
      'disabled',
      'error',
      'grey',
      'inline',
      'primary',
      'prefix',
      'suffix',
      'warning',
    ])
    this._super(...arguments);
    this.set('propTypes', {
      icon: PropTypes.string,
    });
  },
  getDefaultProps() {
    return {
      style: 'black',
    };
  },
});

FormTip.reopenClass({
  positionalParams: ['icon']
});

export default FormTip;