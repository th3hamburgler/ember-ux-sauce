import Component from '@ember/component';
import layout from '../templates/components/uxs-list-notice';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';
import Testable from 'ember-ux-sauce/mixins/testable';
import {
  get
} from '@ember/object';
import {
  bool
} from '@ember/object/computed';

/**
  Used in lists to highlight certain contexts. e.g. an active filter.

  ```hbs
  {{uxs-list as |list|}}
    {{list.notice text}}
  {{/uxs-list}}
  ```

  @class UXSListNotice
*/
const Notice = Component.extend(BEMComponent, Testable, {
  //
  // Event
  // ---------
  /**
   * Fired when an error occurs...
   *
   * @event error
   * @param {String} msg A description of...
   */
  //
  // Arguments
  // ---------
  /**
    The BEM base name for this component

    @argument base
    @type     String
    @default  "uxs-list__notice"
    @public
   */
  base: 'uxs-list__notice',
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
    Sets the notices text string

    @argument text
    @default  null
    @type     String
    @public
  */
  text: null,
  /**
    If set the notice will contain an icon on the left

    @argument icon
    @default  null
    @type     String
    @public
  */
  icon: null,
  /**
    If set the notice will contain a action button on the right

    @argument actionText
    @default  null
    @type     String
    @public
  */
  actionText: null,
  /**
    Set the style of the component.

    UXS ships with the following stock styles: primary, accent, warning, error, dark, grey, mid, light & white.

    You can customise your component by using any string here and adding your own css for the custom modifier e.g. _.button--my-custom-style_

    @argument style
    @type     String
    @default  null
    @public
   */
  style: null,
  /**
    This event is fired when the notice button is clicked.
    Requires actionText to be set. No params are set by default.

    @argument onClick
    @default  null
    @type     Action
    @public
  */
  onClick: null,
  // Computed
  hasText: bool('text'),
  hasIcon: bool('icon'),
  hasAction: bool('actionText'),
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers(['*style']);
  },
  // Actions
  actions: {
    action() {
      const action = get(this, 'onClick');
      if (action) {
        action();
      }
    }
  }
});

Notice.reopenClass({
  positionalParams: ["text"],
});

export default Notice;