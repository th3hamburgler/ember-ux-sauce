import Component from '@ember/component';
import {
  computed,
  get
} from '@ember/object';

export default Component.extend({
  tagName: 'tr',
  // Computed
  name: computed('namespace', '_name', function() {
    const namespace = get(this, 'namespace'),
      name = get(this, '_name');
    if (namespace) {
      return `${namespace}-${name}`;
    }
    return name;
  }),
}).reopenClass({
  positionalParams: ['_name'],
});