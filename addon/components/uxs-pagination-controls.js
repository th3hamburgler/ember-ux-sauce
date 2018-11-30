import Component from '@ember/component';
import layout from '../templates/components/uxs-pagination-controls';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  set,
  get,
  getProperties,
  computed
} from '@ember/object';

/**
  Used to provide controlls to change page or size of paginated data

  ```hbs
  {{uxs-pagination-controls
    size=model.meta.size
    page=model.meta.page
    total=model.meta.total
    style=style
    onChange=(action "paginateResults")
  }}
  ```

  @class UXSPaginationControls
*/
export default Component.extend(BEMComponent, Testable, {
  layout,
  //
  // Arguments
  // ---------
  /**
    The name of the component, will be used as the value for all test selectors.
    If set to false the test selector is not rendered.

    @argument name
    @default  true
    @type     {(boolean,string)}
    @public
  */
  name: true,
  /**
    The BEM base name for this component

    @argument base
    @type     String
    @default  "uxs-list__notice"
    @public
   */
  base: 'uxs-pagination',
  /**
    The text of the pagination label

    @argument resultsLabel
    @type     String
    @default  "Results per page"
    @public
   */
  resultsLabel: "Results per page",
  /**
    Add any text to the start of the "1 - 25 of 360" text.

    e.g. "Showing 1 - 25 of 360"

    @argument countPrefix
    @type     String
    @default  ""
    @public
   */
  countPrefix: "",
  /**
    Add any text to the end of the "1 - 25 of 360" text.

    e.g. "1 - 25 of 360 aliens"

    @argument countSuffix
    @type     String
    @default  ""
    @public
   */
  countSuffix: "",
  /**
    Set the style of the component.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.button--my-custom-style_

    @argument style
    @type     String
    @default  "light"
    @public
   */
  style: "light",
  /**
    The size of a "page"

    @argument size
    @type     Int
    @default  null
    @public
   */
  size: null,
  /**
    The index of the current page

    @argument page
    @type     Int
    @default  null
    @public
   */
  page: null,
  /**
    The total number of records

    @argument total
    @type     Int
    @default  null
    @public
   */
  total: null,
  /**
    This event is fired when the user changes the page size or the next and prev
    buttons are clicked

    @argument onChange
    @default  null
    @type     Action
    @public
  */
  onChange: null,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['*style']);
  },
  // Computed
  resultsText: computed('countPrefix', 'start', 'end', 'total', 'countSuffix', function() {
    return `${get(this, 'countPrefix')} ${get(this, 'start')} - ${get(this, 'end')} of ${get(this, 'total')} ${get(this, 'countSuffix')}`;
  }),
  pages: computed('total', 'size', function() {
    return get(this, 'total') / get(this, 'size');
  }),
  start: computed('page', 'size', function() {
    const page = get(this, 'page') - 1;
    const size = get(this, 'size');

    return (page * size) + 1;
  }),
  end: computed('start', 'size', 'total', function() {
    const start = get(this, 'start');
    const size = get(this, 'size');
    const total = get(this, 'total');

    return Math.min(total, start + size - 1);
  }),
  isPreviousButtonDisabled: computed.lte('page', 1),
  isNextButtonDisabled: computed('end', 'total', function() {
    return get(this, 'end') >= get(this, 'total');
  }),
  handleChange() {
    const props = getProperties(this, 'page', 'size');

    get(this, 'onChange')(props)
  },
  actions: {
    changeSize(e) {
      set(this, 'size', parseInt(e.target.value));
      set(this, 'page', 1);
      this.handleChange();
    },
    changePage(page) {
      set(this, 'page', parseInt(page));
      this.handleChange();
    }
  }
});