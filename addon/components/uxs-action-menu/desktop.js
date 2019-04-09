import Component from '@ember/component';
import layout from '../../templates/components/uxs-action-menu/desktop';
import linkToParams from 'ember-ux-sauce/utils/link-to-params';
import {
  computed,
  get
} from '@ember/object';

export default Component.extend({
  layout,
  items: computed('routes', 'model.id', function() {
    const items = [],
      routes = get(this, 'routes'),
      modelId = get(this, 'model.id');

    routes.forEach((route) => {
      const title = get(route, 'title'),
        routeName = get(route, 'route'),
        queryParams = get(route, 'queryParams');

      items.push(linkToParams(title, routeName, modelId, queryParams));
    });

    return items;
  })
});