import Component from '@ember/component';
import layout from '../../templates/components/uxs-list/avatar';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  computed
} from '@ember/object';

const AVATAR_SIZES = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small',
  },
  AVATAR_STYLES = {
    ICON: 'icon',
    TEXT: 'text',
    IMAGE: 'image',
  };

export default Component.extend(BEMComponent, Clickable, Testable, {
  // Properties
  base: 'uxs-list__avatar',
  layout,
  color: 'accent',
  size: AVATAR_SIZES.MEDIUM,
  style: AVATAR_STYLES.TEXT,
  alt: 'Avatar',
  // Computed
  iconSize: computed('icon', 'size', function() {
    if (this.icon) {
      return `icon-${this.size}`;
    }
  }),
  textSize: computed('text', 'size', function() {
    if (this.text) {
      return `text-${this.size}`;
    }
  }),
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      '*color',
      '*size',
      '*type',
      '*iconSize',
      '*textSize',
    ]);
  }
}).reopenClass({
  positionalParams: ['content'],
});