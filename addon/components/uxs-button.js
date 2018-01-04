import Ember from 'ember';
import layout from '../templates/components/uxs-button';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import Clickable from 'ember-ux-sauce/mixins/clickable';

const {
  Component,
} = Ember;

const Button = Component.extend(Buttonable, Clickable, {
  // Attributes
  layout,
});

Button.reopenClass({
  positionalParams: ['text'],
});

export default Button;
