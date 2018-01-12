import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model: function() {
    return EmberObject.create({
      title: 'Ms',
      firstName: 'Frida',
      lastName: 'Wardlaw',
      gender: 'Male',
      email: 'fab@gmail.com',
      tel: '+44 7723 649584',
      bio: 'lorem ipsum...',
    })
  },
});