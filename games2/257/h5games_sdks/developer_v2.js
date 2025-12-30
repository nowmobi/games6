(function () {
  "use strict";
  var q;
  function aa(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  var r =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function ba(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var t = ba(this);
  function u(a, b) {
    if (b)
      a: {
        var c = t;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var h = a[d];
          if (!(h in c)) break a;
          c = c[h];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d &&
          null != b &&
          r(c, a, { configurable: !0, writable: !0, value: b });
      }
  }
  u("Symbol", function (a) {
    function b(l) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c(d + (l || "") + "_" + h++, l);
    }
    function c(l, e) {
      this.g = l;
      r(this, "description", { configurable: !0, writable: !0, value: e });
    }
    if (a) return a;
    c.prototype.toString = function () {
      return this.g;
    };
    var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      h = 0;
    return b;
  });
  u("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (
      var b =
          "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
            " "
          ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = t[b[c]];
      "function" === typeof d &&
        "function" != typeof d.prototype[a] &&
        r(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return ca(aa(this));
          },
        });
    }
    return a;
  });
  function ca(a) {
    a = { next: a };
    a[Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  function v(a) {
    var b =
      "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if ("number" == typeof a.length) return { next: aa(a) };
    throw Error(String(a) + " is not an iterable or ArrayLike");
  }
  function da(a) {
    if (!(a instanceof Array)) {
      a = v(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  var ea =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    fa;
  if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
  else {
    var ha;
    a: {
      var ia = { a: !0 },
        ja = {};
      try {
        ja.__proto__ = ia;
        ha = ja.a;
        break a;
      } catch (a) {}
      ha = !1;
    }
    fa = ha
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ka = fa;
  function w(a, b) {
    a.prototype = ea(b.prototype);
    a.prototype.constructor = a;
    if (ka) ka(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.sa = b.prototype;
  }
  function la() {
    this.i = !1;
    this.g = null;
    this.A = void 0;
    this.l = 1;
    this.v = 0;
    this.h = null;
  }
  function ma(a) {
    if (a.i) throw new TypeError("Generator is already running");
    a.i = !0;
  }
  la.prototype.o = function (a) {
    this.A = a;
  };
  function na(a, b) {
    a.h = { Z: b, ia: !0 };
    a.l = a.v;
  }
  la.prototype.return = function (a) {
    this.h = { return: a };
    this.l = this.v;
  };
  function oa(a) {
    this.g = new la();
    this.h = a;
  }
  function pa(a, b) {
    ma(a.g);
    var c = a.g.g;
    if (c)
      return qa(
        a,
        "return" in c
          ? c["return"]
          : function (d) {
              return { value: d, done: !0 };
            },
        b,
        a.g.return
      );
    a.g.return(b);
    return x(a);
  }
  function qa(a, b, c, d) {
    try {
      var h = b.call(a.g.g, c);
      if (!(h instanceof Object))
        throw new TypeError("Iterator result " + h + " is not an object");
      if (!h.done) return (a.g.i = !1), h;
      var l = h.value;
    } catch (e) {
      return (a.g.g = null), na(a.g, e), x(a);
    }
    a.g.g = null;
    d.call(a.g, l);
    return x(a);
  }
  function x(a) {
    for (; a.g.l; )
      try {
        var b = a.h(a.g);
        if (b) return (a.g.i = !1), { value: b.value, done: !1 };
      } catch (c) {
        (a.g.A = void 0), na(a.g, c);
      }
    a.g.i = !1;
    if (a.g.h) {
      b = a.g.h;
      a.g.h = null;
      if (b.ia) throw b.Z;
      return { value: b.return, done: !0 };
    }
    return { value: void 0, done: !0 };
  }
  function ra(a) {
    this.next = function (b) {
      ma(a.g);
      a.g.g ? (b = qa(a, a.g.g.next, b, a.g.o)) : (a.g.o(b), (b = x(a)));
      return b;
    };
    this.throw = function (b) {
      ma(a.g);
      a.g.g ? (b = qa(a, a.g.g["throw"], b, a.g.o)) : (na(a.g, b), (b = x(a)));
      return b;
    };
    this.return = function (b) {
      return pa(a, b);
    };
    this[Symbol.iterator] = function () {
      return this;
    };
  }
  function sa(a) {
    function b(d) {
      return a.next(d);
    }
    function c(d) {
      return a.throw(d);
    }
    return new Promise(function (d, h) {
      function l(e) {
        e.done ? d(e.value) : Promise.resolve(e.value).then(b, c).then(l, h);
      }
      l(a.next());
    });
  }
  function ta() {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  }
  u("Promise", function (a) {
    function b(e) {
      this.h = 0;
      this.i = void 0;
      this.g = [];
      this.A = !1;
      var f = this.l();
      try {
        e(f.resolve, f.reject);
      } catch (g) {
        f.reject(g);
      }
    }
    function c() {
      this.g = null;
    }
    function d(e) {
      return e instanceof b
        ? e
        : new b(function (f) {
            f(e);
          });
    }
    if (a) return a;
    c.prototype.h = function (e) {
      if (null == this.g) {
        this.g = [];
        var f = this;
        this.i(function () {
          f.o();
        });
      }
      this.g.push(e);
    };
    var h = t.setTimeout;
    c.prototype.i = function (e) {
      h(e, 0);
    };
    c.prototype.o = function () {
      for (; this.g && this.g.length; ) {
        var e = this.g;
        this.g = [];
        for (var f = 0; f < e.length; ++f) {
          var g = e[f];
          e[f] = null;
          try {
            g();
          } catch (k) {
            this.l(k);
          }
        }
      }
      this.g = null;
    };
    c.prototype.l = function (e) {
      this.i(function () {
        throw e;
      });
    };
    b.prototype.l = function () {
      function e(k) {
        return function (m) {
          g || ((g = !0), k.call(f, m));
        };
      }
      var f = this,
        g = !1;
      return { resolve: e(this.U), reject: e(this.o) };
    };
    b.prototype.U = function (e) {
      if (e === this)
        this.o(new TypeError("A Promise cannot resolve to itself"));
      else if (e instanceof b) this.W(e);
      else {
        a: switch (typeof e) {
          case "object":
            var f = null != e;
            break a;
          case "function":
            f = !0;
            break a;
          default:
            f = !1;
        }
        f ? this.T(e) : this.v(e);
      }
    };
    b.prototype.T = function (e) {
      var f = void 0;
      try {
        f = e.then;
      } catch (g) {
        this.o(g);
        return;
      }
      "function" == typeof f ? this.X(f, e) : this.v(e);
    };
    b.prototype.o = function (e) {
      this.O(2, e);
    };
    b.prototype.v = function (e) {
      this.O(1, e);
    };
    b.prototype.O = function (e, f) {
      if (0 != this.h)
        throw Error(
          "Cannot settle(" +
            e +
            ", " +
            f +
            "): Promise already settled in state" +
            this.h
        );
      this.h = e;
      this.i = f;
      2 === this.h && this.V();
      this.qa();
    };
    b.prototype.V = function () {
      var e = this;
      h(function () {
        if (e.ra()) {
          var f = t.console;
          "undefined" !== typeof f && f.error(e.i);
        }
      }, 1);
    };
    b.prototype.ra = function () {
      if (this.A) return !1;
      var e = t.CustomEvent,
        f = t.Event,
        g = t.dispatchEvent;
      if ("undefined" === typeof g) return !0;
      "function" === typeof e
        ? (e = new e("unhandledrejection", { cancelable: !0 }))
        : "function" === typeof f
        ? (e = new f("unhandledrejection", { cancelable: !0 }))
        : ((e = t.document.createEvent("CustomEvent")),
          e.initCustomEvent("unhandledrejection", !1, !0, e));
      e.promise = this;
      e.reason = this.i;
      return g(e);
    };
    b.prototype.qa = function () {
      if (null != this.g) {
        for (var e = 0; e < this.g.length; ++e) l.h(this.g[e]);
        this.g = null;
      }
    };
    var l = new c();
    b.prototype.W = function (e) {
      var f = this.l();
      e.B(f.resolve, f.reject);
    };
    b.prototype.X = function (e, f) {
      var g = this.l();
      try {
        e.call(f, g.resolve, g.reject);
      } catch (k) {
        g.reject(k);
      }
    };
    b.prototype.then = function (e, f) {
      function g(p, y) {
        return "function" == typeof p
          ? function (L) {
              try {
                k(p(L));
              } catch (G) {
                m(G);
              }
            }
          : y;
      }
      var k,
        m,
        n = new b(function (p, y) {
          k = p;
          m = y;
        });
      this.B(g(e, k), g(f, m));
      return n;
    };
    b.prototype.catch = function (e) {
      return this.then(void 0, e);
    };
    b.prototype.B = function (e, f) {
      function g() {
        switch (k.h) {
          case 1:
            e(k.i);
            break;
          case 2:
            f(k.i);
            break;
          default:
            throw Error("Unexpected state: " + k.h);
        }
      }
      var k = this;
      null == this.g ? l.h(g) : this.g.push(g);
      this.A = !0;
    };
    b.resolve = d;
    b.reject = function (e) {
      return new b(function (f, g) {
        g(e);
      });
    };
    b.race = function (e) {
      return new b(function (f, g) {
        for (var k = v(e), m = k.next(); !m.done; m = k.next())
          d(m.value).B(f, g);
      });
    };
    b.all = function (e) {
      var f = v(e),
        g = f.next();
      return g.done
        ? d([])
        : new b(function (k, m) {
            function n(L) {
              return function (G) {
                p[L] = G;
                y--;
                0 == y && k(p);
              };
            }
            var p = [],
              y = 0;
            do
              p.push(void 0),
                y++,
                d(g.value).B(n(p.length - 1), m),
                (g = f.next());
            while (!g.done);
          });
    };
    return b;
  });
  function z(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  u("WeakMap", function (a) {
    function b(g) {
      this.g = (f += Math.random() + 1).toString();
      if (g) {
        g = v(g);
        for (var k; !(k = g.next()).done; ) (k = k.value), this.set(k[0], k[1]);
      }
    }
    function c() {}
    function d(g) {
      var k = typeof g;
      return ("object" === k && null !== g) || "function" === k;
    }
    function h(g) {
      if (!z(g, e)) {
        var k = new c();
        r(g, e, { value: k });
      }
    }
    function l(g) {
      var k = Object[g];
      k &&
        (Object[g] = function (m) {
          if (m instanceof c) return m;
          Object.isExtensible(m) && h(m);
          return k(m);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var g = Object.seal({}),
            k = Object.seal({}),
            m = new a([
              [g, 2],
              [k, 3],
            ]);
          if (2 != m.get(g) || 3 != m.get(k)) return !1;
          m.delete(g);
          m.set(k, 4);
          return !m.has(g) && 4 == m.get(k);
        } catch (n) {
          return !1;
        }
      })()
    )
      return a;
    var e = "$jscomp_hidden_" + Math.random();
    l("freeze");
    l("preventExtensions");
    l("seal");
    var f = 0;
    b.prototype.set = function (g, k) {
      if (!d(g)) throw Error("Invalid WeakMap key");
      h(g);
      if (!z(g, e)) throw Error("WeakMap key fail: " + g);
      g[e][this.g] = k;
      return this;
    };
    b.prototype.get = function (g) {
      return d(g) && z(g, e) ? g[e][this.g] : void 0;
    };
    b.prototype.has = function (g) {
      return d(g) && z(g, e) && z(g[e], this.g);
    };
    b.prototype.delete = function (g) {
      return d(g) && z(g, e) && z(g[e], this.g) ? delete g[e][this.g] : !1;
    };
    return b;
  });
  u("Map", function (a) {
    function b() {
      var f = {};
      return (f.s = f.next = f.head = f);
    }
    function c(f, g) {
      var k = f[1];
      return ca(function () {
        if (k) {
          for (; k.head != f[1]; ) k = k.s;
          for (; k.next != k.head; )
            return (k = k.next), { done: !1, value: g(k) };
          k = null;
        }
        return { done: !0, value: void 0 };
      });
    }
    function d(f, g) {
      var k = g && typeof g;
      "object" == k || "function" == k
        ? l.has(g)
          ? (k = l.get(g))
          : ((k = "" + ++e), l.set(g, k))
        : (k = "p_" + g);
      var m = f[0][k];
      if (m && z(f[0], k))
        for (f = 0; f < m.length; f++) {
          var n = m[f];
          if ((g !== g && n.key !== n.key) || g === n.key)
            return { id: k, list: m, index: f, m: n };
        }
      return { id: k, list: m, index: -1, m: void 0 };
    }
    function h(f) {
      this[0] = {};
      this[1] = b();
      this.size = 0;
      if (f) {
        f = v(f);
        for (var g; !(g = f.next()).done; ) (g = g.value), this.set(g[0], g[1]);
      }
    }
    if (
      (function () {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var f = Object.seal({ x: 4 }),
            g = new a(v([[f, "s"]]));
          if (
            "s" != g.get(f) ||
            1 != g.size ||
            g.get({ x: 4 }) ||
            g.set({ x: 4 }, "t") != g ||
            2 != g.size
          )
            return !1;
          var k = g.entries(),
            m = k.next();
          if (m.done || m.value[0] != f || "s" != m.value[1]) return !1;
          m = k.next();
          return m.done ||
            4 != m.value[0].x ||
            "t" != m.value[1] ||
            !k.next().done
            ? !1
            : !0;
        } catch (n) {
          return !1;
        }
      })()
    )
      return a;
    var l = new WeakMap();
    h.prototype.set = function (f, g) {
      f = 0 === f ? 0 : f;
      var k = d(this, f);
      k.list || (k.list = this[0][k.id] = []);
      k.m
        ? (k.m.value = g)
        : ((k.m = {
            next: this[1],
            s: this[1].s,
            head: this[1],
            key: f,
            value: g,
          }),
          k.list.push(k.m),
          (this[1].s.next = k.m),
          (this[1].s = k.m),
          this.size++);
      return this;
    };
    h.prototype.delete = function (f) {
      f = d(this, f);
      return f.m && f.list
        ? (f.list.splice(f.index, 1),
          f.list.length || delete this[0][f.id],
          (f.m.s.next = f.m.next),
          (f.m.next.s = f.m.s),
          (f.m.head = null),
          this.size--,
          !0)
        : !1;
    };
    h.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].s = b();
      this.size = 0;
    };
    h.prototype.has = function (f) {
      return !!d(this, f).m;
    };
    h.prototype.get = function (f) {
      return (f = d(this, f).m) && f.value;
    };
    h.prototype.entries = function () {
      return c(this, function (f) {
        return [f.key, f.value];
      });
    };
    h.prototype.keys = function () {
      return c(this, function (f) {
        return f.key;
      });
    };
    h.prototype.values = function () {
      return c(this, function (f) {
        return f.value;
      });
    };
    h.prototype.forEach = function (f, g) {
      for (var k = this.entries(), m; !(m = k.next()).done; )
        (m = m.value), f.call(g, m[1], m[0], this);
    };
    h.prototype[Symbol.iterator] = h.prototype.entries;
    var e = 0;
    return h;
  });
  u("Number.isFinite", function (a) {
    return a
      ? a
      : function (b) {
          return "number" !== typeof b
            ? !1
            : !isNaN(b) && Infinity !== b && -Infinity !== b;
        };
  });
  u("Object.values", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) z(b, d) && c.push(b[d]);
          return c;
        };
  });
  u("Object.is", function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  u("Array.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var h = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + h, 0)); c < h; c++) {
            var l = d[c];
            if (l === b || Object.is(l, b)) return !0;
          }
          return !1;
        };
  });
  u("String.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          if (null == this)
            throw new TypeError(
              "The 'this' value for String.prototype.includes must not be null or undefined"
            );
          if (b instanceof RegExp)
            throw new TypeError(
              "First argument to String.prototype.includes must not be a regular expression"
            );
          return -1 !== this.indexOf(b, c || 0);
        };
  });
  function ua(a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      h = {
        next: function () {
          if (!d && c < a.length) {
            var l = c++;
            return { value: b(l, a[l]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    h[Symbol.iterator] = function () {
      return h;
    };
    return h;
  }
  u("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return ua(this, function (b) {
            return b;
          });
        };
  });
  u("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return ua(this, function (b, c) {
            return c;
          });
        };
  });
  u("Array.from", function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (f) {
                  return f;
                };
          var h = [],
            l =
              "undefined" != typeof Symbol &&
              Symbol.iterator &&
              b[Symbol.iterator];
          if ("function" == typeof l) {
            b = l.call(b);
            for (var e = 0; !(l = b.next()).done; )
              h.push(c.call(d, l.value, e++));
          } else
            for (l = b.length, e = 0; e < l; e++) h.push(c.call(d, b[e], e));
          return h;
        };
  });
  u("Set", function (a) {
    function b(c) {
      this.g = new Map();
      if (c) {
        c = v(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.g.size;
    }
    if (
      (function () {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var c = Object.seal({ x: 4 }),
            d = new a(v([c]));
          if (
            !d.has(c) ||
            1 != d.size ||
            d.add(c) != d ||
            1 != d.size ||
            d.add({ x: 4 }) != d ||
            2 != d.size
          )
            return !1;
          var h = d.entries(),
            l = h.next();
          if (l.done || l.value[0] != c || l.value[1] != c) return !1;
          l = h.next();
          return l.done ||
            l.value[0] == c ||
            4 != l.value[0].x ||
            l.value[1] != l.value[0]
            ? !1
            : h.next().done;
        } catch (e) {
          return !1;
        }
      })()
    )
      return a;
    b.prototype.add = function (c) {
      c = 0 === c ? 0 : c;
      this.g.set(c, c);
      this.size = this.g.size;
      return this;
    };
    b.prototype.delete = function (c) {
      c = this.g.delete(c);
      this.size = this.g.size;
      return c;
    };
    b.prototype.clear = function () {
      this.g.clear();
      this.size = 0;
    };
    b.prototype.has = function (c) {
      return this.g.has(c);
    };
    b.prototype.entries = function () {
      return this.g.entries();
    };
    b.prototype.values = function () {
      return this.g.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) {
      var h = this;
      this.g.forEach(function (l) {
        return c.call(d, l, l, h);
      });
    };
    return b;
  }); /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var A = this || self;
  function va(a) {
    a: {
      var b = ["CLOSURE_FLAGS"];
      for (var c = A, d = 0; d < b.length; d++)
        if (((c = c[b[d]]), null == c)) {
          b = null;
          break a;
        }
      b = c;
    }
    a = b && b[a];
    return null != a ? a : !1;
  }
  function wa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function xa(a) {
    A.setTimeout(function () {
      throw a;
    }, 0);
  }
  var ya = va(610401301),
    za = va(188588736);
  var B,
    Aa = A.navigator;
  B = Aa ? Aa.userAgentData || null : null;
  function Ba(a) {
    return ya
      ? B
        ? B.brands.some(function (b) {
            return (b = b.brand) && -1 != b.indexOf(a);
          })
        : !1
      : !1;
  }
  function C(a) {
    var b;
    a: {
      if ((b = A.navigator)) if ((b = b.userAgent)) break a;
      b = "";
    }
    return -1 != b.indexOf(a);
  }
  function D() {
    return ya ? !!B && 0 < B.brands.length : !1;
  }
  function Ca() {
    return D()
      ? Ba("Chromium")
      : ((C("Chrome") || C("CriOS")) && !(D() ? 0 : C("Edge"))) || C("Silk");
  }
  var Da = D() ? !1 : C("Trident") || C("MSIE");
  !C("Android") || Ca();
  Ca();
  C("Safari") &&
    (Ca() ||
      (D() ? 0 : C("Coast")) ||
      (D() ? 0 : C("Opera")) ||
      (D() ? 0 : C("Edge")) ||
      (D() ? Ba("Microsoft Edge") : C("Edg/")) ||
      (D() && Ba("Opera")));
  var Ea = {},
    E = null;
  var Fa = "undefined" !== typeof Uint8Array,
    Ga = !Da && "function" === typeof btoa;
  var F;
  F =
    "function" === typeof Symbol && "symbol" === typeof Symbol()
      ? Symbol()
      : void 0;
  var H = F
      ? function (a) {
          return a[F] | 0;
        }
      : function (a) {
          return a.g | 0;
        },
    I = F
      ? function (a) {
          return a[F];
        }
      : function (a) {
          return a.g;
        },
    J = F
      ? function (a, b) {
          a[F] = b;
        }
      : function (a, b) {
          void 0 !== a.g
            ? (a.g = b)
            : Object.defineProperties(a, {
                g: { value: b, configurable: !0, writable: !0, enumerable: !1 },
              });
        };
  function Ha(a) {
    a = (a >> 14) & 1023;
    return 0 === a ? 536870912 : a;
  }
  var Ia = {},
    Ja = {};
  function Ka(a) {
    return !(!a || "object" !== typeof a || a.g !== Ja);
  }
  function La(a) {
    return (
      null !== a &&
      "object" === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  function K(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    var d = H(a);
    if (d & 1) return !0;
    if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
    J(a, d | 1);
    return !0;
  }
  function Ma(a) {
    if (a & 2) throw Error();
  }
  Object.freeze(new (function () {})());
  Object.freeze(new (function () {})());
  var Na;
  function M(a, b, c) {
    null == a && (a = Na);
    Na = void 0;
    if (null == a) {
      var d = 96;
      c ? ((a = [c]), (d |= 512)) : (a = []);
      b && (d = (d & -16760833) | ((b & 1023) << 14));
    } else {
      if (!Array.isArray(a)) throw Error();
      d = H(a);
      if (d & 64) return a;
      d |= 64;
      if (c && ((d |= 512), c !== a[0])) throw Error();
      a: {
        c = a;
        var h = c.length;
        if (h) {
          var l = h - 1;
          if (La(c[l])) {
            d |= 256;
            b = l - (+!!(d & 512) - 1);
            if (1024 <= b) throw Error();
            d = (d & -16760833) | ((b & 1023) << 14);
            break a;
          }
        }
        if (b) {
          b = Math.max(b, h - (+!!(d & 512) - 1));
          if (1024 < b) throw Error();
          d = (d & -16760833) | ((b & 1023) << 14);
        }
      }
    }
    J(a, d);
    return a;
  }
  function Oa(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a)
          if (Array.isArray(a)) {
            if (K(a, void 0, 0)) return;
          } else if (Fa && null != a && a instanceof Uint8Array) {
            if (Ga) {
              for (var b = "", c = 0, d = a.length - 10240; c < d; )
                b += String.fromCharCode.apply(
                  null,
                  a.subarray(c, (c += 10240))
                );
              b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
              a = btoa(b);
            } else {
              void 0 === b && (b = 0);
              if (!E) {
                E = {};
                c =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                    ""
                  );
                d = ["+/=", "+/", "-_=", "-_.", "-_"];
                for (var h = 0; 5 > h; h++) {
                  var l = c.concat(d[h].split(""));
                  Ea[h] = l;
                  for (var e = 0; e < l.length; e++) {
                    var f = l[e];
                    void 0 === E[f] && (E[f] = e);
                  }
                }
              }
              b = Ea[b];
              c = Array(Math.floor(a.length / 3));
              d = b[64] || "";
              for (h = l = 0; l < a.length - 2; l += 3) {
                var g = a[l],
                  k = a[l + 1];
                f = a[l + 2];
                e = b[g >> 2];
                g = b[((g & 3) << 4) | (k >> 4)];
                k = b[((k & 15) << 2) | (f >> 6)];
                f = b[f & 63];
                c[h++] = e + g + k + f;
              }
              e = 0;
              f = d;
              switch (a.length - l) {
                case 2:
                  (e = a[l + 1]), (f = b[(e & 15) << 2] || d);
                case 1:
                  (a = a[l]),
                    (c[h] = b[a >> 2] + b[((a & 3) << 4) | (e >> 4)] + f + d);
              }
              a = c.join("");
            }
            return a;
          }
    }
    return a;
  }
  function Pa(a, b, c, d, h) {
    if (null != a) {
      if (Array.isArray(a))
        a = K(a, void 0, 0)
          ? void 0
          : h && H(a) & 2
          ? a
          : N(a, b, c, void 0 !== d, h);
      else if (La(a)) {
        var l = {},
          e;
        for (e in a) l[e] = Pa(a[e], b, c, d, h);
        a = l;
      } else a = b(a, d);
      return a;
    }
  }
  function N(a, b, c, d, h) {
    var l = d || c ? H(a) : 0;
    d = d ? !!(l & 32) : void 0;
    a = Array.prototype.slice.call(a);
    for (var e = 0; e < a.length; e++) a[e] = Pa(a[e], b, c, d, h);
    c && c(l, a);
    return a;
  }
  function Qa(a) {
    return a.N === Ia
      ? O(a, N(a.j, Qa, void 0, void 0, !1), !0)
      : Fa && null != a && a instanceof Uint8Array
      ? new Uint8Array(a)
      : a;
  }
  function Ra(a) {
    return a.N === Ia ? a.toJSON() : Oa(a);
  }
  function P(a, b, c, d) {
    var h = Ha(b);
    if (c >= h) {
      var l = b;
      if (b & 256) var e = a[a.length - 1];
      else {
        if (null == d) return l;
        e = a[h + (+!!(b & 512) - 1)] = {};
        l |= 256;
      }
      e[c] = d;
      c < h && (a[c + (+!!(b & 512) - 1)] = void 0);
      l !== b && J(a, l);
      return l;
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
    return b;
  }
  function Sa(a, b) {
    a = a.j;
    return Ta(a, I(a), b);
  }
  function Ta(a, b, c) {
    for (var d = 0, h = 0; h < c.length; h++) {
      var l = c[h];
      a: if (-1 === l) var e = null;
      else {
        if (l >= Ha(b)) {
          if (b & 256) {
            e = a[a.length - 1][l];
            break a;
          }
        } else if (((e = l + (+!!(b & 512) - 1)), e < a.length)) {
          e = a[e];
          break a;
        }
        e = void 0;
      }
      null != e && (0 !== d && (b = P(a, b, d)), (d = l));
    }
    return d;
  }
  function Q(a, b, c) {
    var d = Ua;
    null == c && (c = void 0);
    var h = a.j,
      l = I(h);
    Ma(l);
    (d = Ta(h, l, d)) && d !== b && null != c && (l = P(h, l, d));
    P(h, l, b, c);
    return a;
  }
  function Va(a, b) {
    a = 2 & b ? a | 2 : a & -3;
    a = 32 & b ? a | 32 : a & -33;
    return a & -2049;
  }
  function Wa(a, b, c) {
    if (null != c && "string" !== typeof c) throw Error();
    var d = a.j,
      h = I(d);
    Ma(h);
    P(d, h, b, c);
    return a;
  }
  function R(a, b, c) {
    this.j = M(a, b, c);
  }
  R.prototype.toJSON = function () {
    return O(this, N(this.j, Ra, void 0, void 0, !1), !0);
  };
  R.prototype.N = Ia;
  R.prototype.toString = function () {
    return O(this, this.j, !1).toString();
  };
  function O(a, b, c) {
    var d = za ? void 0 : a.constructor.oa;
    var h = I(c ? a.j : b);
    a = b.length;
    if (!a) return b;
    var l;
    if (La((c = b[a - 1]))) {
      a: {
        var e = c;
        var f = {},
          g = !1,
          k;
        for (k in e) {
          var m = e[k];
          if (Array.isArray(m)) {
            var n = m;
            if (K(m, d, +k) || (Ka(m) && 0 === m.size)) m = null;
            m != n && (g = !0);
          }
          null != m ? (f[k] = m) : (g = !0);
        }
        if (g) {
          for (var p in f) {
            e = f;
            break a;
          }
          e = null;
        }
      }
      e != c && (l = !0);
      a--;
    }
    for (k = +!!(h & 512) - 1; 0 < a; a--) {
      p = a - 1;
      c = b[p];
      p -= k;
      if (!(null == c || K(c, d, p) || (Ka(c) && 0 === c.size))) break;
      var y = !0;
    }
    if (!l && !y) return b;
    b = Array.prototype.slice.call(b, 0, a);
    e && b.push(e);
    return b;
  }
  function Xa(a) {
    this.j = M(a);
  }
  w(Xa, R);
  function Ya(a) {
    this.j = M(a);
  }
  w(Ya, R);
  function Za(a) {
    this.j = M(a);
  }
  w(Za, R);
  function $a(a) {
    this.j = M(a);
  }
  w($a, R);
  function ab(a) {
    this.j = M(a);
  }
  w(ab, R);
  function bb(a) {
    this.j = M(a);
  }
  w(bb, R);
  function cb(a) {
    this.j = M(a);
  }
  w(cb, R);
  function db(a) {
    this.j = M(a);
  }
  w(db, R);
  function eb(a) {
    this.j = M(a);
  }
  w(eb, R);
  eb.oa = [1];
  function S(a) {
    this.j = M(a);
  }
  w(S, R);
  S.prototype.F = function () {
    return Sa(this, Ua);
  };
  var Ua = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function fb(a) {
    this.j = M(a);
  }
  w(fb, R);
  fb.prototype.F = function () {
    return Sa(this, gb);
  };
  var gb = [2, 3, 4, 5, 6, 7];
  function T(a) {
    0 === a.indexOf("#") && (a = a.substring(1));
    return new URLSearchParams(a);
  }
  var hb = { H: !1, G: !1, requestNonPersonalizedAds: !1, L: !1, M: !1 },
    ib = { Y: !1, S: !1 };
  function jb(a) {
    return a ? "on" : "off";
  }
  var kb = ["preroll", "start", "pause", "next", "browse"];
  function lb(a, b, c, d) {
    var h = this;
    this.postMessageHandler = a;
    this.monetizationScriptAttributes = b;
    this.P = c;
    this.R = !1;
    this.J = function (l) {
      (h.monetizationScriptAttributes.H || h.monetizationScriptAttributes.G) &&
        window.adsbygoogle.push({ sound: jb(l.isAudioEnabled) });
    };
    this.postMessageHandler.u("SET_AUDIO", this.J);
    (a = mb.ha()) &&
      setTimeout(function () {
        return void nb(h);
      }, Math.max(0, a - Date.now()));
    this.postMessageHandler.u("SPLASH_TIMEOUT", function () {
      h.R = !0;
    });
    window.adsbygoogle = window.adsbygoogle || [];
    b.requestNonPersonalizedAds &&
      (window.adsbygoogle.requestNonPersonalizedAds = 1);
    if (b.H || b.G)
      (b = {
        preloadAdBreaks: "on",
        sound: jb(d.audio.isEnabled()),
        onReady: function () {
          window.adsbygoogle.push({ preloadAdBreaks: "on" });
        },
      }),
        window.adsbygoogle.push(b);
  }
  function nb(a) {
    a.R ||
      a.break({
        type: "preroll",
        beforeAd: function () {
          a.P(!0);
          setTimeout(function () {
            a.postMessageHandler.send({ messageType: "PREROLL_READY" });
          }, 33);
        },
        adBreakDone: function () {
          a.P(!1);
          a.postMessageHandler.send({ messageType: "PREROLL_DONE" });
        },
      });
  }
  lb.prototype.break = function (a) {
    this.postMessageHandler.send({ messageType: "AD_BREAK" });
    this.monetizationScriptAttributes.H &&
      "reward" === a.type &&
      window.adsbygoogle.push(a);
    this.monetizationScriptAttributes.G &&
      kb.includes(a.type) &&
      window.adsbygoogle.push(a);
  };
  var mb = {
    ha: function (a) {
      a = T(a || window.location.hash);
      if (!a) return 0;
      a = (a = a.get("preStart")) ? Number(a) : 0;
      return isNaN(a) ? 0 : a;
    },
  };
  function ob() {}
  function U(a) {
    var b = this;
    this.postMessageHandler = a;
    this.g = !pb.aa();
    this.l = [];
    this.h = !1;
    this.J = function (c) {
      b.g = c.isAudioEnabled;
      qb(b);
    };
    this.postMessageHandler.u("SET_AUDIO", this.J);
  }
  U.prototype.i = function (a) {
    this.h !== a && ((this.h = a), this.g && qb(this));
  };
  function qb(a) {
    var b = a.g && !a.h;
    a = v(a.l);
    for (var c = a.next(); !c.done; c = a.next()) (c = c.value), c(b);
  }
  U.prototype.isEnabled = function () {
    this.postMessageHandler.send({ messageType: "AUDIO_IS_ENABLED" });
    return this.g && !this.h;
  };
  U.prototype.subscribe = function (a) {
    "function" === typeof a &&
      (this.postMessageHandler.send({ messageType: "AUDIO_SUBSCRIBE" }),
      this.l.push(a));
  };
  var pb = {
    aa: function (a) {
      return "true" === T(a || window.location.hash).get("audioMuted");
    },
  };
  function V(a) {
    a = Error.call(this, a);
    this.message = a.message;
    "stack" in a && (this.stack = a.stack);
  }
  w(V, Error);
  function rb(a, b) {
    this.data = a;
    this.channel = b;
  }
  function sb(a) {
    this.g = a;
  }
  sb.prototype.send = function (a, b, c) {
    c = void 0 === c ? [] : c;
    b = tb(b);
    this.g.postMessage(a, [b.port2].concat(c));
  };
  function ub(a, b) {
    vb(a, b);
    return new sb(a);
  }
  function tb(a) {
    var b = new MessageChannel();
    vb(b.port1, a);
    return b;
  }
  function vb(a, b) {
    b &&
      (a.onmessage = function (c) {
        var d = c.data;
        c = ub(c.ports[0]);
        b(new rb(d, c));
      });
  }
  function W(a) {
    try {
      a();
    } catch (b) {
      xa(b);
    }
  }
  function wb(a) {
    var b = this,
      c = a.fa,
      d = void 0 === a.na ? function () {} : a.na,
      h = void 0 === a.ka ? function () {} : a.ka;
    a = void 0 === a.ja ? function () {} : a.ja;
    this.g = new Map();
    this.h = c;
    this.o = d;
    this.l = h;
    this.i = a;
    this.onMessage = function (l) {
      return xb(b, l);
    };
  }
  wb.prototype.register = function (a, b) {
    this.g.set(a, b);
    return this;
  };
  function xb(a, b) {
    var c = a.h(b.data),
      d = a.g.get(c);
    d
      ? (W(function () {
          return a.l(b, c);
        }),
        W(function () {
          return d(b);
        }),
        W(function () {
          return a.i(b, c);
        }))
      : W(function () {
          return a.o(b, c);
        });
  }
  function yb(a) {
    this.g = a;
  }
  yb.prototype.send = function (a, b, c) {
    this.g.send(O(a, N(a.j, Qa, void 0, void 0, !1), !0), b, c);
  };
  function zb(a, b) {
    return function (c) {
      var d = new a(c.data);
      return b(new rb(d, c.channel));
    };
  }
  function Ab(a) {
    return function (b) {
      return a(new rb(b.data, new yb(b.channel)));
    };
  }
  function Bb(a, b, c, d) {
    this.l = a;
    this.i = b;
    this.K = c;
    this.I = d;
    this.g = !1;
    this.h = new Set();
  }
  function Cb(a) {
    var b = new wb({ fa: a.F }),
      c = {
        destination: window.parent,
        origin: a.origin,
        C: a.C,
        onMessage: Ab(zb(a.K, b.onMessage)),
      };
    var d = c.destination;
    var h = c.origin,
      l = void 0 === c.pa ? void 0 : c.pa,
      e = void 0 === c.C ? "ZNWN1d" : c.C;
    c = void 0 === c.onMessage ? void 0 : c.onMessage;
    if ("*" === h) throw Error("Sending to wildcard origin not allowed.");
    var f = tb(c),
      g = {};
    l = l ? ((g.n = e), (g.t = l), g) : e;
    d.postMessage(l, h, [f.port2]);
    d = ub(f.port1, c);
    return new Bb(b, new yb(d), a.K, a.I);
  }
  Bb.prototype.send = function (a) {
    if (!this.g)
      throw new V("Attempted to send a message before initialisation.");
    this.i.send(a);
  };
  Bb.prototype.init = function () {
    var a = this;
    return sa(
      new ra(
        new oa(function (b) {
          if (a.g)
            throw new V(
              "Attempted to initialise twice. The SDK can only be initialised once."
            );
          if (void 0 !== a.I) {
            var c = a.i,
              d = c.send,
              h = a.I,
              l = new eb();
            var e = [].concat(da(a.h)),
              f = l.j,
              g = I(f);
            Ma(g);
            if (null == e) P(f, g, 1);
            else {
              var k = H(e),
                m = k,
                n = !!(2 & k) || Object.isFrozen(e),
                p;
              if ((p = !n)) p = !1;
              if (!(4 & k))
                for (
                  k = 21,
                    n &&
                      ((e = Array.prototype.slice.call(e)),
                      (m = 0),
                      (k = Va(k, g))),
                    n = 0;
                  n < e.length;
                  n++
                ) {
                  var y = e,
                    L = n,
                    G = e[n];
                  if (!Number.isFinite(G))
                    throw (
                      ((c = b = Error("enum")),
                      c.__closure__error__context__984382 ||
                        (c.__closure__error__context__984382 = {}),
                      (c.__closure__error__context__984382.severity =
                        "warning"),
                      b)
                    );
                  y[L] = G | 0;
                }
              p &&
                ((e = Array.prototype.slice.call(e)), (m = 0), (k = Va(k, g)));
              k !== m && J(e, k);
              P(f, g, 1, e);
            }
            d.call(c, h.call(a, l));
          }
          a.g = !0;
          b.l = 0;
        })
      )
    );
  };
  function Db(a, b) {
    if (a.g)
      throw new V(
        "Attempted to use a new API after initialisation. All APIs must be set up before initialising the SDK."
      );
    a.h.add(b);
    return a.l;
  }
  function Eb(a) {
    return Cb({
      origin: a,
      C: "gamesnacks-developer",
      K: fb,
      F: function (b) {
        return b.F();
      },
    });
  }
  function Fb(a, b, c, d, h) {
    this.postMessageHandler = a;
    this.channel = void 0 === b ? null : b;
    this.monetizationScriptAttributes = c;
    this.g = d;
    this.ad = h;
    this.h = [];
    this.i = [];
    null !== this.channel &&
      Db(this.channel, 2)
        .register(6, this.la.bind(this))
        .register(7, this.ma.bind(this));
  }
  q = Fb.prototype;
  q.firstFrameReady = function () {
    var a;
    if (null != (a = this.channel)) {
      var b = a.send;
      var c = new S();
      var d = new Xa();
      c = Q(c, 5, d);
      b.call(a, c);
    }
  };
  q.ready = function () {
    this.postMessageHandler.send({
      messageType: "GAME_READY",
      timestamp: Date.now(),
    });
  };
  q.onPause = function (a) {
    this.h.push(a);
    if (null != (a = this.channel)) {
      var b = a.send;
      var c = new S();
      var d = new Ya();
      c = Q(c, 8, d);
      b.call(a, c);
    }
  };
  q.onResume = function (a) {
    this.i.push(a);
    if (null != (a = this.channel)) {
      var b = a.send;
      var c = new S();
      var d = new $a();
      c = Q(c, 9, d);
      b.call(a, c);
    }
  };
  q.gameOver = function () {
    this.postMessageHandler.send({ messageType: "GAME_OVER" });
    this.monetizationScriptAttributes.L && Gb(this, "gameOver");
  };
  q.levelComplete = function (a) {
    "number" === typeof a &&
      (this.postMessageHandler.send({
        messageType: "LEVEL_COMPLETE",
        level: a,
      }),
      this.monetizationScriptAttributes.M && Gb(this, "levelComplete"));
  };
  q.la = function (a) {
    for (var b = v(this.h), c = b.next(); !c.done; c = b.next())
      (c = c.value), c();
    b = new S();
    c = new Za();
    b = Q(b, 6, c);
    a.channel.send(b, void 0, void 0);
  };
  q.ma = function (a) {
    for (var b = v(this.i), c = b.next(); !c.done; c = b.next())
      (c = c.value), c();
    b = new S();
    c = new ab();
    b = Q(b, 7, c);
    a.channel.send(b, void 0, void 0);
  };
  function Gb(a, b) {
    a.ad.break({
      type: "next",
      name: b,
      beforeAd: function () {
        return void a.g.i(!0);
      },
      afterAd: function () {
        return void a.g.i(!1);
      },
    });
  }
  function Hb(a) {
    this.postMessageHandler = a;
  }
  Hb.prototype.update = function (a) {
    "number" === typeof a &&
      this.postMessageHandler.send({ messageType: "SCORE", score: a });
  };
  function Ib(a) {
    return a[A.Symbol.iterator]();
  }
  function Jb(a, b) {
    this.g = Ib(a);
    this.h = b;
  }
  Jb.prototype[Symbol.iterator] = function () {
    return this;
  };
  Jb.prototype.next = function () {
    var a = this.g.next();
    return {
      value: a.done ? void 0 : this.h.call(void 0, a.value),
      done: a.done,
    };
  };
  function Kb(a, b) {
    return new Jb(a, b);
  }
  function Lb(a) {
    this.h = a;
    this.g = 0;
  }
  Lb.prototype[Symbol.iterator] = function () {
    return this;
  };
  Lb.prototype.next = function () {
    for (; this.g < this.h.length; ) {
      var a = this.h[this.g].next();
      if (!a.done) return a;
      this.g++;
    }
    return { done: !0 };
  };
  function Mb() {
    return new Lb(ta.apply(0, arguments).map(Ib));
  }
  function X(a) {
    this.g = a;
  }
  X.prototype.toString = function () {
    return this.g.toString();
  };
  var Nb = {};
  function Ob() {
    var a = document;
    var b = "A";
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  } /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Pb = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
  function Qb(a, b) {
    b instanceof X
      ? (b = b instanceof X && b.constructor === X ? b.g : "type_error:SafeUrl")
      : (b = Pb.test(b) ? b : void 0);
    void 0 !== b && (a.href = b);
  }
  var Rb = A.URL,
    Sb;
  try {
    new Rb("http://example.com"), (Sb = !0);
  } catch (a) {
    Sb = !1;
  }
  var Tb = Sb;
  function Y(a) {
    this.g = new Map();
    0 == a.indexOf("?") && (a = a.substring(1));
    a = v(a.split("&"));
    for (var b = a.next(); !b.done; b = a.next()) {
      var c = b.value;
      b = c;
      var d = "";
      c = c.split("=");
      1 < c.length &&
        ((b = decodeURIComponent(c[0].replace("+", " "))),
        (d = decodeURIComponent(c[1].replace("+", " "))));
      c = this.g.get(b);
      null == c && ((c = []), this.g.set(b, c));
      c.push(d);
    }
  }
  Y.prototype.get = function (a) {
    return (a = this.g.get(a)) && a.length ? a[0] : null;
  };
  Y.prototype.getAll = function (a) {
    return [].concat(da(this.g.get(a) || []));
  };
  Y.prototype.has = function (a) {
    return this.g.has(a);
  };
  Y.prototype[Symbol.iterator] = function () {
    return Mb.apply(
      null,
      da(
        Kb(this.g, function (a) {
          var b = a[0];
          return Kb(a[1], function (c) {
            return [b, c];
          });
        })
      )
    );
  };
  Y.prototype.toString = function () {
    return Ub(this);
  };
  function Ub(a) {
    function b(c) {
      return encodeURIComponent(c).replace(/[!()~']|(%20)/g, function (d) {
        return {
          "!": "%21",
          "(": "%28",
          ")": "%29",
          "%20": "+",
          "'": "%27",
          "~": "%7E",
        }[d];
      });
    }
    return Array.from(a, function (c) {
      return b(c[0]) + "=" + b(c[1]);
    }).join("&");
  }
  function Vb(a) {
    var b = Ob();
    try {
      Qb(b, new X(a, Nb));
      var c = b.protocol;
    } catch (h) {
      throw Error(a + " is not a valid URL.");
    }
    if ("" === c || ":" === c || ":" != c[c.length - 1])
      throw Error(a + " is not a valid URL.");
    if (!Wb.has(c)) throw Error(a + " is not a valid URL.");
    if (!b.hostname) throw Error(a + " is not a valid URL.");
    var d = b.href;
    a = {
      href: d,
      protocol: b.protocol,
      username: "",
      password: "",
      hostname: b.hostname,
      pathname: "/" + b.pathname,
      search: b.search,
      hash: b.hash,
      toString: function () {
        return d;
      },
    };
    Wb.get(b.protocol) === b.port
      ? ((a.host = a.hostname),
        (a.port = ""),
        (a.origin = a.protocol + "//" + a.hostname))
      : ((a.host = b.host),
        (a.port = b.port),
        (a.origin = a.protocol + "//" + a.hostname + ":" + a.port));
    return a;
  }
  var Wb = new Map([
    ["http:", "80"],
    ["https:", "443"],
    ["ws:", "80"],
    ["wss:", "443"],
    ["ftp:", "21"],
  ]);
  var Xb = { google_ama_config: !0 };
  function Yb(a) {
    this.channel = void 0 === a ? null : a;
    this.g = {};
    if ((a = Zb.ea() || Zb.da()))
      try {
        var b = JSON.parse(atob(decodeURIComponent(a)));
        if ("object" !== typeof b)
          throw Error("malformed gameData param: " + a);
        this.g = b;
      } catch (c) {
        console.error("Error parsing gameData param: " + JSON.stringify(c));
      }
  }
  q = Yb.prototype;
  q.clear = function () {
    var a = new S();
    var b = new bb();
    a = Q(a, 4, b);
    var c;
    null == (c = this.channel) || c.send(a);
    this.g = {};
  };
  q.getItem = function (a) {
    var b;
    return null != (b = this.g[a]) ? b : null;
  };
  q.setItem = function (a, b) {
    ["boolean", "number"].includes(typeof b) && (b = b.toString());
    if (!Xb[a]) {
      var c = new S();
      var d = new db();
      d = Wa(d, 1, a);
      d = Wa(d, 2, b);
      c = Q(c, 1, d);
      var h;
      null == (h = this.channel) || h.send(c);
      this.g[a] = b;
    }
  };
  q.removeItem = function (a) {
    var b = new S();
    var c = new cb();
    c = Wa(c, 1, a);
    b = Q(b, 3, c);
    var d;
    null == (d = this.channel) || d.send(b);
    delete this.g[a];
  };
  q.key = function (a) {
    var b = Object.keys(this.g);
    return a >= b.length ? null : b[a];
  };
  q.hasOwnProperty = function (a) {
    return this.g.hasOwnProperty(a);
  };
  t.Object.defineProperties(Yb.prototype, {
    length: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        var a;
        return null != (a = Object.keys(this.g).length) ? a : 0;
      },
    },
  });
  var Zb = {
    da: function () {
      var a = window.location.href;
      if (Tb) {
        try {
          var b = new Rb(a);
        } catch (d) {
          throw Error(a + " is not a valid URL.");
        }
        var c = Wb.get(b.protocol);
        if (!c) throw Error(a + " is not a valid URL.");
        if (!b.hostname) throw Error(a + " is not a valid URL.");
        "null" == b.origin &&
          ((a = {
            href: b.href,
            protocol: b.protocol,
            username: "",
            password: "",
            host: b.host,
            port: b.port,
            hostname: b.hostname,
            pathname: b.pathname,
            search: b.search,
            hash: b.hash,
          }),
          (a.origin =
            c === b.port
              ? b.protocol + "//" + b.hostname
              : b.protocol + "//" + b.hostname + ":" + b.port),
          (b = a));
      } else b = Vb(a);
      return (Tb && b.searchParams ? b.searchParams : new Y(b.search)).get(
        "gameData"
      );
    },
    ea: function (a) {
      a = a || window.location.hash;
      return T(a).get("gameData");
    },
  };
  function $b(a) {
    a && "function" == typeof a.D && a.D();
  }
  function Z() {
    this.h = this.h;
    this.g = this.g;
  }
  Z.prototype.h = !1;
  Z.prototype.D = function () {
    if (!this.h && ((this.h = !0), this.g))
      for (; this.g.length; ) this.g.shift()();
  };
  function ac(a, b) {
    a.h ? b() : (a.g || (a.g = []), a.g.push(b));
  }
  function bc(a, b, c, d, h) {
    b = void 0 === b ? null : b;
    c = void 0 === c ? hb : c;
    d = void 0 === d ? ib : d;
    Z.call(this);
    this.postMessageHandler = a;
    this.channel = b;
    this.monetizationScriptAttributes = c;
    this.experimentFlags = d;
    this.i = h;
    this.audio = new U(this.postMessageHandler);
    this.ad = new lb(
      this.postMessageHandler,
      this.monetizationScriptAttributes,
      this.audio.i.bind(this.audio),
      this
    );
    this.game = new Fb(
      this.postMessageHandler,
      this.channel,
      this.monetizationScriptAttributes,
      this.audio,
      this.ad
    );
    this.score = new Hb(this.postMessageHandler);
    this.storage = new Yb(this.channel);
    this.postMessageHandler.send({ messageType: "LOADED" });
    a.u("SET_LOG_LEVEL", ob);
    ac(this, wa($b, a));
    this.i && ac(this, wa($b, this.i));
    b && (Db(b, 4), b.init());
  }
  w(bc, Z);
  function cc() {
    Z.apply(this, arguments);
    this.targetOrigin = "";
  }
  w(cc, Z);
  cc.prototype.u = function () {};
  cc.prototype.send = function () {};
  function dc(a) {
    Z.call(this);
    var b = this;
    this.targetOrigin = a;
    this.i = new Map();
    if ("*" === a)
      throw Error(
        "targetOrigin of '*' is insecure. Use the origin of the parent frame."
      );
    ac(this, function () {
      b.i.clear();
    });
    window.addEventListener("message", function (c) {
      var d = c.data;
      if (
        c.origin === b.targetOrigin &&
        "string" === typeof (null == d ? void 0 : d.messageType) &&
        ((c = d.messageType),
        "object" !== typeof d || null === d ? 0 : d.messageType === c) &&
        (c = b.i.get(c))
      ) {
        c = v(c);
        for (var h = c.next(); !h.done; h = c.next()) (h = h.value), h(d);
      }
    });
  }
  w(dc, Z);
  dc.prototype.u = function (a, b) {
    if (!this.h) {
      var c = this.i.get(a);
      c || ((c = new Set()), this.i.set(a, c));
      c.add(b);
    }
  };
  dc.prototype.send = function (a) {
    window.parent.postMessage(a, this.targetOrigin);
  };
  function ec(a, b) {
    Z.call(this);
    var c = this;
    this.postMessageHandler = a;
    this.window = b;
    this.i = this.userActivityLoggingIntervalMs = 0;
    this.o = function (d) {
      d = d.userActivityLoggingIntervalMs;
      0 >= d ||
        ((c.userActivityLoggingIntervalMs = d),
        c.window.addEventListener("pointerdown", c.l, !0));
    };
    this.l = function (d) {
      !d.isTrusted ||
        Date.now() - c.i < c.userActivityLoggingIntervalMs ||
        ((c.i = Date.now()),
        c.postMessageHandler.send({ messageType: "USER_ACTIVITY" }));
    };
    a.u("SET_USER_ACTIVITY_METRICS_INTERVAL", this.o);
  }
  w(ec, Z);
  ec.prototype.D = function () {
    Z.prototype.D.call(this);
    this.window.removeEventListener("pointerdown", this.l, !0);
  };
  var fc = {
    ba: function () {
      var a;
      return (
        (null == (a = document.currentScript)
          ? void 0
          : a.getAttribute("data-target-origin")) || void 0
      );
    },
    ga: function (a) {
      return document.currentScript
        ? {
            H: document.currentScript.hasAttribute("data-rewarded-monetizable"),
            G: document.currentScript.hasAttribute(
              "data-interstitial-monetizable"
            ),
            requestNonPersonalizedAds: document.currentScript.hasAttribute(
              "data-request-non-personalized-ads"
            ),
            L:
              a &&
              document.currentScript.hasAttribute("data-game-over-monetizable"),
            M:
              a &&
              document.currentScript.hasAttribute(
                "data-level-complete-monetizable"
              ),
          }
        : hb;
    },
    ca: function () {
      return document.currentScript
        ? {
            Y: "true" === T(window.location.hash).get("audioUpdateOnSubscribe"),
            S: document.currentScript.hasAttribute(
              "data-user-activity-metrics"
            ),
          }
        : ib;
    },
  };
  function gc() {
    try {
      document.body &&
        document.body.style &&
        ((document.body.style.userSelect = "none"),
        (document.body.style.webkitUserSelect = "none"));
    } catch (a) {
      console.warn(a);
    }
  }
  (function (a) {
    a = void 0 === a ? !0 : a;
    var b = fc.ba(),
      c = null;
    if (null === b || void 0 === b) {
      console.warn(
        "Couldn't find targetOrigin for postMessages. Cross-frame messaging is deactivated."
      );
      var d = new cc();
    } else (d = new dc(b)), (c = Eb(b));
    a = fc.ga(a);
    b = fc.ca();
    d = new bc(d, c, a, b, b.S ? new ec(d, window) : void 0);
    window.GameSnacks = d;
    // Object.defineProperty(window, "localStorage", {
    //   get: function () {
    //      throw Error(
    //        "window.localStorage not available, please use the GameSnacks.storage API."
    //      );
    //   },
    // });
    window.addEventListener("load", function () {
      gc();
    });
    gc();
    return d;
  })();
}).call(this);
