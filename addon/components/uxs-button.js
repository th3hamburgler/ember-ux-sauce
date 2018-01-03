import Ember from 'ember';
import layout from '../templates/components/uxs-button';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

const {
  Component,
  computed: {
    equal,
  },
} = Ember;

const Button = Component.extend(BEMComponent, Clickable, Testable, {
  // Attributes
  base: 'uxs-button',
  layout,
  modifiers: [
    'disabled',
    'inline',
    'isAccent:accent',
    'isBlack:black',
    'isGray:gray',
    'isPrimary:primary',
    'isWhite:white',
    'mini',
    'naked',
    'selected',
  ],
  style: 'primary',
  // Computed
  isAccent: equal('style', 'accent'),
  isBlack: equal('style', 'black'),
  isGray: equal('style', 'gray'),
  isPrimary: equal('style', 'primary'),
  isWhite: equal('style', 'white'),
});

Button.reopenClass({
  positionalParams: ['text'],
});

export default Button;


/*
import Ember from 'ember';
import layout from '../templates/components/ht-button';
import ClickSupport from '../mixins/click-support';
import AccessibleComponent from '../mixins/accessible-component';

const {
  Component,
  computed: {
    alias,
  },
} = Ember;

const Button = Component.extend(AccessibleComponent, ClickSupport, {
  attributeBindings: [
    'disabled:disabled',
    'type:type',
    'name:name',
    'name:data-test-button',
  ],
  classNameBindings: [
    'naked:button--naked',
    'selected:button--selected',
    'disabled:button--disabled',
    'inline:button--inline',
    'mini:button--mini',
  ],
  classNames: ['button'],
  layout,
  role: 'button',
  tagName: 'button',
  type: 'button',
  name: 'button',
  // Computed
  label: alias('text'),
});
*/
