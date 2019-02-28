import {
  helper
} from '@ember/component/helper';
import {
  htmlSafe
} from '@ember/string';
import {
  isEmpty
} from '@ember/utils';

/* *
 * This helper should be used to wrap any text that might be truncated in the UI. It will add a title tag so the full text is visible to the user on hover.
 * */
export function truncate([text, title /*, ...rest*/ ]) {
  if (isEmpty(title)) {
    title = text;
  }
  return htmlSafe(`<span class="truncate-text" title="${title}">${text}</span>`);
}

export default helper(truncate);