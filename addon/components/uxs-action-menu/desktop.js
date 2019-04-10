import Component from '@ember/component';
import layout from '../../templates/components/uxs-action-menu/desktop';
import linkToParams from 'ember-ux-sauce/utils/link-to-params';
import {
  computed,
  get
} from '@ember/object';

export default Component.extend({
  layout,
  style: 'dark',
  items: computed('routes', 'model.id', function() {
    const items = [],
      routes = get(this, 'routes'),
      modelId = get(this, 'model.id');

    routes.forEach((route) => {
      const title = get(route, 'title'),
        routeName = get(route, 'route'),
        queryParams = get(route, 'queryParams'),
        item = linkToParams(title, routeName, modelId, queryParams);

      items.push(item);
    });

    return items;
  })
});