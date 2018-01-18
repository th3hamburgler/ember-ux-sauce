import Component from '@ember/component';
import layout from '../templates/components/uxs-form';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  get
} from '@ember/object';

export default Component.extend(BEMComponent, Testable, {
  // Attributes
  attributeBindings: ['novalidate'],
  base: 'uxs-form',
  layout,
  novalidate: true,
  tagName: 'form',
  // Events
  submit(e) {
    e.preventDefault();
    let action = get(this, 'onSubmit');
    if (action && !get(this, 'disabled')) {
      action();
    }
  }
});