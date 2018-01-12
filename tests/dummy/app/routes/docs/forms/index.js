import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model: function() {
    return EmberObject.create({
      title: 'Mr',
      firstName: 'Fabian',
      lastName: 'Wardlaw',
      gender: 'Male',
      email: 'fab@gmail.com',
      bio: 'lorem ipsum...',
    })
  },
});