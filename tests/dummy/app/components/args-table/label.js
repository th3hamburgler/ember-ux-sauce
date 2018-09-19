import Component from '@ember/component';

export default Component.extend({
  tagName: 'td',
  classNames: ['docs-w-32'],
}).reopenClass({
  positionalParams: ['label'],
});