import Mixin from '@ember/object/mixin';
import {
  equal
} from '@ember/object/computed';
import PropTypeMixin, {
  PropTypes
} from 'ember-prop-types';

export default Mixin.create(PropTypeMixin, {
  // Attributes
  align: null,
  // Computed
  isAlignCenter: equal('align', 'center'),
  isAlignLeft: equal('align', 'left'),
  isAlignJustifed: equal('align', 'justify'),
  isAlignRight: equal('align', 'right'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'isAlignCenter:center',
      'isAlignLeft:left',
      'isAlignJustifed:justify',
      'isAlignRight:right',
    ]);
    this.set('propTypes', {
      align: PropTypes.oneOfType([
        PropTypes.null,
        PropTypes.string,
      ]),
    });
  },
  registerModifiers: function() {
    if (this._super) {
      this._super(...arguments);
    }
  },
  /**
   * Init any property defaults
   */
  getDefaultProps() {
    return {
      align: 'left',
    };
  },
});