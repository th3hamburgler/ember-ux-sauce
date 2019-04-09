import {
  isArray
} from '@ember/array';
import {
  isEmpty
} from '@ember/utils';
import {
  A
} from '@ember/array';

export default function linkToParams(title, routeName, params, queryParams) {
  let obj = A([]);

  if (!isEmpty(title)) {
    // add title if set
    obj.push(title);
  }
  // add route
  obj.push(routeName);

  // add route params
  if (isArray(params)) {

    params.forEach((p) => {
      obj.push(p);
    });

  } else if (params) {
    obj.push(params);
  }

  // add query params
  if (queryParams) {
    obj.push({
      isQueryParams: true,
      values: queryParams
    });
  }
  return obj;
}