/*! For license information please see install.bundle.js.LICENSE.txt */
(() => {
  var t = {
      591: (t, r, e) => {
        var n = e(8).default;
        function o() {
          "use strict";
          (t.exports = o =
            function () {
              return r;
            }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
          var r = {},
            e = Object.prototype,
            i = e.hasOwnProperty,
            a = "function" == typeof Symbol ? Symbol : {},
            c = a.iterator || "@@iterator",
            u = a.asyncIterator || "@@asyncIterator",
            s = a.toStringTag || "@@toStringTag";
          function l(t, r, e) {
            return (
              Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[r]
            );
          }
          try {
            l({}, "");
          } catch (t) {
            l = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function f(t, r, e, n) {
            var o = r && r.prototype instanceof d ? r : d,
              i = Object.create(o.prototype),
              a = new j(n || []);
            return (
              (i._invoke = (function (t, r, e) {
                var n = "suspendedStart";
                return function (o, i) {
                  if ("executing" === n)
                    throw new Error("Generator is already running");
                  if ("completed" === n) {
                    if ("throw" === o) throw i;
                    return { value: void 0, done: !0 };
                  }
                  for (e.method = o, e.arg = i; ; ) {
                    var a = e.delegate;
                    if (a) {
                      var c = E(a, e);
                      if (c) {
                        if (c === p) continue;
                        return c;
                      }
                    }
                    if ("next" === e.method) e.sent = e._sent = e.arg;
                    else if ("throw" === e.method) {
                      if ("suspendedStart" === n)
                        throw ((n = "completed"), e.arg);
                      e.dispatchException(e.arg);
                    } else "return" === e.method && e.abrupt("return", e.arg);
                    n = "executing";
                    var u = h(t, r, e);
                    if ("normal" === u.type) {
                      if (
                        ((n = e.done ? "completed" : "suspendedYield"),
                        u.arg === p)
                      )
                        continue;
                      return { value: u.arg, done: e.done };
                    }
                    "throw" === u.type &&
                      ((n = "completed"),
                      (e.method = "throw"),
                      (e.arg = u.arg));
                  }
                };
              })(t, e, a)),
              i
            );
          }
          function h(t, r, e) {
            try {
              return { type: "normal", arg: t.call(r, e) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          r.wrap = f;
          var p = {};
          function d() {}
          function v() {}
          function y() {}
          var m = {};
          l(m, c, function () {
            return this;
          });
          var g = Object.getPrototypeOf,
            w = g && g(g(P([])));
          w && w !== e && i.call(w, c) && (m = w);
          var x = (y.prototype = d.prototype = Object.create(m));
          function b(t) {
            ["next", "throw", "return"].forEach(function (r) {
              l(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function L(t, r) {
            function e(o, a, c, u) {
              var s = h(t[o], t, a);
              if ("throw" !== s.type) {
                var l = s.arg,
                  f = l.value;
                return f && "object" == n(f) && i.call(f, "__await")
                  ? r.resolve(f.__await).then(
                      function (t) {
                        e("next", t, c, u);
                      },
                      function (t) {
                        e("throw", t, c, u);
                      }
                    )
                  : r.resolve(f).then(
                      function (t) {
                        (l.value = t), c(l);
                      },
                      function (t) {
                        return e("throw", t, c, u);
                      }
                    );
              }
              u(s.arg);
            }
            var o;
            this._invoke = function (t, n) {
              function i() {
                return new r(function (r, o) {
                  e(t, n, r, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            };
          }
          function E(t, r) {
            var e = t.iterator[r.method];
            if (void 0 === e) {
              if (((r.delegate = null), "throw" === r.method)) {
                if (
                  t.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = void 0),
                  E(t, r),
                  "throw" === r.method)
                )
                  return p;
                (r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return p;
            }
            var n = h(e, t.iterator, r.arg);
            if ("throw" === n.type)
              return (
                (r.method = "throw"), (r.arg = n.arg), (r.delegate = null), p
              );
            var o = n.arg;
            return o
              ? o.done
                ? ((r[t.resultName] = o.value),
                  (r.next = t.nextLoc),
                  "return" !== r.method &&
                    ((r.method = "next"), (r.arg = void 0)),
                  (r.delegate = null),
                  p)
                : o
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                p);
          }
          function _(t) {
            var r = { tryLoc: t[0] };
            1 in t && (r.catchLoc = t[1]),
              2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
              this.tryEntries.push(r);
          }
          function O(t) {
            var r = t.completion || {};
            (r.type = "normal"), delete r.arg, (t.completion = r);
          }
          function j(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(_, this),
              this.reset(!0);
          }
          function P(t) {
            if (t) {
              var r = t[c];
              if (r) return r.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var e = -1,
                  n = function r() {
                    for (; ++e < t.length; )
                      if (i.call(t, e))
                        return (r.value = t[e]), (r.done = !1), r;
                    return (r.value = void 0), (r.done = !0), r;
                  };
                return (n.next = n);
              }
            }
            return { next: S };
          }
          function S() {
            return { value: void 0, done: !0 };
          }
          return (
            (v.prototype = y),
            l(x, "constructor", y),
            l(y, "constructor", v),
            (v.displayName = l(y, s, "GeneratorFunction")),
            (r.isGeneratorFunction = function (t) {
              var r = "function" == typeof t && t.constructor;
              return (
                !!r &&
                (r === v || "GeneratorFunction" === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, y)
                  : ((t.__proto__ = y), l(t, s, "GeneratorFunction")),
                (t.prototype = Object.create(x)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            b(L.prototype),
            l(L.prototype, u, function () {
              return this;
            }),
            (r.AsyncIterator = L),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new L(f(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            b(x),
            l(x, s, "Generator"),
            l(x, c, function () {
              return this;
            }),
            l(x, "toString", function () {
              return "[object Generator]";
            }),
            (r.keys = function (t) {
              var r = [];
              for (var e in t) r.push(e);
              return (
                r.reverse(),
                function e() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in t) return (e.value = n), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (r.values = P),
            (j.prototype = {
              constructor: j,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(O),
                  !t)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      i.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = void 0);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var r = this;
                function e(e, n) {
                  return (
                    (a.type = "throw"),
                    (a.arg = t),
                    (r.next = e),
                    n && ((r.method = "next"), (r.arg = void 0)),
                    !!n
                  );
                }
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var o = this.tryEntries[n],
                    a = o.completion;
                  if ("root" === o.tryLoc) return e("end");
                  if (o.tryLoc <= this.prev) {
                    var c = i.call(o, "catchLoc"),
                      u = i.call(o, "finallyLoc");
                    if (c && u) {
                      if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                    } else if (c) {
                      if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (
                    n.tryLoc <= this.prev &&
                    i.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ("break" === t || "continue" === t) &&
                  o.tryLoc <= r &&
                  r <= o.finallyLoc &&
                  (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = t),
                  (a.arg = r),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                    : this.complete(a)
                );
              },
              complete: function (t, r) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && r && (this.next = r),
                  p
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e.finallyLoc === t)
                    return this.complete(e.completion, e.afterLoc), O(e), p;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e.tryLoc === t) {
                    var n = e.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      O(e);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, r, e) {
                return (
                  (this.delegate = {
                    iterator: P(t),
                    resultName: r,
                    nextLoc: e,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  p
                );
              },
            }),
            r
          );
        }
        (t.exports = o),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      8: (t) => {
        function r(e) {
          return (
            (t.exports = r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports),
            r(e)
          );
        }
        (t.exports = r),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      757: (t, r, e) => {
        var n = e(591)();
        t.exports = n;
        try {
          regeneratorRuntime = n;
        } catch (t) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = n)
            : Function("r", "regeneratorRuntime = r")(n);
        }
      },
    },
    r = {};
  function e(n) {
    var o = r[n];
    if (void 0 !== o) return o.exports;
    var i = (r[n] = { exports: {} });
    return t[n](i, i.exports, e), i.exports;
  }
  (e.n = (t) => {
    var r = t && t.__esModule ? () => t.default : () => t;
    return e.d(r, { a: r }), r;
  }),
    (e.d = (t, r) => {
      for (var n in r)
        e.o(r, n) &&
          !e.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
    }),
    (e.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r)),
    (() => {
      "use strict";
      function t(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function r(r) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (o, i) {
            var a = r.apply(e, n);
            function c(r) {
              t(a, o, i, c, u, "next", r);
            }
            function u(r) {
              t(a, o, i, c, u, "throw", r);
            }
            c(void 0);
          });
        };
      }
      var n = e(757),
        o = e.n(n),
        i = document.getElementById("buttonInstall");
      window.addEventListener("beforeinstallprompt", function (t) {
        (window.deferredPrompt = t), i.classList.toggle("hidden", !1);
      }),
        i.addEventListener(
          "click",
          r(
            o().mark(function t() {
              var r;
              return o().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ((r = window.deferredPrompt)) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return");
                    case 3:
                      r.prompt(),
                        (window.deferredPrompt = null),
                        i.classList.toggle("hidden", !0);
                    case 6:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )
        ),
        window.addEventListener("appinstalled", function (t) {
          window.deferredPrompt = null;
        });
    })();
})();
