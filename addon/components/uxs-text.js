import Component from '@ember/component';
import layout from '../templates/components/uxs-text';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';

const Text = Component.extend(BEMComponent, Testable, {
  layout
});

Text.reopenClass({
  positionalParams: ['text'],
});

export default Text;