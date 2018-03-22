import LinkComponent from '@ember/routing/link-component';
import layout from '../templates/components/uxs-icon-link';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Styleable from 'ember-ux-sauce/mixins/styleable';
import {
  alias
} from '@ember/object/computed';
import {
  set
} from '@ember/object';
import {
  PropTypes
} from 'ember-prop-types';

export default LinkComponent.extend(Buttonable, Clickable, Styleable, {
  // Attributes
  base: 'uxs-icon',
  layout,
  // Computed
  icon: alias('linkTitle'),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'accent',
      'error',
      'grey',
      'primary',
      'prefix',
      'suffix',
      'warning',
    ])
    set(this, 'propTypes', {
      icon: PropTypes.string,
    });
  },
  getDefaultProps() {
    return {
      style: null,
    };
  },
});