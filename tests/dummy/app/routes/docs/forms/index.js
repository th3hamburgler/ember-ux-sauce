import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import moment from 'moment';

export default Route.extend({
  model: function() {
    return EmberObject.create({
      title: 'Mr',
      firstName: 'Fabian',
      lastName: 'Wardlaw',
      gender: 'Male',
      email: 'fab@gmail.com',
      bio: 'lorem ipsum...',
      dateOfBirth: moment('1983-06-28').toDate(),
      datetime: moment('2018-01-01 20:42').toDate(),
      time: moment('2010-10-10 11:11').toDate(),
    })
  },
});