import Component from '@ember/component';
import layout from '../templates/components/uxs-div';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

export default Component.extend(BEMComponent, Clickable, Testable, {
  base: 'uxs-div',
  layout,
});