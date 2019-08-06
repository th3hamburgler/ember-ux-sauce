import Component from '@ember/component';
import layout from '../templates/components/uxs-sort-menu';

export default Component.extend({
  layout,
  icon: 'swap_vert',
  subheading: 'Sort by',
  tagName: '',
  // Actions
  actions: {
    onItemSelect(value) {
      let action = this.onSelect;
      return action(value);
    },
  }
});