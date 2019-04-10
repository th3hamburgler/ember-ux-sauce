import Component from '@ember/component';
import layout from '../templates/components/uxs-callout';
import Alignable from 'ember-ux-sauce/mixins/alignable';
import Testable from 'ember-ux-sauce/mixins/testable';
import Styleable from 'ember-ux-sauce/mixins/styleable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

export default Component.extend(Alignable, BEMComponent, Styleable, Testable, {
  base: 'uxs-callout',
  layout,
  style: "dark",
});