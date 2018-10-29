import Mixin from '@ember/object/mixin';
import Accessible from 'ember-ux-sauce/mixins/accessible';
import Alignable from '../mixins/alignable';
import Colorable from '../mixins/colorable';
import Sizable from '../mixins/sizeable';
import Weightable from '../mixins/weightable';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
/**
  A mixing to give a component text like functionality

  @class Textable
  @public
*/
export default Mixin.create(Accessible, Alignable, Colorable, Sizable, Testable, Weightable, BEMComponent, {
  //
  // Arguments
  // ---------
  /**
    The text align direction, "left", "center", "right" or "justified". Defaults to no alignment (inheret)

    @property align
    @default  null
    @type     String
  */
  align: null,
  /**
    Define the size of the component. Standard options are "giant", "huge", "large", "medium", "small", or "tiny". Defaults to no size (inhered)

    @property size
    @default null
    @type String
  */
  size: null,
  /**
    Define the weight of the component. Standard options are "bold", "medium" or "light". Defaults to no weight (inhered)

    @property weight
    @default null
    @type String
  */
  weight: null,
});