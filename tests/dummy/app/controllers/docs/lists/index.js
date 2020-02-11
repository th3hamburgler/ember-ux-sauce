import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  rows: computed(function() {
    return [{
        title: "Item One",
        location: "United Kingdom",
        email: "foo@example.com",
        count: 7,
      },
      {
        title: "Item Two",
        location: "United Kingdom",
        email: "bar@example.com",
        count: 99,
      },
      {
        title: "Item Three",
        location: "France",
        email: "boop@example.com",
        count: 36,
      },
    ]
  }),
  styles: computed(function() {
    return [
      'primary',
      'accent',
      'dark',
      'grey',
      'mid',
      'light',
      'white',
      'success',
      'warning',
      'error',
    ];
  }),
  actions: {
    noticeAction() {
      window.alert("List Notice Hit");
    },
  },
});