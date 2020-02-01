import LinkComponent from '@ember/routing/link-component';
import layout from '../templates/components/uxs-link';
import Textable from '../mixins/textable';

export default LinkComponent.extend(Textable, {
  layout
});