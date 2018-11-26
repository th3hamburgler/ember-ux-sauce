import Component from '@ember/component';
import layout from '../templates/components/uxs-form';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import {
  get,
} from '@ember/object';
import {
  computed
} from '@ember/object';
import {
  equal
} from '@ember/object/computed';

export default Component.extend(BEMComponent, Testable, {
  // Attributes
  attributeBindings: ['novalidate'],
  base: 'uxs-form',
  layout,
  novalidate: true,
  tagName: 'form',
  // Computed
  isWhite: equal('style', 'white'),
  // Events
  submit(e) {
    e.preventDefault();
    if (!get(this, 'disabled')) {
      let action = get(this, 'onSubmit'),
        results = this.validate();
      if (results === true && action) {
        action();
      } else {
        let invalidAction = get(this, 'onInvalid');
        if (invalidAction) {
          invalidAction(results);
        }
      }
    }
  },
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['isWhite:white', '*style']);
  },
  /**
   * Validate child form control components
   **/
  validate: function() {
    let errorMessages = [],
      formControls = this.get('childFormControls');

    formControls.forEach(
      function(formControl) {
        if (formControl.get('validator') && !formControl.get('validator.isValid')) {
          let errors = {
            name: formControl.get('name'),
            messages: formControl.get('validator.errors').mapBy('message'),
            message: formControl.get('validator.errors').mapBy('message').join(', '),
          };
          errorMessages.push(errors);
        }
        formControl.set('didValidate', true);
      }
    );

    if (errorMessages.length !== 0) {
      return errorMessages;
    }
    return true;
  },
  /**
   * Find all child form components to be validated
   **/
  childFormControls: computed('childViews', function() {
    let findChildFormControls = function(thisComponent) {
      let childViews = thisComponent.get('childViews'),
        childFormControls = childViews.filter((childView) => {
          if (childView.element) {
            return childView.element.className.match('uxs-form__control') ? true : false;
          } else {
            return false;
          }
        });
      // look for nested children
      // childViews.forEach(function(childView) {
      //   childFormControls.addObjects(findChildFormControls(childView));
      // });
      return childFormControls;
    };
    return findChildFormControls(this);
  }),
});