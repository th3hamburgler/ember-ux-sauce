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
    this.route('changelog');
    this.route('components', function() {
      this.route('index');
    });

    this.route('typography', function() {
      this.route('index');
      this.route('lists');
      this.route('tables');
      this.route('dividers');
    });

    this.route('buttons', function() {
      this.route('index');
      this.route('fabs');
      this.route('icons');
    });

    this.route('lists', function() {
      this.route('index');
      this.route('avatars');
      // this.route('subheadings');
      // this.route('notices');
      this.route('pagination');
      // this.route('tables');
    })

    this.route('menus', function() {
      this.route('navbar');
      this.route('drawer');
    });

    this.route('settings', function() {
      this.route('colors');
      this.route('typography');
    });

    this.route('sass', function() {
      this.route('variables');
      this.route('mixins');
      this.route('functions');
    });

    this.route('utilities', function() {
      this.route('spacing');
      this.route('borders');
      this.route('colors');
      this.route('typography');
      this.route('flex');
    });

    // this.route('forms', function() {
    //   this.route('button-links');
    //   this.route('button-groups');
    //   this.route('controls');
    //   this.route('inputs');
    //   this.route('textareas');
    //   this.route('dropdowns');
    //   this.route('date-time-inputs');
    //   this.route('toggles');
    //   this.route('validation');
    //   this.route('fieldsets');
    //   this.route('rows');
    // });
    //
    // this.route('lists', function() {
    //   this.route('items');
    //   this.route('avatars');
    //   this.route('subheadings');
    //   this.route('notices');
    //   this.route('pagination');
    //   this.route('tables');
    // })
    //
    // this.route('data', function() {
    //   this.route('index');
    //   this.route('inline');
    //   this.route('table');
    // });
    //
    // this.route('navigation', function() {
    //   this.route('tabs', function() {
    //     this.route('dogs');
    //     this.route('cats');
    //   });
    //   this.route('breadcrumbs');
    // })
    // this.route('components', function() {
    //   this.route('lists');
    //   this.route('pagination');
    //   this.route('data');
    //   this.route('datalists');
    //   this.route('avatars');
    //   this.route('menus');
    //   this.route('preamble');
    //   this.route('notice');
    //   this.route('pills');
    //   this.route('callout');
    //   this.route('splash');
    // });


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

  this.route('styleguide');
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