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

export default Component.extend(BEMComponent, Testable, {
  // Attributes
  base: 'uxs-pagination',
  layout,
  resultsText: "Results per page",
  countPrefix: "",
  // Computed
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