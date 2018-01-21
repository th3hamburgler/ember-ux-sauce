import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('docs', function() {
    this.route('patterns');
    this.route('quickstart');
    this.route('settings', function() {
      this.route('colors');
      this.route('typography');
    });
    this.route('forms', function() {
      this.route('buttons');
      this.route('button-links');
      this.route('button-groups');
      this.route('controls');
      this.route('inputs');
      this.route('textareas');
      this.route('dropdowns');
      this.route('date-time-inputs');
      this.route('toggles');
      this.route('validation');
      this.route('fieldsets');
      this.route('rows');
    });
    this.route('icons');
    this.route('typography', function() {
      this.route('navs');
    });
    this.route('layout', function() {
      this.route('app');
      this.route('navbar');
    });
    this.route('api', function() {
      this.route('class', {
        path: '/:class_id'
      });
    });
  });

  this.route('app');

  this.route('not-found', {
    path: '/*path'
  });
});

export default Router;