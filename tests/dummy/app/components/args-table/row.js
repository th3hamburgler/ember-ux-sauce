import Component from '@ember/component';

export default Component.extend({
  tagName: 'tr',
}).reopenClass({
  positionalParams: ['name'],
});