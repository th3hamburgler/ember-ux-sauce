import Controller from '@ember/controller';
import {
  alias
} from '@ember/object/computed';
import {
  inject as controller
} from '@ember/controller';

export default Controller.extend({
  // Controller
  resourceController: controller('app.resource'),
  // Computed
  person: alias('resourceController.model'),
  cars: alias('model'),
});