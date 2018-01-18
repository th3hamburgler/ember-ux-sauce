import Component from '@ember/component';
import layout from '../templates/components/uxs-navbar-logo';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

export default Component.extend(BEMComponent, Testable, {
  base: 'uxs-navbar__logo',
  layout
});