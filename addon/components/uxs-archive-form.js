import Component from '@ember/component';
import layout from '../templates/components/uxs-archive-form';
import {
  get
} from '@ember/object';

export default Component.extend({
  // Properties
  layout,
  tagName: '',
  heading: 'Are You Sure?',
  submitText: 'Confirm Archive',
  cancelText: 'Cancel',
  cancelRoute: null,
  icon: 'warning',
  loading: false,
  // Actions
  actions: {
    archive() {
      const action = get(this, "onConfirm");
      if (action) {
        return action();
      }
    },
    cancel() {
      const action = get(this, "onCancel");
      if (action) {
        return action();
      }
    },
  }
});