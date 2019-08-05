import Component from '@ember/component';
import layout from '../templates/components/uxs-list-menu';
import linkToParams from 'ember-ux-sauce/utils/link-to-params';
import {
  computed,
  get
} from '@ember/object';
import {
  merge
} from '@ember/polyfills';

export default Component.extend({
  // Properties
  layout,
  tagName: '',
  items: computed('routes', 'model.id', function() {
    const items = [],
      routes = get(this, 'routes'),
      modelId = get(this, 'model.id');

    routes.forEach((route) => {
      const title = get(route, 'title'),
        routeName = get(route, 'route'),
        queryParams = merge(get(this, 'queryParams'), get(route, 'queryParams')),
        params = linkToParams(title, routeName, modelId, queryParams);

      items.push({
        params,
        disabled: route.disabled,
        currentWhen: (route.currentWhen ? route.currentWhen : routeName)
      });
    });

    return items;
  }),
  // Actions
  actions: {
    selectAction(item) {
      const action = get(this, 'onClick');
      if (action) {
        action(item);
      }
    }
  }
});