import Helper from '@ember/component/helper';
import {
  INDEX_ACTIONS,
  RESOURCE_ACTIONS
} from '../utils/consts/people';


export default Helper.extend({
  compute([model, type]) {
    if (model === "person") {
      if (type === "index") {
        return INDEX_ACTIONS;
      }
      if (type === "resource") {
        return RESOURCE_ACTIONS;
      }
    }
    return [];
  }
});