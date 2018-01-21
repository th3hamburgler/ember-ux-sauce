import Component from '@ember/component';
import layout from '../templates/components/uxs-dt';
import Textable from '../mixins/textable';

const Term = Component.extend(Textable, {
  base: 'uxs-dl__term',
  layout,
  tagName: 'dt',
});

Term.reopenClass({
  positionalParams: ['text'],
});

export default Term;