import Mixin from '@ember/object/mixin';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import Alignable from '../mixins/alignable';
import Colorable from '../mixins/colorable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

export default Mixin.create(Accessible, Alignable, Colorable, Testable, BEMComponent, {});