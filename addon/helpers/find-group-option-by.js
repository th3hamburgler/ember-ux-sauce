import {
  helper
} from '@ember/component/helper';
import {
  get
} from '@ember/object';

export function findGroupOptionBy([collection, attrName, attrValue]) {
  for(let group of collection){
    for(let item of group.options){
      if(get(item, attrName) == attrValue){
        return item;
      }
    }
  }
  return null;
}

export default helper(findGroupOptionBy);