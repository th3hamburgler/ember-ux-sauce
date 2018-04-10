import Component from '@ember/component';
import layout from '../templates/components/uxs-text';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  set
} from '@ember/object';
import {
  PropTypes
} from 'ember-prop-types';

const Text = Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-text',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*size',
      '*style',
      '*weight',
    ]);

    set(this, 'propTypes', {
      size: PropTypes.string,
      style: PropTypes.string,
      weight: PropTypes.string,
    });
  },
  getDefaultProps() {
    return {
      size: '',
      style: '',
      weight: '',
    };
  },
});

Text.reopenClass({
  positionalParams: ['text'],
});

export default Text;