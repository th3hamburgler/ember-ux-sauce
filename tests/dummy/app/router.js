import AddonDocsRouter, {
  docsRoute
} from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
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
    this.route('lists', function() {
      this.route('items');
      this.route('avatars');
      this.route('subheadings');
      this.route('notices');
    })
    this.route('navigation', function() {
      this.route('tabs', function() {
        this.route('dogs');
        this.route('cats');
      });
      this.route('breadcrumbs');
    })
    this.route('components', function() {
      this.route('lists');
      this.route('pagination');
      this.route('datalists');
      this.route('avatars');
      this.route('icons');
      this.route('menus');
      this.route('preamble');
      this.route('notice');
      this.route('pills');
      this.route('callout');
      this.route('splash');
    });
    this.route('typography', function() {
      this.route('lists');
      this.route('tables');
    });
    this.route('layout', function() {
      this.route('app');
      this.route('navbar');
      this.route('window');
      this.route('pane');
      this.route('hero');
      this.route('toolbar');
      this.route('header');
    });
    this.route('api', function() {
      this.route('item', {
        path: '/*path'
      });
    });
  });

  this.route('sandbox', function() {
    this.route('api', function() {
      this.route('item', {
        path: '/*path'
      });
    });
  });

  this.route('app', function() {
    this.route('dash', {
      path: '/'
    });
    this.route('splash');
    this.route('single');
    this.route('double');
    this.route('triple');
    this.route('complex');
    this.route('list', function() {
      // index
      this.route('empty');
      this.route('filtered');
      this.route('loading');
    });
    this.route('resource', {
      path: 'resource/:id'
    }, function() {
      // index
      this.route('edit');
      this.route('related');
      this.route('archive');
    });

  });

  this.route('not-found', {
    path: '/*path'
  });
});

export default Router;