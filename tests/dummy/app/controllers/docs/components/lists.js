import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  items: computed(function() {
    return [{
        title: "Item One",
        location: "United Kingdom",
        email: "foo@example.com",
      },
      {
        title: "Item Two",
        location: "United Kingdom",
        email: "bar@example.com",
      },
      {
        title: "Item Three",
        location: "France",
        email: "boop@example.com",
      },
    ]
  }),
});