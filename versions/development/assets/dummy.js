'use strict';



;define('dummy/adapters/-addon-docs', ['exports', 'ember-cli-addon-docs/adapters/-addon-docs'], function (exports, _addonDocs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _addonDocs.default;
    }
  });
});
;define('dummy/adapters/class', ['exports', 'ember-cli-addon-docs/adapters/class'], function (exports, _class) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
});
;define('dummy/adapters/component', ['exports', 'ember-cli-addon-docs/adapters/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/adapters/module', ['exports', 'ember-cli-addon-docs/adapters/module'], function (exports, _module) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _module.default;
    }
  });
});
;define('dummy/adapters/project', ['exports', 'ember-cli-addon-docs/adapters/project'], function (exports, _project) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _project.default;
    }
  });
});
;define('dummy/app', ['exports', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('dummy/breakpoints', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    desktop: '(min-width: 992px) and (max-width: 1200px)',
    jumbo: '(min-width: 1201px)'
  };
});
;define("dummy/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _lfGetOutletState) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _lfGetOutletState.default;
    }
  });
});
;define('dummy/components/api/x-class', ['exports', 'ember-cli-addon-docs/components/api/x-class/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/api/x-component', ['exports', 'ember-cli-addon-docs/components/api/x-component/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/api/x-import-path', ['exports', 'ember-cli-addon-docs/components/api/x-import-path/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/api/x-meta-panel', ['exports', 'ember-cli-addon-docs/components/api/x-meta-panel/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/api/x-meta-panel/header', ['exports', 'ember-cli-addon-docs/components/api/x-meta-panel/header/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/api/x-module', ['exports', 'ember-cli-addon-docs/components/api/x-module/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/api/x-section', ['exports', 'ember-cli-addon-docs/components/api/x-section/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/api/x-sections', ['exports', 'ember-cli-addon-docs/components/api/x-sections/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/api/x-toggles', ['exports', 'ember-cli-addon-docs/components/api/x-toggles/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/args-table', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({}).reopenClass({
    positionalParams: ['namespace']
  });
});
;define('dummy/components/args-table/checkbox', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'td'
  }).reopenClass({
    positionalParams: ['value']
  });
});
;define('dummy/components/args-table/input', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'td'
  }).reopenClass({
    positionalParams: ['value']
  });
});
;define('dummy/components/args-table/label', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'td',
    classNames: ['docs-w-32']
  }).reopenClass({
    positionalParams: ['label']
  });
});
;define('dummy/components/args-table/row', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'tr',
    // Computed
    name: Ember.computed('namespace', '_name', function () {
      const namespace = Ember.get(this, 'namespace'),
            name = Ember.get(this, '_name');
      if (namespace) {
        return `${namespace}-${name}`;
      }
      return name;
    })
  }).reopenClass({
    positionalParams: ['_name']
  });
});
;define('dummy/components/args-table/type', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'td'
  }).reopenClass({
    positionalParams: ['type']
  });
});
;define('dummy/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
;define('dummy/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
;define('dummy/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define('dummy/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define("dummy/components/code-snippet", ["exports", "dummy/snippets"], function (exports, _snippets) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /* global require */
  var Highlight = self.require('highlight.js');

  exports.default = Ember.Component.extend({
    tagName: 'pre',
    classNameBindings: ['language'],
    unindent: true,

    _unindent: function (src) {
      if (!this.get('unindent')) {
        return src;
      }
      var match,
          min,
          lines = src.split("\n").filter(l => l !== '');
      for (var i = 0; i < lines.length; i++) {
        match = /^[ \t]*/.exec(lines[i]);
        if (match && (typeof min === 'undefined' || min > match[0].length)) {
          min = match[0].length;
        }
      }
      if (typeof min !== 'undefined' && min > 0) {
        src = src.replace(new RegExp("^[ \t]{" + min + "}", 'gm'), "");
      }
      return src;
    },

    source: Ember.computed('name', function () {
      var snippet = this.get('name').split('/').reduce((dir, name) => dir && dir[name], _snippets.default);

      return this._unindent((snippet || "").replace(/^(\s*\n)*/, '').replace(/\s*$/, ''));
    }),

    didInsertElement: function () {
      Highlight.highlightBlock(this.get('element'));
    },

    language: Ember.computed('name', function () {
      var m = /\.(\w+)$/i.exec(this.get('name'));
      if (m) {
        switch (m[1].toLowerCase()) {
          case 'js':
            return 'javascript';
          case 'coffee':
            return 'coffeescript';
          case 'hbs':
            return 'htmlbars';
          case 'css':
            return 'css';
          case 'scss':
            return 'scss';
          case 'less':
            return 'less';
          case 'emblem':
            return 'emblem';
          case 'ts':
            return 'typescript';
        }
      }
    })
  });
});
;define('dummy/components/copy-button', ['exports', 'ember-cli-clipboard/components/copy-button'], function (exports, _copyButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _copyButton.default;
    }
  });
});
;define('dummy/components/docs-demo', ['exports', 'ember-cli-addon-docs/components/docs-demo/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-demo/x-example', ['exports', 'ember-cli-addon-docs/components/docs-demo/x-example/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-demo/x-snippet', ['exports', 'ember-cli-addon-docs/components/docs-demo/x-snippet/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-header', ['exports', 'ember-cli-addon-docs/components/docs-header/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-header/link', ['exports', 'ember-cli-addon-docs/components/docs-header/link/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-header/search-box', ['exports', 'ember-cli-addon-docs/components/docs-header/search-box/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-header/search-result', ['exports', 'ember-cli-addon-docs/components/docs-header/search-result/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-header/search-results', ['exports', 'ember-cli-addon-docs/components/docs-header/search-results/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-header/version-selector', ['exports', 'ember-cli-addon-docs/components/docs-header/version-selector/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-hero', ['exports', 'ember-cli-addon-docs/components/docs-hero/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-keyboard-shortcuts', ['exports', 'ember-cli-addon-docs/components/docs-keyboard-shortcuts/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-link', ['exports', 'ember-cli-addon-docs/components/docs-link/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-logo', ['exports', 'ember-cli-addon-docs/components/docs-logo/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-snippet', ['exports', 'ember-cli-addon-docs/components/docs-snippet/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-svg-icon', ['exports', 'ember-cli-addon-docs/components/docs-svg-icon/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-toggle', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // Arguments
    tagName: 'button',
    // Events
    click() {
      this.toggleProperty('value');
    }
  });
});
;define('dummy/components/docs-viewer', ['exports', 'ember-cli-addon-docs/components/docs-viewer/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-viewer/x-current-page-index', ['exports', 'ember-cli-addon-docs/components/docs-viewer/x-current-page-index/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-viewer/x-main', ['exports', 'ember-cli-addon-docs/components/docs-viewer/x-main/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-viewer/x-nav-item', ['exports', 'ember-cli-addon-docs/components/docs-viewer/x-nav-item/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-viewer/x-nav-list', ['exports', 'ember-cli-addon-docs/components/docs-viewer/x-nav-list/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-viewer/x-nav', ['exports', 'ember-cli-addon-docs/components/docs-viewer/x-nav/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs-viewer/x-section', ['exports', 'ember-cli-addon-docs/components/docs-viewer/x-section/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/docs/uxs-avatar/custom-text-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    bordered: false,
    rounded: true
  });
});
;define('dummy/components/docs/uxs-avatar/icon-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    bordered: false,
    rounded: true
  });
});
;define('dummy/components/docs/uxs-avatar/image-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    bordered: false,
    rounded: true
  });
});
;define('dummy/components/docs/uxs-avatar/text-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    bordered: false,
    rounded: true
  });
});
;define('dummy/components/docs/uxs-button-group/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    align: null,
    disabled: false,
    padded: false,
    row: false,
    size: null
  });
});
;define('dummy/components/docs/uxs-button-link/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    disabled: false,
    inline: false,
    loading: false,
    loadingText: "Loading...",
    naked: false,
    text: 'QUICK START'
  });
});
;define('dummy/components/docs/uxs-button/action-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // BEGIN-SNIPPET button-action-demo
    actions: {
      buttonPressed(name) {
        alert(`A button called "${name}" has been hit!`);
      }
    }
    // END-SNIPPET
  });
});
;define('dummy/components/docs/uxs-button/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    disabled: false,
    inline: false,
    loading: false,
    loadingText: "Loading...",
    naked: false,
    text: 'DEMO BUTTON'
  });
});
;define('dummy/components/docs/uxs-content/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    align: null,
    color: null,
    size: null,
    style: null,
    text: 'The quick brown fox jumps over the lazy dog',
    weight: null
  });
});
;define('dummy/components/docs/uxs-datalist/all-styles', ['exports', 'dummy/utils/consts/styles'], function (exports, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    styles: _styles.default
  });
});
;define('dummy/components/docs/uxs-datalist/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    disabled: true
  });
});
;define("dummy/components/docs/uxs-datalist/item-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    label: "The Label",
    value: "The Value",
    tip: "Nibh eget parturient dapibus commodo a leo.",
    empty: "N/A"
  });
});
;define('dummy/components/docs/uxs-detail/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    align: null,
    color: null,
    size: null,
    style: null,
    text: 'The quick brown fox jumps over the lazy dog',
    weight: null
  });
});
;define('dummy/components/docs/uxs-dropdown/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // Attributes
    name: 'Miguel',
    names: null,
    disabled: false,
    inline: false,
    placeholder: 'enter text',
    style: null,
    type: 'text',
    value: '',
    // Computed
    init() {
      this._super(...arguments);
      Ember.set(this, 'nameOptions', ['Stefan', 'Miguel', 'Tomster', 'Pluto']);
      Ember.set(this, 'names', ['Miguel', 'Pluto']);
    },
    // Actions
    actions: {
      select() {}
    }
  });
});
;define('dummy/components/docs/uxs-form-control/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    disabled: false,
    label: 'Username',
    type: 'text',
    value: 'foo',
    tip: 'This is a hint'
  });
});
;define('dummy/components/docs/uxs-form-control/contextual-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    disabled: false,
    label: 'Username',
    type: 'text',
    value: 'foo',
    tip: 'This is a hint'
  });
});
;define('dummy/components/docs/uxs-form-date/all-styles', ['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // Attributes
    date: (0, _moment.default)().format('YYYY-MM-DD'),
    // Actions
    actions: {
      // BEGIN-SNIPPET form-date-time-action
      setDate(dates, format, ref) {
        window.alert({
          dates,
          format,
          ref
        });
      }
    }
  });
});
;define('dummy/components/docs/uxs-form-date/basic-demo', ['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // Attributes
    disabled: false,
    inline: false,
    style: null,
    date: (0, _moment.default)().format('YYYY-MM-DD'),
    time: (0, _moment.default)().format('HH:mm'),
    datetime: (0, _moment.default)().format(),
    // Actions
    actions: {
      // BEGIN-SNIPPET form-date-time-action
      setDate(dates, format, ref) {
        window.alert({
          dates,
          format,
          ref
        });
      },
      setTime(dates, format, ref) {
        window.alert({
          dates,
          format,
          ref
        });
      }
    }
  });
});
;define('dummy/components/docs/uxs-form-input/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // Attributes
    disabled: false,
    inline: false,
    placeholder: 'enter text',
    style: null,
    type: 'text',
    value: '',
    // Actions
    // BEGIN-SNIPPET form-input-basic-demo
    actions: {
      enterPressed(value) {
        window.alert(`${value} entered`);
      }
    }
    // END-SNIPPET
  });
});
;define('dummy/components/docs/uxs-form-textarea/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // Attributes
    disabled: false,
    cols: null,
    rows: 4,
    inline: false,
    placeholder: 'enter text',
    style: null,
    value: '',
    // Actions
    // BEGIN-SNIPPET form-input-basic-demo
    actions: {
      enterPressed(value) {
        window.alert(`${value} entered`);
      }
    }
    // END-SNIPPET
  });
});
;define('dummy/components/docs/uxs-form/model-bound-form', ['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    init() {
      this._super(...arguments);
      Ember.set(this, 'genders', ['Female', 'Male', 'Unspecified']);
      Ember.set(this, 'model', Ember.Object.create({
        title: 'Mr',
        firstName: 'Fabian',
        lastName: 'Wardlaw',
        gender: 'Male',
        email: 'fab@gmail.com',
        bio: 'lorem ipsum...',
        dateOfBirth: (0, _moment.default)('1983-06-28').toDate(),
        datetime: (0, _moment.default)('2018-01-01 20:42').toDate(),
        time: (0, _moment.default)('2010-10-10 11:11').toDate()
      }));
    },
    // Actions
    // BEGIN-SNIPPET model-bound-form.js
    actions: {
      save(model) {
        window.alert(`Save model ${Ember.get(model, 'firstName')}`);
      }
    }
    // END-SNIPPET
  });
});
;define('dummy/components/docs/uxs-form/validation', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      login(model) {
        window.alert(`Login ${model.username}`);
      }
    }
  });
});
;define('dummy/components/docs/uxs-header/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    title: 'Page Title',
    style: 'primary'
  });
});
;define('dummy/components/docs/uxs-header/image-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    image: 'https://www.fillmurray.com/646/250',
    title: 'Page Title',
    style: 'dark'
  });
});
;define('dummy/components/docs/uxs-heading/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    align: null,
    color: null,
    size: null,
    style: null,
    text: 'The quick brown fox jumps over the lazy dog',
    weight: null
  });
});
;define("dummy/components/docs/uxs-icon/action-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    icon: "save",
    // Actions
    // BEGIN-SNIPPET icon-action-demo.js
    actions: {
      save() {
        window.alert("Ola!");
      }
    }
    // END-SNIPPET
  });
});
;define("dummy/components/docs/uxs-icon/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    icon: "check_circle"
  });
});
;define('dummy/components/docs/uxs-list-item/avatar-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    items: Ember.computed(function () {
      return [{
        title: "Item One",
        location: "United Kingdom",
        email: "foo@example.com",
        count: 7
      }, {
        title: "Item Two",
        location: "United Kingdom",
        email: "bar@example.com",
        count: 99
      }, {
        title: "Item Three",
        location: "France",
        email: "boop@example.com",
        count: 36
      }];
    })
  });
});
;define('dummy/components/docs/uxs-list-item/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    items: Ember.computed(function () {
      return [{
        title: "Item One",
        location: "United Kingdom",
        email: "foo@example.com",
        count: 7
      }, {
        title: "Item Two",
        location: "United Kingdom",
        email: "bar@example.com",
        count: 99
      }, {
        title: "Item Three",
        location: "France",
        email: "boop@example.com",
        count: 36
      }];
    })
  });
});
;define('dummy/components/docs/uxs-list-item/content-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    items: Ember.computed(function () {
      return [{
        title: "Item One",
        location: "United Kingdom",
        email: "foo@example.com",
        count: 7
      }, {
        title: "Item Two",
        location: "United Kingdom",
        email: "bar@example.com",
        count: 99
      }, {
        title: "Item Three",
        location: "France",
        email: "boop@example.com",
        count: 36
      }];
    })
  });
});
;define("dummy/components/docs/uxs-list-notice/all-styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      noticeAction() {
        window.alert("List Notice Hit");
      }
    }
  });
});
;define("dummy/components/docs/uxs-list-notice/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    text: "Displaying Filtered Results",
    actions: {
      noticeAction() {
        window.alert("List Notice Hit");
      }
    }
  });
});
;define("dummy/components/docs/uxs-list-notice/icon-action-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    text: "Displaying Filtered Results",
    icon: "filter_list",
    actionText: "Clear",
    actions: {
      noticeAction() {
        window.alert("List Notice Hit");
      }
    }
  });
});
;define('dummy/components/docs/uxs-list/subheading/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    init() {
      this._super(...arguments);
      Ember.set(this, 'bordered', true);
      Ember.set(this, 'title', 'My Subheading');
    }
  });
});
;define('dummy/components/docs/uxs-list/subheading/yield-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    init() {
      this._super(...arguments);
      Ember.set(this, 'bordered', true);
      Ember.set(this, 'toggled', false);
      Ember.set(this, 'title', 'My Subheading');
    }
  });
});
;define('dummy/components/docs/uxs-navbar/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    style: 'grey',
    title: '',
    fixed: false
  });
});
;define('dummy/components/docs/uxs-pagination/all-styles', ['exports', 'dummy/utils/consts/styles'], function (exports, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    styles: _styles.default,
    // Computed
    model: Ember.computed(function () {
      return new Ember.Object({
        meta: {
          size: 25,
          page: 2,
          total: 250
        }
      });
    }),
    // Actions
    // BEGIN-SNIPPET pagination-all-styles-demo.js
    actions: {
      paginateResults(pagination) {
        window.alert(`page = ${pagination.page},  size = ${pagination.size}`);
      }
    }
    // END-SNIPPET
  });
});
;define('dummy/components/docs/uxs-pagination/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    style: "light",
    resultsLabel: "Results per page",
    countPrefix: "",
    countSuffix: "",
    // Computed
    model: Ember.computed(function () {
      return new Ember.Object({
        meta: {
          size: 25,
          page: 2,
          total: 250
        }
      });
    }),
    // Actions
    // BEGIN-SNIPPET pagination-basic-demo.js
    actions: {
      paginateResults(pagination) {
        window.alert(`page = ${pagination.page},  size = ${pagination.size}`);
      }
    }
    // END-SNIPPET
  });
});
;define('dummy/components/docs/uxs-pane/main-aside', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    padded: true,
    mainStyle: 'white',
    asideStyle: 'light'
  });
});
;define('dummy/components/docs/uxs-pane/single', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    padded: true,
    style: 'white'
  });
});
;define('dummy/components/docs/uxs-pane/splash', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    padded: true,
    style: 'white'
  });
});
;define('dummy/components/docs/uxs-pane/split', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    padded: true,
    paneTwoStyle: 'white',
    paneOneStyle: 'light'
  });
});
;define('dummy/components/docs/uxs-pane/threes', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    padded: true,
    indexStyle: 'light',
    detailStyle: 'white',
    asideStyle: 'light'
  });
});
;define('dummy/components/docs/uxs-splash/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    init() {
      this._super(...arguments);
      Ember.set(this, 'align', 'center');
    }
  });
});
;define('dummy/components/docs/uxs-subheading/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    align: null,
    color: null,
    size: null,
    style: null,
    text: 'The quick brown fox jumps over the lazy dog',
    weight: null
  });
});
;define('dummy/components/docs/uxs-table/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    fullWidth: false
  });
});
;define('dummy/components/docs/uxs-tabs/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    init() {
      this._super(...arguments);
      Ember.set(this, 'align', 'center');
      Ember.set(this, 'disabled', false);
    },
    // Actions
    actions: {
      swimFish() {
        window.alert("Swim fishy, swim");
      }
    }
  });
});
;define('dummy/components/docs/uxs-text/basic-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    align: null,
    color: null,
    size: null,
    style: null,
    text: 'The quick brown fox jumps over the lazy dog',
    weight: null
  });
});
;define('dummy/components/docs/uxs-window/image-demo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    image: 'https://placeimg.com/2560/1600/any/grayscale'
  });
});
;define('dummy/components/ember-flatpickr', ['exports', 'ember-flatpickr/components/ember-flatpickr'], function (exports, _emberFlatpickr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberFlatpickr.default;
    }
  });
});
;define('dummy/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _positionedContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
;define('dummy/components/ember-modal-dialog/-basic-dialog', ['exports', 'ember-modal-dialog/components/basic-dialog'], function (exports, _basicDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});
;define('dummy/components/ember-modal-dialog/-in-place-dialog', ['exports', 'ember-modal-dialog/components/in-place-dialog'], function (exports, _inPlaceDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});
;define('dummy/components/ember-modal-dialog/-liquid-dialog', ['exports', 'ember-modal-dialog/components/liquid-dialog'], function (exports, _liquidDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});
;define('dummy/components/ember-modal-dialog/-liquid-tether-dialog', ['exports', 'ember-modal-dialog/components/liquid-tether-dialog'], function (exports, _liquidTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});
;define('dummy/components/ember-modal-dialog/-tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _tetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
;define('dummy/components/ember-tether', ['exports', 'ember-tether/components/ember-tether'], function (exports, _emberTether) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberTether.default;
    }
  });
});
;define('dummy/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
;define('dummy/components/etw/module-section', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: ''
  });
});
;define('dummy/components/etw/module-style-detail', ['exports', 'ember-cli-tailwind/utils/classes-for-module-style'], function (exports, _classesForModuleStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    etwTailwindStyleguide: Ember.inject.service(),
    moduleStyle: Ember.computed.reads('etwTailwindStyleguide.selectedModuleStyle'),

    activeResponsiveClass: 'all',
    activeState: 'none',

    detailStyles: Ember.computed('moduleStyle', 'activeResponsiveClass', 'activeState', function () {
      let moduleStyle = this.moduleStyle;
      let activeResponsiveClass = this.activeResponsiveClass;
      let responsivePrefix = activeResponsiveClass === 'all' ? '' : `${activeResponsiveClass}:`;
      let activeState = this.activeState;
      let statePrefix = activeState === 'none' ? '' : `${activeState}:`;

      return (0, _classesForModuleStyle.default)(moduleStyle).map(cssClass => {
        return `${responsivePrefix}${statePrefix}${cssClass}`;
      });
    }),

    actions: {
      highlightStyle(style) {
        this.set('highlightedStyle', style);
        Ember.run.later(() => {
          this.set('highlightedStyle', null);
        }, 1500);
      }
    }

  });
});
;define('dummy/components/etw/module-style-example', ['exports', 'ember-cli-tailwind/utils/classes-for-module-style'], function (exports, _classesForModuleStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: '',
    etwTailwindStyleguide: Ember.inject.service(),

    // Passed in
    moduleStyle: null,

    classesForModuleStyle: Ember.computed('moduleStyle', function () {
      return (0, _classesForModuleStyle.default)(this.moduleStyle);
    }),

    actions: {
      selectModuleStyle() {
        this.etwTailwindStyleguide.set('selectedModuleStyle', this.moduleStyle);
      }
    }

  });
});
;define("dummy/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _illiquidModel) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _illiquidModel.default;
    }
  });
});
;define("dummy/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidBind) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidBind.default;
    }
  });
});
;define("dummy/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidChild) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidChild.default;
    }
  });
});
;define("dummy/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidContainer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidContainer.default;
    }
  });
});
;define("dummy/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidIf) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidIf.default;
    }
  });
});
;define("dummy/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidMeasured) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.default;
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.measure;
    }
  });
});
;define("dummy/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidOutlet) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidOutlet.default;
    }
  });
});
;define("dummy/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidSpacer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSpacer.default;
    }
  });
});
;define('dummy/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidSync) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidSync.default;
    }
  });
});
;define("dummy/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidUnless) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidUnless.default;
    }
  });
});
;define("dummy/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidVersions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidVersions.default;
    }
  });
});
;define('dummy/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _modalDialogOverlay) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialogOverlay.default;
    }
  });
});
;define('dummy/components/modal-dialog', ['exports', 'ember-cli-addon-docs/components/modal-dialog/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
;define('dummy/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define('dummy/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
;define('dummy/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
;define('dummy/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
;define('dummy/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
;define('dummy/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
;define('dummy/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
;define('dummy/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define('dummy/components/tether-dialog', ['exports', 'ember-modal-dialog/components/deprecated-tether-dialog'], function (exports, _deprecatedTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _deprecatedTetherDialog.default;
    }
  });
});
;define('dummy/components/uxs-app', ['exports', 'ember-ux-sauce/components/uxs-app'], function (exports, _uxsApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsApp.default;
    }
  });
});
;define('dummy/components/uxs-avatar-icon', ['exports', 'ember-ux-sauce/components/uxs-avatar-icon'], function (exports, _uxsAvatarIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsAvatarIcon.default;
    }
  });
});
;define('dummy/components/uxs-avatar-text', ['exports', 'ember-ux-sauce/components/uxs-avatar-text'], function (exports, _uxsAvatarText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsAvatarText.default;
    }
  });
});
;define('dummy/components/uxs-avatar', ['exports', 'ember-ux-sauce/components/uxs-avatar'], function (exports, _uxsAvatar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsAvatar.default;
    }
  });
});
;define('dummy/components/uxs-button-group', ['exports', 'ember-ux-sauce/components/uxs-button-group'], function (exports, _uxsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsButtonGroup.default;
    }
  });
});
;define('dummy/components/uxs-button-link', ['exports', 'ember-ux-sauce/components/uxs-button-link'], function (exports, _uxsButtonLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsButtonLink.default;
    }
  });
});
;define('dummy/components/uxs-button', ['exports', 'ember-ux-sauce/components/uxs-button'], function (exports, _uxsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsButton.default;
    }
  });
});
;define('dummy/components/uxs-content', ['exports', 'ember-ux-sauce/components/uxs-content'], function (exports, _uxsContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsContent.default;
    }
  });
});
;define('dummy/components/uxs-datalist-item', ['exports', 'ember-ux-sauce/components/uxs-datalist-item'], function (exports, _uxsDatalistItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsDatalistItem.default;
    }
  });
});
;define('dummy/components/uxs-datalist', ['exports', 'ember-ux-sauce/components/uxs-datalist'], function (exports, _uxsDatalist) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsDatalist.default;
    }
  });
});
;define('dummy/components/uxs-dd', ['exports', 'ember-ux-sauce/components/uxs-dd'], function (exports, _uxsDd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsDd.default;
    }
  });
});
;define('dummy/components/uxs-detail', ['exports', 'ember-ux-sauce/components/uxs-detail'], function (exports, _uxsDetail) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsDetail.default;
    }
  });
});
;define('dummy/components/uxs-div', ['exports', 'ember-ux-sauce/components/uxs-div'], function (exports, _uxsDiv) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsDiv.default;
    }
  });
});
;define('dummy/components/uxs-dl', ['exports', 'ember-ux-sauce/components/uxs-dl'], function (exports, _uxsDl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsDl.default;
    }
  });
});
;define('dummy/components/uxs-dt', ['exports', 'ember-ux-sauce/components/uxs-dt'], function (exports, _uxsDt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsDt.default;
    }
  });
});
;define('dummy/components/uxs-flatpickr', ['exports', 'ember-ux-sauce/components/uxs-flatpickr'], function (exports, _uxsFlatpickr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsFlatpickr.default;
    }
  });
});
;define('dummy/components/uxs-form-control-row', ['exports', 'ember-ux-sauce/components/uxs-form-control-row'], function (exports, _uxsFormControlRow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsFormControlRow.default;
    }
  });
});
;define('dummy/components/uxs-form-control', ['exports', 'ember-ux-sauce/components/uxs-form-control'], function (exports, _uxsFormControl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsFormControl.default;
    }
  });
});
;define('dummy/components/uxs-form-date', ['exports', 'ember-ux-sauce/components/uxs-form-date'], function (exports, _uxsFormDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsFormDate.default;
    }
  });
});
;define('dummy/components/uxs-form-datetime', ['exports', 'ember-ux-sauce/components/uxs-form-datetime'], function (exports, _uxsFormDatetime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsFormDatetime.default;
    }
  });
});
;define('dummy/components/uxs-form-dropdown-multiple', ['exports', 'ember-ux-sauce/components/uxs-form-dropdown-multiple'], function (exports, _uxsFormDropdownMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsFormDropdownMultiple.default;
    }
  });
});
;define('dummy/components/uxs-form-dropdown', ['exports', 'ember-ux-sauce/components/uxs-form-dropdown'], function (exports, _uxsFormDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsFormDropdown.default;
    }
  });
});
;define('dummy/components/uxs-form-error', ['exports', 'ember-ux-sauce/components/uxs-form-error'], function (exports, _uxsFormError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsFormError.default;
    }
  });
});
;define('dummy/components/uxs-form-input', ['exports', 'ember-ux-sauce/components/uxs-form-input'], function (exports, _uxsFormInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsFormInput.default;
    }
  });
});
;define('dummy/components/uxs-form-label', ['exports', 'ember-ux-sauce/components/uxs-form-label'], function (exports, _uxsFormLabel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsFormLabel.default;
    }
  });
});
;define('dummy/components/uxs-form-textarea', ['exports', 'ember-ux-sauce/components/uxs-form-textarea'], function (exports, _uxsFormTextarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsFormTextarea.default;
    }
  });
});
;define('dummy/components/uxs-form-time', ['exports', 'ember-ux-sauce/components/uxs-form-time'], function (exports, _uxsFormTime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsFormTime.default;
    }
  });
});
;define('dummy/components/uxs-form-tip', ['exports', 'ember-ux-sauce/components/uxs-form-tip'], function (exports, _uxsFormTip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsFormTip.default;
    }
  });
});
;define('dummy/components/uxs-form-warning', ['exports', 'ember-ux-sauce/components/uxs-form-warning'], function (exports, _uxsFormWarning) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsFormWarning.default;
    }
  });
});
;define('dummy/components/uxs-form', ['exports', 'ember-ux-sauce/components/uxs-form'], function (exports, _uxsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsForm.default;
    }
  });
});
;define('dummy/components/uxs-header', ['exports', 'ember-ux-sauce/components/uxs-header'], function (exports, _uxsHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsHeader.default;
    }
  });
});
;define('dummy/components/uxs-header/background', ['exports', 'ember-ux-sauce/components/uxs-header/background'], function (exports, _background) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _background.default;
    }
  });
});
;define('dummy/components/uxs-heading', ['exports', 'ember-ux-sauce/components/uxs-heading'], function (exports, _uxsHeading) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsHeading.default;
    }
  });
});
;define('dummy/components/uxs-hero', ['exports', 'ember-ux-sauce/components/uxs-hero'], function (exports, _uxsHero) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsHero.default;
    }
  });
});
;define('dummy/components/uxs-icon-link', ['exports', 'ember-ux-sauce/components/uxs-icon-link'], function (exports, _uxsIconLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsIconLink.default;
    }
  });
});
;define('dummy/components/uxs-icon', ['exports', 'ember-ux-sauce/components/uxs-icon'], function (exports, _uxsIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsIcon.default;
    }
  });
});
;define('dummy/components/uxs-li', ['exports', 'ember-ux-sauce/components/uxs-li'], function (exports, _uxsLi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsLi.default;
    }
  });
});
;define('dummy/components/uxs-list-item', ['exports', 'ember-ux-sauce/components/uxs-list-item'], function (exports, _uxsListItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsListItem.default;
    }
  });
});
;define('dummy/components/uxs-list-notice', ['exports', 'ember-ux-sauce/components/uxs-list-notice'], function (exports, _uxsListNotice) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsListNotice.default;
    }
  });
});
;define('dummy/components/uxs-list-subheading', ['exports', 'ember-ux-sauce/components/uxs-list-subheading'], function (exports, _uxsListSubheading) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsListSubheading.default;
    }
  });
});
;define('dummy/components/uxs-list', ['exports', 'ember-ux-sauce/components/uxs-list'], function (exports, _uxsList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsList.default;
    }
  });
});
;define('dummy/components/uxs-list/x-subheading', ['exports', 'ember-ux-sauce/components/uxs-list/x-subheading'], function (exports, _xSubheading) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xSubheading.default;
    }
  });
});
;define('dummy/components/uxs-menu', ['exports', 'ember-ux-sauce/components/uxs-menu'], function (exports, _uxsMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsMenu.default;
    }
  });
});
;define('dummy/components/uxs-menu/item', ['exports', 'ember-ux-sauce/components/uxs-menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define('dummy/components/uxs-menu/link', ['exports', 'ember-ux-sauce/components/uxs-menu/link'], function (exports, _link) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _link.default;
    }
  });
});
;define('dummy/components/uxs-navbar-logo', ['exports', 'ember-ux-sauce/components/uxs-navbar-logo'], function (exports, _uxsNavbarLogo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsNavbarLogo.default;
    }
  });
});
;define('dummy/components/uxs-navbar', ['exports', 'ember-ux-sauce/components/uxs-navbar'], function (exports, _uxsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsNavbar.default;
    }
  });
});
;define('dummy/components/uxs-navbar/desktop-nav', ['exports', 'ember-ux-sauce/components/uxs-navbar/desktop-nav'], function (exports, _desktopNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _desktopNav.default;
    }
  });
});
;define('dummy/components/uxs-navbar/mobile-nav', ['exports', 'ember-ux-sauce/components/uxs-navbar/mobile-nav'], function (exports, _mobileNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mobileNav.default;
    }
  });
});
;define('dummy/components/uxs-notice', ['exports', 'ember-ux-sauce/components/uxs-notice'], function (exports, _uxsNotice) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsNotice.default;
    }
  });
});
;define('dummy/components/uxs-ol', ['exports', 'ember-ux-sauce/components/uxs-ol'], function (exports, _uxsOl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsOl.default;
    }
  });
});
;define('dummy/components/uxs-pagination-controls', ['exports', 'ember-ux-sauce/components/uxs-pagination-controls'], function (exports, _uxsPaginationControls) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsPaginationControls.default;
    }
  });
});
;define('dummy/components/uxs-pane', ['exports', 'ember-ux-sauce/components/uxs-pane'], function (exports, _uxsPane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsPane.default;
    }
  });
});
;define('dummy/components/uxs-pill', ['exports', 'ember-ux-sauce/components/uxs-pill'], function (exports, _uxsPill) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsPill.default;
    }
  });
});
;define('dummy/components/uxs-preamble', ['exports', 'ember-ux-sauce/components/uxs-preamble'], function (exports, _uxsPreamble) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsPreamble.default;
    }
  });
});
;define('dummy/components/uxs-search', ['exports', 'ember-ux-sauce/components/uxs-search'], function (exports, _uxsSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsSearch.default;
    }
  });
});
;define('dummy/components/uxs-splash', ['exports', 'ember-ux-sauce/components/uxs-splash'], function (exports, _uxsSplash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsSplash.default;
    }
  });
});
;define('dummy/components/uxs-subheading', ['exports', 'ember-ux-sauce/components/uxs-subheading'], function (exports, _uxsSubheading) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsSubheading.default;
    }
  });
});
;define('dummy/components/uxs-table-cell', ['exports', 'ember-ux-sauce/components/uxs-table-cell'], function (exports, _uxsTableCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsTableCell.default;
    }
  });
});
;define('dummy/components/uxs-table-heading', ['exports', 'ember-ux-sauce/components/uxs-table-heading'], function (exports, _uxsTableHeading) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsTableHeading.default;
    }
  });
});
;define('dummy/components/uxs-table-row', ['exports', 'ember-ux-sauce/components/uxs-table-row'], function (exports, _uxsTableRow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsTableRow.default;
    }
  });
});
;define('dummy/components/uxs-table', ['exports', 'ember-ux-sauce/components/uxs-table'], function (exports, _uxsTable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsTable.default;
    }
  });
});
;define('dummy/components/uxs-tabs', ['exports', 'ember-ux-sauce/components/uxs-tabs'], function (exports, _uxsTabs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsTabs.default;
    }
  });
});
;define('dummy/components/uxs-tabs/item', ['exports', 'ember-ux-sauce/components/uxs-tabs/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define('dummy/components/uxs-tabs/link', ['exports', 'ember-ux-sauce/components/uxs-tabs/link'], function (exports, _link) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _link.default;
    }
  });
});
;define('dummy/components/uxs-text', ['exports', 'ember-ux-sauce/components/uxs-text'], function (exports, _uxsText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsText.default;
    }
  });
});
;define('dummy/components/uxs-toolbar', ['exports', 'ember-ux-sauce/components/uxs-toolbar'], function (exports, _uxsToolbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsToolbar.default;
    }
  });
});
;define('dummy/components/uxs-ul', ['exports', 'ember-ux-sauce/components/uxs-ul'], function (exports, _uxsUl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsUl.default;
    }
  });
});
;define('dummy/components/uxs-window', ['exports', 'ember-ux-sauce/components/uxs-window'], function (exports, _uxsWindow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsWindow.default;
    }
  });
});
;define('dummy/components/x-toggle-label', ['exports', 'ember-toggle/components/x-toggle-label/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/x-toggle-switch', ['exports', 'ember-toggle/components/x-toggle-switch/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/components/x-toggle', ['exports', 'ember-toggle/components/x-toggle/component', 'dummy/config/environment'], function (exports, _component, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const config = _environment.default['ember-toggle'] || {};

  exports.default = _component.default.extend({
    /* eslint-disable ember/avoid-leaking-state-in-ember-objects */
    theme: config.defaultTheme || 'default',
    defaultOffLabel: config.defaultOffLabel || 'Off::off',
    defaultOnLabel: config.defaultOnLabel || 'On::on',
    showLabels: config.defaultShowLabels || false,
    size: config.defaultSize || 'medium'
  });
});
;define('dummy/controllers/application-tailwind', ['exports', 'dummy/tailwind/config/colors', 'dummy/tailwind/config/screens', 'dummy/tailwind/config/fonts', 'dummy/tailwind/config/text-sizes', 'dummy/tailwind/config/font-weights', 'dummy/tailwind/config/line-height', 'dummy/tailwind/config/letter-spacing', 'dummy/tailwind/config/border-widths', 'dummy/tailwind/config/border-radius', 'dummy/tailwind/config/width', 'dummy/tailwind/config/height', 'dummy/tailwind/config/min-width', 'dummy/tailwind/config/min-height', 'dummy/tailwind/config/max-width', 'dummy/tailwind/config/max-height', 'dummy/tailwind/config/padding', 'dummy/tailwind/config/margin', 'dummy/tailwind/config/negative-margin', 'dummy/tailwind/config/shadows', 'dummy/tailwind/config/z-index', 'dummy/tailwind/config/opacity', 'dummy/tailwind/config/svg-fill', 'dummy/tailwind/config/svg-stroke'], function (exports, _colors, _screens, _fonts, _textSizes, _fontWeights, _lineHeight, _letterSpacing, _borderWidths, _borderRadius, _width, _height, _minWidth, _minHeight, _maxWidth, _maxHeight, _padding, _margin, _negativeMargin, _shadows, _zIndex, _opacity, _svgFill, _svgStroke) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const modules = {
    colors: _colors.default,
    screens: _screens.default,
    fonts: _fonts.default,
    textSizes: _textSizes.default,
    fontWeights: _fontWeights.default,
    leading: _lineHeight.default,
    tracking: _letterSpacing.default,
    borderWidths: _borderWidths.default,
    borderRadius: _borderRadius.default,
    width: _width.default,
    height: _height.default,
    minWidth: _minWidth.default,
    minHeight: _minHeight.default,
    maxWidth: _maxWidth.default,
    maxHeight: _maxHeight.default,
    padding: _padding.default,
    margin: _margin.default,
    negativeMargin: _negativeMargin.default,
    shadows: _shadows.default,
    zIndex: _zIndex.default,
    opacity: _opacity.default,
    svgFill: _svgFill.default,
    svgStroke: _svgStroke.default
  };

  exports.default = Ember.Controller.extend({

    /*
      A module style is an object that looks like
       {
        module: 'border-radius',
        name: 'lg',
        value: '.5rem'
      }
    */
    moduleStyles: Ember.computed(function () {
      return Object.keys(modules).reduce((allModules, moduleName) => {
        let hash = modules[moduleName];
        allModules[moduleName] = Object.keys(hash).map(key => {
          return {
            module: Ember.String.dasherize(moduleName),
            name: key,
            value: hash[key]
          };
        });

        return allModules;
      }, {});
    })

  });
});
;define('dummy/controllers/application', ['exports', 'ember-cli-addon-docs/controllers/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _application.default;
    }
  });
});
;define('dummy/controllers/docs/api/class', ['exports', 'ember-cli-addon-docs/controllers/docs/api/class'], function (exports, _class) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
});
;define('dummy/controllers/docs/components/avatars', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    size: 'medium',
    border: false,
    round: false
  });
});
;define('dummy/controllers/docs/components/datalists', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    darkStyles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'success', 'warning', 'error'];
    }),
    lightStyles: Ember.computed(function () {
      return ['mid', 'light', 'white'];
    })
  });
});
;define('dummy/controllers/docs/components/icons', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // Attributes
    icon: 'check',
    style: '',
    disabled: false,
    size: 'small',
    // Actions
    // BEGIN-SNIPPET icon-actions
    actions: {
      save(icon) {
        alert(`icon "${icon}" has been hit!`);
      }
    }
    // END-SNIPPET
  });
});
;define('dummy/controllers/docs/components/lists', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    items: Ember.computed(function () {
      return [{
        title: "Item One",
        location: "United Kingdom",
        email: "foo@example.com",
        count: 7
      }, {
        title: "Item Two",
        location: "United Kingdom",
        email: "bar@example.com",
        count: 99
      }, {
        title: "Item Three",
        location: "France",
        email: "boop@example.com",
        count: 36
      }];
    }),
    styles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'mid', 'light', 'white', 'success', 'warning', 'error'];
    }),
    actions: {
      noticeAction() {
        window.alert("List Notice Hit");
      }
    }
  });
});
;define('dummy/controllers/docs/components/menus', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    styles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'mid', 'light', 'white', 'success', 'warning', 'error'];
    })
  });
});
;define('dummy/controllers/docs/components/notice', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    style: '',
    text: 'This is a standard notice',
    truncated: true
  });
});
;define('dummy/controllers/docs/components/pills', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    size: 'small',
    style: '',
    text: 'default',
    rounded: true
  });
});
;define('dummy/controllers/docs/forms/button-groups', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // Attributes
    align: 'left',
    disabled: false,
    inline: false,
    mini: false
  });
});
;define('dummy/controllers/docs/forms/button-links', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // Attributes
    text: 'Go to Patterns',
    disabled: false,
    inline: false,
    loading: false,
    mini: false,
    naked: false,
    name: 'my-button',
    selected: false,
    style: 'primary'
  });
});
;define('dummy/controllers/docs/forms/controls', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // Attributes
    disabled: false,
    label: 'Username',
    type: 'textarea',
    value: 'foo',
    tip: 'This is a hint',
    warning: '',
    error: '',
    // Computed
    darkStyles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'success', 'warning', 'error'];
    }),
    lightStyles: Ember.computed(function () {
      return ['mid', 'light', 'white'];
    })
  });
});
;define('dummy/controllers/docs/forms/date-time-inputs', ['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // Attributes
    date: (0, _moment.default)().format('YYYY-MM-DD'),
    time: (0, _moment.default)().format('HH:mm'),
    datetime: (0, _moment.default)().format(),
    // Computed
    darkStyles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'success', 'warning', 'error'];
    }),
    lightStyles: Ember.computed(function () {
      return ['mid', 'light', 'white'];
    }),
    // Actions
    actions: {
      // BEGIN-SNIPPET form-date-time-action
      setDate(dates, format, ref) {
        Ember.Logger.log({
          dates,
          format,
          ref
        });
      },
      setTime(dates, format, ref) {
        Ember.Logger.log({
          dates,
          format,
          ref
        });
      }
    }
  });
});
;define('dummy/controllers/docs/forms/dropdowns', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // Attributes
    name: 'Miguel',
    names: null,
    // Computed
    darkStyles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'success', 'warning', 'error'];
    }),
    lightStyles: Ember.computed(function () {
      return ['mid', 'light', 'white'];
    }),
    // Methods
    init() {
      this._super(...arguments);
      Ember.set(this, 'nameOptions', ['Stefan', 'Miguel', 'Tomster', 'Pluto']);
      Ember.set(this, 'names', ['Miguel', 'Pluto']);
    },
    // Actions
    actions: {
      foo() {}
    }
  });
});
;define('dummy/controllers/docs/forms/inputs', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // Attributes
    readonly: false,
    placeholder: 'Placeholder',
    disabled: false,
    size: null,
    maxlength: null,
    min: null,
    max: null,
    step: null,
    type: 'text',
    // Computed
    darkStyles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'success', 'warning', 'error'];
    }),
    lightStyles: Ember.computed(function () {
      return ['mid', 'light', 'white'];
    }),
    // Methods
    init() {
      this._super(...arguments);
      Ember.set(this, 'typeOptions', ['text', 'password', 'number', 'hidden', 'email', 'search', 'tel', 'url']);
    },
    // Actions
    actions: {
      // BEGIN-SNIPPET form-input-action
      enterPressed(value) {
        Ember.Logger.log(`Enter pressed for ${value}`);
      }
      // END-SNIPPET
    }
  });
});
;define('dummy/controllers/docs/forms/rows', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // Attributes
    disabled: false,
    title: 'Ms',
    firstName: 'Frida',
    lastName: 'Wardlaw',
    // Computed
    darkStyles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'success', 'warning', 'error'];
    }),
    lightStyles: Ember.computed(function () {
      return ['mid', 'light', 'white'];
    }),
    // Methods
    init() {
      this._super(...arguments);
      Ember.set(this, 'titles', ['Mr', 'Mrs', 'Ms', 'Mx']);
    }
  });
});
;define('dummy/controllers/docs/forms/textareas', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // Attributes
    value: '',
    rows: 5,
    cols: 20,
    placeholder: 'Placeholder',
    disabled: false,
    maxlength: null,
    wrap: false,
    readonly: false,
    autofocus: false,
    spellcheck: false,
    // Computed
    darkStyles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'success', 'warning', 'error'];
    }),
    lightStyles: Ember.computed(function () {
      return ['mid', 'light', 'white'];
    }),
    // Methods
    init() {
      this._super(...arguments);
    },
    // Actions
    actions: {
      // BEGIN-SNIPPET form-textarea-action
      enterPressed(value) {
        Ember.Logger.log(`Enter pressed for ${value}`);
      }
      // END-SNIPPET
    }
  });
});
;define('dummy/controllers/docs/forms/validation', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      login(model) {
        window.alert(`Login ${model.username}`);
      }
    }
  });
});
;define('dummy/controllers/docs/layout/app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    fixedNav: false
  });
});
;define('dummy/controllers/docs/layout/navbar', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // Attributes
    title: 'AppName',
    fixed: false,
    // Computed
    styles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'mid', 'light', 'white', 'success', 'warning', 'error'];
    })
  });
});
;define('dummy/controllers/docs/layout/pane', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // Attributes
    type: null,
    style: null,
    padded: true,
    // Computed
    styles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'mid', 'light', 'white', 'success', 'warning', 'error'];
    })
  });
});
;define('dummy/controllers/docs/layout/toolbar', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    searchTerm: 'Foo'
  });
});
;define('dummy/controllers/docs/layout/window', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // Computed
    styles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'mid', 'light', 'white', 'success', 'warning', 'error'];
    })
  });
});
;define('dummy/controllers/docs/lists/avatars', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    size: 'medium',
    border: false,
    round: false,
    // Computed
    darkStyles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'success', 'warning', 'error'];
    }),
    lightStyles: Ember.computed(function () {
      return ['mid', 'light', 'white'];
    })
  });
});
;define('dummy/controllers/docs/lists/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    items: Ember.computed(function () {
      return [{
        title: "Item One",
        location: "United Kingdom",
        email: "foo@example.com",
        count: 7
      }, {
        title: "Item Two",
        location: "United Kingdom",
        email: "bar@example.com",
        count: 99
      }, {
        title: "Item Three",
        location: "France",
        email: "boop@example.com",
        count: 36
      }];
    }),
    styles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'mid', 'light', 'white', 'success', 'warning', 'error'];
    }),
    actions: {
      noticeAction() {
        window.alert("List Notice Hit");
      }
    }
  });
});
;define('dummy/controllers/docs/lists/items', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    items: Ember.computed(function () {
      return [{
        title: "Item One",
        location: "United Kingdom",
        email: "foo@example.com",
        count: 7
      }, {
        title: "Item Two",
        location: "United Kingdom",
        email: "bar@example.com",
        count: 99
      }, {
        title: "Item Three",
        location: "France",
        email: "boop@example.com",
        count: 36
      }];
    }),
    styles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'mid', 'light', 'white', 'success', 'warning', 'error'];
    }),
    actions: {
      noticeAction() {
        window.alert("List Notice Hit");
      }
    }
  });
});
;define('dummy/controllers/docs/lists/notices', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    styles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'mid', 'light', 'white', 'success', 'warning', 'error'];
    }),
    actions: {
      noticeAction() {
        window.alert("List Notice Hit");
      }
    }
  });
});
;define('dummy/controllers/docs/lists/subheadings', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    darkStyles: Ember.computed(function () {
      return ['primary', 'accent', 'dark', 'grey', 'success', 'warning', 'error'];
    }),
    lightStyles: Ember.computed(function () {
      return ['mid', 'light', 'white'];
    })
  });
});
;define('dummy/controllers/docs/typography/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    align: 'left',
    giant: false,
    huge: false,
    // Values
    text: "Lorem ipsum dolor sit amet",
    textAlign: '',
    textSize: '',
    textStyle: '',
    textWeight: '',
    heading: "Consectetur adipisicing elit",
    subheading: "Sed do eiusmod tempor incididunt",
    content: "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    detail: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  });
});
;define("dummy/ember-cli-tailwind/tests/addon.lint-test", [], function () {
  "use strict";
});
;define("dummy/ember-cli-tailwind/tests/app.lint-test", [], function () {
  "use strict";
});
;define("dummy/ember-cli-tailwind/tests/templates.template.lint-test", [], function () {
  "use strict";
});
;define('dummy/ember-gestures/recognizers/pan', ['exports', 'ember-gestures/recognizers/pan'], function (exports, _pan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pan.default;
});
;define('dummy/ember-gestures/recognizers/pinch', ['exports', 'ember-gestures/recognizers/pinch'], function (exports, _pinch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pinch.default;
});
;define('dummy/ember-gestures/recognizers/press', ['exports', 'ember-gestures/recognizers/press'], function (exports, _press) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _press.default;
});
;define('dummy/ember-gestures/recognizers/rotate', ['exports', 'ember-gestures/recognizers/rotate'], function (exports, _rotate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _rotate.default;
});
;define('dummy/ember-gestures/recognizers/swipe', ['exports', 'ember-gestures/recognizers/swipe'], function (exports, _swipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _swipe.default;
});
;define('dummy/ember-gestures/recognizers/tap', ['exports', 'ember-gestures/recognizers/tap'], function (exports, _tap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tap.default;
    }
  });
});
;define('dummy/ember-gestures/recognizers/vertical-pan', ['exports', 'ember-gestures/recognizers/vertical-pan'], function (exports, _verticalPan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _verticalPan.default;
    }
  });
});
;define('dummy/ember-gestures/recognizers/vertical-swipe', ['exports', 'ember-gestures/recognizers/vertical-swipe'], function (exports, _verticalSwipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _verticalSwipe.default;
    }
  });
});
;define('dummy/ember-ux-sauce/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('addon/components/uxs-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-app.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-avatar-icon.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-avatar-icon.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-avatar-text.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-avatar-text.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-avatar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-avatar.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-button-group.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-button-group.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-button-link.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-button-link.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-button.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-content.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-content.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-datalist-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-datalist-item.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-datalist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-datalist.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-dd.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-dd.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-detail.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-div.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-div.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-dl.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-dl.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-dt.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-dt.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-flatpickr.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-flatpickr.js should pass ESLint\n\n66:14 - Do not use this.attrs (ember/no-attrs-in-components)\n67:14 - Do not use this.attrs (ember/no-attrs-in-components)\n68:14 - Do not use this.attrs (ember/no-attrs-in-components)\n69:14 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('addon/components/uxs-form-control-row.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-form-control-row.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-form-control.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-form-control.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-form-date.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-form-date.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-form-datetime.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-form-datetime.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-form-dropdown-multiple.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-form-dropdown-multiple.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-form-dropdown.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-form-dropdown.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-form-error.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-form-error.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-form-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-form-input.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-form-label.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-form-label.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-form-textarea.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-form-textarea.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-form-time.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-form-time.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-form-tip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-form-tip.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-form-warning.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-form-warning.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-form.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-header.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-header/background.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-header/background.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-heading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-heading.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-hero.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-hero.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-hero/background.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-hero/background.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-icon-link.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-icon-link.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-icon.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-icon.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-li.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-li.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-list-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-list-item.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-list-notice.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-list-notice.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-list-subheading.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/components/uxs-list-subheading.js should pass ESLint\n\n70:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n71:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)');
  });

  QUnit.test('addon/components/uxs-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-list.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-list/x-subheading.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/components/uxs-list/x-subheading.js should pass ESLint\n\n96:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n97:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)');
  });

  QUnit.test('addon/components/uxs-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-menu.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-menu/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-menu/item.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-menu/link.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-menu/link.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-navbar-logo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-navbar-logo.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-navbar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-navbar.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-navbar/desktop-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-navbar/desktop-nav.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-navbar/mobile-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-navbar/mobile-nav.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-notice.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-notice.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-ol.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-ol.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-pagination-controls.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-pagination-controls.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-pane.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-pane.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-pill.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-pill.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-preamble.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-preamble.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-search.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-splash.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-splash.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-subheading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-subheading.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-table-cell.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-table-cell.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-table-heading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-table-heading.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-table-row.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-table-row.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-table.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-tabs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-tabs.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-tabs/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-tabs/item.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-tabs/link.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-tabs/link.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-text.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-text.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-toolbar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-toolbar.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-ul.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-ul.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/uxs-window.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/uxs-window.js should pass ESLint\n\n');
  });

  QUnit.test('addon/helpers/find-group-option-by.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/find-group-option-by.js should pass ESLint\n\n');
  });

  QUnit.test('addon/helpers/find-option-by.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/helpers/find-option-by.js should pass ESLint\n\n');
  });

  QUnit.test('addon/mixins/accessible.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/accessible.js should pass ESLint\n\n');
  });

  QUnit.test('addon/mixins/alignable.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/alignable.js should pass ESLint\n\n');
  });

  QUnit.test('addon/mixins/buttonable.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/buttonable.js should pass ESLint\n\n');
  });

  QUnit.test('addon/mixins/clickable.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/clickable.js should pass ESLint\n\n');
  });

  QUnit.test('addon/mixins/colorable.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/colorable.js should pass ESLint\n\n');
  });

  QUnit.test('addon/mixins/sizeable.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/sizeable.js should pass ESLint\n\n');
  });

  QUnit.test('addon/mixins/styleable.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/styleable.js should pass ESLint\n\n');
  });

  QUnit.test('addon/mixins/testable.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/testable.js should pass ESLint\n\n');
  });

  QUnit.test('addon/mixins/textable.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/textable.js should pass ESLint\n\n');
  });

  QUnit.test('addon/mixins/weightable.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/weightable.js should pass ESLint\n\n');
  });

  QUnit.test('addon/services/uxs-list-subheading-cache.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/services/uxs-list-subheading-cache.js should pass ESLint\n\n');
  });
});
;define('dummy/ember-ux-sauce/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app/components/uxs-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-app.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-avatar-icon.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-avatar-icon.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-avatar-text.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-avatar-text.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-avatar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-avatar.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-button-group.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-button-group.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-button-link.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-button-link.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-button.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-content.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-content.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-datalist-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-datalist-item.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-datalist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-datalist.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-dd.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-dd.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-detail.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-div.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-div.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-dl.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-dl.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-dt.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-dt.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-flatpickr.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-flatpickr.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-form-control-row.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-form-control-row.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-form-control.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-form-control.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-form-date.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-form-date.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-form-datetime.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-form-datetime.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-form-dropdown-multiple.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-form-dropdown-multiple.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-form-dropdown.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-form-dropdown.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-form-error.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-form-error.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-form-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-form-input.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-form-label.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-form-label.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-form-textarea.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-form-textarea.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-form-time.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-form-time.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-form-tip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-form-tip.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-form-warning.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-form-warning.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-form.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-header.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-header/background.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-header/background.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-heading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-heading.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-hero.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-hero.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-icon-link.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-icon-link.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-icon.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-icon.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-li.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-li.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-list-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-list-item.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-list-notice.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-list-notice.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-list-subheading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-list-subheading.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-list.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-list/x-subheading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-list/x-subheading.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-menu.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-menu/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-menu/item.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-menu/link.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-menu/link.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-navbar-logo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-navbar-logo.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-navbar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-navbar.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-navbar/desktop-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-navbar/desktop-nav.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-navbar/mobile-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-navbar/mobile-nav.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-notice.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-notice.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-ol.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-ol.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-pagination-controls.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-pagination-controls.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-pane.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-pane.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-pill.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-pill.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-preamble.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-preamble.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-search.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-splash.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-splash.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-subheading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-subheading.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-table-cell.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-table-cell.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-table-heading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-table-heading.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-table-row.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-table-row.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-table.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-tabs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-tabs.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-tabs/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-tabs/item.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-tabs/link.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-tabs/link.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-text.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-text.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-toolbar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-toolbar.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-ul.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-ul.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/uxs-window.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/uxs-window.js should pass ESLint\n\n');
  });

  QUnit.test('app/services/uxs-list-subheading-cache.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/services/uxs-list-subheading-cache.js should pass ESLint\n\n');
  });
});
;define('dummy/ember-ux-sauce/tests/templates.template.lint-test', [], function () {
  'use strict';

  QUnit.module('TemplateLint');

  QUnit.test('addon/templates/components/uxs-app.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-app.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-avatar-icon.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-avatar-icon.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-avatar-text.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-avatar-text.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-avatar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-avatar.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-button-group.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-button-group.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-button-link.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-button-link.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-button.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-button.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-content.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-content.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-datalist-item.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-datalist-item.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-datalist.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-datalist.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-dd.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-dd.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-detail.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-detail.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-div.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-div.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-dl.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-dl.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-dt.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-dt.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-form-control-row.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-form-control-row.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-form-control.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-form-control.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-form-error.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-form-error.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-form-label.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-form-label.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-form-textarea.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-form-textarea.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-form-time.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-form-time.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-form-tip.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-form-tip.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-form-warning.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-form-warning.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-form.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-form.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-header.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-header.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-heading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-heading.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-hero.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-hero.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-icon-link.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-icon-link.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-icon.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-icon.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-li.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-li.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-list-item.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-list-item.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-list-notice.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-list-notice.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-list-subheading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-list-subheading.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-list.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-list/x-subheading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-list/x-subheading.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-menu.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-menu.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-menu/item.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-menu/item.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-menu/link.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-menu/link.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-navbar-logo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-navbar-logo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-navbar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-navbar.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-navbar/desktop-nav.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-navbar/desktop-nav.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-navbar/mobile-nav.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-navbar/mobile-nav.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-notice.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-notice.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-ol.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-ol.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-pagination-controls.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-pagination-controls.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-pane.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-pane.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-pill.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-pill.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-preamble.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-preamble.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-search.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-search.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-splash.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-splash.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-subheading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-subheading.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-table-cell.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-table-cell.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-table-heading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-table-heading.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-table-row.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-table-row.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-table.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-table.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-tabs.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-tabs.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-tabs/item.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-tabs/item.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-tabs/link.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-tabs/link.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-text.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-text.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-toolbar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-toolbar.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-ul.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-ul.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/uxs-window.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/uxs-window.hbs should pass TemplateLint.\n\n');
  });
});
;define('dummy/event_dispatcher', ['exports', 'ember-gestures/event_dispatcher', 'dummy/config/environment'], function (exports, _event_dispatcher, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const assign = Ember.assign || Ember.merge;

  let gestures = assign({}, {
    emberUseCapture: false,
    removeTracking: false,
    useFastPaths: false
  });
  gestures = assign(gestures, _environment.default.gestures);

  exports.default = _event_dispatcher.default.extend({
    useCapture: gestures.emberUseCapture,
    removeTracking: gestures.removeTracking,
    useFastPaths: gestures.useFastPaths
  });
});
;define('dummy/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define('dummy/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _append) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
;define('dummy/helpers/array', ['exports', 'ember-composable-helpers/helpers/array'], function (exports, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function () {
      return _array.array;
    }
  });
});
;define('dummy/helpers/bem', ['exports', 'ember-bem-sauce/helpers/bem'], function (exports, _bem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bem.default;
    }
  });
  Object.defineProperty(exports, 'bem', {
    enumerable: true,
    get: function () {
      return _bem.bem;
    }
  });
});
;define('dummy/helpers/break-on', ['exports', 'ember-cli-addon-docs/helpers/break-on'], function (exports, _breakOn) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _breakOn.default;
    }
  });
});
;define('dummy/helpers/camelize', ['exports', 'ember-cli-string-helpers/helpers/camelize'], function (exports, _camelize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _camelize.default;
    }
  });
  Object.defineProperty(exports, 'camelize', {
    enumerable: true,
    get: function () {
      return _camelize.camelize;
    }
  });
});
;define('dummy/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define('dummy/helpers/capitalize', ['exports', 'ember-cli-string-helpers/helpers/capitalize'], function (exports, _capitalize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _capitalize.default;
    }
  });
  Object.defineProperty(exports, 'capitalize', {
    enumerable: true,
    get: function () {
      return _capitalize.capitalize;
    }
  });
});
;define('dummy/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _chunk) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
;define('dummy/helpers/classify', ['exports', 'ember-cli-string-helpers/helpers/classify'], function (exports, _classify) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _classify.default;
    }
  });
  Object.defineProperty(exports, 'classify', {
    enumerable: true,
    get: function () {
      return _classify.classify;
    }
  });
});
;define('dummy/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _compact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function () {
      return _compact.compact;
    }
  });
});
;define('dummy/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _compute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
;define('dummy/helpers/contains', ['exports', 'ember-composable-helpers/helpers/contains'], function (exports, _contains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
;define('dummy/helpers/dasherize', ['exports', 'ember-cli-string-helpers/helpers/dasherize'], function (exports, _dasherize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dasherize.default;
    }
  });
  Object.defineProperty(exports, 'dasherize', {
    enumerable: true,
    get: function () {
      return _dasherize.dasherize;
    }
  });
});
;define('dummy/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _dec) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
;define('dummy/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _drop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function () {
      return _drop.drop;
    }
  });
});
;define('dummy/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
;define('dummy/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
;define('dummy/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
;define('dummy/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define('dummy/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _filterBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function () {
      return _filterBy.filterBy;
    }
  });
});
;define('dummy/helpers/filter', ['exports', 'ember-composable-helpers/helpers/filter'], function (exports, _filter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function () {
      return _filter.filter;
    }
  });
});
;define('dummy/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _findBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function () {
      return _findBy.findBy;
    }
  });
});
;define('dummy/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _flatten) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
;define('dummy/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _groupBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function () {
      return _groupBy.groupBy;
    }
  });
});
;define('dummy/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define('dummy/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define('dummy/helpers/has-next', ['exports', 'ember-composable-helpers/helpers/has-next'], function (exports, _hasNext) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(exports, 'hasNext', {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
;define('dummy/helpers/has-previous', ['exports', 'ember-composable-helpers/helpers/has-previous'], function (exports, _hasPrevious) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(exports, 'hasPrevious', {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
;define('dummy/helpers/href-to', ['exports', 'ember-href-to/helpers/href-to'], function (exports, _hrefTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hrefTo.default;
    }
  });
  Object.defineProperty(exports, 'hrefTo', {
    enumerable: true,
    get: function () {
      return _hrefTo.hrefTo;
    }
  });
});
;define('dummy/helpers/html-safe', ['exports', 'ember-cli-string-helpers/helpers/html-safe'], function (exports, _htmlSafe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _htmlSafe.default;
    }
  });
  Object.defineProperty(exports, 'htmlSafe', {
    enumerable: true,
    get: function () {
      return _htmlSafe.htmlSafe;
    }
  });
});
;define('dummy/helpers/humanize', ['exports', 'ember-cli-string-helpers/helpers/humanize'], function (exports, _humanize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _humanize.default;
    }
  });
  Object.defineProperty(exports, 'humanize', {
    enumerable: true,
    get: function () {
      return _humanize.humanize;
    }
  });
});
;define('dummy/helpers/ignore-children', ['exports', 'ember-ignore-children-helper/helpers/ignore-children'], function (exports, _ignoreChildren) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(exports, 'ignoreChildren', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
;define('dummy/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _inc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
;define('dummy/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _intersect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function () {
      return _intersect.intersect;
    }
  });
});
;define('dummy/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _invoke) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
;define('dummy/helpers/is-after', ['exports', 'ember-moment/helpers/is-after'], function (exports, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
;define('dummy/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define('dummy/helpers/is-before', ['exports', 'ember-moment/helpers/is-before'], function (exports, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
;define('dummy/helpers/is-between', ['exports', 'ember-moment/helpers/is-between'], function (exports, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
;define('dummy/helpers/is-clipboard-supported', ['exports', 'ember-cli-clipboard/helpers/is-clipboard-supported'], function (exports, _isClipboardSupported) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.default;
    }
  });
  Object.defineProperty(exports, 'isClipboardSupported', {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.isClipboardSupported;
    }
  });
});
;define('dummy/helpers/is-empty', ['exports', 'ember-truth-helpers/helpers/is-empty'], function (exports, _isEmpty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define('dummy/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define('dummy/helpers/is-same-or-after', ['exports', 'ember-moment/helpers/is-same-or-after'], function (exports, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
;define('dummy/helpers/is-same-or-before', ['exports', 'ember-moment/helpers/is-same-or-before'], function (exports, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
;define('dummy/helpers/is-same', ['exports', 'ember-moment/helpers/is-same'], function (exports, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
;define('dummy/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _join) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function () {
      return _join.join;
    }
  });
});
;define('dummy/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _lfLockModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfLockModel.default;
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function () {
      return _lfLockModel.lfLockModel;
    }
  });
});
;define('dummy/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _lfOr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfOr.default;
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function () {
      return _lfOr.lfOr;
    }
  });
});
;define('dummy/helpers/lowercase', ['exports', 'ember-cli-string-helpers/helpers/lowercase'], function (exports, _lowercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lowercase.default;
    }
  });
  Object.defineProperty(exports, 'lowercase', {
    enumerable: true,
    get: function () {
      return _lowercase.lowercase;
    }
  });
});
;define('dummy/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define('dummy/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define('dummy/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _mapBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function () {
      return _mapBy.mapBy;
    }
  });
});
;define('dummy/helpers/map', ['exports', 'ember-composable-helpers/helpers/map'], function (exports, _map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function () {
      return _map.map;
    }
  });
});
;define('dummy/helpers/media', ['exports', 'ember-responsive/helpers/media'], function (exports, _media) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _media.default;
    }
  });
  Object.defineProperty(exports, 'media', {
    enumerable: true,
    get: function () {
      return _media.media;
    }
  });
});
;define('dummy/helpers/moment-add', ['exports', 'ember-moment/helpers/moment-add'], function (exports, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
;define('dummy/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
;define('dummy/helpers/moment-diff', ['exports', 'ember-moment/helpers/moment-diff'], function (exports, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
;define('dummy/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
;define('dummy/helpers/moment-format', ['exports', 'ember-moment/helpers/moment-format'], function (exports, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
;define('dummy/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now'], function (exports, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
;define('dummy/helpers/moment-from', ['exports', 'ember-moment/helpers/moment-from'], function (exports, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
;define('dummy/helpers/moment-subtract', ['exports', 'ember-moment/helpers/moment-subtract'], function (exports, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
;define('dummy/helpers/moment-to-date', ['exports', 'ember-moment/helpers/moment-to-date'], function (exports, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
;define('dummy/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now'], function (exports, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
;define('dummy/helpers/moment-to', ['exports', 'ember-moment/helpers/moment-to'], function (exports, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
;define('dummy/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define('dummy/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
;define('dummy/helpers/next', ['exports', 'ember-composable-helpers/helpers/next'], function (exports, _next) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(exports, 'next', {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
;define('dummy/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define('dummy/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define('dummy/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
;define('dummy/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _objectAt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
;define('dummy/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _optional) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
;define('dummy/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define('dummy/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define('dummy/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _pipeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
;define('dummy/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _pipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
;define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('dummy/helpers/previous', ['exports', 'ember-composable-helpers/helpers/previous'], function (exports, _previous) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(exports, 'previous', {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
;define('dummy/helpers/queue', ['exports', 'ember-composable-helpers/helpers/queue'], function (exports, _queue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
;define('dummy/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _range) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
;define('dummy/helpers/reduce', ['exports', 'ember-composable-helpers/helpers/reduce'], function (exports, _reduce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
  Object.defineProperty(exports, 'reduce', {
    enumerable: true,
    get: function () {
      return _reduce.reduce;
    }
  });
});
;define('dummy/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _rejectBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function () {
      return _rejectBy.rejectBy;
    }
  });
});
;define('dummy/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _repeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
;define('dummy/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _reverse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function () {
      return _reverse.reverse;
    }
  });
});
;define('dummy/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _shuffle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
;define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('dummy/helpers/slice', ['exports', 'ember-composable-helpers/helpers/slice'], function (exports, _slice) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function () {
      return _slice.slice;
    }
  });
});
;define('dummy/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _sortBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function () {
      return _sortBy.sortBy;
    }
  });
});
;define('dummy/helpers/svg-jar', ['exports', 'ember-svg-jar/utils/make-helper', 'ember-svg-jar/utils/make-svg'], function (exports, _makeHelper, _makeSvg) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.svgJar = svgJar;


  function getInlineAsset(assetId) {
    try {
      /* eslint-disable global-require */
      return require(`ember-svg-jar/inlined/${assetId}`).default;
    } catch (err) {
      return null;
    }
  }

  function svgJar(assetId, svgAttrs) {
    return (0, _makeSvg.default)(assetId, svgAttrs, getInlineAsset);
  }

  exports.default = (0, _makeHelper.default)(svgJar);
});
;define('dummy/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _take) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function () {
      return _take.take;
    }
  });
});
;define('dummy/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define('dummy/helpers/titleize', ['exports', 'ember-cli-string-helpers/helpers/titleize'], function (exports, _titleize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  Object.defineProperty(exports, 'titleize', {
    enumerable: true,
    get: function () {
      return _titleize.titleize;
    }
  });
});
;define('dummy/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _toggleAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
;define('dummy/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
;define('dummy/helpers/trim', ['exports', 'ember-cli-string-helpers/helpers/trim'], function (exports, _trim) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trim.default;
    }
  });
  Object.defineProperty(exports, 'trim', {
    enumerable: true,
    get: function () {
      return _trim.trim;
    }
  });
});
;define('dummy/helpers/truncate', ['exports', 'ember-cli-string-helpers/helpers/truncate'], function (exports, _truncate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _truncate.default;
    }
  });
  Object.defineProperty(exports, 'truncate', {
    enumerable: true,
    get: function () {
      return _truncate.truncate;
    }
  });
});
;define('dummy/helpers/type-signature', ['exports', 'ember-cli-addon-docs/helpers/type-signature'], function (exports, _typeSignature) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _typeSignature.default;
    }
  });
});
;define('dummy/helpers/underscore', ['exports', 'ember-cli-string-helpers/helpers/underscore'], function (exports, _underscore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
;define('dummy/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _union) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function () {
      return _union.union;
    }
  });
});
;define('dummy/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define('dummy/helpers/uppercase', ['exports', 'ember-cli-string-helpers/helpers/uppercase'], function (exports, _uppercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uppercase.default;
    }
  });
  Object.defineProperty(exports, 'uppercase', {
    enumerable: true,
    get: function () {
      return _uppercase.uppercase;
    }
  });
});
;define('dummy/helpers/utc', ['exports', 'ember-moment/helpers/utc'], function (exports, _utc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(exports, 'utc', {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
;define('dummy/helpers/w', ['exports', 'ember-cli-string-helpers/helpers/w'], function (exports, _w) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _w.default;
    }
  });
  Object.defineProperty(exports, 'w', {
    enumerable: true,
    get: function () {
      return _w.w;
    }
  });
});
;define('dummy/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _without) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
;define('dummy/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define('dummy/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _addModalsContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
});
;define('dummy/initializers/component-styles', ['exports', 'ember-component-css/initializers/component-styles', 'dummy/mixins/style-namespacing-extras'], function (exports, _componentStyles, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = exports.default = undefined;
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _componentStyles.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _componentStyles.initialize;
    }
  });


  // eslint-disable-next-line ember/new-module-imports
  Ember.Component.reopen(_styleNamespacingExtras.default);
});
;define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('dummy/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('dummy/initializers/ember-hammertime', ['exports', 'ember-hammertime/components/component'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-hammertime',
    initialize() {}
  };
});
;define('dummy/initializers/ember-keyboard-first-responder-inputs', ['exports', 'ember-keyboard/initializers/ember-keyboard-first-responder-inputs'], function (exports, _emberKeyboardFirstResponderInputs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberKeyboardFirstResponderInputs.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _emberKeyboardFirstResponderInputs.initialize;
    }
  });
});
;define('dummy/initializers/ember-responsive-breakpoints', ['exports', 'ember-responsive/initializers/responsive'], function (exports, _responsive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _responsive.default;
});
;define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('dummy/initializers/inject-media', ['exports', 'ember-cli-addon-docs/initializers/inject-media'], function (exports, _injectMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _injectMedia.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _injectMedia.initialize;
    }
  });
});
;define("dummy/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals", "liquid-fire/velocity-ext"], function (exports, _emberInternals) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  (0, _emberInternals.initialize)();

  exports.default = {
    name: 'liquid-fire',
    initialize: function () {}
  };
});
;define('dummy/initializers/route-styles', ['exports', 'ember-component-css/initializers/route-styles'], function (exports, _routeStyles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routeStyles.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _routeStyles.initialize;
    }
  });
});
;define('dummy/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('dummy/instance-initializers/ember-gestures', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-gestures',

    initialize: function (instance) {
      if (typeof instance.lookup === "function") {
        instance.lookup('service:-gestures');
      } else {
        // This can be removed when we no-longer support ember 1.12 and 1.13
        Ember.getOwner(instance).lookup('service:-gestures');
      }
    }

  };
});
;define('dummy/instance-initializers/ember-href-to', ['exports', 'ember-href-to/href-to'], function (exports, _hrefTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function closestLink(el) {
    if (el.closest) {
      return el.closest('a');
    } else {
      el = el.parentElement;
      while (el && el.tagName !== 'A') {
        el = el.parentElement;
      }
      return el;
    }
  }
  exports.default = {
    name: 'ember-href-to',
    initialize(applicationInstance) {
      // we only want this to run in the browser, not in fastboot
      if (typeof FastBoot === "undefined") {
        let hrefToClickHandler = function _hrefToClickHandler(e) {
          let link = e.target.tagName === 'A' ? e.target : closestLink(e.target);
          if (link) {
            let hrefTo = new _hrefTo.default(applicationInstance, e, link);
            hrefTo.maybeHandle();
          }
        };

        document.body.addEventListener('click', hrefToClickHandler);

        // Teardown on app destruction: clean up the event listener to avoid
        // memory leaks.
        applicationInstance.reopen({
          willDestroy() {
            document.body.removeEventListener('click', hrefToClickHandler);
            return this._super(...arguments);
          }
        });
      }
    }
  };
});
;define('dummy/locations/router-scroll', ['exports', 'ember-router-scroll/locations/router-scroll'], function (exports, _routerScroll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routerScroll.default;
    }
  });
});
;define('dummy/mixins/style-namespacing-extras', ['exports', 'ember-component-css/mixins/style-namespacing-extras'], function (exports, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _styleNamespacingExtras.default;
    }
  });
});
;define('dummy/mixins/validations/session', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _emberCpValidations.buildValidations)({
    username: (0, _emberCpValidations.validator)('presence', true),
    password: [(0, _emberCpValidations.validator)('presence', true), (0, _emberCpValidations.validator)('length', {
      min: 4,
      max: 8
    })]
  });
});
;define('dummy/models/class', ['exports', 'ember-cli-addon-docs/models/class'], function (exports, _class) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
});
;define('dummy/models/component', ['exports', 'ember-cli-addon-docs/models/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('dummy/models/module', ['exports', 'ember-cli-addon-docs/models/module'], function (exports, _module) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _module.default;
    }
  });
});
;define('dummy/models/project', ['exports', 'ember-cli-addon-docs/models/project'], function (exports, _project) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _project.default;
    }
  });
});
;define('dummy/models/session', ['exports', 'ember-data', 'dummy/mixins/validations/session'], function (exports, _emberData, _session) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    attr
  } = _emberData.default;

  exports.default = _emberData.default.Model.extend(_session.default, {
    // Attributes
    username: attr('string'),
    passsword: attr('string')
  });
});
;define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('dummy/router', ['exports', 'ember-cli-addon-docs/router', 'dummy/config/environment'], function (exports, _router, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = _router.default.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    (0, _router.docsRoute)(this, function () {
      this.route('patterns');
      this.route('quickstart');
      this.route('settings', function () {
        this.route('colors');
        this.route('typography');
      });
      this.route('forms', function () {
        this.route('buttons');
        this.route('button-links');
        this.route('button-groups');
        this.route('controls');
        this.route('inputs');
        this.route('textareas');
        this.route('dropdowns');
        this.route('date-time-inputs');
        this.route('toggles');
        this.route('validation');
        this.route('fieldsets');
        this.route('rows');
      });
      this.route('lists', function () {
        this.route('items');
        this.route('avatars');
        this.route('subheadings');
        this.route('notices');
      });
      this.route('navigation', function () {
        this.route('tabs', function () {
          this.route('dogs');
          this.route('cats');
        });
      });
      this.route('components', function () {
        this.route('lists');
        this.route('pagination');
        this.route('datalists');
        this.route('avatars');
        this.route('icons');
        this.route('menus');
        this.route('preamble');
        this.route('notice');
        this.route('pills');
        this.route('splash');
      });
      this.route('typography', function () {
        this.route('lists');
        this.route('tables');
      });
      this.route('layout', function () {
        this.route('app');
        this.route('navbar');
        this.route('window');
        this.route('pane');
        this.route('hero');
        this.route('toolbar');
        this.route('header');
      });
      this.route('api', function () {
        this.route('item', {
          path: '/*path'
        });
      });
    });

    this.route('sandbox', function () {
      this.route('api', function () {
        this.route('item', {
          path: '/*path'
        });
      });
    });

    // this.route('app', function() {
    //   this.route('dash', {
    //     path: '/'
    //   });
    //   this.route('splash');
    //   this.route('single');
    //   this.route('double');
    //   this.route('triple');
    // });

    this.route('not-found', {
      path: '/*path'
    });
  });

  exports.default = Router;
});
;define('dummy/routes/docs', ['exports', 'ember-cli-addon-docs/routes/docs'], function (exports, _docs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _docs.default;
    }
  });
});
;define('dummy/routes/docs/api/item', ['exports', 'ember-cli-addon-docs/routes/docs/api/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define('dummy/routes/docs/forms/rows', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function () {
      return Ember.Object.create({
        title: 'Ms',
        firstName: 'Frida',
        lastName: 'Wardlaw',
        gender: 'Male',
        email: 'fab@gmail.com',
        tel: '+44 7723 649584',
        bio: 'lorem ipsum...'
      });
    }
  });
});
;define('dummy/routes/docs/forms/validation', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // BEGIN-SNIPPET form-validation-route
    model: function () {
      return this.store.createRecord('session');
    }
    // END-SNIPPET
  });
});
;define('dummy/serializers/-addon-docs', ['exports', 'ember-cli-addon-docs/serializers/-addon-docs'], function (exports, _addonDocs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _addonDocs.default;
    }
  });
});
;define('dummy/services/-gestures', ['exports', 'dummy/config/environment', 'ember-gestures/services/-gestures'], function (exports, _environment, _gestures) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const assign = Ember.assign || Ember.merge;

  let gestures = assign({}, {
    useCapture: false
  });
  gestures = assign(gestures, _environment.default.gestures);

  exports.default = _gestures.default.extend({
    useCapture: gestures.useCapture
  });
});
;define('dummy/services/adapter', ['exports', 'ember-fetch-adapter'], function (exports, _emberFetchAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberFetchAdapter.default;
    }
  });
});
;define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define('dummy/services/docs-fetch', ['exports', 'ember-cli-addon-docs/services/docs-fetch'], function (exports, _docsFetch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _docsFetch.default;
    }
  });
});
;define('dummy/services/docs-routes', ['exports', 'ember-cli-addon-docs/services/docs-routes'], function (exports, _docsRoutes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _docsRoutes.default;
    }
  });
});
;define('dummy/services/docs-search', ['exports', 'ember-cli-addon-docs/services/docs-search'], function (exports, _docsSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _docsSearch.default;
    }
  });
});
;define('dummy/services/etw-tailwind-styleguide', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    // body
  });
});
;define('dummy/services/keyboard', ['exports', 'ember-keyboard/services/keyboard'], function (exports, _keyboard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _keyboard.default;
    }
  });
});
;define("dummy/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _transitionMap) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _transitionMap.default;
});
;define('dummy/services/media', ['exports', 'ember-responsive/services/media'], function (exports, _media) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _media.default;
});
;define('dummy/services/modal-dialog', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { computed, Service } = Ember;

  function computedFromConfig(prop) {
    return computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  exports.default = Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: computed(function () {
      /*
        everywhere except test, this property will be overwritten
        by the initializer that appends the modal container div
        to the DOM. because initializers don't run in unit/integration
        tests, this is a nice fallback.
      */
      if (_environment.default.environment === 'test') {
        return 'ember-testing';
      }
    })
  });
});
;define('dummy/services/moment', ['exports', 'ember-moment/services/moment', 'dummy/config/environment'], function (exports, _moment, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { get } = Ember;

  exports.default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
});
;define('dummy/services/project-version', ['exports', 'ember-cli-addon-docs/services/project-version'], function (exports, _projectVersion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _projectVersion.default;
    }
  });
});
;define('dummy/services/router-scroll', ['exports', 'ember-router-scroll/services/router-scroll'], function (exports, _routerScroll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routerScroll.default;
    }
  });
});
;define('dummy/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
;define('dummy/services/uxs-list-subheading-cache', ['exports', 'ember-ux-sauce/services/uxs-list-subheading-cache'], function (exports, _uxsListSubheadingCache) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uxsListSubheadingCache.default;
    }
  });
});
;define("dummy/snippets", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "action-list": "\n    {{#uxs-list lines=3 bordered=true as |list|}}\n      {{#each items as |thing|}}\n        {{#list.item as |item|}}\n          {{#item.aside}}\n            {{item.avatar \"https://placeimg.com/100/100/any\" round=true}}\n          {{/item.aside}}\n          {{#item.body}}\n            {{item.title thing.title}}\n            {{item.detail thing.location}}\n            {{item.detail thing.email}}\n          {{/item.body}}\n          {{#item.aside}}\n            {{item.action \"keyboard_arrow_right\"}}\n          {{/item.aside}}\n        {{/list.item}}\n      {{/each}}\n    {{/uxs-list}}\n",
    "all-avatar-sizes.hbs": "\n    <div>\n      <div class=\"f fr\">\n        {{uxs-avatar\n          \"http://api.faceholder.io/faces?id=giant\"\n          size=\"giant\"\n          rounded=true\n        }}\n        {{uxs-avatar-text\n          \"AB\"\n          size=\"giant\"\n          rounded=true\n        }}\n        {{uxs-avatar-icon\n          \"invert_colors\"\n          size=\"giant\"\n          rounded=true\n        }}\n        {{#uxs-avatar-text\n          size=\"giant\"\n          rounded=true\n        as |avatar|\n        }}\n          {{avatar.large \"958\"}}\n          {{avatar.small \"THINGS\"}}\n        {{/uxs-avatar-text}}\n      </div>\n      <div class=\"f fr\">\n        {{uxs-avatar\n          \"http://api.faceholder.io/faces?id=huge\"\n          size=\"huge\"\n          rounded=true\n        }}\n        {{uxs-avatar-text\n          \"BC\"\n          size=\"huge\"\n          rounded=true\n        }}\n        {{uxs-avatar-icon\n          \"accessible\"\n          size=\"huge\"\n          rounded=true\n        }}\n        {{#uxs-avatar-text\n          size=\"huge\"\n          rounded=true\n        as |avatar|\n        }}\n          {{avatar.large \"100k\"}}\n          {{avatar.small \"THINGS\"}}\n        {{/uxs-avatar-text}}\n      </div>\n      <div class=\"f fr\">\n        {{uxs-avatar\n          \"http://api.faceholder.io/faces?id=large\"\n          size=\"large\"\n          rounded=true\n        }}\n        {{uxs-avatar-text\n          \"CD\"\n          size=\"large\"\n          rounded=true\n        }}\n        {{uxs-avatar-icon\n          \"hourglass_full\"\n          size=\"large\"\n          rounded=true\n        }}\n        {{#uxs-avatar-text\n          size=\"large\"\n          rounded=true\n        as |avatar|\n        }}\n          {{avatar.large \"560m\"}}\n          {{avatar.small \"THINGS\"}}\n        {{/uxs-avatar-text}}\n      </div>\n      <div class=\"f fr\">\n        {{uxs-avatar\n          \"http://api.faceholder.io/faces?id=medium\"\n          size=\"medium\"\n          rounded=true\n        }}\n        {{uxs-avatar-text\n          \"DE\"\n          size=\"medium\"\n          rounded=true\n        }}\n        {{uxs-avatar-icon\n          \"fingerprint\"\n          size=\"medium\"\n          rounded=true\n        }}\n        {{#uxs-avatar-text\n          size=\"medium\"\n          rounded=true\n        as |avatar|\n        }}\n          {{avatar.large \"100k\"}}\n          {{avatar.small \"THINGS\"}}\n        {{/uxs-avatar-text}}\n      </div>\n      <div class=\"f fr\">\n        {{uxs-avatar\n          \"http://api.faceholder.io/faces?id=small\"\n          size=\"small\"\n          rounded=true\n        }}\n        {{uxs-avatar-text\n          \"EF\"\n          size=\"small\"\n          rounded=true\n        }}\n        {{uxs-avatar-icon\n          \"today\"\n          size=\"small\"\n          rounded=true\n        }}\n        {{#uxs-avatar-text\n          size=\"small\"\n          rounded=true\n        as |avatar|\n        }}\n          {{avatar.large \"10\"}}\n          {{avatar.small \"THINGS\"}}\n        {{/uxs-avatar-text}}\n      </div>\n    </div>\n",
    "all-avatar-styles.hbs": "\n    <div>\n      <div class=\"f fr\">\n        {{uxs-avatar\n          \"http://api.faceholder.io/faces?id=primary\"\n          style=\"primary\"\n          rounded=true\n        }}\n        {{uxs-avatar-text\n          \"AB\"\n          style=\"primary\"\n          rounded=true\n        }}\n        {{uxs-avatar-icon\n          \"invert_colors\"\n          style=\"primary\"\n          rounded=true\n        }}\n        {{#uxs-avatar-text\n          style=\"primary\"\n          rounded=true\n        as |avatar|\n        }}\n          {{avatar.large \"21\"}}\n          {{avatar.small \"DAYS\"}}\n        {{/uxs-avatar-text}}\n      </div>\n      <div class=\"f fr\">\n        {{uxs-avatar\n          \"http://api.faceholder.io/faces?id=accent\"\n          style=\"accent\"\n          rounded=true\n        }}\n        {{uxs-avatar-text\n          \"BC\"\n          style=\"accent\"\n          rounded=true\n        }}\n        {{uxs-avatar-icon\n          \"accessible\"\n          style=\"accent\"\n          rounded=true\n        }}\n        {{#uxs-avatar-text\n          style=\"accent\"\n          rounded=true\n        as |avatar|\n        }}\n          {{avatar.large \"21\"}}\n          {{avatar.small \"DAYS\"}}\n        {{/uxs-avatar-text}}\n      </div>\n      <div class=\"f fr\">\n        {{uxs-avatar\n          \"http://api.faceholder.io/faces?id=warning\"\n          style=\"warning\"\n          rounded=true\n        }}\n        {{uxs-avatar-text\n          \"CD\"\n          style=\"warning\"\n          rounded=true\n        }}\n        {{uxs-avatar-icon\n          \"hourglass_full\"\n          style=\"warning\"\n          rounded=true\n        }}\n        {{#uxs-avatar-text\n          style=\"warning\"\n          rounded=true\n        as |avatar|\n        }}\n          {{avatar.large \"21\"}}\n          {{avatar.small \"DAYS\"}}\n        {{/uxs-avatar-text}}\n      </div>\n      <div class=\"f fr\">\n        {{uxs-avatar\n          \"http://api.faceholder.io/faces?id=error\"\n          style=\"error\"\n          rounded=true\n        }}\n        {{uxs-avatar-text\n          \"DE\"\n          style=\"error\"\n          rounded=true\n        }}\n        {{uxs-avatar-icon\n          \"fingerprint\"\n          style=\"error\"\n          rounded=true\n        }}\n        {{#uxs-avatar-text\n          style=\"error\"\n          rounded=true\n        as |avatar|\n        }}\n          {{avatar.large \"21\"}}\n          {{avatar.small \"DAYS\"}}\n        {{/uxs-avatar-text}}\n      </div>\n      <div class=\"f fr\">\n        {{uxs-avatar\n          \"http://api.faceholder.io/faces?id=dark\"\n          style=\"dark\"\n          rounded=true\n        }}\n        {{uxs-avatar-text\n          \"EF\"\n          style=\"dark\"\n          rounded=true\n        }}\n        {{uxs-avatar-icon\n          \"today\"\n          style=\"dark\"\n          rounded=true\n        }}\n        {{#uxs-avatar-text\n          style=\"dark\"\n          rounded=true\n        as |avatar|\n        }}\n          {{avatar.large \"21\"}}\n          {{avatar.small \"DAYS\"}}\n        {{/uxs-avatar-text}}\n      </div>\n      <div class=\"f fr\">\n        {{uxs-avatar\n          \"http://api.faceholder.io/faces?id=grey\"\n          style=\"grey\"\n          rounded=true\n        }}\n        {{uxs-avatar-text\n          \"FG\"\n          style=\"grey\"\n          rounded=true\n        }}\n        {{uxs-avatar-icon\n          \"verified_user\"\n          style=\"grey\"\n          rounded=true\n        }}\n        {{#uxs-avatar-text\n          style=\"grey\"\n          rounded=true\n        as |avatar|\n        }}\n          {{avatar.large \"21\"}}\n          {{avatar.small \"DAYS\"}}\n        {{/uxs-avatar-text}}\n      </div>\n      <div class=\"f fr\">\n        {{uxs-avatar\n          \"http://api.faceholder.io/faces?id=mid\"\n          style=\"mid\"\n          rounded=true\n        }}\n        {{uxs-avatar-text\n          \"GH\"\n          style=\"mid\"\n          rounded=true\n        }}\n        {{uxs-avatar-icon\n          \"album\"\n          style=\"mid\"\n          rounded=true\n        }}\n        {{#uxs-avatar-text\n          style=\"mid\"\n          rounded=true\n        as |avatar|\n        }}\n          {{avatar.large \"21\"}}\n          {{avatar.small \"DAYS\"}}\n        {{/uxs-avatar-text}}\n      </div>\n      <div class=\"f fr\">\n        {{uxs-avatar\n          \"http://api.faceholder.io/faces?id=light\"\n          style=\"light\"\n          rounded=true\n        }}\n        {{uxs-avatar-text\n          \"HI\"\n          style=\"light\"\n          rounded=true\n        }}\n        {{uxs-avatar-icon\n          \"email\"\n          style=\"light\"\n          rounded=true\n        }}\n        {{#uxs-avatar-text\n          style=\"light\"\n          rounded=true\n        as |avatar|\n        }}\n          {{avatar.large \"21\"}}\n          {{avatar.small \"DAYS\"}}\n        {{/uxs-avatar-text}}\n      </div>\n      <div class=\"f fr\">\n        {{uxs-avatar\n          \"http://api.faceholder.io/faces?id=white\"\n          style=\"white\"\n          rounded=true\n        }}\n        {{uxs-avatar-text\n          \"IJ\"\n          style=\"white\"\n          rounded=true\n        }}\n        {{uxs-avatar-icon\n          \"insert_emoticon\"\n          style=\"white\"\n          rounded=true\n        }}\n        {{#uxs-avatar-text\n          style=\"white\"\n          rounded=true\n        as |avatar|\n        }}\n          {{avatar.large \"21\"}}\n          {{avatar.small \"DAYS\"}}\n        {{/uxs-avatar-text}}\n      </div>\n    </div>\n\n",
    "all-button-link-sizes.hbs": "\n    {{uxs-button-link \"GIANT\" \"docs.quickstart\" size=\"giant\"}}\n    {{uxs-button-link \"HUGE\" \"docs.quickstart\" size=\"huge\"}}\n    {{uxs-button-link \"LARGE\" \"docs.quickstart\" size=\"large\"}}\n    {{uxs-button-link \"MEDIUM\" \"docs.quickstart\" size=\"medium\"}}\n    {{uxs-button-link \"SMALL\" \"docs.quickstart\" size=\"small\"}}\n    {{uxs-button-link \"TINY\" \"docs.quickstart\" size=\"tiny\"}}\n",
    "all-button-link-styles.hbs": "\n    {{uxs-button-link \"DEFAULT\" \"docs.quickstart\"}}\n    {{uxs-button-link \"PRIMARY\" \"docs.quickstart\" style=\"primary\"}}\n    {{uxs-button-link \"ACCENT\" \"docs.quickstart\" style=\"accent\"}}\n    {{uxs-button-link \"WARNING\" \"docs.quickstart\" style=\"warning\"}}\n    {{uxs-button-link \"ERROR\" \"docs.quickstart\" style=\"error\"}}\n    {{uxs-button-link \"DARK\" \"docs.quickstart\" style=\"dark\"}}\n    {{uxs-button-link \"GREY\" \"docs.quickstart\" style=\"grey\"}}\n    {{uxs-button-link \"MID\" \"docs.quickstart\" style=\"mid\"}}\n    {{uxs-button-link \"LIGHT\" \"docs.quickstart\" style=\"light\"}}\n    {{uxs-button-link \"WHITE\" \"docs.quickstart\" style=\"white\"}}\n",
    "all-button-sizes.hbs": "\n    {{uxs-button \"GIANT\" size=\"giant\"}}\n    {{uxs-button \"HUGE\" size=\"huge\"}}\n    {{uxs-button \"LARGE\" size=\"large\"}}\n    {{uxs-button \"MEDIUM\" size=\"medium\"}}\n    {{uxs-button \"SMALL\" size=\"small\"}}\n    {{uxs-button \"TINY\" size=\"tiny\"}}\n\n",
    "all-button-styles.hbs": "\n    {{uxs-button \"DEFAULT\"}}\n    {{uxs-button \"PRIMARY\" style=\"primary\"}}\n    {{uxs-button \"ACCENT\" style=\"accent\"}}\n    {{uxs-button \"WARNING\" style=\"warning\"}}\n    {{uxs-button \"ERROR\" style=\"error\"}}\n    {{uxs-button \"DARK\" style=\"dark\"}}\n    {{uxs-button \"GREY\" style=\"grey\"}}\n    {{uxs-button \"MID\" style=\"mid\"}}\n    {{uxs-button \"LIGHT\" style=\"light\"}}\n    {{uxs-button \"WHITE\" style=\"white\"}}\n",
    "all-list-subheading-styles.hbs": "\n    {{uxs-list/x-subheading \"DEFAULT\"}}\n    {{uxs-list/x-subheading \"PRIMARY\" style=\"primary\"}}\n    {{uxs-list/x-subheading \"ACCENT\" style=\"accent\"}}\n    {{uxs-list/x-subheading \"WARNING\" style=\"warning\"}}\n    {{uxs-list/x-subheading \"ERROR\" style=\"error\"}}\n    {{uxs-list/x-subheading \"DARK\" style=\"dark\"}}\n    {{uxs-list/x-subheading \"GREY\" style=\"grey\"}}\n    {{uxs-list/x-subheading \"MID\" style=\"mid\"}}\n    {{uxs-list/x-subheading \"LIGHT\" style=\"light\"}}\n    <div class=\"bg-grey\">\n      {{uxs-list/x-subheading \"WHITE\" style=\"white\"}}\n    </div>\n",
    "app-demo": "\n    {{#uxs-app fixedNav=fixedNav}}\n      Content...\n    {{/uxs-app}}\n",
    "avatar-styles": "\n    <div class=\"f fr\">\n      {{uxs-avatar \"http://api.faceholder.io/faces?id=0\" style=\"primary\" round=true}}\n      {{uxs-avatar-text \"AA\" style=\"primary\" round=true}}\n      {{uxs-avatar-icon \"invert_colors\" style=\"primary\" round=true}}\n    </div>\n    <div class=\"f fr\">\n      {{uxs-avatar \"http://api.faceholder.io/faces?id=1\" style=\"accent\" round=true}}\n      {{uxs-avatar-text \"BB\" style=\"accent\" round=true}}\n      {{uxs-avatar-icon \"invert_colors\" style=\"accent\" round=true}}\n    </div>\n    <div class=\"f fr\">\n      {{uxs-avatar \"http://api.faceholder.io/faces?id=2\" style=\"dark\" round=true}}\n      {{uxs-avatar-text \"CC\" style=\"dark\" round=true}}\n      {{uxs-avatar-icon \"invert_colors\" style=\"dark\" round=true}}\n    </div>\n    <div class=\"f fr\">\n      {{uxs-avatar \"http://api.faceholder.io/faces?id=3\" style=\"grey\" round=true}}\n      {{uxs-avatar-text \"DD\" style=\"grey\" round=true}}\n      {{uxs-avatar-icon \"invert_colors\" style=\"grey\" round=true}}\n    </div>\n    <div class=\"f fr\">\n      {{uxs-avatar \"http://api.faceholder.io/faces?id=4\" style=\"mid\" round=true}}\n      {{uxs-avatar-text \"EE\" style=\"mid\" round=true}}\n      {{uxs-avatar-icon \"invert_colors\" style=\"mid\" round=true}}\n    </div>\n    <div class=\"f fr\">\n      {{uxs-avatar \"http://api.faceholder.io/faces?id=5\" style=\"light\" round=true}}\n      {{uxs-avatar-text \"FF\" style=\"light\" round=true}}\n      {{uxs-avatar-icon \"invert_colors\" style=\"light\" round=true}}\n    </div>\n    <div class=\"f fr\">\n      {{uxs-avatar \"http://api.faceholder.io/faces?id=6\" style=\"white\" round=true}}\n      {{uxs-avatar-text \"GG\" style=\"white\" round=true}}\n      {{uxs-avatar-icon \"invert_colors\" style=\"white\" round=true}}\n    </div>\n    <div class=\"f fr\">\n      {{uxs-avatar \"http://api.faceholder.io/faces?id=7\" style=\"success\" round=true}}\n      {{uxs-avatar-text \"HH\" style=\"success\" round=true}}\n      {{uxs-avatar-icon \"invert_colors\" style=\"success\" round=true}}\n    </div>\n    <div class=\"f fr\">\n      {{uxs-avatar \"http://api.faceholder.io/faces?id=8\" style=\"warning\" round=true}}\n      {{uxs-avatar-text \"II\" style=\"warning\" round=true}}\n      {{uxs-avatar-icon \"invert_colors\" style=\"warning\" round=true}}\n    </div>\n    <div class=\"f fr\">\n      {{uxs-avatar \"http://api.faceholder.io/faces?id=9\" style=\"error\" round=true}}\n      {{uxs-avatar-text \"JJ\" style=\"error\" round=true}}\n      {{uxs-avatar-icon \"invert_colors\" style=\"error\" round=true}}\n    </div>\n",
    "avatars": "\n    {{uxs-avatar\n      \"https://placeimg.com/100/100/people\"\n      size=size\n      border=border\n      round=round\n    }}\n",
    "basic-demo.hbs": "\n    {{uxs-button\n      text\n      disabled=disabled\n      inline=inline\n      loading=loading\n      loadingText=loadingText\n      naked=naked\n      size=size\n      style=style\n    }}\n",
    "basic-list-subheading.hbs": "\n    {{#uxs-list as |list|}}\n      {{list.subheading title bordered=bordered style=style}}\n      {{#list.item as |item|}}\n        {{item.content \"List Item One\"}}\n      {{/list.item}}\n      {{#list.item as |item|}}\n        {{item.content \"List Item Two\"}}\n      {{/list.item}}\n    {{/uxs-list}}",
    "basic-splash.hbs": "\n    {{#uxs-splash align=align style=style as |splash|}}\n      {{splash.icon \"inbox\"}}\n      {{splash.title \"Inbox Zero\"}}\n      {{splash.text \"Congratulations, you have no more email!\"}}\n    {{/uxs-splash}}\n",
    "basic-tabs.hbs": "\n    {{#uxs-tabs align=align disabled=disabled style=style as |tab|}}\n      {{tab.link \"Dog\" \"docs.navigation.tabs.dogs\"}}\n      {{tab.link \"Cat\" \"docs.navigation.tabs.cats\"}}\n      {{tab.item \"Fish\" onClick=(action \"swimFish\")}}\n    {{/uxs-tabs}}\n",
    "button-action-demo": "  actions: {\n    buttonPressed(name) {\n      alert(`A button called \"${name}\" has been hit!`);\n    },\n  },",
    "button-action-demo.hbs": "\n    {{uxs-button\n      \"HIT ME ONCE\"\n      name=\"hit-me\"\n      onClick=(action \"buttonPressed\" \"hit-me-1\")\n    }}\n    {{uxs-button\n      \"HIT ME TWICE\"\n      name=\"hit-me\"\n      onClick=(action \"buttonPressed\" \"hit-me-2\")\n      disabled=true\n    }}\n    {{uxs-button\n      \"HIT ME THRICE\"\n      name=\"hit-me\"\n      onClick=(action \"buttonPressed\" \"hit-me-3\")\n    }}\n",
    "button-group-basic-demo.hbs": "\n    {{#uxs-button-group\n      align=align\n      disabled=disabled\n      padded=padded\n      row=row\n      style=style\n    as |group|\n    }}\n      {{group.button \"Save\" style=\"primary\"}}\n      {{group.button \"Save & Publish\" style=\"primary\"}}\n      {{group.link \"Cancel\" \"docs.forms.buttons\" style=\"warning\"}}\n    {{/uxs-button-group}}\n",
    "button-menus": "\n    {{#basic-dropdown as |dropdown|}}\n      {{#dropdown.trigger}}\n        {{uxs-icon \"filter_list\"}}\n      {{/dropdown.trigger}}\n      {{#dropdown.content class=\"uxs-ns\"}}\n        {{#uxs-menu as |menu|}}\n          {{#menu.item}}Normal nav item{{/menu.item}}\n          {{#menu.item}}And another{{/menu.item}}\n          {{menu.separator}}\n          {{#menu.link \"docs.index\"}}This one is a link{{/menu.link}}\n        {{/uxs-menu}}\n      {{/dropdown.content}}\n    {{/basic-dropdown}}\n",
    "content-basic-demo.hbs": "\n    {{#uxs-content\n      align=align\n      color=color\n      size=size\n      style=style\n      weight=weight\n    }}\n      Suspendisse mattis in mollis a a sociosqu gravida ultricies consectetur id sagittis quisque adipiscing lobortis integer ac suspendisse congue at praesent et condimentum phasellus morbi feugiat sed. Suspendisse natoque elementum nisl adipiscing ad quis sem ut aliquam cum purus ac condimentum a a eget curae ridiculus a parturient sed.\n    {{/uxs-content}}\n    {{#uxs-content\n      align=align\n      color=color\n      size=size\n      style=style\n      weight=weight\n    }}\n      In a inceptos maecenas sit sit non parturient a non nunc maecenas netus in sapien scelerisque.Viverra habitasse id adipiscing montes parturient sagittis a ridiculus nec molestie vestibulum quisque ultrices varius ante nec adipiscing. Metus sem fames nulla vestibulum ad sapien adipiscing condimentum a ut ac sociosqu dui fermentum a gravida dis.\n    {{/uxs-content}}\n",
    "custom-preamble": "\n    {{#uxs-preamble style=style class=\"mb\" as |pre|}}\n      {{pre.icon \"date_range\" prefix=true}}\n      {{#pre.body}}\n        {{pre.content\n          \"This is a custom preamble with buttons and detail text. Augue parturient aptent rhoncus parturient a aptent.\"\n        }}\n        {{pre.content\n          \"Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent\"\n        }}\n        {{uxs-button \"Hit Me\" }}\n      {{/pre.body}}\n    {{/uxs-preamble}}\n",
    "custom-text-demo.hbs": "\n    {{#uxs-avatar-text\n      bordered=borderd\n      rounded=rounded\n      size=size\n      style=style\n    as |avatar|\n    }}\n      {{avatar.large \"99\"}}\n      {{avatar.small \"THINGS\"}}\n    {{/uxs-avatar-text}}\n",
    "datalist-all-styles.hbs": "\n    {{#each styles as |style|}}\n      {{#uxs-datalist style=style bordered=true as |list|}}\n        {{list.item label=\"Style\" value=(capitalize style)}}\n      {{/uxs-datalist}}\n    {{/each}}\n",
    "datalist-basic-demo.hbs": "\n    {{#uxs-datalist bordered=bordered style=style as |list|}}\n      {{list.item label=\"Name\" value=\"Frida Wardlaw\"}}\n      {{list.item label=\"GID\" value=\"0123456789\"}}\n      {{list.item label=\"Job Title\" value=\"Kid\"}}\n      {{list.item label=\"Email\" value=null empty=\"No Email\"}}\n      {{list.item\n        label=\"Last Login\"\n        value=\"20/01/18\"\n        tip=\"This is the last time the user accessed the system\"\n      }}\n      {{list.item label=\"Nothing\" value=null }}\n    {{/uxs-datalist}}\n",
    "datalist-item-demo.hbs": "\n    {{#uxs-datalist as |list|}}\n      {{list.item\n        label=label\n        value=value\n        tip=tip\n        empty=empty\n      }}\n    {{/uxs-datalist}}\n",
    "detail-basic-demo.hbs": "\n    {{#uxs-detail\n      align=align\n      color=color\n      size=size\n      style=style\n      weight=weight\n    }}\n      Dictum vulputate consectetur condimentum ornare vel a lobortis a a elementum aptent cursus nisi nam vestibulum eu est. Vestibulum vivamus a ante enim condimentum ut ipsum adipiscing molestie turpis ut malesuada phasellus scelerisque condimentum phasellus lectus adipiscing sit penatibus parturient ridiculus vivamus ligula a.\n    {{/uxs-detail}}\n    {{#uxs-detail\n      align=align\n      color=color\n      size=size\n      style=style\n      weight=weight\n    }}\n      Vulputate vel a urna et eu blandit suspendisse condimentum elementum adipiscing condimentum a leo parturient suspendisse nunc aptent non dis eget id ultricies nam.\n    {{/uxs-detail}}\n",
    "dl-basic-demo.hbs": "\n    {{#uxs-dl\n      color=color\n      size=size\n      style=style\n      weight=weight\n    as |list|\n    }}\n      {{list.term \"Coffee\"}}\n      {{list.description \"Black hot drink\"}}\n      {{list.term \"Milk\"}}\n      {{list.description \"White cold drink\"}}\n    {{/uxs-dl}}\n",
    "form-control-basic-demo.hbs": "\n    {{uxs-form-control\n      disabled=disabled\n      label=label\n      name=\"my-control\"\n      style=style\n      tip=tip\n      type=type\n      value=value\n    }}\n",
    "form-control-contextual-demo.hbs": "\n    {{#uxs-form-control style=style disabled=disabled as |control|}}\n      {{control.label label}}\n      {{control.input value=value}}\n      {{control.tip tip}}\n    {{/uxs-form-control}}\n",
    "form-date-basic-demo.hbs": "\n    {{uxs-form-date\n      disabled=disabled\n      inline=inline\n      placeholder=\"Enter Date\"\n      style=style\n      value=(readonly date)\n      onChange=(action \"setDate\")\n      class=\"mb\"\n    }}\n    {{uxs-form-time\n      disabled=disabled\n      inline=inline\n      placeholder=\"Enter Time\"\n      style=style\n      value=(readonly time)\n      onChange=(action \"setTime\")\n      class=\"mb\"\n    }}\n    {{uxs-form-date\n      disabled=disabled\n      inline=inline\n      placeholder=\"Enter Datetime\"\n      style=style\n      value=(readonly datetime)\n      onChange=(action \"setDate\")\n      class=\"mb\"\n    }}\n",
    "form-date-styles.hbs": "\n    {{uxs-form-date\n      placeholder=\"DEFAULT\"\n      date=(readonly date)\n      onChange=(action \"setDate\")\n      class=\"mb\"\n    }}\n    {{uxs-form-date\n      placeholder=\"PRIMARY\"\n      style=\"primary\"\n      date=(readonly date)\n      onChange=(action \"setDate\")\n      class=\"mb\"\n    }}\n    {{uxs-form-date\n      placeholder=\"ACCENT\"\n      style=\"accent\"\n      date=(readonly date)\n      onChange=(action \"setDate\")\n      class=\"mb\"\n    }}\n    {{uxs-form-date\n      placeholder=\"WARNING\"\n      style=\"warning\"\n      date=(readonly date)\n      onChange=(action \"setDate\")\n      class=\"mb\"\n    }}\n    {{uxs-form-date\n      placeholder=\"ERROR\"\n      style=\"error\"\n      date=(readonly date)\n      onChange=(action \"setDate\")\n      class=\"mb\"\n    }}\n    {{uxs-form-date\n      placeholder=\"DARK\"\n      style=\"dark\"\n      date=(readonly date)\n      onChange=(action \"setDate\")\n      class=\"mb\"\n    }}\n    {{uxs-form-date\n      placeholder=\"GREY\"\n      style=\"grey\"\n      date=(readonly date)\n      onChange=(action \"setDate\")\n      class=\"mb\"\n    }}\n    {{uxs-form-date\n      placeholder=\"MID\"\n      style=\"mid\"\n      date=(readonly date)\n      onChange=(action \"setDate\")\n      class=\"mb\"\n    }}\n    {{uxs-form-date\n      placeholder=\"LIGHT\"\n      style=\"light\"\n      date=(readonly date)\n      onChange=(action \"setDate\")\n      class=\"mb\"\n    }}\n    {{uxs-form-date\n      placeholder=\"WHITE\"\n      style=\"white\"\n      date=(readonly date)\n      onChange=(action \"setDate\")\n      class=\"mb\"\n    }}\n",
    "form-date-time-action": "    setDate(dates, format, ref) {\n      Ember.Logger.log({\n        dates,\n        format,\n        ref\n      });\n    },\n    setTime(dates, format, ref) {\n      Ember.Logger.log({\n        dates,\n        format,\n        ref\n      });\n    },",
    "form-dropdown-basic-demo.hbs": "\n    {{#uxs-form-dropdown\n      disabled=disabled\n      selected=name\n      options=nameOptions\n      onchange=(action (mut name))\n      name=\"my-dropdown\"\n      style=style\n      inline=inline\n    as |name|\n    }}\n      {{name}}\n    {{/uxs-form-dropdown}}\n\n    <div class=\"mt detail\">Selected: <b>{{name}}</b></div>\n",
    "form-input-action": "    enterPressed(value) {\n      Ember.Logger.log(`Enter pressed for ${value}`);\n    }",
    "form-input-basic-demo": "  actions: {\n    enterPressed(value) {\n      window.alert(`${value} entered`);\n    }\n  }",
    "form-input-basic-demo.hbs": "\n    {{uxs-form-input\n      disabled=disabled\n      enter=(action \"enterPressed\" value)\n      inline=inline\n      placeholder=placeholder\n      style=style\n      type=type\n      value=value\n    }}\n",
    "form-input-styles.hbs": "\n    {{uxs-form-input\n      type=\"text\"\n      placeholder=\"DEFAULT\"\n      class=\"mb\"\n    }}\n    {{uxs-form-input\n      type=\"text\"\n      placeholder=\"PRIMARY\"\n      style=\"primary\"\n      class=\"mb\"\n    }}\n    {{uxs-form-input\n      type=\"text\"\n      placeholder=\"ACCENT\"\n      style=\"accent\"\n      class=\"mb\"\n    }}\n    {{uxs-form-input\n      type=\"text\"\n      placeholder=\"WARNING\"\n      style=\"warning\"\n      class=\"mb\"\n    }}\n    {{uxs-form-input\n      type=\"text\"\n      placeholder=\"ERROR\"\n      style=\"error\"\n      class=\"mb\"\n    }}\n    {{uxs-form-input\n      type=\"text\"\n      placeholder=\"DARK\"\n      style=\"dark\"\n      class=\"mb\"\n    }}\n    {{uxs-form-input\n      type=\"text\"\n      placeholder=\"GREY\"\n      style=\"grey\"\n      class=\"mb\"\n    }}\n    {{uxs-form-input\n      type=\"text\"\n      placeholder=\"MID\"\n      style=\"mid\"\n      class=\"mb\"\n    }}\n    {{uxs-form-input\n      type=\"text\"\n      placeholder=\"LIGHT\"\n      style=\"light\"\n      class=\"mb\"\n    }}\n    {{uxs-form-input\n      type=\"text\"\n      placeholder=\"WHITE\"\n      style=\"white\"\n      class=\"mb\"\n    }}\n",
    "form-row-button": "\n    {{#uxs-form as |form|}}\n\n      {{#form.row as |row|}}\n        {{row.input name=\"search\" type=\"search\" placeholder=\"Enter your search term\"}}\n        {{row.button \"Go\" name=\"go\"}}\n      {{/form.row}}\n\n    {{/uxs-form}}\n",
    "form-row-icon": "\n    {{#uxs-form model=model as |form|}}\n\n      {{#form.control\n        label=\"Email\"\n        name=\"email\"\n        tip=\"Please enter your email address\"\n      as |control|\n      }}\n\n        {{#control.row as |row|}}\n          {{row.icon \"email\" prefix=true}}\n          {{row.input placeholder=\"Email\"}}\n        {{/control.row}}\n\n      {{/form.control}}\n\n      {{#form.control\n        label=\"Phone Number\"\n        name=\"phone\"\n        tip=\"Please enter your phone number including an international code\"\n      as |control|\n      }}\n\n        {{#control.row as |row|}}\n          {{row.input placeholder=\"+00 0000 000000\"}}\n          {{row.icon \"phone\" suffix=true}}\n        {{/control.row}}\n\n      {{/form.control}}\n\n    {{/uxs-form}}\n",
    "form-row-inputs": "\n    {{#uxs-form model=model as |form|}}\n\n      {{#form.control\n        label=\"Name\"\n        name=\"name\"\n        tip=\"Please enter you name curabitur diam sodales gravida quis adipiscing libero elementum\"\n        disabled=disabled\n      as |control|\n      }}\n\n        {{#control.row as |row|}}\n          {{#row.dropdown\n            selected=model.title\n            options=titles\n            onchange=(action (mut model.title))\n          as |title|\n          }}\n            {{title}}\n          {{/row.dropdown}}\n          {{row.input name=\"firstName\" placeholder=\"First Name\"}}\n          {{row.input name=\"lastName\" placeholder=\"Last Name\"}}\n        {{/control.row}}\n\n      {{/form.control}}\n\n    {{/uxs-form}}\n",
    "form-row-styles": "\n    <div class=\"p\">\n      {{#each darkStyles as |style|}}\n\n        {{#uxs-form style=style model=model as |form|}}\n          {{#form.control\n            label=\"Email\"\n            name=\"email\"\n            tip=\"Please enter your email address\"\n          as |control|\n          }}\n            {{#control.row as |row|}}\n              {{row.icon \"email\" prefix=true}}\n              {{row.input placeholder=\"Email\"}}\n            {{/control.row}}\n          {{/form.control}}\n          {{#form.control\n            label=\"Phone Number\"\n            name=\"phone\"\n            tip=\"Please enter your phone number including an international code\"\n          as |control|\n          }}\n            {{#control.row as |row|}}\n              {{row.input placeholder=\"+00 0000 000000\"}}\n              {{row.icon \"phone\" suffix=true}}\n            {{/control.row}}\n          {{/form.control}}\n          {{#form.control}}\n            {{#form.row as |row|}}\n              {{row.input name=\"search\" type=\"search\" placeholder=\"Enter your search term\"}}\n              {{row.button (capitalize style) name=\"go\"}}\n            {{/form.row}}\n          {{/form.control}}\n        {{/uxs-form}}\n\n      {{/each}}\n    </div>\n    <div class=\"bg-dark p\">\n      {{#each lightStyles as |style|}}\n\n        {{#uxs-form style=style model=model as |form|}}\n          {{#form.control\n            label=\"Email\"\n            name=\"email\"\n            tip=\"Please enter your email address\"\n          as |control|\n          }}\n            {{#control.row as |row|}}\n              {{row.icon \"email\" prefix=true}}\n              {{row.input placeholder=\"Email\"}}\n            {{/control.row}}\n          {{/form.control}}\n          {{#form.control\n            label=\"Phone Number\"\n            name=\"phone\"\n            tip=\"Please enter your phone number including an international code\"\n          as |control|\n          }}\n            {{#control.row as |row|}}\n              {{row.input placeholder=\"+00 0000 000000\"}}\n              {{row.icon \"phone\" suffix=true}}\n            {{/control.row}}\n          {{/form.control}}\n          {{#form.control}}\n            {{#form.row as |row|}}\n              {{row.input name=\"search\" type=\"search\" placeholder=\"Enter your search term\"}}\n              {{row.button (capitalize style) name=\"go\"}}\n            {{/form.row}}\n          {{/form.control}}\n        {{/uxs-form}}\n\n      {{/each}}\n    </div>\n",
    "form-textarea": "    {{uxs-form-textarea value=value enter=(action \"enterPressed\" value)}}",
    "form-textarea-action": "    enterPressed(value) {\n      Ember.Logger.log(`Enter pressed for ${value}`);\n    }",
    "form-textarea-basic-demo.hbs": "\n    {{uxs-form-textarea\n      cols=cols\n      disabled=disabled\n      enter=(action \"enterPressed\" value)\n      inline=inline\n      placeholder=placeholder\n      rows=rows\n      style=style\n      value=value\n    }}\n",
    "form-textarea-further": "    {{uxs-form-textarea\n      value=value\n      rows=rows\n      cols=cols\n      placeholder=placeholder\n      disabled=disabled\n      maxlength=maxlength\n      wrap=wrap\n      readonly=readonly\n      autofocus=autofocus\n      spellcheck=spellcheck\n    }}",
    "form-textarea-styles": "\n    <div class=\"p\">\n      {{#each darkStyles as |style|}}\n\n        <div class=\"mb\">\n          {{uxs-form-textarea\n            value=value\n            style=style\n            placeholder=(concat (capitalize style) \" Style\")\n          }}\n        </div>\n\n      {{/each}}\n    </div>\n    <div class=\"bg-dark p\">\n    {{#each lightStyles as |style|}}\n\n      <div class=\"mb\">\n        {{uxs-form-textarea\n          value=value\n          style=style\n          placeholder=(concat (capitalize style) \" Style\")\n        }}\n      </div>\n\n    {{/each}}\n    </div>\n",
    "form-textarea-styles.hbs": "\n    {{uxs-form-textarea\n      type=\"text\"\n      placeholder=\"DEFAULT\" \n      class=\"mb\"\n    }}\n    {{uxs-form-textarea\n      type=\"text\"\n      placeholder=\"PRIMARY\"\n      style=\"primary\"\n      class=\"mb\"\n    }}\n    {{uxs-form-textarea\n      type=\"text\"\n      placeholder=\"ACCENT\"\n      style=\"accent\"\n      class=\"mb\"\n    }}\n    {{uxs-form-textarea\n      type=\"text\"\n      placeholder=\"WARNING\"\n      style=\"warning\"\n      class=\"mb\"\n    }}\n    {{uxs-form-textarea\n      type=\"text\"\n      placeholder=\"ERROR\"\n      style=\"error\"\n      class=\"mb\"\n    }}\n    {{uxs-form-textarea\n      type=\"text\"\n      placeholder=\"DARK\"\n      style=\"dark\"\n      class=\"mb\"\n    }}\n    {{uxs-form-textarea\n      type=\"text\"\n      placeholder=\"GREY\"\n      style=\"grey\"\n      class=\"mb\"\n    }}\n    {{uxs-form-textarea\n      type=\"text\"\n      placeholder=\"MID\"\n      style=\"mid\"\n      class=\"mb\"\n    }}\n    {{uxs-form-textarea\n      type=\"text\"\n      placeholder=\"LIGHT\"\n      style=\"light\"\n      class=\"mb\"\n    }}\n    {{uxs-form-textarea\n      type=\"text\"\n      placeholder=\"WHITE\"\n      style=\"white\"\n      class=\"mb\"\n    }}\n",
    "form-validation": "\n    {{#uxs-form\n      onSubmit=(action \"login\" model)\n      model=model\n    as |form|\n    }}\n\n      {{form.control\n        label=\"Username\"\n        name=\"username\"\n        type=\"text\"\n        autocomplete=\"username\"\n      }}\n\n      {{form.control\n        label=\"Password\"\n        name=\"password\"\n        type=\"password\"\n        autocomplete=\"password\"\n      }}\n\n      {{form.submit \"Login\"}}\n\n    {{/uxs-form}}\n",
    "form-validation-route": "  model: function() {\n    return this.store.createRecord('session');\n  },",
    "header-basic-demo.hbs": "\n    {{#uxs-header style=style as |header|}}\n      {{#header.toolbar as |toolbar|}}\n        {{toolbar.back \"arrow_back\"}}\n        {{toolbar.spacer}}\n        {{toolbar.action \"filter_list\"}}\n        {{toolbar.action \"file_download\"}}\n        {{toolbar.action \"search\"}}\n      {{/header.toolbar}}\n      {{header.title title}}\n    {{/uxs-header}}\n",
    "header-image-demo.hbs": "\n    {{#uxs-header style=style image=image as |header|}}\n      {{#header.toolbar as |toolbar|}}\n        {{toolbar.back \"arrow_back\"}}\n        {{toolbar.spacer}}\n        {{toolbar.action \"filter_list\"}}\n        {{toolbar.action \"file_download\"}}\n        {{toolbar.action \"search\"}}\n      {{/header.toolbar}}\n      {{header.title title}}\n    {{/uxs-header}}\n",
    "heading-basic-demo.hbs": "\n    {{uxs-heading\n      text\n      align=align\n      color=color\n      size=size\n      style=style\n      weight=weight\n    }}\n",
    "hero": "\n    {{#uxs-hero image=\"https://placeimg.com/2560/1600/any/grayscale\" as |hero|}}\n      {{hero.heading \"We Are Sauce\" huge=true}}\n      {{hero.content \"Dis per bibendum adipiscing a velit sociosqu a habitant.\"}}\n      {{hero.button \"Let's Do It\"}}\n    {{/uxs-hero}}\n",
    "icon-action-demo.hbs": "\n    {{uxs-icon icon onClick=(action \"save\")}}\n",
    "icon-action-demo.js": "  actions: {\n    save() {\n      window.alert(\"Ola!\");\n    }\n  }",
    "icon-actions": "  actions: {\n    save(icon) {\n      alert(`icon \"${icon}\" has been hit!`);\n    },\n  },",
    "icon-avatar-list": "\n    {{#uxs-list lines=3 bordered=true as |list|}}\n      {{#each items as |thing|}}\n        {{#list.item as |item|}}\n          {{#item.aside}}\n            {{item.avatarText thing.count round=true}}\n          {{/item.aside}}\n          {{#item.body}}\n            {{item.title thing.title}}\n            {{item.detail thing.location}}\n            {{item.detail thing.email}}\n          {{/item.body}}\n          {{#item.aside}}\n            {{item.action \"keyboard_arrow_right\"}}\n          {{/item.aside}}\n        {{/list.item}}\n      {{/each}}\n    {{/uxs-list}}\n",
    "icon-basic-demo.hbs": "\n    {{uxs-icon icon style=style size=size disabled=disabled}}\n",
    "icon-demo.hbs": "\n    {{uxs-avatar-icon\n      \"star\"\n      bordered=borderd\n      rounded=rounded\n      size=size\n      style=style\n    }}\n",
    "icon-pills": "\n    {{#uxs-div class=\"clear\"}}\n\n      {{uxs-pill\n        \"primary\"\n        style=\"primary\"\n        size=size\n        rounded=rounded\n        prefixIcon=\"check_circle\"\n      }}\n\n      {{uxs-pill\n        \"accent\"\n        style=\"accent\"\n        size=size\n        rounded=rounded\n        suffixIcon=\"account_circle\"\n      }}\n      {{uxs-pill\n        \"warning\"\n        style=\"warning\"\n        size=size\n        rounded=rounded\n        prefixIcon=\"add_circle\"\n        suffixIcon=\"remove_circle\"\n      }}\n      {{uxs-pill\n        \"error\"\n        style=\"error\"\n        size=size\n        rounded=rounded\n      }}\n    {{/uxs-div}}\n",
    "icon-sizes": "\n    {{#uxs-text size=\"tiny\" style=style}}\n      {{uxs-pill \"primary\" style=\"primary\" size=\"tiny\"}}\n      Tiny\n    {{/uxs-text}}\n\n    {{#uxs-text size=\"small\" style=style}}\n      {{uxs-pill \"accent\" style=\"accent\" size=\"small\"}}\n      Small\n    {{/uxs-text}}\n\n    {{#uxs-text size=\"medium\" style=style}}\n      {{uxs-pill \"warning\" style=\"warning\" size=\"medium\"}}\n       Medium\n    {{/uxs-text}}\n\n    {{#uxs-text size=\"large\" style=style}}\n      {{uxs-pill \"error\" style=\"error\" size=\"large\"}}\n      Large\n    {{/uxs-text}}\n\n    {{#uxs-text size=\"huge\" style=style}}\n      {{uxs-pill \"dark\" style=\"dark\" size=\"huge\"}}\n      Huge\n    {{/uxs-text}}\n\n    {{#uxs-text size=\"giant\" style=style}}\n      {{uxs-pill \"grey\" style=\"grey\" size=\"giant\"}}\n      Giant\n    {{/uxs-text}}\n",
    "image-demo.hbs": "\n    {{uxs-avatar\n      \"https://api.faceholder.io/faces\"\n      bordered=borderd\n      rounded=rounded\n      size=size\n      style=style\n    }}\n",
    "inline-demo.hbs": "\n    <p>\n      Here are some inline buttons\n      {{uxs-button\n        \"BUTTON ONE\"\n        inline=true\n        style=\"primary\"\n      }}{{uxs-button\n        \"BUTTON TWO\"\n        inline=true\n        style=\"warning\"\n      }} thanks.\n    </p>\n",
    "list-aside": "\n    {{#uxs-list lines=3 bordered=true as |list|}}\n      {{#each items as |thing|}}\n        {{#list.item as |item|}}\n          {{#item.aside}}\n            {{item.avatar \"https://placeimg.com/100/100/any\" round=true}}\n          {{/item.aside}}\n          {{#item.body}}\n            {{item.title thing.title}}\n            {{item.detail thing.location}}\n            {{item.detail thing.email}}\n          {{/item.body}}\n          {{#item.aside}}\n            {{item.action \"keyboard_arrow_right\"}}\n          {{/item.aside}}\n        {{/list.item}}\n      {{/each}}\n    {{/uxs-list}}\n",
    "list-item-basic-demo.hbs": "\n    {{#uxs-list as |list|}}\n      {{#each items as |thing|}}\n        {{#list.item as |item|}}\n          {{item.title thing.title}}\n        {{/list.item}}\n      {{/each}}\n    {{/uxs-list}}\n",
    "list-items-avatar-demo.hbs": "\n    {{#uxs-list lines=3 bordered=true as |list|}}\n      {{#each items as |thing|}}\n        {{#list.item as |item|}}\n          {{#item.aside}}\n            {{item.avatar \"https://placeimg.com/100/100/any\" round=true}}\n          {{/item.aside}}\n          {{#item.body}}\n            {{item.title thing.title}}\n            {{item.detail thing.location}}\n            {{item.detail thing.email}}\n          {{/item.body}}\n          {{#item.aside}}\n            {{item.action \"keyboard_arrow_right\"}}\n          {{/item.aside}}\n        {{/list.item}}\n      {{/each}}\n    {{/uxs-list}}\n",
    "list-items-content-demo.hbs": "\n    {{#uxs-list lines=2 bordered=true as |list|}}\n      {{#each items as |thing|}}\n        {{#list.item as |item|}}\n          {{#item.content}}\n            {{item.title thing.title}}\n            {{item.content thing.location}}\n          {{/item.content}}\n        {{/list.item}}\n      {{/each}}\n    {{/uxs-list}}\n",
    "list-notice-styles": "    {{#each styles as |style|}}\n\n      {{uxs-list-notice\n        \"Displaying Filtered Results\"\n        icon=\"filter_list\"\n        actionText=\"Clear\"\n        onClick=(action \"noticeAction\")\n        style=style\n      }}\n\n    {{/each}}",
    "list-notice-styles.hbs": "\n    {{uxs-list-notice\n      \"Displaying Filtered Results\"\n      icon=\"filter_list\"\n      actionText=\"Clear\"\n      onClick=(action \"noticeAction\")\n      style=\"primary\"\n    }}\n    {{uxs-list-notice\n      \"Displaying Filtered Results\"\n      icon=\"filter_list\"\n      actionText=\"Clear\"\n      onClick=(action \"noticeAction\")\n      style=\"accent\"\n    }}\n    {{uxs-list-notice\n      \"Displaying Filtered Results\"\n      icon=\"filter_list\"\n      actionText=\"Clear\"\n      onClick=(action \"noticeAction\")\n      style=\"warning\"\n    }}\n    {{uxs-list-notice\n      \"Displaying Filtered Results\"\n      icon=\"filter_list\"\n      actionText=\"Clear\"\n      onClick=(action \"noticeAction\")\n      style=\"error\"\n    }}\n    {{uxs-list-notice\n      \"Displaying Filtered Results\"\n      icon=\"filter_list\"\n      actionText=\"Clear\"\n      onClick=(action \"noticeAction\")\n      style=\"dark\"\n    }}\n    {{uxs-list-notice\n      \"Displaying Filtered Results\"\n      icon=\"filter_list\"\n      actionText=\"Clear\"\n      onClick=(action \"noticeAction\")\n      style=\"grey\"\n    }}\n    {{uxs-list-notice\n      \"Displaying Filtered Results\"\n      icon=\"filter_list\"\n      actionText=\"Clear\"\n      onClick=(action \"noticeAction\")\n      style=\"mid\"\n    }}\n    {{uxs-list-notice\n      \"Displaying Filtered Results\"\n      icon=\"filter_list\"\n      actionText=\"Clear\"\n      onClick=(action \"noticeAction\")\n      style=\"light\"\n    }}\n    {{uxs-list-notice\n      \"Displaying Filtered Results\"\n      icon=\"filter_list\"\n      actionText=\"Clear\"\n      onClick=(action \"noticeAction\")\n      style=\"white\"\n    }}\n",
    "list-notices": "\n\n    {{#uxs-list lines=3 bordered=true as |list|}}\n      {{list.notice\n        \"Displaying Filtered Results\"\n        icon=\"filter_list\"\n        actionText=\"Clear\"\n        onClick=(action \"noticeAction\")\n      }}\n      {{#list.item as |item|}}\n        {{#item.aside}}\n          {{item.avatar \"https://placeimg.com/100/100/any\" round=true}}\n        {{/item.aside}}\n        {{#item.body}}\n          {{item.title \"Filtered Item\"}}\n          {{item.detail \"Notice how the list avatar\"}}\n          {{item.detail \"matches the notice icon\"}}\n        {{/item.body}}\n        {{#item.aside}}\n          {{item.action \"keyboard_arrow_right\"}}\n        {{/item.aside}}\n      {{/list.item}}\n    {{/uxs-list}}\n",
    "list-notices-basic.hbs": "\n    {{#uxs-list lines=3 bordered=true as |list|}}\n      {{list.notice\n        text\n        style=style\n      }}\n      {{#list.item as |item|}}\n        {{#item.aside}}\n          {{item.avatar \"https://placeimg.com/100/100/any\" round=true}}\n        {{/item.aside}}\n        {{#item.body}}\n          {{item.title \"Filtered Item\"}}\n          {{item.detail \"Notice how the list avatar\"}}\n          {{item.detail \"matches the notice icon\"}}\n        {{/item.body}}\n        {{#item.aside}}\n          {{item.action \"keyboard_arrow_right\"}}\n        {{/item.aside}}\n      {{/list.item}}\n    {{/uxs-list}}\n",
    "list-notices-icon-action.hbs": "\n    {{#uxs-list lines=3 bordered=true as |list|}}\n      {{list.notice\n        text\n        style=style\n        icon=icon\n        actionText=actionText\n        onClick=(action \"noticeAction\")\n      }}\n      {{#list.item as |item|}}\n        {{#item.aside}}\n          {{item.avatar \"https://placeimg.com/100/100/any\" round=true}}\n        {{/item.aside}}\n        {{#item.body}}\n          {{item.title \"Filtered Item\"}}\n          {{item.detail \"Notice how the list avatar\"}}\n          {{item.detail \"matches the notice icon\"}}\n        {{/item.body}}\n        {{#item.aside}}\n          {{item.action \"keyboard_arrow_right\"}}\n        {{/item.aside}}\n      {{/list.item}}\n    {{/uxs-list}}\n",
    "list-subheading-styles": "\n    {{#uxs-list lines=3 bordered=true as |list|}}\n\n      <div class=\"bg-white\">\n        {{#each darkStyles as |style|}}\n\n          {{list.subheading (capitalize style) style=style}}\n\n        {{/each}}\n      </div>\n      <div class=\"bg-dark\">\n        {{#each lightStyles as |style|}}\n\n          {{list.subheading (capitalize style) style=style}}\n\n        {{/each}}\n      </div>\n    {{/uxs-list}}\n",
    "list-subheadings": "\n    {{#uxs-list lines=3 bordered=true as |list|}}\n      {{list.subheading \"Subheading\"}}\n      {{#list.item as |item|}}\n        {{#item.aside}}\n          {{item.avatar \"https://placeimg.com/100/100/any\" round=true}}\n        {{/item.aside}}\n        {{#item.body}}\n          {{item.title \"Filtered Item\"}}\n          {{item.detail \"Notice how the list avatar\"}}\n          {{item.detail \"matches the notice icon\"}}\n        {{/item.body}}\n        {{#item.aside}}\n          {{item.action \"keyboard_arrow_right\"}}\n        {{/item.aside}}\n      {{/list.item}}\n    {{/uxs-list}}\n",
    "lists-styles": "\n    {{#each styles as |style|}}\n\n      {{#uxs-list style=style lines=3 bordered=true as |list|}}\n        {{list.subheading (capitalize (concat style \" Subheading\"))}}\n        {{#list.item as |item|}}\n          {{#item.aside}}\n            {{item.avatar \"http://api.faceholder.io/faces?id=0\" round=true}}\n          {{/item.aside}}\n          {{#item.body}}\n            {{item.title (capitalize (concat style \" List\"))}}\n            {{item.detail \"foo\"}}\n            {{item.detail \"bar\"}}\n          {{/item.body}}\n          {{#item.aside}}\n            {{item.action \"invert_colors\"}}\n          {{/item.aside}}\n        {{/list.item}}\n        {{#list.item as |item|}}\n          {{#item.aside}}\n            {{item.avatarText \"AA\" round=true}}\n          {{/item.aside}}\n          {{#item.body}}\n            {{item.title (capitalize (concat style \" List\"))}}\n            {{item.detail \"foo\"}}\n            {{item.detail \"bar\"}}\n          {{/item.body}}\n          {{#item.aside}}\n            {{item.action \"invert_colors\"}}\n          {{/item.aside}}\n        {{/list.item}}\n        {{#list.item as |item|}}\n          {{#item.aside}}\n            {{item.avatarIcon \"beach_access\" round=true}}\n          {{/item.aside}}\n          {{#item.body}}\n            {{item.title (capitalize (concat style \" List\"))}}\n            {{item.detail \"foo\"}}\n            {{item.detail \"bar\"}}\n          {{/item.body}}\n          {{#item.aside}}\n            {{item.action \"invert_colors\"}}\n          {{/item.aside}}\n        {{/list.item}}\n      {{/uxs-list}}\n\n    {{/each}}\n",
    "main-aside-pane.hbs": "\n    {{#uxs-window}}\n      {{#uxs-pane\n        main=true\n        style=mainStyle\n        padded=padded\n      }}\n        {{uxs-heading \"Main Pane\"}}\n        {{#uxs-content}}\n          Turpis in eros morbi scelerisque nisl condimentum ut ultricies scelerisque sociosqu venenatis cum parturient id eleifend sodales vitae rutrum sociosqu accumsan.\n        {{/uxs-content}}\n        {{#uxs-content}}\n          Bibendum etiam at nascetur morbi proin tristique quam aenean dictumst vestibulum odio proin bibendum leo scelerisque ullamcorper dui.\n        {{/uxs-content}}\n      {{/uxs-pane}}\n      {{#uxs-pane\n        aside=true\n        style=asideStyle\n        padded=padded\n      }}\n        {{uxs-heading \"Aside\"}}\n        {{uxs-button \"Action 1\"}}\n        {{uxs-button \"Action 2\"}}\n        {{uxs-button \"Action 3\"}}\n      {{/uxs-pane}}\n    {{/uxs-window}}\n",
    "menu": "\n    <div class=\"f fr\">\n      <div class=\"mr\">\n        {{#uxs-menu as |menu|}}\n          {{menu.item \"Maps\"}}\n          {{menu.item \"Books\"}}\n          {{menu.item \"Flights\"}}\n          {{menu.item \"Apps\"}}\n        {{/uxs-menu}}\n      </div>\n      <div class=\"mr\">\n        {{#uxs-menu as |menu|}}\n          {{menu.item \"Refresh\"}}\n          {{menu.item \"Help & Feedback\"}}\n          {{menu.item \"Settings\"}}\n          {{menu.item \"Sign out\"}}\n        {{/uxs-menu}}\n      </div>\n    </div>\n",
    "menu-disabled": "\n    <div class=\"f fr\">\n      <div class=\"mr\">\n        {{#uxs-menu as |menu|}}\n          {{menu.item \"Back\"}}\n          {{menu.item \"Forward\" disabled=true}}\n          {{menu.divider}}\n          {{menu.item \"Recently Closed\" disabled=true}}\n          {{menu.item \"Google\" disabled=true}}\n          {{menu.item \"YouTube\"}}\n        {{/uxs-menu}}\n      </div>\n      <div class=\"mr\">\n        {{#uxs-menu as |menu|}}\n          {{menu.item \"Undo\"}}\n          {{menu.item \"Redo\" disabled=true}}\n          {{menu.divider}}\n          {{menu.item \"Cut\" disabled=true}}\n          {{menu.item \"Copy\" disabled=true}}\n          {{menu.item \"Paste\"}}\n        {{/uxs-menu}}\n      </div>\n    </div>\n",
    "menu-icons": "\n    <div class=\"f fr\">\n      <div class=\"mr\">\n        {{#uxs-menu hasLeftIcon=true as |menu|}}\n\n          {{menu.item \"Preview\" leftIcon=\"visibility\"}}\n          {{menu.item \"Share\" leftIcon=\"person_add\"}}\n          {{menu.item \"Get Links\" disabled=true  leftIcon=\"link\"}}\n          {{menu.divider}}\n          {{menu.item \"Make Copy\" leftIcon=\"content_copy\"}}\n          {{menu.item \"Download\" leftIcon=\"file_download\"}}\n          {{menu.divider}}\n          {{menu.item \"YouTube\" leftIcon=\"delete\"}}\n        {{/uxs-menu}}\n      </div>\n      <div class=\"mr\">\n        {{#uxs-menu hasRightIcon=true as |menu|}}\n          {{menu.item \"Clear Config\"}}\n          {{menu.item \"New Config\" disabled=true rightIcon=\"person_add\"}}\n          {{menu.item \"Project\" rightIcon=\"settings\"}}\n          {{menu.item \"Workspace\" rightIcon=\"settings\"}}\n          {{menu.item \"Bold\" rightIcon=\"format_bold\"}}\n          {{menu.item \"Italic\" rightIcon=\"format_italic\"}}\n        {{/uxs-menu}}\n      </div>\n    </div>\n",
    "menu-secondary-text": "\n    <div class=\"f fr\">\n      <div class=\"mr\">\n        {{#uxs-menu hasSecondaryText=true as |menu|}}\n          {{menu.item \"Bold\" rightIcon=\"format_italic\"}}\n          {{menu.item \"Italic\" secondaryText=\"⌘I\"}}\n          {{menu.item \"Underline\" secondaryText=\"⌘U\"}}\n          {{menu.item \"Strikethrough\" secondaryText=\"Alt+Shift+5\"}}\n          {{menu.item \"Superscript\" secondaryText=\"⌘.\"}}\n          {{menu.item \"Subscript\" secondaryText=\"⌘,\"}}\n          {{menu.divider}}\n          {{menu.item \"Clear Formatting\" secondaryText=\"⌘/\"}}\n        {{/uxs-menu}}\n      </div>\n      <div class=\"mr\">\n        {{#uxs-menu hasSecondaryText=true as |menu|}}\n          {{menu.item \"Open\" secondaryText=\"Cmd + O\"}}\n          {{menu.item \"Paste in place\" secondaryText=\"Shift + V\"}}\n          {{menu.item \"Research\" secondaryText=\"Opt + Shift + Cmd + I\"}}\n        {{/uxs-menu}}\n      </div>\n    </div>\n",
    "menu-styles": "\n    {{#each styles as |style|}}\n\n      {{#uxs-menu style=style class=\"mb\" horizontal=true as |menu|}}\n        {{menu.item (capitalize (concat style \" Menu\"))}}\n        {{menu.item \"Disabled Item\" disabled=true}}\n        {{menu.divider}}\n        {{menu.link \"Docs\" \"docs\"}}\n        {{menu.link \"App\" \"app\"}}\n      {{/uxs-menu}}\n\n    {{/each}}\n\n    {{#each styles as |style|}}\n\n      {{#uxs-menu class=\"mb\" style=style horizontal=false as |menu|}}\n        {{menu.item (capitalize (concat style \" Menu\"))}}\n        {{menu.item \"Disabled Item\" disabled=true}}\n        {{menu.divider}}\n        {{menu.link \"Docs\" \"docs\"}}\n        {{menu.link \"App\" \"app\"}}\n      {{/uxs-menu}}\n      <br>\n\n    {{/each}}",
    "menu-subheadings": "\n    <div class=\"f fr\">\n\n      <div class=\"mr\">\n        {{#uxs-menu hasLeftIcon=true as |menu|}}\n          {{menu.subheading \"Sort by\"}}\n          {{menu.item \"Age\"}}\n          {{menu.item \"Surname\" leftIcon=\"arrow_upward\"}}\n          {{menu.item \"Location\"}}\n        {{/uxs-menu}}\n      </div>\n      <div>\n        {{#uxs-menu hasLeftIcon=true as |menu|}}\n          {{menu.subheading \"Filter by\"}}\n          {{menu.item \"Age\"}}\n          {{menu.item \"Surname\" leftIcon=\"done\"}}\n          {{menu.item \"Location\"}}\n        {{/uxs-menu}}\n      </div>\n    </div>\n",
    "model-bound-form.hbs": "\n    {{#uxs-form onSubmit=(action \"save\" model) model=model as |form|}}\n\n      {{form.control label=\"Title\" name=\"title\" type=\"text\"}}\n\n      {{#form.control\n        label=\"Name\"\n        name=\"name\"\n        tip=\"To show inline fields we use a form row\"\n      as |control|\n      }}\n\n        {{#control.row as |row|}}\n          {{row.input name=\"firstName\"}}\n          {{row.input name=\"lastName\"}}\n        {{/control.row}}\n\n      {{/form.control}}\n\n      {{form.control\n        label=\"Email\"\n        name=\"email\"\n        type=\"email\"\n        tip=\"Valid emails only please.\"\n      }}\n\n      {{form.control\n        label=\"Biography\"\n        name=\"bio\"\n        type=\"textarea\"\n        rows=5\n      }}\n\n      {{#form.control\n        label=\"Date of Birth\"\n        tip=\"We're using a form row here to include a prefix date icon, it's not required but does give a better user experience.\"\n        name=\"dateOfBirth\"\n      as |control|\n      }}\n\n        {{#control.row as |row|}}\n          {{row.icon \"date_range\" prefix=true}}\n          {{row.date\n            onChange=(action (mut model.dateOfBirth))\n          }}\n        {{/control.row}}\n\n      {{/form.control}}\n\n      {{#form.control\n        label=\"Date Time\"\n        name=\"datetime\"\n      as |control|\n      }}\n        {{control.datetime\n          onChange=(action (mut model.datetime))\n        }}\n      {{/form.control}}\n\n      {{#form.control\n        label=\"Time\"\n        name=\"time\"\n      as |control|\n      }}\n        {{control.time\n          onChange=(action (mut model.time))\n        }}\n      {{/form.control}}\n\n      {{form.submit \"Save\"}}\n\n      {{form.link \"Back\" \"docs\"}}\n\n    {{/uxs-form}}\n",
    "model-bound-form.js": "  actions: {\n    save(model) {\n      window.alert(`Save model ${get(model, 'firstName')}`);\n    }\n  },",
    "navbar": "\n    {{#uxs-navbar title=title fixed=fixed as |bar|}}\n      {{#bar.menu as |nav|}}\n        {{nav.item \"Home\"}}\n        {{nav.item \"Account\"}}\n        {{nav.item \"Logout\"}}\n      {{/bar.menu}}\n    {{/uxs-navbar}}\n",
    "navbar-basic-demo.hbs": "\n    {{#uxs-navbar style=style title=title fixed=fixed as |bar|}}\n      {{#bar.menu as |nav|}}\n        {{nav.item \"Home\"}}\n        {{nav.item \"Account\"}}\n        {{nav.item \"Logout\"}}\n      {{/bar.menu}}\n    {{/uxs-navbar}}\n",
    "navbar-responsive-demo.hbs": "\n    {{#uxs-navbar style=style title=title fixed=fixed as |bar|}}\n\n      {{#bar.desktopNav as |nav|}}\n        {{nav.item \"Home\"}}\n        {{nav.item \"Account\"}}\n        {{nav.item \"Logout\"}}\n      {{/bar.desktopNav}}\n\n      {{#bar.mobileNav as |nav|}}\n        {{nav.item \"Home\"}}\n        {{nav.item \"Account\"}}\n        {{nav.item \"Logout\"}}\n      {{/bar.mobileNav}}\n\n    {{/uxs-navbar}}\n",
    "navbar-styles": "\n    {{#each styles as |style|}}\n\n      {{#uxs-navbar\n        style=style\n        title=(capitalize (concat style \" Navbar\"))\n      as |bar|\n      }}\n\n        {{#bar.desktopNav as |nav|}}\n          {{#nav.menu detail=true as |menu|}}\n            {{menu.link \"Home\"}}\n            {{menu.item \"Account\"}}\n            {{menu.item \"Logout\"}}\n          {{/nav.menu}}\n        {{/bar.desktopNav}}\n\n      {{/uxs-navbar}}\n\n    {{/each}}\n",
    "notice": "\n    {{#uxs-notice style=\"primary\" truncated=truncated as |notice|}}\n      {{notice.link \"home\" \"docs\"}}\n      {{notice.text \"This notice has a prefix link\"}}\n    {{/uxs-notice}}\n\n    {{#uxs-notice style=\"accent\" truncated=truncated as |notice|}}\n      {{notice.text \"This notice has a suffix button\"}}\n      {{notice.button \"close\"}}\n    {{/uxs-notice}}\n",
    "ol-basic-demo.hbs": "\n    {{#uxs-ol\n      color=color\n      size=size\n      style=style\n      weight=weight\n    as |list|\n    }}\n      {{list.item \"Item One\"}}\n      {{list.item \"Item Two\"}}\n      {{#list.ol as |sublist|}}\n        {{sublist.item \"Item Three a\"}}\n        {{sublist.item \"Item Three b\"}}\n        {{sublist.item \"Item Three c\"}}\n      {{/list.ol}}\n      {{list.item \"Item Four\"}}\n    {{/uxs-ol}}\n",
    "pagination-all-styles-demo.hbs": "\n    {{#each styles as |style|}}\n      {{uxs-pagination-controls\n        size=model.meta.size\n        page=model.meta.page\n        total=model.meta.total\n        style=style\n        onChange=(action \"paginateResults\")\n      }}\n    {{/each}}\n",
    "pagination-all-styles-demo.js": "  actions: {\n    paginateResults(pagination) {\n      window.alert(`page = ${pagination.page},  size = ${pagination.size}`);\n    }\n  }",
    "pagination-basic-demo.hbs": "\n    {{uxs-pagination-controls\n      size=model.meta.size\n      page=model.meta.page\n      total=model.meta.total\n      style=style\n      resultsLabel=resultsLabel\n      countPrefix=countPrefix\n      countSuffix=countSuffix\n      onChange=(action \"paginateResults\")\n    }}\n",
    "pagination-basic-demo.js": "  actions: {\n    paginateResults(pagination) {\n      window.alert(`page = ${pagination.page},  size = ${pagination.size}`);\n    }\n  }",
    "pill": "\n    {{#uxs-div class=\"clear\"}}\n      {{uxs-pill text style=style size=size rounded=rounded}}\n      {{uxs-pill \"primary\" style=\"primary\" size=size rounded=rounded}}\n      {{uxs-pill \"accent\" style=\"accent\" size=size rounded=rounded}}\n      {{uxs-pill \"warning\" style=\"warning\" size=size rounded=rounded}}\n      {{uxs-pill \"error\" style=\"error\" size=size rounded=rounded}}\n    {{/uxs-div}}\n",
    "preamble": "\n    {{#uxs-preamble style=style class=\"mb\" as |pre|}}\n      {{pre.icon \"date_range\" prefix=true}}\n      {{pre.content\n        \"This is a default preamble. Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent augue parturient aptent rhoncus parturient a aptent.\"\n      }}\n    {{/uxs-preamble}}\n\n    {{#uxs-preamble style=\"primary\" class=\"mb\" as |pre|}}\n      {{pre.icon \"date_range\" prefix=true}}\n      {{pre.content\n        \"This is a primary preamble. Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent augue parturient aptent rhoncus parturient a aptent.\"\n      }}\n    {{/uxs-preamble}}\n\n    {{#uxs-preamble style=\"accent\" class=\"mb\" as |pre|}}\n      {{pre.icon \"date_range\" prefix=true}}\n      {{pre.content\n        \"This is a accent preamble. Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent augue parturient aptent rhoncus parturient a aptent.\"\n      }}\n    {{/uxs-preamble}}\n\n    {{#uxs-preamble style=\"warning\" class=\"mb\" as |pre|}}\n      {{pre.icon \"date_range\" prefix=true}}\n      {{pre.content\n        \"This is a warning preamble. Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent augue parturient aptent rhoncus parturient a aptent.\"\n      }}\n    {{/uxs-preamble}}\n\n    {{#uxs-preamble style=\"error\" class=\"mb\" as |pre|}}\n      {{pre.icon \"date_range\" prefix=true}}\n      {{pre.content\n        \"This is a error preamble. Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent augue parturient aptent rhoncus parturient a aptent.\"\n      }}\n    {{/uxs-preamble}}\n\n    {{#uxs-preamble style=\"white\" class=\"mb\" as |pre|}}\n      {{pre.icon \"date_range\" prefix=true}}\n      {{pre.content\n        \"This is a white preamble. Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent augue parturient aptent rhoncus parturient a aptent.\"\n      }}\n    {{/uxs-preamble}}\n\n    {{#uxs-preamble style=\"dark\" class=\"mb\" as |pre|}}\n      {{pre.icon \"date_range\" prefix=true}}\n      {{pre.content\n        \"This is a dark preamble. Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent augue parturient aptent rhoncus parturient a aptent.\"\n      }}\n    {{/uxs-preamble}}\n",
    "single-pane.hbs": "\n    {{#uxs-window}}\n      {{#uxs-pane single=true style=style padded=padded}}\n        {{uxs-heading \"Single Pane\"}}\n        {{#uxs-content}}\n          Turpis in eros morbi scelerisque nisl condimentum ut ultricies scelerisque sociosqu venenatis cum parturient id eleifend sodales vitae rutrum sociosqu accumsan.\n        {{/uxs-content}}\n        {{#uxs-content}}\n          Bibendum etiam at nascetur morbi proin tristique quam aenean dictumst vestibulum odio proin bibendum leo scelerisque ullamcorper dui.\n        {{/uxs-content}}\n      {{/uxs-pane}}\n    {{/uxs-window}}\n",
    "splash-pane.hbs": "\n    {{#uxs-window image=\"https://placeimg.com/2560/1600/any/grayscale\"}}\n      {{#uxs-pane splash=true style=style padded=padded}}\n        {{uxs-heading \"Splash Pane\"}}\n        {{#uxs-content}}\n          Turpis in eros morbi scelerisque nisl condimentum ut ultricies scelerisque sociosqu venenatis cum parturient id eleifend sodales vitae rutrum sociosqu accumsan.\n        {{/uxs-content}}\n      {{/uxs-pane}}\n    {{/uxs-window}}\n",
    "split-pane.hbs": "\n    {{#uxs-window}}\n      {{#uxs-pane split=true style=paneOneStyle padded=padded}}\n        {{uxs-heading \"Pane One\"}}\n        {{#uxs-content}}\n          Turpis in eros morbi scelerisque nisl condimentum ut ultricies scelerisque sociosqu venenatis cum parturient id eleifend sodales vitae rutrum sociosqu accumsan.\n        {{/uxs-content}}\n        {{#uxs-content}}\n          Bibendum etiam at nascetur morbi proin tristique quam aenean dictumst vestibulum odio proin bibendum leo scelerisque ullamcorper dui.\n        {{/uxs-content}}\n      {{/uxs-pane}}\n      {{#uxs-pane split=true style=paneTwoStyle padded=padded}}\n        {{uxs-heading \"Pane Two\"}}\n        {{#uxs-content}}\n          Turpis in eros morbi scelerisque nisl condimentum ut ultricies scelerisque sociosqu venenatis cum parturient id eleifend sodales vitae rutrum sociosqu accumsan.\n        {{/uxs-content}}\n        {{#uxs-content}}\n          Bibendum etiam at nascetur morbi proin tristique quam aenean dictumst vestibulum odio proin bibendum leo scelerisque ullamcorper dui.\n        {{/uxs-content}}\n      {{/uxs-pane}}\n    {{/uxs-window}}\n",
    "subheading-basic-demo.hbs": "\n    {{uxs-subheading\n      text\n      align=align\n      color=color\n      size=size\n      style=style\n      weight=weight\n    }}\n",
    "table-basic-demo.hbs": "\n    {{#uxs-table\n      color=color\n      fullWidth=fullWidth\n      padding=padding\n      size=size\n      style=style\n    as |table|\n    }}\n      {{#table.row as |row|}}\n        {{row.heading \"Food\"}}\n        {{row.heading \"Caloires (g)\" numeric=true}}\n        {{row.heading \"Fat (g)\" numeric=true}}\n        {{row.heading \"Carbs (g)\" numeric=true}}\n      {{/table.row}}\n      {{#table.row section=true as |row|}}\n        {{row.cell \"Frozen yoghurt\"}}\n        {{row.cell \"159\" numeric=true}}\n        {{row.cell \"6.0\" numeric=true}}\n        {{row.cell \"24\" numeric=true}}\n      {{/table.row}}\n      {{#table.row highlight=true as |row|}}\n        {{row.cell \"Ice cream sandwich\"}}\n        {{row.cell \"237\" numeric=true}}\n        {{row.cell \"9.0\" numeric=true}}\n        {{row.cell \"37\" numeric=true}}\n      {{/table.row}}\n      {{#table.row as |row|}}\n        {{row.cell \"Eclair\"}}\n        {{row.cell \"262\" numeric=true}}\n        {{row.cell \"16.0\" numeric=true}}\n        {{row.cell \"24\" numeric=true}}\n      {{/table.row}}\n      {{#table.row section=true as |row|}}\n        {{row.cell \"Ice Pop\"}}\n        {{row.cell \"37\" numeric=true}}\n        {{row.cell \"8.0\" numeric=true}}\n        {{row.cell \"12\" numeric=true}}\n      {{/table.row}}\n      {{#table.row as |row|}}\n        {{row.cell \"Rocket cream sandwich\"}}\n        {{row.cell \"124\" numeric=true}}\n        {{row.cell \"9.0\" numeric=true}}\n        {{row.cell \"37\" numeric=true}}\n      {{/table.row}}\n      {{#table.row as |row|}}\n        {{row.cell \"Callipso\"}}\n        {{row.cell \"99\" numeric=true}}\n        {{row.cell \"8.0\" numeric=true}}\n        {{row.cell \"42\" numeric=true}}\n      {{/table.row}}\n    {{/uxs-table}}\n",
    "table-record-demo.hbs": "\n    {{#uxs-table\n      color=color\n      fullWidth=fullWidth\n      padding=padding\n      size=size\n      style=style\n      record=true\n    as |table|\n    }}\n      {{#table.row as |row|}}\n        {{row.heading \"#\" small=true numeric=true}}\n        {{row.heading \"First Name\"}}\n        {{row.heading \"Last Name\"}}\n        {{row.heading \"Handle\"}}\n      {{/table.row}}\n      {{#table.row as |row|}}\n        {{row.cell \"1\" small=true numeric=true}}\n        {{row.cell \"Mark\"}}\n        {{row.cell \"Otto\"}}\n        {{row.cell \"@mdo\"}}\n      {{/table.row}}\n      {{#table.row highlight=true as |row|}}\n        {{row.cell \"2\" small=true numeric=true}}\n        {{row.cell \"Jacob\"}}\n        {{row.cell \"Thornton\"}}\n        {{row.cell \"@fat\"}}\n      {{/table.row}}\n      {{#table.row as |row|}}\n        {{row.cell \"33\" small=true numeric=true}}\n        {{row.cell \"Larry\"}}\n        {{row.cell \"Loooooongnameason\"}}\n        {{row.cell \"@twitter\"}}\n      {{/table.row}}\n    {{/uxs-table}}\n",
    "text-align.hbs": "\n    {{uxs-text \"Left align\" align=\"left\" class=\"mb\"}}\n    {{uxs-text \"Center align\" align=\"center\" class=\"mb\"}}\n    {{uxs-text \"Right align\" align=\"right\" class=\"mb\"}}\n    {{#uxs-text align=\"justified\" class=\"mb\"}}\n      Justified orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\n    {{/uxs-text}}\n",
    "text-basic-demo.hbs": "\n    {{uxs-text\n      text\n      align=align\n      color=color\n      size=size\n      style=style\n      weight=weight\n    }}\n",
    "text-color.hbs": "\n    {{uxs-text\n      \"Primary Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"\n      color=\"primary\"\n    }}\n    {{uxs-text\n      \"Accent Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"\n      color=\"accent\"\n    }}\n    {{uxs-text\n      \"Success Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"\n      color=\"success\"\n    }}\n    {{uxs-text\n      \"Warning Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"\n      color=\"warning\"\n    }}\n    {{uxs-text\n      \"Error Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"\n      color=\"error\"\n    }}\n    {{uxs-text\n      \"Dark Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"\n      color=\"dark\"\n    }}\n    {{uxs-text\n      \"Grey Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"\n      color=\"grey\"\n    }}\n    {{uxs-text\n      \"Mid Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"\n      color=\"mid\"\n    }}\n    {{uxs-text\n      \"Light Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"\n      color=\"light\"\n    }}\n    {{uxs-text\n      \"White Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"\n      color=\"white\"\n    }}\n",
    "text-demo.hbs": "\n    {{uxs-avatar-text\n      \"JW\"\n      bordered=borderd\n      rounded=rounded\n      size=size\n      style=style\n    }}\n",
    "text-size.hbs": "\n    {{uxs-text \"Giant / 76.244px\" size=\"giant\"}}\n    {{uxs-text \"Huge / 47.123px\" size=\"huge\"}}\n    {{uxs-text \"Large / 29.124px\" size=\"large\"}}\n    {{uxs-text \"Medium / 18px\" size=\"medium\"}}\n    {{uxs-text \"Small / 11.125px\" size=\"small\"}}\n    {{uxs-text \"Tiny / 6.876px\" size=\"tiny\"}}\n",
    "text-style.hbs": "\n    {{uxs-text\n      \"Primary Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\" \n      style=\"primary\"\n      class=\"p\"\n    }}\n    {{uxs-text\n      \"Accent Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\" \n      style=\"accent\"\n      class=\"p\"\n    }}\n    {{uxs-text\n      \"Success Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\" \n      style=\"success\"\n      class=\"p\"\n    }}\n    {{uxs-text\n      \"Warning Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\" \n      style=\"warning\"\n      class=\"p\"\n    }}\n    {{uxs-text\n      \"Error Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\" \n      style=\"error\"\n      class=\"p\"\n    }}\n    {{uxs-text\n      \"Dark Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\" \n      style=\"dark\"\n      class=\"p\"\n    }}\n    {{uxs-text\n      \"Grey Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\" \n      style=\"grey\"\n      class=\"p\"\n    }}\n    {{uxs-text\n      \"Mid Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\" \n      style=\"mid\"\n      class=\"p\"\n    }}\n    {{uxs-text\n      \"Light Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\" \n      style=\"light\"\n      class=\"p\"\n    }}\n    {{uxs-text\n      \"White Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\" \n      style=\"white\"\n      class=\"p\"\n    }}\n",
    "text-weight.hbs": "\n    {{uxs-text\n      \"Bold Type orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"\n      weight=\"bold\"\n    }}\n    {{uxs-text\n      \"Medium Type orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"\n      weight=\"medium\"\n    }}\n    {{uxs-text\n      \"Light Type orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"\n      weight=\"light\"\n    }}\n",
    "threes-pane.hbs": "\n    {{#uxs-window}}\n      {{#uxs-pane index=true style=indexStyle padded=padded}}\n        {{uxs-heading \"Index\"}}\n        {{#uxs-list bordered=true as |list|}}\n          {{#list.item as |item|}}\n            {{item.title \"Item One\"}}\n          {{/list.item}}\n          {{#list.item as |item|}}\n            {{item.title \"Item Two\"}}\n          {{/list.item}}\n          {{#list.item as |item|}}\n            {{item.title \"Item Three\"}}\n          {{/list.item}}\n        {{/uxs-list}}\n      {{/uxs-pane}}\n      {{#uxs-pane detail=true style=detailStyle padded=padded}}\n        {{uxs-heading \"Detail\"}}\n        {{#uxs-content}}\n          Turpis in eros morbi scelerisque nisl condimentum ut ultricies scelerisque sociosqu venenatis cum parturient id eleifend sodales vitae rutrum sociosqu accumsan.\n        {{/uxs-content}}\n        {{#uxs-content}}\n          Bibendum etiam at nascetur morbi proin tristique quam aenean dictumst vestibulum odio proin bibendum leo scelerisque ullamcorper dui.\n        {{/uxs-content}}\n      {{/uxs-pane}}\n      {{#uxs-pane aside=true style=asideStyle padded=padded}}\n        {{uxs-heading \"Aside\"}}\n        {{uxs-button \"Action 1\"}}\n        {{uxs-button \"Action 2\"}}\n        {{uxs-button \"Action 3\"}}\n      {{/uxs-pane}}\n    {{/uxs-window}}\n",
    "toolbar": "\n    {{#uxs-toolbar as |toolbar|}}\n      {{toolbar.back \"arrow_back\"}}\n      {{toolbar.title \"Toolbar\"}}\n      {{toolbar.spacer}}\n      {{toolbar.action \"filter_list\"}}\n      {{toolbar.action \"file_download\"}}\n      {{toolbar.action \"delete\"}}\n    {{/uxs-toolbar}}\n",
    "toolbar-search": "\n    {{#uxs-toolbar as |toolbar|}}\n      {{toolbar.back \"arrow_back\"}}\n      {{toolbar.title (concat \"Toolbar: \" searchTerm)}}\n      {{toolbar.spacer}}\n      {{toolbar.action \"filter_list\"}}\n      {{toolbar.action \"file_download\"}}\n      {{toolbar.search value=searchTerm}}\n    {{/uxs-toolbar}}\n",
    "toolbar-styles": "\n    {{#uxs-toolbar style=\"primary\" as |toolbar|}}\n      {{toolbar.back \"arrow_back\"}}\n      {{toolbar.title \"Primary Bar\"}}\n      {{toolbar.spacer}}\n      {{toolbar.action \"filter_list\"}}\n      {{toolbar.action \"file_download\"}}\n      {{toolbar.search}}\n    {{/uxs-toolbar}}\n\n    {{#uxs-toolbar style=\"accent\" as |toolbar|}}\n      {{toolbar.back \"arrow_back\"}}\n      {{toolbar.title \"Accent Bar\"}}\n      {{toolbar.spacer}}\n      {{toolbar.action \"filter_list\"}}\n      {{toolbar.action \"file_download\"}}\n      {{toolbar.search}}\n    {{/uxs-toolbar}}\n\n    {{#uxs-toolbar style=\"dark\" as |toolbar|}}\n      {{toolbar.back \"arrow_back\"}}\n      {{toolbar.title \"Dark Bar\"}}\n      {{toolbar.spacer}}\n      {{toolbar.action \"filter_list\"}}\n      {{toolbar.action \"file_download\"}}\n      {{toolbar.search}}\n    {{/uxs-toolbar}}\n\n    {{#uxs-toolbar style=\"grey\" as |toolbar|}}\n      {{toolbar.back \"arrow_back\"}}\n      {{toolbar.title \"Grey Bar\"}}\n      {{toolbar.spacer}}\n      {{toolbar.action \"filter_list\"}}\n      {{toolbar.action \"file_download\"}}\n      {{toolbar.search}}\n    {{/uxs-toolbar}}\n\n    {{#uxs-toolbar style=\"mid\" as |toolbar|}}\n      {{toolbar.back \"arrow_back\"}}\n      {{toolbar.title \"Mid Bar\"}}\n      {{toolbar.spacer}}\n      {{toolbar.action \"filter_list\"}}\n      {{toolbar.action \"file_download\"}}\n      {{toolbar.search}}\n    {{/uxs-toolbar}}\n\n    {{#uxs-toolbar style=\"light\" as |toolbar|}}\n      {{toolbar.back \"arrow_back\"}}\n      {{toolbar.title \"White Bar\"}}\n      {{toolbar.spacer}}\n      {{toolbar.action \"filter_list\"}}\n      {{toolbar.action \"file_download\"}}\n      {{toolbar.search}}\n    {{/uxs-toolbar}}\n\n    {{#uxs-toolbar style=\"white\" as |toolbar|}}\n      {{toolbar.back \"arrow_back\"}}\n      {{toolbar.title \"White Bar\"}}\n      {{toolbar.spacer}}\n      {{toolbar.action \"filter_list\"}}\n      {{toolbar.action \"file_download\"}}\n      {{toolbar.search}}\n    {{/uxs-toolbar}}\n\n    {{#uxs-toolbar style=\"success\" as |toolbar|}}\n      {{toolbar.back \"arrow_back\"}}\n      {{toolbar.title \"Success Bar\"}}\n      {{toolbar.spacer}}\n      {{toolbar.action \"filter_list\"}}\n      {{toolbar.action \"file_download\"}}\n      {{toolbar.search}}\n    {{/uxs-toolbar}}\n\n    {{#uxs-toolbar style=\"warning\" as |toolbar|}}\n      {{toolbar.back \"arrow_back\"}}\n      {{toolbar.title \"Warning Bar\"}}\n      {{toolbar.spacer}}\n      {{toolbar.action \"filter_list\"}}\n      {{toolbar.action \"file_download\"}}\n      {{toolbar.search}}\n    {{/uxs-toolbar}}\n\n    {{#uxs-toolbar style=\"error\" as |toolbar|}}\n      {{toolbar.back \"arrow_back\"}}\n      {{toolbar.title \"Error Bar\"}}\n      {{toolbar.spacer}}\n      {{toolbar.action \"filter_list\"}}\n      {{toolbar.action \"file_download\"}}\n      {{toolbar.search}}\n    {{/uxs-toolbar}}\n",
    "window-basic-demo": "\n    {{#uxs-window}}\n      <div class=\"p bg-p3 ac fg\">Col 1</div>\n      <div class=\"p bg-p4 ac fg\">Col 2</div>\n      <div class=\"p bg-p3 ac fg\">Col 3</div>\n    {{/uxs-window}}\n",
    "window-image-demo": "\n    {{#uxs-window image=image}}\n      <div class=\"p c-p5 ac fg\">Col 1</div>\n      <div class=\"p c-p5 ac fg\">Col 2</div>\n      <div class=\"p c-p5 ac fg\">Col 3</div>\n    {{/uxs-window}}\n",
    "yield-list-subheading.hbs": "\n    {{#uxs-list lines=3 as |list|}}\n\n      {{#list.subheading\n        bordered=bordered\n        style=style\n        yield=true\n      as |subheading|\n      }}\n        {{subheading.icon \"swap_vert\" size=\"medium\"}}\n        {{subheading.text title}}\n        {{subheading.toggle value=toggled onToggle=(action (mut toggled))}}\n      {{/list.subheading}}\n\n      {{#list.item as |item|}}\n        {{#item.aside}}\n          {{item.avatar \"https://placeimg.com/100/100/any?i=1\" round=true}}\n        {{/item.aside}}\n        {{#item.body}}\n          {{item.title \"Item One\"}}\n          {{item.detail \"Elementum integer parturient suspendisse.\"}}\n          {{item.detail \"A suspendisse semper\"}}\n        {{/item.body}}\n        {{#item.aside}}\n          {{item.action \"keyboard_arrow_right\"}}\n        {{/item.aside}}\n      {{/list.item}}\n\n      {{#list.item as |item|}}\n        {{#item.aside}}\n          {{item.avatar \"https://placeimg.com/100/100/any?i=2\" round=true}}\n        {{/item.aside}}\n        {{#item.body}}\n          {{item.title \"Item One\"}}\n          {{item.detail \"Facilisi libero quam hac amet.\"}}\n          {{item.detail \"Dui ultrices dis et a hendrerit\"}}\n        {{/item.body}}\n        {{#item.aside}}\n          {{item.action \"keyboard_arrow_right\"}}\n        {{/item.aside}}\n      {{/list.item}}\n\n    {{/uxs-list}}"
  };
});
;define("dummy/templates/app", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QBCpGCSI", "block": "{\"symbols\":[\"bar\",\"nav\",\"menu\",\"nav\",\"menu\"],\"statements\":[[7,\"div\"],[11,\"class\",\"uxs\"],[9],[0,\"\\n\\n\"],[4,\"uxs-app\",null,[[\"fixedNav\"],[true]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-navbar\",null,[[\"fixed\",\"name\"],[true,\"AppName\"]],{\"statements\":[[4,\"component\",[[22,1,[\"desktopNav\"]]],null,{\"statements\":[[4,\"component\",[[22,4,[\"menu\"]]],[[\"detail\"],[true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,5,[\"link\"]],\"Docs\",\"docs\"],[[\"rightIcon\"],[\"book\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,5,[\"link\"]],\"Api\",\"docs\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,5,[\"link\"]],\"Dashboard\",\"app.dash\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,5,[\"link\"]],\"Splash\",\"app.splash\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,5,[\"link\"]],\"Single\",\"app.single\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,5,[\"link\"]],\"Double\",\"app.double\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,5,[\"link\"]],\"Triple\",\"app.triple\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null]],\"parameters\":[4]},null],[4,\"component\",[[22,1,[\"mobileNav\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"uxs-subheading\",[\"AppName\"],[[\"align\"],[\"center\"]]],false],[0,\"\\n\"],[4,\"component\",[[22,2,[\"menu\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,3,[\"link\"]],\"Docs\",\"docs\"],[[\"rightIcon\"],[\"book\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,3,[\"link\"]],\"Api\",\"docs\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,3,[\"link\"]],\"Dashboard\",\"app.dash\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,3,[\"link\"]],\"Splash\",\"app.splash\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,3,[\"link\"]],\"Single\",\"app.single\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,3,[\"link\"]],\"Double\",\"app.double\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,3,[\"link\"]],\"Triple\",\"app.triple\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null]],\"parameters\":[1]},null],[0,\"\\n    \"],[1,[21,\"outlet\"],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/app.hbs" } });
});
;define("dummy/templates/app/dash", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Fyx9Flfx", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Dashboard\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/app/dash.hbs" } });
});
;define("dummy/templates/app/double", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QZ+amtmn", "block": "{\"symbols\":[\"group\",\"header\",\"toolbar\"],\"statements\":[[4,\"uxs-header\",null,[[\"image\"],[\"https://placeimg.com/2560/1600/any/grayscale\"]],{\"statements\":[[4,\"component\",[[22,2,[\"toolbar\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,3,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n    \"],[1,[22,3,[\"spacer\"]],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,3,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,3,[\"action\"]],\"file_download\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,3,[\"action\"]],\"search\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"  \"],[1,[27,\"component\",[[22,2,[\"title\"]],\"Two Column Layout\"],null],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"uxs-window\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"uxs-pane\",null,[[\"main\",\"padded\"],[true,true]],{\"statements\":[[0,\"\\n    \"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"Scelerisque posuere sodales adipiscing parturient porttitor diam dui a accumsan egestas inceptos pretium turpis malesuada scelerisque orci feugiat scelerisque in a a risus lectus facilisi nullam suspendisse dictumst ullamcorper. Scelerisque vel nisl mi nullam adipiscing facilisi vehicula vehicula habitasse enim vehicula parturient vel imperdiet vestibulum in rhoncus bibendum arcu sed. Tempor eleifend integer velit in venenatis dolor ligula a consectetur parturient dictumst pulvinar in natoque fermentum vestibulum a a dapibus potenti.\"]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"Vestibulum porttitor inceptos dictumst lobortis eu libero diam vestibulum hac laoreet pulvinar condimentum etiam venenatis tortor placerat. Imperdiet ac nisl natoque id parturient dignissim consectetur a parturient dignissim a a elit parturient urna nec metus parturient sed vestibulum. Nisi leo natoque libero lobortis a justo euismod iaculis fusce habitasse cras dapibus condimentum ac feugiat neque in platea a suspendisse. Lectus rhoncus convallis morbi lobortis adipiscing pulvinar ligula cras vestibulum pulvinar luctus in hac leo arcu. Tristique nunc a est suscipit interdum tempus a fermentum euismod a tempor scelerisque proin ullamcorper mus vestibulum consectetur nascetur inceptos nam maecenas a lacus.\"]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"Quisque eu euismod vestibulum vestibulum dui dictumst quis proin donec magnis facilisi tempus justo a bibendum porttitor erat mollis a a mi viverra ac. Adipiscing ut parturient felis a habitant pretium cursus cursus molestie consectetur himenaeos quis nulla in curae mus condimentum parturient a a parturient. Duis dui a a a nisl ridiculus urna magna condimentum hac nec mus tempor ipsum class ornare ullamcorper a a mus parturient rutrum duis viverra.\"]],\"parameters\":[]},null],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"uxs-pane\",null,[[\"aside\",\"padded\"],[true,true]],{\"statements\":[[4,\"uxs-button-group\",null,[[\"align\",\"disabled\",\"inline\",\"mini\"],[[23,[\"align\"]],[23,[\"disabled\"]],[23,[\"inline\"]],[23,[\"mini\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,1,[\"button\"]],\"Save\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,1,[\"button\"]],\"Save & Publish\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,1,[\"link\"]],\"Cancel\",\"docs.forms.buttons\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/app/double.hbs" } });
});
;define("dummy/templates/app/single", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dU0Qj8jF", "block": "{\"symbols\":[\"window\",\"header\",\"toolbar\"],\"statements\":[[4,\"uxs-header\",null,[[\"image\"],[\"https://placeimg.com/2560/1600/any/grayscale\"]],{\"statements\":[[4,\"component\",[[22,2,[\"toolbar\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,3,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n    \"],[1,[22,3,[\"spacer\"]],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,3,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,3,[\"action\"]],\"file_download\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,3,[\"action\"]],\"search\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"  \"],[1,[27,\"component\",[[22,2,[\"title\"]],\"Single Column Layout\"],null],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"uxs-window\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"pane\"]]],[[\"single\",\"padded\"],[true,true]],{\"statements\":[[0,\"\\n    \"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"Scelerisque posuere sodales adipiscing parturient porttitor diam dui a accumsan egestas inceptos pretium turpis malesuada scelerisque orci feugiat scelerisque in a a risus lectus facilisi nullam suspendisse dictumst ullamcorper. Scelerisque vel nisl mi nullam adipiscing facilisi vehicula vehicula habitasse enim vehicula parturient vel imperdiet vestibulum in rhoncus bibendum arcu sed. Tempor eleifend integer velit in venenatis dolor ligula a consectetur parturient dictumst pulvinar in natoque fermentum vestibulum a a dapibus potenti.\"]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"Vestibulum porttitor inceptos dictumst lobortis eu libero diam vestibulum hac laoreet pulvinar condimentum etiam venenatis tortor placerat. Imperdiet ac nisl natoque id parturient dignissim consectetur a parturient dignissim a a elit parturient urna nec metus parturient sed vestibulum. Nisi leo natoque libero lobortis a justo euismod iaculis fusce habitasse cras dapibus condimentum ac feugiat neque in platea a suspendisse. Lectus rhoncus convallis morbi lobortis adipiscing pulvinar ligula cras vestibulum pulvinar luctus in hac leo arcu. Tristique nunc a est suscipit interdum tempus a fermentum euismod a tempor scelerisque proin ullamcorper mus vestibulum consectetur nascetur inceptos nam maecenas a lacus.\"]],\"parameters\":[]},null],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/app/single.hbs" } });
});
;define("dummy/templates/app/splash", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oXHjYfs6", "block": "{\"symbols\":[\"form\"],\"statements\":[[4,\"uxs-window\",null,[[\"image\"],[\"https://placeimg.com/2560/1600/any/grayscale\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-pane\",null,[[\"splash\"],[true]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-heading\",[\"Login\"],[[\"align\"],[\"center\"]]],false],[0,\"\\n\\n\"],[4,\"uxs-form\",null,[[\"model\"],[[23,[\"model\"]]]],{\"statements\":[[0,\"\\n      \"],[1,[27,\"component\",[[22,1,[\"control\"]]],[[\"label\",\"name\",\"type\",\"autocomplete\"],[\"Username\",\"username\",\"text\",\"username\"]]],false],[0,\"\\n\\n      \"],[1,[27,\"component\",[[22,1,[\"control\"]]],[[\"label\",\"name\",\"type\",\"autocomplete\"],[\"Password\",\"password\",\"password\",\"password\"]]],false],[0,\"\\n\\n      \"],[1,[27,\"component\",[[22,1,[\"submit\"]],\"Login\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/app/splash.hbs" } });
});
;define("dummy/templates/app/triple", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Lo/5fJCn", "block": "{\"symbols\":[\"group\",\"header\",\"toolbar\"],\"statements\":[[4,\"uxs-header\",null,[[\"image\"],[\"https://placeimg.com/2560/1600/any/grayscale\"]],{\"statements\":[[4,\"component\",[[22,2,[\"toolbar\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,3,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n    \"],[1,[22,3,[\"spacer\"]],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,3,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,3,[\"action\"]],\"file_download\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,3,[\"action\"]],\"search\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"  \"],[1,[27,\"component\",[[22,2,[\"title\"]],\"Triple Column Layout\"],null],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"uxs-window\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"uxs-pane\",null,[[\"index\",\"padded\"],[true,true]],{\"statements\":[[0,\"\\n    \"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"Scelerisque posuere sodales adipiscing parturient porttitor diam dui a accumsan egestas inceptos pretium turpis malesuada scelerisque orci feugiat scelerisque in a a risus lectus facilisi nullam suspendisse dictumst ullamcorper. Scelerisque vel nisl mi nullam adipiscing facilisi vehicula vehicula habitasse enim vehicula parturient vel imperdiet vestibulum in rhoncus bibendum arcu sed. Tempor eleifend integer velit in venenatis dolor ligula a consectetur parturient dictumst pulvinar in natoque fermentum vestibulum a a dapibus potenti.\"]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"Vestibulum porttitor inceptos dictumst lobortis eu libero diam vestibulum hac laoreet pulvinar condimentum etiam venenatis tortor placerat. Imperdiet ac nisl natoque id parturient dignissim consectetur a parturient dignissim a a elit parturient urna nec metus parturient sed vestibulum. Nisi leo natoque libero lobortis a justo euismod iaculis fusce habitasse cras dapibus condimentum ac feugiat neque in platea a suspendisse. Lectus rhoncus convallis morbi lobortis adipiscing pulvinar ligula cras vestibulum pulvinar luctus in hac leo arcu. Tristique nunc a est suscipit interdum tempus a fermentum euismod a tempor scelerisque proin ullamcorper mus vestibulum consectetur nascetur inceptos nam maecenas a lacus.\"]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"Quisque eu euismod vestibulum vestibulum dui dictumst quis proin donec magnis facilisi tempus justo a bibendum porttitor erat mollis a a mi viverra ac. Adipiscing ut parturient felis a habitant pretium cursus cursus molestie consectetur himenaeos quis nulla in curae mus condimentum parturient a a parturient. Duis dui a a a nisl ridiculus urna magna condimentum hac nec mus tempor ipsum class ornare ullamcorper a a mus parturient rutrum duis viverra.\"]],\"parameters\":[]},null],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"uxs-pane\",null,[[\"detail\",\"padded\"],[true,true]],{\"statements\":[[0,\"\\n    \"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"A odio netus lacus neque imperdiet adipiscing sociis a mus consectetur a nunc ullamcorper vestibulum luctus et nostra quis suspendisse natoque dui nec facilisi lacinia at. Vestibulum ac parturient dui neque nec potenti molestie sagittis aptent a id nullam congue a scelerisque faucibus nisl gravida consectetur a porta ullamcorper. Leo taciti at a euismod vestibulum sed ullamcorper parturient leo facilisis in vestibulum ullamcorper ac curabitur pharetra habitasse fusce vestibulum facilisis. Nec adipiscing lacinia sapien ad fringilla eu mauris vulputate imperdiet imperdiet condimentum vestibulum suspendisse a sem mattis posuere. A natoque penatibus parturient suspendisse suspendisse conubia porta scelerisque posuere feugiat mus nibh est a sed felis etiam donec iaculis justo nunc euismod aenean vulputate habitasse tristique quis. \"]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"Est tellus ad curabitur netus inceptos a fusce duis vehicula elit ac non id pharetra ac a id lectus at vivamus a inceptos. Vel natoque nibh ipsum vestibulum gravida et parturient dui vestibulum ligula netus aliquet a rutrum condimentum vulputate sed sit. Per condimentum quis mi a nullam dolor cursus a a himenaeos pretium a hac condimentum porta mi nisi.\"]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"Scelerisque a aptent placerat sagittis ad curabitur ornare in condimentum lorem in a eget sit conubia suspendisse condimentum cras hendrerit sodales sagittis ad a parturient suscipit. Enim ridiculus urna parturient augue eleifend litora justo vestibulum cubilia aliquam ad elit vestibulum non quis scelerisque sapien in. Pharetra montes etiam eget id feugiat scelerisque velit feugiat cubilia augue at quam eu convallis facilisis.\"]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"Platea justo pulvinar interdum porttitor in egestas id ullamcorper parturient dolor conubia gravida nisl mus. Nam ullamcorper aliquet tortor pharetra a tristique enim ad donec porta et vestibulum ad lacus vestibulum arcu pulvinar viverra maecenas adipiscing venenatis condimentum suspendisse a. Vestibulum tincidunt bibendum convallis vestibulum ipsum posuere nascetur fusce congue suscipit sem neque suspendisse fusce cras cursus hac.\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"uxs-pane\",null,[[\"aside\",\"padded\"],[true,true]],{\"statements\":[[4,\"uxs-button-group\",null,[[\"align\",\"disabled\",\"inline\",\"mini\"],[[23,[\"align\"]],[23,[\"disabled\"]],[23,[\"inline\"]],[23,[\"mini\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,1,[\"button\"]],\"Save\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,1,[\"button\"]],\"Save & Publish\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,1,[\"link\"]],\"Cancel\",\"docs.forms.buttons\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/app/triple.hbs" } });
});
;define("dummy/templates/application-tailwind", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZmUVDQ1y", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"etw-px-4 etw-my-8 etw-max-w-3xl etw-mx-auto etw-font-sans\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"etw-flex etw-mt-6\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"etw-w-3/4 etw-pr-6\"],[9],[0,\"\\n      \"],[7,\"h1\"],[11,\"class\",\"etw-pt-8 etw-text-3xl etw-font-bold\"],[9],[0,\"Your Tailwind styles\"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"etw-mt-3 etw-mb-4 etw-text-lg\"],[9],[0,\"A reference for every generated class in your app.\"],[10],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Border radius\",[27,\"array\",[\".rounded{-side?}{-size?}\"],null],[23,[\"moduleStyles\",\"borderRadius\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Borders\",[27,\"array\",[\".border{-side?}{-width?}\"],null],[23,[\"moduleStyles\",\"borderWidths\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Colors\",[27,\"array\",[\".text-{color}\",\".bg-{color}\",\".border-{color}\"],null],[23,[\"moduleStyles\",\"colors\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Font weights\",[27,\"array\",[\".font-{weight}\"],null],[23,[\"moduleStyles\",\"fontWeights\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Height\",[27,\"array\",[\".h-{size}\"],null],[23,[\"moduleStyles\",\"height\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Letter spacing\",[27,\"array\",[\".tracking-{size}\"],null],[23,[\"moduleStyles\",\"letterSpacing\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Line height\",[27,\"array\",[\".leading-{size}\"],null],[23,[\"moduleStyles\",\"lineHeight\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Margin\",[27,\"array\",[\".m{side?}-{size}\"],null],[23,[\"moduleStyles\",\"margin\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Max height\",[27,\"array\",[\".max-h-{size}\"],null],[23,[\"moduleStyles\",\"maxHeight\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Max width\",[27,\"array\",[\".max-w-{size}\"],null],[23,[\"moduleStyles\",\"maxWidth\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Min height\",[27,\"array\",[\".min-h-{size}\"],null],[23,[\"moduleStyles\",\"minHeight\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Min width\",[27,\"array\",[\".min-w-{size}\"],null],[23,[\"moduleStyles\",\"minWidth\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Negative margin\",[27,\"array\",[\".-m{side?}-{size}\"],null],[23,[\"moduleStyles\",\"negativeMargin\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Opacity\",[27,\"array\",[\".opacity-{name}\"],null],[23,[\"moduleStyles\",\"opacity\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Padding\",[27,\"array\",[\".p{side?}-{size}\"],null],[23,[\"moduleStyles\",\"padding\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Shadows\",[27,\"array\",[\".shadow-{size?}\"],null],[23,[\"moduleStyles\",\"shadows\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"SVG fill\",[27,\"array\",[\".fill-{name}\"],null],[23,[\"moduleStyles\",\"svgFill\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"SVG stroke\",[27,\"array\",[\".stroke-{name}\"],null],[23,[\"moduleStyles\",\"svgStroke\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Text sizes\",[27,\"array\",[\".text-{size}\"],null],[23,[\"moduleStyles\",\"textSizes\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Width\",[27,\"array\",[\".w-{size}\"],null],[23,[\"moduleStyles\",\"width\"]]]]],false],[0,\"\\n\\n      \"],[1,[27,\"etw/module-section\",null,[[\"title\",\"codeSnippets\",\"moduleStyles\"],[\"Z index\",[27,\"array\",[\".z-{index}\"],null],[23,[\"moduleStyles\",\"zIndex\"]]]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"etw-w-1/4 etw-relative\"],[9],[0,\"\\n      \"],[1,[21,\"etw/module-style-detail\"],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application-tailwind.hbs" } });
});
;define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "aSJk0k9Q", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false],[0,\"\\n\\n\"],[1,[21,\"docs-keyboard-shortcuts\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
;define("dummy/templates/components/args-table", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sZI2oEaE", "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"nav\"],[11,\"class\",\"docs-demo__snippets-nav docs-py-2 docs-px-4 docs-font-medium docs-bg-grey-lighter docs-tracking-tight\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"docs-mr-4 docs-text-sm docs-no-underline outline-none hover:docs-text-grey-darkest docs-text-grey-darkest\"],[9],[0,\"\\n    Component arguments\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"table\"],[11,\"class\",\"docs-table-auto docs-w-full docs-mb-4 docs-mt-4\"],[9],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n    \"],[14,1,[[27,\"hash\",null,[[\"row\"],[[27,\"component\",[\"args-table/row\"],[[\"namespace\"],[[23,[\"namespace\"]]]]]]]]]],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/args-table.hbs" } });
});
;define("dummy/templates/components/args-table/align-options", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vrRzmy35", "block": "{\"symbols\":[],\"statements\":[[7,\"datalist\"],[11,\"id\",\"align-directions\"],[9],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"left\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"center\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"right\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/args-table/align-options.hbs" } });
});
;define("dummy/templates/components/args-table/checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pw+02eY6", "block": "{\"symbols\":[],\"statements\":[[7,\"label\"],[11,\"class\",\"docs-py-3 docs-md:w-2/3 docs-block docs-text-grey docs-font-bold\"],[12,\"for\",[21,\"name\"]],[9],[0,\"\\n  \"],[1,[27,\"input\",null,[[\"checked\",\"class\",\"type\"],[[23,[\"value\"]],\"docs-mr-2 docs-leading-tight\",\"checkbox\"]]],false],[0,\"\\n  \"],[7,\"span\"],[11,\"class\",\"docs-text-sm\"],[9],[0,\"\\n    \"],[1,[21,\"value\"],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/args-table/checkbox.hbs" } });
});
;define("dummy/templates/components/args-table/form-type-options", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WpKvOOTQ", "block": "{\"symbols\":[],\"statements\":[[7,\"datalist\"],[11,\"id\",\"form-types\"],[9],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"email\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"file\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"number\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"password\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"search\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"tel\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"text\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"url\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/args-table/form-type-options.hbs" } });
});
;define("dummy/templates/components/args-table/input", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GbQTexEn", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"input\",null,[[\"class\",\"id\",\"placeholder\",\"value\",\"list\"],[\"docs-bg-grey-lighter docs-appearance-none docs-border-2 docs-border-grey-lighter docs-w-full docs-text-grey-darker docs-leading-tight docs-focus:outline-none docs-focus:bg-white docs-focus:border-purple docs-py-2 docs-px-4\",[23,[\"name\"]],[23,[\"placeholder\"]],[23,[\"value\"]],[23,[\"options\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/args-table/input.hbs" } });
});
;define("dummy/templates/components/args-table/label", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vXMFM5+0", "block": "{\"symbols\":[],\"statements\":[[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-ml-4 docs-pr-4\"],[12,\"for\",[21,\"name\"]],[9],[0,\"\\n  \"],[1,[21,\"label\"],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/args-table/label.hbs" } });
});
;define("dummy/templates/components/args-table/row", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VovWNLzE", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1,[[27,\"hash\",null,[[\"label\",\"input\",\"checkbox\",\"type\"],[[27,\"component\",[\"args-table/label\"],[[\"name\"],[[23,[\"name\"]]]]],[27,\"component\",[\"args-table/input\"],[[\"name\"],[[23,[\"name\"]]]]],[27,\"component\",[\"args-table/checkbox\"],[[\"name\"],[[23,[\"name\"]]]]],[27,\"component\",[\"args-table/type\"],[[\"name\"],[[23,[\"name\"]]]]]]]]]],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/args-table/row.hbs" } });
});
;define("dummy/templates/components/args-table/size-options", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZOWKXM0R", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n  \"],[7,\"datalist\"],[11,\"id\",\"sizes\"],[9],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"giant\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"huge\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"large\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"medium\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"small\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"tiny\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/args-table/size-options.hbs" } });
});
;define("dummy/templates/components/args-table/style-options", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hPpj7Qv9", "block": "{\"symbols\":[],\"statements\":[[7,\"datalist\"],[11,\"id\",\"styles\"],[9],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"primary\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"accent\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"warning\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"error\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"dark\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"grey\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"mid\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"light\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"white\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/args-table/style-options.hbs" } });
});
;define("dummy/templates/components/args-table/type", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FnDioIqm", "block": "{\"symbols\":[],\"statements\":[[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[1,[21,\"type\"],false],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/args-table/type.hbs" } });
});
;define("dummy/templates/components/args-table/weight-options", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "j3IokdqZ", "block": "{\"symbols\":[],\"statements\":[[7,\"datalist\"],[11,\"id\",\"weights\"],[9],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"light\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"medium\"],[9],[10],[0,\"\\n  \"],[7,\"option\"],[11,\"value\",\"bold\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/args-table/weight-options.hbs" } });
});
;define("dummy/templates/components/code-snippet", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sCIyjozi", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"source\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/code-snippet.hbs" } });
});
;define("dummy/templates/components/docs-toggle", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "I3yMfIKq", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"value\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs-toggle.hbs" } });
});
;define("dummy/templates/components/docs/uxs-app/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Mc95MJ4j", "block": "{\"symbols\":[\"demo\",\"table\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"app-demo\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-app\",null,[[\"fixedNav\"],[[23,[\"fixedNav\"]]]],{\"statements\":[[0,\"      Content...\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"text-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"fixedNav\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Fixed Nav\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"checkbox\"]],[23,[\"fixedNav\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"app.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-app/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-avatar/all-sizes", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CO6gpVp7", "block": "{\"symbols\":[\"demo\",\"avatar\",\"avatar\",\"avatar\",\"avatar\",\"avatar\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"all-avatar-sizes.hbs\"]],{\"statements\":[[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n        \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=giant\"],[[\"size\",\"rounded\"],[\"giant\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-text\",[\"AB\"],[[\"size\",\"rounded\"],[\"giant\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-icon\",[\"invert_colors\"],[[\"size\",\"rounded\"],[\"giant\",true]]],false],[0,\"\\n\"],[4,\"uxs-avatar-text\",null,[[\"size\",\"rounded\"],[\"giant\",true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,6,[\"large\"]],\"958\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,6,[\"small\"]],\"THINGS\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n        \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=huge\"],[[\"size\",\"rounded\"],[\"huge\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-text\",[\"BC\"],[[\"size\",\"rounded\"],[\"huge\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-icon\",[\"accessible\"],[[\"size\",\"rounded\"],[\"huge\",true]]],false],[0,\"\\n\"],[4,\"uxs-avatar-text\",null,[[\"size\",\"rounded\"],[\"huge\",true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,5,[\"large\"]],\"100k\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,5,[\"small\"]],\"THINGS\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n        \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=large\"],[[\"size\",\"rounded\"],[\"large\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-text\",[\"CD\"],[[\"size\",\"rounded\"],[\"large\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-icon\",[\"hourglass_full\"],[[\"size\",\"rounded\"],[\"large\",true]]],false],[0,\"\\n\"],[4,\"uxs-avatar-text\",null,[[\"size\",\"rounded\"],[\"large\",true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,4,[\"large\"]],\"560m\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,4,[\"small\"]],\"THINGS\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n        \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=medium\"],[[\"size\",\"rounded\"],[\"medium\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-text\",[\"DE\"],[[\"size\",\"rounded\"],[\"medium\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-icon\",[\"fingerprint\"],[[\"size\",\"rounded\"],[\"medium\",true]]],false],[0,\"\\n\"],[4,\"uxs-avatar-text\",null,[[\"size\",\"rounded\"],[\"medium\",true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,3,[\"large\"]],\"100k\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,3,[\"small\"]],\"THINGS\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n        \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=small\"],[[\"size\",\"rounded\"],[\"small\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-text\",[\"EF\"],[[\"size\",\"rounded\"],[\"small\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-icon\",[\"today\"],[[\"size\",\"rounded\"],[\"small\",true]]],false],[0,\"\\n\"],[4,\"uxs-avatar-text\",null,[[\"size\",\"rounded\"],[\"small\",true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,2,[\"large\"]],\"10\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,2,[\"small\"]],\"THINGS\"],null],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"all-avatar-sizes.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-avatar/all-sizes.hbs" } });
});
;define("dummy/templates/components/docs/uxs-avatar/all-styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "L9PIufVI", "block": "{\"symbols\":[\"demo\",\"avatar\",\"avatar\",\"avatar\",\"avatar\",\"avatar\",\"avatar\",\"avatar\",\"avatar\",\"avatar\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"all-avatar-styles.hbs\"]],{\"statements\":[[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n        \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=primary\"],[[\"style\",\"rounded\"],[\"primary\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-text\",[\"AB\"],[[\"style\",\"rounded\"],[\"primary\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-icon\",[\"invert_colors\"],[[\"style\",\"rounded\"],[\"primary\",true]]],false],[0,\"\\n\"],[4,\"uxs-avatar-text\",null,[[\"style\",\"rounded\"],[\"primary\",true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,10,[\"large\"]],\"21\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,10,[\"small\"]],\"DAYS\"],null],false],[0,\"\\n\"]],\"parameters\":[10]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n        \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=accent\"],[[\"style\",\"rounded\"],[\"accent\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-text\",[\"BC\"],[[\"style\",\"rounded\"],[\"accent\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-icon\",[\"accessible\"],[[\"style\",\"rounded\"],[\"accent\",true]]],false],[0,\"\\n\"],[4,\"uxs-avatar-text\",null,[[\"style\",\"rounded\"],[\"accent\",true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,9,[\"large\"]],\"21\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,9,[\"small\"]],\"DAYS\"],null],false],[0,\"\\n\"]],\"parameters\":[9]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n        \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=warning\"],[[\"style\",\"rounded\"],[\"warning\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-text\",[\"CD\"],[[\"style\",\"rounded\"],[\"warning\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-icon\",[\"hourglass_full\"],[[\"style\",\"rounded\"],[\"warning\",true]]],false],[0,\"\\n\"],[4,\"uxs-avatar-text\",null,[[\"style\",\"rounded\"],[\"warning\",true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,8,[\"large\"]],\"21\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,8,[\"small\"]],\"DAYS\"],null],false],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n        \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=error\"],[[\"style\",\"rounded\"],[\"error\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-text\",[\"DE\"],[[\"style\",\"rounded\"],[\"error\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-icon\",[\"fingerprint\"],[[\"style\",\"rounded\"],[\"error\",true]]],false],[0,\"\\n\"],[4,\"uxs-avatar-text\",null,[[\"style\",\"rounded\"],[\"error\",true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,7,[\"large\"]],\"21\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,7,[\"small\"]],\"DAYS\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n        \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=dark\"],[[\"style\",\"rounded\"],[\"dark\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-text\",[\"EF\"],[[\"style\",\"rounded\"],[\"dark\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-icon\",[\"today\"],[[\"style\",\"rounded\"],[\"dark\",true]]],false],[0,\"\\n\"],[4,\"uxs-avatar-text\",null,[[\"style\",\"rounded\"],[\"dark\",true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,6,[\"large\"]],\"21\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,6,[\"small\"]],\"DAYS\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n        \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=grey\"],[[\"style\",\"rounded\"],[\"grey\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-text\",[\"FG\"],[[\"style\",\"rounded\"],[\"grey\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-icon\",[\"verified_user\"],[[\"style\",\"rounded\"],[\"grey\",true]]],false],[0,\"\\n\"],[4,\"uxs-avatar-text\",null,[[\"style\",\"rounded\"],[\"grey\",true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,5,[\"large\"]],\"21\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,5,[\"small\"]],\"DAYS\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n        \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=mid\"],[[\"style\",\"rounded\"],[\"mid\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-text\",[\"GH\"],[[\"style\",\"rounded\"],[\"mid\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-icon\",[\"album\"],[[\"style\",\"rounded\"],[\"mid\",true]]],false],[0,\"\\n\"],[4,\"uxs-avatar-text\",null,[[\"style\",\"rounded\"],[\"mid\",true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,4,[\"large\"]],\"21\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,4,[\"small\"]],\"DAYS\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n        \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=light\"],[[\"style\",\"rounded\"],[\"light\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-text\",[\"HI\"],[[\"style\",\"rounded\"],[\"light\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-icon\",[\"email\"],[[\"style\",\"rounded\"],[\"light\",true]]],false],[0,\"\\n\"],[4,\"uxs-avatar-text\",null,[[\"style\",\"rounded\"],[\"light\",true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,3,[\"large\"]],\"21\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,3,[\"small\"]],\"DAYS\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n        \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=white\"],[[\"style\",\"rounded\"],[\"white\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-text\",[\"IJ\"],[[\"style\",\"rounded\"],[\"white\",true]]],false],[0,\"\\n        \"],[1,[27,\"uxs-avatar-icon\",[\"insert_emoticon\"],[[\"style\",\"rounded\"],[\"white\",true]]],false],[0,\"\\n\"],[4,\"uxs-avatar-text\",null,[[\"style\",\"rounded\"],[\"white\",true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,2,[\"large\"]],\"21\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,2,[\"small\"]],\"DAYS\"],null],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"all-avatar-styles.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-avatar/all-styles.hbs" } });
});
;define("dummy/templates/components/docs/uxs-avatar/custom-text-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "c3crLsZc", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\",\"avatar\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"custom-text-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-avatar-text\",null,[[\"bordered\",\"rounded\",\"size\",\"style\"],[[23,[\"borderd\"]],[23,[\"rounded\"]],[23,[\"size\"]],[23,[\"style\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"large\"]],\"99\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"small\"]],\"THINGS\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"custom-text-avatar\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"bordered\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Bordered\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"checkbox\"]],[23,[\"bordered\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"rounded\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Rounded\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"checkbox\"]],[23,[\"rounded\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"size\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Size\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"size\"]]],[[\"options\"],[\"sizes\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"custom-text-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-avatar/custom-text-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-avatar/icon-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OqRoS2Ur", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"icon-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-avatar-icon\",[\"star\"],[[\"bordered\",\"rounded\",\"size\",\"style\"],[[23,[\"borderd\"]],[23,[\"rounded\"]],[23,[\"size\"]],[23,[\"style\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"icon-avatar\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"bordered\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Bordered\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"checkbox\"]],[23,[\"bordered\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"rounded\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Rounded\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"checkbox\"]],[23,[\"rounded\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"size\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Size\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"size\"]]],[[\"options\"],[\"sizes\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"icon-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-avatar/icon-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-avatar/image-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BRk4E+nx", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"image-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-avatar\",[\"https://api.faceholder.io/faces\"],[[\"bordered\",\"rounded\",\"size\",\"style\"],[[23,[\"borderd\"]],[23,[\"rounded\"]],[23,[\"size\"]],[23,[\"style\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"image-avatar\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"bordered\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Bordered\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"checkbox\"]],[23,[\"bordered\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"rounded\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Rounded\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"checkbox\"]],[23,[\"rounded\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"size\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Size\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"size\"]]],[[\"options\"],[\"sizes\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"image-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-avatar/image-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-avatar/text-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3qdlyBkN", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"text-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-avatar-text\",[\"JW\"],[[\"bordered\",\"rounded\",\"size\",\"style\"],[[23,[\"borderd\"]],[23,[\"rounded\"]],[23,[\"size\"]],[23,[\"style\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"text-avatar\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"bordered\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Bordered\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"checkbox\"]],[23,[\"bordered\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"rounded\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Rounded\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"checkbox\"]],[23,[\"rounded\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"size\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Size\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"size\"]]],[[\"options\"],[\"sizes\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"text-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-avatar/text-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-button-group/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ue7FWnCg", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"trow\",\"row\",\"row\",\"row\",\"group\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"button-group-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-button-group\",null,[[\"align\",\"disabled\",\"padded\",\"row\",\"style\"],[[23,[\"align\"]],[23,[\"disabled\"]],[23,[\"padded\"]],[23,[\"row\"]],[23,[\"style\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,8,[\"button\"]],\"Save\"],[[\"style\"],[\"primary\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,8,[\"button\"]],\"Save & Publish\"],[[\"style\"],[\"primary\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,8,[\"link\"]],\"Cancel\",\"docs.forms.buttons\"],[[\"style\"],[\"warning\"]]],false],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"button-group\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"align\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"label\"]],\"Align\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"input\"]],[23,[\"align\"]]],[[\"options\"],[\"align\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[4,\"component\",[[22,2,[\"row\"]],\"disabled\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Disabled\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"checkbox\"]],[23,[\"disabled\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"padded\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Padded\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"checkbox\"]],[23,[\"padded\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"isRow\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Row\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"checkbox\"]],[23,[\"row\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Styles\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"button-group-basic-demo.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-button-group/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-button-link/all-sizes", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qyUD+tHg", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"all-button-link-sizes.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"GIANT\",\"docs.quickstart\"],[[\"size\"],[\"giant\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"HUGE\",\"docs.quickstart\"],[[\"size\"],[\"huge\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"LARGE\",\"docs.quickstart\"],[[\"size\"],[\"large\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"MEDIUM\",\"docs.quickstart\"],[[\"size\"],[\"medium\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"SMALL\",\"docs.quickstart\"],[[\"size\"],[\"small\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"TINY\",\"docs.quickstart\"],[[\"size\"],[\"tiny\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"all-button-link-sizes.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-button-link/all-sizes.hbs" } });
});
;define("dummy/templates/components/docs/uxs-button-link/all-styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2W0Y1XZE", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"all-button-link-styles.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"DEFAULT\",\"docs.quickstart\"],null],false],[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"PRIMARY\",\"docs.quickstart\"],[[\"style\"],[\"primary\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"ACCENT\",\"docs.quickstart\"],[[\"style\"],[\"accent\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"WARNING\",\"docs.quickstart\"],[[\"style\"],[\"warning\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"ERROR\",\"docs.quickstart\"],[[\"style\"],[\"error\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"DARK\",\"docs.quickstart\"],[[\"style\"],[\"dark\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"GREY\",\"docs.quickstart\"],[[\"style\"],[\"grey\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"MID\",\"docs.quickstart\"],[[\"style\"],[\"mid\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"LIGHT\",\"docs.quickstart\"],[[\"style\"],[\"light\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[\"WHITE\",\"docs.quickstart\"],[[\"style\"],[\"white\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"all-button-link-styles.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-button-link/all-styles.hbs" } });
});
;define("dummy/templates/components/docs/uxs-button-link/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4Lk8pzbi", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"basic-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-button-link\",[[23,[\"text\"]],\"docs.quickstart\"],[[\"disabled\",\"inline\",\"loading\",\"loadingText\",\"naked\",\"size\",\"style\"],[[23,[\"disabled\"]],[23,[\"inline\"]],[23,[\"loading\"]],[23,[\"loadingText\"]],[23,[\"naked\"]],[23,[\"size\"]],[23,[\"style\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[7,\"table\"],[11,\"class\",\"docs-table-auto docs-m-4 docs-w-full\"],[9],[0,\"\\n    \"],[7,\"tbody\"],[9],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-text\"],[9],[0,\"\\n            Text\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"class\",\"id\",\"placeholder\",\"value\"],[\"docs-bg-grey-lighter docs-appearance-none docs-border-2 docs-border-grey-lighter docs-w-full docs-text-grey-darker docs-leading-tight docs-focus:outline-none docs-focus:bg-white docs-focus:border-purple docs-py-2 docs-px-4\",\"button-text\",\"Button Text\",[23,[\"text\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"String\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-disabled\"],[9],[0,\"\\n            Disabled\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-py-3 docs-md:w-2/3 docs-block docs-text-grey docs-font-bold\"],[9],[0,\"\\n            \"],[1,[27,\"input\",null,[[\"checked\",\"class\",\"type\"],[[23,[\"disabled\"]],\"docs-mr-2 docs-leading-tight\",\"checkbox\"]]],false],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"docs-text-sm\"],[9],[0,\"\\n              \"],[1,[21,\"disabled\"],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"Boolean\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-inline\"],[9],[0,\"\\n            Inline\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-py-3 docs-md:w-2/3 docs-block docs-text-grey docs-font-bold\"],[9],[0,\"\\n            \"],[1,[27,\"input\",null,[[\"checked\",\"class\",\"type\"],[[23,[\"inline\"]],\"docs-mr-2 docs-leading-tight\",\"checkbox\"]]],false],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"docs-text-sm\"],[9],[0,\"\\n              \"],[1,[21,\"inline\"],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"Boolean\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-loading\"],[9],[0,\"\\n            Loading\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-py-3 docs-md:w-2/3 docs-block docs-text-grey docs-font-bold\"],[9],[0,\"\\n            \"],[1,[27,\"input\",null,[[\"checked\",\"class\",\"type\"],[[23,[\"loading\"]],\"docs-mr-2 docs-leading-tight\",\"checkbox\"]]],false],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"docs-text-sm\"],[9],[0,\"\\n              \"],[1,[21,\"loading\"],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"Boolean\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-loading-text\"],[9],[0,\"\\n            Loading Text\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"class\",\"id\",\"placeholder\",\"value\"],[\"docs-bg-grey-lighter docs-appearance-none docs-border-2 docs-border-grey-lighter docs-w-full docs-text-grey-darker docs-leading-tight docs-focus:outline-none docs-focus:bg-white docs-focus:border-purple docs-py-2 docs-px-4\",\"button-loading-text\",\"Loading...\",[23,[\"loadingText\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"String\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-naked\"],[9],[0,\"\\n            Naked\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-py-3 docs-md:w-2/3 docs-block docs-text-grey docs-font-bold\"],[9],[0,\"\\n            \"],[1,[27,\"input\",null,[[\"checked\",\"class\",\"type\"],[[23,[\"naked\"]],\"docs-mr-2 docs-leading-tight\",\"checkbox\"]]],false],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"docs-text-sm\"],[9],[0,\"\\n              \"],[1,[21,\"naked\"],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"Boolean\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-style\"],[9],[0,\"\\n            Style\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"class\",\"id\",\"placeholder\",\"value\",\"list\"],[\"docs-bg-grey-lighter docs-appearance-none docs-border-2 docs-border-grey-lighter docs-w-full docs-text-grey-darker docs-leading-tight docs-focus:outline-none docs-focus:bg-white docs-focus:border-purple docs-py-2 docs-px-4\",\"button-style\",\"Style\",[23,[\"style\"]],\"styles\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"String\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-size\"],[9],[0,\"\\n            Size\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"class\",\"id\",\"placeholder\",\"value\",\"list\"],[\"docs-bg-grey-lighter docs-appearance-none docs-border-2 docs-border-grey-lighter docs-w-full docs-text-grey-darker docs-leading-tight docs-focus:outline-none docs-focus:bg-white docs-focus:border-purple docs-py-2 docs-px-4\",\"button-size\",\"Size\",[23,[\"size\"]],\"sizes\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"String\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"datalist\"],[11,\"id\",\"styles\"],[9],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"primary\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"accent\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"warning\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"error\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"dark\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"grey\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"mid\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"light\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"white\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"datalist\"],[11,\"id\",\"sizes\"],[9],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"giant\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"huge\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"large\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"medium\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"small\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"tiny\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"basic-demo.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-button-link/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-button-link/inline-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hFEmBPqB", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"inline-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\n      Here are some inline links\\n      \"],[1,[27,\"uxs-button-link\",[\"BUTTONS\",\"docs.forms.buttons\"],[[\"inline\",\"style\"],[true,\"primary\"]]],false],[1,[27,\"uxs-button-link\",[\"BUTTON LINKS\",\"docs.forms.button-links\"],[[\"inline\",\"style\"],[true,\"primary\"]]],false],[0,\" thanks.\\n    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"inline-demo.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-button-link/inline-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-button/action-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hdouhn9J", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"button-action-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"HIT ME ONCE\"],[[\"name\",\"onClick\"],[\"hit-me\",[27,\"action\",[[22,0,[]],\"buttonPressed\",\"hit-me-1\"],null]]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"HIT ME TWICE\"],[[\"name\",\"onClick\",\"disabled\"],[\"hit-me\",[27,\"action\",[[22,0,[]],\"buttonPressed\",\"hit-me-2\"],null],true]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"HIT ME THRICE\"],[[\"name\",\"onClick\"],[\"hit-me\",[27,\"action\",[[22,0,[]],\"buttonPressed\",\"hit-me-3\"],null]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"button-action-demo.hbs\"],null],false],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"button-action-demo.js\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-button/action-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-button/all-sizes", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Lqwgev0k", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"all-button-sizes.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"GIANT\"],[[\"size\"],[\"giant\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"HUGE\"],[[\"size\"],[\"huge\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"LARGE\"],[[\"size\"],[\"large\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"MEDIUM\"],[[\"size\"],[\"medium\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"SMALL\"],[[\"size\"],[\"small\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"TINY\"],[[\"size\"],[\"tiny\"]]],false],[0,\"\\n\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"all-button-sizes.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-button/all-sizes.hbs" } });
});
;define("dummy/templates/components/docs/uxs-button/all-styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uqQ2W+Af", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"all-button-styles.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"DEFAULT\"],null],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"PRIMARY\"],[[\"style\"],[\"primary\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"ACCENT\"],[[\"style\"],[\"accent\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"WARNING\"],[[\"style\"],[\"warning\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"ERROR\"],[[\"style\"],[\"error\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"DARK\"],[[\"style\"],[\"dark\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"GREY\"],[[\"style\"],[\"grey\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"MID\"],[[\"style\"],[\"mid\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"LIGHT\"],[[\"style\"],[\"light\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-button\",[\"WHITE\"],[[\"style\"],[\"white\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"all-button-styles.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-button/all-styles.hbs" } });
});
;define("dummy/templates/components/docs/uxs-button/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nacIOnIR", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"basic-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-button\",[[23,[\"text\"]]],[[\"disabled\",\"inline\",\"loading\",\"loadingText\",\"naked\",\"size\",\"style\"],[[23,[\"disabled\"]],[23,[\"inline\"]],[23,[\"loading\"]],[23,[\"loadingText\"]],[23,[\"naked\"]],[23,[\"size\"]],[23,[\"style\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[7,\"table\"],[11,\"class\",\"docs-table-auto docs-m-4 docs-w-full\"],[9],[0,\"\\n    \"],[7,\"tbody\"],[9],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-text\"],[9],[0,\"\\n            Text\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"class\",\"id\",\"placeholder\",\"value\"],[\"docs-bg-grey-lighter docs-appearance-none docs-border-2 docs-border-grey-lighter docs-w-full docs-text-grey-darker docs-leading-tight docs-focus:outline-none docs-focus:bg-white docs-focus:border-purple docs-py-2 docs-px-4\",\"button-text\",\"Button Text\",[23,[\"text\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"String\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-disabled\"],[9],[0,\"\\n            Disabled\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-py-3 docs-md:w-2/3 docs-block docs-text-grey docs-font-bold\"],[9],[0,\"\\n            \"],[1,[27,\"input\",null,[[\"checked\",\"class\",\"type\"],[[23,[\"disabled\"]],\"docs-mr-2 docs-leading-tight\",\"checkbox\"]]],false],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"docs-text-sm\"],[9],[0,\"\\n              \"],[1,[21,\"disabled\"],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"Boolean\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-inline\"],[9],[0,\"\\n            Inline\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-py-3 docs-md:w-2/3 docs-block docs-text-grey docs-font-bold\"],[9],[0,\"\\n            \"],[1,[27,\"input\",null,[[\"checked\",\"class\",\"type\"],[[23,[\"inline\"]],\"docs-mr-2 docs-leading-tight\",\"checkbox\"]]],false],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"docs-text-sm\"],[9],[0,\"\\n              \"],[1,[21,\"inline\"],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"Boolean\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-loading\"],[9],[0,\"\\n            Loading\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-py-3 docs-md:w-2/3 docs-block docs-text-grey docs-font-bold\"],[9],[0,\"\\n            \"],[1,[27,\"input\",null,[[\"checked\",\"class\",\"type\"],[[23,[\"loading\"]],\"docs-mr-2 docs-leading-tight\",\"checkbox\"]]],false],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"docs-text-sm\"],[9],[0,\"\\n              \"],[1,[21,\"loading\"],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"Boolean\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-loading-text\"],[9],[0,\"\\n            Loading Text\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"class\",\"id\",\"placeholder\",\"value\"],[\"docs-bg-grey-lighter docs-appearance-none docs-border-2 docs-border-grey-lighter docs-w-full docs-text-grey-darker docs-leading-tight docs-focus:outline-none docs-focus:bg-white docs-focus:border-purple docs-py-2 docs-px-4\",\"button-loading-text\",\"Loading...\",[23,[\"loadingText\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"String\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-naked\"],[9],[0,\"\\n            Naked\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-py-3 docs-md:w-2/3 docs-block docs-text-grey docs-font-bold\"],[9],[0,\"\\n            \"],[1,[27,\"input\",null,[[\"checked\",\"class\",\"type\"],[[23,[\"naked\"]],\"docs-mr-2 docs-leading-tight\",\"checkbox\"]]],false],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"docs-text-sm\"],[9],[0,\"\\n              \"],[1,[21,\"naked\"],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"Boolean\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-style\"],[9],[0,\"\\n            Style\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"class\",\"id\",\"placeholder\",\"value\",\"list\"],[\"docs-bg-grey-lighter docs-appearance-none docs-border-2 docs-border-grey-lighter docs-w-full docs-text-grey-darker docs-leading-tight docs-focus:outline-none docs-focus:bg-white docs-focus:border-purple docs-py-2 docs-px-4\",\"button-style\",\"Style\",[23,[\"style\"]],\"styles\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"String\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[11,\"class\",\"docs-w-32\"],[9],[0,\"\\n          \"],[7,\"label\"],[11,\"class\",\"docs-block docs-text-grey docs-font-bold docs-md:text-right docs-mb-1 docs-md:mb-0 docs-pr-4\"],[11,\"for\",\"button-size\"],[9],[0,\"\\n            Size\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"class\",\"id\",\"placeholder\",\"value\",\"list\"],[\"docs-bg-grey-lighter docs-appearance-none docs-border-2 docs-border-grey-lighter docs-w-full docs-text-grey-darker docs-leading-tight docs-focus:outline-none docs-focus:bg-white docs-focus:border-purple docs-py-2 docs-px-4\",\"button-size\",\"Size\",[23,[\"size\"]],\"sizes\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"em\"],[11,\"class\",\"docs-text-grey-dark docs-text-xs docs-italic docs-pl-4\"],[9],[0,\"String\"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"datalist\"],[11,\"id\",\"styles\"],[9],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"primary\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"accent\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"warning\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"error\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"dark\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"grey\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"mid\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"light\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"white\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"datalist\"],[11,\"id\",\"sizes\"],[9],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"giant\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"huge\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"large\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"medium\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"small\"],[9],[10],[0,\"\\n    \"],[7,\"option\"],[11,\"value\",\"tiny\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"basic-demo.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-button/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-button/inline-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "881O5108", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"inline-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\n      Here are some inline buttons\\n      \"],[1,[27,\"uxs-button\",[\"BUTTON ONE\"],[[\"inline\",\"style\"],[true,\"primary\"]]],false],[1,[27,\"uxs-button\",[\"BUTTON TWO\"],[[\"inline\",\"style\"],[true,\"warning\"]]],false],[0,\" thanks.\\n    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"inline-demo.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-button/inline-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-content/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "c42TDbJu", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"content-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-content\",null,[[\"align\",\"color\",\"size\",\"style\",\"weight\"],[[23,[\"align\"]],[23,[\"color\"]],[23,[\"size\"]],[23,[\"style\"]],[23,[\"weight\"]]]],{\"statements\":[[0,\"      Suspendisse mattis in mollis a a sociosqu gravida ultricies consectetur id sagittis quisque adipiscing lobortis integer ac suspendisse congue at praesent et condimentum phasellus morbi feugiat sed. Suspendisse natoque elementum nisl adipiscing ad quis sem ut aliquam cum purus ac condimentum a a eget curae ridiculus a parturient sed.\\n\"]],\"parameters\":[]},null],[4,\"uxs-content\",null,[[\"align\",\"color\",\"size\",\"style\",\"weight\"],[[23,[\"align\"]],[23,[\"color\"]],[23,[\"size\"]],[23,[\"style\"]],[23,[\"weight\"]]]],{\"statements\":[[0,\"      In a inceptos maecenas sit sit non parturient a non nunc maecenas netus in sapien scelerisque.Viverra habitasse id adipiscing montes parturient sagittis a ridiculus nec molestie vestibulum quisque ultrices varius ante nec adipiscing. Metus sem fames nulla vestibulum ad sapien adipiscing condimentum a ut ac sociosqu dui fermentum a gravida dis.\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"content-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"align\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Align\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"input\"]],[23,[\"align\"]]],[[\"options\"],[\"align-directions\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"color\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Color\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"color\"]]],[[\"options\"],[\"colors\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"weight\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Weight\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"weight\"]]],[[\"options\"],[\"weights\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"content-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-content/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-datalist/all-styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "37gl6j37", "block": "{\"symbols\":[\"demo\",\"style\",\"list\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"datalist-all-styles.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,[\"styles\"]]],null,{\"statements\":[[4,\"uxs-datalist\",null,[[\"style\",\"bordered\"],[[22,2,[]],true]],{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,3,[\"item\"]]],[[\"label\",\"value\"],[\"Style\",[27,\"capitalize\",[[22,2,[]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"datalist-all-styles.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-datalist/all-styles.hbs" } });
});
;define("dummy/templates/components/docs/uxs-datalist/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cgd7Muti", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"list\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"datalist-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-datalist\",null,[[\"bordered\",\"style\"],[[23,[\"bordered\"]],[23,[\"style\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"item\"]]],[[\"label\",\"value\"],[\"Name\",\"Frida Wardlaw\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"item\"]]],[[\"label\",\"value\"],[\"GID\",\"0123456789\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"item\"]]],[[\"label\",\"value\"],[\"Job Title\",\"Kid\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"item\"]]],[[\"label\",\"value\",\"empty\"],[\"Email\",null,\"No Email\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"item\"]]],[[\"label\",\"value\",\"tip\"],[\"Last Login\",\"20/01/18\",\"This is the last time the user accessed the system\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"item\"]]],[[\"label\",\"value\"],[\"Nothing\",null]]],false],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"datalist-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"bordered\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Bordered\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"checkbox\"]],[23,[\"bordered\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"datalist-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-datalist/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-datalist/item-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dlSuzoCj", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\",\"list\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"datalist-item-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-datalist\",null,null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"item\"]]],[[\"label\",\"value\",\"tip\",\"empty\"],[[23,[\"label\"]],[23,[\"value\"]],[23,[\"tip\"]],[23,[\"empty\"]]]]],false],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"datalist-item-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"label\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Label\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"input\"]],[23,[\"label\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"value\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Value\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"value\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"tip\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Tip\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"tip\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"empty\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Empty\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"empty\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"datalist-item-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-datalist/item-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-detail/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6WvkDQTh", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"detail-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-detail\",null,[[\"align\",\"color\",\"size\",\"style\",\"weight\"],[[23,[\"align\"]],[23,[\"color\"]],[23,[\"size\"]],[23,[\"style\"]],[23,[\"weight\"]]]],{\"statements\":[[0,\"      Dictum vulputate consectetur condimentum ornare vel a lobortis a a elementum aptent cursus nisi nam vestibulum eu est. Vestibulum vivamus a ante enim condimentum ut ipsum adipiscing molestie turpis ut malesuada phasellus scelerisque condimentum phasellus lectus adipiscing sit penatibus parturient ridiculus vivamus ligula a.\\n\"]],\"parameters\":[]},null],[4,\"uxs-detail\",null,[[\"align\",\"color\",\"size\",\"style\",\"weight\"],[[23,[\"align\"]],[23,[\"color\"]],[23,[\"size\"]],[23,[\"style\"]],[23,[\"weight\"]]]],{\"statements\":[[0,\"      Vulputate vel a urna et eu blandit suspendisse condimentum elementum adipiscing condimentum a leo parturient suspendisse nunc aptent non dis eget id ultricies nam.\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"detail-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"align\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Align\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"input\"]],[23,[\"align\"]]],[[\"options\"],[\"align-directions\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"color\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Color\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"color\"]]],[[\"options\"],[\"colors\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"weight\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Weight\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"weight\"]]],[[\"options\"],[\"weights\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"detail-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-detail/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-dl/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XIgvrSK1", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\",\"list\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"dl-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-dl\",null,[[\"color\",\"size\",\"style\",\"weight\"],[[23,[\"color\"]],[23,[\"size\"]],[23,[\"style\"]],[23,[\"weight\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"term\"]],\"Coffee\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"description\"]],\"Black hot drink\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"term\"]],\"Milk\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"description\"]],\"White cold drink\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"dl-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"color\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Color\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"input\"]],[23,[\"color\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"size\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Size\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"size\"]]],[[\"options\"],[\"sizes\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"weight\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Weight\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"weight\"]]],[[\"options\"],[\"weights\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"dl-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-dl/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-dropdown/all-styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NjD91Hny", "block": "{\"symbols\":[\"demo\",\"name\",\"name\",\"name\",\"name\",\"name\",\"name\",\"name\",\"name\",\"name\",\"name\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"form-dropdown-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-form-dropdown\",null,[[\"onchange\",\"options\",\"selected\",\"placeholder\",\"class\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null],[23,[\"nameOptions\"]],[23,[\"name\"]],\"DEFAULT\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[22,11,[]],false],[0,\"\\n\"]],\"parameters\":[11]},null],[4,\"uxs-form-dropdown\",null,[[\"onchange\",\"options\",\"selected\",\"placeholder\",\"style\",\"class\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null],[23,[\"nameOptions\"]],[23,[\"name\"]],\"PRIMARY\",\"primary\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[22,10,[]],false],[0,\"\\n\"]],\"parameters\":[10]},null],[4,\"uxs-form-dropdown\",null,[[\"onchange\",\"options\",\"selected\",\"placeholder\",\"style\",\"class\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null],[23,[\"nameOptions\"]],[23,[\"name\"]],\"ACCENT\",\"accent\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[22,9,[]],false],[0,\"\\n\"]],\"parameters\":[9]},null],[4,\"uxs-form-dropdown\",null,[[\"onchange\",\"options\",\"selected\",\"placeholder\",\"style\",\"class\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null],[23,[\"nameOptions\"]],[23,[\"name\"]],\"WARNING\",\"warning\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[22,8,[]],false],[0,\"\\n\"]],\"parameters\":[8]},null],[4,\"uxs-form-dropdown\",null,[[\"onchange\",\"options\",\"selected\",\"placeholder\",\"style\",\"class\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null],[23,[\"nameOptions\"]],[23,[\"name\"]],\"ERROR\",\"error\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[22,7,[]],false],[0,\"\\n\"]],\"parameters\":[7]},null],[4,\"uxs-form-dropdown\",null,[[\"onchange\",\"options\",\"selected\",\"placeholder\",\"style\",\"class\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null],[23,[\"nameOptions\"]],[23,[\"name\"]],\"DARK\",\"dark\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[22,6,[]],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"uxs-form-dropdown\",null,[[\"onchange\",\"options\",\"selected\",\"placeholder\",\"style\",\"class\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null],[23,[\"nameOptions\"]],[23,[\"name\"]],\"GREY\",\"grey\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[22,5,[]],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"uxs-form-dropdown\",null,[[\"onchange\",\"options\",\"selected\",\"placeholder\",\"style\",\"class\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null],[23,[\"nameOptions\"]],[23,[\"name\"]],\"MID\",\"mid\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[22,4,[]],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"uxs-form-dropdown\",null,[[\"onchange\",\"options\",\"selected\",\"placeholder\",\"style\",\"class\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null],[23,[\"nameOptions\"]],[23,[\"name\"]],\"LIGHT\",\"light\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[22,3,[]],false],[0,\"\\n\"]],\"parameters\":[3]},null],[4,\"uxs-form-dropdown\",null,[[\"onchange\",\"options\",\"selected\",\"placeholder\",\"style\",\"class\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null],[23,[\"nameOptions\"]],[23,[\"name\"]],\"WHITE\",\"white\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[22,2,[]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"mt detail\"],[9],[0,\"Selected: \"],[7,\"b\"],[9],[1,[21,\"name\"],false],[10],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"form-dropdown-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-dropdown/all-styles.hbs" } });
});
;define("dummy/templates/components/docs/uxs-dropdown/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kyqZIDDK", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"name\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"form-dropdown-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-form-dropdown\",null,[[\"disabled\",\"selected\",\"options\",\"onchange\",\"name\",\"style\",\"inline\"],[[23,[\"disabled\"]],[23,[\"name\"]],[23,[\"nameOptions\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null],\"my-dropdown\",[23,[\"style\"]],[23,[\"inline\"]]]],{\"statements\":[[0,\"      \"],[1,[22,6,[]],false],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"mt detail\"],[9],[0,\"Selected: \"],[7,\"b\"],[9],[1,[21,\"name\"],false],[10],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"form-dropdown-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"disabled\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"disabled\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"checkbox\"]],[23,[\"disabled\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"inline\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"inline\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"checkbox\"]],[23,[\"inline\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"form-dropdown-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-dropdown/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-form-control/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wDS4rzNT", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"form-control-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-form-control\",null,[[\"disabled\",\"label\",\"name\",\"style\",\"tip\",\"type\",\"value\"],[[23,[\"disabled\"]],[23,[\"label\"]],\"my-control\",[23,[\"style\"]],[23,[\"tip\"]],[23,[\"type\"]],[23,[\"value\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"form-control-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"label\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"label\"]],\"Label\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"input\"]],[23,[\"label\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"tip\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Tip\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"tip\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"type\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Type\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"type\"]]],[[\"options\"],[\"form-types\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"value\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Value\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"value\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"form-control-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-form-control/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-form-control/contextual-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fqkab0O5", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\",\"row\",\"control\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"form-control-contextual-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-form-control\",null,[[\"style\",\"disabled\"],[[23,[\"style\"]],[23,[\"disabled\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,8,[\"label\"]],[23,[\"label\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,8,[\"input\"]]],[[\"value\"],[[23,[\"value\"]]]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,8,[\"tip\"]],[23,[\"tip\"]]],null],false],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"form-control-contextual-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"label\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"label\"]],\"Label\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"input\"]],[23,[\"label\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"tip\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Tip\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"tip\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"type\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Type\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"type\"]]],[[\"options\"],[\"form-types\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"value\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Value\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"value\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"form-control-contextual-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-form-control/contextual-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-form-date/all-styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Hj5H8XSg", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"form-date-styles.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-form-date\",null,[[\"placeholder\",\"date\",\"onChange\",\"class\"],[\"DEFAULT\",[27,\"readonly\",[[23,[\"date\"]]],null],[27,\"action\",[[22,0,[]],\"setDate\"],null],\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-date\",null,[[\"placeholder\",\"style\",\"date\",\"onChange\",\"class\"],[\"PRIMARY\",\"primary\",[27,\"readonly\",[[23,[\"date\"]]],null],[27,\"action\",[[22,0,[]],\"setDate\"],null],\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-date\",null,[[\"placeholder\",\"style\",\"date\",\"onChange\",\"class\"],[\"ACCENT\",\"accent\",[27,\"readonly\",[[23,[\"date\"]]],null],[27,\"action\",[[22,0,[]],\"setDate\"],null],\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-date\",null,[[\"placeholder\",\"style\",\"date\",\"onChange\",\"class\"],[\"WARNING\",\"warning\",[27,\"readonly\",[[23,[\"date\"]]],null],[27,\"action\",[[22,0,[]],\"setDate\"],null],\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-date\",null,[[\"placeholder\",\"style\",\"date\",\"onChange\",\"class\"],[\"ERROR\",\"error\",[27,\"readonly\",[[23,[\"date\"]]],null],[27,\"action\",[[22,0,[]],\"setDate\"],null],\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-date\",null,[[\"placeholder\",\"style\",\"date\",\"onChange\",\"class\"],[\"DARK\",\"dark\",[27,\"readonly\",[[23,[\"date\"]]],null],[27,\"action\",[[22,0,[]],\"setDate\"],null],\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-date\",null,[[\"placeholder\",\"style\",\"date\",\"onChange\",\"class\"],[\"GREY\",\"grey\",[27,\"readonly\",[[23,[\"date\"]]],null],[27,\"action\",[[22,0,[]],\"setDate\"],null],\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-date\",null,[[\"placeholder\",\"style\",\"date\",\"onChange\",\"class\"],[\"MID\",\"mid\",[27,\"readonly\",[[23,[\"date\"]]],null],[27,\"action\",[[22,0,[]],\"setDate\"],null],\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-date\",null,[[\"placeholder\",\"style\",\"date\",\"onChange\",\"class\"],[\"LIGHT\",\"light\",[27,\"readonly\",[[23,[\"date\"]]],null],[27,\"action\",[[22,0,[]],\"setDate\"],null],\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-date\",null,[[\"placeholder\",\"style\",\"date\",\"onChange\",\"class\"],[\"WHITE\",\"white\",[27,\"readonly\",[[23,[\"date\"]]],null],[27,\"action\",[[22,0,[]],\"setDate\"],null],\"mb\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"form-date-styles.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-form-date/all-styles.hbs" } });
});
;define("dummy/templates/components/docs/uxs-form-date/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uDE8vm+X", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"form-date-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-form-date\",null,[[\"disabled\",\"inline\",\"placeholder\",\"style\",\"value\",\"onChange\",\"class\"],[[23,[\"disabled\"]],[23,[\"inline\"]],\"Enter Date\",[23,[\"style\"]],[27,\"readonly\",[[23,[\"date\"]]],null],[27,\"action\",[[22,0,[]],\"setDate\"],null],\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-time\",null,[[\"disabled\",\"inline\",\"placeholder\",\"style\",\"value\",\"onChange\",\"class\"],[[23,[\"disabled\"]],[23,[\"inline\"]],\"Enter Time\",[23,[\"style\"]],[27,\"readonly\",[[23,[\"time\"]]],null],[27,\"action\",[[22,0,[]],\"setTime\"],null],\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-date\",null,[[\"disabled\",\"inline\",\"placeholder\",\"style\",\"value\",\"onChange\",\"class\"],[[23,[\"disabled\"]],[23,[\"inline\"]],\"Enter Datetime\",[23,[\"style\"]],[27,\"readonly\",[[23,[\"datetime\"]]],null],[27,\"action\",[[22,0,[]],\"setDate\"],null],\"mb\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"form-date-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"disabled\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"disabled\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"checkbox\"]],[23,[\"disabled\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"inline\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"inline\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"checkbox\"]],[23,[\"inline\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"form-date-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-form-date/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-form-input/all-styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JxcSNQko", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"form-input-styles.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-form-input\",null,[[\"type\",\"placeholder\",\"class\"],[\"text\",\"DEFAULT\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-input\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"PRIMARY\",\"primary\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-input\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"ACCENT\",\"accent\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-input\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"WARNING\",\"warning\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-input\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"ERROR\",\"error\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-input\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"DARK\",\"dark\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-input\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"GREY\",\"grey\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-input\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"MID\",\"mid\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-input\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"LIGHT\",\"light\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-input\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"WHITE\",\"white\",\"mb\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"form-input-styles.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-form-input/all-styles.hbs" } });
});
;define("dummy/templates/components/docs/uxs-form-input/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KbUf9EQL", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"form-input-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-form-input\",null,[[\"disabled\",\"enter\",\"inline\",\"placeholder\",\"style\",\"type\",\"value\"],[[23,[\"disabled\"]],[27,\"action\",[[22,0,[]],\"enterPressed\",[23,[\"value\"]]],null],[23,[\"inline\"]],[23,[\"placeholder\"]],[23,[\"style\"]],[23,[\"type\"]],[23,[\"value\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"form-input-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"disabled\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"label\"]],\"disabled\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"checkbox\"]],[23,[\"disabled\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[4,\"component\",[[22,2,[\"row\"]],\"inline\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"inline\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"checkbox\"]],[23,[\"inline\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"type\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Type\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"type\"]]],[[\"options\"],[[23,[\"form-types\"]]]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"value\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Value\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"value\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"form-input-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-form-input/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-form-textarea/all-styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sE6YhTd1", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"form-textarea-styles.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-form-textarea\",null,[[\"type\",\"placeholder\",\"class\"],[\"text\",\"DEFAULT\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-textarea\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"PRIMARY\",\"primary\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-textarea\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"ACCENT\",\"accent\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-textarea\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"WARNING\",\"warning\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-textarea\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"ERROR\",\"error\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-textarea\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"DARK\",\"dark\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-textarea\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"GREY\",\"grey\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-textarea\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"MID\",\"mid\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-textarea\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"LIGHT\",\"light\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-form-textarea\",null,[[\"type\",\"placeholder\",\"style\",\"class\"],[\"text\",\"WHITE\",\"white\",\"mb\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"form-textarea-styles.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-form-textarea/all-styles.hbs" } });
});
;define("dummy/templates/components/docs/uxs-form-textarea/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "a4cAStSq", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"form-textarea-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-form-textarea\",null,[[\"cols\",\"disabled\",\"enter\",\"inline\",\"placeholder\",\"rows\",\"style\",\"value\"],[[23,[\"cols\"]],[23,[\"disabled\"]],[27,\"action\",[[22,0,[]],\"enterPressed\",[23,[\"value\"]]],null],[23,[\"inline\"]],[23,[\"placeholder\"]],[23,[\"rows\"]],[23,[\"style\"]],[23,[\"value\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"form-textarea-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"cols\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,9,[\"label\"]],\"Cols\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,9,[\"input\"]],[23,[\"cols\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,9,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[9]},null],[4,\"component\",[[22,2,[\"row\"]],\"disabled\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,8,[\"label\"]],\"disabled\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,8,[\"checkbox\"]],[23,[\"disabled\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,8,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[8]},null],[4,\"component\",[[22,2,[\"row\"]],\"inline\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"label\"]],\"inline\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"checkbox\"]],[23,[\"inline\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[4,\"component\",[[22,2,[\"row\"]],\"rows\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Rows\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"input\"]],[23,[\"rows\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"type\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Type\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"type\"]]],[[\"options\"],[[23,[\"form-types\"]]]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"value\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Value\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"value\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"form-textarea-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-form-textarea/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-form/model-bound-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pjFcJw2f", "block": "{\"symbols\":[\"demo\",\"form\",\"control\",\"control\",\"control\",\"row\",\"control\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"model-bound-form.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-form\",null,[[\"onSubmit\",\"model\"],[[27,\"action\",[[22,0,[]],\"save\",[23,[\"model\"]]],null],[23,[\"model\"]]]],{\"statements\":[[0,\"\\n      \"],[1,[27,\"component\",[[22,2,[\"control\"]]],[[\"label\",\"name\",\"type\"],[\"Title\",\"title\",\"text\"]]],false],[0,\"\\n\\n\"],[4,\"component\",[[22,2,[\"control\"]]],[[\"label\",\"name\",\"tip\"],[\"Name\",\"name\",\"To show inline fields we use a form row\"]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,7,[\"row\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,8,[\"input\"]]],[[\"name\"],[\"firstName\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,8,[\"input\"]]],[[\"name\"],[\"lastName\"]]],false],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"\\n      \"],[1,[27,\"component\",[[22,2,[\"control\"]]],[[\"label\",\"name\",\"type\",\"tip\"],[\"Email\",\"email\",\"email\",\"Valid emails only please.\"]]],false],[0,\"\\n\\n      \"],[1,[27,\"component\",[[22,2,[\"control\"]]],[[\"label\",\"name\",\"type\",\"rows\"],[\"Biography\",\"bio\",\"textarea\",5]]],false],[0,\"\\n\\n\"],[4,\"component\",[[22,2,[\"control\"]]],[[\"label\",\"tip\",\"name\"],[\"Date of Birth\",\"We're using a form row here to include a prefix date icon, it's not required but does give a better user experience.\",\"dateOfBirth\"]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,5,[\"row\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,6,[\"icon\"]],\"date_range\"],[[\"prefix\"],[true]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,6,[\"date\"]]],[[\"onChange\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"dateOfBirth\"]]],null]],null]]]],false],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"\\n\"],[4,\"component\",[[22,2,[\"control\"]]],[[\"label\",\"name\"],[\"Date Time\",\"datetime\"]],{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,4,[\"datetime\"]]],[[\"onChange\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"datetime\"]]],null]],null]]]],false],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"\\n\"],[4,\"component\",[[22,2,[\"control\"]]],[[\"label\",\"name\"],[\"Time\",\"time\"]],{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,3,[\"time\"]]],[[\"onChange\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"time\"]]],null]],null]]]],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"\\n      \"],[1,[27,\"component\",[[22,2,[\"submit\"]],\"Save\"],null],false],[0,\"\\n\\n      \"],[1,[27,\"component\",[[22,2,[\"link\"]],\"Back\",\"docs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"model-bound-form.hbs\"],null],false],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"model-bound-form.js\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-form/model-bound-form.hbs" } });
});
;define("dummy/templates/components/docs/uxs-form/validation", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7E1hWb5I", "block": "{\"symbols\":[\"demo\",\"form\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"form-validation\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-form\",null,[[\"onSubmit\",\"model\"],[[27,\"action\",[[22,0,[]],\"login\",[23,[\"model\"]]],null],[23,[\"model\"]]]],{\"statements\":[[0,\"\\n      \"],[1,[27,\"component\",[[22,2,[\"control\"]]],[[\"label\",\"name\",\"type\",\"autocomplete\"],[\"Username\",\"username\",\"text\",\"username\"]]],false],[0,\"\\n\\n      \"],[1,[27,\"component\",[[22,2,[\"control\"]]],[[\"label\",\"name\",\"type\",\"autocomplete\"],[\"Password\",\"password\",\"password\",\"password\"]]],false],[0,\"\\n\\n      \"],[1,[27,\"component\",[[22,2,[\"submit\"]],\"Login\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"form-validation.hbs\"],null],false],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"form-validation-route.js\"],[[\"label\"],[\"route.js\"]]],false],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"form-validation.js\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-form/validation.hbs" } });
});
;define("dummy/templates/components/docs/uxs-header/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9DUdMvZZ", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"header\",\"toolbar\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"header-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-header\",null,[[\"style\"],[[23,[\"style\"]]]],{\"statements\":[[4,\"component\",[[22,5,[\"toolbar\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,6,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n        \"],[1,[22,6,[\"spacer\"]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,6,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,6,[\"action\"]],\"file_download\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,6,[\"action\"]],\"search\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"      \"],[1,[27,\"component\",[[22,5,[\"title\"]],[23,[\"title\"]]],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"text-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"title\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Title\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"title\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"header-basic-demo.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-header/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-header/image-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4anbaSjf", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"header\",\"toolbar\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"header-image-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-header\",null,[[\"style\",\"image\"],[[23,[\"style\"]],[23,[\"image\"]]]],{\"statements\":[[4,\"component\",[[22,6,[\"toolbar\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,7,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n        \"],[1,[22,7,[\"spacer\"]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,7,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,7,[\"action\"]],\"file_download\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,7,[\"action\"]],\"search\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"      \"],[1,[27,\"component\",[[22,6,[\"title\"]],[23,[\"title\"]]],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"text-image-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"title\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Title\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"title\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"image\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Image URL\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"image\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"header-image-demo.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-header/image-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-heading/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "p2nluTNf", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"heading-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-heading\",[[23,[\"text\"]]],[[\"align\",\"color\",\"size\",\"style\",\"weight\"],[[23,[\"align\"]],[23,[\"color\"]],[23,[\"size\"]],[23,[\"style\"]],[23,[\"weight\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"heading-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"text\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"label\"]],\"Text\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"input\"]],[23,[\"text\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[4,\"component\",[[22,2,[\"row\"]],\"align\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Align\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"input\"]],[23,[\"align\"]]],[[\"options\"],[\"align-directions\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"color\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Color\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"color\"]]],[[\"options\"],[\"colors\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"weight\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Weight\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"weight\"]]],[[\"options\"],[\"weights\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"heading-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-heading/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-icon/action-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "E7yXM+B3", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"icon-action-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-icon\",[[23,[\"icon\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"save\"],null]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"icon-action-demo.hbs\"],null],false],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"icon-action-demo.js\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-icon/action-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-icon/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "32YPXuiV", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"icon-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-icon\",[[23,[\"icon\"]]],[[\"style\",\"size\",\"disabled\"],[[23,[\"style\"]],[23,[\"size\"]],[23,[\"disabled\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"icon-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"icon\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Icon\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"input\"]],[23,[\"icon\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"disabled\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Disabled\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"checkbox\"]],[23,[\"disabled\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"size\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Size\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"size\"]]],[[\"options\"],[\"sizes\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"icon-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-icon/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-list-item/avatar-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uCNzSUDr", "block": "{\"symbols\":[\"demo\",\"list\",\"thing\",\"item\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"list-items-avatar-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,[[\"lines\",\"bordered\"],[3,true]],{\"statements\":[[4,\"each\",[[23,[\"items\"]]],null,{\"statements\":[[4,\"component\",[[22,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,4,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,4,[\"avatar\"]],\"https://placeimg.com/100/100/any\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,4,[\"body\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,4,[\"title\"]],[22,3,[\"title\"]]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,4,[\"detail\"]],[22,3,[\"location\"]]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,4,[\"detail\"]],[22,3,[\"email\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,4,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,4,[\"action\"]],\"keyboard_arrow_right\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[4]},null]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"list-items-avatar-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-list-item/avatar-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-list-item/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "B50WGVkU", "block": "{\"symbols\":[\"demo\",\"list\",\"thing\",\"item\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"list-item-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,null,{\"statements\":[[4,\"each\",[[23,[\"items\"]]],null,{\"statements\":[[4,\"component\",[[22,2,[\"item\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,4,[\"title\"]],[22,3,[\"title\"]]],null],false],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"list-item-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-list-item/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-list-item/content-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LALmDDMn", "block": "{\"symbols\":[\"demo\",\"list\",\"thing\",\"item\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"list-items-content-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,[[\"lines\",\"bordered\"],[2,true]],{\"statements\":[[4,\"each\",[[23,[\"items\"]]],null,{\"statements\":[[4,\"component\",[[22,2,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,4,[\"content\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,4,[\"title\"]],[22,3,[\"title\"]]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,4,[\"content\"]],[22,3,[\"location\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[4]},null]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"list-items-content-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-list-item/content-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-list-notice/all-styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ggvxLQ8e", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"list-notice-styles.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-list-notice\",[\"Displaying Filtered Results\"],[[\"icon\",\"actionText\",\"onClick\",\"style\"],[\"filter_list\",\"Clear\",[27,\"action\",[[22,0,[]],\"noticeAction\"],null],\"primary\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-list-notice\",[\"Displaying Filtered Results\"],[[\"icon\",\"actionText\",\"onClick\",\"style\"],[\"filter_list\",\"Clear\",[27,\"action\",[[22,0,[]],\"noticeAction\"],null],\"accent\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-list-notice\",[\"Displaying Filtered Results\"],[[\"icon\",\"actionText\",\"onClick\",\"style\"],[\"filter_list\",\"Clear\",[27,\"action\",[[22,0,[]],\"noticeAction\"],null],\"warning\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-list-notice\",[\"Displaying Filtered Results\"],[[\"icon\",\"actionText\",\"onClick\",\"style\"],[\"filter_list\",\"Clear\",[27,\"action\",[[22,0,[]],\"noticeAction\"],null],\"error\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-list-notice\",[\"Displaying Filtered Results\"],[[\"icon\",\"actionText\",\"onClick\",\"style\"],[\"filter_list\",\"Clear\",[27,\"action\",[[22,0,[]],\"noticeAction\"],null],\"dark\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-list-notice\",[\"Displaying Filtered Results\"],[[\"icon\",\"actionText\",\"onClick\",\"style\"],[\"filter_list\",\"Clear\",[27,\"action\",[[22,0,[]],\"noticeAction\"],null],\"grey\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-list-notice\",[\"Displaying Filtered Results\"],[[\"icon\",\"actionText\",\"onClick\",\"style\"],[\"filter_list\",\"Clear\",[27,\"action\",[[22,0,[]],\"noticeAction\"],null],\"mid\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-list-notice\",[\"Displaying Filtered Results\"],[[\"icon\",\"actionText\",\"onClick\",\"style\"],[\"filter_list\",\"Clear\",[27,\"action\",[[22,0,[]],\"noticeAction\"],null],\"light\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-list-notice\",[\"Displaying Filtered Results\"],[[\"icon\",\"actionText\",\"onClick\",\"style\"],[\"filter_list\",\"Clear\",[27,\"action\",[[22,0,[]],\"noticeAction\"],null],\"white\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"list-notice-styles.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-list-notice/all-styles.hbs" } });
});
;define("dummy/templates/components/docs/uxs-list-notice/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8j6EBgHQ", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"list\",\"item\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"list-notices-basic.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,[[\"lines\",\"bordered\"],[3,true]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"notice\"]],[23,[\"text\"]]],[[\"style\"],[[23,[\"style\"]]]]],false],[0,\"\\n\"],[4,\"component\",[[22,5,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,6,[\"aside\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,6,[\"avatar\"]],\"https://placeimg.com/100/100/any\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,6,[\"body\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,6,[\"title\"]],\"Filtered Item\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,6,[\"detail\"]],\"Notice how the list avatar\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,6,[\"detail\"]],\"matches the notice icon\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,6,[\"aside\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,6,[\"action\"]],\"keyboard_arrow_right\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[6]},null]],\"parameters\":[5]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"list-notice-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"text\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Text\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"text\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"list-notices-basic.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-list-notice/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-list-notice/icon-action-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "m+eGO0xs", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\",\"list\",\"item\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"list-notices-icon-action.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,[[\"lines\",\"bordered\"],[3,true]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"notice\"]],[23,[\"text\"]]],[[\"style\",\"icon\",\"actionText\",\"onClick\"],[[23,[\"style\"]],[23,[\"icon\"]],[23,[\"actionText\"]],[27,\"action\",[[22,0,[]],\"noticeAction\"],null]]]],false],[0,\"\\n\"],[4,\"component\",[[22,7,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,8,[\"aside\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,8,[\"avatar\"]],\"https://placeimg.com/100/100/any\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,8,[\"body\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,8,[\"title\"]],\"Filtered Item\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,8,[\"detail\"]],\"Notice how the list avatar\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,8,[\"detail\"]],\"matches the notice icon\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,8,[\"aside\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,8,[\"action\"]],\"keyboard_arrow_right\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[8]},null]],\"parameters\":[7]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"list-notiuce icon-action-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"text\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Text\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"input\"]],[23,[\"text\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"icon\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Icon\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"icon\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"actionText\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Action Text\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"actionText\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"list-notices-icon-action.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-list-notice/icon-action-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-list/subheading/all-styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kcJI4xNJ", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"all-list-subheading-styles.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-list/x-subheading\",[\"DEFAULT\"],null],false],[0,\"\\n    \"],[1,[27,\"uxs-list/x-subheading\",[\"PRIMARY\"],[[\"style\"],[\"primary\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-list/x-subheading\",[\"ACCENT\"],[[\"style\"],[\"accent\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-list/x-subheading\",[\"WARNING\"],[[\"style\"],[\"warning\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-list/x-subheading\",[\"ERROR\"],[[\"style\"],[\"error\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-list/x-subheading\",[\"DARK\"],[[\"style\"],[\"dark\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-list/x-subheading\",[\"GREY\"],[[\"style\"],[\"grey\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-list/x-subheading\",[\"MID\"],[[\"style\"],[\"mid\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-list/x-subheading\",[\"LIGHT\"],[[\"style\"],[\"light\"]]],false],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"bg-grey\"],[9],[0,\"\\n      \"],[1,[27,\"uxs-list/x-subheading\",[\"WHITE\"],[[\"style\"],[\"white\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"all-list-subheading-styles.hbs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-list/subheading/all-styles.hbs" } });
});
;define("dummy/templates/components/docs/uxs-list/subheading/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8G5A8aML", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"list\",\"item\",\"item\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"basic-list-subheading.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"subheading\"]],[23,[\"title\"]]],[[\"bordered\",\"style\"],[[23,[\"bordered\"]],[23,[\"style\"]]]]],false],[0,\"\\n\"],[4,\"component\",[[22,6,[\"item\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,8,[\"content\"]],\"List Item One\"],null],false],[0,\"\\n\"]],\"parameters\":[8]},null],[4,\"component\",[[22,6,[\"item\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,7,[\"content\"]],\"List Item Two\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null]],\"parameters\":[6]},null]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"basic-list-subheading.hbs\"],null],false],[0,\"\\n\\n\"],[4,\"args-table\",[\"basic-list-subheading\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"bordered\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Bordered\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"checkbox\"]],[23,[\"bordered\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"title\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Title\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"title\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-list/subheading/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-list/subheading/yield-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MrFI2ntN", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"list\",\"item\",\"item\",\"subheading\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"yield-list-subheading.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,[[\"lines\"],[3]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,6,[\"subheading\"]]],[[\"bordered\",\"style\",\"yield\"],[[23,[\"bordered\"]],[23,[\"style\"]],true]],{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,9,[\"icon\"]],\"swap_vert\"],[[\"size\"],[\"medium\"]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,9,[\"text\"]],[23,[\"title\"]]],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,9,[\"toggle\"]]],[[\"value\",\"onToggle\"],[[23,[\"toggled\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"toggled\"]]],null]],null]]]],false],[0,\"\\n\"]],\"parameters\":[9]},null],[0,\"\\n\"],[4,\"component\",[[22,6,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,8,[\"aside\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,8,[\"avatar\"]],\"https://placeimg.com/100/100/any?i=1\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,8,[\"body\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,8,[\"title\"]],\"Item One\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,8,[\"detail\"]],\"Elementum integer parturient suspendisse.\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,8,[\"detail\"]],\"A suspendisse semper\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,8,[\"aside\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,8,[\"action\"]],\"keyboard_arrow_right\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[8]},null],[0,\"\\n\"],[4,\"component\",[[22,6,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,7,[\"aside\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,7,[\"avatar\"]],\"https://placeimg.com/100/100/any?i=2\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,7,[\"body\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,7,[\"title\"]],\"Item One\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,7,[\"detail\"]],\"Facilisi libero quam hac amet.\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,7,[\"detail\"]],\"Dui ultrices dis et a hendrerit\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,7,[\"aside\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,7,[\"action\"]],\"keyboard_arrow_right\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[7]},null],[0,\"\\n\"]],\"parameters\":[6]},null]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"yield-list-subheading.hbs\"],null],false],[0,\"\\n\\n\"],[4,\"args-table\",[\"yield-list-subheading\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"bordered\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Bordered\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"checkbox\"]],[23,[\"bordered\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"title\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Title\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"title\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-list/subheading/yield-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-navbar/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yHXYKshr", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"bar\",\"nav\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"navbar-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-navbar\",null,[[\"style\",\"title\",\"fixed\"],[[23,[\"style\"]],[23,[\"title\"]],[23,[\"fixed\"]]]],{\"statements\":[[4,\"component\",[[22,6,[\"menu\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,7,[\"item\"]],\"Home\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,7,[\"item\"]],\"Account\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,7,[\"item\"]],\"Logout\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null]],\"parameters\":[6]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"text-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"title\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Title\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"title\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"fixed\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Fixed\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"checkbox\"]],[23,[\"fixed\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"Bolean\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"navbar-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-navbar/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-navbar/responsive-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BQKoYzGb", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"bar\",\"nav\",\"nav\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"navbar-responsive-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-navbar\",null,[[\"style\",\"title\",\"fixed\"],[[23,[\"style\"]],[23,[\"title\"]],[23,[\"fixed\"]]]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,6,[\"desktopNav\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,8,[\"item\"]],\"Home\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,8,[\"item\"]],\"Account\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,8,[\"item\"]],\"Logout\"],null],false],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"\\n\"],[4,\"component\",[[22,6,[\"mobileNav\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,7,[\"item\"]],\"Home\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,7,[\"item\"]],\"Account\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,7,[\"item\"]],\"Logout\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"text-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"title\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Title\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"title\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"fixed\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Fixed\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"checkbox\"]],[23,[\"fixed\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"Bolean\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"navbar-responsive-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-navbar/responsive-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-ol/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GpiOWNoY", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\",\"list\",\"sublist\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"ol-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-ol\",null,[[\"color\",\"size\",\"style\",\"weight\"],[[23,[\"color\"]],[23,[\"size\"]],[23,[\"style\"]],[23,[\"weight\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"item\"]],\"Item One\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"item\"]],\"Item Two\"],null],false],[0,\"\\n\"],[4,\"component\",[[22,7,[\"ol\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,8,[\"item\"]],\"Item Three a\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,8,[\"item\"]],\"Item Three b\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,8,[\"item\"]],\"Item Three c\"],null],false],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"      \"],[1,[27,\"component\",[[22,7,[\"item\"]],\"Item Four\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"ol-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"color\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Color\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"input\"]],[23,[\"color\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"size\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Size\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"size\"]]],[[\"options\"],[\"sizes\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"weight\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Weight\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"weight\"]]],[[\"options\"],[\"weights\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"ol-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-ol/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-pagination/all-styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qGrL0MOs", "block": "{\"symbols\":[\"demo\",\"style\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"pagination-all-styles-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,[\"styles\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"uxs-pagination-controls\",null,[[\"size\",\"page\",\"total\",\"style\",\"onChange\"],[[23,[\"model\",\"meta\",\"size\"]],[23,[\"model\",\"meta\",\"page\"]],[23,[\"model\",\"meta\",\"total\"]],[22,2,[]],[27,\"action\",[[22,0,[]],\"paginateResults\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"pagination-all-styles-demo.hbs\"],null],false],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"pagination-all-styles-demo.js\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-pagination/all-styles.hbs" } });
});
;define("dummy/templates/components/docs/uxs-pagination/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jyrtJXue", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"pagination-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-pagination-controls\",null,[[\"size\",\"page\",\"total\",\"style\",\"resultsLabel\",\"countPrefix\",\"countSuffix\",\"onChange\"],[[23,[\"model\",\"meta\",\"size\"]],[23,[\"model\",\"meta\",\"page\"]],[23,[\"model\",\"meta\",\"total\"]],[23,[\"style\"]],[23,[\"resultsLabel\"]],[23,[\"countPrefix\"]],[23,[\"countSuffix\"]],[27,\"action\",[[22,0,[]],\"paginateResults\"],null]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"pagination-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"resultsLabel\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Label\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"resultsLabel\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"countPrefix\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Prefix\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"countPrefix\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"countSuffix\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Suffix\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"countSuffix\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"pagination-basic-demo.hbs\"],null],false],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"pagination-basic-demo.js\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-pagination/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-pane/main-aside", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BUDDMWuz", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"main-aside-pane.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-window\",null,null,{\"statements\":[[4,\"uxs-pane\",null,[[\"main\",\"style\",\"padded\"],[true,[23,[\"mainStyle\"]],[23,[\"padded\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"uxs-heading\",[\"Main Pane\"],null],false],[0,\"\\n\"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"          Turpis in eros morbi scelerisque nisl condimentum ut ultricies scelerisque sociosqu venenatis cum parturient id eleifend sodales vitae rutrum sociosqu accumsan.\\n\"]],\"parameters\":[]},null],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"          Bibendum etiam at nascetur morbi proin tristique quam aenean dictumst vestibulum odio proin bibendum leo scelerisque ullamcorper dui.\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"uxs-pane\",null,[[\"aside\",\"style\",\"padded\"],[true,[23,[\"asideStyle\"]],[23,[\"padded\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"uxs-heading\",[\"Aside\"],null],false],[0,\"\\n        \"],[1,[27,\"uxs-button\",[\"Action 1\"],null],false],[0,\"\\n        \"],[1,[27,\"uxs-button\",[\"Action 2\"],null],false],[0,\"\\n        \"],[1,[27,\"uxs-button\",[\"Action 3\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"main-aside-pane\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"padded\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Padded\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"checkbox\"]],[23,[\"padded\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"mainStyle\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Main Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"mainStyle\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"asideStyle\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Main Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"asideStyle\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"main-aside-pane.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-pane/main-aside.hbs" } });
});
;define("dummy/templates/components/docs/uxs-pane/single", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EUhaEdTk", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"single-pane.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-window\",null,null,{\"statements\":[[4,\"uxs-pane\",null,[[\"single\",\"style\",\"padded\"],[true,[23,[\"style\"]],[23,[\"padded\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"uxs-heading\",[\"Single Pane\"],null],false],[0,\"\\n\"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"          Turpis in eros morbi scelerisque nisl condimentum ut ultricies scelerisque sociosqu venenatis cum parturient id eleifend sodales vitae rutrum sociosqu accumsan.\\n\"]],\"parameters\":[]},null],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"          Bibendum etiam at nascetur morbi proin tristique quam aenean dictumst vestibulum odio proin bibendum leo scelerisque ullamcorper dui.\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"single-pane\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"padded\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Padded\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"checkbox\"]],[23,[\"padded\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"single-pane.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-pane/single.hbs" } });
});
;define("dummy/templates/components/docs/uxs-pane/splash", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "H3AcJx0b", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"splash-pane.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-window\",null,[[\"image\"],[\"https://placeimg.com/2560/1600/any/grayscale\"]],{\"statements\":[[4,\"uxs-pane\",null,[[\"splash\",\"style\",\"padded\"],[true,[23,[\"style\"]],[23,[\"padded\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"uxs-heading\",[\"Splash Pane\"],null],false],[0,\"\\n\"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"          Turpis in eros morbi scelerisque nisl condimentum ut ultricies scelerisque sociosqu venenatis cum parturient id eleifend sodales vitae rutrum sociosqu accumsan.\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"splash-pane\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"padded\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Padded\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"checkbox\"]],[23,[\"padded\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"splash-pane.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-pane/splash.hbs" } });
});
;define("dummy/templates/components/docs/uxs-pane/split", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cA7ZYlbs", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"split-pane.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-window\",null,null,{\"statements\":[[4,\"uxs-pane\",null,[[\"split\",\"style\",\"padded\"],[true,[23,[\"paneOneStyle\"]],[23,[\"padded\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"uxs-heading\",[\"Pane One\"],null],false],[0,\"\\n\"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"          Turpis in eros morbi scelerisque nisl condimentum ut ultricies scelerisque sociosqu venenatis cum parturient id eleifend sodales vitae rutrum sociosqu accumsan.\\n\"]],\"parameters\":[]},null],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"          Bibendum etiam at nascetur morbi proin tristique quam aenean dictumst vestibulum odio proin bibendum leo scelerisque ullamcorper dui.\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"uxs-pane\",null,[[\"split\",\"style\",\"padded\"],[true,[23,[\"paneTwoStyle\"]],[23,[\"padded\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"uxs-heading\",[\"Pane Two\"],null],false],[0,\"\\n\"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"          Turpis in eros morbi scelerisque nisl condimentum ut ultricies scelerisque sociosqu venenatis cum parturient id eleifend sodales vitae rutrum sociosqu accumsan.\\n\"]],\"parameters\":[]},null],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"          Bibendum etiam at nascetur morbi proin tristique quam aenean dictumst vestibulum odio proin bibendum leo scelerisque ullamcorper dui.\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"split-pane\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"padded\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Padded\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"checkbox\"]],[23,[\"padded\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"paneOneStyle\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Pane One Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"paneOneStyle\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"paneTwoStyle\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Pane Two Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"paneTwoStyle\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"split-pane.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-pane/split.hbs" } });
});
;define("dummy/templates/components/docs/uxs-pane/threes", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eH5vSsae", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\",\"list\",\"item\",\"item\",\"item\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"threes-pane.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-window\",null,null,{\"statements\":[[4,\"uxs-pane\",null,[[\"index\",\"style\",\"padded\"],[true,[23,[\"indexStyle\"]],[23,[\"padded\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"uxs-heading\",[\"Index\"],null],false],[0,\"\\n\"],[4,\"uxs-list\",null,[[\"bordered\"],[true]],{\"statements\":[[4,\"component\",[[22,7,[\"item\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,10,[\"title\"]],\"Item One\"],null],false],[0,\"\\n\"]],\"parameters\":[10]},null],[4,\"component\",[[22,7,[\"item\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,9,[\"title\"]],\"Item Two\"],null],false],[0,\"\\n\"]],\"parameters\":[9]},null],[4,\"component\",[[22,7,[\"item\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,8,[\"title\"]],\"Item Three\"],null],false],[0,\"\\n\"]],\"parameters\":[8]},null]],\"parameters\":[7]},null]],\"parameters\":[]},null],[4,\"uxs-pane\",null,[[\"detail\",\"style\",\"padded\"],[true,[23,[\"detailStyle\"]],[23,[\"padded\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"uxs-heading\",[\"Detail\"],null],false],[0,\"\\n\"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"          Turpis in eros morbi scelerisque nisl condimentum ut ultricies scelerisque sociosqu venenatis cum parturient id eleifend sodales vitae rutrum sociosqu accumsan.\\n\"]],\"parameters\":[]},null],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"          Bibendum etiam at nascetur morbi proin tristique quam aenean dictumst vestibulum odio proin bibendum leo scelerisque ullamcorper dui.\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"uxs-pane\",null,[[\"aside\",\"style\",\"padded\"],[true,[23,[\"asideStyle\"]],[23,[\"padded\"]]]],{\"statements\":[[0,\"        \"],[1,[27,\"uxs-heading\",[\"Aside\"],null],false],[0,\"\\n        \"],[1,[27,\"uxs-button\",[\"Action 1\"],null],false],[0,\"\\n        \"],[1,[27,\"uxs-button\",[\"Action 2\"],null],false],[0,\"\\n        \"],[1,[27,\"uxs-button\",[\"Action 3\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"threes-pane\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"padded\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Padded\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"checkbox\"]],[23,[\"padded\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"indexStyle\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Index Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"indexStyle\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"detailStyle\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Detail Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"detailStyle\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"asideStyle\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Main Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"asideStyle\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"threes-pane.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-pane/threes.hbs" } });
});
;define("dummy/templates/components/docs/uxs-splash/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "G3M0cWXW", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"splash\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"basic-splash.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-splash\",null,[[\"align\",\"style\"],[[23,[\"align\"]],[23,[\"style\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"icon\"]],\"inbox\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"title\"]],\"Inbox Zero\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"text\"]],\"Congratulations, you have no more email!\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"basic-splash.hbs\"],null],false],[0,\"\\n\\n\"],[4,\"args-table\",[\"tabs\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"align\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Align\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"align\"]]],[[\"options\"],[\"align-directions\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-splash/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-subheading/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ktRmNbeX", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"subheading-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-subheading\",[[23,[\"text\"]]],[[\"align\",\"color\",\"size\",\"style\",\"weight\"],[[23,[\"align\"]],[23,[\"color\"]],[23,[\"size\"]],[23,[\"style\"]],[23,[\"weight\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"subheading-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"text\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"label\"]],\"Text\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"input\"]],[23,[\"text\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[4,\"component\",[[22,2,[\"row\"]],\"align\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Align\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"input\"]],[23,[\"align\"]]],[[\"options\"],[\"align-directions\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"color\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Color\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"color\"]]],[[\"options\"],[\"colors\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"weight\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Weight\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"weight\"]]],[[\"options\"],[\"weights\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"subheading-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-subheading/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-table/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "k5pLEe1k", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\",\"row\",\"table\",\"row\",\"row\",\"row\",\"row\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"table-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-table\",null,[[\"color\",\"fullWidth\",\"padding\",\"size\",\"style\"],[[23,[\"color\"]],[23,[\"fullWidth\"]],[23,[\"padding\"]],[23,[\"size\"]],[23,[\"style\"]]]],{\"statements\":[[4,\"component\",[[22,8,[\"row\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,15,[\"heading\"]],\"Food\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,15,[\"heading\"]],\"Caloires (g)\"],[[\"numeric\"],[true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,15,[\"heading\"]],\"Fat (g)\"],[[\"numeric\"],[true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,15,[\"heading\"]],\"Carbs (g)\"],[[\"numeric\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[15]},null],[4,\"component\",[[22,8,[\"row\"]]],[[\"section\"],[true]],{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,14,[\"cell\"]],\"Frozen yoghurt\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,14,[\"cell\"]],\"159\"],[[\"numeric\"],[true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,14,[\"cell\"]],\"6.0\"],[[\"numeric\"],[true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,14,[\"cell\"]],\"24\"],[[\"numeric\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[14]},null],[4,\"component\",[[22,8,[\"row\"]]],[[\"highlight\"],[true]],{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,13,[\"cell\"]],\"Ice cream sandwich\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,13,[\"cell\"]],\"237\"],[[\"numeric\"],[true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,13,[\"cell\"]],\"9.0\"],[[\"numeric\"],[true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,13,[\"cell\"]],\"37\"],[[\"numeric\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[13]},null],[4,\"component\",[[22,8,[\"row\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,12,[\"cell\"]],\"Eclair\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,12,[\"cell\"]],\"262\"],[[\"numeric\"],[true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,12,[\"cell\"]],\"16.0\"],[[\"numeric\"],[true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,12,[\"cell\"]],\"24\"],[[\"numeric\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[12]},null],[4,\"component\",[[22,8,[\"row\"]]],[[\"section\"],[true]],{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,11,[\"cell\"]],\"Ice Pop\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,11,[\"cell\"]],\"37\"],[[\"numeric\"],[true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,11,[\"cell\"]],\"8.0\"],[[\"numeric\"],[true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,11,[\"cell\"]],\"12\"],[[\"numeric\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[11]},null],[4,\"component\",[[22,8,[\"row\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,10,[\"cell\"]],\"Rocket cream sandwich\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,10,[\"cell\"]],\"124\"],[[\"numeric\"],[true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,10,[\"cell\"]],\"9.0\"],[[\"numeric\"],[true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,10,[\"cell\"]],\"37\"],[[\"numeric\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[10]},null],[4,\"component\",[[22,8,[\"row\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,9,[\"cell\"]],\"Callipso\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,9,[\"cell\"]],\"99\"],[[\"numeric\"],[true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,9,[\"cell\"]],\"8.0\"],[[\"numeric\"],[true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,9,[\"cell\"]],\"42\"],[[\"numeric\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[9]},null]],\"parameters\":[8]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"table-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"color\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"label\"]],\"Color\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"input\"]],[23,[\"color\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[4,\"component\",[[22,2,[\"row\"]],\"fullWidth\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Full Width\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"checkbox\"]],[23,[\"fullWidth\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"padding\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Padding\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"checkbox\"]],[23,[\"padding\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"size\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Size\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"size\"]]],[[\"options\"],[\"sizes\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"table-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-table/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-table/record-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2/a3xJ8g", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\",\"row\",\"table\",\"row\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"table-record-demo.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-table\",null,[[\"color\",\"fullWidth\",\"padding\",\"size\",\"style\",\"record\"],[[23,[\"color\"]],[23,[\"fullWidth\"]],[23,[\"padding\"]],[23,[\"size\"]],[23,[\"style\"]],true]],{\"statements\":[[4,\"component\",[[22,8,[\"row\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,12,[\"heading\"]],\"#\"],[[\"small\",\"numeric\"],[true,true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,12,[\"heading\"]],\"First Name\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,12,[\"heading\"]],\"Last Name\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,12,[\"heading\"]],\"Handle\"],null],false],[0,\"\\n\"]],\"parameters\":[12]},null],[4,\"component\",[[22,8,[\"row\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,11,[\"cell\"]],\"1\"],[[\"small\",\"numeric\"],[true,true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,11,[\"cell\"]],\"Mark\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,11,[\"cell\"]],\"Otto\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,11,[\"cell\"]],\"@mdo\"],null],false],[0,\"\\n\"]],\"parameters\":[11]},null],[4,\"component\",[[22,8,[\"row\"]]],[[\"highlight\"],[true]],{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,10,[\"cell\"]],\"2\"],[[\"small\",\"numeric\"],[true,true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,10,[\"cell\"]],\"Jacob\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,10,[\"cell\"]],\"Thornton\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,10,[\"cell\"]],\"@fat\"],null],false],[0,\"\\n\"]],\"parameters\":[10]},null],[4,\"component\",[[22,8,[\"row\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,9,[\"cell\"]],\"33\"],[[\"small\",\"numeric\"],[true,true]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,9,[\"cell\"]],\"Larry\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,9,[\"cell\"]],\"Loooooongnameason\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,9,[\"cell\"]],\"@twitter\"],null],false],[0,\"\\n\"]],\"parameters\":[9]},null]],\"parameters\":[8]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"table-record-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"color\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"label\"]],\"Color\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"input\"]],[23,[\"color\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[4,\"component\",[[22,2,[\"row\"]],\"fullWidth\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Full Width\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"checkbox\"]],[23,[\"fullWidth\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"padding\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Padding\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"checkbox\"]],[23,[\"padding\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"size\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Size\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"size\"]]],[[\"options\"],[\"sizes\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"table-record-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-table/record-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-tabs/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nCFeaVDE", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"tab\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"basic-tabs.hbs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-tabs\",null,[[\"align\",\"disabled\",\"style\"],[[23,[\"align\"]],[23,[\"disabled\"]],[23,[\"style\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"link\"]],\"Dog\",\"docs.navigation.tabs.dogs\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"link\"]],\"Cat\",\"docs.navigation.tabs.cats\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"item\"]],\"Fish\"],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"swimFish\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"basic-tabs.hbs\"],null],false],[0,\"\\n\\n\"],[4,\"args-table\",[\"tabs\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"align\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Align\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"align\"]]],[[\"options\"],[\"align-directions\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"disabled\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Disabled\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"checkbox\"]],[23,[\"disabled\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"Boolean\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-tabs/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-text/align-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qYJulqUO", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"text-align.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Left align\"],[[\"align\",\"class\"],[\"left\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Center align\"],[[\"align\",\"class\"],[\"center\",\"mb\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Right align\"],[[\"align\",\"class\"],[\"right\",\"mb\"]]],false],[0,\"\\n\"],[4,\"uxs-text\",null,[[\"align\",\"class\"],[\"justified\",\"mb\"]],{\"statements\":[[0,\"      Justified orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"text-align.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-text/align-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-text/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DvaKAw69", "block": "{\"symbols\":[\"demo\",\"table\",\"row\",\"row\",\"row\",\"row\",\"row\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"text-basic-demo.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-text\",[[23,[\"text\"]]],[[\"align\",\"color\",\"size\",\"style\",\"weight\"],[[23,[\"align\"]],[23,[\"color\"]],[23,[\"size\"]],[23,[\"style\"]],[23,[\"weight\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"text-basic-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"text\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,8,[\"label\"]],\"Text\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,8,[\"input\"]],[23,[\"text\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,8,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[8]},null],[4,\"component\",[[22,2,[\"row\"]],\"align\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"label\"]],\"Align\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"input\"]],[23,[\"align\"]]],[[\"options\"],[\"align-directions\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[4,\"component\",[[22,2,[\"row\"]],\"color\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"label\"]],\"Color\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"input\"]],[23,[\"color\"]]],[[\"options\"],[\"colors\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[4,\"component\",[[22,2,[\"row\"]],\"size\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"label\"]],\"Size\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"input\"]],[23,[\"size\"]]],[[\"options\"],[\"sizes\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[4,\"component\",[[22,2,[\"row\"]],\"style\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"label\"]],\"Style\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"input\"]],[23,[\"style\"]]],[[\"options\"],[\"styles\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[4,\"component\",[[22,2,[\"row\"]],\"weight\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Weight\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"weight\"]]],[[\"options\"],[\"weights\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"text-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-text/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-text/colors-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OTr03Dy6", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"text-color.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Primary Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"color\"],[\"primary\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Accent Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"color\"],[\"accent\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Success Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"color\"],[\"success\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Warning Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"color\"],[\"warning\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Error Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"color\"],[\"error\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Dark Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"color\"],[\"dark\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Grey Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"color\"],[\"grey\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Mid Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"color\"],[\"mid\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Light Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"color\"],[\"light\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"White Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"color\"],[\"white\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"text-color.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-text/colors-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-text/sizes-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OuC447/Q", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"text-size.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Giant / 76.244px\"],[[\"size\"],[\"giant\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Huge / 47.123px\"],[[\"size\"],[\"huge\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Large / 29.124px\"],[[\"size\"],[\"large\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Medium / 18px\"],[[\"size\"],[\"medium\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Small / 11.125px\"],[[\"size\"],[\"small\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Tiny / 6.876px\"],[[\"size\"],[\"tiny\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"text-size.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-text/sizes-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-text/styles-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "f6Y/s3/O", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"text-style.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Primary Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"style\",\"class\"],[\"primary\",\"p\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Accent Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"style\",\"class\"],[\"accent\",\"p\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Success Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"style\",\"class\"],[\"success\",\"p\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Warning Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"style\",\"class\"],[\"warning\",\"p\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Error Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"style\",\"class\"],[\"error\",\"p\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Dark Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"style\",\"class\"],[\"dark\",\"p\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Grey Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"style\",\"class\"],[\"grey\",\"p\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Mid Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"style\",\"class\"],[\"mid\",\"p\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Light Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"style\",\"class\"],[\"light\",\"p\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"White Text orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"style\",\"class\"],[\"white\",\"p\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"text-style.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-text/styles-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-text/weights-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ySMxAF6e", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"text-weight.hbs\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Bold Type orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"weight\"],[\"bold\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Medium Type orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"weight\"],[\"medium\"]]],false],[0,\"\\n    \"],[1,[27,\"uxs-text\",[\"Light Type orci etiam platea parturient lectus urna a id in adipiscing proin interdum vel dis pretium ut at condimentum nisl in suspendisse urna auctor hac venenatis.\"],[[\"weight\"],[\"light\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"text-weight.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-text/weights-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-window/all-styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zsqB5GFo", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"window-basic-demo\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-window\",null,[[\"style\"],[\"primary\"]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Primary\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Primary\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Primary\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"uxs-window\",null,[[\"style\"],[\"accent\"]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Accent\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Accent\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Accent\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"uxs-window\",null,[[\"style\"],[\"warning\"]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Warning\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Warning\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Warning\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"uxs-window\",null,[[\"style\"],[\"error\"]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Error\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Error\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Error\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"uxs-window\",null,[[\"style\"],[\"dark\"]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Dark\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Dark\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Dark\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"uxs-window\",null,[[\"style\"],[\"grey\"]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Grey\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Grey\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Grey\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"uxs-window\",null,[[\"style\"],[\"mid\"]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Mid\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Mid\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Mid\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"uxs-window\",null,[[\"style\"],[\"light\"]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Light\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Light\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"Light\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"uxs-window\",null,[[\"style\"],[\"white\"]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"White\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"White\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p ac fg\"],[9],[0,\"White\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"window-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-window/all-styles.hbs" } });
});
;define("dummy/templates/components/docs/uxs-window/basic-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "s3NMpuwJ", "block": "{\"symbols\":[\"demo\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"window-basic-demo\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-window\",null,null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"p bg-p3 ac fg\"],[9],[0,\"Col 1\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p bg-p4 ac fg\"],[9],[0,\"Col 2\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p bg-p3 ac fg\"],[9],[0,\"Col 3\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"window-basic-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-window/basic-demo.hbs" } });
});
;define("dummy/templates/components/docs/uxs-window/image-demo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZIbAVPxa", "block": "{\"symbols\":[\"demo\",\"table\",\"row\"],\"statements\":[[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"window-image-demo\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-window\",null,[[\"image\"],[[23,[\"image\"]]]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"p c-p5 ac fg\"],[9],[0,\"Col 1\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p c-p5 ac fg\"],[9],[0,\"Col 2\"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"p c-p5 ac fg\"],[9],[0,\"Col 3\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"args-table\",[\"text-image-demo\"],null,{\"statements\":[[4,\"component\",[[22,2,[\"row\"]],\"image\"],null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"label\"]],\"Image URL\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"input\"]],[23,[\"image\"]]],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"type\"]],\"String\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"window-image-demo.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/docs/uxs-window/image-demo.hbs" } });
});
;define("dummy/templates/components/etw/module-section", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "t+xs0BKx", "block": "{\"symbols\":[\"moduleStyle\",\"snippet\"],\"statements\":[[7,\"section\"],[9],[0,\"\\n  \"],[7,\"h2\"],[11,\"class\",\"etw-pt-8 etw-mb-6 etw-text-lg etw-font-bold\"],[9],[1,[21,\"title\"],false],[10],[0,\"\\n\\n  \"],[7,\"ul\"],[11,\"class\",\"etw-list-reset etw-leading-normal\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"codeSnippets\"]]],null,{\"statements\":[[0,\"      \"],[7,\"li\"],[9],[7,\"code\"],[9],[1,[22,2,[]],false],[10],[10],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"etw-mt-8 etw-flex etw-flex-wrap\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"moduleStyles\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"etw/module-style-example\",null,[[\"moduleStyle\"],[[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/etw/module-section.hbs" } });
});
;define("dummy/templates/components/etw/module-style-detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4MuX7wZT", "block": "{\"symbols\":[\"style\",\"state\",\"breakpoint\"],\"statements\":[[7,\"div\"],[11,\"class\",\"etw-shadow-lg etw-fixed etw-mr-4 etw-px-4 etw-pt-4 etw-pb-14 etw-bg-white etw-w-64 etw-mt-8 overflow-y-auto etw-h-screen\"],[9],[0,\"\\n  \"],[7,\"h3\"],[9],[0,\"Detail\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"moduleStyle\"]]],null,{\"statements\":[[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"etw-my-8\"],[9],[0,\"\\n      \"],[1,[27,\"etw/module-style-example\",null,[[\"moduleStyle\"],[[23,[\"moduleStyle\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"etw-mt-4\"],[9],[0,\"\\n      \"],[7,\"h4\"],[11,\"class\",\"etw-inline-block etw-pr-2\"],[9],[0,\"Responsive: \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"etw-mt-2 etw-text-sm etw-inline-block\"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"array\",[\"all\",\"sm\",\"md\",\"lg\",\"xl\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"a\"],[11,\"href\",\"#\"],[12,\"class\",[28,[\"\\n              etw-no-underline\\n              etw-text-black\\n              etw-pr-2\\n              \",[27,\"if\",[[27,\"eq\",[[23,[\"activeResponsiveClass\"]],[22,3,[]]],null],\"etw-opacity-100\",\"etw-opacity-25\"],null],\"\\n            \"]]],[3,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"activeResponsiveClass\"]]],null],[22,3,[]]]],[9],[0,\"\\n            \"],[1,[22,3,[]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"etw-mt-4\"],[9],[0,\"\\n      \"],[7,\"h4\"],[11,\"class\",\"etw-inline-block etw-pr-2\"],[9],[0,\"State: \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"etw-mt-2 etw-text-sm etw-inline-block\"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"array\",[\"none\",\"hover\",\"focus\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"a\"],[11,\"href\",\"#\"],[12,\"class\",[28,[\"\\n              etw-no-underline\\n              etw-text-black\\n              etw-pr-2\\n              \",[27,\"if\",[[27,\"eq\",[[23,[\"activeState\"]],[22,2,[]]],null],\"etw-opacity-100\",\"etw-opacity-25\"],null],\"\\n            \"]]],[3,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"activeState\"]]],null],[22,2,[]]]],[9],[0,\"\\n            \"],[1,[22,2,[]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"etw-mt-8 etw-mb-4\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"etw-text-right etw-text-xs etw-opacity-50\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"highlightedStyle\"]]],null,{\"statements\":[[0,\"          Copied!\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          Click to copy\\n\"]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n\\n      \"],[7,\"ul\"],[11,\"class\",\"etw-mt-3 etw-list-reset\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"detailStyles\"]]],null,{\"statements\":[[0,\"          \"],[7,\"li\"],[11,\"class\",\"etw-mt-4\"],[9],[0,\"\\n\"],[4,\"copy-button\",null,[[\"class\",\"clipboardText\",\"title\",\"success\"],[[27,\"concat\",[\"etw-bg-grey-light etw-opacity-75 hover:etw-opacity-100 \",\"etw-px-1 etw-py-2 etw-w-full etw-text-left etw-transition \",[27,\"if\",[[27,\"eq\",[[23,[\"highlightedStyle\"]],[22,1,[]]],null],\"etw-bg-green etw-text-white\"],null]],null],[22,1,[]],\"Copy\",[27,\"action\",[[22,0,[]],\"highlightStyle\",[22,1,[]]],null]]],{\"statements\":[[0,\"              \"],[7,\"code\"],[9],[0,\".\"],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"etw-mt-4 etw-text-grey etw-italic\"],[9],[0,\"Select a module for more detail.\"],[10],[0,\"\\n\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/etw/module-style-detail.hbs" } });
});
;define("dummy/templates/components/etw/module-style-example", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Zm9aiZXm", "block": "{\"symbols\":[],\"statements\":[[7,\"a\"],[11,\"class\",\"etw-mb-8 etw-w-1/5 etw-p-2\"],[3,\"action\",[[22,0,[]],\"selectModuleStyle\"]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"etw-text-center etw-m-4 etw-text-sm \"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"etw-text-center etw-m-4 etw-text-sm \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"border-radius\"],null]],null,{\"statements\":[[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-solid etw-border-grey\\n          etw-bg-grey-lighter\\n          \",[23,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[9],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"border-widths\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"\\n          etw-mx-auto etw-w-24 etw-h-24\\n          etw-border-red etw-bg-grey-lighter etw-border-solid\\n          \",[23,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[9],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"colors\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"etw-marginx-auto etw-w-full etw-h-24 bg-\",[23,[\"moduleStyle\",\"name\"]]]]],[9],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"font-weights\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"p\"],[12,\"class\",[28,[\"font-\",[23,[\"moduleStyle\",\"name\"]]]]],[9],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n        \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"height\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"\\n          etw-mx-auto etw-w-24 etw-h-24\\n          etw-border etw-border-solid etw-border-grey\\n          etw-bg-grey-lighter\\n          \",[23,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[9],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"letter-spacing\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"p\"],[12,\"class\",[28,[\"text-left tracking-\",[23,[\"moduleStyle\",\"name\"]]]]],[9],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n        \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"line-height\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"p\"],[12,\"class\",[28,[\"text-left leading-\",[23,[\"moduleStyle\",\"name\"]]]]],[9],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n        \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"margin\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"etw-bg-red etw-w-24 etw-mx-auto etw-border-t etw-border-solid \",[27,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"name\"]],\"auto\"],null],\"\",\"etw-border-transparent\"],null]]]],[9],[0,\"\\n          \"],[7,\"div\"],[12,\"class\",[28,[\"\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n             etw-bg-grey-lighter\\n            mt-\",[23,[\"moduleStyle\",\"name\"]],\"\\n          \"]]],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"max-height\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          max-h-\",[23,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[9],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"max-width\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          max-w-\",[23,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[9],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"min-height\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          min-h-\",[23,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[9],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"min-width\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-grey-lighter\\n          etw-border etw-border-solid etw-border-grey\\n          min-w-\",[23,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[9],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"negative-margin\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"etw-mb-8 etw-bg-red etw-px-4 etw-pb-4 etw-mx-auto etw-h-32 etw-relative\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"etw-absolute etw-pin-x\"],[9],[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[\"\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n            etw-bg-grey-lighter etw-shadow-lg\\n            -mt-\",[23,[\"moduleStyle\",\"name\"]],\"\\n            \"]]],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"opacity\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          opacity-\",[23,[\"moduleStyle\",\"name\"]],\"\\n        \"]]],[9],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"padding\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"etw-bg-red etw-w-24 etw-mx-auto\"],[9],[0,\"\\n          \"],[7,\"div\"],[12,\"class\",[28,[\"\\n            etw-mx-auto etw-w-24 etw-h-24 etw-border\\n             etw-bg-grey-lighter\\n            pt-\",[23,[\"moduleStyle\",\"name\"]],\"\\n          \"]]],[9],[0,\"\\n            \"],[7,\"p\"],[11,\"class\",\"etw-text-grey-darker\"],[9],[0,\"Lorem\"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"shadows\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-bg-white\\n          \",[23,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[9],[0,\"\\n        \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"svg-fill\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"etw-bg-grey-lighter etw-text-red etw-py-4\"],[9],[0,\"\\n          \"],[7,\"svg\"],[11,\"class\",\"fill-current inline-block h-12 w-12\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 20 20\"],[9],[0,\"\\n            \"],[7,\"path\"],[11,\"d\",\"M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"svg-stroke\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"etw-bg-grey-lighter etw-text-red etw-py-4\"],[9],[0,\"\\n          \"],[7,\"svg\"],[11,\"class\",\"stroke-current inline-block h-12 w-12\"],[11,\"viewBox\",\"0 0 24 24\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"fill\",\"none\"],[11,\"stroke-width\",\"2\"],[11,\"stroke-linecap\",\"round\"],[11,\"stroke-linejoin\",\"round\"],[9],[0,\"\\n              \"],[7,\"circle\"],[11,\"cx\",\"8\"],[11,\"cy\",\"21\"],[11,\"r\",\"2\"],[9],[10],[0,\"\\n              \"],[7,\"circle\"],[11,\"cx\",\"20\"],[11,\"cy\",\"21\"],[11,\"r\",\"2\"],[9],[10],[0,\"\\n              \"],[7,\"path\"],[11,\"d\",\"M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"text-sizes\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"p\"],[12,\"class\",[28,[\"text-left text-\",[23,[\"moduleStyle\",\"name\"]]]]],[9],[0,\"\\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\\n        \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"width\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          \",[23,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[9],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"moduleStyle\",\"module\"]],\"z-index\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"\\n          etw-mx-auto etw-w-24 etw-h-24 etw-border\\n          etw-border-grey etw-bg-grey-lighter\\n          \",[23,[\"classesForModuleStyle\",\"0\"]],\"\\n        \"]]],[9],[10],[0,\"\\n\\n      \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"etw-mt-3 etw-leading-normal\"],[9],[0,\"\\n        \"],[7,\"p\"],[9],[1,[23,[\"moduleStyle\",\"name\"]],false],[10],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"etw-opacity-50\"],[9],[1,[23,[\"moduleStyle\",\"value\"]],false],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/etw/module-style-example.hbs" } });
});
;define("dummy/templates/components/home-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MD9+kR5T", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h2\"],[11,\"class\",\"docs-flex docs-items-center docs-mt-8 docs-h2\"],[9],[0,\"\\n  \"],[1,[27,\"svg-jar\",[\"logo-horizontal\"],[[\"width\",\"height\",\"class\"],[40,16,\"mr-2\"]]],false],[0,\"\\n  Motivation\\n\"],[10],[0,\"\\n\\n\"],[7,\"aside\"],[9],[0,\"Looking for the quickstart? \"],[1,[27,\"docs-link\",[\"Click here\",\"docs.quickstart\"],null],false],[0,\".\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"This Addon aims to provice the basic componets found in most Ember projects at Sauce. These components share common api's and also at common css styleguide.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"The styleguide in the addon is designed to be customisable to suit each project. Customisation can start from tweaking fonts and colors all the way to spacing and vertical rhythm.\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/home-content.hbs" } });
});
;define("dummy/templates/docs", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "X+uCvBLB", "block": "{\"symbols\":[\"viewer\",\"nav\"],\"statements\":[[1,[21,\"docs-header\"],false],[0,\"\\n\\n\"],[4,\"docs-viewer\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"nav\"]]],null,{\"statements\":[[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"section\"]],\"Introduction\"],null],false],[0,\"\\n\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Home\",\"docs.index\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Patterns\",\"docs.patterns\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Quickstart\",\"docs.quickstart\"],null],false],[0,\"\\n\\n    \"],[1,[27,\"component\",[[22,2,[\"section\"]],\"Settings\"],null],false],[0,\"\\n\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Colors\",\"docs.settings.colors\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Type\",\"docs.settings.typography\"],null],false],[0,\"\\n\\n    \"],[1,[27,\"component\",[[22,2,[\"section\"]],\"Basics\"],null],false],[0,\"\\n\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Typography\",\"docs.typography.index\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Lists\",\"docs.typography.lists\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Tables\",\"docs.typography.tables\"],null],false],[0,\"\\n\\n    \"],[1,[27,\"component\",[[22,2,[\"section\"]],\"Forms\"],null],false],[0,\"\\n\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Form\",\"docs.forms.index\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Buttons\",\"docs.forms.buttons\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Button Links\",\"docs.forms.button-links\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Button Groups\",\"docs.forms.button-groups\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Controls\",\"docs.forms.controls\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Inputs\",\"docs.forms.inputs\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Date & Time Inputs\",\"docs.forms.date-time-inputs\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Textareas\",\"docs.forms.textareas\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Dropdowns\",\"docs.forms.dropdowns\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Toggle Controls\",\"docs.forms.toggles\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Validation\",\"docs.forms.validation\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Control Rows\",\"docs.forms.rows\"],null],false],[0,\"\\n    \"],[7,\"del\"],[9],[1,[27,\"component\",[[22,2,[\"item\"]],\"Fieldsets\",\"docs.forms.fieldsets\"],null],false],[10],[0,\"\\n\\n    \"],[1,[27,\"component\",[[22,2,[\"section\"]],\"Navigation\"],null],false],[0,\"\\n\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Tabs\",\"docs.navigation.tabs\"],null],false],[0,\"\\n\\n    \"],[1,[27,\"component\",[[22,2,[\"section\"]],\"Lists\"],null],false],[0,\"\\n\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Items\",\"docs.lists.items\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Avatars\",\"docs.lists.avatars\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Subheadings\",\"docs.lists.subheadings\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Notices\",\"docs.lists.notices\"],null],false],[0,\"\\n\\n    \"],[1,[27,\"component\",[[22,2,[\"section\"]],\"Components\"],null],false],[0,\"\\n\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Pagination\",\"docs.components.pagination\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Datalists\",\"docs.components.datalists\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Icons\",\"docs.components.icons\"],null],false],[0,\"\\n    \"],[7,\"del\"],[9],[1,[27,\"component\",[[22,2,[\"item\"]],\"Subheaders\",\"docs.components\"],null],false],[10],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Menus\",\"docs.components.menus\"],null],false],[0,\"\\n    \"],[7,\"del\"],[9],[1,[27,\"component\",[[22,2,[\"item\"]],\"Tooltips\",\"docs.components\"],null],false],[10],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Preamble\",\"docs.components.preamble\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Notice\",\"docs.components.notice\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Pills\",\"docs.components.pills\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Splash\",\"docs.components.splash\"],null],false],[0,\"\\n\\n\\n    \"],[1,[27,\"component\",[[22,2,[\"section\"]],\"Layout\",\"docs.layout.index\"],null],false],[0,\"\\n\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"App\",\"docs.layout.app\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Window\",\"docs.layout.window\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Pane\",\"docs.layout.pane\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Navbar\",\"docs.layout.navbar\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Hero\",\"docs.layout.hero\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Toolbar\",\"docs.layout.toolbar\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,2,[\"item\"]],\"Header\",\"docs.layout.header\"],null],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"component\",[[22,1,[\"main\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"docs-container\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"docs-section\"],[9],[0,\"\\n        \"],[1,[21,\"outlet\"],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs.hbs" } });
});
;define("dummy/templates/docs/api/item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ousuRkDz", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,[\"model\",\"isComponent\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"api/x-component\",null,[[\"component\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"model\",\"isClass\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"api/x-class\",null,[[\"class\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[27,\"api/x-module\",null,[[\"module\"],[[23,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/api/item.hbs" } });
});
;define("dummy/templates/docs/components/avatars", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "a1/0L5n9", "block": "{\"symbols\":[\"demo\",\"demo\"],\"statements\":[[7,\"h1\"],[9],[0,\"Avatars\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Avatars are used to display images of users or resources.\"],[10],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Simple Usage\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Avatars come in different shapes & sizes.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,2,[\"example\"]]],[[\"name\"],[\"avatars\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-avatar\",[\"https://placeimg.com/100/100/people\"],[[\"size\",\"border\",\"round\"],[[23,[\"size\"]],[23,[\"border\"]],[23,[\"round\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,2,[\"snippet\"]],\"avatars.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Properties\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Now explore the various properties available in this component:\"],[10],[0,\"\\n\\n\"],[7,\"table\"],[11,\"class\",\"docs-args-table\"],[9],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"size\"],[7,\"span\"],[11,\"class\",\"req\"],[9],[0,\"*\"],[10],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[27,\"input\",null,[[\"placeholder\",\"value\"],[\"Size\",[23,[\"size\"]]]]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"String\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"colspan\",\"3\"],[9],[0,\"Possible Values: small, medium, large, huge, giant\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"round\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[27,\"docs-toggle\",null,[[\"value\"],[[23,[\"round\"]]]]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"Boolean\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"border\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[27,\"docs-toggle\",null,[[\"value\"],[[23,[\"border\"]]]]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"Boolean\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Styles Usage\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can customise the look of your lists with the style attribute.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\",\"class\"],[\"avatar-styles\",\"bg-dark\"]],{\"statements\":[[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n      \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=0\"],[[\"style\",\"round\"],[\"primary\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-text\",[\"AA\"],[[\"style\",\"round\"],[\"primary\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-icon\",[\"invert_colors\"],[[\"style\",\"round\"],[\"primary\",true]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n      \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=1\"],[[\"style\",\"round\"],[\"accent\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-text\",[\"BB\"],[[\"style\",\"round\"],[\"accent\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-icon\",[\"invert_colors\"],[[\"style\",\"round\"],[\"accent\",true]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n      \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=2\"],[[\"style\",\"round\"],[\"dark\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-text\",[\"CC\"],[[\"style\",\"round\"],[\"dark\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-icon\",[\"invert_colors\"],[[\"style\",\"round\"],[\"dark\",true]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n      \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=3\"],[[\"style\",\"round\"],[\"grey\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-text\",[\"DD\"],[[\"style\",\"round\"],[\"grey\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-icon\",[\"invert_colors\"],[[\"style\",\"round\"],[\"grey\",true]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n      \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=4\"],[[\"style\",\"round\"],[\"mid\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-text\",[\"EE\"],[[\"style\",\"round\"],[\"mid\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-icon\",[\"invert_colors\"],[[\"style\",\"round\"],[\"mid\",true]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n      \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=5\"],[[\"style\",\"round\"],[\"light\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-text\",[\"FF\"],[[\"style\",\"round\"],[\"light\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-icon\",[\"invert_colors\"],[[\"style\",\"round\"],[\"light\",true]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n      \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=6\"],[[\"style\",\"round\"],[\"white\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-text\",[\"GG\"],[[\"style\",\"round\"],[\"white\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-icon\",[\"invert_colors\"],[[\"style\",\"round\"],[\"white\",true]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n      \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=7\"],[[\"style\",\"round\"],[\"success\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-text\",[\"HH\"],[[\"style\",\"round\"],[\"success\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-icon\",[\"invert_colors\"],[[\"style\",\"round\"],[\"success\",true]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n      \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=8\"],[[\"style\",\"round\"],[\"warning\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-text\",[\"II\"],[[\"style\",\"round\"],[\"warning\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-icon\",[\"invert_colors\"],[[\"style\",\"round\"],[\"warning\",true]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n      \"],[1,[27,\"uxs-avatar\",[\"http://api.faceholder.io/faces?id=9\"],[[\"style\",\"round\"],[\"error\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-text\",[\"JJ\"],[[\"style\",\"round\"],[\"error\",true]]],false],[0,\"\\n      \"],[1,[27,\"uxs-avatar-icon\",[\"invert_colors\"],[[\"style\",\"round\"],[\"error\",true]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"avatar-styles.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/components/avatars.hbs" } });
});
;define("dummy/templates/docs/components/datalists", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IbIGJ0mC", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"datalist\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Datalist\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Datalist are used to display record details, think of them as readonly form controls.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"To see a full list of arguments check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-datalist\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"simple-list-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#simple-list-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Simple List Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"docs/uxs-datalist/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"the-datalist-item\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#the-datalist-item\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"The Datalist Item\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"A Datalist consists of items displaying a label and value. If the value is empty an \\\"empty\\\" string can be provided.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"To see a full list of arguments for items check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-datalist-item\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-datalist/item-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"testable-elements\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#testable-elements\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Testable Elements\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This component provides the following test selectors.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-datalist\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-datalist\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-datalist\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-datalist-item\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-datalist-item\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-datalist-item\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-datalist-label\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-datalist-label\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-datalist-label\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-datalist-row\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-datalist-row\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-datalist-row\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-datalist-value\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-datalist-value\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-datalist-value\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-datalist-tip\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-datalist-tip\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-datalist-tip\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h2\"],[11,\"id\",\"styles-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#styles-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Styles Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"You can customise the look of your datalist with the style attribute.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-datalist/all-styles\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/align-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/size-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/style-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/weight-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/components/datalists.hbs" } });
});
;define("dummy/templates/docs/components/icons", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4SkNXte0", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"icons\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Icons\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The icon component is used to render icons from the \"],[7,\"a\"],[11,\"href\",\"https://material.io/icons/\"],[9],[0,\"Material Icons\"],[10],[0,\" font library.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"To see a full list of arguments check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-icon\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"simple-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#simple-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Simple Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Let's look at a basic example of a name control where you require two inputs to sit alongside each other\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-icon/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"action-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#action-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Action Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"You can pass action closures to icons\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-icon/action-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"testable-elements\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#testable-elements\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Testable Elements\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This component provides the following test selectors.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-icon\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-icon\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-icon\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"args-table/align-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/size-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/style-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/weight-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/components/icons.hbs" } });
});
;define("dummy/templates/docs/components/lists", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TM/8G2sw", "block": "{\"symbols\":[\"demo\",\"style\",\"demo\",\"list\",\"item\",\"demo\",\"style\",\"list\",\"item\",\"item\",\"item\",\"demo\",\"list\",\"thing\",\"item\",\"demo\",\"list\",\"thing\",\"item\",\"demo\",\"list\",\"thing\",\"item\"],\"statements\":[[7,\"h2\"],[9],[0,\"Avatars and Actions\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"This is a list that includes some horizontal layout for the avatar and item. We use the aside and body contextual components to split up each items layout.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,20,[\"example\"]]],[[\"name\"],[\"action-list\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,[[\"lines\",\"bordered\"],[3,true]],{\"statements\":[[4,\"each\",[[23,[\"items\"]]],null,{\"statements\":[[4,\"component\",[[22,21,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,23,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,23,[\"avatar\"]],\"https://placeimg.com/100/100/any\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,23,[\"body\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,23,[\"title\"]],[22,22,[\"title\"]]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,23,[\"detail\"]],[22,22,[\"location\"]]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,23,[\"detail\"]],[22,22,[\"email\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,23,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,23,[\"action\"]],\"keyboard_arrow_right\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[23]},null]],\"parameters\":[22]},null]],\"parameters\":[21]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,20,[\"snippet\"]],\"action-list.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[20]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Icon Avatars\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can use icons for the list items avatar.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,16,[\"example\"]]],[[\"name\"],[\"icon-avatar-list\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,[[\"lines\",\"bordered\"],[3,true]],{\"statements\":[[4,\"each\",[[23,[\"items\"]]],null,{\"statements\":[[4,\"component\",[[22,17,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,19,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,19,[\"avatarIcon\"]],\"face\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,19,[\"body\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,19,[\"title\"]],[22,18,[\"title\"]]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,19,[\"detail\"]],[22,18,[\"location\"]]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,19,[\"detail\"]],[22,18,[\"email\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,19,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,19,[\"action\"]],\"keyboard_arrow_right\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[19]},null]],\"parameters\":[18]},null]],\"parameters\":[17]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,16,[\"snippet\"]],\"icon-avatar-list.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[16]},null],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Text Avatars\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can use text for the list items avatar too.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,12,[\"example\"]]],[[\"name\"],[\"icon-avatar-list\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,[[\"lines\",\"bordered\"],[3,true]],{\"statements\":[[4,\"each\",[[23,[\"items\"]]],null,{\"statements\":[[4,\"component\",[[22,13,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,15,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,15,[\"avatarText\"]],[22,14,[\"count\"]]],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,15,[\"body\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,15,[\"title\"]],[22,14,[\"title\"]]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,15,[\"detail\"]],[22,14,[\"location\"]]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,15,[\"detail\"]],[22,14,[\"email\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,15,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,15,[\"action\"]],\"keyboard_arrow_right\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[15]},null]],\"parameters\":[14]},null]],\"parameters\":[13]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,12,[\"snippet\"]],\"icon-avatar-list.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[12]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Styles Usage\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can customise the look of your lists with the style attribute.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,6,[\"example\"]]],[[\"name\",\"class\"],[\"lists-styles\",\"bg-dark\"]],{\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,[\"styles\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,[[\"style\",\"lines\",\"bordered\"],[[22,7,[]],3,true]],{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,8,[\"subheading\"]],[27,\"capitalize\",[[27,\"concat\",[[22,7,[]],\" Subheading\"],null]],null]],null],false],[0,\"\\n\"],[4,\"component\",[[22,8,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,11,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,11,[\"avatar\"]],\"http://api.faceholder.io/faces?id=0\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,11,[\"body\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,11,[\"title\"]],[27,\"capitalize\",[[27,\"concat\",[[22,7,[]],\" List\"],null]],null]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,11,[\"detail\"]],\"foo\"],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,11,[\"detail\"]],\"bar\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,11,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,11,[\"action\"]],\"invert_colors\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[11]},null],[4,\"component\",[[22,8,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,10,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,10,[\"avatarText\"]],\"AA\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,10,[\"body\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,10,[\"title\"]],[27,\"capitalize\",[[27,\"concat\",[[22,7,[]],\" List\"],null]],null]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,10,[\"detail\"]],\"foo\"],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,10,[\"detail\"]],\"bar\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,10,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,10,[\"action\"]],\"invert_colors\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[10]},null],[4,\"component\",[[22,8,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,9,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,9,[\"avatarIcon\"]],\"beach_access\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,9,[\"body\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,9,[\"title\"]],[27,\"capitalize\",[[27,\"concat\",[[22,7,[]],\" List\"],null]],null]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,9,[\"detail\"]],\"foo\"],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,9,[\"detail\"]],\"bar\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,9,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,9,[\"action\"]],\"invert_colors\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[9]},null]],\"parameters\":[8]},null],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,6,[\"snippet\"]],\"lists-styles.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[6]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"List Notices\"],[10],[0,\"\\n\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,3,[\"example\"]]],[[\"name\"],[\"list-notices\"]],{\"statements\":[[0,\"\\n\\n\"],[4,\"uxs-list\",null,[[\"lines\",\"bordered\"],[3,true]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"notice\"]],\"Displaying Filtered Results\"],[[\"icon\",\"actionText\",\"onClick\"],[\"filter_list\",\"Clear\",[27,\"action\",[[22,0,[]],\"noticeAction\"],null]]]],false],[0,\"\\n\"],[4,\"component\",[[22,4,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,5,[\"aside\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,5,[\"avatar\"]],\"https://placeimg.com/100/100/any\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,5,[\"body\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,5,[\"title\"]],\"Filtered Item\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,5,[\"detail\"]],\"Notice how the list avatar\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,5,[\"detail\"]],\"matches the notice icon\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,5,[\"aside\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,5,[\"action\"]],\"keyboard_arrow_right\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[5]},null]],\"parameters\":[4]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,3,[\"snippet\"]],\"list-notices.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[3]},null],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"list-notice-styles\"]],{\"statements\":[[4,\"each\",[[23,[\"styles\"]]],null,{\"statements\":[[0,\"\\n      \"],[1,[27,\"uxs-list-notice\",[\"Displaying Filtered Results\"],[[\"icon\",\"actionText\",\"onClick\",\"style\"],[\"filter_list\",\"Clear\",[27,\"action\",[[22,0,[]],\"noticeAction\"],null],[22,2,[]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Contextual Components\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"The \"],[7,\"b\"],[9],[0,\"List Item\"],[10],[0,\" component has the following child components:\"],[10],[0,\"\\n\\n\"],[7,\"table\"],[11,\"class\",\"docs-args-table\"],[9],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"aside\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of uxs-div, used to seperate horizontal layout blocks\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"body\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of uxs-div, used to seperate horizontal layout blocks, unlike aside, this component will grow to fill the available width\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"title\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of \"],[4,\"link-to\",[\"docs.typography.index\"],null,{\"statements\":[[0,\"uxs-subheading\"]],\"parameters\":[]},null],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"content\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of \"],[4,\"link-to\",[\"docs.typography.index\"],null,{\"statements\":[[0,\"uxs-content\"]],\"parameters\":[]},null],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"detail\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of \"],[4,\"link-to\",[\"docs.typography.index\"],null,{\"statements\":[[0,\"uxs-detail\"]],\"parameters\":[]},null],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"avatar\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of \"],[4,\"link-to\",[\"docs.components.avatars\"],null,{\"statements\":[[0,\"uxs-avatar\"]],\"parameters\":[]},null],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"action\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of \"],[4,\"link-to\",[\"docs.components.icons\"],null,{\"statements\":[[0,\"uxs-icon\"]],\"parameters\":[]},null],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/components/lists.hbs" } });
});
;define("dummy/templates/docs/components/menus", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xZHXC5iL", "block": "{\"symbols\":[\"demo\",\"style\",\"menu\",\"style\",\"menu\",\"demo\",\"dropdown\",\"menu\",\"demo\",\"dropdown\",\"menu\",\"demo\",\"menu\",\"menu\",\"demo\",\"menu\",\"menu\",\"demo\",\"menu\",\"menu\",\"demo\",\"menu\",\"menu\",\"demo\",\"menu\",\"menu\"],\"statements\":[[7,\"h1\"],[9],[0,\"Menus\"],[10],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Simple Usage\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Two simple examples. The menu widths adjusts to accommodate the content in keyline increments.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,24,[\"example\"]]],[[\"name\"],[\"menu\"]],{\"statements\":[[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"mr\"],[9],[0,\"\\n\"],[4,\"uxs-menu\",null,null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,26,[\"item\"]],\"Maps\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,26,[\"item\"]],\"Books\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,26,[\"item\"]],\"Flights\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,26,[\"item\"]],\"Apps\"],null],false],[0,\"\\n\"]],\"parameters\":[26]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"mr\"],[9],[0,\"\\n\"],[4,\"uxs-menu\",null,null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,25,[\"item\"]],\"Refresh\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,25,[\"item\"]],\"Help & Feedback\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,25,[\"item\"]],\"Settings\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,25,[\"item\"]],\"Sign out\"],null],false],[0,\"\\n\"]],\"parameters\":[25]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,24,[\"snippet\"]],\"menu.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[24]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Disabled Items\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"The disabled property disables a Menu Item. The Divider can be used to separate MenuItems.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,21,[\"example\"]]],[[\"name\"],[\"menu-disabled\"]],{\"statements\":[[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"mr\"],[9],[0,\"\\n\"],[4,\"uxs-menu\",null,null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,23,[\"item\"]],\"Back\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,23,[\"item\"]],\"Forward\"],[[\"disabled\"],[true]]],false],[0,\"\\n          \"],[1,[22,23,[\"divider\"]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,23,[\"item\"]],\"Recently Closed\"],[[\"disabled\"],[true]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,23,[\"item\"]],\"Google\"],[[\"disabled\"],[true]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,23,[\"item\"]],\"YouTube\"],null],false],[0,\"\\n\"]],\"parameters\":[23]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"mr\"],[9],[0,\"\\n\"],[4,\"uxs-menu\",null,null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,22,[\"item\"]],\"Undo\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,22,[\"item\"]],\"Redo\"],[[\"disabled\"],[true]]],false],[0,\"\\n          \"],[1,[22,22,[\"divider\"]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,22,[\"item\"]],\"Cut\"],[[\"disabled\"],[true]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,22,[\"item\"]],\"Copy\"],[[\"disabled\"],[true]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,22,[\"item\"]],\"Paste\"],null],false],[0,\"\\n\"]],\"parameters\":[22]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,21,[\"snippet\"]],\"menu-disabled.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[21]},null],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Icons\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Menu items supports icons through the leftIcon and rightIcon attributes.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,18,[\"example\"]]],[[\"name\"],[\"menu-icons\"]],{\"statements\":[[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"mr\"],[9],[0,\"\\n\"],[4,\"uxs-menu\",null,[[\"hasLeftIcon\"],[true]],{\"statements\":[[0,\"\\n          \"],[1,[27,\"component\",[[22,20,[\"item\"]],\"Preview\"],[[\"leftIcon\"],[\"visibility\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,20,[\"item\"]],\"Share\"],[[\"leftIcon\"],[\"person_add\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,20,[\"item\"]],\"Get Links\"],[[\"disabled\",\"leftIcon\"],[true,\"link\"]]],false],[0,\"\\n          \"],[1,[22,20,[\"divider\"]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,20,[\"item\"]],\"Make Copy\"],[[\"leftIcon\"],[\"content_copy\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,20,[\"item\"]],\"Download\"],[[\"leftIcon\"],[\"file_download\"]]],false],[0,\"\\n          \"],[1,[22,20,[\"divider\"]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,20,[\"item\"]],\"YouTube\"],[[\"leftIcon\"],[\"delete\"]]],false],[0,\"\\n\"]],\"parameters\":[20]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"mr\"],[9],[0,\"\\n\"],[4,\"uxs-menu\",null,[[\"hasRightIcon\"],[true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,19,[\"item\"]],\"Clear Config\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,19,[\"item\"]],\"New Config\"],[[\"disabled\",\"rightIcon\"],[true,\"person_add\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,19,[\"item\"]],\"Project\"],[[\"rightIcon\"],[\"settings\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,19,[\"item\"]],\"Workspace\"],[[\"rightIcon\"],[\"settings\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,19,[\"item\"]],\"Bold\"],[[\"rightIcon\"],[\"format_bold\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,19,[\"item\"]],\"Italic\"],[[\"rightIcon\"],[\"format_italic\"]]],false],[0,\"\\n\"]],\"parameters\":[19]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,18,[\"snippet\"]],\"menu-icons.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[18]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Secondary Text\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Menu Items support a secondaryText attribute.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,15,[\"example\"]]],[[\"name\"],[\"menu-secondary-text\"]],{\"statements\":[[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"mr\"],[9],[0,\"\\n\"],[4,\"uxs-menu\",null,[[\"hasSecondaryText\"],[true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,17,[\"item\"]],\"Bold\"],[[\"rightIcon\"],[\"format_italic\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,17,[\"item\"]],\"Italic\"],[[\"secondaryText\"],[\"⌘I\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,17,[\"item\"]],\"Underline\"],[[\"secondaryText\"],[\"⌘U\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,17,[\"item\"]],\"Strikethrough\"],[[\"secondaryText\"],[\"Alt+Shift+5\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,17,[\"item\"]],\"Superscript\"],[[\"secondaryText\"],[\"⌘.\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,17,[\"item\"]],\"Subscript\"],[[\"secondaryText\"],[\"⌘,\"]]],false],[0,\"\\n          \"],[1,[22,17,[\"divider\"]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,17,[\"item\"]],\"Clear Formatting\"],[[\"secondaryText\"],[\"⌘/\"]]],false],[0,\"\\n\"]],\"parameters\":[17]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"mr\"],[9],[0,\"\\n\"],[4,\"uxs-menu\",null,[[\"hasSecondaryText\"],[true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,16,[\"item\"]],\"Open\"],[[\"secondaryText\"],[\"Cmd + O\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,16,[\"item\"]],\"Paste in place\"],[[\"secondaryText\"],[\"Shift + V\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,16,[\"item\"]],\"Research\"],[[\"secondaryText\"],[\"Opt + Shift + Cmd + I\"]]],false],[0,\"\\n\"]],\"parameters\":[16]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,15,[\"snippet\"]],\"menu-secondary-text.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[15]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Subheadings\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Menu Items can include subheadings to split up items.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,12,[\"example\"]]],[[\"name\"],[\"menu-subheadings\"]],{\"statements\":[[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"f fr\"],[9],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"mr\"],[9],[0,\"\\n\"],[4,\"uxs-menu\",null,[[\"hasLeftIcon\"],[true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,14,[\"subheading\"]],\"Sort by\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,14,[\"item\"]],\"Age\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,14,[\"item\"]],\"Surname\"],[[\"leftIcon\"],[\"arrow_upward\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,14,[\"item\"]],\"Location\"],null],false],[0,\"\\n\"]],\"parameters\":[14]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"uxs-menu\",null,[[\"hasLeftIcon\"],[true]],{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,13,[\"subheading\"]],\"Filter by\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,13,[\"item\"]],\"Age\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,13,[\"item\"]],\"Surname\"],[[\"leftIcon\"],[\"done\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,13,[\"item\"]],\"Location\"],null],false],[0,\"\\n\"]],\"parameters\":[13]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,12,[\"snippet\"]],\"menu-subheadings.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[12]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Dropdown Menu\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can use the basic dropdown component to display menus in your app.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,9,[\"example\"]]],[[\"name\"],[\"button-menus\"]],{\"statements\":[[0,\"\\n\"],[4,\"basic-dropdown\",null,null,{\"statements\":[[4,\"component\",[[22,10,[\"trigger\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"uxs-button\",[\"Click Me\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,10,[\"content\"]]],[[\"class\"],[\"uxs-ns\"]],{\"statements\":[[4,\"uxs-menu\",null,null,{\"statements\":[[0,\"          \"],[4,\"component\",[[22,11,[\"item\"]]],null,{\"statements\":[[0,\"Normal nav item\"]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"component\",[[22,11,[\"item\"]]],null,{\"statements\":[[0,\"And another\"]],\"parameters\":[]},null],[0,\"\\n          \"],[1,[22,11,[\"separator\"]],false],[0,\"\\n          \"],[4,\"component\",[[22,11,[\"link\"]],\"docs.index\"],null,{\"statements\":[[0,\"This one is a link\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[11]},null]],\"parameters\":[]},null]],\"parameters\":[10]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,9,[\"snippet\"]],\"button-menus.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[9]},null],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Icon Dropdown Menu\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"This is a menu with an icon trigger.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,6,[\"example\"]]],[[\"name\"],[\"button-menus\"]],{\"statements\":[[0,\"\\n\"],[4,\"basic-dropdown\",null,null,{\"statements\":[[4,\"component\",[[22,7,[\"trigger\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"uxs-icon\",[\"filter_list\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,7,[\"content\"]]],[[\"class\"],[\"uxs-ns\"]],{\"statements\":[[4,\"uxs-menu\",null,null,{\"statements\":[[0,\"          \"],[4,\"component\",[[22,8,[\"item\"]]],null,{\"statements\":[[0,\"Normal nav item\"]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"component\",[[22,8,[\"item\"]]],null,{\"statements\":[[0,\"And another\"]],\"parameters\":[]},null],[0,\"\\n          \"],[1,[22,8,[\"separator\"]],false],[0,\"\\n          \"],[4,\"component\",[[22,8,[\"link\"]],\"docs.index\"],null,{\"statements\":[[0,\"This one is a link\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[8]},null]],\"parameters\":[]},null]],\"parameters\":[7]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,6,[\"snippet\"]],\"button-menus.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[6]},null],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Styles Usage\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can customise the look of your menu with the style attribute.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,[[\"class\"],[\"bg-dark\"]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"menu-styles\"]],{\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,[\"styles\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"uxs-menu\",null,[[\"style\",\"class\",\"horizontal\"],[[22,4,[]],\"mb\",true]],{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,5,[\"item\"]],[27,\"capitalize\",[[27,\"concat\",[[22,4,[]],\" Menu\"],null]],null]],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,5,[\"item\"]],\"Disabled Item\"],[[\"disabled\"],[true]]],false],[0,\"\\n        \"],[1,[22,5,[\"divider\"]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,5,[\"link\"]],\"Docs\",\"docs\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,5,[\"link\"]],\"App\",\"app\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"\\n\"],[4,\"each\",[[23,[\"styles\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"uxs-menu\",null,[[\"class\",\"style\",\"horizontal\"],[\"mb\",[22,2,[]],false]],{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,3,[\"item\"]],[27,\"capitalize\",[[27,\"concat\",[[22,2,[]],\" Menu\"],null]],null]],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,3,[\"item\"]],\"Disabled Item\"],[[\"disabled\"],[true]]],false],[0,\"\\n        \"],[1,[22,3,[\"divider\"]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,3,[\"link\"]],\"Docs\",\"docs\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,3,[\"link\"]],\"App\",\"app\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"menu-styles.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/components/menus.hbs" } });
});
;define("dummy/templates/docs/components/notice", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "o0CaXnvS", "block": "{\"symbols\":[\"demo\",\"notice\",\"notice\",\"demo\",\"notice\",\"notice\",\"notice\",\"notice\",\"demo\"],\"statements\":[[7,\"h1\"],[9],[0,\"Notice\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"This component can be used to display notices to the use in a variaty of styles...\"],[10],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Simple Usage\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Let's look at a basic example of a notice.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,9,[\"example\"]]],[[\"name\"],[\"notice\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"uxs-notice\",[[23,[\"text\"]]],[[\"style\",\"truncated\"],[[23,[\"style\"]],[23,[\"truncated\"]]]]],false],[0,\"\\n    \"],[1,[27,\"uxs-notice\",[\"This is a primary notice\"],[[\"style\",\"truncated\"],[\"primary\",[23,[\"truncated\"]]]]],false],[0,\"\\n    \"],[1,[27,\"uxs-notice\",[\"This is a error notice\"],[[\"style\",\"truncated\"],[\"error\",[23,[\"truncated\"]]]]],false],[0,\"\\n    \"],[1,[27,\"uxs-notice\",[\"This is a warning notice\"],[[\"style\",\"truncated\"],[\"warning\",[23,[\"truncated\"]]]]],false],[0,\"\\n    \"],[1,[27,\"uxs-notice\",[\"This is a accent notice\"],[[\"style\",\"truncated\"],[\"accent\",[23,[\"truncated\"]]]]],false],[0,\"\\n    \"],[1,[27,\"uxs-notice\",[\"This is a very very very long notice and the text will be truncated if it exceeds the sixty character length\"],[[\"style\",\"truncated\"],[[23,[\"style\"]],[23,[\"truncated\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,9,[\"snippet\"]],\"notice.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[9]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Properties\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Now explore the various properties available in this component:\"],[10],[0,\"\\n\\n\"],[7,\"table\"],[11,\"class\",\"docs-args-table\"],[9],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"text\"],[7,\"span\"],[11,\"class\",\"req\"],[9],[0,\"*\"],[10],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[27,\"input\",null,[[\"placeholder\",\"value\"],[\"Pill Text\",[23,[\"text\"]]]]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"String\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"style\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[27,\"input\",null,[[\"placeholder\",\"value\"],[\"Style\",[23,[\"style\"]]]]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"String\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"truncated\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[27,\"docs-toggle\",null,[[\"value\"],[[23,[\"truncated\"]]]]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"Boolean\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Usage with Icons\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can also intergrate icons in a notice.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,4,[\"example\"]]],[[\"name\"],[\"notice\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-notice\",null,[[\"style\",\"truncated\"],[\"primary\",[23,[\"truncated\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,8,[\"icon\"]],\"info\"],[[\"prefix\"],[true]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,8,[\"text\"]],\"This notice has a prefix icon\"],null],false],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"\\n\"],[4,\"uxs-notice\",null,[[\"style\",\"truncated\"],[\"accent\",[23,[\"truncated\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"text\"]],\"This notice has a suffix icon\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"icon\"]],\"cancel\"],[[\"suffix\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"\\n\"],[4,\"uxs-notice\",null,[[\"style\",\"truncated\"],[\"warning\",[23,[\"truncated\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"icon\"]],\"warning\"],[[\"prefix\"],[true]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"text\"]],\"This notice has two icons\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"icon\"]],\"cancel\"],[[\"suffix\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"\\n\"],[4,\"uxs-notice\",null,[[\"style\",\"truncated\"],[\"error\",[23,[\"truncated\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"icon\"]],\"warning\"],[[\"prefix\"],[true]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"text\"]],\"This notice has an icon but also a long passage of text that may or may not be truncated.\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"icon\"]],\"cancel\"],[[\"suffix\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,4,[\"snippet\"]],\"notice.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[4]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Usage with Links\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Links & buttons can be included in a notice.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"notice\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-notice\",null,[[\"style\",\"truncated\"],[\"primary\",[23,[\"truncated\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"link\"]],\"home\",\"docs\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"text\"]],\"This notice has a prefix link\"],null],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"\\n\"],[4,\"uxs-notice\",null,[[\"style\",\"truncated\"],[\"accent\",[23,[\"truncated\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,2,[\"text\"]],\"This notice has a suffix button\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,2,[\"button\"]],\"close\"],null],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"notice.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/components/notice.hbs" } });
});
;define("dummy/templates/docs/components/pagination", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OaoBhdLR", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"pagination\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Pagination\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The pagination component provides control for a paginated json api response.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"To see a full list of arguments check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-pagination-controls\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"basic-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#basic-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Basic Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This example calls a controller action with the current page size and results.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-pagination/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"testable-elements\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#testable-elements\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Testable Elements\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This component provides the following test selectors.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-pagination\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-pagination\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-pagination\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-pagination-label\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-pagination-label\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-pagination-label\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-pagination-result-limit\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-pagination-result-limit\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-pagination-result-limit\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-pagination-prev\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-pagination-prev\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-pagination-prev\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-pagination-next\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-pagination-next\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-pagination-next\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"args-table/style-options\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"all-the-styles\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#all-the-styles\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"All the styles\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Behold.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-pagination/all-styles\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/components/pagination.hbs" } });
});
;define("dummy/templates/docs/components/pills", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MyR7F2To", "block": "{\"symbols\":[\"demo\",\"demo\",\"demo\"],\"statements\":[[7,\"h1\"],[9],[0,\"Pills\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Pills are comenly used to display tags or inline statuses. They are usually colored to reflect their content.\"],[10],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Simple Usage\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Let's look at a basic example of a pill.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,3,[\"example\"]]],[[\"name\",\"class\"],[\"pill\",\"uxs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-div\",null,[[\"class\"],[\"clear\"]],{\"statements\":[[0,\"      \"],[1,[27,\"uxs-pill\",[[23,[\"text\"]]],[[\"style\",\"size\",\"rounded\"],[[23,[\"style\"]],[23,[\"size\"]],[23,[\"rounded\"]]]]],false],[0,\"\\n      \"],[1,[27,\"uxs-pill\",[\"primary\"],[[\"style\",\"size\",\"rounded\"],[\"primary\",[23,[\"size\"]],[23,[\"rounded\"]]]]],false],[0,\"\\n      \"],[1,[27,\"uxs-pill\",[\"accent\"],[[\"style\",\"size\",\"rounded\"],[\"accent\",[23,[\"size\"]],[23,[\"rounded\"]]]]],false],[0,\"\\n      \"],[1,[27,\"uxs-pill\",[\"warning\"],[[\"style\",\"size\",\"rounded\"],[\"warning\",[23,[\"size\"]],[23,[\"rounded\"]]]]],false],[0,\"\\n      \"],[1,[27,\"uxs-pill\",[\"error\"],[[\"style\",\"size\",\"rounded\"],[\"error\",[23,[\"size\"]],[23,[\"rounded\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,3,[\"snippet\"]],\"pill.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[3]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Properties\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Now explore the various properties available in this component:\"],[10],[0,\"\\n\\n\"],[7,\"table\"],[11,\"class\",\"docs-args-table\"],[9],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"text\"],[7,\"span\"],[11,\"class\",\"req\"],[9],[0,\"*\"],[10],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[27,\"input\",null,[[\"placeholder\",\"value\"],[\"Pill Text\",[23,[\"text\"]]]]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"String\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"style\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[27,\"input\",null,[[\"placeholder\",\"value\"],[\"Style\",[23,[\"style\"]]]]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"String\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"size\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[27,\"input\",null,[[\"placeholder\",\"value\"],[\"Size\",[23,[\"size\"]]]]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"String\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"rounded\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[27,\"docs-toggle\",null,[[\"value\"],[[23,[\"rounded\"]]]]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"Boolean\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[7,\"h2\"],[9],[0,\"Pill Sizes\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Pills are available in a variaty of sizes.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,2,[\"example\"]]],[[\"name\",\"class\"],[\"icon-sizes\",\"bg-light\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-text\",null,[[\"size\",\"style\"],[\"tiny\",[23,[\"style\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"uxs-pill\",[\"primary\"],[[\"style\",\"size\"],[\"primary\",\"tiny\"]]],false],[0,\"\\n      Tiny\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"uxs-text\",null,[[\"size\",\"style\"],[\"small\",[23,[\"style\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"uxs-pill\",[\"accent\"],[[\"style\",\"size\"],[\"accent\",\"small\"]]],false],[0,\"\\n      Small\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"uxs-text\",null,[[\"size\",\"style\"],[\"medium\",[23,[\"style\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"uxs-pill\",[\"warning\"],[[\"style\",\"size\"],[\"warning\",\"medium\"]]],false],[0,\"\\n       Medium\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"uxs-text\",null,[[\"size\",\"style\"],[\"large\",[23,[\"style\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"uxs-pill\",[\"error\"],[[\"style\",\"size\"],[\"error\",\"large\"]]],false],[0,\"\\n      Large\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"uxs-text\",null,[[\"size\",\"style\"],[\"huge\",[23,[\"style\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"uxs-pill\",[\"dark\"],[[\"style\",\"size\"],[\"dark\",\"huge\"]]],false],[0,\"\\n      Huge\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"uxs-text\",null,[[\"size\",\"style\"],[\"giant\",[23,[\"style\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"uxs-pill\",[\"grey\"],[[\"style\",\"size\"],[\"grey\",\"giant\"]]],false],[0,\"\\n      Giant\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,2,[\"snippet\"]],\"icons.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Pills With Icons\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Add icons to your pills.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\",\"class\"],[\"icon-pills\",\"uxs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-div\",null,[[\"class\"],[\"clear\"]],{\"statements\":[[0,\"\\n      \"],[1,[27,\"uxs-pill\",[\"primary\"],[[\"style\",\"size\",\"rounded\",\"prefixIcon\"],[\"primary\",[23,[\"size\"]],[23,[\"rounded\"]],\"check_circle\"]]],false],[0,\"\\n\\n      \"],[1,[27,\"uxs-pill\",[\"accent\"],[[\"style\",\"size\",\"rounded\",\"suffixIcon\"],[\"accent\",[23,[\"size\"]],[23,[\"rounded\"]],\"account_circle\"]]],false],[0,\"\\n      \"],[1,[27,\"uxs-pill\",[\"warning\"],[[\"style\",\"size\",\"rounded\",\"prefixIcon\",\"suffixIcon\"],[\"warning\",[23,[\"size\"]],[23,[\"rounded\"]],\"add_circle\",\"remove_circle\"]]],false],[0,\"\\n      \"],[1,[27,\"uxs-pill\",[\"error\"],[[\"style\",\"size\",\"rounded\"],[\"error\",[23,[\"size\"]],[23,[\"rounded\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"icon-pills.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/components/pills.hbs" } });
});
;define("dummy/templates/docs/components/preamble", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UNwRh/F4", "block": "{\"symbols\":[\"demo\",\"pre\",\"demo\",\"pre\",\"pre\",\"pre\",\"pre\",\"pre\",\"pre\",\"pre\"],\"statements\":[[7,\"h1\"],[9],[0,\"Preamble\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"This component can be used to display some key info to a user before the main content is displayed.\"],[10],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Simple Usage\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Let's look at a basic example with an icon and text message.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,3,[\"example\"]]],[[\"name\"],[\"preamble\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-preamble\",null,[[\"style\",\"class\"],[[23,[\"style\"]],\"mb\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,10,[\"icon\"]],\"date_range\"],[[\"prefix\"],[true]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,10,[\"content\"]],\"This is a default preamble. Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent augue parturient aptent rhoncus parturient a aptent.\"],null],false],[0,\"\\n\"]],\"parameters\":[10]},null],[0,\"\\n\"],[4,\"uxs-preamble\",null,[[\"style\",\"class\"],[\"primary\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,9,[\"icon\"]],\"date_range\"],[[\"prefix\"],[true]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,9,[\"content\"]],\"This is a primary preamble. Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent augue parturient aptent rhoncus parturient a aptent.\"],null],false],[0,\"\\n\"]],\"parameters\":[9]},null],[0,\"\\n\"],[4,\"uxs-preamble\",null,[[\"style\",\"class\"],[\"accent\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,8,[\"icon\"]],\"date_range\"],[[\"prefix\"],[true]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,8,[\"content\"]],\"This is a accent preamble. Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent augue parturient aptent rhoncus parturient a aptent.\"],null],false],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"\\n\"],[4,\"uxs-preamble\",null,[[\"style\",\"class\"],[\"warning\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"icon\"]],\"date_range\"],[[\"prefix\"],[true]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"content\"]],\"This is a warning preamble. Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent augue parturient aptent rhoncus parturient a aptent.\"],null],false],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"\\n\"],[4,\"uxs-preamble\",null,[[\"style\",\"class\"],[\"error\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"icon\"]],\"date_range\"],[[\"prefix\"],[true]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"content\"]],\"This is a error preamble. Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent augue parturient aptent rhoncus parturient a aptent.\"],null],false],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"\\n\"],[4,\"uxs-preamble\",null,[[\"style\",\"class\"],[\"white\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"icon\"]],\"date_range\"],[[\"prefix\"],[true]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"content\"]],\"This is a white preamble. Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent augue parturient aptent rhoncus parturient a aptent.\"],null],false],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"\\n\"],[4,\"uxs-preamble\",null,[[\"style\",\"class\"],[\"dark\",\"mb\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"icon\"]],\"date_range\"],[[\"prefix\"],[true]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"content\"]],\"This is a dark preamble. Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent augue parturient aptent rhoncus parturient a aptent.\"],null],false],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,3,[\"snippet\"]],\"preamble.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[3]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Custom Usage\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Let's look at a basic example with an icon and text message.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"custom-preamble\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-preamble\",null,[[\"style\",\"class\"],[[23,[\"style\"]],\"mb\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,2,[\"icon\"]],\"date_range\"],[[\"prefix\"],[true]]],false],[0,\"\\n\"],[4,\"component\",[[22,2,[\"body\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,2,[\"content\"]],\"This is a custom preamble with buttons and detail text. Augue parturient aptent rhoncus parturient a aptent.\"],null],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,2,[\"content\"]],\"Cursus venenatis enim adipiscing primis laoreet eros curae odio primis nisl a a ad euismod id adipiscing a torquent\"],null],false],[0,\"\\n        \"],[1,[27,\"uxs-button\",[\"Hit Me\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"custom-preamble.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/components/preamble.hbs" } });
});
;define("dummy/templates/docs/components/splash", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "R596LBOQ", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"splash\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Splash\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Splash messages are a nice way to inform the user of a unique event in a friendly manner. e.g. Reaching Inbox Zero! The\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Let's look at a basic example. You can play around with some of the arguments in this demo. To see a full list check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-tabs\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-splash/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"explanation-\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#explanation-\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Explanation,\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[7,\"em\"],[9],[0,\"uxs-splash\"],[10],[0,\" is the wrapping component\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"The contextual component \"],[7,\"em\"],[9],[0,\"splash.icon\"],[10],[0,\" is an alias to \"],[7,\"em\"],[9],[0,\"uxs-icon\"],[10],[0,\" component to display an icon.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"The contextual component \"],[7,\"em\"],[9],[0,\"splash.title\"],[10],[0,\" is an alias to \"],[7,\"em\"],[9],[0,\"uxs-subheading\"],[10],[0,\" component for the splash title.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"The contextual component \"],[7,\"em\"],[9],[0,\"splash.text\"],[10],[0,\" is an alias to \"],[7,\"em\"],[9],[0,\"uxs-content\"],[10],[0,\" component for the splash text.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/style-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/align-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/components/splash.hbs" } });
});
;define("dummy/templates/docs/forms/button-groups", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HEjlZ9pa", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"button-groups\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Button Groups\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The button group component is used to render a group of buttons and control their layout.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Let's look at a basic example. You can play around with some of the arguments in this demo. To see a full list check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-button-group\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-button-group/basic-demo\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/size-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/style-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/forms/button-groups.hbs" } });
});
;define("dummy/templates/docs/forms/button-links", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1Klh11Kx", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"button-links\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Button Links\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The button-link component is like the button component but extends the Ember \"],[7,\"a\"],[11,\"href\",\"https://guides.emberjs.com/release/templates/links/\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"link-to component\"],[10],[0,\" so you can link to other routes\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Let's look at a basic example. This button links to the quickstart route. You can play around with some of the arguments in this demo. To see a full list check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-button-link\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-button-link/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"inline-buttons\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#inline-buttons\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Inline Buttons\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"By default link-buttons will be displayed as block items. To set them as inline pass true to the \"],[7,\"em\"],[9],[0,\"inline\"],[10],[0,\" argument.\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"docs-flex docs-items-center docs-bg-blue docs-text-white docs-text-sm docs-font-bold docs-px-4 docs-py-3\"],[11,\"role\",\"alert\"],[9],[0,\"\\n  \"],[7,\"svg\"],[11,\"class\",\"docs-fill-current docs-w-4 docs-h-4 docs-mr-2\"],[11,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[11,\"viewBox\",\"0 0 20 20\"],[9],[7,\"path\"],[11,\"d\",\"M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z\"],[9],[10],[10],[0,\"\\n  \"],[7,\"span\"],[9],[0,\"Because button links extend from the link-to component their active (selected) state will be detected automatically.\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-button-link/inline-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"stock-style-examples\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#stock-style-examples\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Stock Style Examples\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Here's an example of the button in all it's stock styles:\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-button-link/all-styles\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"stock-size-examples\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#stock-size-examples\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Stock Size Examples\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Here's an example of the button in all it's stock sizes:\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-button-link/all-sizes\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/forms/button-links.hbs" } });
});
;define("dummy/templates/docs/forms/buttons", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pXA/2Hzd", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"buttons\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Buttons\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The button component is used for clickable actions. This could be to submit a form or to trigger an ember action.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Let's look at a basic example. You can play around with some of the arguments in this demo. To see a full list check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-button\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-button/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"actions\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#actions\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Actions\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The button component fires an action on tap/click. Actions are passed as \"],[7,\"a\"],[11,\"href\",\"https://dockyard.com/blog/2015/10/29/ember-best-practice-stop-bubbling-and-use-closure-actions\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"closure actions\"],[10],[0,\".\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"The action will not be fired if the component is disabled or in a loading state.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-button/action-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"inline-buttons\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#inline-buttons\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Inline Buttons\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"By default buttons will be displayed as block items. To set them as inline pass true to the \"],[7,\"em\"],[9],[0,\"inline\"],[10],[0,\" argument.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-button/inline-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"stock-style-examples\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#stock-style-examples\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Stock Style Examples\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Here's an example of the button in all it's stock styles:\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-button/all-styles\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"stock-size-examples\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#stock-size-examples\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Stock Size Examples\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Here's an example of the button in all it's stock sizes:\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-button/all-sizes\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/size-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/style-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/forms/buttons.hbs" } });
});
;define("dummy/templates/docs/forms/controls", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "25nfUUsG", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"form-controls\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Form Controls\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The form control component is used as a container for a form input, label, validation & other common form UI.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"common-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#common-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Common Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Let's look at a common example where we define the controls child elements through properties:\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-form-control/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"custom-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#custom-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Custom Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Although the above should cover 90% of your common use cases, we can customise the control with contextual components:\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-form-control/contextual-demo\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/align-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/form-type-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/size-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/style-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/weight-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/forms/controls.hbs" } });
});
;define("dummy/templates/docs/forms/date-time-inputs", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iiJlNcRy", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"form-date-time-inputs\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Form Date & Time Inputs\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The form dat & time input component extends from the \"],[7,\"em\"],[9],[0,\"FlatPickr\"],[10],[0,\" addon component. As such you can pass any of it's attributes \"],[7,\"a\"],[11,\"href\",\"http://ember-flatpickr.shipshape.io/\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"attributes\"],[10],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"basic-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#basic-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Basic Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Let's look at a basic example with a change action called when changing the value.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"The value of a datetime input should be one of the following:\"],[10],[0,\"\\n\"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"A single dateObject\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"A single string containing a date formatted accordingly to dateFormat\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"An array of dateObject\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"An array of string containing dates formatted accordingly to dateFormat\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"The following actions; onChange (required), onClose, onOpen, will receive 3 parameters:\"],[10],[0,\"\\n\"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"An array of dateObjects\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"A string formatted accordingly to dateFormat representing the last selected date\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"The Flatpickr instance\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-form-date/basic-demo\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Styles Usage\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"You can customise the look of your datetime input with the style attribute.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-form-date/all-styles\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/align-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/form-type-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/size-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/style-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/weight-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/forms/date-time-inputs.hbs" } });
});
;define("dummy/templates/docs/forms/dropdowns", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9pY57s+Z", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"dropdown-controls\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Dropdown Controls\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The form drowdown component extends the \"],[7,\"a\"],[11,\"href\",\"https://ember-power-select.com/docs\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember power select\"],[10],[0,\" component. As such you can pass any of the power select \"],[7,\"a\"],[11,\"href\",\"https://ember-power-select.com/docs/api-reference\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"attributes\"],[10],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"basic-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#basic-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Basic Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Let's look at a basic example of using the drowdown component. It is always used in block format to enable flexible templationg of your options.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Power select aims to be totally flexible and because of that it doesn't try to make strong assumptions about how you want to use it. e.g. two way bind the selected property. Instead it embraces DDAU (Data Down Actions Up) philosophy so data flow always is unidirectional and explicit.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"The \"],[7,\"em\"],[9],[0,\"onchange\"],[10],[0,\" event must be handled in your template. This example shows the most common use, update the property on select. For this we can use the ember \"],[7,\"em\"],[9],[0,\"mut\"],[10],[0,\" helper.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-dropdown/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"styles-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#styles-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Styles Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"You can customise the look of your dropdown with the style attribute.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-dropdown/all-styles\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/align-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/form-type-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/size-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/style-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/weight-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/forms/dropdowns.hbs" } });
});
;define("dummy/templates/docs/forms/fieldsets", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8Mq6Fj64", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"fieldsets\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Fieldsets\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/forms/fieldsets.hbs" } });
});
;define("dummy/templates/docs/forms/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/BLU3pYi", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"form\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Form\"],[10],[0,\"\\n    \\n      \"],[7,\"h2\"],[11,\"id\",\"model-bound-form\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#model-bound-form\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Model bound form\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This following example shows a form bound to an ember model demonstrating a variety of basic controls.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-form/model-bound-form\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/forms/index.hbs" } });
});
;define("dummy/templates/docs/forms/inputs", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7Yfvzmak", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"form-inputs\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Form Inputs\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The form input component extends from embers \"],[7,\"em\"],[9],[0,\"input\"],[10],[0,\" component. As such you can pass any of the standard \"],[7,\"a\"],[11,\"href\",\"https://guides.emberjs.com/v2.18.0/templates/input-helpers/#toc_text-fields\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"input attributes\"],[10],[0,\".\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"basic-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#basic-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Basic Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Let's look at a basic example with two way binding on the value and an action on pressing enter\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-form-input/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"styles-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#styles-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Styles Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"You can customise the look of your input with the style attribute.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-form-input/all-styles\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/align-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/form-type-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/size-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/style-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/weight-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/forms/inputs.hbs" } });
});
;define("dummy/templates/docs/forms/rows", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vZMIWbMF", "block": "{\"symbols\":[\"demo\",\"style\",\"form\",\"row\",\"control\",\"row\",\"control\",\"row\",\"style\",\"form\",\"row\",\"control\",\"row\",\"control\",\"row\",\"demo\",\"form\",\"control\",\"row\",\"control\",\"row\",\"demo\",\"form\",\"row\",\"demo\",\"form\",\"control\",\"row\",\"title\"],\"statements\":[[7,\"h1\"],[9],[0,\"Form Control Rows\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"The form control row is a display component to render form components like inputs inline.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"This component is just a presentational wrapper that will yeild content in a flexbox row.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Like the control component, when rendering contextual components properties on the control, like \"],[7,\"em\"],[9],[0,\"model\"],[10],[0,\" & \"],[7,\"em\"],[9],[0,\"disabled\"],[10],[0,\" a passed though automatically to the input components.\"],[10],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Inline Input Usage\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Let's look at a basic example of a name control where you require two inputs to sit alongside each other\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,25,[\"example\"]]],[[\"name\"],[\"form-row-inputs\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-form\",null,[[\"model\"],[[23,[\"model\"]]]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,26,[\"control\"]]],[[\"label\",\"name\",\"tip\",\"disabled\"],[\"Name\",\"name\",\"Please enter you name curabitur diam sodales gravida quis adipiscing libero elementum\",[23,[\"disabled\"]]]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,27,[\"row\"]]],null,{\"statements\":[[4,\"component\",[[22,28,[\"dropdown\"]]],[[\"selected\",\"options\",\"onchange\"],[[23,[\"model\",\"title\"]],[23,[\"titles\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"title\"]]],null]],null]]],{\"statements\":[[0,\"            \"],[1,[22,29,[]],false],[0,\"\\n\"]],\"parameters\":[29]},null],[0,\"          \"],[1,[27,\"component\",[[22,28,[\"input\"]]],[[\"name\",\"placeholder\"],[\"firstName\",\"First Name\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,28,[\"input\"]]],[[\"name\",\"placeholder\"],[\"lastName\",\"Last Name\"]]],false],[0,\"\\n\"]],\"parameters\":[28]},null],[0,\"\\n\"]],\"parameters\":[27]},null],[0,\"\\n\"]],\"parameters\":[26]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,25,[\"snippet\"]],\"form-row-inputs.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[25]},null],[0,\"\\n\"],[7,\"table\"],[11,\"class\",\"docs-args-table\"],[9],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"disabled\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[27,\"docs-toggle\",null,[[\"value\"],[[23,[\"disabled\"]]]]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"Boolean\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[7,\"h2\"],[9],[0,\"Inline Button Usage\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Here's a common search box pattern where we need an inline button.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,22,[\"example\"]]],[[\"name\"],[\"form-row-button\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-form\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,23,[\"row\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,24,[\"input\"]]],[[\"name\",\"type\",\"placeholder\"],[\"search\",\"search\",\"Enter your search term\"]]],false],[0,\"\\n        \"],[1,[27,\"component\",[[22,24,[\"button\"]],\"Go\"],[[\"name\"],[\"go\"]]],false],[0,\"\\n\"]],\"parameters\":[24]},null],[0,\"\\n\"]],\"parameters\":[23]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,22,[\"snippet\"]],\"form-row-button.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[22]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Input Icon Usage\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Finally, you can use this component to prefix or suffix inputs with icons.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,16,[\"example\"]]],[[\"name\"],[\"form-row-icon\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-form\",null,[[\"model\"],[[23,[\"model\"]]]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,17,[\"control\"]]],[[\"label\",\"name\",\"tip\"],[\"Email\",\"email\",\"Please enter your email address\"]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,20,[\"row\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,21,[\"icon\"]],\"email\"],[[\"prefix\"],[true]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,21,[\"input\"]]],[[\"placeholder\"],[\"Email\"]]],false],[0,\"\\n\"]],\"parameters\":[21]},null],[0,\"\\n\"]],\"parameters\":[20]},null],[0,\"\\n\"],[4,\"component\",[[22,17,[\"control\"]]],[[\"label\",\"name\",\"tip\"],[\"Phone Number\",\"phone\",\"Please enter your phone number including an international code\"]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,18,[\"row\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,19,[\"input\"]]],[[\"placeholder\"],[\"+00 0000 000000\"]]],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,19,[\"icon\"]],\"phone\"],[[\"suffix\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[19]},null],[0,\"\\n\"]],\"parameters\":[18]},null],[0,\"\\n\"]],\"parameters\":[17]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,16,[\"snippet\"]],\"form-row-icon.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[16]},null],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Styles Usage\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can customise the look of your rows with the style attribute. In this example the style attribute is inherited by the row from uxs-form.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"form-row-styles\"]],{\"statements\":[[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"p\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"darkStyles\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"uxs-form\",null,[[\"style\",\"model\"],[[22,9,[]],[23,[\"model\"]]]],{\"statements\":[[4,\"component\",[[22,10,[\"control\"]]],[[\"label\",\"name\",\"tip\"],[\"Email\",\"email\",\"Please enter your email address\"]],{\"statements\":[[4,\"component\",[[22,14,[\"row\"]]],null,{\"statements\":[[0,\"              \"],[1,[27,\"component\",[[22,15,[\"icon\"]],\"email\"],[[\"prefix\"],[true]]],false],[0,\"\\n              \"],[1,[27,\"component\",[[22,15,[\"input\"]]],[[\"placeholder\"],[\"Email\"]]],false],[0,\"\\n\"]],\"parameters\":[15]},null]],\"parameters\":[14]},null],[4,\"component\",[[22,10,[\"control\"]]],[[\"label\",\"name\",\"tip\"],[\"Phone Number\",\"phone\",\"Please enter your phone number including an international code\"]],{\"statements\":[[4,\"component\",[[22,12,[\"row\"]]],null,{\"statements\":[[0,\"              \"],[1,[27,\"component\",[[22,13,[\"input\"]]],[[\"placeholder\"],[\"+00 0000 000000\"]]],false],[0,\"\\n              \"],[1,[27,\"component\",[[22,13,[\"icon\"]],\"phone\"],[[\"suffix\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[13]},null]],\"parameters\":[12]},null],[4,\"component\",[[22,10,[\"control\"]]],null,{\"statements\":[[4,\"component\",[[22,10,[\"row\"]]],null,{\"statements\":[[0,\"              \"],[1,[27,\"component\",[[22,11,[\"input\"]]],[[\"name\",\"type\",\"placeholder\"],[\"search\",\"search\",\"Enter your search term\"]]],false],[0,\"\\n              \"],[1,[27,\"component\",[[22,11,[\"button\"]],[27,\"capitalize\",[[22,9,[]]],null]],[[\"name\"],[\"go\"]]],false],[0,\"\\n\"]],\"parameters\":[11]},null]],\"parameters\":[]},null]],\"parameters\":[10]},null],[0,\"\\n\"]],\"parameters\":[9]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"bg-dark p\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"lightStyles\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"uxs-form\",null,[[\"style\",\"model\"],[[22,2,[]],[23,[\"model\"]]]],{\"statements\":[[4,\"component\",[[22,3,[\"control\"]]],[[\"label\",\"name\",\"tip\"],[\"Email\",\"email\",\"Please enter your email address\"]],{\"statements\":[[4,\"component\",[[22,7,[\"row\"]]],null,{\"statements\":[[0,\"              \"],[1,[27,\"component\",[[22,8,[\"icon\"]],\"email\"],[[\"prefix\"],[true]]],false],[0,\"\\n              \"],[1,[27,\"component\",[[22,8,[\"input\"]]],[[\"placeholder\"],[\"Email\"]]],false],[0,\"\\n\"]],\"parameters\":[8]},null]],\"parameters\":[7]},null],[4,\"component\",[[22,3,[\"control\"]]],[[\"label\",\"name\",\"tip\"],[\"Phone Number\",\"phone\",\"Please enter your phone number including an international code\"]],{\"statements\":[[4,\"component\",[[22,5,[\"row\"]]],null,{\"statements\":[[0,\"              \"],[1,[27,\"component\",[[22,6,[\"input\"]]],[[\"placeholder\"],[\"+00 0000 000000\"]]],false],[0,\"\\n              \"],[1,[27,\"component\",[[22,6,[\"icon\"]],\"phone\"],[[\"suffix\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[6]},null]],\"parameters\":[5]},null],[4,\"component\",[[22,3,[\"control\"]]],null,{\"statements\":[[4,\"component\",[[22,3,[\"row\"]]],null,{\"statements\":[[0,\"              \"],[1,[27,\"component\",[[22,4,[\"input\"]]],[[\"name\",\"type\",\"placeholder\"],[\"search\",\"search\",\"Enter your search term\"]]],false],[0,\"\\n              \"],[1,[27,\"component\",[[22,4,[\"button\"]],[27,\"capitalize\",[[22,2,[]]],null]],[[\"name\"],[\"go\"]]],false],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[]},null]],\"parameters\":[3]},null],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"form-row-styles.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/forms/rows.hbs" } });
});
;define("dummy/templates/docs/forms/textareas", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eJHiFuj6", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"form-textareas\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Form Textareas\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The form textarea component extends from embers \"],[7,\"em\"],[9],[0,\"textarea\"],[10],[0,\" component. As such you can pass any of the standard \"],[7,\"a\"],[11,\"href\",\"https://guides.emberjs.com/v2.18.0/templates/input-helpers/#toc_text-areas\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"textarea attributes\"],[10],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"basic-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#basic-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Basic Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Let's look at a basic example with two way binding on the value and an action on pressing enter\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-form-textarea/basic-demo\"],false],[10],[0,\"\\n\"],[2,\" {{#docs-demo as |demo|}}\\n\\n  {{#demo.example name=\\\"form-textarea\\\"}}\\n    {{uxs-form-textarea value=value enter=(action \\\"enterPressed\\\" value)}}\\n  {{/demo.example}}\\n\\n  {{demo.snippet 'form-textarea.hbs'}}\\n  {{demo.snippet 'form-textarea-action.js'}}\\n\\n{{/docs-demo}} \"],[0,\"\\n\\n\"],[2,\" <h2>Further Usage</h2>\\n\\nThis example includes futher attributes to control the input:\\n\\n{{#docs-demo as |demo|}}\\n\\n  {{#demo.example name=\\\"form-textarea-further\\\"}}\\n    {{uxs-form-textarea\\n      value=value\\n      rows=rows\\n      cols=cols\\n      placeholder=placeholder\\n      disabled=disabled\\n      maxlength=maxlength\\n      wrap=wrap\\n      readonly=readonly\\n      autofocus=autofocus\\n      spellcheck=spellcheck\\n    }}\\n  {{/demo.example}}\\n\\n  {{demo.snippet 'form-textarea-further.hbs'}}\\n\\n{{/docs-demo}}\\n<table class=\\\"docs-args-table\\\">\\n  <tr>\\n    <td>value</td>\\n    <td>{{input placeholder=\\\"Value\\\" value=value}}</td>\\n    <td><em>String</em></td>\\n  </tr>\\n  <tr>\\n    <td>rows</td>\\n    <td>{{input placeholder=\\\"Value\\\" value=rows type=\\\"number\\\"}}</td>\\n    <td><em>String</em></td>\\n  </tr>\\n  <tr>\\n    <td>cols</td>\\n    <td>{{input placeholder=\\\"Value\\\" value=cols type=\\\"number\\\"}}</td>\\n    <td><em>String</em></td>\\n  </tr>\\n  <tr>\\n    <td>placeholder</td>\\n    <td>{{input placeholder=\\\"Value\\\" value=placeholder}}</td>\\n    <td><em>String</em></td>\\n  </tr>\\n  <tr>\\n    <td>disabled</td>\\n    <td>{{docs-toggle value=disabled}}</td>\\n    <td><em>Boolean</em></td>\\n  </tr>\\n  <tr>\\n    <td>maxlength</td>\\n    <td>{{input type=\\\"number\\\" value=maxlength}}</td>\\n    <td><em>Number</em></td>\\n  </tr>\\n  <tr>\\n    <td>wrap</td>\\n    <td>{{docs-toggle value=wrap}}</td>\\n    <td><em>Boolean</em></td>\\n  </tr>\\n  <tr>\\n    <td>readonly</td>\\n    <td>{{docs-toggle value=readonly}}</td>\\n    <td><em>Boolean</em></td>\\n  </tr>\\n  <tr>\\n    <td>autofocus</td>\\n    <td>{{docs-toggle value=autofocus}}</td>\\n    <td><em>Boolean</em></td>\\n  </tr>\\n  <tr>\\n    <td>spellcheck</td>\\n    <td>{{docs-toggle value=spellcheck}}</td>\\n    <td><em>Boolean</em></td>\\n  </tr>\\n  <tr>\\n    <td></td>\\n    <td colspan=\\\"2\\\"><em>Possible Values: \\\"text\\\", \\\"password\\\", \\\"number\\\",\\n    \\\"hidden\\\", \\\"email\\\", \\\"search\\\", \\\"tel\\\", \\\"url\\\"</em></td>\\n  </tr>\\n</table>\\n\\n\"],[0,\"\\n\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"styles-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#styles-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Styles Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"You can customise the look of your textarea with the style attribute.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-form-textarea/all-styles\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/align-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/form-type-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/size-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/style-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/weight-options\"],false],[10],[0,\"\\n\"],[2,\"\\n{{#docs-demo as |demo|}}\\n\\n  {{#demo.example name=\\\"form-textarea-styles\\\"}}\\n\\n    <div class=\\\"p\\\">\\n      {{#each darkStyles as |style|}}\\n\\n        <div class=\\\"mb\\\">\\n          {{uxs-form-textarea\\n            value=value\\n            style=style\\n            placeholder=(concat (capitalize style) \\\" Style\\\")\\n          }}\\n        </div>\\n\\n      {{/each}}\\n    </div>\\n    <div class=\\\"bg-dark p\\\">\\n    {{#each lightStyles as |style|}}\\n\\n      <div class=\\\"mb\\\">\\n        {{uxs-form-textarea\\n          value=value\\n          style=style\\n          placeholder=(concat (capitalize style) \\\" Style\\\")\\n        }}\\n      </div>\\n\\n    {{/each}}\\n    </div>\\n\\n  {{/demo.example}}\\n\\n  {{demo.snippet \\\"form-textarea-styles.hbs\\\"}}\\n\\n{{/docs-demo}} \"],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/forms/textareas.hbs" } });
});
;define("dummy/templates/docs/forms/toggles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "G+JwDB+w", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"toggles\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Toggles\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/knownasilya/ember-toggle\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Ember Toggle\"],[10],[0,\" is a dependence with UX Sauce\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"...more docs todo\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/forms/toggles.hbs" } });
});
;define("dummy/templates/docs/forms/validation", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HTz5lxsU", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"validations\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Validations\"],[10],[0,\"\\n    \\n      \"],[7,\"h2\"],[11,\"id\",\"validating-model-form\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#validating-model-form\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Validating Model Form\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"docs/uxs-form/validation\",null,[[\"model\"],[[23,[\"model\"]]]]],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/forms/validation.hbs" } });
});
;define("dummy/templates/docs/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gyx5doSi", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"introduction\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Introduction\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This is UX Sauce\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/index.hbs" } });
});
;define("dummy/templates/docs/layout/app", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TBSM894a", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"app\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"App\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The app component is used to wrap the contents of your application vertically. It's normally placed in the root application template. If  \"],[7,\"em\"],[9],[0,\"fixedNav\"],[10],[0,\" is true this container will add required padding to the top.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"docs/uxs-app/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"properties\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#properties\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Properties\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Now explore the various properties available in this component:\"],[10],[0,\"\\n\"],[2,\" <table class=\\\"docs-args-table\\\">\\n  <tbody>\\n{{!-- <tr>\\n      <td>title</td>\\n      <td>{{input placeholder=\\\"App Title\\\" value=title}}</td>\\n      <td><em>String</em></td>\\n    </tr> --}}    <tr>\\n      <td>fixedNav</td>\\n      <td>{{docs-toggle value=fixedNav}}</td>\\n      <td><em>Boolean</em></td>\\n    </tr>\\n  </tbody>\\n</table> \"],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/layout/app.hbs" } });
});
;define("dummy/templates/docs/layout/header", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zCvofMz1", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"header\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Header\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The header component is used to frame your page layouts. It combines a toolbar with a page title and familure action icons.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Head is a basic example of the header component. Tweak the title and style.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-header/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"images\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#images\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Images\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"You can add a background image to headers by specifing a path to the image either locally or via an full url.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-header/image-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"contextual-components\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#contextual-components\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Contextual Components\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The Header component yeilds out the following contextual components:\"],[10],[0,\"\\n\"],[7,\"ul\"],[9],[0,\"\\n  \"],[7,\"li\"],[9],[0,\"toolbar - \"],[4,\"link-to\",[\"docs.layout.toolbar\"],null,{\"statements\":[[0,\"uxs-toolbar\"]],\"parameters\":[]},null],[10],[0,\"\\n  \"],[7,\"li\"],[9],[0,\"title - \"],[4,\"link-to\",[\"docs.settings.typography\"],null,{\"statements\":[[0,\"uxs-heading\"]],\"parameters\":[]},null],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/style-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/layout/header.hbs" } });
});
;define("dummy/templates/docs/layout/hero", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Oi8PLaf5", "block": "{\"symbols\":[\"demo\",\"hero\"],\"statements\":[[7,\"h1\"],[9],[0,\"Hero\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"The hero component is used to give your pages impact.\"],[10],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Usage\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"hero\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-hero\",null,[[\"image\"],[\"https://placeimg.com/2560/1600/any/grayscale\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,2,[\"heading\"]],\"We Are Sauce\"],[[\"huge\"],[true]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,2,[\"content\"]],\"Dis per bibendum adipiscing a velit sociosqu a habitant.\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,2,[\"button\"]],\"Let's Do It\"],null],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"hero.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Contextual Components\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"The Hero component has the following child components:\"],[10],[0,\"\\n\\n\"],[7,\"table\"],[11,\"class\",\"docs-args-table\"],[9],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"heading\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of uxs-heading\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"content\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of uxs-content\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"button\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of uxs-button\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"button-link\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of uxs-button-link\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/layout/hero.hbs" } });
});
;define("dummy/templates/docs/layout/navbar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "N0F5jpLd", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"navbar\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Navbar\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The navbar component is used to render the main nav bar of your application. To see a full api check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-navbar\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The example below shows common usage of the nav bar with an embeded \"],[7,\"em\"],[9],[0,\"navigation list\"],[10],[0,\".\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-navbar/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"responsive-navigation\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#responsive-navigation\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Responsive Navigation\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This example shows using the mobile and desktop navigation components to provide a responsive menu.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-navbar/responsive-demo\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/style-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/layout/navbar.hbs" } });
});
;define("dummy/templates/docs/layout/pane", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AsjPmTiF", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"panes\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Panes\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Pane components are used inside a window to layout content.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"To see a full api check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-pane\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"splash-layout\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#splash-layout\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Splash Layout\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The splash pane will position content in the middle of the window. This layout is also perfect for using in conjunction with a uxs-window with a background image.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-pane/splash\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"single-layout\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#single-layout\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Single Layout\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The single layout places content in one large pane.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-pane/single\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Main & Aside Layout\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"The main pane will take up the majority of the window width a side pane taking up the rest.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"On mobile devices panes will be stacked vertically with the aside pane appearing first.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-pane/main-aside\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"split-layout\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#split-layout\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Split Layout\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Two columns will be spaced evenly.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"On mobile devices panes will be stacked vertically.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-pane/split\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"three-column-layout\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#three-column-layout\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Three Column Layout\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Three panes, an index, detail and aside. This layout is designed to display the following:\"],[10],[0,\"\\n\"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[0,\"A list of records\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Details for an individual record\"],[10],[0,\"\\n\"],[7,\"li\"],[9],[0,\"Actions & Meta data\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"On mobile devices panes will be stacked vertically with the aide pane displayed first and the index pane hidden.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-pane/threes\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"custom-ordering-on-mobile\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#custom-ordering-on-mobile\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Custom ordering on mobile\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The order panes are stacked on mobile views can be customised by setting the order attribute of a pane. The order attribute supports numbers from 1-9.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/size-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/style-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/layout/pane.hbs" } });
});
;define("dummy/templates/docs/layout/toolbar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iFJrxcIf", "block": "{\"symbols\":[\"demo\",\"toolbar\",\"toolbar\",\"toolbar\",\"toolbar\",\"toolbar\",\"toolbar\",\"toolbar\",\"toolbar\",\"toolbar\",\"toolbar\",\"demo\",\"toolbar\",\"demo\",\"toolbar\"],\"statements\":[[7,\"h1\"],[9],[0,\"Toolbar\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"The header component is used to frame your page layouts.\"],[10],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Usage\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,14,[\"example\"]]],[[\"name\",\"theme\"],[\"toolbar\",\"accent\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-toolbar\",null,null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,15,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,15,[\"title\"]],\"Toolbar\"],null],false],[0,\"\\n      \"],[1,[22,15,[\"spacer\"]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,15,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,15,[\"action\"]],\"file_download\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,15,[\"action\"]],\"delete\"],null],false],[0,\"\\n\"]],\"parameters\":[15]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,14,[\"snippet\"]],\"toolbar.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[14]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Contextual Components\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"The Hero component has the following child components:\"],[10],[0,\"\\n\\n\"],[7,\"table\"],[11,\"class\",\"docs-args-table\"],[9],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"back\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of uxs-icon\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"title\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of uxs-subheading\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"spacer\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of uxs-div\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"action\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of uxs-icon\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Toolbar Search\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,12,[\"example\"]]],[[\"name\",\"theme\"],[\"toolbar-search\",\"accent\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-toolbar\",null,null,{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,13,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,13,[\"title\"]],[27,\"concat\",[\"Toolbar: \",[23,[\"searchTerm\"]]],null]],null],false],[0,\"\\n      \"],[1,[22,13,[\"spacer\"]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,13,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,13,[\"action\"]],\"file_download\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,13,[\"search\"]]],[[\"value\"],[[23,[\"searchTerm\"]]]]],false],[0,\"\\n\"]],\"parameters\":[13]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,12,[\"snippet\"]],\"toolbar-search.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[12]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Styles\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can customise the look of your toolbar with the style attribute.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"toolbar-styles\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-toolbar\",null,[[\"style\"],[\"primary\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,11,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,11,[\"title\"]],\"Primary Bar\"],null],false],[0,\"\\n      \"],[1,[22,11,[\"spacer\"]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,11,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,11,[\"action\"]],\"file_download\"],null],false],[0,\"\\n      \"],[1,[22,11,[\"search\"]],false],[0,\"\\n\"]],\"parameters\":[11]},null],[0,\"\\n\"],[4,\"uxs-toolbar\",null,[[\"style\"],[\"accent\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,10,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,10,[\"title\"]],\"Accent Bar\"],null],false],[0,\"\\n      \"],[1,[22,10,[\"spacer\"]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,10,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,10,[\"action\"]],\"file_download\"],null],false],[0,\"\\n      \"],[1,[22,10,[\"search\"]],false],[0,\"\\n\"]],\"parameters\":[10]},null],[0,\"\\n\"],[4,\"uxs-toolbar\",null,[[\"style\"],[\"dark\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,9,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,9,[\"title\"]],\"Dark Bar\"],null],false],[0,\"\\n      \"],[1,[22,9,[\"spacer\"]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,9,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,9,[\"action\"]],\"file_download\"],null],false],[0,\"\\n      \"],[1,[22,9,[\"search\"]],false],[0,\"\\n\"]],\"parameters\":[9]},null],[0,\"\\n\"],[4,\"uxs-toolbar\",null,[[\"style\"],[\"grey\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,8,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,8,[\"title\"]],\"Grey Bar\"],null],false],[0,\"\\n      \"],[1,[22,8,[\"spacer\"]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,8,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,8,[\"action\"]],\"file_download\"],null],false],[0,\"\\n      \"],[1,[22,8,[\"search\"]],false],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"\\n\"],[4,\"uxs-toolbar\",null,[[\"style\"],[\"mid\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,7,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"title\"]],\"Mid Bar\"],null],false],[0,\"\\n      \"],[1,[22,7,[\"spacer\"]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,7,[\"action\"]],\"file_download\"],null],false],[0,\"\\n      \"],[1,[22,7,[\"search\"]],false],[0,\"\\n\"]],\"parameters\":[7]},null],[0,\"\\n\"],[4,\"uxs-toolbar\",null,[[\"style\"],[\"light\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"title\"]],\"White Bar\"],null],false],[0,\"\\n      \"],[1,[22,6,[\"spacer\"]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,6,[\"action\"]],\"file_download\"],null],false],[0,\"\\n      \"],[1,[22,6,[\"search\"]],false],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"\\n\"],[4,\"uxs-toolbar\",null,[[\"style\"],[\"white\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,5,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"title\"]],\"White Bar\"],null],false],[0,\"\\n      \"],[1,[22,5,[\"spacer\"]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,5,[\"action\"]],\"file_download\"],null],false],[0,\"\\n      \"],[1,[22,5,[\"search\"]],false],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"\\n\"],[4,\"uxs-toolbar\",null,[[\"style\"],[\"success\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,4,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"title\"]],\"Success Bar\"],null],false],[0,\"\\n      \"],[1,[22,4,[\"spacer\"]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,4,[\"action\"]],\"file_download\"],null],false],[0,\"\\n      \"],[1,[22,4,[\"search\"]],false],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"\\n\"],[4,\"uxs-toolbar\",null,[[\"style\"],[\"warning\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,3,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"title\"]],\"Warning Bar\"],null],false],[0,\"\\n      \"],[1,[22,3,[\"spacer\"]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,3,[\"action\"]],\"file_download\"],null],false],[0,\"\\n      \"],[1,[22,3,[\"search\"]],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"\\n\"],[4,\"uxs-toolbar\",null,[[\"style\"],[\"error\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,2,[\"back\"]],\"arrow_back\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,2,[\"title\"]],\"Error Bar\"],null],false],[0,\"\\n      \"],[1,[22,2,[\"spacer\"]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,2,[\"action\"]],\"filter_list\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,2,[\"action\"]],\"file_download\"],null],false],[0,\"\\n      \"],[1,[22,2,[\"search\"]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,1,[\"snippet\"]],\"toolbar-styles.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/layout/toolbar.hbs" } });
});
;define("dummy/templates/docs/layout/window", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "W9Do4TR6", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"window\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Window\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The window component is used to present horizontal content blocks as \\\"panes\\\".\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"docs/uxs-window/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"docs/uxs-window/image-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"styles-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#styles-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Styles Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"You can customise the look of your window with the style attribute. Notice how the text color will cascade from the window style.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-window/all-styles\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/layout/window.hbs" } });
});
;define("dummy/templates/docs/lists/_subheadings", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mKm8ePCW", "block": "{\"symbols\":[\"demo\",\"list\",\"style\",\"style\",\"demo\",\"list\",\"item\"],\"statements\":[[7,\"h1\"],[9],[0,\"List Subheadings\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Subheadings are used to group list items. You can group a flat model collection with an addon like \"],[7,\"a\"],[11,\"href\",\"https://github.com/scottwernervt/ember-cli-group-by\"],[9],[0,\"ember-cli-group-by\"],[10],[0,\".\"],[10],[0,\"\\n\\n\\n\"],[7,\"h2\"],[9],[0,\"Example\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,5,[\"example\"]]],[[\"name\"],[\"list-subheadings\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,[[\"lines\",\"bordered\"],[3,true]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,6,[\"subheading\"]],\"Subheading\"],null],false],[0,\"\\n\"],[4,\"component\",[[22,6,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,7,[\"aside\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,7,[\"avatar\"]],\"https://placeimg.com/100/100/any\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,7,[\"body\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,7,[\"title\"]],\"Filtered Item\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,7,[\"detail\"]],\"Notice how the list avatar\"],null],false],[0,\"\\n          \"],[1,[27,\"component\",[[22,7,[\"detail\"]],\"matches the notice icon\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,7,[\"aside\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,7,[\"action\"]],\"keyboard_arrow_right\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[7]},null]],\"parameters\":[6]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,5,[\"snippet\"]],\"list-subheadings.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[5]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Styles Usage\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can customise the look of your list subheadings by passing the style attribute to the list-subheading component. The default style will be either dark or white text depending on what contrasts with the parents list style.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\"],[\"list-subheading-styles\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,[[\"lines\",\"bordered\"],[3,true]],{\"statements\":[[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"bg-white\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"darkStyles\"]]],null,{\"statements\":[[0,\"\\n          \"],[1,[27,\"component\",[[22,2,[\"subheading\"]],[27,\"capitalize\",[[22,4,[]]],null]],[[\"style\"],[[22,4,[]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[4]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"bg-dark\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"lightStyles\"]]],null,{\"statements\":[[0,\"\\n          \"],[1,[27,\"component\",[[22,2,[\"subheading\"]],[27,\"capitalize\",[[22,3,[]]],null]],[[\"style\"],[[22,3,[]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Properties\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"The uxs-list-subheading component has the following properties:\"],[10],[0,\"\\n\\n\"],[7,\"table\"],[11,\"class\",\"docs-args-table\"],[9],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"text\"],[7,\"span\"],[11,\"class\",\"req\"],[9],[0,\"*\"],[10],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"The subheading text. This can be passed in as the first positional parameter.\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"String\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"bordered\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Adds a border to the bottom of the list item. \"],[7,\"em\"],[9],[0,\"Default: false\"],[10],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"Boolean\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"style\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Defined the color/style of the list. Default: white\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"String\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/lists/_subheadings.hbs" } });
});
;define("dummy/templates/docs/lists/avatars", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iB66c0gZ", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"list-avatars\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"List Avatars\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Avatars are used to display infomation in a square or circle.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"image-avatars\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#image-avatars\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Image Avatars\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Use images avatars to display an image.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-avatar/image-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"icon-avatars\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#icon-avatars\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Icon Avatars\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Use Icon Avatars to display icons.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-avatar/icon-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"text-avatars\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#text-avatars\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Text Avatars\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Use Text Avatars to display text data\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-avatar/text-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"custom-text-avatars\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#custom-text-avatars\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Custom Text Avatars\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Use Text Avatars to display text data\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-avatar/custom-text-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"stock-styles-examples\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#stock-styles-examples\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Stock Styles Examples\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Here's an example of the avatars in all stock styles:\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"When used in lists the default style will be either dark or white text depending on what contrasts with the parents list style.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-avatar/all-styles\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"stock-size-examples\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#stock-size-examples\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Stock Size Examples\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Here's an example of the avatars in all stock sizes:\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-avatar/all-sizes\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/size-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/style-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/lists/avatars.hbs" } });
});
;define("dummy/templates/docs/lists/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5Ud/ZxTX", "block": "{\"symbols\":[\"demo\",\"style\",\"list\",\"item\",\"item\",\"item\",\"demo\",\"list\",\"thing\",\"item\"],\"statements\":[[7,\"h1\"],[9],[0,\"Lists\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Lists are used to display collections of records in a defined order.\"],[10],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Example\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"This is a basic lists using contextual child components.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,7,[\"example\"]]],[[\"name\"],[\"list-aside\"]],{\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,[[\"lines\",\"bordered\"],[3,true]],{\"statements\":[[4,\"each\",[[23,[\"items\"]]],null,{\"statements\":[[4,\"component\",[[22,8,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,10,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,10,[\"avatar\"]],\"https://placeimg.com/100/100/any\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,10,[\"body\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,10,[\"title\"]],[22,9,[\"title\"]]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,10,[\"detail\"]],[22,9,[\"location\"]]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,10,[\"detail\"]],[22,9,[\"email\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,10,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,10,[\"action\"]],\"keyboard_arrow_right\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[10]},null]],\"parameters\":[9]},null]],\"parameters\":[8]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[1,[27,\"component\",[[22,7,[\"snippet\"]],\"list-aside.hbs\"],null],false],[0,\"\\n\\n\"]],\"parameters\":[7]},null],[0,\"\\n\"],[7,\"h2\"],[9],[0,\"Styles Usage\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can customise the look of your lists by passing the style attribute to either the list or the list-item component.\"],[10],[0,\"\\n\\n\"],[4,\"docs-demo\",null,null,{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"example\"]]],[[\"name\",\"class\"],[\"lists-styles\",\"bg-dark\"]],{\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,[\"styles\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,[[\"style\",\"lines\",\"bordered\"],[[22,2,[]],3,true]],{\"statements\":[[0,\"        \"],[1,[27,\"component\",[[22,3,[\"subheading\"]],[27,\"capitalize\",[[27,\"concat\",[[22,2,[]],\" Subheading\"],null]],null]],null],false],[0,\"\\n\"],[4,\"component\",[[22,3,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,6,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,6,[\"avatar\"]],\"http://api.faceholder.io/faces?id=0\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,6,[\"body\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,6,[\"title\"]],[27,\"capitalize\",[[27,\"concat\",[[22,2,[]],\" List\"],null]],null]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,6,[\"detail\"]],\"foo\"],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,6,[\"detail\"]],\"bar\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,6,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,6,[\"action\"]],\"invert_colors\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[6]},null],[4,\"component\",[[22,3,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,5,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,5,[\"avatarText\"]],\"AA\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,5,[\"body\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,5,[\"title\"]],[27,\"capitalize\",[[27,\"concat\",[[22,2,[]],\" List\"],null]],null]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,5,[\"detail\"]],\"foo\"],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,5,[\"detail\"]],\"bar\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,5,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,5,[\"action\"]],\"invert_colors\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[5]},null],[4,\"component\",[[22,3,[\"item\"]]],null,{\"statements\":[[4,\"component\",[[22,4,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,4,[\"avatarIcon\"]],\"beach_access\"],[[\"round\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,4,[\"body\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,4,[\"title\"]],[27,\"capitalize\",[[27,\"concat\",[[22,2,[]],\" List\"],null]],null]],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,4,[\"detail\"]],\"foo\"],null],false],[0,\"\\n            \"],[1,[27,\"component\",[[22,4,[\"detail\"]],\"bar\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,4,[\"aside\"]]],null,{\"statements\":[[0,\"            \"],[1,[27,\"component\",[[22,4,[\"action\"]],\"invert_colors\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[4]},null]],\"parameters\":[3]},null],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\\n\"],[7,\"h2\"],[9],[0,\"Properties\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"The uxs-list component has the following properties:\"],[10],[0,\"\\n\\n\"],[7,\"table\"],[11,\"class\",\"docs-args-table\"],[9],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"style\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Defined the color/style of the list. Default: white\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"String\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"bordered\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Adds a border to the bottom of both child list items and subheadings.\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"Boolean\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"lines\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Fixes the height to accomodate 1-3 lines of content in the body of child list items. \"],[7,\"em\"],[9],[0,\"Default: 1\"],[10],[10],[0,\"\\n      \"],[7,\"td\"],[9],[7,\"em\"],[9],[0,\"Number (1-3)\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[7,\"h2\"],[9],[0,\"Contextual Component\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"The \"],[7,\"b\"],[9],[0,\"List\"],[10],[0,\" component has the following child components:\"],[10],[0,\"\\n\\n\"],[7,\"table\"],[11,\"class\",\"docs-args-table\"],[9],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"item\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of \"],[4,\"link-to\",[\"docs.lists.items\"],null,{\"statements\":[[0,\"uxs-list-item\"]],\"parameters\":[]},null],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"subheading\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of \"],[4,\"link-to\",[\"docs.lists.subheadings\"],null,{\"statements\":[[0,\"uxs-list-subheading\"]],\"parameters\":[]},null],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"notice\"],[10],[0,\"\\n      \"],[7,\"td\"],[9],[0,\"Alias of \"],[4,\"link-to\",[\"docs.lists.notices\"],null,{\"statements\":[[0,\"uxs-list-notice\"]],\"parameters\":[]},null],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/lists/index.hbs" } });
});
;define("dummy/templates/docs/lists/items", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BtN/+V7r", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"list-items\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"List Items\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"List items are used to render each item of you list. The items tend to contain 1 - 3 \\\"columns\\\" of data. These could be an avatar, text or actions.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"basic-example\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#basic-example\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Basic Example\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This is a simple list containing just a title for each item.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-list-item/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"adding-more-content\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#adding-more-content\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Adding more content\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This is a list contains some meta data and includes a bottom border. By defining the lines & border property on the list component, these properties are passed to each item and will set the height and bottom-border.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-list-item/content-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"avatars-and-actions\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#avatars-and-actions\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Avatars and Actions\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This is a list that includes some horizontal layout for the avatar and item. We use the aside and body contextual components to split up each items layout.\\nThere is a variaty of avatar components you can use in lists including: image, text and icon avatars. See the \"],[4,\"link-to\",[\"docs.lists.avatars\"],null,{\"statements\":[[0,\"avatars page\"]],\"parameters\":[]},null],[0,\" for details.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-list-item/avatar-demo\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/lists/items.hbs" } });
});
;define("dummy/templates/docs/lists/notices", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dZnxAyeC", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"list-notices\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"List Notices\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Lists can be used to highlight a list in certain contexts. e.g. an active filter.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"To see a full list of arguments check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-list-notice\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Here's a basic list notice at the top of a list.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-list-notice/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"icons-and-actions\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#icons-and-actions\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Icons and Actions\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"List notices can also include icons and actions e.g. to clear a filter.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-list-notice/icon-action-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"testable-elements\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#testable-elements\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Testable Elements\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This component provides the following test selectors.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-list-notice\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-list-notice\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-list-notice\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-list-notice-icon\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-list-notice-icon\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-list-notice-icon\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-list-notice-text\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-list-notice-text\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-list-notice-text\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"data-test-list-notice-action\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#data-test-list-notice-action\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"data-test-list-notice-action\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h2\"],[11,\"id\",\"styles-usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#styles-usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Styles Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"You can customise the look of your list notices by passing the style attribute to the list-subheading component.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-list-notice/all-styles\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/style-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/lists/notices.hbs" } });
});
;define("dummy/templates/docs/lists/subheadings", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FaXGvqTJ", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"list-subheadings\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"List Subheadings\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Subheadings are used to group list items. You can group a flat model collection with an addon like \"],[7,\"a\"],[11,\"href\",\"https://github.com/scottwernervt/ember-cli-group-by\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-cli-group-by\"],[10],[0,\".\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Let's look at a basic example. You can play around with some of the arguments in this demo. To see a full list check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-list/x-subheading\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-list/subheading/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"yield-examples\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#yield-examples\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Yield Examples\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The subheading can yield subcomponents to provide some more functionality like toggles and icons. To use the yeild component make sure you set the \"],[7,\"em\"],[9],[0,\"yield\"],[10],[0,\" argument to \"],[7,\"strong\"],[9],[0,\"true\"],[10],[0,\".\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-list/subheading/yield-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"stock-style-examples\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#stock-style-examples\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Stock Style Examples\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Here's an example of the subheading in all it's stock styles:\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-list/subheading/all-styles\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/size-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/style-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/lists/subheadings.hbs" } });
});
;define("dummy/templates/docs/navigation/tabs", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "B1caKaPT", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"tabs\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Tabs\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Tabs organize content across different screens, data sets, and other interactions. The \"],[7,\"em\"],[9],[0,\"uxs-tabs\"],[10],[0,\" component yields tab \"],[7,\"em\"],[9],[0,\"items\"],[10],[0,\" or \"],[7,\"em\"],[9],[0,\"item-links\"],[10],[0,\" for each tab you want to display\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"usage\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#usage\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Usage\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Let's look at a basic example. You can play around with some of the arguments in this demo. To see a full list check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-tabs\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-tabs/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"explanation-\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#explanation-\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Explanation,\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[7,\"em\"],[9],[0,\"uxs-tabs\"],[10],[0,\" is the wrapping component\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"The contextual component \"],[7,\"em\"],[9],[0,\"tab.link\"],[10],[0,\" is an alias to embers core \"],[7,\"em\"],[9],[0,\"link-to\"],[10],[0,\" component. So you can use tab items that act link links.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"The \"],[7,\"em\"],[9],[0,\"demo.item\"],[10],[0,\" component lets you render tab items that are not links. So you can bind action events to them instead.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/style-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/align-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/navigation/tabs.hbs" } });
});
;define("dummy/templates/docs/patterns", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gnHcKcP+", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"patterns\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Patterns\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Here's a summary of the patterns we use and encourage authors to follow when extending this addon.\"],[10],[0,\"\\n\"],[7,\"ul\"],[9],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#bem-all-the-things\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"BEM All the Things\"],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#make-use-of-ember-test-selectors\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Make Use of ember-test-selectors\"],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#create-accessible-components\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Create Accessible Components\"],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#build-components-on-top-of-the-shared-mixins\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Build Components on Top of the Shared Mixins\"],[10],[10],[0,\"\\n\"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#use-ember-prop-types\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Use Ember Prop Types\"],[10],[10],[0,\"\\n\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"bem-all-the-things\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#bem-all-the-things\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"BEM All the Things\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Use \"],[7,\"a\"],[11,\"href\",\"https://github.com/sauce-consultants/ember-bem-sauce\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"BEM Sauce\"],[10],[0,\" to add some BEM sugar to your components.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"make-use-of-ember-test-selectors\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#make-use-of-ember-test-selectors\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Make Use of ember-test-selectors\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/simplabs/ember-test-selectors\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Test selectors\"],[10],[0,\" enable better element selectors in Ember.js tests. When designing components we try and use nested test selectors inline with the BEM style.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"All components should allow the passing of a \"],[7,\"strong\"],[9],[0,\"name\"],[10],[0,\" parameter that will be used as the value for all test selectors. This helps authors target to elements when multiple instances exist.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"In the case of components rendered in loops, either use model id's or a zero based index.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"use-closure-actions\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#use-closure-actions\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Use Closure Actions\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[7,\"a\"],[11,\"href\",\"https://dockyard.com/blog/2015/10/29/ember-best-practice-stop-bubbling-and-use-closure-actions\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Stop bubbling actions and use closure actions\"],[10],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"create-accessible-components\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#create-accessible-components\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Create Accessible Components\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Write this\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"addons\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#addons\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Addons\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"ember-basic-dropdown\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ember-basic-dropdown\"],[11,\"class\",\"heading-anchor\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/cibernox/ember-basic-dropdown\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-basic-dropdown\"],[10],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This is a very minimal dropdown. That means that it is agnostic about what it is going to contain.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"It is intended to be a building block for more complex components but is perfectly usable. It is by example the addon on which ember-power-select or ember-paper's menu component are built upon.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"ember-bem-sauce\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ember-bem-sauce\"],[11,\"class\",\"heading-anchor\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/sauce-consultants/ember-bem-sauce\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-bem-sauce\"],[10],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"ember-bem-sauce helps you write BEM components. Make your templates cleaner with the help of the bem helper and the bem component mixin. By defining all your components modifiers in one place you will dry up your template files.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"ember-composable-helpers\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ember-composable-helpers\"],[11,\"class\",\"heading-anchor\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/DockYard/ember-composable-helpers\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-composable-helpers\"],[10],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Composable helpers for Ember that enables more declarative templating.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"ember-moment\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ember-moment\"],[11,\"class\",\"heading-anchor\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/stefanpenner/ember-moment\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-moment\"],[10],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"moment.js template helpers and computed property macros for Ember\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"ember-cli-string-helpers\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ember-cli-string-helpers\"],[11,\"class\",\"heading-anchor\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/romulomachado/ember-cli-string-helpers\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-cli-string-helpers\"],[10],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Set of the String helpers extracted from DockYard's ember-composable-helpers.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"ember-cli-sass\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ember-cli-sass\"],[11,\"class\",\"heading-anchor\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/aexmachina/ember-cli-sass\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-cli-sass\"],[10],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"ember-cli-sass uses Dart Sass to preprocess your ember-cli app's files and provides support for source maps and include paths. It provides support for the common use case for Ember.js projects:\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"ember-power-select\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ember-power-select\"],[11,\"class\",\"heading-anchor\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/cibernox/ember-power-select\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-power-select\"],[10],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Ember Power Select is a select component written in Ember with a focus in flexibility and extensibility.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"It is designed to work well with the way we build Ember apps, so it plays nicely with promises, ember-concurrency's tasks, ember-data collections and follows idiomatic patterns.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"ember-cp-validations\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ember-cp-validations\"],[11,\"class\",\"heading-anchor\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/offirgolan/ember-cp-validations\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-cp-validations\"],[10],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"An EmberJS validation framework that is completely and utterly computed property based.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"ember-flatpickr\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ember-flatpickr\"],[11,\"class\",\"heading-anchor\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/shipshapecode/ember-flatpickr\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-flatpickr\"],[10],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This is an Ember addon that wraps the date picker flatpickr. It uses ember-cli-node-assets to pull in flatpickr from npm.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"ember-modal-dialog\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ember-modal-dialog\"],[11,\"class\",\"heading-anchor\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/yapplabs/ember-modal-dialog\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-modal-dialog\"],[10],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The ember-modal-dialog addon provides components to implement modal dialogs throughout an Ember application using a simple, consistent pattern.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"ember-svg-jar\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ember-svg-jar\"],[11,\"class\",\"heading-anchor\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/ivanvotti/ember-svg-jar\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-svg-jar\"],[10],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The best way to embed SVG images into your Ember application. The viewer is available at: [http://localhost:4200/ember-svg-jar/index.html]\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"ember-test-selectors\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ember-test-selectors\"],[11,\"class\",\"heading-anchor\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/simplabs/ember-test-selectors\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-test-selectors\"],[10],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Enabling better element selectors in Ember.js tests\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"ember-tether\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ember-tether\"],[11,\"class\",\"heading-anchor\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/yapplabs/ember-tether\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-tether\"],[10],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Tether an element to another element in the DOM\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"ember-toggle\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ember-toggle\"],[11,\"class\",\"heading-anchor\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/knownasilya/ember-toggle\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-toggle\"],[10],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Checkbox based Toggle Switch component with swipe/drag support for Ember.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"ember-cli-addon-doc\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#ember-cli-addon-doc\"],[11,\"class\",\"heading-anchor\"],[9],[7,\"a\"],[11,\"href\",\"https://github.com/ember-learn/ember-cli-addon-docs\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"ember-cli-addon-doc\"],[10],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Easy documentation for Ember addons.\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/patterns.hbs" } });
});
;define("dummy/templates/docs/quickstart", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eBDOUTcO", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"quickstart\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Quickstart\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This quickstart guide will get you going with a docs site for your brand new addon.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"1 - \"],[7,\"strong\"],[9],[0,\"Install the addon.\"],[10],[10],[0,\"\\n\"],[7,\"pre\"],[11,\"class\",\"docs-md__code\"],[9],[7,\"code\"],[9],[0,\"yarn \"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"add\"],[10],[7,\"span\"],[11,\"class\",\"bash\"],[9],[0,\" ember-ux-sauce\"],[10],[10],[10],[7,\"p\"],[9],[0,\"2 - \"],[7,\"strong\"],[9],[0,\"Install ember-cli-sass\"],[10],[10],[0,\"\\n\"],[7,\"pre\"],[11,\"class\",\"docs-md__code\"],[9],[7,\"code\"],[9],[0,\"yarn \"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"add\"],[10],[0,\" ember-\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"cli\"],[10],[0,\"-sass\"],[10],[10],[7,\"p\"],[9],[0,\"3 - \"],[7,\"strong\"],[9],[0,\"Add styles\"],[10],[0,\" to your app.scss file\"],[10],[0,\"\\n\"],[7,\"pre\"],[11,\"class\",\"docs-md__code\"],[9],[7,\"code\"],[9],[0,\"@\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"import\"],[10],[0,\" \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"uxs\\\"\"],[10],[0,\";\"],[10],[10],[7,\"p\"],[9],[0,\"4 - \"],[7,\"strong\"],[9],[0,\"Restart Ember Server\"],[10],[10],[0,\"\\n\\n      \"],[7,\"h1\"],[11,\"id\",\"customising-sass\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Customising Sass\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"You can control much of the UX toolkits look and feel with sass variables.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"To override the defaults:\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"1 - Create a new sass file to hold your custom variables\"],[10],[0,\"\\n\"],[7,\"pre\"],[11,\"class\",\"docs-md__code\"],[9],[7,\"code\"],[9],[0,\"touch app/styles/_settings\"],[7,\"span\"],[11,\"class\",\"hljs-selector-class\"],[9],[0,\".uxs\"],[10],[7,\"span\"],[11,\"class\",\"hljs-selector-class\"],[9],[0,\".scss\"],[10],[10],[10],[7,\"p\"],[9],[0,\"2 - Add it to \"],[7,\"em\"],[9],[0,\"app.scss\"],[10],[0,\" before you include the uxs files\"],[10],[0,\"\\n\"],[7,\"pre\"],[11,\"class\",\"docs-md__code\"],[9],[7,\"code\"],[9],[0,\"@\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"import\"],[10],[0,\" \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"settings.uxs\\\"\"],[10],[0,\";\\n@\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"import\"],[10],[0,\" \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"uxs\\\"\"],[10],[0,\";\"],[10],[10],[7,\"p\"],[9],[0,\"3 - (Optional) Include uxs tools.functions file so it can be used in your settings\"],[10],[0,\"\\n\"],[7,\"pre\"],[11,\"class\",\"docs-md__code\"],[9],[7,\"code\"],[9],[7,\"span\"],[11,\"class\",\"hljs-selector-tag\"],[9],[0,\"in\"],[10],[0,\" \"],[7,\"span\"],[11,\"class\",\"hljs-selector-tag\"],[9],[0,\"settings\"],[10],[7,\"span\"],[11,\"class\",\"hljs-selector-class\"],[9],[0,\".uxs\"],[10],[7,\"span\"],[11,\"class\",\"hljs-selector-class\"],[9],[0,\".scss\"],[10],[0,\"\\n\\n@\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"import\"],[10],[0,\" \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"uxs/tools.functions\\\"\"],[10],[0,\";\"],[10],[10],[7,\"p\"],[9],[0,\"4 - Override variables\"],[10],[0,\"\\n\"],[7,\"pre\"],[11,\"class\",\"docs-md__code\"],[9],[7,\"code\"],[9],[0,\"@\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"import\"],[10],[0,\" \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"uxs/tools.functions\\\"\"],[10],[0,\";\\n\\n\"],[7,\"span\"],[11,\"class\",\"hljs-variable\"],[9],[0,\"$c-primary\"],[10],[0,\": \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"#2682C4\"],[10],[0,\";\\n\"],[7,\"span\"],[11,\"class\",\"hljs-variable\"],[9],[0,\"$c-accent\"],[10],[0,\" : \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"#4A74B7\"],[10],[0,\";\\n\"],[7,\"span\"],[11,\"class\",\"hljs-variable\"],[9],[0,\"$c-success\"],[10],[0,\": \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"#8FC93A\"],[10],[0,\";\\n\"],[7,\"span\"],[11,\"class\",\"hljs-variable\"],[9],[0,\"$c-error\"],[10],[0,\"  : \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"#D84F4F\"],[10],[0,\";\\n\"],[7,\"span\"],[11,\"class\",\"hljs-variable\"],[9],[0,\"$c-warning\"],[10],[0,\": \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"#FFC031\"],[10],[0,\";\\n\"],[7,\"span\"],[11,\"class\",\"hljs-variable\"],[9],[0,\"$c-dark\"],[10],[0,\"   : \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"#001021\"],[10],[0,\";\"],[10],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/quickstart.hbs" } });
});
;define("dummy/templates/docs/settings/colors", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ywJ64tE4", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"settings\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Settings\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The following variables are available to customise.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"colors\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#colors\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Colors\"],[10],[10],[0,\"\\n    \\n      \"],[7,\"h3\"],[11,\"id\",\"base-pallet\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#base-pallet\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Base Pallet\"],[10],[10],[0,\"\\n    \"],[7,\"section\"],[11,\"class\",\"uxs mb\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"uxs-swatch\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-dark\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-dark / .bg-dark\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-grey\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-grey / .bg-grey\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-mid\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-dark\"],[9],[0,\"$c-mid / .bg-mid\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-light\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-dark\"],[9],[0,\"$c-light / .bg-light\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-white\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-dark\"],[9],[0,\"$c-white / .bg-white\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"primary-pallet\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#primary-pallet\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Primary Pallet\"],[10],[10],[0,\"\\n    \"],[7,\"section\"],[11,\"class\",\"uxs mb\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"uxs-swatch\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-p1\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-primary-1 / .bg-p1\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-p2\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-primary-2 / .bg-p2\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-p3\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-primary-3 / .bg-p3\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-p4\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-p1\"],[9],[0,\"$c-primary-4 / .bg-p4\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-p5\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-p1\"],[9],[0,\"$c-primary-5 / .bg-p5\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"accent-pallet\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#accent-pallet\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Accent Pallet\"],[10],[10],[0,\"\\n    \"],[7,\"section\"],[11,\"class\",\"uxs mb\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"uxs-swatch\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-a1\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-accent-1 / .bg-a1\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-a2\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-accent-2 / .bg-a2\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-a3\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-accent-3 / .bg-a3\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-a4\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-a1\"],[9],[0,\"$c-accent-4 / .bg-a4\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-a5\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-a1\"],[9],[0,\"$c-accent-5 / .bg-a5\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"success-pallet\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#success-pallet\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Success Pallet\"],[10],[10],[0,\"\\n    \"],[7,\"section\"],[11,\"class\",\"uxs mb\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"uxs-swatch\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-s1\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-success-1 / .bg-s1\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-s2\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-success-2 / .bg-s2\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-s3\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-success-3 / .bg-s3\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-s4\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-s1\"],[9],[0,\"$c-success-4 / .bg-s4\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-s5\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-s1\"],[9],[0,\"$c-success-5 / .bg-s5\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"warning-pallet\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#warning-pallet\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Warning Pallet\"],[10],[10],[0,\"\\n    \"],[7,\"section\"],[11,\"class\",\"uxs mb\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"uxs-swatch\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-w1\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-warning-1 / .bg-w1\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-w2\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-warning-2 / .bg-w2\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-w3\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-warning-3 / .bg-w3\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-w4\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-w1\"],[9],[0,\"$c-warning-4 / .bg-w4\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-w5\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-w1\"],[9],[0,\"$c-warning-5 / .bg-w5\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"error-pallet\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#error-pallet\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Error Pallet\"],[10],[10],[0,\"\\n    \"],[7,\"section\"],[11,\"class\",\"uxs mb\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"uxs-swatch\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-e1\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-error-1 / .bg-e1\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-e2\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-error-2 / .bg-e2\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-e3\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-white\"],[9],[0,\"$c-error-3 / .bg-e3\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-e4\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-e1\"],[9],[0,\"$c-error-4 / .bg-e4\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__item bg-e5\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"uxs-swatch__var c-e1\"],[9],[0,\"$c-error-5 / .bg-e5\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/settings/colors.hbs" } });
});
;define("dummy/templates/docs/settings/typography", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DA04fDbT", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"typography\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Typography\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"UX Sauce comes with a default typography system to present your design and content as clearly and efficiently as possible.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"You can use the base type component \"],[7,\"em\"],[9],[0,\"uxs-type\"],[10],[0,\" to present text around your application. The following page will demonstrate some of the arguments. To see a full list check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-text\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[0,\".\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"type-sizes\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#type-sizes\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Type Sizes\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The default system provides 6 different sizes, from giant to tiny. Medium is defined as \"],[7,\"em\"],[9],[0,\"18px\"],[10],[0,\" and the other sizes are scaled relativly by 1.618 (The golden ratio). You can preview different scales using \"],[7,\"a\"],[11,\"href\",\"https://type-scale.com/\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"Type Scale\"],[10],[0,\".\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"scss-defaults\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#scss-defaults\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"SCSS Defaults\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The following shows the default sizes we define in the uxs settings. All of these can be overwritten in you own app scss.\"],[10],[0,\"\\n\"],[7,\"pre\"],[11,\"class\",\"docs-md__code\"],[9],[7,\"code\"],[9],[7,\"span\"],[11,\"class\",\"hljs-comment\"],[9],[0,\"// Base Sizes\"],[10],[0,\"\\n$type-\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"scale\"],[10],[0,\": \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"1.618\"],[10],[0,\";\\n$type-base: \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"18\"],[10],[0,\"px;\\n\\n\"],[7,\"span\"],[11,\"class\",\"hljs-comment\"],[9],[0,\"// Our default 6 sizes\"],[10],[0,\"\\n$s-giant: \"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"scale\"],[10],[0,\"($type-base, \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"3\"],[10],[0,\", $type-\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"scale\"],[10],[0,\")!\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"default\"],[10],[0,\";\\n$s-huge: \"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"scale\"],[10],[0,\"($type-base, \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"2\"],[10],[0,\", $type-\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"scale\"],[10],[0,\")!\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"default\"],[10],[0,\";\\n$s-large: \"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"scale\"],[10],[0,\"($type-base, \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"1\"],[10],[0,\", $type-\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"scale\"],[10],[0,\")!\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"default\"],[10],[0,\";\\n$s-medium: $type-base!\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"default\"],[10],[0,\";\\n$s-small: \"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"scale\"],[10],[0,\"($type-base, \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"-1\"],[10],[0,\", $type-\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"scale\"],[10],[0,\")!\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"default\"],[10],[0,\";\\n$s-tiny: \"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"scale\"],[10],[0,\"($type-base, \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"-2\"],[10],[0,\", $type-\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"scale\"],[10],[0,\")!\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"default\"],[10],[0,\";\\n\\n\"],[7,\"span\"],[11,\"class\",\"hljs-comment\"],[9],[0,\"// Hash of sizes used thoughout system as modifiers\"],[10],[0,\"\\n$defaultSizes: (\\n  \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"giant\\\"\"],[10],[0,\" : $s-giant,\\n  \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"huge\\\"\"],[10],[0,\"  : $s-huge,\\n  \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"large\\\"\"],[10],[0,\" : $s-large,\\n  \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"medium\\\"\"],[10],[0,\": $s-medium,\\n  \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"small\\\"\"],[10],[0,\" : $s-small,\\n  \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"tiny\\\"\"],[10],[0,\"  : $s-tiny,\\n);\"],[10],[10],[0,\"      \"],[7,\"h3\"],[11,\"id\",\"line-heights\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#line-heights\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Line Heights\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Line hights are set to increments of the baseline size (25px).\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"The default values are shown below:\"],[10],[0,\"\\n\"],[7,\"pre\"],[11,\"class\",\"docs-md__code\"],[9],[7,\"code\"],[9],[7,\"span\"],[11,\"class\",\"hljs-comment\"],[9],[0,\"/** The grid height used thoughout the system **/\"],[10],[0,\"\\n\"],[7,\"span\"],[11,\"class\",\"hljs-meta\"],[9],[7,\"span\"],[11,\"class\",\"hljs-meta-keyword\"],[9],[0,\"$baseline\"],[10],[0,\": 25px!default;\"],[10],[0,\"\\n\"],[7,\"span\"],[11,\"class\",\"hljs-comment\"],[9],[0,\"/* Line heights of defined sizes */\"],[10],[0,\"\\n\"],[7,\"span\"],[11,\"class\",\"hljs-meta\"],[9],[7,\"span\"],[11,\"class\",\"hljs-meta-keyword\"],[9],[0,\"$defaultLineHights\"],[10],[0,\": (\"],[10],[0,\"\\n  \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"giant\\\"\"],[10],[0,\" : \"],[7,\"span\"],[11,\"class\",\"hljs-symbol\"],[9],[0,\"$\"],[10],[0,\"baseline*\"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"4\"],[10],[0,\",\\n  \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"huge\\\"\"],[10],[0,\"  : \"],[7,\"span\"],[11,\"class\",\"hljs-symbol\"],[9],[0,\"$\"],[10],[0,\"baseline*\"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"3\"],[10],[0,\",\\n  \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"large\\\"\"],[10],[0,\" : \"],[7,\"span\"],[11,\"class\",\"hljs-symbol\"],[9],[0,\"$\"],[10],[0,\"baseline*\"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"2\"],[10],[0,\",\\n  \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"medium\\\"\"],[10],[0,\": \"],[7,\"span\"],[11,\"class\",\"hljs-symbol\"],[9],[0,\"$\"],[10],[0,\"baseline*\"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"1\"],[10],[0,\",\\n  \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"small\\\"\"],[10],[0,\" : \"],[7,\"span\"],[11,\"class\",\"hljs-symbol\"],[9],[0,\"$\"],[10],[0,\"baseline*\"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"1\"],[10],[0,\",\\n  \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"tiny\\\"\"],[10],[0,\"  : \"],[7,\"span\"],[11,\"class\",\"hljs-symbol\"],[9],[0,\"$\"],[10],[0,\"baseline*\"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"1\"],[10],[0,\",\\n);\"],[10],[10],[7,\"p\"],[9],[1,[21,\"docs/uxs-text/sizes-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"type-weights\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#type-weights\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Type Weights\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The typography system comes with 3 weights; bold, medium and light. These can also be customised in the scss settings, you can also choose different typefaces for each weight.\"],[10],[0,\"\\n\\n      \"],[7,\"h3\"],[11,\"id\",\"scss-defaults\"],[11,\"class\",\"docs-md__h3\"],[9],[7,\"a\"],[11,\"href\",\"#scss-defaults\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"SCSS Defaults\"],[10],[10],[0,\"\\n    \"],[7,\"pre\"],[11,\"class\",\"docs-md__code\"],[9],[7,\"code\"],[9],[7,\"span\"],[11,\"class\",\"hljs-comment\"],[9],[0,\"/** Typographic weights **/\"],[10],[0,\"\\n$\"],[7,\"span\"],[11,\"class\",\"hljs-class\"],[9],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"type\"],[10],[7,\"span\"],[11,\"class\",\"hljs-title\"],[9],[0,\"-body-family\"],[10],[10],[0,\": \"],[7,\"span\"],[11,\"class\",\"hljs-symbol\"],[9],[0,\"'Lat\"],[10],[0,\"o', sans-serif!\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"default\"],[10],[0,\";\\n$\"],[7,\"span\"],[11,\"class\",\"hljs-class\"],[9],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"type\"],[10],[7,\"span\"],[11,\"class\",\"hljs-title\"],[9],[0,\"-body-weight\"],[10],[10],[0,\": \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"400\"],[10],[0,\"!\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"default\"],[10],[0,\";\\n$\"],[7,\"span\"],[11,\"class\",\"hljs-class\"],[9],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"type\"],[10],[7,\"span\"],[11,\"class\",\"hljs-title\"],[9],[0,\"-light-family\"],[10],[10],[0,\": \"],[7,\"span\"],[11,\"class\",\"hljs-symbol\"],[9],[0,\"'Lat\"],[10],[0,\"o', sans-serif!\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"default\"],[10],[0,\";\\n$\"],[7,\"span\"],[11,\"class\",\"hljs-class\"],[9],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"type\"],[10],[7,\"span\"],[11,\"class\",\"hljs-title\"],[9],[0,\"-light-weight\"],[10],[10],[0,\": \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"300\"],[10],[0,\"!\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"default\"],[10],[0,\";\\n$\"],[7,\"span\"],[11,\"class\",\"hljs-class\"],[9],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"type\"],[10],[7,\"span\"],[11,\"class\",\"hljs-title\"],[9],[0,\"-bold-family\"],[10],[10],[0,\": \"],[7,\"span\"],[11,\"class\",\"hljs-symbol\"],[9],[0,\"'Lat\"],[10],[0,\"o', sans-serif!\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"default\"],[10],[0,\";\\n$\"],[7,\"span\"],[11,\"class\",\"hljs-class\"],[9],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"type\"],[10],[7,\"span\"],[11,\"class\",\"hljs-title\"],[9],[0,\"-bold-weight\"],[10],[10],[0,\": \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"700\"],[10],[0,\"!\"],[7,\"span\"],[11,\"class\",\"hljs-keyword\"],[9],[0,\"default\"],[10],[0,\";\\n\\n\"],[7,\"span\"],[11,\"class\",\"hljs-comment\"],[9],[0,\"/** Hash of sizes used thoughout system as modifiers **/\"],[10],[0,\"\\n$defaultWeights: (\\n  \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"bold\\\"\"],[10],[0,\"  : \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"700\"],[10],[0,\",\\n  \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"normal\\\"\"],[10],[0,\": \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"400\"],[10],[0,\",\\n  \"],[7,\"span\"],[11,\"class\",\"hljs-string\"],[9],[0,\"\\\"light\\\"\"],[10],[0,\" : \"],[7,\"span\"],[11,\"class\",\"hljs-number\"],[9],[0,\"300\"],[10],[0,\",\\n);\"],[10],[10],[7,\"p\"],[9],[1,[21,\"docs/uxs-text/weights-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"text-alignment\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#text-alignment\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Text Alignment\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The \"],[7,\"em\"],[9],[0,\"align\"],[10],[0,\" attribute has 4 options.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-text/align-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"type-styles\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#type-styles\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Type Styles\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Applying a style to the \"],[7,\"em\"],[9],[0,\"uxs-type\"],[10],[0,\" component will apply a background color to the text. The color of the text will be either dark or light, depending on the background color you have selected.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-text/styles-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"type-colors\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#type-colors\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Type Colors\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"To define a specific type text color you can use the \"],[7,\"em\"],[9],[0,\"color\"],[10],[0,\" argument.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-text/colors-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"scss-mixins\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#scss-mixins\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"SCSS Mixins\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"When you need to create your own custom css styles or modifiers you can use the following mixins to keep things consistant.\"],[10],[0,\"\\n\"],[7,\"table\"],[11,\"class\",\"docs-w-full docs-text-left docs-table-collapse\"],[9],[0,\"\\n  \"],[7,\"thead\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"th\"],[11,\"class\",\"docs-text-sm docs-font-semibold docs-text-grey-darker docs-p-2 docs-bg-grey-lightest\"],[9],[0,\"Mixin\"],[10],[0,\"\\n      \"],[7,\"th\"],[11,\"class\",\"docs-text-sm docs-font-semibold docs-text-grey-darker docs-p-2 docs-bg-grey-lightest\"],[9],[0,\"Description\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"tbody\"],[11,\"class\",\"align-baseline\"],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap\"],[9],[0,\"body-type\"],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre\"],[9],[0,\"Set type and weight to default style\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap\"],[9],[0,\"light-body-type\"],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre\"],[9],[0,\"Set type and weight to light style\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap\"],[9],[0,\"bold-body-type\"],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre\"],[9],[0,\"Set type and weight to bold style\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap\"],[9],[0,\"heading-font-size\"],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre\"],[9],[0,\"Sets the size and height of text for headings.\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap\"],[9],[0,\"subheading-font-size\"],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre\"],[9],[0,\"Sets the size and height of text for subheadings.\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap\"],[9],[0,\"content-font-size\"],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre\"],[9],[0,\"Sets the size and height of text for content text.\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap\"],[9],[0,\"detail-font-size\"],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-light docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre\"],[9],[0,\"Sets the size and height of text for detail text.\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap\"],[9],[0,\"type-heading\"],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre\"],[9],[0,\"As well as size and height, also sets weight and style for headings.\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap\"],[9],[0,\"type-subheading\"],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre\"],[9],[0,\"As well as size and height, also sets weight and style for subheadings.\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap\"],[9],[0,\"type-content\"],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre\"],[9],[0,\"As well as size and height, also sets weight and style for content text.\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap\"],[9],[0,\"type-detail\"],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre\"],[9],[0,\"As well as size and height, also sets weight and style for detail text.\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap\"],[9],[0,\"truncate-text\"],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre\"],[9],[0,\"Truncate text to one line. ($boundary:100%)\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap\"],[9],[0,\"link\"],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre\"],[9],[0,\"Style text as a link. ($color:$c-dark, $hover-color:$c-primary)\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-purple-dark docs-whitespace-no-wrap\"],[9],[0,\"label\"],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"docs-p-2 docs-border-t docs-border-grey-lighter docs-font-mono docs-text-xs docs-text-blue-dark docs-whitespace-pre\"],[9],[0,\"Style text as a label.\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/settings/typography.hbs" } });
});
;define("dummy/templates/docs/typography/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Obaf9s/W", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"typography\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Typography\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Common typography components.\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"text\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#text\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Text\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"A basic component to render text with. It defaults to body text, but by using the arguments it can be customized. To see a full list check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-text\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[0,\".\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-text/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"headings\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#headings\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Headings\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"A component to render headings. Using the arguments it can be customized. To see a full list check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-heading\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[0,\".\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-heading/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"subheadings\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#subheadings\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Subheadings\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"A component to render subheadings. Using the arguments it can be customized. To see a full list check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-subheading\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[0,\".\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-subheading/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"content\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#content\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Content\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"A component to render content text. Using the arguments it can be customized. To see a full list check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-content\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[0,\".\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-content/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"details\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#details\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Details\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"A component to render detail text. Using the arguments it can be customized. To see a full list check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-detail\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[0,\".\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-detail/basic-demo\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/align-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/size-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/style-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/weight-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/typography/index.hbs" } });
});
;define("dummy/templates/docs/typography/lists", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fDVUkobd", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"lists\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Lists\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"List typography components\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"ordered-lists\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#ordered-lists\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Ordered Lists\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Ordered lists are used to present items in a sequence. Play around with the argiments in the demo. To see a full list check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-ol\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[0,\".\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-ol/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"unordered-lists\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#unordered-lists\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Unordered Lists\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Unordered lists are used to present items in a list. Play around with the argiments in the demo. To see a full list check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-ul\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[0,\".\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-ul/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"definition-lists\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#definition-lists\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Definition Lists\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Definition lists are used to present a list of definitions. Play around with the argiments in the demo. To see a full list check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-dl\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[0,\".\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-dl/basic-demo\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/align-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/size-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/style-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/weight-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/typography/lists.hbs" } });
});
;define("dummy/templates/docs/typography/tables", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+Bcpwa0c", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-md\"],[9],[7,\"h1\"],[11,\"id\",\"tables\"],[11,\"class\",\"docs-md__h1\"],[9],[0,\"Tables\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Table all the things!\"],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"tabular-data-example\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#tabular-data-example\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Tabular Data Example\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"This example shows using tables to represent tabular data. Rows can be grouped by sections and certain rows highlighted. To see a full list of arguments check out the \"],[7,\"a\"],[11,\"href\",\"/docs/api/components/uxs-table\"],[11,\"class\",\"docs-md__a\"],[9],[0,\"api page\"],[10],[0,\".\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-table/basic-demo\"],false],[10],[0,\"\\n\\n      \"],[7,\"h2\"],[11,\"id\",\"record-tables\"],[11,\"class\",\"docs-md__h2\"],[9],[7,\"a\"],[11,\"href\",\"#record-tables\"],[11,\"class\",\"heading-anchor\"],[9],[0,\"Record Tables\"],[10],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"The record table layout is a more traditional style of table layout, used to represent a collection of resources. Used this in place of a uxs-list where appropriate.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"docs/uxs-table/record-demo\"],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[21,\"args-table/align-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/size-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/style-options\"],false],[0,\"\\n\"],[1,[21,\"args-table/weight-options\"],false],[10],[10]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/docs/typography/tables.hbs" } });
});
;define("dummy/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uAL38rpH", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"docs-header\"],false],[0,\"\\n\\n\"],[1,[27,\"docs-hero\",null,[[\"logo\",\"slimHeading\",\"strongHeading\",\"byline\"],[\"ember\",\"Ember\",\"UXSauce\",\"Common components and patterns for ember apps\"]]],false],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"docs-container docs-md\"],[9],[0,\"\\n  \"],[7,\"section\"],[11,\"class\",\"docs-max-w-md docs-mx-auto docs-pb-8\"],[9],[0,\"\\n    \"],[1,[21,\"home-content\"],false],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"docs-my-16 docs-text-right\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"docs\"],[[\"class\"],[\"docs-bg-grey-darkest hover:docs-bg-black docs-text-white docs-py-2 docs-px-4 docs-no-underline docs-rounded\"]],{\"statements\":[[0,\"        Read the docs →\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/index.hbs" } });
});
;define("dummy/templates/not-found", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TiFYCNwV", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"docs-container\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[0,\"Not found\"],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"This page doesn't exist. \"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"Head home?\"]],\"parameters\":[]},null],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/not-found.hbs" } });
});
;define('dummy/transitions', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    this.transition(this.hasClass('modal-fade-and-drop'), this.use('fadeAndDrop'));

    this.transition(this.hasClass('modal-fade'), this.use('fade', { duration: 150 }));
  };
});
;define('dummy/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _crossFade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _crossFade.default;
    }
  });
});
;define('dummy/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _default) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
;define('dummy/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _explode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _explode.default;
    }
  });
});
;define('dummy/transitions/fade-and-drop', ['exports', 'ember-cli-addon-docs/transitions/fade-and-drop'], function (exports, _fadeAndDrop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fadeAndDrop.default;
    }
  });
});
;define('dummy/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _fade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fade.default;
    }
  });
});
;define('dummy/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _flexGrow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexGrow.default;
    }
  });
});
;define('dummy/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _flyTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flyTo.default;
    }
  });
});
;define('dummy/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _moveOver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moveOver.default;
    }
  });
});
;define('dummy/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _scale) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scale.default;
    }
  });
});
;define('dummy/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _scrollThen) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scrollThen.default;
    }
  });
});
;define('dummy/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _toDown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toDown.default;
    }
  });
});
;define('dummy/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _toLeft) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toLeft.default;
    }
  });
});
;define('dummy/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _toRight) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toRight.default;
    }
  });
});
;define('dummy/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _toUp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toUp.default;
    }
  });
});
;define('dummy/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _wait) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wait.default;
    }
  });
});
;define('dummy/utils/consts/styles', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = ['primary', 'accent', 'warning', 'error', 'dark', 'grey', 'mid', 'light', 'white'];
});
;define('dummy/utils/get-bem-classes', ['exports', 'ember-bem-sauce/utils/get-bem-classes'], function (exports, _getBemClasses) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getBemClasses.default;
    }
  });
});
;define('dummy/utils/get-bem-modifiers', ['exports', 'ember-bem-sauce/utils/get-bem-modifiers'], function (exports, _getBemModifiers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getBemModifiers.default;
    }
  });
});
;define('dummy/utils/get-cmd-key', ['exports', 'ember-keyboard/utils/get-cmd-key'], function (exports, _getCmdKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getCmdKey.default;
    }
  });
});
;define('dummy/utils/listener-name', ['exports', 'ember-keyboard/utils/listener-name'], function (exports, _listenerName) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _listenerName.default;
    }
  });
});
;define('dummy/utils/titleize', ['exports', 'ember-cli-string-helpers/utils/titleize'], function (exports, _titleize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
});
;define('dummy/validators/alias', ['exports', 'ember-cp-validations/validators/alias'], function (exports, _alias) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _alias.default;
    }
  });
});
;define('dummy/validators/belongs-to', ['exports', 'ember-cp-validations/validators/belongs-to'], function (exports, _belongsTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _belongsTo.default;
    }
  });
});
;define('dummy/validators/collection', ['exports', 'ember-cp-validations/validators/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _collection.default;
    }
  });
});
;define('dummy/validators/confirmation', ['exports', 'ember-cp-validations/validators/confirmation'], function (exports, _confirmation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _confirmation.default;
    }
  });
});
;define('dummy/validators/date', ['exports', 'ember-cp-validations/validators/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _date.default;
    }
  });
});
;define('dummy/validators/dependent', ['exports', 'ember-cp-validations/validators/dependent'], function (exports, _dependent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dependent.default;
    }
  });
});
;define('dummy/validators/ds-error', ['exports', 'ember-cp-validations/validators/ds-error'], function (exports, _dsError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dsError.default;
    }
  });
});
;define('dummy/validators/exclusion', ['exports', 'ember-cp-validations/validators/exclusion'], function (exports, _exclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _exclusion.default;
    }
  });
});
;define('dummy/validators/format', ['exports', 'ember-cp-validations/validators/format'], function (exports, _format) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _format.default;
    }
  });
});
;define('dummy/validators/has-many', ['exports', 'ember-cp-validations/validators/has-many'], function (exports, _hasMany) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasMany.default;
    }
  });
});
;define('dummy/validators/inclusion', ['exports', 'ember-cp-validations/validators/inclusion'], function (exports, _inclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inclusion.default;
    }
  });
});
;define('dummy/validators/inline', ['exports', 'ember-cp-validations/validators/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
;define('dummy/validators/length', ['exports', 'ember-cp-validations/validators/length'], function (exports, _length) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _length.default;
    }
  });
});
;define('dummy/validators/messages', ['exports', 'ember-cp-validations/validators/messages'], function (exports, _messages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _messages.default;
    }
  });
});
;define('dummy/validators/number', ['exports', 'ember-cp-validations/validators/number'], function (exports, _number) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _number.default;
    }
  });
});
;define('dummy/validators/presence', ['exports', 'ember-cp-validations/validators/presence'], function (exports, _presence) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _presence.default;
    }
  });
});
;

;define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("dummy/app")["default"].create({});
          }
        
//# sourceMappingURL=dummy.map
