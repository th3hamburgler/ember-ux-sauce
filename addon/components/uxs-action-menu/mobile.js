import Component from '@ember/component';
import layout from '../../templates/components/uxs-action-menu/mobile';
import linkToParams from 'ember-ux-sauce/utils/link-to-params';
import {
  computed,
  get
} from '@ember/object';

export default Component.extend({
  // Attributes
  layout,
  loading: false,
  // Computed
  items: computed('routes', 'model.id', 'loading', function() {
    const items = [],
      routes = get(this, 'routes'),
      modelId = get(this, 'model.id');

    routes.forEach((route) => {
      const title = get(route, 'title'),
        routeName = get(route, 'route'),
        queryParams = get(route, 'queryParams'),
        params = linkToParams(title, routeName, modelId, queryParams);

      items.push({
        params,
        disabled: route.disabled,
        currentWhen: (route.currentWhen ? route.currentWhen : routeName)
      });
    });

    return items;
  })
});