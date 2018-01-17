import Component from '@ember/component';
import layout from '../templates/components/uxs-form';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

export default Component.extend(BEMComponent, {
  // Attributes
  attributeBindings: ['novalidate'],
  base: 'uxs-form',
  layout,
  novalidate: true,
  tagName: 'form',
  // Actions
  actions: {
    /**
     * Default form submit handler
     **/
    submit() {
      this.submit();
    }
  }
});