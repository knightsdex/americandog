var Gv = Object.defineProperty;
var ld = (e) => {
  throw TypeError(e);
};
var qv = (e, t, n) =>
  t in e
    ? Gv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Ht = (e, t, n) => qv(e, typeof t != "symbol" ? t + "" : t, n),
  Ll = (e, t, n) => t.has(e) || ld("Cannot " + n);
var T = (e, t, n) => (
    Ll(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  Z = (e, t, n) =>
    t.has(e)
      ? ld("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  B = (e, t, n, r) => (
    Ll(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  Te = (e, t, n) => (Ll(e, t, "access private method"), n);
var Ni = (e, t, n, r) => ({
  set _(o) {
    B(e, t, o, n);
  },
  get _() {
    return T(e, t, r);
  },
});
function Xv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function mi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var vp = { exports: {} },
  Gs = {},
  yp = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gi = Symbol.for("react.element"),
  Zv = Symbol.for("react.portal"),
  Jv = Symbol.for("react.fragment"),
  ey = Symbol.for("react.strict_mode"),
  ty = Symbol.for("react.profiler"),
  ny = Symbol.for("react.provider"),
  ry = Symbol.for("react.context"),
  oy = Symbol.for("react.forward_ref"),
  iy = Symbol.for("react.suspense"),
  sy = Symbol.for("react.memo"),
  ly = Symbol.for("react.lazy"),
  ad = Symbol.iterator;
function ay(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ad && e[ad]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  wp = Object.assign,
  Cp = {};
function uo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cp),
    (this.updater = n || xp);
}
uo.prototype.isReactComponent = {};
uo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
uo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bp() {}
bp.prototype = uo.prototype;
function Mu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cp),
    (this.updater = n || xp);
}
var Lu = (Mu.prototype = new bp());
Lu.constructor = Mu;
wp(Lu, uo.prototype);
Lu.isPureReactComponent = !0;
var ud = Array.isArray,
  Sp = Object.prototype.hasOwnProperty,
  Iu = { current: null },
  Ep = { key: !0, ref: !0, __self: !0, __source: !0 };
function kp(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Sp.call(t, r) && !Ep.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: gi,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Iu.current,
  };
}
function uy(e, t) {
  return {
    $$typeof: gi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Du(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gi;
}
function cy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var cd = /\/+/g;
function Il(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? cy("" + e.key)
    : t.toString(36);
}
function Xi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case gi:
          case Zv:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Il(s, 0) : r),
      ud(o)
        ? ((n = ""),
          e != null && (n = e.replace(cd, "$&/") + "/"),
          Xi(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Du(o) &&
            (o = uy(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(cd, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), ud(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + Il(i, l);
      s += Xi(i, t, n, a, o);
    }
  else if (((a = ay(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Il(i, l++)), (s += Xi(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Pi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Xi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function dy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var De = { current: null },
  Zi = { transition: null },
  fy = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: Zi,
    ReactCurrentOwner: Iu,
  };
function Tp() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = {
  map: Pi,
  forEach: function (e, t, n) {
    Pi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Pi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Pi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Du(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Y.Component = uo;
Y.Fragment = Jv;
Y.Profiler = ty;
Y.PureComponent = Mu;
Y.StrictMode = ey;
Y.Suspense = iy;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fy;
Y.act = Tp;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = wp({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Iu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Sp.call(t, a) &&
        !Ep.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: gi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: ry,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ny, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = kp;
Y.createFactory = function (e) {
  var t = kp.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: oy, render: e };
};
Y.isValidElement = Du;
Y.lazy = function (e) {
  return { $$typeof: ly, _payload: { _status: -1, _result: e }, _init: dy };
};
Y.memo = function (e, t) {
  return { $$typeof: sy, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = Zi.transition;
  Zi.transition = {};
  try {
    e();
  } finally {
    Zi.transition = t;
  }
};
Y.unstable_act = Tp;
Y.useCallback = function (e, t) {
  return De.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return De.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return De.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return De.current.useEffect(e, t);
};
Y.useId = function () {
  return De.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return De.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return De.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return De.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return De.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return De.current.useRef(e);
};
Y.useState = function (e) {
  return De.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return De.current.useTransition();
};
Y.version = "18.3.1";
yp.exports = Y;
var x = yp.exports;
const P = mi(x),
  zu = Xv({ __proto__: null, default: P }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var py = x,
  hy = Symbol.for("react.element"),
  my = Symbol.for("react.fragment"),
  gy = Object.prototype.hasOwnProperty,
  vy = py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Np(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) gy.call(t, r) && !yy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: hy,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: vy.current,
  };
}
Gs.Fragment = my;
Gs.jsx = Np;
Gs.jsxs = Np;
vp.exports = Gs;
var c = vp.exports,
  Pp = { exports: {} },
  et = {},
  jp = { exports: {} },
  Rp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, j) {
    var L = N.length;
    N.push(j);
    e: for (; 0 < L; ) {
      var V = (L - 1) >>> 1,
        z = N[V];
      if (0 < o(z, j)) (N[V] = j), (N[L] = z), (L = V);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var j = N[0],
      L = N.pop();
    if (L !== j) {
      N[0] = L;
      e: for (var V = 0, z = N.length, K = z >>> 1; V < K; ) {
        var q = 2 * (V + 1) - 1,
          me = N[q],
          ke = q + 1,
          J = N[ke];
        if (0 > o(me, L))
          ke < z && 0 > o(J, me)
            ? ((N[V] = J), (N[ke] = L), (V = ke))
            : ((N[V] = me), (N[q] = L), (V = q));
        else if (ke < z && 0 > o(J, L)) (N[V] = J), (N[ke] = L), (V = ke);
        else break e;
      }
    }
    return j;
  }
  function o(N, j) {
    var L = N.sortIndex - j.sortIndex;
    return L !== 0 ? L : N.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    d = 1,
    p = null,
    m = 3,
    f = !1,
    C = !1,
    y = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(N) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= N)
        r(u), (j.sortIndex = j.expirationTime), t(a, j);
      else break;
      j = n(u);
    }
  }
  function b(N) {
    if (((y = !1), v(N), !C))
      if (n(a) !== null) (C = !0), $(S);
      else {
        var j = n(u);
        j !== null && H(b, j.startTime - N);
      }
  }
  function S(N, j) {
    (C = !1), y && ((y = !1), g(R), (R = -1)), (f = !0);
    var L = m;
    try {
      for (
        v(j), p = n(a);
        p !== null && (!(p.expirationTime > j) || (N && !F()));

      ) {
        var V = p.callback;
        if (typeof V == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var z = V(p.expirationTime <= j);
          (j = e.unstable_now()),
            typeof z == "function" ? (p.callback = z) : p === n(a) && r(a),
            v(j);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var K = !0;
      else {
        var q = n(u);
        q !== null && H(b, q.startTime - j), (K = !1);
      }
      return K;
    } finally {
      (p = null), (m = L), (f = !1);
    }
  }
  var E = !1,
    k = null,
    R = -1,
    _ = 5,
    O = -1;
  function F() {
    return !(e.unstable_now() - O < _);
  }
  function D() {
    if (k !== null) {
      var N = e.unstable_now();
      O = N;
      var j = !0;
      try {
        j = k(!0, N);
      } finally {
        j ? Q() : ((E = !1), (k = null));
      }
    } else E = !1;
  }
  var Q;
  if (typeof h == "function")
    Q = function () {
      h(D);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      G = M.port2;
    (M.port1.onmessage = D),
      (Q = function () {
        G.postMessage(null);
      });
  } else
    Q = function () {
      w(D, 0);
    };
  function $(N) {
    (k = N), E || ((E = !0), Q());
  }
  function H(N, j) {
    R = w(function () {
      N(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      C || f || ((C = !0), $(S));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = m;
      }
      var L = m;
      m = j;
      try {
        return N();
      } finally {
        m = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, j) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var L = m;
      m = N;
      try {
        return j();
      } finally {
        m = L;
      }
    }),
    (e.unstable_scheduleCallback = function (N, j, L) {
      var V = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? V + L : V))
          : (L = V),
        N)
      ) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return (
        (z = L + z),
        (N = {
          id: d++,
          callback: j,
          priorityLevel: N,
          startTime: L,
          expirationTime: z,
          sortIndex: -1,
        }),
        L > V
          ? ((N.sortIndex = L),
            t(u, N),
            n(a) === null &&
              N === n(u) &&
              (y ? (g(R), (R = -1)) : (y = !0), H(b, L - V)))
          : ((N.sortIndex = z), t(a, N), C || f || ((C = !0), $(S))),
        N
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (N) {
      var j = m;
      return function () {
        var L = m;
        m = j;
        try {
          return N.apply(this, arguments);
        } finally {
          m = L;
        }
      };
    });
})(Rp);
jp.exports = Rp;
var xy = jp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wy = x,
  Ze = xy;
function A(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ap = new Set(),
  Qo = {};
function pr(e, t) {
  eo(e, t), eo(e + "Capture", t);
}
function eo(e, t) {
  for (Qo[e] = t, e = 0; e < t.length; e++) Ap.add(t[e]);
}
var Zt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ca = Object.prototype.hasOwnProperty,
  Cy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  dd = {},
  fd = {};
function by(e) {
  return Ca.call(fd, e)
    ? !0
    : Ca.call(dd, e)
    ? !1
    : Cy.test(e)
    ? (fd[e] = !0)
    : ((dd[e] = !0), !1);
}
function Sy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ey(e, t, n, r) {
  if (t === null || typeof t > "u" || Sy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ze(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ee[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ee[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ee[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ee[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ee[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ee[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ee[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ee[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fu = /[\-:]([a-z])/g;
function $u(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fu, $u);
    Ee[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fu, $u);
    Ee[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Fu, $u);
  Ee[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ee[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ee[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Uu(e, t, n, r) {
  var o = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ey(t, n, o, r) && (n = null),
    r || o === null
      ? by(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var on = wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ji = Symbol.for("react.element"),
  Sr = Symbol.for("react.portal"),
  Er = Symbol.for("react.fragment"),
  Bu = Symbol.for("react.strict_mode"),
  ba = Symbol.for("react.profiler"),
  Op = Symbol.for("react.provider"),
  _p = Symbol.for("react.context"),
  Hu = Symbol.for("react.forward_ref"),
  Sa = Symbol.for("react.suspense"),
  Ea = Symbol.for("react.suspense_list"),
  Vu = Symbol.for("react.memo"),
  gn = Symbol.for("react.lazy"),
  Mp = Symbol.for("react.offscreen"),
  pd = Symbol.iterator;
function xo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pd && e[pd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ce = Object.assign,
  Dl;
function Ao(e) {
  if (Dl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Dl = (t && t[1]) || "";
    }
  return (
    `
` +
    Dl +
    e
  );
}
var zl = !1;
function Fl(e, t) {
  if (!e || zl) return "";
  zl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (zl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ao(e) : "";
}
function ky(e) {
  switch (e.tag) {
    case 5:
      return Ao(e.type);
    case 16:
      return Ao("Lazy");
    case 13:
      return Ao("Suspense");
    case 19:
      return Ao("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Fl(e.type, !1)), e;
    case 11:
      return (e = Fl(e.type.render, !1)), e;
    case 1:
      return (e = Fl(e.type, !0)), e;
    default:
      return "";
  }
}
function ka(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Er:
      return "Fragment";
    case Sr:
      return "Portal";
    case ba:
      return "Profiler";
    case Bu:
      return "StrictMode";
    case Sa:
      return "Suspense";
    case Ea:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case _p:
        return (e.displayName || "Context") + ".Consumer";
      case Op:
        return (e._context.displayName || "Context") + ".Provider";
      case Hu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Vu:
        return (
          (t = e.displayName || null), t !== null ? t : ka(e.type) || "Memo"
        );
      case gn:
        (t = e._payload), (e = e._init);
        try {
          return ka(e(t));
        } catch {}
    }
  return null;
}
function Ty(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ka(t);
    case 8:
      return t === Bu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function In(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Lp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ny(e) {
  var t = Lp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ri(e) {
  e._valueTracker || (e._valueTracker = Ny(e));
}
function Ip(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Lp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function hs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ta(e, t) {
  var n = t.checked;
  return ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function hd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = In(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Dp(e, t) {
  (t = t.checked), t != null && Uu(e, "checked", t, !1);
}
function Na(e, t) {
  Dp(e, t);
  var n = In(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Pa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Pa(e, t.type, In(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function md(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Pa(e, t, n) {
  (t !== "number" || hs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Oo = Array.isArray;
function Lr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + In(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ja(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(A(92));
      if (Oo(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: In(n) };
}
function zp(e, t) {
  var n = In(t.value),
    r = In(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function vd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ra(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Fp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ai,
  $p = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ai = Ai || document.createElement("div"),
          Ai.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ai.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ko(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Lo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Py = ["Webkit", "ms", "Moz", "O"];
Object.keys(Lo).forEach(function (e) {
  Py.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Lo[t] = Lo[e]);
  });
});
function Up(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Lo.hasOwnProperty(e) && Lo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Bp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Up(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var jy = ce(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Aa(e, t) {
  if (t) {
    if (jy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function Oa(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var _a = null;
function Wu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ma = null,
  Ir = null,
  Dr = null;
function yd(e) {
  if ((e = xi(e))) {
    if (typeof Ma != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = el(t)), Ma(e.stateNode, e.type, t));
  }
}
function Hp(e) {
  Ir ? (Dr ? Dr.push(e) : (Dr = [e])) : (Ir = e);
}
function Vp() {
  if (Ir) {
    var e = Ir,
      t = Dr;
    if (((Dr = Ir = null), yd(e), t)) for (e = 0; e < t.length; e++) yd(t[e]);
  }
}
function Wp(e, t) {
  return e(t);
}
function Qp() {}
var $l = !1;
function Kp(e, t, n) {
  if ($l) return e(t, n);
  $l = !0;
  try {
    return Wp(e, t, n);
  } finally {
    ($l = !1), (Ir !== null || Dr !== null) && (Qp(), Vp());
  }
}
function Yo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = el(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var La = !1;
if (Zt)
  try {
    var wo = {};
    Object.defineProperty(wo, "passive", {
      get: function () {
        La = !0;
      },
    }),
      window.addEventListener("test", wo, wo),
      window.removeEventListener("test", wo, wo);
  } catch {
    La = !1;
  }
function Ry(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Io = !1,
  ms = null,
  gs = !1,
  Ia = null,
  Ay = {
    onError: function (e) {
      (Io = !0), (ms = e);
    },
  };
function Oy(e, t, n, r, o, i, s, l, a) {
  (Io = !1), (ms = null), Ry.apply(Ay, arguments);
}
function _y(e, t, n, r, o, i, s, l, a) {
  if ((Oy.apply(this, arguments), Io)) {
    if (Io) {
      var u = ms;
      (Io = !1), (ms = null);
    } else throw Error(A(198));
    gs || ((gs = !0), (Ia = u));
  }
}
function hr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Yp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function xd(e) {
  if (hr(e) !== e) throw Error(A(188));
}
function My(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = hr(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return xd(o), e;
        if (i === r) return xd(o), t;
        i = i.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function Gp(e) {
  return (e = My(e)), e !== null ? qp(e) : null;
}
function qp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xp = Ze.unstable_scheduleCallback,
  wd = Ze.unstable_cancelCallback,
  Ly = Ze.unstable_shouldYield,
  Iy = Ze.unstable_requestPaint,
  pe = Ze.unstable_now,
  Dy = Ze.unstable_getCurrentPriorityLevel,
  Qu = Ze.unstable_ImmediatePriority,
  Zp = Ze.unstable_UserBlockingPriority,
  vs = Ze.unstable_NormalPriority,
  zy = Ze.unstable_LowPriority,
  Jp = Ze.unstable_IdlePriority,
  qs = null,
  Dt = null;
function Fy(e) {
  if (Dt && typeof Dt.onCommitFiberRoot == "function")
    try {
      Dt.onCommitFiberRoot(qs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var St = Math.clz32 ? Math.clz32 : By,
  $y = Math.log,
  Uy = Math.LN2;
function By(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - (($y(e) / Uy) | 0)) | 0;
}
var Oi = 64,
  _i = 4194304;
function _o(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ys(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = _o(l)) : ((i &= s), i !== 0 && (r = _o(i)));
  } else (s = n & ~o), s !== 0 ? (r = _o(s)) : i !== 0 && (r = _o(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - St(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Hy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Vy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - St(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = Hy(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Da(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function eh() {
  var e = Oi;
  return (Oi <<= 1), !(Oi & 4194240) && (Oi = 64), e;
}
function Ul(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - St(t)),
    (e[t] = n);
}
function Wy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - St(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Ku(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ee = 0;
function th(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var nh,
  Yu,
  rh,
  oh,
  ih,
  za = !1,
  Mi = [],
  Pn = null,
  jn = null,
  Rn = null,
  Go = new Map(),
  qo = new Map(),
  yn = [],
  Qy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Cd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pn = null;
      break;
    case "dragenter":
    case "dragleave":
      jn = null;
      break;
    case "mouseover":
    case "mouseout":
      Rn = null;
      break;
    case "pointerover":
    case "pointerout":
      Go.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qo.delete(t.pointerId);
  }
}
function Co(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = xi(t)), t !== null && Yu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Ky(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Pn = Co(Pn, e, t, n, r, o)), !0;
    case "dragenter":
      return (jn = Co(jn, e, t, n, r, o)), !0;
    case "mouseover":
      return (Rn = Co(Rn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Go.set(i, Co(Go.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), qo.set(i, Co(qo.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function sh(e) {
  var t = Gn(e.target);
  if (t !== null) {
    var n = hr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Yp(n)), t !== null)) {
          (e.blockedOn = t),
            ih(e.priority, function () {
              rh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ji(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (_a = r), n.target.dispatchEvent(r), (_a = null);
    } else return (t = xi(n)), t !== null && Yu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function bd(e, t, n) {
  Ji(e) && n.delete(t);
}
function Yy() {
  (za = !1),
    Pn !== null && Ji(Pn) && (Pn = null),
    jn !== null && Ji(jn) && (jn = null),
    Rn !== null && Ji(Rn) && (Rn = null),
    Go.forEach(bd),
    qo.forEach(bd);
}
function bo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    za ||
      ((za = !0),
      Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, Yy)));
}
function Xo(e) {
  function t(o) {
    return bo(o, e);
  }
  if (0 < Mi.length) {
    bo(Mi[0], e);
    for (var n = 1; n < Mi.length; n++) {
      var r = Mi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Pn !== null && bo(Pn, e),
      jn !== null && bo(jn, e),
      Rn !== null && bo(Rn, e),
      Go.forEach(t),
      qo.forEach(t),
      n = 0;
    n < yn.length;
    n++
  )
    (r = yn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < yn.length && ((n = yn[0]), n.blockedOn === null); )
    sh(n), n.blockedOn === null && yn.shift();
}
var zr = on.ReactCurrentBatchConfig,
  xs = !0;
function Gy(e, t, n, r) {
  var o = ee,
    i = zr.transition;
  zr.transition = null;
  try {
    (ee = 1), Gu(e, t, n, r);
  } finally {
    (ee = o), (zr.transition = i);
  }
}
function qy(e, t, n, r) {
  var o = ee,
    i = zr.transition;
  zr.transition = null;
  try {
    (ee = 4), Gu(e, t, n, r);
  } finally {
    (ee = o), (zr.transition = i);
  }
}
function Gu(e, t, n, r) {
  if (xs) {
    var o = Fa(e, t, n, r);
    if (o === null) Xl(e, t, r, ws, n), Cd(e, r);
    else if (Ky(o, e, t, n, r)) r.stopPropagation();
    else if ((Cd(e, r), t & 4 && -1 < Qy.indexOf(e))) {
      for (; o !== null; ) {
        var i = xi(o);
        if (
          (i !== null && nh(i),
          (i = Fa(e, t, n, r)),
          i === null && Xl(e, t, r, ws, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Xl(e, t, r, null, n);
  }
}
var ws = null;
function Fa(e, t, n, r) {
  if (((ws = null), (e = Wu(r)), (e = Gn(e)), e !== null))
    if (((t = hr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Yp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ws = e), null;
}
function lh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Dy()) {
        case Qu:
          return 1;
        case Zp:
          return 4;
        case vs:
        case zy:
          return 16;
        case Jp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kn = null,
  qu = null,
  es = null;
function ah() {
  if (es) return es;
  var e,
    t = qu,
    n = t.length,
    r,
    o = "value" in kn ? kn.value : kn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (es = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ts(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Li() {
  return !0;
}
function Sd() {
  return !1;
}
function tt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Li
        : Sd),
      (this.isPropagationStopped = Sd),
      this
    );
  }
  return (
    ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Li));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Li));
      },
      persist: function () {},
      isPersistent: Li,
    }),
    t
  );
}
var co = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Xu = tt(co),
  yi = ce({}, co, { view: 0, detail: 0 }),
  Xy = tt(yi),
  Bl,
  Hl,
  So,
  Xs = ce({}, yi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Zu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== So &&
            (So && e.type === "mousemove"
              ? ((Bl = e.screenX - So.screenX), (Hl = e.screenY - So.screenY))
              : (Hl = Bl = 0),
            (So = e)),
          Bl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Hl;
    },
  }),
  Ed = tt(Xs),
  Zy = ce({}, Xs, { dataTransfer: 0 }),
  Jy = tt(Zy),
  e0 = ce({}, yi, { relatedTarget: 0 }),
  Vl = tt(e0),
  t0 = ce({}, co, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  n0 = tt(t0),
  r0 = ce({}, co, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  o0 = tt(r0),
  i0 = ce({}, co, { data: 0 }),
  kd = tt(i0),
  s0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  l0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  a0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function u0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = a0[e]) ? !!t[e] : !1;
}
function Zu() {
  return u0;
}
var c0 = ce({}, yi, {
    key: function (e) {
      if (e.key) {
        var t = s0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ts(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? l0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zu,
    charCode: function (e) {
      return e.type === "keypress" ? ts(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ts(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  d0 = tt(c0),
  f0 = ce({}, Xs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Td = tt(f0),
  p0 = ce({}, yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zu,
  }),
  h0 = tt(p0),
  m0 = ce({}, co, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  g0 = tt(m0),
  v0 = ce({}, Xs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  y0 = tt(v0),
  x0 = [9, 13, 27, 32],
  Ju = Zt && "CompositionEvent" in window,
  Do = null;
Zt && "documentMode" in document && (Do = document.documentMode);
var w0 = Zt && "TextEvent" in window && !Do,
  uh = Zt && (!Ju || (Do && 8 < Do && 11 >= Do)),
  Nd = " ",
  Pd = !1;
function ch(e, t) {
  switch (e) {
    case "keyup":
      return x0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function dh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var kr = !1;
function C0(e, t) {
  switch (e) {
    case "compositionend":
      return dh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Pd = !0), Nd);
    case "textInput":
      return (e = t.data), e === Nd && Pd ? null : e;
    default:
      return null;
  }
}
function b0(e, t) {
  if (kr)
    return e === "compositionend" || (!Ju && ch(e, t))
      ? ((e = ah()), (es = qu = kn = null), (kr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return uh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var S0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function jd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!S0[e.type] : t === "textarea";
}
function fh(e, t, n, r) {
  Hp(r),
    (t = Cs(t, "onChange")),
    0 < t.length &&
      ((n = new Xu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zo = null,
  Zo = null;
function E0(e) {
  Sh(e, 0);
}
function Zs(e) {
  var t = Pr(e);
  if (Ip(t)) return e;
}
function k0(e, t) {
  if (e === "change") return t;
}
var ph = !1;
if (Zt) {
  var Wl;
  if (Zt) {
    var Ql = "oninput" in document;
    if (!Ql) {
      var Rd = document.createElement("div");
      Rd.setAttribute("oninput", "return;"),
        (Ql = typeof Rd.oninput == "function");
    }
    Wl = Ql;
  } else Wl = !1;
  ph = Wl && (!document.documentMode || 9 < document.documentMode);
}
function Ad() {
  zo && (zo.detachEvent("onpropertychange", hh), (Zo = zo = null));
}
function hh(e) {
  if (e.propertyName === "value" && Zs(Zo)) {
    var t = [];
    fh(t, Zo, e, Wu(e)), Kp(E0, t);
  }
}
function T0(e, t, n) {
  e === "focusin"
    ? (Ad(), (zo = t), (Zo = n), zo.attachEvent("onpropertychange", hh))
    : e === "focusout" && Ad();
}
function N0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Zs(Zo);
}
function P0(e, t) {
  if (e === "click") return Zs(t);
}
function j0(e, t) {
  if (e === "input" || e === "change") return Zs(t);
}
function R0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kt = typeof Object.is == "function" ? Object.is : R0;
function Jo(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ca.call(t, o) || !kt(e[o], t[o])) return !1;
  }
  return !0;
}
function Od(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _d(e, t) {
  var n = Od(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Od(n);
  }
}
function mh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? mh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function gh() {
  for (var e = window, t = hs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = hs(e.document);
  }
  return t;
}
function ec(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function A0(e) {
  var t = gh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    mh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ec(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = _d(n, i));
        var s = _d(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var O0 = Zt && "documentMode" in document && 11 >= document.documentMode,
  Tr = null,
  $a = null,
  Fo = null,
  Ua = !1;
function Md(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ua ||
    Tr == null ||
    Tr !== hs(r) ||
    ((r = Tr),
    "selectionStart" in r && ec(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fo && Jo(Fo, r)) ||
      ((Fo = r),
      (r = Cs($a, "onSelect")),
      0 < r.length &&
        ((t = new Xu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Tr))));
}
function Ii(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Nr = {
    animationend: Ii("Animation", "AnimationEnd"),
    animationiteration: Ii("Animation", "AnimationIteration"),
    animationstart: Ii("Animation", "AnimationStart"),
    transitionend: Ii("Transition", "TransitionEnd"),
  },
  Kl = {},
  vh = {};
Zt &&
  ((vh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Nr.animationend.animation,
    delete Nr.animationiteration.animation,
    delete Nr.animationstart.animation),
  "TransitionEvent" in window || delete Nr.transitionend.transition);
function Js(e) {
  if (Kl[e]) return Kl[e];
  if (!Nr[e]) return e;
  var t = Nr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in vh) return (Kl[e] = t[n]);
  return e;
}
var yh = Js("animationend"),
  xh = Js("animationiteration"),
  wh = Js("animationstart"),
  Ch = Js("transitionend"),
  bh = new Map(),
  Ld =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Un(e, t) {
  bh.set(e, t), pr(t, [e]);
}
for (var Yl = 0; Yl < Ld.length; Yl++) {
  var Gl = Ld[Yl],
    _0 = Gl.toLowerCase(),
    M0 = Gl[0].toUpperCase() + Gl.slice(1);
  Un(_0, "on" + M0);
}
Un(yh, "onAnimationEnd");
Un(xh, "onAnimationIteration");
Un(wh, "onAnimationStart");
Un("dblclick", "onDoubleClick");
Un("focusin", "onFocus");
Un("focusout", "onBlur");
Un(Ch, "onTransitionEnd");
eo("onMouseEnter", ["mouseout", "mouseover"]);
eo("onMouseLeave", ["mouseout", "mouseover"]);
eo("onPointerEnter", ["pointerout", "pointerover"]);
eo("onPointerLeave", ["pointerout", "pointerover"]);
pr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
pr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
pr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
pr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Mo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  L0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));
function Id(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), _y(r, t, void 0, e), (e.currentTarget = null);
}
function Sh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          Id(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Id(o, l, u), (i = a);
        }
    }
  }
  if (gs) throw ((e = Ia), (gs = !1), (Ia = null), e);
}
function oe(e, t) {
  var n = t[Qa];
  n === void 0 && (n = t[Qa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Eh(t, e, 2, !1), n.add(r));
}
function ql(e, t, n) {
  var r = 0;
  t && (r |= 4), Eh(n, e, r, t);
}
var Di = "_reactListening" + Math.random().toString(36).slice(2);
function ei(e) {
  if (!e[Di]) {
    (e[Di] = !0),
      Ap.forEach(function (n) {
        n !== "selectionchange" && (L0.has(n) || ql(n, !1, e), ql(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Di] || ((t[Di] = !0), ql("selectionchange", !1, t));
  }
}
function Eh(e, t, n, r) {
  switch (lh(t)) {
    case 1:
      var o = Gy;
      break;
    case 4:
      o = qy;
      break;
    default:
      o = Gu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !La ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Xl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Gn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Kp(function () {
    var u = i,
      d = Wu(n),
      p = [];
    e: {
      var m = bh.get(e);
      if (m !== void 0) {
        var f = Xu,
          C = e;
        switch (e) {
          case "keypress":
            if (ts(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = d0;
            break;
          case "focusin":
            (C = "focus"), (f = Vl);
            break;
          case "focusout":
            (C = "blur"), (f = Vl);
            break;
          case "beforeblur":
          case "afterblur":
            f = Vl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            f = Ed;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = Jy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = h0;
            break;
          case yh:
          case xh:
          case wh:
            f = n0;
            break;
          case Ch:
            f = g0;
            break;
          case "scroll":
            f = Xy;
            break;
          case "wheel":
            f = y0;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = o0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = Td;
        }
        var y = (t & 4) !== 0,
          w = !y && e === "scroll",
          g = y ? (m !== null ? m + "Capture" : null) : m;
        y = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var b = v.stateNode;
          if (
            (v.tag === 5 &&
              b !== null &&
              ((v = b),
              g !== null && ((b = Yo(h, g)), b != null && y.push(ti(h, b, v)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((m = new f(m, C, null, n, d)), p.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (f = e === "mouseout" || e === "pointerout"),
          m &&
            n !== _a &&
            (C = n.relatedTarget || n.fromElement) &&
            (Gn(C) || C[Jt]))
        )
          break e;
        if (
          (f || m) &&
          ((m =
            d.window === d
              ? d
              : (m = d.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          f
            ? ((C = n.relatedTarget || n.toElement),
              (f = u),
              (C = C ? Gn(C) : null),
              C !== null &&
                ((w = hr(C)), C !== w || (C.tag !== 5 && C.tag !== 6)) &&
                (C = null))
            : ((f = null), (C = u)),
          f !== C)
        ) {
          if (
            ((y = Ed),
            (b = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Td),
              (b = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (w = f == null ? m : Pr(f)),
            (v = C == null ? m : Pr(C)),
            (m = new y(b, h + "leave", f, n, d)),
            (m.target = w),
            (m.relatedTarget = v),
            (b = null),
            Gn(d) === u &&
              ((y = new y(g, h + "enter", C, n, d)),
              (y.target = v),
              (y.relatedTarget = w),
              (b = y)),
            (w = b),
            f && C)
          )
            t: {
              for (y = f, g = C, h = 0, v = y; v; v = Cr(v)) h++;
              for (v = 0, b = g; b; b = Cr(b)) v++;
              for (; 0 < h - v; ) (y = Cr(y)), h--;
              for (; 0 < v - h; ) (g = Cr(g)), v--;
              for (; h--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                (y = Cr(y)), (g = Cr(g));
              }
              y = null;
            }
          else y = null;
          f !== null && Dd(p, m, f, y, !1),
            C !== null && w !== null && Dd(p, w, C, y, !0);
        }
      }
      e: {
        if (
          ((m = u ? Pr(u) : window),
          (f = m.nodeName && m.nodeName.toLowerCase()),
          f === "select" || (f === "input" && m.type === "file"))
        )
          var S = k0;
        else if (jd(m))
          if (ph) S = j0;
          else {
            S = N0;
            var E = T0;
          }
        else
          (f = m.nodeName) &&
            f.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (S = P0);
        if (S && (S = S(e, u))) {
          fh(p, S, n, d);
          break e;
        }
        E && E(e, m, u),
          e === "focusout" &&
            (E = m._wrapperState) &&
            E.controlled &&
            m.type === "number" &&
            Pa(m, "number", m.value);
      }
      switch (((E = u ? Pr(u) : window), e)) {
        case "focusin":
          (jd(E) || E.contentEditable === "true") &&
            ((Tr = E), ($a = u), (Fo = null));
          break;
        case "focusout":
          Fo = $a = Tr = null;
          break;
        case "mousedown":
          Ua = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ua = !1), Md(p, n, d);
          break;
        case "selectionchange":
          if (O0) break;
        case "keydown":
        case "keyup":
          Md(p, n, d);
      }
      var k;
      if (Ju)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        kr
          ? ch(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (uh &&
          n.locale !== "ko" &&
          (kr || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && kr && (k = ah())
            : ((kn = d),
              (qu = "value" in kn ? kn.value : kn.textContent),
              (kr = !0))),
        (E = Cs(u, R)),
        0 < E.length &&
          ((R = new kd(R, e, null, n, d)),
          p.push({ event: R, listeners: E }),
          k ? (R.data = k) : ((k = dh(n)), k !== null && (R.data = k)))),
        (k = w0 ? C0(e, n) : b0(e, n)) &&
          ((u = Cs(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new kd("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = k)));
    }
    Sh(p, t);
  });
}
function ti(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Cs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Yo(e, n)),
      i != null && r.unshift(ti(e, i, o)),
      (i = Yo(e, t)),
      i != null && r.push(ti(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Cr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Dd(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = Yo(n, i)), a != null && s.unshift(ti(n, a, l)))
        : o || ((a = Yo(n, i)), a != null && s.push(ti(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var I0 = /\r\n?/g,
  D0 = /\u0000|\uFFFD/g;
function zd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      I0,
      `
`
    )
    .replace(D0, "");
}
function zi(e, t, n) {
  if (((t = zd(t)), zd(e) !== t && n)) throw Error(A(425));
}
function bs() {}
var Ba = null,
  Ha = null;
function Va(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Wa = typeof setTimeout == "function" ? setTimeout : void 0,
  z0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Fd = typeof Promise == "function" ? Promise : void 0,
  F0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Fd < "u"
      ? function (e) {
          return Fd.resolve(null).then(e).catch($0);
        }
      : Wa;
function $0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Zl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Xo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Xo(t);
}
function An(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function $d(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fo = Math.random().toString(36).slice(2),
  Lt = "__reactFiber$" + fo,
  ni = "__reactProps$" + fo,
  Jt = "__reactContainer$" + fo,
  Qa = "__reactEvents$" + fo,
  U0 = "__reactListeners$" + fo,
  B0 = "__reactHandles$" + fo;
function Gn(e) {
  var t = e[Lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Jt] || n[Lt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = $d(e); e !== null; ) {
          if ((n = e[Lt])) return n;
          e = $d(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function xi(e) {
  return (
    (e = e[Lt] || e[Jt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Pr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function el(e) {
  return e[ni] || null;
}
var Ka = [],
  jr = -1;
function Bn(e) {
  return { current: e };
}
function ie(e) {
  0 > jr || ((e.current = Ka[jr]), (Ka[jr] = null), jr--);
}
function ne(e, t) {
  jr++, (Ka[jr] = e.current), (e.current = t);
}
var Dn = {},
  Ae = Bn(Dn),
  Be = Bn(!1),
  lr = Dn;
function to(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function He(e) {
  return (e = e.childContextTypes), e != null;
}
function Ss() {
  ie(Be), ie(Ae);
}
function Ud(e, t, n) {
  if (Ae.current !== Dn) throw Error(A(168));
  ne(Ae, t), ne(Be, n);
}
function kh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, Ty(e) || "Unknown", o));
  return ce({}, n, r);
}
function Es(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dn),
    (lr = Ae.current),
    ne(Ae, e),
    ne(Be, Be.current),
    !0
  );
}
function Bd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n
    ? ((e = kh(e, t, lr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ie(Be),
      ie(Ae),
      ne(Ae, e))
    : ie(Be),
    ne(Be, n);
}
var Kt = null,
  tl = !1,
  Jl = !1;
function Th(e) {
  Kt === null ? (Kt = [e]) : Kt.push(e);
}
function H0(e) {
  (tl = !0), Th(e);
}
function Hn() {
  if (!Jl && Kt !== null) {
    Jl = !0;
    var e = 0,
      t = ee;
    try {
      var n = Kt;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Kt = null), (tl = !1);
    } catch (o) {
      throw (Kt !== null && (Kt = Kt.slice(e + 1)), Xp(Qu, Hn), o);
    } finally {
      (ee = t), (Jl = !1);
    }
  }
  return null;
}
var Rr = [],
  Ar = 0,
  ks = null,
  Ts = 0,
  it = [],
  st = 0,
  ar = null,
  Gt = 1,
  qt = "";
function Kn(e, t) {
  (Rr[Ar++] = Ts), (Rr[Ar++] = ks), (ks = e), (Ts = t);
}
function Nh(e, t, n) {
  (it[st++] = Gt), (it[st++] = qt), (it[st++] = ar), (ar = e);
  var r = Gt;
  e = qt;
  var o = 32 - St(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - St(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Gt = (1 << (32 - St(t) + o)) | (n << o) | r),
      (qt = i + e);
  } else (Gt = (1 << i) | (n << o) | r), (qt = e);
}
function tc(e) {
  e.return !== null && (Kn(e, 1), Nh(e, 1, 0));
}
function nc(e) {
  for (; e === ks; )
    (ks = Rr[--Ar]), (Rr[Ar] = null), (Ts = Rr[--Ar]), (Rr[Ar] = null);
  for (; e === ar; )
    (ar = it[--st]),
      (it[st] = null),
      (qt = it[--st]),
      (it[st] = null),
      (Gt = it[--st]),
      (it[st] = null);
}
var qe = null,
  Ye = null,
  le = !1,
  Ct = null;
function Ph(e, t) {
  var n = lt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Hd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (qe = e), (Ye = An(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (qe = e), (Ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ar !== null ? { id: Gt, overflow: qt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (qe = e),
            (Ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ya(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ga(e) {
  if (le) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!Hd(e, t)) {
        if (Ya(e)) throw Error(A(418));
        t = An(n.nextSibling);
        var r = qe;
        t && Hd(e, t)
          ? Ph(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (qe = e));
      }
    } else {
      if (Ya(e)) throw Error(A(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (qe = e);
    }
  }
}
function Vd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qe = e;
}
function Fi(e) {
  if (e !== qe) return !1;
  if (!le) return Vd(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Va(e.type, e.memoizedProps))),
    t && (t = Ye))
  ) {
    if (Ya(e)) throw (jh(), Error(A(418)));
    for (; t; ) Ph(e, t), (t = An(t.nextSibling));
  }
  if ((Vd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = An(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = qe ? An(e.stateNode.nextSibling) : null;
  return !0;
}
function jh() {
  for (var e = Ye; e; ) e = An(e.nextSibling);
}
function no() {
  (Ye = qe = null), (le = !1);
}
function rc(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
var V0 = on.ReactCurrentBatchConfig;
function Eo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function $i(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Wd(e) {
  var t = e._init;
  return t(e._payload);
}
function Rh(e) {
  function t(g, h) {
    if (e) {
      var v = g.deletions;
      v === null ? ((g.deletions = [h]), (g.flags |= 16)) : v.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function r(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function o(g, h) {
    return (g = Ln(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, h, v) {
    return (
      (g.index = v),
      e
        ? ((v = g.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((g.flags |= 2), h) : v)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, h, v, b) {
    return h === null || h.tag !== 6
      ? ((h = sa(v, g.mode, b)), (h.return = g), h)
      : ((h = o(h, v)), (h.return = g), h);
  }
  function a(g, h, v, b) {
    var S = v.type;
    return S === Er
      ? d(g, h, v.props.children, b, v.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === gn &&
            Wd(S) === h.type))
      ? ((b = o(h, v.props)), (b.ref = Eo(g, h, v)), (b.return = g), b)
      : ((b = as(v.type, v.key, v.props, null, g.mode, b)),
        (b.ref = Eo(g, h, v)),
        (b.return = g),
        b);
  }
  function u(g, h, v, b) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = la(v, g.mode, b)), (h.return = g), h)
      : ((h = o(h, v.children || [])), (h.return = g), h);
  }
  function d(g, h, v, b, S) {
    return h === null || h.tag !== 7
      ? ((h = sr(v, g.mode, b, S)), (h.return = g), h)
      : ((h = o(h, v)), (h.return = g), h);
  }
  function p(g, h, v) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = sa("" + h, g.mode, v)), (h.return = g), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ji:
          return (
            (v = as(h.type, h.key, h.props, null, g.mode, v)),
            (v.ref = Eo(g, null, h)),
            (v.return = g),
            v
          );
        case Sr:
          return (h = la(h, g.mode, v)), (h.return = g), h;
        case gn:
          var b = h._init;
          return p(g, b(h._payload), v);
      }
      if (Oo(h) || xo(h))
        return (h = sr(h, g.mode, v, null)), (h.return = g), h;
      $i(g, h);
    }
    return null;
  }
  function m(g, h, v, b) {
    var S = h !== null ? h.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return S !== null ? null : l(g, h, "" + v, b);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ji:
          return v.key === S ? a(g, h, v, b) : null;
        case Sr:
          return v.key === S ? u(g, h, v, b) : null;
        case gn:
          return (S = v._init), m(g, h, S(v._payload), b);
      }
      if (Oo(v) || xo(v)) return S !== null ? null : d(g, h, v, b, null);
      $i(g, v);
    }
    return null;
  }
  function f(g, h, v, b, S) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (g = g.get(v) || null), l(h, g, "" + b, S);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case ji:
          return (g = g.get(b.key === null ? v : b.key) || null), a(h, g, b, S);
        case Sr:
          return (g = g.get(b.key === null ? v : b.key) || null), u(h, g, b, S);
        case gn:
          var E = b._init;
          return f(g, h, v, E(b._payload), S);
      }
      if (Oo(b) || xo(b)) return (g = g.get(v) || null), d(h, g, b, S, null);
      $i(h, b);
    }
    return null;
  }
  function C(g, h, v, b) {
    for (
      var S = null, E = null, k = h, R = (h = 0), _ = null;
      k !== null && R < v.length;
      R++
    ) {
      k.index > R ? ((_ = k), (k = null)) : (_ = k.sibling);
      var O = m(g, k, v[R], b);
      if (O === null) {
        k === null && (k = _);
        break;
      }
      e && k && O.alternate === null && t(g, k),
        (h = i(O, h, R)),
        E === null ? (S = O) : (E.sibling = O),
        (E = O),
        (k = _);
    }
    if (R === v.length) return n(g, k), le && Kn(g, R), S;
    if (k === null) {
      for (; R < v.length; R++)
        (k = p(g, v[R], b)),
          k !== null &&
            ((h = i(k, h, R)), E === null ? (S = k) : (E.sibling = k), (E = k));
      return le && Kn(g, R), S;
    }
    for (k = r(g, k); R < v.length; R++)
      (_ = f(k, g, R, v[R], b)),
        _ !== null &&
          (e && _.alternate !== null && k.delete(_.key === null ? R : _.key),
          (h = i(_, h, R)),
          E === null ? (S = _) : (E.sibling = _),
          (E = _));
    return (
      e &&
        k.forEach(function (F) {
          return t(g, F);
        }),
      le && Kn(g, R),
      S
    );
  }
  function y(g, h, v, b) {
    var S = xo(v);
    if (typeof S != "function") throw Error(A(150));
    if (((v = S.call(v)), v == null)) throw Error(A(151));
    for (
      var E = (S = null), k = h, R = (h = 0), _ = null, O = v.next();
      k !== null && !O.done;
      R++, O = v.next()
    ) {
      k.index > R ? ((_ = k), (k = null)) : (_ = k.sibling);
      var F = m(g, k, O.value, b);
      if (F === null) {
        k === null && (k = _);
        break;
      }
      e && k && F.alternate === null && t(g, k),
        (h = i(F, h, R)),
        E === null ? (S = F) : (E.sibling = F),
        (E = F),
        (k = _);
    }
    if (O.done) return n(g, k), le && Kn(g, R), S;
    if (k === null) {
      for (; !O.done; R++, O = v.next())
        (O = p(g, O.value, b)),
          O !== null &&
            ((h = i(O, h, R)), E === null ? (S = O) : (E.sibling = O), (E = O));
      return le && Kn(g, R), S;
    }
    for (k = r(g, k); !O.done; R++, O = v.next())
      (O = f(k, g, R, O.value, b)),
        O !== null &&
          (e && O.alternate !== null && k.delete(O.key === null ? R : O.key),
          (h = i(O, h, R)),
          E === null ? (S = O) : (E.sibling = O),
          (E = O));
    return (
      e &&
        k.forEach(function (D) {
          return t(g, D);
        }),
      le && Kn(g, R),
      S
    );
  }
  function w(g, h, v, b) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Er &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case ji:
          e: {
            for (var S = v.key, E = h; E !== null; ) {
              if (E.key === S) {
                if (((S = v.type), S === Er)) {
                  if (E.tag === 7) {
                    n(g, E.sibling),
                      (h = o(E, v.props.children)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === gn &&
                    Wd(S) === E.type)
                ) {
                  n(g, E.sibling),
                    (h = o(E, v.props)),
                    (h.ref = Eo(g, E, v)),
                    (h.return = g),
                    (g = h);
                  break e;
                }
                n(g, E);
                break;
              } else t(g, E);
              E = E.sibling;
            }
            v.type === Er
              ? ((h = sr(v.props.children, g.mode, b, v.key)),
                (h.return = g),
                (g = h))
              : ((b = as(v.type, v.key, v.props, null, g.mode, b)),
                (b.ref = Eo(g, h, v)),
                (b.return = g),
                (g = b));
          }
          return s(g);
        case Sr:
          e: {
            for (E = v.key; h !== null; ) {
              if (h.key === E)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  n(g, h.sibling),
                    (h = o(h, v.children || [])),
                    (h.return = g),
                    (g = h);
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = la(v, g.mode, b)), (h.return = g), (g = h);
          }
          return s(g);
        case gn:
          return (E = v._init), w(g, h, E(v._payload), b);
      }
      if (Oo(v)) return C(g, h, v, b);
      if (xo(v)) return y(g, h, v, b);
      $i(g, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = o(h, v)), (h.return = g), (g = h))
          : (n(g, h), (h = sa(v, g.mode, b)), (h.return = g), (g = h)),
        s(g))
      : n(g, h);
  }
  return w;
}
var ro = Rh(!0),
  Ah = Rh(!1),
  Ns = Bn(null),
  Ps = null,
  Or = null,
  oc = null;
function ic() {
  oc = Or = Ps = null;
}
function sc(e) {
  var t = Ns.current;
  ie(Ns), (e._currentValue = t);
}
function qa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Fr(e, t) {
  (Ps = e),
    (oc = Or = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function ut(e) {
  var t = e._currentValue;
  if (oc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Or === null)) {
      if (Ps === null) throw Error(A(308));
      (Or = e), (Ps.dependencies = { lanes: 0, firstContext: e });
    } else Or = Or.next = e;
  return t;
}
var qn = null;
function lc(e) {
  qn === null ? (qn = [e]) : qn.push(e);
}
function Oh(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), lc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    en(e, r)
  );
}
function en(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var vn = !1;
function ac(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function _h(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function On(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      en(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), lc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    en(e, n)
  );
}
function ns(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ku(e, n);
  }
}
function Qd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function js(e, t, n, r) {
  var o = e.updateQueue;
  vn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var p = o.baseState;
    (s = 0), (d = u = a = null), (l = i);
    do {
      var m = l.lane,
        f = l.eventTime;
      if ((r & m) === m) {
        d !== null &&
          (d = d.next =
            {
              eventTime: f,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var C = e,
            y = l;
          switch (((m = t), (f = n), y.tag)) {
            case 1:
              if (((C = y.payload), typeof C == "function")) {
                p = C.call(f, p, m);
                break e;
              }
              p = C;
              break e;
            case 3:
              C.flags = (C.flags & -65537) | 128;
            case 0:
              if (
                ((C = y.payload),
                (m = typeof C == "function" ? C.call(f, p, m) : C),
                m == null)
              )
                break e;
              p = ce({}, p, m);
              break e;
            case 2:
              vn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [l]) : m.push(l));
      } else
        (f = {
          eventTime: f,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = f), (a = p)) : (d = d.next = f),
          (s |= m);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (m = l),
          (l = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (cr |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function Kd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(A(191, o));
        o.call(r);
      }
    }
}
var wi = {},
  zt = Bn(wi),
  ri = Bn(wi),
  oi = Bn(wi);
function Xn(e) {
  if (e === wi) throw Error(A(174));
  return e;
}
function uc(e, t) {
  switch ((ne(oi, t), ne(ri, e), ne(zt, wi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ra(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ra(t, e));
  }
  ie(zt), ne(zt, t);
}
function oo() {
  ie(zt), ie(ri), ie(oi);
}
function Mh(e) {
  Xn(oi.current);
  var t = Xn(zt.current),
    n = Ra(t, e.type);
  t !== n && (ne(ri, e), ne(zt, n));
}
function cc(e) {
  ri.current === e && (ie(zt), ie(ri));
}
var ae = Bn(0);
function Rs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ea = [];
function dc() {
  for (var e = 0; e < ea.length; e++)
    ea[e]._workInProgressVersionPrimary = null;
  ea.length = 0;
}
var rs = on.ReactCurrentDispatcher,
  ta = on.ReactCurrentBatchConfig,
  ur = 0,
  ue = null,
  ve = null,
  we = null,
  As = !1,
  $o = !1,
  ii = 0,
  W0 = 0;
function Ne() {
  throw Error(A(321));
}
function fc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!kt(e[n], t[n])) return !1;
  return !0;
}
function pc(e, t, n, r, o, i) {
  if (
    ((ur = i),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (rs.current = e === null || e.memoizedState === null ? G0 : q0),
    (e = n(r, o)),
    $o)
  ) {
    i = 0;
    do {
      if ((($o = !1), (ii = 0), 25 <= i)) throw Error(A(301));
      (i += 1),
        (we = ve = null),
        (t.updateQueue = null),
        (rs.current = X0),
        (e = n(r, o));
    } while ($o);
  }
  if (
    ((rs.current = Os),
    (t = ve !== null && ve.next !== null),
    (ur = 0),
    (we = ve = ue = null),
    (As = !1),
    t)
  )
    throw Error(A(300));
  return e;
}
function hc() {
  var e = ii !== 0;
  return (ii = 0), e;
}
function At() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return we === null ? (ue.memoizedState = we = e) : (we = we.next = e), we;
}
function ct() {
  if (ve === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = we === null ? ue.memoizedState : we.next;
  if (t !== null) (we = t), (ve = e);
  else {
    if (e === null) throw Error(A(310));
    (ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      we === null ? (ue.memoizedState = we = e) : (we = we.next = e);
  }
  return we;
}
function si(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function na(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = ve,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var d = u.lane;
      if ((ur & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (s = r)) : (a = a.next = p),
          (ue.lanes |= d),
          (cr |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      kt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ue.lanes |= i), (cr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ra(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    kt(i, t.memoizedState) || (Ue = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Lh() {}
function Ih(e, t) {
  var n = ue,
    r = ct(),
    o = t(),
    i = !kt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ue = !0)),
    (r = r.queue),
    mc(Fh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (we !== null && we.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      li(9, zh.bind(null, n, r, o, t), void 0, null),
      Ce === null)
    )
      throw Error(A(349));
    ur & 30 || Dh(n, t, o);
  }
  return o;
}
function Dh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), $h(t) && Uh(e);
}
function Fh(e, t, n) {
  return n(function () {
    $h(t) && Uh(e);
  });
}
function $h(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return !0;
  }
}
function Uh(e) {
  var t = en(e, 1);
  t !== null && Et(t, e, 1, -1);
}
function Yd(e) {
  var t = At();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: si,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Y0.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function li(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Bh() {
  return ct().memoizedState;
}
function os(e, t, n, r) {
  var o = At();
  (ue.flags |= e),
    (o.memoizedState = li(1 | t, n, void 0, r === void 0 ? null : r));
}
function nl(e, t, n, r) {
  var o = ct();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ve !== null) {
    var s = ve.memoizedState;
    if (((i = s.destroy), r !== null && fc(r, s.deps))) {
      o.memoizedState = li(t, n, i, r);
      return;
    }
  }
  (ue.flags |= e), (o.memoizedState = li(1 | t, n, i, r));
}
function Gd(e, t) {
  return os(8390656, 8, e, t);
}
function mc(e, t) {
  return nl(2048, 8, e, t);
}
function Hh(e, t) {
  return nl(4, 2, e, t);
}
function Vh(e, t) {
  return nl(4, 4, e, t);
}
function Wh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), nl(4, 4, Wh.bind(null, t, e), n)
  );
}
function gc() {}
function Kh(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yh(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Gh(e, t, n) {
  return ur & 21
    ? (kt(n, t) || ((n = eh()), (ue.lanes |= n), (cr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function Q0(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ta.transition;
  ta.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (ta.transition = r);
  }
}
function qh() {
  return ct().memoizedState;
}
function K0(e, t, n) {
  var r = Mn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Xh(e))
  )
    Zh(t, n);
  else if (((n = Oh(e, t, n, r)), n !== null)) {
    var o = Ie();
    Et(n, e, r, o), Jh(n, t, r);
  }
}
function Y0(e, t, n) {
  var r = Mn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Xh(e)) Zh(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), kt(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), lc(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Oh(e, t, o, r)),
      n !== null && ((o = Ie()), Et(n, e, r, o), Jh(n, t, r));
  }
}
function Xh(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function Zh(e, t) {
  $o = As = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Jh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ku(e, n);
  }
}
var Os = {
    readContext: ut,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  G0 = {
    readContext: ut,
    useCallback: function (e, t) {
      return (At().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ut,
    useEffect: Gd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        os(4194308, 4, Wh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return os(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return os(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = At();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = At();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = K0.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = At();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Yd,
    useDebugValue: gc,
    useDeferredValue: function (e) {
      return (At().memoizedState = e);
    },
    useTransition: function () {
      var e = Yd(!1),
        t = e[0];
      return (e = Q0.bind(null, e[1])), (At().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        o = At();
      if (le) {
        if (n === void 0) throw Error(A(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(A(349));
        ur & 30 || Dh(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Gd(Fh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        li(9, zh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = At(),
        t = Ce.identifierPrefix;
      if (le) {
        var n = qt,
          r = Gt;
        (n = (r & ~(1 << (32 - St(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ii++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = W0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  q0 = {
    readContext: ut,
    useCallback: Kh,
    useContext: ut,
    useEffect: mc,
    useImperativeHandle: Qh,
    useInsertionEffect: Hh,
    useLayoutEffect: Vh,
    useMemo: Yh,
    useReducer: na,
    useRef: Bh,
    useState: function () {
      return na(si);
    },
    useDebugValue: gc,
    useDeferredValue: function (e) {
      var t = ct();
      return Gh(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = na(si)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Lh,
    useSyncExternalStore: Ih,
    useId: qh,
    unstable_isNewReconciler: !1,
  },
  X0 = {
    readContext: ut,
    useCallback: Kh,
    useContext: ut,
    useEffect: mc,
    useImperativeHandle: Qh,
    useInsertionEffect: Hh,
    useLayoutEffect: Vh,
    useMemo: Yh,
    useReducer: ra,
    useRef: Bh,
    useState: function () {
      return ra(si);
    },
    useDebugValue: gc,
    useDeferredValue: function (e) {
      var t = ct();
      return ve === null ? (t.memoizedState = e) : Gh(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = ra(si)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Lh,
    useSyncExternalStore: Ih,
    useId: qh,
    unstable_isNewReconciler: !1,
  };
function gt(e, t) {
  if (e && e.defaultProps) {
    (t = ce({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Xa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var rl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? hr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      o = Mn(e),
      i = Xt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = On(e, i, o)),
      t !== null && (Et(t, e, o, r), ns(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      o = Mn(e),
      i = Xt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = On(e, i, o)),
      t !== null && (Et(t, e, o, r), ns(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ie(),
      r = Mn(e),
      o = Xt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = On(e, o, r)),
      t !== null && (Et(t, e, r, n), ns(t, e, r));
  },
};
function qd(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Jo(n, r) || !Jo(o, i)
      : !0
  );
}
function em(e, t, n) {
  var r = !1,
    o = Dn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ut(i))
      : ((o = He(t) ? lr : Ae.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? to(e, o) : Dn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = rl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Xd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && rl.enqueueReplaceState(t, t.state, null);
}
function Za(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), ac(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = ut(i))
    : ((i = He(t) ? lr : Ae.current), (o.context = to(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Xa(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && rl.enqueueReplaceState(o, o.state, null),
      js(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function io(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ky(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function oa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ja(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Z0 = typeof WeakMap == "function" ? WeakMap : Map;
function tm(e, t, n) {
  (n = Xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ms || ((Ms = !0), (uu = r)), Ja(e, t);
    }),
    n
  );
}
function nm(e, t, n) {
  (n = Xt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ja(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ja(e, t),
          typeof r != "function" &&
            (_n === null ? (_n = new Set([this])) : _n.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Zd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Z0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = fx.bind(null, e, t, n)), t.then(e, e));
}
function Jd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ef(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Xt(-1, 1)), (t.tag = 2), On(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var J0 = on.ReactCurrentOwner,
  Ue = !1;
function Me(e, t, n, r) {
  t.child = e === null ? Ah(t, null, n, r) : ro(t, e.child, n, r);
}
function tf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Fr(t, o),
    (r = pc(e, t, n, r, i, o)),
    (n = hc()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        tn(e, t, o))
      : (le && n && tc(t), (t.flags |= 1), Me(e, t, r, o), t.child)
  );
}
function nf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ec(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), rm(e, t, i, r, o))
      : ((e = as(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jo), n(s, r) && e.ref === t.ref)
    )
      return tn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Ln(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function rm(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Jo(i, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), tn(e, t, o);
  }
  return eu(e, t, n, r, o);
}
function om(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(Mr, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(Mr, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ne(Mr, Qe),
        (Qe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(Mr, Qe),
      (Qe |= r);
  return Me(e, t, o, n), t.child;
}
function im(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function eu(e, t, n, r, o) {
  var i = He(n) ? lr : Ae.current;
  return (
    (i = to(t, i)),
    Fr(t, o),
    (n = pc(e, t, n, r, i, o)),
    (r = hc()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        tn(e, t, o))
      : (le && r && tc(t), (t.flags |= 1), Me(e, t, n, o), t.child)
  );
}
function rf(e, t, n, r, o) {
  if (He(n)) {
    var i = !0;
    Es(t);
  } else i = !1;
  if ((Fr(t, o), t.stateNode === null))
    is(e, t), em(t, n, r), Za(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ut(u))
      : ((u = He(n) ? lr : Ae.current), (u = to(t, u)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Xd(t, s, r, u)),
      (vn = !1);
    var m = t.memoizedState;
    (s.state = m),
      js(t, r, s, o),
      (a = t.memoizedState),
      l !== r || m !== a || Be.current || vn
        ? (typeof d == "function" && (Xa(t, n, d, r), (a = t.memoizedState)),
          (l = vn || qd(t, n, l, r, m, a, u))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      _h(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : gt(t.type, l)),
      (s.props = u),
      (p = t.pendingProps),
      (m = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = ut(a))
        : ((a = He(n) ? lr : Ae.current), (a = to(t, a)));
    var f = n.getDerivedStateFromProps;
    (d =
      typeof f == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== p || m !== a) && Xd(t, s, r, a)),
      (vn = !1),
      (m = t.memoizedState),
      (s.state = m),
      js(t, r, s, o);
    var C = t.memoizedState;
    l !== p || m !== C || Be.current || vn
      ? (typeof f == "function" && (Xa(t, n, f, r), (C = t.memoizedState)),
        (u = vn || qd(t, n, u, r, m, C, a) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, C, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, C, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = C)),
        (s.props = r),
        (s.state = C),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return tu(e, t, n, r, i, o);
}
function tu(e, t, n, r, o, i) {
  im(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Bd(t, n, !1), tn(e, t, i);
  (r = t.stateNode), (J0.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = ro(t, e.child, null, i)), (t.child = ro(t, null, l, i)))
      : Me(e, t, l, i),
    (t.memoizedState = r.state),
    o && Bd(t, n, !0),
    t.child
  );
}
function sm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ud(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ud(e, t.context, !1),
    uc(e, t.containerInfo);
}
function of(e, t, n, r, o) {
  return no(), rc(o), (t.flags |= 256), Me(e, t, n, r), t.child;
}
var nu = { dehydrated: null, treeContext: null, retryLane: 0 };
function ru(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function lm(e, t, n) {
  var r = t.pendingProps,
    o = ae.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ae, o & 1),
    e === null)
  )
    return (
      Ga(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = sl(s, r, 0, null)),
              (e = sr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ru(n)),
              (t.memoizedState = nu),
              e)
            : vc(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return ex(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ln(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Ln(l, i)) : ((i = sr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ru(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = nu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Ln(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function vc(e, t) {
  return (
    (t = sl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ui(e, t, n, r) {
  return (
    r !== null && rc(r),
    ro(t, e.child, null, n),
    (e = vc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ex(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = oa(Error(A(422)))), Ui(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = sl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = sr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && ro(t, e.child, null, s),
        (t.child.memoizedState = ru(s)),
        (t.memoizedState = nu),
        i);
  if (!(t.mode & 1)) return Ui(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(A(419))), (r = oa(i, r, void 0)), Ui(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Ue || l)) {
    if (((r = Ce), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), en(e, o), Et(r, e, o, -1));
    }
    return Sc(), (r = oa(Error(A(421)))), Ui(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = px.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ye = An(o.nextSibling)),
      (qe = t),
      (le = !0),
      (Ct = null),
      e !== null &&
        ((it[st++] = Gt),
        (it[st++] = qt),
        (it[st++] = ar),
        (Gt = e.id),
        (qt = e.overflow),
        (ar = t)),
      (t = vc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), qa(e.return, t, n);
}
function ia(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function am(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Me(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sf(e, n, t);
        else if (e.tag === 19) sf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ne(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Rs(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ia(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Rs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ia(t, !0, n, null, i);
        break;
      case "together":
        ia(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function is(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (cr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ln(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ln(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function tx(e, t, n) {
  switch (t.tag) {
    case 3:
      sm(t), no();
      break;
    case 5:
      Mh(t);
      break;
    case 1:
      He(t.type) && Es(t);
      break;
    case 4:
      uc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ne(Ns, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? lm(e, t, n)
          : (ne(ae, ae.current & 1),
            (e = tn(e, t, n)),
            e !== null ? e.sibling : null);
      ne(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return am(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ne(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), om(e, t, n);
  }
  return tn(e, t, n);
}
var um, ou, cm, dm;
um = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ou = function () {};
cm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Xn(zt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Ta(e, o)), (r = Ta(e, r)), (i = []);
        break;
      case "select":
        (o = ce({}, o, { value: void 0 })),
          (r = ce({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ja(e, o)), (r = ja(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = bs);
    }
    Aa(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Qo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Qo.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && oe("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
dm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ko(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function nx(e, t, n) {
  var r = t.pendingProps;
  switch ((nc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Pe(t), null;
    case 1:
      return He(t.type) && Ss(), Pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        oo(),
        ie(Be),
        ie(Ae),
        dc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Fi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ct !== null && (fu(Ct), (Ct = null)))),
        ou(e, t),
        Pe(t),
        null
      );
    case 5:
      cc(t);
      var o = Xn(oi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        cm(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Pe(t), null;
        }
        if (((e = Xn(zt.current)), Fi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Lt] = t), (r[ni] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Mo.length; o++) oe(Mo[o], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe("error", r), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              hd(r, i), oe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                oe("invalid", r);
              break;
            case "textarea":
              gd(r, i), oe("invalid", r);
          }
          Aa(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      zi(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      zi(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Qo.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  oe("scroll", r);
            }
          switch (n) {
            case "input":
              Ri(r), md(r, i, !0);
              break;
            case "textarea":
              Ri(r), vd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = bs);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Fp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Lt] = t),
            (e[ni] = r),
            um(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Oa(n, r)), n)) {
              case "dialog":
                oe("cancel", e), oe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Mo.length; o++) oe(Mo[o], e);
                o = r;
                break;
              case "source":
                oe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                oe("error", e), oe("load", e), (o = r);
                break;
              case "details":
                oe("toggle", e), (o = r);
                break;
              case "input":
                hd(e, r), (o = Ta(e, r)), oe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ce({}, r, { value: void 0 })),
                  oe("invalid", e);
                break;
              case "textarea":
                gd(e, r), (o = ja(e, r)), oe("invalid", e);
                break;
              default:
                o = r;
            }
            Aa(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? Bp(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && $p(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Ko(e, a)
                    : typeof a == "number" && Ko(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Qo.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && oe("scroll", e)
                      : a != null && Uu(e, i, a, s));
              }
            switch (n) {
              case "input":
                Ri(e), md(e, r, !1);
                break;
              case "textarea":
                Ri(e), vd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + In(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Lr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Lr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = bs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Pe(t), null;
    case 6:
      if (e && t.stateNode != null) dm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (((n = Xn(oi.current)), Xn(zt.current), Fi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Lt] = t),
            (i = r.nodeValue !== n) && ((e = qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                zi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Lt] = t),
            (t.stateNode = r);
      }
      return Pe(t), null;
    case 13:
      if (
        (ie(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Ye !== null && t.mode & 1 && !(t.flags & 128))
          jh(), no(), (t.flags |= 98560), (i = !1);
        else if (((i = Fi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(A(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(A(317));
            i[Lt] = t;
          } else
            no(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Pe(t), (i = !1);
        } else Ct !== null && (fu(Ct), (Ct = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? ye === 0 && (ye = 3) : Sc())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return (
        oo(), ou(e, t), e === null && ei(t.stateNode.containerInfo), Pe(t), null
      );
    case 10:
      return sc(t.type._context), Pe(t), null;
    case 17:
      return He(t.type) && Ss(), Pe(t), null;
    case 19:
      if ((ie(ae), (i = t.memoizedState), i === null)) return Pe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) ko(i, !1);
        else {
          if (ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Rs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ko(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ne(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            pe() > so &&
            ((t.flags |= 128), (r = !0), ko(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Rs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ko(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !le)
            )
              return Pe(t), null;
          } else
            2 * pe() - i.renderingStartTime > so &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ko(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = pe()),
          (t.sibling = null),
          (n = ae.current),
          ne(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Pe(t), null);
    case 22:
    case 23:
      return (
        bc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function rx(e, t) {
  switch ((nc(t), t.tag)) {
    case 1:
      return (
        He(t.type) && Ss(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        oo(),
        ie(Be),
        ie(Ae),
        dc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return cc(t), null;
    case 13:
      if (
        (ie(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(A(340));
        no();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ie(ae), null;
    case 4:
      return oo(), null;
    case 10:
      return sc(t.type._context), null;
    case 22:
    case 23:
      return bc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Bi = !1,
  Re = !1,
  ox = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function _r(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        fe(e, t, r);
      }
    else n.current = null;
}
function iu(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var lf = !1;
function ix(e, t) {
  if (((Ba = xs), (e = gh()), ec(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var f;
              p !== n || (o !== 0 && p.nodeType !== 3) || (l = s + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (f = p.firstChild) !== null;

            )
              (m = p), (p = f);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++u === o && (l = s),
                m === i && ++d === r && (a = s),
                (f = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = f;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ha = { focusedElem: e, selectionRange: n }, xs = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var C = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (C !== null) {
                  var y = C.memoizedProps,
                    w = C.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : gt(t.type, y),
                      w
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (b) {
          fe(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (C = lf), (lf = !1), C;
}
function Uo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && iu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ol(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function su(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function fm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), fm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Lt], delete t[ni], delete t[Qa], delete t[U0], delete t[B0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function pm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function af(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || pm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function lu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = bs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lu(e, t, n), e = e.sibling; e !== null; ) lu(e, t, n), (e = e.sibling);
}
function au(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (au(e, t, n), e = e.sibling; e !== null; ) au(e, t, n), (e = e.sibling);
}
var be = null,
  wt = !1;
function fn(e, t, n) {
  for (n = n.child; n !== null; ) hm(e, t, n), (n = n.sibling);
}
function hm(e, t, n) {
  if (Dt && typeof Dt.onCommitFiberUnmount == "function")
    try {
      Dt.onCommitFiberUnmount(qs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || _r(n, t);
    case 6:
      var r = be,
        o = wt;
      (be = null),
        fn(e, t, n),
        (be = r),
        (wt = o),
        be !== null &&
          (wt
            ? ((e = be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : be.removeChild(n.stateNode));
      break;
    case 18:
      be !== null &&
        (wt
          ? ((e = be),
            (n = n.stateNode),
            e.nodeType === 8
              ? Zl(e.parentNode, n)
              : e.nodeType === 1 && Zl(e, n),
            Xo(e))
          : Zl(be, n.stateNode));
      break;
    case 4:
      (r = be),
        (o = wt),
        (be = n.stateNode.containerInfo),
        (wt = !0),
        fn(e, t, n),
        (be = r),
        (wt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && iu(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      fn(e, t, n);
      break;
    case 1:
      if (
        !Re &&
        (_r(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          fe(n, t, l);
        }
      fn(e, t, n);
      break;
    case 21:
      fn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), fn(e, t, n), (Re = r))
        : fn(e, t, n);
      break;
    default:
      fn(e, t, n);
  }
}
function uf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ox()),
      t.forEach(function (r) {
        var o = hx.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ht(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (be = l.stateNode), (wt = !1);
              break e;
            case 3:
              (be = l.stateNode.containerInfo), (wt = !0);
              break e;
            case 4:
              (be = l.stateNode.containerInfo), (wt = !0);
              break e;
          }
          l = l.return;
        }
        if (be === null) throw Error(A(160));
        hm(i, s, o), (be = null), (wt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        fe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) mm(t, e), (t = t.sibling);
}
function mm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ht(t, e), Rt(e), r & 4)) {
        try {
          Uo(3, e, e.return), ol(3, e);
        } catch (y) {
          fe(e, e.return, y);
        }
        try {
          Uo(5, e, e.return);
        } catch (y) {
          fe(e, e.return, y);
        }
      }
      break;
    case 1:
      ht(t, e), Rt(e), r & 512 && n !== null && _r(n, n.return);
      break;
    case 5:
      if (
        (ht(t, e),
        Rt(e),
        r & 512 && n !== null && _r(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ko(o, "");
        } catch (y) {
          fe(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Dp(o, i),
              Oa(l, s);
            var u = Oa(l, i);
            for (s = 0; s < a.length; s += 2) {
              var d = a[s],
                p = a[s + 1];
              d === "style"
                ? Bp(o, p)
                : d === "dangerouslySetInnerHTML"
                ? $p(o, p)
                : d === "children"
                ? Ko(o, p)
                : Uu(o, d, p, u);
            }
            switch (l) {
              case "input":
                Na(o, i);
                break;
              case "textarea":
                zp(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var f = i.value;
                f != null
                  ? Lr(o, !!i.multiple, f, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Lr(o, !!i.multiple, i.defaultValue, !0)
                      : Lr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ni] = i;
          } catch (y) {
            fe(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((ht(t, e), Rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          fe(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (ht(t, e), Rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xo(t.containerInfo);
        } catch (y) {
          fe(e, e.return, y);
        }
      break;
    case 4:
      ht(t, e), Rt(e);
      break;
    case 13:
      ht(t, e),
        Rt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (wc = pe())),
        r & 4 && uf(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (u = Re) || d), ht(t, e), (Re = u)) : ht(t, e),
        Rt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (I = e, d = e.child; d !== null; ) {
            for (p = I = d; I !== null; ) {
              switch (((m = I), (f = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Uo(4, m, m.return);
                  break;
                case 1:
                  _r(m, m.return);
                  var C = m.stateNode;
                  if (typeof C.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (C.props = t.memoizedProps),
                        (C.state = t.memoizedState),
                        C.componentWillUnmount();
                    } catch (y) {
                      fe(r, n, y);
                    }
                  }
                  break;
                case 5:
                  _r(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    df(p);
                    continue;
                  }
              }
              f !== null ? ((f.return = m), (I = f)) : df(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Up("display", s)));
              } catch (y) {
                fe(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (y) {
                fe(e, e.return, y);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      ht(t, e), Rt(e), r & 4 && uf(e);
      break;
    case 21:
      break;
    default:
      ht(t, e), Rt(e);
  }
}
function Rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (pm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ko(o, ""), (r.flags &= -33));
          var i = af(e);
          au(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = af(e);
          lu(e, l, s);
          break;
        default:
          throw Error(A(161));
      }
    } catch (a) {
      fe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sx(e, t, n) {
  (I = e), gm(e);
}
function gm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Bi;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Re;
        l = Bi;
        var u = Re;
        if (((Bi = s), (Re = a) && !u))
          for (I = o; I !== null; )
            (s = I),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? ff(o)
                : a !== null
                ? ((a.return = s), (I = a))
                : ff(o);
        for (; i !== null; ) (I = i), gm(i), (i = i.sibling);
        (I = o), (Bi = l), (Re = u);
      }
      cf(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (I = i)) : cf(e);
  }
}
function cf(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || ol(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : gt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Kd(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Kd(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && Xo(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
        Re || (t.flags & 512 && su(t));
      } catch (m) {
        fe(t, t.return, m);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function df(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function ff(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ol(4, t);
          } catch (a) {
            fe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              fe(t, o, a);
            }
          }
          var i = t.return;
          try {
            su(t);
          } catch (a) {
            fe(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            su(t);
          } catch (a) {
            fe(t, s, a);
          }
      }
    } catch (a) {
      fe(t, t.return, a);
    }
    if (t === e) {
      I = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (I = l);
      break;
    }
    I = t.return;
  }
}
var lx = Math.ceil,
  _s = on.ReactCurrentDispatcher,
  yc = on.ReactCurrentOwner,
  at = on.ReactCurrentBatchConfig,
  X = 0,
  Ce = null,
  ge = null,
  Se = 0,
  Qe = 0,
  Mr = Bn(0),
  ye = 0,
  ai = null,
  cr = 0,
  il = 0,
  xc = 0,
  Bo = null,
  $e = null,
  wc = 0,
  so = 1 / 0,
  Qt = null,
  Ms = !1,
  uu = null,
  _n = null,
  Hi = !1,
  Tn = null,
  Ls = 0,
  Ho = 0,
  cu = null,
  ss = -1,
  ls = 0;
function Ie() {
  return X & 6 ? pe() : ss !== -1 ? ss : (ss = pe());
}
function Mn(e) {
  return e.mode & 1
    ? X & 2 && Se !== 0
      ? Se & -Se
      : V0.transition !== null
      ? (ls === 0 && (ls = eh()), ls)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : lh(e.type))),
        e)
    : 1;
}
function Et(e, t, n, r) {
  if (50 < Ho) throw ((Ho = 0), (cu = null), Error(A(185)));
  vi(e, n, r),
    (!(X & 2) || e !== Ce) &&
      (e === Ce && (!(X & 2) && (il |= n), ye === 4 && xn(e, Se)),
      Ve(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((so = pe() + 500), tl && Hn()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  Vy(e, t);
  var r = ys(e, e === Ce ? Se : 0);
  if (r === 0)
    n !== null && wd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && wd(n), t === 1))
      e.tag === 0 ? H0(pf.bind(null, e)) : Th(pf.bind(null, e)),
        F0(function () {
          !(X & 6) && Hn();
        }),
        (n = null);
    else {
      switch (th(r)) {
        case 1:
          n = Qu;
          break;
        case 4:
          n = Zp;
          break;
        case 16:
          n = vs;
          break;
        case 536870912:
          n = Jp;
          break;
        default:
          n = vs;
      }
      n = Em(n, vm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function vm(e, t) {
  if (((ss = -1), (ls = 0), X & 6)) throw Error(A(327));
  var n = e.callbackNode;
  if ($r() && e.callbackNode !== n) return null;
  var r = ys(e, e === Ce ? Se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Is(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var i = xm();
    (Ce !== e || Se !== t) && ((Qt = null), (so = pe() + 500), ir(e, t));
    do
      try {
        cx();
        break;
      } catch (l) {
        ym(e, l);
      }
    while (!0);
    ic(),
      (_s.current = i),
      (X = o),
      ge !== null ? (t = 0) : ((Ce = null), (Se = 0), (t = ye));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Da(e)), o !== 0 && ((r = o), (t = du(e, o)))), t === 1)
    )
      throw ((n = ai), ir(e, 0), xn(e, r), Ve(e, pe()), n);
    if (t === 6) xn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !ax(o) &&
          ((t = Is(e, r)),
          t === 2 && ((i = Da(e)), i !== 0 && ((r = i), (t = du(e, i)))),
          t === 1))
      )
        throw ((n = ai), ir(e, 0), xn(e, r), Ve(e, pe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Yn(e, $e, Qt);
          break;
        case 3:
          if (
            (xn(e, r), (r & 130023424) === r && ((t = wc + 500 - pe()), 10 < t))
          ) {
            if (ys(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ie(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Wa(Yn.bind(null, e, $e, Qt), t);
            break;
          }
          Yn(e, $e, Qt);
          break;
        case 4:
          if ((xn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - St(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * lx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Wa(Yn.bind(null, e, $e, Qt), r);
            break;
          }
          Yn(e, $e, Qt);
          break;
        case 5:
          Yn(e, $e, Qt);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return Ve(e, pe()), e.callbackNode === n ? vm.bind(null, e) : null;
}
function du(e, t) {
  var n = Bo;
  return (
    e.current.memoizedState.isDehydrated && (ir(e, t).flags |= 256),
    (e = Is(e, t)),
    e !== 2 && ((t = $e), ($e = n), t !== null && fu(t)),
    e
  );
}
function fu(e) {
  $e === null ? ($e = e) : $e.push.apply($e, e);
}
function ax(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!kt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function xn(e, t) {
  for (
    t &= ~xc,
      t &= ~il,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - St(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function pf(e) {
  if (X & 6) throw Error(A(327));
  $r();
  var t = ys(e, 0);
  if (!(t & 1)) return Ve(e, pe()), null;
  var n = Is(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Da(e);
    r !== 0 && ((t = r), (n = du(e, r)));
  }
  if (n === 1) throw ((n = ai), ir(e, 0), xn(e, t), Ve(e, pe()), n);
  if (n === 6) throw Error(A(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Yn(e, $e, Qt),
    Ve(e, pe()),
    null
  );
}
function Cc(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((so = pe() + 500), tl && Hn());
  }
}
function dr(e) {
  Tn !== null && Tn.tag === 0 && !(X & 6) && $r();
  var t = X;
  X |= 1;
  var n = at.transition,
    r = ee;
  try {
    if (((at.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (at.transition = n), (X = t), !(X & 6) && Hn();
  }
}
function bc() {
  (Qe = Mr.current), ie(Mr);
}
function ir(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), z0(n)), ge !== null))
    for (n = ge.return; n !== null; ) {
      var r = n;
      switch ((nc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ss();
          break;
        case 3:
          oo(), ie(Be), ie(Ae), dc();
          break;
        case 5:
          cc(r);
          break;
        case 4:
          oo();
          break;
        case 13:
          ie(ae);
          break;
        case 19:
          ie(ae);
          break;
        case 10:
          sc(r.type._context);
          break;
        case 22:
        case 23:
          bc();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ge = e = Ln(e.current, null)),
    (Se = Qe = t),
    (ye = 0),
    (ai = null),
    (xc = il = cr = 0),
    ($e = Bo = null),
    qn !== null)
  ) {
    for (t = 0; t < qn.length; t++)
      if (((n = qn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    qn = null;
  }
  return e;
}
function ym(e, t) {
  do {
    var n = ge;
    try {
      if ((ic(), (rs.current = Os), As)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        As = !1;
      }
      if (
        ((ur = 0),
        (we = ve = ue = null),
        ($o = !1),
        (ii = 0),
        (yc.current = null),
        n === null || n.return === null)
      ) {
        (ye = 1), (ai = t), (ge = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = Se),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = l,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = d.alternate;
            m
              ? ((d.updateQueue = m.updateQueue),
                (d.memoizedState = m.memoizedState),
                (d.lanes = m.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var f = Jd(s);
          if (f !== null) {
            (f.flags &= -257),
              ef(f, s, l, i, t),
              f.mode & 1 && Zd(i, u, t),
              (t = f),
              (a = u);
            var C = t.updateQueue;
            if (C === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else C.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Zd(i, u, t), Sc();
              break e;
            }
            a = Error(A(426));
          }
        } else if (le && l.mode & 1) {
          var w = Jd(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              ef(w, s, l, i, t),
              rc(io(a, l));
            break e;
          }
        }
        (i = a = io(a, l)),
          ye !== 4 && (ye = 2),
          Bo === null ? (Bo = [i]) : Bo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = tm(i, a, t);
              Qd(i, g);
              break e;
            case 1:
              l = a;
              var h = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (_n === null || !_n.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var b = nm(i, l, t);
                Qd(i, b);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Cm(n);
    } catch (S) {
      (t = S), ge === n && n !== null && (ge = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function xm() {
  var e = _s.current;
  return (_s.current = Os), e === null ? Os : e;
}
function Sc() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    Ce === null || (!(cr & 268435455) && !(il & 268435455)) || xn(Ce, Se);
}
function Is(e, t) {
  var n = X;
  X |= 2;
  var r = xm();
  (Ce !== e || Se !== t) && ((Qt = null), ir(e, t));
  do
    try {
      ux();
      break;
    } catch (o) {
      ym(e, o);
    }
  while (!0);
  if ((ic(), (X = n), (_s.current = r), ge !== null)) throw Error(A(261));
  return (Ce = null), (Se = 0), ye;
}
function ux() {
  for (; ge !== null; ) wm(ge);
}
function cx() {
  for (; ge !== null && !Ly(); ) wm(ge);
}
function wm(e) {
  var t = Sm(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Cm(e) : (ge = t),
    (yc.current = null);
}
function Cm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = rx(n, t)), n !== null)) {
        (n.flags &= 32767), (ge = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ye = 6), (ge = null);
        return;
      }
    } else if (((n = nx(n, t, Qe)), n !== null)) {
      ge = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function Yn(e, t, n) {
  var r = ee,
    o = at.transition;
  try {
    (at.transition = null), (ee = 1), dx(e, t, n, r);
  } finally {
    (at.transition = o), (ee = r);
  }
  return null;
}
function dx(e, t, n, r) {
  do $r();
  while (Tn !== null);
  if (X & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(A(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Wy(e, i),
    e === Ce && ((ge = Ce = null), (Se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Hi ||
      ((Hi = !0),
      Em(vs, function () {
        return $r(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = at.transition), (at.transition = null);
    var s = ee;
    ee = 1;
    var l = X;
    (X |= 4),
      (yc.current = null),
      ix(e, n),
      mm(n, e),
      A0(Ha),
      (xs = !!Ba),
      (Ha = Ba = null),
      (e.current = n),
      sx(n),
      Iy(),
      (X = l),
      (ee = s),
      (at.transition = i);
  } else e.current = n;
  if (
    (Hi && ((Hi = !1), (Tn = e), (Ls = o)),
    (i = e.pendingLanes),
    i === 0 && (_n = null),
    Fy(n.stateNode),
    Ve(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ms) throw ((Ms = !1), (e = uu), (uu = null), e);
  return (
    Ls & 1 && e.tag !== 0 && $r(),
    (i = e.pendingLanes),
    i & 1 ? (e === cu ? Ho++ : ((Ho = 0), (cu = e))) : (Ho = 0),
    Hn(),
    null
  );
}
function $r() {
  if (Tn !== null) {
    var e = th(Ls),
      t = at.transition,
      n = ee;
    try {
      if (((at.transition = null), (ee = 16 > e ? 16 : e), Tn === null))
        var r = !1;
      else {
        if (((e = Tn), (Tn = null), (Ls = 0), X & 6)) throw Error(A(331));
        var o = X;
        for (X |= 4, I = e.current; I !== null; ) {
          var i = I,
            s = i.child;
          if (I.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (I = u; I !== null; ) {
                  var d = I;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Uo(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (I = p);
                  else
                    for (; I !== null; ) {
                      d = I;
                      var m = d.sibling,
                        f = d.return;
                      if ((fm(d), d === u)) {
                        I = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = f), (I = m);
                        break;
                      }
                      I = f;
                    }
                }
              }
              var C = i.alternate;
              if (C !== null) {
                var y = C.child;
                if (y !== null) {
                  C.child = null;
                  do {
                    var w = y.sibling;
                    (y.sibling = null), (y = w);
                  } while (y !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (I = s);
          else
            e: for (; I !== null; ) {
              if (((i = I), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Uo(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (I = g);
                break e;
              }
              I = i.return;
            }
        }
        var h = e.current;
        for (I = h; I !== null; ) {
          s = I;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (I = v);
          else
            e: for (s = h; I !== null; ) {
              if (((l = I), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ol(9, l);
                  }
                } catch (S) {
                  fe(l, l.return, S);
                }
              if (l === s) {
                I = null;
                break e;
              }
              var b = l.sibling;
              if (b !== null) {
                (b.return = l.return), (I = b);
                break e;
              }
              I = l.return;
            }
        }
        if (
          ((X = o), Hn(), Dt && typeof Dt.onPostCommitFiberRoot == "function")
        )
          try {
            Dt.onPostCommitFiberRoot(qs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (at.transition = t);
    }
  }
  return !1;
}
function hf(e, t, n) {
  (t = io(n, t)),
    (t = tm(e, t, 1)),
    (e = On(e, t, 1)),
    (t = Ie()),
    e !== null && (vi(e, 1, t), Ve(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) hf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (_n === null || !_n.has(r)))
        ) {
          (e = io(n, e)),
            (e = nm(t, e, 1)),
            (t = On(t, e, 1)),
            (e = Ie()),
            t !== null && (vi(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function fx(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (Se & n) === n &&
      (ye === 4 || (ye === 3 && (Se & 130023424) === Se && 500 > pe() - wc)
        ? ir(e, 0)
        : (xc |= n)),
    Ve(e, t);
}
function bm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = _i), (_i <<= 1), !(_i & 130023424) && (_i = 4194304))
      : (t = 1));
  var n = Ie();
  (e = en(e, t)), e !== null && (vi(e, t, n), Ve(e, n));
}
function px(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bm(e, n);
}
function hx(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), bm(e, n);
}
var Sm;
Sm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), tx(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), le && t.flags & 1048576 && Nh(t, Ts, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      is(e, t), (e = t.pendingProps);
      var o = to(t, Ae.current);
      Fr(t, n), (o = pc(null, t, r, e, o, n));
      var i = hc();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            He(r) ? ((i = !0), Es(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ac(t),
            (o.updater = rl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Za(t, r, e, n),
            (t = tu(null, t, r, !0, i, n)))
          : ((t.tag = 0), le && i && tc(t), Me(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (is(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = gx(r)),
          (e = gt(r, e)),
          o)
        ) {
          case 0:
            t = eu(null, t, r, e, n);
            break e;
          case 1:
            t = rf(null, t, r, e, n);
            break e;
          case 11:
            t = tf(null, t, r, e, n);
            break e;
          case 14:
            t = nf(null, t, r, gt(r.type, e), n);
            break e;
        }
        throw Error(A(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : gt(r, o)),
        eu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : gt(r, o)),
        rf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((sm(t), e === null)) throw Error(A(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          _h(e, t),
          js(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = io(Error(A(423)), t)), (t = of(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = io(Error(A(424)), t)), (t = of(e, t, r, n, o));
            break e;
          } else
            for (
              Ye = An(t.stateNode.containerInfo.firstChild),
                qe = t,
                le = !0,
                Ct = null,
                n = Ah(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((no(), r === o)) {
            t = tn(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Mh(t),
        e === null && Ga(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Va(r, o) ? (s = null) : i !== null && Va(r, i) && (t.flags |= 32),
        im(e, t),
        Me(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ga(t), null;
    case 13:
      return lm(e, t, n);
    case 4:
      return (
        uc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ro(t, null, r, n)) : Me(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : gt(r, o)),
        tf(e, t, r, o, n)
      );
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ne(Ns, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (kt(i.value, s)) {
            if (i.children === o.children && !Be.current) {
              t = tn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Xt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      qa(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(A(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  qa(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Me(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Fr(t, n),
        (o = ut(o)),
        (r = r(o)),
        (t.flags |= 1),
        Me(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = gt(r, t.pendingProps)),
        (o = gt(r.type, o)),
        nf(e, t, r, o, n)
      );
    case 15:
      return rm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : gt(r, o)),
        is(e, t),
        (t.tag = 1),
        He(r) ? ((e = !0), Es(t)) : (e = !1),
        Fr(t, n),
        em(t, r, o),
        Za(t, r, o, n),
        tu(null, t, r, !0, e, n)
      );
    case 19:
      return am(e, t, n);
    case 22:
      return om(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function Em(e, t) {
  return Xp(e, t);
}
function mx(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function lt(e, t, n, r) {
  return new mx(e, t, n, r);
}
function Ec(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function gx(e) {
  if (typeof e == "function") return Ec(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hu)) return 11;
    if (e === Vu) return 14;
  }
  return 2;
}
function Ln(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = lt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function as(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ec(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Er:
        return sr(n.children, o, i, t);
      case Bu:
        (s = 8), (o |= 8);
        break;
      case ba:
        return (
          (e = lt(12, n, t, o | 2)), (e.elementType = ba), (e.lanes = i), e
        );
      case Sa:
        return (e = lt(13, n, t, o)), (e.elementType = Sa), (e.lanes = i), e;
      case Ea:
        return (e = lt(19, n, t, o)), (e.elementType = Ea), (e.lanes = i), e;
      case Mp:
        return sl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Op:
              s = 10;
              break e;
            case _p:
              s = 9;
              break e;
            case Hu:
              s = 11;
              break e;
            case Vu:
              s = 14;
              break e;
            case gn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = lt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function sr(e, t, n, r) {
  return (e = lt(7, e, r, t)), (e.lanes = n), e;
}
function sl(e, t, n, r) {
  return (
    (e = lt(22, e, r, t)),
    (e.elementType = Mp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function sa(e, t, n) {
  return (e = lt(6, e, null, t)), (e.lanes = n), e;
}
function la(e, t, n) {
  return (
    (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function vx(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ul(0)),
    (this.expirationTimes = Ul(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ul(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function kc(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new vx(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = lt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ac(i),
    e
  );
}
function yx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Sr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function km(e) {
  if (!e) return Dn;
  e = e._reactInternals;
  e: {
    if (hr(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return kh(e, n, t);
  }
  return t;
}
function Tm(e, t, n, r, o, i, s, l, a) {
  return (
    (e = kc(n, r, !0, e, o, i, s, l, a)),
    (e.context = km(null)),
    (n = e.current),
    (r = Ie()),
    (o = Mn(n)),
    (i = Xt(r, o)),
    (i.callback = t ?? null),
    On(n, i, o),
    (e.current.lanes = o),
    vi(e, o, r),
    Ve(e, r),
    e
  );
}
function ll(e, t, n, r) {
  var o = t.current,
    i = Ie(),
    s = Mn(o);
  return (
    (n = km(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Xt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = On(o, t, s)),
    e !== null && (Et(e, o, s, i), ns(e, o, s)),
    s
  );
}
function Ds(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Tc(e, t) {
  mf(e, t), (e = e.alternate) && mf(e, t);
}
function xx() {
  return null;
}
var Nm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Nc(e) {
  this._internalRoot = e;
}
al.prototype.render = Nc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  ll(e, t, null, null);
};
al.prototype.unmount = Nc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    dr(function () {
      ll(null, e, null, null);
    }),
      (t[Jt] = null);
  }
};
function al(e) {
  this._internalRoot = e;
}
al.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = oh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < yn.length && t !== 0 && t < yn[n].priority; n++);
    yn.splice(n, 0, e), n === 0 && sh(e);
  }
};
function Pc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ul(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function gf() {}
function wx(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ds(s);
        i.call(u);
      };
    }
    var s = Tm(t, r, e, 0, null, !1, !1, "", gf);
    return (
      (e._reactRootContainer = s),
      (e[Jt] = s.current),
      ei(e.nodeType === 8 ? e.parentNode : e),
      dr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Ds(a);
      l.call(u);
    };
  }
  var a = kc(e, 0, !1, null, null, !1, !1, "", gf);
  return (
    (e._reactRootContainer = a),
    (e[Jt] = a.current),
    ei(e.nodeType === 8 ? e.parentNode : e),
    dr(function () {
      ll(t, a, n, r);
    }),
    a
  );
}
function cl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Ds(s);
        l.call(a);
      };
    }
    ll(t, s, e, o);
  } else s = wx(n, t, e, o, r);
  return Ds(s);
}
nh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _o(t.pendingLanes);
        n !== 0 &&
          (Ku(t, n | 1), Ve(t, pe()), !(X & 6) && ((so = pe() + 500), Hn()));
      }
      break;
    case 13:
      dr(function () {
        var r = en(e, 1);
        if (r !== null) {
          var o = Ie();
          Et(r, e, 1, o);
        }
      }),
        Tc(e, 1);
  }
};
Yu = function (e) {
  if (e.tag === 13) {
    var t = en(e, 134217728);
    if (t !== null) {
      var n = Ie();
      Et(t, e, 134217728, n);
    }
    Tc(e, 134217728);
  }
};
rh = function (e) {
  if (e.tag === 13) {
    var t = Mn(e),
      n = en(e, t);
    if (n !== null) {
      var r = Ie();
      Et(n, e, t, r);
    }
    Tc(e, t);
  }
};
oh = function () {
  return ee;
};
ih = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
Ma = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Na(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = el(r);
            if (!o) throw Error(A(90));
            Ip(r), Na(r, o);
          }
        }
      }
      break;
    case "textarea":
      zp(e, n);
      break;
    case "select":
      (t = n.value), t != null && Lr(e, !!n.multiple, t, !1);
  }
};
Wp = Cc;
Qp = dr;
var Cx = { usingClientEntryPoint: !1, Events: [xi, Pr, el, Hp, Vp, Cc] },
  To = {
    findFiberByHostInstance: Gn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  bx = {
    bundleType: To.bundleType,
    version: To.version,
    rendererPackageName: To.rendererPackageName,
    rendererConfig: To.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: on.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Gp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: To.findFiberByHostInstance || xx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vi.isDisabled && Vi.supportsFiber)
    try {
      (qs = Vi.inject(bx)), (Dt = Vi);
    } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cx;
et.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pc(t)) throw Error(A(200));
  return yx(e, t, null, n);
};
et.createRoot = function (e, t) {
  if (!Pc(e)) throw Error(A(299));
  var n = !1,
    r = "",
    o = Nm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = kc(e, 1, !1, null, null, n, !1, r, o)),
    (e[Jt] = t.current),
    ei(e.nodeType === 8 ? e.parentNode : e),
    new Nc(t)
  );
};
et.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return (e = Gp(t)), (e = e === null ? null : e.stateNode), e;
};
et.flushSync = function (e) {
  return dr(e);
};
et.hydrate = function (e, t, n) {
  if (!ul(t)) throw Error(A(200));
  return cl(null, e, t, !0, n);
};
et.hydrateRoot = function (e, t, n) {
  if (!Pc(e)) throw Error(A(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Nm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Tm(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Jt] = t.current),
    ei(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new al(t);
};
et.render = function (e, t, n) {
  if (!ul(t)) throw Error(A(200));
  return cl(null, e, t, !1, n);
};
et.unmountComponentAtNode = function (e) {
  if (!ul(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (dr(function () {
        cl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Jt] = null);
        });
      }),
      !0)
    : !1;
};
et.unstable_batchedUpdates = Cc;
et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ul(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return cl(e, t, n, !1, r);
};
et.version = "18.3.1-next-f1338f8080-20240426";
function Pm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pm);
    } catch (e) {
      console.error(e);
    }
}
Pm(), (Pp.exports = et);
var Ci = Pp.exports;
const jm = mi(Ci);
var Rm,
  vf = Ci;
(Rm = vf.createRoot), vf.hydrateRoot;
const Sx = 1,
  Ex = 1e6;
let aa = 0;
function kx() {
  return (aa = (aa + 1) % Number.MAX_SAFE_INTEGER), aa.toString();
}
const ua = new Map(),
  yf = (e) => {
    if (ua.has(e)) return;
    const t = setTimeout(() => {
      ua.delete(e), Vo({ type: "REMOVE_TOAST", toastId: e });
    }, Ex);
    ua.set(e, t);
  },
  Tx = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Sx) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? yf(n)
            : e.toasts.forEach((r) => {
                yf(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  us = [];
let cs = { toasts: [] };
function Vo(e) {
  (cs = Tx(cs, e)),
    us.forEach((t) => {
      t(cs);
    });
}
function dl({ ...e }) {
  const t = kx(),
    n = (o) => Vo({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => Vo({ type: "DISMISS_TOAST", toastId: t });
  return (
    Vo({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function Nx() {
  const [e, t] = x.useState(cs);
  return (
    x.useEffect(
      () => (
        us.push(t),
        () => {
          const n = us.indexOf(t);
          n > -1 && us.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: dl,
      dismiss: (n) => Vo({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function he(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function xf(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Am(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = xf(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : xf(e[o], null);
        }
      };
  };
}
function Je(...e) {
  return x.useCallback(Am(...e), e);
}
function po(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = x.createContext(s),
      a = n.length;
    n = [...n, s];
    const u = (p) => {
      var g;
      const { scope: m, children: f, ...C } = p,
        y = ((g = m == null ? void 0 : m[e]) == null ? void 0 : g[a]) || l,
        w = x.useMemo(() => C, Object.values(C));
      return c.jsx(y.Provider, { value: w, children: f });
    };
    u.displayName = i + "Provider";
    function d(p, m) {
      var y;
      const f = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[a]) || l,
        C = x.useContext(f);
      if (C) return C;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return [u, d];
  }
  const o = () => {
    const i = n.map((s) => x.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, Px(o, ...t)];
}
function Px(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const p = a(i)[`__scope${u}`];
        return { ...l, ...p };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function zs(e) {
  const t = Rx(e),
    n = x.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        l = x.Children.toArray(i),
        a = l.find(Ox);
      if (a) {
        const u = a.props.children,
          d = l.map((p) =>
            p === a
              ? x.Children.count(u) > 1
                ? x.Children.only(null)
                : x.isValidElement(u)
                ? u.props.children
                : null
              : p
          );
        return c.jsx(t, {
          ...s,
          ref: o,
          children: x.isValidElement(u) ? x.cloneElement(u, void 0, d) : null,
        });
      }
      return c.jsx(t, { ...s, ref: o, children: i });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var jx = zs("Slot");
function Rx(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (x.isValidElement(o)) {
      const s = Mx(o),
        l = _x(i, o.props);
      return (
        o.type !== x.Fragment && (l.ref = r ? Am(r, s) : s),
        x.cloneElement(o, l)
      );
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var Om = Symbol("radix.slottable");
function Ax(e) {
  const t = ({ children: n }) => c.jsx(c.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = Om), t;
}
function Ox(e) {
  return (
    x.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Om
  );
}
function _x(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            const a = i(...l);
            return o(...l), a;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Mx(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function _m(e) {
  const t = e + "CollectionProvider",
    [n, r] = po(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (y) => {
      const { scope: w, children: g } = y,
        h = P.useRef(null),
        v = P.useRef(new Map()).current;
      return c.jsx(o, { scope: w, itemMap: v, collectionRef: h, children: g });
    };
  s.displayName = t;
  const l = e + "CollectionSlot",
    a = zs(l),
    u = P.forwardRef((y, w) => {
      const { scope: g, children: h } = y,
        v = i(l, g),
        b = Je(w, v.collectionRef);
      return c.jsx(a, { ref: b, children: h });
    });
  u.displayName = l;
  const d = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    m = zs(d),
    f = P.forwardRef((y, w) => {
      const { scope: g, children: h, ...v } = y,
        b = P.useRef(null),
        S = Je(w, b),
        E = i(d, g);
      return (
        P.useEffect(
          () => (
            E.itemMap.set(b, { ref: b, ...v }), () => void E.itemMap.delete(b)
          )
        ),
        c.jsx(m, { [p]: "", ref: S, children: h })
      );
    });
  f.displayName = d;
  function C(y) {
    const w = i(e + "CollectionConsumer", y);
    return P.useCallback(() => {
      const h = w.collectionRef.current;
      if (!h) return [];
      const v = Array.from(h.querySelectorAll(`[${p}]`));
      return Array.from(w.itemMap.values()).sort(
        (E, k) => v.indexOf(E.ref.current) - v.indexOf(k.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: f }, C, r];
}
var Lx = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  xe = Lx.reduce((e, t) => {
    const n = zs(`Primitive.${t}`),
      r = x.forwardRef((o, i) => {
        const { asChild: s, ...l } = o,
          a = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          c.jsx(a, { ...l, ref: i })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function Mm(e, t) {
  e && Ci.flushSync(() => e.dispatchEvent(t));
}
function zn(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function Ix(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = zn(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Dx = "DismissableLayer",
  pu = "dismissableLayer.update",
  zx = "dismissableLayer.pointerDownOutside",
  Fx = "dismissableLayer.focusOutside",
  wf,
  Lm = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  jc = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: l,
        ...a
      } = e,
      u = x.useContext(Lm),
      [d, p] = x.useState(null),
      m =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, f] = x.useState({}),
      C = Je(t, (k) => p(k)),
      y = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = y.indexOf(w),
      h = d ? y.indexOf(d) : -1,
      v = u.layersWithOutsidePointerEventsDisabled.size > 0,
      b = h >= g,
      S = Ux((k) => {
        const R = k.target,
          _ = [...u.branches].some((O) => O.contains(R));
        !b ||
          _ ||
          (o == null || o(k),
          s == null || s(k),
          k.defaultPrevented || l == null || l());
      }, m),
      E = Bx((k) => {
        const R = k.target;
        [...u.branches].some((O) => O.contains(R)) ||
          (i == null || i(k),
          s == null || s(k),
          k.defaultPrevented || l == null || l());
      }, m);
    return (
      Ix((k) => {
        h === u.layers.size - 1 &&
          (r == null || r(k),
          !k.defaultPrevented && l && (k.preventDefault(), l()));
      }, m),
      x.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((wf = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Cf(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = wf);
            }
          );
      }, [d, m, n, u]),
      x.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            Cf());
        },
        [d, u]
      ),
      x.useEffect(() => {
        const k = () => f({});
        return (
          document.addEventListener(pu, k),
          () => document.removeEventListener(pu, k)
        );
      }, []),
      c.jsx(xe.div, {
        ...a,
        ref: C,
        style: {
          pointerEvents: v ? (b ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: he(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: he(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: he(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        ),
      })
    );
  });
jc.displayName = Dx;
var $x = "DismissableLayerBranch",
  Im = x.forwardRef((e, t) => {
    const n = x.useContext(Lm),
      r = x.useRef(null),
      o = Je(t, r);
    return (
      x.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      c.jsx(xe.div, { ...e, ref: o })
    );
  });
Im.displayName = $x;
function Ux(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = zn(e),
    r = x.useRef(!1),
    o = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              Dm(zx, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Bx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = zn(e),
    r = x.useRef(!1);
  return (
    x.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          Dm(Fx, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Cf() {
  const e = new CustomEvent(pu);
  document.dispatchEvent(e);
}
function Dm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Mm(o, i) : o.dispatchEvent(i);
}
var Hx = jc,
  Vx = Im,
  $t = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  Wx = "Portal",
  zm = x.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, i] = x.useState(!1);
    $t(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return s ? jm.createPortal(c.jsx(xe.div, { ...r, ref: t }), s) : null;
  });
zm.displayName = Wx;
function Qx(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var fl = (e) => {
  const { present: t, children: n } = e,
    r = Kx(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
    i = Je(r.ref, Yx(o));
  return typeof n == "function" || r.isPresent
    ? x.cloneElement(o, { ref: i })
    : null;
};
fl.displayName = "Presence";
function Kx(e) {
  const [t, n] = x.useState(),
    r = x.useRef(null),
    o = x.useRef(e),
    i = x.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [l, a] = Qx(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const u = Wi(r.current);
      i.current = l === "mounted" ? u : "none";
    }, [l]),
    $t(() => {
      const u = r.current,
        d = o.current;
      if (d !== e) {
        const m = i.current,
          f = Wi(u);
        e
          ? a("MOUNT")
          : f === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(d && m !== f ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    $t(() => {
      if (t) {
        let u;
        const d = t.ownerDocument.defaultView ?? window,
          p = (f) => {
            const y = Wi(r.current).includes(f.animationName);
            if (f.target === t && y && (a("ANIMATION_END"), !o.current)) {
              const w = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                }));
            }
          },
          m = (f) => {
            f.target === t && (i.current = Wi(r.current));
          };
        return (
          t.addEventListener("animationstart", m),
          t.addEventListener("animationcancel", p),
          t.addEventListener("animationend", p),
          () => {
            d.clearTimeout(u),
              t.removeEventListener("animationstart", m),
              t.removeEventListener("animationcancel", p),
              t.removeEventListener("animationend", p);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: x.useCallback((u) => {
        (r.current = u ? getComputedStyle(u) : null), n(u);
      }, []),
    }
  );
}
function Wi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Yx(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Gx = zu[" useInsertionEffect ".trim().toString()] || $t;
function pl({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, i, s] = qx({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    a = l ? e : o;
  {
    const d = x.useRef(e !== void 0);
    x.useEffect(() => {
      const p = d.current;
      p !== l &&
        console.warn(
          `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${
            l ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (d.current = l);
    }, [l, r]);
  }
  const u = x.useCallback(
    (d) => {
      var p;
      if (l) {
        const m = Xx(d) ? d(e) : d;
        m !== e && ((p = s.current) == null || p.call(s, m));
      } else i(d);
    },
    [l, e, i, s]
  );
  return [a, u];
}
function qx({ defaultProp: e, onChange: t }) {
  const [n, r] = x.useState(e),
    o = x.useRef(n),
    i = x.useRef(t);
  return (
    Gx(() => {
      i.current = t;
    }, [t]),
    x.useEffect(() => {
      var s;
      o.current !== n &&
        ((s = i.current) == null || s.call(i, n), (o.current = n));
    }, [n, o]),
    [n, r, i]
  );
}
function Xx(e) {
  return typeof e == "function";
}
var Zx = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Jx = "VisuallyHidden",
  hl = x.forwardRef((e, t) =>
    c.jsx(xe.span, { ...e, ref: t, style: { ...Zx, ...e.style } })
  );
hl.displayName = Jx;
var ew = hl,
  Rc = "ToastProvider",
  [Ac, tw, nw] = _m("Toast"),
  [Fm, x2] = po("Toast", [nw]),
  [rw, ml] = Fm(Rc),
  $m = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [l, a] = x.useState(null),
      [u, d] = x.useState(0),
      p = x.useRef(!1),
      m = x.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Rc}\`. Expected non-empty \`string\`.`
        ),
      c.jsx(Ac.Provider, {
        scope: t,
        children: c.jsx(rw, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: x.useCallback(() => d((f) => f + 1), []),
          onToastRemove: x.useCallback(() => d((f) => f - 1), []),
          isFocusedToastEscapeKeyDownRef: p,
          isClosePausedRef: m,
          children: s,
        }),
      })
    );
  };
$m.displayName = Rc;
var Um = "ToastViewport",
  ow = ["F8"],
  hu = "toast.viewportPause",
  mu = "toast.viewportResume",
  Bm = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = ow,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = ml(Um, n),
      l = tw(n),
      a = x.useRef(null),
      u = x.useRef(null),
      d = x.useRef(null),
      p = x.useRef(null),
      m = Je(t, p, s.onViewportChange),
      f = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      C = s.toastCount > 0;
    x.useEffect(() => {
      const w = (g) => {
        var v;
        r.length !== 0 &&
          r.every((b) => g[b] || g.code === b) &&
          ((v = p.current) == null || v.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      x.useEffect(() => {
        const w = a.current,
          g = p.current;
        if (C && w && g) {
          const h = () => {
              if (!s.isClosePausedRef.current) {
                const E = new CustomEvent(hu);
                g.dispatchEvent(E), (s.isClosePausedRef.current = !0);
              }
            },
            v = () => {
              if (s.isClosePausedRef.current) {
                const E = new CustomEvent(mu);
                g.dispatchEvent(E), (s.isClosePausedRef.current = !1);
              }
            },
            b = (E) => {
              !w.contains(E.relatedTarget) && v();
            },
            S = () => {
              w.contains(document.activeElement) || v();
            };
          return (
            w.addEventListener("focusin", h),
            w.addEventListener("focusout", b),
            w.addEventListener("pointermove", h),
            w.addEventListener("pointerleave", S),
            window.addEventListener("blur", h),
            window.addEventListener("focus", v),
            () => {
              w.removeEventListener("focusin", h),
                w.removeEventListener("focusout", b),
                w.removeEventListener("pointermove", h),
                w.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", v);
            }
          );
        }
      }, [C, s.isClosePausedRef]);
    const y = x.useCallback(
      ({ tabbingDirection: w }) => {
        const h = l().map((v) => {
          const b = v.ref.current,
            S = [b, ...vw(b)];
          return w === "forwards" ? S : S.reverse();
        });
        return (w === "forwards" ? h.reverse() : h).flat();
      },
      [l]
    );
    return (
      x.useEffect(() => {
        const w = p.current;
        if (w) {
          const g = (h) => {
            var S, E, k;
            const v = h.altKey || h.ctrlKey || h.metaKey;
            if (h.key === "Tab" && !v) {
              const R = document.activeElement,
                _ = h.shiftKey;
              if (h.target === w && _) {
                (S = u.current) == null || S.focus();
                return;
              }
              const D = y({ tabbingDirection: _ ? "backwards" : "forwards" }),
                Q = D.findIndex((M) => M === R);
              ca(D.slice(Q + 1))
                ? h.preventDefault()
                : _
                ? (E = u.current) == null || E.focus()
                : (k = d.current) == null || k.focus();
            }
          };
          return (
            w.addEventListener("keydown", g),
            () => w.removeEventListener("keydown", g)
          );
        }
      }, [l, y]),
      c.jsxs(Vx, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", f),
        tabIndex: -1,
        style: { pointerEvents: C ? void 0 : "none" },
        children: [
          C &&
            c.jsx(gu, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = y({ tabbingDirection: "forwards" });
                ca(w);
              },
            }),
          c.jsx(Ac.Slot, {
            scope: n,
            children: c.jsx(xe.ol, { tabIndex: -1, ...i, ref: m }),
          }),
          C &&
            c.jsx(gu, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const w = y({ tabbingDirection: "backwards" });
                ca(w);
              },
            }),
        ],
      })
    );
  });
Bm.displayName = Um;
var Hm = "ToastFocusProxy",
  gu = x.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = ml(Hm, n);
    return c.jsx(hl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const l = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(l)) && r();
      },
    });
  });
gu.displayName = Hm;
var bi = "Toast",
  iw = "toast.swipeStart",
  sw = "toast.swipeMove",
  lw = "toast.swipeCancel",
  aw = "toast.swipeEnd",
  Vm = x.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [l, a] = pl({ prop: r, defaultProp: o ?? !0, onChange: i, caller: bi });
    return c.jsx(fl, {
      present: n || l,
      children: c.jsx(dw, {
        open: l,
        ...s,
        ref: t,
        onClose: () => a(!1),
        onPause: zn(e.onPause),
        onResume: zn(e.onResume),
        onSwipeStart: he(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: he(e.onSwipeMove, (u) => {
          const { x: d, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${p}px`
            );
        }),
        onSwipeCancel: he(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: he(e.onSwipeEnd, (u) => {
          const { x: d, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${p}px`
            ),
            a(!1);
        }),
      }),
    });
  });
Vm.displayName = bi;
var [uw, cw] = Fm(bi, { onClose() {} }),
  dw = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: p,
        onSwipeCancel: m,
        onSwipeEnd: f,
        ...C
      } = e,
      y = ml(bi, n),
      [w, g] = x.useState(null),
      h = Je(t, (M) => g(M)),
      v = x.useRef(null),
      b = x.useRef(null),
      S = o || y.duration,
      E = x.useRef(0),
      k = x.useRef(S),
      R = x.useRef(0),
      { onToastAdd: _, onToastRemove: O } = y,
      F = zn(() => {
        var G;
        (w == null ? void 0 : w.contains(document.activeElement)) &&
          ((G = y.viewport) == null || G.focus()),
          s();
      }),
      D = x.useCallback(
        (M) => {
          !M ||
            M === 1 / 0 ||
            (window.clearTimeout(R.current),
            (E.current = new Date().getTime()),
            (R.current = window.setTimeout(F, M)));
        },
        [F]
      );
    x.useEffect(() => {
      const M = y.viewport;
      if (M) {
        const G = () => {
            D(k.current), u == null || u();
          },
          $ = () => {
            const H = new Date().getTime() - E.current;
            (k.current = k.current - H),
              window.clearTimeout(R.current),
              a == null || a();
          };
        return (
          M.addEventListener(hu, $),
          M.addEventListener(mu, G),
          () => {
            M.removeEventListener(hu, $), M.removeEventListener(mu, G);
          }
        );
      }
    }, [y.viewport, S, a, u, D]),
      x.useEffect(() => {
        i && !y.isClosePausedRef.current && D(S);
      }, [i, S, y.isClosePausedRef, D]),
      x.useEffect(() => (_(), () => O()), [_, O]);
    const Q = x.useMemo(() => (w ? Xm(w) : null), [w]);
    return y.viewport
      ? c.jsxs(c.Fragment, {
          children: [
            Q &&
              c.jsx(fw, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: Q,
              }),
            c.jsx(uw, {
              scope: n,
              onClose: F,
              children: Ci.createPortal(
                c.jsx(Ac.ItemSlot, {
                  scope: n,
                  children: c.jsx(Hx, {
                    asChild: !0,
                    onEscapeKeyDown: he(l, () => {
                      y.isFocusedToastEscapeKeyDownRef.current || F(),
                        (y.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: c.jsx(xe.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": y.swipeDirection,
                      ...C,
                      ref: h,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: he(e.onKeyDown, (M) => {
                        M.key === "Escape" &&
                          (l == null || l(M.nativeEvent),
                          M.nativeEvent.defaultPrevented ||
                            ((y.isFocusedToastEscapeKeyDownRef.current = !0),
                            F()));
                      }),
                      onPointerDown: he(e.onPointerDown, (M) => {
                        M.button === 0 &&
                          (v.current = { x: M.clientX, y: M.clientY });
                      }),
                      onPointerMove: he(e.onPointerMove, (M) => {
                        if (!v.current) return;
                        const G = M.clientX - v.current.x,
                          $ = M.clientY - v.current.y,
                          H = !!b.current,
                          N = ["left", "right"].includes(y.swipeDirection),
                          j = ["left", "up"].includes(y.swipeDirection)
                            ? Math.min
                            : Math.max,
                          L = N ? j(0, G) : 0,
                          V = N ? 0 : j(0, $),
                          z = M.pointerType === "touch" ? 10 : 2,
                          K = { x: L, y: V },
                          q = { originalEvent: M, delta: K };
                        H
                          ? ((b.current = K), Qi(sw, p, q, { discrete: !1 }))
                          : bf(K, y.swipeDirection, z)
                          ? ((b.current = K),
                            Qi(iw, d, q, { discrete: !1 }),
                            M.target.setPointerCapture(M.pointerId))
                          : (Math.abs(G) > z || Math.abs($) > z) &&
                            (v.current = null);
                      }),
                      onPointerUp: he(e.onPointerUp, (M) => {
                        const G = b.current,
                          $ = M.target;
                        if (
                          ($.hasPointerCapture(M.pointerId) &&
                            $.releasePointerCapture(M.pointerId),
                          (b.current = null),
                          (v.current = null),
                          G)
                        ) {
                          const H = M.currentTarget,
                            N = { originalEvent: M, delta: G };
                          bf(G, y.swipeDirection, y.swipeThreshold)
                            ? Qi(aw, f, N, { discrete: !0 })
                            : Qi(lw, m, N, { discrete: !0 }),
                            H.addEventListener(
                              "click",
                              (j) => j.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                y.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  fw = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = ml(bi, t),
      [i, s] = x.useState(!1),
      [l, a] = x.useState(!1);
    return (
      mw(() => s(!0)),
      x.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : c.jsx(zm, {
            asChild: !0,
            children: c.jsx(hl, {
              ...r,
              children:
                i && c.jsxs(c.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  pw = "ToastTitle",
  Wm = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(xe.div, { ...r, ref: t });
  });
Wm.displayName = pw;
var hw = "ToastDescription",
  Qm = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(xe.div, { ...r, ref: t });
  });
Qm.displayName = hw;
var Km = "ToastAction",
  Ym = x.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? c.jsx(qm, {
          altText: n,
          asChild: !0,
          children: c.jsx(Oc, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Km}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
Ym.displayName = Km;
var Gm = "ToastClose",
  Oc = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = cw(Gm, n);
    return c.jsx(qm, {
      asChild: !0,
      children: c.jsx(xe.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: he(e.onClick, o.onClose),
      }),
    });
  });
Oc.displayName = Gm;
var qm = x.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return c.jsx(xe.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function Xm(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        gw(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...Xm(r));
      }
    }),
    t
  );
}
function Qi(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Mm(o, i) : o.dispatchEvent(i);
}
var bf = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function mw(e = () => {}) {
  const t = zn(e);
  $t(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function gw(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function vw(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ca(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var yw = $m,
  Zm = Bm,
  Jm = Vm,
  eg = Wm,
  tg = Qm,
  ng = Ym,
  rg = Oc;
function og(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = og(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function ig() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = og(e)) && (r && (r += " "), (r += t));
  return r;
}
const Sf = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Ef = ig,
  sg = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Ef(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const d = n == null ? void 0 : n[u],
          p = i == null ? void 0 : i[u];
        if (d === null) return null;
        const m = Sf(d) || Sf(p);
        return o[u][m];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [p, m] = d;
          return m === void 0 || (u[p] = m), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: p, className: m, ...f } = d;
              return Object.entries(f).every((C) => {
                let [y, w] = C;
                return Array.isArray(w)
                  ? w.includes({ ...i, ...l }[y])
                  : { ...i, ...l }[y] === w;
              })
                ? [...u, p, m]
                : u;
            }, []);
    return Ef(
      e,
      s,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xw = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  lg = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ww = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cw = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...l
    },
    a
  ) =>
    x.createElement(
      "svg",
      {
        ref: a,
        ...ww,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: lg("lucide", o),
        ...l,
      },
      [
        ...s.map(([u, d]) => x.createElement(u, d)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oe = (e, t) => {
  const n = x.forwardRef(({ className: r, ...o }, i) =>
    x.createElement(Cw, {
      ref: i,
      iconNode: t,
      className: lg(`lucide-${xw(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _c = Oe("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fs = Oe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ag = Oe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $s = Oe("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bw = Oe("Dog", [
  ["path", { d: "M11.25 16.25h1.5L12 17z", key: "w7jh35" }],
  ["path", { d: "M16 14v.5", key: "1lajdz" }],
  [
    "path",
    {
      d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",
      key: "u7s9ue",
    },
  ],
  ["path", { d: "M8 14v.5", key: "1nzgdb" }],
  [
    "path",
    {
      d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",
      key: "v8hric",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sw = Oe("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  [
    "path",
    { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gl = Oe("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ew = Oe("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kw = Oe("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tw = Oe("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw",
    },
  ],
  [
    "path",
    { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" },
  ],
  [
    "path",
    { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nw = Oe("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pw = Oe("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jw = Oe("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kf = Oe("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mc = Oe("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rw = Oe("Zap", [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ]),
  Lc = "-",
  Aw = (e) => {
    const t = _w(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(Lc);
        return l[0] === "" && l.length !== 1 && l.shift(), ug(l, t) || Ow(s);
      },
      getConflictingClassGroupIds: (s, l) => {
        const a = n[s] || [];
        return l && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  ug = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? ug(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Lc);
    return (s = t.validators.find(({ validator: l }) => l(i))) == null
      ? void 0
      : s.classGroupId;
  },
  Tf = /^\[(.+)\]$/,
  Ow = (e) => {
    if (Tf.test(e)) {
      const t = Tf.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  _w = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Lw(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        vu(s, r, i, t);
      }),
      r
    );
  },
  vu = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : Nf(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (Mw(o)) {
          vu(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        vu(s, Nf(t, i), n, r);
      });
    });
  },
  Nf = (e, t) => {
    let n = e;
    return (
      t.split(Lc).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Mw = (e) => e.isThemeGetter,
  Lw = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([s, l]) => [t + s, l])
                )
              : i
          );
          return [n, o];
        })
      : e,
  Iw = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  cg = "!",
  Dw = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (l) => {
        const a = [];
        let u = 0,
          d = 0,
          p;
        for (let w = 0; w < l.length; w++) {
          let g = l[w];
          if (u === 0) {
            if (g === o && (r || l.slice(w, w + i) === t)) {
              a.push(l.slice(d, w)), (d = w + i);
              continue;
            }
            if (g === "/") {
              p = w;
              continue;
            }
          }
          g === "[" ? u++ : g === "]" && u--;
        }
        const m = a.length === 0 ? l : l.substring(d),
          f = m.startsWith(cg),
          C = f ? m.substring(1) : m,
          y = p && p > d ? p - d : void 0;
        return {
          modifiers: a,
          hasImportantModifier: f,
          baseClassName: C,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: s }) : s;
  },
  zw = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Fw = (e) => ({ cache: Iw(e.cacheSize), parseClassName: Dw(e), ...Aw(e) }),
  $w = /\s+/,
  Uw = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split($w);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        {
          modifiers: d,
          hasImportantModifier: p,
          baseClassName: m,
          maybePostfixModifierPosition: f,
        } = n(u);
      let C = !!f,
        y = r(C ? m.substring(0, f) : m);
      if (!y) {
        if (!C) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((y = r(m)), !y)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        C = !1;
      }
      const w = zw(d).join(":"),
        g = p ? w + cg : w,
        h = g + y;
      if (i.includes(h)) continue;
      i.push(h);
      const v = o(y, C);
      for (let b = 0; b < v.length; ++b) {
        const S = v[b];
        i.push(g + S);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function Bw() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = dg(t)) && (r && (r += " "), (r += n));
  return r;
}
const dg = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = dg(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Hw(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(a) {
    const u = t.reduce((d, p) => p(d), e());
    return (n = Fw(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const d = Uw(a, n);
    return o(a, d), d;
  }
  return function () {
    return i(Bw.apply(null, arguments));
  };
}
const re = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  fg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Vw = /^\d+\/\d+$/,
  Ww = new Set(["px", "full", "screen"]),
  Qw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Kw =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Yw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Gw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  qw =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Vt = (e) => Ur(e) || Ww.has(e) || Vw.test(e),
  pn = (e) => ho(e, "length", o1),
  Ur = (e) => !!e && !Number.isNaN(Number(e)),
  da = (e) => ho(e, "number", Ur),
  No = (e) => !!e && Number.isInteger(Number(e)),
  Xw = (e) => e.endsWith("%") && Ur(e.slice(0, -1)),
  W = (e) => fg.test(e),
  hn = (e) => Qw.test(e),
  Zw = new Set(["length", "size", "percentage"]),
  Jw = (e) => ho(e, Zw, pg),
  e1 = (e) => ho(e, "position", pg),
  t1 = new Set(["image", "url"]),
  n1 = (e) => ho(e, t1, s1),
  r1 = (e) => ho(e, "", i1),
  Po = () => !0,
  ho = (e, t, n) => {
    const r = fg.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  o1 = (e) => Kw.test(e) && !Yw.test(e),
  pg = () => !1,
  i1 = (e) => Gw.test(e),
  s1 = (e) => qw.test(e),
  l1 = () => {
    const e = re("colors"),
      t = re("spacing"),
      n = re("blur"),
      r = re("brightness"),
      o = re("borderColor"),
      i = re("borderRadius"),
      s = re("borderSpacing"),
      l = re("borderWidth"),
      a = re("contrast"),
      u = re("grayscale"),
      d = re("hueRotate"),
      p = re("invert"),
      m = re("gap"),
      f = re("gradientColorStops"),
      C = re("gradientColorStopPositions"),
      y = re("inset"),
      w = re("margin"),
      g = re("opacity"),
      h = re("padding"),
      v = re("saturate"),
      b = re("scale"),
      S = re("sepia"),
      E = re("skew"),
      k = re("space"),
      R = re("translate"),
      _ = () => ["auto", "contain", "none"],
      O = () => ["auto", "hidden", "clip", "visible", "scroll"],
      F = () => ["auto", W, t],
      D = () => [W, t],
      Q = () => ["", Vt, pn],
      M = () => ["auto", Ur, W],
      G = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      $ = () => ["solid", "dashed", "dotted", "double", "none"],
      H = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      N = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      j = () => ["", "0", W],
      L = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      V = () => [Ur, W];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Po],
        spacing: [Vt, pn],
        blur: ["none", "", hn, W],
        brightness: V(),
        borderColor: [e],
        borderRadius: ["none", "", "full", hn, W],
        borderSpacing: D(),
        borderWidth: Q(),
        contrast: V(),
        grayscale: j(),
        hueRotate: V(),
        invert: j(),
        gap: D(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Xw, pn],
        inset: F(),
        margin: F(),
        opacity: V(),
        padding: D(),
        saturate: V(),
        scale: V(),
        sepia: j(),
        skew: V(),
        space: D(),
        translate: D(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", W] }],
        container: ["container"],
        columns: [{ columns: [hn] }],
        "break-after": [{ "break-after": L() }],
        "break-before": [{ "break-before": L() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...G(), W] }],
        overflow: [{ overflow: O() }],
        "overflow-x": [{ "overflow-x": O() }],
        "overflow-y": [{ "overflow-y": O() }],
        overscroll: [{ overscroll: _() }],
        "overscroll-x": [{ "overscroll-x": _() }],
        "overscroll-y": [{ "overscroll-y": _() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", No, W] }],
        basis: [{ basis: F() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", W] }],
        grow: [{ grow: j() }],
        shrink: [{ shrink: j() }],
        order: [{ order: ["first", "last", "none", No, W] }],
        "grid-cols": [{ "grid-cols": [Po] }],
        "col-start-end": [{ col: ["auto", { span: ["full", No, W] }, W] }],
        "col-start": [{ "col-start": M() }],
        "col-end": [{ "col-end": M() }],
        "grid-rows": [{ "grid-rows": [Po] }],
        "row-start-end": [{ row: ["auto", { span: [No, W] }, W] }],
        "row-start": [{ "row-start": M() }],
        "row-end": [{ "row-end": M() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", W] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", W] }],
        gap: [{ gap: [m] }],
        "gap-x": [{ "gap-x": [m] }],
        "gap-y": [{ "gap-y": [m] }],
        "justify-content": [{ justify: ["normal", ...N()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...N(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...N(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [h] }],
        px: [{ px: [h] }],
        py: [{ py: [h] }],
        ps: [{ ps: [h] }],
        pe: [{ pe: [h] }],
        pt: [{ pt: [h] }],
        pr: [{ pr: [h] }],
        pb: [{ pb: [h] }],
        pl: [{ pl: [h] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [k] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [k] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", W, t] }],
        "min-w": [{ "min-w": [W, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              W,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [hn] },
              hn,
            ],
          },
        ],
        h: [{ h: [W, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [W, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", hn, pn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              da,
            ],
          },
        ],
        "font-family": [{ font: [Po] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              W,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Ur, da] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Vt,
              W,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", W] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", W] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [g] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [g] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Vt, pn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Vt, W] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: D() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              W,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", W] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [g] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...G(), e1] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Jw] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              n1,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [C] }],
        "gradient-via-pos": [{ via: [C] }],
        "gradient-to-pos": [{ to: [C] }],
        "gradient-from": [{ from: [f] }],
        "gradient-via": [{ via: [f] }],
        "gradient-to": [{ to: [f] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [g] }],
        "border-style": [{ border: [...$(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [g] }],
        "divide-style": [{ divide: $() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...$()] }],
        "outline-offset": [{ "outline-offset": [Vt, W] }],
        "outline-w": [{ outline: [Vt, pn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: Q() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [g] }],
        "ring-offset-w": [{ "ring-offset": [Vt, pn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", hn, r1] }],
        "shadow-color": [{ shadow: [Po] }],
        opacity: [{ opacity: [g] }],
        "mix-blend": [{ "mix-blend": [...H(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": H() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", hn, W] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [S] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [S] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              W,
            ],
          },
        ],
        duration: [{ duration: V() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", W] }],
        delay: [{ delay: V() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", W] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [b] }],
        "scale-x": [{ "scale-x": [b] }],
        "scale-y": [{ "scale-y": [b] }],
        rotate: [{ rotate: [No, W] }],
        "translate-x": [{ "translate-x": [R] }],
        "translate-y": [{ "translate-y": [R] }],
        "skew-x": [{ "skew-x": [E] }],
        "skew-y": [{ "skew-y": [E] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              W,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              W,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": D() }],
        "scroll-mx": [{ "scroll-mx": D() }],
        "scroll-my": [{ "scroll-my": D() }],
        "scroll-ms": [{ "scroll-ms": D() }],
        "scroll-me": [{ "scroll-me": D() }],
        "scroll-mt": [{ "scroll-mt": D() }],
        "scroll-mr": [{ "scroll-mr": D() }],
        "scroll-mb": [{ "scroll-mb": D() }],
        "scroll-ml": [{ "scroll-ml": D() }],
        "scroll-p": [{ "scroll-p": D() }],
        "scroll-px": [{ "scroll-px": D() }],
        "scroll-py": [{ "scroll-py": D() }],
        "scroll-ps": [{ "scroll-ps": D() }],
        "scroll-pe": [{ "scroll-pe": D() }],
        "scroll-pt": [{ "scroll-pt": D() }],
        "scroll-pr": [{ "scroll-pr": D() }],
        "scroll-pb": [{ "scroll-pb": D() }],
        "scroll-pl": [{ "scroll-pl": D() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", W] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Vt, pn, da] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  a1 = Hw(l1);
function Pt(...e) {
  return a1(ig(e));
}
const u1 = yw,
  hg = x.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Zm, {
      ref: n,
      className: Pt(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
hg.displayName = Zm.displayName;
const c1 = sg(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  mg = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
    c.jsx(Jm, { ref: r, className: Pt(c1({ variant: t }), e), ...n })
  );
mg.displayName = Jm.displayName;
const d1 = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(ng, {
    ref: n,
    className: Pt(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t,
  })
);
d1.displayName = ng.displayName;
const gg = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(rg, {
    ref: n,
    className: Pt(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: c.jsx(Mc, { className: "h-4 w-4" }),
  })
);
gg.displayName = rg.displayName;
const vg = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(eg, { ref: n, className: Pt("text-sm font-semibold", e), ...t })
);
vg.displayName = eg.displayName;
const yg = x.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(tg, { ref: n, className: Pt("text-sm opacity-90", e), ...t })
);
yg.displayName = tg.displayName;
function f1() {
  const { toasts: e } = Nx();
  return c.jsxs(u1, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return c.jsxs(
          mg,
          {
            ...i,
            children: [
              c.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && c.jsx(vg, { children: n }),
                  r && c.jsx(yg, { children: r }),
                ],
              }),
              o,
              c.jsx(gg, {}),
            ],
          },
          t
        );
      }),
      c.jsx(hg, {}),
    ],
  });
}
var Pf = ["light", "dark"],
  p1 = "(prefers-color-scheme: dark)",
  h1 = x.createContext(void 0),
  m1 = { setTheme: (e) => {}, themes: [] },
  g1 = () => {
    var e;
    return (e = x.useContext(h1)) != null ? e : m1;
  };
x.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: l,
    nonce: a,
  }) => {
    let u = i === "system",
      d =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l
              .map((C) => `'${C}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      p = o
        ? Pf.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      m = (C, y = !1, w = !0) => {
        let g = s ? s[C] : C,
          h = y ? C + "|| ''" : `'${g}'`,
          v = "";
        return (
          o &&
            w &&
            !y &&
            Pf.includes(C) &&
            (v += `d.style.colorScheme = '${C}';`),
          n === "class"
            ? y || g
              ? (v += `c.add(${h})`)
              : (v += "null")
            : g && (v += `d[s](n,${h})`),
          v
        );
      },
      f = e
        ? `!function(){${d}${m(e)}}()`
        : r
        ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${p1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m(
            "dark"
          )}}else{${m("light")}}}else if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${m(s ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + m(i, !1, !1) + "}"
          }${p}}catch(e){}}()`
        : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${m(s ? "x[e]" : "e", !0)}}else{${m(
            i,
            !1,
            !1
          )};}${p}}catch(t){}}();`;
    return x.createElement("script", {
      nonce: a,
      dangerouslySetInnerHTML: { __html: f },
    });
  }
);
var v1 = (e) => {
    switch (e) {
      case "success":
        return w1;
      case "info":
        return b1;
      case "warning":
        return C1;
      case "error":
        return S1;
      default:
        return null;
    }
  },
  y1 = Array(12).fill(0),
  x1 = ({ visible: e, className: t }) =>
    P.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      P.createElement(
        "div",
        { className: "sonner-spinner" },
        y1.map((n, r) =>
          P.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          })
        )
      )
    ),
  w1 = P.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    P.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  C1 = P.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    P.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  b1 = P.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    P.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  S1 = P.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    P.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  E1 = P.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    P.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    P.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  k1 = () => {
    let [e, t] = P.useState(document.hidden);
    return (
      P.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  yu = 1,
  T1 = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : yu++,
            i = this.toasts.find((l) => l.id === o),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish({ ...l, ...e, id: o, title: n }),
                      { ...l, ...e, id: o, dismissible: s, title: n })
                    : l
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            i,
            s = r
              .then(async (a) => {
                if (((i = ["resolve", a]), P.isValidElement(a)))
                  (o = !1), this.create({ id: n, type: "default", message: a });
                else if (P1(a) && !a.ok) {
                  o = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${a.status}`)
                        : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${a.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: d,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(a)
                        : t.success,
                    d =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: d,
                  });
                }
              })
              .catch(async (a) => {
                if (((i = ["reject", a]), t.error !== void 0)) {
                  o = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(a) : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: d,
                  });
                }
              })
              .finally(() => {
                var a;
                o && (this.dismiss(n), (n = void 0)),
                  (a = t.finally) == null || a.call(t);
              }),
            l = () =>
              new Promise((a, u) =>
                s.then(() => (i[0] === "reject" ? u(i[1]) : a(i[1]))).catch(u)
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: l }
            : Object.assign(n, { unwrap: l });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || yu++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  Fe = new T1(),
  N1 = (e, t) => {
    let n = (t == null ? void 0 : t.id) || yu++;
    return Fe.addToast({ title: e, ...t, id: n }), n;
  },
  P1 = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  j1 = N1,
  R1 = () => Fe.toasts,
  A1 = () => Fe.getActiveToasts();
Object.assign(
  j1,
  {
    success: Fe.success,
    info: Fe.info,
    warning: Fe.warning,
    error: Fe.error,
    custom: Fe.custom,
    message: Fe.message,
    promise: Fe.promise,
    dismiss: Fe.dismiss,
    loading: Fe.loading,
  },
  { getHistory: R1, getToasts: A1 }
);
function O1(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
O1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Ki(e) {
  return e.label !== void 0;
}
var _1 = 3,
  M1 = "32px",
  L1 = "16px",
  jf = 4e3,
  I1 = 356,
  D1 = 14,
  z1 = 20,
  F1 = 200;
function mt(...e) {
  return e.filter(Boolean).join(" ");
}
function $1(e) {
  let [t, n] = e.split("-"),
    r = [];
  return t && r.push(t), n && r.push(n), r;
}
var U1 = (e) => {
  var t, n, r, o, i, s, l, a, u, d, p;
  let {
      invert: m,
      toast: f,
      unstyled: C,
      interacting: y,
      setHeights: w,
      visibleToasts: g,
      heights: h,
      index: v,
      toasts: b,
      expanded: S,
      removeToast: E,
      defaultRichColors: k,
      closeButton: R,
      style: _,
      cancelButtonStyle: O,
      actionButtonStyle: F,
      className: D = "",
      descriptionClassName: Q = "",
      duration: M,
      position: G,
      gap: $,
      loadingIcon: H,
      expandByDefault: N,
      classNames: j,
      icons: L,
      closeButtonAriaLabel: V = "Close toast",
      pauseWhenPageIsHidden: z,
    } = e,
    [K, q] = P.useState(null),
    [me, ke] = P.useState(null),
    [J, mr] = P.useState(!1),
    [sn, Vn] = P.useState(!1),
    [ln, gr] = P.useState(!1),
    [an, Ei] = P.useState(!1),
    [Al, ki] = P.useState(!1),
    [Ol, vo] = P.useState(0),
    [vr, td] = P.useState(0),
    yo = P.useRef(f.duration || M || jf),
    nd = P.useRef(null),
    Wn = P.useRef(null),
    $v = v === 0,
    Uv = v + 1 <= g,
    nt = f.type,
    yr = f.dismissible !== !1,
    Bv = f.className || "",
    Hv = f.descriptionClassName || "",
    Ti = P.useMemo(
      () => h.findIndex((U) => U.toastId === f.id) || 0,
      [h, f.id]
    ),
    Vv = P.useMemo(() => {
      var U;
      return (U = f.closeButton) != null ? U : R;
    }, [f.closeButton, R]),
    rd = P.useMemo(() => f.duration || M || jf, [f.duration, M]),
    _l = P.useRef(0),
    xr = P.useRef(0),
    od = P.useRef(0),
    wr = P.useRef(null),
    [Wv, Qv] = G.split("-"),
    id = P.useMemo(
      () => h.reduce((U, te, se) => (se >= Ti ? U : U + te.height), 0),
      [h, Ti]
    ),
    sd = k1(),
    Kv = f.invert || m,
    Ml = nt === "loading";
  (xr.current = P.useMemo(() => Ti * $ + id, [Ti, id])),
    P.useEffect(() => {
      yo.current = rd;
    }, [rd]),
    P.useEffect(() => {
      mr(!0);
    }, []),
    P.useEffect(() => {
      let U = Wn.current;
      if (U) {
        let te = U.getBoundingClientRect().height;
        return (
          td(te),
          w((se) => [
            { toastId: f.id, height: te, position: f.position },
            ...se,
          ]),
          () => w((se) => se.filter((dt) => dt.toastId !== f.id))
        );
      }
    }, [w, f.id]),
    P.useLayoutEffect(() => {
      if (!J) return;
      let U = Wn.current,
        te = U.style.height;
      U.style.height = "auto";
      let se = U.getBoundingClientRect().height;
      (U.style.height = te),
        td(se),
        w((dt) =>
          dt.find((ft) => ft.toastId === f.id)
            ? dt.map((ft) => (ft.toastId === f.id ? { ...ft, height: se } : ft))
            : [{ toastId: f.id, height: se, position: f.position }, ...dt]
        );
    }, [J, f.title, f.description, w, f.id]);
  let un = P.useCallback(() => {
    Vn(!0),
      vo(xr.current),
      w((U) => U.filter((te) => te.toastId !== f.id)),
      setTimeout(() => {
        E(f);
      }, F1);
  }, [f, E, w, xr]);
  P.useEffect(() => {
    if (
      (f.promise && nt === "loading") ||
      f.duration === 1 / 0 ||
      f.type === "loading"
    )
      return;
    let U;
    return (
      S || y || (z && sd)
        ? (() => {
            if (od.current < _l.current) {
              let te = new Date().getTime() - _l.current;
              yo.current = yo.current - te;
            }
            od.current = new Date().getTime();
          })()
        : yo.current !== 1 / 0 &&
          ((_l.current = new Date().getTime()),
          (U = setTimeout(() => {
            var te;
            (te = f.onAutoClose) == null || te.call(f, f), un();
          }, yo.current))),
      () => clearTimeout(U)
    );
  }, [S, y, f, nt, z, sd, un]),
    P.useEffect(() => {
      f.delete && un();
    }, [un, f.delete]);
  function Yv() {
    var U, te, se;
    return L != null && L.loading
      ? P.createElement(
          "div",
          {
            className: mt(
              j == null ? void 0 : j.loader,
              (U = f == null ? void 0 : f.classNames) == null
                ? void 0
                : U.loader,
              "sonner-loader"
            ),
            "data-visible": nt === "loading",
          },
          L.loading
        )
      : H
      ? P.createElement(
          "div",
          {
            className: mt(
              j == null ? void 0 : j.loader,
              (te = f == null ? void 0 : f.classNames) == null
                ? void 0
                : te.loader,
              "sonner-loader"
            ),
            "data-visible": nt === "loading",
          },
          H
        )
      : P.createElement(x1, {
          className: mt(
            j == null ? void 0 : j.loader,
            (se = f == null ? void 0 : f.classNames) == null
              ? void 0
              : se.loader
          ),
          visible: nt === "loading",
        });
  }
  return P.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Wn,
      className: mt(
        D,
        Bv,
        j == null ? void 0 : j.toast,
        (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast,
        j == null ? void 0 : j.default,
        j == null ? void 0 : j[nt],
        (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[nt]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = f.richColors) != null ? r : k,
      "data-styled": !(f.jsx || f.unstyled || C),
      "data-mounted": J,
      "data-promise": !!f.promise,
      "data-swiped": Al,
      "data-removed": sn,
      "data-visible": Uv,
      "data-y-position": Wv,
      "data-x-position": Qv,
      "data-index": v,
      "data-front": $v,
      "data-swiping": ln,
      "data-dismissible": yr,
      "data-type": nt,
      "data-invert": Kv,
      "data-swipe-out": an,
      "data-swipe-direction": me,
      "data-expanded": !!(S || (N && J)),
      style: {
        "--index": v,
        "--toasts-before": v,
        "--z-index": b.length - v,
        "--offset": `${sn ? Ol : xr.current}px`,
        "--initial-height": N ? "auto" : `${vr}px`,
        ..._,
        ...f.style,
      },
      onDragEnd: () => {
        gr(!1), q(null), (wr.current = null);
      },
      onPointerDown: (U) => {
        Ml ||
          !yr ||
          ((nd.current = new Date()),
          vo(xr.current),
          U.target.setPointerCapture(U.pointerId),
          U.target.tagName !== "BUTTON" &&
            (gr(!0), (wr.current = { x: U.clientX, y: U.clientY })));
      },
      onPointerUp: () => {
        var U, te, se, dt;
        if (an || !yr) return;
        wr.current = null;
        let ft = Number(
            ((U = Wn.current) == null
              ? void 0
              : U.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          cn = Number(
            ((te = Wn.current) == null
              ? void 0
              : te.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          Qn =
            new Date().getTime() -
            ((se = nd.current) == null ? void 0 : se.getTime()),
          pt = K === "x" ? ft : cn,
          dn = Math.abs(pt) / Qn;
        if (Math.abs(pt) >= z1 || dn > 0.11) {
          vo(xr.current),
            (dt = f.onDismiss) == null || dt.call(f, f),
            ke(
              K === "x" ? (ft > 0 ? "right" : "left") : cn > 0 ? "down" : "up"
            ),
            un(),
            Ei(!0),
            ki(!1);
          return;
        }
        gr(!1), q(null);
      },
      onPointerMove: (U) => {
        var te, se, dt, ft;
        if (
          !wr.current ||
          !yr ||
          ((te = window.getSelection()) == null
            ? void 0
            : te.toString().length) > 0
        )
          return;
        let cn = U.clientY - wr.current.y,
          Qn = U.clientX - wr.current.x,
          pt = (se = e.swipeDirections) != null ? se : $1(G);
        !K &&
          (Math.abs(Qn) > 1 || Math.abs(cn) > 1) &&
          q(Math.abs(Qn) > Math.abs(cn) ? "x" : "y");
        let dn = { x: 0, y: 0 };
        K === "y"
          ? (pt.includes("top") || pt.includes("bottom")) &&
            ((pt.includes("top") && cn < 0) ||
              (pt.includes("bottom") && cn > 0)) &&
            (dn.y = cn)
          : K === "x" &&
            (pt.includes("left") || pt.includes("right")) &&
            ((pt.includes("left") && Qn < 0) ||
              (pt.includes("right") && Qn > 0)) &&
            (dn.x = Qn),
          (Math.abs(dn.x) > 0 || Math.abs(dn.y) > 0) && ki(!0),
          (dt = Wn.current) == null ||
            dt.style.setProperty("--swipe-amount-x", `${dn.x}px`),
          (ft = Wn.current) == null ||
            ft.style.setProperty("--swipe-amount-y", `${dn.y}px`);
      },
    },
    Vv && !f.jsx
      ? P.createElement(
          "button",
          {
            "aria-label": V,
            "data-disabled": Ml,
            "data-close-button": !0,
            onClick:
              Ml || !yr
                ? () => {}
                : () => {
                    var U;
                    un(), (U = f.onDismiss) == null || U.call(f, f);
                  },
            className: mt(
              j == null ? void 0 : j.closeButton,
              (o = f == null ? void 0 : f.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          (i = L == null ? void 0 : L.close) != null ? i : E1
        )
      : null,
    f.jsx || x.isValidElement(f.title)
      ? f.jsx
        ? f.jsx
        : typeof f.title == "function"
        ? f.title()
        : f.title
      : P.createElement(
          P.Fragment,
          null,
          nt || f.icon || f.promise
            ? P.createElement(
                "div",
                {
                  "data-icon": "",
                  className: mt(
                    j == null ? void 0 : j.icon,
                    (s = f == null ? void 0 : f.classNames) == null
                      ? void 0
                      : s.icon
                  ),
                },
                f.promise || (f.type === "loading" && !f.icon)
                  ? f.icon || Yv()
                  : null,
                f.type !== "loading"
                  ? f.icon || (L == null ? void 0 : L[nt]) || v1(nt)
                  : null
              )
            : null,
          P.createElement(
            "div",
            {
              "data-content": "",
              className: mt(
                j == null ? void 0 : j.content,
                (l = f == null ? void 0 : f.classNames) == null
                  ? void 0
                  : l.content
              ),
            },
            P.createElement(
              "div",
              {
                "data-title": "",
                className: mt(
                  j == null ? void 0 : j.title,
                  (a = f == null ? void 0 : f.classNames) == null
                    ? void 0
                    : a.title
                ),
              },
              typeof f.title == "function" ? f.title() : f.title
            ),
            f.description
              ? P.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: mt(
                      Q,
                      Hv,
                      j == null ? void 0 : j.description,
                      (u = f == null ? void 0 : f.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof f.description == "function"
                    ? f.description()
                    : f.description
                )
              : null
          ),
          x.isValidElement(f.cancel)
            ? f.cancel
            : f.cancel && Ki(f.cancel)
            ? P.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: f.cancelButtonStyle || O,
                  onClick: (U) => {
                    var te, se;
                    Ki(f.cancel) &&
                      yr &&
                      ((se = (te = f.cancel).onClick) == null || se.call(te, U),
                      un());
                  },
                  className: mt(
                    j == null ? void 0 : j.cancelButton,
                    (d = f == null ? void 0 : f.classNames) == null
                      ? void 0
                      : d.cancelButton
                  ),
                },
                f.cancel.label
              )
            : null,
          x.isValidElement(f.action)
            ? f.action
            : f.action && Ki(f.action)
            ? P.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: f.actionButtonStyle || F,
                  onClick: (U) => {
                    var te, se;
                    Ki(f.action) &&
                      ((se = (te = f.action).onClick) == null || se.call(te, U),
                      !U.defaultPrevented && un());
                  },
                  className: mt(
                    j == null ? void 0 : j.actionButton,
                    (p = f == null ? void 0 : f.classNames) == null
                      ? void 0
                      : p.actionButton
                  ),
                },
                f.action.label
              )
            : null
        )
  );
};
function Rf() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function B1(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let i = o === 1,
        s = i ? "--mobile-offset" : "--offset",
        l = i ? L1 : M1;
      function a(u) {
        ["top", "right", "bottom", "left"].forEach((d) => {
          n[`${s}-${d}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? a(r)
        : typeof r == "object"
        ? ["top", "right", "bottom", "left"].forEach((u) => {
            r[u] === void 0
              ? (n[`${s}-${u}`] = l)
              : (n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
          })
        : a(l);
    }),
    n
  );
}
var H1 = x.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: i,
      closeButton: s,
      className: l,
      offset: a,
      mobileOffset: u,
      theme: d = "light",
      richColors: p,
      duration: m,
      style: f,
      visibleToasts: C = _1,
      toastOptions: y,
      dir: w = Rf(),
      gap: g = D1,
      loadingIcon: h,
      icons: v,
      containerAriaLabel: b = "Notifications",
      pauseWhenPageIsHidden: S,
    } = e,
    [E, k] = P.useState([]),
    R = P.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(E.filter((z) => z.position).map((z) => z.position))
          )
        ),
      [E, r]
    ),
    [_, O] = P.useState([]),
    [F, D] = P.useState(!1),
    [Q, M] = P.useState(!1),
    [G, $] = P.useState(
      d !== "system"
        ? d
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    H = P.useRef(null),
    N = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    j = P.useRef(null),
    L = P.useRef(!1),
    V = P.useCallback((z) => {
      k((K) => {
        var q;
        return (
          ((q = K.find((me) => me.id === z.id)) != null && q.delete) ||
            Fe.dismiss(z.id),
          K.filter(({ id: me }) => me !== z.id)
        );
      });
    }, []);
  return (
    P.useEffect(
      () =>
        Fe.subscribe((z) => {
          if (z.dismiss) {
            k((K) => K.map((q) => (q.id === z.id ? { ...q, delete: !0 } : q)));
            return;
          }
          setTimeout(() => {
            jm.flushSync(() => {
              k((K) => {
                let q = K.findIndex((me) => me.id === z.id);
                return q !== -1
                  ? [...K.slice(0, q), { ...K[q], ...z }, ...K.slice(q + 1)]
                  : [z, ...K];
              });
            });
          });
        }),
      []
    ),
    P.useEffect(() => {
      if (d !== "system") {
        $(d);
        return;
      }
      if (
        (d === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? $("dark")
            : $("light")),
        typeof window > "u")
      )
        return;
      let z = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        z.addEventListener("change", ({ matches: K }) => {
          $(K ? "dark" : "light");
        });
      } catch {
        z.addListener(({ matches: q }) => {
          try {
            $(q ? "dark" : "light");
          } catch (me) {
            console.error(me);
          }
        });
      }
    }, [d]),
    P.useEffect(() => {
      E.length <= 1 && D(!1);
    }, [E]),
    P.useEffect(() => {
      let z = (K) => {
        var q, me;
        o.every((ke) => K[ke] || K.code === ke) &&
          (D(!0), (q = H.current) == null || q.focus()),
          K.code === "Escape" &&
            (document.activeElement === H.current ||
              ((me = H.current) != null &&
                me.contains(document.activeElement))) &&
            D(!1);
      };
      return (
        document.addEventListener("keydown", z),
        () => document.removeEventListener("keydown", z)
      );
    }, [o]),
    P.useEffect(() => {
      if (H.current)
        return () => {
          j.current &&
            (j.current.focus({ preventScroll: !0 }),
            (j.current = null),
            (L.current = !1));
        };
    }, [H.current]),
    P.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${b} ${N}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      R.map((z, K) => {
        var q;
        let [me, ke] = z.split("-");
        return E.length
          ? P.createElement(
              "ol",
              {
                key: z,
                dir: w === "auto" ? Rf() : w,
                tabIndex: -1,
                ref: H,
                className: l,
                "data-sonner-toaster": !0,
                "data-theme": G,
                "data-y-position": me,
                "data-lifted": F && E.length > 1 && !i,
                "data-x-position": ke,
                style: {
                  "--front-toast-height": `${
                    ((q = _[0]) == null ? void 0 : q.height) || 0
                  }px`,
                  "--width": `${I1}px`,
                  "--gap": `${g}px`,
                  ...f,
                  ...B1(a, u),
                },
                onBlur: (J) => {
                  L.current &&
                    !J.currentTarget.contains(J.relatedTarget) &&
                    ((L.current = !1),
                    j.current &&
                      (j.current.focus({ preventScroll: !0 }),
                      (j.current = null)));
                },
                onFocus: (J) => {
                  (J.target instanceof HTMLElement &&
                    J.target.dataset.dismissible === "false") ||
                    L.current ||
                    ((L.current = !0), (j.current = J.relatedTarget));
                },
                onMouseEnter: () => D(!0),
                onMouseMove: () => D(!0),
                onMouseLeave: () => {
                  Q || D(!1);
                },
                onDragEnd: () => D(!1),
                onPointerDown: (J) => {
                  (J.target instanceof HTMLElement &&
                    J.target.dataset.dismissible === "false") ||
                    M(!0);
                },
                onPointerUp: () => M(!1),
              },
              E.filter((J) => (!J.position && K === 0) || J.position === z).map(
                (J, mr) => {
                  var sn, Vn;
                  return P.createElement(U1, {
                    key: J.id,
                    icons: v,
                    index: mr,
                    toast: J,
                    defaultRichColors: p,
                    duration:
                      (sn = y == null ? void 0 : y.duration) != null ? sn : m,
                    className: y == null ? void 0 : y.className,
                    descriptionClassName:
                      y == null ? void 0 : y.descriptionClassName,
                    invert: n,
                    visibleToasts: C,
                    closeButton:
                      (Vn = y == null ? void 0 : y.closeButton) != null
                        ? Vn
                        : s,
                    interacting: Q,
                    position: z,
                    style: y == null ? void 0 : y.style,
                    unstyled: y == null ? void 0 : y.unstyled,
                    classNames: y == null ? void 0 : y.classNames,
                    cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                    actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                    removeToast: V,
                    toasts: E.filter((ln) => ln.position == J.position),
                    heights: _.filter((ln) => ln.position == J.position),
                    setHeights: O,
                    expandByDefault: i,
                    gap: g,
                    loadingIcon: h,
                    expanded: F,
                    pauseWhenPageIsHidden: S,
                    swipeDirections: e.swipeDirections,
                  });
                }
              )
            )
          : null;
      })
    )
  );
});
const V1 = ({ ...e }) => {
  const { theme: t = "system" } = g1();
  return c.jsx(H1, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...e,
  });
};
var W1 = zu[" useId ".trim().toString()] || (() => {}),
  Q1 = 0;
function xg(e) {
  const [t, n] = x.useState(W1());
  return (
    $t(() => {
      n((r) => r ?? String(Q1++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const K1 = ["top", "right", "bottom", "left"],
  Fn = Math.min,
  Ke = Math.max,
  Us = Math.round,
  Yi = Math.floor,
  Ft = (e) => ({ x: e, y: e }),
  Y1 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  G1 = { start: "end", end: "start" };
function xu(e, t, n) {
  return Ke(e, Fn(t, n));
}
function nn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rn(e) {
  return e.split("-")[0];
}
function mo(e) {
  return e.split("-")[1];
}
function Ic(e) {
  return e === "x" ? "y" : "x";
}
function Dc(e) {
  return e === "y" ? "height" : "width";
}
const q1 = new Set(["top", "bottom"]);
function It(e) {
  return q1.has(rn(e)) ? "y" : "x";
}
function zc(e) {
  return Ic(It(e));
}
function X1(e, t, n) {
  n === void 0 && (n = !1);
  const r = mo(e),
    o = zc(e),
    i = Dc(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (s = Bs(s)), [s, Bs(s)];
}
function Z1(e) {
  const t = Bs(e);
  return [wu(e), t, wu(t)];
}
function wu(e) {
  return e.replace(/start|end/g, (t) => G1[t]);
}
const Af = ["left", "right"],
  Of = ["right", "left"],
  J1 = ["top", "bottom"],
  eC = ["bottom", "top"];
function tC(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Of : Af) : t ? Af : Of;
    case "left":
    case "right":
      return t ? J1 : eC;
    default:
      return [];
  }
}
function nC(e, t, n, r) {
  const o = mo(e);
  let i = tC(rn(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(wu)))), i
  );
}
function Bs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Y1[t]);
}
function rC(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function wg(e) {
  return typeof e != "number"
    ? rC(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Hs(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function _f(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = It(t),
    s = zc(t),
    l = Dc(s),
    a = rn(t),
    u = i === "y",
    d = r.x + r.width / 2 - o.width / 2,
    p = r.y + r.height / 2 - o.height / 2,
    m = r[l] / 2 - o[l] / 2;
  let f;
  switch (a) {
    case "top":
      f = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      f = { x: d, y: r.y + r.height };
      break;
    case "right":
      f = { x: r.x + r.width, y: p };
      break;
    case "left":
      f = { x: r.x - o.width, y: p };
      break;
    default:
      f = { x: r.x, y: r.y };
  }
  switch (mo(t)) {
    case "start":
      f[s] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      f[s] += m * (n && u ? -1 : 1);
      break;
  }
  return f;
}
const oC = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    l = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: p } = _f(u, r, a),
    m = r,
    f = {},
    C = 0;
  for (let y = 0; y < l.length; y++) {
    const { name: w, fn: g } = l[y],
      {
        x: h,
        y: v,
        data: b,
        reset: S,
      } = await g({
        x: d,
        y: p,
        initialPlacement: r,
        placement: m,
        strategy: o,
        middlewareData: f,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (d = h ?? d),
      (p = v ?? p),
      (f = { ...f, [w]: { ...f[w], ...b } }),
      S &&
        C <= 50 &&
        (C++,
        typeof S == "object" &&
          (S.placement && (m = S.placement),
          S.rects &&
            (u =
              S.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : S.rects),
          ({ x: d, y: p } = _f(u, m, a))),
        (y = -1));
  }
  return { x: d, y: p, placement: m, strategy: o, middlewareData: f };
};
async function ui(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: p = "floating",
      altBoundary: m = !1,
      padding: f = 0,
    } = nn(t, e),
    C = wg(f),
    w = l[m ? (p === "floating" ? "reference" : "floating") : p],
    g = Hs(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: a,
      })
    ),
    h =
      p === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    v = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(l.floating)),
    b = (await (i.isElement == null ? void 0 : i.isElement(v)))
      ? (await (i.getScale == null ? void 0 : i.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = Hs(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: h,
            offsetParent: v,
            strategy: a,
          })
        : h
    );
  return {
    top: (g.top - S.top + C.top) / b.y,
    bottom: (S.bottom - g.bottom + C.bottom) / b.y,
    left: (g.left - S.left + C.left) / b.x,
    right: (S.right - g.right + C.right) / b.x,
  };
}
const iC = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: d = 0 } = nn(e, t) || {};
      if (u == null) return {};
      const p = wg(d),
        m = { x: n, y: r },
        f = zc(o),
        C = Dc(f),
        y = await s.getDimensions(u),
        w = f === "y",
        g = w ? "top" : "left",
        h = w ? "bottom" : "right",
        v = w ? "clientHeight" : "clientWidth",
        b = i.reference[C] + i.reference[f] - m[f] - i.floating[C],
        S = m[f] - i.reference[f],
        E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let k = E ? E[v] : 0;
      (!k || !(await (s.isElement == null ? void 0 : s.isElement(E)))) &&
        (k = l.floating[v] || i.floating[C]);
      const R = b / 2 - S / 2,
        _ = k / 2 - y[C] / 2 - 1,
        O = Fn(p[g], _),
        F = Fn(p[h], _),
        D = O,
        Q = k - y[C] - F,
        M = k / 2 - y[C] / 2 + R,
        G = xu(D, M, Q),
        $ =
          !a.arrow &&
          mo(o) != null &&
          M !== G &&
          i.reference[C] / 2 - (M < D ? O : F) - y[C] / 2 < 0,
        H = $ ? (M < D ? M - D : M - Q) : 0;
      return {
        [f]: m[f] + H,
        data: {
          [f]: G,
          centerOffset: M - G - H,
          ...($ && { alignmentOffset: H }),
        },
        reset: $,
      };
    },
  }),
  sC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: p = !0,
              fallbackPlacements: m,
              fallbackStrategy: f = "bestFit",
              fallbackAxisSideDirection: C = "none",
              flipAlignment: y = !0,
              ...w
            } = nn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const g = rn(o),
            h = It(l),
            v = rn(l) === l,
            b = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            S = m || (v || !y ? [Bs(l)] : Z1(l)),
            E = C !== "none";
          !m && E && S.push(...nC(l, y, C, b));
          const k = [l, ...S],
            R = await ui(t, w),
            _ = [];
          let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((d && _.push(R[g]), p)) {
            const M = X1(o, s, b);
            _.push(R[M[0]], R[M[1]]);
          }
          if (
            ((O = [...O, { placement: o, overflows: _ }]),
            !_.every((M) => M <= 0))
          ) {
            var F, D;
            const M = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1,
              G = k[M];
            if (
              G &&
              (!(p === "alignment" ? h !== It(G) : !1) ||
                O.every((N) => N.overflows[0] > 0 && It(N.placement) === h))
            )
              return {
                data: { index: M, overflows: O },
                reset: { placement: G },
              };
            let $ =
              (D = O.filter((H) => H.overflows[0] <= 0).sort(
                (H, N) => H.overflows[1] - N.overflows[1]
              )[0]) == null
                ? void 0
                : D.placement;
            if (!$)
              switch (f) {
                case "bestFit": {
                  var Q;
                  const H =
                    (Q = O.filter((N) => {
                      if (E) {
                        const j = It(N.placement);
                        return j === h || j === "y";
                      }
                      return !0;
                    })
                      .map((N) => [
                        N.placement,
                        N.overflows
                          .filter((j) => j > 0)
                          .reduce((j, L) => j + L, 0),
                      ])
                      .sort((N, j) => N[1] - j[1])[0]) == null
                      ? void 0
                      : Q[0];
                  H && ($ = H);
                  break;
                }
                case "initialPlacement":
                  $ = l;
                  break;
              }
            if (o !== $) return { reset: { placement: $ } };
          }
          return {};
        },
      }
    );
  };
function Mf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Lf(e) {
  return K1.some((t) => e[t] >= 0);
}
const lC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = nn(e, t);
          switch (r) {
            case "referenceHidden": {
              const i = await ui(t, { ...o, elementContext: "reference" }),
                s = Mf(i, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: Lf(s) },
              };
            }
            case "escaped": {
              const i = await ui(t, { ...o, altBoundary: !0 }),
                s = Mf(i, n.floating);
              return { data: { escapedOffsets: s, escaped: Lf(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Cg = new Set(["left", "top"]);
async function aC(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = rn(n),
    l = mo(n),
    a = It(n) === "y",
    u = Cg.has(s) ? -1 : 1,
    d = i && a ? -1 : 1,
    p = nn(t, e);
  let {
    mainAxis: m,
    crossAxis: f,
    alignmentAxis: C,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis,
      };
  return (
    l && typeof C == "number" && (f = l === "end" ? C * -1 : C),
    a ? { x: f * d, y: m * u } : { x: m * u, y: f * d }
  );
}
const uC = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: l } = t,
            a = await aC(t, e);
          return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
        },
      }
    );
  },
  cC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: l = {
                fn: (w) => {
                  let { x: g, y: h } = w;
                  return { x: g, y: h };
                },
              },
              ...a
            } = nn(e, t),
            u = { x: n, y: r },
            d = await ui(t, a),
            p = It(rn(o)),
            m = Ic(p);
          let f = u[m],
            C = u[p];
          if (i) {
            const w = m === "y" ? "top" : "left",
              g = m === "y" ? "bottom" : "right",
              h = f + d[w],
              v = f - d[g];
            f = xu(h, f, v);
          }
          if (s) {
            const w = p === "y" ? "top" : "left",
              g = p === "y" ? "bottom" : "right",
              h = C + d[w],
              v = C - d[g];
            C = xu(h, C, v);
          }
          const y = l.fn({ ...t, [m]: f, [p]: C });
          return {
            ...y,
            data: { x: y.x - n, y: y.y - r, enabled: { [m]: i, [p]: s } },
          };
        },
      }
    );
  },
  dC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = nn(e, t),
            d = { x: n, y: r },
            p = It(o),
            m = Ic(p);
          let f = d[m],
            C = d[p];
          const y = nn(l, t),
            w =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (a) {
            const v = m === "y" ? "height" : "width",
              b = i.reference[m] - i.floating[v] + w.mainAxis,
              S = i.reference[m] + i.reference[v] - w.mainAxis;
            f < b ? (f = b) : f > S && (f = S);
          }
          if (u) {
            var g, h;
            const v = m === "y" ? "width" : "height",
              b = Cg.has(rn(o)),
              S =
                i.reference[p] -
                i.floating[v] +
                ((b && ((g = s.offset) == null ? void 0 : g[p])) || 0) +
                (b ? 0 : w.crossAxis),
              E =
                i.reference[p] +
                i.reference[v] +
                (b ? 0 : ((h = s.offset) == null ? void 0 : h[p]) || 0) -
                (b ? w.crossAxis : 0);
            C < S ? (C = S) : C > E && (C = E);
          }
          return { [m]: f, [p]: C };
        },
      }
    );
  },
  fC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: l } = t,
            { apply: a = () => {}, ...u } = nn(e, t),
            d = await ui(t, u),
            p = rn(o),
            m = mo(o),
            f = It(o) === "y",
            { width: C, height: y } = i.floating;
          let w, g;
          p === "top" || p === "bottom"
            ? ((w = p),
              (g =
                m ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((g = p), (w = m === "end" ? "top" : "bottom"));
          const h = y - d.top - d.bottom,
            v = C - d.left - d.right,
            b = Fn(y - d[w], h),
            S = Fn(C - d[g], v),
            E = !t.middlewareData.shift;
          let k = b,
            R = S;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (R = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = h),
            E && !m)
          ) {
            const O = Ke(d.left, 0),
              F = Ke(d.right, 0),
              D = Ke(d.top, 0),
              Q = Ke(d.bottom, 0);
            f
              ? (R = C - 2 * (O !== 0 || F !== 0 ? O + F : Ke(d.left, d.right)))
              : (k =
                  y - 2 * (D !== 0 || Q !== 0 ? D + Q : Ke(d.top, d.bottom)));
          }
          await a({ ...t, availableWidth: R, availableHeight: k });
          const _ = await s.getDimensions(l.floating);
          return C !== _.width || y !== _.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function vl() {
  return typeof window < "u";
}
function go(e) {
  return bg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Xe(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Bt(e) {
  var t;
  return (t = (bg(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function bg(e) {
  return vl() ? e instanceof Node || e instanceof Xe(e).Node : !1;
}
function Tt(e) {
  return vl() ? e instanceof Element || e instanceof Xe(e).Element : !1;
}
function Ut(e) {
  return vl() ? e instanceof HTMLElement || e instanceof Xe(e).HTMLElement : !1;
}
function If(e) {
  return !vl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Xe(e).ShadowRoot;
}
const pC = new Set(["inline", "contents"]);
function Si(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Nt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !pC.has(o);
}
const hC = new Set(["table", "td", "th"]);
function mC(e) {
  return hC.has(go(e));
}
const gC = [":popover-open", ":modal"];
function yl(e) {
  return gC.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const vC = ["transform", "translate", "scale", "rotate", "perspective"],
  yC = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  xC = ["paint", "layout", "strict", "content"];
function Fc(e) {
  const t = $c(),
    n = Tt(e) ? Nt(e) : e;
  return (
    vC.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    yC.some((r) => (n.willChange || "").includes(r)) ||
    xC.some((r) => (n.contain || "").includes(r))
  );
}
function wC(e) {
  let t = $n(e);
  for (; Ut(t) && !lo(t); ) {
    if (Fc(t)) return t;
    if (yl(t)) return null;
    t = $n(t);
  }
  return null;
}
function $c() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const CC = new Set(["html", "body", "#document"]);
function lo(e) {
  return CC.has(go(e));
}
function Nt(e) {
  return Xe(e).getComputedStyle(e);
}
function xl(e) {
  return Tt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function $n(e) {
  if (go(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (If(e) && e.host) || Bt(e);
  return If(t) ? t.host : t;
}
function Sg(e) {
  const t = $n(e);
  return lo(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Ut(t) && Si(t)
    ? t
    : Sg(t);
}
function ci(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Sg(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = Xe(o);
  if (i) {
    const l = Cu(s);
    return t.concat(
      s,
      s.visualViewport || [],
      Si(o) ? o : [],
      l && n ? ci(l) : []
    );
  }
  return t.concat(o, ci(o, [], n));
}
function Cu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Eg(e) {
  const t = Nt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Ut(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    l = Us(n) !== i || Us(r) !== s;
  return l && ((n = i), (r = s)), { width: n, height: r, $: l };
}
function Uc(e) {
  return Tt(e) ? e : e.contextElement;
}
function Br(e) {
  const t = Uc(e);
  if (!Ut(t)) return Ft(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Eg(t);
  let s = (i ? Us(n.width) : n.width) / r,
    l = (i ? Us(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const bC = Ft(0);
function kg(e) {
  const t = Xe(e);
  return !$c() || !t.visualViewport
    ? bC
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function SC(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Xe(e)) ? !1 : t;
}
function fr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = Uc(e);
  let s = Ft(1);
  t && (r ? Tt(r) && (s = Br(r)) : (s = Br(e)));
  const l = SC(i, n, r) ? kg(i) : Ft(0);
  let a = (o.left + l.x) / s.x,
    u = (o.top + l.y) / s.y,
    d = o.width / s.x,
    p = o.height / s.y;
  if (i) {
    const m = Xe(i),
      f = r && Tt(r) ? Xe(r) : r;
    let C = m,
      y = Cu(C);
    for (; y && r && f !== C; ) {
      const w = Br(y),
        g = y.getBoundingClientRect(),
        h = Nt(y),
        v = g.left + (y.clientLeft + parseFloat(h.paddingLeft)) * w.x,
        b = g.top + (y.clientTop + parseFloat(h.paddingTop)) * w.y;
      (a *= w.x),
        (u *= w.y),
        (d *= w.x),
        (p *= w.y),
        (a += v),
        (u += b),
        (C = Xe(y)),
        (y = Cu(C));
    }
  }
  return Hs({ width: d, height: p, x: a, y: u });
}
function Bc(e, t) {
  const n = xl(e).scrollLeft;
  return t ? t.left + n : fr(Bt(e)).left + n;
}
function Tg(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : Bc(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function EC(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = Bt(r),
    l = t ? yl(t.floating) : !1;
  if (r === s || (l && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = Ft(1);
  const d = Ft(0),
    p = Ut(r);
  if (
    (p || (!p && !i)) &&
    ((go(r) !== "body" || Si(s)) && (a = xl(r)), Ut(r))
  ) {
    const f = fr(r);
    (u = Br(r)), (d.x = f.x + r.clientLeft), (d.y = f.y + r.clientTop);
  }
  const m = s && !p && !i ? Tg(s, a, !0) : Ft(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + d.x + m.x,
    y: n.y * u.y - a.scrollTop * u.y + d.y + m.y,
  };
}
function kC(e) {
  return Array.from(e.getClientRects());
}
function TC(e) {
  const t = Bt(e),
    n = xl(e),
    r = e.ownerDocument.body,
    o = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Bc(e);
  const l = -n.scrollTop;
  return (
    Nt(r).direction === "rtl" && (s += Ke(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: l }
  );
}
function NC(e, t) {
  const n = Xe(e),
    r = Bt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = $c();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: s, x: l, y: a };
}
const PC = new Set(["absolute", "fixed"]);
function jC(e, t) {
  const n = fr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Ut(e) ? Br(e) : Ft(1),
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: s, height: l, x: a, y: u };
}
function Df(e, t, n) {
  let r;
  if (t === "viewport") r = NC(e, n);
  else if (t === "document") r = TC(Bt(e));
  else if (Tt(t)) r = jC(t, n);
  else {
    const o = kg(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Hs(r);
}
function Ng(e, t) {
  const n = $n(e);
  return n === t || !Tt(n) || lo(n)
    ? !1
    : Nt(n).position === "fixed" || Ng(n, t);
}
function RC(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ci(e, [], !1).filter((l) => Tt(l) && go(l) !== "body"),
    o = null;
  const i = Nt(e).position === "fixed";
  let s = i ? $n(e) : e;
  for (; Tt(s) && !lo(s); ) {
    const l = Nt(s),
      a = Fc(s);
    !a && l.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a && l.position === "static" && !!o && PC.has(o.position)) ||
            (Si(s) && !a && Ng(e, s))
      )
        ? (r = r.filter((d) => d !== s))
        : (o = l),
      (s = $n(s));
  }
  return t.set(e, r), r;
}
function AC(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? yl(t)
          ? []
          : RC(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = s[0],
    a = s.reduce((u, d) => {
      const p = Df(t, d, o);
      return (
        (u.top = Ke(p.top, u.top)),
        (u.right = Fn(p.right, u.right)),
        (u.bottom = Fn(p.bottom, u.bottom)),
        (u.left = Ke(p.left, u.left)),
        u
      );
    }, Df(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function OC(e) {
  const { width: t, height: n } = Eg(e);
  return { width: t, height: n };
}
function _C(e, t, n) {
  const r = Ut(t),
    o = Bt(t),
    i = n === "fixed",
    s = fr(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = Ft(0);
  function u() {
    a.x = Bc(o);
  }
  if (r || (!r && !i))
    if (((go(t) !== "body" || Si(o)) && (l = xl(t)), r)) {
      const f = fr(t, !0, i, t);
      (a.x = f.x + t.clientLeft), (a.y = f.y + t.clientTop);
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Tg(o, l) : Ft(0),
    p = s.left + l.scrollLeft - a.x - d.x,
    m = s.top + l.scrollTop - a.y - d.y;
  return { x: p, y: m, width: s.width, height: s.height };
}
function fa(e) {
  return Nt(e).position === "static";
}
function zf(e, t) {
  if (!Ut(e) || Nt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Bt(e) === n && (n = n.ownerDocument.body), n;
}
function Pg(e, t) {
  const n = Xe(e);
  if (yl(e)) return n;
  if (!Ut(e)) {
    let o = $n(e);
    for (; o && !lo(o); ) {
      if (Tt(o) && !fa(o)) return o;
      o = $n(o);
    }
    return n;
  }
  let r = zf(e, t);
  for (; r && mC(r) && fa(r); ) r = zf(r, t);
  return r && lo(r) && fa(r) && !Fc(r) ? n : r || wC(e) || n;
}
const MC = async function (e) {
  const t = this.getOffsetParent || Pg,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: _C(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function LC(e) {
  return Nt(e).direction === "rtl";
}
const IC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: EC,
  getDocumentElement: Bt,
  getClippingRect: AC,
  getOffsetParent: Pg,
  getElementRects: MC,
  getClientRects: kC,
  getDimensions: OC,
  getScale: Br,
  isElement: Tt,
  isRTL: LC,
};
function jg(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function DC(e, t) {
  let n = null,
    r;
  const o = Bt(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(),
      { left: d, top: p, width: m, height: f } = u;
    if ((l || t(), !m || !f)) return;
    const C = Yi(p),
      y = Yi(o.clientWidth - (d + m)),
      w = Yi(o.clientHeight - (p + f)),
      g = Yi(d),
      v = {
        rootMargin: -C + "px " + -y + "px " + -w + "px " + -g + "px",
        threshold: Ke(0, Fn(1, a)) || 1,
      };
    let b = !0;
    function S(E) {
      const k = E[0].intersectionRatio;
      if (k !== a) {
        if (!b) return s();
        k
          ? s(!1, k)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      k === 1 && !jg(u, e.getBoundingClientRect()) && s(), (b = !1);
    }
    try {
      n = new IntersectionObserver(S, { ...v, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, v);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function zC(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = Uc(e),
    d = o || i ? [...(u ? ci(u) : []), ...ci(t)] : [];
  d.forEach((g) => {
    o && g.addEventListener("scroll", n, { passive: !0 }),
      i && g.addEventListener("resize", n);
  });
  const p = u && l ? DC(u, n) : null;
  let m = -1,
    f = null;
  s &&
    ((f = new ResizeObserver((g) => {
      let [h] = g;
      h &&
        h.target === u &&
        f &&
        (f.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var v;
          (v = f) == null || v.observe(t);
        }))),
        n();
    })),
    u && !a && f.observe(u),
    f.observe(t));
  let C,
    y = a ? fr(e) : null;
  a && w();
  function w() {
    const g = fr(e);
    y && !jg(y, g) && n(), (y = g), (C = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var g;
      d.forEach((h) => {
        o && h.removeEventListener("scroll", n),
          i && h.removeEventListener("resize", n);
      }),
        p == null || p(),
        (g = f) == null || g.disconnect(),
        (f = null),
        a && cancelAnimationFrame(C);
    }
  );
}
const FC = uC,
  $C = cC,
  UC = sC,
  BC = fC,
  HC = lC,
  Ff = iC,
  VC = dC,
  WC = (e, t, n) => {
    const r = new Map(),
      o = { platform: IC, ...n },
      i = { ...o.platform, _c: r };
    return oC(e, t, { ...o, platform: i });
  };
var QC = typeof document < "u",
  KC = function () {},
  ds = QC ? x.useLayoutEffect : KC;
function Vs(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Vs(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Vs(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Rg(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function $f(e, t) {
  const n = Rg(e);
  return Math.round(t * n) / n;
}
function pa(e) {
  const t = x.useRef(e);
  return (
    ds(() => {
      t.current = e;
    }),
    t
  );
}
function YC(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [d, p] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, f] = x.useState(r);
  Vs(m, r) || f(r);
  const [C, y] = x.useState(null),
    [w, g] = x.useState(null),
    h = x.useCallback((N) => {
      N !== E.current && ((E.current = N), y(N));
    }, []),
    v = x.useCallback((N) => {
      N !== k.current && ((k.current = N), g(N));
    }, []),
    b = i || C,
    S = s || w,
    E = x.useRef(null),
    k = x.useRef(null),
    R = x.useRef(d),
    _ = a != null,
    O = pa(a),
    F = pa(o),
    D = pa(u),
    Q = x.useCallback(() => {
      if (!E.current || !k.current) return;
      const N = { placement: t, strategy: n, middleware: m };
      F.current && (N.platform = F.current),
        WC(E.current, k.current, N).then((j) => {
          const L = { ...j, isPositioned: D.current !== !1 };
          M.current &&
            !Vs(R.current, L) &&
            ((R.current = L),
            Ci.flushSync(() => {
              p(L);
            }));
        });
    }, [m, t, n, F, D]);
  ds(() => {
    u === !1 &&
      R.current.isPositioned &&
      ((R.current.isPositioned = !1), p((N) => ({ ...N, isPositioned: !1 })));
  }, [u]);
  const M = x.useRef(!1);
  ds(
    () => (
      (M.current = !0),
      () => {
        M.current = !1;
      }
    ),
    []
  ),
    ds(() => {
      if ((b && (E.current = b), S && (k.current = S), b && S)) {
        if (O.current) return O.current(b, S, Q);
        Q();
      }
    }, [b, S, Q, O, _]);
  const G = x.useMemo(
      () => ({ reference: E, floating: k, setReference: h, setFloating: v }),
      [h, v]
    ),
    $ = x.useMemo(() => ({ reference: b, floating: S }), [b, S]),
    H = x.useMemo(() => {
      const N = { position: n, left: 0, top: 0 };
      if (!$.floating) return N;
      const j = $f($.floating, d.x),
        L = $f($.floating, d.y);
      return l
        ? {
            ...N,
            transform: "translate(" + j + "px, " + L + "px)",
            ...(Rg($.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: j, top: L };
    }, [n, l, $.floating, d.x, d.y]);
  return x.useMemo(
    () => ({ ...d, update: Q, refs: G, elements: $, floatingStyles: H }),
    [d, Q, G, $, H]
  );
}
const GC = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Ff({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? Ff({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  qC = (e, t) => ({ ...FC(e), options: [e, t] }),
  XC = (e, t) => ({ ...$C(e), options: [e, t] }),
  ZC = (e, t) => ({ ...VC(e), options: [e, t] }),
  JC = (e, t) => ({ ...UC(e), options: [e, t] }),
  eb = (e, t) => ({ ...BC(e), options: [e, t] }),
  tb = (e, t) => ({ ...HC(e), options: [e, t] }),
  nb = (e, t) => ({ ...GC(e), options: [e, t] });
var rb = "Arrow",
  Ag = x.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return c.jsx(xe.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : c.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Ag.displayName = rb;
var ob = Ag;
function ib(e) {
  const [t, n] = x.useState(void 0);
  return (
    $t(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, l;
          if ("borderBoxSize" in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (s = u.inlineSize), (l = u.blockSize);
          } else (s = e.offsetWidth), (l = e.offsetHeight);
          n({ width: s, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Og = "Popper",
  [_g, Mg] = po(Og),
  [w2, Lg] = _g(Og),
  Ig = "PopperAnchor",
  Dg = x.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = Lg(Ig, n),
      s = x.useRef(null),
      l = Je(t, s);
    return (
      x.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : c.jsx(xe.div, { ...o, ref: l })
    );
  });
Dg.displayName = Ig;
var Hc = "PopperContent",
  [sb, lb] = _g(Hc),
  zg = x.forwardRef((e, t) => {
    var J, mr, sn, Vn, ln, gr;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: p = "partial",
        hideWhenDetached: m = !1,
        updatePositionStrategy: f = "optimized",
        onPlaced: C,
        ...y
      } = e,
      w = Lg(Hc, n),
      [g, h] = x.useState(null),
      v = Je(t, (an) => h(an)),
      [b, S] = x.useState(null),
      E = ib(b),
      k = (E == null ? void 0 : E.width) ?? 0,
      R = (E == null ? void 0 : E.height) ?? 0,
      _ = r + (i !== "center" ? "-" + i : ""),
      O =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      F = Array.isArray(u) ? u : [u],
      D = F.length > 0,
      Q = { padding: O, boundary: F.filter(ub), altBoundary: D },
      {
        refs: M,
        floatingStyles: G,
        placement: $,
        isPositioned: H,
        middlewareData: N,
      } = YC({
        strategy: "fixed",
        placement: _,
        whileElementsMounted: (...an) =>
          zC(...an, { animationFrame: f === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          qC({ mainAxis: o + R, alignmentAxis: s }),
          a &&
            XC({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === "partial" ? ZC() : void 0,
              ...Q,
            }),
          a && JC({ ...Q }),
          eb({
            ...Q,
            apply: ({
              elements: an,
              rects: Ei,
              availableWidth: Al,
              availableHeight: ki,
            }) => {
              const { width: Ol, height: vo } = Ei.reference,
                vr = an.floating.style;
              vr.setProperty("--radix-popper-available-width", `${Al}px`),
                vr.setProperty("--radix-popper-available-height", `${ki}px`),
                vr.setProperty("--radix-popper-anchor-width", `${Ol}px`),
                vr.setProperty("--radix-popper-anchor-height", `${vo}px`);
            },
          }),
          b && nb({ element: b, padding: l }),
          cb({ arrowWidth: k, arrowHeight: R }),
          m && tb({ strategy: "referenceHidden", ...Q }),
        ],
      }),
      [j, L] = Ug($),
      V = zn(C);
    $t(() => {
      H && (V == null || V());
    }, [H, V]);
    const z = (J = N.arrow) == null ? void 0 : J.x,
      K = (mr = N.arrow) == null ? void 0 : mr.y,
      q = ((sn = N.arrow) == null ? void 0 : sn.centerOffset) !== 0,
      [me, ke] = x.useState();
    return (
      $t(() => {
        g && ke(window.getComputedStyle(g).zIndex);
      }, [g]),
      c.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: H ? G.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: me,
          "--radix-popper-transform-origin": [
            (Vn = N.transformOrigin) == null ? void 0 : Vn.x,
            (ln = N.transformOrigin) == null ? void 0 : ln.y,
          ].join(" "),
          ...(((gr = N.hide) == null ? void 0 : gr.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: c.jsx(sb, {
          scope: n,
          placedSide: j,
          onArrowChange: S,
          arrowX: z,
          arrowY: K,
          shouldHideArrow: q,
          children: c.jsx(xe.div, {
            "data-side": j,
            "data-align": L,
            ...y,
            ref: v,
            style: { ...y.style, animation: H ? void 0 : "none" },
          }),
        }),
      })
    );
  });
zg.displayName = Hc;
var Fg = "PopperArrow",
  ab = { top: "bottom", right: "left", bottom: "top", left: "right" },
  $g = x.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = lb(Fg, r),
      s = ab[i.placedSide];
    return c.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: c.jsx(ob, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
$g.displayName = Fg;
function ub(e) {
  return e !== null;
}
var cb = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, g, h;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      l = s ? 0 : e.arrowWidth,
      a = s ? 0 : e.arrowHeight,
      [u, d] = Ug(n),
      p = { start: "0%", center: "50%", end: "100%" }[d],
      m = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + l / 2,
      f = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + a / 2;
    let C = "",
      y = "";
    return (
      u === "bottom"
        ? ((C = s ? p : `${m}px`), (y = `${-a}px`))
        : u === "top"
        ? ((C = s ? p : `${m}px`), (y = `${r.floating.height + a}px`))
        : u === "right"
        ? ((C = `${-a}px`), (y = s ? p : `${f}px`))
        : u === "left" &&
          ((C = `${r.floating.width + a}px`), (y = s ? p : `${f}px`)),
      { data: { x: C, y } }
    );
  },
});
function Ug(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var db = Dg,
  fb = zg,
  pb = $g,
  [wl, C2] = po("Tooltip", [Mg]),
  Vc = Mg(),
  Bg = "TooltipProvider",
  hb = 700,
  Uf = "tooltip.open",
  [mb, Hg] = wl(Bg),
  Vg = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = hb,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      s = x.useRef(!0),
      l = x.useRef(!1),
      a = x.useRef(0);
    return (
      x.useEffect(() => {
        const u = a.current;
        return () => window.clearTimeout(u);
      }, []),
      c.jsx(mb, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: x.useCallback(() => {
          window.clearTimeout(a.current), (s.current = !1);
        }, []),
        onClose: x.useCallback(() => {
          window.clearTimeout(a.current),
            (a.current = window.setTimeout(() => (s.current = !0), r));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: x.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
Vg.displayName = Bg;
var Wg = "Tooltip",
  [b2, Cl] = wl(Wg),
  bu = "TooltipTrigger",
  gb = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Cl(bu, n),
      i = Hg(bu, n),
      s = Vc(n),
      l = x.useRef(null),
      a = Je(t, l, o.onTriggerChange),
      u = x.useRef(!1),
      d = x.useRef(!1),
      p = x.useCallback(() => (u.current = !1), []);
    return (
      x.useEffect(
        () => () => document.removeEventListener("pointerup", p),
        [p]
      ),
      c.jsx(db, {
        asChild: !0,
        ...s,
        children: c.jsx(xe.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: he(e.onPointerMove, (m) => {
            m.pointerType !== "touch" &&
              !d.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: he(e.onPointerLeave, () => {
            o.onTriggerLeave(), (d.current = !1);
          }),
          onPointerDown: he(e.onPointerDown, () => {
            o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", p, { once: !0 });
          }),
          onFocus: he(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: he(e.onBlur, o.onClose),
          onClick: he(e.onClick, o.onClose),
        }),
      })
    );
  });
gb.displayName = bu;
var vb = "TooltipPortal",
  [S2, yb] = wl(vb, { forceMount: void 0 }),
  ao = "TooltipContent",
  Qg = x.forwardRef((e, t) => {
    const n = yb(ao, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = Cl(ao, e.__scopeTooltip);
    return c.jsx(fl, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? c.jsx(Kg, { side: o, ...i, ref: t })
        : c.jsx(xb, { side: o, ...i, ref: t }),
    });
  }),
  xb = x.forwardRef((e, t) => {
    const n = Cl(ao, e.__scopeTooltip),
      r = Hg(ao, e.__scopeTooltip),
      o = x.useRef(null),
      i = Je(t, o),
      [s, l] = x.useState(null),
      { trigger: a, onClose: u } = n,
      d = o.current,
      { onPointerInTransitChange: p } = r,
      m = x.useCallback(() => {
        l(null), p(!1);
      }, [p]),
      f = x.useCallback(
        (C, y) => {
          const w = C.currentTarget,
            g = { x: C.clientX, y: C.clientY },
            h = Eb(g, w.getBoundingClientRect()),
            v = kb(g, h),
            b = Tb(y.getBoundingClientRect()),
            S = Pb([...v, ...b]);
          l(S), p(!0);
        },
        [p]
      );
    return (
      x.useEffect(() => () => m(), [m]),
      x.useEffect(() => {
        if (a && d) {
          const C = (w) => f(w, d),
            y = (w) => f(w, a);
          return (
            a.addEventListener("pointerleave", C),
            d.addEventListener("pointerleave", y),
            () => {
              a.removeEventListener("pointerleave", C),
                d.removeEventListener("pointerleave", y);
            }
          );
        }
      }, [a, d, f, m]),
      x.useEffect(() => {
        if (s) {
          const C = (y) => {
            const w = y.target,
              g = { x: y.clientX, y: y.clientY },
              h =
                (a == null ? void 0 : a.contains(w)) ||
                (d == null ? void 0 : d.contains(w)),
              v = !Nb(g, s);
            h ? m() : v && (m(), u());
          };
          return (
            document.addEventListener("pointermove", C),
            () => document.removeEventListener("pointermove", C)
          );
        }
      }, [a, d, s, u, m]),
      c.jsx(Kg, { ...e, ref: i })
    );
  }),
  [wb, Cb] = wl(Wg, { isInside: !1 }),
  bb = Ax("TooltipContent"),
  Kg = x.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...l
      } = e,
      a = Cl(ao, n),
      u = Vc(n),
      { onClose: d } = a;
    return (
      x.useEffect(
        () => (
          document.addEventListener(Uf, d),
          () => document.removeEventListener(Uf, d)
        ),
        [d]
      ),
      x.useEffect(() => {
        if (a.trigger) {
          const p = (m) => {
            const f = m.target;
            f != null && f.contains(a.trigger) && d();
          };
          return (
            window.addEventListener("scroll", p, { capture: !0 }),
            () => window.removeEventListener("scroll", p, { capture: !0 })
          );
        }
      }, [a.trigger, d]),
      c.jsx(jc, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: d,
        children: c.jsxs(fb, {
          "data-state": a.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            c.jsx(bb, { children: r }),
            c.jsx(wb, {
              scope: n,
              isInside: !0,
              children: c.jsx(ew, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Qg.displayName = ao;
var Yg = "TooltipArrow",
  Sb = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Vc(n);
    return Cb(Yg, n).isInside ? null : c.jsx(pb, { ...o, ...r, ref: t });
  });
Sb.displayName = Yg;
function Eb(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function kb(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Tb(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function Nb(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i],
      a = t[s],
      u = l.x,
      d = l.y,
      p = a.x,
      m = a.y;
    d > r != m > r && n < ((p - u) * (r - d)) / (m - d) + u && (o = !o);
  }
  return o;
}
function Pb(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    jb(t)
  );
}
function jb(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var Rb = Vg,
  Gg = Qg;
const Ab = Rb,
  Ob = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    c.jsx(Gg, {
      ref: r,
      sideOffset: t,
      className: Pt(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
Ob.displayName = Gg.displayName;
var bl = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Sl = typeof window > "u" || "Deno" in globalThis;
function vt() {}
function _b(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mb(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Lb(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Su(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ib(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Bf(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: l,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== Wc(s, t.options)) return !1;
    } else if (!fi(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Hf(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (di(t.options.mutationKey) !== di(i)) return !1;
    } else if (!fi(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function Wc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || di)(e);
}
function di(e) {
  return JSON.stringify(e, (t, n) =>
    Eu(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function fi(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? Object.keys(t).every((n) => fi(e[n], t[n]))
    : !1;
}
function qg(e, t) {
  if (e === t) return e;
  const n = Vf(e) && Vf(t);
  if (n || (Eu(e) && Eu(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      l = n ? [] : {},
      a = new Set(r);
    let u = 0;
    for (let d = 0; d < s; d++) {
      const p = n ? d : i[d];
      ((!n && a.has(p)) || n) && e[p] === void 0 && t[p] === void 0
        ? ((l[p] = void 0), u++)
        : ((l[p] = qg(e[p], t[p])), l[p] === e[p] && e[p] !== void 0 && u++);
    }
    return o === s && u === o ? e : l;
  }
  return t;
}
function Vf(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Eu(e) {
  if (!Wf(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Wf(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Wf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Db(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function zb(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? qg(e, t)
    : t;
}
function Fb(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function $b(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Qc = Symbol();
function Xg(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Qc
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var Zn,
  wn,
  Qr,
  up,
  Ub =
    ((up = class extends bl {
      constructor() {
        super();
        Z(this, Zn);
        Z(this, wn);
        Z(this, Qr);
        B(this, Qr, (t) => {
          if (!Sl && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        T(this, wn) || this.setEventListener(T(this, Qr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = T(this, wn)) == null || t.call(this), B(this, wn, void 0));
      }
      setEventListener(t) {
        var n;
        B(this, Qr, t),
          (n = T(this, wn)) == null || n.call(this),
          B(
            this,
            wn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        T(this, Zn) !== t && (B(this, Zn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof T(this, Zn) == "boolean"
          ? T(this, Zn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Zn = new WeakMap()),
    (wn = new WeakMap()),
    (Qr = new WeakMap()),
    up),
  Zg = new Ub(),
  Kr,
  Cn,
  Yr,
  cp,
  Bb =
    ((cp = class extends bl {
      constructor() {
        super();
        Z(this, Kr, !0);
        Z(this, Cn);
        Z(this, Yr);
        B(this, Yr, (t) => {
          if (!Sl && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        T(this, Cn) || this.setEventListener(T(this, Yr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = T(this, Cn)) == null || t.call(this), B(this, Cn, void 0));
      }
      setEventListener(t) {
        var n;
        B(this, Yr, t),
          (n = T(this, Cn)) == null || n.call(this),
          B(this, Cn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        T(this, Kr) !== t &&
          (B(this, Kr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return T(this, Kr);
      }
    }),
    (Kr = new WeakMap()),
    (Cn = new WeakMap()),
    (Yr = new WeakMap()),
    cp),
  Ws = new Bb();
function Hb() {
  let e, t;
  const n = new Promise((o, i) => {
    (e = o), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function Vb(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Jg(e) {
  return (e ?? "online") === "online" ? Ws.isOnline() : !0;
}
var ev = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function ha(e) {
  return e instanceof ev;
}
function tv(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = Hb(),
    s = (y) => {
      var w;
      r || (m(new ev(y)), (w = e.abort) == null || w.call(e));
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      Zg.isFocused() &&
      (e.networkMode === "always" || Ws.isOnline()) &&
      e.canRun(),
    d = () => Jg(e.networkMode) && e.canRun(),
    p = (y) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, y),
        o == null || o(),
        i.resolve(y));
    },
    m = (y) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, y),
        o == null || o(),
        i.reject(y));
    },
    f = () =>
      new Promise((y) => {
        var w;
        (o = (g) => {
          (r || u()) && y(g);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var y;
        (o = void 0), r || (y = e.onContinue) == null || y.call(e);
      }),
    C = () => {
      if (r) return;
      let y;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        y = w ?? e.fn();
      } catch (g) {
        y = Promise.reject(g);
      }
      Promise.resolve(y)
        .then(p)
        .catch((g) => {
          var E;
          if (r) return;
          const h = e.retry ?? (Sl ? 0 : 3),
            v = e.retryDelay ?? Vb,
            b = typeof v == "function" ? v(n, g) : v,
            S =
              h === !0 ||
              (typeof h == "number" && n < h) ||
              (typeof h == "function" && h(n, g));
          if (t || !S) {
            m(g);
            return;
          }
          n++,
            (E = e.onFail) == null || E.call(e, n, g),
            Db(b)
              .then(() => (u() ? void 0 : f()))
              .then(() => {
                t ? m(g) : C();
              });
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: l,
    continueRetry: a,
    canStart: d,
    start: () => (d() ? C() : f().then(C), i),
  };
}
var Wb = (e) => setTimeout(e, 0);
function Qb() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = Wb;
  const i = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    s = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((a) => {
                n(a);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        t--, t || s();
      }
      return a;
    },
    batchCalls:
      (l) =>
      (...a) => {
        i(() => {
          l(...a);
        });
      },
    schedule: i,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var Le = Qb(),
  Jn,
  dp,
  nv =
    ((dp = class {
      constructor() {
        Z(this, Jn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Mb(this.gcTime) &&
            B(
              this,
              Jn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Sl ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        T(this, Jn) && (clearTimeout(T(this, Jn)), B(this, Jn, void 0));
      }
    }),
    (Jn = new WeakMap()),
    dp),
  Gr,
  er,
  ot,
  tr,
  je,
  pi,
  nr,
  yt,
  Wt,
  fp,
  Kb =
    ((fp = class extends nv {
      constructor(t) {
        super();
        Z(this, yt);
        Z(this, Gr);
        Z(this, er);
        Z(this, ot);
        Z(this, tr);
        Z(this, je);
        Z(this, pi);
        Z(this, nr);
        B(this, nr, !1),
          B(this, pi, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          B(this, tr, t.client),
          B(this, ot, T(this, tr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          B(this, Gr, Gb(this.options)),
          (this.state = t.state ?? T(this, Gr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = T(this, je)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...T(this, pi), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          T(this, ot).remove(this);
      }
      setData(t, n) {
        const r = zb(this.state.data, t, this.options);
        return (
          Te(this, yt, Wt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Te(this, yt, Wt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = T(this, je)) == null ? void 0 : r.promise;
        return (
          (o = T(this, je)) == null || o.cancel(t),
          n ? n.then(vt).catch(vt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(T(this, Gr));
      }
      isActive() {
        return this.observers.some((t) => Ib(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Qc ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Su(t.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !Lb(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = T(this, je)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = T(this, je)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          T(this, ot).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (T(this, je) &&
              (T(this, nr)
                ? T(this, je).cancel({ revert: !0 })
                : T(this, je).cancelRetry()),
            this.scheduleGc()),
          T(this, ot).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Te(this, yt, Wt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, d, p;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (T(this, je))
            return T(this, je).continueRetry(), T(this, je).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const m = this.observers.find((f) => f.options.queryFn);
          m && this.setOptions(m.options);
        }
        const r = new AbortController(),
          o = (m) => {
            Object.defineProperty(m, "signal", {
              enumerable: !0,
              get: () => (B(this, nr, !0), r.signal),
            });
          },
          i = () => {
            const m = Xg(this.options, n),
              C = (() => {
                const y = {
                  client: T(this, tr),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return o(y), y;
              })();
            return (
              B(this, nr, !1),
              this.options.persister ? this.options.persister(m, C, this) : m(C)
            );
          },
          l = (() => {
            const m = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: T(this, tr),
              state: this.state,
              fetchFn: i,
            };
            return o(m), m;
          })();
        (u = this.options.behavior) == null || u.onFetch(l, this),
          B(this, er, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((d = l.fetchOptions) == null ? void 0 : d.meta)) &&
            Te(this, yt, Wt).call(this, {
              type: "fetch",
              meta: (p = l.fetchOptions) == null ? void 0 : p.meta,
            });
        const a = (m) => {
          var f, C, y, w;
          (ha(m) && m.silent) ||
            Te(this, yt, Wt).call(this, { type: "error", error: m }),
            ha(m) ||
              ((C = (f = T(this, ot).config).onError) == null ||
                C.call(f, m, this),
              (w = (y = T(this, ot).config).onSettled) == null ||
                w.call(y, this.state.data, m, this)),
            this.scheduleGc();
        };
        return (
          B(
            this,
            je,
            tv({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: l.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (m) => {
                var f, C, y, w;
                if (m === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(m);
                } catch (g) {
                  a(g);
                  return;
                }
                (C = (f = T(this, ot).config).onSuccess) == null ||
                  C.call(f, m, this),
                  (w = (y = T(this, ot).config).onSettled) == null ||
                    w.call(y, m, this.state.error, this),
                  this.scheduleGc();
              },
              onError: a,
              onFail: (m, f) => {
                Te(this, yt, Wt).call(this, {
                  type: "failed",
                  failureCount: m,
                  error: f,
                });
              },
              onPause: () => {
                Te(this, yt, Wt).call(this, { type: "pause" });
              },
              onContinue: () => {
                Te(this, yt, Wt).call(this, { type: "continue" });
              },
              retry: l.options.retry,
              retryDelay: l.options.retryDelay,
              networkMode: l.options.networkMode,
              canRun: () => !0,
            })
          ),
          T(this, je).start()
        );
      }
    }),
    (Gr = new WeakMap()),
    (er = new WeakMap()),
    (ot = new WeakMap()),
    (tr = new WeakMap()),
    (je = new WeakMap()),
    (pi = new WeakMap()),
    (nr = new WeakMap()),
    (yt = new WeakSet()),
    (Wt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...Yb(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              B(this, er, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const o = t.error;
            return ha(o) && o.revert && T(this, er)
              ? { ...T(this, er), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Le.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            T(this, ot).notify({ query: this, type: "updated", action: t });
        });
    }),
    fp);
function Yb(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Jg(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Gb(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Ot,
  pp,
  qb =
    ((pp = class extends bl {
      constructor(t = {}) {
        super();
        Z(this, Ot);
        (this.config = t), B(this, Ot, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? Wc(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new Kb({
              client: t,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        T(this, Ot).has(t.queryHash) ||
          (T(this, Ot).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = T(this, Ot).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && T(this, Ot).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return T(this, Ot).get(t);
      }
      getAll() {
        return [...T(this, Ot).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Bf(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Bf(t, r)) : n;
      }
      notify(t) {
        Le.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Ot = new WeakMap()),
    pp),
  _t,
  _e,
  rr,
  Mt,
  mn,
  hp,
  Xb =
    ((hp = class extends nv {
      constructor(t) {
        super();
        Z(this, Mt);
        Z(this, _t);
        Z(this, _e);
        Z(this, rr);
        (this.mutationId = t.mutationId),
          B(this, _e, t.mutationCache),
          B(this, _t, []),
          (this.state = t.state || Zb()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        T(this, _t).includes(t) ||
          (T(this, _t).push(t),
          this.clearGcTimeout(),
          T(this, _e).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        B(
          this,
          _t,
          T(this, _t).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          T(this, _e).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        T(this, _t).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : T(this, _e).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = T(this, rr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, l, a, u, d, p, m, f, C, y, w, g, h, v, b, S, E, k, R;
        const n = () => {
          Te(this, Mt, mn).call(this, { type: "continue" });
        };
        B(
          this,
          rr,
          tv({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (_, O) => {
              Te(this, Mt, mn).call(this, {
                type: "failed",
                failureCount: _,
                error: O,
              });
            },
            onPause: () => {
              Te(this, Mt, mn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => T(this, _e).canRun(this),
          })
        );
        const r = this.state.status === "pending",
          o = !T(this, rr).canStart();
        try {
          if (r) n();
          else {
            Te(this, Mt, mn).call(this, {
              type: "pending",
              variables: t,
              isPaused: o,
            }),
              await ((s = (i = T(this, _e).config).onMutate) == null
                ? void 0
                : s.call(i, t, this));
            const O = await ((a = (l = this.options).onMutate) == null
              ? void 0
              : a.call(l, t));
            O !== this.state.context &&
              Te(this, Mt, mn).call(this, {
                type: "pending",
                context: O,
                variables: t,
                isPaused: o,
              });
          }
          const _ = await T(this, rr).start();
          return (
            await ((d = (u = T(this, _e).config).onSuccess) == null
              ? void 0
              : d.call(u, _, t, this.state.context, this)),
            await ((m = (p = this.options).onSuccess) == null
              ? void 0
              : m.call(p, _, t, this.state.context)),
            await ((C = (f = T(this, _e).config).onSettled) == null
              ? void 0
              : C.call(
                  f,
                  _,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((w = (y = this.options).onSettled) == null
              ? void 0
              : w.call(y, _, null, t, this.state.context)),
            Te(this, Mt, mn).call(this, { type: "success", data: _ }),
            _
          );
        } catch (_) {
          try {
            throw (
              (await ((h = (g = T(this, _e).config).onError) == null
                ? void 0
                : h.call(g, _, t, this.state.context, this)),
              await ((b = (v = this.options).onError) == null
                ? void 0
                : b.call(v, _, t, this.state.context)),
              await ((E = (S = T(this, _e).config).onSettled) == null
                ? void 0
                : E.call(
                    S,
                    void 0,
                    _,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((R = (k = this.options).onSettled) == null
                ? void 0
                : R.call(k, void 0, _, t, this.state.context)),
              _)
            );
          } finally {
            Te(this, Mt, mn).call(this, { type: "error", error: _ });
          }
        } finally {
          T(this, _e).runNext(this);
        }
      }
    }),
    (_t = new WeakMap()),
    (_e = new WeakMap()),
    (rr = new WeakMap()),
    (Mt = new WeakSet()),
    (mn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Le.batch(() => {
          T(this, _t).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            T(this, _e).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    hp);
function Zb() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Yt,
  xt,
  hi,
  mp,
  Jb =
    ((mp = class extends bl {
      constructor(t = {}) {
        super();
        Z(this, Yt);
        Z(this, xt);
        Z(this, hi);
        (this.config = t),
          B(this, Yt, new Set()),
          B(this, xt, new Map()),
          B(this, hi, 0);
      }
      build(t, n, r) {
        const o = new Xb({
          mutationCache: this,
          mutationId: ++Ni(this, hi)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        T(this, Yt).add(t);
        const n = Gi(t);
        if (typeof n == "string") {
          const r = T(this, xt).get(n);
          r ? r.push(t) : T(this, xt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (T(this, Yt).delete(t)) {
          const n = Gi(t);
          if (typeof n == "string") {
            const r = T(this, xt).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && T(this, xt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = Gi(t);
        if (typeof n == "string") {
          const r = T(this, xt).get(n),
            o =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = Gi(t);
        if (typeof n == "string") {
          const o =
            (r = T(this, xt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Le.batch(() => {
          T(this, Yt).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            T(this, Yt).clear(),
            T(this, xt).clear();
        });
      }
      getAll() {
        return Array.from(T(this, Yt));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Hf(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Hf(t, n));
      }
      notify(t) {
        Le.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Le.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(vt)))
        );
      }
    }),
    (Yt = new WeakMap()),
    (xt = new WeakMap()),
    (hi = new WeakMap()),
    mp);
function Gi(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Qf(e) {
  return {
    onFetch: (t, n) => {
      var d, p, m, f, C;
      const r = t.options,
        o =
          (m =
            (p = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : p.fetchMore) == null
            ? void 0
            : m.direction,
        i = ((f = t.state.data) == null ? void 0 : f.pages) || [],
        s = ((C = t.state.data) == null ? void 0 : C.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let y = !1;
        const w = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (y = !0)
                  : t.signal.addEventListener("abort", () => {
                      y = !0;
                    }),
                t.signal
              ),
            });
          },
          g = Xg(t.options, t.fetchOptions),
          h = async (v, b, S) => {
            if (y) return Promise.reject();
            if (b == null && v.pages.length) return Promise.resolve(v);
            const k = (() => {
                const F = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: b,
                  direction: S ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return w(F), F;
              })(),
              R = await g(k),
              { maxPages: _ } = t.options,
              O = S ? $b : Fb;
            return {
              pages: O(v.pages, R, _),
              pageParams: O(v.pageParams, b, _),
            };
          };
        if (o && i.length) {
          const v = o === "backward",
            b = v ? eS : Kf,
            S = { pages: i, pageParams: s },
            E = b(r, S);
          l = await h(S, E, v);
        } else {
          const v = e ?? i.length;
          do {
            const b = a === 0 ? s[0] ?? r.initialPageParam : Kf(r, l);
            if (a > 0 && b == null) break;
            (l = await h(l, b)), a++;
          } while (a < v);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var y, w;
            return (w = (y = t.options).persister) == null
              ? void 0
              : w.call(
                  y,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Kf(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function eS(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var de,
  bn,
  Sn,
  qr,
  Xr,
  En,
  Zr,
  Jr,
  gp,
  tS =
    ((gp = class {
      constructor(e = {}) {
        Z(this, de);
        Z(this, bn);
        Z(this, Sn);
        Z(this, qr);
        Z(this, Xr);
        Z(this, En);
        Z(this, Zr);
        Z(this, Jr);
        B(this, de, e.queryCache || new qb()),
          B(this, bn, e.mutationCache || new Jb()),
          B(this, Sn, e.defaultOptions || {}),
          B(this, qr, new Map()),
          B(this, Xr, new Map()),
          B(this, En, 0);
      }
      mount() {
        Ni(this, En)._++,
          T(this, En) === 1 &&
            (B(
              this,
              Zr,
              Zg.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), T(this, de).onFocus());
              })
            ),
            B(
              this,
              Jr,
              Ws.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), T(this, de).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Ni(this, En)._--,
          T(this, En) === 0 &&
            ((e = T(this, Zr)) == null || e.call(this),
            B(this, Zr, void 0),
            (t = T(this, Jr)) == null || t.call(this),
            B(this, Jr, void 0));
      }
      isFetching(e) {
        return T(this, de).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return T(this, bn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = T(this, de).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = T(this, de).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Su(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return T(this, de)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = T(this, de).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = _b(t, i);
        if (s !== void 0)
          return T(this, de)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Le.batch(() =>
          T(this, de)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = T(this, de).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = T(this, de);
        Le.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = T(this, de);
        return Le.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = Le.batch(() =>
            T(this, de)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(vt).catch(vt);
      }
      invalidateQueries(e, t = {}) {
        return Le.batch(
          () => (
            T(this, de)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = Le.batch(() =>
            T(this, de)
              .findAll(e)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(vt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(vt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = T(this, de).build(this, t);
        return n.isStaleByTime(Su(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(vt).catch(vt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Qf(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(vt).catch(vt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Qf(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Ws.isOnline()
          ? T(this, bn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return T(this, de);
      }
      getMutationCache() {
        return T(this, bn);
      }
      getDefaultOptions() {
        return T(this, Sn);
      }
      setDefaultOptions(e) {
        B(this, Sn, e);
      }
      setQueryDefaults(e, t) {
        T(this, qr).set(di(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...T(this, qr).values()],
          n = {};
        return (
          t.forEach((r) => {
            fi(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        T(this, Xr).set(di(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...T(this, Xr).values()],
          n = {};
        return (
          t.forEach((r) => {
            fi(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...T(this, Sn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Wc(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Qc && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...T(this, Sn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        T(this, de).clear(), T(this, bn).clear();
      }
    }),
    (de = new WeakMap()),
    (bn = new WeakMap()),
    (Sn = new WeakMap()),
    (qr = new WeakMap()),
    (Xr = new WeakMap()),
    (En = new WeakMap()),
    (Zr = new WeakMap()),
    (Jr = new WeakMap()),
    gp),
  nS = x.createContext(void 0),
  rS = ({ client: e, children: t }) => (
    x.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    c.jsx(nS.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qs() {
  return (
    (Qs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qs.apply(this, arguments)
  );
}
var Nn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Nn || (Nn = {}));
const Yf = "popstate";
function oS(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: l } = r.location;
    return ku(
      "",
      { pathname: i, search: s, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : ov(o);
  }
  return sS(t, n, null, e);
}
function We(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function rv(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function iS() {
  return Math.random().toString(36).substr(2, 8);
}
function Gf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ku(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Qs(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? El(t) : t,
      { state: n, key: (t && t.key) || r || iS() }
    )
  );
}
function ov(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function El(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function sS(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    l = Nn.Pop,
    a = null,
    u = d();
  u == null && ((u = 0), s.replaceState(Qs({}, s.state, { idx: u }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function p() {
    l = Nn.Pop;
    let w = d(),
      g = w == null ? null : w - u;
    (u = w), a && a({ action: l, location: y.location, delta: g });
  }
  function m(w, g) {
    l = Nn.Push;
    let h = ku(y.location, w, g);
    u = d() + 1;
    let v = Gf(h, u),
      b = y.createHref(h);
    try {
      s.pushState(v, "", b);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      o.location.assign(b);
    }
    i && a && a({ action: l, location: y.location, delta: 1 });
  }
  function f(w, g) {
    l = Nn.Replace;
    let h = ku(y.location, w, g);
    u = d();
    let v = Gf(h, u),
      b = y.createHref(h);
    s.replaceState(v, "", b),
      i && a && a({ action: l, location: y.location, delta: 0 });
  }
  function C(w) {
    let g = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof w == "string" ? w : ov(w);
    return (
      (h = h.replace(/ $/, "%20")),
      We(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, g)
    );
  }
  let y = {
    get action() {
      return l;
    },
    get location() {
      return e(o, s);
    },
    listen(w) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Yf, p),
        (a = w),
        () => {
          o.removeEventListener(Yf, p), (a = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: C,
    encodeLocation(w) {
      let g = C(w);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: m,
    replace: f,
    go(w) {
      return s.go(w);
    },
  };
  return y;
}
var qf;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(qf || (qf = {}));
function lS(e, t, n) {
  return n === void 0 && (n = "/"), aS(e, t, n, !1);
}
function aS(e, t, n, r) {
  let o = typeof t == "string" ? El(t) : t,
    i = lv(o.pathname || "/", n);
  if (i == null) return null;
  let s = iv(e);
  uS(s);
  let l = null;
  for (let a = 0; l == null && a < s.length; ++a) {
    let u = wS(i);
    l = yS(s[a], u, r);
  }
  return l;
}
function iv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, l) => {
    let a = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (We(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Hr([r, a.relativePath]),
      d = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (We(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      iv(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: gS(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, s) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
      else for (let a of sv(i.path)) o(i, s, a);
    }),
    t
  );
}
function sv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = sv(r.join("/")),
    l = [];
  return (
    l.push(...s.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && l.push(...s),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function uS(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : vS(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const cS = /^:[\w-]+$/,
  dS = 3,
  fS = 2,
  pS = 1,
  hS = 10,
  mS = -2,
  Xf = (e) => e === "*";
function gS(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Xf) && (r += mS),
    t && (r += fS),
    n
      .filter((o) => !Xf(o))
      .reduce((o, i) => o + (cS.test(i) ? dS : i === "" ? pS : hS), r)
  );
}
function vS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function yS(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      p = Zf(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        d
      ),
      m = a.route;
    if (
      (!p &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (p = Zf(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          d
        )),
      !p)
    )
      return null;
    Object.assign(o, p.params),
      s.push({
        params: o,
        pathname: Hr([i, p.pathname]),
        pathnameBase: CS(Hr([i, p.pathnameBase])),
        route: m,
      }),
      p.pathnameBase !== "/" && (i = Hr([i, p.pathnameBase]));
  }
  return s;
}
function Zf(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = xS(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, d, p) => {
      let { paramName: m, isOptional: f } = d;
      if (m === "*") {
        let y = l[p] || "";
        s = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const C = l[p];
      return (
        f && !C ? (u[m] = void 0) : (u[m] = (C || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function xS(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    rv(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function wS(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      rv(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function lv(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Hr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  CS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function bS(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const av = ["post", "put", "patch", "delete"];
new Set(av);
const SS = ["get", ...av];
new Set(SS);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ks() {
  return (
    (Ks = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ks.apply(this, arguments)
  );
}
const ES = x.createContext(null),
  kS = x.createContext(null),
  uv = x.createContext(null),
  kl = x.createContext(null),
  Tl = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  cv = x.createContext(null);
function Kc() {
  return x.useContext(kl) != null;
}
function dv() {
  return Kc() || We(!1), x.useContext(kl).location;
}
function TS(e, t) {
  return NS(e, t);
}
function NS(e, t, n, r) {
  Kc() || We(!1);
  let { navigator: o } = x.useContext(uv),
    { matches: i } = x.useContext(Tl),
    s = i[i.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let u = dv(),
    d;
  if (t) {
    var p;
    let w = typeof t == "string" ? El(t) : t;
    a === "/" || ((p = w.pathname) != null && p.startsWith(a)) || We(!1),
      (d = w);
  } else d = u;
  let m = d.pathname || "/",
    f = m;
  if (a !== "/") {
    let w = a.replace(/^\//, "").split("/");
    f = "/" + m.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let C = lS(e, { pathname: f }),
    y = OS(
      C &&
        C.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: Hr([
              a,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : Hr([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && y
    ? x.createElement(
        kl.Provider,
        {
          value: {
            location: Ks(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: Nn.Pop,
          },
        },
        y
      )
    : y;
}
function PS() {
  let e = IS(),
    t = bS(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: o }, n) : null,
    null
  );
}
const jS = x.createElement(PS, null);
class RS extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          Tl.Provider,
          { value: this.props.routeContext },
          x.createElement(cv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function AS(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.useContext(ES);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Tl.Provider, { value: t }, r)
  );
}
function OS(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let d = s.findIndex(
      (p) => p.route.id && (l == null ? void 0 : l[p.route.id]) !== void 0
    );
    d >= 0 || We(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
      let p = s[d];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = d),
        p.route.id)
      ) {
        let { loaderData: m, errors: f } = n,
          C =
            p.route.loader &&
            m[p.route.id] === void 0 &&
            (!f || f[p.route.id] === void 0);
        if (p.route.lazy || C) {
          (a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((d, p, m) => {
    let f,
      C = !1,
      y = null,
      w = null;
    n &&
      ((f = l && p.route.id ? l[p.route.id] : void 0),
      (y = p.route.errorElement || jS),
      a &&
        (u < 0 && m === 0
          ? ((C = !0), (w = null))
          : u === m &&
            ((C = !0), (w = p.route.hydrateFallbackElement || null))));
    let g = t.concat(s.slice(0, m + 1)),
      h = () => {
        let v;
        return (
          f
            ? (v = y)
            : C
            ? (v = w)
            : p.route.Component
            ? (v = x.createElement(p.route.Component, null))
            : p.route.element
            ? (v = p.route.element)
            : (v = d),
          x.createElement(AS, {
            match: p,
            routeContext: { outlet: d, matches: g, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? x.createElement(RS, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: f,
          children: h(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var Tu = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Tu || {});
function _S(e) {
  let t = x.useContext(kS);
  return t || We(!1), t;
}
function MS(e) {
  let t = x.useContext(Tl);
  return t || We(!1), t;
}
function LS(e) {
  let t = MS(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || We(!1), n.route.id;
}
function IS() {
  var e;
  let t = x.useContext(cv),
    n = _S(Tu.UseRouteError),
    r = LS(Tu.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function DS(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Nu(e) {
  We(!1);
}
function zS(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Nn.Pop,
    navigator: i,
    static: s = !1,
    future: l,
  } = e;
  Kc() && We(!1);
  let a = t.replace(/^\/*/, "/"),
    u = x.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: s,
        future: Ks({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, i, s]
    );
  typeof r == "string" && (r = El(r));
  let {
      pathname: d = "/",
      search: p = "",
      hash: m = "",
      state: f = null,
      key: C = "default",
    } = r,
    y = x.useMemo(() => {
      let w = lv(d, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: p, hash: m, state: f, key: C },
            navigationType: o,
          };
    }, [a, d, p, m, f, C, o]);
  return y == null
    ? null
    : x.createElement(
        uv.Provider,
        { value: u },
        x.createElement(kl.Provider, { children: n, value: y })
      );
}
function FS(e) {
  let { children: t, location: n } = e;
  return TS(Pu(t), n);
}
new Promise(() => {});
function Pu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, o) => {
      if (!x.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === x.Fragment) {
        n.push.apply(n, Pu(r.props.children, i));
        return;
      }
      r.type !== Nu && We(!1), !r.props.index || !r.props.children || We(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Pu(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const $S = "6";
try {
  window.__reactRouterVersion = $S;
} catch {}
const US = "startTransition",
  Jf = zu[US];
function BS(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = x.useRef();
  i.current == null && (i.current = oS({ window: o, v5Compat: !0 }));
  let s = i.current,
    [l, a] = x.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    d = x.useCallback(
      (p) => {
        u && Jf ? Jf(() => a(p)) : a(p);
      },
      [a, u]
    );
  return (
    x.useLayoutEffect(() => s.listen(d), [s, d]),
    x.useEffect(() => DS(r), [r]),
    x.createElement(zS, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
var ep;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ep || (ep = {}));
var tp;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(tp || (tp = {}));
var HS = typeof Element < "u",
  VS = typeof Map == "function",
  WS = typeof Set == "function",
  QS = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function fs(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!fs(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (VS && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!fs(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (WS && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (QS && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (HS && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !fs(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var KS = function (t, n) {
  try {
    return fs(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const YS = mi(KS);
var GS = function (e, t, n, r, o, i, s, l) {
    if (!e) {
      var a;
      if (t === void 0)
        a = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var u = [n, r, o, i, s, l],
          d = 0;
        (a = new Error(
          t.replace(/%s/g, function () {
            return u[d++];
          })
        )),
          (a.name = "Invariant Violation");
      }
      throw ((a.framesToPop = 1), a);
    }
  },
  qS = GS;
const np = mi(qS);
var XS = function (t, n, r, o) {
  var i = r ? r.call(o, t, n) : void 0;
  if (i !== void 0) return !!i;
  if (t === n) return !0;
  if (typeof t != "object" || !t || typeof n != "object" || !n) return !1;
  var s = Object.keys(t),
    l = Object.keys(n);
  if (s.length !== l.length) return !1;
  for (
    var a = Object.prototype.hasOwnProperty.bind(n), u = 0;
    u < s.length;
    u++
  ) {
    var d = s[u];
    if (!a(d)) return !1;
    var p = t[d],
      m = n[d];
    if (
      ((i = r ? r.call(o, p, m, d) : void 0),
      i === !1 || (i === void 0 && p !== m))
    )
      return !1;
  }
  return !0;
};
const ZS = mi(XS);
var fv = ((e) => (
    (e.BASE = "base"),
    (e.BODY = "body"),
    (e.HEAD = "head"),
    (e.HTML = "html"),
    (e.LINK = "link"),
    (e.META = "meta"),
    (e.NOSCRIPT = "noscript"),
    (e.SCRIPT = "script"),
    (e.STYLE = "style"),
    (e.TITLE = "title"),
    (e.FRAGMENT = "Symbol(react.fragment)"),
    e
  ))(fv || {}),
  ma = {
    link: { rel: ["amphtml", "canonical", "alternate"] },
    script: { type: ["application/ld+json"] },
    meta: {
      charset: "",
      name: ["generator", "robots", "description"],
      property: [
        "og:type",
        "og:title",
        "og:url",
        "og:image",
        "og:image:alt",
        "og:description",
        "twitter:url",
        "twitter:title",
        "twitter:description",
        "twitter:image",
        "twitter:image:alt",
        "twitter:card",
        "twitter:site",
      ],
    },
  },
  rp = Object.values(fv),
  Yc = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  JS = Object.entries(Yc).reduce((e, [t, n]) => ((e[n] = t), e), {}),
  bt = "data-rh",
  Vr = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags",
  },
  Wr = (e, t) => {
    for (let n = e.length - 1; n >= 0; n -= 1) {
      const r = e[n];
      if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
    }
    return null;
  },
  eE = (e) => {
    let t = Wr(e, "title");
    const n = Wr(e, Vr.TITLE_TEMPLATE);
    if ((Array.isArray(t) && (t = t.join("")), n && t))
      return n.replace(/%s/g, () => t);
    const r = Wr(e, Vr.DEFAULT_TITLE);
    return t || r || void 0;
  },
  tE = (e) => Wr(e, Vr.ON_CHANGE_CLIENT_STATE) || (() => {}),
  ga = (e, t) =>
    t
      .filter((n) => typeof n[e] < "u")
      .map((n) => n[e])
      .reduce((n, r) => ({ ...n, ...r }), {}),
  nE = (e, t) =>
    t
      .filter((n) => typeof n.base < "u")
      .map((n) => n.base)
      .reverse()
      .reduce((n, r) => {
        if (!n.length) {
          const o = Object.keys(r);
          for (let i = 0; i < o.length; i += 1) {
            const l = o[i].toLowerCase();
            if (e.indexOf(l) !== -1 && r[l]) return n.concat(r);
          }
        }
        return n;
      }, []),
  rE = (e) => console && typeof console.warn == "function" && console.warn(e),
  jo = (e, t, n) => {
    const r = {};
    return n
      .filter((o) =>
        Array.isArray(o[e])
          ? !0
          : (typeof o[e] < "u" &&
              rE(
                `Helmet: ${e} should be of type "Array". Instead found type "${typeof o[
                  e
                ]}"`
              ),
            !1)
      )
      .map((o) => o[e])
      .reverse()
      .reduce((o, i) => {
        const s = {};
        i.filter((a) => {
          let u;
          const d = Object.keys(a);
          for (let m = 0; m < d.length; m += 1) {
            const f = d[m],
              C = f.toLowerCase();
            t.indexOf(C) !== -1 &&
              !(u === "rel" && a[u].toLowerCase() === "canonical") &&
              !(C === "rel" && a[C].toLowerCase() === "stylesheet") &&
              (u = C),
              t.indexOf(f) !== -1 &&
                (f === "innerHTML" || f === "cssText" || f === "itemprop") &&
                (u = f);
          }
          if (!u || !a[u]) return !1;
          const p = a[u].toLowerCase();
          return (
            r[u] || (r[u] = {}),
            s[u] || (s[u] = {}),
            r[u][p] ? !1 : ((s[u][p] = !0), !0)
          );
        })
          .reverse()
          .forEach((a) => o.push(a));
        const l = Object.keys(s);
        for (let a = 0; a < l.length; a += 1) {
          const u = l[a],
            d = { ...r[u], ...s[u] };
          r[u] = d;
        }
        return o;
      }, [])
      .reverse();
  },
  oE = (e, t) => {
    if (Array.isArray(e) && e.length) {
      for (let n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
    }
    return !1;
  },
  iE = (e) => ({
    baseTag: nE(["href"], e),
    bodyAttributes: ga("bodyAttributes", e),
    defer: Wr(e, Vr.DEFER),
    encode: Wr(e, Vr.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: ga("htmlAttributes", e),
    linkTags: jo("link", ["rel", "href"], e),
    metaTags: jo(
      "meta",
      ["name", "charset", "http-equiv", "property", "itemprop"],
      e
    ),
    noscriptTags: jo("noscript", ["innerHTML"], e),
    onChangeClientState: tE(e),
    scriptTags: jo("script", ["src", "innerHTML"], e),
    styleTags: jo("style", ["cssText"], e),
    title: eE(e),
    titleAttributes: ga("titleAttributes", e),
    prioritizeSeoTags: oE(e, Vr.PRIORITIZE_SEO_TAGS),
  }),
  pv = (e) => (Array.isArray(e) ? e.join("") : e),
  sE = (e, t) => {
    const n = Object.keys(e);
    for (let r = 0; r < n.length; r += 1)
      if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
    return !1;
  },
  va = (e, t) =>
    Array.isArray(e)
      ? e.reduce(
          (n, r) => (sE(r, t) ? n.priority.push(r) : n.default.push(r), n),
          { priority: [], default: [] }
        )
      : { default: e, priority: [] },
  op = (e, t) => ({ ...e, [t]: void 0 }),
  lE = ["noscript", "script", "style"],
  ju = (e, t = !0) =>
    t === !1
      ? String(e)
      : String(e)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;"),
  hv = (e) =>
    Object.keys(e).reduce((t, n) => {
      const r = typeof e[n] < "u" ? `${n}="${e[n]}"` : `${n}`;
      return t ? `${t} ${r}` : r;
    }, ""),
  aE = (e, t, n, r) => {
    const o = hv(n),
      i = pv(t);
    return o
      ? `<${e} ${bt}="true" ${o}>${ju(i, r)}</${e}>`
      : `<${e} ${bt}="true">${ju(i, r)}</${e}>`;
  },
  uE = (e, t, n = !0) =>
    t.reduce((r, o) => {
      const i = o,
        s = Object.keys(i)
          .filter((u) => !(u === "innerHTML" || u === "cssText"))
          .reduce((u, d) => {
            const p = typeof i[d] > "u" ? d : `${d}="${ju(i[d], n)}"`;
            return u ? `${u} ${p}` : p;
          }, ""),
        l = i.innerHTML || i.cssText || "",
        a = lE.indexOf(e) === -1;
      return `${r}<${e} ${bt}="true" ${s}${a ? "/>" : `>${l}</${e}>`}`;
    }, ""),
  mv = (e, t = {}) =>
    Object.keys(e).reduce((n, r) => {
      const o = Yc[r];
      return (n[o || r] = e[r]), n;
    }, t),
  cE = (e, t, n) => {
    const r = { key: t, [bt]: !0 },
      o = mv(n, r);
    return [P.createElement("title", o, t)];
  },
  ps = (e, t) =>
    t.map((n, r) => {
      const o = { key: r, [bt]: !0 };
      return (
        Object.keys(n).forEach((i) => {
          const l = Yc[i] || i;
          if (l === "innerHTML" || l === "cssText") {
            const a = n.innerHTML || n.cssText;
            o.dangerouslySetInnerHTML = { __html: a };
          } else o[l] = n[i];
        }),
        P.createElement(e, o)
      );
    }),
  rt = (e, t, n = !0) => {
    switch (e) {
      case "title":
        return {
          toComponent: () => cE(e, t.title, t.titleAttributes),
          toString: () => aE(e, t.title, t.titleAttributes, n),
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return { toComponent: () => mv(t), toString: () => hv(t) };
      default:
        return { toComponent: () => ps(e, t), toString: () => uE(e, t, n) };
    }
  },
  dE = ({ metaTags: e, linkTags: t, scriptTags: n, encode: r }) => {
    const o = va(e, ma.meta),
      i = va(t, ma.link),
      s = va(n, ma.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...ps("meta", o.priority),
          ...ps("link", i.priority),
          ...ps("script", s.priority),
        ],
        toString: () =>
          `${rt("meta", o.priority, r)} ${rt("link", i.priority, r)} ${rt(
            "script",
            s.priority,
            r
          )}`,
      },
      metaTags: o.default,
      linkTags: i.default,
      scriptTags: s.default,
    };
  },
  fE = (e) => {
    const {
      baseTag: t,
      bodyAttributes: n,
      encode: r = !0,
      htmlAttributes: o,
      noscriptTags: i,
      styleTags: s,
      title: l = "",
      titleAttributes: a,
      prioritizeSeoTags: u,
    } = e;
    let { linkTags: d, metaTags: p, scriptTags: m } = e,
      f = { toComponent: () => {}, toString: () => "" };
    return (
      u &&
        ({
          priorityMethods: f,
          linkTags: d,
          metaTags: p,
          scriptTags: m,
        } = dE(e)),
      {
        priority: f,
        base: rt("base", t, r),
        bodyAttributes: rt("bodyAttributes", n, r),
        htmlAttributes: rt("htmlAttributes", o, r),
        link: rt("link", d, r),
        meta: rt("meta", p, r),
        noscript: rt("noscript", i, r),
        script: rt("script", m, r),
        style: rt("style", s, r),
        title: rt("title", { title: l, titleAttributes: a }, r),
      }
    );
  },
  Ru = fE,
  qi = [],
  gv = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  Au = class {
    constructor(e, t) {
      Ht(this, "instances", []);
      Ht(this, "canUseDOM", gv);
      Ht(this, "context");
      Ht(this, "value", {
        setHelmet: (e) => {
          this.context.helmet = e;
        },
        helmetInstances: {
          get: () => (this.canUseDOM ? qi : this.instances),
          add: (e) => {
            (this.canUseDOM ? qi : this.instances).push(e);
          },
          remove: (e) => {
            const t = (this.canUseDOM ? qi : this.instances).indexOf(e);
            (this.canUseDOM ? qi : this.instances).splice(t, 1);
          },
        },
      });
      (this.context = e),
        (this.canUseDOM = t || !1),
        t ||
          (e.helmet = Ru({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {},
          }));
    }
  },
  pE = {},
  vv = P.createContext(pE),
  or,
  yv =
    ((or = class extends x.Component {
      constructor(n) {
        super(n);
        Ht(this, "helmetData");
        this.helmetData = new Au(this.props.context || {}, or.canUseDOM);
      }
      render() {
        return P.createElement(
          vv.Provider,
          { value: this.helmetData.value },
          this.props.children
        );
      }
    }),
    Ht(or, "canUseDOM", gv),
    or),
  br = (e, t) => {
    const n = document.head || document.querySelector("head"),
      r = n.querySelectorAll(`${e}[${bt}]`),
      o = [].slice.call(r),
      i = [];
    let s;
    return (
      t &&
        t.length &&
        t.forEach((l) => {
          const a = document.createElement(e);
          for (const u in l)
            if (Object.prototype.hasOwnProperty.call(l, u))
              if (u === "innerHTML") a.innerHTML = l.innerHTML;
              else if (u === "cssText")
                a.styleSheet
                  ? (a.styleSheet.cssText = l.cssText)
                  : a.appendChild(document.createTextNode(l.cssText));
              else {
                const d = u,
                  p = typeof l[d] > "u" ? "" : l[d];
                a.setAttribute(u, p);
              }
          a.setAttribute(bt, "true"),
            o.some((u, d) => ((s = d), a.isEqualNode(u)))
              ? o.splice(s, 1)
              : i.push(a);
        }),
      o.forEach((l) => {
        var a;
        return (a = l.parentNode) == null ? void 0 : a.removeChild(l);
      }),
      i.forEach((l) => n.appendChild(l)),
      { oldTags: o, newTags: i }
    );
  },
  Ou = (e, t) => {
    const n = document.getElementsByTagName(e)[0];
    if (!n) return;
    const r = n.getAttribute(bt),
      o = r ? r.split(",") : [],
      i = [...o],
      s = Object.keys(t);
    for (const l of s) {
      const a = t[l] || "";
      n.getAttribute(l) !== a && n.setAttribute(l, a),
        o.indexOf(l) === -1 && o.push(l);
      const u = i.indexOf(l);
      u !== -1 && i.splice(u, 1);
    }
    for (let l = i.length - 1; l >= 0; l -= 1) n.removeAttribute(i[l]);
    o.length === i.length
      ? n.removeAttribute(bt)
      : n.getAttribute(bt) !== s.join(",") && n.setAttribute(bt, s.join(","));
  },
  hE = (e, t) => {
    typeof e < "u" && document.title !== e && (document.title = pv(e)),
      Ou("title", t);
  },
  ip = (e, t) => {
    const {
      baseTag: n,
      bodyAttributes: r,
      htmlAttributes: o,
      linkTags: i,
      metaTags: s,
      noscriptTags: l,
      onChangeClientState: a,
      scriptTags: u,
      styleTags: d,
      title: p,
      titleAttributes: m,
    } = e;
    Ou("body", r), Ou("html", o), hE(p, m);
    const f = {
        baseTag: br("base", n),
        linkTags: br("link", i),
        metaTags: br("meta", s),
        noscriptTags: br("noscript", l),
        scriptTags: br("script", u),
        styleTags: br("style", d),
      },
      C = {},
      y = {};
    Object.keys(f).forEach((w) => {
      const { newTags: g, oldTags: h } = f[w];
      g.length && (C[w] = g), h.length && (y[w] = f[w].oldTags);
    }),
      t && t(),
      a(e, C, y);
  },
  Ro = null,
  mE = (e) => {
    Ro && cancelAnimationFrame(Ro),
      e.defer
        ? (Ro = requestAnimationFrame(() => {
            ip(e, () => {
              Ro = null;
            });
          }))
        : (ip(e), (Ro = null));
  },
  gE = mE,
  sp = class extends x.Component {
    constructor() {
      super(...arguments);
      Ht(this, "rendered", !1);
    }
    shouldComponentUpdate(t) {
      return !ZS(t, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: t } = this.props.context;
      t.remove(this), this.emitChange();
    }
    emitChange() {
      const { helmetInstances: t, setHelmet: n } = this.props.context;
      let r = null;
      const o = iE(
        t.get().map((i) => {
          const s = { ...i.props };
          return delete s.context, s;
        })
      );
      yv.canUseDOM ? gE(o) : Ru && (r = Ru(o)), n(r);
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const { helmetInstances: t } = this.props.context;
      t.add(this), this.emitChange();
    }
    render() {
      return this.init(), null;
    }
  },
  wa,
  vE =
    ((wa = class extends x.Component {
      shouldComponentUpdate(e) {
        return !YS(op(this.props, "helmetData"), op(e, "helmetData"));
      }
      mapNestedChildrenToProps(e, t) {
        if (!t) return null;
        switch (e.type) {
          case "script":
          case "noscript":
            return { innerHTML: t };
          case "style":
            return { cssText: t };
          default:
            throw new Error(
              `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
            );
        }
      }
      flattenArrayTypeChildren(e, t, n, r) {
        return {
          ...t,
          [e.type]: [
            ...(t[e.type] || []),
            { ...n, ...this.mapNestedChildrenToProps(e, r) },
          ],
        };
      }
      mapObjectTypeChildren(e, t, n, r) {
        switch (e.type) {
          case "title":
            return { ...t, [e.type]: r, titleAttributes: { ...n } };
          case "body":
            return { ...t, bodyAttributes: { ...n } };
          case "html":
            return { ...t, htmlAttributes: { ...n } };
          default:
            return { ...t, [e.type]: { ...n } };
        }
      }
      mapArrayTypeChildrenToProps(e, t) {
        let n = { ...t };
        return (
          Object.keys(e).forEach((r) => {
            n = { ...n, [r]: e[r] };
          }),
          n
        );
      }
      warnOnInvalidChildren(e, t) {
        return (
          np(
            rp.some((n) => e.type === n),
            typeof e.type == "function"
              ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
              : `Only elements types ${rp.join(
                  ", "
                )} are allowed. Helmet does not support rendering <${
                  e.type
                }> elements. Refer to our API for more information.`
          ),
          np(
            !t ||
              typeof t == "string" ||
              (Array.isArray(t) && !t.some((n) => typeof n != "string")),
            `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`
          ),
          !0
        );
      }
      mapChildrenToProps(e, t) {
        let n = {};
        return (
          P.Children.forEach(e, (r) => {
            if (!r || !r.props) return;
            const { children: o, ...i } = r.props,
              s = Object.keys(i).reduce(
                (a, u) => ((a[JS[u] || u] = i[u]), a),
                {}
              );
            let { type: l } = r;
            switch (
              (typeof l == "symbol"
                ? (l = l.toString())
                : this.warnOnInvalidChildren(r, o),
              l)
            ) {
              case "Symbol(react.fragment)":
                t = this.mapChildrenToProps(o, t);
                break;
              case "link":
              case "meta":
              case "noscript":
              case "script":
              case "style":
                n = this.flattenArrayTypeChildren(r, n, s, o);
                break;
              default:
                t = this.mapObjectTypeChildren(r, t, s, o);
                break;
            }
          }),
          this.mapArrayTypeChildrenToProps(n, t)
        );
      }
      render() {
        const { children: e, ...t } = this.props;
        let n = { ...t },
          { helmetData: r } = t;
        if (
          (e && (n = this.mapChildrenToProps(e, n)), r && !(r instanceof Au))
        ) {
          const o = r;
          (r = new Au(o.context, !0)), delete n.helmetData;
        }
        return r
          ? P.createElement(sp, { ...n, context: r.value })
          : P.createElement(vv.Consumer, null, (o) =>
              P.createElement(sp, { ...n, context: o })
            );
      }
    }),
    Ht(wa, "defaultProps", {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    }),
    wa);
const yE = sg(
    "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] shadow-gold",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:scale-[0.98]",
          outline:
            "border border-border bg-transparent hover:bg-secondary hover:text-foreground active:scale-[0.98]",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.98]",
          ghost: "hover:bg-secondary hover:text-foreground active:scale-[0.98]",
          link: "text-primary underline-offset-4 hover:underline",
          gold: "bg-gradient-gold text-charlie-black font-semibold hover:shadow-gold-intense active:scale-[0.98] shadow-gold transition-shadow",
          goldOutline:
            "border border-charlie-gold/50 text-charlie-gold hover:bg-charlie-gold/10 hover:border-charlie-gold active:scale-[0.98]",
          glass:
            "glass-card text-foreground hover:bg-secondary/50 active:scale-[0.98]",
        },
        size: {
          default: "h-11 px-5 py-2.5",
          sm: "h-9 rounded-md px-4 text-sm",
          lg: "h-12 rounded-lg px-8 text-base",
          xl: "h-14 rounded-lg px-10 text-base font-semibold",
          icon: "h-11 w-11",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Ge = x.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const s = r ? jx : "button";
      return c.jsx(s, {
        className: Pt(yE({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    }
  );
Ge.displayName = "Button";
const Nl = "/assets/charlie-logo-D3vZGu74.png",
  ya = "0xComingSoon",
  lp = [
    { href: "#narrative", label: "Narrative" },
    { href: "#usd1", label: "USD1" },
    { href: "#receipts", label: "Receipts" },
    { href: "#token", label: "Token" },
    { href: "#community", label: "Community" },
  ];
function xE() {
  const [e, t] = x.useState(!1),
    [n, r] = x.useState(!1),
    o = () => {
      navigator.clipboard.writeText(ya),
        t(!0),
        dl({ title: "Contract address copied", description: ya }),
        setTimeout(() => t(!1), 2e3);
    };
  return c.jsxs("header", {
    className:
      "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-charlie-gold/10",
    children: [
      c.jsxs("div", {
        className:
          "container px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16 md:h-18",
        children: [
          c.jsxs("a", {
            href: "#",
            className: "flex items-center gap-3 group",
            children: [
              c.jsxs("div", {
                className: "relative",
                children: [
                  c.jsx("div", {
                    className:
                      "absolute inset-0 bg-charlie-gold/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity",
                  }),
                  c.jsx("img", {
                    src: Nl,
                    alt: "Charlie",
                    className:
                      "relative w-9 h-9 md:w-10 md:h-10 rounded-lg object-cover",
                  }),
                ],
              }),
              c.jsx("span", {
                className:
                  "font-semibold text-lg tracking-tight text-foreground",
                children: "Charlie",
              }),
            ],
          }),
          c.jsx("nav", {
            className: "hidden lg:flex items-center gap-8",
            children: lp.map((i) =>
              c.jsx(
                "a",
                {
                  href: i.href,
                  className:
                    "text-sm text-muted-foreground hover:text-charlie-gold transition-colors",
                  children: i.label,
                },
                i.href
              )
            ),
          }),
          c.jsxs("div", {
            className: "hidden lg:flex items-center gap-3",
            children: [
              c.jsxs(Ge, {
                variant: "ghost",
                size: "sm",
                onClick: o,
                className: "text-muted-foreground hover:text-charlie-gold",
                children: [
                  e
                    ? c.jsx(Fs, { className: "w-4 h-4 text-charlie-gold" })
                    : c.jsx($s, { className: "w-4 h-4" }),
                  c.jsxs("span", {
                    className: "font-mono text-xs",
                    children: [ya.slice(0, 8), "..."],
                  }),
                ],
              }),
              c.jsx(Ge, {
                variant: "gold",
                size: "sm",
                asChild: !0,
                children: c.jsxs("a", {
                  href: "https://etherscan/address/0xComingSoon",
                  children: [
                    "View Contract",
                    c.jsx(_c, { className: "w-4 h-4" }),
                  ],
                }),
              }),
            ],
          }),
          c.jsx("button", {
            className: "lg:hidden p-2 text-foreground",
            onClick: () => r(!n),
            children: n
              ? c.jsx(Mc, { className: "w-5 h-5" })
              : c.jsx(Pw, { className: "w-5 h-5" }),
          }),
        ],
      }),
      n &&
        c.jsx("div", {
          className:
            "lg:hidden bg-background/95 backdrop-blur-xl border-b border-charlie-gold/10",
          children: c.jsxs("nav", {
            className: "container py-4 flex flex-col gap-1",
            children: [
              lp.map((i) =>
                c.jsx(
                  "a",
                  {
                    href: i.href,
                    className:
                      "text-sm text-muted-foreground hover:text-charlie-gold py-3 px-2 rounded-lg hover:bg-secondary transition-colors",
                    onClick: () => r(!1),
                    children: i.label,
                  },
                  i.href
                )
              ),
              c.jsxs("div", {
                className: "flex gap-3 pt-4 mt-2 border-t border-border",
                children: [
                  c.jsxs(Ge, {
                    variant: "goldOutline",
                    size: "sm",
                    onClick: o,
                    className: "flex-1",
                    children: [
                      e
                        ? c.jsx(Fs, { className: "w-4 h-4" })
                        : c.jsx($s, { className: "w-4 h-4" }),
                      "Copy CA",
                    ],
                  }),
                  c.jsx(Ge, {
                    variant: "gold",
                    size: "sm",
                    asChild: !0,
                    className: "flex-1",
                    children: c.jsx("a", {
                      href: "https://etherscan/address/0xComingSoon",
                      children: "View Contract",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
const xa = "0xComingSoon";
function wE() {
  const [e, t] = x.useState(!1),
    [n, r] = x.useState({ x: 50, y: 50 }),
    [o, i] = x.useState(!1),
    s = x.useRef(null),
    l = () => {
      navigator.clipboard.writeText(xa),
        t(!0),
        dl({ title: "Contract address copied", description: xa }),
        setTimeout(() => t(!1), 2e3);
    },
    a = (u) => {
      if (!s.current) return;
      const d = s.current.getBoundingClientRect(),
        p = ((u.clientX - d.left) / d.width) * 100,
        m = ((u.clientY - d.top) / d.height) * 100;
      r({ x: p, y: m });
    };
  return c.jsxs("section", {
    className:
      "relative min-h-[100dvh] pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 flex items-center overflow-hidden",
    children: [
      c.jsx("div", {
        className: "absolute inset-0 bg-grid-pattern opacity-30",
      }),
      c.jsx("div", { className: "absolute inset-0 bg-gradient-glow" }),
      c.jsx("div", {
        className:
          "absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-charlie-gold/5 rounded-full blur-[120px]",
      }),
      c.jsx("div", {
        className: "container relative px-4 sm:px-6",
        children: c.jsxs("div", {
          className:
            "grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center",
          children: [
            c.jsxs("div", {
              className: "order-2 lg:order-1 text-center lg:text-left",
              children: [
                c.jsxs("div", {
                  className:
                    "inline-flex items-center gap-2 badge-futuristic mb-6 animate-fade-in",
                  children: [
                    c.jsx("span", {
                      className:
                        "w-2 h-2 rounded-full bg-charlie-gold animate-pulse",
                    }),
                    c.jsx("span", { children: "America's Dog on Ethereum" }),
                  ],
                }),
                c.jsxs("h1", {
                  className:
                    "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-4 sm:mb-6 animate-fade-in",
                  style: { animationDelay: "0.1s" },
                  children: [
                    c.jsx("span", {
                      className: "text-gradient-gold",
                      children: "Charlie",
                    }),
                    c.jsx("br", {}),
                    c.jsx("span", {
                      className: "text-foreground",
                      children: "The Future of",
                    }),
                    c.jsx("br", {}),
                    c.jsx("span", {
                      className: "text-muted-foreground",
                      children: "Meme Culture",
                    }),
                  ],
                }),
                c.jsx("p", {
                  className:
                    "text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 animate-fade-in leading-relaxed",
                  style: { animationDelay: "0.2s" },
                  children:
                    "A culturally native meme brand aligned with the future of Ethereum and Bonk. Real dog. Real receipts. Real narrative.",
                }),
                c.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6 sm:mb-8 animate-fade-in",
                  style: { animationDelay: "0.3s" },
                  children: [
                    c.jsx(Ge, {
                      variant: "gold",
                      size: "lg",
                      asChild: !0,
                      children: c.jsxs("a", {
                        href: "https://etherscan/address/0xComingSoon",
                        children: [
                          "View Contract",
                          c.jsx(_c, { className: "w-4 h-4" }),
                        ],
                      }),
                    }),
                    c.jsx(Ge, {
                      variant: "goldOutline",
                      size: "lg",
                      asChild: !0,
                      children: c.jsx("a", {
                        href: "#community",
                        children: "Join Community",
                      }),
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "animate-fade-in",
                  style: { animationDelay: "0.4s" },
                  children: [
                    c.jsxs("button", {
                      onClick: l,
                      className:
                        "ca-pill group cursor-pointer hover:shadow-gold active:scale-[0.98] transition-all inline-flex max-w-full",
                      children: [
                        c.jsx("span", {
                          className: "truncate text-xs sm:text-sm",
                          children: xa,
                        }),
                        e
                          ? c.jsx(Fs, {
                              className:
                                "w-4 h-4 flex-shrink-0 text-charlie-gold-bright",
                            })
                          : c.jsx($s, {
                              className:
                                "w-4 h-4 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity",
                            }),
                      ],
                    }),
                    c.jsx("p", {
                      className: "text-xs text-muted-foreground mt-2",
                      children: "Ethereum • Click to copy",
                    }),
                  ],
                }),
              ],
            }),
            c.jsx("div", {
              className:
                "order-1 lg:order-2 flex justify-center animate-fade-in",
              style: { animationDelay: "0.2s" },
              children: c.jsxs("div", {
                ref: s,
                className: "relative cursor-pointer",
                onMouseMove: a,
                onMouseEnter: () => i(!0),
                onMouseLeave: () => i(!1),
                children: [
                  c.jsx("div", {
                    className:
                      "absolute inset-0 rounded-full border border-charlie-gold/20 scale-125 animate-pulse",
                  }),
                  c.jsx("div", {
                    className:
                      "absolute inset-0 rounded-full border border-charlie-gold/10 scale-150",
                  }),
                  c.jsx("div", {
                    className:
                      "absolute inset-0 bg-charlie-gold/20 rounded-2xl blur-[60px] scale-110",
                  }),
                  c.jsx("div", {
                    className:
                      "absolute inset-0 rounded-2xl blur-[40px] transition-opacity duration-300 pointer-events-none",
                    style: {
                      background: `radial-gradient(circle at ${n.x}% ${
                        n.y
                      }%, hsl(45 90% 60% / ${o ? 0.6 : 0}), transparent 50%)`,
                      transform: "scale(1.3)",
                    },
                  }),
                  c.jsx("div", {
                    className:
                      "absolute inset-0 rounded-2xl transition-opacity duration-200 pointer-events-none overflow-hidden",
                    style: {
                      background: `radial-gradient(circle at ${n.x}% ${
                        n.y
                      }%, hsl(45 90% 70% / ${o ? 0.25 : 0}), transparent 40%)`,
                    },
                  }),
                  c.jsx("img", {
                    src: Nl,
                    alt: "Charlie - America's Dog",
                    className: `relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] object-cover rounded-2xl animate-float transition-all duration-300 ${
                      o ? "shadow-gold-intense scale-[1.02]" : "shadow-gold"
                    }`,
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      c.jsxs("div", {
        className:
          "absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in",
        style: { animationDelay: "0.6s" },
        children: [
          c.jsx("span", {
            className: "text-xs text-charlie-gold-muted",
            children: "Learn the narrative",
          }),
          c.jsx(ag, { className: "w-5 h-5 text-charlie-gold animate-bounce" }),
        ],
      }),
    ],
  });
}
const CE = [
  {
    icon: bw,
    title: "Who is Charlie?",
    description:
      "A real beagle with documented family lore spanning over a decade of public coverage. Not an AI mascot or fictional character — a genuine cultural touchpoint with verifiable history.",
  },
  {
    icon: Ew,
    title: "Why does it matter?",
    description:
      "In the attention economy, narrative is value. Charlie represents the intersection of American cultural identity, internet meme culture, and the emerging cryptocurrency ecosystem.",
  },
  {
    icon: jw,
    title: "What's the thesis?",
    description:
      "As Ethereum establishes itself as American digital infrastructure, culturally aligned assets will capture mindshare. Charlie is positioned as the most recognizable dog narrative in this space.",
  },
];
function bE() {
  return c.jsxs("section", {
    id: "narrative",
    className: "section-padding relative",
    children: [
      c.jsx("div", {
        className:
          "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-charlie-gold/5 rounded-full blur-[100px]",
      }),
      c.jsxs("div", {
        className: "container px-4 sm:px-6 relative",
        children: [
          c.jsxs("div", {
            className: "text-center mb-16 max-w-2xl mx-auto",
            children: [
              c.jsx("p", {
                className: "text-sm font-medium text-charlie-gold mb-3",
                children: "The Narrative",
              }),
              c.jsxs("h2", {
                className:
                  "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4",
                children: [
                  "Understanding ",
                  c.jsx("span", {
                    className: "text-gradient-gold",
                    children: "Charlie",
                  }),
                ],
              }),
              c.jsx("div", { className: "divider-premium mb-6" }),
              c.jsx("p", {
                className: "text-muted-foreground text-lg leading-relaxed",
                children:
                  "Every meaningful movement needs a story. This one is built on documented reality.",
              }),
            ],
          }),
          c.jsx("div", {
            className: "grid gap-4 sm:gap-6 md:grid-cols-3 max-w-5xl mx-auto",
            children: CE.map((e, t) =>
              c.jsxs(
                "div",
                {
                  className: "glass-card rounded-xl p-5 sm:p-8 hover-lift",
                  children: [
                    c.jsx("div", {
                      className:
                        "w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-charlie-gold/10 border border-charlie-gold/20 flex items-center justify-center mb-4 sm:mb-6",
                      children: c.jsx(e.icon, {
                        className: "w-6 h-6 sm:w-7 sm:h-7 text-charlie-gold",
                      }),
                    }),
                    c.jsx("h3", {
                      className:
                        "text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground",
                      children: e.title,
                    }),
                    c.jsx("p", {
                      className: "text-muted-foreground leading-relaxed",
                      children: e.description,
                    }),
                  ],
                },
                t
              )
            ),
          }),
        ],
      }),
    ],
  });
}
const SE = [
  {
    icon: Sw,
    title: "USD1 Liquidity Ready",
    description:
      "Designed for seamless integration with Ethereum infrastructure and cryptocurrency rails.",
  },
  {
    icon: Tw,
    title: "American Market Narrative",
    description:
      "Positioned at the intersection of patriotic sentiment and internet-native culture.",
  },
  {
    icon: Rw,
    title: "Meme + Monetary Rails",
    description:
      "Where cultural velocity meets financial infrastructure. The natural evolution of meme assets.",
  },
];
function EE() {
  return c.jsxs("section", {
    id: "usd1",
    className: "section-padding relative overflow-hidden",
    children: [
      c.jsx("div", { className: "absolute inset-0 bg-gradient-dark" }),
      c.jsx("div", {
        className:
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-charlie-gold/5 rounded-full blur-[150px]",
      }),
      c.jsxs("div", {
        className: "container px-4 sm:px-6 relative",
        children: [
          c.jsxs("div", {
            className: "text-center mb-16 max-w-2xl mx-auto",
            children: [
              c.jsx("p", {
                className: "text-sm font-medium text-charlie-gold mb-3",
                children: "Ecosystem Alignment",
              }),
              c.jsxs("h2", {
                className:
                  "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4",
                children: [
                  "Built for ",
                  c.jsx("span", {
                    className: "text-gradient-gold",
                    children: "Ethereum",
                  }),
                ],
              }),
              c.jsx("div", { className: "divider-premium mb-6" }),
              c.jsx("p", {
                className: "text-muted-foreground text-lg leading-relaxed",
                children:
                  "As the cryptocurrency ecosystem matures, culturally relevant assets will lead the narrative.",
              }),
            ],
          }),
          c.jsx("div", {
            className:
              "grid gap-4 sm:gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-10 sm:mb-16",
            children: SE.map((e, t) =>
              c.jsxs(
                "div",
                {
                  className:
                    "glass-card rounded-xl p-5 sm:p-8 hover-lift text-center",
                  children: [
                    c.jsx("div", {
                      className:
                        "w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-charlie-gold/10 border border-charlie-gold/20 flex items-center justify-center mx-auto mb-4 sm:mb-6",
                      children: c.jsx(e.icon, {
                        className: "w-6 h-6 sm:w-8 sm:h-8 text-charlie-gold",
                      }),
                    }),
                    c.jsx("h3", {
                      className:
                        "text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-foreground",
                      children: e.title,
                    }),
                    c.jsx("p", {
                      className:
                        "text-muted-foreground text-sm leading-relaxed",
                      children: e.description,
                    }),
                  ],
                },
                t
              )
            ),
          }),
          c.jsxs("div", {
            className:
              "max-w-3xl mx-auto glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 text-center border-charlie-gold/20",
            children: [
              c.jsx("div", {
                className:
                  "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-charlie-gold/10 border border-charlie-gold/30 flex items-center justify-center mx-auto mb-4 sm:mb-6",
                children: c.jsx("span", {
                  className: "text-xl sm:text-2xl text-charlie-gold",
                  children: '"',
                }),
              }),
              c.jsx("p", {
                className:
                  "text-foreground/90 text-base sm:text-lg md:text-xl leading-relaxed italic",
                children:
                  "The future of meme assets isn't just community — it's cultural infrastructure aligned with real monetary systems.",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const kE = [
    {
      id: 1,
      author: "Eric Trump",
      handle: "@EricTrump",
      url: "https://x.com/EricTrump/status/174247025985073152",
      tweetId: "174247025985073152",
      caption:
        "Proud 2 announce my best friend just joined Twitter: @charlie_trump! I'm sure my dog will have more followers than I do by the day's end..",
      date: "Feb 2012",
      featured: !0,
    },
    {
      id: 2,
      author: "Eric Trump",
      handle: "@EricTrump",
      url: "https://x.com/EricTrump/status/461904067707408385",
      tweetId: "461904067707408385",
      caption:
        "Introducing Charlie to the world - the beginning of a decade of documented moments.",
      date: "May 2014",
    },
    {
      id: 3,
      author: "Eric Trump",
      handle: "@EricTrump",
      url: "https://x.com/EricTrump/status/486910220506243072",
      tweetId: "486910220506243072",
      caption: "Charlie the beagle making his presence known on social media.",
      date: "Jul 2014",
    },
    {
      id: 4,
      author: "Eric Trump",
      handle: "@EricTrump",
      url: "https://x.com/erictrump/status/567896424538451968",
      tweetId: "567896424538451968",
      caption:
        "Charlie living his best life - a day in the life of America's favorite beagle.",
      date: "Feb 2015",
    },
    {
      id: 5,
      author: "Eric Trump",
      handle: "@EricTrump",
      url: "https://x.com/EricTrump/status/629324187920924672",
      tweetId: "629324187920924672",
      caption: "Another moment of Charlie appreciation shared with the world.",
      date: "Jul 2015",
    },
    {
      id: 6,
      author: "Lara Trump",
      handle: "@LaraLeaTrump",
      url: "https://x.com/LaraLeaTrump/status/706256679898316800",
      tweetId: "706256679898316800",
      caption: "Lara Trump shares her love for Charlie the beagle.",
      date: "Mar 2016",
    },
    {
      id: 7,
      author: "Eric Trump",
      handle: "@EricTrump",
      url: "https://x.com/EricTrump/status/1059805580817285120",
      tweetId: "1059805580817285120",
      caption: "More Charlie moments - the legacy continues.",
      date: "Nov 2018",
    },
    {
      id: 8,
      author: "Eric Trump",
      handle: "@EricTrump",
      url: "https://x.com/EricTrump/status/1277945869141258241",
      tweetId: "1277945869141258241",
      caption: "Charlie with the family - showing the bond that spans years.",
      date: "Jun 2020",
    },
    {
      id: 9,
      author: "Lara Trump",
      handle: "@LaraLeaTrump",
      url: "https://twitter.com/LaraLeaTrump/status/1642561605845106693",
      tweetId: "1642561605845106693",
      caption: "Family moments with Charlie - still going strong.",
      date: "Apr 2023",
    },
  ],
  ap = [
    {
      id: 10,
      author: "Lara Trump",
      handle: "@LaraLeaTrump",
      url: "https://www.instagram.com/reel/DROIxhTCUy3/",
      caption: "Behind the scenes with Charlie.",
      date: "2024",
      platform: "Instagram",
    },
  ];
function TE({ receipt: e }) {
  return (
    x.useState(!1),
    c.jsxs("a", {
      href: e.url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: `block glass-card rounded-xl p-4 sm:p-6 hover-lift transition-all group ${
        e.featured ? "ring-1 ring-charlie-gold/40" : ""
      }`,
      children: [
        c.jsxs("div", {
          className: "flex items-start justify-between mb-3 sm:mb-4",
          children: [
            c.jsxs("div", {
              className: "flex items-center gap-2 sm:gap-3",
              children: [
                c.jsx("div", {
                  className:
                    "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-charlie-gold/10 border border-charlie-gold/20 flex items-center justify-center flex-shrink-0",
                  children: c.jsx(kf, {
                    className: "w-4 h-4 sm:w-5 sm:h-5 text-charlie-gold",
                  }),
                }),
                c.jsxs("div", {
                  className: "min-w-0",
                  children: [
                    c.jsx("p", {
                      className:
                        "font-semibold text-foreground text-xs sm:text-sm truncate",
                      children: e.author,
                    }),
                    c.jsx("p", {
                      className: "text-xs text-muted-foreground truncate",
                      children: e.handle,
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "flex items-center gap-1 sm:gap-2 flex-shrink-0",
              children: [
                c.jsx("span", {
                  className: "text-xs text-charlie-gold-muted",
                  children: e.date,
                }),
                c.jsx(gl, {
                  className:
                    "w-3 h-3 sm:w-4 sm:h-4 text-charlie-gold opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block",
                }),
              ],
            }),
          ],
        }),
        c.jsx("p", {
          className:
            "text-foreground/90 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4",
          children: e.caption,
        }),
        c.jsxs("div", {
          className:
            "flex items-center justify-between pt-3 sm:pt-4 border-t border-border/50",
          children: [
            c.jsxs("div", {
              className:
                "flex items-center gap-1 text-xs text-muted-foreground",
              children: [
                c.jsx(kf, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
                c.jsx("span", { children: "View on X" }),
              ],
            }),
            e.featured &&
              c.jsx("span", {
                className:
                  "text-xs text-charlie-gold font-medium px-2 py-0.5 sm:py-1 bg-charlie-gold/10 rounded-full",
                children: "Featured",
              }),
          ],
        }),
      ],
    })
  );
}
function NE() {
  return c.jsxs("section", {
    id: "receipts",
    className: "section-padding relative",
    children: [
      c.jsx("div", {
        className: "absolute inset-0 bg-grid-pattern opacity-20",
      }),
      c.jsxs("div", {
        className: "container px-4 sm:px-6 relative",
        children: [
          c.jsxs("div", {
            className: "text-center mb-10 sm:mb-16 max-w-2xl mx-auto",
            children: [
              c.jsx("p", {
                className: "text-sm font-medium text-charlie-gold mb-3",
                children: "Social Proof",
              }),
              c.jsxs("h2", {
                className:
                  "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4",
                children: [
                  "Public ",
                  c.jsx("span", {
                    className: "text-gradient-gold",
                    children: "Receipts",
                  }),
                ],
              }),
              c.jsx("div", { className: "divider-premium mb-6" }),
              c.jsx("p", {
                className:
                  "text-muted-foreground text-base sm:text-lg leading-relaxed",
                children:
                  "Verified public posts spanning over a decade. Click any card to view the original.",
              }),
            ],
          }),
          c.jsx("div", {
            className:
              "columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-8 sm:mb-12",
            children: kE.map((e) =>
              c.jsx(
                "div",
                {
                  className: "mb-4 sm:mb-6 break-inside-avoid",
                  children: c.jsx(TE, { receipt: e }),
                },
                e.id
              )
            ),
          }),
          ap.length > 0 &&
            c.jsxs("div", {
              className: "max-w-md mx-auto",
              children: [
                c.jsx("h3", {
                  className:
                    "text-center text-lg font-medium text-foreground mb-6",
                  children: "More Receipts",
                }),
                c.jsx("div", {
                  className: "grid gap-4",
                  children: ap.map((e) =>
                    c.jsxs(
                      "a",
                      {
                        href: e.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "group glass-card rounded-xl p-5 hover-lift flex items-center justify-between",
                        children: [
                          c.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              c.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center",
                                children: c.jsx("span", {
                                  className: "text-white text-xs font-bold",
                                  children: "IG",
                                }),
                              }),
                              c.jsxs("div", {
                                children: [
                                  c.jsx("p", {
                                    className:
                                      "font-medium text-sm text-foreground",
                                    children: e.author,
                                  }),
                                  c.jsxs("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: [e.date, " • ", e.platform],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c.jsx(gl, {
                            className:
                              "w-4 h-4 text-charlie-gold opacity-0 group-hover:opacity-100 transition-opacity",
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
              ],
            }),
          c.jsx("p", {
            className: "text-center text-muted-foreground mt-12 text-sm",
            children: "All links direct to original public posts",
          }),
        ],
      }),
    ],
  });
}
const PE = "/assets/charlie-robe-BNsH7ETL.jpeg",
  jE = "/assets/charlie-barkbox-v4yHzdty.png",
  RE = "/assets/charlie-bed-CmgMnG4K.jpeg",
  AE = "/assets/charlie-trump-shirt-BrZiDef_.jpeg",
  OE = "/assets/charlie-lara-NU87Rwny.jpeg",
  _E = "/assets/charlie-christmas-CchQL9vC.jpeg",
  ME = "/assets/charlie-sleeping-z-Cw--9M.jpeg",
  LE = "/assets/charlie-maga-hat-B8v4CWRF.jpeg",
  IE = "/assets/charlie-yawning-s7BSGWpS.jpeg",
  DE = "/assets/charlie-eric-Do-f0fmR.jpeg",
  zE = [
    { src: Nl, caption: "Official Charlie", alt: "Charlie mascot" },
    { src: DE, caption: "With Eric", alt: "Charlie with Eric Trump" },
    { src: OE, caption: "With Lara", alt: "Charlie with Lara Trump" },
    { src: AE, caption: "Campaign ready", alt: "Charlie in Trump shirt" },
    { src: LE, caption: "Patriotic", alt: "Charlie wearing hat" },
    { src: PE, caption: "Luxury life", alt: "Charlie in robe" },
    { src: ME, caption: "Resting", alt: "Charlie sleeping" },
    { src: IE, caption: "Morning energy", alt: "Charlie yawning" },
    { src: _E, caption: "Holiday season", alt: "Charlie at Christmas" },
    { src: RE, caption: "Relaxed", alt: "Charlie on bed" },
    { src: jE, caption: "Social star", alt: "Charlie featured" },
  ];
function FE() {
  const [e, t] = x.useState(null);
  return c.jsxs("section", {
    id: "gallery",
    className: "section-padding relative",
    children: [
      c.jsx("div", {
        className: "absolute inset-0 bg-grid-pattern opacity-20",
      }),
      c.jsxs("div", {
        className: "container px-4 sm:px-6 relative",
        children: [
          c.jsxs("div", {
            className: "text-center mb-10 sm:mb-16 max-w-2xl mx-auto",
            children: [
              c.jsx("p", {
                className: "text-sm font-medium text-charlie-gold mb-3",
                children: "Gallery",
              }),
              c.jsxs("h2", {
                className:
                  "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4",
                children: [
                  "Charlie ",
                  c.jsx("span", {
                    className: "text-gradient-gold",
                    children: "Through the Years",
                  }),
                ],
              }),
              c.jsx("div", { className: "divider-premium mb-6" }),
              c.jsx("p", {
                className:
                  "text-muted-foreground text-base sm:text-lg leading-relaxed",
                children: "Over a decade of documented moments.",
              }),
            ],
          }),
          c.jsx("div", {
            className:
              "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto mb-8 sm:mb-12",
            children: zE.map((n, r) =>
              c.jsxs(
                "button",
                {
                  onClick: () => t(n),
                  className:
                    "relative aspect-square rounded-xl overflow-hidden group cursor-pointer glass-card hover-lift",
                  children: [
                    c.jsx("img", {
                      src: n.src,
                      alt: n.alt,
                      loading: "lazy",
                      className:
                        "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                    }),
                    c.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-charlie-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4",
                      children: c.jsx("p", {
                        className: "text-foreground text-sm font-medium",
                        children: n.caption,
                      }),
                    }),
                  ],
                },
                r
              )
            ),
          }),
          c.jsx("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: c.jsx(Ge, {
              variant: "gold",
              size: "lg",
              asChild: !0,
              children: c.jsxs("a", {
                href: "https://x.com/TrumpCharlieDog",
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                  c.jsx(gl, { className: "w-4 h-4" }),
                  "Follow @TrumpCharlieDog",
                ],
              }),
            }),
          }),
        ],
      }),
      e &&
        c.jsxs("div", {
          className:
            "fixed inset-0 z-50 bg-charlie-black/95 backdrop-blur-xl flex items-center justify-center p-4",
          onClick: () => t(null),
          children: [
            c.jsx("button", {
              className:
                "absolute top-4 right-4 w-12 h-12 rounded-full glass-card border-charlie-gold/30 text-foreground flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-10",
              onClick: () => t(null),
              children: c.jsx(Mc, { className: "w-6 h-6" }),
            }),
            c.jsxs("div", {
              className: "max-w-4xl max-h-[85vh] overflow-hidden rounded-xl",
              onClick: (n) => n.stopPropagation(),
              children: [
                c.jsx("img", {
                  src: e.src,
                  alt: e.caption,
                  className: "max-w-full max-h-[75vh] object-contain",
                }),
                c.jsx("p", {
                  className:
                    "text-foreground text-center mt-4 text-lg font-medium",
                  children: e.caption,
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
const Wo = "0xComingSoon",
  $E = [
    {
      label: "Uniswap",
      url: `https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon`,
    },
    {
      label: "DexScreener",
      url: "https://dexscreener.com/ethereum/0xComingSoon",
    },
    {
      label: "Dextools",
      url: "https://www.dextools.io/app/en/token/0xComingSoon",
    },
  ];
function UE() {
  const [e, t] = x.useState(!1),
    n = () => {
      navigator.clipboard.writeText(Wo),
        t(!0),
        dl({ title: "Contract address copied", description: Wo }),
        setTimeout(() => t(!1), 2e3);
    };
  return c.jsxs("section", {
    id: "token",
    className: "section-padding relative overflow-hidden",
    children: [
      c.jsx("div", { className: "absolute inset-0 bg-gradient-dark" }),
      c.jsx("div", {
        className:
          "absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-charlie-gold/5 rounded-full blur-[120px]",
      }),
      c.jsxs("div", {
        className: "container px-4 sm:px-6 relative",
        children: [
          c.jsxs("div", {
            className: "text-center mb-16 max-w-2xl mx-auto",
            children: [
              c.jsx("p", {
                className: "text-sm font-medium text-charlie-gold mb-3",
                children: "Token Details",
              }),
              c.jsxs("h2", {
                className:
                  "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4",
                children: [
                  "Token ",
                  c.jsx("span", {
                    className: "text-gradient-gold",
                    children: "Information",
                  }),
                ],
              }),
              c.jsx("div", { className: "divider-premium mb-6" }),
            ],
          }),
          c.jsxs("div", {
            className: "max-w-2xl mx-auto",
            children: [
              c.jsxs("div", {
                className:
                  "glass-card rounded-xl sm:rounded-2xl overflow-hidden",
                children: [
                  c.jsxs("div", {
                    className:
                      "flex items-center justify-between p-4 sm:p-5 border-b border-charlie-gold/10",
                    children: [
                      c.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Chain",
                      }),
                      c.jsxs("span", {
                        className:
                          "font-medium flex items-center gap-2 text-foreground",
                        children: [
                          "Ethereum",
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "flex items-center justify-between p-4 sm:p-5 border-b border-charlie-gold/10",
                    children: [
                      c.jsx("span", {
                        className: "text-muted-foreground text-sm sm:text-base",
                        children: "Ticker",
                      }),
                      c.jsx("span", {
                        className:
                          "font-bold text-base sm:text-lg text-charlie-gold",
                        children: "$CHARLIE",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "p-4 sm:p-5 border-b border-charlie-gold/10",
                    children: [
                      c.jsxs("div", {
                        className:
                          "flex items-center justify-between mb-2 sm:mb-3",
                        children: [
                          c.jsx("span", {
                            className: "text-muted-foreground",
                            children: "Contract Address",
                          }),
                          c.jsxs("button", {
                            onClick: n,
                            className:
                              "text-charlie-gold hover:text-charlie-gold-bright transition-colors flex items-center gap-1.5 text-sm",
                            children: [
                              e
                                ? c.jsx(Fs, { className: "w-4 h-4" })
                                : c.jsx($s, { className: "w-4 h-4" }),
                              e ? "Copied" : "Copy",
                            ],
                          }),
                        ],
                      }),
                      c.jsx("code", {
                        className:
                          "text-xs sm:text-sm text-charlie-gold break-all font-mono block bg-charlie-gold/5 border border-charlie-gold/20 rounded-lg p-2 sm:p-3",
                        children: Wo,
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "p-4 sm:p-5",
                    children: [
                      c.jsx("span", {
                        className:
                          "text-muted-foreground text-sm block mb-2 sm:mb-3",
                        children: "Quick Links",
                      }),
                      c.jsx("div", {
                        className:
                          "grid grid-cols-2 gap-2 sm:flex sm:flex-wrap",
                        children: $E.map((r, o) =>
                          c.jsx(
                            Ge,
                            {
                              variant: "goldOutline",
                              size: "sm",
                              asChild: !0,
                              className: "text-sm",
                              children: c.jsxs("a", {
                                href: r.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                  r.label,
                                  c.jsx(gl, { className: "w-3.5 h-3.5" }),
                                ],
                              }),
                            },
                            o
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsx("p", {
                className: "text-center text-muted-foreground text-sm mt-8",
                children:
                  "Always verify the contract address before transacting",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function BE() {
  return c.jsxs("section", {
    id: "community",
    className: "section-padding relative overflow-hidden",
    children: [
      c.jsx("div", { className: "absolute inset-0 bg-gradient-dark" }),
      c.jsx("div", {
        className:
          "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-charlie-gold/10 rounded-full blur-[150px]",
      }),
      c.jsx("div", {
        className: "absolute inset-0 bg-grid-pattern opacity-20",
      }),
      c.jsx("div", {
        className: "container px-4 sm:px-6 relative",
        children: c.jsxs("div", {
          className: "text-center max-w-2xl mx-auto",
          children: [
            c.jsx("p", {
              className: "text-sm font-medium text-charlie-gold mb-3",
              children: "Join the Community",
            }),
            c.jsxs("h2", {
              className:
                "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4",
              children: [
                "Connect ",
                c.jsx("span", {
                  className: "text-gradient-gold",
                  children: "With Us",
                }),
              ],
            }),
            c.jsx("div", { className: "divider-premium mb-6" }),
            c.jsx("p", {
              className:
                "text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed",
              children:
                "Join a community of builders, investors, and meme enthusiasts aligned with the Charlie narrative.",
            }),
            c.jsxs("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [
                c.jsx(Ge, {
                  variant: "gold",
                  size: "lg",
                  asChild: !0,
                  children: c.jsxs("a", {
                    href: "https://x.com/TrumpCharlieDog",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      "Follow on X",
                      c.jsx(_c, { className: "w-4 h-4" }),
                    ],
                  }),
                }),
                c.jsx(Ge, {
                  variant: "goldOutline",
                  size: "lg",
                  asChild: !0,
                  children: c.jsx("a", {
                    href: "https://t.me/charlietrumpdog",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Join Telegram",
                  }),
                })
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
var Pl = "Collapsible",
  [HE, xv] = po(Pl),
  [VE, Gc] = HE(Pl),
  wv = x.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        open: r,
        defaultOpen: o,
        disabled: i,
        onOpenChange: s,
        ...l
      } = e,
      [a, u] = pl({ prop: r, defaultProp: o ?? !1, onChange: s, caller: Pl });
    return c.jsx(VE, {
      scope: n,
      disabled: i,
      contentId: xg(),
      open: a,
      onOpenToggle: x.useCallback(() => u((d) => !d), [u]),
      children: c.jsx(xe.div, {
        "data-state": Xc(a),
        "data-disabled": i ? "" : void 0,
        ...l,
        ref: t,
      }),
    });
  });
wv.displayName = Pl;
var Cv = "CollapsibleTrigger",
  bv = x.forwardRef((e, t) => {
    const { __scopeCollapsible: n, ...r } = e,
      o = Gc(Cv, n);
    return c.jsx(xe.button, {
      type: "button",
      "aria-controls": o.contentId,
      "aria-expanded": o.open || !1,
      "data-state": Xc(o.open),
      "data-disabled": o.disabled ? "" : void 0,
      disabled: o.disabled,
      ...r,
      ref: t,
      onClick: he(e.onClick, o.onOpenToggle),
    });
  });
bv.displayName = Cv;
var qc = "CollapsibleContent",
  Sv = x.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Gc(qc, e.__scopeCollapsible);
    return c.jsx(fl, {
      present: n || o.open,
      children: ({ present: i }) => c.jsx(WE, { ...r, ref: t, present: i }),
    });
  });
Sv.displayName = qc;
var WE = x.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...i } = e,
    s = Gc(qc, n),
    [l, a] = x.useState(r),
    u = x.useRef(null),
    d = Je(t, u),
    p = x.useRef(0),
    m = p.current,
    f = x.useRef(0),
    C = f.current,
    y = s.open || l,
    w = x.useRef(y),
    g = x.useRef(void 0);
  return (
    x.useEffect(() => {
      const h = requestAnimationFrame(() => (w.current = !1));
      return () => cancelAnimationFrame(h);
    }, []),
    $t(() => {
      const h = u.current;
      if (h) {
        (g.current = g.current || {
          transitionDuration: h.style.transitionDuration,
          animationName: h.style.animationName,
        }),
          (h.style.transitionDuration = "0s"),
          (h.style.animationName = "none");
        const v = h.getBoundingClientRect();
        (p.current = v.height),
          (f.current = v.width),
          w.current ||
            ((h.style.transitionDuration = g.current.transitionDuration),
            (h.style.animationName = g.current.animationName)),
          a(r);
      }
    }, [s.open, r]),
    c.jsx(xe.div, {
      "data-state": Xc(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !y,
      ...i,
      ref: d,
      style: {
        "--radix-collapsible-content-height": m ? `${m}px` : void 0,
        "--radix-collapsible-content-width": C ? `${C}px` : void 0,
        ...e.style,
      },
      children: y && o,
    })
  );
});
function Xc(e) {
  return e ? "open" : "closed";
}
var QE = wv,
  KE = bv,
  YE = Sv,
  GE = x.createContext(void 0);
function qE(e) {
  const t = x.useContext(GE);
  return e || t || "ltr";
}
var jt = "Accordion",
  XE = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [Zc, ZE, JE] = _m(jt),
  [jl, E2] = po(jt, [JE, xv]),
  Jc = xv(),
  Ev = P.forwardRef((e, t) => {
    const { type: n, ...r } = e,
      o = r,
      i = r;
    return c.jsx(Zc.Provider, {
      scope: e.__scopeAccordion,
      children:
        n === "multiple"
          ? c.jsx(r2, { ...i, ref: t })
          : c.jsx(n2, { ...o, ref: t }),
    });
  });
Ev.displayName = jt;
var [kv, e2] = jl(jt),
  [Tv, t2] = jl(jt, { collapsible: !1 }),
  n2 = P.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onValueChange: o = () => {},
        collapsible: i = !1,
        ...s
      } = e,
      [l, a] = pl({ prop: n, defaultProp: r ?? "", onChange: o, caller: jt });
    return c.jsx(kv, {
      scope: e.__scopeAccordion,
      value: P.useMemo(() => (l ? [l] : []), [l]),
      onItemOpen: a,
      onItemClose: P.useCallback(() => i && a(""), [i, a]),
      children: c.jsx(Tv, {
        scope: e.__scopeAccordion,
        collapsible: i,
        children: c.jsx(Nv, { ...s, ref: t }),
      }),
    });
  }),
  r2 = P.forwardRef((e, t) => {
    const { value: n, defaultValue: r, onValueChange: o = () => {}, ...i } = e,
      [s, l] = pl({ prop: n, defaultProp: r ?? [], onChange: o, caller: jt }),
      a = P.useCallback((d) => l((p = []) => [...p, d]), [l]),
      u = P.useCallback((d) => l((p = []) => p.filter((m) => m !== d)), [l]);
    return c.jsx(kv, {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: a,
      onItemClose: u,
      children: c.jsx(Tv, {
        scope: e.__scopeAccordion,
        collapsible: !0,
        children: c.jsx(Nv, { ...i, ref: t }),
      }),
    });
  }),
  [o2, Rl] = jl(jt),
  Nv = P.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        disabled: r,
        dir: o,
        orientation: i = "vertical",
        ...s
      } = e,
      l = P.useRef(null),
      a = Je(l, t),
      u = ZE(n),
      p = qE(o) === "ltr",
      m = he(e.onKeyDown, (f) => {
        var R;
        if (!XE.includes(f.key)) return;
        const C = f.target,
          y = u().filter((_) => {
            var O;
            return !((O = _.ref.current) != null && O.disabled);
          }),
          w = y.findIndex((_) => _.ref.current === C),
          g = y.length;
        if (w === -1) return;
        f.preventDefault();
        let h = w;
        const v = 0,
          b = g - 1,
          S = () => {
            (h = w + 1), h > b && (h = v);
          },
          E = () => {
            (h = w - 1), h < v && (h = b);
          };
        switch (f.key) {
          case "Home":
            h = v;
            break;
          case "End":
            h = b;
            break;
          case "ArrowRight":
            i === "horizontal" && (p ? S() : E());
            break;
          case "ArrowDown":
            i === "vertical" && S();
            break;
          case "ArrowLeft":
            i === "horizontal" && (p ? E() : S());
            break;
          case "ArrowUp":
            i === "vertical" && E();
            break;
        }
        const k = h % g;
        (R = y[k].ref.current) == null || R.focus();
      });
    return c.jsx(o2, {
      scope: n,
      disabled: r,
      direction: o,
      orientation: i,
      children: c.jsx(Zc.Slot, {
        scope: n,
        children: c.jsx(xe.div, {
          ...s,
          "data-orientation": i,
          ref: a,
          onKeyDown: r ? void 0 : m,
        }),
      }),
    });
  }),
  Ys = "AccordionItem",
  [i2, ed] = jl(Ys),
  Pv = P.forwardRef((e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e,
      i = Rl(Ys, n),
      s = e2(Ys, n),
      l = Jc(n),
      a = xg(),
      u = (r && s.value.includes(r)) || !1,
      d = i.disabled || e.disabled;
    return c.jsx(i2, {
      scope: n,
      open: u,
      disabled: d,
      triggerId: a,
      children: c.jsx(QE, {
        "data-orientation": i.orientation,
        "data-state": Mv(u),
        ...l,
        ...o,
        ref: t,
        disabled: d,
        open: u,
        onOpenChange: (p) => {
          p ? s.onItemOpen(r) : s.onItemClose(r);
        },
      }),
    });
  });
Pv.displayName = Ys;
var jv = "AccordionHeader",
  Rv = P.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...r } = e,
      o = Rl(jt, n),
      i = ed(jv, n);
    return c.jsx(xe.h3, {
      "data-orientation": o.orientation,
      "data-state": Mv(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      ...r,
      ref: t,
    });
  });
Rv.displayName = jv;
var _u = "AccordionTrigger",
  Av = P.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...r } = e,
      o = Rl(jt, n),
      i = ed(_u, n),
      s = t2(_u, n),
      l = Jc(n);
    return c.jsx(Zc.ItemSlot, {
      scope: n,
      children: c.jsx(KE, {
        "aria-disabled": (i.open && !s.collapsible) || void 0,
        "data-orientation": o.orientation,
        id: i.triggerId,
        ...l,
        ...r,
        ref: t,
      }),
    });
  });
Av.displayName = _u;
var Ov = "AccordionContent",
  _v = P.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...r } = e,
      o = Rl(jt, n),
      i = ed(Ov, n),
      s = Jc(n);
    return c.jsx(YE, {
      role: "region",
      "aria-labelledby": i.triggerId,
      "data-orientation": o.orientation,
      ...s,
      ...r,
      ref: t,
      style: {
        "--radix-accordion-content-height":
          "var(--radix-collapsible-content-height)",
        "--radix-accordion-content-width":
          "var(--radix-collapsible-content-width)",
        ...e.style,
      },
    });
  });
_v.displayName = Ov;
function Mv(e) {
  return e ? "open" : "closed";
}
var s2 = Ev,
  l2 = Pv,
  a2 = Rv,
  Lv = Av,
  Iv = _v;
const u2 = s2,
  Dv = x.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(l2, { ref: n, className: Pt("border-b", e), ...t })
  );
Dv.displayName = "AccordionItem";
const zv = x.forwardRef(({ className: e, children: t, ...n }, r) =>
  c.jsx(a2, {
    className: "flex",
    children: c.jsxs(Lv, {
      ref: r,
      className: Pt(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...n,
      children: [
        t,
        c.jsx(ag, {
          className: "h-4 w-4 shrink-0 transition-transform duration-200",
        }),
      ],
    }),
  })
);
zv.displayName = Lv.displayName;
const Fv = x.forwardRef(({ className: e, children: t, ...n }, r) =>
  c.jsx(Iv, {
    ref: r,
    className:
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: c.jsx("div", { className: Pt("pb-4 pt-0", e), children: t }),
  })
);
Fv.displayName = Iv.displayName;
const c2 = [
  {
    question: "Is this officially affiliated or endorsed?",
    answer:
      "No. $CHARLIE is a community meme coin inspired by public pop-culture dog lore. It is not affiliated with, endorsed by, or connected to any public figure, political organization, or entity.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. $CHARLIE is a meme coin for entertainment and community purposes only. Nothing on this website constitutes financial advice. Always conduct your own research and never invest more than you can afford to lose.",
  },
  {
    question: "Where are the official community links?",
    answer:
      "Twitter/X: @TrumpCharlieDog | Telegram: t.me/charlietrumpdog",
  },
  {
    question: "What blockchain is $CHARLIE built on?",
    answer: "Ethereum. Fast transactions, low fees, and robust infrastructure.",
  },
  {
    question: "How do I verify the contract address?",
    answer:
      "Always use the official contract address from this website or our verified social channels: 0xComingSoon",
  },
];
function d2() {
  return c.jsxs("section", {
    id: "faq",
    className: "section-padding relative overflow-hidden",
    children: [
      c.jsx("div", { className: "absolute inset-0 bg-gradient-dark" }),
      c.jsx("div", {
        className:
          "absolute top-1/2 left-0 w-[400px] h-[400px] bg-charlie-gold/5 rounded-full blur-[120px]",
      }),
      c.jsxs("div", {
        className: "container px-4 sm:px-6 relative",
        children: [
          c.jsxs("div", {
            className: "text-center mb-16 max-w-2xl mx-auto",
            children: [
              c.jsx("p", {
                className: "text-sm font-medium text-charlie-gold mb-3",
                children: "FAQ",
              }),
              c.jsxs("h2", {
                className:
                  "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4",
                children: [
                  "Frequently Asked ",
                  c.jsx("span", {
                    className: "text-gradient-gold",
                    children: "Questions",
                  }),
                ],
              }),
              c.jsx("div", { className: "divider-premium mb-6" }),
            ],
          }),
          c.jsx("div", {
            className: "max-w-2xl mx-auto",
            children: c.jsx(u2, {
              type: "single",
              collapsible: !0,
              className: "space-y-3",
              children: c2.map((e, t) =>
                c.jsxs(
                  Dv,
                  {
                    value: `item-${t}`,
                    className:
                      "glass-card rounded-xl px-6 overflow-hidden border-charlie-gold/10",
                    children: [
                      c.jsx(zv, {
                        className:
                          "text-left font-medium hover:text-charlie-gold transition-colors py-5 text-base text-foreground",
                        children: e.question,
                      }),
                      c.jsx(Fv, {
                        className: "text-muted-foreground pb-5 leading-relaxed",
                        children: e.answer,
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
          }),
        ],
      }),
    ],
  });
}
function f2() {
  return c.jsxs("footer", {
    className: "py-16 border-t border-charlie-gold/10 bg-background relative",
    children: [
      c.jsx("div", {
        className:
          "absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-charlie-gold/5 rounded-full blur-[100px]",
      }),
      c.jsxs("div", {
        className: "container px-4 sm:px-6 relative",
        children: [
          c.jsxs("div", {
            className: "text-center mb-12",
            children: [
              c.jsxs("div", {
                className: "flex items-center justify-center gap-3 mb-6",
                children: [
                  c.jsxs("div", {
                    className: "relative",
                    children: [
                      c.jsx("div", {
                        className:
                          "absolute inset-0 bg-charlie-gold/20 rounded-lg blur-lg",
                      }),
                      c.jsx("img", {
                        src: Nl,
                        alt: "Charlie",
                        className: "relative w-10 h-10 rounded-lg object-cover",
                      }),
                    ],
                  }),
                  c.jsx("span", {
                    className: "font-semibold text-lg text-foreground",
                    children: "Charlie",
                  }),
                ],
              }),
              c.jsx("div", {
                className:
                  "max-w-2xl mx-auto glass-card rounded-xl p-6 mb-8 border-charlie-gold/10",
                children: c.jsxs("p", {
                  className: "text-muted-foreground text-sm leading-relaxed",
                  children: [
                    c.jsx("strong", {
                      className: "text-charlie-gold",
                      children: "Disclaimer:",
                    }),
                    " $CHARLIE is a meme coin for entertainment and community purposes only. It is not affiliated with, endorsed by, or connected to any public figure, political organization, or entity. This is not financial advice. Cryptocurrency investments carry significant risk. Always conduct your own research and never invest more than you can afford to lose.",
                  ],
                }),
              }),
            ],
          }),
          c.jsxs("div", {
            className:
              "flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-8",
            children: [
              c.jsx("a", {
                href: "https://x.com/TrumpCharlieDog",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-charlie-gold transition-colors",
                children: "Twitter/X",
              }),
              c.jsx("a", {
                href: "https://t.me/charlietrumpdog",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-charlie-gold transition-colors",
                children: "Telegram",
              })
            ],
          }),
          c.jsxs("p", {
            className: "text-center text-xs text-muted-foreground",
            children: [
              "© ",
              new Date().getFullYear(),
              " Charlie Community. All rights reserved. Built on Ethereum.",
            ],
          }),
        ],
      }),
    ],
  });
}
function p2() {
  const e = x.useRef(null);
  return (
    x.useEffect(() => {
      const t = e.current;
      if (!t) return;
      const n = t.getContext("2d");
      if (!n) return;
      let r,
        o = [];
      const i = () => {
          (t.width = window.innerWidth), (t.height = window.innerHeight);
        },
        s = () => {
          const a = Math.floor((t.width * t.height) / 15e3);
          o = [];
          for (let u = 0; u < a; u++)
            o.push({
              x: Math.random() * t.width,
              y: Math.random() * t.height,
              size: Math.random() * 2 + 0.5,
              speedX: (Math.random() - 0.5) * 0.3,
              speedY: (Math.random() - 0.5) * 0.3,
              opacity: Math.random() * 0.5 + 0.2,
              pulse: Math.random() * Math.PI * 2,
              pulseSpeed: Math.random() * 0.02 + 0.01,
            });
        },
        l = () => {
          n.clearRect(0, 0, t.width, t.height),
            o.forEach((a) => {
              (a.x += a.speedX),
                (a.y += a.speedY),
                (a.pulse += a.pulseSpeed),
                a.x < 0 && (a.x = t.width),
                a.x > t.width && (a.x = 0),
                a.y < 0 && (a.y = t.height),
                a.y > t.height && (a.y = 0);
              const u = a.opacity * (0.5 + 0.5 * Math.sin(a.pulse)),
                d = n.createRadialGradient(a.x, a.y, 0, a.x, a.y, a.size * 2);
              d.addColorStop(0, `hsla(45, 80%, 55%, ${u})`),
                d.addColorStop(1, "hsla(45, 80%, 55%, 0)"),
                n.beginPath(),
                n.arc(a.x, a.y, a.size * 2, 0, Math.PI * 2),
                (n.fillStyle = d),
                n.fill(),
                n.beginPath(),
                n.arc(a.x, a.y, a.size * 0.5, 0, Math.PI * 2),
                (n.fillStyle = `hsla(45, 90%, 70%, ${u * 0.8})`),
                n.fill();
            }),
            (r = requestAnimationFrame(l));
        };
      return (
        i(),
        s(),
        l(),
        window.addEventListener("resize", () => {
          i(), s();
        }),
        () => {
          cancelAnimationFrame(r), window.removeEventListener("resize", i);
        }
      );
    }, []),
    c.jsx("canvas", {
      ref: e,
      className: "fixed inset-0 pointer-events-none z-0",
      style: { opacity: 0.6 },
    })
  );
}
const h2 = () =>
    c.jsxs(c.Fragment, {
      children: [
        c.jsxs(vE, {
          children: [
            c.jsx("title", { children: "Charlie | America's Dog on Ethereum" }),
            c.jsx("meta", {
              name: "description",
              content:
                "Charlie is a culturally native meme brand aligned with the future of cryptocurrencys. Real dog lore, public receipts, positioned for Ethereum.",
            }),
            c.jsx("meta", {
              property: "og:title",
              content: "Charlie | America's Dog on Ethereum",
            }),
            c.jsx("meta", {
              property: "og:description",
              content:
                "A culturally native meme brand aligned with the future of cryptocurrencys.",
            }),
            c.jsx("meta", { property: "og:image", content: "/charlie-og.jpg" }),
            c.jsx("meta", { property: "og:type", content: "website" }),
            c.jsx("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            c.jsx("meta", {
              name: "twitter:title",
              content: "Charlie | America's Dog on Ethereum",
            }),
            c.jsx("meta", {
              name: "twitter:description",
              content: "Real dog lore. Public receipts. Positioned for Ethereum.",
            }),
            c.jsx("link", {
              rel: "canonical",
              href: "https://charlietrumpdog.com",
            }),
          ],
        }),
        c.jsx(p2, {}),
        c.jsx(xE, {}),
        c.jsxs("main", {
          className: "relative z-10",
          children: [
            c.jsx(wE, {}),
            c.jsx(bE, {}),
            c.jsx(EE, {}),
            c.jsx(NE, {}),
            c.jsx(FE, {}),
            c.jsx(UE, {}),
            c.jsx(BE, {}),
            c.jsx(d2, {}),
          ],
        }),
        c.jsx(f2, {}),
      ],
    }),
  m2 = () => {
    const e = dv();
    return (
      x.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      c.jsx("div", {
        className:
          "flex min-h-screen items-center justify-center bg-background",
        children: c.jsxs("div", {
          className: "text-center",
          children: [
            c.jsx("h1", {
              className: "font-display text-8xl text-foreground mb-4",
              children: "404",
            }),
            c.jsx("p", {
              className: "mb-6 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            c.jsx(Ge, {
              variant: "gold",
              size: "lg",
              asChild: !0,
              children: c.jsxs("a", {
                href: "/",
                children: [
                  c.jsx(kw, { className: "w-5 h-5" }),
                  "Return to Home",
                ],
              }),
            }),
          ],
        }),
      })
    );
  },
  g2 = new tS(),
  v2 = () =>
    c.jsx(yv, {
      children: c.jsx(rS, {
        client: g2,
        children: c.jsxs(Ab, {
          children: [
            c.jsx(f1, {}),
            c.jsx(V1, {}),
            c.jsx(BS, {
              children: c.jsxs(FS, {
                children: [
                  c.jsx(Nu, { path: "/", element: c.jsx(h2, {}) }),
                  c.jsx(Nu, { path: "*", element: c.jsx(m2, {}) }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
Rm(document.getElementById("root")).render(c.jsx(v2, {}));
