import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('docs', function() {
    this.route('patterns');
    this.route('quickstart');
    this.route('forms', function() {
      this.route('buttons');
      this.route('button-links');
      this.route('input-controls');
      this.route('dropdown-controls');
      this.route('toggles');
      this.route('validation');
      this.route('fieldsets');
    });
    this.route('api', function() {
      this.route('class', {
        path: '/:class_id'
      });
    });
  });
  this.route('not-found', {
    path: '/*path'
  });
});

export default Router;
