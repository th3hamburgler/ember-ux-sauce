import Component from '@ember/component';
import layout from '../../templates/components/uxs-nav-bar/drawer';

export default Component.extend({
  /**
    Path to the component template file

    @property layout
    @type     String
    @private
    */
  layout,
  /**
   The element name of the base component

   @argument tagName
   @type     String
   @default  ''
   @public
   */
  tagName: '',
  /**
   Set to true to display the nav drawer

   @argument showDrawer
   @type     Boolean
   @default  false
   @public
   */
  showDrawer: false,
});