import DS from 'ember-data';
import Validations from '../mixins/validations/session';

const {
  attr
} = DS;

export default DS.Model.extend(Validations, {
  // Attributes
  username: attr('string'),
  passsword: attr('string'),
});