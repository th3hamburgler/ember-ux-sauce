import Component from '@ember/component';
import {
  computed,
  get
} from '@ember/object';

import {
  FAB_STYLES
} from 'ember-ux-sauce/components/uxs-fab';

export default Component.extend({
  disabled: false,
  inline: false,
  loading: false,
  loadingText: 'Loading...',
  loadingIcon: 'loading',
  style: 'regular',
  text: 'BUTTON',
  color: 'primary',
  icon: 'add',
  param1: computed('style', 'text', 'icon', function() {
    const style = get(this, 'style'),
      text = get(this, 'text'),
      icon = get(this, 'icon');

    if (style === FAB_STYLES.EXTENDED) {
      return text;
    } else {
      return icon;
    }
  }),
  param2: computed('style', 'text', 'icon', function() {
    const style = get(this, 'style'),
      text = get(this, 'text'),
      icon = get(this, 'icon');

    if (style === FAB_STYLES.EXTENDED) {
      return icon;
    } else {
      return text;
    }
  }),
});