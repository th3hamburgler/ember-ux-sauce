import Component from '@ember/component';
import {
  get,
  set
} from '@ember/object';
import moment from 'moment';
import EmberObject from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    set(this, 'genders', ['Female', 'Male', 'Unspecified']);
    set(this, 'model', EmberObject.create({
      title: 'Mr',
      firstName: 'Fabian',
      lastName: 'Wardlaw',
      gender: 'Male',
      email: 'fab@gmail.com',
      bio: 'lorem ipsum...',
      dateOfBirth: moment('1983-06-28').toDate(),
      datetime: moment('2018-01-01 20:42').toDate(),
      time: moment('2010-10-10 11:11').toDate(),
    }));
  },
  // Actions
  // BEGIN-SNIPPET model-bound-form.js
  actions: {
    save(model) {
      window.alert(`Save model ${get(model, 'firstName')}`);
    }
  },
  // END-SNIPPET
});