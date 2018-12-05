'use strict';

define('@ember/test-helpers/-utils', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.nextTickPromise = nextTickPromise;
  exports.runDestroyablesFor = runDestroyablesFor;
  exports.isNumeric = isNumeric;
  const nextTick = exports.nextTick = setTimeout;
  const futureTick = exports.futureTick = setTimeout;

  /**
   @private
   @returns {Promise<void>} promise which resolves on the next turn of the event loop
  */
  function nextTickPromise() {
    return new Ember.RSVP.Promise(resolve => {
      nextTick(resolve);
    });
  }

  /**
   Retrieves an array of destroyables from the specified property on the object
   provided, iterates that array invoking each function, then deleting the
   property (clearing the array).
  
   @private
   @param {Object} object an object to search for the destroyable array within
   @param {string} property the property on the object that contains the destroyable array
  */
  function runDestroyablesFor(object, property) {
    let destroyables = object[property];

    if (!destroyables) {
      return;
    }

    for (let i = 0; i < destroyables.length; i++) {
      destroyables[i]();
    }

    delete object[property];
  }

  /**
   Returns whether the passed in string consists only of numeric characters.
  
   @private
   @param {string} n input string
   @returns {boolean} whether the input string consists only of numeric characters
   */
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
});
define('@ember/test-helpers/application', ['exports', '@ember/test-helpers/resolver'], function (exports, _resolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setApplication = setApplication;
  exports.getApplication = getApplication;


  var __application__;

  /**
    Stores the provided application instance so that tests being ran will be aware of the application under test.
  
    - Required by `setupApplicationContext` method.
    - Used by `setupContext` and `setupRenderingContext` when present.
  
    @public
    @param {Ember.Application} application the application that will be tested
  */
  function setApplication(application) {
    __application__ = application;

    if (!(0, _resolver.getResolver)()) {
      let Resolver = application.Resolver;
      let resolver = Resolver.create({ namespace: application });

      (0, _resolver.setResolver)(resolver);
    }
  }

  /**
    Retrieve the application instance stored by `setApplication`.
  
    @public
    @returns {Ember.Application} the previously stored application instance under test
  */
  function getApplication() {
    return __application__;
  }
});
define('@ember/test-helpers/build-owner', ['exports', 'ember-test-helpers/legacy-0-6-x/build-registry'], function (exports, _buildRegistry) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = buildOwner;


  /**
    Creates an "owner" (an object that either _is_ or duck-types like an
    `Ember.ApplicationInstance`) from the provided options.
  
    If `options.application` is present (e.g. setup by an earlier call to
    `setApplication`) an `Ember.ApplicationInstance` is built via
    `application.buildInstance()`.
  
    If `options.application` is not present, we fall back to using
    `options.resolver` instead (setup via `setResolver`). This creates a mock
    "owner" by using a custom created combination of `Ember.Registry`,
    `Ember.Container`, `Ember._ContainerProxyMixin`, and
    `Ember._RegistryProxyMixin`.
  
    @private
    @param {Ember.Application} [application] the Ember.Application to build an instance from
    @param {Ember.Resolver} [resolver] the resolver to use to back a "mock owner"
    @returns {Promise<Ember.ApplicationInstance>} a promise resolving to the generated "owner"
  */
  function buildOwner(application, resolver) {
    if (application) {
      return application.boot().then(app => app.buildInstance().boot());
    }

    if (!resolver) {
      throw new Error('You must set up the ember-test-helpers environment with either `setResolver` or `setApplication` before running any tests.');
    }

    let { owner } = (0, _buildRegistry.default)(resolver);
    return Ember.RSVP.Promise.resolve(owner);
  }
});
define('@ember/test-helpers/dom/-get-element', ['exports', '@ember/test-helpers/dom/get-root-element'], function (exports, _getRootElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getElement;


  /**
    Used internally by the DOM interaction helpers to find one element.
  
    @private
    @param {string|Element} target the element or selector to retrieve
    @returns {Element} the target or selector
  */
  function getElement(target) {
    if (target.nodeType === Node.ELEMENT_NODE || target.nodeType === Node.DOCUMENT_NODE || target instanceof Window) {
      return target;
    } else if (typeof target === 'string') {
      let rootElement = (0, _getRootElement.default)();

      return rootElement.querySelector(target);
    } else {
      throw new Error('Must use an element or a selector string');
    }
  }
});
define('@ember/test-helpers/dom/-get-elements', ['exports', '@ember/test-helpers/dom/get-root-element'], function (exports, _getRootElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getElements;


  /**
    Used internally by the DOM interaction helpers to find multiple elements.
  
    @private
    @param {string} target the selector to retrieve
    @returns {NodeList} the matched elements
  */
  function getElements(target) {
    if (typeof target === 'string') {
      let rootElement = (0, _getRootElement.default)();

      return rootElement.querySelectorAll(target);
    } else {
      throw new Error('Must use a selector string');
    }
  }
});
define('@ember/test-helpers/dom/-is-focusable', ['exports', '@ember/test-helpers/dom/-is-form-control'], function (exports, _isFormControl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isFocusable;


  const FOCUSABLE_TAGS = ['A'];

  /**
    @private
    @param {Element} element the element to check
    @returns {boolean} `true` when the element is focusable, `false` otherwise
  */
  function isFocusable(element) {
    if ((0, _isFormControl.default)(element) || element.isContentEditable || FOCUSABLE_TAGS.indexOf(element.tagName) > -1) {
      return true;
    }

    return element.hasAttribute('tabindex');
  }
});
define('@ember/test-helpers/dom/-is-form-control', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isFormControl;
  const FORM_CONTROL_TAGS = ['INPUT', 'BUTTON', 'SELECT', 'TEXTAREA'];

  /**
    @private
    @param {Element} element the element to check
    @returns {boolean} `true` when the element is a form control, `false` otherwise
  */
  function isFormControl(element) {
    let { tagName, type } = element;

    if (type === 'hidden') {
      return false;
    }

    return FORM_CONTROL_TAGS.indexOf(tagName) > -1;
  }
});
define("@ember/test-helpers/dom/-to-array", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toArray;
  /**
    @private
    @param {NodeList} nodelist the nodelist to convert to an array
    @returns {Array} an array
  */
  function toArray(nodelist) {
    let array = new Array(nodelist.length);
    for (let i = 0; i < nodelist.length; i++) {
      array[i] = nodelist[i];
    }

    return array;
  }
});
define('@ember/test-helpers/dom/blur', ['exports', '@ember/test-helpers/dom/-get-element', '@ember/test-helpers/dom/fire-event', '@ember/test-helpers/settled', '@ember/test-helpers/dom/-is-focusable', '@ember/test-helpers/-utils'], function (exports, _getElement, _fireEvent, _settled, _isFocusable, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.__blur__ = __blur__;
  exports.default = blur;


  /**
    @private
    @param {Element} element the element to trigger events on
  */
  function __blur__(element) {
    let browserIsNotFocused = document.hasFocus && !document.hasFocus();

    // makes `document.activeElement` be `body`.
    // If the browser is focused, it also fires a blur event
    element.blur();

    // Chrome/Firefox does not trigger the `blur` event if the window
    // does not have focus. If the document does not have focus then
    // fire `blur` event via native event.
    if (browserIsNotFocused) {
      (0, _fireEvent.default)(element, 'blur', { bubbles: false });
      (0, _fireEvent.default)(element, 'focusout');
    }
  }

  /**
    Unfocus the specified target.
  
    Sends a number of events intending to simulate a "real" user unfocusing an
    element.
  
    The following events are triggered (in order):
  
    - `blur`
    - `focusout`
  
    The exact listing of events that are triggered may change over time as needed
    to continue to emulate how actual browsers handle unfocusing a given element.
  
    @public
    @param {string|Element} [target=document.activeElement] the element or selector to unfocus
    @return {Promise<void>} resolves when settled
  */
  function blur(target = document.activeElement) {
    return (0, _utils.nextTickPromise)().then(() => {
      let element = (0, _getElement.default)(target);
      if (!element) {
        throw new Error(`Element not found when calling \`blur('${target}')\`.`);
      }

      if (!(0, _isFocusable.default)(element)) {
        throw new Error(`${target} is not focusable`);
      }

      __blur__(element);

      return (0, _settled.default)();
    });
  }
});
define('@ember/test-helpers/dom/click', ['exports', '@ember/test-helpers/dom/-get-element', '@ember/test-helpers/dom/fire-event', '@ember/test-helpers/dom/focus', '@ember/test-helpers/settled', '@ember/test-helpers/dom/-is-focusable', '@ember/test-helpers/-utils', '@ember/test-helpers/dom/-is-form-control'], function (exports, _getElement, _fireEvent, _focus, _settled, _isFocusable, _utils, _isFormControl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.__click__ = __click__;
  exports.default = click;


  /**
    @private
    @param {Element} element the element to click on
    @param {Object} options the options to be merged into the mouse events
  */
  function __click__(element, options) {
    (0, _fireEvent.default)(element, 'mousedown', options);

    if ((0, _isFocusable.default)(element)) {
      (0, _focus.__focus__)(element);
    }

    (0, _fireEvent.default)(element, 'mouseup', options);
    (0, _fireEvent.default)(element, 'click', options);
  }

  /**
    Clicks on the specified target.
  
    Sends a number of events intending to simulate a "real" user clicking on an
    element.
  
    For non-focusable elements the following events are triggered (in order):
  
    - `mousedown`
    - `mouseup`
    - `click`
  
    For focusable (e.g. form control) elements the following events are triggered
    (in order):
  
    - `mousedown`
    - `focus`
    - `focusin`
    - `mouseup`
    - `click`
  
    The exact listing of events that are triggered may change over time as needed
    to continue to emulate how actual browsers handle clicking a given element.
  
    Use the `options` hash to change the parameters of the MouseEvents. 
  
    @public
    @param {string|Element} target the element or selector to click on
    @param {Object} options the options to be merged into the mouse events
    @return {Promise<void>} resolves when settled
  */
  function click(target, options = {}) {
    return (0, _utils.nextTickPromise)().then(() => {
      if (!target) {
        throw new Error('Must pass an element or selector to `click`.');
      }

      let element = (0, _getElement.default)(target);
      if (!element) {
        throw new Error(`Element not found when calling \`click('${target}')\`.`);
      }

      let isDisabledFormControl = (0, _isFormControl.default)(element) && element.disabled === true;

      if (!isDisabledFormControl) {
        __click__(element, options);
      }

      return (0, _settled.default)();
    });
  }
});
define('@ember/test-helpers/dom/double-click', ['exports', '@ember/test-helpers/dom/-get-element', '@ember/test-helpers/dom/fire-event', '@ember/test-helpers/dom/focus', '@ember/test-helpers/settled', '@ember/test-helpers/dom/-is-focusable', '@ember/test-helpers/-utils'], function (exports, _getElement, _fireEvent, _focus, _settled, _isFocusable, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.__doubleClick__ = __doubleClick__;
  exports.default = doubleClick;


  /**
    @private
    @param {Element} element the element to double-click on
    @param {Object} options the options to be merged into the mouse events
  */
  function __doubleClick__(element, options) {
    (0, _fireEvent.default)(element, 'mousedown', options);

    if ((0, _isFocusable.default)(element)) {
      (0, _focus.__focus__)(element);
    }

    (0, _fireEvent.default)(element, 'mouseup', options);
    (0, _fireEvent.default)(element, 'click', options);
    (0, _fireEvent.default)(element, 'mousedown', options);
    (0, _fireEvent.default)(element, 'mouseup', options);
    (0, _fireEvent.default)(element, 'click', options);
    (0, _fireEvent.default)(element, 'dblclick', options);
  }

  /**
    Double-clicks on the specified target.
  
    Sends a number of events intending to simulate a "real" user clicking on an
    element.
  
    For non-focusable elements the following events are triggered (in order):
  
    - `mousedown`
    - `mouseup`
    - `click`
    - `mousedown`
    - `mouseup`
    - `click`
    - `dblclick`
  
    For focusable (e.g. form control) elements the following events are triggered
    (in order):
  
    - `mousedown`
    - `focus`
    - `focusin`
    - `mouseup`
    - `click`
    - `mousedown`
    - `mouseup`
    - `click`
    - `dblclick`
  
    The exact listing of events that are triggered may change over time as needed
    to continue to emulate how actual browsers handle clicking a given element.
  
    Use the `options` hash to change the parameters of the MouseEvents. 
  
    @public
    @param {string|Element} target the element or selector to double-click on
    @param {Object} options the options to be merged into the mouse events
    @return {Promise<void>} resolves when settled
  */
  function doubleClick(target, options = {}) {
    return (0, _utils.nextTickPromise)().then(() => {
      if (!target) {
        throw new Error('Must pass an element or selector to `doubleClick`.');
      }

      let element = (0, _getElement.default)(target);
      if (!element) {
        throw new Error(`Element not found when calling \`doubleClick('${target}')\`.`);
      }

      __doubleClick__(element, options);
      return (0, _settled.default)();
    });
  }
});
define('@ember/test-helpers/dom/fill-in', ['exports', '@ember/test-helpers/dom/-get-element', '@ember/test-helpers/dom/-is-form-control', '@ember/test-helpers/dom/focus', '@ember/test-helpers/settled', '@ember/test-helpers/dom/fire-event', '@ember/test-helpers/-utils'], function (exports, _getElement, _isFormControl, _focus, _settled, _fireEvent, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = fillIn;


  /**
    Fill the provided text into the `value` property (or set `.innerHTML` when
    the target is a content editable element) then trigger `change` and `input`
    events on the specified target.
  
    @public
    @param {string|Element} target the element or selector to enter text into
    @param {string} text the text to fill into the target element
    @return {Promise<void>} resolves when the application is settled
  */
  function fillIn(target, text) {
    return (0, _utils.nextTickPromise)().then(() => {
      if (!target) {
        throw new Error('Must pass an element or selector to `fillIn`.');
      }

      let element = (0, _getElement.default)(target);
      if (!element) {
        throw new Error(`Element not found when calling \`fillIn('${target}')\`.`);
      }
      let isControl = (0, _isFormControl.default)(element);
      if (!isControl && !element.isContentEditable) {
        throw new Error('`fillIn` is only usable on form controls or contenteditable elements.');
      }

      if (typeof text === 'undefined' || text === null) {
        throw new Error('Must provide `text` when calling `fillIn`.');
      }

      (0, _focus.__focus__)(element);

      if (isControl) {
        element.value = text;
      } else {
        element.innerHTML = text;
      }

      (0, _fireEvent.default)(element, 'input');
      (0, _fireEvent.default)(element, 'change');

      return (0, _settled.default)();
    });
  }
});
define('@ember/test-helpers/dom/find-all', ['exports', '@ember/test-helpers/dom/-get-elements', '@ember/test-helpers/dom/-to-array'], function (exports, _getElements, _toArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = find;


  /**
    Find all elements matched by the given selector. Equivalent to calling
    `querySelectorAll()` on the test root element.
  
    @public
    @param {string} selector the selector to search for
    @return {Array} array of matched elements
  */
  function find(selector) {
    if (!selector) {
      throw new Error('Must pass a selector to `findAll`.');
    }

    if (arguments.length > 1) {
      throw new Error('The `findAll` test helper only takes a single argument.');
    }

    return (0, _toArray.default)((0, _getElements.default)(selector));
  }
});
define('@ember/test-helpers/dom/find', ['exports', '@ember/test-helpers/dom/-get-element'], function (exports, _getElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = find;


  /**
    Find the first element matched by the given selector. Equivalent to calling
    `querySelector()` on the test root element.
  
    @public
    @param {string} selector the selector to search for
    @return {Element} matched element or null
  */
  function find(selector) {
    if (!selector) {
      throw new Error('Must pass a selector to `find`.');
    }

    if (arguments.length > 1) {
      throw new Error('The `find` test helper only takes a single argument.');
    }

    return (0, _getElement.default)(selector);
  }
});
define('@ember/test-helpers/dom/fire-event', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = fireEvent;


  // eslint-disable-next-line require-jsdoc
  const MOUSE_EVENT_CONSTRUCTOR = (() => {
    try {
      new MouseEvent('test');
      return true;
    } catch (e) {
      return false;
    }
  })();
  const DEFAULT_EVENT_OPTIONS = { bubbles: true, cancelable: true };
  const KEYBOARD_EVENT_TYPES = exports.KEYBOARD_EVENT_TYPES = Object.freeze(['keydown', 'keypress', 'keyup']);
  const MOUSE_EVENT_TYPES = ['click', 'mousedown', 'mouseup', 'dblclick', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover'];
  const FILE_SELECTION_EVENT_TYPES = ['change'];

  /**
    Internal helper used to build and dispatch events throughout the other DOM helpers.
  
    @private
    @param {Element} element the element to dispatch the event to
    @param {string} eventType the type of event
    @param {Object} [options] additional properties to be set on the event
    @returns {Event} the event that was dispatched
  */
  function fireEvent(element, eventType, options = {}) {
    if (!element) {
      throw new Error('Must pass an element to `fireEvent`');
    }

    let event;
    if (KEYBOARD_EVENT_TYPES.indexOf(eventType) > -1) {
      event = buildKeyboardEvent(eventType, options);
    } else if (MOUSE_EVENT_TYPES.indexOf(eventType) > -1) {
      let rect;
      if (element instanceof Window) {
        rect = element.document.documentElement.getBoundingClientRect();
      } else if (element.nodeType === Node.DOCUMENT_NODE) {
        rect = element.documentElement.getBoundingClientRect();
      } else if (element.nodeType === Node.ELEMENT_NODE) {
        rect = element.getBoundingClientRect();
      } else {
        return;
      }

      let x = rect.left + 1;
      let y = rect.top + 1;
      let simulatedCoordinates = {
        screenX: x + 5, // Those numbers don't really mean anything.
        screenY: y + 95, // They're just to make the screenX/Y be different of clientX/Y..
        clientX: x,
        clientY: y
      };

      event = buildMouseEvent(eventType, Ember.assign(simulatedCoordinates, options));
    } else if (FILE_SELECTION_EVENT_TYPES.indexOf(eventType) > -1 && element.files) {
      event = buildFileEvent(eventType, element, options);
    } else {
      event = buildBasicEvent(eventType, options);
    }

    element.dispatchEvent(event);
    return event;
  }

  // eslint-disable-next-line require-jsdoc
  function buildBasicEvent(type, options = {}) {
    let event = document.createEvent('Events');

    let bubbles = options.bubbles !== undefined ? options.bubbles : true;
    let cancelable = options.cancelable !== undefined ? options.cancelable : true;

    delete options.bubbles;
    delete options.cancelable;

    // bubbles and cancelable are readonly, so they can be
    // set when initializing event
    event.initEvent(type, bubbles, cancelable);
    Ember.assign(event, options);
    return event;
  }

  // eslint-disable-next-line require-jsdoc
  function buildMouseEvent(type, options = {}) {
    let event;
    let eventOpts = Ember.assign({ view: window }, DEFAULT_EVENT_OPTIONS, options);
    if (MOUSE_EVENT_CONSTRUCTOR) {
      event = new MouseEvent(type, eventOpts);
    } else {
      try {
        event = document.createEvent('MouseEvents');
        event.initMouseEvent(type, eventOpts.bubbles, eventOpts.cancelable, window, eventOpts.detail, eventOpts.screenX, eventOpts.screenY, eventOpts.clientX, eventOpts.clientY, eventOpts.ctrlKey, eventOpts.altKey, eventOpts.shiftKey, eventOpts.metaKey, eventOpts.button, eventOpts.relatedTarget);
      } catch (e) {
        event = buildBasicEvent(type, options);
      }
    }

    return event;
  }

  // eslint-disable-next-line require-jsdoc
  function buildKeyboardEvent(type, options = {}) {
    let eventOpts = Ember.assign({}, DEFAULT_EVENT_OPTIONS, options);
    let event, eventMethodName;

    try {
      event = new KeyboardEvent(type, eventOpts);

      // Property definitions are required for B/C for keyboard event usage
      // If this properties are not defined, when listening for key events
      // keyCode/which will be 0. Also, keyCode and which now are string
      // and if app compare it with === with integer key definitions,
      // there will be a fail.
      //
      // https://w3c.github.io/uievents/#interface-keyboardevent
      // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
      Object.defineProperty(event, 'keyCode', {
        get() {
          return parseInt(eventOpts.keyCode);
        }
      });

      Object.defineProperty(event, 'which', {
        get() {
          return parseInt(eventOpts.which);
        }
      });

      return event;
    } catch (e) {
      // left intentionally blank
    }

    try {
      event = document.createEvent('KeyboardEvents');
      eventMethodName = 'initKeyboardEvent';
    } catch (e) {
      // left intentionally blank
    }

    if (!event) {
      try {
        event = document.createEvent('KeyEvents');
        eventMethodName = 'initKeyEvent';
      } catch (e) {
        // left intentionally blank
      }
    }

    if (event) {
      event[eventMethodName](type, eventOpts.bubbles, eventOpts.cancelable, window, eventOpts.ctrlKey, eventOpts.altKey, eventOpts.shiftKey, eventOpts.metaKey, eventOpts.keyCode, eventOpts.charCode);
    } else {
      event = buildBasicEvent(type, options);
    }

    return event;
  }

  // eslint-disable-next-line require-jsdoc
  function buildFileEvent(type, element, files = []) {
    let event = buildBasicEvent(type);

    if (files.length > 0) {
      Object.defineProperty(files, 'item', {
        value(index) {
          return typeof index === 'number' ? this[index] : null;
        }
      });
      Object.defineProperty(element, 'files', {
        value: files,
        configurable: true
      });
    }

    Object.defineProperty(event, 'target', {
      value: element
    });

    return event;
  }
});
define('@ember/test-helpers/dom/focus', ['exports', '@ember/test-helpers/dom/-get-element', '@ember/test-helpers/dom/fire-event', '@ember/test-helpers/settled', '@ember/test-helpers/dom/-is-focusable', '@ember/test-helpers/-utils'], function (exports, _getElement, _fireEvent, _settled, _isFocusable, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.__focus__ = __focus__;
  exports.default = focus;


  /**
    @private
    @param {Element} element the element to trigger events on
  */
  function __focus__(element) {
    let browserIsNotFocused = document.hasFocus && !document.hasFocus();

    // makes `document.activeElement` be `element`. If the browser is focused, it also fires a focus event
    element.focus();

    // Firefox does not trigger the `focusin` event if the window
    // does not have focus. If the document does not have focus then
    // fire `focusin` event as well.
    if (browserIsNotFocused) {
      // if the browser is not focused the previous `el.focus()` didn't fire an event, so we simulate it
      (0, _fireEvent.default)(element, 'focus', {
        bubbles: false
      });

      (0, _fireEvent.default)(element, 'focusin');
    }
  }

  /**
    Focus the specified target.
  
    Sends a number of events intending to simulate a "real" user focusing an
    element.
  
    The following events are triggered (in order):
  
    - `focus`
    - `focusin`
  
    The exact listing of events that are triggered may change over time as needed
    to continue to emulate how actual browsers handle focusing a given element.
  
    @public
    @param {string|Element} target the element or selector to focus
    @return {Promise<void>} resolves when the application is settled
  */
  function focus(target) {
    return (0, _utils.nextTickPromise)().then(() => {
      if (!target) {
        throw new Error('Must pass an element or selector to `focus`.');
      }

      let element = (0, _getElement.default)(target);
      if (!element) {
        throw new Error(`Element not found when calling \`focus('${target}')\`.`);
      }

      if (!(0, _isFocusable.default)(element)) {
        throw new Error(`${target} is not focusable`);
      }

      __focus__(element);

      return (0, _settled.default)();
    });
  }
});
define('@ember/test-helpers/dom/get-root-element', ['exports', '@ember/test-helpers/setup-context'], function (exports, _setupContext) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getRootElement;


  /**
    Get the root element of the application under test (usually `#ember-testing`)
  
    @public
    @returns {Element} the root element
  */
  function getRootElement() {
    let context = (0, _setupContext.getContext)();
    let owner = context && context.owner;

    if (!owner) {
      throw new Error('Must setup rendering context before attempting to interact with elements.');
    }

    let rootElement;
    // When the host app uses `setApplication` (instead of `setResolver`) the owner has
    // a `rootElement` set on it with the element or id to be used
    if (owner && owner._emberTestHelpersMockOwner === undefined) {
      rootElement = owner.rootElement;
    } else {
      rootElement = '#ember-testing';
    }

    if (rootElement.nodeType === Node.ELEMENT_NODE || rootElement.nodeType === Node.DOCUMENT_NODE || rootElement instanceof Window) {
      return rootElement;
    } else if (typeof rootElement === 'string') {
      return document.querySelector(rootElement);
    } else {
      throw new Error('Application.rootElement must be an element or a selector string');
    }
  }
});
define('@ember/test-helpers/dom/tap', ['exports', '@ember/test-helpers/dom/-get-element', '@ember/test-helpers/dom/fire-event', '@ember/test-helpers/dom/click', '@ember/test-helpers/settled', '@ember/test-helpers/-utils'], function (exports, _getElement, _fireEvent, _click, _settled, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = tap;


  /**
    Taps on the specified target.
  
    Sends a number of events intending to simulate a "real" user tapping on an
    element.
  
    For non-focusable elements the following events are triggered (in order):
  
    - `touchstart`
    - `touchend`
    - `mousedown`
    - `mouseup`
    - `click`
  
    For focusable (e.g. form control) elements the following events are triggered
    (in order):
  
    - `touchstart`
    - `touchend`
    - `mousedown`
    - `focus`
    - `focusin`
    - `mouseup`
    - `click`
  
    The exact listing of events that are triggered may change over time as needed
    to continue to emulate how actual browsers handle tapping on a given element.
  
    Use the `options` hash to change the parameters of the tap events. 
  
    @public
    @param {string|Element} target the element or selector to tap on
    @param {Object} options the options to be merged into the touch events
    @return {Promise<void>} resolves when settled
  */
  function tap(target, options = {}) {
    return (0, _utils.nextTickPromise)().then(() => {
      if (!target) {
        throw new Error('Must pass an element or selector to `tap`.');
      }

      let element = (0, _getElement.default)(target);
      if (!element) {
        throw new Error(`Element not found when calling \`tap('${target}')\`.`);
      }

      let touchstartEv = (0, _fireEvent.default)(element, 'touchstart', options);
      let touchendEv = (0, _fireEvent.default)(element, 'touchend', options);

      if (!touchstartEv.defaultPrevented && !touchendEv.defaultPrevented) {
        (0, _click.__click__)(element, options);
      }

      return (0, _settled.default)();
    });
  }
});
define('@ember/test-helpers/dom/trigger-event', ['exports', '@ember/test-helpers/dom/-get-element', '@ember/test-helpers/dom/fire-event', '@ember/test-helpers/settled', '@ember/test-helpers/-utils'], function (exports, _getElement, _fireEvent, _settled, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = triggerEvent;


  /**
   * Triggers an event on the specified target.
   *
   * @public
   * @param {string|Element} target the element or selector to trigger the event on
   * @param {string} eventType the type of event to trigger
   * @param {Object} options additional properties to be set on the event
   * @return {Promise<void>} resolves when the application is settled
   *
   * @example
   * <caption>Using triggerEvent to Upload a file
   * When using triggerEvent to upload a file the `eventType` must be `change` and  you must pass an
   * array of [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) as `options`.</caption>
   *
   * triggerEvent(
   *   'input.fileUpload',
   *   'change',
   *   [new Blob(['Ember Rules!'])]
   * );
   */
  function triggerEvent(target, eventType, options) {
    return (0, _utils.nextTickPromise)().then(() => {
      if (!target) {
        throw new Error('Must pass an element or selector to `triggerEvent`.');
      }

      let element = (0, _getElement.default)(target);
      if (!element) {
        throw new Error(`Element not found when calling \`triggerEvent('${target}', ...)\`.`);
      }

      if (!eventType) {
        throw new Error(`Must provide an \`eventType\` to \`triggerEvent\``);
      }

      (0, _fireEvent.default)(element, eventType, options);

      return (0, _settled.default)();
    });
  }
});
define('@ember/test-helpers/dom/trigger-key-event', ['exports', '@ember/test-helpers/dom/-get-element', '@ember/test-helpers/dom/fire-event', '@ember/test-helpers/settled', '@ember/test-helpers/-utils'], function (exports, _getElement, _fireEvent, _settled, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = triggerKeyEvent;


  const DEFAULT_MODIFIERS = Object.freeze({
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false
  });

  // This is not a comprehensive list, but it is better than nothing.
  const keyFromKeyCode = {
    8: 'Backspace',
    9: 'Tab',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'v',
    88: 'x',
    89: 'y',
    90: 'z',
    91: 'Meta',
    93: 'Meta', // There is two keys that map to meta,
    187: '=',
    189: '-'
  };

  /**
    Calculates the value of KeyboardEvent#key given a keycode and the modifiers.
    Note that this works if the key is pressed in combination with the shift key, but it cannot
    detect if caps lock is enabled.
    @param {number} keycode The keycode of the event.
    @param {object} modifiers The modifiers of the event.
    @returns {string} The key string for the event.
   */
  function keyFromKeyCodeAndModifiers(keycode, modifiers) {
    if (keycode > 64 && keycode < 91) {
      if (modifiers.shiftKey) {
        return String.fromCharCode(keycode);
      } else {
        return String.fromCharCode(keycode).toLocaleLowerCase();
      }
    }
    let key = keyFromKeyCode[keycode];
    if (key) {
      return key;
    }
  }

  /**
   * Infers the keycode from the given key
   * @param {string} key The KeyboardEvent#key string
   * @returns {number} The keycode for the given key
   */
  function keyCodeFromKey(key) {
    let keys = Object.keys(keyFromKeyCode);
    let keyCode = keys.find(keyCode => keyFromKeyCode[keyCode] === key);
    if (!keyCode) {
      keyCode = keys.find(keyCode => keyFromKeyCode[keyCode] === key.toLowerCase());
    }
    return parseInt(keyCode);
  }

  /**
    Triggers a keyboard event of given type in the target element.
    It also requires the developer to provide either a string with the [`key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)
    or the numeric [`keyCode`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) of the pressed key.
    Optionally the user can also provide a POJO with extra modifiers for the event.
  
    @public
    @param {string|Element} target the element or selector to trigger the event on
    @param {'keydown' | 'keyup' | 'keypress'} eventType the type of event to trigger
    @param {number|string} key the `keyCode`(number) or `key`(string) of the event being triggered
    @param {Object} [modifiers] the state of various modifier keys
    @param {boolean} [modifiers.ctrlKey=false] if true the generated event will indicate the control key was pressed during the key event
    @param {boolean} [modifiers.altKey=false] if true the generated event will indicate the alt key was pressed during the key event
    @param {boolean} [modifiers.shiftKey=false] if true the generated event will indicate the shift key was pressed during the key event
    @param {boolean} [modifiers.metaKey=false] if true the generated event will indicate the meta key was pressed during the key event
    @return {Promise<void>} resolves when the application is settled
  */
  function triggerKeyEvent(target, eventType, key, modifiers = DEFAULT_MODIFIERS) {
    return (0, _utils.nextTickPromise)().then(() => {
      if (!target) {
        throw new Error('Must pass an element or selector to `triggerKeyEvent`.');
      }

      let element = (0, _getElement.default)(target);
      if (!element) {
        throw new Error(`Element not found when calling \`triggerKeyEvent('${target}', ...)\`.`);
      }

      if (!eventType) {
        throw new Error(`Must provide an \`eventType\` to \`triggerKeyEvent\``);
      }

      if (_fireEvent.KEYBOARD_EVENT_TYPES.indexOf(eventType) === -1) {
        let validEventTypes = _fireEvent.KEYBOARD_EVENT_TYPES.join(', ');
        throw new Error(`Must provide an \`eventType\` of ${validEventTypes} to \`triggerKeyEvent\` but you passed \`${eventType}\`.`);
      }

      let props;
      if (typeof key === 'number') {
        props = { keyCode: key, which: key, key: keyFromKeyCodeAndModifiers(key, modifiers) };
      } else if (typeof key === 'string' && key.length !== 0) {
        let firstCharacter = key[0];
        if (firstCharacter !== firstCharacter.toUpperCase()) {
          throw new Error(`Must provide a \`key\` to \`triggerKeyEvent\` that starts with an uppercase character but you passed \`${key}\`.`);
        }

        if ((0, _utils.isNumeric)(key) && key.length > 1) {
          throw new Error(`Must provide a numeric \`keyCode\` to \`triggerKeyEvent\` but you passed \`${key}\` as a string.`);
        }

        let keyCode = keyCodeFromKey(key);
        props = { keyCode, which: keyCode, key };
      } else {
        throw new Error(`Must provide a \`key\` or \`keyCode\` to \`triggerKeyEvent\``);
      }

      let options = Ember.assign(props, modifiers);

      (0, _fireEvent.default)(element, eventType, options);

      return (0, _settled.default)();
    });
  }
});
define('@ember/test-helpers/dom/type-in', ['exports', '@ember/test-helpers/-utils', '@ember/test-helpers/settled', '@ember/test-helpers/dom/-get-element', '@ember/test-helpers/dom/-is-form-control', '@ember/test-helpers/dom/focus', '@ember/test-helpers/dom/fire-event'], function (exports, _utils, _settled, _getElement, _isFormControl, _focus, _fireEvent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = typeIn;


  /**
   * Mimics character by character entry into the target `input` or `textarea` element.
   *
   * Allows for simulation of slow entry by passing an optional millisecond delay
   * between key events.
  
   * The major difference between `typeIn` and `fillIn` is that `typeIn` triggers
   * keyboard events as well as `input` and `change`.
   * Typically this looks like `focus` -> `focusin` -> `keydown` -> `keypress` -> `keyup` -> `input` -> `change`
   * per character of the passed text (this may vary on some browsers).
   *
   * @public
   * @param {string|Element} target the element or selector to enter text into
   * @param {string} text the test to fill the element with
   * @param {Object} options {delay: x} (default 50) number of milliseconds to wait per keypress
   * @return {Promise<void>} resolves when the application is settled
   */
  function typeIn(target, text, options = { delay: 50 }) {
    return (0, _utils.nextTickPromise)().then(() => {
      if (!target) {
        throw new Error('Must pass an element or selector to `typeIn`.');
      }

      const element = (0, _getElement.default)(target);
      if (!element) {
        throw new Error(`Element not found when calling \`typeIn('${target}')\``);
      }
      let isControl = (0, _isFormControl.default)(element);
      if (!isControl) {
        throw new Error('`typeIn` is only usable on form controls.');
      }

      if (typeof text === 'undefined' || text === null) {
        throw new Error('Must provide `text` when calling `typeIn`.');
      }

      (0, _focus.__focus__)(element);

      return fillOut(element, text, options.delay).then(() => (0, _fireEvent.default)(element, 'change')).then(_settled.default);
    });
  }

  // eslint-disable-next-line require-jsdoc
  function fillOut(element, text, delay) {
    const inputFunctions = text.split('').map(character => keyEntry(element, character, delay));
    return inputFunctions.reduce((currentPromise, func) => {
      return currentPromise.then(() => delayedExecute(func, delay));
    }, Ember.RSVP.Promise.resolve());
  }

  // eslint-disable-next-line require-jsdoc
  function keyEntry(element, character) {
    const charCode = character.charCodeAt();

    const eventOptions = {
      bubbles: true,
      cancellable: true,
      charCode
    };

    const keyEvents = {
      down: new KeyboardEvent('keydown', eventOptions),
      press: new KeyboardEvent('keypress', eventOptions),
      up: new KeyboardEvent('keyup', eventOptions)
    };

    return function () {
      element.dispatchEvent(keyEvents.down);
      element.dispatchEvent(keyEvents.press);
      element.value = element.value + character;
      (0, _fireEvent.default)(element, 'input');
      element.dispatchEvent(keyEvents.up);
    };
  }

  // eslint-disable-next-line require-jsdoc
  function delayedExecute(func, delay) {
    return new Ember.RSVP.Promise(resolve => {
      setTimeout(resolve, delay);
    }).then(func);
  }
});
define('@ember/test-helpers/dom/wait-for', ['exports', '@ember/test-helpers/wait-until', '@ember/test-helpers/dom/-get-element', '@ember/test-helpers/dom/-get-elements', '@ember/test-helpers/dom/-to-array', '@ember/test-helpers/-utils'], function (exports, _waitUntil, _getElement, _getElements, _toArray, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = waitFor;


  /**
    Used to wait for a particular selector to appear in the DOM. Due to the fact
    that it does not wait for general settledness, this is quite useful for testing
    interim DOM states (e.g. loading states, pending promises, etc).
  
    @param {string} selector the selector to wait for
    @param {Object} [options] the options to be used
    @param {number} [options.timeout=1000] the time to wait (in ms) for a match
    @param {number} [options.count=null] the number of elements that should match the provided selector (null means one or more)
    @return {Promise<Element|Element[]>} resolves when the element(s) appear on the page
  */
  function waitFor(selector, { timeout = 1000, count = null, timeoutMessage } = {}) {
    return (0, _utils.nextTickPromise)().then(() => {
      if (!selector) {
        throw new Error('Must pass a selector to `waitFor`.');
      }
      if (!timeoutMessage) {
        timeoutMessage = `waitFor timed out waiting for selector "${selector}"`;
      }

      let callback;
      if (count !== null) {
        callback = () => {
          let elements = (0, _getElements.default)(selector);
          if (elements.length === count) {
            return (0, _toArray.default)(elements);
          }
        };
      } else {
        callback = () => (0, _getElement.default)(selector);
      }
      return (0, _waitUntil.default)(callback, { timeout, timeoutMessage });
    });
  }
});
define('@ember/test-helpers/global', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = (() => {
    if (typeof self !== 'undefined') {
      return self;
    } else if (typeof window !== 'undefined') {
      return window;
    } else if (typeof global !== 'undefined') {
      return global;
    } else {
      return Function('return this')();
    }
  })();
});
define('@ember/test-helpers/has-ember-version', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = hasEmberVersion;


  /**
    Checks if the currently running Ember version is greater than or equal to the
    specified major and minor version numbers.
  
    @private
    @param {number} major the major version number to compare
    @param {number} minor the minor version number to compare
    @returns {boolean} true if the Ember version is >= MAJOR.MINOR specified, false otherwise
  */
  function hasEmberVersion(major, minor) {
    var numbers = Ember.VERSION.split('-')[0].split('.');
    var actualMajor = parseInt(numbers[0], 10);
    var actualMinor = parseInt(numbers[1], 10);
    return actualMajor > major || actualMajor === major && actualMinor >= minor;
  }
});
define('@ember/test-helpers/index', ['exports', '@ember/test-helpers/resolver', '@ember/test-helpers/application', '@ember/test-helpers/setup-context', '@ember/test-helpers/teardown-context', '@ember/test-helpers/setup-rendering-context', '@ember/test-helpers/teardown-rendering-context', '@ember/test-helpers/setup-application-context', '@ember/test-helpers/teardown-application-context', '@ember/test-helpers/settled', '@ember/test-helpers/wait-until', '@ember/test-helpers/validate-error-handler', '@ember/test-helpers/dom/click', '@ember/test-helpers/dom/double-click', '@ember/test-helpers/dom/tap', '@ember/test-helpers/dom/focus', '@ember/test-helpers/dom/blur', '@ember/test-helpers/dom/trigger-event', '@ember/test-helpers/dom/trigger-key-event', '@ember/test-helpers/dom/fill-in', '@ember/test-helpers/dom/wait-for', '@ember/test-helpers/dom/get-root-element', '@ember/test-helpers/dom/find', '@ember/test-helpers/dom/find-all', '@ember/test-helpers/dom/type-in'], function (exports, _resolver, _application, _setupContext, _teardownContext, _setupRenderingContext, _teardownRenderingContext, _setupApplicationContext, _teardownApplicationContext, _settled, _waitUntil, _validateErrorHandler, _click, _doubleClick, _tap, _focus, _blur, _triggerEvent, _triggerKeyEvent, _fillIn, _waitFor, _getRootElement, _find, _findAll, _typeIn) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'setResolver', {
    enumerable: true,
    get: function () {
      return _resolver.setResolver;
    }
  });
  Object.defineProperty(exports, 'getResolver', {
    enumerable: true,
    get: function () {
      return _resolver.getResolver;
    }
  });
  Object.defineProperty(exports, 'getApplication', {
    enumerable: true,
    get: function () {
      return _application.getApplication;
    }
  });
  Object.defineProperty(exports, 'setApplication', {
    enumerable: true,
    get: function () {
      return _application.setApplication;
    }
  });
  Object.defineProperty(exports, 'setupContext', {
    enumerable: true,
    get: function () {
      return _setupContext.default;
    }
  });
  Object.defineProperty(exports, 'getContext', {
    enumerable: true,
    get: function () {
      return _setupContext.getContext;
    }
  });
  Object.defineProperty(exports, 'setContext', {
    enumerable: true,
    get: function () {
      return _setupContext.setContext;
    }
  });
  Object.defineProperty(exports, 'unsetContext', {
    enumerable: true,
    get: function () {
      return _setupContext.unsetContext;
    }
  });
  Object.defineProperty(exports, 'pauseTest', {
    enumerable: true,
    get: function () {
      return _setupContext.pauseTest;
    }
  });
  Object.defineProperty(exports, 'resumeTest', {
    enumerable: true,
    get: function () {
      return _setupContext.resumeTest;
    }
  });
  Object.defineProperty(exports, 'teardownContext', {
    enumerable: true,
    get: function () {
      return _teardownContext.default;
    }
  });
  Object.defineProperty(exports, 'setupRenderingContext', {
    enumerable: true,
    get: function () {
      return _setupRenderingContext.default;
    }
  });
  Object.defineProperty(exports, 'render', {
    enumerable: true,
    get: function () {
      return _setupRenderingContext.render;
    }
  });
  Object.defineProperty(exports, 'clearRender', {
    enumerable: true,
    get: function () {
      return _setupRenderingContext.clearRender;
    }
  });
  Object.defineProperty(exports, 'teardownRenderingContext', {
    enumerable: true,
    get: function () {
      return _teardownRenderingContext.default;
    }
  });
  Object.defineProperty(exports, 'setupApplicationContext', {
    enumerable: true,
    get: function () {
      return _setupApplicationContext.default;
    }
  });
  Object.defineProperty(exports, 'visit', {
    enumerable: true,
    get: function () {
      return _setupApplicationContext.visit;
    }
  });
  Object.defineProperty(exports, 'currentRouteName', {
    enumerable: true,
    get: function () {
      return _setupApplicationContext.currentRouteName;
    }
  });
  Object.defineProperty(exports, 'currentURL', {
    enumerable: true,
    get: function () {
      return _setupApplicationContext.currentURL;
    }
  });
  Object.defineProperty(exports, 'teardownApplicationContext', {
    enumerable: true,
    get: function () {
      return _teardownApplicationContext.default;
    }
  });
  Object.defineProperty(exports, 'settled', {
    enumerable: true,
    get: function () {
      return _settled.default;
    }
  });
  Object.defineProperty(exports, 'isSettled', {
    enumerable: true,
    get: function () {
      return _settled.isSettled;
    }
  });
  Object.defineProperty(exports, 'getSettledState', {
    enumerable: true,
    get: function () {
      return _settled.getSettledState;
    }
  });
  Object.defineProperty(exports, 'waitUntil', {
    enumerable: true,
    get: function () {
      return _waitUntil.default;
    }
  });
  Object.defineProperty(exports, 'validateErrorHandler', {
    enumerable: true,
    get: function () {
      return _validateErrorHandler.default;
    }
  });
  Object.defineProperty(exports, 'click', {
    enumerable: true,
    get: function () {
      return _click.default;
    }
  });
  Object.defineProperty(exports, 'doubleClick', {
    enumerable: true,
    get: function () {
      return _doubleClick.default;
    }
  });
  Object.defineProperty(exports, 'tap', {
    enumerable: true,
    get: function () {
      return _tap.default;
    }
  });
  Object.defineProperty(exports, 'focus', {
    enumerable: true,
    get: function () {
      return _focus.default;
    }
  });
  Object.defineProperty(exports, 'blur', {
    enumerable: true,
    get: function () {
      return _blur.default;
    }
  });
  Object.defineProperty(exports, 'triggerEvent', {
    enumerable: true,
    get: function () {
      return _triggerEvent.default;
    }
  });
  Object.defineProperty(exports, 'triggerKeyEvent', {
    enumerable: true,
    get: function () {
      return _triggerKeyEvent.default;
    }
  });
  Object.defineProperty(exports, 'fillIn', {
    enumerable: true,
    get: function () {
      return _fillIn.default;
    }
  });
  Object.defineProperty(exports, 'waitFor', {
    enumerable: true,
    get: function () {
      return _waitFor.default;
    }
  });
  Object.defineProperty(exports, 'getRootElement', {
    enumerable: true,
    get: function () {
      return _getRootElement.default;
    }
  });
  Object.defineProperty(exports, 'find', {
    enumerable: true,
    get: function () {
      return _find.default;
    }
  });
  Object.defineProperty(exports, 'findAll', {
    enumerable: true,
    get: function () {
      return _findAll.default;
    }
  });
  Object.defineProperty(exports, 'typeIn', {
    enumerable: true,
    get: function () {
      return _typeIn.default;
    }
  });
});
define("@ember/test-helpers/resolver", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setResolver = setResolver;
  exports.getResolver = getResolver;
  var __resolver__;

  /**
    Stores the provided resolver instance so that tests being ran can resolve
    objects in the same way as a normal application.
  
    Used by `setupContext` and `setupRenderingContext` as a fallback when `setApplication` was _not_ used.
  
    @public
    @param {Ember.Resolver} resolver the resolver to be used for testing
  */
  function setResolver(resolver) {
    __resolver__ = resolver;
  }

  /**
    Retrieve the resolver instance stored by `setResolver`.
  
    @public
    @returns {Ember.Resolver} the previously stored resolver
  */
  function getResolver() {
    return __resolver__;
  }
});
define('@ember/test-helpers/settled', ['exports', '@ember/test-helpers/-utils', '@ember/test-helpers/wait-until'], function (exports, _utils, _waitUntil) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports._teardownAJAXHooks = _teardownAJAXHooks;
  exports._setupAJAXHooks = _setupAJAXHooks;
  exports.getSettledState = getSettledState;
  exports.isSettled = isSettled;
  exports.default = settled;


  // Ember internally tracks AJAX requests in the same way that we do here for
  // legacy style "acceptance" tests using the `ember-testing.js` asset provided
  // by emberjs/ember.js itself. When `@ember/test-helpers`'s `settled` utility
  // is used in a legacy acceptance test context any pending AJAX requests are
  // not properly considered during the `isSettled` check below.
  //
  // This utilizes a local utility method present in Ember since around 2.8.0 to
  // properly consider pending AJAX requests done within legacy acceptance tests.
  const _internalPendingRequests = (() => {
    if (Ember.__loader.registry['ember-testing/test/pending_requests']) {
      // Ember <= 3.1
      return Ember.__loader.require('ember-testing/test/pending_requests').pendingRequests;
    } else if (Ember.__loader.registry['ember-testing/lib/test/pending_requests']) {
      // Ember >= 3.2
      return Ember.__loader.require('ember-testing/lib/test/pending_requests').pendingRequests;
    }

    return () => 0;
  })();

  let requests;

  /**
    @private
    @returns {number} the count of pending requests
  */
  function pendingRequests() {
    let localRequestsPending = requests !== undefined ? requests.length : 0;
    let internalRequestsPending = _internalPendingRequests();

    return localRequestsPending + internalRequestsPending;
  }

  /**
    @private
    @param {Event} event (unused)
    @param {XMLHTTPRequest} xhr the XHR that has initiated a request
  */
  function incrementAjaxPendingRequests(event, xhr) {
    requests.push(xhr);
  }

  /**
    @private
    @param {Event} event (unused)
    @param {XMLHTTPRequest} xhr the XHR that has initiated a request
  */
  function decrementAjaxPendingRequests(event, xhr) {
    // In most Ember versions to date (current version is 2.16) RSVP promises are
    // configured to flush in the actions queue of the Ember run loop, however it
    // is possible that in the future this changes to use "true" micro-task
    // queues.
    //
    // The entire point here, is that _whenever_ promises are resolved will be
    // before the next run of the JS event loop. Then in the next event loop this
    // counter will decrement. In the specific case of AJAX, this means that any
    // promises chained off of `$.ajax` will properly have their `.then` called
    // _before_ this is decremented (and testing continues)
    (0, _utils.nextTick)(() => {
      for (let i = 0; i < requests.length; i++) {
        if (xhr === requests[i]) {
          requests.splice(i, 1);
        }
      }
    }, 0);
  }

  /**
    Clears listeners that were previously setup for `ajaxSend` and `ajaxComplete`.
  
    @private
  */
  function _teardownAJAXHooks() {
    // jQuery will not invoke `ajaxComplete` if
    //    1. `transport.send` throws synchronously and
    //    2. it has an `error` option which also throws synchronously

    // We can no longer handle any remaining requests
    requests = [];

    if (!Ember.$) {
      return;
    }

    Ember.$(document).off('ajaxSend', incrementAjaxPendingRequests);
    Ember.$(document).off('ajaxComplete', decrementAjaxPendingRequests);
  }

  /**
    Sets up listeners for `ajaxSend` and `ajaxComplete`.
  
    @private
  */
  function _setupAJAXHooks() {
    requests = [];

    if (!Ember.$) {
      return;
    }

    Ember.$(document).on('ajaxSend', incrementAjaxPendingRequests);
    Ember.$(document).on('ajaxComplete', decrementAjaxPendingRequests);
  }

  let _internalCheckWaiters;
  if (Ember.__loader.registry['ember-testing/test/waiters']) {
    // Ember <= 3.1
    _internalCheckWaiters = Ember.__loader.require('ember-testing/test/waiters').checkWaiters;
  } else if (Ember.__loader.registry['ember-testing/lib/test/waiters']) {
    // Ember >= 3.2
    _internalCheckWaiters = Ember.__loader.require('ember-testing/lib/test/waiters').checkWaiters;
  }

  /**
    @private
    @returns {boolean} true if waiters are still pending
  */
  function checkWaiters() {
    if (_internalCheckWaiters) {
      return _internalCheckWaiters();
    } else if (Ember.Test.waiters) {
      if (Ember.Test.waiters.any(([context, callback]) => !callback.call(context))) {
        return true;
      }
    }

    return false;
  }

  /**
    Check various settledness metrics, and return an object with the following properties:
  
    - `hasRunLoop` - Checks if a run-loop has been started. If it has, this will
      be `true` otherwise it will be `false`.
    - `hasPendingTimers` - Checks if there are scheduled timers in the run-loop.
      These pending timers are primarily registered by `Ember.run.schedule`. If
      there are pending timers, this will be `true`, otherwise `false`.
    - `hasPendingWaiters` - Checks if any registered test waiters are still
      pending (e.g. the waiter returns `true`). If there are pending waiters,
      this will be `true`, otherwise `false`.
    - `hasPendingRequests` - Checks if there are pending AJAX requests (based on
      `ajaxSend` / `ajaxComplete` events triggered by `jQuery.ajax`). If there
      are pending requests, this will be `true`, otherwise `false`.
    - `pendingRequestCount` - The count of pending AJAX requests.
  
    @public
    @returns {Object} object with properties for each of the metrics used to determine settledness
  */
  function getSettledState() {
    let pendingRequestCount = pendingRequests();

    return {
      hasPendingTimers: Boolean(Ember.run.hasScheduledTimers()),
      hasRunLoop: Boolean(Ember.run.currentRunLoop),
      hasPendingWaiters: checkWaiters(),
      hasPendingRequests: pendingRequestCount > 0,
      pendingRequestCount
    };
  }

  /**
    Checks various settledness metrics (via `getSettledState()`) to determine if things are settled or not.
  
    Settled generally means that there are no pending timers, no pending waiters,
    no pending AJAX requests, and no current run loop. However, new settledness
    metrics may be added and used as they become available.
  
    @public
    @returns {boolean} `true` if settled, `false` otherwise
  */
  function isSettled() {
    let { hasPendingTimers, hasRunLoop, hasPendingRequests, hasPendingWaiters } = getSettledState();

    if (hasPendingTimers || hasRunLoop || hasPendingRequests || hasPendingWaiters) {
      return false;
    }

    return true;
  }

  /**
    Returns a promise that resolves when in a settled state (see `isSettled` for
    a definition of "settled state").
  
    @public
    @returns {Promise<void>} resolves when settled
  */
  function settled() {
    return (0, _waitUntil.default)(isSettled, { timeout: Infinity });
  }
});
define('@ember/test-helpers/setup-application-context', ['exports', '@ember/test-helpers/-utils', '@ember/test-helpers/setup-context', '@ember/test-helpers/has-ember-version', '@ember/test-helpers/settled'], function (exports, _utils, _setupContext, _hasEmberVersion, _settled) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.visit = visit;
  exports.currentRouteName = currentRouteName;
  exports.currentURL = currentURL;
  exports.default = setupApplicationContext;


  /**
    Navigate the application to the provided URL.
  
    @public
    @returns {Promise<void>} resolves when settled
  */
  function visit() {
    let context = (0, _setupContext.getContext)();
    let { owner } = context;

    return (0, _utils.nextTickPromise)().then(() => {
      return owner.visit(...arguments);
    }).then(() => {
      if (EmberENV._APPLICATION_TEMPLATE_WRAPPER !== false) {
        context.element = document.querySelector('#ember-testing > .ember-view');
      } else {
        context.element = document.querySelector('#ember-testing');
      }
    }).then(_settled.default);
  }

  /**
    @public
    @returns {string} the currently active route name
  */
  /* globals EmberENV */
  function currentRouteName() {
    let { owner } = (0, _setupContext.getContext)();
    let router = owner.lookup('router:main');
    return Ember.get(router, 'currentRouteName');
  }

  const HAS_CURRENT_URL_ON_ROUTER = (0, _hasEmberVersion.default)(2, 13);

  /**
    @public
    @returns {string} the applications current url
  */
  function currentURL() {
    let { owner } = (0, _setupContext.getContext)();
    let router = owner.lookup('router:main');

    if (HAS_CURRENT_URL_ON_ROUTER) {
      return Ember.get(router, 'currentURL');
    } else {
      return Ember.get(router, 'location').getURL();
    }
  }

  /**
    Used by test framework addons to setup the provided context for working with
    an application (e.g. routing).
  
    `setupContext` must have been run on the provided context prior to calling
    `setupApplicationContext`.
  
    Sets up the basic framework used by application tests.
  
    @public
    @param {Object} context the context to setup
    @returns {Promise<Object>} resolves with the context that was setup
  */
  function setupApplicationContext() {
    return (0, _utils.nextTickPromise)();
  }
});
define('@ember/test-helpers/setup-context', ['exports', '@ember/test-helpers/build-owner', '@ember/test-helpers/settled', '@ember/test-helpers/global', '@ember/test-helpers/resolver', '@ember/test-helpers/application', '@ember/test-helpers/-utils'], function (exports, _buildOwner, _settled, _global, _resolver, _application, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CLEANUP = undefined;
  exports.setContext = setContext;
  exports.getContext = getContext;
  exports.unsetContext = unsetContext;
  exports.pauseTest = pauseTest;
  exports.resumeTest = resumeTest;

  exports.default = function (context, options = {}) {
    Ember.testing = true;
    setContext(context);

    let contextGuid = Ember.guidFor(context);
    CLEANUP[contextGuid] = [];

    return (0, _utils.nextTickPromise)().then(() => {
      let application = (0, _application.getApplication)();
      if (application) {
        return application.boot();
      }
    }).then(() => {
      let testElementContainer = document.getElementById('ember-testing-container');
      let fixtureResetValue = testElementContainer.innerHTML;

      // push this into the final cleanup bucket, to be ran _after_ the owner
      // is destroyed and settled (e.g. flushed run loops, etc)
      CLEANUP[contextGuid].push(() => {
        testElementContainer.innerHTML = fixtureResetValue;
      });

      let { resolver } = options;

      // This handles precendence, specifying a specific option of
      // resolver always trumps whatever is auto-detected, then we fallback to
      // the suite-wide registrations
      //
      // At some later time this can be extended to support specifying a custom
      // engine or application...
      if (resolver) {
        return (0, _buildOwner.default)(null, resolver);
      }

      return (0, _buildOwner.default)((0, _application.getApplication)(), (0, _resolver.getResolver)());
    }).then(owner => {
      Object.defineProperty(context, 'owner', {
        configurable: true,
        enumerable: true,
        value: owner,
        writable: false
      });

      Object.defineProperty(context, 'set', {
        configurable: true,
        enumerable: true,
        value(key, value) {
          let ret = Ember.run(function () {
            return Ember.set(context, key, value);
          });

          return ret;
        },
        writable: false
      });

      Object.defineProperty(context, 'setProperties', {
        configurable: true,
        enumerable: true,
        value(hash) {
          let ret = Ember.run(function () {
            return Ember.setProperties(context, hash);
          });

          return ret;
        },
        writable: false
      });

      Object.defineProperty(context, 'get', {
        configurable: true,
        enumerable: true,
        value(key) {
          return Ember.get(context, key);
        },
        writable: false
      });

      Object.defineProperty(context, 'getProperties', {
        configurable: true,
        enumerable: true,
        value(...args) {
          return Ember.getProperties(context, args);
        },
        writable: false
      });

      let resume;
      context.resumeTest = function resumeTest() {
        (true && !(resume) && Ember.assert('Testing has not been paused. There is nothing to resume.', resume));

        resume();
        _global.default.resumeTest = resume = undefined;
      };

      context.pauseTest = function pauseTest() {
        console.info('Testing paused. Use `resumeTest()` to continue.'); // eslint-disable-line no-console

        return new Ember.RSVP.Promise(resolve => {
          resume = resolve;
          _global.default.resumeTest = resumeTest;
        }, 'TestAdapter paused promise');
      };

      (0, _settled._setupAJAXHooks)();

      return context;
    });
  };

  let __test_context__;

  /**
    Stores the provided context as the "global testing context".
  
    Generally setup automatically by `setupContext`.
  
    @public
    @param {Object} context the context to use
  */
  function setContext(context) {
    __test_context__ = context;
  }

  /**
    Retrive the "global testing context" as stored by `setContext`.
  
    @public
    @returns {Object} the previously stored testing context
  */
  function getContext() {
    return __test_context__;
  }

  /**
    Clear the "global testing context".
  
    Generally invoked from `teardownContext`.
  
    @public
  */
  function unsetContext() {
    __test_context__ = undefined;
  }

  /**
   * Returns a promise to be used to pauses the current test (due to being
   * returned from the test itself).  This is useful for debugging while testing
   * or for test-driving.  It allows you to inspect the state of your application
   * at any point.
   *
   * The test framework wrapper (e.g. `ember-qunit` or `ember-mocha`) should
   * ensure that when `pauseTest()` is used, any framework specific test timeouts
   * are disabled.
   *
   * @public
   * @returns {Promise<void>} resolves _only_ when `resumeTest()` is invoked
   * @example <caption>Usage via ember-qunit</caption>
   *
   * import { setupRenderingTest } from 'ember-qunit';
   * import { render, click, pauseTest } from '@ember/test-helpers';
   *
   *
   * module('awesome-sauce', function(hooks) {
   *   setupRenderingTest(hooks);
   *
   *   test('does something awesome', async function(assert) {
   *     await render(hbs`{{awesome-sauce}}`);
   *
   *     // added here to visualize / interact with the DOM prior
   *     // to the interaction below
   *     await pauseTest();
   *
   *     click('.some-selector');
   *
   *     assert.equal(this.element.textContent, 'this sauce is awesome!');
   *   });
   * });
   */
  function pauseTest() {
    let context = getContext();

    if (!context || typeof context.pauseTest !== 'function') {
      throw new Error('Cannot call `pauseTest` without having first called `setupTest` or `setupRenderingTest`.');
    }

    return context.pauseTest();
  }

  /**
    Resumes a test previously paused by `await pauseTest()`.
  
    @public
  */
  function resumeTest() {
    let context = getContext();

    if (!context || typeof context.resumeTest !== 'function') {
      throw new Error('Cannot call `resumeTest` without having first called `setupTest` or `setupRenderingTest`.');
    }

    context.resumeTest();
  }

  const CLEANUP = exports.CLEANUP = Object.create(null);

  /**
    Used by test framework addons to setup the provided context for testing.
  
    Responsible for:
  
    - sets the "global testing context" to the provided context (`setContext`)
    - create an owner object and set it on the provided context (e.g. `this.owner`)
    - setup `this.set`, `this.setProperties`, `this.get`, and `this.getProperties` to the provided context
    - setting up AJAX listeners
    - setting up `pauseTest` (also available as `this.pauseTest()`) and `resumeTest` helpers
  
    @public
    @param {Object} context the context to setup
    @param {Object} [options] options used to override defaults
    @param {Resolver} [options.resolver] a resolver to use for customizing normal resolution
    @returns {Promise<Object>} resolves with the context that was setup
  */
});
define('@ember/test-helpers/setup-rendering-context', ['exports', '@ember/test-helpers/global', '@ember/test-helpers/setup-context', '@ember/test-helpers/-utils', '@ember/test-helpers/settled', '@ember/test-helpers/dom/get-root-element'], function (exports, _global, _setupContext, _utils, _settled, _getRootElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RENDERING_CLEANUP = undefined;
  exports.render = render;
  exports.clearRender = clearRender;
  exports.default = setupRenderingContext;
  /* globals EmberENV */
  const RENDERING_CLEANUP = exports.RENDERING_CLEANUP = Object.create(null);
  const OUTLET_TEMPLATE = Ember.HTMLBars.template({
    "id": "em3WhaQV",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {}
  });
  const EMPTY_TEMPLATE = Ember.HTMLBars.template({
    "id": "xOcW61lH",
    "block": "{\"symbols\":[],\"statements\":[],\"hasEval\":false}",
    "meta": {}
  });

  /**
    @private
    @param {Ember.ApplicationInstance} owner the current owner instance
    @returns {Template} a template representing {{outlet}}
  */
  function lookupOutletTemplate(owner) {
    let OutletTemplate = owner.lookup('template:-outlet');
    if (!OutletTemplate) {
      owner.register('template:-outlet', OUTLET_TEMPLATE);
      OutletTemplate = owner.lookup('template:-outlet');
    }

    return OutletTemplate;
  }

  /**
    @private
    @param {string} [selector] the selector to search for relative to element
    @returns {jQuery} a jQuery object representing the selector (or element itself if no selector)
  */
  function jQuerySelector(selector) {
    let { element } = (0, _setupContext.getContext)();

    // emulates Ember internal behavor of `this.$` in a component
    // https://github.com/emberjs/ember.js/blob/v2.5.1/packages/ember-views/lib/views/states/has_element.js#L18
    return selector ? _global.default.jQuery(selector, element) : _global.default.jQuery(element);
  }

  let templateId = 0;
  /**
    Renders the provided template and appends it to the DOM.
  
    @public
    @param {CompiledTemplate} template the template to render
    @returns {Promise<void>} resolves when settled
  */
  function render(template) {
    let context = (0, _setupContext.getContext)();

    if (!template) {
      throw new Error('you must pass a template to `render()`');
    }

    return (0, _utils.nextTickPromise)().then(() => {
      let { owner } = context;

      let toplevelView = owner.lookup('-top-level-view:main');
      let OutletTemplate = lookupOutletTemplate(owner);
      templateId += 1;
      let templateFullName = `template:-undertest-${templateId}`;
      owner.register(templateFullName, template);

      let outletState = {
        render: {
          owner,
          into: undefined,
          outlet: 'main',
          name: 'application',
          controller: undefined,
          ViewClass: undefined,
          template: OutletTemplate
        },

        outlets: {
          main: {
            render: {
              owner,
              into: undefined,
              outlet: 'main',
              name: 'index',
              controller: context,
              ViewClass: undefined,
              template: owner.lookup(templateFullName),
              outlets: {}
            },
            outlets: {}
          }
        }
      };
      toplevelView.setOutletState(outletState);

      // returning settled here because the actual rendering does not happen until
      // the renderer detects it is dirty (which happens on backburner's end
      // hook), see the following implementation details:
      //
      // * [view:outlet](https://github.com/emberjs/ember.js/blob/f94a4b6aef5b41b96ef2e481f35e07608df01440/packages/ember-glimmer/lib/views/outlet.js#L129-L145) manually dirties its own tag upon `setOutletState`
      // * [backburner's custom end hook](https://github.com/emberjs/ember.js/blob/f94a4b6aef5b41b96ef2e481f35e07608df01440/packages/ember-glimmer/lib/renderer.js#L145-L159) detects that the current revision of the root is no longer the latest, and triggers a new rendering transaction
      return (0, _settled.default)();
    });
  }

  /**
    Clears any templates previously rendered. This is commonly used for
    confirming behavior that is triggered by teardown (e.g.
    `willDestroyElement`).
  
    @public
    @returns {Promise<void>} resolves when settled
  */
  function clearRender() {
    let context = (0, _setupContext.getContext)();

    if (!context || typeof context.clearRender !== 'function') {
      throw new Error('Cannot call `clearRender` without having first called `setupRenderingContext`.');
    }

    return render(EMPTY_TEMPLATE);
  }

  /**
    Used by test framework addons to setup the provided context for rendering.
  
    `setupContext` must have been ran on the provided context
    prior to calling `setupRenderingContext`.
  
    Responsible for:
  
    - Setup the basic framework used for rendering by the
      `render` helper.
    - Ensuring the event dispatcher is properly setup.
    - Setting `this.element` to the root element of the testing
      container (things rendered via `render` will go _into_ this
      element).
  
    @public
    @param {Object} context the context to setup for rendering
    @returns {Promise<Object>} resolves with the context that was setup
  */
  function setupRenderingContext(context) {
    let contextGuid = Ember.guidFor(context);
    RENDERING_CLEANUP[contextGuid] = [];

    return (0, _utils.nextTickPromise)().then(() => {
      let { owner } = context;

      // these methods being placed on the context itself will be deprecated in
      // a future version (no giant rush) to remove some confusion about which
      // is the "right" way to things...
      Object.defineProperty(context, 'render', {
        configurable: true,
        enumerable: true,
        value: render,
        writable: false
      });
      Object.defineProperty(context, 'clearRender', {
        configurable: true,
        enumerable: true,
        value: clearRender,
        writable: false
      });

      if (_global.default.jQuery) {
        Object.defineProperty(context, '$', {
          configurable: true,
          enumerable: true,
          value: jQuerySelector,
          writable: false
        });
      }

      // When the host app uses `setApplication` (instead of `setResolver`) the event dispatcher has
      // already been setup via `applicationInstance.boot()` in `./build-owner`. If using
      // `setResolver` (instead of `setApplication`) a "mock owner" is created by extending
      // `Ember._ContainerProxyMixin` and `Ember._RegistryProxyMixin` in this scenario we need to
      // manually start the event dispatcher.
      if (owner._emberTestHelpersMockOwner) {
        let dispatcher = owner.lookup('event_dispatcher:main') || Ember.EventDispatcher.create();
        dispatcher.setup({}, '#ember-testing');
      }

      let OutletView = owner.factoryFor ? owner.factoryFor('view:-outlet') : owner._lookupFactory('view:-outlet');
      let toplevelView = OutletView.create();

      owner.register('-top-level-view:main', {
        create() {
          return toplevelView;
        }
      });

      // initially render a simple empty template
      return render(EMPTY_TEMPLATE).then(() => {
        Ember.run(toplevelView, 'appendTo', (0, _getRootElement.default)());

        return (0, _settled.default)();
      });
    }).then(() => {
      Object.defineProperty(context, 'element', {
        configurable: true,
        enumerable: true,
        // ensure the element is based on the wrapping toplevel view
        // Ember still wraps the main application template with a
        // normal tagged view
        //
        // In older Ember versions (2.4) the element itself is not stable,
        // and therefore we cannot update the `this.element` until after the
        // rendering is completed
        value: EmberENV._APPLICATION_TEMPLATE_WRAPPER !== false ? (0, _getRootElement.default)().querySelector('.ember-view') : (0, _getRootElement.default)(),

        writable: false
      });

      return context;
    });
  }
});
define('@ember/test-helpers/teardown-application-context', ['exports', '@ember/test-helpers/settled'], function (exports, _settled) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    return (0, _settled.default)();
  };
});
define('@ember/test-helpers/teardown-context', ['exports', '@ember/test-helpers/settled', '@ember/test-helpers/setup-context', '@ember/test-helpers/-utils'], function (exports, _settled, _setupContext, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = teardownContext;


  /**
    Used by test framework addons to tear down the provided context after testing is completed.
  
    Responsible for:
  
    - un-setting the "global testing context" (`unsetContext`)
    - destroy the contexts owner object
    - remove AJAX listeners
  
    @public
    @param {Object} context the context to setup
    @returns {Promise<void>} resolves when settled
  */
  function teardownContext(context) {
    return (0, _utils.nextTickPromise)().then(() => {
      let { owner } = context;

      (0, _settled._teardownAJAXHooks)();

      Ember.run(owner, 'destroy');
      Ember.testing = false;

      (0, _setupContext.unsetContext)();

      return (0, _settled.default)();
    }).finally(() => {
      let contextGuid = Ember.guidFor(context);

      (0, _utils.runDestroyablesFor)(_setupContext.CLEANUP, contextGuid);

      return (0, _settled.default)();
    });
  }
});
define('@ember/test-helpers/teardown-rendering-context', ['exports', '@ember/test-helpers/setup-rendering-context', '@ember/test-helpers/-utils', '@ember/test-helpers/settled'], function (exports, _setupRenderingContext, _utils, _settled) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = teardownRenderingContext;


  /**
    Used by test framework addons to tear down the provided context after testing is completed.
  
    Responsible for:
  
    - resetting the `ember-testing-container` to its original state (the value
      when `setupRenderingContext` was called).
  
    @public
    @param {Object} context the context to setup
    @returns {Promise<void>} resolves when settled
  */
  function teardownRenderingContext(context) {
    return (0, _utils.nextTickPromise)().then(() => {
      let contextGuid = Ember.guidFor(context);

      (0, _utils.runDestroyablesFor)(_setupRenderingContext.RENDERING_CLEANUP, contextGuid);

      return (0, _settled.default)();
    });
  }
});
define('@ember/test-helpers/validate-error-handler', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = validateErrorHandler;

  const VALID = Object.freeze({ isValid: true, message: null });
  const INVALID = Object.freeze({
    isValid: false,
    message: 'error handler should have re-thrown the provided error'
  });

  /**
   * Validate the provided error handler to confirm that it properly re-throws
   * errors when `Ember.testing` is true.
   *
   * This is intended to be used by test framework hosts (or other libraries) to
   * ensure that `Ember.onerror` is properly configured. Without a check like
   * this, `Ember.onerror` could _easily_ swallow all errors and make it _seem_
   * like everything is just fine (and have green tests) when in reality
   * everything is on fire...
   *
   * @public
   * @param {Function} [callback=Ember.onerror] the callback to validate
   * @returns {Object} object with `isValid` and `message`
   *
   * @example <caption>Example implementation for `ember-qunit`</caption>
   *
   * import { validateErrorHandler } from '@ember/test-helpers';
   *
   * test('Ember.onerror is functioning properly', function(assert) {
   *   let result = validateErrorHandler();
   *   assert.ok(result.isValid, result.message);
   * });
   */
  function validateErrorHandler(callback = Ember.onerror) {
    if (callback === undefined || callback === null) {
      return VALID;
    }

    let error = new Error('Error handler validation error!');

    let originalEmberTesting = Ember.testing;
    Ember.testing = true;
    try {
      callback(error);
    } catch (e) {
      if (e === error) {
        return VALID;
      }
    } finally {
      Ember.testing = originalEmberTesting;
    }

    return INVALID;
  }
});
define('@ember/test-helpers/wait-until', ['exports', '@ember/test-helpers/-utils'], function (exports, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = waitUntil;


  const TIMEOUTS = [0, 1, 2, 5, 7];
  const MAX_TIMEOUT = 10;

  /**
    Wait for the provided callback to return a truthy value.
  
    This does not leverage `settled()`, and as such can be used to manage async
    while _not_ settled (e.g. "loading" or "pending" states).
  
    @public
    @param {Function} callback the callback to use for testing when waiting should stop
    @param {Object} [options] options used to override defaults
    @param {number} [options.timeout=1000] the maximum amount of time to wait
    @param {string} [options.timeoutMessage='waitUntil timed out'] the message to use in the reject on timeout
    @returns {Promise} resolves with the callback value when it returns a truthy value
  */
  function waitUntil(callback, options = {}) {
    let timeout = 'timeout' in options ? options.timeout : 1000;
    let timeoutMessage = 'timeoutMessage' in options ? options.timeoutMessage : 'waitUntil timed out';

    // creating this error eagerly so it has the proper invocation stack
    let waitUntilTimedOut = new Error(timeoutMessage);

    return new Ember.RSVP.Promise(function (resolve, reject) {
      let time = 0;

      // eslint-disable-next-line require-jsdoc
      function scheduleCheck(timeoutsIndex) {
        let interval = TIMEOUTS[timeoutsIndex];
        if (interval === undefined) {
          interval = MAX_TIMEOUT;
        }

        (0, _utils.futureTick)(function () {
          time += interval;

          let value;
          try {
            value = callback();
          } catch (error) {
            reject(error);
          }

          if (value) {
            resolve(value);
          } else if (time < timeout) {
            scheduleCheck(timeoutsIndex + 1);
          } else {
            reject(waitUntilTimedOut);
          }
        }, interval);
      }

      scheduleCheck(0);
    });
  }
});
define("ember-basic-dropdown/test-support/helpers", ["exports", "@ember/test-helpers"], function (_exports, _testHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.nativeTap = nativeTap;
  _exports.clickTrigger = clickTrigger;
  _exports.tapTrigger = tapTrigger;
  _exports.fireKeydown = fireKeydown;
  _exports.default = _default;

  function nativeTap(selector, options = {}) {
    let touchStartEvent = new window.Event('touchstart', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    Object.keys(options).forEach(key => touchStartEvent[key] = options[key]);
    Ember.run(() => document.querySelector(selector).dispatchEvent(touchStartEvent));
    let touchEndEvent = new window.Event('touchend', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    Object.keys(options).forEach(key => touchEndEvent[key] = options[key]);
    Ember.run(() => document.querySelector(selector).dispatchEvent(touchEndEvent));
  }

  function clickTrigger(scope, options = {}) {
    let selector = '.ember-basic-dropdown-trigger';

    if (scope) {
      let element = document.querySelector(scope);

      if (element.classList.contains('ember-basic-dropdown-trigger')) {
        selector = scope;
      } else {
        selector = scope + ' ' + selector;
      }
    }

    (0, _testHelpers.click)(selector, options);
    return (0, _testHelpers.settled)();
  }

  function tapTrigger(scope, options = {}) {
    let selector = '.ember-basic-dropdown-trigger';

    if (scope) {
      selector = scope + ' ' + selector;
    }

    nativeTap(selector, options);
  }

  function fireKeydown(selector, k) {
    let oEvent = document.createEvent('Events');
    oEvent.initEvent('keydown', true, true);
    Ember.merge(oEvent, {
      view: window,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      keyCode: k,
      charCode: k
    });
    Ember.run(() => document.querySelector(selector).dispatchEvent(oEvent));
  } // acceptance helpers


  function _default() {
    Ember.Test.registerAsyncHelper('clickDropdown', function (app, cssPath, options = {}) {
      (true && !(false) && Ember.deprecate('Using the global `clickDropdown` acceptance helper from ember-basic-dropdown is deprecated. Please, explicitly import the `clickTrigger` or just use `click` helper from `@ember/test-helpers`.', false, {
        until: '1.0.0',
        id: 'ember-basic-dropdown-click-dropdown'
      }));
      clickTrigger(cssPath, options);
    });
    Ember.Test.registerAsyncHelper('tapDropdown', function (app, cssPath, options = {}) {
      (true && !(false) && Ember.deprecate('Using the global `tapDropdown` acceptance helper from ember-basic-dropdown is deprecated. Please, explicitly import the `tapTrigger` or just use `tap` helper from `@ember/test-helpers`.', false, {
        until: '1.0.0',
        id: 'ember-basic-dropdown-click-dropdown'
      }));
      tapTrigger(cssPath, options);
    });
  }
});
define('ember-cli-test-loader/test-support/index', ['exports'], function (exports) {
  /* globals requirejs, require */
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.addModuleIncludeMatcher = addModuleIncludeMatcher;
  exports.addModuleExcludeMatcher = addModuleExcludeMatcher;
  let moduleIncludeMatchers = [];
  let moduleExcludeMatchers = [];

  function addModuleIncludeMatcher(fn) {
    moduleIncludeMatchers.push(fn);
  }

  function addModuleExcludeMatcher(fn) {
    moduleExcludeMatchers.push(fn);
  }

  function checkMatchers(matchers, moduleName) {
    return matchers.some(matcher => matcher(moduleName));
  }

  class TestLoader {
    static load() {
      new TestLoader().loadModules();
    }

    constructor() {
      this._didLogMissingUnsee = false;
    }

    shouldLoadModule(moduleName) {
      return moduleName.match(/[-_]test$/);
    }

    listModules() {
      return Object.keys(requirejs.entries);
    }

    listTestModules() {
      let moduleNames = this.listModules();
      let testModules = [];
      let moduleName;

      for (let i = 0; i < moduleNames.length; i++) {
        moduleName = moduleNames[i];

        if (checkMatchers(moduleExcludeMatchers, moduleName)) {
          continue;
        }

        if (checkMatchers(moduleIncludeMatchers, moduleName) || this.shouldLoadModule(moduleName)) {
          testModules.push(moduleName);
        }
      }

      return testModules;
    }

    loadModules() {
      let testModules = this.listTestModules();
      let testModule;

      for (let i = 0; i < testModules.length; i++) {
        testModule = testModules[i];
        this.require(testModule);
        this.unsee(testModule);
      }
    }

    require(moduleName) {
      try {
        require(moduleName);
      } catch (e) {
        this.moduleLoadFailure(moduleName, e);
      }
    }

    unsee(moduleName) {
      if (typeof require.unsee === 'function') {
        require.unsee(moduleName);
      } else if (!this._didLogMissingUnsee) {
        this._didLogMissingUnsee = true;
        if (typeof console !== 'undefined') {
          console.warn('unable to require.unsee, please upgrade loader.js to >= v3.3.0');
        }
      }
    }

    moduleLoadFailure(moduleName, error) {
      console.error('Error loading: ' + moduleName, error.stack);
    }
  }exports.default = TestLoader;
  ;
});
define('ember-flatpickr/test-support/helpers', ['exports', '@ember/test-helpers'], function (exports, _testHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isFlatpickrOpen = isFlatpickrOpen;
  exports.setFlatpickrDate = setFlatpickrDate;
  exports.closeFlatpickrDate = closeFlatpickrDate;
  exports.clearFlatpickrDate = clearFlatpickrDate;

  exports.default = function () {
    Ember.Test.registerHelper('closeFlatpickrDate', function (app, selector) {
      (true && !(true) && Ember.deprecate('Using the implicit global helper `closeFlatpickrDate` is deprecated. Please, import it explicitly with `import { closeFlatpickrDate } from "ember-flatpickr/test-support"`', true, { id: 'ember-flatpickr-global-close-flatpickr-date', until: '3.0.0' }));

      return closeFlatpickrDate(selector);
    });

    Ember.Test.registerHelper('setFlatpickrDate', function (app, selector, date, triggerChange) {
      (true && !(true) && Ember.deprecate('Using the implicit global helper `setFlatpickrDate` is deprecated. Please, import it explicitly with `import { setFlatpickrDate } from "ember-flatpickr/test-support"`', true, { id: 'ember-flatpickr-global-set-flatpickr-date', until: '3.0.0' }));

      return setFlatpickrDate(selector, date, triggerChange);
    });

    Ember.Test.registerHelper('clearFlatpickrDate', function (app, selector) {
      (true && !(true) && Ember.deprecate('Using the implicit global helper `clearFlatpickrDate` is deprecated. Please, import it explicitly with `import { clearFlatpickrDate } from "ember-flatpickr/test-support"`', true, { id: 'ember-flatpickr-global-clear-flatpickr-date', until: '3.0.0' }));

      return clearFlatpickrDate(selector);
    });
  };

  /**
   * Checks if the flatpickr calendar is being displayed.
   *
   * @param {Number} [pickrIndex=0] - Index of flatpickr calendar to be targeted (for when multiple exist)
   * @return {Boolean} Whether or not the calendar is visible
   * @function isFlatpickrOpen
  */
  function isFlatpickrOpen(pickrIndex = 0) {
    const flatpickerCal = document.getElementsByClassName('flatpickr-calendar')[pickrIndex];
    return flatpickerCal.classList.contains('open');
  }

  /**
   * Sets the date in the flatpickr
   *
   * @param {String} selector - CSS3 selector of the element to pull the flatpickr instance from
   * @param {Object} date - A Date Object or array of Date Objects to set as the selected date(s)
   * @param {Boolean} [triggerChange=true] - If true, this forces onChange events to fire
   * @function setFlatpickrDate
  */
  function setFlatpickrDate(selector, date, triggerChange = true) {
    const flatpickrInput = (0, _testHelpers.find)(selector);
    if (!flatpickrInput) _throwSelectorError(selector, 'setFlatpickrDate');
    flatpickrInput._flatpickr.setDate(date, triggerChange);
  }

  /**
   * @param {String} selector - CSS3 selector of the element to pull the flatpickr instance from
   * @function closeFlatpickrDate
  */
  function closeFlatpickrDate(selector) {
    const flatpickrInput = (0, _testHelpers.find)(selector);
    if (!flatpickrInput) _throwSelectorError(selector, 'closeFlatpickrDate');
    flatpickrInput._flatpickr.close();
  }

  /**
   * Clears out the flatpickr selectedDates attribute as well as the associated input.
   * @param {String} selector - CSS3 selector of the element to pull the flatpickr instance from
   * @function clearFlatpickrDate
  */
  function clearFlatpickrDate(selector) {
    const flatpickrInput = (0, _testHelpers.find)(selector);
    if (!flatpickrInput) _throwSelectorError(selector, 'clearFlatpickrDate');
    flatpickrInput._flatpickr.clear();
  }

  // Registers helpers for acceptance tests

  function _throwSelectorError(selector, functionName) {
    throw new Error(`${functionName}() - No input was found using selector '${selector}'`);
  }
});
define('ember-keyboard/test-support/key-event', ['exports', 'ember-keyboard', 'ember-keyboard/fixtures/modifiers-array', 'ember-keyboard/fixtures/mouse-buttons-array', 'ember-keyboard/utils/get-cmd-key', '@ember/test-helpers'], function (exports, _emberKeyboard, _modifiersArray, _mouseButtonsArray, _getCmdKey, _testHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.keyEvent = undefined;
  const keyEvent = exports.keyEvent = function keyEvent(attributes, type, element) {
    const keys = (attributes || '').split('+');

    const event = keys.reduce((event, attribute) => {
      const isValidModifier = _modifiersArray.default.indexOf(attribute) > -1;

      if (isValidModifier) {
        attribute = attribute === 'cmd' ? (0, _getCmdKey.default)() : attribute;

        event[`${attribute}Key`] = true;
      } else if (_mouseButtonsArray.default.indexOf(attribute) > -1) {
        event.button = (0, _emberKeyboard.getMouseCode)(attribute);
      } else {
        const keyCode = (0, _emberKeyboard.getKeyCode)(attribute);

        event.code = attribute;

        // deprecated / removed from the Web Standards
        event.which = keyCode;
        event.keyCode = keyCode;
      }

      return event;
    }, {});

    return (0, _testHelpers.triggerEvent)(element || document.body, type, event);
  };
});
define('ember-keyboard/test-support/test-helpers', ['exports', 'ember-keyboard/test-support/key-event'], function (exports, _keyEvent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.mouseDown = mouseDown;
  exports.mouseUp = mouseUp;
  exports.keyDown = keyDown;
  exports.keyUp = keyUp;
  exports.keyPress = keyPress;
  exports.touchStart = touchStart;
  exports.touchEnd = touchEnd;
  function mouseDown(attributes) {
    return (0, _keyEvent.keyEvent)(attributes, 'mousedown');
  }

  function mouseUp(attributes) {
    return (0, _keyEvent.keyEvent)(attributes, 'mouseup');
  }

  function keyDown(attributes) {
    return (0, _keyEvent.keyEvent)(attributes, 'keydown');
  }

  function keyUp(attributes) {
    return (0, _keyEvent.keyEvent)(attributes, 'keyup');
  }

  function keyPress(attributes) {
    return (0, _keyEvent.keyEvent)(attributes, 'keypress');
  }

  function touchStart(attributes) {
    return (0, _keyEvent.keyEvent)(attributes, 'touchstart');
  }

  function touchEnd(attributes) {
    return (0, _keyEvent.keyEvent)(attributes, 'touchend');
  }
});
define('ember-power-select/test-support/helpers', ['exports', '@ember/test-helpers', 'ember-power-select/test-support/index'], function (exports, _testHelpers, _index) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
  exports.selectSearch = selectSearch;
  exports.removeMultipleOption = removeMultipleOption;
  exports.clearSelected = clearSelected;

  exports.default = function () {
    Ember.Test.registerAsyncHelper('selectChoose', function (_, cssPathOrTrigger, valueOrSelector, optionIndex) {
      (true && !(true) && Ember.deprecate('Using the implicit global async helper `selectChoose` is deprecated. Please, import it explicitly with `import { selectChoose } from "ember-power-select/test-support"`', true, { id: 'ember-power-select-global-select-choose', until: '2.0.0' }));

      return (0, _index.selectChoose)(cssPathOrTrigger, valueOrSelector, optionIndex);
    });

    Ember.Test.registerAsyncHelper('selectSearch', async function (app, cssPathOrTrigger, value) {
      (true && !(true) && Ember.deprecate('Using the implicit global async helper `selectSearch` is deprecated. Please, import it explicitly with `import { selectSearch } from "ember-power-select/test-support"`', true, { id: 'ember-power-select-global-select-search', until: '2.0.0' }));

      return (0, _index.selectSearch)(cssPathOrTrigger, value);
    });

    Ember.Test.registerAsyncHelper('removeMultipleOption', async function (app, cssPath, value) {
      (true && !(true) && Ember.deprecate('Using the implicit global async helper `removeMultipleOption` is deprecated. Please, import it explicitly with `import { removeMultipleOption } from "ember-power-select/test-support"`', true, { id: 'ember-power-select-global-remove-multiple-option', until: '2.0.0' }));

      return (0, _index.removeMultipleOption)(cssPath, value);
    });

    Ember.Test.registerAsyncHelper('clearSelected', async function (app, cssPath) {
      (true && !(true) && Ember.deprecate('Using the implicit global async helper `clearSelected` is deprecated. Please, import it explicitly with `import { clearSelected } from "ember-power-select/test-support"`', true, { id: 'ember-power-select-global-clear-selected', until: '2.0.0' }));

      return (0, _index.clearSelected)(cssPath);
    });
  };

  /**
   * @private
   * @param {String} selector CSS3 selector of the elements to check the content
   * @param {String} text Substring that the selected element must contain
   * @returns HTMLElement The first element that maches the given selector and contains the
   *                      given text
   */
  function findContains(selector, text) {
    return [].slice.apply(document.querySelectorAll(selector)).filter(e => {
      return e.textContent.trim().indexOf(text) > -1;
    })[0];
  }

  async function nativeMouseDown(selectorOrDomElement, options) {
    return (0, _testHelpers.triggerEvent)(selectorOrDomElement, 'mousedown', options);
  }

  async function nativeMouseUp(selectorOrDomElement, options) {
    return (0, _testHelpers.triggerEvent)(selectorOrDomElement, 'mouseup', options);
  }

  async function triggerKeydown(domElement, k) {
    return (0, _testHelpers.triggerKeyEvent)(domElement, 'keydown', k);
  }

  function typeInSearch(scopeOrText, text) {
    let scope = '';

    if (typeof text === 'undefined') {
      text = scopeOrText;
    } else {
      scope = scopeOrText;
    }

    let selectors = ['.ember-power-select-search-input', '.ember-power-select-search input', '.ember-power-select-trigger-multiple-input', 'input[type="search"]'].map(selector => `${scope} ${selector}`).join(', ');

    return (0, _testHelpers.fillIn)(selectors, text);
  }

  async function clickTrigger(scope, options = {}) {
    let selector = '.ember-power-select-trigger';
    if (scope) {
      selector = `${scope} ${selector}`;
    }
    return (0, _testHelpers.click)(selector, options);
  }

  async function nativeTouch(selectorOrDomElement) {
    (0, _testHelpers.triggerEvent)(selectorOrDomElement, 'touchstart');
    return (0, _testHelpers.triggerEvent)(selectorOrDomElement, 'touchend');
  }

  async function touchTrigger() {
    return nativeTouch('.ember-power-select-trigger');
  }

  async function selectChoose(cssPathOrTrigger, valueOrSelector, optionIndex) {
    return (0, _index.selectChoose)(cssPathOrTrigger, valueOrSelector, optionIndex);
  }

  async function selectSearch(cssPathOrTrigger, value) {
    return (0, _index.selectSearch)(cssPathOrTrigger, value);
  }

  async function removeMultipleOption(cssPath, value) {
    return (0, _index.removeMultipleOption)(cssPath, value);
  }

  async function clearSelected(cssPath) {
    return (0, _index.clearSelected)(cssPath);
  }

  // Helpers for acceptance tests
});
define('ember-power-select/test-support/index', ['exports', '@ember/test-helpers'], function (exports, _testHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = selectChoose;
  exports.selectSearch = selectSearch;
  exports.removeMultipleOption = removeMultipleOption;
  exports.clearSelected = clearSelected;
  async function selectChoose(cssPathOrTrigger, valueOrSelector, optionIndex) {
    let trigger, target;
    if (cssPathOrTrigger instanceof HTMLElement) {
      if (cssPathOrTrigger.classList.contains('ember-power-select-trigger')) {
        trigger = cssPathOrTrigger;
      } else {
        trigger = cssPathOrTrigger.querySelector('.ember-power-select-trigger');
      }
    } else {
      trigger = document.querySelector(`${cssPathOrTrigger} .ember-power-select-trigger`);

      if (!trigger) {
        trigger = document.querySelector(cssPathOrTrigger);
      }

      if (!trigger) {
        throw new Error(`You called "selectChoose('${cssPathOrTrigger}', '${valueOrSelector}')" but no select was found using selector "${cssPathOrTrigger}"`);
      }
    }

    if (trigger.scrollIntoView) {
      trigger.scrollIntoView();
    }

    let contentId = `${trigger.attributes['aria-owns'].value}`;
    let content = document.querySelector(`#${contentId}`);
    // If the dropdown is closed, open it
    if (!content || content.classList.contains('ember-basic-dropdown-content-placeholder')) {
      await (0, _testHelpers.click)(trigger);
      await (0, _testHelpers.settled)();
    }

    // Select the option with the given text
    let options = document.querySelectorAll(`#${contentId} .ember-power-select-option`);
    let potentialTargets = [].slice.apply(options).filter(opt => opt.textContent.indexOf(valueOrSelector) > -1);
    if (potentialTargets.length === 0) {
      potentialTargets = document.querySelectorAll(`#${contentId} ${valueOrSelector}`);
    }
    if (potentialTargets.length > 1) {
      let filteredTargets = [].slice.apply(potentialTargets).filter(t => t.textContent.trim() === valueOrSelector);
      if (optionIndex === undefined) {
        target = filteredTargets[0] || potentialTargets[0];
      } else {
        target = filteredTargets[optionIndex] || potentialTargets[optionIndex];
      }
    } else {
      target = potentialTargets[0];
    }
    if (!target) {
      throw new Error(`You called "selectChoose('${cssPathOrTrigger}', '${valueOrSelector}')" but "${valueOrSelector}" didn't match any option`);
    }
    await (0, _testHelpers.click)(target);
    return (0, _testHelpers.settled)();
  }

  async function selectSearch(cssPathOrTrigger, value) {
    let trigger;
    if (cssPathOrTrigger instanceof HTMLElement) {
      trigger = cssPathOrTrigger;
    } else {
      let triggerPath = `${cssPathOrTrigger} .ember-power-select-trigger`;
      trigger = document.querySelector(triggerPath);
      if (!trigger) {
        triggerPath = cssPathOrTrigger;
        trigger = document.querySelector(triggerPath);
      }

      if (!trigger) {
        throw new Error(`You called "selectSearch('${cssPathOrTrigger}', '${value}')" but no select was found using selector "${cssPathOrTrigger}"`);
      }
    }

    if (trigger.scrollIntoView) {
      trigger.scrollIntoView();
    }

    let contentId = `${trigger.attributes['aria-owns'].value}`;
    let isMultipleSelect = !!trigger.querySelector('.ember-power-select-trigger-multiple-input');

    let content = document.querySelector(`#${contentId}`);
    let dropdownIsClosed = !content || content.classList.contains('ember-basic-dropdown-content-placeholder');
    if (dropdownIsClosed) {
      await (0, _testHelpers.click)(trigger);
      await (0, _testHelpers.settled)();
    }
    let isDefaultSingleSelect = !!document.querySelector('.ember-power-select-search-input');

    if (isMultipleSelect) {
      await (0, _testHelpers.fillIn)(trigger.querySelector('.ember-power-select-trigger-multiple-input'), value);
    } else if (isDefaultSingleSelect) {
      await (0, _testHelpers.fillIn)('.ember-power-select-search-input', value);
    } else {
      // It's probably a customized version
      let inputIsInTrigger = !!trigger.querySelector('.ember-power-select-trigger input[type=search]');
      if (inputIsInTrigger) {
        await (0, _testHelpers.fillIn)(trigger.querySelector('input[type=search]'), value);
      } else {
        await (0, _testHelpers.fillIn)(`#${contentId} .ember-power-select-search-input[type=search]`, 'input');
      }
    }
    return (0, _testHelpers.settled)();
  }

  async function removeMultipleOption(cssPath, value) {
    let elem;
    let items = document.querySelectorAll(`${cssPath} .ember-power-select-multiple-options > li`);
    let item = [].slice.apply(items).find(el => el.textContent.indexOf(value) > -1);
    if (item) {
      elem = item.querySelector('.ember-power-select-multiple-remove-btn');
    }
    try {
      await (0, _testHelpers.click)(elem);
      return (0, _testHelpers.settled)();
    } catch (e) {
      (true && Ember.warn('css path to remove btn not found'));

      throw e;
    }
  }

  async function clearSelected(cssPath) {
    let elem = document.querySelector(`${cssPath} .ember-power-select-clear-btn`);
    try {
      await (0, _testHelpers.click)(elem);
      return (0, _testHelpers.settled)();
    } catch (e) {
      (true && Ember.warn('css path to clear btn not found'));

      throw e;
    }
  }
});
define('ember-qunit/adapter', ['exports', 'qunit', '@ember/test-helpers/has-ember-version'], function (exports, _qunit, _hasEmberVersion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function unhandledRejectionAssertion(current, error) {
    let message, source;

    if (typeof error === 'object' && error !== null) {
      message = error.message;
      source = error.stack;
    } else if (typeof error === 'string') {
      message = error;
      source = 'unknown source';
    } else {
      message = 'unhandledRejection occured, but it had no message';
      source = 'unknown source';
    }

    current.assert.pushResult({
      result: false,
      actual: false,
      expected: true,
      message: message,
      source: source
    });
  }

  let Adapter = Ember.Test.Adapter.extend({
    init() {
      this.doneCallbacks = [];
    },

    asyncStart() {
      this.doneCallbacks.push(_qunit.default.config.current ? _qunit.default.config.current.assert.async() : null);
    },

    asyncEnd() {
      let done = this.doneCallbacks.pop();
      // This can be null if asyncStart() was called outside of a test
      if (done) {
        done();
      }
    },

    // clobber default implementation of `exception` will be added back for Ember
    // < 2.17 just below...
    exception: null
  });

  // Ember 2.17 and higher do not require the test adapter to have an `exception`
  // method When `exception` is not present, the unhandled rejection is
  // automatically re-thrown and will therefore hit QUnit's own global error
  // handler (therefore appropriately causing test failure)
  if (!(0, _hasEmberVersion.default)(2, 17)) {
    Adapter = Adapter.extend({
      exception(error) {
        unhandledRejectionAssertion(_qunit.default.config.current, error);
      }
    });
  }

  exports.default = Adapter;
});
define('ember-qunit/index', ['exports', 'ember-qunit/legacy-2-x/module-for', 'ember-qunit/legacy-2-x/module-for-component', 'ember-qunit/legacy-2-x/module-for-model', 'ember-qunit/adapter', 'qunit', 'ember-qunit/test-loader', '@ember/test-helpers', 'ember-qunit/test-isolation-validation'], function (exports, _moduleFor, _moduleForComponent, _moduleForModel, _adapter, _qunit, _testLoader, _testHelpers, _testIsolationValidation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.loadTests = exports.todo = exports.only = exports.skip = exports.test = exports.module = exports.QUnitAdapter = exports.moduleForModel = exports.moduleForComponent = exports.moduleFor = undefined;
  Object.defineProperty(exports, 'moduleFor', {
    enumerable: true,
    get: function () {
      return _moduleFor.default;
    }
  });
  Object.defineProperty(exports, 'moduleForComponent', {
    enumerable: true,
    get: function () {
      return _moduleForComponent.default;
    }
  });
  Object.defineProperty(exports, 'moduleForModel', {
    enumerable: true,
    get: function () {
      return _moduleForModel.default;
    }
  });
  Object.defineProperty(exports, 'QUnitAdapter', {
    enumerable: true,
    get: function () {
      return _adapter.default;
    }
  });
  Object.defineProperty(exports, 'module', {
    enumerable: true,
    get: function () {
      return _qunit.module;
    }
  });
  Object.defineProperty(exports, 'test', {
    enumerable: true,
    get: function () {
      return _qunit.test;
    }
  });
  Object.defineProperty(exports, 'skip', {
    enumerable: true,
    get: function () {
      return _qunit.skip;
    }
  });
  Object.defineProperty(exports, 'only', {
    enumerable: true,
    get: function () {
      return _qunit.only;
    }
  });
  Object.defineProperty(exports, 'todo', {
    enumerable: true,
    get: function () {
      return _qunit.todo;
    }
  });
  Object.defineProperty(exports, 'loadTests', {
    enumerable: true,
    get: function () {
      return _testLoader.loadTests;
    }
  });
  exports.setResolver = setResolver;
  exports.render = render;
  exports.clearRender = clearRender;
  exports.settled = settled;
  exports.pauseTest = pauseTest;
  exports.resumeTest = resumeTest;
  exports.setupTest = setupTest;
  exports.setupRenderingTest = setupRenderingTest;
  exports.setupApplicationTest = setupApplicationTest;
  exports.setupTestContainer = setupTestContainer;
  exports.startTests = startTests;
  exports.setupTestAdapter = setupTestAdapter;
  exports.setupEmberTesting = setupEmberTesting;
  exports.setupEmberOnerrorValidation = setupEmberOnerrorValidation;
  exports.setupTestIsolationValidation = setupTestIsolationValidation;
  exports.start = start;
  function setResolver() {
    (true && !(false) && Ember.deprecate('`setResolver` should be imported from `@ember/test-helpers`, but was imported from `ember-qunit`', false, {
      id: 'ember-qunit.deprecated-reexports.setResolver',
      until: '4.0.0'
    }));


    return (0, _testHelpers.setResolver)(...arguments);
  }

  function render() {
    (true && !(false) && Ember.deprecate('`render` should be imported from `@ember/test-helpers`, but was imported from `ember-qunit`', false, {
      id: 'ember-qunit.deprecated-reexports.render',
      until: '4.0.0'
    }));


    return (0, _testHelpers.render)(...arguments);
  }

  function clearRender() {
    (true && !(false) && Ember.deprecate('`clearRender` should be imported from `@ember/test-helpers`, but was imported from `ember-qunit`', false, {
      id: 'ember-qunit.deprecated-reexports.clearRender',
      until: '4.0.0'
    }));


    return (0, _testHelpers.clearRender)(...arguments);
  }

  function settled() {
    (true && !(false) && Ember.deprecate('`settled` should be imported from `@ember/test-helpers`, but was imported from `ember-qunit`', false, {
      id: 'ember-qunit.deprecated-reexports.settled',
      until: '4.0.0'
    }));


    return (0, _testHelpers.settled)(...arguments);
  }

  function pauseTest() {
    (true && !(false) && Ember.deprecate('`pauseTest` should be imported from `@ember/test-helpers`, but was imported from `ember-qunit`', false, {
      id: 'ember-qunit.deprecated-reexports.pauseTest',
      until: '4.0.0'
    }));


    return (0, _testHelpers.pauseTest)(...arguments);
  }

  function resumeTest() {
    (true && !(false) && Ember.deprecate('`resumeTest` should be imported from `@ember/test-helpers`, but was imported from `ember-qunit`', false, {
      id: 'ember-qunit.deprecated-reexports.resumeTest',
      until: '4.0.0'
    }));


    return (0, _testHelpers.resumeTest)(...arguments);
  }

  function setupTest(hooks, options) {
    hooks.beforeEach(function (assert) {
      return (0, _testHelpers.setupContext)(this, options).then(() => {
        let originalPauseTest = this.pauseTest;
        this.pauseTest = function QUnit_pauseTest() {
          assert.timeout(-1); // prevent the test from timing out

          return originalPauseTest.call(this);
        };
      });
    });

    hooks.afterEach(function () {
      return (0, _testHelpers.teardownContext)(this);
    });
  }

  function setupRenderingTest(hooks, options) {
    setupTest(hooks, options);

    hooks.beforeEach(function () {
      return (0, _testHelpers.setupRenderingContext)(this);
    });

    hooks.afterEach(function () {
      return (0, _testHelpers.teardownRenderingContext)(this);
    });
  }

  function setupApplicationTest(hooks, options) {
    setupTest(hooks, options);

    hooks.beforeEach(function () {
      return (0, _testHelpers.setupApplicationContext)(this);
    });

    hooks.afterEach(function () {
      return (0, _testHelpers.teardownApplicationContext)(this);
    });
  }

  /**
     Uses current URL configuration to setup the test container.
  
     * If `?nocontainer` is set, the test container will be hidden.
     * If `?dockcontainer` or `?devmode` are set the test container will be
       absolutely positioned.
     * If `?devmode` is set, the test container will be made full screen.
  
     @method setupTestContainer
   */
  function setupTestContainer() {
    let testContainer = document.getElementById('ember-testing-container');
    if (!testContainer) {
      return;
    }

    let params = _qunit.default.urlParams;

    let containerVisibility = params.nocontainer ? 'hidden' : 'visible';
    let containerPosition = params.dockcontainer || params.devmode ? 'fixed' : 'relative';

    if (params.devmode) {
      testContainer.className = ' full-screen';
    }

    testContainer.style.visibility = containerVisibility;
    testContainer.style.position = containerPosition;

    let qunitContainer = document.getElementById('qunit');
    if (params.dockcontainer) {
      qunitContainer.style.marginBottom = window.getComputedStyle(testContainer).height;
    }
  }

  /**
     Instruct QUnit to start the tests.
     @method startTests
   */
  function startTests() {
    _qunit.default.start();
  }

  /**
     Sets up the `Ember.Test` adapter for usage with QUnit 2.x.
  
     @method setupTestAdapter
   */
  function setupTestAdapter() {
    Ember.Test.adapter = _adapter.default.create();
  }

  /**
    Ensures that `Ember.testing` is set to `true` before each test begins
    (including `before` / `beforeEach`), and reset to `false` after each test is
    completed. This is done via `QUnit.testStart` and `QUnit.testDone`.
  
   */
  function setupEmberTesting() {
    _qunit.default.testStart(() => {
      Ember.testing = true;
    });

    _qunit.default.testDone(() => {
      Ember.testing = false;
    });
  }

  /**
    Ensures that `Ember.onerror` (if present) is properly configured to re-throw
    errors that occur while `Ember.testing` is `true`.
  */
  function setupEmberOnerrorValidation() {
    _qunit.default.module('ember-qunit: Ember.onerror validation', function () {
      _qunit.default.test('Ember.onerror is functioning properly', function (assert) {
        assert.expect(1);
        let result = (0, _testHelpers.validateErrorHandler)();
        assert.ok(result.isValid, `Ember.onerror handler with invalid testing behavior detected. An Ember.onerror handler _must_ rethrow exceptions when \`Ember.testing\` is \`true\` or the test suite is unreliable. See https://git.io/vbine for more details.`);
      });
    });
  }

  function setupTestIsolationValidation() {
    _qunit.default.testDone(_testIsolationValidation.detectIfTestNotIsolated);
    _qunit.default.done(_testIsolationValidation.reportIfTestNotIsolated);
  }

  /**
     @method start
     @param {Object} [options] Options to be used for enabling/disabling behaviors
     @param {Boolean} [options.loadTests] If `false` tests will not be loaded automatically.
     @param {Boolean} [options.setupTestContainer] If `false` the test container will not
     be setup based on `devmode`, `dockcontainer`, or `nocontainer` URL params.
     @param {Boolean} [options.startTests] If `false` tests will not be automatically started
     (you must run `QUnit.start()` to kick them off).
     @param {Boolean} [options.setupTestAdapter] If `false` the default Ember.Test adapter will
     not be updated.
     @param {Boolean} [options.setupEmberTesting] `false` opts out of the
     default behavior of setting `Ember.testing` to `true` before all tests and
     back to `false` after each test will.
     @param {Boolean} [options.setupEmberOnerrorValidation] If `false` validation
     of `Ember.onerror` will be disabled.
     @param {Boolean} [options.setupTestIsolationValidation] If `false` test isolation validation
     will be disabled.
   */
  function start(options = {}) {
    if (options.loadTests !== false) {
      (0, _testLoader.loadTests)();
    }

    if (options.setupTestContainer !== false) {
      setupTestContainer();
    }

    if (options.setupTestAdapter !== false) {
      setupTestAdapter();
    }

    if (options.setupEmberTesting !== false) {
      setupEmberTesting();
    }

    if (options.setupEmberOnerrorValidation !== false) {
      setupEmberOnerrorValidation();
    }

    if (typeof options.setupTestIsolationValidation !== 'undefined' && options.setupTestIsolationValidation !== false) {
      setupTestIsolationValidation();
    }

    if (options.startTests !== false) {
      startTests();
    }
  }
});
define('ember-qunit/legacy-2-x/module-for-component', ['exports', 'ember-qunit/legacy-2-x/qunit-module', 'ember-test-helpers'], function (exports, _qunitModule, _emberTestHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = moduleForComponent;
  function moduleForComponent(name, description, callbacks) {
    (0, _qunitModule.createModule)(_emberTestHelpers.TestModuleForComponent, name, description, callbacks);
  }
});
define('ember-qunit/legacy-2-x/module-for-model', ['exports', 'ember-qunit/legacy-2-x/qunit-module', 'ember-test-helpers'], function (exports, _qunitModule, _emberTestHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = moduleForModel;
  function moduleForModel(name, description, callbacks) {
    (0, _qunitModule.createModule)(_emberTestHelpers.TestModuleForModel, name, description, callbacks);
  }
});
define('ember-qunit/legacy-2-x/module-for', ['exports', 'ember-qunit/legacy-2-x/qunit-module', 'ember-test-helpers'], function (exports, _qunitModule, _emberTestHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = moduleFor;
  function moduleFor(name, description, callbacks) {
    (0, _qunitModule.createModule)(_emberTestHelpers.TestModule, name, description, callbacks);
  }
});
define('ember-qunit/legacy-2-x/qunit-module', ['exports', 'qunit'], function (exports, _qunit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createModule = createModule;


  function noop() {}

  function callbackFor(name, callbacks) {
    if (typeof callbacks !== 'object') {
      return noop;
    }
    if (!callbacks) {
      return noop;
    }

    var callback = noop;

    if (callbacks[name]) {
      callback = callbacks[name];
      delete callbacks[name];
    }

    return callback;
  }

  function createModule(Constructor, name, description, callbacks) {
    if (!callbacks && typeof description === 'object') {
      callbacks = description;
      description = name;
    }

    var before = callbackFor('before', callbacks);
    var beforeEach = callbackFor('beforeEach', callbacks);
    var afterEach = callbackFor('afterEach', callbacks);
    var after = callbackFor('after', callbacks);

    var module;
    var moduleName = typeof description === 'string' ? description : name;

    (0, _qunit.module)(moduleName, {
      before() {
        // storing this in closure scope to avoid exposing these
        // private internals to the test context
        module = new Constructor(name, description, callbacks);
        return before.apply(this, arguments);
      },

      beforeEach() {
        // provide the test context to the underlying module
        module.setContext(this);

        return module.setup(...arguments).then(() => {
          return beforeEach.apply(this, arguments);
        });
      },

      afterEach() {
        let result = afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(result).then(() => module.teardown(...arguments));
      },

      after() {
        try {
          return after.apply(this, arguments);
        } finally {
          after = afterEach = before = beforeEach = callbacks = module = null;
        }
      }
    });
  }
});
define('ember-qunit/test-isolation-validation', ['exports', '@ember/test-helpers'], function (exports, _testHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.detectIfTestNotIsolated = detectIfTestNotIsolated;
  exports.reportIfTestNotIsolated = reportIfTestNotIsolated;
  exports.getMessage = getMessage;


  const TESTS_NOT_ISOLATED = [];

  /**
   * Detects if a specific test isn't isolated. A test is considered
   * not isolated if it:
   *
   * - has pending timers
   * - is in a runloop
   * - has pending AJAX requests
   * - has pending test waiters
   *
   * @function detectIfTestNotIsolated
   * @param {Object} testInfo
   * @param {string} testInfo.module The name of the test module
   * @param {string} testInfo.name The test name
   */
  function detectIfTestNotIsolated({ module, name }) {
    if (!(0, _testHelpers.isSettled)()) {
      TESTS_NOT_ISOLATED.push(`${module}: ${name}`);
      Ember.run.cancelTimers();
    }
  }

  /**
   * Reports if a test isn't isolated. Please see above for what
   * constitutes a test being isolated.
   *
   * @function reportIfTestNotIsolated
   * @throws Error if tests are not isolated
   */
  function reportIfTestNotIsolated() {
    if (TESTS_NOT_ISOLATED.length > 0) {
      let leakyTests = TESTS_NOT_ISOLATED.slice();
      TESTS_NOT_ISOLATED.length = 0;

      throw new Error(getMessage(leakyTests.length, leakyTests.join('\n')));
    }
  }

  function getMessage(testCount, testsToReport) {
    return `TESTS ARE NOT ISOLATED
    The following (${testCount}) tests have one or more of pending timers, pending AJAX requests, pending test waiters, or are still in a runloop: \n
    ${testsToReport}
  `;
  }
});
define('ember-qunit/test-loader', ['exports', 'qunit', 'ember-cli-test-loader/test-support/index'], function (exports, _qunit, _index) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TestLoader = undefined;
  exports.loadTests = loadTests;


  (0, _index.addModuleExcludeMatcher)(function (moduleName) {
    return _qunit.default.urlParams.nolint && moduleName.match(/\.(jshint|lint-test)$/);
  });

  (0, _index.addModuleIncludeMatcher)(function (moduleName) {
    return moduleName.match(/\.jshint$/);
  });

  let moduleLoadFailures = [];

  _qunit.default.done(function () {
    let length = moduleLoadFailures.length;

    try {
      if (length === 0) {
        // do nothing
      } else if (length === 1) {
        throw moduleLoadFailures[0];
      } else {
        throw new Error('\n' + moduleLoadFailures.join('\n'));
      }
    } finally {
      // ensure we release previously captured errors.
      moduleLoadFailures = [];
    }
  });

  class TestLoader extends _index.default {
    moduleLoadFailure(moduleName, error) {
      moduleLoadFailures.push(error);

      _qunit.default.module('TestLoader Failures');
      _qunit.default.test(moduleName + ': could not be loaded', function () {
        throw error;
      });
    }
  }

  exports.TestLoader = TestLoader;
  /**
     Load tests following the default patterns:
  
     * The module name ends with `-test`
     * The module name ends with `.jshint`
  
     Excludes tests that match the following
     patterns when `?nolint` URL param is set:
  
     * The module name ends with `.jshint`
     * The module name ends with `-lint-test`
  
     @method loadTests
   */
  function loadTests() {
    new TestLoader().loadModules();
  }
});
define('ember-responsive/test-support/index', ['exports', '@ember/test-helpers'], function (exports, _testHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setBreakpoint = setBreakpoint;
  function setBreakpoint(breakpointName) {
    let { owner } = (0, _testHelpers.getContext)();
    let breakpoints = owner.lookup('breakpoints:main');
    let media = owner.lookup('service:media');
    if (breakpointName === 'auto') {
      media.set('_mocked', false);
      return;
    }
    if (Object.keys(breakpoints).indexOf(breakpointName) === -1) {
      throw new Error(`Breakpoint "${breakpointName}" is not defined in your breakpoints file`);
    }
    let matches = media.get('matches');
    Ember.run(() => {
      matches.clear();
      matches.addObject(breakpointName);
      media._triggerMediaChanged();
    });
    return (0, _testHelpers.settled)();
  }
});
define('ember-test-helpers/has-ember-version', ['exports', '@ember/test-helpers/has-ember-version'], function (exports, _hasEmberVersion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasEmberVersion.default;
    }
  });
});
define('ember-test-helpers/index', ['exports', '@ember/test-helpers', 'ember-test-helpers/legacy-0-6-x/test-module', 'ember-test-helpers/legacy-0-6-x/test-module-for-acceptance', 'ember-test-helpers/legacy-0-6-x/test-module-for-component', 'ember-test-helpers/legacy-0-6-x/test-module-for-model'], function (exports, _testHelpers, _testModule, _testModuleForAcceptance, _testModuleForComponent, _testModuleForModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_testHelpers).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _testHelpers[key];
      }
    });
  });
  Object.defineProperty(exports, 'TestModule', {
    enumerable: true,
    get: function () {
      return _testModule.default;
    }
  });
  Object.defineProperty(exports, 'TestModuleForAcceptance', {
    enumerable: true,
    get: function () {
      return _testModuleForAcceptance.default;
    }
  });
  Object.defineProperty(exports, 'TestModuleForComponent', {
    enumerable: true,
    get: function () {
      return _testModuleForComponent.default;
    }
  });
  Object.defineProperty(exports, 'TestModuleForModel', {
    enumerable: true,
    get: function () {
      return _testModuleForModel.default;
    }
  });
});
define('ember-test-helpers/legacy-0-6-x/-legacy-overrides', ['exports', 'ember-test-helpers/has-ember-version'], function (exports, _hasEmberVersion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.preGlimmerSetupIntegrationForComponent = preGlimmerSetupIntegrationForComponent;
  function preGlimmerSetupIntegrationForComponent() {
    var module = this;
    var context = this.context;

    this.actionHooks = {};

    context.dispatcher = this.container.lookup('event_dispatcher:main') || Ember.EventDispatcher.create();
    context.dispatcher.setup({}, '#ember-testing');
    context.actions = module.actionHooks;

    (this.registry || this.container).register('component:-test-holder', Ember.Component.extend());

    context.render = function (template) {
      // in case `this.render` is called twice, make sure to teardown the first invocation
      module.teardownComponent();

      if (!template) {
        throw new Error('in a component integration test you must pass a template to `render()`');
      }
      if (Ember.isArray(template)) {
        template = template.join('');
      }
      if (typeof template === 'string') {
        template = Ember.Handlebars.compile(template);
      }
      module.component = module.container.lookupFactory('component:-test-holder').create({
        layout: template
      });

      module.component.set('context', context);
      module.component.set('controller', context);

      Ember.run(function () {
        module.component.appendTo('#ember-testing');
      });

      context._element = module.component.element;
    };

    context.$ = function () {
      return module.component.$.apply(module.component, arguments);
    };

    context.set = function (key, value) {
      var ret = Ember.run(function () {
        return Ember.set(context, key, value);
      });

      if ((0, _hasEmberVersion.default)(2, 0)) {
        return ret;
      }
    };

    context.setProperties = function (hash) {
      var ret = Ember.run(function () {
        return Ember.setProperties(context, hash);
      });

      if ((0, _hasEmberVersion.default)(2, 0)) {
        return ret;
      }
    };

    context.get = function (key) {
      return Ember.get(context, key);
    };

    context.getProperties = function () {
      var args = Array.prototype.slice.call(arguments);
      return Ember.getProperties(context, args);
    };

    context.on = function (actionName, handler) {
      module.actionHooks[actionName] = handler;
    };

    context.send = function (actionName) {
      var hook = module.actionHooks[actionName];
      if (!hook) {
        throw new Error('integration testing template received unexpected action ' + actionName);
      }
      hook.apply(module, Array.prototype.slice.call(arguments, 1));
    };

    context.clearRender = function () {
      module.teardownComponent();
    };
  }
});
define('ember-test-helpers/legacy-0-6-x/abstract-test-module', ['exports', 'ember-test-helpers/legacy-0-6-x/ext/rsvp', '@ember/test-helpers/settled', '@ember/test-helpers'], function (exports, _rsvp, _settled, _testHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = class {
    constructor(name, options) {
      this.context = undefined;
      this.name = name;
      this.callbacks = options || {};

      this.initSetupSteps();
      this.initTeardownSteps();
    }

    setup(assert) {
      Ember.testing = true;
      return this.invokeSteps(this.setupSteps, this, assert).then(() => {
        this.contextualizeCallbacks();
        return this.invokeSteps(this.contextualizedSetupSteps, this.context, assert);
      });
    }

    teardown(assert) {
      return this.invokeSteps(this.contextualizedTeardownSteps, this.context, assert).then(() => {
        return this.invokeSteps(this.teardownSteps, this, assert);
      }).then(() => {
        this.cache = null;
        this.cachedCalls = null;
      }).finally(function () {
        Ember.testing = false;
      });
    }

    initSetupSteps() {
      this.setupSteps = [];
      this.contextualizedSetupSteps = [];

      if (this.callbacks.beforeSetup) {
        this.setupSteps.push(this.callbacks.beforeSetup);
        delete this.callbacks.beforeSetup;
      }

      this.setupSteps.push(this.setupContext);
      this.setupSteps.push(this.setupTestElements);
      this.setupSteps.push(this.setupAJAXListeners);
      this.setupSteps.push(this.setupPromiseListeners);

      if (this.callbacks.setup) {
        this.contextualizedSetupSteps.push(this.callbacks.setup);
        delete this.callbacks.setup;
      }
    }

    invokeSteps(steps, context, assert) {
      steps = steps.slice();

      function nextStep() {
        var step = steps.shift();
        if (step) {
          // guard against exceptions, for example missing components referenced from needs.
          return new Ember.RSVP.Promise(resolve => {
            resolve(step.call(context, assert));
          }).then(nextStep);
        } else {
          return Ember.RSVP.resolve();
        }
      }
      return nextStep();
    }

    contextualizeCallbacks() {}

    initTeardownSteps() {
      this.teardownSteps = [];
      this.contextualizedTeardownSteps = [];

      if (this.callbacks.teardown) {
        this.contextualizedTeardownSteps.push(this.callbacks.teardown);
        delete this.callbacks.teardown;
      }

      this.teardownSteps.push(this.teardownContext);
      this.teardownSteps.push(this.teardownTestElements);
      this.teardownSteps.push(this.teardownAJAXListeners);
      this.teardownSteps.push(this.teardownPromiseListeners);

      if (this.callbacks.afterTeardown) {
        this.teardownSteps.push(this.callbacks.afterTeardown);
        delete this.callbacks.afterTeardown;
      }
    }

    setupTestElements() {
      let testElementContainer = document.querySelector('#ember-testing-container');
      if (!testElementContainer) {
        testElementContainer = document.createElement('div');
        testElementContainer.setAttribute('id', 'ember-testing-container');
        document.body.appendChild(testElementContainer);
      }

      let testEl = document.querySelector('#ember-testing');
      if (!testEl) {
        let element = document.createElement('div');
        element.setAttribute('id', 'ember-testing');

        testElementContainer.appendChild(element);
        this.fixtureResetValue = '';
      } else {
        this.fixtureResetValue = testElementContainer.innerHTML;
      }
    }

    setupContext(options) {
      let context = this.getContext();

      Ember.assign(context, {
        dispatcher: null,
        inject: {}
      }, options);

      this.setToString();
      (0, _testHelpers.setContext)(context);
      this.context = context;
    }

    setContext(context) {
      this.context = context;
    }

    getContext() {
      if (this.context) {
        return this.context;
      }

      return this.context = (0, _testHelpers.getContext)() || {};
    }

    setToString() {
      this.context.toString = () => {
        if (this.subjectName) {
          return `test context for: ${this.subjectName}`;
        }

        if (this.name) {
          return `test context for: ${this.name}`;
        }
      };
    }

    setupAJAXListeners() {
      (0, _settled._setupAJAXHooks)();
    }

    teardownAJAXListeners() {
      (0, _settled._teardownAJAXHooks)();
    }

    setupPromiseListeners() {
      (0, _rsvp._setupPromiseListeners)();
    }

    teardownPromiseListeners() {
      (0, _rsvp._teardownPromiseListeners)();
    }

    teardownTestElements() {
      document.getElementById('ember-testing-container').innerHTML = this.fixtureResetValue;

      // Ember 2.0.0 removed Ember.View as public API, so only do this when
      // Ember.View is present
      if (Ember.View && Ember.View.views) {
        Ember.View.views = {};
      }
    }

    teardownContext() {
      var context = this.context;
      this.context = undefined;
      (0, _testHelpers.unsetContext)();

      if (context && context.dispatcher && !context.dispatcher.isDestroyed) {
        Ember.run(function () {
          context.dispatcher.destroy();
        });
      }
    }
  };
});
define('ember-test-helpers/legacy-0-6-x/build-registry', ['exports', 'require'], function (exports, _require2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (resolver) {
    var fallbackRegistry, registry, container;
    var namespace = Ember.Object.create({
      Resolver: {
        create() {
          return resolver;
        }
      }
    });

    function register(name, factory) {
      var thingToRegisterWith = registry || container;

      if (!(container.factoryFor ? container.factoryFor(name) : container.lookupFactory(name))) {
        thingToRegisterWith.register(name, factory);
      }
    }

    if (Ember.Application.buildRegistry) {
      fallbackRegistry = Ember.Application.buildRegistry(namespace);
      fallbackRegistry.register('component-lookup:main', Ember.ComponentLookup);

      registry = new Ember.Registry({
        fallback: fallbackRegistry
      });

      if (Ember.ApplicationInstance && Ember.ApplicationInstance.setupRegistry) {
        Ember.ApplicationInstance.setupRegistry(registry);
      }

      // these properties are set on the fallback registry by `buildRegistry`
      // and on the primary registry within the ApplicationInstance constructor
      // but we need to manually recreate them since ApplicationInstance's are not
      // exposed externally
      registry.normalizeFullName = fallbackRegistry.normalizeFullName;
      registry.makeToString = fallbackRegistry.makeToString;
      registry.describe = fallbackRegistry.describe;

      var owner = Owner.create({
        __registry__: registry,
        __container__: null
      });

      container = registry.container({ owner: owner });
      owner.__container__ = container;

      exposeRegistryMethodsWithoutDeprecations(container);
    } else {
      container = Ember.Application.buildContainer(namespace);
      container.register('component-lookup:main', Ember.ComponentLookup);
    }

    // Ember 1.10.0 did not properly add `view:toplevel` or `view:default`
    // to the registry in Ember.Application.buildRegistry :(
    //
    // Ember 2.0.0 removed Ember.View as public API, so only do this when
    // Ember.View is present
    if (Ember.View) {
      register('view:toplevel', Ember.View.extend());
    }

    // Ember 2.0.0 removed Ember._MetamorphView from the Ember global, so only
    // do this when present
    if (Ember._MetamorphView) {
      register('view:default', Ember._MetamorphView);
    }

    var globalContext = typeof global === 'object' && global || self;
    if (requirejs.entries['ember-data/setup-container']) {
      // ember-data is a proper ember-cli addon since 2.3; if no 'import
      // 'ember-data'' is present somewhere in the tests, there is also no `DS`
      // available on the globalContext and hence ember-data wouldn't be setup
      // correctly for the tests; that's why we import and call setupContainer
      // here; also see https://github.com/emberjs/data/issues/4071 for context
      var setupContainer = (0, _require2.default)('ember-data/setup-container')['default'];
      setupContainer(registry || container);
    } else if (globalContext.DS) {
      var DS = globalContext.DS;
      if (DS._setupContainer) {
        DS._setupContainer(registry || container);
      } else {
        register('transform:boolean', DS.BooleanTransform);
        register('transform:date', DS.DateTransform);
        register('transform:number', DS.NumberTransform);
        register('transform:string', DS.StringTransform);
        register('serializer:-default', DS.JSONSerializer);
        register('serializer:-rest', DS.RESTSerializer);
        register('adapter:-rest', DS.RESTAdapter);
      }
    }

    return {
      registry,
      container,
      owner
    };
  };

  /* globals global, self, requirejs */

  function exposeRegistryMethodsWithoutDeprecations(container) {
    var methods = ['register', 'unregister', 'resolve', 'normalize', 'typeInjection', 'injection', 'factoryInjection', 'factoryTypeInjection', 'has', 'options', 'optionsForType'];

    function exposeRegistryMethod(container, method) {
      if (method in container) {
        container[method] = function () {
          return container._registry[method].apply(container._registry, arguments);
        };
      }
    }

    for (var i = 0, l = methods.length; i < l; i++) {
      exposeRegistryMethod(container, methods[i]);
    }
  }

  var Owner = function () {
    if (Ember._RegistryProxyMixin && Ember._ContainerProxyMixin) {
      return Ember.Object.extend(Ember._RegistryProxyMixin, Ember._ContainerProxyMixin, {
        _emberTestHelpersMockOwner: true
      });
    }

    return Ember.Object.extend({
      _emberTestHelpersMockOwner: true
    });
  }();
});
define('ember-test-helpers/legacy-0-6-x/ext/rsvp', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports._setupPromiseListeners = _setupPromiseListeners;
  exports._teardownPromiseListeners = _teardownPromiseListeners;


  let originalAsync;

  /**
    Configures `RSVP` to resolve promises on the run-loop's action queue. This is
    done by Ember internally since Ember 1.7 and it is only needed to
    provide a consistent testing experience for users of Ember < 1.7.
  
    @private
  */
  function _setupPromiseListeners() {
    originalAsync = Ember.RSVP.configure('async');

    Ember.RSVP.configure('async', function (callback, promise) {
      Ember.run.backburner.schedule('actions', () => {
        callback(promise);
      });
    });
  }

  /**
    Resets `RSVP`'s `async` to its prior value.
  
    @private
  */
  function _teardownPromiseListeners() {
    Ember.RSVP.configure('async', originalAsync);
  }
});
define('ember-test-helpers/legacy-0-6-x/test-module-for-acceptance', ['exports', 'ember-test-helpers/legacy-0-6-x/abstract-test-module', '@ember/test-helpers'], function (exports, _abstractTestModule, _testHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = class extends _abstractTestModule.default {
    setupContext() {
      super.setupContext({ application: this.createApplication() });
    }

    teardownContext() {
      Ember.run(() => {
        (0, _testHelpers.getContext)().application.destroy();
      });

      super.teardownContext();
    }

    createApplication() {
      let { Application, config } = this.callbacks;
      let application;

      Ember.run(() => {
        application = Application.create(config);
        application.setupForTesting();
        application.injectTestHelpers();
      });

      return application;
    }
  };
});
define('ember-test-helpers/legacy-0-6-x/test-module-for-component', ['exports', 'ember-test-helpers/legacy-0-6-x/test-module', 'ember-test-helpers/has-ember-version', 'ember-test-helpers/legacy-0-6-x/-legacy-overrides'], function (exports, _testModule, _hasEmberVersion, _legacyOverrides) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setupComponentIntegrationTest = setupComponentIntegrationTest;
  /* globals EmberENV */
  let ACTION_KEY;
  if ((0, _hasEmberVersion.default)(2, 0)) {
    ACTION_KEY = 'actions';
  } else {
    ACTION_KEY = '_actions';
  }

  const isPreGlimmer = !(0, _hasEmberVersion.default)(1, 13);

  exports.default = class extends _testModule.default {
    constructor(componentName, description, callbacks) {
      // Allow `description` to be omitted
      if (!callbacks && typeof description === 'object') {
        callbacks = description;
        description = null;
      } else if (!callbacks) {
        callbacks = {};
      }

      let integrationOption = callbacks.integration;
      let hasNeeds = Array.isArray(callbacks.needs);

      super('component:' + componentName, description, callbacks);

      this.componentName = componentName;

      if (hasNeeds || callbacks.unit || integrationOption === false) {
        this.isUnitTest = true;
      } else if (integrationOption) {
        this.isUnitTest = false;
      } else {
        Ember.deprecate('the component:' + componentName + ' test module is implicitly running in unit test mode, ' + 'which will change to integration test mode by default in an upcoming version of ' + 'ember-test-helpers. Add `unit: true` or a `needs:[]` list to explicitly opt in to unit ' + 'test mode.', false, {
          id: 'ember-test-helpers.test-module-for-component.test-type',
          until: '0.6.0'
        });
        this.isUnitTest = true;
      }

      if (!this.isUnitTest && !this.isLegacy) {
        callbacks.integration = true;
      }

      if (this.isUnitTest || this.isLegacy) {
        this.setupSteps.push(this.setupComponentUnitTest);
      } else {
        this.callbacks.subject = function () {
          throw new Error("component integration tests do not support `subject()`. Instead, render the component as if it were HTML: `this.render('<my-component foo=true>');`. For more information, read: http://guides.emberjs.com/current/testing/testing-components/");
        };
        this.setupSteps.push(this.setupComponentIntegrationTest);
        this.teardownSteps.unshift(this.teardownComponent);
      }

      if (Ember.View && Ember.View.views) {
        this.setupSteps.push(this._aliasViewRegistry);
        this.teardownSteps.unshift(this._resetViewRegistry);
      }
    }

    initIntegration(options) {
      this.isLegacy = options.integration === 'legacy';
      this.isIntegration = options.integration !== 'legacy';
    }

    _aliasViewRegistry() {
      this._originalGlobalViewRegistry = Ember.View.views;
      var viewRegistry = this.container.lookup('-view-registry:main');

      if (viewRegistry) {
        Ember.View.views = viewRegistry;
      }
    }

    _resetViewRegistry() {
      Ember.View.views = this._originalGlobalViewRegistry;
    }

    setupComponentUnitTest() {
      var _this = this;
      var resolver = this.resolver;
      var context = this.context;

      var layoutName = 'template:components/' + this.componentName;

      var layout = resolver.resolve(layoutName);

      var thingToRegisterWith = this.registry || this.container;
      if (layout) {
        thingToRegisterWith.register(layoutName, layout);
        thingToRegisterWith.injection(this.subjectName, 'layout', layoutName);
      }
      var eventDispatcher = resolver.resolve('event_dispatcher:main');
      if (eventDispatcher) {
        thingToRegisterWith.register('event_dispatcher:main', eventDispatcher);
      }

      context.dispatcher = this.container.lookup('event_dispatcher:main') || Ember.EventDispatcher.create();
      context.dispatcher.setup({}, '#ember-testing');

      context._element = null;

      this.callbacks.render = function () {
        var subject;

        Ember.run(function () {
          subject = context.subject();
          subject.appendTo('#ember-testing');
        });

        context._element = subject.element;

        _this.teardownSteps.unshift(function () {
          Ember.run(function () {
            Ember.tryInvoke(subject, 'destroy');
          });
        });
      };

      this.callbacks.append = function () {
        Ember.deprecate('this.append() is deprecated. Please use this.render() or this.$() instead.', false, {
          id: 'ember-test-helpers.test-module-for-component.append',
          until: '0.6.0'
        });
        return context.$();
      };

      context.$ = function () {
        this.render();
        var subject = this.subject();

        return subject.$.apply(subject, arguments);
      };
    }

    setupComponentIntegrationTest() {
      if (isPreGlimmer) {
        return _legacyOverrides.preGlimmerSetupIntegrationForComponent.apply(this, arguments);
      } else {
        return setupComponentIntegrationTest.apply(this, arguments);
      }
    }

    setupContext() {
      super.setupContext();

      // only setup the injection if we are running against a version
      // of Ember that has `-view-registry:main` (Ember >= 1.12)
      if (this.container.factoryFor ? this.container.factoryFor('-view-registry:main') : this.container.lookupFactory('-view-registry:main')) {
        (this.registry || this.container).injection('component', '_viewRegistry', '-view-registry:main');
      }

      if (!this.isUnitTest && !this.isLegacy) {
        this.context.factory = function () {};
      }
    }

    teardownComponent() {
      var component = this.component;
      if (component) {
        Ember.run(component, 'destroy');
        this.component = null;
      }
    }
  };
  function setupComponentIntegrationTest() {
    var module = this;
    var context = this.context;

    this.actionHooks = context[ACTION_KEY] = {};
    context.dispatcher = this.container.lookup('event_dispatcher:main') || Ember.EventDispatcher.create();
    context.dispatcher.setup({}, '#ember-testing');

    var hasRendered = false;
    var OutletView = module.container.factoryFor ? module.container.factoryFor('view:-outlet') : module.container.lookupFactory('view:-outlet');
    var OutletTemplate = module.container.lookup('template:-outlet');
    var toplevelView = module.component = OutletView.create();
    var hasOutletTemplate = !!OutletTemplate;
    var outletState = {
      render: {
        owner: Ember.getOwner ? Ember.getOwner(module.container) : undefined,
        into: undefined,
        outlet: 'main',
        name: 'application',
        controller: module.context,
        ViewClass: undefined,
        template: OutletTemplate
      },

      outlets: {}
    };

    var element = document.getElementById('ember-testing');
    var templateId = 0;

    if (hasOutletTemplate) {
      Ember.run(() => {
        toplevelView.setOutletState(outletState);
      });
    }

    context.render = function (template) {
      if (!template) {
        throw new Error('in a component integration test you must pass a template to `render()`');
      }
      if (Ember.isArray(template)) {
        template = template.join('');
      }
      if (typeof template === 'string') {
        template = Ember.Handlebars.compile(template);
      }

      var templateFullName = 'template:-undertest-' + ++templateId;
      this.registry.register(templateFullName, template);
      var stateToRender = {
        owner: Ember.getOwner ? Ember.getOwner(module.container) : undefined,
        into: undefined,
        outlet: 'main',
        name: 'index',
        controller: module.context,
        ViewClass: undefined,
        template: module.container.lookup(templateFullName),
        outlets: {}
      };

      if (hasOutletTemplate) {
        stateToRender.name = 'index';
        outletState.outlets.main = { render: stateToRender, outlets: {} };
      } else {
        stateToRender.name = 'application';
        outletState = { render: stateToRender, outlets: {} };
      }

      Ember.run(() => {
        toplevelView.setOutletState(outletState);
      });

      if (!hasRendered) {
        Ember.run(module.component, 'appendTo', '#ember-testing');
        hasRendered = true;
      }

      if (EmberENV._APPLICATION_TEMPLATE_WRAPPER !== false) {
        // ensure the element is based on the wrapping toplevel view
        // Ember still wraps the main application template with a
        // normal tagged view
        context._element = element = document.querySelector('#ember-testing > .ember-view');
      } else {
        context._element = element = document.querySelector('#ember-testing');
      }
    };

    context.$ = function (selector) {
      // emulates Ember internal behavor of `this.$` in a component
      // https://github.com/emberjs/ember.js/blob/v2.5.1/packages/ember-views/lib/views/states/has_element.js#L18
      return selector ? Ember.$(selector, element) : Ember.$(element);
    };

    context.set = function (key, value) {
      var ret = Ember.run(function () {
        return Ember.set(context, key, value);
      });

      if ((0, _hasEmberVersion.default)(2, 0)) {
        return ret;
      }
    };

    context.setProperties = function (hash) {
      var ret = Ember.run(function () {
        return Ember.setProperties(context, hash);
      });

      if ((0, _hasEmberVersion.default)(2, 0)) {
        return ret;
      }
    };

    context.get = function (key) {
      return Ember.get(context, key);
    };

    context.getProperties = function () {
      var args = Array.prototype.slice.call(arguments);
      return Ember.getProperties(context, args);
    };

    context.on = function (actionName, handler) {
      module.actionHooks[actionName] = handler;
    };

    context.send = function (actionName) {
      var hook = module.actionHooks[actionName];
      if (!hook) {
        throw new Error('integration testing template received unexpected action ' + actionName);
      }
      hook.apply(module.context, Array.prototype.slice.call(arguments, 1));
    };

    context.clearRender = function () {
      Ember.run(function () {
        toplevelView.setOutletState({
          render: {
            owner: module.container,
            into: undefined,
            outlet: 'main',
            name: 'application',
            controller: module.context,
            ViewClass: undefined,
            template: undefined
          },
          outlets: {}
        });
      });
    };
  }
});
define('ember-test-helpers/legacy-0-6-x/test-module-for-model', ['exports', 'require', 'ember-test-helpers/legacy-0-6-x/test-module'], function (exports, _require2, _testModule) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = class extends _testModule.default {
    constructor(modelName, description, callbacks) {
      super('model:' + modelName, description, callbacks);

      this.modelName = modelName;

      this.setupSteps.push(this.setupModel);
    }

    setupModel() {
      var container = this.container;
      var defaultSubject = this.defaultSubject;
      var callbacks = this.callbacks;
      var modelName = this.modelName;

      var adapterFactory = container.factoryFor ? container.factoryFor('adapter:application') : container.lookupFactory('adapter:application');
      if (!adapterFactory) {
        if (requirejs.entries['ember-data/adapters/json-api']) {
          adapterFactory = (0, _require2.default)('ember-data/adapters/json-api')['default'];
        }

        // when ember-data/adapters/json-api is provided via ember-cli shims
        // using Ember Data 1.x the actual JSONAPIAdapter isn't found, but the
        // above require statement returns a bizzaro object with only a `default`
        // property (circular reference actually)
        if (!adapterFactory || !adapterFactory.create) {
          adapterFactory = DS.JSONAPIAdapter || DS.FixtureAdapter;
        }

        var thingToRegisterWith = this.registry || this.container;
        thingToRegisterWith.register('adapter:application', adapterFactory);
      }

      callbacks.store = function () {
        var container = this.container;
        return container.lookup('service:store') || container.lookup('store:main');
      };

      if (callbacks.subject === defaultSubject) {
        callbacks.subject = function (options) {
          var container = this.container;

          return Ember.run(function () {
            var store = container.lookup('service:store') || container.lookup('store:main');
            return store.createRecord(modelName, options);
          });
        };
      }
    }
  };
});
define('ember-test-helpers/legacy-0-6-x/test-module', ['exports', 'ember-test-helpers/legacy-0-6-x/abstract-test-module', '@ember/test-helpers', 'ember-test-helpers/legacy-0-6-x/build-registry', '@ember/test-helpers/has-ember-version'], function (exports, _abstractTestModule, _testHelpers, _buildRegistry, _hasEmberVersion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = class extends _abstractTestModule.default {
    constructor(subjectName, description, callbacks) {
      // Allow `description` to be omitted, in which case it should
      // default to `subjectName`
      if (!callbacks && typeof description === 'object') {
        callbacks = description;
        description = subjectName;
      }

      super(description || subjectName, callbacks);

      this.subjectName = subjectName;
      this.description = description || subjectName;
      this.resolver = this.callbacks.resolver || (0, _testHelpers.getResolver)();

      if (this.callbacks.integration && this.callbacks.needs) {
        throw new Error("cannot declare 'integration: true' and 'needs' in the same module");
      }

      if (this.callbacks.integration) {
        this.initIntegration(callbacks);
        delete callbacks.integration;
      }

      this.initSubject();
      this.initNeeds();
    }

    initIntegration(options) {
      if (options.integration === 'legacy') {
        throw new Error("`integration: 'legacy'` is only valid for component tests.");
      }
      this.isIntegration = true;
    }

    initSubject() {
      this.callbacks.subject = this.callbacks.subject || this.defaultSubject;
    }

    initNeeds() {
      this.needs = [this.subjectName];
      if (this.callbacks.needs) {
        this.needs = this.needs.concat(this.callbacks.needs);
        delete this.callbacks.needs;
      }
    }

    initSetupSteps() {
      this.setupSteps = [];
      this.contextualizedSetupSteps = [];

      if (this.callbacks.beforeSetup) {
        this.setupSteps.push(this.callbacks.beforeSetup);
        delete this.callbacks.beforeSetup;
      }

      this.setupSteps.push(this.setupContainer);
      this.setupSteps.push(this.setupContext);
      this.setupSteps.push(this.setupTestElements);
      this.setupSteps.push(this.setupAJAXListeners);
      this.setupSteps.push(this.setupPromiseListeners);

      if (this.callbacks.setup) {
        this.contextualizedSetupSteps.push(this.callbacks.setup);
        delete this.callbacks.setup;
      }
    }

    initTeardownSteps() {
      this.teardownSteps = [];
      this.contextualizedTeardownSteps = [];

      if (this.callbacks.teardown) {
        this.contextualizedTeardownSteps.push(this.callbacks.teardown);
        delete this.callbacks.teardown;
      }

      this.teardownSteps.push(this.teardownSubject);
      this.teardownSteps.push(this.teardownContainer);
      this.teardownSteps.push(this.teardownContext);
      this.teardownSteps.push(this.teardownTestElements);
      this.teardownSteps.push(this.teardownAJAXListeners);
      this.teardownSteps.push(this.teardownPromiseListeners);

      if (this.callbacks.afterTeardown) {
        this.teardownSteps.push(this.callbacks.afterTeardown);
        delete this.callbacks.afterTeardown;
      }
    }

    setupContainer() {
      if (this.isIntegration || this.isLegacy) {
        this._setupIntegratedContainer();
      } else {
        this._setupIsolatedContainer();
      }
    }

    setupContext() {
      var subjectName = this.subjectName;
      var container = this.container;

      var factory = function () {
        return container.factoryFor ? container.factoryFor(subjectName) : container.lookupFactory(subjectName);
      };

      super.setupContext({
        container: this.container,
        registry: this.registry,
        factory: factory,
        register() {
          var target = this.registry || this.container;
          return target.register.apply(target, arguments);
        }
      });

      if (Ember.setOwner) {
        Ember.setOwner(this.context, this.container.owner);
      }

      this.setupInject();
    }

    setupInject() {
      var module = this;
      var context = this.context;

      if (Ember.inject) {
        var keys = (Object.keys || keys)(Ember.inject);

        keys.forEach(function (typeName) {
          context.inject[typeName] = function (name, opts) {
            var alias = opts && opts.as || name;
            Ember.run(function () {
              Ember.set(context, alias, module.container.lookup(typeName + ':' + name));
            });
          };
        });
      }
    }

    teardownSubject() {
      var subject = this.cache.subject;

      if (subject) {
        Ember.run(function () {
          Ember.tryInvoke(subject, 'destroy');
        });
      }
    }

    teardownContainer() {
      var container = this.container;
      Ember.run(function () {
        container.destroy();
      });
    }

    defaultSubject(options, factory) {
      return factory.create(options);
    }

    // allow arbitrary named factories, like rspec let
    contextualizeCallbacks() {
      var callbacks = this.callbacks;
      var context = this.context;

      this.cache = this.cache || {};
      this.cachedCalls = this.cachedCalls || {};

      var keys = (Object.keys || keys)(callbacks);
      var keysLength = keys.length;

      if (keysLength) {
        var deprecatedContext = this._buildDeprecatedContext(this, context);
        for (var i = 0; i < keysLength; i++) {
          this._contextualizeCallback(context, keys[i], deprecatedContext);
        }
      }
    }

    _contextualizeCallback(context, key, callbackContext) {
      var _this = this;
      var callbacks = this.callbacks;
      var factory = context.factory;

      context[key] = function (options) {
        if (_this.cachedCalls[key]) {
          return _this.cache[key];
        }

        var result = callbacks[key].call(callbackContext, options, factory());

        _this.cache[key] = result;
        _this.cachedCalls[key] = true;

        return result;
      };
    }

    /*
      Builds a version of the passed in context that contains deprecation warnings
      for accessing properties that exist on the module.
    */
    _buildDeprecatedContext(module, context) {
      var deprecatedContext = Object.create(context);

      var keysForDeprecation = Object.keys(module);

      for (var i = 0, l = keysForDeprecation.length; i < l; i++) {
        this._proxyDeprecation(module, deprecatedContext, keysForDeprecation[i]);
      }

      return deprecatedContext;
    }

    /*
      Defines a key on an object to act as a proxy for deprecating the original.
    */
    _proxyDeprecation(obj, proxy, key) {
      if (typeof proxy[key] === 'undefined') {
        Object.defineProperty(proxy, key, {
          get() {
            Ember.deprecate('Accessing the test module property "' + key + '" from a callback is deprecated.', false, {
              id: 'ember-test-helpers.test-module.callback-context',
              until: '0.6.0'
            });
            return obj[key];
          }
        });
      }
    }

    _setupContainer(isolated) {
      var resolver = this.resolver;

      var items = (0, _buildRegistry.default)(!isolated ? resolver : Object.create(resolver, {
        resolve: {
          value() {}
        }
      }));

      this.container = items.container;
      this.registry = items.registry;

      if ((0, _hasEmberVersion.default)(1, 13)) {
        var thingToRegisterWith = this.registry || this.container;
        var router = resolver.resolve('router:main');
        router = router || Ember.Router.extend();
        thingToRegisterWith.register('router:main', router);
      }
    }

    _setupIsolatedContainer() {
      var resolver = this.resolver;
      this._setupContainer(true);

      var thingToRegisterWith = this.registry || this.container;

      for (var i = this.needs.length; i > 0; i--) {
        var fullName = this.needs[i - 1];
        var normalizedFullName = resolver.normalize(fullName);
        thingToRegisterWith.register(fullName, resolver.resolve(normalizedFullName));
      }

      if (!this.registry) {
        this.container.resolver = function () {};
      }
    }

    _setupIntegratedContainer() {
      this._setupContainer();
    }
  };
});
define('ember-test-helpers/wait', ['exports', '@ember/test-helpers/settled', '@ember/test-helpers'], function (exports, _settled, _testHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports._teardownPromiseListeners = exports._teardownAJAXHooks = exports._setupPromiseListeners = exports._setupAJAXHooks = undefined;
  Object.defineProperty(exports, '_setupAJAXHooks', {
    enumerable: true,
    get: function () {
      return _settled._setupAJAXHooks;
    }
  });
  Object.defineProperty(exports, '_setupPromiseListeners', {
    enumerable: true,
    get: function () {
      return _settled._setupPromiseListeners;
    }
  });
  Object.defineProperty(exports, '_teardownAJAXHooks', {
    enumerable: true,
    get: function () {
      return _settled._teardownAJAXHooks;
    }
  });
  Object.defineProperty(exports, '_teardownPromiseListeners', {
    enumerable: true,
    get: function () {
      return _settled._teardownPromiseListeners;
    }
  });
  exports.default = wait;


  /**
    Returns a promise that resolves when in a settled state (see `isSettled` for
    a definition of "settled state").
  
    @private
    @deprecated
    @param {Object} [options={}] the options to be used for waiting
    @param {boolean} [options.waitForTimers=true] should timers be waited upon
    @param {boolean} [options.waitForAjax=true] should $.ajax requests be waited upon
    @param {boolean} [options.waitForWaiters=true] should test waiters be waited upon
    @returns {Promise<void>} resolves when settled
  */
  function wait(options = {}) {
    if (typeof options !== 'object' || options === null) {
      options = {};
    }

    return (0, _testHelpers.waitUntil)(() => {
      let waitForTimers = 'waitForTimers' in options ? options.waitForTimers : true;
      let waitForAJAX = 'waitForAJAX' in options ? options.waitForAJAX : true;
      let waitForWaiters = 'waitForWaiters' in options ? options.waitForWaiters : true;

      let {
        hasPendingTimers,
        hasRunLoop,
        hasPendingRequests,
        hasPendingWaiters
      } = (0, _testHelpers.getSettledState)();

      if (waitForTimers && (hasPendingTimers || hasRunLoop)) {
        return false;
      }

      if (waitForAJAX && hasPendingRequests) {
        return false;
      }

      if (waitForWaiters && hasPendingWaiters) {
        return false;
      }

      return true;
    }, { timeout: Infinity });
  }
});
define('dummy/tests/helpers/ember-cli-clipboard', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.triggerSuccess = triggerSuccess;
  exports.triggerError = triggerError;

  exports.default = function () {
    Ember.Test.registerAsyncHelper('triggerCopySuccess', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'success');
    });

    Ember.Test.registerAsyncHelper('triggerCopyError', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'error');
    });
  };

  /* === Integration Test Helpers === */

  /**
   * Fires `success` action for an instance of a copy-button component
   * @function triggerSuccess
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerSuccess(context, selector) {
    fireComponentAction(context, selector, 'success');
  }

  /**
   * Fires `error` action for an instance of a copy-button component
   * @function triggerError
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerError(context, selector) {
    fireComponentAction(context, selector, 'error');
  }

  /* === Acceptance Test Helpers === */

  /**
   * Default export is a function that registers acceptance test helpers
   */


  /* === Private Functions === */

  /**
   * Fires named action for an instance of a copy-button component in an app
   * @function fireComponentActionFromApp
   * @param {Object} app - Ember application
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */
  function fireComponentActionFromApp(app, selector, actionName) {
    fireComponentAction({
      container: app.__container__,
      $: app.$
    }, selector, actionName);
  }

  /**
   * Fires named action for an instance of a copy-button component
   * @function fireComponentAction
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */
  function fireComponentAction(context, selector, actionName) {
    let component = getComponentBySelector(context, selector);
    fireActionByName(component, actionName);
  }

  /**
   * Fetches component reference for a given context and selector
   * @function getComponentBySelector
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Object} component object
   */
  function getComponentBySelector(context, selector = '.copy-btn') {
    let emberId = context.$(selector).attr('id');
    return context.container.lookup('-view-registry:main')[emberId];
  }

  /**
   * Fires a component's action given an action name
   * @function fireActionByName
   * @param {Ember.Component} component - component to fire action from
   * @param {String} actionName - name of action
   * @returns {Void}
   */
  function fireActionByName(component, actionName) {
    let action = component[actionName];

    Ember.run(() => {
      if (typeof action === 'string') {
        component.sendAction(action);
      } else {
        action();
      }
    });
  }
});
define('dummy/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, { until: '1.11.0', id: `ember-power-select-test-support-${name}` }));

      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('dummy/tests/helpers/start-app', ['exports', 'dummy/app', 'dummy/config/environment', 'ember-power-select/test-support/helpers', 'ember-flatpickr/test-support/helpers'], function (exports, _app, _environment, _helpers, _helpers2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;


  (0, _helpers.default)();
  (0, _helpers2.default)();

  function startApp(attrs) {
    let attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(() => {
      let application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/integration/components/ux-tabs-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | uxs-tabs', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "f5ZrVYpU",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-tabs\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "9HLaClCz",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-tabs\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('dummy/tests/integration/components/ux-tabs/item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | uxs-tabs/item/item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "4jV1AGA3",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-tabs/item\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "tCz0MREP",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-tabs/item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('dummy/tests/integration/components/ux-tabs/link-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | uxs-tabs/link', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "vAuyjT46",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-tabs/link\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "zzZNubYU",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-tabs/link\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('dummy/tests/integration/components/uxs-app-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-app', 'Integration | Component | uxs app', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "dhpRD0/a",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-app\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "TLJ96WKV",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-app\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-avatar-icon-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-avatar-icon', 'Integration | Component | uxs avatar icon', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "cg+WsBPB",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-avatar-icon\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "SdmlrIuQ",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-avatar-icon\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-avatar-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-avatar', 'Integration | Component | uxs avatar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "+3WYzPYQ",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-avatar\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "g6v80QO7",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-avatar\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-avatar-text-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-avatar-text', 'Integration | Component | uxs avatar text', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "NlXSHvsH",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-avatar-text\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "9gLIvaqC",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-avatar-text\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-button-group-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-button-group', 'Integration | Component | uxs button group', {
    integration: true
  });

  (0, _emberQunit.test)('it renders a default button', function (assert) {

    this.render(Ember.HTMLBars.template({
      "id": "idomUPbU",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button-group\",null,[[\"name\"],[\"my-group\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $group = this.$('[data-test-uxs-button-group="my-group"]');

    assert.equal($group.text().trim(), '');

    assert.equal($group.attr("class"), 'uxs uxs-button-group ember-view', 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a block group with buttons', function (assert) {

    this.render(Ember.HTMLBars.template({
      "id": "tlfENN5L",
      "block": "{\"symbols\":[\"group\"],\"statements\":[[0,\"\\n\"],[4,\"uxs-button-group\",null,[[\"name\"],[\"my-group\"]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,1,[\"button\"]],\"Button\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,1,[\"link\"]],\"Link\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    let $group = this.$('[data-test-uxs-button-group="my-group"]'),
        $buttons = this.$('[data-test-uxs-button]');

    assert.equal($buttons.length, 2, 'Has correct classes');

    assert.equal($group.attr("class"), 'uxs uxs-button-group ember-view', 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders an inline group with buttons', function (assert) {

    this.set('inline', true);
    this.set('align', 'right');

    this.render(Ember.HTMLBars.template({
      "id": "zztKbQuO",
      "block": "{\"symbols\":[\"group\"],\"statements\":[[0,\"\\n\"],[4,\"uxs-button-group\",null,[[\"name\",\"inline\",\"align\"],[\"my-group\",[23,[\"inline\"]],[23,[\"align\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,1,[\"button\"]],\"Button\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,1,[\"link\"]],\"Link\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    let $group = this.$('[data-test-uxs-button-group="my-group"]'),
        $buttons = this.$('[data-test-uxs-button]');

    assert.equal($buttons.length, 2, 'Has correct classes');

    assert.equal($group.attr("class"), 'uxs uxs-button-group uxs-button-group--inline uxs-button-group--right ember-view', 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a mini disabled group', function (assert) {

    this.set('disabled', true);
    this.set('mini', true);

    this.render(Ember.HTMLBars.template({
      "id": "w9nwfuGG",
      "block": "{\"symbols\":[\"group\"],\"statements\":[[0,\"\\n\"],[4,\"uxs-button-group\",null,[[\"name\",\"disabled\",\"mini\"],[\"my-group\",[23,[\"disabled\"]],[23,[\"mini\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,1,[\"button\"]],\"Button\"],null],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,1,[\"link\"]],\"Link\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    let $group = this.$('[data-test-uxs-button-group="my-group"]'),
        $buttons = this.$('[data-test-uxs-button]');

    assert.equal($buttons.length, 2, 'Has correct classes');

    assert.equal($group.attr("class"), 'uxs uxs-button-group uxs-button-group--disabled uxs-button-group--mini ember-view', 'Has correct classes');
  });
});
define('dummy/tests/integration/components/uxs-button-link-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-button-link', 'Integration | Component | uxs button link', {
    integration: true
  });

  (0, _emberQunit.test)('it renders a default button', function (assert) {

    this.render(Ember.HTMLBars.template({
      "id": "LS81thYe",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button-link\",[\"My Button\",\"index.docs\"],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    assert.equal($button.text().trim(), 'My Button');

    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--primary ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a button with different styles', function (assert) {

    this.set('style', 'primary');

    this.render(Ember.HTMLBars.template({
      "id": "j0Lsfraq",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button-link\",[\"My Button\",\"index.docs\"],[[\"style\"],[[23,[\"style\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--primary ember-view', 'Has correct classes');

    // Update style
    this.set('style', 'accent');

    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--accent ember-view', 'Has correct classes after update');
  });

  (0, _emberQunit.test)('it renders an inline button', function (assert) {

    this.set('inline', true);

    this.render(Ember.HTMLBars.template({
      "id": "zSozPtRd",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button-link\",[\"My Button\",\"index.docs\"],[[\"inline\"],[[23,[\"inline\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--inline uxs-button--primary ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a mini button', function (assert) {

    this.set('mini', true);

    this.render(Ember.HTMLBars.template({
      "id": "j1ufLJv7",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button-link\",[\"My Button\",\"index.docs\"],[[\"mini\"],[[23,[\"mini\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--mini uxs-button--primary ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a naked button', function (assert) {

    this.set('naked', true);

    this.render(Ember.HTMLBars.template({
      "id": "NbWUiYRQ",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button-link\",[\"My Button\",\"index.docs\"],[[\"naked\"],[[23,[\"naked\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--naked uxs-button--primary ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a selected button', function (assert) {

    this.set('selected', true);

    this.render(Ember.HTMLBars.template({
      "id": "kiOKMFBi",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button-link\",[\"My Button\",\"index.docs\"],[[\"selected\"],[[23,[\"selected\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--primary uxs-button--selected ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('test button accesibility', function (assert) {

    this.set('disabled', false);

    this.render(Ember.HTMLBars.template({
      "id": "2HZmBZXK",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button-link\",[\"My Button\",\"index.docs\"],[[\"disabled\"],[[23,[\"disabled\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    assert.equal($button.attr('aria-label'), 'My Button');
    assert.equal($button.attr('role'), 'link');

    this.set('disabled', true);

    assert.equal($button[0].hasAttribute('aria-disabled'), true);
    assert.equal($button[0].hasAttribute('disabled'), true);
  });
});
define('dummy/tests/integration/components/uxs-button-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-button', 'Integration | Component | uxs button', {
    integration: true
  });

  (0, _emberQunit.test)('it renders a default button', function (assert) {

    this.render(Ember.HTMLBars.template({
      "id": "fganhX1b",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button\",[\"My Button\"],null],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    assert.equal($button.text().trim(), 'My Button');

    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--primary ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a button with different styles', function (assert) {

    this.set('style', 'primary');

    this.render(Ember.HTMLBars.template({
      "id": "IzxD+qj7",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button\",[\"My Button\"],[[\"style\"],[[23,[\"style\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--primary ember-view', 'Has correct classes');

    // Update style
    this.set('style', 'accent');

    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--accent ember-view', 'Has correct classes after update');
  });

  (0, _emberQunit.test)('it renders an inline button', function (assert) {

    this.set('inline', true);

    this.render(Ember.HTMLBars.template({
      "id": "BZ7XZacM",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button\",[\"My Button\"],[[\"inline\"],[[23,[\"inline\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--inline uxs-button--primary ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a mini button', function (assert) {

    this.set('mini', true);

    this.render(Ember.HTMLBars.template({
      "id": "wXa7NJkb",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button\",[\"My Button\"],[[\"mini\"],[[23,[\"mini\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--mini uxs-button--primary ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a naked button', function (assert) {

    this.set('naked', true);

    this.render(Ember.HTMLBars.template({
      "id": "hytHjacV",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button\",[\"My Button\"],[[\"naked\"],[[23,[\"naked\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--naked uxs-button--primary ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a selected button', function (assert) {

    this.set('selected', true);

    this.render(Ember.HTMLBars.template({
      "id": "eY3VfNA4",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button\",[\"My Button\"],[[\"selected\"],[[23,[\"selected\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--primary uxs-button--selected ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a loading button', function (assert) {

    this.set('loading', false);

    this.render(Ember.HTMLBars.template({
      "id": "b0HHLpQl",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button\",[\"My Button\"],[[\"loadingText\",\"loading\"],[\"Busy\",[23,[\"loading\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    assert.equal($button.text().trim(), 'My Button');
    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--primary ember-view', true, 'Has correct classes');

    this.set('loading', true);

    assert.equal($button.text().trim(), 'Busy');
    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--loading uxs-button--primary ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it fires an action on button click', function (assert) {

    assert.expect(1);

    this.set('buttonClicked', name => {
      assert.ok(name, 'my-button');
    });

    this.render(Ember.HTMLBars.template({
      "id": "K95L3HlR",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button\",null,[[\"text\",\"name\",\"onClick\"],[\"My Button\",\"my-button\",[27,\"action\",[[22,0,[]],[23,[\"buttonClicked\"]],\"my-button\"],null]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    $button.click();
  });

  (0, _emberQunit.test)('it does not fire an action on button click when disabled', function (assert) {

    assert.expect(1);

    this.set('buttonClicked', name => {
      assert.ok(name, 'my-button', 'action called');
    });

    this.render(Ember.HTMLBars.template({
      "id": "e2+tOYvT",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button\",null,[[\"text\",\"name\",\"onClick\",\"disabled\"],[\"My Button\",\"my-button\",[27,\"action\",[[22,0,[]],[23,[\"buttonClicked\"]],\"my-button\"],null],true]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    $button.click();

    assert.equal($button.attr("class"), 'uxs uxs-button uxs-button--disabled uxs-button--primary ember-view', 'Has correct classes');
  });

  (0, _emberQunit.test)('test button accesibility', function (assert) {

    this.set('disabled', false);

    this.render(Ember.HTMLBars.template({
      "id": "+PpQZ+lU",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-button\",[\"My Button\"],[[\"disabled\"],[[23,[\"disabled\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $button = this.$('[data-test-uxs-button="my-button"]');

    assert.equal($button.attr('aria-label'), 'My Button');
    assert.equal($button.attr('role'), 'button');

    this.set('disabled', true);

    assert.equal($button[0].hasAttribute('aria-disabled'), true);
  });
});
define('dummy/tests/integration/components/uxs-content-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-content', 'Integration | Component | uxs content', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "su0Xa6X7",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-content\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "kLRn20M/",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-content\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-datalist-item-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-datalist-item', 'Integration | Component | uxs datalist item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Yj5BZPMU",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-datalist-item\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "v/Gjnwrk",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-datalist-item\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-datalist-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-datalist', 'Integration | Component | uxs datalist', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "3ThMr/rN",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-datalist\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "ZYQ3PVsN",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-datalist\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-dd-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-dd', 'Integration | Component | uxs dd', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "06lCGIJa",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-dd\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "QoivTfHt",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-dd\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-detail-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-detail', 'Integration | Component | uxs detail', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "SVbEwoX9",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-detail\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "hs7ikW1V",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-detail\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-div-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-div', 'Integration | Component | uxs div', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "u/sj5V9v",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-div\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "jM0Z69HQ",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-div\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-dl-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-dl', 'Integration | Component | uxs dl', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "lJNBGWBQ",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-dl\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "GjclSt87",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-dl\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-dt-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-dt', 'Integration | Component | uxs dt', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "du/4sbtB",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-dt\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "ZO6CifGc",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-dt\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-form-control-row-test', ['ember-qunit', 'ember-flatpickr/test-support/helpers', 'moment'], function (_emberQunit, _helpers, _moment) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-form-control-row', 'Integration | Component | uxs form control row', {
    integration: true
  });

  (0, _emberQunit.test)('it renders a default row', function (assert) {

    this.set('disabled', false);

    this.render(Ember.HTMLBars.template({
      "id": "lBc4mDFG",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-control-row\",null,[[\"name\",\"disabled\"],[\"my-row\",[23,[\"disabled\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $row = this.$('[data-test-uxs-form__control-row="my-row"]');

    assert.equal($row.text().trim(), '');
    assert.equal($row.attr("class"), 'uxs uxs-form__control-row uxs-form__control-row--inline ember-view', 'Has correct classes');

    this.set('disabled', true);

    assert.equal($row.attr("class"), 'uxs uxs-form__control-row uxs-form__control-row--disabled uxs-form__control-row--inline ember-view', 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a row with a contextual input', function (assert) {

    let model = Ember.Object.create({
      foo: 'bar'
    });
    this.set('model', model);
    this.set('disabled', false);

    this.render(Ember.HTMLBars.template({
      "id": "6KA5wUy9",
      "block": "{\"symbols\":[\"control\"],\"statements\":[[4,\"uxs-form-control-row\",null,[[\"model\",\"name\",\"disabled\"],[[23,[\"model\"]],\"my-row\",[23,[\"disabled\"]]]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,1,[\"input\"]]],[[\"name\"],[\"foo\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let $input = this.$('[data-test-uxs-form__input="foo"]');

    assert.equal($input.attr("class"), 'ember-text-field uxs uxs-form__input uxs-form__input--inline uxs-form__input--text ember-view', 'Has correct classes');
    assert.equal($input.val(), 'bar', 'Has correct value');

    this.set('disabled', true);

    assert.equal($input.attr("class"), 'ember-text-field uxs uxs-form__input uxs-form__input--disabled uxs-form__input--inline uxs-form__input--text ember-view', 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a row with a contextual textarea', function (assert) {

    let model = Ember.Object.create({
      foo: 'bar'
    });
    this.set('model', model);
    this.set('disabled', false);

    this.render(Ember.HTMLBars.template({
      "id": "qRfMIFn+",
      "block": "{\"symbols\":[\"control\"],\"statements\":[[4,\"uxs-form-control-row\",null,[[\"model\",\"name\",\"disabled\"],[[23,[\"model\"]],\"my-row\",[23,[\"disabled\"]]]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,1,[\"textarea\"]]],[[\"name\"],[\"foo\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let $input = this.$('[data-test-uxs-form__input="foo"]');

    assert.equal($input.attr("class"), 'ember-text-area uxs uxs-form__input uxs-form__input--inline uxs-form__input--textarea ember-view', 'Has correct classes');
    assert.equal($input.val(), 'bar', 'Has correct value');

    this.set('disabled', true);

    assert.equal($input.attr("class"), 'ember-text-area uxs uxs-form__input uxs-form__input--disabled uxs-form__input--inline uxs-form__input--textarea ember-view', 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a row with a contextual icon', function (assert) {

    this.set('disabled', false);

    this.render(Ember.HTMLBars.template({
      "id": "v5Bo3QeZ",
      "block": "{\"symbols\":[\"control\"],\"statements\":[[4,\"uxs-form-control-row\",null,[[\"model\",\"name\",\"disabled\"],[[23,[\"model\"]],\"my-row\",[23,[\"disabled\"]]]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,1,[\"icon\"]],\"add\"],[[\"prefix\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let $icon = this.$('[data-test-uxs-form__icon="my-row"]');

    assert.equal($icon.attr("class"), 'uxs uxs-form__icon uxs-form__icon--black uxs-form__icon--inline uxs-form__icon--prefix ember-view', 'Has correct icon classes');
    assert.equal($icon.text().trim(), 'add', 'Has correct icon value');

    this.set('disabled', true);

    assert.equal($icon.attr("class"), 'uxs uxs-form__icon uxs-form__icon--black uxs-form__icon--disabled uxs-form__icon--inline uxs-form__icon--prefix ember-view', 'Has correct updated icon classes');
  });

  (0, _emberQunit.test)('it renders a row with a contextual button', function (assert) {

    this.set('disabled', false);

    this.render(Ember.HTMLBars.template({
      "id": "Pj+/7sE6",
      "block": "{\"symbols\":[\"control\"],\"statements\":[[4,\"uxs-form-control-row\",null,[[\"model\",\"name\",\"disabled\"],[[23,[\"model\"]],\"my-row\",[23,[\"disabled\"]]]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,1,[\"button\"]],\"Save\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let $input = this.$('[data-test-uxs-button="my-row"]');

    assert.equal($input.attr("class"), 'uxs uxs-button uxs-button--inline uxs-button--primary ember-view', 'Has correct classes');
    assert.equal($input.text().trim(), 'Save', 'Has correct value');

    this.set('disabled', true);

    assert.equal($input.attr("class"), 'uxs uxs-button uxs-button--disabled uxs-button--inline uxs-button--primary ember-view', 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a row with a contextual button link', function (assert) {

    this.set('disabled', false);

    this.render(Ember.HTMLBars.template({
      "id": "TjQWyF8a",
      "block": "{\"symbols\":[\"control\"],\"statements\":[[4,\"uxs-form-control-row\",null,[[\"model\",\"name\",\"disabled\"],[[23,[\"model\"]],\"my-row\",[23,[\"disabled\"]]]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,1,[\"link\"]],\"Docs\",\"docs\"],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let $input = this.$('[data-test-uxs-button="my-row"]');

    assert.equal($input.attr("class"), 'uxs uxs-button uxs-button--inline uxs-button--primary ember-view', 'Has correct classes');
    assert.equal($input.text().trim(), 'Docs', 'Has correct value');

    this.set('disabled', true);

    assert.equal($input.attr("class"), 'disabled uxs uxs-button uxs-button--disabled uxs-button--inline uxs-button--primary ember-view', 'Has correct disabled classes');
  });

  (0, _emberQunit.test)('it renders a date control bound to a model property', function (assert) {

    let date = (0, _moment.default)('1983-06-28').toDate(),
        newDate = (0, _moment.default)('1982-11-27').toDate(),
        model = Ember.Object.create({
      date: date
    });

    this.set('model', model);

    this.render(Ember.HTMLBars.template({
      "id": "MZ81Bf4t",
      "block": "{\"symbols\":[\"control\"],\"statements\":[[4,\"uxs-form-control-row\",null,[[\"name\",\"model\"],[\"date\",[23,[\"model\"]]]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,1,[\"date\"]]],[[\"onChange\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"date\"]]],null]],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let selector = '[data-test-uxs-form__input="date"]',
        $input = this.$(selector);

    assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
    assert.equal($input.val(), '28/06/83', 'Has correct value');
    assert.equal($input.attr("class"), 'uxs uxs-form__input uxs-form__input--date uxs-form__input--inline ember-view flatpickr-input', 'Has correct classes');

    // change the value
    (0, _helpers.setFlatpickrDate)(selector, newDate);

    // input is updated
    assert.equal($input.val(), '27/11/82', 'Has value changed');
    assert.equal((0, _moment.default)(this.get('model.date')[0]).format(), (0, _moment.default)(newDate).format(), 'Has model changed');
  });

  (0, _emberQunit.test)('it renders a date control bound to a model property', function (assert) {

    let date = (0, _moment.default)('1983-06-28 21:30:00').toDate(),
        newDate = (0, _moment.default)('1982-11-27 09:45:00').toDate(),
        model = Ember.Object.create({
      date: date
    });

    this.set('model', model);

    this.render(Ember.HTMLBars.template({
      "id": "K+eer6+i",
      "block": "{\"symbols\":[\"control\"],\"statements\":[[4,\"uxs-form-control-row\",null,[[\"name\",\"model\"],[\"date\",[23,[\"model\"]]]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,1,[\"datetime\"]]],[[\"model\",\"name\",\"onChange\"],[[23,[\"model\"]],\"date\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"date\"]]],null]],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let selector = '[data-test-uxs-form__input="date"]',
        $input = this.$(selector);

    assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
    assert.equal($input.val(), '28/06/83 21:30', 'Has correct value');
    assert.equal($input.attr("class"), 'uxs uxs-form__input uxs-form__input--datetime uxs-form__input--inline ember-view flatpickr-input', 'Has correct classes');

    // change the value
    (0, _helpers.setFlatpickrDate)(selector, newDate);

    // input is updated
    assert.equal($input.val(), '27/11/82 09:45', 'Has value changed');
    assert.equal((0, _moment.default)(this.get('model.date')[0]).format(), (0, _moment.default)(newDate).format(), 'Has model changed');
  });

  (0, _emberQunit.test)('it renders a time control bound to a model property', function (assert) {

    let date = (0, _moment.default)('1983-06-28 21:30:00').toDate(),
        newDate = (0, _moment.default)('1982-11-27 09:45:00').toDate(),
        model = Ember.Object.create({
      date: date
    });

    this.set('model', model);

    this.render(Ember.HTMLBars.template({
      "id": "GSM2eLkz",
      "block": "{\"symbols\":[\"control\"],\"statements\":[[4,\"uxs-form-control-row\",null,[[\"name\",\"model\"],[\"date\",[23,[\"model\"]]]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,1,[\"time\"]]],[[\"model\",\"name\",\"onChange\"],[[23,[\"model\"]],\"date\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"date\"]]],null]],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let selector = '[data-test-uxs-form__input="date"]',
        $input = this.$(selector);

    assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
    assert.equal($input.val(), '21:30', 'Has correct value');
    assert.equal($input.attr("class"), 'uxs uxs-form__input uxs-form__input--inline uxs-form__input--time ember-view flatpickr-input', 'Has correct classes');

    // change the value
    (0, _helpers.setFlatpickrDate)(selector, newDate);

    // input is updated
    assert.equal($input.val(), '09:45', 'Has value changed');
    assert.equal((0, _moment.default)(this.get('model.date')[0]).format(), (0, _moment.default)(newDate).format(), 'Has model changed');
  });
});
define('dummy/tests/integration/components/uxs-form-control-test', ['ember-qunit', 'ember-power-select/test-support/helpers', 'ember-flatpickr/test-support/helpers', 'moment'], function (_emberQunit, _helpers, _helpers2, _moment) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-form-control', 'Integration | Component | uxs form control', {
    integration: true
  });

  (0, _emberQunit.test)('it renders a default control', function (assert) {

    this.render(Ember.HTMLBars.template({
      "id": "EgiXLBaV",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-control\",null,[[\"name\"],[\"my-control\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $control = this.$('[data-test-uxs-form__control="my-control"]');

    assert.equal($control.text().trim(), '');

    assert.equal($control.attr("class"), 'uxs uxs-form__control ember-view', 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a control with label & input props', function (assert) {

    this.set('value', 'foo');
    this.set('disabled', false);

    this.render(Ember.HTMLBars.template({
      "id": "udxcRsL+",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-control\",null,[[\"label\",\"name\",\"type\",\"value\",\"disabled\"],[\"My Label\",\"my-control\",\"text\",[23,[\"value\"]],[23,[\"disabled\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $control = this.$('[data-test-uxs-form__control="my-control"]'),
        $label = this.$('[data-test-uxs-form__label="my-control"]'),
        $input = this.$('[data-test-uxs-form__input="my-control"]');

    assert.equal($control.attr("class"), 'uxs uxs-form__control ember-view', 'Has correct classes');

    assert.equal($label.text().trim(), 'My Label');
    assert.equal($label.attr("class"), 'uxs uxs-form__label ember-view', 'Has correct classes');

    assert.equal($input.prop("tagName"), 'INPUT', 'Has correct input tagname');
    assert.equal($input.val(), this.get('value'), 'Has correct input value');
    assert.equal($input.attr("class"), 'ember-text-field uxs uxs-form__input uxs-form__input--text ember-view', 'Has correct classes');

    // Assert disabled state is passed to child components
    this.set('disabled', true);

    $control = this.$('[data-test-uxs-form__control="my-control"]');
    $label = this.$('[data-test-uxs-form__label="my-control"]');
    $input = this.$('[data-test-uxs-form__input="my-control"]');

    assert.equal($control.attr("class"), 'uxs uxs-form__control uxs-form__control--disabled ember-view', 'Has correct classes');

    assert.equal($label.attr("class"), 'uxs uxs-form__label uxs-form__label--disabled ember-view', 'Has correct classes');

    assert.equal($input.attr("class"), 'ember-text-field uxs uxs-form__input uxs-form__input--disabled uxs-form__input--text ember-view', 'Has correct classes');
    assert.equal($input[0].hasAttribute('aria-disabled'), true, 'has aria disabled attr');
    assert.equal($input[0].hasAttribute('disabled'), true, 'has disabled attr');
  });

  (0, _emberQunit.test)('it renders a control with label & input textarea props', function (assert) {

    this.set('value', 'foo');
    this.set('disabled', false);

    this.render(Ember.HTMLBars.template({
      "id": "PUNpRTgd",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-control\",null,[[\"label\",\"name\",\"type\",\"value\",\"disabled\"],[\"My Label\",\"my-control\",\"textarea\",[23,[\"value\"]],[23,[\"disabled\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $control = this.$('[data-test-uxs-form__control="my-control"]'),
        $label = this.$('[data-test-uxs-form__label="my-control"]'),
        $input = this.$('[data-test-uxs-form__input="my-control"]');

    assert.equal($control.attr("class"), 'uxs uxs-form__control ember-view', 'Has correct classes');

    assert.equal($label.text().trim(), 'My Label');
    assert.equal($label.attr("class"), 'uxs uxs-form__label ember-view', 'Has correct classes');

    assert.equal($input.prop("tagName"), 'TEXTAREA', 'Has correct input tagname');
    assert.equal($input.val(), this.get('value'), 'Has correct input value');
    assert.equal($input.val(), this.get('value'), 'Has correct input value');
    assert.equal($input.attr("class"), 'ember-text-area uxs uxs-form__input uxs-form__input--textarea ember-view', 'Has correct classes');

    // Assert disabled state is passed to child components
    this.set('disabled', true);

    $control = this.$('[data-test-uxs-form__control="my-control"]');
    $label = this.$('[data-test-uxs-form__label="my-control"]');
    $input = this.$('[data-test-uxs-form__input="my-control"]');

    assert.equal($control.attr("class"), 'uxs uxs-form__control uxs-form__control--disabled ember-view', 'Has correct classes');

    assert.equal($label.attr("class"), 'uxs uxs-form__label uxs-form__label--disabled ember-view', 'Has correct classes');

    assert.equal($input.attr("class"), 'ember-text-area uxs uxs-form__input uxs-form__input--disabled uxs-form__input--textarea ember-view', 'Has correct classes');
    assert.equal($input[0].hasAttribute('aria-disabled'), true, 'has aria disabled attr');
    assert.equal($input[0].hasAttribute('disabled'), true, 'has disabled attr');
  });

  (0, _emberQunit.test)('it renders a control with a tip property', function (assert) {

    this.set('tip', 'Here\'s a hint...');
    this.set('disabled', false);

    this.render(Ember.HTMLBars.template({
      "id": "I19A0e66",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-control\",null,[[\"tip\",\"name\",\"disabled\"],[[23,[\"tip\"]],\"my-control\",[23,[\"disabled\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $control = this.$('[data-test-uxs-form__control="my-control"]'),
        $tip = this.$('[data-test-uxs-form__tip="my-control"]');

    assert.equal($control.attr("class"), 'uxs uxs-form__control ember-view', 'Has correct classes');

    assert.equal($tip.text().trim(), 'Here\'s a hint...');
    assert.equal($tip.attr("class"), 'uxs uxs-form__tip ember-view', 'Has correct classes');

    this.set('disabled', true);

    assert.equal($tip.attr("class"), 'uxs uxs-form__tip uxs-form__tip--disabled ember-view', 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a control with a warning property', function (assert) {

    this.set('warning', 'I\'m warning you');
    this.set('disabled', false);

    this.render(Ember.HTMLBars.template({
      "id": "vssfnACz",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-control\",null,[[\"warning\",\"name\",\"disabled\"],[[23,[\"warning\"]],\"my-control\",[23,[\"disabled\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $control = this.$('[data-test-uxs-form__control="my-control"]'),
        $warning = this.$('[data-test-uxs-form__warning="my-control"]');

    assert.equal($control.attr("class"), 'uxs uxs-form__control ember-view', 'Has correct classes');

    assert.equal($warning.text().trim(), 'I\'m warning you');
    assert.equal($warning.attr("class"), 'uxs uxs-form__warning ember-view', 'Has correct classes');

    this.set('disabled', true);

    assert.equal($warning.attr("class"), 'uxs uxs-form__warning uxs-form__warning--disabled ember-view', 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a control with a error property', function (assert) {

    this.set('error', 'Oh, that\'s not good');
    this.set('disabled', false);

    this.render(Ember.HTMLBars.template({
      "id": "o2x28xu8",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-control\",null,[[\"error\",\"name\",\"disabled\"],[[23,[\"error\"]],\"my-control\",[23,[\"disabled\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $control = this.$('[data-test-uxs-form__control="my-control"]'),
        $error = this.$('[data-test-uxs-form__error="my-control"]');

    assert.equal($control.attr("class"), 'uxs uxs-form__control ember-view', 'Has correct classes');

    assert.equal($error.text().trim(), 'Oh, that\'s not good');
    assert.equal($error.attr("class"), 'uxs uxs-form__error ember-view', 'Has correct classes');

    this.set('disabled', true);

    assert.equal($error.attr("class"), 'uxs uxs-form__error uxs-form__error--disabled ember-view', 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a control with custom children', function (assert) {

    this.set('value', 'foo');
    this.set('tip', 'Here\'s a hint...', 'assert tip text correct');
    this.set('warning', 'I\'m warning you');
    this.set('error', 'Oh, that\'s not good');

    this.render(Ember.HTMLBars.template({
      "id": "8/+/DSI5",
      "block": "{\"symbols\":[\"control\"],\"statements\":[[4,\"uxs-form-control\",null,[[\"name\"],[\"my-control\"]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,1,[\"label\"]],\"My Label\"],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"input\"]]],[[\"value\"],[[23,[\"value\"]]]]],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"tip\"]],[23,[\"tip\"]]],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"warning\"]],[23,[\"warning\"]]],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[22,1,[\"error\"]],[23,[\"error\"]]],null],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let $control = this.$('[data-test-uxs-form__control="my-control"]'),
        $label = this.$('[data-test-uxs-form__label="my-control"]'),
        $input = this.$('[data-test-uxs-form__input="my-control"]'),
        $tip = this.$('[data-test-uxs-form__tip="my-control"]'),
        $warning = this.$('[data-test-uxs-form__warning="my-control"]'),
        $error = this.$('[data-test-uxs-form__error="my-control"]');

    assert.equal($control.attr("class"), 'uxs uxs-form__control ember-view', 'Has correct classes');

    assert.equal($label.text().trim(), 'My Label');
    assert.equal($label.attr("class"), 'uxs uxs-form__label ember-view', 'Has correct classes');

    assert.equal($input.val(), this.get('value'), 'Has correct input value');
    assert.equal($input.attr("class"), 'ember-text-field uxs uxs-form__input uxs-form__input--text ember-view', 'Has correct classes');

    assert.equal($tip.text().trim(), 'Here\'s a hint...', 'assert tip text correct');
    assert.equal($tip.attr("class"), 'uxs uxs-form__tip ember-view', 'Has correct classes');

    assert.equal($warning.text().trim(), 'I\'m warning you');
    assert.equal($warning.attr("class"), 'uxs uxs-form__warning ember-view', 'Has correct classes');

    assert.equal($error.text().trim(), 'Oh, that\'s not good');
    assert.equal($error.attr("class"), 'uxs uxs-form__error ember-view', 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a control bound to a model property', function (assert) {

    let model = Ember.Object.create({
      foo: 'bar'
    });
    this.set('model', model);

    this.render(Ember.HTMLBars.template({
      "id": "zIgdrs0O",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-control\",null,[[\"name\",\"model\",\"type\"],[\"foo\",[23,[\"model\"]],\"text\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $input = this.$('[data-test-uxs-form__input="foo"]');

    assert.equal($input.val(), 'bar', 'Has correct value');

    // change the model
    this.set('model.foo', 'boop');

    assert.equal($input.val(), 'boop', 'Value is updated after model property is changed');

    // change the value
    $input.val('hello darkness').change();

    assert.equal(model.get('foo'), 'hello darkness', 'Input change updates bound model property');
  });

  (0, _emberQunit.test)('it renders a custom text control bound to a model property', function (assert) {

    let model = Ember.Object.create({
      foo: 'bar'
    });
    this.set('model', model);

    this.render(Ember.HTMLBars.template({
      "id": "MAY3WJqn",
      "block": "{\"symbols\":[\"control\"],\"statements\":[[4,\"uxs-form-control\",null,[[\"name\",\"model\"],[\"foo\",[23,[\"model\"]]]],{\"statements\":[[0,\"    \"],[1,[22,1,[\"input\"]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let $input = this.$('[data-test-uxs-form__input="foo"]');

    assert.equal($input.val(), 'bar', 'Has correct value');

    // change the model
    this.set('model.foo', 'boop');

    assert.equal($input.val(), 'boop', 'Value is updated after model property is changed');

    // change the value
    $input.val('hello darkness').change();

    assert.equal(model.get('foo'), 'hello darkness', 'Input change updates bound model property');
  });

  (0, _emberQunit.test)('it renders a custom textarea control bound to a model property', function (assert) {

    let model = Ember.Object.create({
      foo: 'bar'
    });
    this.set('model', model);

    this.render(Ember.HTMLBars.template({
      "id": "5W22bfyT",
      "block": "{\"symbols\":[\"control\"],\"statements\":[[4,\"uxs-form-control\",null,[[\"name\",\"model\"],[\"foo\",[23,[\"model\"]]]],{\"statements\":[[0,\"    \"],[1,[22,1,[\"textarea\"]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let $input = this.$('[data-test-uxs-form__input="foo"]');

    assert.equal($input.val(), 'bar', 'Has correct value');

    // change the model
    this.set('model.foo', 'boop');

    assert.equal($input.val(), 'boop', 'Value is updated after model property is changed');

    // change the value
    $input.val('hello darkness').change();

    assert.equal(model.get('foo'), 'hello darkness', 'Input change updates bound model property');
  });

  (0, _emberQunit.test)('it renders a custom dropdown control bound to a model property', function (assert) {

    let model = Ember.Object.create({
      gender: 'Male'
    });
    this.set('model', model);
    this.set('genders', ['Female', 'Male', 'Unspecified']);

    this.render(Ember.HTMLBars.template({
      "id": "twhofN4d",
      "block": "{\"symbols\":[\"control\",\"gender\"],\"statements\":[[4,\"uxs-form-control\",null,[[\"name\",\"model\"],[\"gender\",[23,[\"model\"]]]],{\"statements\":[[4,\"component\",[[22,1,[\"dropdown\"]]],[[\"selected\",\"onchange\",\"options\"],[[23,[\"model\",\"gender\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"gender\"]]],null]],null],[23,[\"genders\"]]]],{\"statements\":[[0,\"      \"],[1,[22,2,[]],false],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let selector = '[data-test-uxs-form__input="gender"]',
        $dropdown = this.$(selector);

    assert.equal($dropdown.text().trim(), 'Male', 'Has correct value');

    // change the model
    this.set('model.gender', 'Female');

    assert.equal($dropdown.text().trim(), 'Female', 'Value is updated after model property is changed');

    // open the dropdown
    (0, _helpers.clickTrigger)(selector);
    // select a new gender
    (0, _helpers.selectChoose)(selector, "Unspecified");

    assert.equal(model.get('gender'), 'Unspecified', 'Input change updates bound model property');
  });

  (0, _emberQunit.test)('it renders a date control bound to a model property', function (assert) {

    let date = (0, _moment.default)('1983-06-28').toDate(),
        newDate = (0, _moment.default)('1982-11-27').toDate(),
        model = Ember.Object.create({
      date: date
    });

    this.set('model', model);

    this.render(Ember.HTMLBars.template({
      "id": "3pOIPZ6m",
      "block": "{\"symbols\":[\"control\"],\"statements\":[[4,\"uxs-form-control\",null,[[\"name\",\"model\"],[\"date\",[23,[\"model\"]]]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,1,[\"date\"]]],[[\"onChange\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"date\"]]],null]],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let selector = '[data-test-uxs-form__input="date"]',
        $input = this.$(selector);

    assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
    assert.equal($input.val(), '28/06/83', 'Has correct value');
    assert.equal($input.attr("class"), 'uxs uxs-form__input uxs-form__input--date ember-view flatpickr-input', 'Has correct classes');

    // change the value
    (0, _helpers2.setFlatpickrDate)(selector, newDate);

    // input is updated
    assert.equal($input.val(), '27/11/82', 'Has value changed');
    assert.equal((0, _moment.default)(this.get('model.date')[0]).format(), (0, _moment.default)(newDate).format(), 'Has model changed');
  });

  (0, _emberQunit.test)('it renders a date control bound to a model property', function (assert) {

    let date = (0, _moment.default)('1983-06-28 21:30:00').toDate(),
        newDate = (0, _moment.default)('1982-11-27 09:45:00').toDate(),
        model = Ember.Object.create({
      date: date
    });

    this.set('model', model);

    this.render(Ember.HTMLBars.template({
      "id": "sXod/M7g",
      "block": "{\"symbols\":[\"control\"],\"statements\":[[4,\"uxs-form-control\",null,[[\"name\",\"model\"],[\"date\",[23,[\"model\"]]]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,1,[\"datetime\"]]],[[\"model\",\"name\",\"onChange\"],[[23,[\"model\"]],\"date\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"date\"]]],null]],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let selector = '[data-test-uxs-form__input="date"]',
        $input = this.$(selector);

    assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
    assert.equal($input.val(), '28/06/83 21:30', 'Has correct value');
    assert.equal($input.attr("class"), 'uxs uxs-form__input uxs-form__input--datetime ember-view flatpickr-input', 'Has correct classes');

    // change the value
    (0, _helpers2.setFlatpickrDate)(selector, newDate);

    // input is updated
    assert.equal($input.val(), '27/11/82 09:45', 'Has value changed');
    assert.equal((0, _moment.default)(this.get('model.date')[0]).format(), (0, _moment.default)(newDate).format(), 'Has model changed');
  });

  (0, _emberQunit.test)('it renders a time control bound to a model property', function (assert) {

    let date = (0, _moment.default)('1983-06-28 21:30:00').toDate(),
        newDate = (0, _moment.default)('1982-11-27 09:45:00').toDate(),
        model = Ember.Object.create({
      date: date
    });

    this.set('model', model);

    this.render(Ember.HTMLBars.template({
      "id": "BfHW5H5e",
      "block": "{\"symbols\":[\"control\"],\"statements\":[[4,\"uxs-form-control\",null,[[\"name\",\"model\"],[\"date\",[23,[\"model\"]]]],{\"statements\":[[0,\"    \"],[1,[27,\"component\",[[22,1,[\"time\"]]],[[\"model\",\"name\",\"onChange\"],[[23,[\"model\"]],\"date\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"date\"]]],null]],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let selector = '[data-test-uxs-form__input="date"]',
        $input = this.$(selector);

    assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
    assert.equal($input.val(), '21:30', 'Has correct value');
    assert.equal($input.attr("class"), 'uxs uxs-form__input uxs-form__input--time ember-view flatpickr-input', 'Has correct classes');

    // change the value
    (0, _helpers2.setFlatpickrDate)(selector, newDate);

    // input is updated
    assert.equal($input.val(), '09:45', 'Has value changed');
    assert.equal((0, _moment.default)(this.get('model.date')[0]).format(), (0, _moment.default)(newDate).format(), 'Has model changed');
  });
});
define('dummy/tests/integration/components/uxs-form-date-test', ['ember-qunit', 'moment', 'ember-flatpickr/test-support/helpers'], function (_emberQunit, _moment, _helpers) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-form-date', 'Integration | Component | uxs form date', {
    integration: true
  });

  (0, _emberQunit.test)('it renders a default date input', function (assert) {

    let date = (0, _moment.default)('1983-06-28').toDate(),
        newDate = (0, _moment.default)('1982-11-27').toDate();

    this.set('date', date);

    this.render(Ember.HTMLBars.template({
      "id": "USVoJfJN",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-date\",null,[[\"date\",\"name\",\"onChange\"],[[23,[\"date\"]],\"date\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"date\"]]],null]],null]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let selector = '[data-test-uxs-form__input="date"]',
        $input = this.$(selector);

    assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
    assert.equal($input.val(), '28/06/83', 'Has correct value');
    assert.equal($input.attr("class"), 'uxs uxs-form__input uxs-form__input--date ember-view flatpickr-input', 'Has correct classes');

    // change the value
    (0, _helpers.setFlatpickrDate)(selector, newDate);

    // input is updated
    assert.equal($input.val(), '27/11/82', 'Has value changed');
    assert.equal((0, _moment.default)(this.get('date')[0]).format(), (0, _moment.default)(newDate).format(), 'Has model changed');
  });

  (0, _emberQunit.test)('it renders a model bound date input', function (assert) {

    let date = (0, _moment.default)('1983-06-28').toDate(),
        newDate = (0, _moment.default)('1982-11-27').toDate(),
        model = Ember.Object.create({
      date: date
    });

    this.set('model', model);

    this.render(Ember.HTMLBars.template({
      "id": "/PoB0/E8",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-date\",null,[[\"model\",\"name\",\"onChange\"],[[23,[\"model\"]],\"date\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"date\"]]],null]],null]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let selector = '[data-test-uxs-form__input="date"]',
        $input = this.$(selector);

    assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
    assert.equal($input.val(), '28/06/83', 'Has correct value');
    assert.equal($input.attr("class"), 'uxs uxs-form__input uxs-form__input--date ember-view flatpickr-input', 'Has correct classes');

    // change the value
    (0, _helpers.setFlatpickrDate)(selector, newDate);

    // input is updated
    assert.equal($input.val(), '27/11/82', 'Has value changed');
    assert.equal((0, _moment.default)(this.get('model.date')[0]).format(), (0, _moment.default)(newDate).format(), 'Has model changed');
  });
});
define('dummy/tests/integration/components/uxs-form-datetime-test', ['ember-qunit', 'moment', 'ember-flatpickr/test-support/helpers'], function (_emberQunit, _moment, _helpers) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-form-datetime', 'Integration | Component | uxs form datetime', {
    integration: true
  });

  (0, _emberQunit.test)('it renders a default datetime input', function (assert) {

    let date = (0, _moment.default)('1983-06-28 21:30:00').toDate(),
        newDate = (0, _moment.default)('1982-11-27 09:45:00').toDate();

    this.set('date', date);

    this.render(Ember.HTMLBars.template({
      "id": "zkIx+SYr",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-datetime\",null,[[\"date\",\"name\",\"onChange\"],[[23,[\"date\"]],\"date\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"date\"]]],null]],null]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let selector = '[data-test-uxs-form__input="date"]',
        $input = this.$(selector);

    assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
    assert.equal($input.val(), '28/06/83 21:30', 'Has correct value');
    assert.equal($input.attr("class"), 'uxs uxs-form__input uxs-form__input--datetime ember-view flatpickr-input', 'Has correct classes');

    // change the value
    (0, _helpers.setFlatpickrDate)(selector, newDate);

    // input is updated
    assert.equal($input.val(), '27/11/82 09:45', 'Has value changed');
    assert.equal((0, _moment.default)(this.get('date')[0]).format(), (0, _moment.default)(newDate).format(), 'Has model changed');
  });

  (0, _emberQunit.test)('it renders a model bound datetime input', function (assert) {

    let date = (0, _moment.default)('1983-06-28 21:30:00').toDate(),
        newDate = (0, _moment.default)('1982-11-27 09:45:00').toDate(),
        model = Ember.Object.create({
      date: date
    });

    this.set('model', model);

    this.render(Ember.HTMLBars.template({
      "id": "jBxVZcUT",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-datetime\",null,[[\"model\",\"name\",\"onChange\"],[[23,[\"model\"]],\"date\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"date\"]]],null]],null]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let selector = '[data-test-uxs-form__input="date"]',
        $input = this.$(selector);

    assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
    assert.equal($input.val(), '28/06/83 21:30', 'Has correct value');
    assert.equal($input.attr("class"), 'uxs uxs-form__input uxs-form__input--datetime ember-view flatpickr-input', 'Has correct classes');

    // change the value
    (0, _helpers.setFlatpickrDate)(selector, newDate);

    // input is updated
    assert.equal($input.val(), '27/11/82 09:45', 'Has value changed');
    assert.equal((0, _moment.default)(this.get('model.date')[0]).format(), (0, _moment.default)(newDate).format(), 'Has model changed');
  });
});
define('dummy/tests/integration/components/uxs-form-dropdown-multiple-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-form-dropdown-multiple', 'Integration | Component | uxs form dropdown multiple', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "XYHPeIKZ",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-form-dropdown-multiple\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "0WbU+V8e",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-form-dropdown-multiple\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-form-dropdown-test', ['@ember/test-helpers', 'ember-qunit', 'ember-power-select/test-support/helpers'], function (_testHelpers, _emberQunit, _helpers) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-form-dropdown', 'Integration | Component | uxs form dropdown', {
    integration: true
  });

  (0, _emberQunit.test)('it renders a default input', function (assert) {
    this.set('value', 'Miguel');
    this.set('names', ['Stefan', 'Miguel', 'Tomster', 'Pluto']);

    this.render(Ember.HTMLBars.template({
      "id": "seabwu3L",
      "block": "{\"symbols\":[\"name\"],\"statements\":[[4,\"uxs-form-dropdown\",null,[[\"selected\",\"name\",\"options\",\"onchange\"],[[23,[\"value\"]],\"my-dropdown\",[23,[\"names\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"value\"]]],null]],null]]],{\"statements\":[[0,\"    \"],[1,[22,1,[]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
      "meta": {}
    }));

    let selector = '[data-test-uxs-form__input="my-dropdown"] ',
        $input = this.$(selector);

    assert.equal($input.prop("tagName"), 'DIV', 'Has correct tag name');
    assert.equal($input.text().trim(), 'Miguel', 'Has correct value');
    assert.equal($input.attr("class"), 'uxs uxs-form__input uxs-form__input--dropdown ember-view', 'Has correct classes');

    // open the dropdown
    (0, _helpers.clickTrigger)(selector);

    assert.equal((0, _testHelpers.findAll)('.ember-power-select-dropdown .ember-power-select-option').length, 4, 'Dropdown is rendered');

    // select a new version
    (0, _helpers.selectChoose)(selector, "Tomster");

    assert.equal($input.text().trim(), 'Tomster', 'Has value changed');
  });
});
define('dummy/tests/integration/components/uxs-form-error-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-form-error', 'Integration | Component | uxs form error', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('error', 'Oooh, that\'s not good');

    this.render(Ember.HTMLBars.template({
      "id": "G+OBMKtf",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-error\",[[23,[\"error\"]]],[[\"name\"],[\"my-error\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $error = this.$('[data-test-uxs-form__error="my-error"]');

    assert.equal($error.prop("tagName"), 'DIV', 'Has correct tag name');
    assert.equal($error.text().trim(), 'Oooh, that\'s not good', 'Has correct text');
    assert.equal($error.attr("class"), 'uxs uxs-form__error ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a disabled error', function (assert) {
    this.set('error', 'Oooh, that\'s not good');
    this.set('disabled', true);

    this.render(Ember.HTMLBars.template({
      "id": "dfHU3XIW",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-error\",[[23,[\"error\"]]],[[\"name\",\"disabled\"],[\"my-error\",[23,[\"disabled\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $error = this.$('[data-test-uxs-form__error="my-error"]');

    assert.equal($error.prop("tagName"), 'DIV', 'Has correct tag name');
    assert.equal($error.text().trim(), 'Oooh, that\'s not good', 'Has correct text');
    assert.equal($error.attr("class"), 'uxs uxs-form__error uxs-form__error--disabled ember-view', true, 'Has correct classes');
  });
});
define('dummy/tests/integration/components/uxs-form-input-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-form-input', 'Integration | Component | uxs form input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders a default input', function (assert) {
    this.set('value', 'foo');

    this.render(Ember.HTMLBars.template({
      "id": "MP0DrgUD",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-input\",null,[[\"value\",\"name\"],[[23,[\"value\"]],\"my-input\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $input = this.$('[data-test-uxs-form__input="my-input"]');

    assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
    assert.equal($input.val(), 'foo', 'Has correct value');
    assert.equal($input.attr("class"), 'ember-text-field uxs uxs-form__input uxs-form__input--text ember-view', 'Has correct classes');

    // change the value
    $input.val('bar').change();

    assert.equal($input.val(), 'bar', 'Has value changed');
  });

  (0, _emberQunit.test)('it renders a numeric input', function (assert) {
    this.set('value', 42);
    this.set('disabled', true);

    this.render(Ember.HTMLBars.template({
      "id": "C/kNuhXb",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-input\",null,[[\"type\",\"value\",\"name\",\"disabled\"],[\"number\",[23,[\"value\"]],\"my-input\",[23,[\"disabled\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $input = this.$('[data-test-uxs-form__input="my-input"]');

    assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
    assert.equal($input.val(), 42, 'Has correct value');
    assert.equal($input.attr("class"), 'ember-text-field uxs uxs-form__input uxs-form__input--disabled uxs-form__input--number ember-view', 'Has correct classes');
    assert.equal($input[0].hasAttribute('aria-disabled'), true, 'has aria disabled attr');
    assert.equal($input[0].hasAttribute('disabled'), true, 'has disabled attr');
  });

  (0, _emberQunit.test)('it renders an input bound to a model property', function (assert) {

    let model = Ember.Object.create({
      foo: 'bar'
    });
    this.set('model', model);

    this.render(Ember.HTMLBars.template({
      "id": "WdeIjFd4",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-input\",null,[[\"name\",\"model\"],[\"foo\",[23,[\"model\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $input = this.$('[data-test-uxs-form__input="foo"]');

    assert.equal($input.val(), 'bar', 'Has correct value');

    this.set('model.foo', 'boop');

    assert.equal($input.val(), 'boop', 'Value is updated after model property is changed');

    // change the value
    $input.val('hello darkness').change();

    assert.equal(model.get('foo'), 'hello darkness', 'Input change updates bound model property');
  });
});
define('dummy/tests/integration/components/uxs-form-label-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-form-label', 'Integration | Component | uxs form label', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('label', 'Username');

    this.render(Ember.HTMLBars.template({
      "id": "AWQAOsNa",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-label\",[[23,[\"label\"]]],[[\"name\"],[\"my-label\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $label = this.$('[data-test-uxs-form__label="my-label"]');

    assert.equal($label.prop("tagName"), 'LABEL', 'Has correct tag name');
    assert.equal($label.text().trim(), 'Username', 'Has correct text');
    assert.equal($label.attr("class"), 'uxs uxs-form__label ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a required label', function (assert) {
    this.set('label', 'Username');
    this.set('required', true);
    this.set('error', false);

    this.render(Ember.HTMLBars.template({
      "id": "fweyY0gn",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-label\",[[23,[\"label\"]]],[[\"name\",\"required\",\"error\"],[\"my-label\",[23,[\"required\"]],[23,[\"error\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $label = this.$('[data-test-uxs-form__label="my-label"]');

    assert.equal($label.prop("tagName"), 'LABEL', 'Has correct tag name');
    assert.equal($label.text().trim(), 'Username', 'Has correct text');
    assert.equal($label.attr("class"), 'uxs uxs-form__label uxs-form__label--required ember-view', true, 'Has correct classes');

    // change error

    this.set('error', true);

    assert.equal($label.attr("class"), 'uxs uxs-form__label uxs-form__label--error uxs-form__label--required ember-view', true, 'Has correct classes');
  });
});
define('dummy/tests/integration/components/uxs-form-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  // import jQuery from 'jquery';

  (0, _emberQunit.moduleForComponent)('uxs-form', 'Integration | Component | uxs form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders a default form', function (assert) {

    this.render(Ember.HTMLBars.template({
      "id": "em492RBk",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-form\",null,[[\"name\"],[\"my-form\"]],{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    let $form = this.$('[data-test-uxs-form="my-form"]');

    assert.equal($form.text().trim(), 'template block text');

    assert.equal($form.attr("class"), 'uxs uxs-form ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a form with a contextual control', function (assert) {

    let model = Ember.Object.create({
      foo: 'bar'
    });
    this.set('model', model);

    this.render(Ember.HTMLBars.template({
      "id": "L6uC3Tmp",
      "block": "{\"symbols\":[\"form\"],\"statements\":[[0,\"\\n\"],[4,\"uxs-form\",null,[[\"name\",\"model\"],[\"my-form\",[23,[\"model\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,1,[\"control\"]]],[[\"name\",\"type\",\"label\"],[\"foo\",\"text\",\"Foo\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    let $form = this.$('[data-test-uxs-form="my-form"]'),
        $input = this.$('[data-test-uxs-form__input="foo"]');

    assert.equal($input.val(), 'bar');

    assert.equal($form.attr("class"), 'uxs uxs-form ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it submits a form with a contextual control button', function (assert) {

    assert.expect(1);

    let model = Ember.Object.create({
      foo: 'bar'
    });
    this.set('model', model);
    this.set('submit', model => {
      assert.ok(Ember.get(model, 'foo'), 'bar');
      return false;
    });

    this.render(Ember.HTMLBars.template({
      "id": "6V4SW+0X",
      "block": "{\"symbols\":[\"form\"],\"statements\":[[0,\"\\n\"],[4,\"uxs-form\",null,[[\"name\",\"model\",\"onSubmit\"],[\"my-form\",[23,[\"model\"]],[27,\"action\",[[22,0,[]],[23,[\"submit\"]],[23,[\"model\"]]],null]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,1,[\"control\"]]],[[\"name\",\"type\",\"label\"],[\"foo\",\"text\",\"Foo\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,1,[\"submit\"]],\"Submit\"],[[\"name\"],[\"my-submit\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    let $submit = this.$('[data-test-uxs-button="my-submit"]');

    $submit.click();
  });

  // test('it submits a form on input return', function(assert) {
  //
  //   assert.expect(1);
  //
  //   let model = EmberObject.create({
  //     foo: 'bar'
  //   });
  //   this.set('model', model);
  //   this.set('submit', (model) => {
  //     assert.ok(get(model, 'foo'), 'bar');
  //     return false;
  //   });
  //
  //   this.render(hbs `
  //     {{#uxs-form name="my-form" model=model onSubmit=(action submit model) as |form|}}
  //       {{form.control name="foo" type="text" label="Foo"}}
  //       {{form.submit "Submit" name="my-submit"}}
  //     {{/uxs-form}}
  //   `);
  //
  //   let selector = '[data-test-uxs-form__input="foo"]',
  //     $input = this.$(selector),
  //     event = jQuery.Event("keyup", {
  //       keyCode: 13
  //     });
  //
  //   $input.trigger(event);
  //
  // });

  (0, _emberQunit.test)('it does not submit a disabled form with a contextual control', function (assert) {

    assert.expect(0);

    let model = Ember.Object.create({
      foo: 'bar'
    });
    this.set('model', model);
    this.set('submit', model => {
      assert.ok(Ember.get(model, 'foo'), 'bar');
    });

    this.render(Ember.HTMLBars.template({
      "id": "L8Wrhvzl",
      "block": "{\"symbols\":[\"form\"],\"statements\":[[0,\"\\n\"],[4,\"uxs-form\",null,[[\"disabled\",\"name\",\"model\",\"onSubmit\"],[true,\"my-form\",[23,[\"model\"]],[27,\"action\",[[22,0,[]],[23,[\"submit\"]],[23,[\"model\"]]],null]]],{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,1,[\"control\"]]],[[\"name\",\"type\",\"label\"],[\"foo\",\"text\",\"Foo\"]]],false],[0,\"\\n      \"],[1,[27,\"component\",[[22,1,[\"submit\"]],\"Submit\"],[[\"name\"],[\"my-submit\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    let $submit = this.$('[data-test-uxs-button="my-submit"]');

    $submit.click();
  });
});
define('dummy/tests/integration/components/uxs-form-textarea-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-form-textarea', 'Integration | Component | uxs form textarea', {
    integration: true
  });

  (0, _emberQunit.test)('it renders a default textarea', function (assert) {
    this.set('value', 'foo');

    this.render(Ember.HTMLBars.template({
      "id": "pobMT1OP",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-textarea\",null,[[\"value\",\"name\"],[[23,[\"value\"]],\"my-textarea\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $textarea = this.$('[data-test-uxs-form__input="my-textarea"]');

    assert.equal($textarea.prop("tagName"), 'TEXTAREA', 'Has correct tag name');
    assert.equal($textarea.val(), 'foo', 'Has correct value');
    assert.equal($textarea.attr("class"), 'ember-text-area uxs uxs-form__input uxs-form__input--textarea ember-view', true, 'Has correct classes');

    // change the value
    $textarea.val('bar').change();

    assert.equal($textarea.val(), 'bar', 'Has value changed');
  });

  (0, _emberQunit.test)('it renders a numeric textarea', function (assert) {
    this.set('value', 42);
    this.set('disabled', true);

    this.render(Ember.HTMLBars.template({
      "id": "S2smRaMU",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-textarea\",null,[[\"type\",\"value\",\"name\",\"disabled\"],[\"number\",[23,[\"value\"]],\"my-textarea\",[23,[\"disabled\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $textarea = this.$('[data-test-uxs-form__input="my-textarea"]');

    assert.equal($textarea.prop("tagName"), 'TEXTAREA', 'Has correct tag name');
    assert.equal($textarea.val(), 42, 'Has correct value');
    assert.equal($textarea.attr("class"), 'ember-text-area uxs uxs-form__input uxs-form__input--disabled uxs-form__input--textarea ember-view', true, 'Has correct classes');
    assert.equal($textarea[0].hasAttribute('aria-disabled'), true, 'has aria disabled attr');
    assert.equal($textarea[0].hasAttribute('disabled'), true, 'has disabled attr');
  });

  (0, _emberQunit.test)('it renders an textarea bound to a model property', function (assert) {

    let model = Ember.Object.create({
      foo: 'bar'
    });
    this.set('model', model);

    this.render(Ember.HTMLBars.template({
      "id": "vm/WCbk1",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-textarea\",null,[[\"name\",\"model\"],[\"foo\",[23,[\"model\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $textarea = this.$('[data-test-uxs-form__input="foo"]');

    assert.equal($textarea.val(), 'bar', 'Has correct value');

    // change the model
    this.set('model.foo', 'boop');

    assert.equal($textarea.val(), 'boop', 'Value is updated after model property is changed');

    // change the value
    $textarea.val('hello darkness').change();

    assert.equal(model.get('foo'), 'hello darkness', 'Input change updates bound model property');
  });
});
define('dummy/tests/integration/components/uxs-form-time-test', ['ember-qunit', 'moment', 'ember-flatpickr/test-support/helpers'], function (_emberQunit, _moment, _helpers) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-form-time', 'Integration | Component | uxs form time', {
    integration: true
  });

  (0, _emberQunit.test)('it renders a default time input', function (assert) {

    let date = (0, _moment.default)('1983-06-28 21:30:00').toDate(),
        newDate = (0, _moment.default)('1982-11-27 09:45:00').toDate();

    this.set('date', date);

    this.render(Ember.HTMLBars.template({
      "id": "pt+evNgn",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-time\",null,[[\"date\",\"name\",\"onChange\"],[[23,[\"date\"]],\"date\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"date\"]]],null]],null]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let selector = '[data-test-uxs-form__input="date"]',
        $input = this.$(selector);

    assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
    assert.equal($input.val(), '21:30', 'Has correct value');
    assert.equal($input.attr("class"), 'uxs uxs-form__input uxs-form__input--time ember-view flatpickr-input', 'Has correct classes');

    // change the value
    (0, _helpers.setFlatpickrDate)(selector, newDate);

    // input is updated
    assert.equal($input.val(), '09:45', 'Has value changed');
    assert.equal((0, _moment.default)(this.get('date')[0]).format(), (0, _moment.default)(newDate).format(), 'Has model changed');
  });

  (0, _emberQunit.test)('it renders a model bound time input', function (assert) {

    let date = (0, _moment.default)('1983-06-28 21:30:00').toDate(),
        newDate = (0, _moment.default)('1982-11-27 09:45:00').toDate(),
        model = Ember.Object.create({
      date: date
    });

    this.set('model', model);

    this.render(Ember.HTMLBars.template({
      "id": "JVRTNmgb",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-time\",null,[[\"model\",\"name\",\"onChange\"],[[23,[\"model\"]],\"date\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"date\"]]],null]],null]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let selector = '[data-test-uxs-form__input="date"]',
        $input = this.$(selector);

    assert.equal($input.prop("tagName"), 'INPUT', 'Has correct tag name');
    assert.equal($input.val(), '21:30', 'Has correct value');
    assert.equal($input.attr("class"), 'uxs uxs-form__input uxs-form__input--time ember-view flatpickr-input', 'Has correct classes');

    // change the value
    (0, _helpers.setFlatpickrDate)(selector, newDate);

    // input is updated
    assert.equal($input.val(), '09:45', 'Has value changed');
    assert.equal((0, _moment.default)(this.get('model.date')[0]).format(), (0, _moment.default)(newDate).format(), 'Has model changed');
  });
});
define('dummy/tests/integration/components/uxs-form-tip-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-form-tip', 'Integration | Component | uxs form tip', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('tip', 'How about I tell you a little story');

    this.render(Ember.HTMLBars.template({
      "id": "cM++8Njc",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-tip\",[[23,[\"tip\"]]],[[\"name\"],[\"my-tip\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $tip = this.$('[data-test-uxs-form__tip="my-tip"]');

    assert.equal($tip.prop("tagName"), 'DIV', 'Has correct tag name');
    assert.equal($tip.text().trim(), 'How about I tell you a little story', 'Has correct text');
    assert.equal($tip.attr("class"), 'uxs uxs-form__tip ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a required tip', function (assert) {
    this.set('tip', 'How about I tell you a little story');
    this.set('required', true);
    this.set('error', false);
    this.set('warning', false);
    this.set('success', false);

    this.render(Ember.HTMLBars.template({
      "id": "ZxA+/Isf",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-tip\",[[23,[\"tip\"]]],[[\"name\",\"required\",\"error\",\"warning\",\"success\"],[\"my-tip\",[23,[\"required\"]],[23,[\"error\"]],[23,[\"warning\"]],[23,[\"success\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $tip = this.$('[data-test-uxs-form__tip="my-tip"]');

    assert.equal($tip.prop("tagName"), 'DIV', 'Has correct tag name');
    assert.equal($tip.text().trim(), 'How about I tell you a little story', 'Has correct text');
    assert.equal($tip.attr("class"), 'uxs uxs-form__tip uxs-form__tip--required ember-view', true, 'Has correct classes');

    // change error

    this.set('error', true);
    this.set('warning', true);
    this.set('success', true);

    assert.equal($tip.attr("class"), 'uxs uxs-form__tip uxs-form__tip--error uxs-form__tip--required uxs-form__tip--success uxs-form__tip--warning ember-view', true, 'Has correct classes');
  });
});
define('dummy/tests/integration/components/uxs-form-warning-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-form-warning', 'Integration | Component | uxs form warning', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('warning', 'Oooh, that\'s not good');

    this.render(Ember.HTMLBars.template({
      "id": "n7t7O5bi",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-warning\",[[23,[\"warning\"]]],[[\"name\"],[\"my-warning\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $warning = this.$('[data-test-uxs-form__warning="my-warning"]');

    assert.equal($warning.prop("tagName"), 'DIV', 'Has correct tag name');
    assert.equal($warning.text().trim(), 'Oooh, that\'s not good', 'Has correct text');
    assert.equal($warning.attr("class"), 'uxs uxs-form__warning ember-view', true, 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a disabled warning', function (assert) {
    this.set('warning', 'Oooh, that\'s not good');
    this.set('disabled', true);

    this.render(Ember.HTMLBars.template({
      "id": "C8MiGMGW",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-form-warning\",[[23,[\"warning\"]]],[[\"name\",\"disabled\"],[\"my-warning\",[23,[\"disabled\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $warning = this.$('[data-test-uxs-form__warning="my-warning"]');

    assert.equal($warning.prop("tagName"), 'DIV', 'Has correct tag name');
    assert.equal($warning.text().trim(), 'Oooh, that\'s not good', 'Has correct text');
    assert.equal($warning.attr("class"), 'uxs uxs-form__warning uxs-form__warning--disabled ember-view', true, 'Has correct classes');
  });
});
define('dummy/tests/integration/components/uxs-header-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-header', 'Integration | Component | uxs header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "5MQ1/QLB",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-header\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "GNHhvpfZ",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-header\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-heading-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-heading', 'Integration | Component | uxs heading', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "qrkbEzXF",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-heading\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "0mK74lIn",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-heading\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-hero-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-hero', 'Integration | Component | uxs hero', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "uT6+vNlU",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-hero\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "v+CkB81v",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-hero\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-icon-link-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-icon-link', 'Integration | Component | uxs icon link', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "yifJojiY",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-icon-link\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "c7mTrjSt",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-icon-link\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-icon-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-icon', 'Integration | Component | uxs form icon', {
    integration: true
  });

  (0, _emberQunit.test)('it renders a default icon', function (assert) {
    this.set('icon', 'add');

    this.render(Ember.HTMLBars.template({
      "id": "jAdPc96w",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-icon\",[[23,[\"icon\"]]],[[\"name\"],[\"my-icon\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $icon = this.$('[data-test-uxs-icon="my-icon"]');

    assert.equal($icon.prop("tagName"), 'DIV', 'Has correct tag name');
    assert.equal($icon.text().trim(), 'add', 'Has correct text');
    assert.equal($icon.attr("class"), 'uxs uxs-icon uxs-icon--black ember-view', 'Has correct classes');
  });

  (0, _emberQunit.test)('it renders a disabled icon', function (assert) {
    this.set('icon', 'add');
    this.set('primary', true);
    this.set('disabled', true);
    this.set('accent', false);
    this.set('error', false);
    this.set('warning', false);

    this.render(Ember.HTMLBars.template({
      "id": "Ba60Nfcw",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-icon\",[[23,[\"icon\"]]],[[\"name\",\"disabled\",\"error\",\"primary\",\"accent\",\"warning\",\"success\"],[\"my-icon\",[23,[\"disabled\"]],[23,[\"error\"]],[23,[\"primary\"]],[23,[\"accent\"]],[23,[\"warning\"]],[23,[\"success\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    let $icon = this.$('[data-test-uxs-icon="my-icon"]');

    assert.equal($icon.prop("tagName"), 'DIV', 'Has correct tag name');
    assert.equal($icon.text().trim(), 'add', 'Has correct text');
    assert.equal($icon.attr("class"), 'uxs uxs-icon uxs-icon--black uxs-icon--disabled uxs-icon--primary ember-view', true, 'Has correct classes');

    // change error

    this.set('disabled', false);
    this.set('primary', false);
    this.set('accent', true);
    this.set('error', true);
    this.set('warning', true);

    assert.equal($icon.attr("class"), 'uxs uxs-icon uxs-icon--accent uxs-icon--black uxs-icon--error uxs-icon--warning ember-view', true, 'Has correct classes');
  });
});
define('dummy/tests/integration/components/uxs-li-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-li', 'Integration | Component | uxs li', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "GApZ0nuI",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-li\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "rQXMKpV3",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-li\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-list-item-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-list-item', 'Integration | Component | uxs list item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "XeQjfF5j",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-list-item\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "tOOdIWo8",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-list-item\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-list-notice-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-list-notice', 'Integration | Component | uxs list notice', {
    integration: true
  });

  (0, _emberQunit.test)('it renders an empty notice component', function (assert) {

    this.render(Ember.HTMLBars.template({
      "id": "ZNROB5D5",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-list-notice\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "rh2kwMHM",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-list-notice\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });

  // test('it renders a simple notice component', function(assert) {
  //
  //   // Handle any actions with this.on('myAction', function(val) { ... });
  //
  //   this.set('text', 'value');
  //
  //   this.render(hbs `{{uxs-list-notice text=text}}`);
  //
  //   assert.equal(find('["uxs-list-notice"]').textContent.trim(), 'value');
  // });
});
define('dummy/tests/integration/components/uxs-list-subheading-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-list-subheading', 'Integration | Component | uxs list subheading', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "R6XoBabi",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-list-subheading\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "3hpXz741",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-list-subheading\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-list-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-list', 'Integration | Component | uxs list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "8Q7CZwao",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-list\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "wIBTlRAb",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-list\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-list/x-subheading-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-list/x-subheading', 'Integration | Component | uxs list/x subheading', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "ZlRfiS9Q",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-list/x-subheading\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "6zYQSj4A",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-list/x-subheading\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-menu-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-menu', 'Integration | Component | uxs menu', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "7HbFqx77",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-menu\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "iNLSL0G7",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-menu\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-nav-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-nav', 'Integration | Component | uxs nav', {
    integration: true
  });

  (0, _emberQunit.test)('it renders a default nav', function (assert) {

    this.set('align', 'left');
    this.set('detail', false);
    this.set('horizontal', false);

    this.render(Ember.HTMLBars.template({
      "id": "S92q4DaM",
      "block": "{\"symbols\":[\"nav\"],\"statements\":[[0,\"\\n\"],[4,\"uxs-nav\",null,[[\"align\",\"detail\",\"horizontal\",\"name\"],[[23,[\"align\"]],[23,[\"detail\"]],[23,[\"horizontal\"]],\"my-nav\"]],{\"statements\":[[0,\"      \"],[4,\"component\",[[22,1,[\"item\"]]],[[\"name\"],[\"my-item\"]],{\"statements\":[[0,\"Nav Item\"]],\"parameters\":[]},null],[0,\"\\n      \"],[1,[27,\"component\",[[22,1,[\"link\"]],\"Nav Link\",\"docs\"],[[\"name\"],[\"my-link\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    let $nav = this.$('[data-test-uxs-nav="my-nav"]'),
        $item = this.$('[data-test-uxs-nav__item="my-item"]'),
        $link = this.$('[data-test-uxs-nav__item="my-link"]');

    assert.equal($item.text().trim(), 'Nav Item');
    assert.equal($link.text().trim(), 'Nav Link');

    assert.equal($nav.attr("class"), 'uxs uxs-nav uxs-nav--left ember-view', true, 'Has correct classes');
  });
});
define('dummy/tests/integration/components/uxs-navbar-logo-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-navbar-logo', 'Integration | Component | uxs navbar logo', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Tr8RpOUf",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-navbar-logo\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "aWE3xeiV",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-navbar-logo\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-navbar-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-navbar', 'Integration | Component | uxs navbar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    this.render(Ember.HTMLBars.template({
      "id": "Ypq4OeRR",
      "block": "{\"symbols\":[],\"statements\":[[1,[27,\"uxs-navbar\",null,[[\"title\"],[\"MyApp\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'MyApp');
  });
});
define('dummy/tests/integration/components/uxs-navbar/desktop-nav-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-navbar/desktop-nav', 'Integration | Component | uxs navbar/desktop nav', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "pn+H7KbP",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-navbar/desktop-nav\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "dtnT72Dk",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-navbar/desktop-nav\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-navbar/mobile-nav-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-navbar/mobile-nav', 'Integration | Component | uxs navbar/mobile nav', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "OjAtKVD7",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-navbar/mobile-nav\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "/dKuR5P4",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-navbar/mobile-nav\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-notice-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-notice', 'Integration | Component | uxs notice', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "l/UoGDFI",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-notice\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "DA/l3ALX",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-notice\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-ol-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-ol', 'Integration | Component | uxs ol', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "BPngD8Vq",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-ol\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "JG3z9fXm",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-ol\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-pagination-controls-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-pagination-controls', 'Integration | Component | uxs pagination controls', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "OT3Pde88",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-pagination-controls\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "XBILFF5B",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-pagination-controls\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-pane-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-pane', 'Integration | Component | uxs pane', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Pv3RHunu",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-pane\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "qRIeMly3",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-pane\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-pill-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-pill', 'Integration | Component | uxs pill', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "pcL36lba",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-pill\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "3HG8Ipeh",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-pill\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-preamble-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-preamble', 'Integration | Component | uxs preamble', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "1tT7XlAb",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-preamble\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "mCJfrSbr",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-preamble\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-search-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-search', 'Integration | Component | uxs search', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "+BayM5bR",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-search\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "xO2WgmxU",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-search\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-splash-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-splash', 'Integration | Component | uxs splash', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "2JvvjWLQ",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-splash\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "XnJFCi06",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-splash\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-subheading-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-subheading', 'Integration | Component | uxs subheading', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "FJAvQnIo",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-subheading\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "chPG5pL9",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-subheading\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-table-cell-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-table-cell', 'Integration | Component | uxs table cell', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "YYf/TtFf",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-table-cell\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "oKAtSdpz",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-table-cell\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-table-heading-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-table-heading', 'Integration | Component | uxs table heading', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "YQt68j/c",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-table-heading\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "X0LA9Rkh",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-table-heading\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-table-row-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-table-row', 'Integration | Component | uxs table row', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "r/HkCHDy",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-table-row\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "edbpSGKT",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-table-row\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-table-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-table', 'Integration | Component | uxs table', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "biTFPEub",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-table\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "uG0HbIsm",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-table\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-text-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-text', 'Integration | Component | uxs text', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "0k+APxIi",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-text\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "NSh1hBXr",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-text\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-toolbar-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-toolbar', 'Integration | Component | uxs toolbar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "QbJADG17",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-toolbar\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "WWJ+MKiC",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-toolbar\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-ul-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-ul', 'Integration | Component | uxs ul', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "wp3C3G2A",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-ul\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "+i7ioYnk",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-ul\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/integration/components/uxs-window-test', ['@ember/test-helpers', 'ember-qunit'], function (_testHelpers, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('uxs-window', 'Integration | Component | uxs window', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "EQlHQM5o",
      "block": "{\"symbols\":[],\"statements\":[[1,[21,\"uxs-window\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "fbo+6W5L",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"uxs-window\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'template block text');
  });
});
define('dummy/tests/lint/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/args-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/args-table.js should pass ESLint\n\n');
  });

  QUnit.test('components/args-table/checkbox.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/args-table/checkbox.js should pass ESLint\n\n');
  });

  QUnit.test('components/args-table/input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/args-table/input.js should pass ESLint\n\n');
  });

  QUnit.test('components/args-table/label.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/args-table/label.js should pass ESLint\n\n');
  });

  QUnit.test('components/args-table/row.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/args-table/row.js should pass ESLint\n\n');
  });

  QUnit.test('components/args-table/type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/args-table/type.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs-toggle.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs-toggle.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-avatar/custom-text-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-avatar/custom-text-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-avatar/icon-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-avatar/icon-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-avatar/image-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-avatar/image-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-avatar/text-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-avatar/text-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-button-group/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-button-group/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-button-link/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-button-link/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-button/action-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-button/action-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-button/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-button/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-content/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-content/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-datalist/all-styles.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-datalist/all-styles.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-datalist/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-datalist/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-datalist/item-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-datalist/item-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-detail/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-detail/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-dropdown/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-dropdown/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-form-control/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-form-control/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-form-control/contextual-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-form-control/contextual-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-form-date/all-styles.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-form-date/all-styles.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-form-date/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-form-date/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-form-input/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-form-input/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-form-textarea/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-form-textarea/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-form/model-bound-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-form/model-bound-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-form/validation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-form/validation.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-header/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-header/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-header/image-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-header/image-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-heading/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-heading/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-icon/action-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-icon/action-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-icon/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-icon/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-list-item/avatar-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-list-item/avatar-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-list-item/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-list-item/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-list-item/content-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-list-item/content-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-list-notice/all-styles.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-list-notice/all-styles.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-list-notice/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-list-notice/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-list-notice/icon-action-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-list-notice/icon-action-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-list/subheading/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-list/subheading/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-list/subheading/yield-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-list/subheading/yield-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-menu/horizontal-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-menu/horizontal-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-menu/vertical-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-menu/vertical-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-navbar/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-navbar/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-pagination/all-styles.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-pagination/all-styles.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-pagination/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-pagination/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-pane/main-aside.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-pane/main-aside.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-pane/single.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-pane/single.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-pane/splash.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-pane/splash.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-pane/split.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-pane/split.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-pane/threes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-pane/threes.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-splash/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-splash/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-subheading/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-subheading/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-table/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-table/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-tabs/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-tabs/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-text/basic-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-text/basic-demo.js should pass ESLint\n\n');
  });

  QUnit.test('components/docs/uxs-window/image-demo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/docs/uxs-window/image-demo.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/components/avatars.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/components/avatars.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/components/datalists.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/components/datalists.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/components/icons.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/components/icons.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/components/lists.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/components/lists.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/components/menus.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/components/menus.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/components/notice.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/components/notice.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/components/pills.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/components/pills.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/forms/button-groups.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/forms/button-groups.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/forms/button-links.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/forms/button-links.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/forms/controls.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/forms/controls.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/forms/date-time-inputs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/forms/date-time-inputs.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/forms/dropdowns.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/forms/dropdowns.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/forms/inputs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/forms/inputs.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/forms/rows.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/forms/rows.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/forms/textareas.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/forms/textareas.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/forms/validation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/forms/validation.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/layout/app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/layout/app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/layout/navbar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/layout/navbar.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/layout/pane.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/layout/pane.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/layout/toolbar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/layout/toolbar.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/layout/window.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/layout/window.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/lists/avatars.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/lists/avatars.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/lists/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/lists/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/lists/items.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/lists/items.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/lists/notices.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/lists/notices.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/lists/subheadings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/lists/subheadings.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/docs/typography/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/docs/typography/index.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/validations/session.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/validations/session.js should pass ESLint\n\n');
  });

  QUnit.test('models/session.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/session.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/docs/forms/rows.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/docs/forms/rows.js should pass ESLint\n\n');
  });

  QUnit.test('routes/docs/forms/validation.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/docs/forms/validation.js should pass ESLint\n\n');
  });

  QUnit.test('utils/consts/styles.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/consts/styles.js should pass ESLint\n\n');
  });
});
define('dummy/tests/lint/templates.template.lint-test', [], function () {
  'use strict';

  QUnit.module('TemplateLint');

  QUnit.test('dummy/templates/app.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/app.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/app/dash.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/app/dash.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/app/double.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/app/double.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/app/single.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/app/single.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/app/splash.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/app/splash.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/app/triple.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/app/triple.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/application.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/args-table.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/args-table.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/args-table/align-options.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/args-table/align-options.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/args-table/checkbox.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/args-table/checkbox.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/args-table/form-type-options.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/args-table/form-type-options.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/args-table/input.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/args-table/input.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/args-table/label.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/args-table/label.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/args-table/row.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/args-table/row.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/args-table/size-options.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/args-table/size-options.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/args-table/style-options.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/args-table/style-options.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/args-table/type.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/args-table/type.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/args-table/weight-options.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/args-table/weight-options.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs-toggle.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs-toggle.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-app/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-app/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-avatar/all-sizes.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-avatar/all-sizes.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-avatar/all-styles.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-avatar/all-styles.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-avatar/custom-text-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-avatar/custom-text-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-avatar/icon-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-avatar/icon-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-avatar/image-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-avatar/image-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-avatar/text-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-avatar/text-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-button-group/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-button-group/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-button-link/all-sizes.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-button-link/all-sizes.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-button-link/all-styles.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-button-link/all-styles.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-button-link/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-button-link/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-button-link/inline-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-button-link/inline-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-button/action-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-button/action-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-button/all-sizes.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-button/all-sizes.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-button/all-styles.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-button/all-styles.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-button/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-button/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-button/inline-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-button/inline-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-content/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-content/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-datalist/all-styles.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-datalist/all-styles.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-datalist/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-datalist/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-datalist/item-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-datalist/item-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-detail/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-detail/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-dl/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-dl/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-dropdown/all-styles.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-dropdown/all-styles.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-dropdown/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-dropdown/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-form-control/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-form-control/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-form-control/contextual-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-form-control/contextual-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-form-date/all-styles.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-form-date/all-styles.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-form-date/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-form-date/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-form-input/all-styles.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-form-input/all-styles.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-form-input/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-form-input/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-form-textarea/all-styles.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-form-textarea/all-styles.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-form-textarea/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-form-textarea/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-form/model-bound-form.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-form/model-bound-form.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-form/validation.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-form/validation.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-header/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-header/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-header/image-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-header/image-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-heading/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-heading/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-icon/action-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-icon/action-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-icon/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-icon/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-list-item/avatar-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-list-item/avatar-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-list-item/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-list-item/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-list-item/content-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-list-item/content-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-list-notice/all-styles.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-list-notice/all-styles.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-list-notice/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-list-notice/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-list-notice/icon-action-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-list-notice/icon-action-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-list/subheading/all-styles.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-list/subheading/all-styles.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-list/subheading/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-list/subheading/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-list/subheading/yield-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-list/subheading/yield-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-menu/divider-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-menu/divider-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-menu/dropdown-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-menu/dropdown-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-menu/horizontal-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-menu/horizontal-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-menu/icon-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-menu/icon-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-menu/item-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'dummy/templates/components/docs/uxs-menu/item-demo.hbs should pass TemplateLint.\n\ndummy/templates/components/docs/uxs-menu/item-demo.hbs\n  5:16  error  Incorrect indentation of attribute \'horizontal\' beginning at L5:C16. Expected \'horizontal\' to be at L6:C6.  attribute-indentation\n  5:38  error  Incorrect indentation of attribute \'align\' beginning at L5:C38. Expected \'align\' to be at L7:C6.  attribute-indentation\n  5:50  error  Incorrect indentation of attribute \'detail\' beginning at L5:C50. Expected \'detail\' to be at L8:C6.  attribute-indentation\n  5:64  error  Incorrect indentation of attribute \'style\' beginning at L5:C64. Expected \'style\' to be at L9:C6.  attribute-indentation\n  5:75  error  Incorrect indentation of block params \'as |menu|}}\' beginning at L5:C75. Expecting the block params to be at L6:C4.  attribute-indentation\n  5:85  error  Incorrect indentation of close curly braces \'}}\' for the component \'{{uxs-menu}}\' beginning at L5:C85. Expected \'{{uxs-menu}}\' to be at L7:C4.  attribute-indentation\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-menu/secondary-text-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-menu/secondary-text-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-menu/subheading-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-menu/subheading-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-menu/vertical-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-menu/vertical-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-navbar/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-navbar/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-navbar/responsive-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-navbar/responsive-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-ol/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-ol/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-pagination/all-styles.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-pagination/all-styles.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-pagination/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-pagination/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-pane/main-aside.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-pane/main-aside.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-pane/single.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-pane/single.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-pane/splash.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-pane/splash.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-pane/split.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-pane/split.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-pane/threes.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-pane/threes.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-splash/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-splash/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-subheading/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-subheading/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-table/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-table/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-table/record-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-table/record-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-tabs/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-tabs/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-text/align-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-text/align-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-text/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-text/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-text/colors-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-text/colors-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-text/sizes-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-text/sizes-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-text/styles-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-text/styles-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-text/weights-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-text/weights-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-window/all-styles.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-window/all-styles.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-window/basic-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-window/basic-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/components/docs/uxs-window/image-demo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/docs/uxs-window/image-demo.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/docs.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/docs/components/avatars.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs/components/avatars.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/docs/components/lists.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs/components/lists.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/docs/components/menus.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs/components/menus.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/docs/components/notice.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs/components/notice.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/docs/components/pills.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs/components/pills.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/docs/components/preamble.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs/components/preamble.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/docs/forms/rows.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs/forms/rows.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/docs/layout/hero.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs/layout/hero.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/docs/layout/navbar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs/layout/navbar.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/docs/layout/toolbar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs/layout/toolbar.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/docs/lists/_subheadings.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs/lists/_subheadings.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/docs/lists/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/docs/lists/index.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/index.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('dummy/templates/not-found.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/not-found.hbs should pass TemplateLint.\n\n');
  });
});
define('dummy/tests/lint/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ux-tabs-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ux-tabs-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ux-tabs/item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ux-tabs/item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ux-tabs/link-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ux-tabs/link-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-app-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-app-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-avatar-icon-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-avatar-icon-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-avatar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-avatar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-avatar-text-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-avatar-text-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-button-group-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-button-group-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-button-link-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-button-link-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-button-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-button-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-content-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-content-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-datalist-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-datalist-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-datalist-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-datalist-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-dd-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-dd-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-div-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-div-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-dl-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-dl-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-dt-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-dt-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-form-control-row-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-form-control-row-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-form-control-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-form-control-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-form-date-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-form-date-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-form-datetime-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-form-datetime-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-form-dropdown-multiple-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-form-dropdown-multiple-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-form-dropdown-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-form-dropdown-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-form-error-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-form-error-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-form-input-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-form-input-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-form-label-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-form-label-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-form-textarea-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-form-textarea-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-form-time-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-form-time-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-form-tip-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-form-tip-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-form-warning-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-form-warning-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-header-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-header-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-heading-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-heading-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-hero-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-hero-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-icon-link-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-icon-link-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-icon-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-icon-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-li-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-li-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-list-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-list-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-list-notice-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-list-notice-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-list-subheading-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-list-subheading-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-list/x-subheading-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-list/x-subheading-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-menu-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-menu-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-nav-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-nav-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-navbar-logo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-navbar-logo-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-navbar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-navbar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-navbar/desktop-nav-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-navbar/desktop-nav-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-navbar/mobile-nav-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-navbar/mobile-nav-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-notice-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-notice-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-ol-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-ol-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-pagination-controls-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-pagination-controls-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-pane-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-pane-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-pill-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-pill-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-preamble-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-preamble-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-search-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-splash-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-splash-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-subheading-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-subheading-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-table-cell-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-table-cell-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-table-heading-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-table-heading-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-table-row-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-table-row-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-table-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-table-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-text-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-text-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-toolbar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-toolbar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-ul-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-ul-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/uxs-window-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/uxs-window-test.js should pass ESLint\n\n');
  });

  QUnit.test('pages/api/class.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pages/api/class.js should pass ESLint\n\n');
  });

  QUnit.test('pages/api/module.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pages/api/module.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/mixins/accessible-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/accessible-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/mixins/alignable-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/alignable-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/mixins/buttonable-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/buttonable-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/mixins/clickable-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/clickable-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/mixins/colorable-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/colorable-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/mixins/styleable-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/styleable-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/mixins/testable-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/testable-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/mixins/textable-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/textable-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/uxs-list-subheading-cache-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/uxs-list-subheading-cache-test.js should pass ESLint\n\n');
  });
});
define('dummy/tests/pages/api/class', ['exports', 'ember-classy-page-object'], function (exports, _emberClassyPageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const ClassPage = _emberClassyPageObject.default.extend({
    navItems: (0, _emberClassyPageObject.collection)({ scope: '[data-test-id="nav-item"]' }),

    title: (0, _emberClassyPageObject.text)('[data-test-class-name]'),
    description: (0, _emberClassyPageObject.text)('[data-test-class-description]'),

    sections: (0, _emberClassyPageObject.collection)({
      scope: '[data-test-api-section]',

      header: (0, _emberClassyPageObject.text)('[data-test-section-header]'),

      items: (0, _emberClassyPageObject.collection)({
        scope: '[data-test-item]',

        header: (0, _emberClassyPageObject.text)('[data-test-item-header]'),
        importPath: (0, _emberClassyPageObject.text)('[data-test-import-path]'),
        description: (0, _emberClassyPageObject.text)('[data-test-item-description]'),

        params: (0, _emberClassyPageObject.collection)({
          scope: '[data-test-item-params] [data-test-item-param]'
        })
      })
    })
  });

  exports.default = ClassPage.create();
});
define('dummy/tests/pages/api/module', ['exports', 'ember-classy-page-object'], function (exports, _emberClassyPageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const ModulePage = _emberClassyPageObject.default.extend({
    navItems: (0, _emberClassyPageObject.collection)({ scope: '[data-test-id="nav-item"]' }),

    sections: (0, _emberClassyPageObject.collection)({
      scope: '[data-test-api-section]',

      header: (0, _emberClassyPageObject.text)('[data-test-section-header]'),

      items: (0, _emberClassyPageObject.collection)({
        scope: '[data-test-item]',

        header: (0, _emberClassyPageObject.text)('[data-test-item-header]'),
        importPath: (0, _emberClassyPageObject.text)('[data-test-import-path]'),
        description: (0, _emberClassyPageObject.text)('[data-test-item-description]'),

        params: (0, _emberClassyPageObject.collection)({
          scope: '[data-test-item-params] [data-test-item-param]'
        })
      })
    })
  });

  exports.default = ModulePage.create();
});
define("qunit/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* globals QUnit */

  var _module = QUnit.module;
  exports.module = _module;
  var test = exports.test = QUnit.test;
  var skip = exports.skip = QUnit.skip;
  var only = exports.only = QUnit.only;
  var todo = exports.todo = QUnit.todo;

  exports.default = QUnit;
});
define('dummy/tests/test-helper', ['dummy/app', 'dummy/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('dummy/tests/unit/mixins/accessible-test', ['ember-ux-sauce/mixins/accessible', 'qunit'], function (_accessible, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Mixin | accessible');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    let AccessibleObject = Ember.Object.extend(_accessible.default);
    let subject = AccessibleObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/mixins/alignable-test', ['ember-ux-sauce/mixins/alignable', 'qunit'], function (_alignable, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Mixin | alignable');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    let AlignableObject = Ember.Object.extend(_alignable.default);
    let subject = AlignableObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/mixins/buttonable-test', ['ember-ux-sauce/mixins/buttonable', 'qunit'], function (_buttonable, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Mixin | buttonable');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    let ButtonableObject = Ember.Object.extend(_buttonable.default);
    let subject = ButtonableObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/mixins/clickable-test', ['ember-ux-sauce/mixins/clickable', 'qunit'], function (_clickable, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Mixin | clickable');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    let ClickableObject = Ember.Object.extend(_clickable.default);
    let subject = ClickableObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/mixins/colorable-test', ['ember-ux-sauce/mixins/colorable', 'qunit'], function (_colorable, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Mixin | colorable');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    let ColorableObject = Ember.Object.extend(_colorable.default);
    let subject = ColorableObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/mixins/styleable-test', ['ember-ux-sauce/mixins/styleable', 'qunit'], function (_styleable, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Mixin | styleable');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    let StyleableObject = Ember.Object.extend(_styleable.default);
    let subject = StyleableObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/mixins/testable-test', ['ember-ux-sauce/mixins/testable', 'qunit'], function (_testable, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Mixin | testable');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    let TestableObject = Ember.Object.extend(_testable.default);
    let subject = TestableObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/mixins/textable-test', ['ember-ux-sauce/mixins/textable', 'qunit'], function (_textable, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Mixin | textable');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    let TextableObject = Ember.Object.extend(_textable.default);
    let subject = TextableObject.create();
    assert.ok(subject);
  });
});
define('dummy/tests/unit/services/uxs-list-subheading-cache-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:uxs-list-subheading-cache', 'Unit | Service | uxs list subheading cache', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    let service = this.subject();
    assert.ok(service);
  });
});
define('dummy/config/environment', [], function() {
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

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
