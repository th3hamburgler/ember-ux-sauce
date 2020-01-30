import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('model', {
      email: 'jim.wardlaw@gmail.com',
      handle: '',
      number: '123',
      username: '',
      password: 'foo',
      foo: '',
      bar: '',
      bio: 'lipsum \npro \nshmoo',
      animal: 'Dog',
      animals: ['Cat', 'Dog'],
    });
  },
});