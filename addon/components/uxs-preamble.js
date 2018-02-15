import Component from '@ember/component';
import layout from '../templates/components/uxs-preamble';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';

export default Component.extend(BEMComponent, Testable, {
  base: 'uxs-preamble',
  layout,
});