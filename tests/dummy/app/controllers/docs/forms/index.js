import Controller from '@ember/controller';
import {
  get,
  set
} from '@ember/object';
export default Controller.extend({
  init() {
    this._super(...arguments);
    set(this, 'genders', ['Female', 'Male', 'Unspecified']);
  },
  // Actions
  // BEGIN-SNIPPET form-demo
  actions: {
    save(model) {
      window.alert(`Save model ${get(model, 'firstName')}`);
    }
  },
  // END-SNIPPET
});