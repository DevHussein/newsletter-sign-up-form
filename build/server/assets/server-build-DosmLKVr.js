import { r as reactExports, p as production, d as dist, R as React } from "./app-AL-IFE0s.js";
import { PassThrough } from "node:stream";
import require$$1 from "stream";
import require$$1$1 from "util";
import "fs";
import "path";
import "tty";
import "net";
import "events";
import "zlib";
import "buffer";
import "string_decoder";
import "querystring";
import "url";
import "http";
import "crypto";
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f = reactExports, k = Symbol.for("react.element"), l2 = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n2 = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n2.current };
  }
  reactJsxRuntime_production_min.Fragment = l2;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  return reactJsxRuntime_production_min;
}
var reactJsxRuntime_development = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var React2 = reactExports;
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function error(format) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
      }
      function printWarning(level, format, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          if (stack !== "") {
            format += "%s";
            args = args.concat([stack]);
          }
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format);
          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var enableScopeAPI = false;
      var enableCacheElement = false;
      var enableTransitionTracing = false;
      var enableLegacyHidden = false;
      var enableDebugTracing = false;
      var REACT_MODULE_REFERENCE;
      {
        REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      }
      function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") {
          return true;
        }
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
          return true;
        }
        if (typeof type === "object" && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
          // types supported by any Flight configuration anywhere since
          // we don't know which Flight build this will end up being used
          // with.
          type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
            return true;
          }
        }
        return false;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) {
          return displayName;
        }
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              if (outerName !== null) {
                return outerName;
              }
              return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return getComponentNameFromType(init(payload));
              } catch (x) {
                return null;
              }
            }
          }
        }
        return null;
      }
      var assign = Object.assign;
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;
          if (disabledDepth === 0) {
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          if (disabledDepth < 0) {
            error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0) {
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          }
          return "\n" + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
          return "";
        }
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current;
          ReactCurrentDispatcher.current = null;
          disableLogs();
        }
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string") {
            var sampleLines = sample.stack.split("\n");
            var controlLines = control.stack.split("\n");
            var s2 = sampleLines.length - 1;
            var c = controlLines.length - 1;
            while (s2 >= 1 && c >= 0 && sampleLines[s2] !== controlLines[c]) {
              c--;
            }
            for (; s2 >= 1 && c >= 0; s2--, c--) {
              if (sampleLines[s2] !== controlLines[c]) {
                if (s2 !== 1 || c !== 1) {
                  do {
                    s2--;
                    c--;
                    if (c < 0 || sampleLines[s2] !== controlLines[c]) {
                      var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                      if (fn.displayName && _frame.includes("<anonymous>")) {
                        _frame = _frame.replace("<anonymous>", fn.displayName);
                      }
                      {
                        if (typeof fn === "function") {
                          componentFrameCache.set(fn, _frame);
                        }
                      }
                      return _frame;
                    }
                  } while (s2 >= 1 && c >= 0);
                }
                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
          if (typeof fn === "function") {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return "";
        }
        if (typeof type === "function") {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }
        if (typeof type === "string") {
          return describeBuiltInComponentFrame(type);
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {
              }
            }
          }
        }
        return "";
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
              }
              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
          var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        {
          try {
            testStringCoercion(value);
            return false;
          } catch (e) {
            return true;
          }
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        {
          if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;
      var didWarnAboutStringRefs;
      {
        didWarnAboutStringRefs = {};
      }
      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== void 0;
      }
      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== void 0;
      }
      function warnIfStringRefCannotBeAutoConverted(config, self) {
        {
          if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
              error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }
      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
      }
      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
      }
      var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type,
          key,
          ref,
          props,
          // Record the component responsible for creating this element.
          _owner: owner
        };
        {
          element._store = {};
          Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          });
          Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      function jsxDEV(type, config, maybeKey, source, self) {
        {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          if (maybeKey !== void 0) {
            {
              checkKeyStringCoercion(maybeKey);
            }
            key = "" + maybeKey;
          }
          if (hasValidKey(config)) {
            {
              checkKeyStringCoercion(config.key);
            }
            key = "" + config.key;
          }
          if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
          }
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
      }
      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
          }
        }
      }
      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      function isValidElement(object) {
        {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
      }
      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
      }
      function getSourceInfoErrorAddendum(source) {
        {
          return "";
        }
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
      }
      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          setCurrentlyValidatingElement$1(element);
          error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
          setCurrentlyValidatingElement$1(null);
        }
      }
      function validateChildKeys(node, parentType) {
        {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i2 = 0; i2 < node.length; i2++) {
              var child = node[i2];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
      }
      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type === null || type === void 0 || typeof type === "string") {
            return;
          }
          var propTypes;
          if (typeof type === "function") {
            propTypes = type.propTypes;
          } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }
          if (propTypes) {
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
          } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true;
            var _name = getComponentNameFromType(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
          }
          if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
            error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
          }
        }
      }
      function validateFragmentProps(fragment) {
        {
          var keys = Object.keys(fragment.props);
          for (var i2 = 0; i2 < keys.length; i2++) {
            var key = keys[i2];
            if (key !== "children" && key !== "key") {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
              setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
          }
        }
      }
      var didWarnAboutKeySpread = {};
      function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendum();
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
          }
          var element = jsxDEV(type, props, key, source, self);
          if (element == null) {
            return element;
          }
          if (validType) {
            var children = props.children;
            if (children !== void 0) {
              if (isStaticChildren) {
                if (isArray(children)) {
                  for (var i2 = 0; i2 < children.length; i2++) {
                    validateChildKeys(children[i2], type);
                  }
                  if (Object.freeze) {
                    Object.freeze(children);
                  }
                } else {
                  error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                }
              } else {
                validateChildKeys(children, type);
              }
            }
          }
          {
            if (hasOwnProperty.call(props, "key")) {
              var componentName = getComponentNameFromType(type);
              var keys = Object.keys(props).filter(function(k) {
                return k !== "key";
              });
              var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
              if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                didWarnAboutKeySpread[componentName + beforeExample] = true;
              }
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
      }
      function jsxWithValidationStatic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, true);
        }
      }
      function jsxWithValidationDynamic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, false);
        }
      }
      var jsx = jsxWithValidationDynamic;
      var jsxs = jsxWithValidationStatic;
      reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
      reactJsxRuntime_development.jsx = jsx;
      reactJsxRuntime_development.jsxs = jsxs;
    })();
  }
  return reactJsxRuntime_development;
}
if (process.env.NODE_ENV === "production") {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}
var jsxRuntimeExports = jsxRuntime.exports;
var fullPattern = " daum[ /]| deusu/| yadirectfetcher|(?:^|[^g])news(?!sapphire)|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bots?(?:\\b|_)|(?<!(?:lib))http|(?<![hg]m)score|@[a-z][\\w-]+\\.|\\(\\)|\\.com\\b|\\btime/|^<|^[\\w \\.\\-\\(?:\\):]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[^ ]{50,}$|^\\d+\\b|^\\w*search\\b|^\\w+/[\\w\\(\\)]*$|^active|^ad muncher|^amaya|^avsdevicesdk/|^biglotron|^bot|^bw/|^clamav[ /]|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^facebook|^getright/|^gozilla/|^hobbit|^hotzonu|^hwcdn/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/5\\.0\\s[a-z\\.-]+$|^mozilla/\\d\\.\\d \\(compatible;?\\)$|^mozilla/\\d\\.\\d \\w*$|^navermailapp|^netsurf|^offline|^owler|^php|^postman|^python|^rank|^read|^reed|^rest|^rss|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^track|^valid|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|^{{.*}}$|adscanner/|analyzer|archive|ask jeeves/teoma|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check\\b|checker|chrome-lighthouse|chromeframe|classifier|cloudflare|convertify|crawl|cypress/|dareboost|datanyze|dejaclick|detect|dmbrowser|download|evc-batch/|exaleadcloudview|feed|firephp|functionize|gomezagent|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|images|infrawatch|insight|inspect|iplabel|ips-agent|java(?!;)|jsjcw_scanner|library|linkcheck|mail\\.ru/|manager|measure|neustar wpm|node|nutch|offbyone|optimize|pageburst|pagespeed|parser|perl|phantomjs|pingdom|powermarks|preview|proxy|ptst[ /]\\d|reputation|resolver|retriever|rexx;|rigor|rss\\b|scanner\\.|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|tools|torrent|trace|transcoder|url|virtuoso|wappalyzer|webglance|webkit2png|whatcms/|zgrab";
var naivePattern = /bot|crawl|http|lighthouse|scan|search|spider/i;
var pattern;
function getPattern() {
  if (pattern instanceof RegExp) {
    return pattern;
  }
  try {
    pattern = new RegExp(fullPattern, "i");
  } catch (error) {
    pattern = naivePattern;
  }
  return pattern;
}
function isbot(userAgent) {
  return Boolean(userAgent) && getPattern().test(userAgent);
}
var reactDomServerLegacy_node_production_min = {};
/**
 * @license React
 * react-dom-server-legacy.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDomServerLegacy_node_production_min;
function requireReactDomServerLegacy_node_production_min() {
  if (hasRequiredReactDomServerLegacy_node_production_min) return reactDomServerLegacy_node_production_min;
  hasRequiredReactDomServerLegacy_node_production_min = 1;
  var ea = reactExports, fa = require$$1, n2 = Object.prototype.hasOwnProperty, ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = {}, ja = {};
  function ka(a) {
    if (n2.call(ja, a)) return true;
    if (n2.call(ia, a)) return false;
    if (ha.test(a)) return ja[a] = true;
    ia[a] = true;
    return false;
  }
  function q(a, b, c, d, f, e, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = f;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = e;
    this.removeEmptyString = g;
  }
  var r2 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    r2[a] = new q(a, 0, false, a, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var b = a[0];
    r2[b] = new q(b, 1, false, a[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    r2[a] = new q(a, 2, false, a.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    r2[a] = new q(a, 2, false, a, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    r2[a] = new q(a, 3, false, a.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    r2[a] = new q(a, 3, true, a, null, false, false);
  });
  ["capture", "download"].forEach(function(a) {
    r2[a] = new q(a, 4, false, a, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a) {
    r2[a] = new q(a, 6, false, a, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a) {
    r2[a] = new q(a, 5, false, a.toLowerCase(), null, false, false);
  });
  var la = /[\-:]([a-z])/g;
  function ma(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(
      la,
      ma
    );
    r2[b] = new q(b, 1, false, a, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(la, ma);
    r2[b] = new q(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var b = a.replace(la, ma);
    r2[b] = new q(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a) {
    r2[a] = new q(a, 1, false, a.toLowerCase(), null, false, false);
  });
  r2.xlinkHref = new q("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a) {
    r2[a] = new q(a, 1, false, a.toLowerCase(), null, true, true);
  });
  var t2 = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, na = ["Webkit", "ms", "Moz", "O"];
  Object.keys(t2).forEach(function(a) {
    na.forEach(function(b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      t2[b] = t2[a];
    });
  });
  var oa = /["'&<>]/;
  function u(a) {
    if ("boolean" === typeof a || "number" === typeof a) return "" + a;
    a = "" + a;
    var b = oa.exec(a);
    if (b) {
      var c = "", d, f = 0;
      for (d = b.index; d < a.length; d++) {
        switch (a.charCodeAt(d)) {
          case 34:
            b = "&quot;";
            break;
          case 38:
            b = "&amp;";
            break;
          case 39:
            b = "&#x27;";
            break;
          case 60:
            b = "&lt;";
            break;
          case 62:
            b = "&gt;";
            break;
          default:
            continue;
        }
        f !== d && (c += a.substring(f, d));
        f = d + 1;
        c += b;
      }
      a = f !== d ? c + a.substring(f, d) : c;
    }
    return a;
  }
  var pa = /([A-Z])/g, qa = /^ms-/, ra = Array.isArray;
  function v(a, b) {
    return { insertionMode: a, selectedValue: b };
  }
  function sa(a, b, c) {
    switch (b) {
      case "select":
        return v(1, null != c.value ? c.value : c.defaultValue);
      case "svg":
        return v(2, null);
      case "math":
        return v(3, null);
      case "foreignObject":
        return v(1, null);
      case "table":
        return v(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return v(5, null);
      case "colgroup":
        return v(7, null);
      case "tr":
        return v(6, null);
    }
    return 4 <= a.insertionMode || 0 === a.insertionMode ? v(1, null) : a;
  }
  var ta = /* @__PURE__ */ new Map();
  function ua(a, b, c) {
    if ("object" !== typeof c) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    b = true;
    for (var d in c) if (n2.call(c, d)) {
      var f = c[d];
      if (null != f && "boolean" !== typeof f && "" !== f) {
        if (0 === d.indexOf("--")) {
          var e = u(d);
          f = u(("" + f).trim());
        } else {
          e = d;
          var g = ta.get(e);
          void 0 !== g ? e = g : (g = u(e.replace(pa, "-$1").toLowerCase().replace(qa, "-ms-")), ta.set(e, g), e = g);
          f = "number" === typeof f ? 0 === f || n2.call(
            t2,
            d
          ) ? "" + f : f + "px" : u(("" + f).trim());
        }
        b ? (b = false, a.push(' style="', e, ":", f)) : a.push(";", e, ":", f);
      }
    }
    b || a.push('"');
  }
  function w(a, b, c, d) {
    switch (c) {
      case "style":
        ua(a, b, d);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
      if (b = r2.hasOwnProperty(c) ? r2[c] : null, null !== b) {
        switch (typeof d) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!b.acceptsBooleans) return;
        }
        c = b.attributeName;
        switch (b.type) {
          case 3:
            d && a.push(" ", c, '=""');
            break;
          case 4:
            true === d ? a.push(" ", c, '=""') : false !== d && a.push(" ", c, '="', u(d), '"');
            break;
          case 5:
            isNaN(d) || a.push(" ", c, '="', u(d), '"');
            break;
          case 6:
            !isNaN(d) && 1 <= d && a.push(" ", c, '="', u(d), '"');
            break;
          default:
            b.sanitizeURL && (d = "" + d), a.push(" ", c, '="', u(d), '"');
        }
      } else if (ka(c)) {
        switch (typeof d) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
        }
        a.push(" ", c, '="', u(d), '"');
      }
    }
  }
  function x(a, b, c) {
    if (null != b) {
      if (null != c) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
      if ("object" !== typeof b || !("__html" in b)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      b = b.__html;
      null !== b && void 0 !== b && a.push("" + b);
    }
  }
  function va(a) {
    var b = "";
    ea.Children.forEach(a, function(a2) {
      null != a2 && (b += a2);
    });
    return b;
  }
  function wa(a, b, c, d) {
    a.push(z2(c));
    var f = c = null, e;
    for (e in b) if (n2.call(b, e)) {
      var g = b[e];
      if (null != g) switch (e) {
        case "children":
          c = g;
          break;
        case "dangerouslySetInnerHTML":
          f = g;
          break;
        default:
          w(a, d, e, g);
      }
    }
    a.push(">");
    x(a, f, c);
    return "string" === typeof c ? (a.push(u(c)), null) : c;
  }
  var xa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ya = /* @__PURE__ */ new Map();
  function z2(a) {
    var b = ya.get(a);
    if (void 0 === b) {
      if (!xa.test(a)) throw Error("Invalid tag: " + a);
      b = "<" + a;
      ya.set(a, b);
    }
    return b;
  }
  function za(a, b, c, d, f) {
    switch (b) {
      case "select":
        a.push(z2("select"));
        var e = null, g = null;
        for (l2 in c) if (n2.call(c, l2)) {
          var h = c[l2];
          if (null != h) switch (l2) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              w(a, d, l2, h);
          }
        }
        a.push(">");
        x(a, g, e);
        return e;
      case "option":
        g = f.selectedValue;
        a.push(z2("option"));
        var k = h = null, m = null;
        var l2 = null;
        for (e in c) if (n2.call(c, e)) {
          var p = c[e];
          if (null != p) switch (e) {
            case "children":
              h = p;
              break;
            case "selected":
              m = p;
              break;
            case "dangerouslySetInnerHTML":
              l2 = p;
              break;
            case "value":
              k = p;
            default:
              w(a, d, e, p);
          }
        }
        if (null != g) if (c = null !== k ? "" + k : va(h), ra(g)) for (d = 0; d < g.length; d++) {
          if ("" + g[d] === c) {
            a.push(' selected=""');
            break;
          }
        }
        else "" + g === c && a.push(' selected=""');
        else m && a.push(' selected=""');
        a.push(">");
        x(a, l2, h);
        return h;
      case "textarea":
        a.push(z2("textarea"));
        l2 = g = e = null;
        for (h in c) if (n2.call(c, h) && (k = c[h], null != k)) switch (h) {
          case "children":
            l2 = k;
            break;
          case "value":
            e = k;
            break;
          case "defaultValue":
            g = k;
            break;
          case "dangerouslySetInnerHTML":
            throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
          default:
            w(a, d, h, k);
        }
        null === e && null !== g && (e = g);
        a.push(">");
        if (null != l2) {
          if (null != e) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (ra(l2) && 1 < l2.length) throw Error("<textarea> can only have at most one child.");
          e = "" + l2;
        }
        "string" === typeof e && "\n" === e[0] && a.push("\n");
        null !== e && a.push(u("" + e));
        return null;
      case "input":
        a.push(z2("input"));
        k = l2 = h = e = null;
        for (g in c) if (n2.call(c, g) && (m = c[g], null != m)) switch (g) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          case "defaultChecked":
            k = m;
            break;
          case "defaultValue":
            h = m;
            break;
          case "checked":
            l2 = m;
            break;
          case "value":
            e = m;
            break;
          default:
            w(a, d, g, m);
        }
        null !== l2 ? w(a, d, "checked", l2) : null !== k && w(a, d, "checked", k);
        null !== e ? w(a, d, "value", e) : null !== h && w(a, d, "value", h);
        a.push("/>");
        return null;
      case "menuitem":
        a.push(z2("menuitem"));
        for (var B in c) if (n2.call(c, B) && (e = c[B], null != e)) switch (B) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
          default:
            w(
              a,
              d,
              B,
              e
            );
        }
        a.push(">");
        return null;
      case "title":
        a.push(z2("title"));
        e = null;
        for (p in c) if (n2.call(c, p) && (g = c[p], null != g)) switch (p) {
          case "children":
            e = g;
            break;
          case "dangerouslySetInnerHTML":
            throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
          default:
            w(a, d, p, g);
        }
        a.push(">");
        return e;
      case "listing":
      case "pre":
        a.push(z2(b));
        g = e = null;
        for (k in c) if (n2.call(c, k) && (h = c[k], null != h)) switch (k) {
          case "children":
            e = h;
            break;
          case "dangerouslySetInnerHTML":
            g = h;
            break;
          default:
            w(a, d, k, h);
        }
        a.push(">");
        if (null != g) {
          if (null != e) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if ("object" !== typeof g || !("__html" in g)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          c = g.__html;
          null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push("\n", c) : a.push("" + c));
        }
        "string" === typeof e && "\n" === e[0] && a.push("\n");
        return e;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        a.push(z2(b));
        for (var C in c) if (n2.call(c, C) && (e = c[C], null != e)) switch (C) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          default:
            w(a, d, C, e);
        }
        a.push("/>");
        return null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return wa(a, c, b, d);
      case "html":
        return 0 === f.insertionMode && a.push("<!DOCTYPE html>"), wa(a, c, b, d);
      default:
        if (-1 === b.indexOf("-") && "string" !== typeof c.is) return wa(a, c, b, d);
        a.push(z2(b));
        g = e = null;
        for (m in c) if (n2.call(c, m) && (h = c[m], null != h)) switch (m) {
          case "children":
            e = h;
            break;
          case "dangerouslySetInnerHTML":
            g = h;
            break;
          case "style":
            ua(a, d, h);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            ka(m) && "function" !== typeof h && "symbol" !== typeof h && a.push(" ", m, '="', u(h), '"');
        }
        a.push(">");
        x(a, g, e);
        return e;
    }
  }
  function Aa(a, b, c) {
    a.push('<!--$?--><template id="');
    if (null === c) throw Error("An ID must have been assigned before we can complete the boundary.");
    a.push(c);
    return a.push('"></template>');
  }
  function Ba(a, b, c, d) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return a.push('<div hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
      case 2:
        return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
      case 3:
        return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
      case 4:
        return a.push('<table hidden id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
      case 5:
        return a.push('<table hidden><tbody id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
      case 6:
        return a.push('<table hidden><tr id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
      case 7:
        return a.push('<table hidden><colgroup id="'), a.push(b.segmentPrefix), b = d.toString(16), a.push(b), a.push('">');
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  function Ca(a, b) {
    switch (b.insertionMode) {
      case 0:
      case 1:
        return a.push("</div>");
      case 2:
        return a.push("</svg>");
      case 3:
        return a.push("</math>");
      case 4:
        return a.push("</table>");
      case 5:
        return a.push("</tbody></table>");
      case 6:
        return a.push("</tr></table>");
      case 7:
        return a.push("</colgroup></table>");
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  var Da = /[<\u2028\u2029]/g;
  function Ea(a) {
    return JSON.stringify(a).replace(Da, function(a2) {
      switch (a2) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function Fa(a, b) {
    b = void 0 === b ? "" : b;
    return { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: b + "P:", segmentPrefix: b + "S:", boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false, generateStaticMarkup: a };
  }
  function Ga() {
    return { insertionMode: 1, selectedValue: null };
  }
  function Ha(a, b, c, d) {
    if (c.generateStaticMarkup) return a.push(u(b)), false;
    "" === b ? a = d : (d && a.push("<!-- -->"), a.push(u(b)), a = true);
    return a;
  }
  var A = Object.assign, Ia = Symbol.for("react.element"), Ja = Symbol.for("react.portal"), Ka = Symbol.for("react.fragment"), La = Symbol.for("react.strict_mode"), Ma = Symbol.for("react.profiler"), Na = Symbol.for("react.provider"), Oa = Symbol.for("react.context"), Pa = Symbol.for("react.forward_ref"), Qa = Symbol.for("react.suspense"), Ra = Symbol.for("react.suspense_list"), Sa = Symbol.for("react.memo"), Ta = Symbol.for("react.lazy"), Ua = Symbol.for("react.scope"), Va = Symbol.for("react.debug_trace_mode"), Wa = Symbol.for("react.legacy_hidden"), Xa = Symbol.for("react.default_value"), Ya = Symbol.iterator;
  function Za(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case Ka:
        return "Fragment";
      case Ja:
        return "Portal";
      case Ma:
        return "Profiler";
      case La:
        return "StrictMode";
      case Qa:
        return "Suspense";
      case Ra:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case Oa:
        return (a.displayName || "Context") + ".Consumer";
      case Na:
        return (a._context.displayName || "Context") + ".Provider";
      case Pa:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Sa:
        return b = a.displayName || null, null !== b ? b : Za(a.type) || "Memo";
      case Ta:
        b = a._payload;
        a = a._init;
        try {
          return Za(a(b));
        } catch (c) {
        }
    }
    return null;
  }
  var $a = {};
  function ab(a, b) {
    a = a.contextTypes;
    if (!a) return $a;
    var c = {}, d;
    for (d in a) c[d] = b[d];
    return c;
  }
  var D = null;
  function E(a, b) {
    if (a !== b) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      var c = b.parent;
      if (null === a) {
        if (null !== c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
      } else {
        if (null === c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        E(a, c);
      }
      b.context._currentValue2 = b.value;
    }
  }
  function bb(a) {
    a.context._currentValue2 = a.parentValue;
    a = a.parent;
    null !== a && bb(a);
  }
  function cb(a) {
    var b = a.parent;
    null !== b && cb(b);
    a.context._currentValue2 = a.value;
  }
  function db(a, b) {
    a.context._currentValue2 = a.parentValue;
    a = a.parent;
    if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === b.depth ? E(a, b) : db(a, b);
  }
  function eb(a, b) {
    var c = b.parent;
    if (null === c) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === c.depth ? E(a, c) : eb(a, c);
    b.context._currentValue2 = b.value;
  }
  function F(a) {
    var b = D;
    b !== a && (null === b ? cb(a) : null === a ? bb(b) : b.depth === a.depth ? E(b, a) : b.depth > a.depth ? db(b, a) : eb(b, a), D = a);
  }
  var fb = { isMounted: function() {
    return false;
  }, enqueueSetState: function(a, b) {
    a = a._reactInternals;
    null !== a.queue && a.queue.push(b);
  }, enqueueReplaceState: function(a, b) {
    a = a._reactInternals;
    a.replace = true;
    a.queue = [b];
  }, enqueueForceUpdate: function() {
  } };
  function gb(a, b, c, d) {
    var f = void 0 !== a.state ? a.state : null;
    a.updater = fb;
    a.props = c;
    a.state = f;
    var e = { queue: [], replace: false };
    a._reactInternals = e;
    var g = b.contextType;
    a.context = "object" === typeof g && null !== g ? g._currentValue2 : d;
    g = b.getDerivedStateFromProps;
    "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : A({}, f, g), a.state = f);
    if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && fb.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length) if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && 1 === b.length) a.state = b[0];
    else {
      e = g ? b[0] : a.state;
      f = true;
      for (g = g ? 1 : 0; g < b.length; g++) {
        var h = b[g];
        h = "function" === typeof h ? h.call(a, e, c, d) : h;
        null != h && (f ? (f = false, e = A({}, e, h)) : A(e, h));
      }
      a.state = e;
    }
    else e.queue = null;
  }
  var hb = { id: 1, overflow: "" };
  function ib(a, b, c) {
    var d = a.id;
    a = a.overflow;
    var f = 32 - G(d) - 1;
    d &= ~(1 << f);
    c += 1;
    var e = 32 - G(b) + f;
    if (30 < e) {
      var g = f - f % 5;
      e = (d & (1 << g) - 1).toString(32);
      d >>= g;
      f -= g;
      return { id: 1 << 32 - G(b) + f | c << f | d, overflow: e + a };
    }
    return { id: 1 << e | c << f | d, overflow: a };
  }
  var G = Math.clz32 ? Math.clz32 : jb, kb = Math.log, lb = Math.LN2;
  function jb(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (kb(a) / lb | 0) | 0;
  }
  function mb(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var nb = "function" === typeof Object.is ? Object.is : mb, H = null, ob = null, I = null, J = null, K = false, L = false, M = 0, N = null, O = 0;
  function P() {
    if (null === H) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
    return H;
  }
  function rb() {
    if (0 < O) throw Error("Rendered more hooks than during the previous render");
    return { memoizedState: null, queue: null, next: null };
  }
  function sb() {
    null === J ? null === I ? (K = false, I = J = rb()) : (K = true, J = I) : null === J.next ? (K = false, J = J.next = rb()) : (K = true, J = J.next);
    return J;
  }
  function tb() {
    ob = H = null;
    L = false;
    I = null;
    O = 0;
    J = N = null;
  }
  function ub(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function vb(a, b, c) {
    H = P();
    J = sb();
    if (K) {
      var d = J.queue;
      b = d.dispatch;
      if (null !== N && (c = N.get(d), void 0 !== c)) {
        N.delete(d);
        d = J.memoizedState;
        do
          d = a(d, c.action), c = c.next;
        while (null !== c);
        J.memoizedState = d;
        return [d, b];
      }
      return [J.memoizedState, b];
    }
    a = a === ub ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
    J.memoizedState = a;
    a = J.queue = { last: null, dispatch: null };
    a = a.dispatch = wb.bind(null, H, a);
    return [J.memoizedState, a];
  }
  function xb(a, b) {
    H = P();
    J = sb();
    b = void 0 === b ? null : b;
    if (null !== J) {
      var c = J.memoizedState;
      if (null !== c && null !== b) {
        var d = c[1];
        a: if (null === d) d = false;
        else {
          for (var f = 0; f < d.length && f < b.length; f++) if (!nb(b[f], d[f])) {
            d = false;
            break a;
          }
          d = true;
        }
        if (d) return c[0];
      }
    }
    a = a();
    J.memoizedState = [a, b];
    return a;
  }
  function wb(a, b, c) {
    if (25 <= O) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
    if (a === H) if (L = true, a = { action: c, next: null }, null === N && (N = /* @__PURE__ */ new Map()), c = N.get(b), void 0 === c) N.set(b, a);
    else {
      for (b = c; null !== b.next; ) b = b.next;
      b.next = a;
    }
  }
  function yb() {
    throw Error("startTransition cannot be called during server rendering.");
  }
  function Q() {
  }
  var zb = { readContext: function(a) {
    return a._currentValue2;
  }, useContext: function(a) {
    P();
    return a._currentValue2;
  }, useMemo: xb, useReducer: vb, useRef: function(a) {
    H = P();
    J = sb();
    var b = J.memoizedState;
    return null === b ? (a = { current: a }, J.memoizedState = a) : b;
  }, useState: function(a) {
    return vb(ub, a);
  }, useInsertionEffect: Q, useLayoutEffect: function() {
  }, useCallback: function(a, b) {
    return xb(function() {
      return a;
    }, b);
  }, useImperativeHandle: Q, useEffect: Q, useDebugValue: Q, useDeferredValue: function(a) {
    P();
    return a;
  }, useTransition: function() {
    P();
    return [false, yb];
  }, useId: function() {
    var a = ob.treeContext;
    var b = a.overflow;
    a = a.id;
    a = (a & ~(1 << 32 - G(a) - 1)).toString(32) + b;
    var c = R;
    if (null === c) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
    b = M++;
    a = ":" + c.idPrefix + "R" + a;
    0 < b && (a += "H" + b.toString(32));
    return a + ":";
  }, useMutableSource: function(a, b) {
    P();
    return b(a._source);
  }, useSyncExternalStore: function(a, b, c) {
    if (void 0 === c) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
    return c();
  } }, R = null, Ab = ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Bb(a) {
    console.error(a);
    return null;
  }
  function S() {
  }
  function Cb(a, b, c, d, f, e, g, h, k) {
    var m = [], l2 = /* @__PURE__ */ new Set();
    b = { destination: null, responseState: b, progressiveChunkSize: void 0 === d ? 12800 : d, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: l2, pingedTasks: m, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: void 0 === f ? Bb : f, onAllReady: void 0 === e ? S : e, onShellReady: void 0 === g ? S : g, onShellError: S, onFatalError: S };
    c = T(b, 0, null, c, false, false);
    c.parentFlushed = true;
    a = Db(b, a, null, c, l2, $a, null, hb);
    m.push(a);
    return b;
  }
  function Db(a, b, c, d, f, e, g, h) {
    a.allPendingTasks++;
    null === c ? a.pendingRootTasks++ : c.pendingTasks++;
    var k = { node: b, ping: function() {
      var b2 = a.pingedTasks;
      b2.push(k);
      1 === b2.length && Eb(a);
    }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
    f.add(k);
    return k;
  }
  function T(a, b, c, d, f, e) {
    return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
  }
  function U(a, b) {
    a = a.onError(b);
    if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function V(a, b) {
    var c = a.onShellError;
    c(b);
    c = a.onFatalError;
    c(b);
    null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
  }
  function Fb(a, b, c, d, f) {
    H = {};
    ob = b;
    M = 0;
    for (a = c(d, f); L; ) L = false, M = 0, O += 1, J = null, a = c(d, f);
    tb();
    return a;
  }
  function Gb(a, b, c, d) {
    var f = c.render(), e = d.childContextTypes;
    if (null !== e && void 0 !== e) {
      var g = b.legacyContext;
      if ("function" !== typeof c.getChildContext) d = g;
      else {
        c = c.getChildContext();
        for (var h in c) if (!(h in e)) throw Error((Za(d) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        d = A({}, g, c);
      }
      b.legacyContext = d;
      W(a, b, f);
      b.legacyContext = g;
    } else W(a, b, f);
  }
  function Hb(a, b) {
    if (a && a.defaultProps) {
      b = A({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  function Ib(a, b, c, d, f) {
    if ("function" === typeof c) if (c.prototype && c.prototype.isReactComponent) {
      f = ab(c, b.legacyContext);
      var e = c.contextType;
      e = new c(d, "object" === typeof e && null !== e ? e._currentValue2 : f);
      gb(e, c, d, f);
      Gb(a, b, e, c);
    } else {
      e = ab(c, b.legacyContext);
      f = Fb(a, b, c, d, e);
      var g = 0 !== M;
      if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) gb(f, c, d, e), Gb(a, b, f, c);
      else if (g) {
        d = b.treeContext;
        b.treeContext = ib(d, 1, 0);
        try {
          W(a, b, f);
        } finally {
          b.treeContext = d;
        }
      } else W(a, b, f);
    }
    else if ("string" === typeof c) {
      f = b.blockedSegment;
      e = za(f.chunks, c, d, a.responseState, f.formatContext);
      f.lastPushedText = false;
      g = f.formatContext;
      f.formatContext = sa(g, c, d);
      Jb(a, b, e);
      f.formatContext = g;
      switch (c) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          f.chunks.push("</", c, ">");
      }
      f.lastPushedText = false;
    } else {
      switch (c) {
        case Wa:
        case Va:
        case La:
        case Ma:
        case Ka:
          W(a, b, d.children);
          return;
        case Ra:
          W(a, b, d.children);
          return;
        case Ua:
          throw Error("ReactDOMServer does not yet support scope components.");
        case Qa:
          a: {
            c = b.blockedBoundary;
            f = b.blockedSegment;
            e = d.fallback;
            d = d.children;
            g = /* @__PURE__ */ new Set();
            var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, k = T(a, f.chunks.length, h, f.formatContext, false, false);
            f.children.push(k);
            f.lastPushedText = false;
            var m = T(a, 0, null, f.formatContext, false, false);
            m.parentFlushed = true;
            b.blockedBoundary = h;
            b.blockedSegment = m;
            try {
              if (Jb(a, b, d), a.responseState.generateStaticMarkup || m.lastPushedText && m.textEmbedded && m.chunks.push("<!-- -->"), m.status = 1, X(h, m), 0 === h.pendingTasks) break a;
            } catch (l2) {
              m.status = 4, h.forceClientRender = true, h.errorDigest = U(a, l2);
            } finally {
              b.blockedBoundary = c, b.blockedSegment = f;
            }
            b = Db(a, e, c, k, g, b.legacyContext, b.context, b.treeContext);
            a.pingedTasks.push(b);
          }
          return;
      }
      if ("object" === typeof c && null !== c) switch (c.$$typeof) {
        case Pa:
          d = Fb(a, b, c.render, d, f);
          if (0 !== M) {
            c = b.treeContext;
            b.treeContext = ib(c, 1, 0);
            try {
              W(a, b, d);
            } finally {
              b.treeContext = c;
            }
          } else W(a, b, d);
          return;
        case Sa:
          c = c.type;
          d = Hb(c, d);
          Ib(a, b, c, d, f);
          return;
        case Na:
          f = d.children;
          c = c._context;
          d = d.value;
          e = c._currentValue2;
          c._currentValue2 = d;
          g = D;
          D = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
          b.context = d;
          W(a, b, f);
          a = D;
          if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
          d = a.parentValue;
          a.context._currentValue2 = d === Xa ? a.context._defaultValue : d;
          a = D = a.parent;
          b.context = a;
          return;
        case Oa:
          d = d.children;
          d = d(c._currentValue2);
          W(a, b, d);
          return;
        case Ta:
          f = c._init;
          c = f(c._payload);
          d = Hb(c, d);
          Ib(a, b, c, d, void 0);
          return;
      }
      throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c ? c : typeof c) + "."));
    }
  }
  function W(a, b, c) {
    b.node = c;
    if ("object" === typeof c && null !== c) {
      switch (c.$$typeof) {
        case Ia:
          Ib(a, b, c.type, c.props, c.ref);
          return;
        case Ja:
          throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
        case Ta:
          var d = c._init;
          c = d(c._payload);
          W(a, b, c);
          return;
      }
      if (ra(c)) {
        Kb(a, b, c);
        return;
      }
      null === c || "object" !== typeof c ? d = null : (d = Ya && c[Ya] || c["@@iterator"], d = "function" === typeof d ? d : null);
      if (d && (d = d.call(c))) {
        c = d.next();
        if (!c.done) {
          var f = [];
          do
            f.push(c.value), c = d.next();
          while (!c.done);
          Kb(a, b, f);
        }
        return;
      }
      a = Object.prototype.toString.call(c);
      throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Ha(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Ha(
      b.blockedSegment.chunks,
      "" + c,
      a.responseState,
      d.lastPushedText
    ));
  }
  function Kb(a, b, c) {
    for (var d = c.length, f = 0; f < d; f++) {
      var e = b.treeContext;
      b.treeContext = ib(e, d, f);
      try {
        Jb(a, b, c[f]);
      } finally {
        b.treeContext = e;
      }
    }
  }
  function Jb(a, b, c) {
    var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
    try {
      return W(a, b, c);
    } catch (k) {
      if (tb(), "object" === typeof k && null !== k && "function" === typeof k.then) {
        c = k;
        var g = b.blockedSegment, h = T(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
        g.children.push(h);
        g.lastPushedText = false;
        a = Db(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
        c.then(a, a);
        b.blockedSegment.formatContext = d;
        b.legacyContext = f;
        b.context = e;
        F(e);
      } else throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, F(e), k;
    }
  }
  function Lb(a) {
    var b = a.blockedBoundary;
    a = a.blockedSegment;
    a.status = 3;
    Mb(this, b, a);
  }
  function Nb(a, b, c) {
    var d = a.blockedBoundary;
    a.blockedSegment.status = 3;
    null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.push(null))) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = b.onError(void 0 === c ? Error("The render was aborted by the server without a reason.") : c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
      return Nb(a2, b, c);
    }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
  }
  function X(a, b) {
    if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
      var c = b.children[0];
      c.id = b.id;
      c.parentFlushed = true;
      1 === c.status && X(a, c);
    } else a.completedSegments.push(b);
  }
  function Mb(a, b, c) {
    if (null === b) {
      if (c.parentFlushed) {
        if (null !== a.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
        a.completedRootSegment = c;
      }
      a.pendingRootTasks--;
      0 === a.pendingRootTasks && (a.onShellError = S, b = a.onShellReady, b());
    } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && X(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(Lb, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (X(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
    a.allPendingTasks--;
    0 === a.allPendingTasks && (a = a.onAllReady, a());
  }
  function Eb(a) {
    if (2 !== a.status) {
      var b = D, c = Ab.current;
      Ab.current = zb;
      var d = R;
      R = a.responseState;
      try {
        var f = a.pingedTasks, e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          var h = a, k = g.blockedSegment;
          if (0 === k.status) {
            F(g.context);
            try {
              W(h, g, g.node), h.responseState.generateStaticMarkup || k.lastPushedText && k.textEmbedded && k.chunks.push("<!-- -->"), g.abortSet.delete(g), k.status = 1, Mb(h, g.blockedBoundary, k);
            } catch (y) {
              if (tb(), "object" === typeof y && null !== y && "function" === typeof y.then) {
                var m = g.ping;
                y.then(m, m);
              } else {
                g.abortSet.delete(g);
                k.status = 4;
                var l2 = g.blockedBoundary, p = y, B = U(h, p);
                null === l2 ? V(h, p) : (l2.pendingTasks--, l2.forceClientRender || (l2.forceClientRender = true, l2.errorDigest = B, l2.parentFlushed && h.clientRenderedBoundaries.push(l2)));
                h.allPendingTasks--;
                if (0 === h.allPendingTasks) {
                  var C = h.onAllReady;
                  C();
                }
              }
            } finally {
            }
          }
        }
        f.splice(0, e);
        null !== a.destination && Ob(a, a.destination);
      } catch (y) {
        U(a, y), V(a, y);
      } finally {
        R = d, Ab.current = c, c === zb && F(b);
      }
    }
  }
  function Y(a, b, c) {
    c.parentFlushed = true;
    switch (c.status) {
      case 0:
        var d = c.id = a.nextSegmentId++;
        c.lastPushedText = false;
        c.textEmbedded = false;
        a = a.responseState;
        b.push('<template id="');
        b.push(a.placeholderPrefix);
        a = d.toString(16);
        b.push(a);
        return b.push('"></template>');
      case 1:
        c.status = 2;
        var f = true;
        d = c.chunks;
        var e = 0;
        c = c.children;
        for (var g = 0; g < c.length; g++) {
          for (f = c[g]; e < f.index; e++) b.push(d[e]);
          f = Z(a, b, f);
        }
        for (; e < d.length - 1; e++) b.push(d[e]);
        e < d.length && (f = b.push(d[e]));
        return f;
      default:
        throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
    }
  }
  function Z(a, b, c) {
    var d = c.boundary;
    if (null === d) return Y(a, b, c);
    d.parentFlushed = true;
    if (d.forceClientRender) return a.responseState.generateStaticMarkup || (d = d.errorDigest, b.push("<!--$!-->"), b.push("<template"), d && (b.push(' data-dgst="'), d = u(d), b.push(d), b.push('"')), b.push("></template>")), Y(a, b, c), a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->"), a;
    if (0 < d.pendingTasks) {
      d.rootSegmentID = a.nextSegmentId++;
      0 < d.completedSegments.length && a.partialBoundaries.push(d);
      var f = a.responseState;
      var e = f.nextSuspenseID++;
      f = f.boundaryPrefix + e.toString(16);
      d = d.id = f;
      Aa(b, a.responseState, d);
      Y(a, b, c);
      return b.push("<!--/$-->");
    }
    if (d.byteSize > a.progressiveChunkSize) return d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), Aa(b, a.responseState, d.id), Y(a, b, c), b.push("<!--/$-->");
    a.responseState.generateStaticMarkup || b.push("<!--$-->");
    c = d.completedSegments;
    if (1 !== c.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
    Z(a, b, c[0]);
    a = a.responseState.generateStaticMarkup ? true : b.push("<!--/$-->");
    return a;
  }
  function Pb(a, b, c) {
    Ba(b, a.responseState, c.formatContext, c.id);
    Z(a, b, c);
    return Ca(b, c.formatContext);
  }
  function Qb(a, b, c) {
    for (var d = c.completedSegments, f = 0; f < d.length; f++) Rb(a, b, c, d[f]);
    d.length = 0;
    a = a.responseState;
    d = c.id;
    c = c.rootSegmentID;
    b.push(a.startInlineScript);
    a.sentCompleteBoundaryFunction ? b.push('$RC("') : (a.sentCompleteBoundaryFunction = true, b.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));
    if (null === d) throw Error("An ID must have been assigned before we can complete the boundary.");
    c = c.toString(16);
    b.push(d);
    b.push('","');
    b.push(a.segmentPrefix);
    b.push(c);
    return b.push('")<\/script>');
  }
  function Rb(a, b, c, d) {
    if (2 === d.status) return true;
    var f = d.id;
    if (-1 === f) {
      if (-1 === (d.id = c.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
      return Pb(a, b, d);
    }
    Pb(a, b, d);
    a = a.responseState;
    b.push(a.startInlineScript);
    a.sentCompleteSegmentFunction ? b.push('$RS("') : (a.sentCompleteSegmentFunction = true, b.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
    b.push(a.segmentPrefix);
    f = f.toString(16);
    b.push(f);
    b.push('","');
    b.push(a.placeholderPrefix);
    b.push(f);
    return b.push('")<\/script>');
  }
  function Ob(a, b) {
    try {
      var c = a.completedRootSegment;
      if (null !== c && 0 === a.pendingRootTasks) {
        Z(a, b, c);
        a.completedRootSegment = null;
        var d = a.responseState.bootstrapChunks;
        for (c = 0; c < d.length - 1; c++) b.push(d[c]);
        c < d.length && b.push(d[c]);
      }
      var f = a.clientRenderedBoundaries, e;
      for (e = 0; e < f.length; e++) {
        var g = f[e];
        d = b;
        var h = a.responseState, k = g.id, m = g.errorDigest, l2 = g.errorMessage, p = g.errorComponentStack;
        d.push(h.startInlineScript);
        h.sentClientRenderFunction ? d.push('$RX("') : (h.sentClientRenderFunction = true, d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
        if (null === k) throw Error("An ID must have been assigned before we can complete the boundary.");
        d.push(k);
        d.push('"');
        if (m || l2 || p) {
          d.push(",");
          var B = Ea(m || "");
          d.push(B);
        }
        if (l2 || p) {
          d.push(",");
          var C = Ea(l2 || "");
          d.push(C);
        }
        if (p) {
          d.push(",");
          var y = Ea(p);
          d.push(y);
        }
        if (!d.push(")<\/script>")) {
          a.destination = null;
          e++;
          f.splice(0, e);
          return;
        }
      }
      f.splice(0, e);
      var aa = a.completedBoundaries;
      for (e = 0; e < aa.length; e++) if (!Qb(a, b, aa[e])) {
        a.destination = null;
        e++;
        aa.splice(0, e);
        return;
      }
      aa.splice(0, e);
      var ba = a.partialBoundaries;
      for (e = 0; e < ba.length; e++) {
        var pb = ba[e];
        a: {
          f = a;
          g = b;
          var ca = pb.completedSegments;
          for (h = 0; h < ca.length; h++) if (!Rb(f, g, pb, ca[h])) {
            h++;
            ca.splice(0, h);
            var qb = false;
            break a;
          }
          ca.splice(0, h);
          qb = true;
        }
        if (!qb) {
          a.destination = null;
          e++;
          ba.splice(0, e);
          return;
        }
      }
      ba.splice(0, e);
      var da = a.completedBoundaries;
      for (e = 0; e < da.length; e++) if (!Qb(a, b, da[e])) {
        a.destination = null;
        e++;
        da.splice(0, e);
        return;
      }
      da.splice(0, e);
    } finally {
      0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.push(null);
    }
  }
  function Sb(a, b) {
    if (1 === a.status) a.status = 2, b.destroy(a.fatalError);
    else if (2 !== a.status && null === a.destination) {
      a.destination = b;
      try {
        Ob(a, b);
      } catch (c) {
        U(a, c), V(a, c);
      }
    }
  }
  function Tb(a, b) {
    try {
      var c = a.abortableTasks;
      c.forEach(function(c2) {
        return Nb(c2, a, b);
      });
      c.clear();
      null !== a.destination && Ob(a, a.destination);
    } catch (d) {
      U(a, d), V(a, d);
    }
  }
  function Ub() {
  }
  function Vb(a, b, c, d) {
    var f = false, e = null, g = "", h = false;
    a = Cb(a, Fa(c, b ? b.identifierPrefix : void 0), Ga(), Infinity, Ub, void 0, function() {
      h = true;
    });
    Eb(a);
    Tb(a, d);
    Sb(a, { push: function(a2) {
      null !== a2 && (g += a2);
      return true;
    }, destroy: function(a2) {
      f = true;
      e = a2;
    } });
    if (f) throw e;
    if (!h) throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
    return g;
  }
  function Wb(a, b) {
    a.prototype = Object.create(b.prototype);
    a.prototype.constructor = a;
    a.__proto__ = b;
  }
  var Xb = function(a) {
    function b() {
      var b2 = a.call(this, {}) || this;
      b2.request = null;
      b2.startedFlowing = false;
      return b2;
    }
    Wb(b, a);
    var c = b.prototype;
    c._destroy = function(a2, b2) {
      Tb(this.request);
      b2(a2);
    };
    c._read = function() {
      this.startedFlowing && Sb(this.request, this);
    };
    return b;
  }(fa.Readable);
  function Yb() {
  }
  function Zb(a, b) {
    var c = new Xb(), d = Cb(a, Fa(false, b ? b.identifierPrefix : void 0), Ga(), Infinity, Yb, function() {
      c.startedFlowing = true;
      Sb(d, c);
    }, void 0);
    c.request = d;
    Eb(d);
    return c;
  }
  reactDomServerLegacy_node_production_min.renderToNodeStream = function(a, b) {
    return Zb(a, b);
  };
  reactDomServerLegacy_node_production_min.renderToStaticMarkup = function(a, b) {
    return Vb(a, b, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
  };
  reactDomServerLegacy_node_production_min.renderToStaticNodeStream = function(a, b) {
    return Zb(a, b);
  };
  reactDomServerLegacy_node_production_min.renderToString = function(a, b) {
    return Vb(a, b, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
  };
  reactDomServerLegacy_node_production_min.version = "18.3.1";
  return reactDomServerLegacy_node_production_min;
}
var reactDomServer_node_production_min = {};
/**
 * @license React
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDomServer_node_production_min;
function requireReactDomServer_node_production_min() {
  if (hasRequiredReactDomServer_node_production_min) return reactDomServer_node_production_min;
  hasRequiredReactDomServer_node_production_min = 1;
  var aa = require$$1$1, ba = reactExports, k = null, l2 = 0, q = true;
  function r2(a, b) {
    if ("string" === typeof b) {
      if (0 !== b.length) if (2048 < 3 * b.length) 0 < l2 && (t2(a, k.subarray(0, l2)), k = new Uint8Array(2048), l2 = 0), t2(a, u.encode(b));
      else {
        var c = k;
        0 < l2 && (c = k.subarray(l2));
        c = u.encodeInto(b, c);
        var d = c.read;
        l2 += c.written;
        d < b.length && (t2(a, k), k = new Uint8Array(2048), l2 = u.encodeInto(b.slice(d), k).written);
        2048 === l2 && (t2(a, k), k = new Uint8Array(2048), l2 = 0);
      }
    } else 0 !== b.byteLength && (2048 < b.byteLength ? (0 < l2 && (t2(a, k.subarray(0, l2)), k = new Uint8Array(2048), l2 = 0), t2(a, b)) : (c = k.length - l2, c < b.byteLength && (0 === c ? t2(
      a,
      k
    ) : (k.set(b.subarray(0, c), l2), l2 += c, t2(a, k), b = b.subarray(c)), k = new Uint8Array(2048), l2 = 0), k.set(b, l2), l2 += b.byteLength, 2048 === l2 && (t2(a, k), k = new Uint8Array(2048), l2 = 0)));
  }
  function t2(a, b) {
    a = a.write(b);
    q = q && a;
  }
  function w(a, b) {
    r2(a, b);
    return q;
  }
  function ca(a) {
    k && 0 < l2 && a.write(k.subarray(0, l2));
    k = null;
    l2 = 0;
    q = true;
  }
  var u = new aa.TextEncoder();
  function x(a) {
    return u.encode(a);
  }
  var y = Object.prototype.hasOwnProperty, da = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ea = {}, fa = {};
  function ha(a) {
    if (y.call(fa, a)) return true;
    if (y.call(ea, a)) return false;
    if (da.test(a)) return fa[a] = true;
    ea[a] = true;
    return false;
  }
  function z2(a, b, c, d, f, e, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = f;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = e;
    this.removeEmptyString = g;
  }
  var A = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    A[a] = new z2(a, 0, false, a, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var b = a[0];
    A[b] = new z2(b, 1, false, a[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    A[a] = new z2(a, 2, false, a.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    A[a] = new z2(a, 2, false, a, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    A[a] = new z2(a, 3, false, a.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    A[a] = new z2(a, 3, true, a, null, false, false);
  });
  ["capture", "download"].forEach(function(a) {
    A[a] = new z2(a, 4, false, a, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a) {
    A[a] = new z2(a, 6, false, a, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a) {
    A[a] = new z2(a, 5, false, a.toLowerCase(), null, false, false);
  });
  var ia = /[\-:]([a-z])/g;
  function ja(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(
      ia,
      ja
    );
    A[b] = new z2(b, 1, false, a, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(ia, ja);
    A[b] = new z2(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var b = a.replace(ia, ja);
    A[b] = new z2(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a) {
    A[a] = new z2(a, 1, false, a.toLowerCase(), null, false, false);
  });
  A.xlinkHref = new z2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a) {
    A[a] = new z2(a, 1, false, a.toLowerCase(), null, true, true);
  });
  var B = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, ka = ["Webkit", "ms", "Moz", "O"];
  Object.keys(B).forEach(function(a) {
    ka.forEach(function(b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      B[b] = B[a];
    });
  });
  var la = /["'&<>]/;
  function F(a) {
    if ("boolean" === typeof a || "number" === typeof a) return "" + a;
    a = "" + a;
    var b = la.exec(a);
    if (b) {
      var c = "", d, f = 0;
      for (d = b.index; d < a.length; d++) {
        switch (a.charCodeAt(d)) {
          case 34:
            b = "&quot;";
            break;
          case 38:
            b = "&amp;";
            break;
          case 39:
            b = "&#x27;";
            break;
          case 60:
            b = "&lt;";
            break;
          case 62:
            b = "&gt;";
            break;
          default:
            continue;
        }
        f !== d && (c += a.substring(f, d));
        f = d + 1;
        c += b;
      }
      a = f !== d ? c + a.substring(f, d) : c;
    }
    return a;
  }
  var ma = /([A-Z])/g, pa = /^ms-/, qa = Array.isArray, ra = x("<script>"), sa = x("<\/script>"), ta = x('<script src="'), ua = x('<script type="module" src="'), va = x('" async=""><\/script>'), wa = /(<\/|<)(s)(cript)/gi;
  function xa(a, b, c, d) {
    return "" + b + ("s" === c ? "\\u0073" : "\\u0053") + d;
  }
  function G(a, b) {
    return { insertionMode: a, selectedValue: b };
  }
  function ya(a, b, c) {
    switch (b) {
      case "select":
        return G(1, null != c.value ? c.value : c.defaultValue);
      case "svg":
        return G(2, null);
      case "math":
        return G(3, null);
      case "foreignObject":
        return G(1, null);
      case "table":
        return G(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return G(5, null);
      case "colgroup":
        return G(7, null);
      case "tr":
        return G(6, null);
    }
    return 4 <= a.insertionMode || 0 === a.insertionMode ? G(1, null) : a;
  }
  var za = x("<!-- -->");
  function Aa(a, b, c, d) {
    if ("" === b) return d;
    d && a.push(za);
    a.push(F(b));
    return true;
  }
  var Ba = /* @__PURE__ */ new Map(), Ca = x(' style="'), Da = x(":"), Ea = x(";");
  function Fa(a, b, c) {
    if ("object" !== typeof c) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    b = true;
    for (var d in c) if (y.call(c, d)) {
      var f = c[d];
      if (null != f && "boolean" !== typeof f && "" !== f) {
        if (0 === d.indexOf("--")) {
          var e = F(d);
          f = F(("" + f).trim());
        } else {
          e = d;
          var g = Ba.get(e);
          void 0 !== g ? e = g : (g = x(F(e.replace(ma, "-$1").toLowerCase().replace(pa, "-ms-"))), Ba.set(e, g), e = g);
          f = "number" === typeof f ? 0 === f || y.call(
            B,
            d
          ) ? "" + f : f + "px" : F(("" + f).trim());
        }
        b ? (b = false, a.push(Ca, e, Da, f)) : a.push(Ea, e, Da, f);
      }
    }
    b || a.push(H);
  }
  var I = x(" "), J = x('="'), H = x('"'), Ga = x('=""');
  function K(a, b, c, d) {
    switch (c) {
      case "style":
        Fa(a, b, d);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < c.length) || "o" !== c[0] && "O" !== c[0] || "n" !== c[1] && "N" !== c[1]) {
      if (b = A.hasOwnProperty(c) ? A[c] : null, null !== b) {
        switch (typeof d) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!b.acceptsBooleans) return;
        }
        c = b.attributeName;
        switch (b.type) {
          case 3:
            d && a.push(I, c, Ga);
            break;
          case 4:
            true === d ? a.push(I, c, Ga) : false !== d && a.push(I, c, J, F(d), H);
            break;
          case 5:
            isNaN(d) || a.push(I, c, J, F(d), H);
            break;
          case 6:
            !isNaN(d) && 1 <= d && a.push(I, c, J, F(d), H);
            break;
          default:
            b.sanitizeURL && (d = "" + d), a.push(I, c, J, F(d), H);
        }
      } else if (ha(c)) {
        switch (typeof d) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (b = c.toLowerCase().slice(0, 5), "data-" !== b && "aria-" !== b) return;
        }
        a.push(I, c, J, F(d), H);
      }
    }
  }
  var L = x(">"), Ha = x("/>");
  function M(a, b, c) {
    if (null != b) {
      if (null != c) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
      if ("object" !== typeof b || !("__html" in b)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      b = b.__html;
      null !== b && void 0 !== b && a.push("" + b);
    }
  }
  function Ia(a) {
    var b = "";
    ba.Children.forEach(a, function(a2) {
      null != a2 && (b += a2);
    });
    return b;
  }
  var Ja = x(' selected=""');
  function Ka(a, b, c, d) {
    a.push(N(c));
    var f = c = null, e;
    for (e in b) if (y.call(b, e)) {
      var g = b[e];
      if (null != g) switch (e) {
        case "children":
          c = g;
          break;
        case "dangerouslySetInnerHTML":
          f = g;
          break;
        default:
          K(a, d, e, g);
      }
    }
    a.push(L);
    M(a, f, c);
    return "string" === typeof c ? (a.push(F(c)), null) : c;
  }
  var La = x("\n"), Ma = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Na = /* @__PURE__ */ new Map();
  function N(a) {
    var b = Na.get(a);
    if (void 0 === b) {
      if (!Ma.test(a)) throw Error("Invalid tag: " + a);
      b = x("<" + a);
      Na.set(a, b);
    }
    return b;
  }
  var Oa = x("<!DOCTYPE html>");
  function Pa(a, b, c, d, f) {
    switch (b) {
      case "select":
        a.push(N("select"));
        var e = null, g = null;
        for (p in c) if (y.call(c, p)) {
          var h = c[p];
          if (null != h) switch (p) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              K(a, d, p, h);
          }
        }
        a.push(L);
        M(a, g, e);
        return e;
      case "option":
        g = f.selectedValue;
        a.push(N("option"));
        var m = h = null, n2 = null;
        var p = null;
        for (e in c) if (y.call(c, e)) {
          var v = c[e];
          if (null != v) switch (e) {
            case "children":
              h = v;
              break;
            case "selected":
              n2 = v;
              break;
            case "dangerouslySetInnerHTML":
              p = v;
              break;
            case "value":
              m = v;
            default:
              K(a, d, e, v);
          }
        }
        if (null != g) if (c = null !== m ? "" + m : Ia(h), qa(g)) for (d = 0; d < g.length; d++) {
          if ("" + g[d] === c) {
            a.push(Ja);
            break;
          }
        }
        else "" + g === c && a.push(Ja);
        else n2 && a.push(Ja);
        a.push(L);
        M(a, p, h);
        return h;
      case "textarea":
        a.push(N("textarea"));
        p = g = e = null;
        for (h in c) if (y.call(c, h) && (m = c[h], null != m)) switch (h) {
          case "children":
            p = m;
            break;
          case "value":
            e = m;
            break;
          case "defaultValue":
            g = m;
            break;
          case "dangerouslySetInnerHTML":
            throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
          default:
            K(a, d, h, m);
        }
        null === e && null !== g && (e = g);
        a.push(L);
        if (null != p) {
          if (null != e) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (qa(p) && 1 < p.length) throw Error("<textarea> can only have at most one child.");
          e = "" + p;
        }
        "string" === typeof e && "\n" === e[0] && a.push(La);
        null !== e && a.push(F("" + e));
        return null;
      case "input":
        a.push(N("input"));
        m = p = h = e = null;
        for (g in c) if (y.call(c, g) && (n2 = c[g], null != n2)) switch (g) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          case "defaultChecked":
            m = n2;
            break;
          case "defaultValue":
            h = n2;
            break;
          case "checked":
            p = n2;
            break;
          case "value":
            e = n2;
            break;
          default:
            K(a, d, g, n2);
        }
        null !== p ? K(a, d, "checked", p) : null !== m && K(a, d, "checked", m);
        null !== e ? K(a, d, "value", e) : null !== h && K(a, d, "value", h);
        a.push(Ha);
        return null;
      case "menuitem":
        a.push(N("menuitem"));
        for (var C in c) if (y.call(c, C) && (e = c[C], null != e)) switch (C) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
          default:
            K(a, d, C, e);
        }
        a.push(L);
        return null;
      case "title":
        a.push(N("title"));
        e = null;
        for (v in c) if (y.call(c, v) && (g = c[v], null != g)) switch (v) {
          case "children":
            e = g;
            break;
          case "dangerouslySetInnerHTML":
            throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
          default:
            K(a, d, v, g);
        }
        a.push(L);
        return e;
      case "listing":
      case "pre":
        a.push(N(b));
        g = e = null;
        for (m in c) if (y.call(c, m) && (h = c[m], null != h)) switch (m) {
          case "children":
            e = h;
            break;
          case "dangerouslySetInnerHTML":
            g = h;
            break;
          default:
            K(a, d, m, h);
        }
        a.push(L);
        if (null != g) {
          if (null != e) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if ("object" !== typeof g || !("__html" in g)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          c = g.__html;
          null !== c && void 0 !== c && ("string" === typeof c && 0 < c.length && "\n" === c[0] ? a.push(La, c) : a.push("" + c));
        }
        "string" === typeof e && "\n" === e[0] && a.push(La);
        return e;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        a.push(N(b));
        for (var D in c) if (y.call(c, D) && (e = c[D], null != e)) switch (D) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(b + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          default:
            K(a, d, D, e);
        }
        a.push(Ha);
        return null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ka(a, c, b, d);
      case "html":
        return 0 === f.insertionMode && a.push(Oa), Ka(
          a,
          c,
          b,
          d
        );
      default:
        if (-1 === b.indexOf("-") && "string" !== typeof c.is) return Ka(a, c, b, d);
        a.push(N(b));
        g = e = null;
        for (n2 in c) if (y.call(c, n2) && (h = c[n2], null != h)) switch (n2) {
          case "children":
            e = h;
            break;
          case "dangerouslySetInnerHTML":
            g = h;
            break;
          case "style":
            Fa(a, d, h);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            ha(n2) && "function" !== typeof h && "symbol" !== typeof h && a.push(I, n2, J, F(h), H);
        }
        a.push(L);
        M(a, g, e);
        return e;
    }
  }
  var Qa = x("</"), Ra = x(">"), Sa = x('<template id="'), Ta = x('"></template>'), Ua = x("<!--$-->"), Va = x('<!--$?--><template id="'), Wa = x('"></template>'), Xa = x("<!--$!-->"), Ya = x("<!--/$-->"), Za = x("<template"), $a = x('"'), ab = x(' data-dgst="');
  x(' data-msg="');
  x(' data-stck="');
  var bb = x("></template>");
  function cb(a, b, c) {
    r2(a, Va);
    if (null === c) throw Error("An ID must have been assigned before we can complete the boundary.");
    r2(a, c);
    return w(a, Wa);
  }
  var db = x('<div hidden id="'), eb = x('">'), fb = x("</div>"), gb = x('<svg aria-hidden="true" style="display:none" id="'), hb = x('">'), ib = x("</svg>"), jb = x('<math aria-hidden="true" style="display:none" id="'), kb = x('">'), lb = x("</math>"), mb = x('<table hidden id="'), nb = x('">'), ob = x("</table>"), pb = x('<table hidden><tbody id="'), qb = x('">'), rb = x("</tbody></table>"), sb = x('<table hidden><tr id="'), tb = x('">'), ub = x("</tr></table>"), vb = x('<table hidden><colgroup id="'), wb = x('">'), xb = x("</colgroup></table>");
  function yb(a, b, c, d) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return r2(a, db), r2(a, b.segmentPrefix), r2(a, d.toString(16)), w(a, eb);
      case 2:
        return r2(a, gb), r2(a, b.segmentPrefix), r2(a, d.toString(16)), w(a, hb);
      case 3:
        return r2(a, jb), r2(a, b.segmentPrefix), r2(a, d.toString(16)), w(a, kb);
      case 4:
        return r2(a, mb), r2(a, b.segmentPrefix), r2(a, d.toString(16)), w(a, nb);
      case 5:
        return r2(a, pb), r2(a, b.segmentPrefix), r2(a, d.toString(16)), w(a, qb);
      case 6:
        return r2(a, sb), r2(a, b.segmentPrefix), r2(a, d.toString(16)), w(a, tb);
      case 7:
        return r2(a, vb), r2(
          a,
          b.segmentPrefix
        ), r2(a, d.toString(16)), w(a, wb);
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  function zb(a, b) {
    switch (b.insertionMode) {
      case 0:
      case 1:
        return w(a, fb);
      case 2:
        return w(a, ib);
      case 3:
        return w(a, lb);
      case 4:
        return w(a, ob);
      case 5:
        return w(a, rb);
      case 6:
        return w(a, ub);
      case 7:
        return w(a, xb);
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  var Ab = x('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Bb = x('$RS("'), Cb = x('","'), Db = x('")<\/script>'), Fb = x('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Gb = x('$RC("'), Hb = x('","'), Ib = x('")<\/script>'), Jb = x('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Kb = x('$RX("'), Lb = x('"'), Mb = x(")<\/script>"), Nb = x(","), Ob = /[<\u2028\u2029]/g;
  function Pb(a) {
    return JSON.stringify(a).replace(Ob, function(a2) {
      switch (a2) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var O = Object.assign, Qb = Symbol.for("react.element"), Rb = Symbol.for("react.portal"), Sb = Symbol.for("react.fragment"), Tb = Symbol.for("react.strict_mode"), Ub = Symbol.for("react.profiler"), Vb = Symbol.for("react.provider"), Wb = Symbol.for("react.context"), Xb = Symbol.for("react.forward_ref"), Yb = Symbol.for("react.suspense"), Zb = Symbol.for("react.suspense_list"), $b = Symbol.for("react.memo"), ac = Symbol.for("react.lazy"), bc = Symbol.for("react.scope"), cc = Symbol.for("react.debug_trace_mode"), dc = Symbol.for("react.legacy_hidden"), ec = Symbol.for("react.default_value"), fc = Symbol.iterator;
  function gc(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case Sb:
        return "Fragment";
      case Rb:
        return "Portal";
      case Ub:
        return "Profiler";
      case Tb:
        return "StrictMode";
      case Yb:
        return "Suspense";
      case Zb:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case Wb:
        return (a.displayName || "Context") + ".Consumer";
      case Vb:
        return (a._context.displayName || "Context") + ".Provider";
      case Xb:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case $b:
        return b = a.displayName || null, null !== b ? b : gc(a.type) || "Memo";
      case ac:
        b = a._payload;
        a = a._init;
        try {
          return gc(a(b));
        } catch (c) {
        }
    }
    return null;
  }
  var hc = {};
  function ic(a, b) {
    a = a.contextTypes;
    if (!a) return hc;
    var c = {}, d;
    for (d in a) c[d] = b[d];
    return c;
  }
  var P = null;
  function Q(a, b) {
    if (a !== b) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      var c = b.parent;
      if (null === a) {
        if (null !== c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
      } else {
        if (null === c) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        Q(a, c);
      }
      b.context._currentValue = b.value;
    }
  }
  function jc(a) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    null !== a && jc(a);
  }
  function kc(a) {
    var b = a.parent;
    null !== b && kc(b);
    a.context._currentValue = a.value;
  }
  function lc(a, b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === b.depth ? Q(a, b) : lc(a, b);
  }
  function mc(a, b) {
    var c = b.parent;
    if (null === c) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    a.depth === c.depth ? Q(a, c) : mc(a, c);
    b.context._currentValue = b.value;
  }
  function nc(a) {
    var b = P;
    b !== a && (null === b ? kc(a) : null === a ? jc(b) : b.depth === a.depth ? Q(b, a) : b.depth > a.depth ? lc(b, a) : mc(b, a), P = a);
  }
  var oc = { isMounted: function() {
    return false;
  }, enqueueSetState: function(a, b) {
    a = a._reactInternals;
    null !== a.queue && a.queue.push(b);
  }, enqueueReplaceState: function(a, b) {
    a = a._reactInternals;
    a.replace = true;
    a.queue = [b];
  }, enqueueForceUpdate: function() {
  } };
  function pc(a, b, c, d) {
    var f = void 0 !== a.state ? a.state : null;
    a.updater = oc;
    a.props = c;
    a.state = f;
    var e = { queue: [], replace: false };
    a._reactInternals = e;
    var g = b.contextType;
    a.context = "object" === typeof g && null !== g ? g._currentValue : d;
    g = b.getDerivedStateFromProps;
    "function" === typeof g && (g = g(c, f), f = null === g || void 0 === g ? f : O({}, f, g), a.state = f);
    if ("function" !== typeof b.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b !== a.state && oc.enqueueReplaceState(a, a.state, null), null !== e.queue && 0 < e.queue.length) if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && 1 === b.length) a.state = b[0];
    else {
      e = g ? b[0] : a.state;
      f = true;
      for (g = g ? 1 : 0; g < b.length; g++) {
        var h = b[g];
        h = "function" === typeof h ? h.call(a, e, c, d) : h;
        null != h && (f ? (f = false, e = O({}, e, h)) : O(e, h));
      }
      a.state = e;
    }
    else e.queue = null;
  }
  var qc = { id: 1, overflow: "" };
  function rc(a, b, c) {
    var d = a.id;
    a = a.overflow;
    var f = 32 - sc(d) - 1;
    d &= ~(1 << f);
    c += 1;
    var e = 32 - sc(b) + f;
    if (30 < e) {
      var g = f - f % 5;
      e = (d & (1 << g) - 1).toString(32);
      d >>= g;
      f -= g;
      return { id: 1 << 32 - sc(b) + f | c << f | d, overflow: e + a };
    }
    return { id: 1 << e | c << f | d, overflow: a };
  }
  var sc = Math.clz32 ? Math.clz32 : tc, uc = Math.log, vc = Math.LN2;
  function tc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (uc(a) / vc | 0) | 0;
  }
  function wc(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var xc = "function" === typeof Object.is ? Object.is : wc, R = null, yc = null, zc = null, S = null, T = false, Ac = false, U = 0, V = null, Bc = 0;
  function W() {
    if (null === R) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
    return R;
  }
  function Cc() {
    if (0 < Bc) throw Error("Rendered more hooks than during the previous render");
    return { memoizedState: null, queue: null, next: null };
  }
  function Dc() {
    null === S ? null === zc ? (T = false, zc = S = Cc()) : (T = true, S = zc) : null === S.next ? (T = false, S = S.next = Cc()) : (T = true, S = S.next);
    return S;
  }
  function Ec() {
    yc = R = null;
    Ac = false;
    zc = null;
    Bc = 0;
    S = V = null;
  }
  function Fc(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function Gc(a, b, c) {
    R = W();
    S = Dc();
    if (T) {
      var d = S.queue;
      b = d.dispatch;
      if (null !== V && (c = V.get(d), void 0 !== c)) {
        V.delete(d);
        d = S.memoizedState;
        do
          d = a(d, c.action), c = c.next;
        while (null !== c);
        S.memoizedState = d;
        return [d, b];
      }
      return [S.memoizedState, b];
    }
    a = a === Fc ? "function" === typeof b ? b() : b : void 0 !== c ? c(b) : b;
    S.memoizedState = a;
    a = S.queue = { last: null, dispatch: null };
    a = a.dispatch = Hc.bind(null, R, a);
    return [S.memoizedState, a];
  }
  function Ic(a, b) {
    R = W();
    S = Dc();
    b = void 0 === b ? null : b;
    if (null !== S) {
      var c = S.memoizedState;
      if (null !== c && null !== b) {
        var d = c[1];
        a: if (null === d) d = false;
        else {
          for (var f = 0; f < d.length && f < b.length; f++) if (!xc(b[f], d[f])) {
            d = false;
            break a;
          }
          d = true;
        }
        if (d) return c[0];
      }
    }
    a = a();
    S.memoizedState = [a, b];
    return a;
  }
  function Hc(a, b, c) {
    if (25 <= Bc) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
    if (a === R) if (Ac = true, a = { action: c, next: null }, null === V && (V = /* @__PURE__ */ new Map()), c = V.get(b), void 0 === c) V.set(b, a);
    else {
      for (b = c; null !== b.next; ) b = b.next;
      b.next = a;
    }
  }
  function Jc() {
    throw Error("startTransition cannot be called during server rendering.");
  }
  function Kc() {
  }
  var Mc = { readContext: function(a) {
    return a._currentValue;
  }, useContext: function(a) {
    W();
    return a._currentValue;
  }, useMemo: Ic, useReducer: Gc, useRef: function(a) {
    R = W();
    S = Dc();
    var b = S.memoizedState;
    return null === b ? (a = { current: a }, S.memoizedState = a) : b;
  }, useState: function(a) {
    return Gc(Fc, a);
  }, useInsertionEffect: Kc, useLayoutEffect: function() {
  }, useCallback: function(a, b) {
    return Ic(function() {
      return a;
    }, b);
  }, useImperativeHandle: Kc, useEffect: Kc, useDebugValue: Kc, useDeferredValue: function(a) {
    W();
    return a;
  }, useTransition: function() {
    W();
    return [false, Jc];
  }, useId: function() {
    var a = yc.treeContext;
    var b = a.overflow;
    a = a.id;
    a = (a & ~(1 << 32 - sc(a) - 1)).toString(32) + b;
    var c = Lc;
    if (null === c) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
    b = U++;
    a = ":" + c.idPrefix + "R" + a;
    0 < b && (a += "H" + b.toString(32));
    return a + ":";
  }, useMutableSource: function(a, b) {
    W();
    return b(a._source);
  }, useSyncExternalStore: function(a, b, c) {
    if (void 0 === c) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
    return c();
  } }, Lc = null, Nc = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Oc(a) {
    console.error(a);
    return null;
  }
  function X() {
  }
  function Pc(a, b) {
    var c = a.pingedTasks;
    c.push(b);
    1 === c.length && setImmediate(function() {
      return Qc(a);
    });
  }
  function Rc(a, b, c, d, f, e, g, h) {
    a.allPendingTasks++;
    null === c ? a.pendingRootTasks++ : c.pendingTasks++;
    var m = { node: b, ping: function() {
      return Pc(a, m);
    }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
    f.add(m);
    return m;
  }
  function Sc(a, b, c, d, f, e) {
    return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c, lastPushedText: f, textEmbedded: e };
  }
  function Y(a, b) {
    a = a.onError(b);
    if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function Tc(a, b) {
    var c = a.onShellError;
    c(b);
    c = a.onFatalError;
    c(b);
    null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
  }
  function Uc(a, b, c, d, f) {
    R = {};
    yc = b;
    U = 0;
    for (a = c(d, f); Ac; ) Ac = false, U = 0, Bc += 1, S = null, a = c(d, f);
    Ec();
    return a;
  }
  function Vc(a, b, c, d) {
    var f = c.render(), e = d.childContextTypes;
    if (null !== e && void 0 !== e) {
      var g = b.legacyContext;
      if ("function" !== typeof c.getChildContext) d = g;
      else {
        c = c.getChildContext();
        for (var h in c) if (!(h in e)) throw Error((gc(d) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        d = O({}, g, c);
      }
      b.legacyContext = d;
      Z(a, b, f);
      b.legacyContext = g;
    } else Z(a, b, f);
  }
  function Wc(a, b) {
    if (a && a.defaultProps) {
      b = O({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  function Xc(a, b, c, d, f) {
    if ("function" === typeof c) if (c.prototype && c.prototype.isReactComponent) {
      f = ic(c, b.legacyContext);
      var e = c.contextType;
      e = new c(d, "object" === typeof e && null !== e ? e._currentValue : f);
      pc(e, c, d, f);
      Vc(a, b, e, c);
    } else {
      e = ic(c, b.legacyContext);
      f = Uc(a, b, c, d, e);
      var g = 0 !== U;
      if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) pc(f, c, d, e), Vc(a, b, f, c);
      else if (g) {
        d = b.treeContext;
        b.treeContext = rc(d, 1, 0);
        try {
          Z(a, b, f);
        } finally {
          b.treeContext = d;
        }
      } else Z(a, b, f);
    }
    else if ("string" === typeof c) {
      f = b.blockedSegment;
      e = Pa(f.chunks, c, d, a.responseState, f.formatContext);
      f.lastPushedText = false;
      g = f.formatContext;
      f.formatContext = ya(g, c, d);
      Yc(a, b, e);
      f.formatContext = g;
      switch (c) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          f.chunks.push(Qa, c, Ra);
      }
      f.lastPushedText = false;
    } else {
      switch (c) {
        case dc:
        case cc:
        case Tb:
        case Ub:
        case Sb:
          Z(a, b, d.children);
          return;
        case Zb:
          Z(
            a,
            b,
            d.children
          );
          return;
        case bc:
          throw Error("ReactDOMServer does not yet support scope components.");
        case Yb:
          a: {
            c = b.blockedBoundary;
            f = b.blockedSegment;
            e = d.fallback;
            d = d.children;
            g = /* @__PURE__ */ new Set();
            var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, m = Sc(a, f.chunks.length, h, f.formatContext, false, false);
            f.children.push(m);
            f.lastPushedText = false;
            var n2 = Sc(a, 0, null, f.formatContext, false, false);
            n2.parentFlushed = true;
            b.blockedBoundary = h;
            b.blockedSegment = n2;
            try {
              if (Yc(a, b, d), n2.lastPushedText && n2.textEmbedded && n2.chunks.push(za), n2.status = 1, Zc(h, n2), 0 === h.pendingTasks) break a;
            } catch (p) {
              n2.status = 4, h.forceClientRender = true, h.errorDigest = Y(a, p);
            } finally {
              b.blockedBoundary = c, b.blockedSegment = f;
            }
            b = Rc(a, e, c, m, g, b.legacyContext, b.context, b.treeContext);
            a.pingedTasks.push(b);
          }
          return;
      }
      if ("object" === typeof c && null !== c) switch (c.$$typeof) {
        case Xb:
          d = Uc(a, b, c.render, d, f);
          if (0 !== U) {
            c = b.treeContext;
            b.treeContext = rc(c, 1, 0);
            try {
              Z(a, b, d);
            } finally {
              b.treeContext = c;
            }
          } else Z(
            a,
            b,
            d
          );
          return;
        case $b:
          c = c.type;
          d = Wc(c, d);
          Xc(a, b, c, d, f);
          return;
        case Vb:
          f = d.children;
          c = c._context;
          d = d.value;
          e = c._currentValue;
          c._currentValue = d;
          g = P;
          P = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
          b.context = d;
          Z(a, b, f);
          a = P;
          if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
          d = a.parentValue;
          a.context._currentValue = d === ec ? a.context._defaultValue : d;
          a = P = a.parent;
          b.context = a;
          return;
        case Wb:
          d = d.children;
          d = d(c._currentValue);
          Z(a, b, d);
          return;
        case ac:
          f = c._init;
          c = f(c._payload);
          d = Wc(c, d);
          Xc(a, b, c, d, void 0);
          return;
      }
      throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c ? c : typeof c) + "."));
    }
  }
  function Z(a, b, c) {
    b.node = c;
    if ("object" === typeof c && null !== c) {
      switch (c.$$typeof) {
        case Qb:
          Xc(a, b, c.type, c.props, c.ref);
          return;
        case Rb:
          throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
        case ac:
          var d = c._init;
          c = d(c._payload);
          Z(a, b, c);
          return;
      }
      if (qa(c)) {
        $c(a, b, c);
        return;
      }
      null === c || "object" !== typeof c ? d = null : (d = fc && c[fc] || c["@@iterator"], d = "function" === typeof d ? d : null);
      if (d && (d = d.call(c))) {
        c = d.next();
        if (!c.done) {
          var f = [];
          do
            f.push(c.value), c = d.next();
          while (!c.done);
          $c(a, b, f);
        }
        return;
      }
      a = Object.prototype.toString.call(c);
      throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    "string" === typeof c ? (d = b.blockedSegment, d.lastPushedText = Aa(b.blockedSegment.chunks, c, a.responseState, d.lastPushedText)) : "number" === typeof c && (d = b.blockedSegment, d.lastPushedText = Aa(
      b.blockedSegment.chunks,
      "" + c,
      a.responseState,
      d.lastPushedText
    ));
  }
  function $c(a, b, c) {
    for (var d = c.length, f = 0; f < d; f++) {
      var e = b.treeContext;
      b.treeContext = rc(e, d, f);
      try {
        Yc(a, b, c[f]);
      } finally {
        b.treeContext = e;
      }
    }
  }
  function Yc(a, b, c) {
    var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
    try {
      return Z(a, b, c);
    } catch (m) {
      if (Ec(), "object" === typeof m && null !== m && "function" === typeof m.then) {
        c = m;
        var g = b.blockedSegment, h = Sc(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
        g.children.push(h);
        g.lastPushedText = false;
        a = Rc(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
        c.then(a, a);
        b.blockedSegment.formatContext = d;
        b.legacyContext = f;
        b.context = e;
        nc(e);
      } else throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, nc(e), m;
    }
  }
  function ad(a) {
    var b = a.blockedBoundary;
    a = a.blockedSegment;
    a.status = 3;
    bd(this, b, a);
  }
  function cd(a, b, c) {
    var d = a.blockedBoundary;
    a.blockedSegment.status = 3;
    null === d ? (b.allPendingTasks--, 2 !== b.status && (b.status = 2, null !== b.destination && b.destination.end())) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = b.onError(void 0 === c ? Error("The render was aborted by the server without a reason.") : c), d.parentFlushed && b.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
      return cd(a2, b, c);
    }), d.fallbackAbortableTasks.clear(), b.allPendingTasks--, 0 === b.allPendingTasks && (a = b.onAllReady, a()));
  }
  function Zc(a, b) {
    if (0 === b.chunks.length && 1 === b.children.length && null === b.children[0].boundary) {
      var c = b.children[0];
      c.id = b.id;
      c.parentFlushed = true;
      1 === c.status && Zc(a, c);
    } else a.completedSegments.push(b);
  }
  function bd(a, b, c) {
    if (null === b) {
      if (c.parentFlushed) {
        if (null !== a.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
        a.completedRootSegment = c;
      }
      a.pendingRootTasks--;
      0 === a.pendingRootTasks && (a.onShellError = X, b = a.onShellReady, b());
    } else b.pendingTasks--, b.forceClientRender || (0 === b.pendingTasks ? (c.parentFlushed && 1 === c.status && Zc(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(ad, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && 1 === c.status && (Zc(b, c), 1 === b.completedSegments.length && b.parentFlushed && a.partialBoundaries.push(b)));
    a.allPendingTasks--;
    0 === a.allPendingTasks && (a = a.onAllReady, a());
  }
  function Qc(a) {
    if (2 !== a.status) {
      var b = P, c = Nc.current;
      Nc.current = Mc;
      var d = Lc;
      Lc = a.responseState;
      try {
        var f = a.pingedTasks, e;
        for (e = 0; e < f.length; e++) {
          var g = f[e];
          var h = a, m = g.blockedSegment;
          if (0 === m.status) {
            nc(g.context);
            try {
              Z(h, g, g.node), m.lastPushedText && m.textEmbedded && m.chunks.push(za), g.abortSet.delete(g), m.status = 1, bd(h, g.blockedBoundary, m);
            } catch (E) {
              if (Ec(), "object" === typeof E && null !== E && "function" === typeof E.then) {
                var n2 = g.ping;
                E.then(n2, n2);
              } else {
                g.abortSet.delete(g);
                m.status = 4;
                var p = g.blockedBoundary, v = E, C = Y(h, v);
                null === p ? Tc(h, v) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = true, p.errorDigest = C, p.parentFlushed && h.clientRenderedBoundaries.push(p)));
                h.allPendingTasks--;
                if (0 === h.allPendingTasks) {
                  var D = h.onAllReady;
                  D();
                }
              }
            } finally {
            }
          }
        }
        f.splice(0, e);
        null !== a.destination && dd(a, a.destination);
      } catch (E) {
        Y(a, E), Tc(a, E);
      } finally {
        Lc = d, Nc.current = c, c === Mc && nc(b);
      }
    }
  }
  function ed(a, b, c) {
    c.parentFlushed = true;
    switch (c.status) {
      case 0:
        var d = c.id = a.nextSegmentId++;
        c.lastPushedText = false;
        c.textEmbedded = false;
        a = a.responseState;
        r2(b, Sa);
        r2(b, a.placeholderPrefix);
        a = d.toString(16);
        r2(b, a);
        return w(b, Ta);
      case 1:
        c.status = 2;
        var f = true;
        d = c.chunks;
        var e = 0;
        c = c.children;
        for (var g = 0; g < c.length; g++) {
          for (f = c[g]; e < f.index; e++) r2(b, d[e]);
          f = fd(a, b, f);
        }
        for (; e < d.length - 1; e++) r2(b, d[e]);
        e < d.length && (f = w(b, d[e]));
        return f;
      default:
        throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
    }
  }
  function fd(a, b, c) {
    var d = c.boundary;
    if (null === d) return ed(a, b, c);
    d.parentFlushed = true;
    if (d.forceClientRender) d = d.errorDigest, w(b, Xa), r2(b, Za), d && (r2(b, ab), r2(b, F(d)), r2(b, $a)), w(b, bb), ed(a, b, c);
    else if (0 < d.pendingTasks) {
      d.rootSegmentID = a.nextSegmentId++;
      0 < d.completedSegments.length && a.partialBoundaries.push(d);
      var f = a.responseState;
      var e = f.nextSuspenseID++;
      f = x(f.boundaryPrefix + e.toString(16));
      d = d.id = f;
      cb(b, a.responseState, d);
      ed(a, b, c);
    } else if (d.byteSize > a.progressiveChunkSize) d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), cb(b, a.responseState, d.id), ed(a, b, c);
    else {
      w(b, Ua);
      c = d.completedSegments;
      if (1 !== c.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
      fd(a, b, c[0]);
    }
    return w(b, Ya);
  }
  function gd(a, b, c) {
    yb(b, a.responseState, c.formatContext, c.id);
    fd(a, b, c);
    return zb(b, c.formatContext);
  }
  function hd(a, b, c) {
    for (var d = c.completedSegments, f = 0; f < d.length; f++) id(a, b, c, d[f]);
    d.length = 0;
    a = a.responseState;
    d = c.id;
    c = c.rootSegmentID;
    r2(b, a.startInlineScript);
    a.sentCompleteBoundaryFunction ? r2(b, Gb) : (a.sentCompleteBoundaryFunction = true, r2(b, Fb));
    if (null === d) throw Error("An ID must have been assigned before we can complete the boundary.");
    c = c.toString(16);
    r2(b, d);
    r2(b, Hb);
    r2(b, a.segmentPrefix);
    r2(b, c);
    return w(b, Ib);
  }
  function id(a, b, c, d) {
    if (2 === d.status) return true;
    var f = d.id;
    if (-1 === f) {
      if (-1 === (d.id = c.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
      return gd(a, b, d);
    }
    gd(a, b, d);
    a = a.responseState;
    r2(b, a.startInlineScript);
    a.sentCompleteSegmentFunction ? r2(b, Bb) : (a.sentCompleteSegmentFunction = true, r2(b, Ab));
    r2(b, a.segmentPrefix);
    f = f.toString(16);
    r2(b, f);
    r2(b, Cb);
    r2(b, a.placeholderPrefix);
    r2(b, f);
    return w(b, Db);
  }
  function dd(a, b) {
    k = new Uint8Array(2048);
    l2 = 0;
    q = true;
    try {
      var c = a.completedRootSegment;
      if (null !== c && 0 === a.pendingRootTasks) {
        fd(a, b, c);
        a.completedRootSegment = null;
        var d = a.responseState.bootstrapChunks;
        for (c = 0; c < d.length - 1; c++) r2(b, d[c]);
        c < d.length && w(b, d[c]);
      }
      var f = a.clientRenderedBoundaries, e;
      for (e = 0; e < f.length; e++) {
        var g = f[e];
        d = b;
        var h = a.responseState, m = g.id, n2 = g.errorDigest, p = g.errorMessage, v = g.errorComponentStack;
        r2(d, h.startInlineScript);
        h.sentClientRenderFunction ? r2(d, Kb) : (h.sentClientRenderFunction = true, r2(d, Jb));
        if (null === m) throw Error("An ID must have been assigned before we can complete the boundary.");
        r2(d, m);
        r2(d, Lb);
        if (n2 || p || v) r2(d, Nb), r2(d, Pb(n2 || ""));
        if (p || v) r2(d, Nb), r2(d, Pb(p || ""));
        v && (r2(d, Nb), r2(d, Pb(v)));
        if (!w(d, Mb)) {
          a.destination = null;
          e++;
          f.splice(0, e);
          return;
        }
      }
      f.splice(0, e);
      var C = a.completedBoundaries;
      for (e = 0; e < C.length; e++) if (!hd(a, b, C[e])) {
        a.destination = null;
        e++;
        C.splice(0, e);
        return;
      }
      C.splice(0, e);
      ca(b);
      k = new Uint8Array(2048);
      l2 = 0;
      q = true;
      var D = a.partialBoundaries;
      for (e = 0; e < D.length; e++) {
        var E = D[e];
        a: {
          f = a;
          g = b;
          var na = E.completedSegments;
          for (h = 0; h < na.length; h++) if (!id(f, g, E, na[h])) {
            h++;
            na.splice(0, h);
            var Eb = false;
            break a;
          }
          na.splice(0, h);
          Eb = true;
        }
        if (!Eb) {
          a.destination = null;
          e++;
          D.splice(0, e);
          return;
        }
      }
      D.splice(0, e);
      var oa = a.completedBoundaries;
      for (e = 0; e < oa.length; e++) if (!hd(a, b, oa[e])) {
        a.destination = null;
        e++;
        oa.splice(0, e);
        return;
      }
      oa.splice(0, e);
    } finally {
      ca(b), "function" === typeof b.flush && b.flush(), 0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b.end();
    }
  }
  function jd(a) {
    setImmediate(function() {
      return Qc(a);
    });
  }
  function kd(a, b) {
    if (1 === a.status) a.status = 2, b.destroy(a.fatalError);
    else if (2 !== a.status && null === a.destination) {
      a.destination = b;
      try {
        dd(a, b);
      } catch (c) {
        Y(a, c), Tc(a, c);
      }
    }
  }
  function ld(a, b) {
    try {
      var c = a.abortableTasks;
      c.forEach(function(c2) {
        return cd(c2, a, b);
      });
      c.clear();
      null !== a.destination && dd(a, a.destination);
    } catch (d) {
      Y(a, d), Tc(a, d);
    }
  }
  function md(a, b) {
    return function() {
      return kd(b, a);
    };
  }
  function nd(a, b) {
    return function() {
      return ld(a, b);
    };
  }
  function od(a, b) {
    var c = b ? b.identifierPrefix : void 0, d = b ? b.nonce : void 0, f = b ? b.bootstrapScriptContent : void 0, e = b ? b.bootstrapScripts : void 0;
    var g = b ? b.bootstrapModules : void 0;
    c = void 0 === c ? "" : c;
    d = void 0 === d ? ra : x('<script nonce="' + F(d) + '">');
    var h = [];
    void 0 !== f && h.push(d, ("" + f).replace(wa, xa), sa);
    if (void 0 !== e) for (f = 0; f < e.length; f++) h.push(ta, F(e[f]), va);
    if (void 0 !== g) for (e = 0; e < g.length; e++) h.push(ua, F(g[e]), va);
    g = {
      bootstrapChunks: h,
      startInlineScript: d,
      placeholderPrefix: x(c + "P:"),
      segmentPrefix: x(c + "S:"),
      boundaryPrefix: c + "B:",
      idPrefix: c,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: false,
      sentCompleteBoundaryFunction: false,
      sentClientRenderFunction: false
    };
    e = b ? b.namespaceURI : void 0;
    e = G("http://www.w3.org/2000/svg" === e ? 2 : "http://www.w3.org/1998/Math/MathML" === e ? 3 : 0, null);
    f = b ? b.progressiveChunkSize : void 0;
    d = b ? b.onError : void 0;
    h = b ? b.onAllReady : void 0;
    var m = b ? b.onShellReady : void 0, n2 = b ? b.onShellError : void 0;
    b = [];
    c = /* @__PURE__ */ new Set();
    g = {
      destination: null,
      responseState: g,
      progressiveChunkSize: void 0 === f ? 12800 : f,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: c,
      pingedTasks: b,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: void 0 === d ? Oc : d,
      onAllReady: void 0 === h ? X : h,
      onShellReady: void 0 === m ? X : m,
      onShellError: void 0 === n2 ? X : n2,
      onFatalError: X
    };
    e = Sc(g, 0, null, e, false, false);
    e.parentFlushed = true;
    a = Rc(g, a, null, e, c, hc, null, qc);
    b.push(a);
    return g;
  }
  reactDomServer_node_production_min.renderToPipeableStream = function(a, b) {
    var c = od(a, b), d = false;
    jd(c);
    return { pipe: function(a2) {
      if (d) throw Error("React currently only supports piping to one writable stream.");
      d = true;
      kd(c, a2);
      a2.on("drain", md(a2, c));
      a2.on("error", nd(c, Error("The destination stream errored while writing data.")));
      a2.on("close", nd(c, Error("The destination stream closed early.")));
      return a2;
    }, abort: function(a2) {
      ld(c, a2);
    } };
  };
  reactDomServer_node_production_min.version = "18.3.1";
  return reactDomServer_node_production_min;
}
var reactDomServerLegacy_node_development = {};
/**
 * @license React
 * react-dom-server-legacy.node.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDomServerLegacy_node_development;
function requireReactDomServerLegacy_node_development() {
  if (hasRequiredReactDomServerLegacy_node_development) return reactDomServerLegacy_node_development;
  hasRequiredReactDomServerLegacy_node_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var React2 = reactExports;
      var stream = require$$1;
      var ReactVersion = "18.3.1";
      var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function warn(format) {
        {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format, args);
          }
        }
      }
      function error(format) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
      }
      function printWarning(level, format, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          if (stack !== "") {
            format += "%s";
            args = args.concat([stack]);
          }
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format);
          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      function scheduleWork(callback) {
        callback();
      }
      function beginWriting(destination) {
      }
      function writeChunk(destination, chunk) {
        writeChunkAndReturn(destination, chunk);
      }
      function writeChunkAndReturn(destination, chunk) {
        return destination.push(chunk);
      }
      function completeWriting(destination) {
      }
      function close(destination) {
        destination.push(null);
      }
      function stringToChunk(content) {
        return content;
      }
      function stringToPrecomputedChunk(content) {
        return content;
      }
      function closeWithError(destination, error2) {
        destination.destroy(error2);
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
          var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        {
          try {
            testStringCoercion(value);
            return false;
          } catch (e) {
            return true;
          }
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkAttributeStringCoercion(value, attributeName) {
        {
          if (willCoercionThrow(value)) {
            error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", attributeName, typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      function checkCSSPropertyStringCoercion(value, propName) {
        {
          if (willCoercionThrow(value)) {
            error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", propName, typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      function checkHtmlStringCoercion(value) {
        {
          if (willCoercionThrow(value)) {
            error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var RESERVED = 0;
      var STRING = 1;
      var BOOLEANISH_STRING = 2;
      var BOOLEAN = 3;
      var OVERLOADED_BOOLEAN = 4;
      var NUMERIC = 5;
      var POSITIVE_NUMERIC = 6;
      var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
      var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
      var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
      var illegalAttributeNameCache = {};
      var validatedAttributeNameCache = {};
      function isAttributeNameSafe(attributeName) {
        if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
          return true;
        }
        if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
          return false;
        }
        if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
          validatedAttributeNameCache[attributeName] = true;
          return true;
        }
        illegalAttributeNameCache[attributeName] = true;
        {
          error("Invalid attribute name: `%s`", attributeName);
        }
        return false;
      }
      function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
        if (propertyInfo !== null && propertyInfo.type === RESERVED) {
          return false;
        }
        switch (typeof value) {
          case "function":
          case "symbol":
            return true;
          case "boolean": {
            if (propertyInfo !== null) {
              return !propertyInfo.acceptsBooleans;
            } else {
              var prefix2 = name.toLowerCase().slice(0, 5);
              return prefix2 !== "data-" && prefix2 !== "aria-";
            }
          }
          default:
            return false;
        }
      }
      function getPropertyInfo(name) {
        return properties.hasOwnProperty(name) ? properties[name] : null;
      }
      function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
        this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
        this.attributeName = attributeName;
        this.attributeNamespace = attributeNamespace;
        this.mustUseProperty = mustUseProperty;
        this.propertyName = name;
        this.type = type;
        this.sanitizeURL = sanitizeURL2;
        this.removeEmptyString = removeEmptyString;
      }
      var properties = {};
      var reservedProps = [
        "children",
        "dangerouslySetInnerHTML",
        // TODO: This prevents the assignment of defaultValue to regular
        // elements (not just inputs). Now that ReactDOMInput assigns to the
        // defaultValue property -- do we need this?
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style"
      ];
      reservedProps.forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          RESERVED,
          false,
          // mustUseProperty
          name,
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
        var name = _ref[0], attributeName = _ref[1];
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          // mustUseProperty
          attributeName,
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEANISH_STRING,
          false,
          // mustUseProperty
          name.toLowerCase(),
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEANISH_STRING,
          false,
          // mustUseProperty
          name,
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      [
        "allowFullScreen",
        "async",
        // Note: there is a special case that prevents it from being written to the DOM
        // on the client side because the browsers are inconsistent. Instead we call focus().
        "autoFocus",
        "autoPlay",
        "controls",
        "default",
        "defer",
        "disabled",
        "disablePictureInPicture",
        "disableRemotePlayback",
        "formNoValidate",
        "hidden",
        "loop",
        "noModule",
        "noValidate",
        "open",
        "playsInline",
        "readOnly",
        "required",
        "reversed",
        "scoped",
        "seamless",
        // Microdata
        "itemScope"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEAN,
          false,
          // mustUseProperty
          name.toLowerCase(),
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      [
        "checked",
        // Note: `option.selected` is not updated if `select.multiple` is
        // disabled with `removeAttribute`. We have special logic for handling this.
        "multiple",
        "muted",
        "selected"
        // NOTE: if you add a camelCased prop to this list,
        // you'll need to set attributeName to name.toLowerCase()
        // instead in the assignment below.
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEAN,
          true,
          // mustUseProperty
          name,
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      [
        "capture",
        "download"
        // NOTE: if you add a camelCased prop to this list,
        // you'll need to set attributeName to name.toLowerCase()
        // instead in the assignment below.
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          OVERLOADED_BOOLEAN,
          false,
          // mustUseProperty
          name,
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      [
        "cols",
        "rows",
        "size",
        "span"
        // NOTE: if you add a camelCased prop to this list,
        // you'll need to set attributeName to name.toLowerCase()
        // instead in the assignment below.
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          POSITIVE_NUMERIC,
          false,
          // mustUseProperty
          name,
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      ["rowSpan", "start"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          NUMERIC,
          false,
          // mustUseProperty
          name.toLowerCase(),
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      var CAMELIZE = /[\-\:]([a-z])/g;
      var capitalize = function(token) {
        return token[1].toUpperCase();
      };
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height"
        // NOTE: if you add a camelCased prop to this list,
        // you'll need to set attributeName to name.toLowerCase()
        // instead in the assignment below.
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          // mustUseProperty
          attributeName,
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      [
        "xlink:actuate",
        "xlink:arcrole",
        "xlink:role",
        "xlink:show",
        "xlink:title",
        "xlink:type"
        // NOTE: if you add a camelCased prop to this list,
        // you'll need to set attributeName to name.toLowerCase()
        // instead in the assignment below.
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          // mustUseProperty
          attributeName,
          "http://www.w3.org/1999/xlink",
          false,
          // sanitizeURL
          false
        );
      });
      [
        "xml:base",
        "xml:lang",
        "xml:space"
        // NOTE: if you add a camelCased prop to this list,
        // you'll need to set attributeName to name.toLowerCase()
        // instead in the assignment below.
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          // mustUseProperty
          attributeName,
          "http://www.w3.org/XML/1998/namespace",
          false,
          // sanitizeURL
          false
        );
      });
      ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(
          attributeName,
          STRING,
          false,
          // mustUseProperty
          attributeName.toLowerCase(),
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      var xlinkHref = "xlinkHref";
      properties[xlinkHref] = new PropertyInfoRecord(
        "xlinkHref",
        STRING,
        false,
        // mustUseProperty
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        true,
        // sanitizeURL
        false
      );
      ["src", "href", "action", "formAction"].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(
          attributeName,
          STRING,
          false,
          // mustUseProperty
          attributeName.toLowerCase(),
          // attributeName
          null,
          // attributeNamespace
          true,
          // sanitizeURL
          true
        );
      });
      var isUnitlessNumber = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        // SVG-related properties
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      function prefixKey(prefix2, key) {
        return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
      }
      var prefixes = ["Webkit", "ms", "Moz", "O"];
      Object.keys(isUnitlessNumber).forEach(function(prop) {
        prefixes.forEach(function(prefix2) {
          isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
        });
      });
      var hasReadOnlyValue = {
        button: true,
        checkbox: true,
        image: true,
        hidden: true,
        radio: true,
        reset: true,
        submit: true
      };
      function checkControlledValueProps(tagName, props) {
        {
          if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
            error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
          }
          if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
            error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
          }
        }
      }
      function isCustomComponent(tagName, props) {
        if (tagName.indexOf("-") === -1) {
          return typeof props.is === "string";
        }
        switch (tagName) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var ariaProperties = {
        "aria-current": 0,
        // state
        "aria-description": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        // state
        "aria-hidden": 0,
        // state
        "aria-invalid": 0,
        // state
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        // Widget Attributes
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        // Live Region Attributes
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        // Drag-and-Drop Attributes
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        // Relationship Attributes
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0
      };
      var warnedProperties = {};
      var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
      var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
      function validateProperty(tagName, name) {
        {
          if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
            return true;
          }
          if (rARIACamel.test(name)) {
            var ariaName = "aria-" + name.slice(4).toLowerCase();
            var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
            if (correctName == null) {
              error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
              warnedProperties[name] = true;
              return true;
            }
            if (name !== correctName) {
              error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
              warnedProperties[name] = true;
              return true;
            }
          }
          if (rARIA.test(name)) {
            var lowerCasedName = name.toLowerCase();
            var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
            if (standardName == null) {
              warnedProperties[name] = true;
              return false;
            }
            if (name !== standardName) {
              error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
              warnedProperties[name] = true;
              return true;
            }
          }
        }
        return true;
      }
      function warnInvalidARIAProps(type, props) {
        {
          var invalidProps = [];
          for (var key in props) {
            var isValid2 = validateProperty(type, key);
            if (!isValid2) {
              invalidProps.push(key);
            }
          }
          var unknownPropString = invalidProps.map(function(prop) {
            return "`" + prop + "`";
          }).join(", ");
          if (invalidProps.length === 1) {
            error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
          } else if (invalidProps.length > 1) {
            error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
          }
        }
      }
      function validateProperties(type, props) {
        if (isCustomComponent(type, props)) {
          return;
        }
        warnInvalidARIAProps(type, props);
      }
      var didWarnValueNull = false;
      function validateProperties$1(type, props) {
        {
          if (type !== "input" && type !== "textarea" && type !== "select") {
            return;
          }
          if (props != null && props.value === null && !didWarnValueNull) {
            didWarnValueNull = true;
            if (type === "select" && props.multiple) {
              error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
            } else {
              error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
            }
          }
        }
      }
      var possibleStandardNames = {
        // HTML
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        imagesizes: "imageSizes",
        imagesrcset: "imageSrcSet",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        // SVG
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan"
      };
      var validateProperty$1 = function() {
      };
      {
        var warnedProperties$1 = {};
        var EVENT_NAME_REGEX = /^on./;
        var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
        var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        validateProperty$1 = function(tagName, name, value, eventRegistry) {
          if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
            return true;
          }
          var lowerCasedName = name.toLowerCase();
          if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
            error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
            warnedProperties$1[name] = true;
            return true;
          }
          if (eventRegistry != null) {
            var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
            if (registrationNameDependencies.hasOwnProperty(name)) {
              return true;
            }
            var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
            if (registrationName != null) {
              error("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
              warnedProperties$1[name] = true;
              return true;
            }
            if (EVENT_NAME_REGEX.test(name)) {
              error("Unknown event handler property `%s`. It will be ignored.", name);
              warnedProperties$1[name] = true;
              return true;
            }
          } else if (EVENT_NAME_REGEX.test(name)) {
            if (INVALID_EVENT_NAME_REGEX.test(name)) {
              error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name);
            }
            warnedProperties$1[name] = true;
            return true;
          }
          if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
            return true;
          }
          if (lowerCasedName === "innerhtml") {
            error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
            warnedProperties$1[name] = true;
            return true;
          }
          if (lowerCasedName === "aria") {
            error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
            warnedProperties$1[name] = true;
            return true;
          }
          if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value !== "string") {
            error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
            warnedProperties$1[name] = true;
            return true;
          }
          if (typeof value === "number" && isNaN(value)) {
            error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name);
            warnedProperties$1[name] = true;
            return true;
          }
          var propertyInfo = getPropertyInfo(name);
          var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
          if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            var standardName = possibleStandardNames[lowerCasedName];
            if (standardName !== name) {
              error("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
              warnedProperties$1[name] = true;
              return true;
            }
          } else if (!isReserved && name !== lowerCasedName) {
            error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName);
            warnedProperties$1[name] = true;
            return true;
          }
          if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo)) {
            if (value) {
              error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name);
            } else {
              error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
            }
            warnedProperties$1[name] = true;
            return true;
          }
          if (isReserved) {
            return true;
          }
          if (shouldRemoveAttributeWithWarning(name, value, propertyInfo)) {
            warnedProperties$1[name] = true;
            return false;
          }
          if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
            error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
            warnedProperties$1[name] = true;
            return true;
          }
          return true;
        };
      }
      var warnUnknownProperties = function(type, props, eventRegistry) {
        {
          var unknownProps = [];
          for (var key in props) {
            var isValid2 = validateProperty$1(type, key, props[key], eventRegistry);
            if (!isValid2) {
              unknownProps.push(key);
            }
          }
          var unknownPropString = unknownProps.map(function(prop) {
            return "`" + prop + "`";
          }).join(", ");
          if (unknownProps.length === 1) {
            error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
          } else if (unknownProps.length > 1) {
            error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
          }
        }
      };
      function validateProperties$2(type, props, eventRegistry) {
        if (isCustomComponent(type, props)) {
          return;
        }
        warnUnknownProperties(type, props, eventRegistry);
      }
      var warnValidStyle = function() {
      };
      {
        var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
        var msPattern = /^-ms-/;
        var hyphenPattern = /-(.)/g;
        var badStyleValueWithSemicolonPattern = /;\s*$/;
        var warnedStyleNames = {};
        var warnedStyleValues = {};
        var warnedForNaNValue = false;
        var warnedForInfinityValue = false;
        var camelize = function(string) {
          return string.replace(hyphenPattern, function(_, character) {
            return character.toUpperCase();
          });
        };
        var warnHyphenatedStyleName = function(name) {
          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
          }
          warnedStyleNames[name] = true;
          error(
            "Unsupported style property %s. Did you mean %s?",
            name,
            // As Andi Smith suggests
            // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
            // is converted to lowercase `ms`.
            camelize(name.replace(msPattern, "ms-"))
          );
        };
        var warnBadVendoredStyleName = function(name) {
          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
          }
          warnedStyleNames[name] = true;
          error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
        };
        var warnStyleValueWithSemicolon = function(name, value) {
          if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
            return;
          }
          warnedStyleValues[value] = true;
          error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, ""));
        };
        var warnStyleValueIsNaN = function(name, value) {
          if (warnedForNaNValue) {
            return;
          }
          warnedForNaNValue = true;
          error("`NaN` is an invalid value for the `%s` css style property.", name);
        };
        var warnStyleValueIsInfinity = function(name, value) {
          if (warnedForInfinityValue) {
            return;
          }
          warnedForInfinityValue = true;
          error("`Infinity` is an invalid value for the `%s` css style property.", name);
        };
        warnValidStyle = function(name, value) {
          if (name.indexOf("-") > -1) {
            warnHyphenatedStyleName(name);
          } else if (badVendoredStyleNamePattern.test(name)) {
            warnBadVendoredStyleName(name);
          } else if (badStyleValueWithSemicolonPattern.test(value)) {
            warnStyleValueWithSemicolon(name, value);
          }
          if (typeof value === "number") {
            if (isNaN(value)) {
              warnStyleValueIsNaN(name, value);
            } else if (!isFinite(value)) {
              warnStyleValueIsInfinity(name, value);
            }
          }
        };
      }
      var warnValidStyle$1 = warnValidStyle;
      var matchHtmlRegExp = /["'&<>]/;
      function escapeHtml(string) {
        {
          checkHtmlStringCoercion(string);
        }
        var str = "" + string;
        var match = matchHtmlRegExp.exec(str);
        if (!match) {
          return str;
        }
        var escape;
        var html = "";
        var index;
        var lastIndex = 0;
        for (index = match.index; index < str.length; index++) {
          switch (str.charCodeAt(index)) {
            case 34:
              escape = "&quot;";
              break;
            case 38:
              escape = "&amp;";
              break;
            case 39:
              escape = "&#x27;";
              break;
            case 60:
              escape = "&lt;";
              break;
            case 62:
              escape = "&gt;";
              break;
            default:
              continue;
          }
          if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
          }
          lastIndex = index + 1;
          html += escape;
        }
        return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
      }
      function escapeTextForBrowser(text) {
        if (typeof text === "boolean" || typeof text === "number") {
          return "" + text;
        }
        return escapeHtml(text);
      }
      var uppercasePattern = /([A-Z])/g;
      var msPattern$1 = /^ms-/;
      function hyphenateStyleName(name) {
        return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern$1, "-ms-");
      }
      var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
      var didWarn = false;
      function sanitizeURL(url) {
        {
          if (!didWarn && isJavaScriptProtocol.test(url)) {
            didWarn = true;
            error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url));
          }
        }
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      var startInlineScript = stringToPrecomputedChunk("<script>");
      function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
        var idPrefix = identifierPrefix === void 0 ? "" : identifierPrefix;
        var inlineScriptWithNonce = nonce === void 0 ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
        var bootstrapChunks = [];
        return {
          bootstrapChunks,
          startInlineScript: inlineScriptWithNonce,
          placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
          segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
          boundaryPrefix: idPrefix + "B:",
          idPrefix,
          nextSuspenseID: 0,
          sentCompleteSegmentFunction: false,
          sentCompleteBoundaryFunction: false,
          sentClientRenderFunction: false
        };
      }
      var ROOT_HTML_MODE = 0;
      var HTML_MODE = 1;
      var SVG_MODE = 2;
      var MATHML_MODE = 3;
      var HTML_TABLE_MODE = 4;
      var HTML_TABLE_BODY_MODE = 5;
      var HTML_TABLE_ROW_MODE = 6;
      var HTML_COLGROUP_MODE = 7;
      function createFormatContext(insertionMode, selectedValue) {
        return {
          insertionMode,
          selectedValue
        };
      }
      function getChildFormatContext(parentContext, type, props) {
        switch (type) {
          case "select":
            return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);
          case "svg":
            return createFormatContext(SVG_MODE, null);
          case "math":
            return createFormatContext(MATHML_MODE, null);
          case "foreignObject":
            return createFormatContext(HTML_MODE, null);
          case "table":
            return createFormatContext(HTML_TABLE_MODE, null);
          case "thead":
          case "tbody":
          case "tfoot":
            return createFormatContext(HTML_TABLE_BODY_MODE, null);
          case "colgroup":
            return createFormatContext(HTML_COLGROUP_MODE, null);
          case "tr":
            return createFormatContext(HTML_TABLE_ROW_MODE, null);
        }
        if (parentContext.insertionMode >= HTML_TABLE_MODE) {
          return createFormatContext(HTML_MODE, null);
        }
        if (parentContext.insertionMode === ROOT_HTML_MODE) {
          return createFormatContext(HTML_MODE, null);
        }
        return parentContext;
      }
      var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
      function assignSuspenseBoundaryID(responseState) {
        var generatedID = responseState.nextSuspenseID++;
        return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
      }
      function makeId(responseState, treeId, localId) {
        var idPrefix = responseState.idPrefix;
        var id = ":" + idPrefix + "R" + treeId;
        if (localId > 0) {
          id += "H" + localId.toString(32);
        }
        return id + ":";
      }
      function encodeHTMLTextNode(text) {
        return escapeTextForBrowser(text);
      }
      var textSeparator = stringToPrecomputedChunk("<!-- -->");
      function pushTextInstance(target, text, responseState, textEmbedded) {
        if (text === "") {
          return textEmbedded;
        }
        if (textEmbedded) {
          target.push(textSeparator);
        }
        target.push(stringToChunk(encodeHTMLTextNode(text)));
        return true;
      }
      function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
        if (lastPushedText && textEmbedded) {
          target.push(textSeparator);
        }
      }
      var styleNameCache = /* @__PURE__ */ new Map();
      function processStyleName(styleName) {
        var chunk = styleNameCache.get(styleName);
        if (chunk !== void 0) {
          return chunk;
        }
        var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
        styleNameCache.set(styleName, result);
        return result;
      }
      var styleAttributeStart = stringToPrecomputedChunk(' style="');
      var styleAssign = stringToPrecomputedChunk(":");
      var styleSeparator = stringToPrecomputedChunk(";");
      function pushStyle(target, responseState, style) {
        if (typeof style !== "object") {
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
        }
        var isFirst = true;
        for (var styleName in style) {
          if (!hasOwnProperty.call(style, styleName)) {
            continue;
          }
          var styleValue = style[styleName];
          if (styleValue == null || typeof styleValue === "boolean" || styleValue === "") {
            continue;
          }
          var nameChunk = void 0;
          var valueChunk = void 0;
          var isCustomProperty = styleName.indexOf("--") === 0;
          if (isCustomProperty) {
            nameChunk = stringToChunk(escapeTextForBrowser(styleName));
            {
              checkCSSPropertyStringCoercion(styleValue, styleName);
            }
            valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
          } else {
            {
              warnValidStyle$1(styleName, styleValue);
            }
            nameChunk = processStyleName(styleName);
            if (typeof styleValue === "number") {
              if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
                valueChunk = stringToChunk(styleValue + "px");
              } else {
                valueChunk = stringToChunk("" + styleValue);
              }
            } else {
              {
                checkCSSPropertyStringCoercion(styleValue, styleName);
              }
              valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
            }
          }
          if (isFirst) {
            isFirst = false;
            target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
          } else {
            target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
          }
        }
        if (!isFirst) {
          target.push(attributeEnd);
        }
      }
      var attributeSeparator = stringToPrecomputedChunk(" ");
      var attributeAssign = stringToPrecomputedChunk('="');
      var attributeEnd = stringToPrecomputedChunk('"');
      var attributeEmptyString = stringToPrecomputedChunk('=""');
      function pushAttribute(target, responseState, name, value) {
        switch (name) {
          case "style": {
            pushStyle(target, responseState, value);
            return;
          }
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            return;
        }
        if (
          // shouldIgnoreAttribute
          // We have already filtered out null/undefined and reserved words.
          name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")
        ) {
          return;
        }
        var propertyInfo = getPropertyInfo(name);
        if (propertyInfo !== null) {
          switch (typeof value) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              if (!propertyInfo.acceptsBooleans) {
                return;
              }
            }
          }
          var attributeName = propertyInfo.attributeName;
          var attributeNameChunk = stringToChunk(attributeName);
          switch (propertyInfo.type) {
            case BOOLEAN:
              if (value) {
                target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
              }
              return;
            case OVERLOADED_BOOLEAN:
              if (value === true) {
                target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
              } else if (value === false) ;
              else {
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
              }
              return;
            case NUMERIC:
              if (!isNaN(value)) {
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
              }
              break;
            case POSITIVE_NUMERIC:
              if (!isNaN(value) && value >= 1) {
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
              }
              break;
            default:
              if (propertyInfo.sanitizeURL) {
                {
                  checkAttributeStringCoercion(value, attributeName);
                }
                value = "" + value;
                sanitizeURL(value);
              }
              target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
          }
        } else if (isAttributeNameSafe(name)) {
          switch (typeof value) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var prefix2 = name.toLowerCase().slice(0, 5);
              if (prefix2 !== "data-" && prefix2 !== "aria-") {
                return;
              }
            }
          }
          target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
        }
      }
      var endOfStartTag = stringToPrecomputedChunk(">");
      var endOfStartTagSelfClosing = stringToPrecomputedChunk("/>");
      function pushInnerHTML(target, innerHTML, children) {
        if (innerHTML != null) {
          if (children != null) {
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          }
          if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          }
          var html = innerHTML.__html;
          if (html !== null && html !== void 0) {
            {
              checkHtmlStringCoercion(html);
            }
            target.push(stringToChunk("" + html));
          }
        }
      }
      var didWarnDefaultInputValue = false;
      var didWarnDefaultChecked = false;
      var didWarnDefaultSelectValue = false;
      var didWarnDefaultTextareaValue = false;
      var didWarnInvalidOptionChildren = false;
      var didWarnInvalidOptionInnerHTML = false;
      var didWarnSelectedSetOnOption = false;
      function checkSelectProp(props, propName) {
        {
          var value = props[propName];
          if (value != null) {
            var array = isArray(value);
            if (props.multiple && !array) {
              error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName);
            } else if (!props.multiple && array) {
              error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName);
            }
          }
        }
      }
      function pushStartSelect(target, props, responseState) {
        {
          checkControlledValueProps("select", props);
          checkSelectProp(props, "value");
          checkSelectProp(props, "defaultValue");
          if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue) {
            error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components");
            didWarnDefaultSelectValue = true;
          }
        }
        target.push(startChunkForTag("select"));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        return children;
      }
      function flattenOptionChildren(children) {
        var content = "";
        React2.Children.forEach(children, function(child) {
          if (child == null) {
            return;
          }
          content += child;
          {
            if (!didWarnInvalidOptionChildren && typeof child !== "string" && typeof child !== "number") {
              didWarnInvalidOptionChildren = true;
              error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.");
            }
          }
        });
        return content;
      }
      var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
      function pushStartOption(target, props, responseState, formatContext) {
        var selectedValue = formatContext.selectedValue;
        target.push(startChunkForTag("option"));
        var children = null;
        var value = null;
        var selected = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "selected":
                selected = propValue;
                {
                  if (!didWarnSelectedSetOnOption) {
                    error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.");
                    didWarnSelectedSetOnOption = true;
                  }
                }
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "value":
                value = propValue;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        if (selectedValue != null) {
          var stringValue;
          if (value !== null) {
            {
              checkAttributeStringCoercion(value, "value");
            }
            stringValue = "" + value;
          } else {
            {
              if (innerHTML !== null) {
                if (!didWarnInvalidOptionInnerHTML) {
                  didWarnInvalidOptionInnerHTML = true;
                  error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.");
                }
              }
            }
            stringValue = flattenOptionChildren(children);
          }
          if (isArray(selectedValue)) {
            for (var i2 = 0; i2 < selectedValue.length; i2++) {
              {
                checkAttributeStringCoercion(selectedValue[i2], "value");
              }
              var v = "" + selectedValue[i2];
              if (v === stringValue) {
                target.push(selectedMarkerAttribute);
                break;
              }
            }
          } else {
            {
              checkAttributeStringCoercion(selectedValue, "select.value");
            }
            if ("" + selectedValue === stringValue) {
              target.push(selectedMarkerAttribute);
            }
          }
        } else if (selected) {
          target.push(selectedMarkerAttribute);
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        return children;
      }
      function pushInput(target, props, responseState) {
        {
          checkControlledValueProps("input", props);
          if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked) {
            error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
            didWarnDefaultChecked = true;
          }
          if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue) {
            error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
            didWarnDefaultInputValue = true;
          }
        }
        target.push(startChunkForTag("input"));
        var value = null;
        var defaultValue = null;
        var checked = null;
        var defaultChecked = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              case "defaultChecked":
                defaultChecked = propValue;
                break;
              case "defaultValue":
                defaultValue = propValue;
                break;
              case "checked":
                checked = propValue;
                break;
              case "value":
                value = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        if (checked !== null) {
          pushAttribute(target, responseState, "checked", checked);
        } else if (defaultChecked !== null) {
          pushAttribute(target, responseState, "checked", defaultChecked);
        }
        if (value !== null) {
          pushAttribute(target, responseState, "value", value);
        } else if (defaultValue !== null) {
          pushAttribute(target, responseState, "value", defaultValue);
        }
        target.push(endOfStartTagSelfClosing);
        return null;
      }
      function pushStartTextArea(target, props, responseState) {
        {
          checkControlledValueProps("textarea", props);
          if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue) {
            error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components");
            didWarnDefaultTextareaValue = true;
          }
        }
        target.push(startChunkForTag("textarea"));
        var value = null;
        var defaultValue = null;
        var children = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "value":
                value = propValue;
                break;
              case "defaultValue":
                defaultValue = propValue;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        if (value === null && defaultValue !== null) {
          value = defaultValue;
        }
        target.push(endOfStartTag);
        if (children != null) {
          {
            error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          }
          if (value != null) {
            throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          }
          if (isArray(children)) {
            if (children.length > 1) {
              throw new Error("<textarea> can only have at most one child.");
            }
            {
              checkHtmlStringCoercion(children[0]);
            }
            value = "" + children[0];
          }
          {
            checkHtmlStringCoercion(children);
          }
          value = "" + children;
        }
        if (typeof value === "string" && value[0] === "\n") {
          target.push(leadingNewline);
        }
        if (value !== null) {
          {
            checkAttributeStringCoercion(value, "value");
          }
          target.push(stringToChunk(encodeHTMLTextNode("" + value)));
        }
        return null;
      }
      function pushSelfClosing(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTagSelfClosing);
        return null;
      }
      function pushStartMenuItem(target, props, responseState) {
        target.push(startChunkForTag("menuitem"));
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        return null;
      }
      function pushStartTitle(target, props, responseState) {
        target.push(startChunkForTag("title"));
        var children = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        {
          var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
          if (Array.isArray(children) && children.length > 1) {
            error("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
          } else if (child != null && child.$$typeof != null) {
            error("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
          } else if (child != null && typeof child !== "string" && typeof child !== "number") {
            error("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
          }
        }
        return children;
      }
      function pushStartGenericElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        if (typeof children === "string") {
          target.push(stringToChunk(encodeHTMLTextNode(children)));
          return null;
        }
        return children;
      }
      function pushStartCustomElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "style":
                pushStyle(target, responseState, propValue);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                if (isAttributeNameSafe(propKey) && typeof propValue !== "function" && typeof propValue !== "symbol") {
                  target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
                }
                break;
            }
          }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        return children;
      }
      var leadingNewline = stringToPrecomputedChunk("\n");
      function pushStartPreformattedElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        if (innerHTML != null) {
          if (children != null) {
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          }
          if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          }
          var html = innerHTML.__html;
          if (html !== null && html !== void 0) {
            if (typeof html === "string" && html.length > 0 && html[0] === "\n") {
              target.push(leadingNewline, stringToChunk(html));
            } else {
              {
                checkHtmlStringCoercion(html);
              }
              target.push(stringToChunk("" + html));
            }
          }
        }
        if (typeof children === "string" && children[0] === "\n") {
          target.push(leadingNewline);
        }
        return children;
      }
      var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
      var validatedTagCache = /* @__PURE__ */ new Map();
      function startChunkForTag(tag) {
        var tagStartChunk = validatedTagCache.get(tag);
        if (tagStartChunk === void 0) {
          if (!VALID_TAG_REGEX.test(tag)) {
            throw new Error("Invalid tag: " + tag);
          }
          tagStartChunk = stringToPrecomputedChunk("<" + tag);
          validatedTagCache.set(tag, tagStartChunk);
        }
        return tagStartChunk;
      }
      var DOCTYPE = stringToPrecomputedChunk("<!DOCTYPE html>");
      function pushStartInstance(target, type, props, responseState, formatContext) {
        {
          validateProperties(type, props);
          validateProperties$1(type, props);
          validateProperties$2(type, props, null);
          if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
            error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
          }
          if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
            if (type.indexOf("-") === -1 && typeof props.is !== "string" && type.toLowerCase() !== type) {
              error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
            }
          }
        }
        switch (type) {
          case "select":
            return pushStartSelect(target, props, responseState);
          case "option":
            return pushStartOption(target, props, responseState, formatContext);
          case "textarea":
            return pushStartTextArea(target, props, responseState);
          case "input":
            return pushInput(target, props, responseState);
          case "menuitem":
            return pushStartMenuItem(target, props, responseState);
          case "title":
            return pushStartTitle(target, props, responseState);
          case "listing":
          case "pre": {
            return pushStartPreformattedElement(target, props, type, responseState);
          }
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr": {
            return pushSelfClosing(target, props, type, responseState);
          }
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph": {
            return pushStartGenericElement(target, props, type, responseState);
          }
          case "html": {
            if (formatContext.insertionMode === ROOT_HTML_MODE) {
              target.push(DOCTYPE);
            }
            return pushStartGenericElement(target, props, type, responseState);
          }
          default: {
            if (type.indexOf("-") === -1 && typeof props.is !== "string") {
              return pushStartGenericElement(target, props, type, responseState);
            } else {
              return pushStartCustomElement(target, props, type, responseState);
            }
          }
        }
      }
      var endTag1 = stringToPrecomputedChunk("</");
      var endTag2 = stringToPrecomputedChunk(">");
      function pushEndInstance(target, type, props) {
        switch (type) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr": {
            break;
          }
          default: {
            target.push(endTag1, stringToChunk(type), endTag2);
          }
        }
      }
      function writeCompletedRoot(destination, responseState) {
        var bootstrapChunks = responseState.bootstrapChunks;
        var i2 = 0;
        for (; i2 < bootstrapChunks.length - 1; i2++) {
          writeChunk(destination, bootstrapChunks[i2]);
        }
        if (i2 < bootstrapChunks.length) {
          return writeChunkAndReturn(destination, bootstrapChunks[i2]);
        }
        return true;
      }
      var placeholder1 = stringToPrecomputedChunk('<template id="');
      var placeholder2 = stringToPrecomputedChunk('"></template>');
      function writePlaceholder(destination, responseState, id) {
        writeChunk(destination, placeholder1);
        writeChunk(destination, responseState.placeholderPrefix);
        var formattedID = stringToChunk(id.toString(16));
        writeChunk(destination, formattedID);
        return writeChunkAndReturn(destination, placeholder2);
      }
      var startCompletedSuspenseBoundary = stringToPrecomputedChunk("<!--$-->");
      var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
      var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
      var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk("<!--$!-->");
      var endSuspenseBoundary = stringToPrecomputedChunk("<!--/$-->");
      var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk("<template");
      var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
      var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
      var clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="');
      var clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="');
      var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk("></template>");
      function writeStartCompletedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
      }
      function writeStartPendingSuspenseBoundary(destination, responseState, id) {
        writeChunk(destination, startPendingSuspenseBoundary1);
        if (id === null) {
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        }
        writeChunk(destination, id);
        return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
      }
      function writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMesssage, errorComponentStack) {
        var result;
        result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
        writeChunk(destination, clientRenderedSuspenseBoundaryError1);
        if (errorDigest) {
          writeChunk(destination, clientRenderedSuspenseBoundaryError1A);
          writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest)));
          writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
        }
        {
          if (errorMesssage) {
            writeChunk(destination, clientRenderedSuspenseBoundaryError1B);
            writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMesssage)));
            writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
          }
          if (errorComponentStack) {
            writeChunk(destination, clientRenderedSuspenseBoundaryError1C);
            writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack)));
            writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
          }
        }
        result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
        return result;
      }
      function writeEndCompletedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      function writeEndPendingSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
      var startSegmentHTML2 = stringToPrecomputedChunk('">');
      var endSegmentHTML = stringToPrecomputedChunk("</div>");
      var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
      var startSegmentSVG2 = stringToPrecomputedChunk('">');
      var endSegmentSVG = stringToPrecomputedChunk("</svg>");
      var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
      var startSegmentMathML2 = stringToPrecomputedChunk('">');
      var endSegmentMathML = stringToPrecomputedChunk("</math>");
      var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
      var startSegmentTable2 = stringToPrecomputedChunk('">');
      var endSegmentTable = stringToPrecomputedChunk("</table>");
      var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
      var startSegmentTableBody2 = stringToPrecomputedChunk('">');
      var endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>");
      var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
      var startSegmentTableRow2 = stringToPrecomputedChunk('">');
      var endSegmentTableRow = stringToPrecomputedChunk("</tr></table>");
      var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
      var startSegmentColGroup2 = stringToPrecomputedChunk('">');
      var endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>");
      function writeStartSegment(destination, responseState, formatContext, id) {
        switch (formatContext.insertionMode) {
          case ROOT_HTML_MODE:
          case HTML_MODE: {
            writeChunk(destination, startSegmentHTML);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentHTML2);
          }
          case SVG_MODE: {
            writeChunk(destination, startSegmentSVG);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentSVG2);
          }
          case MATHML_MODE: {
            writeChunk(destination, startSegmentMathML);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentMathML2);
          }
          case HTML_TABLE_MODE: {
            writeChunk(destination, startSegmentTable);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentTable2);
          }
          case HTML_TABLE_BODY_MODE: {
            writeChunk(destination, startSegmentTableBody);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentTableBody2);
          }
          case HTML_TABLE_ROW_MODE: {
            writeChunk(destination, startSegmentTableRow);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentTableRow2);
          }
          case HTML_COLGROUP_MODE: {
            writeChunk(destination, startSegmentColGroup);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentColGroup2);
          }
          default: {
            throw new Error("Unknown insertion mode. This is a bug in React.");
          }
        }
      }
      function writeEndSegment(destination, formatContext) {
        switch (formatContext.insertionMode) {
          case ROOT_HTML_MODE:
          case HTML_MODE: {
            return writeChunkAndReturn(destination, endSegmentHTML);
          }
          case SVG_MODE: {
            return writeChunkAndReturn(destination, endSegmentSVG);
          }
          case MATHML_MODE: {
            return writeChunkAndReturn(destination, endSegmentMathML);
          }
          case HTML_TABLE_MODE: {
            return writeChunkAndReturn(destination, endSegmentTable);
          }
          case HTML_TABLE_BODY_MODE: {
            return writeChunkAndReturn(destination, endSegmentTableBody);
          }
          case HTML_TABLE_ROW_MODE: {
            return writeChunkAndReturn(destination, endSegmentTableRow);
          }
          case HTML_COLGROUP_MODE: {
            return writeChunkAndReturn(destination, endSegmentColGroup);
          }
          default: {
            throw new Error("Unknown insertion mode. This is a bug in React.");
          }
        }
      }
      var completeSegmentFunction = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}";
      var completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
      var clientRenderFunction = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}';
      var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
      var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
      var completeSegmentScript2 = stringToPrecomputedChunk('","');
      var completeSegmentScript3 = stringToPrecomputedChunk('")<\/script>');
      function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
        writeChunk(destination, responseState.startInlineScript);
        if (!responseState.sentCompleteSegmentFunction) {
          responseState.sentCompleteSegmentFunction = true;
          writeChunk(destination, completeSegmentScript1Full);
        } else {
          writeChunk(destination, completeSegmentScript1Partial);
        }
        writeChunk(destination, responseState.segmentPrefix);
        var formattedID = stringToChunk(contentSegmentID.toString(16));
        writeChunk(destination, formattedID);
        writeChunk(destination, completeSegmentScript2);
        writeChunk(destination, responseState.placeholderPrefix);
        writeChunk(destination, formattedID);
        return writeChunkAndReturn(destination, completeSegmentScript3);
      }
      var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
      var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
      var completeBoundaryScript2 = stringToPrecomputedChunk('","');
      var completeBoundaryScript3 = stringToPrecomputedChunk('")<\/script>');
      function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
        writeChunk(destination, responseState.startInlineScript);
        if (!responseState.sentCompleteBoundaryFunction) {
          responseState.sentCompleteBoundaryFunction = true;
          writeChunk(destination, completeBoundaryScript1Full);
        } else {
          writeChunk(destination, completeBoundaryScript1Partial);
        }
        if (boundaryID === null) {
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        }
        var formattedContentID = stringToChunk(contentSegmentID.toString(16));
        writeChunk(destination, boundaryID);
        writeChunk(destination, completeBoundaryScript2);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, formattedContentID);
        return writeChunkAndReturn(destination, completeBoundaryScript3);
      }
      var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
      var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
      var clientRenderScript1A = stringToPrecomputedChunk('"');
      var clientRenderScript2 = stringToPrecomputedChunk(")<\/script>");
      var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(",");
      function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID, errorDigest, errorMessage, errorComponentStack) {
        writeChunk(destination, responseState.startInlineScript);
        if (!responseState.sentClientRenderFunction) {
          responseState.sentClientRenderFunction = true;
          writeChunk(destination, clientRenderScript1Full);
        } else {
          writeChunk(destination, clientRenderScript1Partial);
        }
        if (boundaryID === null) {
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        }
        writeChunk(destination, boundaryID);
        writeChunk(destination, clientRenderScript1A);
        if (errorDigest || errorMessage || errorComponentStack) {
          writeChunk(destination, clientRenderErrorScriptArgInterstitial);
          writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || "")));
        }
        if (errorMessage || errorComponentStack) {
          writeChunk(destination, clientRenderErrorScriptArgInterstitial);
          writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || "")));
        }
        if (errorComponentStack) {
          writeChunk(destination, clientRenderErrorScriptArgInterstitial);
          writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack)));
        }
        return writeChunkAndReturn(destination, clientRenderScript2);
      }
      var regexForJSStringsInScripts = /[<\u2028\u2029]/g;
      function escapeJSStringsForInstructionScripts(input) {
        var escaped = JSON.stringify(input);
        return escaped.replace(regexForJSStringsInScripts, function(match) {
          switch (match) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default: {
              throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
            }
          }
        });
      }
      function createResponseState$1(generateStaticMarkup, identifierPrefix) {
        var responseState = createResponseState(identifierPrefix, void 0);
        return {
          // Keep this in sync with ReactDOMServerFormatConfig
          bootstrapChunks: responseState.bootstrapChunks,
          startInlineScript: responseState.startInlineScript,
          placeholderPrefix: responseState.placeholderPrefix,
          segmentPrefix: responseState.segmentPrefix,
          boundaryPrefix: responseState.boundaryPrefix,
          idPrefix: responseState.idPrefix,
          nextSuspenseID: responseState.nextSuspenseID,
          sentCompleteSegmentFunction: responseState.sentCompleteSegmentFunction,
          sentCompleteBoundaryFunction: responseState.sentCompleteBoundaryFunction,
          sentClientRenderFunction: responseState.sentClientRenderFunction,
          // This is an extra field for the legacy renderer
          generateStaticMarkup
        };
      }
      function createRootFormatContext() {
        return {
          insertionMode: HTML_MODE,
          // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
          selectedValue: null
        };
      }
      function pushTextInstance$1(target, text, responseState, textEmbedded) {
        if (responseState.generateStaticMarkup) {
          target.push(stringToChunk(escapeTextForBrowser(text)));
          return false;
        } else {
          return pushTextInstance(target, text, responseState, textEmbedded);
        }
      }
      function pushSegmentFinale$1(target, responseState, lastPushedText, textEmbedded) {
        if (responseState.generateStaticMarkup) {
          return;
        } else {
          return pushSegmentFinale(target, responseState, lastPushedText, textEmbedded);
        }
      }
      function writeStartCompletedSuspenseBoundary$1(destination, responseState) {
        if (responseState.generateStaticMarkup) {
          return true;
        }
        return writeStartCompletedSuspenseBoundary(destination);
      }
      function writeStartClientRenderedSuspenseBoundary$1(destination, responseState, errorDigest, errorMessage, errorComponentStack) {
        if (responseState.generateStaticMarkup) {
          return true;
        }
        return writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMessage, errorComponentStack);
      }
      function writeEndCompletedSuspenseBoundary$1(destination, responseState) {
        if (responseState.generateStaticMarkup) {
          return true;
        }
        return writeEndCompletedSuspenseBoundary(destination);
      }
      function writeEndClientRenderedSuspenseBoundary$1(destination, responseState) {
        if (responseState.generateStaticMarkup) {
          return true;
        }
        return writeEndClientRenderedSuspenseBoundary(destination);
      }
      var assign = Object.assign;
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_SCOPE_TYPE = Symbol.for("react.scope");
      var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
      var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
      var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for("react.default_value");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) {
          return displayName;
        }
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              if (outerName !== null) {
                return outerName;
              }
              return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return getComponentNameFromType(init(payload));
              } catch (x) {
                return null;
              }
            }
          }
        }
        return null;
      }
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;
          if (disabledDepth === 0) {
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          if (disabledDepth < 0) {
            error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0) {
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          }
          return "\n" + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
          return "";
        }
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current;
          ReactCurrentDispatcher.current = null;
          disableLogs();
        }
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string") {
            var sampleLines = sample.stack.split("\n");
            var controlLines = control.stack.split("\n");
            var s2 = sampleLines.length - 1;
            var c = controlLines.length - 1;
            while (s2 >= 1 && c >= 0 && sampleLines[s2] !== controlLines[c]) {
              c--;
            }
            for (; s2 >= 1 && c >= 0; s2--, c--) {
              if (sampleLines[s2] !== controlLines[c]) {
                if (s2 !== 1 || c !== 1) {
                  do {
                    s2--;
                    c--;
                    if (c < 0 || sampleLines[s2] !== controlLines[c]) {
                      var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                      if (fn.displayName && _frame.includes("<anonymous>")) {
                        _frame = _frame.replace("<anonymous>", fn.displayName);
                      }
                      {
                        if (typeof fn === "function") {
                          componentFrameCache.set(fn, _frame);
                        }
                      }
                      return _frame;
                    }
                  } while (s2 >= 1 && c >= 0);
                }
                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
          if (typeof fn === "function") {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }
      function describeClassComponentFrame(ctor, source, ownerFn) {
        {
          return describeNativeComponentFrame(ctor, true);
        }
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return "";
        }
        if (typeof type === "function") {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }
        if (typeof type === "string") {
          return describeBuiltInComponentFrame(type);
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {
              }
            }
          }
        }
        return "";
      }
      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
              }
              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }
      var warnedAboutMissingGetChildContext;
      {
        warnedAboutMissingGetChildContext = {};
      }
      var emptyContextObject = {};
      {
        Object.freeze(emptyContextObject);
      }
      function getMaskedContext(type, unmaskedContext) {
        {
          var contextTypes = type.contextTypes;
          if (!contextTypes) {
            return emptyContextObject;
          }
          var context = {};
          for (var key in contextTypes) {
            context[key] = unmaskedContext[key];
          }
          {
            var name = getComponentNameFromType(type) || "Unknown";
            checkPropTypes(contextTypes, context, "context", name);
          }
          return context;
        }
      }
      function processChildContext(instance, type, parentContext, childContextTypes) {
        {
          if (typeof instance.getChildContext !== "function") {
            {
              var componentName = getComponentNameFromType(type) || "Unknown";
              if (!warnedAboutMissingGetChildContext[componentName]) {
                warnedAboutMissingGetChildContext[componentName] = true;
                error("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName);
              }
            }
            return parentContext;
          }
          var childContext = instance.getChildContext();
          for (var contextKey in childContext) {
            if (!(contextKey in childContextTypes)) {
              throw new Error((getComponentNameFromType(type) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
            }
          }
          {
            var name = getComponentNameFromType(type) || "Unknown";
            checkPropTypes(childContextTypes, childContext, "child context", name);
          }
          return assign({}, parentContext, childContext);
        }
      }
      var rendererSigil;
      {
        rendererSigil = {};
      }
      var rootContextSnapshot = null;
      var currentActiveSnapshot = null;
      function popNode(prev) {
        {
          prev.context._currentValue2 = prev.parentValue;
        }
      }
      function pushNode(next) {
        {
          next.context._currentValue2 = next.value;
        }
      }
      function popToNearestCommonAncestor(prev, next) {
        if (prev === next) ;
        else {
          popNode(prev);
          var parentPrev = prev.parent;
          var parentNext = next.parent;
          if (parentPrev === null) {
            if (parentNext !== null) {
              throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
            }
          } else {
            if (parentNext === null) {
              throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
            }
            popToNearestCommonAncestor(parentPrev, parentNext);
          }
          pushNode(next);
        }
      }
      function popAllPrevious(prev) {
        popNode(prev);
        var parentPrev = prev.parent;
        if (parentPrev !== null) {
          popAllPrevious(parentPrev);
        }
      }
      function pushAllNext(next) {
        var parentNext = next.parent;
        if (parentNext !== null) {
          pushAllNext(parentNext);
        }
        pushNode(next);
      }
      function popPreviousToCommonLevel(prev, next) {
        popNode(prev);
        var parentPrev = prev.parent;
        if (parentPrev === null) {
          throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        }
        if (parentPrev.depth === next.depth) {
          popToNearestCommonAncestor(parentPrev, next);
        } else {
          popPreviousToCommonLevel(parentPrev, next);
        }
      }
      function popNextToCommonLevel(prev, next) {
        var parentNext = next.parent;
        if (parentNext === null) {
          throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        }
        if (prev.depth === parentNext.depth) {
          popToNearestCommonAncestor(prev, parentNext);
        } else {
          popNextToCommonLevel(prev, parentNext);
        }
        pushNode(next);
      }
      function switchContext(newSnapshot) {
        var prev = currentActiveSnapshot;
        var next = newSnapshot;
        if (prev !== next) {
          if (prev === null) {
            pushAllNext(next);
          } else if (next === null) {
            popAllPrevious(prev);
          } else if (prev.depth === next.depth) {
            popToNearestCommonAncestor(prev, next);
          } else if (prev.depth > next.depth) {
            popPreviousToCommonLevel(prev, next);
          } else {
            popNextToCommonLevel(prev, next);
          }
          currentActiveSnapshot = next;
        }
      }
      function pushProvider(context, nextValue) {
        var prevValue;
        {
          prevValue = context._currentValue2;
          context._currentValue2 = nextValue;
          {
            if (context._currentRenderer2 !== void 0 && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
              error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
            }
            context._currentRenderer2 = rendererSigil;
          }
        }
        var prevNode = currentActiveSnapshot;
        var newNode = {
          parent: prevNode,
          depth: prevNode === null ? 0 : prevNode.depth + 1,
          context,
          parentValue: prevValue,
          value: nextValue
        };
        currentActiveSnapshot = newNode;
        return newNode;
      }
      function popProvider(context) {
        var prevSnapshot = currentActiveSnapshot;
        if (prevSnapshot === null) {
          throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
        }
        {
          if (prevSnapshot.context !== context) {
            error("The parent context is not the expected context. This is probably a bug in React.");
          }
        }
        {
          var _value = prevSnapshot.parentValue;
          if (_value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
            prevSnapshot.context._currentValue2 = prevSnapshot.context._defaultValue;
          } else {
            prevSnapshot.context._currentValue2 = _value;
          }
          {
            if (context._currentRenderer2 !== void 0 && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
              error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
            }
            context._currentRenderer2 = rendererSigil;
          }
        }
        return currentActiveSnapshot = prevSnapshot.parent;
      }
      function getActiveContext() {
        return currentActiveSnapshot;
      }
      function readContext(context) {
        var value = context._currentValue2;
        return value;
      }
      function get2(key) {
        return key._reactInternals;
      }
      function set2(key, value) {
        key._reactInternals = value;
      }
      var didWarnAboutNoopUpdateForComponent = {};
      var didWarnAboutDeprecatedWillMount = {};
      var didWarnAboutUninitializedState;
      var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
      var didWarnAboutLegacyLifecyclesAndDerivedState;
      var didWarnAboutUndefinedDerivedState;
      var warnOnUndefinedDerivedState;
      var warnOnInvalidCallback;
      var didWarnAboutDirectlyAssigningPropsToState;
      var didWarnAboutContextTypeAndContextTypes;
      var didWarnAboutInvalidateContextType;
      {
        didWarnAboutUninitializedState = /* @__PURE__ */ new Set();
        didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set();
        didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set();
        didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set();
        didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set();
        didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set();
        didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
        var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
        warnOnInvalidCallback = function(callback, callerName) {
          if (callback === null || typeof callback === "function") {
            return;
          }
          var key = callerName + "_" + callback;
          if (!didWarnOnInvalidCallback.has(key)) {
            didWarnOnInvalidCallback.add(key);
            error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
          }
        };
        warnOnUndefinedDerivedState = function(type, partialState) {
          if (partialState === void 0) {
            var componentName = getComponentNameFromType(type) || "Component";
            if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
              didWarnAboutUndefinedDerivedState.add(componentName);
              error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
            }
          }
        };
      }
      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor;
          var componentName = _constructor && getComponentNameFromType(_constructor) || "ReactClass";
          var warningKey = componentName + "." + callerName;
          if (didWarnAboutNoopUpdateForComponent[warningKey]) {
            return;
          }
          error("%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, callerName, componentName);
          didWarnAboutNoopUpdateForComponent[warningKey] = true;
        }
      }
      var classComponentUpdater = {
        isMounted: function(inst) {
          return false;
        },
        enqueueSetState: function(inst, payload, callback) {
          var internals = get2(inst);
          if (internals.queue === null) {
            warnNoop(inst, "setState");
          } else {
            internals.queue.push(payload);
            {
              if (callback !== void 0 && callback !== null) {
                warnOnInvalidCallback(callback, "setState");
              }
            }
          }
        },
        enqueueReplaceState: function(inst, payload, callback) {
          var internals = get2(inst);
          internals.replace = true;
          internals.queue = [payload];
          {
            if (callback !== void 0 && callback !== null) {
              warnOnInvalidCallback(callback, "setState");
            }
          }
        },
        enqueueForceUpdate: function(inst, callback) {
          var internals = get2(inst);
          if (internals.queue === null) {
            warnNoop(inst, "forceUpdate");
          } else {
            {
              if (callback !== void 0 && callback !== null) {
                warnOnInvalidCallback(callback, "setState");
              }
            }
          }
        }
      };
      function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
        var partialState = getDerivedStateFromProps(nextProps, prevState);
        {
          warnOnUndefinedDerivedState(ctor, partialState);
        }
        var newState = partialState === null || partialState === void 0 ? prevState : assign({}, prevState, partialState);
        return newState;
      }
      function constructClassInstance(ctor, props, maskedLegacyContext) {
        var context = emptyContextObject;
        var contextType = ctor.contextType;
        {
          if ("contextType" in ctor) {
            var isValid2 = (
              // Allow null for conditional declaration
              contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0
            );
            if (!isValid2 && !didWarnAboutInvalidateContextType.has(ctor)) {
              didWarnAboutInvalidateContextType.add(ctor);
              var addendum = "";
              if (contextType === void 0) {
                addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
              } else if (typeof contextType !== "object") {
                addendum = " However, it is set to a " + typeof contextType + ".";
              } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                addendum = " Did you accidentally pass the Context.Provider instead?";
              } else if (contextType._context !== void 0) {
                addendum = " Did you accidentally pass the Context.Consumer instead?";
              } else {
                addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
              }
              error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(ctor) || "Component", addendum);
            }
          }
        }
        if (typeof contextType === "object" && contextType !== null) {
          context = readContext(contextType);
        } else {
          context = maskedLegacyContext;
        }
        var instance = new ctor(props, context);
        {
          if (typeof ctor.getDerivedStateFromProps === "function" && (instance.state === null || instance.state === void 0)) {
            var componentName = getComponentNameFromType(ctor) || "Component";
            if (!didWarnAboutUninitializedState.has(componentName)) {
              didWarnAboutUninitializedState.add(componentName);
              error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
            }
          }
          if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
            var foundWillMountName = null;
            var foundWillReceivePropsName = null;
            var foundWillUpdateName = null;
            if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
              foundWillMountName = "componentWillMount";
            } else if (typeof instance.UNSAFE_componentWillMount === "function") {
              foundWillMountName = "UNSAFE_componentWillMount";
            }
            if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
              foundWillReceivePropsName = "componentWillReceiveProps";
            } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
              foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
            }
            if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
              foundWillUpdateName = "componentWillUpdate";
            } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
              foundWillUpdateName = "UNSAFE_componentWillUpdate";
            }
            if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
              var _componentName = getComponentNameFromType(ctor) || "Component";
              var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
              }
            }
          }
        }
        return instance;
      }
      function checkClassInstance(instance, ctor, newProps) {
        {
          var name = getComponentNameFromType(ctor) || "Component";
          var renderPresent = instance.render;
          if (!renderPresent) {
            if (ctor.prototype && typeof ctor.prototype.render === "function") {
              error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
            } else {
              error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
            }
          }
          if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
            error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
          }
          if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
            error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
          }
          if (instance.propTypes) {
            error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name);
          }
          if (instance.contextType) {
            error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
          }
          {
            if (instance.contextTypes) {
              error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name);
            }
            if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
              didWarnAboutContextTypeAndContextTypes.add(ctor);
              error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
            }
          }
          if (typeof instance.componentShouldUpdate === "function") {
            error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
          }
          if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
            error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(ctor) || "A pure component");
          }
          if (typeof instance.componentDidUnmount === "function") {
            error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
          }
          if (typeof instance.componentDidReceiveProps === "function") {
            error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
          }
          if (typeof instance.componentWillRecieveProps === "function") {
            error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
          }
          if (typeof instance.UNSAFE_componentWillRecieveProps === "function") {
            error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
          }
          var hasMutatedProps = instance.props !== newProps;
          if (instance.props !== void 0 && hasMutatedProps) {
            error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name);
          }
          if (instance.defaultProps) {
            error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
          }
          if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
            didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
            error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(ctor));
          }
          if (typeof instance.getDerivedStateFromProps === "function") {
            error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
          }
          if (typeof instance.getDerivedStateFromError === "function") {
            error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
          }
          if (typeof ctor.getSnapshotBeforeUpdate === "function") {
            error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
          }
          var _state = instance.state;
          if (_state && (typeof _state !== "object" || isArray(_state))) {
            error("%s.state: must be set to an object or null", name);
          }
          if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") {
            error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
          }
        }
      }
      function callComponentWillMount(type, instance) {
        var oldState = instance.state;
        if (typeof instance.componentWillMount === "function") {
          {
            if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
              var componentName = getComponentNameFromType(type) || "Unknown";
              if (!didWarnAboutDeprecatedWillMount[componentName]) {
                warn(
                  // keep this warning in sync with ReactStrictModeWarning.js
                  "componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s",
                  componentName
                );
                didWarnAboutDeprecatedWillMount[componentName] = true;
              }
            }
          }
          instance.componentWillMount();
        }
        if (typeof instance.UNSAFE_componentWillMount === "function") {
          instance.UNSAFE_componentWillMount();
        }
        if (oldState !== instance.state) {
          {
            error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component");
          }
          classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
        }
      }
      function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
        if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
          var oldQueue = internalInstance.queue;
          var oldReplace = internalInstance.replace;
          internalInstance.queue = null;
          internalInstance.replace = false;
          if (oldReplace && oldQueue.length === 1) {
            inst.state = oldQueue[0];
          } else {
            var nextState = oldReplace ? oldQueue[0] : inst.state;
            var dontMutate = true;
            for (var i2 = oldReplace ? 1 : 0; i2 < oldQueue.length; i2++) {
              var partial = oldQueue[i2];
              var partialState = typeof partial === "function" ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;
              if (partialState != null) {
                if (dontMutate) {
                  dontMutate = false;
                  nextState = assign({}, nextState, partialState);
                } else {
                  assign(nextState, partialState);
                }
              }
            }
            inst.state = nextState;
          }
        } else {
          internalInstance.queue = null;
        }
      }
      function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
        {
          checkClassInstance(instance, ctor, newProps);
        }
        var initialState = instance.state !== void 0 ? instance.state : null;
        instance.updater = classComponentUpdater;
        instance.props = newProps;
        instance.state = initialState;
        var internalInstance = {
          queue: [],
          replace: false
        };
        set2(instance, internalInstance);
        var contextType = ctor.contextType;
        if (typeof contextType === "object" && contextType !== null) {
          instance.context = readContext(contextType);
        } else {
          instance.context = maskedLegacyContext;
        }
        {
          if (instance.state === newProps) {
            var componentName = getComponentNameFromType(ctor) || "Component";
            if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
              didWarnAboutDirectlyAssigningPropsToState.add(componentName);
              error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
            }
          }
        }
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
        if (typeof getDerivedStateFromProps === "function") {
          instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
        }
        if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
          callComponentWillMount(ctor, instance);
          processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
        }
      }
      var emptyTreeContext = {
        id: 1,
        overflow: ""
      };
      function getTreeId(context) {
        var overflow = context.overflow;
        var idWithLeadingBit = context.id;
        var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
        return id.toString(32) + overflow;
      }
      function pushTreeContext(baseContext, totalChildren, index) {
        var baseIdWithLeadingBit = baseContext.id;
        var baseOverflow = baseContext.overflow;
        var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
        var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
        var slot = index + 1;
        var length = getBitLength(totalChildren) + baseLength;
        if (length > 30) {
          var numberOfOverflowBits = baseLength - baseLength % 5;
          var newOverflowBits = (1 << numberOfOverflowBits) - 1;
          var newOverflow = (baseId & newOverflowBits).toString(32);
          var restOfBaseId = baseId >> numberOfOverflowBits;
          var restOfBaseLength = baseLength - numberOfOverflowBits;
          var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
          var restOfNewBits = slot << restOfBaseLength;
          var id = restOfNewBits | restOfBaseId;
          var overflow = newOverflow + baseOverflow;
          return {
            id: 1 << restOfLength | id,
            overflow
          };
        } else {
          var newBits = slot << baseLength;
          var _id = newBits | baseId;
          var _overflow = baseOverflow;
          return {
            id: 1 << length | _id,
            overflow: _overflow
          };
        }
      }
      function getBitLength(number) {
        return 32 - clz32(number);
      }
      function getLeadingBit(id) {
        return 1 << getBitLength(id) - 1;
      }
      var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
      var log = Math.log;
      var LN2 = Math.LN2;
      function clz32Fallback(x) {
        var asUint = x >>> 0;
        if (asUint === 0) {
          return 32;
        }
        return 31 - (log(asUint) / LN2 | 0) | 0;
      }
      function is(x, y) {
        return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
      }
      var objectIs = typeof Object.is === "function" ? Object.is : is;
      var currentlyRenderingComponent = null;
      var currentlyRenderingTask = null;
      var firstWorkInProgressHook = null;
      var workInProgressHook = null;
      var isReRender = false;
      var didScheduleRenderPhaseUpdate = false;
      var localIdCounter = 0;
      var renderPhaseUpdates = null;
      var numberOfReRenders = 0;
      var RE_RENDER_LIMIT = 25;
      var isInHookUserCodeInDev = false;
      var currentHookNameInDev;
      function resolveCurrentlyRenderingComponent() {
        if (currentlyRenderingComponent === null) {
          throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        }
        {
          if (isInHookUserCodeInDev) {
            error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
          }
        }
        return currentlyRenderingComponent;
      }
      function areHookInputsEqual(nextDeps, prevDeps) {
        if (prevDeps === null) {
          {
            error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
          }
          return false;
        }
        {
          if (nextDeps.length !== prevDeps.length) {
            error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
          }
        }
        for (var i2 = 0; i2 < prevDeps.length && i2 < nextDeps.length; i2++) {
          if (objectIs(nextDeps[i2], prevDeps[i2])) {
            continue;
          }
          return false;
        }
        return true;
      }
      function createHook() {
        if (numberOfReRenders > 0) {
          throw new Error("Rendered more hooks than during the previous render");
        }
        return {
          memoizedState: null,
          queue: null,
          next: null
        };
      }
      function createWorkInProgressHook() {
        if (workInProgressHook === null) {
          if (firstWorkInProgressHook === null) {
            isReRender = false;
            firstWorkInProgressHook = workInProgressHook = createHook();
          } else {
            isReRender = true;
            workInProgressHook = firstWorkInProgressHook;
          }
        } else {
          if (workInProgressHook.next === null) {
            isReRender = false;
            workInProgressHook = workInProgressHook.next = createHook();
          } else {
            isReRender = true;
            workInProgressHook = workInProgressHook.next;
          }
        }
        return workInProgressHook;
      }
      function prepareToUseHooks(task, componentIdentity) {
        currentlyRenderingComponent = componentIdentity;
        currentlyRenderingTask = task;
        {
          isInHookUserCodeInDev = false;
        }
        localIdCounter = 0;
      }
      function finishHooks(Component, props, children, refOrContext) {
        while (didScheduleRenderPhaseUpdate) {
          didScheduleRenderPhaseUpdate = false;
          localIdCounter = 0;
          numberOfReRenders += 1;
          workInProgressHook = null;
          children = Component(props, refOrContext);
        }
        resetHooksState();
        return children;
      }
      function checkDidRenderIdHook() {
        var didRenderIdHook = localIdCounter !== 0;
        return didRenderIdHook;
      }
      function resetHooksState() {
        {
          isInHookUserCodeInDev = false;
        }
        currentlyRenderingComponent = null;
        currentlyRenderingTask = null;
        didScheduleRenderPhaseUpdate = false;
        firstWorkInProgressHook = null;
        numberOfReRenders = 0;
        renderPhaseUpdates = null;
        workInProgressHook = null;
      }
      function readContext$1(context) {
        {
          if (isInHookUserCodeInDev) {
            error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          }
        }
        return readContext(context);
      }
      function useContext(context) {
        {
          currentHookNameInDev = "useContext";
        }
        resolveCurrentlyRenderingComponent();
        return readContext(context);
      }
      function basicStateReducer(state, action2) {
        return typeof action2 === "function" ? action2(state) : action2;
      }
      function useState(initialState) {
        {
          currentHookNameInDev = "useState";
        }
        return useReducer(
          basicStateReducer,
          // useReducer has a special case to support lazy useState initializers
          initialState
        );
      }
      function useReducer(reducer, initialArg, init) {
        {
          if (reducer !== basicStateReducer) {
            currentHookNameInDev = "useReducer";
          }
        }
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        if (isReRender) {
          var queue = workInProgressHook.queue;
          var dispatch = queue.dispatch;
          if (renderPhaseUpdates !== null) {
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
            if (firstRenderPhaseUpdate !== void 0) {
              renderPhaseUpdates.delete(queue);
              var newState = workInProgressHook.memoizedState;
              var update = firstRenderPhaseUpdate;
              do {
                var action2 = update.action;
                {
                  isInHookUserCodeInDev = true;
                }
                newState = reducer(newState, action2);
                {
                  isInHookUserCodeInDev = false;
                }
                update = update.next;
              } while (update !== null);
              workInProgressHook.memoizedState = newState;
              return [newState, dispatch];
            }
          }
          return [workInProgressHook.memoizedState, dispatch];
        } else {
          {
            isInHookUserCodeInDev = true;
          }
          var initialState;
          if (reducer === basicStateReducer) {
            initialState = typeof initialArg === "function" ? initialArg() : initialArg;
          } else {
            initialState = init !== void 0 ? init(initialArg) : initialArg;
          }
          {
            isInHookUserCodeInDev = false;
          }
          workInProgressHook.memoizedState = initialState;
          var _queue = workInProgressHook.queue = {
            last: null,
            dispatch: null
          };
          var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
          return [workInProgressHook.memoizedState, _dispatch];
        }
      }
      function useMemo(nextCreate, deps) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        var nextDeps = deps === void 0 ? null : deps;
        if (workInProgressHook !== null) {
          var prevState = workInProgressHook.memoizedState;
          if (prevState !== null) {
            if (nextDeps !== null) {
              var prevDeps = prevState[1];
              if (areHookInputsEqual(nextDeps, prevDeps)) {
                return prevState[0];
              }
            }
          }
        }
        {
          isInHookUserCodeInDev = true;
        }
        var nextValue = nextCreate();
        {
          isInHookUserCodeInDev = false;
        }
        workInProgressHook.memoizedState = [nextValue, nextDeps];
        return nextValue;
      }
      function useRef(initialValue) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        var previousRef = workInProgressHook.memoizedState;
        if (previousRef === null) {
          var ref = {
            current: initialValue
          };
          {
            Object.seal(ref);
          }
          workInProgressHook.memoizedState = ref;
          return ref;
        } else {
          return previousRef;
        }
      }
      function useLayoutEffect(create, inputs) {
        {
          currentHookNameInDev = "useLayoutEffect";
          error("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
        }
      }
      function dispatchAction(componentIdentity, queue, action2) {
        if (numberOfReRenders >= RE_RENDER_LIMIT) {
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        }
        if (componentIdentity === currentlyRenderingComponent) {
          didScheduleRenderPhaseUpdate = true;
          var update = {
            action: action2,
            next: null
          };
          if (renderPhaseUpdates === null) {
            renderPhaseUpdates = /* @__PURE__ */ new Map();
          }
          var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
          if (firstRenderPhaseUpdate === void 0) {
            renderPhaseUpdates.set(queue, update);
          } else {
            var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
            while (lastRenderPhaseUpdate.next !== null) {
              lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
            }
            lastRenderPhaseUpdate.next = update;
          }
        }
      }
      function useCallback(callback, deps) {
        return useMemo(function() {
          return callback;
        }, deps);
      }
      function useMutableSource(source, getSnapshot, subscribe) {
        resolveCurrentlyRenderingComponent();
        return getSnapshot(source._source);
      }
      function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        if (getServerSnapshot === void 0) {
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        }
        return getServerSnapshot();
      }
      function useDeferredValue(value) {
        resolveCurrentlyRenderingComponent();
        return value;
      }
      function unsupportedStartTransition() {
        throw new Error("startTransition cannot be called during server rendering.");
      }
      function useTransition() {
        resolveCurrentlyRenderingComponent();
        return [false, unsupportedStartTransition];
      }
      function useId() {
        var task = currentlyRenderingTask;
        var treeId = getTreeId(task.treeContext);
        var responseState = currentResponseState;
        if (responseState === null) {
          throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
        }
        var localId = localIdCounter++;
        return makeId(responseState, treeId, localId);
      }
      function noop() {
      }
      var Dispatcher = {
        readContext: readContext$1,
        useContext,
        useMemo,
        useReducer,
        useRef,
        useState,
        useInsertionEffect: noop,
        useLayoutEffect,
        useCallback,
        // useImperativeHandle is not run in the server environment
        useImperativeHandle: noop,
        // Effects are not run in the server environment.
        useEffect: noop,
        // Debugging effect
        useDebugValue: noop,
        useDeferredValue,
        useTransition,
        useId,
        // Subscriptions are not setup in a server environment.
        useMutableSource,
        useSyncExternalStore
      };
      var currentResponseState = null;
      function setCurrentResponseState(responseState) {
        currentResponseState = responseState;
      }
      function getStackByComponentStackNode(componentStack) {
        try {
          var info = "";
          var node = componentStack;
          do {
            switch (node.tag) {
              case 0:
                info += describeBuiltInComponentFrame(node.type, null, null);
                break;
              case 1:
                info += describeFunctionComponentFrame(node.type, null, null);
                break;
              case 2:
                info += describeClassComponentFrame(node.type, null, null);
                break;
            }
            node = node.parent;
          } while (node);
          return info;
        } catch (x) {
          return "\nError generating stack: " + x.message + "\n" + x.stack;
        }
      }
      var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      var PENDING = 0;
      var COMPLETED = 1;
      var FLUSHED = 2;
      var ABORTED = 3;
      var ERRORED = 4;
      var OPEN = 0;
      var CLOSING = 1;
      var CLOSED = 2;
      var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
      function defaultErrorHandler(error2) {
        console["error"](error2);
        return null;
      }
      function noop$1() {
      }
      function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError2, onAllReady, onShellReady, onShellError, onFatalError) {
        var pingedTasks = [];
        var abortSet = /* @__PURE__ */ new Set();
        var request = {
          destination: null,
          responseState,
          progressiveChunkSize: progressiveChunkSize === void 0 ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
          status: OPEN,
          fatalError: null,
          nextSegmentId: 0,
          allPendingTasks: 0,
          pendingRootTasks: 0,
          completedRootSegment: null,
          abortableTasks: abortSet,
          pingedTasks,
          clientRenderedBoundaries: [],
          completedBoundaries: [],
          partialBoundaries: [],
          onError: onError2 === void 0 ? defaultErrorHandler : onError2,
          onAllReady: onAllReady === void 0 ? noop$1 : onAllReady,
          onShellReady: onShellReady === void 0 ? noop$1 : onShellReady,
          onShellError: noop$1,
          onFatalError: noop$1
        };
        var rootSegment = createPendingSegment(
          request,
          0,
          null,
          rootFormatContext,
          // Root segments are never embedded in Text on either edge
          false,
          false
        );
        rootSegment.parentFlushed = true;
        var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
        pingedTasks.push(rootTask);
        return request;
      }
      function pingTask(request, task) {
        var pingedTasks = request.pingedTasks;
        pingedTasks.push(task);
        if (pingedTasks.length === 1) {
          scheduleWork(function() {
            return performWork(request);
          });
        }
      }
      function createSuspenseBoundary(request, fallbackAbortableTasks) {
        return {
          id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
          rootSegmentID: -1,
          parentFlushed: false,
          pendingTasks: 0,
          forceClientRender: false,
          completedSegments: [],
          byteSize: 0,
          fallbackAbortableTasks,
          errorDigest: null
        };
      }
      function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
        request.allPendingTasks++;
        if (blockedBoundary === null) {
          request.pendingRootTasks++;
        } else {
          blockedBoundary.pendingTasks++;
        }
        var task = {
          node,
          ping: function() {
            return pingTask(request, task);
          },
          blockedBoundary,
          blockedSegment,
          abortSet,
          legacyContext,
          context,
          treeContext
        };
        {
          task.componentStack = null;
        }
        abortSet.add(task);
        return task;
      }
      function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
        return {
          status: PENDING,
          id: -1,
          // lazily assigned later
          index,
          parentFlushed: false,
          chunks: [],
          children: [],
          formatContext,
          boundary,
          lastPushedText,
          textEmbedded
        };
      }
      var currentTaskInDEV = null;
      function getCurrentStackInDEV() {
        {
          if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
            return "";
          }
          return getStackByComponentStackNode(currentTaskInDEV.componentStack);
        }
      }
      function pushBuiltInComponentStackInDEV(task, type) {
        {
          task.componentStack = {
            tag: 0,
            parent: task.componentStack,
            type
          };
        }
      }
      function pushFunctionComponentStackInDEV(task, type) {
        {
          task.componentStack = {
            tag: 1,
            parent: task.componentStack,
            type
          };
        }
      }
      function pushClassComponentStackInDEV(task, type) {
        {
          task.componentStack = {
            tag: 2,
            parent: task.componentStack,
            type
          };
        }
      }
      function popComponentStackInDEV(task) {
        {
          if (task.componentStack === null) {
            error("Unexpectedly popped too many stack frames. This is a bug in React.");
          } else {
            task.componentStack = task.componentStack.parent;
          }
        }
      }
      var lastBoundaryErrorComponentStackDev = null;
      function captureBoundaryErrorDetailsDev(boundary, error2) {
        {
          var errorMessage;
          if (typeof error2 === "string") {
            errorMessage = error2;
          } else if (error2 && typeof error2.message === "string") {
            errorMessage = error2.message;
          } else {
            errorMessage = String(error2);
          }
          var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
          lastBoundaryErrorComponentStackDev = null;
          boundary.errorMessage = errorMessage;
          boundary.errorComponentStack = errorComponentStack;
        }
      }
      function logRecoverableError(request, error2) {
        var errorDigest = request.onError(error2);
        if (errorDigest != null && typeof errorDigest !== "string") {
          throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof errorDigest + '" instead');
        }
        return errorDigest;
      }
      function fatalError(request, error2) {
        var onShellError = request.onShellError;
        onShellError(error2);
        var onFatalError = request.onFatalError;
        onFatalError(error2);
        if (request.destination !== null) {
          request.status = CLOSED;
          closeWithError(request.destination, error2);
        } else {
          request.status = CLOSING;
          request.fatalError = error2;
        }
      }
      function renderSuspenseBoundary(request, task, props) {
        pushBuiltInComponentStackInDEV(task, "Suspense");
        var parentBoundary = task.blockedBoundary;
        var parentSegment = task.blockedSegment;
        var fallback = props.fallback;
        var content = props.children;
        var fallbackAbortSet = /* @__PURE__ */ new Set();
        var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
        var insertionIndex = parentSegment.chunks.length;
        var boundarySegment = createPendingSegment(
          request,
          insertionIndex,
          newBoundary,
          parentSegment.formatContext,
          // boundaries never require text embedding at their edges because comment nodes bound them
          false,
          false
        );
        parentSegment.children.push(boundarySegment);
        parentSegment.lastPushedText = false;
        var contentRootSegment = createPendingSegment(
          request,
          0,
          null,
          parentSegment.formatContext,
          // boundaries never require text embedding at their edges because comment nodes bound them
          false,
          false
        );
        contentRootSegment.parentFlushed = true;
        task.blockedBoundary = newBoundary;
        task.blockedSegment = contentRootSegment;
        try {
          renderNode(request, task, content);
          pushSegmentFinale$1(contentRootSegment.chunks, request.responseState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded);
          contentRootSegment.status = COMPLETED;
          queueCompletedSegment(newBoundary, contentRootSegment);
          if (newBoundary.pendingTasks === 0) {
            popComponentStackInDEV(task);
            return;
          }
        } catch (error2) {
          contentRootSegment.status = ERRORED;
          newBoundary.forceClientRender = true;
          newBoundary.errorDigest = logRecoverableError(request, error2);
          {
            captureBoundaryErrorDetailsDev(newBoundary, error2);
          }
        } finally {
          task.blockedBoundary = parentBoundary;
          task.blockedSegment = parentSegment;
        }
        var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);
        {
          suspendedFallbackTask.componentStack = task.componentStack;
        }
        request.pingedTasks.push(suspendedFallbackTask);
        popComponentStackInDEV(task);
      }
      function renderHostElement(request, task, type, props) {
        pushBuiltInComponentStackInDEV(task, type);
        var segment = task.blockedSegment;
        var children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
        segment.lastPushedText = false;
        var prevContext = segment.formatContext;
        segment.formatContext = getChildFormatContext(prevContext, type, props);
        renderNode(request, task, children);
        segment.formatContext = prevContext;
        pushEndInstance(segment.chunks, type);
        segment.lastPushedText = false;
        popComponentStackInDEV(task);
      }
      function shouldConstruct$1(Component) {
        return Component.prototype && Component.prototype.isReactComponent;
      }
      function renderWithHooks(request, task, Component, props, secondArg) {
        var componentIdentity = {};
        prepareToUseHooks(task, componentIdentity);
        var result = Component(props, secondArg);
        return finishHooks(Component, props, result, secondArg);
      }
      function finishClassComponent(request, task, instance, Component, props) {
        var nextChildren = instance.render();
        {
          if (instance.props !== props) {
            if (!didWarnAboutReassigningProps) {
              error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(Component) || "a component");
            }
            didWarnAboutReassigningProps = true;
          }
        }
        {
          var childContextTypes = Component.childContextTypes;
          if (childContextTypes !== null && childContextTypes !== void 0) {
            var previousContext = task.legacyContext;
            var mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
            task.legacyContext = mergedContext;
            renderNodeDestructive(request, task, nextChildren);
            task.legacyContext = previousContext;
            return;
          }
        }
        renderNodeDestructive(request, task, nextChildren);
      }
      function renderClassComponent(request, task, Component, props) {
        pushClassComponentStackInDEV(task, Component);
        var maskedContext = getMaskedContext(Component, task.legacyContext);
        var instance = constructClassInstance(Component, props, maskedContext);
        mountClassInstance(instance, Component, props, maskedContext);
        finishClassComponent(request, task, instance, Component, props);
        popComponentStackInDEV(task);
      }
      var didWarnAboutBadClass = {};
      var didWarnAboutModulePatternComponent = {};
      var didWarnAboutContextTypeOnFunctionComponent = {};
      var didWarnAboutGetDerivedStateOnFunctionComponent = {};
      var didWarnAboutReassigningProps = false;
      var didWarnAboutDefaultPropsOnFunctionComponent = {};
      var didWarnAboutGenerators = false;
      var didWarnAboutMaps = false;
      var hasWarnedAboutUsingContextAsConsumer = false;
      function renderIndeterminateComponent(request, task, Component, props) {
        var legacyContext;
        {
          legacyContext = getMaskedContext(Component, task.legacyContext);
        }
        pushFunctionComponentStackInDEV(task, Component);
        {
          if (Component.prototype && typeof Component.prototype.render === "function") {
            var componentName = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutBadClass[componentName]) {
              error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
              didWarnAboutBadClass[componentName] = true;
            }
          }
        }
        var value = renderWithHooks(request, task, Component, props, legacyContext);
        var hasId = checkDidRenderIdHook();
        {
          if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
            var _componentName = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutModulePatternComponent[_componentName]) {
              error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
              didWarnAboutModulePatternComponent[_componentName] = true;
            }
          }
        }
        if (
          // Run these checks in production only if the flag is off.
          // Eventually we'll delete this branch altogether.
          typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0
        ) {
          {
            var _componentName2 = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutModulePatternComponent[_componentName2]) {
              error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
              didWarnAboutModulePatternComponent[_componentName2] = true;
            }
          }
          mountClassInstance(value, Component, props, legacyContext);
          finishClassComponent(request, task, value, Component, props);
        } else {
          {
            validateFunctionComponentInDev(Component);
          }
          if (hasId) {
            var prevTreeContext = task.treeContext;
            var totalChildren = 1;
            var index = 0;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
            try {
              renderNodeDestructive(request, task, value);
            } finally {
              task.treeContext = prevTreeContext;
            }
          } else {
            renderNodeDestructive(request, task, value);
          }
        }
        popComponentStackInDEV(task);
      }
      function validateFunctionComponentInDev(Component) {
        {
          if (Component) {
            if (Component.childContextTypes) {
              error("%s(...): childContextTypes cannot be defined on a function component.", Component.displayName || Component.name || "Component");
            }
          }
          if (Component.defaultProps !== void 0) {
            var componentName = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutDefaultPropsOnFunctionComponent[componentName]) {
              error("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", componentName);
              didWarnAboutDefaultPropsOnFunctionComponent[componentName] = true;
            }
          }
          if (typeof Component.getDerivedStateFromProps === "function") {
            var _componentName3 = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
              error("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
              didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
            }
          }
          if (typeof Component.contextType === "object" && Component.contextType !== null) {
            var _componentName4 = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
              error("%s: Function components do not support contextType.", _componentName4);
              didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
            }
          }
        }
      }
      function resolveDefaultProps(Component, baseProps) {
        if (Component && Component.defaultProps) {
          var props = assign({}, baseProps);
          var defaultProps = Component.defaultProps;
          for (var propName in defaultProps) {
            if (props[propName] === void 0) {
              props[propName] = defaultProps[propName];
            }
          }
          return props;
        }
        return baseProps;
      }
      function renderForwardRef(request, task, type, props, ref) {
        pushFunctionComponentStackInDEV(task, type.render);
        var children = renderWithHooks(request, task, type.render, props, ref);
        var hasId = checkDidRenderIdHook();
        if (hasId) {
          var prevTreeContext = task.treeContext;
          var totalChildren = 1;
          var index = 0;
          task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
          try {
            renderNodeDestructive(request, task, children);
          } finally {
            task.treeContext = prevTreeContext;
          }
        } else {
          renderNodeDestructive(request, task, children);
        }
        popComponentStackInDEV(task);
      }
      function renderMemo(request, task, type, props, ref) {
        var innerType = type.type;
        var resolvedProps = resolveDefaultProps(innerType, props);
        renderElement(request, task, innerType, resolvedProps, ref);
      }
      function renderContextConsumer(request, task, context, props) {
        {
          if (context._context === void 0) {
            if (context !== context.Consumer) {
              if (!hasWarnedAboutUsingContextAsConsumer) {
                hasWarnedAboutUsingContextAsConsumer = true;
                error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
              }
            }
          } else {
            context = context._context;
          }
        }
        var render = props.children;
        {
          if (typeof render !== "function") {
            error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
          }
        }
        var newValue = readContext(context);
        var newChildren = render(newValue);
        renderNodeDestructive(request, task, newChildren);
      }
      function renderContextProvider(request, task, type, props) {
        var context = type._context;
        var value = props.value;
        var children = props.children;
        var prevSnapshot;
        {
          prevSnapshot = task.context;
        }
        task.context = pushProvider(context, value);
        renderNodeDestructive(request, task, children);
        task.context = popProvider(context);
        {
          if (prevSnapshot !== task.context) {
            error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
          }
        }
      }
      function renderLazyComponent(request, task, lazyComponent, props, ref) {
        pushBuiltInComponentStackInDEV(task, "Lazy");
        var payload = lazyComponent._payload;
        var init = lazyComponent._init;
        var Component = init(payload);
        var resolvedProps = resolveDefaultProps(Component, props);
        renderElement(request, task, Component, resolvedProps, ref);
        popComponentStackInDEV(task);
      }
      function renderElement(request, task, type, props, ref) {
        if (typeof type === "function") {
          if (shouldConstruct$1(type)) {
            renderClassComponent(request, task, type, props);
            return;
          } else {
            renderIndeterminateComponent(request, task, type, props);
            return;
          }
        }
        if (typeof type === "string") {
          renderHostElement(request, task, type, props);
          return;
        }
        switch (type) {
          case REACT_LEGACY_HIDDEN_TYPE:
          case REACT_DEBUG_TRACING_MODE_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_FRAGMENT_TYPE: {
            renderNodeDestructive(request, task, props.children);
            return;
          }
          case REACT_SUSPENSE_LIST_TYPE: {
            pushBuiltInComponentStackInDEV(task, "SuspenseList");
            renderNodeDestructive(request, task, props.children);
            popComponentStackInDEV(task);
            return;
          }
          case REACT_SCOPE_TYPE: {
            throw new Error("ReactDOMServer does not yet support scope components.");
          }
          case REACT_SUSPENSE_TYPE: {
            {
              renderSuspenseBoundary(request, task, props);
            }
            return;
          }
        }
        if (typeof type === "object" && type !== null) {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE: {
              renderForwardRef(request, task, type, props, ref);
              return;
            }
            case REACT_MEMO_TYPE: {
              renderMemo(request, task, type, props, ref);
              return;
            }
            case REACT_PROVIDER_TYPE: {
              renderContextProvider(request, task, type, props);
              return;
            }
            case REACT_CONTEXT_TYPE: {
              renderContextConsumer(request, task, type, props);
              return;
            }
            case REACT_LAZY_TYPE: {
              renderLazyComponent(request, task, type, props);
              return;
            }
          }
        }
        var info = "";
        {
          if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
            info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          }
        }
        throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (type == null ? type : typeof type) + "." + info));
      }
      function validateIterable(iterable, iteratorFn) {
        {
          if (typeof Symbol === "function" && // $FlowFixMe Flow doesn't know about toStringTag
          iterable[Symbol.toStringTag] === "Generator") {
            if (!didWarnAboutGenerators) {
              error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
            }
            didWarnAboutGenerators = true;
          }
          if (iterable.entries === iteratorFn) {
            if (!didWarnAboutMaps) {
              error("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
            }
            didWarnAboutMaps = true;
          }
        }
      }
      function renderNodeDestructive(request, task, node) {
        {
          try {
            return renderNodeDestructiveImpl(request, task, node);
          } catch (x) {
            if (typeof x === "object" && x !== null && typeof x.then === "function") ;
            else {
              lastBoundaryErrorComponentStackDev = lastBoundaryErrorComponentStackDev !== null ? lastBoundaryErrorComponentStackDev : getCurrentStackInDEV();
            }
            throw x;
          }
        }
      }
      function renderNodeDestructiveImpl(request, task, node) {
        task.node = node;
        if (typeof node === "object" && node !== null) {
          switch (node.$$typeof) {
            case REACT_ELEMENT_TYPE: {
              var element = node;
              var type = element.type;
              var props = element.props;
              var ref = element.ref;
              renderElement(request, task, type, props, ref);
              return;
            }
            case REACT_PORTAL_TYPE:
              throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
            case REACT_LAZY_TYPE: {
              var lazyNode = node;
              var payload = lazyNode._payload;
              var init = lazyNode._init;
              var resolvedNode;
              {
                try {
                  resolvedNode = init(payload);
                } catch (x) {
                  if (typeof x === "object" && x !== null && typeof x.then === "function") {
                    pushBuiltInComponentStackInDEV(task, "Lazy");
                  }
                  throw x;
                }
              }
              renderNodeDestructive(request, task, resolvedNode);
              return;
            }
          }
          if (isArray(node)) {
            renderChildrenArray(request, task, node);
            return;
          }
          var iteratorFn = getIteratorFn(node);
          if (iteratorFn) {
            {
              validateIterable(node, iteratorFn);
            }
            var iterator = iteratorFn.call(node);
            if (iterator) {
              var step = iterator.next();
              if (!step.done) {
                var children = [];
                do {
                  children.push(step.value);
                  step = iterator.next();
                } while (!step.done);
                renderChildrenArray(request, task, children);
                return;
              }
              return;
            }
          }
          var childString = Object.prototype.toString.call(node);
          throw new Error("Objects are not valid as a React child (found: " + (childString === "[object Object]" ? "object with keys {" + Object.keys(node).join(", ") + "}" : childString) + "). If you meant to render a collection of children, use an array instead.");
        }
        if (typeof node === "string") {
          var segment = task.blockedSegment;
          segment.lastPushedText = pushTextInstance$1(task.blockedSegment.chunks, node, request.responseState, segment.lastPushedText);
          return;
        }
        if (typeof node === "number") {
          var _segment = task.blockedSegment;
          _segment.lastPushedText = pushTextInstance$1(task.blockedSegment.chunks, "" + node, request.responseState, _segment.lastPushedText);
          return;
        }
        {
          if (typeof node === "function") {
            error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
          }
        }
      }
      function renderChildrenArray(request, task, children) {
        var totalChildren = children.length;
        for (var i2 = 0; i2 < totalChildren; i2++) {
          var prevTreeContext = task.treeContext;
          task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i2);
          try {
            renderNode(request, task, children[i2]);
          } finally {
            task.treeContext = prevTreeContext;
          }
        }
      }
      function spawnNewSuspendedTask(request, task, x) {
        var segment = task.blockedSegment;
        var insertionIndex = segment.chunks.length;
        var newSegment = createPendingSegment(
          request,
          insertionIndex,
          null,
          segment.formatContext,
          // Adopt the parent segment's leading text embed
          segment.lastPushedText,
          // Assume we are text embedded at the trailing edge
          true
        );
        segment.children.push(newSegment);
        segment.lastPushedText = false;
        var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);
        {
          if (task.componentStack !== null) {
            newTask.componentStack = task.componentStack.parent;
          }
        }
        var ping = newTask.ping;
        x.then(ping, ping);
      }
      function renderNode(request, task, node) {
        var previousFormatContext = task.blockedSegment.formatContext;
        var previousLegacyContext = task.legacyContext;
        var previousContext = task.context;
        var previousComponentStack = null;
        {
          previousComponentStack = task.componentStack;
        }
        try {
          return renderNodeDestructive(request, task, node);
        } catch (x) {
          resetHooksState();
          if (typeof x === "object" && x !== null && typeof x.then === "function") {
            spawnNewSuspendedTask(request, task, x);
            task.blockedSegment.formatContext = previousFormatContext;
            task.legacyContext = previousLegacyContext;
            task.context = previousContext;
            switchContext(previousContext);
            {
              task.componentStack = previousComponentStack;
            }
            return;
          } else {
            task.blockedSegment.formatContext = previousFormatContext;
            task.legacyContext = previousLegacyContext;
            task.context = previousContext;
            switchContext(previousContext);
            {
              task.componentStack = previousComponentStack;
            }
            throw x;
          }
        }
      }
      function erroredTask(request, boundary, segment, error2) {
        var errorDigest = logRecoverableError(request, error2);
        if (boundary === null) {
          fatalError(request, error2);
        } else {
          boundary.pendingTasks--;
          if (!boundary.forceClientRender) {
            boundary.forceClientRender = true;
            boundary.errorDigest = errorDigest;
            {
              captureBoundaryErrorDetailsDev(boundary, error2);
            }
            if (boundary.parentFlushed) {
              request.clientRenderedBoundaries.push(boundary);
            }
          }
        }
        request.allPendingTasks--;
        if (request.allPendingTasks === 0) {
          var onAllReady = request.onAllReady;
          onAllReady();
        }
      }
      function abortTaskSoft(task) {
        var request = this;
        var boundary = task.blockedBoundary;
        var segment = task.blockedSegment;
        segment.status = ABORTED;
        finishedTask(request, boundary, segment);
      }
      function abortTask(task, request, reason) {
        var boundary = task.blockedBoundary;
        var segment = task.blockedSegment;
        segment.status = ABORTED;
        if (boundary === null) {
          request.allPendingTasks--;
          if (request.status !== CLOSED) {
            request.status = CLOSED;
            if (request.destination !== null) {
              close(request.destination);
            }
          }
        } else {
          boundary.pendingTasks--;
          if (!boundary.forceClientRender) {
            boundary.forceClientRender = true;
            var _error = reason === void 0 ? new Error("The render was aborted by the server without a reason.") : reason;
            boundary.errorDigest = request.onError(_error);
            {
              var errorPrefix = "The server did not finish this Suspense boundary: ";
              if (_error && typeof _error.message === "string") {
                _error = errorPrefix + _error.message;
              } else {
                _error = errorPrefix + String(_error);
              }
              var previousTaskInDev = currentTaskInDEV;
              currentTaskInDEV = task;
              try {
                captureBoundaryErrorDetailsDev(boundary, _error);
              } finally {
                currentTaskInDEV = previousTaskInDev;
              }
            }
            if (boundary.parentFlushed) {
              request.clientRenderedBoundaries.push(boundary);
            }
          }
          boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
            return abortTask(fallbackTask, request, reason);
          });
          boundary.fallbackAbortableTasks.clear();
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
      }
      function queueCompletedSegment(boundary, segment) {
        if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
          var childSegment = segment.children[0];
          childSegment.id = segment.id;
          childSegment.parentFlushed = true;
          if (childSegment.status === COMPLETED) {
            queueCompletedSegment(boundary, childSegment);
          }
        } else {
          var completedSegments = boundary.completedSegments;
          completedSegments.push(segment);
        }
      }
      function finishedTask(request, boundary, segment) {
        if (boundary === null) {
          if (segment.parentFlushed) {
            if (request.completedRootSegment !== null) {
              throw new Error("There can only be one root segment. This is a bug in React.");
            }
            request.completedRootSegment = segment;
          }
          request.pendingRootTasks--;
          if (request.pendingRootTasks === 0) {
            request.onShellError = noop$1;
            var onShellReady = request.onShellReady;
            onShellReady();
          }
        } else {
          boundary.pendingTasks--;
          if (boundary.forceClientRender) ;
          else if (boundary.pendingTasks === 0) {
            if (segment.parentFlushed) {
              if (segment.status === COMPLETED) {
                queueCompletedSegment(boundary, segment);
              }
            }
            if (boundary.parentFlushed) {
              request.completedBoundaries.push(boundary);
            }
            boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
            boundary.fallbackAbortableTasks.clear();
          } else {
            if (segment.parentFlushed) {
              if (segment.status === COMPLETED) {
                queueCompletedSegment(boundary, segment);
                var completedSegments = boundary.completedSegments;
                if (completedSegments.length === 1) {
                  if (boundary.parentFlushed) {
                    request.partialBoundaries.push(boundary);
                  }
                }
              }
            }
          }
        }
        request.allPendingTasks--;
        if (request.allPendingTasks === 0) {
          var onAllReady = request.onAllReady;
          onAllReady();
        }
      }
      function retryTask(request, task) {
        var segment = task.blockedSegment;
        if (segment.status !== PENDING) {
          return;
        }
        switchContext(task.context);
        var prevTaskInDEV = null;
        {
          prevTaskInDEV = currentTaskInDEV;
          currentTaskInDEV = task;
        }
        try {
          renderNodeDestructive(request, task, task.node);
          pushSegmentFinale$1(segment.chunks, request.responseState, segment.lastPushedText, segment.textEmbedded);
          task.abortSet.delete(task);
          segment.status = COMPLETED;
          finishedTask(request, task.blockedBoundary, segment);
        } catch (x) {
          resetHooksState();
          if (typeof x === "object" && x !== null && typeof x.then === "function") {
            var ping = task.ping;
            x.then(ping, ping);
          } else {
            task.abortSet.delete(task);
            segment.status = ERRORED;
            erroredTask(request, task.blockedBoundary, segment, x);
          }
        } finally {
          {
            currentTaskInDEV = prevTaskInDEV;
          }
        }
      }
      function performWork(request) {
        if (request.status === CLOSED) {
          return;
        }
        var prevContext = getActiveContext();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = Dispatcher;
        var prevGetCurrentStackImpl;
        {
          prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
          ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
        }
        var prevResponseState = currentResponseState;
        setCurrentResponseState(request.responseState);
        try {
          var pingedTasks = request.pingedTasks;
          var i2;
          for (i2 = 0; i2 < pingedTasks.length; i2++) {
            var task = pingedTasks[i2];
            retryTask(request, task);
          }
          pingedTasks.splice(0, i2);
          if (request.destination !== null) {
            flushCompletedQueues(request, request.destination);
          }
        } catch (error2) {
          logRecoverableError(request, error2);
          fatalError(request, error2);
        } finally {
          setCurrentResponseState(prevResponseState);
          ReactCurrentDispatcher$1.current = prevDispatcher;
          {
            ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
          }
          if (prevDispatcher === Dispatcher) {
            switchContext(prevContext);
          }
        }
      }
      function flushSubtree(request, destination, segment) {
        segment.parentFlushed = true;
        switch (segment.status) {
          case PENDING: {
            var segmentID = segment.id = request.nextSegmentId++;
            segment.lastPushedText = false;
            segment.textEmbedded = false;
            return writePlaceholder(destination, request.responseState, segmentID);
          }
          case COMPLETED: {
            segment.status = FLUSHED;
            var r2 = true;
            var chunks = segment.chunks;
            var chunkIdx = 0;
            var children = segment.children;
            for (var childIdx = 0; childIdx < children.length; childIdx++) {
              var nextChild = children[childIdx];
              for (; chunkIdx < nextChild.index; chunkIdx++) {
                writeChunk(destination, chunks[chunkIdx]);
              }
              r2 = flushSegment(request, destination, nextChild);
            }
            for (; chunkIdx < chunks.length - 1; chunkIdx++) {
              writeChunk(destination, chunks[chunkIdx]);
            }
            if (chunkIdx < chunks.length) {
              r2 = writeChunkAndReturn(destination, chunks[chunkIdx]);
            }
            return r2;
          }
          default: {
            throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
          }
        }
      }
      function flushSegment(request, destination, segment) {
        var boundary = segment.boundary;
        if (boundary === null) {
          return flushSubtree(request, destination, segment);
        }
        boundary.parentFlushed = true;
        if (boundary.forceClientRender) {
          writeStartClientRenderedSuspenseBoundary$1(destination, request.responseState, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
          flushSubtree(request, destination, segment);
          return writeEndClientRenderedSuspenseBoundary$1(destination, request.responseState);
        } else if (boundary.pendingTasks > 0) {
          boundary.rootSegmentID = request.nextSegmentId++;
          if (boundary.completedSegments.length > 0) {
            request.partialBoundaries.push(boundary);
          }
          var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
          writeStartPendingSuspenseBoundary(destination, request.responseState, id);
          flushSubtree(request, destination, segment);
          return writeEndPendingSuspenseBoundary(destination, request.responseState);
        } else if (boundary.byteSize > request.progressiveChunkSize) {
          boundary.rootSegmentID = request.nextSegmentId++;
          request.completedBoundaries.push(boundary);
          writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id);
          flushSubtree(request, destination, segment);
          return writeEndPendingSuspenseBoundary(destination, request.responseState);
        } else {
          writeStartCompletedSuspenseBoundary$1(destination, request.responseState);
          var completedSegments = boundary.completedSegments;
          if (completedSegments.length !== 1) {
            throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
          }
          var contentSegment = completedSegments[0];
          flushSegment(request, destination, contentSegment);
          return writeEndCompletedSuspenseBoundary$1(destination, request.responseState);
        }
      }
      function flushClientRenderedBoundary(request, destination, boundary) {
        return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
      }
      function flushSegmentContainer(request, destination, segment) {
        writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
        flushSegment(request, destination, segment);
        return writeEndSegment(destination, segment.formatContext);
      }
      function flushCompletedBoundary(request, destination, boundary) {
        var completedSegments = boundary.completedSegments;
        var i2 = 0;
        for (; i2 < completedSegments.length; i2++) {
          var segment = completedSegments[i2];
          flushPartiallyCompletedSegment(request, destination, boundary, segment);
        }
        completedSegments.length = 0;
        return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
      }
      function flushPartialBoundary(request, destination, boundary) {
        var completedSegments = boundary.completedSegments;
        var i2 = 0;
        for (; i2 < completedSegments.length; i2++) {
          var segment = completedSegments[i2];
          if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
            i2++;
            completedSegments.splice(0, i2);
            return false;
          }
        }
        completedSegments.splice(0, i2);
        return true;
      }
      function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
        if (segment.status === FLUSHED) {
          return true;
        }
        var segmentID = segment.id;
        if (segmentID === -1) {
          var rootSegmentID = segment.id = boundary.rootSegmentID;
          if (rootSegmentID === -1) {
            throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
          }
          return flushSegmentContainer(request, destination, segment);
        } else {
          flushSegmentContainer(request, destination, segment);
          return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
        }
      }
      function flushCompletedQueues(request, destination) {
        try {
          var completedRootSegment = request.completedRootSegment;
          if (completedRootSegment !== null && request.pendingRootTasks === 0) {
            flushSegment(request, destination, completedRootSegment);
            request.completedRootSegment = null;
            writeCompletedRoot(destination, request.responseState);
          }
          var clientRenderedBoundaries = request.clientRenderedBoundaries;
          var i2;
          for (i2 = 0; i2 < clientRenderedBoundaries.length; i2++) {
            var boundary = clientRenderedBoundaries[i2];
            if (!flushClientRenderedBoundary(request, destination, boundary)) {
              request.destination = null;
              i2++;
              clientRenderedBoundaries.splice(0, i2);
              return;
            }
          }
          clientRenderedBoundaries.splice(0, i2);
          var completedBoundaries = request.completedBoundaries;
          for (i2 = 0; i2 < completedBoundaries.length; i2++) {
            var _boundary = completedBoundaries[i2];
            if (!flushCompletedBoundary(request, destination, _boundary)) {
              request.destination = null;
              i2++;
              completedBoundaries.splice(0, i2);
              return;
            }
          }
          completedBoundaries.splice(0, i2);
          completeWriting(destination);
          beginWriting(destination);
          var partialBoundaries = request.partialBoundaries;
          for (i2 = 0; i2 < partialBoundaries.length; i2++) {
            var _boundary2 = partialBoundaries[i2];
            if (!flushPartialBoundary(request, destination, _boundary2)) {
              request.destination = null;
              i2++;
              partialBoundaries.splice(0, i2);
              return;
            }
          }
          partialBoundaries.splice(0, i2);
          var largeBoundaries = request.completedBoundaries;
          for (i2 = 0; i2 < largeBoundaries.length; i2++) {
            var _boundary3 = largeBoundaries[i2];
            if (!flushCompletedBoundary(request, destination, _boundary3)) {
              request.destination = null;
              i2++;
              largeBoundaries.splice(0, i2);
              return;
            }
          }
          largeBoundaries.splice(0, i2);
        } finally {
          if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0) {
            {
              if (request.abortableTasks.size !== 0) {
                error("There was still abortable task at the root when we closed. This is a bug in React.");
              }
            }
            close(destination);
          }
        }
      }
      function startWork(request) {
        scheduleWork(function() {
          return performWork(request);
        });
      }
      function startFlowing(request, destination) {
        if (request.status === CLOSING) {
          request.status = CLOSED;
          closeWithError(destination, request.fatalError);
          return;
        }
        if (request.status === CLOSED) {
          return;
        }
        if (request.destination !== null) {
          return;
        }
        request.destination = destination;
        try {
          flushCompletedQueues(request, destination);
        } catch (error2) {
          logRecoverableError(request, error2);
          fatalError(request, error2);
        }
      }
      function abort(request, reason) {
        try {
          var abortableTasks = request.abortableTasks;
          abortableTasks.forEach(function(task) {
            return abortTask(task, request, reason);
          });
          abortableTasks.clear();
          if (request.destination !== null) {
            flushCompletedQueues(request, request.destination);
          }
        } catch (error2) {
          logRecoverableError(request, error2);
          fatalError(request, error2);
        }
      }
      function onError() {
      }
      function renderToStringImpl(children, options, generateStaticMarkup, abortReason) {
        var didFatal = false;
        var fatalError2 = null;
        var result = "";
        var destination = {
          push: function(chunk) {
            if (chunk !== null) {
              result += chunk;
            }
            return true;
          },
          destroy: function(error2) {
            didFatal = true;
            fatalError2 = error2;
          }
        };
        var readyToStream = false;
        function onShellReady() {
          readyToStream = true;
        }
        var request = createRequest(children, createResponseState$1(generateStaticMarkup, options ? options.identifierPrefix : void 0), createRootFormatContext(), Infinity, onError, void 0, onShellReady);
        startWork(request);
        abort(request, abortReason);
        startFlowing(request, destination);
        if (didFatal) {
          throw fatalError2;
        }
        if (!readyToStream) {
          throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        }
        return result;
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }
      var ReactMarkupReadableStream = /* @__PURE__ */ function(_Readable) {
        _inheritsLoose(ReactMarkupReadableStream2, _Readable);
        function ReactMarkupReadableStream2() {
          var _this;
          _this = _Readable.call(this, {}) || this;
          _this.request = null;
          _this.startedFlowing = false;
          return _this;
        }
        var _proto = ReactMarkupReadableStream2.prototype;
        _proto._destroy = function _destroy(err, callback) {
          abort(this.request);
          callback(err);
        };
        _proto._read = function _read(size) {
          if (this.startedFlowing) {
            startFlowing(this.request, this);
          }
        };
        return ReactMarkupReadableStream2;
      }(stream.Readable);
      function onError$1() {
      }
      function renderToNodeStreamImpl(children, options, generateStaticMarkup) {
        function onAllReady() {
          destination.startedFlowing = true;
          startFlowing(request, destination);
        }
        var destination = new ReactMarkupReadableStream();
        var request = createRequest(children, createResponseState$1(false, options ? options.identifierPrefix : void 0), createRootFormatContext(), Infinity, onError$1, onAllReady, void 0);
        destination.request = request;
        startWork(request);
        return destination;
      }
      function renderToNodeStream(children, options) {
        {
          error("renderToNodeStream is deprecated. Use renderToPipeableStream instead.");
        }
        return renderToNodeStreamImpl(children, options);
      }
      function renderToStaticNodeStream(children, options) {
        {
          error("ReactDOMServer.renderToStaticNodeStream() is deprecated. Use ReactDOMServer.renderToPipeableStream() and wait to `pipe` until the `onAllReady` callback has been called instead.");
        }
        return renderToNodeStreamImpl(children, options);
      }
      function renderToString(children, options) {
        return renderToStringImpl(children, options, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
      }
      function renderToStaticMarkup(children, options) {
        return renderToStringImpl(children, options, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
      }
      reactDomServerLegacy_node_development.renderToNodeStream = renderToNodeStream;
      reactDomServerLegacy_node_development.renderToStaticMarkup = renderToStaticMarkup;
      reactDomServerLegacy_node_development.renderToStaticNodeStream = renderToStaticNodeStream;
      reactDomServerLegacy_node_development.renderToString = renderToString;
      reactDomServerLegacy_node_development.version = ReactVersion;
    })();
  }
  return reactDomServerLegacy_node_development;
}
var reactDomServer_node_development = {};
/**
 * @license React
 * react-dom-server.node.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDomServer_node_development;
function requireReactDomServer_node_development() {
  if (hasRequiredReactDomServer_node_development) return reactDomServer_node_development;
  hasRequiredReactDomServer_node_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var React2 = reactExports;
      var util2 = require$$1$1;
      var ReactVersion = "18.3.1";
      var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function warn(format) {
        {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format, args);
          }
        }
      }
      function error(format) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
      }
      function printWarning(level, format, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          if (stack !== "") {
            format += "%s";
            args = args.concat([stack]);
          }
          var argsWithFormat = args.map(function(item) {
            return String(item);
          });
          argsWithFormat.unshift("Warning: " + format);
          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      function scheduleWork(callback) {
        setImmediate(callback);
      }
      function flushBuffered(destination) {
        if (typeof destination.flush === "function") {
          destination.flush();
        }
      }
      var VIEW_SIZE = 2048;
      var currentView = null;
      var writtenBytes = 0;
      var destinationHasCapacity = true;
      function beginWriting(destination) {
        currentView = new Uint8Array(VIEW_SIZE);
        writtenBytes = 0;
        destinationHasCapacity = true;
      }
      function writeStringChunk(destination, stringChunk) {
        if (stringChunk.length === 0) {
          return;
        }
        if (stringChunk.length * 3 > VIEW_SIZE) {
          if (writtenBytes > 0) {
            writeToDestination(destination, currentView.subarray(0, writtenBytes));
            currentView = new Uint8Array(VIEW_SIZE);
            writtenBytes = 0;
          }
          writeToDestination(destination, textEncoder.encode(stringChunk));
          return;
        }
        var target = currentView;
        if (writtenBytes > 0) {
          target = currentView.subarray(writtenBytes);
        }
        var _textEncoder$encodeIn = textEncoder.encodeInto(stringChunk, target), read = _textEncoder$encodeIn.read, written = _textEncoder$encodeIn.written;
        writtenBytes += written;
        if (read < stringChunk.length) {
          writeToDestination(destination, currentView);
          currentView = new Uint8Array(VIEW_SIZE);
          writtenBytes = textEncoder.encodeInto(stringChunk.slice(read), currentView).written;
        }
        if (writtenBytes === VIEW_SIZE) {
          writeToDestination(destination, currentView);
          currentView = new Uint8Array(VIEW_SIZE);
          writtenBytes = 0;
        }
      }
      function writeViewChunk(destination, chunk) {
        if (chunk.byteLength === 0) {
          return;
        }
        if (chunk.byteLength > VIEW_SIZE) {
          if (writtenBytes > 0) {
            writeToDestination(destination, currentView.subarray(0, writtenBytes));
            currentView = new Uint8Array(VIEW_SIZE);
            writtenBytes = 0;
          }
          writeToDestination(destination, chunk);
          return;
        }
        var bytesToWrite = chunk;
        var allowableBytes = currentView.length - writtenBytes;
        if (allowableBytes < bytesToWrite.byteLength) {
          if (allowableBytes === 0) {
            writeToDestination(destination, currentView);
          } else {
            currentView.set(bytesToWrite.subarray(0, allowableBytes), writtenBytes);
            writtenBytes += allowableBytes;
            writeToDestination(destination, currentView);
            bytesToWrite = bytesToWrite.subarray(allowableBytes);
          }
          currentView = new Uint8Array(VIEW_SIZE);
          writtenBytes = 0;
        }
        currentView.set(bytesToWrite, writtenBytes);
        writtenBytes += bytesToWrite.byteLength;
        if (writtenBytes === VIEW_SIZE) {
          writeToDestination(destination, currentView);
          currentView = new Uint8Array(VIEW_SIZE);
          writtenBytes = 0;
        }
      }
      function writeChunk(destination, chunk) {
        if (typeof chunk === "string") {
          writeStringChunk(destination, chunk);
        } else {
          writeViewChunk(destination, chunk);
        }
      }
      function writeToDestination(destination, view) {
        var currentHasCapacity = destination.write(view);
        destinationHasCapacity = destinationHasCapacity && currentHasCapacity;
      }
      function writeChunkAndReturn(destination, chunk) {
        writeChunk(destination, chunk);
        return destinationHasCapacity;
      }
      function completeWriting(destination) {
        if (currentView && writtenBytes > 0) {
          destination.write(currentView.subarray(0, writtenBytes));
        }
        currentView = null;
        writtenBytes = 0;
        destinationHasCapacity = true;
      }
      function close(destination) {
        destination.end();
      }
      var textEncoder = new util2.TextEncoder();
      function stringToChunk(content) {
        return content;
      }
      function stringToPrecomputedChunk(content) {
        return textEncoder.encode(content);
      }
      function closeWithError(destination, error2) {
        destination.destroy(error2);
      }
      function typeName(value) {
        {
          var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
          var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value) {
        {
          try {
            testStringCoercion(value);
            return false;
          } catch (e) {
            return true;
          }
        }
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkAttributeStringCoercion(value, attributeName) {
        {
          if (willCoercionThrow(value)) {
            error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", attributeName, typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      function checkCSSPropertyStringCoercion(value, propName) {
        {
          if (willCoercionThrow(value)) {
            error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", propName, typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      function checkHtmlStringCoercion(value) {
        {
          if (willCoercionThrow(value)) {
            error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value);
          }
        }
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var RESERVED = 0;
      var STRING = 1;
      var BOOLEANISH_STRING = 2;
      var BOOLEAN = 3;
      var OVERLOADED_BOOLEAN = 4;
      var NUMERIC = 5;
      var POSITIVE_NUMERIC = 6;
      var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
      var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
      var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
      var illegalAttributeNameCache = {};
      var validatedAttributeNameCache = {};
      function isAttributeNameSafe(attributeName) {
        if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
          return true;
        }
        if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
          return false;
        }
        if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
          validatedAttributeNameCache[attributeName] = true;
          return true;
        }
        illegalAttributeNameCache[attributeName] = true;
        {
          error("Invalid attribute name: `%s`", attributeName);
        }
        return false;
      }
      function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
        if (propertyInfo !== null && propertyInfo.type === RESERVED) {
          return false;
        }
        switch (typeof value) {
          case "function":
          case "symbol":
            return true;
          case "boolean": {
            if (propertyInfo !== null) {
              return !propertyInfo.acceptsBooleans;
            } else {
              var prefix2 = name.toLowerCase().slice(0, 5);
              return prefix2 !== "data-" && prefix2 !== "aria-";
            }
          }
          default:
            return false;
        }
      }
      function getPropertyInfo(name) {
        return properties.hasOwnProperty(name) ? properties[name] : null;
      }
      function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
        this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
        this.attributeName = attributeName;
        this.attributeNamespace = attributeNamespace;
        this.mustUseProperty = mustUseProperty;
        this.propertyName = name;
        this.type = type;
        this.sanitizeURL = sanitizeURL2;
        this.removeEmptyString = removeEmptyString;
      }
      var properties = {};
      var reservedProps = [
        "children",
        "dangerouslySetInnerHTML",
        // TODO: This prevents the assignment of defaultValue to regular
        // elements (not just inputs). Now that ReactDOMInput assigns to the
        // defaultValue property -- do we need this?
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style"
      ];
      reservedProps.forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          RESERVED,
          false,
          // mustUseProperty
          name,
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
        var name = _ref[0], attributeName = _ref[1];
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          // mustUseProperty
          attributeName,
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEANISH_STRING,
          false,
          // mustUseProperty
          name.toLowerCase(),
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEANISH_STRING,
          false,
          // mustUseProperty
          name,
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      [
        "allowFullScreen",
        "async",
        // Note: there is a special case that prevents it from being written to the DOM
        // on the client side because the browsers are inconsistent. Instead we call focus().
        "autoFocus",
        "autoPlay",
        "controls",
        "default",
        "defer",
        "disabled",
        "disablePictureInPicture",
        "disableRemotePlayback",
        "formNoValidate",
        "hidden",
        "loop",
        "noModule",
        "noValidate",
        "open",
        "playsInline",
        "readOnly",
        "required",
        "reversed",
        "scoped",
        "seamless",
        // Microdata
        "itemScope"
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEAN,
          false,
          // mustUseProperty
          name.toLowerCase(),
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      [
        "checked",
        // Note: `option.selected` is not updated if `select.multiple` is
        // disabled with `removeAttribute`. We have special logic for handling this.
        "multiple",
        "muted",
        "selected"
        // NOTE: if you add a camelCased prop to this list,
        // you'll need to set attributeName to name.toLowerCase()
        // instead in the assignment below.
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          BOOLEAN,
          true,
          // mustUseProperty
          name,
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      [
        "capture",
        "download"
        // NOTE: if you add a camelCased prop to this list,
        // you'll need to set attributeName to name.toLowerCase()
        // instead in the assignment below.
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          OVERLOADED_BOOLEAN,
          false,
          // mustUseProperty
          name,
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      [
        "cols",
        "rows",
        "size",
        "span"
        // NOTE: if you add a camelCased prop to this list,
        // you'll need to set attributeName to name.toLowerCase()
        // instead in the assignment below.
      ].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          POSITIVE_NUMERIC,
          false,
          // mustUseProperty
          name,
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      ["rowSpan", "start"].forEach(function(name) {
        properties[name] = new PropertyInfoRecord(
          name,
          NUMERIC,
          false,
          // mustUseProperty
          name.toLowerCase(),
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      var CAMELIZE = /[\-\:]([a-z])/g;
      var capitalize = function(token) {
        return token[1].toUpperCase();
      };
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height"
        // NOTE: if you add a camelCased prop to this list,
        // you'll need to set attributeName to name.toLowerCase()
        // instead in the assignment below.
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          // mustUseProperty
          attributeName,
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      [
        "xlink:actuate",
        "xlink:arcrole",
        "xlink:role",
        "xlink:show",
        "xlink:title",
        "xlink:type"
        // NOTE: if you add a camelCased prop to this list,
        // you'll need to set attributeName to name.toLowerCase()
        // instead in the assignment below.
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          // mustUseProperty
          attributeName,
          "http://www.w3.org/1999/xlink",
          false,
          // sanitizeURL
          false
        );
      });
      [
        "xml:base",
        "xml:lang",
        "xml:space"
        // NOTE: if you add a camelCased prop to this list,
        // you'll need to set attributeName to name.toLowerCase()
        // instead in the assignment below.
      ].forEach(function(attributeName) {
        var name = attributeName.replace(CAMELIZE, capitalize);
        properties[name] = new PropertyInfoRecord(
          name,
          STRING,
          false,
          // mustUseProperty
          attributeName,
          "http://www.w3.org/XML/1998/namespace",
          false,
          // sanitizeURL
          false
        );
      });
      ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(
          attributeName,
          STRING,
          false,
          // mustUseProperty
          attributeName.toLowerCase(),
          // attributeName
          null,
          // attributeNamespace
          false,
          // sanitizeURL
          false
        );
      });
      var xlinkHref = "xlinkHref";
      properties[xlinkHref] = new PropertyInfoRecord(
        "xlinkHref",
        STRING,
        false,
        // mustUseProperty
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        true,
        // sanitizeURL
        false
      );
      ["src", "href", "action", "formAction"].forEach(function(attributeName) {
        properties[attributeName] = new PropertyInfoRecord(
          attributeName,
          STRING,
          false,
          // mustUseProperty
          attributeName.toLowerCase(),
          // attributeName
          null,
          // attributeNamespace
          true,
          // sanitizeURL
          true
        );
      });
      var isUnitlessNumber = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        // SVG-related properties
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      function prefixKey(prefix2, key) {
        return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
      }
      var prefixes = ["Webkit", "ms", "Moz", "O"];
      Object.keys(isUnitlessNumber).forEach(function(prop) {
        prefixes.forEach(function(prefix2) {
          isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
        });
      });
      var hasReadOnlyValue = {
        button: true,
        checkbox: true,
        image: true,
        hidden: true,
        radio: true,
        reset: true,
        submit: true
      };
      function checkControlledValueProps(tagName, props) {
        {
          if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
            error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
          }
          if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
            error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
          }
        }
      }
      function isCustomComponent(tagName, props) {
        if (tagName.indexOf("-") === -1) {
          return typeof props.is === "string";
        }
        switch (tagName) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var ariaProperties = {
        "aria-current": 0,
        // state
        "aria-description": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        // state
        "aria-hidden": 0,
        // state
        "aria-invalid": 0,
        // state
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        // Widget Attributes
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        // Live Region Attributes
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        // Drag-and-Drop Attributes
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        // Relationship Attributes
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0
      };
      var warnedProperties = {};
      var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
      var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
      function validateProperty(tagName, name) {
        {
          if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
            return true;
          }
          if (rARIACamel.test(name)) {
            var ariaName = "aria-" + name.slice(4).toLowerCase();
            var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
            if (correctName == null) {
              error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
              warnedProperties[name] = true;
              return true;
            }
            if (name !== correctName) {
              error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
              warnedProperties[name] = true;
              return true;
            }
          }
          if (rARIA.test(name)) {
            var lowerCasedName = name.toLowerCase();
            var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
            if (standardName == null) {
              warnedProperties[name] = true;
              return false;
            }
            if (name !== standardName) {
              error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
              warnedProperties[name] = true;
              return true;
            }
          }
        }
        return true;
      }
      function warnInvalidARIAProps(type, props) {
        {
          var invalidProps = [];
          for (var key in props) {
            var isValid2 = validateProperty(type, key);
            if (!isValid2) {
              invalidProps.push(key);
            }
          }
          var unknownPropString = invalidProps.map(function(prop) {
            return "`" + prop + "`";
          }).join(", ");
          if (invalidProps.length === 1) {
            error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
          } else if (invalidProps.length > 1) {
            error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
          }
        }
      }
      function validateProperties(type, props) {
        if (isCustomComponent(type, props)) {
          return;
        }
        warnInvalidARIAProps(type, props);
      }
      var didWarnValueNull = false;
      function validateProperties$1(type, props) {
        {
          if (type !== "input" && type !== "textarea" && type !== "select") {
            return;
          }
          if (props != null && props.value === null && !didWarnValueNull) {
            didWarnValueNull = true;
            if (type === "select" && props.multiple) {
              error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
            } else {
              error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
            }
          }
        }
      }
      var possibleStandardNames = {
        // HTML
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        imagesizes: "imageSizes",
        imagesrcset: "imageSrcSet",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        // SVG
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan"
      };
      var validateProperty$1 = function() {
      };
      {
        var warnedProperties$1 = {};
        var EVENT_NAME_REGEX = /^on./;
        var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
        var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        validateProperty$1 = function(tagName, name, value, eventRegistry) {
          if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
            return true;
          }
          var lowerCasedName = name.toLowerCase();
          if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
            error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
            warnedProperties$1[name] = true;
            return true;
          }
          if (eventRegistry != null) {
            var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
            if (registrationNameDependencies.hasOwnProperty(name)) {
              return true;
            }
            var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
            if (registrationName != null) {
              error("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
              warnedProperties$1[name] = true;
              return true;
            }
            if (EVENT_NAME_REGEX.test(name)) {
              error("Unknown event handler property `%s`. It will be ignored.", name);
              warnedProperties$1[name] = true;
              return true;
            }
          } else if (EVENT_NAME_REGEX.test(name)) {
            if (INVALID_EVENT_NAME_REGEX.test(name)) {
              error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name);
            }
            warnedProperties$1[name] = true;
            return true;
          }
          if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
            return true;
          }
          if (lowerCasedName === "innerhtml") {
            error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
            warnedProperties$1[name] = true;
            return true;
          }
          if (lowerCasedName === "aria") {
            error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
            warnedProperties$1[name] = true;
            return true;
          }
          if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value !== "string") {
            error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
            warnedProperties$1[name] = true;
            return true;
          }
          if (typeof value === "number" && isNaN(value)) {
            error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name);
            warnedProperties$1[name] = true;
            return true;
          }
          var propertyInfo = getPropertyInfo(name);
          var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
          if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            var standardName = possibleStandardNames[lowerCasedName];
            if (standardName !== name) {
              error("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
              warnedProperties$1[name] = true;
              return true;
            }
          } else if (!isReserved && name !== lowerCasedName) {
            error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName);
            warnedProperties$1[name] = true;
            return true;
          }
          if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo)) {
            if (value) {
              error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name);
            } else {
              error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
            }
            warnedProperties$1[name] = true;
            return true;
          }
          if (isReserved) {
            return true;
          }
          if (shouldRemoveAttributeWithWarning(name, value, propertyInfo)) {
            warnedProperties$1[name] = true;
            return false;
          }
          if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
            error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
            warnedProperties$1[name] = true;
            return true;
          }
          return true;
        };
      }
      var warnUnknownProperties = function(type, props, eventRegistry) {
        {
          var unknownProps = [];
          for (var key in props) {
            var isValid2 = validateProperty$1(type, key, props[key], eventRegistry);
            if (!isValid2) {
              unknownProps.push(key);
            }
          }
          var unknownPropString = unknownProps.map(function(prop) {
            return "`" + prop + "`";
          }).join(", ");
          if (unknownProps.length === 1) {
            error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
          } else if (unknownProps.length > 1) {
            error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
          }
        }
      };
      function validateProperties$2(type, props, eventRegistry) {
        if (isCustomComponent(type, props)) {
          return;
        }
        warnUnknownProperties(type, props, eventRegistry);
      }
      var warnValidStyle = function() {
      };
      {
        var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
        var msPattern = /^-ms-/;
        var hyphenPattern = /-(.)/g;
        var badStyleValueWithSemicolonPattern = /;\s*$/;
        var warnedStyleNames = {};
        var warnedStyleValues = {};
        var warnedForNaNValue = false;
        var warnedForInfinityValue = false;
        var camelize = function(string) {
          return string.replace(hyphenPattern, function(_, character) {
            return character.toUpperCase();
          });
        };
        var warnHyphenatedStyleName = function(name) {
          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
          }
          warnedStyleNames[name] = true;
          error(
            "Unsupported style property %s. Did you mean %s?",
            name,
            // As Andi Smith suggests
            // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
            // is converted to lowercase `ms`.
            camelize(name.replace(msPattern, "ms-"))
          );
        };
        var warnBadVendoredStyleName = function(name) {
          if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
            return;
          }
          warnedStyleNames[name] = true;
          error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
        };
        var warnStyleValueWithSemicolon = function(name, value) {
          if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
            return;
          }
          warnedStyleValues[value] = true;
          error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, ""));
        };
        var warnStyleValueIsNaN = function(name, value) {
          if (warnedForNaNValue) {
            return;
          }
          warnedForNaNValue = true;
          error("`NaN` is an invalid value for the `%s` css style property.", name);
        };
        var warnStyleValueIsInfinity = function(name, value) {
          if (warnedForInfinityValue) {
            return;
          }
          warnedForInfinityValue = true;
          error("`Infinity` is an invalid value for the `%s` css style property.", name);
        };
        warnValidStyle = function(name, value) {
          if (name.indexOf("-") > -1) {
            warnHyphenatedStyleName(name);
          } else if (badVendoredStyleNamePattern.test(name)) {
            warnBadVendoredStyleName(name);
          } else if (badStyleValueWithSemicolonPattern.test(value)) {
            warnStyleValueWithSemicolon(name, value);
          }
          if (typeof value === "number") {
            if (isNaN(value)) {
              warnStyleValueIsNaN(name, value);
            } else if (!isFinite(value)) {
              warnStyleValueIsInfinity(name, value);
            }
          }
        };
      }
      var warnValidStyle$1 = warnValidStyle;
      var matchHtmlRegExp = /["'&<>]/;
      function escapeHtml(string) {
        {
          checkHtmlStringCoercion(string);
        }
        var str = "" + string;
        var match = matchHtmlRegExp.exec(str);
        if (!match) {
          return str;
        }
        var escape;
        var html = "";
        var index;
        var lastIndex = 0;
        for (index = match.index; index < str.length; index++) {
          switch (str.charCodeAt(index)) {
            case 34:
              escape = "&quot;";
              break;
            case 38:
              escape = "&amp;";
              break;
            case 39:
              escape = "&#x27;";
              break;
            case 60:
              escape = "&lt;";
              break;
            case 62:
              escape = "&gt;";
              break;
            default:
              continue;
          }
          if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
          }
          lastIndex = index + 1;
          html += escape;
        }
        return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
      }
      function escapeTextForBrowser(text) {
        if (typeof text === "boolean" || typeof text === "number") {
          return "" + text;
        }
        return escapeHtml(text);
      }
      var uppercasePattern = /([A-Z])/g;
      var msPattern$1 = /^ms-/;
      function hyphenateStyleName(name) {
        return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern$1, "-ms-");
      }
      var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
      var didWarn = false;
      function sanitizeURL(url) {
        {
          if (!didWarn && isJavaScriptProtocol.test(url)) {
            didWarn = true;
            error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url));
          }
        }
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      var startInlineScript = stringToPrecomputedChunk("<script>");
      var endInlineScript = stringToPrecomputedChunk("<\/script>");
      var startScriptSrc = stringToPrecomputedChunk('<script src="');
      var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
      var endAsyncScript = stringToPrecomputedChunk('" async=""><\/script>');
      function escapeBootstrapScriptContent(scriptText) {
        {
          checkHtmlStringCoercion(scriptText);
        }
        return ("" + scriptText).replace(scriptRegex, scriptReplacer);
      }
      var scriptRegex = /(<\/|<)(s)(cript)/gi;
      var scriptReplacer = function(match, prefix2, s2, suffix) {
        return "" + prefix2 + (s2 === "s" ? "\\u0073" : "\\u0053") + suffix;
      };
      function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
        var idPrefix = identifierPrefix === void 0 ? "" : identifierPrefix;
        var inlineScriptWithNonce = nonce === void 0 ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
        var bootstrapChunks = [];
        if (bootstrapScriptContent !== void 0) {
          bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript);
        }
        if (bootstrapScripts !== void 0) {
          for (var i2 = 0; i2 < bootstrapScripts.length; i2++) {
            bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(bootstrapScripts[i2])), endAsyncScript);
          }
        }
        if (bootstrapModules !== void 0) {
          for (var _i = 0; _i < bootstrapModules.length; _i++) {
            bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(bootstrapModules[_i])), endAsyncScript);
          }
        }
        return {
          bootstrapChunks,
          startInlineScript: inlineScriptWithNonce,
          placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
          segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
          boundaryPrefix: idPrefix + "B:",
          idPrefix,
          nextSuspenseID: 0,
          sentCompleteSegmentFunction: false,
          sentCompleteBoundaryFunction: false,
          sentClientRenderFunction: false
        };
      }
      var ROOT_HTML_MODE = 0;
      var HTML_MODE = 1;
      var SVG_MODE = 2;
      var MATHML_MODE = 3;
      var HTML_TABLE_MODE = 4;
      var HTML_TABLE_BODY_MODE = 5;
      var HTML_TABLE_ROW_MODE = 6;
      var HTML_COLGROUP_MODE = 7;
      function createFormatContext(insertionMode, selectedValue) {
        return {
          insertionMode,
          selectedValue
        };
      }
      function createRootFormatContext(namespaceURI) {
        var insertionMode = namespaceURI === "http://www.w3.org/2000/svg" ? SVG_MODE : namespaceURI === "http://www.w3.org/1998/Math/MathML" ? MATHML_MODE : ROOT_HTML_MODE;
        return createFormatContext(insertionMode, null);
      }
      function getChildFormatContext(parentContext, type, props) {
        switch (type) {
          case "select":
            return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);
          case "svg":
            return createFormatContext(SVG_MODE, null);
          case "math":
            return createFormatContext(MATHML_MODE, null);
          case "foreignObject":
            return createFormatContext(HTML_MODE, null);
          case "table":
            return createFormatContext(HTML_TABLE_MODE, null);
          case "thead":
          case "tbody":
          case "tfoot":
            return createFormatContext(HTML_TABLE_BODY_MODE, null);
          case "colgroup":
            return createFormatContext(HTML_COLGROUP_MODE, null);
          case "tr":
            return createFormatContext(HTML_TABLE_ROW_MODE, null);
        }
        if (parentContext.insertionMode >= HTML_TABLE_MODE) {
          return createFormatContext(HTML_MODE, null);
        }
        if (parentContext.insertionMode === ROOT_HTML_MODE) {
          return createFormatContext(HTML_MODE, null);
        }
        return parentContext;
      }
      var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
      function assignSuspenseBoundaryID(responseState) {
        var generatedID = responseState.nextSuspenseID++;
        return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
      }
      function makeId(responseState, treeId, localId) {
        var idPrefix = responseState.idPrefix;
        var id = ":" + idPrefix + "R" + treeId;
        if (localId > 0) {
          id += "H" + localId.toString(32);
        }
        return id + ":";
      }
      function encodeHTMLTextNode(text) {
        return escapeTextForBrowser(text);
      }
      var textSeparator = stringToPrecomputedChunk("<!-- -->");
      function pushTextInstance(target, text, responseState, textEmbedded) {
        if (text === "") {
          return textEmbedded;
        }
        if (textEmbedded) {
          target.push(textSeparator);
        }
        target.push(stringToChunk(encodeHTMLTextNode(text)));
        return true;
      }
      function pushSegmentFinale(target, responseState, lastPushedText, textEmbedded) {
        if (lastPushedText && textEmbedded) {
          target.push(textSeparator);
        }
      }
      var styleNameCache = /* @__PURE__ */ new Map();
      function processStyleName(styleName) {
        var chunk = styleNameCache.get(styleName);
        if (chunk !== void 0) {
          return chunk;
        }
        var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
        styleNameCache.set(styleName, result);
        return result;
      }
      var styleAttributeStart = stringToPrecomputedChunk(' style="');
      var styleAssign = stringToPrecomputedChunk(":");
      var styleSeparator = stringToPrecomputedChunk(";");
      function pushStyle(target, responseState, style) {
        if (typeof style !== "object") {
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
        }
        var isFirst = true;
        for (var styleName in style) {
          if (!hasOwnProperty.call(style, styleName)) {
            continue;
          }
          var styleValue = style[styleName];
          if (styleValue == null || typeof styleValue === "boolean" || styleValue === "") {
            continue;
          }
          var nameChunk = void 0;
          var valueChunk = void 0;
          var isCustomProperty = styleName.indexOf("--") === 0;
          if (isCustomProperty) {
            nameChunk = stringToChunk(escapeTextForBrowser(styleName));
            {
              checkCSSPropertyStringCoercion(styleValue, styleName);
            }
            valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
          } else {
            {
              warnValidStyle$1(styleName, styleValue);
            }
            nameChunk = processStyleName(styleName);
            if (typeof styleValue === "number") {
              if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
                valueChunk = stringToChunk(styleValue + "px");
              } else {
                valueChunk = stringToChunk("" + styleValue);
              }
            } else {
              {
                checkCSSPropertyStringCoercion(styleValue, styleName);
              }
              valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
            }
          }
          if (isFirst) {
            isFirst = false;
            target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
          } else {
            target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
          }
        }
        if (!isFirst) {
          target.push(attributeEnd);
        }
      }
      var attributeSeparator = stringToPrecomputedChunk(" ");
      var attributeAssign = stringToPrecomputedChunk('="');
      var attributeEnd = stringToPrecomputedChunk('"');
      var attributeEmptyString = stringToPrecomputedChunk('=""');
      function pushAttribute(target, responseState, name, value) {
        switch (name) {
          case "style": {
            pushStyle(target, responseState, value);
            return;
          }
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            return;
        }
        if (
          // shouldIgnoreAttribute
          // We have already filtered out null/undefined and reserved words.
          name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")
        ) {
          return;
        }
        var propertyInfo = getPropertyInfo(name);
        if (propertyInfo !== null) {
          switch (typeof value) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              if (!propertyInfo.acceptsBooleans) {
                return;
              }
            }
          }
          var attributeName = propertyInfo.attributeName;
          var attributeNameChunk = stringToChunk(attributeName);
          switch (propertyInfo.type) {
            case BOOLEAN:
              if (value) {
                target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
              }
              return;
            case OVERLOADED_BOOLEAN:
              if (value === true) {
                target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
              } else if (value === false) ;
              else {
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
              }
              return;
            case NUMERIC:
              if (!isNaN(value)) {
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
              }
              break;
            case POSITIVE_NUMERIC:
              if (!isNaN(value) && value >= 1) {
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
              }
              break;
            default:
              if (propertyInfo.sanitizeURL) {
                {
                  checkAttributeStringCoercion(value, attributeName);
                }
                value = "" + value;
                sanitizeURL(value);
              }
              target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
          }
        } else if (isAttributeNameSafe(name)) {
          switch (typeof value) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var prefix2 = name.toLowerCase().slice(0, 5);
              if (prefix2 !== "data-" && prefix2 !== "aria-") {
                return;
              }
            }
          }
          target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
        }
      }
      var endOfStartTag = stringToPrecomputedChunk(">");
      var endOfStartTagSelfClosing = stringToPrecomputedChunk("/>");
      function pushInnerHTML(target, innerHTML, children) {
        if (innerHTML != null) {
          if (children != null) {
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          }
          if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          }
          var html = innerHTML.__html;
          if (html !== null && html !== void 0) {
            {
              checkHtmlStringCoercion(html);
            }
            target.push(stringToChunk("" + html));
          }
        }
      }
      var didWarnDefaultInputValue = false;
      var didWarnDefaultChecked = false;
      var didWarnDefaultSelectValue = false;
      var didWarnDefaultTextareaValue = false;
      var didWarnInvalidOptionChildren = false;
      var didWarnInvalidOptionInnerHTML = false;
      var didWarnSelectedSetOnOption = false;
      function checkSelectProp(props, propName) {
        {
          var value = props[propName];
          if (value != null) {
            var array = isArray(value);
            if (props.multiple && !array) {
              error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName);
            } else if (!props.multiple && array) {
              error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName);
            }
          }
        }
      }
      function pushStartSelect(target, props, responseState) {
        {
          checkControlledValueProps("select", props);
          checkSelectProp(props, "value");
          checkSelectProp(props, "defaultValue");
          if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue) {
            error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components");
            didWarnDefaultSelectValue = true;
          }
        }
        target.push(startChunkForTag("select"));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        return children;
      }
      function flattenOptionChildren(children) {
        var content = "";
        React2.Children.forEach(children, function(child) {
          if (child == null) {
            return;
          }
          content += child;
          {
            if (!didWarnInvalidOptionChildren && typeof child !== "string" && typeof child !== "number") {
              didWarnInvalidOptionChildren = true;
              error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.");
            }
          }
        });
        return content;
      }
      var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
      function pushStartOption(target, props, responseState, formatContext) {
        var selectedValue = formatContext.selectedValue;
        target.push(startChunkForTag("option"));
        var children = null;
        var value = null;
        var selected = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "selected":
                selected = propValue;
                {
                  if (!didWarnSelectedSetOnOption) {
                    error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.");
                    didWarnSelectedSetOnOption = true;
                  }
                }
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "value":
                value = propValue;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        if (selectedValue != null) {
          var stringValue;
          if (value !== null) {
            {
              checkAttributeStringCoercion(value, "value");
            }
            stringValue = "" + value;
          } else {
            {
              if (innerHTML !== null) {
                if (!didWarnInvalidOptionInnerHTML) {
                  didWarnInvalidOptionInnerHTML = true;
                  error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.");
                }
              }
            }
            stringValue = flattenOptionChildren(children);
          }
          if (isArray(selectedValue)) {
            for (var i2 = 0; i2 < selectedValue.length; i2++) {
              {
                checkAttributeStringCoercion(selectedValue[i2], "value");
              }
              var v = "" + selectedValue[i2];
              if (v === stringValue) {
                target.push(selectedMarkerAttribute);
                break;
              }
            }
          } else {
            {
              checkAttributeStringCoercion(selectedValue, "select.value");
            }
            if ("" + selectedValue === stringValue) {
              target.push(selectedMarkerAttribute);
            }
          }
        } else if (selected) {
          target.push(selectedMarkerAttribute);
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        return children;
      }
      function pushInput(target, props, responseState) {
        {
          checkControlledValueProps("input", props);
          if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked) {
            error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
            didWarnDefaultChecked = true;
          }
          if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue) {
            error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
            didWarnDefaultInputValue = true;
          }
        }
        target.push(startChunkForTag("input"));
        var value = null;
        var defaultValue = null;
        var checked = null;
        var defaultChecked = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              case "defaultChecked":
                defaultChecked = propValue;
                break;
              case "defaultValue":
                defaultValue = propValue;
                break;
              case "checked":
                checked = propValue;
                break;
              case "value":
                value = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        if (checked !== null) {
          pushAttribute(target, responseState, "checked", checked);
        } else if (defaultChecked !== null) {
          pushAttribute(target, responseState, "checked", defaultChecked);
        }
        if (value !== null) {
          pushAttribute(target, responseState, "value", value);
        } else if (defaultValue !== null) {
          pushAttribute(target, responseState, "value", defaultValue);
        }
        target.push(endOfStartTagSelfClosing);
        return null;
      }
      function pushStartTextArea(target, props, responseState) {
        {
          checkControlledValueProps("textarea", props);
          if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue) {
            error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components");
            didWarnDefaultTextareaValue = true;
          }
        }
        target.push(startChunkForTag("textarea"));
        var value = null;
        var defaultValue = null;
        var children = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "value":
                value = propValue;
                break;
              case "defaultValue":
                defaultValue = propValue;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        if (value === null && defaultValue !== null) {
          value = defaultValue;
        }
        target.push(endOfStartTag);
        if (children != null) {
          {
            error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          }
          if (value != null) {
            throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          }
          if (isArray(children)) {
            if (children.length > 1) {
              throw new Error("<textarea> can only have at most one child.");
            }
            {
              checkHtmlStringCoercion(children[0]);
            }
            value = "" + children[0];
          }
          {
            checkHtmlStringCoercion(children);
          }
          value = "" + children;
        }
        if (typeof value === "string" && value[0] === "\n") {
          target.push(leadingNewline);
        }
        if (value !== null) {
          {
            checkAttributeStringCoercion(value, "value");
          }
          target.push(stringToChunk(encodeHTMLTextNode("" + value)));
        }
        return null;
      }
      function pushSelfClosing(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTagSelfClosing);
        return null;
      }
      function pushStartMenuItem(target, props, responseState) {
        target.push(startChunkForTag("menuitem"));
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        return null;
      }
      function pushStartTitle(target, props, responseState) {
        target.push(startChunkForTag("title"));
        var children = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        {
          var child = Array.isArray(children) && children.length < 2 ? children[0] || null : children;
          if (Array.isArray(children) && children.length > 1) {
            error("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
          } else if (child != null && child.$$typeof != null) {
            error("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
          } else if (child != null && typeof child !== "string" && typeof child !== "number") {
            error("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
          }
        }
        return children;
      }
      function pushStartGenericElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        if (typeof children === "string") {
          target.push(stringToChunk(encodeHTMLTextNode(children)));
          return null;
        }
        return children;
      }
      function pushStartCustomElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              case "style":
                pushStyle(target, responseState, propValue);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                if (isAttributeNameSafe(propKey) && typeof propValue !== "function" && typeof propValue !== "symbol") {
                  target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
                }
                break;
            }
          }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, children);
        return children;
      }
      var leadingNewline = stringToPrecomputedChunk("\n");
      function pushStartPreformattedElement(target, props, tag, responseState) {
        target.push(startChunkForTag(tag));
        var children = null;
        var innerHTML = null;
        for (var propKey in props) {
          if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (propValue == null) {
              continue;
            }
            switch (propKey) {
              case "children":
                children = propValue;
                break;
              case "dangerouslySetInnerHTML":
                innerHTML = propValue;
                break;
              default:
                pushAttribute(target, responseState, propKey, propValue);
                break;
            }
          }
        }
        target.push(endOfStartTag);
        if (innerHTML != null) {
          if (children != null) {
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          }
          if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
          }
          var html = innerHTML.__html;
          if (html !== null && html !== void 0) {
            if (typeof html === "string" && html.length > 0 && html[0] === "\n") {
              target.push(leadingNewline, stringToChunk(html));
            } else {
              {
                checkHtmlStringCoercion(html);
              }
              target.push(stringToChunk("" + html));
            }
          }
        }
        if (typeof children === "string" && children[0] === "\n") {
          target.push(leadingNewline);
        }
        return children;
      }
      var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
      var validatedTagCache = /* @__PURE__ */ new Map();
      function startChunkForTag(tag) {
        var tagStartChunk = validatedTagCache.get(tag);
        if (tagStartChunk === void 0) {
          if (!VALID_TAG_REGEX.test(tag)) {
            throw new Error("Invalid tag: " + tag);
          }
          tagStartChunk = stringToPrecomputedChunk("<" + tag);
          validatedTagCache.set(tag, tagStartChunk);
        }
        return tagStartChunk;
      }
      var DOCTYPE = stringToPrecomputedChunk("<!DOCTYPE html>");
      function pushStartInstance(target, type, props, responseState, formatContext) {
        {
          validateProperties(type, props);
          validateProperties$1(type, props);
          validateProperties$2(type, props, null);
          if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
            error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
          }
          if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
            if (type.indexOf("-") === -1 && typeof props.is !== "string" && type.toLowerCase() !== type) {
              error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
            }
          }
        }
        switch (type) {
          case "select":
            return pushStartSelect(target, props, responseState);
          case "option":
            return pushStartOption(target, props, responseState, formatContext);
          case "textarea":
            return pushStartTextArea(target, props, responseState);
          case "input":
            return pushInput(target, props, responseState);
          case "menuitem":
            return pushStartMenuItem(target, props, responseState);
          case "title":
            return pushStartTitle(target, props, responseState);
          case "listing":
          case "pre": {
            return pushStartPreformattedElement(target, props, type, responseState);
          }
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr": {
            return pushSelfClosing(target, props, type, responseState);
          }
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph": {
            return pushStartGenericElement(target, props, type, responseState);
          }
          case "html": {
            if (formatContext.insertionMode === ROOT_HTML_MODE) {
              target.push(DOCTYPE);
            }
            return pushStartGenericElement(target, props, type, responseState);
          }
          default: {
            if (type.indexOf("-") === -1 && typeof props.is !== "string") {
              return pushStartGenericElement(target, props, type, responseState);
            } else {
              return pushStartCustomElement(target, props, type, responseState);
            }
          }
        }
      }
      var endTag1 = stringToPrecomputedChunk("</");
      var endTag2 = stringToPrecomputedChunk(">");
      function pushEndInstance(target, type, props) {
        switch (type) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr": {
            break;
          }
          default: {
            target.push(endTag1, stringToChunk(type), endTag2);
          }
        }
      }
      function writeCompletedRoot(destination, responseState) {
        var bootstrapChunks = responseState.bootstrapChunks;
        var i2 = 0;
        for (; i2 < bootstrapChunks.length - 1; i2++) {
          writeChunk(destination, bootstrapChunks[i2]);
        }
        if (i2 < bootstrapChunks.length) {
          return writeChunkAndReturn(destination, bootstrapChunks[i2]);
        }
        return true;
      }
      var placeholder1 = stringToPrecomputedChunk('<template id="');
      var placeholder2 = stringToPrecomputedChunk('"></template>');
      function writePlaceholder(destination, responseState, id) {
        writeChunk(destination, placeholder1);
        writeChunk(destination, responseState.placeholderPrefix);
        var formattedID = stringToChunk(id.toString(16));
        writeChunk(destination, formattedID);
        return writeChunkAndReturn(destination, placeholder2);
      }
      var startCompletedSuspenseBoundary = stringToPrecomputedChunk("<!--$-->");
      var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
      var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
      var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk("<!--$!-->");
      var endSuspenseBoundary = stringToPrecomputedChunk("<!--/$-->");
      var clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk("<template");
      var clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"');
      var clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="');
      var clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="');
      var clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="');
      var clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk("></template>");
      function writeStartCompletedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
      }
      function writeStartPendingSuspenseBoundary(destination, responseState, id) {
        writeChunk(destination, startPendingSuspenseBoundary1);
        if (id === null) {
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        }
        writeChunk(destination, id);
        return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
      }
      function writeStartClientRenderedSuspenseBoundary(destination, responseState, errorDigest, errorMesssage, errorComponentStack) {
        var result;
        result = writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
        writeChunk(destination, clientRenderedSuspenseBoundaryError1);
        if (errorDigest) {
          writeChunk(destination, clientRenderedSuspenseBoundaryError1A);
          writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest)));
          writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
        }
        {
          if (errorMesssage) {
            writeChunk(destination, clientRenderedSuspenseBoundaryError1B);
            writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMesssage)));
            writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
          }
          if (errorComponentStack) {
            writeChunk(destination, clientRenderedSuspenseBoundaryError1C);
            writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack)));
            writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial);
          }
        }
        result = writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
        return result;
      }
      function writeEndCompletedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      function writeEndPendingSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
        return writeChunkAndReturn(destination, endSuspenseBoundary);
      }
      var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
      var startSegmentHTML2 = stringToPrecomputedChunk('">');
      var endSegmentHTML = stringToPrecomputedChunk("</div>");
      var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
      var startSegmentSVG2 = stringToPrecomputedChunk('">');
      var endSegmentSVG = stringToPrecomputedChunk("</svg>");
      var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
      var startSegmentMathML2 = stringToPrecomputedChunk('">');
      var endSegmentMathML = stringToPrecomputedChunk("</math>");
      var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
      var startSegmentTable2 = stringToPrecomputedChunk('">');
      var endSegmentTable = stringToPrecomputedChunk("</table>");
      var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
      var startSegmentTableBody2 = stringToPrecomputedChunk('">');
      var endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>");
      var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
      var startSegmentTableRow2 = stringToPrecomputedChunk('">');
      var endSegmentTableRow = stringToPrecomputedChunk("</tr></table>");
      var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
      var startSegmentColGroup2 = stringToPrecomputedChunk('">');
      var endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>");
      function writeStartSegment(destination, responseState, formatContext, id) {
        switch (formatContext.insertionMode) {
          case ROOT_HTML_MODE:
          case HTML_MODE: {
            writeChunk(destination, startSegmentHTML);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentHTML2);
          }
          case SVG_MODE: {
            writeChunk(destination, startSegmentSVG);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentSVG2);
          }
          case MATHML_MODE: {
            writeChunk(destination, startSegmentMathML);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentMathML2);
          }
          case HTML_TABLE_MODE: {
            writeChunk(destination, startSegmentTable);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentTable2);
          }
          case HTML_TABLE_BODY_MODE: {
            writeChunk(destination, startSegmentTableBody);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentTableBody2);
          }
          case HTML_TABLE_ROW_MODE: {
            writeChunk(destination, startSegmentTableRow);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentTableRow2);
          }
          case HTML_COLGROUP_MODE: {
            writeChunk(destination, startSegmentColGroup);
            writeChunk(destination, responseState.segmentPrefix);
            writeChunk(destination, stringToChunk(id.toString(16)));
            return writeChunkAndReturn(destination, startSegmentColGroup2);
          }
          default: {
            throw new Error("Unknown insertion mode. This is a bug in React.");
          }
        }
      }
      function writeEndSegment(destination, formatContext) {
        switch (formatContext.insertionMode) {
          case ROOT_HTML_MODE:
          case HTML_MODE: {
            return writeChunkAndReturn(destination, endSegmentHTML);
          }
          case SVG_MODE: {
            return writeChunkAndReturn(destination, endSegmentSVG);
          }
          case MATHML_MODE: {
            return writeChunkAndReturn(destination, endSegmentMathML);
          }
          case HTML_TABLE_MODE: {
            return writeChunkAndReturn(destination, endSegmentTable);
          }
          case HTML_TABLE_BODY_MODE: {
            return writeChunkAndReturn(destination, endSegmentTableBody);
          }
          case HTML_TABLE_ROW_MODE: {
            return writeChunkAndReturn(destination, endSegmentTableRow);
          }
          case HTML_COLGROUP_MODE: {
            return writeChunkAndReturn(destination, endSegmentColGroup);
          }
          default: {
            throw new Error("Unknown insertion mode. This is a bug in React.");
          }
        }
      }
      var completeSegmentFunction = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}";
      var completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
      var clientRenderFunction = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}';
      var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
      var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
      var completeSegmentScript2 = stringToPrecomputedChunk('","');
      var completeSegmentScript3 = stringToPrecomputedChunk('")<\/script>');
      function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
        writeChunk(destination, responseState.startInlineScript);
        if (!responseState.sentCompleteSegmentFunction) {
          responseState.sentCompleteSegmentFunction = true;
          writeChunk(destination, completeSegmentScript1Full);
        } else {
          writeChunk(destination, completeSegmentScript1Partial);
        }
        writeChunk(destination, responseState.segmentPrefix);
        var formattedID = stringToChunk(contentSegmentID.toString(16));
        writeChunk(destination, formattedID);
        writeChunk(destination, completeSegmentScript2);
        writeChunk(destination, responseState.placeholderPrefix);
        writeChunk(destination, formattedID);
        return writeChunkAndReturn(destination, completeSegmentScript3);
      }
      var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
      var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
      var completeBoundaryScript2 = stringToPrecomputedChunk('","');
      var completeBoundaryScript3 = stringToPrecomputedChunk('")<\/script>');
      function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
        writeChunk(destination, responseState.startInlineScript);
        if (!responseState.sentCompleteBoundaryFunction) {
          responseState.sentCompleteBoundaryFunction = true;
          writeChunk(destination, completeBoundaryScript1Full);
        } else {
          writeChunk(destination, completeBoundaryScript1Partial);
        }
        if (boundaryID === null) {
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        }
        var formattedContentID = stringToChunk(contentSegmentID.toString(16));
        writeChunk(destination, boundaryID);
        writeChunk(destination, completeBoundaryScript2);
        writeChunk(destination, responseState.segmentPrefix);
        writeChunk(destination, formattedContentID);
        return writeChunkAndReturn(destination, completeBoundaryScript3);
      }
      var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
      var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
      var clientRenderScript1A = stringToPrecomputedChunk('"');
      var clientRenderScript2 = stringToPrecomputedChunk(")<\/script>");
      var clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(",");
      function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID, errorDigest, errorMessage, errorComponentStack) {
        writeChunk(destination, responseState.startInlineScript);
        if (!responseState.sentClientRenderFunction) {
          responseState.sentClientRenderFunction = true;
          writeChunk(destination, clientRenderScript1Full);
        } else {
          writeChunk(destination, clientRenderScript1Partial);
        }
        if (boundaryID === null) {
          throw new Error("An ID must have been assigned before we can complete the boundary.");
        }
        writeChunk(destination, boundaryID);
        writeChunk(destination, clientRenderScript1A);
        if (errorDigest || errorMessage || errorComponentStack) {
          writeChunk(destination, clientRenderErrorScriptArgInterstitial);
          writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || "")));
        }
        if (errorMessage || errorComponentStack) {
          writeChunk(destination, clientRenderErrorScriptArgInterstitial);
          writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || "")));
        }
        if (errorComponentStack) {
          writeChunk(destination, clientRenderErrorScriptArgInterstitial);
          writeChunk(destination, stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack)));
        }
        return writeChunkAndReturn(destination, clientRenderScript2);
      }
      var regexForJSStringsInScripts = /[<\u2028\u2029]/g;
      function escapeJSStringsForInstructionScripts(input) {
        var escaped = JSON.stringify(input);
        return escaped.replace(regexForJSStringsInScripts, function(match) {
          switch (match) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default: {
              throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
            }
          }
        });
      }
      var assign = Object.assign;
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_SCOPE_TYPE = Symbol.for("react.scope");
      var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
      var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
      var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for("react.default_value");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) {
          return displayName;
        }
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              if (outerName !== null) {
                return outerName;
              }
              return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return getComponentNameFromType(init(payload));
              } catch (x) {
                return null;
              }
            }
          }
        }
        return null;
      }
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;
          if (disabledDepth === 0) {
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          if (disabledDepth < 0) {
            error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0) {
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          }
          return "\n" + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
          return "";
        }
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current;
          ReactCurrentDispatcher.current = null;
          disableLogs();
        }
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string") {
            var sampleLines = sample.stack.split("\n");
            var controlLines = control.stack.split("\n");
            var s2 = sampleLines.length - 1;
            var c = controlLines.length - 1;
            while (s2 >= 1 && c >= 0 && sampleLines[s2] !== controlLines[c]) {
              c--;
            }
            for (; s2 >= 1 && c >= 0; s2--, c--) {
              if (sampleLines[s2] !== controlLines[c]) {
                if (s2 !== 1 || c !== 1) {
                  do {
                    s2--;
                    c--;
                    if (c < 0 || sampleLines[s2] !== controlLines[c]) {
                      var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                      if (fn.displayName && _frame.includes("<anonymous>")) {
                        _frame = _frame.replace("<anonymous>", fn.displayName);
                      }
                      {
                        if (typeof fn === "function") {
                          componentFrameCache.set(fn, _frame);
                        }
                      }
                      return _frame;
                    }
                  } while (s2 >= 1 && c >= 0);
                }
                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
          if (typeof fn === "function") {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }
      function describeClassComponentFrame(ctor, source, ownerFn) {
        {
          return describeNativeComponentFrame(ctor, true);
        }
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return "";
        }
        if (typeof type === "function") {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }
        if (typeof type === "string") {
          return describeBuiltInComponentFrame(type);
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {
              }
            }
          }
        }
        return "";
      }
      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$1 = ex;
              }
              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
              }
              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }
      var warnedAboutMissingGetChildContext;
      {
        warnedAboutMissingGetChildContext = {};
      }
      var emptyContextObject = {};
      {
        Object.freeze(emptyContextObject);
      }
      function getMaskedContext(type, unmaskedContext) {
        {
          var contextTypes = type.contextTypes;
          if (!contextTypes) {
            return emptyContextObject;
          }
          var context = {};
          for (var key in contextTypes) {
            context[key] = unmaskedContext[key];
          }
          {
            var name = getComponentNameFromType(type) || "Unknown";
            checkPropTypes(contextTypes, context, "context", name);
          }
          return context;
        }
      }
      function processChildContext(instance, type, parentContext, childContextTypes) {
        {
          if (typeof instance.getChildContext !== "function") {
            {
              var componentName = getComponentNameFromType(type) || "Unknown";
              if (!warnedAboutMissingGetChildContext[componentName]) {
                warnedAboutMissingGetChildContext[componentName] = true;
                error("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName);
              }
            }
            return parentContext;
          }
          var childContext = instance.getChildContext();
          for (var contextKey in childContext) {
            if (!(contextKey in childContextTypes)) {
              throw new Error((getComponentNameFromType(type) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
            }
          }
          {
            var name = getComponentNameFromType(type) || "Unknown";
            checkPropTypes(childContextTypes, childContext, "child context", name);
          }
          return assign({}, parentContext, childContext);
        }
      }
      var rendererSigil;
      {
        rendererSigil = {};
      }
      var rootContextSnapshot = null;
      var currentActiveSnapshot = null;
      function popNode(prev) {
        {
          prev.context._currentValue = prev.parentValue;
        }
      }
      function pushNode(next) {
        {
          next.context._currentValue = next.value;
        }
      }
      function popToNearestCommonAncestor(prev, next) {
        if (prev === next) ;
        else {
          popNode(prev);
          var parentPrev = prev.parent;
          var parentNext = next.parent;
          if (parentPrev === null) {
            if (parentNext !== null) {
              throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
            }
          } else {
            if (parentNext === null) {
              throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
            }
            popToNearestCommonAncestor(parentPrev, parentNext);
          }
          pushNode(next);
        }
      }
      function popAllPrevious(prev) {
        popNode(prev);
        var parentPrev = prev.parent;
        if (parentPrev !== null) {
          popAllPrevious(parentPrev);
        }
      }
      function pushAllNext(next) {
        var parentNext = next.parent;
        if (parentNext !== null) {
          pushAllNext(parentNext);
        }
        pushNode(next);
      }
      function popPreviousToCommonLevel(prev, next) {
        popNode(prev);
        var parentPrev = prev.parent;
        if (parentPrev === null) {
          throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        }
        if (parentPrev.depth === next.depth) {
          popToNearestCommonAncestor(parentPrev, next);
        } else {
          popPreviousToCommonLevel(parentPrev, next);
        }
      }
      function popNextToCommonLevel(prev, next) {
        var parentNext = next.parent;
        if (parentNext === null) {
          throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        }
        if (prev.depth === parentNext.depth) {
          popToNearestCommonAncestor(prev, parentNext);
        } else {
          popNextToCommonLevel(prev, parentNext);
        }
        pushNode(next);
      }
      function switchContext(newSnapshot) {
        var prev = currentActiveSnapshot;
        var next = newSnapshot;
        if (prev !== next) {
          if (prev === null) {
            pushAllNext(next);
          } else if (next === null) {
            popAllPrevious(prev);
          } else if (prev.depth === next.depth) {
            popToNearestCommonAncestor(prev, next);
          } else if (prev.depth > next.depth) {
            popPreviousToCommonLevel(prev, next);
          } else {
            popNextToCommonLevel(prev, next);
          }
          currentActiveSnapshot = next;
        }
      }
      function pushProvider(context, nextValue) {
        var prevValue;
        {
          prevValue = context._currentValue;
          context._currentValue = nextValue;
          {
            if (context._currentRenderer !== void 0 && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
              error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
            }
            context._currentRenderer = rendererSigil;
          }
        }
        var prevNode = currentActiveSnapshot;
        var newNode = {
          parent: prevNode,
          depth: prevNode === null ? 0 : prevNode.depth + 1,
          context,
          parentValue: prevValue,
          value: nextValue
        };
        currentActiveSnapshot = newNode;
        return newNode;
      }
      function popProvider(context) {
        var prevSnapshot = currentActiveSnapshot;
        if (prevSnapshot === null) {
          throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
        }
        {
          if (prevSnapshot.context !== context) {
            error("The parent context is not the expected context. This is probably a bug in React.");
          }
        }
        {
          var value = prevSnapshot.parentValue;
          if (value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
            prevSnapshot.context._currentValue = prevSnapshot.context._defaultValue;
          } else {
            prevSnapshot.context._currentValue = value;
          }
          {
            if (context._currentRenderer !== void 0 && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
              error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
            }
            context._currentRenderer = rendererSigil;
          }
        }
        return currentActiveSnapshot = prevSnapshot.parent;
      }
      function getActiveContext() {
        return currentActiveSnapshot;
      }
      function readContext(context) {
        var value = context._currentValue;
        return value;
      }
      function get2(key) {
        return key._reactInternals;
      }
      function set2(key, value) {
        key._reactInternals = value;
      }
      var didWarnAboutNoopUpdateForComponent = {};
      var didWarnAboutDeprecatedWillMount = {};
      var didWarnAboutUninitializedState;
      var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
      var didWarnAboutLegacyLifecyclesAndDerivedState;
      var didWarnAboutUndefinedDerivedState;
      var warnOnUndefinedDerivedState;
      var warnOnInvalidCallback;
      var didWarnAboutDirectlyAssigningPropsToState;
      var didWarnAboutContextTypeAndContextTypes;
      var didWarnAboutInvalidateContextType;
      {
        didWarnAboutUninitializedState = /* @__PURE__ */ new Set();
        didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set();
        didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set();
        didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set();
        didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set();
        didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set();
        didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
        var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
        warnOnInvalidCallback = function(callback, callerName) {
          if (callback === null || typeof callback === "function") {
            return;
          }
          var key = callerName + "_" + callback;
          if (!didWarnOnInvalidCallback.has(key)) {
            didWarnOnInvalidCallback.add(key);
            error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
          }
        };
        warnOnUndefinedDerivedState = function(type, partialState) {
          if (partialState === void 0) {
            var componentName = getComponentNameFromType(type) || "Component";
            if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
              didWarnAboutUndefinedDerivedState.add(componentName);
              error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
            }
          }
        };
      }
      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor;
          var componentName = _constructor && getComponentNameFromType(_constructor) || "ReactClass";
          var warningKey = componentName + "." + callerName;
          if (didWarnAboutNoopUpdateForComponent[warningKey]) {
            return;
          }
          error("%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, callerName, componentName);
          didWarnAboutNoopUpdateForComponent[warningKey] = true;
        }
      }
      var classComponentUpdater = {
        isMounted: function(inst) {
          return false;
        },
        enqueueSetState: function(inst, payload, callback) {
          var internals = get2(inst);
          if (internals.queue === null) {
            warnNoop(inst, "setState");
          } else {
            internals.queue.push(payload);
            {
              if (callback !== void 0 && callback !== null) {
                warnOnInvalidCallback(callback, "setState");
              }
            }
          }
        },
        enqueueReplaceState: function(inst, payload, callback) {
          var internals = get2(inst);
          internals.replace = true;
          internals.queue = [payload];
          {
            if (callback !== void 0 && callback !== null) {
              warnOnInvalidCallback(callback, "setState");
            }
          }
        },
        enqueueForceUpdate: function(inst, callback) {
          var internals = get2(inst);
          if (internals.queue === null) {
            warnNoop(inst, "forceUpdate");
          } else {
            {
              if (callback !== void 0 && callback !== null) {
                warnOnInvalidCallback(callback, "setState");
              }
            }
          }
        }
      };
      function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
        var partialState = getDerivedStateFromProps(nextProps, prevState);
        {
          warnOnUndefinedDerivedState(ctor, partialState);
        }
        var newState = partialState === null || partialState === void 0 ? prevState : assign({}, prevState, partialState);
        return newState;
      }
      function constructClassInstance(ctor, props, maskedLegacyContext) {
        var context = emptyContextObject;
        var contextType = ctor.contextType;
        {
          if ("contextType" in ctor) {
            var isValid2 = (
              // Allow null for conditional declaration
              contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0
            );
            if (!isValid2 && !didWarnAboutInvalidateContextType.has(ctor)) {
              didWarnAboutInvalidateContextType.add(ctor);
              var addendum = "";
              if (contextType === void 0) {
                addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
              } else if (typeof contextType !== "object") {
                addendum = " However, it is set to a " + typeof contextType + ".";
              } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                addendum = " Did you accidentally pass the Context.Provider instead?";
              } else if (contextType._context !== void 0) {
                addendum = " Did you accidentally pass the Context.Consumer instead?";
              } else {
                addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
              }
              error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(ctor) || "Component", addendum);
            }
          }
        }
        if (typeof contextType === "object" && contextType !== null) {
          context = readContext(contextType);
        } else {
          context = maskedLegacyContext;
        }
        var instance = new ctor(props, context);
        {
          if (typeof ctor.getDerivedStateFromProps === "function" && (instance.state === null || instance.state === void 0)) {
            var componentName = getComponentNameFromType(ctor) || "Component";
            if (!didWarnAboutUninitializedState.has(componentName)) {
              didWarnAboutUninitializedState.add(componentName);
              error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
            }
          }
          if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
            var foundWillMountName = null;
            var foundWillReceivePropsName = null;
            var foundWillUpdateName = null;
            if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
              foundWillMountName = "componentWillMount";
            } else if (typeof instance.UNSAFE_componentWillMount === "function") {
              foundWillMountName = "UNSAFE_componentWillMount";
            }
            if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
              foundWillReceivePropsName = "componentWillReceiveProps";
            } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
              foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
            }
            if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
              foundWillUpdateName = "componentWillUpdate";
            } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
              foundWillUpdateName = "UNSAFE_componentWillUpdate";
            }
            if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
              var _componentName = getComponentNameFromType(ctor) || "Component";
              var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
              }
            }
          }
        }
        return instance;
      }
      function checkClassInstance(instance, ctor, newProps) {
        {
          var name = getComponentNameFromType(ctor) || "Component";
          var renderPresent = instance.render;
          if (!renderPresent) {
            if (ctor.prototype && typeof ctor.prototype.render === "function") {
              error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
            } else {
              error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
            }
          }
          if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
            error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
          }
          if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
            error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
          }
          if (instance.propTypes) {
            error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name);
          }
          if (instance.contextType) {
            error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
          }
          {
            if (instance.contextTypes) {
              error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name);
            }
            if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
              didWarnAboutContextTypeAndContextTypes.add(ctor);
              error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
            }
          }
          if (typeof instance.componentShouldUpdate === "function") {
            error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
          }
          if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
            error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(ctor) || "A pure component");
          }
          if (typeof instance.componentDidUnmount === "function") {
            error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
          }
          if (typeof instance.componentDidReceiveProps === "function") {
            error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
          }
          if (typeof instance.componentWillRecieveProps === "function") {
            error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
          }
          if (typeof instance.UNSAFE_componentWillRecieveProps === "function") {
            error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
          }
          var hasMutatedProps = instance.props !== newProps;
          if (instance.props !== void 0 && hasMutatedProps) {
            error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name);
          }
          if (instance.defaultProps) {
            error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
          }
          if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
            didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
            error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(ctor));
          }
          if (typeof instance.getDerivedStateFromProps === "function") {
            error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
          }
          if (typeof instance.getDerivedStateFromError === "function") {
            error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
          }
          if (typeof ctor.getSnapshotBeforeUpdate === "function") {
            error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
          }
          var _state = instance.state;
          if (_state && (typeof _state !== "object" || isArray(_state))) {
            error("%s.state: must be set to an object or null", name);
          }
          if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") {
            error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
          }
        }
      }
      function callComponentWillMount(type, instance) {
        var oldState = instance.state;
        if (typeof instance.componentWillMount === "function") {
          {
            if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
              var componentName = getComponentNameFromType(type) || "Unknown";
              if (!didWarnAboutDeprecatedWillMount[componentName]) {
                warn(
                  // keep this warning in sync with ReactStrictModeWarning.js
                  "componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s",
                  componentName
                );
                didWarnAboutDeprecatedWillMount[componentName] = true;
              }
            }
          }
          instance.componentWillMount();
        }
        if (typeof instance.UNSAFE_componentWillMount === "function") {
          instance.UNSAFE_componentWillMount();
        }
        if (oldState !== instance.state) {
          {
            error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component");
          }
          classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
        }
      }
      function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
        if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
          var oldQueue = internalInstance.queue;
          var oldReplace = internalInstance.replace;
          internalInstance.queue = null;
          internalInstance.replace = false;
          if (oldReplace && oldQueue.length === 1) {
            inst.state = oldQueue[0];
          } else {
            var nextState = oldReplace ? oldQueue[0] : inst.state;
            var dontMutate = true;
            for (var i2 = oldReplace ? 1 : 0; i2 < oldQueue.length; i2++) {
              var partial = oldQueue[i2];
              var partialState = typeof partial === "function" ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;
              if (partialState != null) {
                if (dontMutate) {
                  dontMutate = false;
                  nextState = assign({}, nextState, partialState);
                } else {
                  assign(nextState, partialState);
                }
              }
            }
            inst.state = nextState;
          }
        } else {
          internalInstance.queue = null;
        }
      }
      function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
        {
          checkClassInstance(instance, ctor, newProps);
        }
        var initialState = instance.state !== void 0 ? instance.state : null;
        instance.updater = classComponentUpdater;
        instance.props = newProps;
        instance.state = initialState;
        var internalInstance = {
          queue: [],
          replace: false
        };
        set2(instance, internalInstance);
        var contextType = ctor.contextType;
        if (typeof contextType === "object" && contextType !== null) {
          instance.context = readContext(contextType);
        } else {
          instance.context = maskedLegacyContext;
        }
        {
          if (instance.state === newProps) {
            var componentName = getComponentNameFromType(ctor) || "Component";
            if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
              didWarnAboutDirectlyAssigningPropsToState.add(componentName);
              error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
            }
          }
        }
        var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
        if (typeof getDerivedStateFromProps === "function") {
          instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
        }
        if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
          callComponentWillMount(ctor, instance);
          processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
        }
      }
      var emptyTreeContext = {
        id: 1,
        overflow: ""
      };
      function getTreeId(context) {
        var overflow = context.overflow;
        var idWithLeadingBit = context.id;
        var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
        return id.toString(32) + overflow;
      }
      function pushTreeContext(baseContext, totalChildren, index) {
        var baseIdWithLeadingBit = baseContext.id;
        var baseOverflow = baseContext.overflow;
        var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
        var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
        var slot = index + 1;
        var length = getBitLength(totalChildren) + baseLength;
        if (length > 30) {
          var numberOfOverflowBits = baseLength - baseLength % 5;
          var newOverflowBits = (1 << numberOfOverflowBits) - 1;
          var newOverflow = (baseId & newOverflowBits).toString(32);
          var restOfBaseId = baseId >> numberOfOverflowBits;
          var restOfBaseLength = baseLength - numberOfOverflowBits;
          var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
          var restOfNewBits = slot << restOfBaseLength;
          var id = restOfNewBits | restOfBaseId;
          var overflow = newOverflow + baseOverflow;
          return {
            id: 1 << restOfLength | id,
            overflow
          };
        } else {
          var newBits = slot << baseLength;
          var _id = newBits | baseId;
          var _overflow = baseOverflow;
          return {
            id: 1 << length | _id,
            overflow: _overflow
          };
        }
      }
      function getBitLength(number) {
        return 32 - clz32(number);
      }
      function getLeadingBit(id) {
        return 1 << getBitLength(id) - 1;
      }
      var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
      var log = Math.log;
      var LN2 = Math.LN2;
      function clz32Fallback(x) {
        var asUint = x >>> 0;
        if (asUint === 0) {
          return 32;
        }
        return 31 - (log(asUint) / LN2 | 0) | 0;
      }
      function is(x, y) {
        return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
      }
      var objectIs = typeof Object.is === "function" ? Object.is : is;
      var currentlyRenderingComponent = null;
      var currentlyRenderingTask = null;
      var firstWorkInProgressHook = null;
      var workInProgressHook = null;
      var isReRender = false;
      var didScheduleRenderPhaseUpdate = false;
      var localIdCounter = 0;
      var renderPhaseUpdates = null;
      var numberOfReRenders = 0;
      var RE_RENDER_LIMIT = 25;
      var isInHookUserCodeInDev = false;
      var currentHookNameInDev;
      function resolveCurrentlyRenderingComponent() {
        if (currentlyRenderingComponent === null) {
          throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        }
        {
          if (isInHookUserCodeInDev) {
            error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
          }
        }
        return currentlyRenderingComponent;
      }
      function areHookInputsEqual(nextDeps, prevDeps) {
        if (prevDeps === null) {
          {
            error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
          }
          return false;
        }
        {
          if (nextDeps.length !== prevDeps.length) {
            error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
          }
        }
        for (var i2 = 0; i2 < prevDeps.length && i2 < nextDeps.length; i2++) {
          if (objectIs(nextDeps[i2], prevDeps[i2])) {
            continue;
          }
          return false;
        }
        return true;
      }
      function createHook() {
        if (numberOfReRenders > 0) {
          throw new Error("Rendered more hooks than during the previous render");
        }
        return {
          memoizedState: null,
          queue: null,
          next: null
        };
      }
      function createWorkInProgressHook() {
        if (workInProgressHook === null) {
          if (firstWorkInProgressHook === null) {
            isReRender = false;
            firstWorkInProgressHook = workInProgressHook = createHook();
          } else {
            isReRender = true;
            workInProgressHook = firstWorkInProgressHook;
          }
        } else {
          if (workInProgressHook.next === null) {
            isReRender = false;
            workInProgressHook = workInProgressHook.next = createHook();
          } else {
            isReRender = true;
            workInProgressHook = workInProgressHook.next;
          }
        }
        return workInProgressHook;
      }
      function prepareToUseHooks(task, componentIdentity) {
        currentlyRenderingComponent = componentIdentity;
        currentlyRenderingTask = task;
        {
          isInHookUserCodeInDev = false;
        }
        localIdCounter = 0;
      }
      function finishHooks(Component, props, children, refOrContext) {
        while (didScheduleRenderPhaseUpdate) {
          didScheduleRenderPhaseUpdate = false;
          localIdCounter = 0;
          numberOfReRenders += 1;
          workInProgressHook = null;
          children = Component(props, refOrContext);
        }
        resetHooksState();
        return children;
      }
      function checkDidRenderIdHook() {
        var didRenderIdHook = localIdCounter !== 0;
        return didRenderIdHook;
      }
      function resetHooksState() {
        {
          isInHookUserCodeInDev = false;
        }
        currentlyRenderingComponent = null;
        currentlyRenderingTask = null;
        didScheduleRenderPhaseUpdate = false;
        firstWorkInProgressHook = null;
        numberOfReRenders = 0;
        renderPhaseUpdates = null;
        workInProgressHook = null;
      }
      function readContext$1(context) {
        {
          if (isInHookUserCodeInDev) {
            error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          }
        }
        return readContext(context);
      }
      function useContext(context) {
        {
          currentHookNameInDev = "useContext";
        }
        resolveCurrentlyRenderingComponent();
        return readContext(context);
      }
      function basicStateReducer(state, action2) {
        return typeof action2 === "function" ? action2(state) : action2;
      }
      function useState(initialState) {
        {
          currentHookNameInDev = "useState";
        }
        return useReducer(
          basicStateReducer,
          // useReducer has a special case to support lazy useState initializers
          initialState
        );
      }
      function useReducer(reducer, initialArg, init) {
        {
          if (reducer !== basicStateReducer) {
            currentHookNameInDev = "useReducer";
          }
        }
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        if (isReRender) {
          var queue = workInProgressHook.queue;
          var dispatch = queue.dispatch;
          if (renderPhaseUpdates !== null) {
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
            if (firstRenderPhaseUpdate !== void 0) {
              renderPhaseUpdates.delete(queue);
              var newState = workInProgressHook.memoizedState;
              var update = firstRenderPhaseUpdate;
              do {
                var action2 = update.action;
                {
                  isInHookUserCodeInDev = true;
                }
                newState = reducer(newState, action2);
                {
                  isInHookUserCodeInDev = false;
                }
                update = update.next;
              } while (update !== null);
              workInProgressHook.memoizedState = newState;
              return [newState, dispatch];
            }
          }
          return [workInProgressHook.memoizedState, dispatch];
        } else {
          {
            isInHookUserCodeInDev = true;
          }
          var initialState;
          if (reducer === basicStateReducer) {
            initialState = typeof initialArg === "function" ? initialArg() : initialArg;
          } else {
            initialState = init !== void 0 ? init(initialArg) : initialArg;
          }
          {
            isInHookUserCodeInDev = false;
          }
          workInProgressHook.memoizedState = initialState;
          var _queue = workInProgressHook.queue = {
            last: null,
            dispatch: null
          };
          var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
          return [workInProgressHook.memoizedState, _dispatch];
        }
      }
      function useMemo(nextCreate, deps) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        var nextDeps = deps === void 0 ? null : deps;
        if (workInProgressHook !== null) {
          var prevState = workInProgressHook.memoizedState;
          if (prevState !== null) {
            if (nextDeps !== null) {
              var prevDeps = prevState[1];
              if (areHookInputsEqual(nextDeps, prevDeps)) {
                return prevState[0];
              }
            }
          }
        }
        {
          isInHookUserCodeInDev = true;
        }
        var nextValue = nextCreate();
        {
          isInHookUserCodeInDev = false;
        }
        workInProgressHook.memoizedState = [nextValue, nextDeps];
        return nextValue;
      }
      function useRef(initialValue) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        var previousRef = workInProgressHook.memoizedState;
        if (previousRef === null) {
          var ref = {
            current: initialValue
          };
          {
            Object.seal(ref);
          }
          workInProgressHook.memoizedState = ref;
          return ref;
        } else {
          return previousRef;
        }
      }
      function useLayoutEffect(create, inputs) {
        {
          currentHookNameInDev = "useLayoutEffect";
          error("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
        }
      }
      function dispatchAction(componentIdentity, queue, action2) {
        if (numberOfReRenders >= RE_RENDER_LIMIT) {
          throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        }
        if (componentIdentity === currentlyRenderingComponent) {
          didScheduleRenderPhaseUpdate = true;
          var update = {
            action: action2,
            next: null
          };
          if (renderPhaseUpdates === null) {
            renderPhaseUpdates = /* @__PURE__ */ new Map();
          }
          var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
          if (firstRenderPhaseUpdate === void 0) {
            renderPhaseUpdates.set(queue, update);
          } else {
            var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
            while (lastRenderPhaseUpdate.next !== null) {
              lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
            }
            lastRenderPhaseUpdate.next = update;
          }
        }
      }
      function useCallback(callback, deps) {
        return useMemo(function() {
          return callback;
        }, deps);
      }
      function useMutableSource(source, getSnapshot, subscribe) {
        resolveCurrentlyRenderingComponent();
        return getSnapshot(source._source);
      }
      function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        if (getServerSnapshot === void 0) {
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        }
        return getServerSnapshot();
      }
      function useDeferredValue(value) {
        resolveCurrentlyRenderingComponent();
        return value;
      }
      function unsupportedStartTransition() {
        throw new Error("startTransition cannot be called during server rendering.");
      }
      function useTransition() {
        resolveCurrentlyRenderingComponent();
        return [false, unsupportedStartTransition];
      }
      function useId() {
        var task = currentlyRenderingTask;
        var treeId = getTreeId(task.treeContext);
        var responseState = currentResponseState;
        if (responseState === null) {
          throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
        }
        var localId = localIdCounter++;
        return makeId(responseState, treeId, localId);
      }
      function noop() {
      }
      var Dispatcher = {
        readContext: readContext$1,
        useContext,
        useMemo,
        useReducer,
        useRef,
        useState,
        useInsertionEffect: noop,
        useLayoutEffect,
        useCallback,
        // useImperativeHandle is not run in the server environment
        useImperativeHandle: noop,
        // Effects are not run in the server environment.
        useEffect: noop,
        // Debugging effect
        useDebugValue: noop,
        useDeferredValue,
        useTransition,
        useId,
        // Subscriptions are not setup in a server environment.
        useMutableSource,
        useSyncExternalStore
      };
      var currentResponseState = null;
      function setCurrentResponseState(responseState) {
        currentResponseState = responseState;
      }
      function getStackByComponentStackNode(componentStack) {
        try {
          var info = "";
          var node = componentStack;
          do {
            switch (node.tag) {
              case 0:
                info += describeBuiltInComponentFrame(node.type, null, null);
                break;
              case 1:
                info += describeFunctionComponentFrame(node.type, null, null);
                break;
              case 2:
                info += describeClassComponentFrame(node.type, null, null);
                break;
            }
            node = node.parent;
          } while (node);
          return info;
        } catch (x) {
          return "\nError generating stack: " + x.message + "\n" + x.stack;
        }
      }
      var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      var PENDING = 0;
      var COMPLETED = 1;
      var FLUSHED = 2;
      var ABORTED = 3;
      var ERRORED = 4;
      var OPEN = 0;
      var CLOSING = 1;
      var CLOSED = 2;
      var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
      function defaultErrorHandler(error2) {
        console["error"](error2);
        return null;
      }
      function noop$1() {
      }
      function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError) {
        var pingedTasks = [];
        var abortSet = /* @__PURE__ */ new Set();
        var request = {
          destination: null,
          responseState,
          progressiveChunkSize: progressiveChunkSize === void 0 ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
          status: OPEN,
          fatalError: null,
          nextSegmentId: 0,
          allPendingTasks: 0,
          pendingRootTasks: 0,
          completedRootSegment: null,
          abortableTasks: abortSet,
          pingedTasks,
          clientRenderedBoundaries: [],
          completedBoundaries: [],
          partialBoundaries: [],
          onError: onError === void 0 ? defaultErrorHandler : onError,
          onAllReady: onAllReady === void 0 ? noop$1 : onAllReady,
          onShellReady: onShellReady === void 0 ? noop$1 : onShellReady,
          onShellError: onShellError === void 0 ? noop$1 : onShellError,
          onFatalError: noop$1
        };
        var rootSegment = createPendingSegment(
          request,
          0,
          null,
          rootFormatContext,
          // Root segments are never embedded in Text on either edge
          false,
          false
        );
        rootSegment.parentFlushed = true;
        var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
        pingedTasks.push(rootTask);
        return request;
      }
      function pingTask(request, task) {
        var pingedTasks = request.pingedTasks;
        pingedTasks.push(task);
        if (pingedTasks.length === 1) {
          scheduleWork(function() {
            return performWork(request);
          });
        }
      }
      function createSuspenseBoundary(request, fallbackAbortableTasks) {
        return {
          id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
          rootSegmentID: -1,
          parentFlushed: false,
          pendingTasks: 0,
          forceClientRender: false,
          completedSegments: [],
          byteSize: 0,
          fallbackAbortableTasks,
          errorDigest: null
        };
      }
      function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
        request.allPendingTasks++;
        if (blockedBoundary === null) {
          request.pendingRootTasks++;
        } else {
          blockedBoundary.pendingTasks++;
        }
        var task = {
          node,
          ping: function() {
            return pingTask(request, task);
          },
          blockedBoundary,
          blockedSegment,
          abortSet,
          legacyContext,
          context,
          treeContext
        };
        {
          task.componentStack = null;
        }
        abortSet.add(task);
        return task;
      }
      function createPendingSegment(request, index, boundary, formatContext, lastPushedText, textEmbedded) {
        return {
          status: PENDING,
          id: -1,
          // lazily assigned later
          index,
          parentFlushed: false,
          chunks: [],
          children: [],
          formatContext,
          boundary,
          lastPushedText,
          textEmbedded
        };
      }
      var currentTaskInDEV = null;
      function getCurrentStackInDEV() {
        {
          if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
            return "";
          }
          return getStackByComponentStackNode(currentTaskInDEV.componentStack);
        }
      }
      function pushBuiltInComponentStackInDEV(task, type) {
        {
          task.componentStack = {
            tag: 0,
            parent: task.componentStack,
            type
          };
        }
      }
      function pushFunctionComponentStackInDEV(task, type) {
        {
          task.componentStack = {
            tag: 1,
            parent: task.componentStack,
            type
          };
        }
      }
      function pushClassComponentStackInDEV(task, type) {
        {
          task.componentStack = {
            tag: 2,
            parent: task.componentStack,
            type
          };
        }
      }
      function popComponentStackInDEV(task) {
        {
          if (task.componentStack === null) {
            error("Unexpectedly popped too many stack frames. This is a bug in React.");
          } else {
            task.componentStack = task.componentStack.parent;
          }
        }
      }
      var lastBoundaryErrorComponentStackDev = null;
      function captureBoundaryErrorDetailsDev(boundary, error2) {
        {
          var errorMessage;
          if (typeof error2 === "string") {
            errorMessage = error2;
          } else if (error2 && typeof error2.message === "string") {
            errorMessage = error2.message;
          } else {
            errorMessage = String(error2);
          }
          var errorComponentStack = lastBoundaryErrorComponentStackDev || getCurrentStackInDEV();
          lastBoundaryErrorComponentStackDev = null;
          boundary.errorMessage = errorMessage;
          boundary.errorComponentStack = errorComponentStack;
        }
      }
      function logRecoverableError(request, error2) {
        var errorDigest = request.onError(error2);
        if (errorDigest != null && typeof errorDigest !== "string") {
          throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof errorDigest + '" instead');
        }
        return errorDigest;
      }
      function fatalError(request, error2) {
        var onShellError = request.onShellError;
        onShellError(error2);
        var onFatalError = request.onFatalError;
        onFatalError(error2);
        if (request.destination !== null) {
          request.status = CLOSED;
          closeWithError(request.destination, error2);
        } else {
          request.status = CLOSING;
          request.fatalError = error2;
        }
      }
      function renderSuspenseBoundary(request, task, props) {
        pushBuiltInComponentStackInDEV(task, "Suspense");
        var parentBoundary = task.blockedBoundary;
        var parentSegment = task.blockedSegment;
        var fallback = props.fallback;
        var content = props.children;
        var fallbackAbortSet = /* @__PURE__ */ new Set();
        var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
        var insertionIndex = parentSegment.chunks.length;
        var boundarySegment = createPendingSegment(
          request,
          insertionIndex,
          newBoundary,
          parentSegment.formatContext,
          // boundaries never require text embedding at their edges because comment nodes bound them
          false,
          false
        );
        parentSegment.children.push(boundarySegment);
        parentSegment.lastPushedText = false;
        var contentRootSegment = createPendingSegment(
          request,
          0,
          null,
          parentSegment.formatContext,
          // boundaries never require text embedding at their edges because comment nodes bound them
          false,
          false
        );
        contentRootSegment.parentFlushed = true;
        task.blockedBoundary = newBoundary;
        task.blockedSegment = contentRootSegment;
        try {
          renderNode(request, task, content);
          pushSegmentFinale(contentRootSegment.chunks, request.responseState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded);
          contentRootSegment.status = COMPLETED;
          queueCompletedSegment(newBoundary, contentRootSegment);
          if (newBoundary.pendingTasks === 0) {
            popComponentStackInDEV(task);
            return;
          }
        } catch (error2) {
          contentRootSegment.status = ERRORED;
          newBoundary.forceClientRender = true;
          newBoundary.errorDigest = logRecoverableError(request, error2);
          {
            captureBoundaryErrorDetailsDev(newBoundary, error2);
          }
        } finally {
          task.blockedBoundary = parentBoundary;
          task.blockedSegment = parentSegment;
        }
        var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);
        {
          suspendedFallbackTask.componentStack = task.componentStack;
        }
        request.pingedTasks.push(suspendedFallbackTask);
        popComponentStackInDEV(task);
      }
      function renderHostElement(request, task, type, props) {
        pushBuiltInComponentStackInDEV(task, type);
        var segment = task.blockedSegment;
        var children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
        segment.lastPushedText = false;
        var prevContext = segment.formatContext;
        segment.formatContext = getChildFormatContext(prevContext, type, props);
        renderNode(request, task, children);
        segment.formatContext = prevContext;
        pushEndInstance(segment.chunks, type);
        segment.lastPushedText = false;
        popComponentStackInDEV(task);
      }
      function shouldConstruct$1(Component) {
        return Component.prototype && Component.prototype.isReactComponent;
      }
      function renderWithHooks(request, task, Component, props, secondArg) {
        var componentIdentity = {};
        prepareToUseHooks(task, componentIdentity);
        var result = Component(props, secondArg);
        return finishHooks(Component, props, result, secondArg);
      }
      function finishClassComponent(request, task, instance, Component, props) {
        var nextChildren = instance.render();
        {
          if (instance.props !== props) {
            if (!didWarnAboutReassigningProps) {
              error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(Component) || "a component");
            }
            didWarnAboutReassigningProps = true;
          }
        }
        {
          var childContextTypes = Component.childContextTypes;
          if (childContextTypes !== null && childContextTypes !== void 0) {
            var previousContext = task.legacyContext;
            var mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
            task.legacyContext = mergedContext;
            renderNodeDestructive(request, task, nextChildren);
            task.legacyContext = previousContext;
            return;
          }
        }
        renderNodeDestructive(request, task, nextChildren);
      }
      function renderClassComponent(request, task, Component, props) {
        pushClassComponentStackInDEV(task, Component);
        var maskedContext = getMaskedContext(Component, task.legacyContext);
        var instance = constructClassInstance(Component, props, maskedContext);
        mountClassInstance(instance, Component, props, maskedContext);
        finishClassComponent(request, task, instance, Component, props);
        popComponentStackInDEV(task);
      }
      var didWarnAboutBadClass = {};
      var didWarnAboutModulePatternComponent = {};
      var didWarnAboutContextTypeOnFunctionComponent = {};
      var didWarnAboutGetDerivedStateOnFunctionComponent = {};
      var didWarnAboutReassigningProps = false;
      var didWarnAboutDefaultPropsOnFunctionComponent = {};
      var didWarnAboutGenerators = false;
      var didWarnAboutMaps = false;
      var hasWarnedAboutUsingContextAsConsumer = false;
      function renderIndeterminateComponent(request, task, Component, props) {
        var legacyContext;
        {
          legacyContext = getMaskedContext(Component, task.legacyContext);
        }
        pushFunctionComponentStackInDEV(task, Component);
        {
          if (Component.prototype && typeof Component.prototype.render === "function") {
            var componentName = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutBadClass[componentName]) {
              error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
              didWarnAboutBadClass[componentName] = true;
            }
          }
        }
        var value = renderWithHooks(request, task, Component, props, legacyContext);
        var hasId = checkDidRenderIdHook();
        {
          if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
            var _componentName = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutModulePatternComponent[_componentName]) {
              error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
              didWarnAboutModulePatternComponent[_componentName] = true;
            }
          }
        }
        if (
          // Run these checks in production only if the flag is off.
          // Eventually we'll delete this branch altogether.
          typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0
        ) {
          {
            var _componentName2 = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutModulePatternComponent[_componentName2]) {
              error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
              didWarnAboutModulePatternComponent[_componentName2] = true;
            }
          }
          mountClassInstance(value, Component, props, legacyContext);
          finishClassComponent(request, task, value, Component, props);
        } else {
          {
            validateFunctionComponentInDev(Component);
          }
          if (hasId) {
            var prevTreeContext = task.treeContext;
            var totalChildren = 1;
            var index = 0;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
            try {
              renderNodeDestructive(request, task, value);
            } finally {
              task.treeContext = prevTreeContext;
            }
          } else {
            renderNodeDestructive(request, task, value);
          }
        }
        popComponentStackInDEV(task);
      }
      function validateFunctionComponentInDev(Component) {
        {
          if (Component) {
            if (Component.childContextTypes) {
              error("%s(...): childContextTypes cannot be defined on a function component.", Component.displayName || Component.name || "Component");
            }
          }
          if (Component.defaultProps !== void 0) {
            var componentName = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutDefaultPropsOnFunctionComponent[componentName]) {
              error("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", componentName);
              didWarnAboutDefaultPropsOnFunctionComponent[componentName] = true;
            }
          }
          if (typeof Component.getDerivedStateFromProps === "function") {
            var _componentName3 = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
              error("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
              didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
            }
          }
          if (typeof Component.contextType === "object" && Component.contextType !== null) {
            var _componentName4 = getComponentNameFromType(Component) || "Unknown";
            if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
              error("%s: Function components do not support contextType.", _componentName4);
              didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
            }
          }
        }
      }
      function resolveDefaultProps(Component, baseProps) {
        if (Component && Component.defaultProps) {
          var props = assign({}, baseProps);
          var defaultProps = Component.defaultProps;
          for (var propName in defaultProps) {
            if (props[propName] === void 0) {
              props[propName] = defaultProps[propName];
            }
          }
          return props;
        }
        return baseProps;
      }
      function renderForwardRef(request, task, type, props, ref) {
        pushFunctionComponentStackInDEV(task, type.render);
        var children = renderWithHooks(request, task, type.render, props, ref);
        var hasId = checkDidRenderIdHook();
        if (hasId) {
          var prevTreeContext = task.treeContext;
          var totalChildren = 1;
          var index = 0;
          task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
          try {
            renderNodeDestructive(request, task, children);
          } finally {
            task.treeContext = prevTreeContext;
          }
        } else {
          renderNodeDestructive(request, task, children);
        }
        popComponentStackInDEV(task);
      }
      function renderMemo(request, task, type, props, ref) {
        var innerType = type.type;
        var resolvedProps = resolveDefaultProps(innerType, props);
        renderElement(request, task, innerType, resolvedProps, ref);
      }
      function renderContextConsumer(request, task, context, props) {
        {
          if (context._context === void 0) {
            if (context !== context.Consumer) {
              if (!hasWarnedAboutUsingContextAsConsumer) {
                hasWarnedAboutUsingContextAsConsumer = true;
                error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
              }
            }
          } else {
            context = context._context;
          }
        }
        var render = props.children;
        {
          if (typeof render !== "function") {
            error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
          }
        }
        var newValue = readContext(context);
        var newChildren = render(newValue);
        renderNodeDestructive(request, task, newChildren);
      }
      function renderContextProvider(request, task, type, props) {
        var context = type._context;
        var value = props.value;
        var children = props.children;
        var prevSnapshot;
        {
          prevSnapshot = task.context;
        }
        task.context = pushProvider(context, value);
        renderNodeDestructive(request, task, children);
        task.context = popProvider(context);
        {
          if (prevSnapshot !== task.context) {
            error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
          }
        }
      }
      function renderLazyComponent(request, task, lazyComponent, props, ref) {
        pushBuiltInComponentStackInDEV(task, "Lazy");
        var payload = lazyComponent._payload;
        var init = lazyComponent._init;
        var Component = init(payload);
        var resolvedProps = resolveDefaultProps(Component, props);
        renderElement(request, task, Component, resolvedProps, ref);
        popComponentStackInDEV(task);
      }
      function renderElement(request, task, type, props, ref) {
        if (typeof type === "function") {
          if (shouldConstruct$1(type)) {
            renderClassComponent(request, task, type, props);
            return;
          } else {
            renderIndeterminateComponent(request, task, type, props);
            return;
          }
        }
        if (typeof type === "string") {
          renderHostElement(request, task, type, props);
          return;
        }
        switch (type) {
          case REACT_LEGACY_HIDDEN_TYPE:
          case REACT_DEBUG_TRACING_MODE_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_FRAGMENT_TYPE: {
            renderNodeDestructive(request, task, props.children);
            return;
          }
          case REACT_SUSPENSE_LIST_TYPE: {
            pushBuiltInComponentStackInDEV(task, "SuspenseList");
            renderNodeDestructive(request, task, props.children);
            popComponentStackInDEV(task);
            return;
          }
          case REACT_SCOPE_TYPE: {
            throw new Error("ReactDOMServer does not yet support scope components.");
          }
          case REACT_SUSPENSE_TYPE: {
            {
              renderSuspenseBoundary(request, task, props);
            }
            return;
          }
        }
        if (typeof type === "object" && type !== null) {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE: {
              renderForwardRef(request, task, type, props, ref);
              return;
            }
            case REACT_MEMO_TYPE: {
              renderMemo(request, task, type, props, ref);
              return;
            }
            case REACT_PROVIDER_TYPE: {
              renderContextProvider(request, task, type, props);
              return;
            }
            case REACT_CONTEXT_TYPE: {
              renderContextConsumer(request, task, type, props);
              return;
            }
            case REACT_LAZY_TYPE: {
              renderLazyComponent(request, task, type, props);
              return;
            }
          }
        }
        var info = "";
        {
          if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
            info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          }
        }
        throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (type == null ? type : typeof type) + "." + info));
      }
      function validateIterable(iterable, iteratorFn) {
        {
          if (typeof Symbol === "function" && // $FlowFixMe Flow doesn't know about toStringTag
          iterable[Symbol.toStringTag] === "Generator") {
            if (!didWarnAboutGenerators) {
              error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
            }
            didWarnAboutGenerators = true;
          }
          if (iterable.entries === iteratorFn) {
            if (!didWarnAboutMaps) {
              error("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
            }
            didWarnAboutMaps = true;
          }
        }
      }
      function renderNodeDestructive(request, task, node) {
        {
          try {
            return renderNodeDestructiveImpl(request, task, node);
          } catch (x) {
            if (typeof x === "object" && x !== null && typeof x.then === "function") ;
            else {
              lastBoundaryErrorComponentStackDev = lastBoundaryErrorComponentStackDev !== null ? lastBoundaryErrorComponentStackDev : getCurrentStackInDEV();
            }
            throw x;
          }
        }
      }
      function renderNodeDestructiveImpl(request, task, node) {
        task.node = node;
        if (typeof node === "object" && node !== null) {
          switch (node.$$typeof) {
            case REACT_ELEMENT_TYPE: {
              var element = node;
              var type = element.type;
              var props = element.props;
              var ref = element.ref;
              renderElement(request, task, type, props, ref);
              return;
            }
            case REACT_PORTAL_TYPE:
              throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
            case REACT_LAZY_TYPE: {
              var lazyNode = node;
              var payload = lazyNode._payload;
              var init = lazyNode._init;
              var resolvedNode;
              {
                try {
                  resolvedNode = init(payload);
                } catch (x) {
                  if (typeof x === "object" && x !== null && typeof x.then === "function") {
                    pushBuiltInComponentStackInDEV(task, "Lazy");
                  }
                  throw x;
                }
              }
              renderNodeDestructive(request, task, resolvedNode);
              return;
            }
          }
          if (isArray(node)) {
            renderChildrenArray(request, task, node);
            return;
          }
          var iteratorFn = getIteratorFn(node);
          if (iteratorFn) {
            {
              validateIterable(node, iteratorFn);
            }
            var iterator = iteratorFn.call(node);
            if (iterator) {
              var step = iterator.next();
              if (!step.done) {
                var children = [];
                do {
                  children.push(step.value);
                  step = iterator.next();
                } while (!step.done);
                renderChildrenArray(request, task, children);
                return;
              }
              return;
            }
          }
          var childString = Object.prototype.toString.call(node);
          throw new Error("Objects are not valid as a React child (found: " + (childString === "[object Object]" ? "object with keys {" + Object.keys(node).join(", ") + "}" : childString) + "). If you meant to render a collection of children, use an array instead.");
        }
        if (typeof node === "string") {
          var segment = task.blockedSegment;
          segment.lastPushedText = pushTextInstance(task.blockedSegment.chunks, node, request.responseState, segment.lastPushedText);
          return;
        }
        if (typeof node === "number") {
          var _segment = task.blockedSegment;
          _segment.lastPushedText = pushTextInstance(task.blockedSegment.chunks, "" + node, request.responseState, _segment.lastPushedText);
          return;
        }
        {
          if (typeof node === "function") {
            error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
          }
        }
      }
      function renderChildrenArray(request, task, children) {
        var totalChildren = children.length;
        for (var i2 = 0; i2 < totalChildren; i2++) {
          var prevTreeContext = task.treeContext;
          task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i2);
          try {
            renderNode(request, task, children[i2]);
          } finally {
            task.treeContext = prevTreeContext;
          }
        }
      }
      function spawnNewSuspendedTask(request, task, x) {
        var segment = task.blockedSegment;
        var insertionIndex = segment.chunks.length;
        var newSegment = createPendingSegment(
          request,
          insertionIndex,
          null,
          segment.formatContext,
          // Adopt the parent segment's leading text embed
          segment.lastPushedText,
          // Assume we are text embedded at the trailing edge
          true
        );
        segment.children.push(newSegment);
        segment.lastPushedText = false;
        var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);
        {
          if (task.componentStack !== null) {
            newTask.componentStack = task.componentStack.parent;
          }
        }
        var ping = newTask.ping;
        x.then(ping, ping);
      }
      function renderNode(request, task, node) {
        var previousFormatContext = task.blockedSegment.formatContext;
        var previousLegacyContext = task.legacyContext;
        var previousContext = task.context;
        var previousComponentStack = null;
        {
          previousComponentStack = task.componentStack;
        }
        try {
          return renderNodeDestructive(request, task, node);
        } catch (x) {
          resetHooksState();
          if (typeof x === "object" && x !== null && typeof x.then === "function") {
            spawnNewSuspendedTask(request, task, x);
            task.blockedSegment.formatContext = previousFormatContext;
            task.legacyContext = previousLegacyContext;
            task.context = previousContext;
            switchContext(previousContext);
            {
              task.componentStack = previousComponentStack;
            }
            return;
          } else {
            task.blockedSegment.formatContext = previousFormatContext;
            task.legacyContext = previousLegacyContext;
            task.context = previousContext;
            switchContext(previousContext);
            {
              task.componentStack = previousComponentStack;
            }
            throw x;
          }
        }
      }
      function erroredTask(request, boundary, segment, error2) {
        var errorDigest = logRecoverableError(request, error2);
        if (boundary === null) {
          fatalError(request, error2);
        } else {
          boundary.pendingTasks--;
          if (!boundary.forceClientRender) {
            boundary.forceClientRender = true;
            boundary.errorDigest = errorDigest;
            {
              captureBoundaryErrorDetailsDev(boundary, error2);
            }
            if (boundary.parentFlushed) {
              request.clientRenderedBoundaries.push(boundary);
            }
          }
        }
        request.allPendingTasks--;
        if (request.allPendingTasks === 0) {
          var onAllReady = request.onAllReady;
          onAllReady();
        }
      }
      function abortTaskSoft(task) {
        var request = this;
        var boundary = task.blockedBoundary;
        var segment = task.blockedSegment;
        segment.status = ABORTED;
        finishedTask(request, boundary, segment);
      }
      function abortTask(task, request, reason) {
        var boundary = task.blockedBoundary;
        var segment = task.blockedSegment;
        segment.status = ABORTED;
        if (boundary === null) {
          request.allPendingTasks--;
          if (request.status !== CLOSED) {
            request.status = CLOSED;
            if (request.destination !== null) {
              close(request.destination);
            }
          }
        } else {
          boundary.pendingTasks--;
          if (!boundary.forceClientRender) {
            boundary.forceClientRender = true;
            var _error = reason === void 0 ? new Error("The render was aborted by the server without a reason.") : reason;
            boundary.errorDigest = request.onError(_error);
            {
              var errorPrefix = "The server did not finish this Suspense boundary: ";
              if (_error && typeof _error.message === "string") {
                _error = errorPrefix + _error.message;
              } else {
                _error = errorPrefix + String(_error);
              }
              var previousTaskInDev = currentTaskInDEV;
              currentTaskInDEV = task;
              try {
                captureBoundaryErrorDetailsDev(boundary, _error);
              } finally {
                currentTaskInDEV = previousTaskInDev;
              }
            }
            if (boundary.parentFlushed) {
              request.clientRenderedBoundaries.push(boundary);
            }
          }
          boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
            return abortTask(fallbackTask, request, reason);
          });
          boundary.fallbackAbortableTasks.clear();
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
      }
      function queueCompletedSegment(boundary, segment) {
        if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
          var childSegment = segment.children[0];
          childSegment.id = segment.id;
          childSegment.parentFlushed = true;
          if (childSegment.status === COMPLETED) {
            queueCompletedSegment(boundary, childSegment);
          }
        } else {
          var completedSegments = boundary.completedSegments;
          completedSegments.push(segment);
        }
      }
      function finishedTask(request, boundary, segment) {
        if (boundary === null) {
          if (segment.parentFlushed) {
            if (request.completedRootSegment !== null) {
              throw new Error("There can only be one root segment. This is a bug in React.");
            }
            request.completedRootSegment = segment;
          }
          request.pendingRootTasks--;
          if (request.pendingRootTasks === 0) {
            request.onShellError = noop$1;
            var onShellReady = request.onShellReady;
            onShellReady();
          }
        } else {
          boundary.pendingTasks--;
          if (boundary.forceClientRender) ;
          else if (boundary.pendingTasks === 0) {
            if (segment.parentFlushed) {
              if (segment.status === COMPLETED) {
                queueCompletedSegment(boundary, segment);
              }
            }
            if (boundary.parentFlushed) {
              request.completedBoundaries.push(boundary);
            }
            boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
            boundary.fallbackAbortableTasks.clear();
          } else {
            if (segment.parentFlushed) {
              if (segment.status === COMPLETED) {
                queueCompletedSegment(boundary, segment);
                var completedSegments = boundary.completedSegments;
                if (completedSegments.length === 1) {
                  if (boundary.parentFlushed) {
                    request.partialBoundaries.push(boundary);
                  }
                }
              }
            }
          }
        }
        request.allPendingTasks--;
        if (request.allPendingTasks === 0) {
          var onAllReady = request.onAllReady;
          onAllReady();
        }
      }
      function retryTask(request, task) {
        var segment = task.blockedSegment;
        if (segment.status !== PENDING) {
          return;
        }
        switchContext(task.context);
        var prevTaskInDEV = null;
        {
          prevTaskInDEV = currentTaskInDEV;
          currentTaskInDEV = task;
        }
        try {
          renderNodeDestructive(request, task, task.node);
          pushSegmentFinale(segment.chunks, request.responseState, segment.lastPushedText, segment.textEmbedded);
          task.abortSet.delete(task);
          segment.status = COMPLETED;
          finishedTask(request, task.blockedBoundary, segment);
        } catch (x) {
          resetHooksState();
          if (typeof x === "object" && x !== null && typeof x.then === "function") {
            var ping = task.ping;
            x.then(ping, ping);
          } else {
            task.abortSet.delete(task);
            segment.status = ERRORED;
            erroredTask(request, task.blockedBoundary, segment, x);
          }
        } finally {
          {
            currentTaskInDEV = prevTaskInDEV;
          }
        }
      }
      function performWork(request) {
        if (request.status === CLOSED) {
          return;
        }
        var prevContext = getActiveContext();
        var prevDispatcher = ReactCurrentDispatcher$1.current;
        ReactCurrentDispatcher$1.current = Dispatcher;
        var prevGetCurrentStackImpl;
        {
          prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
          ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
        }
        var prevResponseState = currentResponseState;
        setCurrentResponseState(request.responseState);
        try {
          var pingedTasks = request.pingedTasks;
          var i2;
          for (i2 = 0; i2 < pingedTasks.length; i2++) {
            var task = pingedTasks[i2];
            retryTask(request, task);
          }
          pingedTasks.splice(0, i2);
          if (request.destination !== null) {
            flushCompletedQueues(request, request.destination);
          }
        } catch (error2) {
          logRecoverableError(request, error2);
          fatalError(request, error2);
        } finally {
          setCurrentResponseState(prevResponseState);
          ReactCurrentDispatcher$1.current = prevDispatcher;
          {
            ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
          }
          if (prevDispatcher === Dispatcher) {
            switchContext(prevContext);
          }
        }
      }
      function flushSubtree(request, destination, segment) {
        segment.parentFlushed = true;
        switch (segment.status) {
          case PENDING: {
            var segmentID = segment.id = request.nextSegmentId++;
            segment.lastPushedText = false;
            segment.textEmbedded = false;
            return writePlaceholder(destination, request.responseState, segmentID);
          }
          case COMPLETED: {
            segment.status = FLUSHED;
            var r2 = true;
            var chunks = segment.chunks;
            var chunkIdx = 0;
            var children = segment.children;
            for (var childIdx = 0; childIdx < children.length; childIdx++) {
              var nextChild = children[childIdx];
              for (; chunkIdx < nextChild.index; chunkIdx++) {
                writeChunk(destination, chunks[chunkIdx]);
              }
              r2 = flushSegment(request, destination, nextChild);
            }
            for (; chunkIdx < chunks.length - 1; chunkIdx++) {
              writeChunk(destination, chunks[chunkIdx]);
            }
            if (chunkIdx < chunks.length) {
              r2 = writeChunkAndReturn(destination, chunks[chunkIdx]);
            }
            return r2;
          }
          default: {
            throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
          }
        }
      }
      function flushSegment(request, destination, segment) {
        var boundary = segment.boundary;
        if (boundary === null) {
          return flushSubtree(request, destination, segment);
        }
        boundary.parentFlushed = true;
        if (boundary.forceClientRender) {
          writeStartClientRenderedSuspenseBoundary(destination, request.responseState, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
          flushSubtree(request, destination, segment);
          return writeEndClientRenderedSuspenseBoundary(destination, request.responseState);
        } else if (boundary.pendingTasks > 0) {
          boundary.rootSegmentID = request.nextSegmentId++;
          if (boundary.completedSegments.length > 0) {
            request.partialBoundaries.push(boundary);
          }
          var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
          writeStartPendingSuspenseBoundary(destination, request.responseState, id);
          flushSubtree(request, destination, segment);
          return writeEndPendingSuspenseBoundary(destination, request.responseState);
        } else if (boundary.byteSize > request.progressiveChunkSize) {
          boundary.rootSegmentID = request.nextSegmentId++;
          request.completedBoundaries.push(boundary);
          writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id);
          flushSubtree(request, destination, segment);
          return writeEndPendingSuspenseBoundary(destination, request.responseState);
        } else {
          writeStartCompletedSuspenseBoundary(destination, request.responseState);
          var completedSegments = boundary.completedSegments;
          if (completedSegments.length !== 1) {
            throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
          }
          var contentSegment = completedSegments[0];
          flushSegment(request, destination, contentSegment);
          return writeEndCompletedSuspenseBoundary(destination, request.responseState);
        }
      }
      function flushClientRenderedBoundary(request, destination, boundary) {
        return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id, boundary.errorDigest, boundary.errorMessage, boundary.errorComponentStack);
      }
      function flushSegmentContainer(request, destination, segment) {
        writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
        flushSegment(request, destination, segment);
        return writeEndSegment(destination, segment.formatContext);
      }
      function flushCompletedBoundary(request, destination, boundary) {
        var completedSegments = boundary.completedSegments;
        var i2 = 0;
        for (; i2 < completedSegments.length; i2++) {
          var segment = completedSegments[i2];
          flushPartiallyCompletedSegment(request, destination, boundary, segment);
        }
        completedSegments.length = 0;
        return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
      }
      function flushPartialBoundary(request, destination, boundary) {
        var completedSegments = boundary.completedSegments;
        var i2 = 0;
        for (; i2 < completedSegments.length; i2++) {
          var segment = completedSegments[i2];
          if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
            i2++;
            completedSegments.splice(0, i2);
            return false;
          }
        }
        completedSegments.splice(0, i2);
        return true;
      }
      function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
        if (segment.status === FLUSHED) {
          return true;
        }
        var segmentID = segment.id;
        if (segmentID === -1) {
          var rootSegmentID = segment.id = boundary.rootSegmentID;
          if (rootSegmentID === -1) {
            throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
          }
          return flushSegmentContainer(request, destination, segment);
        } else {
          flushSegmentContainer(request, destination, segment);
          return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
        }
      }
      function flushCompletedQueues(request, destination) {
        beginWriting();
        try {
          var completedRootSegment = request.completedRootSegment;
          if (completedRootSegment !== null && request.pendingRootTasks === 0) {
            flushSegment(request, destination, completedRootSegment);
            request.completedRootSegment = null;
            writeCompletedRoot(destination, request.responseState);
          }
          var clientRenderedBoundaries = request.clientRenderedBoundaries;
          var i2;
          for (i2 = 0; i2 < clientRenderedBoundaries.length; i2++) {
            var boundary = clientRenderedBoundaries[i2];
            if (!flushClientRenderedBoundary(request, destination, boundary)) {
              request.destination = null;
              i2++;
              clientRenderedBoundaries.splice(0, i2);
              return;
            }
          }
          clientRenderedBoundaries.splice(0, i2);
          var completedBoundaries = request.completedBoundaries;
          for (i2 = 0; i2 < completedBoundaries.length; i2++) {
            var _boundary = completedBoundaries[i2];
            if (!flushCompletedBoundary(request, destination, _boundary)) {
              request.destination = null;
              i2++;
              completedBoundaries.splice(0, i2);
              return;
            }
          }
          completedBoundaries.splice(0, i2);
          completeWriting(destination);
          beginWriting(destination);
          var partialBoundaries = request.partialBoundaries;
          for (i2 = 0; i2 < partialBoundaries.length; i2++) {
            var _boundary2 = partialBoundaries[i2];
            if (!flushPartialBoundary(request, destination, _boundary2)) {
              request.destination = null;
              i2++;
              partialBoundaries.splice(0, i2);
              return;
            }
          }
          partialBoundaries.splice(0, i2);
          var largeBoundaries = request.completedBoundaries;
          for (i2 = 0; i2 < largeBoundaries.length; i2++) {
            var _boundary3 = largeBoundaries[i2];
            if (!flushCompletedBoundary(request, destination, _boundary3)) {
              request.destination = null;
              i2++;
              largeBoundaries.splice(0, i2);
              return;
            }
          }
          largeBoundaries.splice(0, i2);
        } finally {
          completeWriting(destination);
          flushBuffered(destination);
          if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0) {
            {
              if (request.abortableTasks.size !== 0) {
                error("There was still abortable task at the root when we closed. This is a bug in React.");
              }
            }
            close(destination);
          }
        }
      }
      function startWork(request) {
        scheduleWork(function() {
          return performWork(request);
        });
      }
      function startFlowing(request, destination) {
        if (request.status === CLOSING) {
          request.status = CLOSED;
          closeWithError(destination, request.fatalError);
          return;
        }
        if (request.status === CLOSED) {
          return;
        }
        if (request.destination !== null) {
          return;
        }
        request.destination = destination;
        try {
          flushCompletedQueues(request, destination);
        } catch (error2) {
          logRecoverableError(request, error2);
          fatalError(request, error2);
        }
      }
      function abort(request, reason) {
        try {
          var abortableTasks = request.abortableTasks;
          abortableTasks.forEach(function(task) {
            return abortTask(task, request, reason);
          });
          abortableTasks.clear();
          if (request.destination !== null) {
            flushCompletedQueues(request, request.destination);
          }
        } catch (error2) {
          logRecoverableError(request, error2);
          fatalError(request, error2);
        }
      }
      function createDrainHandler(destination, request) {
        return function() {
          return startFlowing(request, destination);
        };
      }
      function createAbortHandler(request, reason) {
        return function() {
          return abort(request, reason);
        };
      }
      function createRequestImpl(children, options) {
        return createRequest(children, createResponseState(options ? options.identifierPrefix : void 0, options ? options.nonce : void 0, options ? options.bootstrapScriptContent : void 0, options ? options.bootstrapScripts : void 0, options ? options.bootstrapModules : void 0), createRootFormatContext(options ? options.namespaceURI : void 0), options ? options.progressiveChunkSize : void 0, options ? options.onError : void 0, options ? options.onAllReady : void 0, options ? options.onShellReady : void 0, options ? options.onShellError : void 0);
      }
      function renderToPipeableStream2(children, options) {
        var request = createRequestImpl(children, options);
        var hasStartedFlowing = false;
        startWork(request);
        return {
          pipe: function(destination) {
            if (hasStartedFlowing) {
              throw new Error("React currently only supports piping to one writable stream.");
            }
            hasStartedFlowing = true;
            startFlowing(request, destination);
            destination.on("drain", createDrainHandler(destination, request));
            destination.on("error", createAbortHandler(
              request,
              // eslint-disable-next-line react-internal/prod-error-codes
              new Error("The destination stream errored while writing data.")
            ));
            destination.on("close", createAbortHandler(
              request,
              // eslint-disable-next-line react-internal/prod-error-codes
              new Error("The destination stream closed early.")
            ));
            return destination;
          },
          abort: function(reason) {
            abort(request, reason);
          }
        };
      }
      reactDomServer_node_development.renderToPipeableStream = renderToPipeableStream2;
      reactDomServer_node_development.version = ReactVersion;
    })();
  }
  return reactDomServer_node_development;
}
var l, s$1;
if (process.env.NODE_ENV === "production") {
  l = requireReactDomServerLegacy_node_production_min();
  s$1 = requireReactDomServer_node_production_min();
} else {
  l = requireReactDomServerLegacy_node_development();
  s$1 = requireReactDomServer_node_development();
}
l.version;
l.renderToString;
l.renderToStaticMarkup;
l.renderToNodeStream;
l.renderToStaticNodeStream;
var renderToPipeableStream = s$1.renderToPipeableStream;
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        production.ServerRouter,
        {
          context: routerContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = dist.createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: production.useParams(),
      loaderData: production.useLoaderData(),
      actionData: production.useActionData(),
      matches: production.useMatches()
    };
    return reactExports.createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: production.useParams(),
      loaderData: production.useLoaderData(),
      actionData: production.useActionData(),
      error: production.useRouteError()
    };
    return reactExports.createElement(ErrorBoundary3, props);
  };
}
const stylesheet = "/assets/app-Ctad2w1X.css";
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
}, {
  rel: "stylesheet",
  href: stylesheet
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("head", {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(production.Meta, {}), /* @__PURE__ */ jsxRuntimeExports.jsx(production.Links, {})]
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs("body", {
      children: [children, /* @__PURE__ */ jsxRuntimeExports.jsx(production.ScrollRestoration, {}), /* @__PURE__ */ jsxRuntimeExports.jsx(production.Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(production.Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (production.isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
const getParsedType = (data) => {
  const t2 = typeof data;
  switch (t2) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
const ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
const quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
class ZodError extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i2 = 0;
          while (i2 < issue.path.length) {
            const el = issue.path[i2];
            const terminal = i2 === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i2++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
const errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
let overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
const makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      overrideMap,
      overrideMap === errorMap ? void 0 : errorMap
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s2 of results) {
      if (s2.status === "aborted")
        return INVALID;
      if (s2.status === "dirty")
        status.dirty();
      arrayValue.push(s2.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
}
const INVALID = Object.freeze({
  status: "aborted"
});
const DIRTY = (value) => ({ status: "dirty", value });
const OK = (value) => ({ status: "valid", value });
const isAborted = (x) => x.status === "aborted";
const isDirty = (x) => x.status === "dirty";
const isValid = (x) => x.status === "valid";
const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return state.set(receiver, value), value;
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var _ZodEnum_cache, _ZodNativeEnum_cache;
class ParseInputLazyPath {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
const handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    var _a, _b;
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
class ZodType {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
  if (args.precision) {
    regex = `${regex}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    regex = `${regex}(\\.\\d+)?`;
  }
  return regex;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
class ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a, _b;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
      local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
class ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
class ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
class ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
class ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
class ZodAny extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
}
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
class ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i2) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i2) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
class ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
const getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
class ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
}
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
}
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}
class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i2) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i2)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
class ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}
class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
class ZodEnum extends ZodType {
  constructor() {
    super(...arguments);
    _ZodEnum_cache.set(this, void 0);
  }
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache)) {
      __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values));
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache).has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
}
_ZodEnum_cache = /* @__PURE__ */ new WeakMap();
ZodEnum.create = createZodEnum;
class ZodNativeEnum extends ZodType {
  constructor() {
    super(...arguments);
    _ZodNativeEnum_cache.set(this, void 0);
  }
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache)) {
      __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)));
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache).has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
_ZodNativeEnum_cache = /* @__PURE__ */ new WeakMap();
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
}
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
class ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
class ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
class ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
const BRAND = Symbol("zod_brand");
class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}
class ZodReadonly extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function custom(check, params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      if (!check(data)) {
        const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
        const p2 = typeof p === "string" ? { message: p } : p;
        ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
      }
    });
  return ZodAny.create();
}
const late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = () => stringType().optional();
const onumber = () => numberType().optional();
const oboolean = () => booleanType().optional();
const coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
const NEVER = INVALID;
var z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  datetimeRegex,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});
const signupFormSchema = z.object({
  email: z.string().email({ message: "Valid email required" })
});
const defaultValues = {
  email: ""
};
var isCheckBoxInput = (element) => element.type === "checkbox";
var isDateObject = (value) => value instanceof Date;
var isNullOrUndefined = (value) => value == null;
const isObjectType = (value) => typeof value === "object";
var isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
var getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));
var isPlainObject = (tempObject) => {
  const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
  return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};
var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
function cloneObject(data) {
  let copy;
  const isArray = Array.isArray(data);
  if (data instanceof Date) {
    copy = new Date(data);
  } else if (data instanceof Set) {
    copy = new Set(data);
  } else if (!(isWeb && (data instanceof Blob || data instanceof FileList)) && (isArray || isObject(data))) {
    copy = isArray ? [] : {};
    if (!isArray && !isPlainObject(data)) {
      copy = data;
    } else {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          copy[key] = cloneObject(data[key]);
        }
      }
    }
  } else {
    return data;
  }
  return copy;
}
var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
var isUndefined = (val) => val === void 0;
var get = (object, path, defaultValue) => {
  if (!path || !isObject(object)) {
    return defaultValue;
  }
  const result = compact(path.split(/[,[\].]+?/)).reduce((result2, key) => isNullOrUndefined(result2) ? result2 : result2[key], object);
  return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var isBoolean = (value) => typeof value === "boolean";
var isKey = (value) => /^\w*$/.test(value);
var stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
var set = (object, path, value) => {
  let index = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const length = tempPath.length;
  const lastIndex = length - 1;
  while (++index < length) {
    const key = tempPath[index];
    let newValue = value;
    if (index !== lastIndex) {
      const objValue = object[key];
      newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
    }
    if (key === "__proto__") {
      return;
    }
    object[key] = newValue;
    object = object[key];
  }
  return object;
};
const EVENTS = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
};
const VALIDATION_MODE = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
};
const INPUT_VALIDATION_RULES = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
React.createContext(null);
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
  const result = {
    defaultValues: control._defaultValues
  };
  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: () => {
        const _key = key;
        if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
          control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
        }
        return formState[_key];
      }
    });
  }
  return result;
};
var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
  updateFormState(formStateData);
  const { name, ...formState } = formStateData;
  return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key) => _proxyFormState[key] === VALIDATION_MODE.all);
};
var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];
function useSubscribe(props) {
  const _props = React.useRef(props);
  _props.current = props;
  React.useEffect(() => {
    const subscription = !props.disabled && _props.current.subject && _props.current.subject.subscribe({
      next: _props.current.next
    });
    return () => {
      subscription && subscription.unsubscribe();
    };
  }, [props.disabled]);
}
var isString = (value) => typeof value === "string";
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
  if (isString(names)) {
    isGlobal && _names.watch.add(names);
    return get(formValues, names, defaultValue);
  }
  if (Array.isArray(names)) {
    return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
  }
  isGlobal && (_names.watchAll = true);
  return formValues;
};
var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria ? {
  ...errors[name],
  types: {
    ...errors[name] && errors[name].types ? errors[name].types : {},
    [type]: message || true
  }
} : {};
var getValidationModes = (mode) => ({
  isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
  isOnBlur: mode === VALIDATION_MODE.onBlur,
  isOnChange: mode === VALIDATION_MODE.onChange,
  isOnAll: mode === VALIDATION_MODE.all,
  isOnTouch: mode === VALIDATION_MODE.onTouched
});
var isWatched = (name, _names, isBlurEvent) => !isBlurEvent && (_names.watchAll || _names.watch.has(name) || [..._names.watch].some((watchName) => name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
const iterateFieldsByAction = (fields, action2, fieldsNames, abortEarly) => {
  for (const key of fieldsNames || Object.keys(fields)) {
    const field = get(fields, key);
    if (field) {
      const { _f, ...currentField } = field;
      if (_f) {
        if (_f.refs && _f.refs[0] && action2(_f.refs[0], key) && !abortEarly) {
          return true;
        } else if (_f.ref && action2(_f.ref, _f.name) && !abortEarly) {
          return true;
        } else {
          if (iterateFieldsByAction(currentField, action2)) {
            break;
          }
        }
      } else if (isObject(currentField)) {
        if (iterateFieldsByAction(currentField, action2)) {
          break;
        }
      }
    }
  }
  return;
};
var updateFieldArrayRootError = (errors, error, name) => {
  const fieldArrayErrors = convertToArrayPayload(get(errors, name));
  set(fieldArrayErrors, "root", error[name]);
  set(errors, name, fieldArrayErrors);
  return errors;
};
var isFileInput = (element) => element.type === "file";
var isFunction = (value) => typeof value === "function";
var isHTMLElement = (value) => {
  if (!isWeb) {
    return false;
  }
  const owner = value ? value.ownerDocument : 0;
  return value instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var isMessage = (value) => isString(value);
var isRadioInput = (element) => element.type === "radio";
var isRegex = (value) => value instanceof RegExp;
const defaultResult = {
  value: false,
  isValid: false
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
  if (Array.isArray(options)) {
    if (options.length > 1) {
      const values = options.filter((option) => option && option.checked && !option.disabled).map((option) => option.value);
      return { value: values, isValid: !!values.length };
    }
    return options[0].checked && !options[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === "" ? validResult : { value: options[0].value, isValid: true } : validResult
    ) : defaultResult;
  }
  return defaultResult;
};
const defaultReturn = {
  isValid: false,
  value: null
};
var getRadioValue = (options) => Array.isArray(options) ? options.reduce((previous, option) => option && option.checked && !option.disabled ? {
  isValid: true,
  value: option.value
} : previous, defaultReturn) : defaultReturn;
function getValidateError(result, ref, type = "validate") {
  if (isMessage(result) || Array.isArray(result) && result.every(isMessage) || isBoolean(result) && !result) {
    return {
      type,
      message: isMessage(result) ? result : "",
      ref
    };
  }
}
var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData) ? validationData : {
  value: validationData,
  message: ""
};
var validateField = async (field, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
  const { ref, refs, required, maxLength, minLength, min, max, pattern: pattern2, validate, name, valueAsNumber, mount, disabled } = field._f;
  const inputValue = get(formValues, name);
  if (!mount || disabled) {
    return {};
  }
  const inputRef = refs ? refs[0] : ref;
  const setCustomValidity = (message) => {
    if (shouldUseNativeValidation && inputRef.reportValidity) {
      inputRef.setCustomValidity(isBoolean(message) ? "" : message || "");
      inputRef.reportValidity();
    }
  };
  const error = {};
  const isRadio = isRadioInput(ref);
  const isCheckBox = isCheckBoxInput(ref);
  const isRadioOrCheckbox2 = isRadio || isCheckBox;
  const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === "" || inputValue === "" || Array.isArray(inputValue) && !inputValue.length;
  const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
  const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
    const message = exceedMax ? maxLengthMessage : minLengthMessage;
    error[name] = {
      type: exceedMax ? maxType : minType,
      message,
      ref,
      ...appendErrorsCurry(exceedMax ? maxType : minType, message)
    };
  };
  if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox2 && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
    const { value, message } = isMessage(required) ? { value: !!required, message: required } : getValueAndMessage(required);
    if (value) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.required,
        message,
        ref: inputRef,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
    let exceedMax;
    let exceedMin;
    const maxOutput = getValueAndMessage(max);
    const minOutput = getValueAndMessage(min);
    if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
      const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
      if (!isNullOrUndefined(maxOutput.value)) {
        exceedMax = valueNumber > maxOutput.value;
      }
      if (!isNullOrUndefined(minOutput.value)) {
        exceedMin = valueNumber < minOutput.value;
      }
    } else {
      const valueDate = ref.valueAsDate || new Date(inputValue);
      const convertTimeToDate = (time) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + time);
      const isTime = ref.type == "time";
      const isWeek = ref.type == "week";
      if (isString(maxOutput.value) && inputValue) {
        exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
      }
      if (isString(minOutput.value) && inputValue) {
        exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
      }
    }
    if (exceedMax || exceedMin) {
      getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
    const maxLengthOutput = getValueAndMessage(maxLength);
    const minLengthOutput = getValueAndMessage(minLength);
    const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
    const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
    if (exceedMax || exceedMin) {
      getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if (pattern2 && !isEmpty && isString(inputValue)) {
    const { value: patternValue, message } = getValueAndMessage(pattern2);
    if (isRegex(patternValue) && !inputValue.match(patternValue)) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.pattern,
        message,
        ref,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (validate) {
    if (isFunction(validate)) {
      const result = await validate(inputValue, formValues);
      const validateError = getValidateError(result, inputRef);
      if (validateError) {
        error[name] = {
          ...validateError,
          ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
        };
        if (!validateAllFieldCriteria) {
          setCustomValidity(validateError.message);
          return error;
        }
      }
    } else if (isObject(validate)) {
      let validationResult = {};
      for (const key in validate) {
        if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
          break;
        }
        const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
        if (validateError) {
          validationResult = {
            ...validateError,
            ...appendErrorsCurry(key, validateError.message)
          };
          setCustomValidity(validateError.message);
          if (validateAllFieldCriteria) {
            error[name] = validationResult;
          }
        }
      }
      if (!isEmptyObject(validationResult)) {
        error[name] = {
          ref: inputRef,
          ...validationResult
        };
        if (!validateAllFieldCriteria) {
          return error;
        }
      }
    }
  }
  setCustomValidity(true);
  return error;
};
function baseGet(object, updatePath) {
  const length = updatePath.slice(0, -1).length;
  let index = 0;
  while (index < length) {
    object = isUndefined(object) ? index++ : object[updatePath[index++]];
  }
  return object;
}
function isEmptyArray(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
      return false;
    }
  }
  return true;
}
function unset(object, path) {
  const paths = Array.isArray(path) ? path : isKey(path) ? [path] : stringToPath(path);
  const childObject = paths.length === 1 ? object : baseGet(object, paths);
  const index = paths.length - 1;
  const key = paths[index];
  if (childObject) {
    delete childObject[key];
  }
  if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
    unset(object, paths.slice(0, -1));
  }
  return object;
}
var createSubject = () => {
  let _observers = [];
  const next = (value) => {
    for (const observer of _observers) {
      observer.next && observer.next(value);
    }
  };
  const subscribe = (observer) => {
    _observers.push(observer);
    return {
      unsubscribe: () => {
        _observers = _observers.filter((o2) => o2 !== observer);
      }
    };
  };
  const unsubscribe = () => {
    _observers = [];
  };
  return {
    get observers() {
      return _observers;
    },
    next,
    subscribe,
    unsubscribe
  };
};
var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
function deepEqual(object1, object2) {
  if (isPrimitive(object1) || isPrimitive(object2)) {
    return object1 === object2;
  }
  if (isDateObject(object1) && isDateObject(object2)) {
    return object1.getTime() === object2.getTime();
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    if (!keys2.includes(key)) {
      return false;
    }
    if (key !== "ref") {
      const val2 = object2[key];
      if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2) : val1 !== val2) {
        return false;
      }
    }
  }
  return true;
}
var isMultipleSelect = (element) => element.type === `select-multiple`;
var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref) => isHTMLElement(ref) && ref.isConnected;
var objectHasFunction = (data) => {
  for (const key in data) {
    if (isFunction(data[key])) {
      return true;
    }
  }
  return false;
};
function markFieldsDirty(data, fields = {}) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        fields[key] = Array.isArray(data[key]) ? [] : {};
        markFieldsDirty(data[key], fields[key]);
      } else if (!isNullOrUndefined(data[key])) {
        fields[key] = true;
      }
    }
  }
  return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
          dirtyFieldsFromValues[key] = Array.isArray(data[key]) ? markFieldsDirty(data[key], []) : { ...markFieldsDirty(data[key]) };
        } else {
          getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
        }
      } else {
        dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
      }
    }
  }
  return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues2, formValues) => getDirtyFieldsFromDefaultValues(defaultValues2, formValues, markFieldsDirty(formValues));
var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value) ? value : valueAsNumber ? value === "" ? NaN : value ? +value : value : valueAsDate && isString(value) ? new Date(value) : setValueAs ? setValueAs(value) : value;
function getFieldValue(_f) {
  const ref = _f.ref;
  if (_f.refs ? _f.refs.every((ref2) => ref2.disabled) : ref.disabled) {
    return;
  }
  if (isFileInput(ref)) {
    return ref.files;
  }
  if (isRadioInput(ref)) {
    return getRadioValue(_f.refs).value;
  }
  if (isMultipleSelect(ref)) {
    return [...ref.selectedOptions].map(({ value }) => value);
  }
  if (isCheckBoxInput(ref)) {
    return getCheckboxValue(_f.refs).value;
  }
  return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
  const fields = {};
  for (const name of fieldsNames) {
    const field = get(_fields, name);
    field && set(fields, name, field._f);
  }
  return {
    criteriaMode,
    names: [...fieldsNames],
    fields,
    shouldUseNativeValidation
  };
};
var getRuleValue = (rule) => isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
const ASYNC_FUNCTION = "AsyncFunction";
var hasPromiseValidation = (fieldReference) => (!fieldReference || !fieldReference.validate) && !!(isFunction(fieldReference.validate) && fieldReference.validate.constructor.name === ASYNC_FUNCTION || isObject(fieldReference.validate) && Object.values(fieldReference.validate).find((validateFunction) => validateFunction.constructor.name === ASYNC_FUNCTION));
var hasValidation = (options) => options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
function schemaErrorLookup(errors, _fields, name) {
  const error = get(errors, name);
  if (error || isKey(name)) {
    return {
      error,
      name
    };
  }
  const names = name.split(".");
  while (names.length) {
    const fieldName = names.join(".");
    const field = get(_fields, fieldName);
    const foundError = get(errors, fieldName);
    if (field && !Array.isArray(field) && name !== fieldName) {
      return { name };
    }
    if (foundError && foundError.type) {
      return {
        name: fieldName,
        error: foundError
      };
    }
    names.pop();
  }
  return {
    name
  };
}
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
  if (mode.isOnAll) {
    return false;
  } else if (!isSubmitted && mode.isOnTouch) {
    return !(isTouched || isBlurEvent);
  } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
    return !isBlurEvent;
  } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
    return isBlurEvent;
  }
  return true;
};
var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);
const defaultOptions = {
  mode: VALIDATION_MODE.onSubmit,
  reValidateMode: VALIDATION_MODE.onChange,
  shouldFocusError: true
};
function createFormControl(props = {}) {
  let _options = {
    ...defaultOptions,
    ...props
  };
  let _formState = {
    submitCount: 0,
    isDirty: false,
    isLoading: isFunction(_options.defaultValues),
    isValidating: false,
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: _options.errors || {},
    disabled: _options.disabled || false
  };
  let _fields = {};
  let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
  let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
  let _state = {
    action: false,
    mount: false,
    watch: false
  };
  let _names = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  };
  let delayErrorCallback;
  let timer = 0;
  const _proxyFormState = {
    isDirty: false,
    dirtyFields: false,
    validatingFields: false,
    touchedFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  };
  const _subjects = {
    values: createSubject(),
    array: createSubject(),
    state: createSubject()
  };
  const validationModeBeforeSubmit = getValidationModes(_options.mode);
  const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
  const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
  const debounce = (callback) => (wait) => {
    clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
  const _updateValid = async (shouldUpdateValid) => {
    if (!_options.disabled && (_proxyFormState.isValid || shouldUpdateValid)) {
      const isValid2 = _options.resolver ? isEmptyObject((await _executeSchema()).errors) : await executeBuiltInValidation(_fields, true);
      if (isValid2 !== _formState.isValid) {
        _subjects.state.next({
          isValid: isValid2
        });
      }
    }
  };
  const _updateIsValidating = (names, isValidating) => {
    if (!_options.disabled && (_proxyFormState.isValidating || _proxyFormState.validatingFields)) {
      (names || Array.from(_names.mount)).forEach((name) => {
        if (name) {
          isValidating ? set(_formState.validatingFields, name, isValidating) : unset(_formState.validatingFields, name);
        }
      });
      _subjects.state.next({
        validatingFields: _formState.validatingFields,
        isValidating: !isEmptyObject(_formState.validatingFields)
      });
    }
  };
  const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
    if (args && method && !_options.disabled) {
      _state.action = true;
      if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
        const fieldValues = method(get(_fields, name), args.argA, args.argB);
        shouldSetValues && set(_fields, name, fieldValues);
      }
      if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
        const errors = method(get(_formState.errors, name), args.argA, args.argB);
        shouldSetValues && set(_formState.errors, name, errors);
        unsetEmptyArray(_formState.errors, name);
      }
      if (_proxyFormState.touchedFields && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
        const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
        shouldSetValues && set(_formState.touchedFields, name, touchedFields);
      }
      if (_proxyFormState.dirtyFields) {
        _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
      }
      _subjects.state.next({
        name,
        isDirty: _getDirty(name, values),
        dirtyFields: _formState.dirtyFields,
        errors: _formState.errors,
        isValid: _formState.isValid
      });
    } else {
      set(_formValues, name, values);
    }
  };
  const updateErrors = (name, error) => {
    set(_formState.errors, name, error);
    _subjects.state.next({
      errors: _formState.errors
    });
  };
  const _setErrors = (errors) => {
    _formState.errors = errors;
    _subjects.state.next({
      errors: _formState.errors,
      isValid: false
    });
  };
  const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
    const field = get(_fields, name);
    if (field) {
      const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
      isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
      _state.mount && _updateValid();
    }
  };
  const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
    let shouldUpdateField = false;
    let isPreviousDirty = false;
    const output = {
      name
    };
    if (!_options.disabled) {
      const disabledField = !!(get(_fields, name) && get(_fields, name)._f && get(_fields, name)._f.disabled);
      if (!isBlurEvent || shouldDirty) {
        if (_proxyFormState.isDirty) {
          isPreviousDirty = _formState.isDirty;
          _formState.isDirty = output.isDirty = _getDirty();
          shouldUpdateField = isPreviousDirty !== output.isDirty;
        }
        const isCurrentFieldPristine = disabledField || deepEqual(get(_defaultValues, name), fieldValue);
        isPreviousDirty = !!(!disabledField && get(_formState.dirtyFields, name));
        isCurrentFieldPristine || disabledField ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
        output.dirtyFields = _formState.dirtyFields;
        shouldUpdateField = shouldUpdateField || _proxyFormState.dirtyFields && isPreviousDirty !== !isCurrentFieldPristine;
      }
      if (isBlurEvent) {
        const isPreviousFieldTouched = get(_formState.touchedFields, name);
        if (!isPreviousFieldTouched) {
          set(_formState.touchedFields, name, isBlurEvent);
          output.touchedFields = _formState.touchedFields;
          shouldUpdateField = shouldUpdateField || _proxyFormState.touchedFields && isPreviousFieldTouched !== isBlurEvent;
        }
      }
      shouldUpdateField && shouldRender && _subjects.state.next(output);
    }
    return shouldUpdateField ? output : {};
  };
  const shouldRenderByError = (name, isValid2, error, fieldState) => {
    const previousFieldError = get(_formState.errors, name);
    const shouldUpdateValid = _proxyFormState.isValid && isBoolean(isValid2) && _formState.isValid !== isValid2;
    if (props.delayError && error) {
      delayErrorCallback = debounce(() => updateErrors(name, error));
      delayErrorCallback(props.delayError);
    } else {
      clearTimeout(timer);
      delayErrorCallback = null;
      error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
    }
    if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
      const updatedFormState = {
        ...fieldState,
        ...shouldUpdateValid && isBoolean(isValid2) ? { isValid: isValid2 } : {},
        errors: _formState.errors,
        name
      };
      _formState = {
        ..._formState,
        ...updatedFormState
      };
      _subjects.state.next(updatedFormState);
    }
  };
  const _executeSchema = async (name) => {
    _updateIsValidating(name, true);
    const result = await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
    _updateIsValidating(name);
    return result;
  };
  const executeSchemaAndUpdateState = async (names) => {
    const { errors } = await _executeSchema(names);
    if (names) {
      for (const name of names) {
        const error = get(errors, name);
        error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
      }
    } else {
      _formState.errors = errors;
    }
    return errors;
  };
  const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
    valid: true
  }) => {
    for (const name in fields) {
      const field = fields[name];
      if (field) {
        const { _f, ...fieldValue } = field;
        if (_f) {
          const isFieldArrayRoot = _names.array.has(_f.name);
          const isPromiseFunction = field._f && hasPromiseValidation(field._f);
          if (isPromiseFunction && _proxyFormState.validatingFields) {
            _updateIsValidating([name], true);
          }
          const fieldError = await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
          if (isPromiseFunction && _proxyFormState.validatingFields) {
            _updateIsValidating([name]);
          }
          if (fieldError[_f.name]) {
            context.valid = false;
            if (shouldOnlyCheckValid) {
              break;
            }
          }
          !shouldOnlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
        }
        !isEmptyObject(fieldValue) && await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context);
      }
    }
    return context.valid;
  };
  const _removeUnmounted = () => {
    for (const name of _names.unMount) {
      const field = get(_fields, name);
      field && (field._f.refs ? field._f.refs.every((ref) => !live(ref)) : !live(field._f.ref)) && unregister(name);
    }
    _names.unMount = /* @__PURE__ */ new Set();
  };
  const _getDirty = (name, data) => !_options.disabled && (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
  const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
    ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? { [names]: defaultValue } : defaultValue
  }, isGlobal, defaultValue);
  const _getFieldArray = (name) => compact(get(_state.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? get(_defaultValues, name, []) : []));
  const setFieldValue = (name, value, options = {}) => {
    const field = get(_fields, name);
    let fieldValue = value;
    if (field) {
      const fieldReference = field._f;
      if (fieldReference) {
        !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value, fieldReference));
        fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value) ? "" : value;
        if (isMultipleSelect(fieldReference.ref)) {
          [...fieldReference.ref.options].forEach((optionRef) => optionRef.selected = fieldValue.includes(optionRef.value));
        } else if (fieldReference.refs) {
          if (isCheckBoxInput(fieldReference.ref)) {
            fieldReference.refs.length > 1 ? fieldReference.refs.forEach((checkboxRef) => (!checkboxRef.defaultChecked || !checkboxRef.disabled) && (checkboxRef.checked = Array.isArray(fieldValue) ? !!fieldValue.find((data) => data === checkboxRef.value) : fieldValue === checkboxRef.value)) : fieldReference.refs[0] && (fieldReference.refs[0].checked = !!fieldValue);
          } else {
            fieldReference.refs.forEach((radioRef) => radioRef.checked = radioRef.value === fieldValue);
          }
        } else if (isFileInput(fieldReference.ref)) {
          fieldReference.ref.value = "";
        } else {
          fieldReference.ref.value = fieldValue;
          if (!fieldReference.ref.type) {
            _subjects.values.next({
              name,
              values: { ..._formValues }
            });
          }
        }
      }
    }
    (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
    options.shouldValidate && trigger(name);
  };
  const setValues = (name, value, options) => {
    for (const fieldKey in value) {
      const fieldValue = value[fieldKey];
      const fieldName = `${name}.${fieldKey}`;
      const field = get(_fields, fieldName);
      (_names.array.has(name) || isObject(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
    }
  };
  const setValue = (name, value, options = {}) => {
    const field = get(_fields, name);
    const isFieldArray = _names.array.has(name);
    const cloneValue = cloneObject(value);
    set(_formValues, name, cloneValue);
    if (isFieldArray) {
      _subjects.array.next({
        name,
        values: { ..._formValues }
      });
      if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) && options.shouldDirty) {
        _subjects.state.next({
          name,
          dirtyFields: getDirtyFields(_defaultValues, _formValues),
          isDirty: _getDirty(name, cloneValue)
        });
      }
    } else {
      field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
    }
    isWatched(name, _names) && _subjects.state.next({ ..._formState });
    _subjects.values.next({
      name: _state.mount ? name : void 0,
      values: { ..._formValues }
    });
  };
  const onChange = async (event) => {
    _state.mount = true;
    const target = event.target;
    let name = target.name;
    let isFieldValueUpdated = true;
    const field = get(_fields, name);
    const getCurrentFieldValue = () => target.type ? getFieldValue(field._f) : getEventValue(event);
    const _updateIsFieldValueUpdated = (fieldValue) => {
      isFieldValueUpdated = Number.isNaN(fieldValue) || isDateObject(fieldValue) && isNaN(fieldValue.getTime()) || deepEqual(fieldValue, get(_formValues, name, fieldValue));
    };
    if (field) {
      let error;
      let isValid2;
      const fieldValue = getCurrentFieldValue();
      const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
      const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
      const watched = isWatched(name, _names, isBlurEvent);
      set(_formValues, name, fieldValue);
      if (isBlurEvent) {
        field._f.onBlur && field._f.onBlur(event);
        delayErrorCallback && delayErrorCallback(0);
      } else if (field._f.onChange) {
        field._f.onChange(event);
      }
      const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
      const shouldRender = !isEmptyObject(fieldState) || watched;
      !isBlurEvent && _subjects.values.next({
        name,
        type: event.type,
        values: { ..._formValues }
      });
      if (shouldSkipValidation) {
        if (_proxyFormState.isValid) {
          if (props.mode === "onBlur") {
            if (isBlurEvent) {
              _updateValid();
            }
          } else {
            _updateValid();
          }
        }
        return shouldRender && _subjects.state.next({ name, ...watched ? {} : fieldState });
      }
      !isBlurEvent && watched && _subjects.state.next({ ..._formState });
      if (_options.resolver) {
        const { errors } = await _executeSchema([name]);
        _updateIsFieldValueUpdated(fieldValue);
        if (isFieldValueUpdated) {
          const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
          const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
          error = errorLookupResult.error;
          name = errorLookupResult.name;
          isValid2 = isEmptyObject(errors);
        }
      } else {
        _updateIsValidating([name], true);
        error = (await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
        _updateIsValidating([name]);
        _updateIsFieldValueUpdated(fieldValue);
        if (isFieldValueUpdated) {
          if (error) {
            isValid2 = false;
          } else if (_proxyFormState.isValid) {
            isValid2 = await executeBuiltInValidation(_fields, true);
          }
        }
      }
      if (isFieldValueUpdated) {
        field._f.deps && trigger(field._f.deps);
        shouldRenderByError(name, isValid2, error, fieldState);
      }
    }
  };
  const _focusInput = (ref, key) => {
    if (get(_formState.errors, key) && ref.focus) {
      ref.focus();
      return 1;
    }
    return;
  };
  const trigger = async (name, options = {}) => {
    let isValid2;
    let validationResult;
    const fieldNames = convertToArrayPayload(name);
    if (_options.resolver) {
      const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
      isValid2 = isEmptyObject(errors);
      validationResult = name ? !fieldNames.some((name2) => get(errors, name2)) : isValid2;
    } else if (name) {
      validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
        const field = get(_fields, fieldName);
        return await executeBuiltInValidation(field && field._f ? { [fieldName]: field } : field);
      }))).every(Boolean);
      !(!validationResult && !_formState.isValid) && _updateValid();
    } else {
      validationResult = isValid2 = await executeBuiltInValidation(_fields);
    }
    _subjects.state.next({
      ...!isString(name) || _proxyFormState.isValid && isValid2 !== _formState.isValid ? {} : { name },
      ..._options.resolver || !name ? { isValid: isValid2 } : {},
      errors: _formState.errors
    });
    options.shouldFocus && !validationResult && iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
    return validationResult;
  };
  const getValues = (fieldNames) => {
    const values = {
      ..._state.mount ? _formValues : _defaultValues
    };
    return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name) => get(values, name));
  };
  const getFieldState = (name, formState) => ({
    invalid: !!get((formState || _formState).errors, name),
    isDirty: !!get((formState || _formState).dirtyFields, name),
    error: get((formState || _formState).errors, name),
    isValidating: !!get(_formState.validatingFields, name),
    isTouched: !!get((formState || _formState).touchedFields, name)
  });
  const clearErrors = (name) => {
    name && convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName));
    _subjects.state.next({
      errors: name ? _formState.errors : {}
    });
  };
  const setError = (name, error, options) => {
    const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
    const currentError = get(_formState.errors, name) || {};
    const { ref: currentRef, message, type, ...restOfErrorTree } = currentError;
    set(_formState.errors, name, {
      ...restOfErrorTree,
      ...error,
      ref
    });
    _subjects.state.next({
      name,
      errors: _formState.errors,
      isValid: false
    });
    options && options.shouldFocus && ref && ref.focus && ref.focus();
  };
  const watch = (name, defaultValue) => isFunction(name) ? _subjects.values.subscribe({
    next: (payload) => name(_getWatch(void 0, defaultValue), payload)
  }) : _getWatch(name, defaultValue, true);
  const unregister = (name, options = {}) => {
    for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
      _names.mount.delete(fieldName);
      _names.array.delete(fieldName);
      if (!options.keepValue) {
        unset(_fields, fieldName);
        unset(_formValues, fieldName);
      }
      !options.keepError && unset(_formState.errors, fieldName);
      !options.keepDirty && unset(_formState.dirtyFields, fieldName);
      !options.keepTouched && unset(_formState.touchedFields, fieldName);
      !options.keepIsValidating && unset(_formState.validatingFields, fieldName);
      !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
    }
    _subjects.values.next({
      values: { ..._formValues }
    });
    _subjects.state.next({
      ..._formState,
      ...!options.keepDirty ? {} : { isDirty: _getDirty() }
    });
    !options.keepIsValid && _updateValid();
  };
  const _updateDisabledField = ({ disabled, name, field, fields, value }) => {
    if (isBoolean(disabled) && _state.mount || !!disabled) {
      const inputValue = disabled ? void 0 : isUndefined(value) ? getFieldValue(field ? field._f : get(fields, name)._f) : value;
      set(_formValues, name, inputValue);
      updateTouchAndDirty(name, inputValue, false, false, true);
    }
  };
  const register = (name, options = {}) => {
    let field = get(_fields, name);
    const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
    set(_fields, name, {
      ...field || {},
      _f: {
        ...field && field._f ? field._f : { ref: { name } },
        name,
        mount: true,
        ...options
      }
    });
    _names.mount.add(name);
    if (field) {
      _updateDisabledField({
        field,
        disabled: isBoolean(options.disabled) ? options.disabled : _options.disabled,
        name,
        value: options.value
      });
    } else {
      updateValidAndValue(name, true, options.value);
    }
    return {
      ...disabledIsDefined ? { disabled: options.disabled || _options.disabled } : {},
      ..._options.progressive ? {
        required: !!options.required,
        min: getRuleValue(options.min),
        max: getRuleValue(options.max),
        minLength: getRuleValue(options.minLength),
        maxLength: getRuleValue(options.maxLength),
        pattern: getRuleValue(options.pattern)
      } : {},
      name,
      onChange,
      onBlur: onChange,
      ref: (ref) => {
        if (ref) {
          register(name, options);
          field = get(_fields, name);
          const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
          const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
          const refs = field._f.refs || [];
          if (radioOrCheckbox ? refs.find((option) => option === fieldRef) : fieldRef === field._f.ref) {
            return;
          }
          set(_fields, name, {
            _f: {
              ...field._f,
              ...radioOrCheckbox ? {
                refs: [
                  ...refs.filter(live),
                  fieldRef,
                  ...Array.isArray(get(_defaultValues, name)) ? [{}] : []
                ],
                ref: { type: fieldRef.type, name }
              } : { ref: fieldRef }
            }
          });
          updateValidAndValue(name, false, void 0, fieldRef);
        } else {
          field = get(_fields, name, {});
          if (field._f) {
            field._f.mount = false;
          }
          (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
        }
      }
    };
  };
  const _focusError = () => _options.shouldFocusError && iterateFieldsByAction(_fields, _focusInput, _names.mount);
  const _disableForm = (disabled) => {
    if (isBoolean(disabled)) {
      _subjects.state.next({ disabled });
      iterateFieldsByAction(_fields, (ref, name) => {
        const currentField = get(_fields, name);
        if (currentField) {
          ref.disabled = currentField._f.disabled || disabled;
          if (Array.isArray(currentField._f.refs)) {
            currentField._f.refs.forEach((inputRef) => {
              inputRef.disabled = currentField._f.disabled || disabled;
            });
          }
        }
      }, 0, false);
    }
  };
  const handleSubmit = (onValid, onInvalid) => async (e) => {
    let onValidError = void 0;
    if (e) {
      e.preventDefault && e.preventDefault();
      e.persist && e.persist();
    }
    if (_options.disabled) {
      if (onInvalid) {
        await onInvalid({ ..._formState.errors }, e);
      }
      return;
    }
    let fieldValues = cloneObject(_formValues);
    _subjects.state.next({
      isSubmitting: true
    });
    if (_options.resolver) {
      const { errors, values } = await _executeSchema();
      _formState.errors = errors;
      fieldValues = values;
    } else {
      await executeBuiltInValidation(_fields);
    }
    unset(_formState.errors, "root");
    if (isEmptyObject(_formState.errors)) {
      _subjects.state.next({
        errors: {}
      });
      try {
        await onValid(fieldValues, e);
      } catch (error) {
        onValidError = error;
      }
    } else {
      if (onInvalid) {
        await onInvalid({ ..._formState.errors }, e);
      }
      _focusError();
      setTimeout(_focusError);
    }
    _subjects.state.next({
      isSubmitted: true,
      isSubmitting: false,
      isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
      submitCount: _formState.submitCount + 1,
      errors: _formState.errors
    });
    if (onValidError) {
      throw onValidError;
    }
  };
  const resetField = (name, options = {}) => {
    if (get(_fields, name)) {
      if (isUndefined(options.defaultValue)) {
        setValue(name, cloneObject(get(_defaultValues, name)));
      } else {
        setValue(name, options.defaultValue);
        set(_defaultValues, name, cloneObject(options.defaultValue));
      }
      if (!options.keepTouched) {
        unset(_formState.touchedFields, name);
      }
      if (!options.keepDirty) {
        unset(_formState.dirtyFields, name);
        _formState.isDirty = options.defaultValue ? _getDirty(name, cloneObject(get(_defaultValues, name))) : _getDirty();
      }
      if (!options.keepError) {
        unset(_formState.errors, name);
        _proxyFormState.isValid && _updateValid();
      }
      _subjects.state.next({ ..._formState });
    }
  };
  const _reset = (formValues, keepStateOptions = {}) => {
    const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
    const cloneUpdatedValues = cloneObject(updatedValues);
    const isEmptyResetValues = isEmptyObject(formValues);
    const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
    if (!keepStateOptions.keepDefaultValues) {
      _defaultValues = updatedValues;
    }
    if (!keepStateOptions.keepValues) {
      if (keepStateOptions.keepDirtyValues) {
        const fieldsToCheck = /* @__PURE__ */ new Set([
          ..._names.mount,
          ...Object.keys(getDirtyFields(_defaultValues, _formValues))
        ]);
        for (const fieldName of Array.from(fieldsToCheck)) {
          get(_formState.dirtyFields, fieldName) ? set(values, fieldName, get(_formValues, fieldName)) : setValue(fieldName, get(values, fieldName));
        }
      } else {
        if (isWeb && isUndefined(formValues)) {
          for (const name of _names.mount) {
            const field = get(_fields, name);
            if (field && field._f) {
              const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
              if (isHTMLElement(fieldReference)) {
                const form = fieldReference.closest("form");
                if (form) {
                  form.reset();
                  break;
                }
              }
            }
          }
        }
        _fields = {};
      }
      _formValues = props.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneObject(values);
      _subjects.array.next({
        values: { ...values }
      });
      _subjects.values.next({
        values: { ...values }
      });
    }
    _names = {
      mount: keepStateOptions.keepDirtyValues ? _names.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: false,
      focus: ""
    };
    _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid || !!keepStateOptions.keepDirtyValues;
    _state.watch = !!props.shouldUnregister;
    _subjects.state.next({
      submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
      isDirty: isEmptyResetValues ? false : keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
      isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
      dirtyFields: isEmptyResetValues ? {} : keepStateOptions.keepDirtyValues ? keepStateOptions.keepDefaultValues && _formValues ? getDirtyFields(_defaultValues, _formValues) : _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : keepStateOptions.keepDirty ? _formState.dirtyFields : {},
      touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
      errors: keepStateOptions.keepErrors ? _formState.errors : {},
      isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
      isSubmitting: false
    });
  };
  const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues) ? formValues(_formValues) : formValues, keepStateOptions);
  const setFocus = (name, options = {}) => {
    const field = get(_fields, name);
    const fieldReference = field && field._f;
    if (fieldReference) {
      const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
      if (fieldRef.focus) {
        fieldRef.focus();
        options.shouldSelect && isFunction(fieldRef.select) && fieldRef.select();
      }
    }
  };
  const _updateFormState = (updatedFormState) => {
    _formState = {
      ..._formState,
      ...updatedFormState
    };
  };
  const _resetDefaultValues = () => isFunction(_options.defaultValues) && _options.defaultValues().then((values) => {
    reset(values, _options.resetOptions);
    _subjects.state.next({
      isLoading: false
    });
  });
  return {
    control: {
      register,
      unregister,
      getFieldState,
      handleSubmit,
      setError,
      _executeSchema,
      _getWatch,
      _getDirty,
      _updateValid,
      _removeUnmounted,
      _updateFieldArray,
      _updateDisabledField,
      _getFieldArray,
      _reset,
      _resetDefaultValues,
      _updateFormState,
      _disableForm,
      _subjects,
      _proxyFormState,
      _setErrors,
      get _fields() {
        return _fields;
      },
      get _formValues() {
        return _formValues;
      },
      get _state() {
        return _state;
      },
      set _state(value) {
        _state = value;
      },
      get _defaultValues() {
        return _defaultValues;
      },
      get _names() {
        return _names;
      },
      set _names(value) {
        _names = value;
      },
      get _formState() {
        return _formState;
      },
      set _formState(value) {
        _formState = value;
      },
      get _options() {
        return _options;
      },
      set _options(value) {
        _options = {
          ..._options,
          ...value
        };
      }
    },
    trigger,
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    resetField,
    clearErrors,
    unregister,
    setError,
    setFocus,
    getFieldState
  };
}
function useForm(props = {}) {
  const _formControl = React.useRef();
  const _values = React.useRef();
  const [formState, updateFormState] = React.useState({
    isDirty: false,
    isValidating: false,
    isLoading: isFunction(props.defaultValues),
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: props.errors || {},
    disabled: props.disabled || false,
    defaultValues: isFunction(props.defaultValues) ? void 0 : props.defaultValues
  });
  if (!_formControl.current) {
    _formControl.current = {
      ...createFormControl(props),
      formState
    };
  }
  const control = _formControl.current.control;
  control._options = props;
  useSubscribe({
    subject: control._subjects.state,
    next: (value) => {
      if (shouldRenderFormState(value, control._proxyFormState, control._updateFormState)) {
        updateFormState({ ...control._formState });
      }
    }
  });
  React.useEffect(() => control._disableForm(props.disabled), [control, props.disabled]);
  React.useEffect(() => {
    if (control._proxyFormState.isDirty) {
      const isDirty2 = control._getDirty();
      if (isDirty2 !== formState.isDirty) {
        control._subjects.state.next({
          isDirty: isDirty2
        });
      }
    }
  }, [control, formState.isDirty]);
  React.useEffect(() => {
    if (props.values && !deepEqual(props.values, _values.current)) {
      control._reset(props.values, control._options.resetOptions);
      _values.current = props.values;
      updateFormState((state) => ({ ...state }));
    } else {
      control._resetDefaultValues();
    }
  }, [props.values, control]);
  React.useEffect(() => {
    if (props.errors) {
      control._setErrors(props.errors);
    }
  }, [props.errors, control]);
  React.useEffect(() => {
    if (!control._state.mount) {
      control._updateValid();
      control._state.mount = true;
    }
    if (control._state.watch) {
      control._state.watch = false;
      control._subjects.state.next({ ...control._formState });
    }
    control._removeUnmounted();
  });
  React.useEffect(() => {
    props.shouldUnregister && control._subjects.values.next({
      values: control._getWatch()
    });
  }, [props.shouldUnregister, control]);
  _formControl.current.formState = getProxyFormState(formState, control);
  return _formControl.current;
}
const s = (e, s2, o2) => {
  if (e && "reportValidity" in e) {
    const r2 = get(o2, s2);
    e.setCustomValidity(r2 && r2.message || ""), e.reportValidity();
  }
}, o = (t2, e) => {
  for (const o2 in e.fields) {
    const r2 = e.fields[o2];
    r2 && r2.ref && "reportValidity" in r2.ref ? s(r2.ref, o2, t2) : r2.refs && r2.refs.forEach((e2) => s(e2, o2, t2));
  }
}, r = (s2, r2) => {
  r2.shouldUseNativeValidation && o(s2, r2);
  const f = {};
  for (const o2 in s2) {
    const n2 = get(r2.fields, o2), a = Object.assign(s2[o2] || {}, { ref: n2 && n2.ref });
    if (i(r2.names || Object.keys(s2), o2)) {
      const s3 = Object.assign({}, get(f, o2));
      set(s3, "root", a), set(f, o2, s3);
    } else set(f, o2, a);
  }
  return f;
}, i = (t2, e) => t2.some((t3) => t3.startsWith(e + "."));
var n = function(r2, e) {
  for (var n2 = {}; r2.length; ) {
    var t2 = r2[0], s2 = t2.code, i2 = t2.message, a = t2.path.join(".");
    if (!n2[a]) if ("unionErrors" in t2) {
      var u = t2.unionErrors[0].errors[0];
      n2[a] = { message: u.message, type: u.code };
    } else n2[a] = { message: i2, type: s2 };
    if ("unionErrors" in t2 && t2.unionErrors.forEach(function(e2) {
      return e2.errors.forEach(function(e3) {
        return r2.push(e3);
      });
    }), e) {
      var c = n2[a].types, f = c && c[t2.code];
      n2[a] = appendErrors(a, e, n2, s2, f ? [].concat(f, t2.message) : t2.message);
    }
    r2.shift();
  }
  return n2;
}, t = function(o$1, t2, s2) {
  return void 0 === s2 && (s2 = {}), function(i2, a, u) {
    try {
      return Promise.resolve(function(e, n2) {
        try {
          var a2 = Promise.resolve(o$1["sync" === s2.mode ? "parse" : "parseAsync"](i2, t2)).then(function(e2) {
            return u.shouldUseNativeValidation && o({}, u), { errors: {}, values: s2.raw ? i2 : e2 };
          });
        } catch (r2) {
          return n2(r2);
        }
        return a2 && a2.then ? a2.then(void 0, n2) : a2;
      }(0, function(r$1) {
        if (function(r2) {
          return Array.isArray(null == r2 ? void 0 : r2.errors);
        }(r$1)) return { values: {}, errors: r(n(r$1.errors, !u.shouldUseNativeValidation && "all" === u.criteriaMode), u) };
        throw r$1;
      }));
    } catch (r2) {
      return Promise.reject(r2);
    }
  };
};
function meta({}) {
  return [{
    title: "Signup Form"
  }, {
    name: "description",
    content: "Welcome to Newsletter!"
  }];
}
const action = async ({
  request
}) => {
  const loginFormData = await request.formData();
  const data = Object.fromEntries(loginFormData);
  try {
    const validateData = signupFormSchema.safeParse(data);
    if (!validateData.success) {
      return Response.json({
        errors: validateData.error.flatten().fieldErrors
      });
    }
    return production.redirect("/signup-success?email=" + validateData.data.email);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({
        sucess: false,
        errors: error.flatten().fieldErrors
      }, {
        status: 400
      });
    }
    return Response.json({
      errors: error
    });
  }
};
function SignupForm() {
  var _a, _b, _c, _d;
  const actionData = production.useActionData();
  const navigation = production.useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const {
    register,
    formState: {
      isDirty: isDirty2,
      isValid: isValid2,
      errors
    }
  } = useForm({
    mode: "all",
    resolver: t(signupFormSchema),
    defaultValues
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", {
    className: "min-h-screen flex flex-col items-center justify-center font-sans antialiased desktop:bg-paleNavy",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "bg-white max-w-screen-mobile text-darkNavy flex flex-col desktop:max-w-[928px] desktop:flex-row desktop:gap-16 desktop:items-center desktop:justify-around desktop:mx-64 desktop:mt-[219px] desktop:mb-[220px] desktop:rounded-[36px]",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "block desktop:hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
          className: "object-cover object-center",
          src: "/images/illustration-sign-up-mobile.svg",
          alt: "Signup image"
        })
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "my-10 mx-6  desktop:mx-0 desktop:my-0 space-y-10 desktop:pl-16",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "space-y-6",
          children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
            className: "text-[2.5rem] desktop:text-heading font-bold leading-[100%] tracking-[0px]",
            children: "Stay updated!"
          }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
            className: "text-body",
            children: "Join 60,000+ product managers receiving monthly updates on:"
          }), /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", {
            className: "space-y-[.625rem]",
            children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "flex items-start gap-x-4",
              children: [/* @__PURE__ */ jsxRuntimeExports.jsx("img", {
                src: "/images/icon-list.svg",
                alt: "Icon list"
              }), /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                children: "Product discovery and building what matters"
              })]
            }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "flex items-start gap-x-4",
              children: [/* @__PURE__ */ jsxRuntimeExports.jsx("img", {
                src: "/images/icon-list.svg",
                alt: "Icon list"
              }), /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                children: "Measuring to ensure updates are a success"
              })]
            }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "flex items-start gap-x-4",
              children: [/* @__PURE__ */ jsxRuntimeExports.jsx("img", {
                src: "/images/icon-list.svg",
                alt: "Icon list"
              }), /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
                children: "And much more!"
              })]
            })]
          })]
        }), /* @__PURE__ */ jsxRuntimeExports.jsxs(production.Form, {
          method: "post",
          encType: "multipart/form-data",
          className: "space-y-6",
          children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "space-y-2 flex flex-col",
            children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "flex justify-between",
              children: [/* @__PURE__ */ jsxRuntimeExports.jsx("label", {
                className: "text-bodySmall",
                htmlFor: "email",
                children: "Email address"
              }), ((errors == null ? void 0 : errors.email) || ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email)) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                className: "text-vermellion text-bodySmall",
                children: ((_b = errors == null ? void 0 : errors.email) == null ? void 0 : _b.message) || ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.email)
              })]
            }), /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
              className: `${errors.email || ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.email) ? "bg-vermellion bg-opacity-15 border border-vermellion text-vermellion " : "bg-white text-darkNavy text-opacity-50 border-darkNavy border-opacity-25"} border rounded-lg py-4 pl-6 text-body focus-visible:ring-0 active:focus:border-darkNavy active:focus:text-darkNavy`,
              type: "email",
              id: "email",
              ...register("email"),
              placeholder: "email@company.com"
            })]
          }), /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
            type: "submit",
            disabled: isSubmitting || Boolean(actionData == null ? void 0 : actionData.errors) || Boolean(errors == null ? void 0 : errors.email),
            className: "pt-[1.125rem] pb-[.875rem] pl-12 pr-[2.875rem] desktop:px-0 desktop:w-full bg-darkNavy active:bg-custom-gradient text-bodyBold text-white rounded-lg",
            children: "Subscribe to monthly newsletter"
          })]
        })]
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
        className: "hidden desktop:block desktop:object-cover desktop:object-center desktop:py-6 desktop:pr-6",
        src: "/images/illustration-sign-up-desktop.svg",
        alt: "Signup image"
      })]
    })
  });
}
const signup = withComponentProps(SignupForm);
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: signup,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const loader = async ({
  request
}) => {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");
  if (!email) {
    throw new Response("Email not provided", {
      status: 400
    });
  }
  return {
    email
  };
};
function SignupSucess() {
  const navigate = production.useNavigate();
  const {
    email
  } = production.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", {
    className: "min-h-screen flex flex-col justify-center items-center font-sans antialiased desktop:bg-darkNavy",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "bg-white max-w-screen-mobile desktop:max-w-[504px] text-darkNavy px-6 desktop:px-16 desktop:pb-16 flex flex-col desktop:mx-[468px] desktop:my-[280px] rounded-[36px]",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "pt-[149px] pb-[263px] desktop:pt-12 desktop:pb-10",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("img", {
          className: "mb-10",
          src: "/images/icon-success.svg",
          alt: "Icon success"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
          className: "mb-6 font-bold text-[40px] desktop:text-heading leading-[100%] tracking-[0px]",
          children: "Thanks for subscribing!"
        }), /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
          className: "text-body text-darkNavy",
          children: ["A confirmation email has been sent to", " ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
            className: "text-bodyBold",
            children: email
          }), ". Please open it and click the button inside to confirm your subscription"]
        })]
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
        onClick: () => navigate("/"),
        className: "pt-[1.125rem] pb-[.875rem] mb-10 desktop:mb-0 pl-12 pr-[2.875rem] bg-darkNavy active:bg-custom-gradient text-bodyBold text-white rounded-lg",
        children: "Dismiss message"
      })]
    })
  });
}
const signupSuccess = withComponentProps(SignupSucess);
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: signupSuccess,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-kRzgg9oD.js", "imports": ["/assets/chunk-7R3XDUXW-CjF_wvkg.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-BJO-Cc6O.js", "imports": ["/assets/chunk-7R3XDUXW-CjF_wvkg.js", "/assets/with-props-DtQ64y8E.js"], "css": [] }, "routes/signup/signup": { "id": "routes/signup/signup", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/signup-CvJBE91j.js", "imports": ["/assets/with-props-DtQ64y8E.js", "/assets/chunk-7R3XDUXW-CjF_wvkg.js"], "css": [] }, "routes/signup/signup-success": { "id": "routes/signup/signup-success", "parentId": "root", "path": "signup-success", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/signup-success-6Kt1Q96B.js", "imports": ["/assets/with-props-DtQ64y8E.js", "/assets/chunk-7R3XDUXW-CjF_wvkg.js"], "css": [] } }, "url": "/assets/manifest-4839f218.js", "version": "4839f218" };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/signup/signup": {
    id: "routes/signup/signup",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/signup/signup-success": {
    id: "routes/signup/signup-success",
    parentId: "root",
    path: "signup-success",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
