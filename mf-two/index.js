//@pilet v:2(esbuildpr_mftwo,{})
System.register(["react"], function (_export, _context) {
  "use strict";

  var et, _templateObject, _templateObject2, _templateObject3, _templateObject4, _Vt, Mt, Lt, O, q, x, st, M, L, K, it, k, nt, w, G, B, J, D, ot, kt, rt, Z, lt, F, _, X, j, A, at, f, ht, Bt, y, T, P, ct, Dt, U, dt, ut, g, pt, vt, $t, mt, I, te, $, d, _t, ft, E, jt, S, gt, C, H, At, It, yt, Et, St, bt, Y, Q, m, Ct, xt, wt, tt, z, Tt, Pt, V, Nt, W, Rt, Vt, Wt;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function () { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function (obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function (skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function () { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function (exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function (type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function (record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function (finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function (tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function (iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function () {}; return { s: F, n: function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (e) { throw e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function () { it = it.call(o); }, n: function () { var step = it.next(); normalCompletion = step.done; return step; }, e: function (e) { didErr = true; err = e; }, f: function () { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

  function b(n, t) {
    var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : n;
    var s = arguments.length > 3 ? arguments[3] : undefined;
    var i, r, o, c;
    if (t === $) return t;
    var l = s !== void 0 ? (i = e._$Cl) === null || i === void 0 ? void 0 : i[s] : e._$Cu,
        a = P(t) ? void 0 : t._$litDirective$;
    return (l == null ? void 0 : l.constructor) !== a && ((r = l == null ? void 0 : l._$AO) === null || r === void 0 || r.call(l, !1), a === void 0 ? l = void 0 : (l = new a(n), l._$AT(n, e, s)), s !== void 0 ? ((o = (c = e)._$Cl) !== null && o !== void 0 ? o : c._$Cl = [])[s] = l : e._$Cu = l), l !== void 0 && (t = b(n, l._$AS(n, t.values), l, s)), t;
  }

  function Ut(n, t) {
    Pt.push({
      tagNames: n,
      aliases: t
    });
  }

  function zt(n) {
    var _Pt$find = Pt.find(function (e) {
      return e.tagNames.includes(n);
    }),
        t = _Pt$find.aliases;

    return t;
  }

  function Ht(n, t) {
    return zt(n)[t];
  }

  function qt() {
    var n = document.createElement("style");
    return document.head.prepend(n), n.sheet;
  }

  function Ot() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (t) {
      return t;
    };
    var t = {},
        e = [],
        s = qt();
    Object.entries(Vt).forEach(function (_ref3, o) {
      var _ref4 = _slicedToArray(_ref3, 2),
          i = _ref4[0],
          r = _ref4[1];

      var c = n(i);

      if (!customElements.get(c)) {
        var a = Wt[i] || "";
        t[i] = c, e.push(c), s.insertRule("".concat(c, " { ").concat(a, " }"), o), customElements.define(c, /*#__PURE__*/function (_r) {
          _inherits(_class, _r);

          var _super10 = _createSuper(_class);

          function _class() {
            _classCallCheck(this, _class);

            return _super10.apply(this, arguments);
          }

          return _createClass(_class);
        }(r));
      }
    }), Ut(e, t);
  }

  function Re(n) {
    n.registerTile(function () {
      return et("div", {
        className: "teaser"
      }, "Welcome to Piral 2 using its own version of the component lib!", et("new-lib-container", null, et("new-lib-button-group", null)));
    }, {
      initialColumns: 4,
      initialRows: 4
    });
  }

  _export("setup", Re);

  return {
    setters: [function (_react) {
      et = _react.createElement;
    }],
    execute: function () {
      Mt = Object.defineProperty;

      Lt = function Lt(n, t, e) {
        return t in n ? Mt(n, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: e
        }) : n[t] = e;
      };

      O = function O(n, t, e) {
        return Lt(n, _typeof(t) != "symbol" ? t + "" : t, e), e;
      };

      q = /*#__PURE__*/function (_HTMLElement) {
        _inherits(q, _HTMLElement);

        var _super = _createSuper(q);

        function q() {
          _classCallCheck(this, q);

          return _super.call(this);
        }

        return _createClass(q);
      }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

      x = "lib-button";
      st = "\n  color: green;\n  font-weight: bold;\n";
      M = window;
      L = M.ShadowRoot && (M.ShadyCSS === void 0 || M.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
      K = Symbol();
      it = new WeakMap();

      k = /*#__PURE__*/function () {
        function k(t, e, s) {
          _classCallCheck(this, k);

          if (this._$cssResult$ = !0, s !== K) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
          this.cssText = t, this.t = e;
        }

        _createClass(k, [{
          key: "styleSheet",
          get: function get() {
            var t = this.o,
                e = this.t;

            if (L && t === void 0) {
              var s = e !== void 0 && e.length === 1;
              s && (t = it.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && it.set(e, t));
            }

            return t;
          }
        }, {
          key: "toString",
          value: function toString() {
            return this.cssText;
          }
        }]);

        return k;
      }();

      nt = function nt(n) {
        return new k(typeof n == "string" ? n : n + "", void 0, K);
      };

      w = function w(n) {
        for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          t[_key - 1] = arguments[_key];
        }

        var e = n.length === 1 ? n[0] : t.reduce(function (s, i, r) {
          return s + function (o) {
            if (o._$cssResult$ === !0) return o.cssText;
            if (typeof o == "number") return o;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
          }(i) + n[r + 1];
        }, n[0]);
        return new k(e, n, K);
      };

      G = function G(n, t) {
        L ? n.adoptedStyleSheets = t.map(function (e) {
          return e instanceof CSSStyleSheet ? e : e.styleSheet;
        }) : t.forEach(function (e) {
          var s = document.createElement("style"),
              i = M.litNonce;
          i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, n.appendChild(s);
        });
      };

      B = L ? function (n) {
        return n;
      } : function (n) {
        return n instanceof CSSStyleSheet ? function (t) {
          var e = "";

          var _iterator = _createForOfIteratorHelper(t.cssRules),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var s = _step.value;
              e += s.cssText;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return nt(e);
        }(n) : n;
      };
      D = window;
      ot = D.trustedTypes;
      kt = ot ? ot.emptyScript : "";
      rt = D.reactiveElementPolyfillSupport;
      Z = {
        toAttribute: function toAttribute(n, t) {
          switch (t) {
            case Boolean:
              n = n ? kt : null;
              break;

            case Object:
            case Array:
              n = n == null ? n : JSON.stringify(n);
          }

          return n;
        },
        fromAttribute: function fromAttribute(n, t) {
          var e = n;

          switch (t) {
            case Boolean:
              e = n !== null;
              break;

            case Number:
              e = n === null ? null : Number(n);
              break;

            case Object:
            case Array:
              try {
                e = JSON.parse(n);
              } catch (_unused) {
                e = null;
              }

          }

          return e;
        }
      };

      lt = function lt(n, t) {
        return t !== n && (t == t || n == n);
      };

      F = {
        attribute: !0,
        type: String,
        converter: Z,
        reflect: !1,
        hasChanged: lt
      };

      _ = /*#__PURE__*/function (_HTMLElement2) {
        _inherits(_, _HTMLElement2);

        var _super2 = _createSuper(_);

        function _() {
          var _this;

          _classCallCheck(this, _);

          _this = _super2.call(this), _this._$Ei = new Map(), _this.isUpdatePending = !1, _this.hasUpdated = !1, _this._$El = null, _this.u();
          return _this;
        }

        _createClass(_, [{
          key: "u",
          value: function u() {
            var _this2 = this;

            var t;
            this._$E_ = new Promise(function (e) {
              return _this2.enableUpdating = e;
            }), this._$AL = new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach(function (e) {
              return e(_this2);
            });
          }
        }, {
          key: "addController",
          value: function addController(t) {
            var e, s;
            ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((s = t.hostConnected) === null || s === void 0 || s.call(t));
          }
        }, {
          key: "removeController",
          value: function removeController(t) {
            var e;
            (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1);
          }
        }, {
          key: "_$Eg",
          value: function _$Eg() {
            var _this3 = this;

            this.constructor.elementProperties.forEach(function (t, e) {
              _this3.hasOwnProperty(e) && (_this3._$Ei.set(e, _this3[e]), delete _this3[e]);
            });
          }
        }, {
          key: "createRenderRoot",
          value: function createRenderRoot() {
            var t;
            var e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
            return G(e, this.constructor.elementStyles), e;
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            var t;
            this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach(function (e) {
              var s;
              return (s = e.hostConnected) === null || s === void 0 ? void 0 : s.call(e);
            });
          }
        }, {
          key: "enableUpdating",
          value: function enableUpdating(t) {}
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            var t;
            (t = this._$ES) === null || t === void 0 || t.forEach(function (e) {
              var s;
              return (s = e.hostDisconnected) === null || s === void 0 ? void 0 : s.call(e);
            });
          }
        }, {
          key: "attributeChangedCallback",
          value: function attributeChangedCallback(t, e, s) {
            this._$AK(t, s);
          }
        }, {
          key: "_$EO",
          value: function _$EO(t, e) {
            var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : F;
            var i;

            var r = this.constructor._$Ep(t, s);

            if (r !== void 0 && s.reflect === !0) {
              var o = (((i = s.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? s.converter : Z).toAttribute(e, s.type);
              this._$El = t, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._$El = null;
            }
          }
        }, {
          key: "_$AK",
          value: function _$AK(t, e) {
            var s;

            var i = this.constructor,
                r = i._$Ev.get(t);

            if (r !== void 0 && this._$El !== r) {
              var o = i.getPropertyOptions(r),
                  c = typeof o.converter == "function" ? {
                fromAttribute: o.converter
              } : ((s = o.converter) === null || s === void 0 ? void 0 : s.fromAttribute) !== void 0 ? o.converter : Z;
              this._$El = r, this[r] = c.fromAttribute(e, o.type), this._$El = null;
            }
          }
        }, {
          key: "requestUpdate",
          value: function requestUpdate(t, e, s) {
            var i = !0;
            t !== void 0 && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || lt)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = new Map()), this._$EC.set(t, s))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
          }
        }, {
          key: "_$Ej",
          value: function () {
            var _$Ej2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var t;
              return _regeneratorRuntime().wrap(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isUpdatePending = !0;
                      _context2.prev = 1;
                      _context2.next = 4;
                      return this._$E_;

                    case 4:
                      _context2.next = 9;
                      break;

                    case 6:
                      _context2.prev = 6;
                      _context2.t0 = _context2["catch"](1);
                      Promise.reject(_context2.t0);

                    case 9:
                      t = this.scheduleUpdate();
                      _context2.t1 = t != null;

                      if (!_context2.t1) {
                        _context2.next = 14;
                        break;
                      }

                      _context2.next = 14;
                      return t;

                    case 14:
                      return _context2.abrupt("return", !this.isUpdatePending);

                    case 15:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee, this, [[1, 6]]);
            }));

            function _$Ej() {
              return _$Ej2.apply(this, arguments);
            }

            return _$Ej;
          }()
        }, {
          key: "scheduleUpdate",
          value: function scheduleUpdate() {
            return this.performUpdate();
          }
        }, {
          key: "performUpdate",
          value: function performUpdate() {
            var _this4 = this;

            var t;
            if (!this.isUpdatePending) return;
            this.hasUpdated, this._$Ei && (this._$Ei.forEach(function (i, r) {
              return _this4[r] = i;
            }), this._$Ei = void 0);
            var e = !1,
                s = this._$AL;

            try {
              e = this.shouldUpdate(s), e ? (this.willUpdate(s), (t = this._$ES) === null || t === void 0 || t.forEach(function (i) {
                var r;
                return (r = i.hostUpdate) === null || r === void 0 ? void 0 : r.call(i);
              }), this.update(s)) : this._$Ek();
            } catch (i) {
              throw e = !1, this._$Ek(), i;
            }

            e && this._$AE(s);
          }
        }, {
          key: "willUpdate",
          value: function willUpdate(t) {}
        }, {
          key: "_$AE",
          value: function _$AE(t) {
            var e;
            (e = this._$ES) === null || e === void 0 || e.forEach(function (s) {
              var i;
              return (i = s.hostUpdated) === null || i === void 0 ? void 0 : i.call(s);
            }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
          }
        }, {
          key: "_$Ek",
          value: function _$Ek() {
            this._$AL = new Map(), this.isUpdatePending = !1;
          }
        }, {
          key: "updateComplete",
          get: function get() {
            return this.getUpdateComplete();
          }
        }, {
          key: "getUpdateComplete",
          value: function getUpdateComplete() {
            return this._$E_;
          }
        }, {
          key: "shouldUpdate",
          value: function shouldUpdate(t) {
            return !0;
          }
        }, {
          key: "update",
          value: function update(t) {
            var _this5 = this;

            this._$EC !== void 0 && (this._$EC.forEach(function (e, s) {
              return _this5._$EO(s, _this5[s], e);
            }), this._$EC = void 0), this._$Ek();
          }
        }, {
          key: "updated",
          value: function updated(t) {}
        }, {
          key: "firstUpdated",
          value: function firstUpdated(t) {}
        }], [{
          key: "addInitializer",
          value: function addInitializer(t) {
            var e;
            (e = this.h) !== null && e !== void 0 || (this.h = []), this.h.push(t);
          }
        }, {
          key: "observedAttributes",
          get: function get() {
            var _this6 = this;

            this.finalize();
            var t = [];
            return this.elementProperties.forEach(function (e, s) {
              var i = _this6._$Ep(s, e);

              i !== void 0 && (_this6._$Ev.set(i, s), t.push(i));
            }), t;
          }
        }, {
          key: "createProperty",
          value: function createProperty(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : F;

            if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
              var s = _typeof(t) == "symbol" ? Symbol() : "__" + t,
                  i = this.getPropertyDescriptor(t, s, e);
              i !== void 0 && Object.defineProperty(this.prototype, t, i);
            }
          }
        }, {
          key: "getPropertyDescriptor",
          value: function getPropertyDescriptor(t, e, s) {
            return {
              get: function get() {
                return this[e];
              },
              set: function set(i) {
                var r = this[t];
                this[e] = i, this.requestUpdate(t, r, s);
              },
              configurable: !0,
              enumerable: !0
            };
          }
        }, {
          key: "getPropertyOptions",
          value: function getPropertyOptions(t) {
            return this.elementProperties.get(t) || F;
          }
        }, {
          key: "finalize",
          value: function finalize() {
            if (this.hasOwnProperty("finalized")) return !1;
            this.finalized = !0;
            var t = Object.getPrototypeOf(this);

            if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map(), this.hasOwnProperty("properties")) {
              var e = this.properties,
                  s = [].concat(_toConsumableArray(Object.getOwnPropertyNames(e)), _toConsumableArray(Object.getOwnPropertySymbols(e)));

              var _iterator2 = _createForOfIteratorHelper(s),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var i = _step2.value;
                  this.createProperty(i, e[i]);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            return this.elementStyles = this.finalizeStyles(this.styles), !0;
          }
        }, {
          key: "finalizeStyles",
          value: function finalizeStyles(t) {
            var e = [];

            if (Array.isArray(t)) {
              var s = new Set(t.flat(1 / 0).reverse());

              var _iterator3 = _createForOfIteratorHelper(s),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var i = _step3.value;
                  e.unshift(B(i));
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            } else t !== void 0 && e.push(B(t));

            return e;
          }
        }, {
          key: "_$Ep",
          value: function _$Ep(t, e) {
            var s = e.attribute;
            return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
          }
        }]);

        return _;
      }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

      _.finalized = !0, _.elementProperties = new Map(), _.elementStyles = [], _.shadowRootOptions = {
        mode: "open"
      }, rt == null || rt({
        ReactiveElement: _
      }), ((J = D.reactiveElementVersions) !== null && J !== void 0 ? J : D.reactiveElementVersions = []).push("1.4.1");
      j = window;
      A = j.trustedTypes;
      at = A ? A.createPolicy("lit-html", {
        createHTML: function createHTML(n) {
          return n;
        }
      }) : void 0;
      f = "lit$".concat((Math.random() + "").slice(9), "$");
      ht = "?" + f;
      Bt = "<".concat(ht, ">");
      y = document;

      T = function T() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return y.createComment(n);
      };

      P = function P(n) {
        return n === null || _typeof(n) != "object" && typeof n != "function";
      };

      ct = Array.isArray;

      Dt = function Dt(n) {
        return ct(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function";
      };

      U = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
      dt = /-->/g;
      ut = />/g;
      g = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g");
      pt = /'/g;
      vt = /"/g;
      $t = /^(?:script|style|textarea|title)$/i;

      mt = function mt(n) {
        return function (t) {
          for (var _len2 = arguments.length, e = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            e[_key2 - 1] = arguments[_key2];
          }

          return {
            _$litType$: n,
            strings: t,
            values: e
          };
        };
      };

      I = mt(1);
      te = mt(2);
      $ = Symbol["for"]("lit-noChange");
      d = Symbol["for"]("lit-nothing");
      _t = new WeakMap();

      ft = function ft(n, t, e) {
        var s, i;
        var r = (s = e == null ? void 0 : e.renderBefore) !== null && s !== void 0 ? s : t,
            o = r._$litPart$;

        if (o === void 0) {
          var c = (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0 ? i : null;
          r._$litPart$ = o = new C(t.insertBefore(T(), c), c, void 0, e !== null && e !== void 0 ? e : {});
        }

        return o._$AI(n), o;
      };

      E = y.createTreeWalker(y, 129, null, !1);

      jt = function jt(n, t) {
        var e = n.length - 1,
            s = [],
            i,
            r = t === 2 ? "<svg>" : "",
            o = U;

        for (var l = 0; l < e; l++) {
          var a = n[l],
              v = void 0,
              h = void 0,
              u = -1,
              p = 0;

          for (; p < a.length && (o.lastIndex = p, h = o.exec(a), h !== null);) {
            var _i;

            p = o.lastIndex, o === U ? h[1] === "!--" ? o = dt : h[1] !== void 0 ? o = ut : h[2] !== void 0 ? ($t.test(h[2]) && (i = RegExp("</" + h[2], "g")), o = g) : h[3] !== void 0 && (o = g) : o === g ? h[0] === ">" ? (o = (_i = i) !== null && _i !== void 0 ? _i : U, u = -1) : h[1] === void 0 ? u = -2 : (u = o.lastIndex - h[2].length, v = h[1], o = h[3] === void 0 ? g : h[3] === '"' ? vt : pt) : o === vt || o === pt ? o = g : o === dt || o === ut ? o = U : (o = g, i = void 0);
          }

          var N = o === g && n[l + 1].startsWith("/>") ? " " : "";
          r += o === U ? a + Bt : u >= 0 ? (s.push(v), a.slice(0, u) + "$lit$" + a.slice(u) + f + N) : a + f + (u === -2 ? (s.push(void 0), l) : N);
        }

        var c = r + (n[e] || "<?>") + (t === 2 ? "</svg>" : "");
        if (!Array.isArray(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
        return [at !== void 0 ? at.createHTML(c) : c, s];
      };

      S = /*#__PURE__*/function () {
        function S(_ref, s) {
          var t = _ref.strings,
              e = _ref._$litType$;

          _classCallCheck(this, S);

          var i;
          this.parts = [];

          var r = 0,
              o = 0,
              c = t.length - 1,
              l = this.parts,
              _jt = jt(t, e),
              _jt2 = _slicedToArray(_jt, 2),
              a = _jt2[0],
              v = _jt2[1];

          if (this.el = S.createElement(a, s), E.currentNode = this.el.content, e === 2) {
            var h = this.el.content,
                u = h.firstChild;
            u.remove(), h.append.apply(h, _toConsumableArray(u.childNodes));
          }

          for (; (i = E.nextNode()) !== null && l.length < c;) {
            if (i.nodeType === 1) {
              if (i.hasAttributes()) {
                var _h = [];

                var _iterator4 = _createForOfIteratorHelper(i.getAttributeNames()),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var _u2 = _step4.value;

                    if (_u2.endsWith("$lit$") || _u2.startsWith(f)) {
                      var p = v[o++];

                      if (_h.push(_u2), p !== void 0) {
                        var N = i.getAttribute(p.toLowerCase() + "$lit$").split(f),
                            R = /([.?@])?(.*)/.exec(p);
                        l.push({
                          type: 1,
                          index: r,
                          name: R[2],
                          strings: N,
                          ctor: R[1] === "." ? At : R[1] === "?" ? yt : R[1] === "@" ? Et : H
                        });
                      } else l.push({
                        type: 6,
                        index: r
                      });
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

                for (var _i2 = 0, _h2 = _h; _i2 < _h2.length; _i2++) {
                  var _u = _h2[_i2];
                  i.removeAttribute(_u);
                }
              }

              if ($t.test(i.tagName)) {
                var _h3 = i.textContent.split(f),
                    _u3 = _h3.length - 1;

                if (_u3 > 0) {
                  i.textContent = A ? A.emptyScript : "";

                  for (var _p = 0; _p < _u3; _p++) {
                    i.append(_h3[_p], T()), E.nextNode(), l.push({
                      type: 2,
                      index: ++r
                    });
                  }

                  i.append(_h3[_u3], T());
                }
              }
            } else if (i.nodeType === 8) if (i.data === ht) l.push({
              type: 2,
              index: r
            });else {
              var _h4 = -1;

              for (; (_h4 = i.data.indexOf(f, _h4 + 1)) !== -1;) {
                l.push({
                  type: 7,
                  index: r
                }), _h4 += f.length - 1;
              }
            }

            r++;
          }
        }

        _createClass(S, null, [{
          key: "createElement",
          value: function createElement(t, e) {
            var s = y.createElement("template");
            return s.innerHTML = t, s;
          }
        }]);

        return S;
      }();

      gt = /*#__PURE__*/function () {
        function gt(t, e) {
          _classCallCheck(this, gt);

          this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
        }

        _createClass(gt, [{
          key: "parentNode",
          get: function get() {
            return this._$AM.parentNode;
          }
        }, {
          key: "_$AU",
          get: function get() {
            return this._$AM._$AU;
          }
        }, {
          key: "p",
          value: function p(t) {
            var e;
            var _this$_$AD = this._$AD,
                s = _this$_$AD.el.content,
                i = _this$_$AD.parts,
                r = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : y).importNode(s, !0);
            E.currentNode = r;
            var o = E.nextNode(),
                c = 0,
                l = 0,
                a = i[0];

            for (; a !== void 0;) {
              if (c === a.index) {
                var v = void 0;
                a.type === 2 ? v = new C(o, o.nextSibling, this, t) : a.type === 1 ? v = new a.ctor(o, a.name, a.strings, this, t) : a.type === 6 && (v = new St(o, this, t)), this.v.push(v), a = i[++l];
              }

              c !== (a == null ? void 0 : a.index) && (o = E.nextNode(), c++);
            }

            return r;
          }
        }, {
          key: "m",
          value: function m(t) {
            var e = 0;

            var _iterator5 = _createForOfIteratorHelper(this.v),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var s = _step5.value;
                s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        }]);

        return gt;
      }();

      C = /*#__PURE__*/function () {
        function C(t, e, s, i) {
          _classCallCheck(this, C);

          var r;
          this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$C_ = (r = i == null ? void 0 : i.isConnected) === null || r === void 0 || r;
        }

        _createClass(C, [{
          key: "_$AU",
          get: function get() {
            var t, e;
            return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$C_;
          }
        }, {
          key: "parentNode",
          get: function get() {
            var t = this._$AA.parentNode,
                e = this._$AM;
            return e !== void 0 && t.nodeType === 11 && (t = e.parentNode), t;
          }
        }, {
          key: "startNode",
          get: function get() {
            return this._$AA;
          }
        }, {
          key: "endNode",
          get: function get() {
            return this._$AB;
          }
        }, {
          key: "_$AI",
          value: function _$AI(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
            t = b(this, t, e), P(t) ? t === d || t == null || t === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : t !== this._$AH && t !== $ && this.$(t) : t._$litType$ !== void 0 ? this.T(t) : t.nodeType !== void 0 ? this.k(t) : Dt(t) ? this.O(t) : this.$(t);
          }
        }, {
          key: "S",
          value: function S(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._$AB;
            return this._$AA.parentNode.insertBefore(t, e);
          }
        }, {
          key: "k",
          value: function k(t) {
            this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
          }
        }, {
          key: "$",
          value: function $(t) {
            this._$AH !== d && P(this._$AH) ? this._$AA.nextSibling.data = t : this.k(y.createTextNode(t)), this._$AH = t;
          }
        }, {
          key: "T",
          value: function T(t) {
            var e;
            var s = t.values,
                i = t._$litType$,
                r = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = S.createElement(i.h, this.options)), i);
            if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r) this._$AH.m(s);else {
              var o = new gt(r, this),
                  c = o.p(this.options);
              o.m(s), this.k(c), this._$AH = o;
            }
          }
        }, {
          key: "_$AC",
          value: function _$AC(t) {
            var e = _t.get(t.strings);

            return e === void 0 && _t.set(t.strings, e = new S(t)), e;
          }
        }, {
          key: "O",
          value: function O(t) {
            ct(this._$AH) || (this._$AH = [], this._$AR());
            var e = this._$AH,
                s,
                i = 0;

            var _iterator6 = _createForOfIteratorHelper(t),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var r = _step6.value;
                i === e.length ? e.push(s = new C(this.S(T()), this.S(T()), this, this.options)) : s = e[i], s._$AI(r), i++;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
          }
        }, {
          key: "_$AR",
          value: function _$AR() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._$AA.nextSibling;
            var e = arguments.length > 1 ? arguments[1] : undefined;
            var s;

            for ((s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, e); t && t !== this._$AB;) {
              var i = t.nextSibling;
              t.remove(), t = i;
            }
          }
        }, {
          key: "setConnected",
          value: function setConnected(t) {
            var e;
            this._$AM === void 0 && (this._$C_ = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
          }
        }]);

        return C;
      }();

      H = /*#__PURE__*/function () {
        function H(t, e, s, i, r) {
          _classCallCheck(this, H);

          this.type = 1, this._$AH = d, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = d;
        }

        _createClass(H, [{
          key: "tagName",
          get: function get() {
            return this.element.tagName;
          }
        }, {
          key: "_$AU",
          get: function get() {
            return this._$AM._$AU;
          }
        }, {
          key: "_$AI",
          value: function _$AI(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
            var s = arguments.length > 2 ? arguments[2] : undefined;
            var i = arguments.length > 3 ? arguments[3] : undefined;
            var r = this.strings,
                o = !1;
            if (r === void 0) t = b(this, t, e, 0), o = !P(t) || t !== this._$AH && t !== $, o && (this._$AH = t);else {
              var c = t,
                  l,
                  a;

              for (t = r[0], l = 0; l < r.length - 1; l++) {
                var _a;

                a = b(this, c[s + l], e, l), a === $ && (a = this._$AH[l]), o || (o = !P(a) || a !== this._$AH[l]), a === d ? t = d : t !== d && (t += ((_a = a) !== null && _a !== void 0 ? _a : "") + r[l + 1]), this._$AH[l] = a;
              }
            }
            o && !i && this.P(t);
          }
        }, {
          key: "P",
          value: function P(t) {
            t === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t !== null && t !== void 0 ? t : "");
          }
        }]);

        return H;
      }();

      At = /*#__PURE__*/function (_H) {
        _inherits(At, _H);

        var _super3 = _createSuper(At);

        function At() {
          var _this7;

          _classCallCheck(this, At);

          _this7 = _super3.apply(this, arguments), _this7.type = 3;
          return _this7;
        }

        _createClass(At, [{
          key: "P",
          value: function P(t) {
            this.element[this.name] = t === d ? void 0 : t;
          }
        }]);

        return At;
      }(H);

      It = A ? A.emptyScript : "";

      yt = /*#__PURE__*/function (_H2) {
        _inherits(yt, _H2);

        var _super4 = _createSuper(yt);

        function yt() {
          var _this8;

          _classCallCheck(this, yt);

          _this8 = _super4.apply(this, arguments), _this8.type = 4;
          return _this8;
        }

        _createClass(yt, [{
          key: "P",
          value: function P(t) {
            t && t !== d ? this.element.setAttribute(this.name, It) : this.element.removeAttribute(this.name);
          }
        }]);

        return yt;
      }(H);

      Et = /*#__PURE__*/function (_H3) {
        _inherits(Et, _H3);

        var _super5 = _createSuper(Et);

        function Et(t, e, s, i, r) {
          var _this9;

          _classCallCheck(this, Et);

          _this9 = _super5.call(this, t, e, s, i, r), _this9.type = 5;
          return _this9;
        }

        _createClass(Et, [{
          key: "_$AI",
          value: function _$AI(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
            var s;
            if ((t = (s = b(this, t, e, 0)) !== null && s !== void 0 ? s : d) === $) return;
            var i = this._$AH,
                r = t === d && i !== d || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive,
                o = t !== d && (i === d || r);
            r && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
          }
        }, {
          key: "handleEvent",
          value: function handleEvent(t) {
            var e, s;
            typeof this._$AH == "function" ? this._$AH.call((s = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && s !== void 0 ? s : this.element, t) : this._$AH.handleEvent(t);
          }
        }]);

        return Et;
      }(H);

      St = /*#__PURE__*/function () {
        function St(t, e, s) {
          _classCallCheck(this, St);

          this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
        }

        _createClass(St, [{
          key: "_$AU",
          get: function get() {
            return this._$AM._$AU;
          }
        }, {
          key: "_$AI",
          value: function _$AI(t) {
            b(this, t);
          }
        }]);

        return St;
      }();

      bt = j.litHtmlPolyfillSupport;
      bt == null || bt(S, C), ((X = j.litHtmlVersions) !== null && X !== void 0 ? X : j.litHtmlVersions = []).push("2.3.1");

      m = /*#__PURE__*/function (_ref2) {
        _inherits(m, _ref2);

        var _super6 = _createSuper(m);

        function m() {
          var _this10;

          _classCallCheck(this, m);

          _this10 = _super6.apply(this, arguments), _this10.renderOptions = {
            host: _assertThisInitialized(_this10)
          }, _this10._$Do = void 0;
          return _this10;
        }

        _createClass(m, [{
          key: "createRenderRoot",
          value: function createRenderRoot() {
            var t, e;

            var s = _get(_getPrototypeOf(m.prototype), "createRenderRoot", this).call(this);

            return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = s.firstChild), s;
          }
        }, {
          key: "update",
          value: function update(t) {
            var e = this.render();
            this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), _get(_getPrototypeOf(m.prototype), "update", this).call(this, t), this._$Do = ft(e, this.renderRoot, this.renderOptions);
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            var t;
            _get(_getPrototypeOf(m.prototype), "connectedCallback", this).call(this), (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            var t;
            _get(_getPrototypeOf(m.prototype), "disconnectedCallback", this).call(this), (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
          }
        }, {
          key: "render",
          value: function render() {
            return $;
          }
        }]);

        return m;
      }(_);

      m.finalized = !0, m._$litElement$ = !0, (Y = globalThis.litElementHydrateSupport) === null || Y === void 0 || Y.call(globalThis, {
        LitElement: m
      });
      Ct = globalThis.litElementPolyfillSupport;
      Ct == null || Ct({
        LitElement: m
      });
      ((Q = globalThis.litElementVersions) !== null && Q !== void 0 ? Q : globalThis.litElementVersions = []).push("3.2.2");
      xt = {
        ATTRIBUTE: 1,
        CHILD: 2,
        PROPERTY: 3,
        BOOLEAN_ATTRIBUTE: 4,
        EVENT: 5,
        ELEMENT: 6
      };

      wt = function wt(n) {
        return function () {
          for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            t[_key3] = arguments[_key3];
          }

          return {
            _$litDirective$: n,
            values: t
          };
        };
      };

      tt = /*#__PURE__*/function () {
        function tt(t) {
          _classCallCheck(this, tt);
        }

        _createClass(tt, [{
          key: "_$AU",
          get: function get() {
            return this._$AM._$AU;
          }
        }, {
          key: "_$AT",
          value: function _$AT(t, e, s) {
            this._$Ct = t, this._$AM = e, this._$Ci = s;
          }
        }, {
          key: "_$AS",
          value: function _$AS(t, e) {
            return this.update(t, e);
          }
        }, {
          key: "update",
          value: function update(t, e) {
            return this.render.apply(this, _toConsumableArray(e));
          }
        }]);

        return tt;
      }();

      z = /*#__PURE__*/function (_tt) {
        _inherits(z, _tt);

        var _super7 = _createSuper(z);

        function z(t) {
          var _this11;

          _classCallCheck(this, z);

          if (_this11 = _super7.call(this, t), _this11.it = d, t.type !== xt.CHILD) throw Error(_this11.constructor.directiveName + "() can only be used in child bindings");
          return _possibleConstructorReturn(_this11);
        }

        _createClass(z, [{
          key: "render",
          value: function render(t) {
            if (t === d || t == null) return this._t = void 0, this.it = t;
            if (t === $) return t;
            if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
            if (t === this.it) return this._t;
            this.it = t;
            var e = [t];
            return e.raw = e, this._t = {
              _$litType$: this.constructor.resultType,
              strings: e,
              values: []
            };
          }
        }]);

        return z;
      }(tt);

      z.directiveName = "unsafeHTML", z.resultType = 1;
      Tt = wt(z);
      Pt = [];

      V = /*#__PURE__*/function (_m) {
        _inherits(V, _m);

        var _super8 = _createSuper(V);

        function V() {
          _classCallCheck(this, V);

          return _super8.apply(this, arguments);
        }

        _createClass(V, [{
          key: "createRenderRoot",
          value: function createRenderRoot() {
            return this;
          }
        }, {
          key: "render",
          value: function render() {
            var t = Ht(this.localName, x),
                e = Tt("<div><".concat(t, ">A</").concat(t, "><").concat(t, ">B</").concat(t, "><").concat(t, ">C</").concat(t, "></div>"));
            return I(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), e);
          }
        }]);

        return V;
      }(m);

      O(V, "styles", w(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    div {\n      color: purple;\n    }\n  "]))));
      Nt = "lib-button-group";

      W = /*#__PURE__*/function (_m2) {
        _inherits(W, _m2);

        var _super9 = _createSuper(W);

        function W() {
          _classCallCheck(this, W);

          return _super9.apply(this, arguments);
        }

        _createClass(W, [{
          key: "render",
          value: function render() {
            return I(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<div><slot></slot></div>"])));
          }
        }]);

        return W;
      }(m);

      O(W, "styles", w(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    div {\n      color: purple;\n      margin: 1rem;\n    }\n  "]))));
      Rt = "lib-container";
      Vt = (_Vt = {}, _defineProperty(_Vt, x, q), _defineProperty(_Vt, Nt, V), _defineProperty(_Vt, Rt, W), _Vt);
      Wt = _defineProperty({}, x, st);
      Ot(function (n) {
        return "new-".concat(n);
      });

      (function () {
        var d = document;

        var __bundleUrl__ = function () {
          try {
            throw new Error();
          } catch (t) {
            var e = ("" + t.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
            if (e) return e[0].replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/, "$1") + "/";
          }

          return "/";
        }();

        ["index.css"].forEach(function (cf) {
          ;
          var u = __bundleUrl__ + cf;
          var e = d.createElement("link");
          e.setAttribute('data-origin', "mf-two");
          e.type = "text/css";
          e.rel = "stylesheet";
          e.href = u;
          d.head.appendChild(e);
        });
      })();
    }
  };
});