import Controller from '@ember/controller';

export default Controller.extend({
  isShowingModal: false,
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
      gender: null,
      dob: null,
    });
    const user = {
      name: 'Jim Wardlaw',
      email: 'jim@wearesauce.io',
      role: 'admin',
      initials: 'JW',
    };
    this.set('users', [user, user, user, user, user, ]);
  },
  // Actions
  actions: {
    fav() {
      window.console.log('Fav!');
    },
    toggleModal() {
      this.toggleProperty('isShowingModal');
    },
  }
});