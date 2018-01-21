import Mixin from '@ember/object/mixin';
import {
  get
} from '@ember/object';
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
    get(this, 'modifiers').pushObjects([
      'isAlignCenter:center',
      'isAlignLeft:left',
      'isAlignJustifed:justify',
      'isAlignRight:right',
    ]);

    this._super(...arguments);

    this.set('propTypes', {
      align: PropTypes.oneOfType([
        PropTypes.null,
        PropTypes.string,
      ]),
    });
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