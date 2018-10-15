import Component from '@ember/component';
import {
  equal
} from '@ember/object/computed';
import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import layout from '../templates/components/uxs-button-group';

export default Component.extend(BEMComponent, PropTypeMixin, Testable, {
  // Attribues
  base: 'uxs-button-group',
  debugBem: false,
  layout,
  // Computed
  isAlignCenter: equal('align', 'center'),
  isAlignLeft: equal('align', 'left'),
  isAlignRight: equal('align', 'right'),
  // Methods
  /**
   * init - state
   *
   * @return object  this
   */
  init() {
    this._super(...arguments);

    this.registerModifiers([
      '*align',
      'disabled',
      'inline',
      'padded',
      'row',
      '*size',
      '*style',
    ]);

    this.set('propTypes', {
      align: PropTypes.oneOfType([
        PropTypes.null,
        PropTypes.string,
      ]),
      disabled: PropTypes.bool,
      inline: PropTypes.bool,
      mini: PropTypes.bool,
    });
  },
  /**
   * Init any property defaults
   */
  getDefaultProps() {
    return {
      disabled: false,
      inline: false,
      mini: false,
    };
  },
});