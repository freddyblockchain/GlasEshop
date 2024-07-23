console.log("Main JS file is running");
var xo = Object.defineProperty;
var Po = (n, t, e) =>
  t in n
    ? xo(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (n[t] = e);
var Qi = (n, t, e) => Po(n, typeof t != "symbol" ? t + "" : t, e);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const s of a.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = e(i);
    fetch(i.href, a);
  }
})();
window.global || (window.global = window);
function Q() {}
const hs = (n) => n;
function ue(n, t) {
  for (const e in t) n[e] = t[e];
  return n;
}
function ko(n) {
  return (
    !!n &&
    (typeof n == "object" || typeof n == "function") &&
    typeof n.then == "function"
  );
}
function cs(n) {
  return n();
}
function Zn() {
  return Object.create(null);
}
function ge(n) {
  n.forEach(cs);
}
function wr(n) {
  return typeof n == "function";
}
function Pt(n, t) {
  return n != n
    ? t == t
    : n !== t || (n && typeof n == "object") || typeof n == "function";
}
function Ao(n) {
  return Object.keys(n).length === 0;
}
function ds(n, ...t) {
  if (n == null) {
    for (const r of t) r(void 0);
    return Q;
  }
  const e = n.subscribe(...t);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function Nt(n, t, e) {
  n.$$.on_destroy.push(ds(t, e));
}
function xr(n, t, e, r) {
  if (n) {
    const i = us(n, t, e, r);
    return n[0](i);
  }
}
function us(n, t, e, r) {
  return n[1] && r ? ue(e.ctx.slice(), n[1](r(t))) : e.ctx;
}
function Pr(n, t, e, r) {
  if (n[2] && r) {
    const i = n[2](r(e));
    if (t.dirty === void 0) return i;
    if (typeof i == "object") {
      const a = [],
        s = Math.max(t.dirty.length, i.length);
      for (let o = 0; o < s; o += 1) a[o] = t.dirty[o] | i[o];
      return a;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function kr(n, t, e, r, i, a) {
  if (i) {
    const s = us(t, e, r, a);
    n.p(s, i);
  }
}
function Ar(n) {
  if (n.ctx.length > 32) {
    const t = [],
      e = n.ctx.length / 32;
    for (let r = 0; r < e; r++) t[r] = -1;
    return t;
  }
  return -1;
}
function gn(n) {
  const t = {};
  for (const e in n) e[0] !== "$" && (t[e] = n[e]);
  return t;
}
function ta(n, t) {
  const e = {};
  t = new Set(t);
  for (const r in n) !t.has(r) && r[0] !== "$" && (e[r] = n[r]);
  return e;
}
const fs = typeof window < "u";
let gs = fs ? () => window.performance.now() : () => Date.now(),
  Nn = fs ? (n) => requestAnimationFrame(n) : Q;
const ze = new Set();
function ps(n) {
  ze.forEach((t) => {
    t.c(n) || (ze.delete(t), t.f());
  }),
    ze.size !== 0 && Nn(ps);
}
function vs(n) {
  let t;
  return (
    ze.size === 0 && Nn(ps),
    {
      promise: new Promise((e) => {
        ze.add((t = { c: n, f: e }));
      }),
      abort() {
        ze.delete(t);
      },
    }
  );
}
function vt(n, t) {
  n.appendChild(t);
}
function ms(n) {
  if (!n) return document;
  const t = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return t && t.host ? t : n.ownerDocument;
}
function To(n) {
  const t = mt("style");
  return (t.textContent = "/* empty */"), Eo(ms(n), t), t.sheet;
}
function Eo(n, t) {
  return vt(n.head || n, t), t.sheet;
}
function gt(n, t, e) {
  n.insertBefore(t, e || null);
}
function ht(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function _s(n, t) {
  for (let e = 0; e < n.length; e += 1) n[e] && n[e].d(t);
}
function mt(n) {
  return document.createElement(n);
}
function ys(n) {
  return document.createTextNode(n);
}
function Ft() {
  return ys(" ");
}
function pe() {
  return ys("");
}
function fr(n, t, e, r) {
  return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r);
}
function St(n, t, e) {
  e == null
    ? n.removeAttribute(t)
    : n.getAttribute(t) !== e && n.setAttribute(t, e);
}
const Ro = ["width", "height"];
function ea(n, t) {
  const e = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const r in t)
    t[r] == null
      ? n.removeAttribute(r)
      : r === "style"
        ? (n.style.cssText = t[r])
        : r === "__value"
          ? (n.value = n[r] = t[r])
          : e[r] && e[r].set && Ro.indexOf(r) === -1
            ? (n[r] = t[r])
            : St(n, r, t[r]);
}
function He(n) {
  return n === "" ? null : +n;
}
function Fo(n) {
  return Array.from(n.childNodes);
}
function he(n, t) {
  n.value = t ?? "";
}
function bs(n, t, { bubbles: e = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(n, { detail: t, bubbles: e, cancelable: r });
}
function ra(n, t) {
  return new n(t);
}
const Yr = new Map();
let Xr = 0;
function Mo(n) {
  let t = 5381,
    e = n.length;
  for (; e--; ) t = ((t << 5) - t) ^ n.charCodeAt(e);
  return t >>> 0;
}
function No(n, t) {
  const e = { stylesheet: To(t), rules: {} };
  return Yr.set(n, e), e;
}
function Ss(n, t, e, r, i, a, s, o = 0) {
  const l = 16.666 / r;
  let h = `{
`;
  for (let _ = 0; _ <= 1; _ += l) {
    const b = t + (e - t) * a(_);
    h +=
      _ * 100 +
      `%{${s(b, 1 - b)}}
`;
  }
  const c =
      h +
      `100% {${s(e, 1 - e)}}
}`,
    v = `__svelte_${Mo(c)}_${o}`,
    g = ms(n),
    { stylesheet: f, rules: u } = Yr.get(g) || No(g, n);
  u[v] ||
    ((u[v] = !0), f.insertRule(`@keyframes ${v} ${c}`, f.cssRules.length));
  const p = n.style.animation || "";
  return (
    (n.style.animation = `${p ? `${p}, ` : ""}${v} ${r}ms linear ${i}ms 1 both`),
    (Xr += 1),
    v
  );
}
function pn(n, t) {
  const e = (n.style.animation || "").split(", "),
    r = e.filter(
      t ? (a) => a.indexOf(t) < 0 : (a) => a.indexOf("__svelte") === -1
    ),
    i = e.length - r.length;
  i && ((n.style.animation = r.join(", ")), (Xr -= i), Xr || Oo());
}
function Oo() {
  Nn(() => {
    Xr ||
      (Yr.forEach((n) => {
        const { ownerNode: t } = n.stylesheet;
        t && ht(t);
      }),
      Yr.clear());
  });
}
let vr;
function Xt(n) {
  vr = n;
}
function qe() {
  if (!vr) throw new Error("Function called outside component initialization");
  return vr;
}
function xe(n) {
  qe().$$.on_mount.push(n);
}
function Qe(n) {
  qe().$$.on_destroy.push(n);
}
function Tr() {
  const n = qe();
  return (t, e, { cancelable: r = !1 } = {}) => {
    const i = n.$$.callbacks[t];
    if (i) {
      const a = bs(t, e, { cancelable: r });
      return (
        i.slice().forEach((s) => {
          s.call(n, a);
        }),
        !a.defaultPrevented
      );
    }
    return !0;
  };
}
function gr(n, t) {
  return qe().$$.context.set(n, t), t;
}
function mr(n) {
  return qe().$$.context.get(n);
}
const Ve = [],
  _r = [];
let $e = [];
const ia = [],
  Go = Promise.resolve();
let vn = !1;
function Lo() {
  vn || ((vn = !0), Go.then(On));
}
function We(n) {
  $e.push(n);
}
const Ji = new Set();
let Ge = 0;
function On() {
  if (Ge !== 0) return;
  const n = vr;
  do {
    try {
      for (; Ge < Ve.length; ) {
        const t = Ve[Ge];
        Ge++, Xt(t), Do(t.$$);
      }
    } catch (t) {
      throw ((Ve.length = 0), (Ge = 0), t);
    }
    for (Xt(null), Ve.length = 0, Ge = 0; _r.length; ) _r.pop()();
    for (let t = 0; t < $e.length; t += 1) {
      const e = $e[t];
      Ji.has(e) || (Ji.add(e), e());
    }
    $e.length = 0;
  } while (Ve.length);
  for (; ia.length; ) ia.pop()();
  (vn = !1), Ji.clear(), Xt(n);
}
function Do(n) {
  if (n.fragment !== null) {
    n.update(), ge(n.before_update);
    const t = n.dirty;
    (n.dirty = [-1]),
      n.fragment && n.fragment.p(n.ctx, t),
      n.after_update.forEach(We);
  }
}
function Io(n) {
  const t = [],
    e = [];
  $e.forEach((r) => (n.indexOf(r) === -1 ? t.push(r) : e.push(r))),
    e.forEach((r) => r()),
    ($e = t);
}
let ar;
function Cs() {
  return (
    ar ||
      ((ar = Promise.resolve()),
      ar.then(() => {
        ar = null;
      })),
    ar
  );
}
function qr(n, t, e) {
  n.dispatchEvent(bs(`${t ? "intro" : "outro"}${e}`));
}
const $r = new Set();
let ce;
function Vt() {
  ce = { r: 0, c: [], p: ce };
}
function zt() {
  ce.r || ge(ce.c), (ce = ce.p);
}
function $(n, t) {
  n && n.i && ($r.delete(n), n.i(t));
}
function Y(n, t, e, r) {
  if (n && n.o) {
    if ($r.has(n)) return;
    $r.add(n),
      ce.c.push(() => {
        $r.delete(n), r && (e && n.d(1), r());
      }),
      n.o(t);
  } else r && r();
}
const ws = { duration: 0 };
function Uo(n, t, e) {
  const r = { direction: "in" };
  let i = t(n, e, r),
    a = !1,
    s,
    o,
    l = 0;
  function h() {
    s && pn(n, s);
  }
  function c() {
    const {
      delay: g = 0,
      duration: f = 300,
      easing: u = hs,
      tick: p = Q,
      css: _,
    } = i || ws;
    _ && (s = Ss(n, 0, 1, f, g, u, _, l++)), p(0, 1);
    const b = gs() + g,
      y = b + f;
    o && o.abort(),
      (a = !0),
      We(() => qr(n, !0, "start")),
      (o = vs((d) => {
        if (a) {
          if (d >= y) return p(1, 0), qr(n, !0, "end"), h(), (a = !1);
          if (d >= b) {
            const m = u((d - b) / f);
            p(m, 1 - m);
          }
        }
        return a;
      }));
  }
  let v = !1;
  return {
    start() {
      v || ((v = !0), pn(n), wr(i) ? ((i = i(r)), Cs().then(c)) : c());
    },
    invalidate() {
      v = !1;
    },
    end() {
      a && (h(), (a = !1));
    },
  };
}
function Bo(n, t, e) {
  const r = { direction: "out" };
  let i = t(n, e, r),
    a = !0,
    s;
  const o = ce;
  o.r += 1;
  let l;
  function h() {
    const {
      delay: c = 0,
      duration: v = 300,
      easing: g = hs,
      tick: f = Q,
      css: u,
    } = i || ws;
    u && (s = Ss(n, 1, 0, v, c, g, u));
    const p = gs() + c,
      _ = p + v;
    We(() => qr(n, !1, "start")),
      "inert" in n && ((l = n.inert), (n.inert = !0)),
      vs((b) => {
        if (a) {
          if (b >= _) return f(0, 1), qr(n, !1, "end"), --o.r || ge(o.c), !1;
          if (b >= p) {
            const y = g((b - p) / v);
            f(1 - y, y);
          }
        }
        return a;
      });
  }
  return (
    wr(i)
      ? Cs().then(() => {
          (i = i(r)), h();
        })
      : h(),
    {
      end(c) {
        c && "inert" in n && (n.inert = l),
          c && i.tick && i.tick(1, 0),
          a && (s && pn(n, s), (a = !1));
      },
    }
  );
}
function na(n, t) {
  const e = (t.token = {});
  function r(i, a, s, o) {
    if (t.token !== e) return;
    t.resolved = o;
    let l = t.ctx;
    s !== void 0 && ((l = l.slice()), (l[s] = o));
    const h = i && (t.current = i)(l);
    let c = !1;
    t.block &&
      (t.blocks
        ? t.blocks.forEach((v, g) => {
            g !== a &&
              v &&
              (Vt(),
              Y(v, 1, 1, () => {
                t.blocks[g] === v && (t.blocks[g] = null);
              }),
              zt());
          })
        : t.block.d(1),
      h.c(),
      $(h, 1),
      h.m(t.mount(), t.anchor),
      (c = !0)),
      (t.block = h),
      t.blocks && (t.blocks[a] = h),
      c && On();
  }
  if (ko(n)) {
    const i = qe();
    if (
      (n.then(
        (a) => {
          Xt(i), r(t.then, 1, t.value, a), Xt(null);
        },
        (a) => {
          if ((Xt(i), r(t.catch, 2, t.error, a), Xt(null), !t.hasCatch))
            throw a;
        }
      ),
      t.current !== t.pending)
    )
      return r(t.pending, 0), !0;
  } else {
    if (t.current !== t.then) return r(t.then, 1, t.value, n), !0;
    t.resolved = n;
  }
}
function Vo(n, t, e) {
  const r = t.slice(),
    { resolved: i } = n;
  n.current === n.then && (r[n.value] = i),
    n.current === n.catch && (r[n.error] = i),
    n.block.p(r, e);
}
function Qr(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function mn(n, t) {
  const e = {},
    r = {},
    i = { $$scope: 1 };
  let a = n.length;
  for (; a--; ) {
    const s = n[a],
      o = t[a];
    if (o) {
      for (const l in s) l in o || (r[l] = 1);
      for (const l in o) i[l] || ((e[l] = o[l]), (i[l] = 1));
      n[a] = o;
    } else for (const l in s) i[l] = 1;
  }
  for (const s in r) s in e || (e[s] = void 0);
  return e;
}
function Lr(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function At(n) {
  n && n.c();
}
function wt(n, t, e) {
  const { fragment: r, after_update: i } = n.$$;
  r && r.m(t, e),
    We(() => {
      const a = n.$$.on_mount.map(cs).filter(wr);
      n.$$.on_destroy ? n.$$.on_destroy.push(...a) : ge(a),
        (n.$$.on_mount = []);
    }),
    i.forEach(We);
}
function xt(n, t) {
  const e = n.$$;
  e.fragment !== null &&
    (Io(e.after_update),
    ge(e.on_destroy),
    e.fragment && e.fragment.d(t),
    (e.on_destroy = e.fragment = null),
    (e.ctx = []));
}
function zo(n, t) {
  n.$$.dirty[0] === -1 && (Ve.push(n), Lo(), n.$$.dirty.fill(0)),
    (n.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function Et(n, t, e, r, i, a, s = null, o = [-1]) {
  const l = vr;
  Xt(n);
  const h = (n.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: Q,
    not_equal: i,
    bound: Zn(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    callbacks: Zn(),
    dirty: o,
    skip_bound: !1,
    root: t.target || l.$$.root,
  });
  s && s(h.root);
  let c = !1;
  if (
    ((h.ctx = e
      ? e(n, t.props || {}, (v, g, ...f) => {
          const u = f.length ? f[0] : g;
          return (
            h.ctx &&
              i(h.ctx[v], (h.ctx[v] = u)) &&
              (!h.skip_bound && h.bound[v] && h.bound[v](u), c && zo(n, v)),
            g
          );
        })
      : []),
    h.update(),
    (c = !0),
    ge(h.before_update),
    (h.fragment = r ? r(h.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const v = Fo(t.target);
      h.fragment && h.fragment.l(v), v.forEach(ht);
    } else h.fragment && h.fragment.c();
    t.intro && $(n.$$.fragment), wt(n, t.target, t.anchor), On();
  }
  Xt(l);
}
class Rt {
  constructor() {
    Qi(this, "$$");
    Qi(this, "$$set");
  }
  $destroy() {
    xt(this, 1), (this.$destroy = Q);
  }
  $on(t, e) {
    if (!wr(e)) return Q;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      r.push(e),
      () => {
        const i = r.indexOf(e);
        i !== -1 && r.splice(i, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !Ao(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const Ho = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(Ho);
const aa = {},
  _n = {},
  $o = {},
  xs = /^:(.+)/,
  sa = 4,
  jo = 3,
  Wo = 2,
  Ko = 1,
  Yo = 1,
  yn = (n) => n.replace(/(^\/+|\/+$)/g, "").split("/"),
  Zi = (n) => n.replace(/(^\/+|\/+$)/g, ""),
  Xo = (n, t) => {
    const e = n.default
      ? 0
      : yn(n.path).reduce(
          (r, i) => (
            (r += sa),
            i === ""
              ? (r += Yo)
              : xs.test(i)
                ? (r += Wo)
                : i[0] === "*"
                  ? (r -= sa + Ko)
                  : (r += jo),
            r
          ),
          0
        );
    return { route: n, score: e, index: t };
  },
  qo = (n) =>
    n
      .map(Xo)
      .sort((t, e) =>
        t.score < e.score ? 1 : t.score > e.score ? -1 : t.index - e.index
      ),
  oa = (n, t) => {
    let e, r;
    const [i] = t.split("?"),
      a = yn(i),
      s = a[0] === "",
      o = qo(n);
    for (let l = 0, h = o.length; l < h; l++) {
      const c = o[l].route;
      let v = !1;
      if (c.default) {
        r = { route: c, params: {}, uri: t };
        continue;
      }
      const g = yn(c.path),
        f = {},
        u = Math.max(a.length, g.length);
      let p = 0;
      for (; p < u; p++) {
        const _ = g[p],
          b = a[p];
        if (_ && _[0] === "*") {
          const d = _ === "*" ? "*" : _.slice(1);
          f[d] = a.slice(p).map(decodeURIComponent).join("/");
          break;
        }
        if (typeof b > "u") {
          v = !0;
          break;
        }
        const y = xs.exec(_);
        if (y && !s) {
          const d = decodeURIComponent(b);
          f[y[1]] = d;
        } else if (_ !== b) {
          v = !0;
          break;
        }
      }
      if (!v) {
        e = { route: c, params: f, uri: "/" + a.slice(0, p).join("/") };
        break;
      }
    }
    return e || r || null;
  },
  la = (n, t) => `${Zi(t === "/" ? n : `${Zi(n)}/${Zi(t)}`)}/`,
  Ps = () =>
    typeof window < "u" && "document" in window && "location" in window,
  Qo = (n) => ({ params: n & 4 }),
  ha = (n) => ({ params: n[2] });
function ca(n) {
  let t, e, r, i;
  const a = [Zo, Jo],
    s = [];
  function o(l, h) {
    return l[0] ? 0 : 1;
  }
  return (
    (t = o(n)),
    (e = s[t] = a[t](n)),
    {
      c() {
        e.c(), (r = pe());
      },
      m(l, h) {
        s[t].m(l, h), gt(l, r, h), (i = !0);
      },
      p(l, h) {
        let c = t;
        (t = o(l)),
          t === c
            ? s[t].p(l, h)
            : (Vt(),
              Y(s[c], 1, 1, () => {
                s[c] = null;
              }),
              zt(),
              (e = s[t]),
              e ? e.p(l, h) : ((e = s[t] = a[t](l)), e.c()),
              $(e, 1),
              e.m(r.parentNode, r));
      },
      i(l) {
        i || ($(e), (i = !0));
      },
      o(l) {
        Y(e), (i = !1);
      },
      d(l) {
        l && ht(r), s[t].d(l);
      },
    }
  );
}
function Jo(n) {
  let t;
  const e = n[8].default,
    r = xr(e, n, n[7], ha);
  return {
    c() {
      r && r.c();
    },
    m(i, a) {
      r && r.m(i, a), (t = !0);
    },
    p(i, a) {
      r &&
        r.p &&
        (!t || a & 132) &&
        kr(r, e, i, i[7], t ? Pr(e, i[7], a, Qo) : Ar(i[7]), ha);
    },
    i(i) {
      t || ($(r, i), (t = !0));
    },
    o(i) {
      Y(r, i), (t = !1);
    },
    d(i) {
      r && r.d(i);
    },
  };
}
function Zo(n) {
  let t,
    e,
    r,
    i = {
      ctx: n,
      current: null,
      token: null,
      hasCatch: !1,
      pending: rl,
      then: el,
      catch: tl,
      value: 12,
      blocks: [, , ,],
    };
  return (
    na((e = n[0]), i),
    {
      c() {
        (t = pe()), i.block.c();
      },
      m(a, s) {
        gt(a, t, s),
          i.block.m(a, (i.anchor = s)),
          (i.mount = () => t.parentNode),
          (i.anchor = t),
          (r = !0);
      },
      p(a, s) {
        (n = a),
          (i.ctx = n),
          (s & 1 && e !== (e = n[0]) && na(e, i)) || Vo(i, n, s);
      },
      i(a) {
        r || ($(i.block), (r = !0));
      },
      o(a) {
        for (let s = 0; s < 3; s += 1) {
          const o = i.blocks[s];
          Y(o);
        }
        r = !1;
      },
      d(a) {
        a && ht(t), i.block.d(a), (i.token = null), (i = null);
      },
    }
  );
}
function tl(n) {
  return { c: Q, m: Q, p: Q, i: Q, o: Q, d: Q };
}
function el(n) {
  var o;
  let t, e, r;
  const i = [n[2], n[3]];
  var a = ((o = n[12]) == null ? void 0 : o.default) || n[12];
  function s(l, h) {
    let c = {};
    for (let v = 0; v < i.length; v += 1) c = ue(c, i[v]);
    return (
      h !== void 0 &&
        h & 12 &&
        (c = ue(c, mn(i, [h & 4 && Lr(l[2]), h & 8 && Lr(l[3])]))),
      { props: c }
    );
  }
  return (
    a && (t = ra(a, s(n))),
    {
      c() {
        t && At(t.$$.fragment), (e = pe());
      },
      m(l, h) {
        t && wt(t, l, h), gt(l, e, h), (r = !0);
      },
      p(l, h) {
        var c;
        if (
          h & 1 &&
          a !== (a = ((c = l[12]) == null ? void 0 : c.default) || l[12])
        ) {
          if (t) {
            Vt();
            const v = t;
            Y(v.$$.fragment, 1, 0, () => {
              xt(v, 1);
            }),
              zt();
          }
          a
            ? ((t = ra(a, s(l, h))),
              At(t.$$.fragment),
              $(t.$$.fragment, 1),
              wt(t, e.parentNode, e))
            : (t = null);
        } else if (a) {
          const v = h & 12 ? mn(i, [h & 4 && Lr(l[2]), h & 8 && Lr(l[3])]) : {};
          t.$set(v);
        }
      },
      i(l) {
        r || (t && $(t.$$.fragment, l), (r = !0));
      },
      o(l) {
        t && Y(t.$$.fragment, l), (r = !1);
      },
      d(l) {
        l && ht(e), t && xt(t, l);
      },
    }
  );
}
function rl(n) {
  return { c: Q, m: Q, p: Q, i: Q, o: Q, d: Q };
}
function il(n) {
  let t,
    e,
    r = n[1] && n[1].route === n[5] && ca(n);
  return {
    c() {
      r && r.c(), (t = pe());
    },
    m(i, a) {
      r && r.m(i, a), gt(i, t, a), (e = !0);
    },
    p(i, [a]) {
      i[1] && i[1].route === i[5]
        ? r
          ? (r.p(i, a), a & 2 && $(r, 1))
          : ((r = ca(i)), r.c(), $(r, 1), r.m(t.parentNode, t))
        : r &&
          (Vt(),
          Y(r, 1, 1, () => {
            r = null;
          }),
          zt());
    },
    i(i) {
      e || ($(r), (e = !0));
    },
    o(i) {
      Y(r), (e = !1);
    },
    d(i) {
      i && ht(t), r && r.d(i);
    },
  };
}
function nl(n, t, e) {
  let r,
    { $$slots: i = {}, $$scope: a } = t,
    { path: s = "" } = t,
    { component: o = null } = t,
    l = {},
    h = {};
  const { registerRoute: c, unregisterRoute: v, activeRoute: g } = mr(_n);
  Nt(n, g, (u) => e(1, (r = u)));
  const f = { path: s, default: s === "" };
  return (
    c(f),
    Qe(() => {
      v(f);
    }),
    (n.$$set = (u) => {
      e(11, (t = ue(ue({}, t), gn(u)))),
        "path" in u && e(6, (s = u.path)),
        "component" in u && e(0, (o = u.component)),
        "$$scope" in u && e(7, (a = u.$$scope));
    }),
    (n.$$.update = () => {
      if (r && r.route === f) {
        e(2, (l = r.params));
        const { component: u, path: p, ..._ } = t;
        e(3, (h = _)),
          u &&
            (u.toString().startsWith("class ")
              ? e(0, (o = u))
              : e(0, (o = u()))),
          Ps() &&
            !r.preserveScroll &&
            (window == null || window.scrollTo(0, 0));
      }
    }),
    (t = gn(t)),
    [o, r, l, h, g, f, s, a, i]
  );
}
class al extends Rt {
  constructor(t) {
    super(), Et(this, t, nl, il, Pt, { path: 6, component: 0 });
  }
}
const Le = [];
function je(n, t) {
  return { subscribe: qt(n, t).subscribe };
}
function qt(n, t = Q) {
  let e;
  const r = new Set();
  function i(o) {
    if (Pt(n, o) && ((n = o), e)) {
      const l = !Le.length;
      for (const h of r) h[1](), Le.push(h, n);
      if (l) {
        for (let h = 0; h < Le.length; h += 2) Le[h][0](Le[h + 1]);
        Le.length = 0;
      }
    }
  }
  function a(o) {
    i(o(n));
  }
  function s(o, l = Q) {
    const h = [o, l];
    return (
      r.add(h),
      r.size === 1 && (e = t(i, a) || Q),
      o(n),
      () => {
        r.delete(h), r.size === 0 && e && (e(), (e = null));
      }
    );
  }
  return { set: i, update: a, subscribe: s };
}
function ks(n, t, e) {
  const r = !Array.isArray(n),
    i = r ? [n] : n;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return je(e, (s, o) => {
    let l = !1;
    const h = [];
    let c = 0,
      v = Q;
    const g = () => {
        if (c) return;
        v();
        const u = t(r ? h[0] : h, s, o);
        a ? s(u) : (v = wr(u) ? u : Q);
      },
      f = i.map((u, p) =>
        ds(
          u,
          (_) => {
            (h[p] = _), (c &= ~(1 << p)), l && g();
          },
          () => {
            c |= 1 << p;
          }
        )
      );
    return (
      (l = !0),
      g(),
      function () {
        ge(f), v(), (l = !1);
      }
    );
  });
}
const tn = (n) => ({
    ...n.location,
    state: n.history.state,
    key: (n.history.state && n.history.state.key) || "initial",
  }),
  sl = (n) => {
    const t = [];
    let e = tn(n);
    return {
      get location() {
        return e;
      },
      listen(r) {
        t.push(r);
        const i = () => {
          (e = tn(n)), r({ location: e, action: "POP" });
        };
        return (
          n.addEventListener("popstate", i),
          () => {
            n.removeEventListener("popstate", i);
            const a = t.indexOf(r);
            t.splice(a, 1);
          }
        );
      },
      navigate(
        r,
        {
          state: i,
          replace: a = !1,
          preserveScroll: s = !1,
          blurActiveElement: o = !0,
        } = {}
      ) {
        i = { ...i, key: Date.now() + "" };
        try {
          a ? n.history.replaceState(i, "", r) : n.history.pushState(i, "", r);
        } catch {
          n.location[a ? "replace" : "assign"](r);
        }
        (e = tn(n)),
          t.forEach((l) =>
            l({ location: e, action: "PUSH", preserveScroll: s })
          ),
          o && document.activeElement.blur();
      },
    };
  },
  ol = (n = "/") => {
    let t = 0;
    const e = [{ pathname: n, search: "" }],
      r = [];
    return {
      get location() {
        return e[t];
      },
      addEventListener(i, a) {},
      removeEventListener(i, a) {},
      history: {
        get entries() {
          return e;
        },
        get index() {
          return t;
        },
        get state() {
          return r[t];
        },
        pushState(i, a, s) {
          const [o, l = ""] = s.split("?");
          t++, e.push({ pathname: o, search: l }), r.push(i);
        },
        replaceState(i, a, s) {
          const [o, l = ""] = s.split("?");
          (e[t] = { pathname: o, search: l }), (r[t] = i);
        },
      },
    };
  },
  ll = sl(Ps() ? window : ol()),
  hl = (n) => ({ route: n & 4, location: n & 2 }),
  da = (n) => ({ route: n[2] && n[2].uri, location: n[1] }),
  cl = (n) => ({ route: n & 4, location: n & 2 }),
  ua = (n) => ({ route: n[2] && n[2].uri, location: n[1] });
function dl(n) {
  let t;
  const e = n[15].default,
    r = xr(e, n, n[14], da);
  return {
    c() {
      r && r.c();
    },
    m(i, a) {
      r && r.m(i, a), (t = !0);
    },
    p(i, a) {
      r &&
        r.p &&
        (!t || a & 16390) &&
        kr(r, e, i, i[14], t ? Pr(e, i[14], a, hl) : Ar(i[14]), da);
    },
    i(i) {
      t || ($(r, i), (t = !0));
    },
    o(i) {
      Y(r, i), (t = !1);
    },
    d(i) {
      r && r.d(i);
    },
  };
}
function ul(n) {
  let t = n[1].pathname,
    e,
    r,
    i = fa(n);
  return {
    c() {
      i.c(), (e = pe());
    },
    m(a, s) {
      i.m(a, s), gt(a, e, s), (r = !0);
    },
    p(a, s) {
      s & 2 && Pt(t, (t = a[1].pathname))
        ? (Vt(),
          Y(i, 1, 1, Q),
          zt(),
          (i = fa(a)),
          i.c(),
          $(i, 1),
          i.m(e.parentNode, e))
        : i.p(a, s);
    },
    i(a) {
      r || ($(i), (r = !0));
    },
    o(a) {
      Y(i), (r = !1);
    },
    d(a) {
      a && ht(e), i.d(a);
    },
  };
}
function fa(n) {
  let t, e, r, i;
  const a = n[15].default,
    s = xr(a, n, n[14], ua);
  return {
    c() {
      (t = mt("div")), s && s.c();
    },
    m(o, l) {
      gt(o, t, l), s && s.m(t, null), (i = !0);
    },
    p(o, l) {
      s &&
        s.p &&
        (!i || l & 16390) &&
        kr(s, a, o, o[14], i ? Pr(a, o[14], l, cl) : Ar(o[14]), ua);
    },
    i(o) {
      i ||
        ($(s, o),
        o &&
          We(() => {
            i && (r && r.end(1), (e = Uo(t, n[3], {})), e.start());
          }),
        (i = !0));
    },
    o(o) {
      Y(s, o), e && e.invalidate(), o && (r = Bo(t, n[3], {})), (i = !1);
    },
    d(o) {
      o && ht(t), s && s.d(o), o && r && r.end();
    },
  };
}
function fl(n) {
  let t, e, r, i;
  const a = [ul, dl],
    s = [];
  function o(l, h) {
    return l[0] ? 0 : 1;
  }
  return (
    (t = o(n)),
    (e = s[t] = a[t](n)),
    {
      c() {
        e.c(), (r = pe());
      },
      m(l, h) {
        s[t].m(l, h), gt(l, r, h), (i = !0);
      },
      p(l, [h]) {
        let c = t;
        (t = o(l)),
          t === c
            ? s[t].p(l, h)
            : (Vt(),
              Y(s[c], 1, 1, () => {
                s[c] = null;
              }),
              zt(),
              (e = s[t]),
              e ? e.p(l, h) : ((e = s[t] = a[t](l)), e.c()),
              $(e, 1),
              e.m(r.parentNode, r));
      },
      i(l) {
        i || ($(e), (i = !0));
      },
      o(l) {
        Y(e), (i = !1);
      },
      d(l) {
        l && ht(r), s[t].d(l);
      },
    }
  );
}
function gl(n, t, e) {
  let r,
    i,
    a,
    s,
    { $$slots: o = {}, $$scope: l } = t,
    { basepath: h = "/" } = t,
    { url: c = null } = t,
    { viewtransition: v = null } = t,
    { history: g = ll } = t;
  const f = (k, w, A) => {
    const T = v(A);
    return typeof (T == null ? void 0 : T.fn) == "function" ? T.fn(k, T) : T;
  };
  gr($o, g);
  const u = mr(aa),
    p = mr(_n),
    _ = qt([]);
  Nt(n, _, (k) => e(12, (i = k)));
  const b = qt(null);
  Nt(n, b, (k) => e(2, (s = k)));
  let y = !1;
  const d = u || qt(c ? { pathname: c } : g.location);
  Nt(n, d, (k) => e(1, (r = k)));
  const m = p ? p.routerBase : qt({ path: h, uri: h });
  Nt(n, m, (k) => e(13, (a = k)));
  const S = ks([m, b], ([k, w]) => {
      if (!w) return k;
      const { path: A } = k,
        { route: T, uri: R } = w;
      return { path: T.default ? A : T.path.replace(/\*.*$/, ""), uri: R };
    }),
    P = (k) => {
      const { path: w } = a;
      let { path: A } = k;
      if (((k._path = A), (k.path = la(w, A)), typeof window > "u")) {
        if (y) return;
        const T = oa([k], r.pathname);
        T && (b.set(T), (y = !0));
      } else _.update((T) => [...T, k]);
    },
    E = (k) => {
      _.update((w) => w.filter((A) => A !== k));
    };
  let C = !1;
  return (
    u ||
      (xe(() =>
        g.listen((w) => {
          e(11, (C = w.preserveScroll || !1)), d.set(w.location);
        })
      ),
      gr(aa, d)),
    gr(_n, {
      activeRoute: b,
      base: m,
      routerBase: S,
      registerRoute: P,
      unregisterRoute: E,
    }),
    (n.$$set = (k) => {
      "basepath" in k && e(8, (h = k.basepath)),
        "url" in k && e(9, (c = k.url)),
        "viewtransition" in k && e(0, (v = k.viewtransition)),
        "history" in k && e(10, (g = k.history)),
        "$$scope" in k && e(14, (l = k.$$scope));
    }),
    (n.$$.update = () => {
      if (n.$$.dirty & 8192) {
        const { path: k } = a;
        _.update((w) =>
          w.map((A) => Object.assign(A, { path: la(k, A._path) }))
        );
      }
      if (n.$$.dirty & 6146) {
        const k = oa(i, r.pathname);
        b.set(k && { ...k, preserveScroll: C });
      }
    }),
    [v, r, s, f, _, b, d, m, h, c, g, C, i, a, l, o]
  );
}
class pl extends Rt {
  constructor(t) {
    super(),
      Et(this, t, gl, fl, Pt, {
        basepath: 8,
        url: 9,
        viewtransition: 0,
        history: 10,
      });
  }
}
var ga = (n) => (typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n),
  Tt = (n) => !n || typeof n != "object" || Object.keys(n).length === 0,
  vl = (n, t) => JSON.stringify(n) === JSON.stringify(t);
function As(n, t) {
  n.forEach(function (e) {
    Array.isArray(e) ? As(e, t) : t.push(e);
  });
}
function Ts(n) {
  let t = [];
  return As(n, t), t;
}
var Es = (...n) => Ts(n).filter(Boolean),
  Rs = (n, t) => {
    let e = {},
      r = Object.keys(n),
      i = Object.keys(t);
    for (let a of r)
      if (i.includes(a)) {
        let s = n[a],
          o = t[a];
        typeof s == "object" && typeof o == "object"
          ? (e[a] = Rs(s, o))
          : Array.isArray(s) || Array.isArray(o)
            ? (e[a] = Es(o, s))
            : (e[a] = o + " " + s);
      } else e[a] = n[a];
    for (let a of i) r.includes(a) || (e[a] = t[a]);
    return e;
  },
  pa = (n) => (!n || typeof n != "string" ? n : n.replace(/\s+/g, " ").trim());
const Gn = "-";
function ml(n) {
  const t = yl(n),
    { conflictingClassGroups: e, conflictingClassGroupModifiers: r } = n;
  function i(s) {
    const o = s.split(Gn);
    return o[0] === "" && o.length !== 1 && o.shift(), Fs(o, t) || _l(s);
  }
  function a(s, o) {
    const l = e[s] || [];
    return o && r[s] ? [...l, ...r[s]] : l;
  }
  return { getClassGroupId: i, getConflictingClassGroupIds: a };
}
function Fs(n, t) {
  var s;
  if (n.length === 0) return t.classGroupId;
  const e = n[0],
    r = t.nextPart.get(e),
    i = r ? Fs(n.slice(1), r) : void 0;
  if (i) return i;
  if (t.validators.length === 0) return;
  const a = n.join(Gn);
  return (s = t.validators.find(({ validator: o }) => o(a))) == null
    ? void 0
    : s.classGroupId;
}
const va = /^\[(.+)\]$/;
function _l(n) {
  if (va.test(n)) {
    const t = va.exec(n)[1],
      e = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (e) return "arbitrary.." + e;
  }
}
function yl(n) {
  const { theme: t, prefix: e } = n,
    r = { nextPart: new Map(), validators: [] };
  return (
    Sl(Object.entries(n.classGroups), e).forEach(([a, s]) => {
      bn(s, r, a, t);
    }),
    r
  );
}
function bn(n, t, e, r) {
  n.forEach((i) => {
    if (typeof i == "string") {
      const a = i === "" ? t : ma(t, i);
      a.classGroupId = e;
      return;
    }
    if (typeof i == "function") {
      if (bl(i)) {
        bn(i(r), t, e, r);
        return;
      }
      t.validators.push({ validator: i, classGroupId: e });
      return;
    }
    Object.entries(i).forEach(([a, s]) => {
      bn(s, ma(t, a), e, r);
    });
  });
}
function ma(n, t) {
  let e = n;
  return (
    t.split(Gn).forEach((r) => {
      e.nextPart.has(r) ||
        e.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (e = e.nextPart.get(r));
    }),
    e
  );
}
function bl(n) {
  return n.isThemeGetter;
}
function Sl(n, t) {
  return t
    ? n.map(([e, r]) => {
        const i = r.map((a) =>
          typeof a == "string"
            ? t + a
            : typeof a == "object"
              ? Object.fromEntries(
                  Object.entries(a).map(([s, o]) => [t + s, o])
                )
              : a
        );
        return [e, i];
      })
    : n;
}
function Cl(n) {
  if (n < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    e = new Map(),
    r = new Map();
  function i(a, s) {
    e.set(a, s), t++, t > n && ((t = 0), (r = e), (e = new Map()));
  }
  return {
    get(a) {
      let s = e.get(a);
      if (s !== void 0) return s;
      if ((s = r.get(a)) !== void 0) return i(a, s), s;
    },
    set(a, s) {
      e.has(a) ? e.set(a, s) : i(a, s);
    },
  };
}
const Ms = "!";
function wl(n) {
  const t = n.separator,
    e = t.length === 1,
    r = t[0],
    i = t.length;
  return function (s) {
    const o = [];
    let l = 0,
      h = 0,
      c;
    for (let p = 0; p < s.length; p++) {
      let _ = s[p];
      if (l === 0) {
        if (_ === r && (e || s.slice(p, p + i) === t)) {
          o.push(s.slice(h, p)), (h = p + i);
          continue;
        }
        if (_ === "/") {
          c = p;
          continue;
        }
      }
      _ === "[" ? l++ : _ === "]" && l--;
    }
    const v = o.length === 0 ? s : s.substring(h),
      g = v.startsWith(Ms),
      f = g ? v.substring(1) : v,
      u = c && c > h ? c - h : void 0;
    return {
      modifiers: o,
      hasImportantModifier: g,
      baseClassName: f,
      maybePostfixModifierPosition: u,
    };
  };
}
function xl(n) {
  if (n.length <= 1) return n;
  const t = [];
  let e = [];
  return (
    n.forEach((r) => {
      r[0] === "[" ? (t.push(...e.sort(), r), (e = [])) : e.push(r);
    }),
    t.push(...e.sort()),
    t
  );
}
function Pl(n) {
  return { cache: Cl(n.cacheSize), splitModifiers: wl(n), ...ml(n) };
}
const kl = /\s+/;
function Al(n, t) {
  const {
      splitModifiers: e,
      getClassGroupId: r,
      getConflictingClassGroupIds: i,
    } = t,
    a = new Set();
  return n
    .trim()
    .split(kl)
    .map((s) => {
      const {
        modifiers: o,
        hasImportantModifier: l,
        baseClassName: h,
        maybePostfixModifierPosition: c,
      } = e(s);
      let v = r(c ? h.substring(0, c) : h),
        g = !!c;
      if (!v) {
        if (!c) return { isTailwindClass: !1, originalClassName: s };
        if (((v = r(h)), !v))
          return { isTailwindClass: !1, originalClassName: s };
        g = !1;
      }
      const f = xl(o).join(":");
      return {
        isTailwindClass: !0,
        modifierId: l ? f + Ms : f,
        classGroupId: v,
        originalClassName: s,
        hasPostfixModifier: g,
      };
    })
    .reverse()
    .filter((s) => {
      if (!s.isTailwindClass) return !0;
      const { modifierId: o, classGroupId: l, hasPostfixModifier: h } = s,
        c = o + l;
      return a.has(c)
        ? !1
        : (a.add(c), i(l, h).forEach((v) => a.add(o + v)), !0);
    })
    .reverse()
    .map((s) => s.originalClassName)
    .join(" ");
}
function Tl() {
  let n = 0,
    t,
    e,
    r = "";
  for (; n < arguments.length; )
    (t = arguments[n++]) && (e = Ns(t)) && (r && (r += " "), (r += e));
  return r;
}
function Ns(n) {
  if (typeof n == "string") return n;
  let t,
    e = "";
  for (let r = 0; r < n.length; r++)
    n[r] && (t = Ns(n[r])) && (e && (e += " "), (e += t));
  return e;
}
function Sn(n, ...t) {
  let e,
    r,
    i,
    a = s;
  function s(l) {
    const h = t.reduce((c, v) => v(c), n());
    return (e = Pl(h)), (r = e.cache.get), (i = e.cache.set), (a = o), o(l);
  }
  function o(l) {
    const h = r(l);
    if (h) return h;
    const c = Al(l, e);
    return i(l, c), c;
  }
  return function () {
    return a(Tl.apply(null, arguments));
  };
}
function nt(n) {
  const t = (e) => e[n] || [];
  return (t.isThemeGetter = !0), t;
}
const Os = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  El = /^\d+\/\d+$/,
  Rl = new Set(["px", "full", "screen"]),
  Fl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Ml =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Nl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Ol = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Gl =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function jt(n) {
  return Ce(n) || Rl.has(n) || El.test(n);
}
function ae(n) {
  return Je(n, "length", Hl);
}
function Ce(n) {
  return !!n && !Number.isNaN(Number(n));
}
function Dr(n) {
  return Je(n, "number", Ce);
}
function sr(n) {
  return !!n && Number.isInteger(Number(n));
}
function Ll(n) {
  return n.endsWith("%") && Ce(n.slice(0, -1));
}
function j(n) {
  return Os.test(n);
}
function se(n) {
  return Fl.test(n);
}
const Dl = new Set(["length", "size", "percentage"]);
function Il(n) {
  return Je(n, Dl, Gs);
}
function Ul(n) {
  return Je(n, "position", Gs);
}
const Bl = new Set(["image", "url"]);
function Vl(n) {
  return Je(n, Bl, jl);
}
function zl(n) {
  return Je(n, "", $l);
}
function or() {
  return !0;
}
function Je(n, t, e) {
  const r = Os.exec(n);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : e(r[2])
    : !1;
}
function Hl(n) {
  return Ml.test(n) && !Nl.test(n);
}
function Gs() {
  return !1;
}
function $l(n) {
  return Ol.test(n);
}
function jl(n) {
  return Gl.test(n);
}
function Cn() {
  const n = nt("colors"),
    t = nt("spacing"),
    e = nt("blur"),
    r = nt("brightness"),
    i = nt("borderColor"),
    a = nt("borderRadius"),
    s = nt("borderSpacing"),
    o = nt("borderWidth"),
    l = nt("contrast"),
    h = nt("grayscale"),
    c = nt("hueRotate"),
    v = nt("invert"),
    g = nt("gap"),
    f = nt("gradientColorStops"),
    u = nt("gradientColorStopPositions"),
    p = nt("inset"),
    _ = nt("margin"),
    b = nt("opacity"),
    y = nt("padding"),
    d = nt("saturate"),
    m = nt("scale"),
    S = nt("sepia"),
    P = nt("skew"),
    E = nt("space"),
    C = nt("translate"),
    k = () => ["auto", "contain", "none"],
    w = () => ["auto", "hidden", "clip", "visible", "scroll"],
    A = () => ["auto", j, t],
    T = () => [j, t],
    R = () => ["", jt, ae],
    M = () => ["auto", Ce, j],
    F = () => [
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
    O = () => ["solid", "dashed", "dotted", "double", "none"],
    D = () => [
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
      "plus-lighter",
    ],
    U = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    V = () => ["", "0", j],
    G = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    L = () => [Ce, Dr],
    z = () => [Ce, j];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [or],
      spacing: [jt, ae],
      blur: ["none", "", se, j],
      brightness: L(),
      borderColor: [n],
      borderRadius: ["none", "", "full", se, j],
      borderSpacing: T(),
      borderWidth: R(),
      contrast: L(),
      grayscale: V(),
      hueRotate: z(),
      invert: V(),
      gap: T(),
      gradientColorStops: [n],
      gradientColorStopPositions: [Ll, ae],
      inset: A(),
      margin: A(),
      opacity: L(),
      padding: T(),
      saturate: L(),
      scale: L(),
      sepia: V(),
      skew: z(),
      space: T(),
      translate: T(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", j] }],
      container: ["container"],
      columns: [{ columns: [se] }],
      "break-after": [{ "break-after": G() }],
      "break-before": [{ "break-before": G() }],
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
      "object-position": [{ object: [...F(), j] }],
      overflow: [{ overflow: w() }],
      "overflow-x": [{ "overflow-x": w() }],
      "overflow-y": [{ "overflow-y": w() }],
      overscroll: [{ overscroll: k() }],
      "overscroll-x": [{ "overscroll-x": k() }],
      "overscroll-y": [{ "overscroll-y": k() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [p] }],
      "inset-x": [{ "inset-x": [p] }],
      "inset-y": [{ "inset-y": [p] }],
      start: [{ start: [p] }],
      end: [{ end: [p] }],
      top: [{ top: [p] }],
      right: [{ right: [p] }],
      bottom: [{ bottom: [p] }],
      left: [{ left: [p] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", sr, j] }],
      basis: [{ basis: A() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", j] }],
      grow: [{ grow: V() }],
      shrink: [{ shrink: V() }],
      order: [{ order: ["first", "last", "none", sr, j] }],
      "grid-cols": [{ "grid-cols": [or] }],
      "col-start-end": [{ col: ["auto", { span: ["full", sr, j] }, j] }],
      "col-start": [{ "col-start": M() }],
      "col-end": [{ "col-end": M() }],
      "grid-rows": [{ "grid-rows": [or] }],
      "row-start-end": [{ row: ["auto", { span: [sr, j] }, j] }],
      "row-start": [{ "row-start": M() }],
      "row-end": [{ "row-end": M() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", j] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", j] }],
      gap: [{ gap: [g] }],
      "gap-x": [{ "gap-x": [g] }],
      "gap-y": [{ "gap-y": [g] }],
      "justify-content": [{ justify: ["normal", ...U()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...U(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...U(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [y] }],
      px: [{ px: [y] }],
      py: [{ py: [y] }],
      ps: [{ ps: [y] }],
      pe: [{ pe: [y] }],
      pt: [{ pt: [y] }],
      pr: [{ pr: [y] }],
      pb: [{ pb: [y] }],
      pl: [{ pl: [y] }],
      m: [{ m: [_] }],
      mx: [{ mx: [_] }],
      my: [{ my: [_] }],
      ms: [{ ms: [_] }],
      me: [{ me: [_] }],
      mt: [{ mt: [_] }],
      mr: [{ mr: [_] }],
      mb: [{ mb: [_] }],
      ml: [{ ml: [_] }],
      "space-x": [{ "space-x": [E] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [E] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", j, t] }],
      "min-w": [{ "min-w": [j, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            j,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [se] },
            se,
          ],
        },
      ],
      h: [{ h: [j, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [j, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [j, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [j, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", se, ae] }],
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
            Dr,
          ],
        },
      ],
      "font-family": [{ font: [or] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            j,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", Ce, Dr] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            jt,
            j,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", j] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", j] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [n] }],
      "placeholder-opacity": [{ "placeholder-opacity": [b] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [n] }],
      "text-opacity": [{ "text-opacity": [b] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...O(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", jt, ae] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", jt, j] }],
      "text-decoration-color": [{ decoration: [n] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: T() }],
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
            j,
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
      content: [{ content: ["none", j] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [b] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...F(), Ul] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", Il] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            Vl,
          ],
        },
      ],
      "bg-color": [{ bg: [n] }],
      "gradient-from-pos": [{ from: [u] }],
      "gradient-via-pos": [{ via: [u] }],
      "gradient-to-pos": [{ to: [u] }],
      "gradient-from": [{ from: [f] }],
      "gradient-via": [{ via: [f] }],
      "gradient-to": [{ to: [f] }],
      rounded: [{ rounded: [a] }],
      "rounded-s": [{ "rounded-s": [a] }],
      "rounded-e": [{ "rounded-e": [a] }],
      "rounded-t": [{ "rounded-t": [a] }],
      "rounded-r": [{ "rounded-r": [a] }],
      "rounded-b": [{ "rounded-b": [a] }],
      "rounded-l": [{ "rounded-l": [a] }],
      "rounded-ss": [{ "rounded-ss": [a] }],
      "rounded-se": [{ "rounded-se": [a] }],
      "rounded-ee": [{ "rounded-ee": [a] }],
      "rounded-es": [{ "rounded-es": [a] }],
      "rounded-tl": [{ "rounded-tl": [a] }],
      "rounded-tr": [{ "rounded-tr": [a] }],
      "rounded-br": [{ "rounded-br": [a] }],
      "rounded-bl": [{ "rounded-bl": [a] }],
      "border-w": [{ border: [o] }],
      "border-w-x": [{ "border-x": [o] }],
      "border-w-y": [{ "border-y": [o] }],
      "border-w-s": [{ "border-s": [o] }],
      "border-w-e": [{ "border-e": [o] }],
      "border-w-t": [{ "border-t": [o] }],
      "border-w-r": [{ "border-r": [o] }],
      "border-w-b": [{ "border-b": [o] }],
      "border-w-l": [{ "border-l": [o] }],
      "border-opacity": [{ "border-opacity": [b] }],
      "border-style": [{ border: [...O(), "hidden"] }],
      "divide-x": [{ "divide-x": [o] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [o] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [b] }],
      "divide-style": [{ divide: O() }],
      "border-color": [{ border: [i] }],
      "border-color-x": [{ "border-x": [i] }],
      "border-color-y": [{ "border-y": [i] }],
      "border-color-t": [{ "border-t": [i] }],
      "border-color-r": [{ "border-r": [i] }],
      "border-color-b": [{ "border-b": [i] }],
      "border-color-l": [{ "border-l": [i] }],
      "divide-color": [{ divide: [i] }],
      "outline-style": [{ outline: ["", ...O()] }],
      "outline-offset": [{ "outline-offset": [jt, j] }],
      "outline-w": [{ outline: [jt, ae] }],
      "outline-color": [{ outline: [n] }],
      "ring-w": [{ ring: R() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [n] }],
      "ring-opacity": [{ "ring-opacity": [b] }],
      "ring-offset-w": [{ "ring-offset": [jt, ae] }],
      "ring-offset-color": [{ "ring-offset": [n] }],
      shadow: [{ shadow: ["", "inner", "none", se, zl] }],
      "shadow-color": [{ shadow: [or] }],
      opacity: [{ opacity: [b] }],
      "mix-blend": [{ "mix-blend": D() }],
      "bg-blend": [{ "bg-blend": D() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [e] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [l] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", se, j] }],
      grayscale: [{ grayscale: [h] }],
      "hue-rotate": [{ "hue-rotate": [c] }],
      invert: [{ invert: [v] }],
      saturate: [{ saturate: [d] }],
      sepia: [{ sepia: [S] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [e] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [l] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [h] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
      "backdrop-invert": [{ "backdrop-invert": [v] }],
      "backdrop-opacity": [{ "backdrop-opacity": [b] }],
      "backdrop-saturate": [{ "backdrop-saturate": [d] }],
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
            j,
          ],
        },
      ],
      duration: [{ duration: z() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", j] }],
      delay: [{ delay: z() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", j] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [m] }],
      "scale-x": [{ "scale-x": [m] }],
      "scale-y": [{ "scale-y": [m] }],
      rotate: [{ rotate: [sr, j] }],
      "translate-x": [{ "translate-x": [C] }],
      "translate-y": [{ "translate-y": [C] }],
      "skew-x": [{ "skew-x": [P] }],
      "skew-y": [{ "skew-y": [P] }],
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
            j,
          ],
        },
      ],
      accent: [{ accent: ["auto", n] }],
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
            j,
          ],
        },
      ],
      "caret-color": [{ caret: [n] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": T() }],
      "scroll-mx": [{ "scroll-mx": T() }],
      "scroll-my": [{ "scroll-my": T() }],
      "scroll-ms": [{ "scroll-ms": T() }],
      "scroll-me": [{ "scroll-me": T() }],
      "scroll-mt": [{ "scroll-mt": T() }],
      "scroll-mr": [{ "scroll-mr": T() }],
      "scroll-mb": [{ "scroll-mb": T() }],
      "scroll-ml": [{ "scroll-ml": T() }],
      "scroll-p": [{ "scroll-p": T() }],
      "scroll-px": [{ "scroll-px": T() }],
      "scroll-py": [{ "scroll-py": T() }],
      "scroll-ps": [{ "scroll-ps": T() }],
      "scroll-pe": [{ "scroll-pe": T() }],
      "scroll-pt": [{ "scroll-pt": T() }],
      "scroll-pr": [{ "scroll-pr": T() }],
      "scroll-pb": [{ "scroll-pb": T() }],
      "scroll-pl": [{ "scroll-pl": T() }],
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
        { "will-change": ["auto", "scroll", "contents", "transform", j] },
      ],
      fill: [{ fill: [n, "none"] }],
      "stroke-w": [{ stroke: [jt, ae, Dr] }],
      stroke: [{ stroke: [n, "none"] }],
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
}
function Wl(
  n,
  { cacheSize: t, prefix: e, separator: r, extend: i = {}, override: a = {} }
) {
  jr(n, "cacheSize", t), jr(n, "prefix", e), jr(n, "separator", r);
  for (const s in a) Kl(n[s], a[s]);
  for (const s in i) Yl(n[s], i[s]);
  return n;
}
function jr(n, t, e) {
  e !== void 0 && (n[t] = e);
}
function Kl(n, t) {
  if (t) for (const e in t) jr(n, e, t[e]);
}
function Yl(n, t) {
  if (t)
    for (const e in t) {
      const r = t[e];
      r !== void 0 && (n[e] = (n[e] || []).concat(r));
    }
}
function Xl(n, ...t) {
  return typeof n == "function" ? Sn(Cn, n, ...t) : Sn(() => Wl(Cn(), n), ...t);
}
const ql = Sn(Cn);
var Ql = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
  Ls = (n) => n || void 0,
  yr = (...n) => Ls(Ts(n).filter(Boolean).join(" ")),
  en = null,
  Yt = {},
  wn = !1,
  lr =
    (...n) =>
    (t) =>
      t.twMerge
        ? ((!en || wn) &&
            ((wn = !1),
            (en = Tt(Yt)
              ? ql
              : Xl({
                  ...Yt,
                  extend: {
                    theme: Yt.theme,
                    classGroups: Yt.classGroups,
                    conflictingClassGroupModifiers:
                      Yt.conflictingClassGroupModifiers,
                    conflictingClassGroups: Yt.conflictingClassGroups,
                    ...Yt.extend,
                  },
                }))),
          Ls(en(yr(n))))
        : yr(n),
  _a = (n, t) => {
    for (let e in t)
      n.hasOwnProperty(e) ? (n[e] = yr(n[e], t[e])) : (n[e] = t[e]);
    return n;
  },
  Jl = (n, t) => {
    let {
        extend: e = null,
        slots: r = {},
        variants: i = {},
        compoundVariants: a = [],
        compoundSlots: s = [],
        defaultVariants: o = {},
      } = n,
      l = { ...Ql, ...t },
      h =
        e != null && e.base
          ? yr(e.base, n == null ? void 0 : n.base)
          : n == null
            ? void 0
            : n.base,
      c = e != null && e.variants && !Tt(e.variants) ? Rs(i, e.variants) : i,
      v =
        e != null && e.defaultVariants && !Tt(e.defaultVariants)
          ? { ...e.defaultVariants, ...o }
          : o;
    !Tt(l.twMergeConfig) &&
      !vl(l.twMergeConfig, Yt) &&
      ((wn = !0), (Yt = l.twMergeConfig));
    let g = Tt(e == null ? void 0 : e.slots),
      f = Tt(r)
        ? {}
        : {
            base: yr(
              n == null ? void 0 : n.base,
              g && (e == null ? void 0 : e.base)
            ),
            ...r,
          },
      u = g
        ? f
        : _a(
            { ...(e == null ? void 0 : e.slots) },
            Tt(f) ? { base: n == null ? void 0 : n.base } : f
          ),
      p = Tt(e == null ? void 0 : e.compoundVariants)
        ? a
        : Es(e == null ? void 0 : e.compoundVariants, a),
      _ = (y) => {
        if (Tt(c) && Tt(r) && g)
          return lr(
            h,
            y == null ? void 0 : y.class,
            y == null ? void 0 : y.className
          )(l);
        if (p && !Array.isArray(p))
          throw new TypeError(
            `The "compoundVariants" prop must be an array. Received: ${typeof p}`
          );
        if (s && !Array.isArray(s))
          throw new TypeError(
            `The "compoundSlots" prop must be an array. Received: ${typeof s}`
          );
        let d = (T, R, M = [], F) => {
            let O = M;
            if (typeof R == "string")
              O = O.concat(
                pa(R)
                  .split(" ")
                  .map((D) => `${T}:${D}`)
              );
            else if (Array.isArray(R))
              O = O.concat(R.reduce((D, U) => D.concat(`${T}:${U}`), []));
            else if (typeof R == "object" && typeof F == "string") {
              for (let D in R)
                if (R.hasOwnProperty(D) && D === F) {
                  let U = R[D];
                  if (U && typeof U == "string") {
                    let V = pa(U);
                    O[F]
                      ? (O[F] = O[F].concat(
                          V.split(" ").map((G) => `${T}:${G}`)
                        ))
                      : (O[F] = V.split(" ").map((G) => `${T}:${G}`));
                  } else
                    Array.isArray(U) &&
                      U.length > 0 &&
                      (O[F] = U.reduce((V, G) => V.concat(`${T}:${G}`), []));
                }
            }
            return O;
          },
          m = (T, R = c, M = null, F = null) => {
            var O;
            let D = R[T];
            if (!D || Tt(D)) return null;
            let U =
              (O = F == null ? void 0 : F[T]) != null
                ? O
                : y == null
                  ? void 0
                  : y[T];
            if (U === null) return null;
            let V = ga(U),
              G =
                (Array.isArray(l.responsiveVariants) &&
                  l.responsiveVariants.length > 0) ||
                l.responsiveVariants === !0,
              L = v == null ? void 0 : v[T],
              z = [];
            if (typeof V == "object" && G)
              for (let [Ct, lt] of Object.entries(V)) {
                let x = D[lt];
                if (Ct === "initial") {
                  L = lt;
                  continue;
                }
                (Array.isArray(l.responsiveVariants) &&
                  !l.responsiveVariants.includes(Ct)) ||
                  (z = d(Ct, x, z, M));
              }
            let at = V != null && typeof V != "object" ? V : ga(L),
              Z = D[at || "false"];
            return typeof z == "object" && typeof M == "string" && z[M]
              ? _a(z, Z)
              : z.length > 0
                ? (z.push(Z), z)
                : Z;
          },
          S = () => (c ? Object.keys(c).map((T) => m(T, c)) : null),
          P = (T, R) => {
            if (!c || typeof c != "object") return null;
            let M = new Array();
            for (let F in c) {
              let O = m(F, c, T, R),
                D = T === "base" && typeof O == "string" ? O : O && O[T];
              D && (M[M.length] = D);
            }
            return M;
          },
          E = {};
        for (let T in y) y[T] !== void 0 && (E[T] = y[T]);
        let C = (T, R) => {
            var M;
            let F =
              typeof (y == null ? void 0 : y[T]) == "object"
                ? { [T]: (M = y[T]) == null ? void 0 : M.initial }
                : {};
            return { ...v, ...E, ...F, ...R };
          },
          k = (T = [], R) => {
            let M = [];
            for (let { class: F, className: O, ...D } of T) {
              let U = !0;
              for (let [V, G] of Object.entries(D)) {
                let L = C(V, R);
                if (Array.isArray(G)) {
                  if (!G.includes(L[V])) {
                    U = !1;
                    break;
                  }
                } else if (L[V] !== G) {
                  U = !1;
                  break;
                }
              }
              U && (F && M.push(F), O && M.push(O));
            }
            return M;
          },
          w = (T) => {
            let R = k(p, T);
            if (!Array.isArray(R)) return R;
            let M = {};
            for (let F of R)
              if (
                (typeof F == "string" && (M.base = lr(M.base, F)(l)),
                typeof F == "object")
              )
                for (let [O, D] of Object.entries(F)) M[O] = lr(M[O], D)(l);
            return M;
          },
          A = (T) => {
            if (s.length < 1) return null;
            let R = {};
            for (let { slots: M = [], class: F, className: O, ...D } of s) {
              if (!Tt(D)) {
                let U = !0;
                for (let V of Object.keys(D)) {
                  let G = C(V, T)[V];
                  if (
                    G === void 0 ||
                    (Array.isArray(D[V]) ? !D[V].includes(G) : D[V] !== G)
                  ) {
                    U = !1;
                    break;
                  }
                }
                if (!U) continue;
              }
              for (let U of M) (R[U] = R[U] || []), R[U].push([F, O]);
            }
            return R;
          };
        if (!Tt(r) || !g) {
          let T = {};
          if (typeof u == "object" && !Tt(u))
            for (let R of Object.keys(u))
              T[R] = (M) => {
                var F, O;
                return lr(
                  u[R],
                  P(R, M),
                  ((F = w(M)) != null ? F : [])[R],
                  ((O = A(M)) != null ? O : [])[R],
                  M == null ? void 0 : M.class,
                  M == null ? void 0 : M.className
                )(l);
              };
          return T;
        }
        return lr(
          h,
          S(),
          k(p),
          y == null ? void 0 : y.class,
          y == null ? void 0 : y.className
        )(l);
      },
      b = () => {
        if (!(!c || typeof c != "object")) return Object.keys(c);
      };
    return (
      (_.variantKeys = b()),
      (_.extend = e),
      (_.base = h),
      (_.slots = u),
      (_.variants = c),
      (_.defaultVariants = v),
      (_.compoundSlots = s),
      (_.compoundVariants = p),
      _
    );
  };
function Zl(n) {
  return Object.keys(n).reduce(
    (t, e) => (n[e] === void 0 ? t : t + `${e}:${n[e]};`),
    ""
  );
}
Zl({
  position: "absolute",
  opacity: 0,
  "pointer-events": "none",
  margin: 0,
  transform: "translateX(-100%)",
});
function ya(n) {
  function t(e) {
    return e(n), () => {};
  }
  return { subscribe: t };
}
const Ir = (n) =>
    new Proxy(n, {
      get(t, e, r) {
        return Reflect.get(t, e, r);
      },
      ownKeys(t) {
        return Reflect.ownKeys(t).filter((e) => e !== "action");
      },
    }),
  ba = (n) => typeof n == "function";
th("empty");
function th(n, t) {
  const { stores: e, action: r, returned: i } = {},
    a = (() => {
      if (e && i)
        return ks(e, (o) => {
          const l = i(o);
          if (ba(l)) {
            const h = (...c) =>
              Ir({ ...l(...c), [`data-melt-${n}`]: "", action: r ?? De });
            return (h.action = r ?? De), h;
          }
          return Ir({ ...l, [`data-melt-${n}`]: "", action: r ?? De });
        });
      {
        const o = i,
          l = o == null ? void 0 : o();
        if (ba(l)) {
          const h = (...c) =>
            Ir({ ...l(...c), [`data-melt-${n}`]: "", action: r ?? De });
          return (h.action = r ?? De), ya(h);
        }
        return ya(Ir({ ...l, [`data-melt-${n}`]: "", action: r ?? De }));
      }
    })(),
    s = r ?? (() => {});
  return (s.subscribe = a.subscribe), s;
}
function De() {}
function Ds(n, t, e, r) {
  const i = Array.isArray(t) ? t : [t];
  return (
    i.forEach((a) => n.addEventListener(a, e, r)),
    () => {
      i.forEach((a) => n.removeEventListener(a, e, r));
    }
  );
}
function eh(n, ...t) {
  const e = {};
  for (const r of Object.keys(n)) t.includes(r) || (e[r] = n[r]);
  return e;
}
const rh = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*",
  A: "a",
  P: "p",
};
je(void 0, (n) => {
  function t(r) {
    n(r), n(void 0);
  }
  return Ds(document, "pointerup", t, { passive: !1, capture: !0 });
});
je(void 0, (n) => {
  function t(r) {
    r && r.key === rh.ESCAPE && n(r), n(void 0);
  }
  return Ds(document, "keydown", t, { passive: !1 });
});
je(!1), je(!1), je(void 0);
const ih = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: !1,
  numberOfMonths: 1,
  pagedNavigation: !1,
  weekStartsOn: 0,
  fixedWeeks: !1,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: !1,
  readonly: !1,
  weekdayFormat: "narrow",
};
({
  ...eh(
    ih,
    "isDateDisabled",
    "isDateUnavailable",
    "value",
    "locale",
    "disabled",
    "readonly",
    "minValue",
    "maxValue",
    "weekdayFormat"
  ),
});
Jl({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: { variant: "default", size: "default" },
});
var Sa =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function nh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Ln = { exports: {} },
  ni = {},
  Is = {},
  W = {};
(function (n) {
  Object.defineProperty(n, "__esModule", { value: !0 }),
    (n._registerNode = n.Konva = n.glob = void 0);
  const t = Math.PI / 180;
  function e() {
    return (
      typeof window < "u" &&
      ({}.toString.call(window) === "[object Window]" ||
        {}.toString.call(window) === "[object global]")
    );
  }
  (n.glob =
    typeof Sa < "u"
      ? Sa
      : typeof window < "u"
        ? window
        : typeof WorkerGlobalScope < "u"
          ? self
          : {}),
    (n.Konva = {
      _global: n.glob,
      version: "9.3.12",
      isBrowser: e(),
      isUnminified: /param/.test(function (i) {}.toString()),
      dblClickWindow: 400,
      getAngle(i) {
        return n.Konva.angleDeg ? i * t : i;
      },
      enableTrace: !1,
      pointerEventsEnabled: !0,
      autoDrawEnabled: !0,
      hitOnDragEnabled: !1,
      capturePointerEventsEnabled: !1,
      _mouseListenClick: !1,
      _touchListenClick: !1,
      _pointerListenClick: !1,
      _mouseInDblClickWindow: !1,
      _touchInDblClickWindow: !1,
      _pointerInDblClickWindow: !1,
      _mouseDblClickPointerId: null,
      _touchDblClickPointerId: null,
      _pointerDblClickPointerId: null,
      _fixTextRendering: !1,
      pixelRatio: (typeof window < "u" && window.devicePixelRatio) || 1,
      dragDistance: 3,
      angleDeg: !0,
      showWarnings: !0,
      dragButtons: [0, 1],
      isDragging() {
        return n.Konva.DD.isDragging;
      },
      isTransforming() {
        var i;
        return (i = n.Konva.Transformer) === null || i === void 0
          ? void 0
          : i.isTransforming();
      },
      isDragReady() {
        return !!n.Konva.DD.node;
      },
      releaseCanvasOnDestroy: !0,
      document: n.glob.document,
      _injectGlobal(i) {
        n.glob.Konva = i;
      },
    });
  const r = (i) => {
    n.Konva[i.prototype.getClassName()] = i;
  };
  (n._registerNode = r), n.Konva._injectGlobal(n.Konva);
})(W);
var ct = {};
(function (n) {
  Object.defineProperty(n, "__esModule", { value: !0 }),
    (n.Util = n.Transform = void 0);
  const t = W;
  class e {
    constructor(m = [1, 0, 0, 1, 0, 0]) {
      (this.dirty = !1), (this.m = (m && m.slice()) || [1, 0, 0, 1, 0, 0]);
    }
    reset() {
      (this.m[0] = 1),
        (this.m[1] = 0),
        (this.m[2] = 0),
        (this.m[3] = 1),
        (this.m[4] = 0),
        (this.m[5] = 0);
    }
    copy() {
      return new e(this.m);
    }
    copyInto(m) {
      (m.m[0] = this.m[0]),
        (m.m[1] = this.m[1]),
        (m.m[2] = this.m[2]),
        (m.m[3] = this.m[3]),
        (m.m[4] = this.m[4]),
        (m.m[5] = this.m[5]);
    }
    point(m) {
      var S = this.m;
      return {
        x: S[0] * m.x + S[2] * m.y + S[4],
        y: S[1] * m.x + S[3] * m.y + S[5],
      };
    }
    translate(m, S) {
      return (
        (this.m[4] += this.m[0] * m + this.m[2] * S),
        (this.m[5] += this.m[1] * m + this.m[3] * S),
        this
      );
    }
    scale(m, S) {
      return (
        (this.m[0] *= m),
        (this.m[1] *= m),
        (this.m[2] *= S),
        (this.m[3] *= S),
        this
      );
    }
    rotate(m) {
      var S = Math.cos(m),
        P = Math.sin(m),
        E = this.m[0] * S + this.m[2] * P,
        C = this.m[1] * S + this.m[3] * P,
        k = this.m[0] * -P + this.m[2] * S,
        w = this.m[1] * -P + this.m[3] * S;
      return (
        (this.m[0] = E), (this.m[1] = C), (this.m[2] = k), (this.m[3] = w), this
      );
    }
    getTranslation() {
      return { x: this.m[4], y: this.m[5] };
    }
    skew(m, S) {
      var P = this.m[0] + this.m[2] * S,
        E = this.m[1] + this.m[3] * S,
        C = this.m[2] + this.m[0] * m,
        k = this.m[3] + this.m[1] * m;
      return (
        (this.m[0] = P), (this.m[1] = E), (this.m[2] = C), (this.m[3] = k), this
      );
    }
    multiply(m) {
      var S = this.m[0] * m.m[0] + this.m[2] * m.m[1],
        P = this.m[1] * m.m[0] + this.m[3] * m.m[1],
        E = this.m[0] * m.m[2] + this.m[2] * m.m[3],
        C = this.m[1] * m.m[2] + this.m[3] * m.m[3],
        k = this.m[0] * m.m[4] + this.m[2] * m.m[5] + this.m[4],
        w = this.m[1] * m.m[4] + this.m[3] * m.m[5] + this.m[5];
      return (
        (this.m[0] = S),
        (this.m[1] = P),
        (this.m[2] = E),
        (this.m[3] = C),
        (this.m[4] = k),
        (this.m[5] = w),
        this
      );
    }
    invert() {
      var m = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]),
        S = this.m[3] * m,
        P = -this.m[1] * m,
        E = -this.m[2] * m,
        C = this.m[0] * m,
        k = m * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
        w = m * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      return (
        (this.m[0] = S),
        (this.m[1] = P),
        (this.m[2] = E),
        (this.m[3] = C),
        (this.m[4] = k),
        (this.m[5] = w),
        this
      );
    }
    getMatrix() {
      return this.m;
    }
    decompose() {
      var m = this.m[0],
        S = this.m[1],
        P = this.m[2],
        E = this.m[3],
        C = this.m[4],
        k = this.m[5],
        w = m * E - S * P;
      let A = {
        x: C,
        y: k,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0,
      };
      if (m != 0 || S != 0) {
        var T = Math.sqrt(m * m + S * S);
        (A.rotation = S > 0 ? Math.acos(m / T) : -Math.acos(m / T)),
          (A.scaleX = T),
          (A.scaleY = w / T),
          (A.skewX = (m * P + S * E) / w),
          (A.skewY = 0);
      } else if (P != 0 || E != 0) {
        var R = Math.sqrt(P * P + E * E);
        (A.rotation =
          Math.PI / 2 - (E > 0 ? Math.acos(-P / R) : -Math.acos(P / R))),
          (A.scaleX = w / R),
          (A.scaleY = R),
          (A.skewX = 0),
          (A.skewY = (m * P + S * E) / w);
      }
      return (A.rotation = n.Util._getRotation(A.rotation)), A;
    }
  }
  n.Transform = e;
  var r = "[object Array]",
    i = "[object Number]",
    a = "[object String]",
    s = "[object Boolean]",
    o = Math.PI / 180,
    l = 180 / Math.PI,
    h = "#",
    c = "",
    v = "0",
    g = "Konva warning: ",
    f = "Konva error: ",
    u = "rgb(",
    p = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 132, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 255, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 203],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [119, 128, 144],
      slategrey: [119, 128, 144],
      snow: [255, 255, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      transparent: [255, 255, 255, 0],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 5],
    },
    _ = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/,
    b = [];
  const y =
    (typeof requestAnimationFrame < "u" && requestAnimationFrame) ||
    function (d) {
      setTimeout(d, 60);
    };
  n.Util = {
    _isElement(d) {
      return !!(d && d.nodeType == 1);
    },
    _isFunction(d) {
      return !!(d && d.constructor && d.call && d.apply);
    },
    _isPlainObject(d) {
      return !!d && d.constructor === Object;
    },
    _isArray(d) {
      return Object.prototype.toString.call(d) === r;
    },
    _isNumber(d) {
      return (
        Object.prototype.toString.call(d) === i && !isNaN(d) && isFinite(d)
      );
    },
    _isString(d) {
      return Object.prototype.toString.call(d) === a;
    },
    _isBoolean(d) {
      return Object.prototype.toString.call(d) === s;
    },
    isObject(d) {
      return d instanceof Object;
    },
    isValidSelector(d) {
      if (typeof d != "string") return !1;
      var m = d[0];
      return m === "#" || m === "." || m === m.toUpperCase();
    },
    _sign(d) {
      return d === 0 || d > 0 ? 1 : -1;
    },
    requestAnimFrame(d) {
      b.push(d),
        b.length === 1 &&
          y(function () {
            const m = b;
            (b = []),
              m.forEach(function (S) {
                S();
              });
          });
    },
    createCanvasElement() {
      var d = document.createElement("canvas");
      try {
        d.style = d.style || {};
      } catch {}
      return d;
    },
    createImageElement() {
      return document.createElement("img");
    },
    _isInDocument(d) {
      for (; (d = d.parentNode); ) if (d == document) return !0;
      return !1;
    },
    _urlToImage(d, m) {
      var S = n.Util.createImageElement();
      (S.onload = function () {
        m(S);
      }),
        (S.src = d);
    },
    _rgbToHex(d, m, S) {
      return ((1 << 24) + (d << 16) + (m << 8) + S).toString(16).slice(1);
    },
    _hexToRgb(d) {
      d = d.replace(h, c);
      var m = parseInt(d, 16);
      return { r: (m >> 16) & 255, g: (m >> 8) & 255, b: m & 255 };
    },
    getRandomColor() {
      for (
        var d = ((Math.random() * 16777215) << 0).toString(16);
        d.length < 6;

      )
        d = v + d;
      return h + d;
    },
    getRGB(d) {
      var m;
      return d in p
        ? ((m = p[d]), { r: m[0], g: m[1], b: m[2] })
        : d[0] === h
          ? this._hexToRgb(d.substring(1))
          : d.substr(0, 4) === u
            ? ((m = _.exec(d.replace(/ /g, ""))),
              {
                r: parseInt(m[1], 10),
                g: parseInt(m[2], 10),
                b: parseInt(m[3], 10),
              })
            : { r: 0, g: 0, b: 0 };
    },
    colorToRGBA(d) {
      return (
        (d = d || "black"),
        n.Util._namedColorToRBA(d) ||
          n.Util._hex3ColorToRGBA(d) ||
          n.Util._hex4ColorToRGBA(d) ||
          n.Util._hex6ColorToRGBA(d) ||
          n.Util._hex8ColorToRGBA(d) ||
          n.Util._rgbColorToRGBA(d) ||
          n.Util._rgbaColorToRGBA(d) ||
          n.Util._hslColorToRGBA(d)
      );
    },
    _namedColorToRBA(d) {
      var m = p[d.toLowerCase()];
      return m ? { r: m[0], g: m[1], b: m[2], a: 1 } : null;
    },
    _rgbColorToRGBA(d) {
      if (d.indexOf("rgb(") === 0) {
        d = d.match(/rgb\(([^)]+)\)/)[1];
        var m = d.split(/ *, */).map(Number);
        return { r: m[0], g: m[1], b: m[2], a: 1 };
      }
    },
    _rgbaColorToRGBA(d) {
      if (d.indexOf("rgba(") === 0) {
        d = d.match(/rgba\(([^)]+)\)/)[1];
        var m = d
          .split(/ *, */)
          .map((S, P) =>
            S.slice(-1) === "%"
              ? P === 3
                ? parseInt(S) / 100
                : (parseInt(S) / 100) * 255
              : Number(S)
          );
        return { r: m[0], g: m[1], b: m[2], a: m[3] };
      }
    },
    _hex8ColorToRGBA(d) {
      if (d[0] === "#" && d.length === 9)
        return {
          r: parseInt(d.slice(1, 3), 16),
          g: parseInt(d.slice(3, 5), 16),
          b: parseInt(d.slice(5, 7), 16),
          a: parseInt(d.slice(7, 9), 16) / 255,
        };
    },
    _hex6ColorToRGBA(d) {
      if (d[0] === "#" && d.length === 7)
        return {
          r: parseInt(d.slice(1, 3), 16),
          g: parseInt(d.slice(3, 5), 16),
          b: parseInt(d.slice(5, 7), 16),
          a: 1,
        };
    },
    _hex4ColorToRGBA(d) {
      if (d[0] === "#" && d.length === 5)
        return {
          r: parseInt(d[1] + d[1], 16),
          g: parseInt(d[2] + d[2], 16),
          b: parseInt(d[3] + d[3], 16),
          a: parseInt(d[4] + d[4], 16) / 255,
        };
    },
    _hex3ColorToRGBA(d) {
      if (d[0] === "#" && d.length === 4)
        return {
          r: parseInt(d[1] + d[1], 16),
          g: parseInt(d[2] + d[2], 16),
          b: parseInt(d[3] + d[3], 16),
          a: 1,
        };
    },
    _hslColorToRGBA(d) {
      if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(d)) {
        const [m, ...S] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(d),
          P = Number(S[0]) / 360,
          E = Number(S[1]) / 100,
          C = Number(S[2]) / 100;
        let k, w, A;
        if (E === 0)
          return (
            (A = C * 255),
            { r: Math.round(A), g: Math.round(A), b: Math.round(A), a: 1 }
          );
        C < 0.5 ? (k = C * (1 + E)) : (k = C + E - C * E);
        const T = 2 * C - k,
          R = [0, 0, 0];
        for (let M = 0; M < 3; M++)
          (w = P + (1 / 3) * -(M - 1)),
            w < 0 && w++,
            w > 1 && w--,
            6 * w < 1
              ? (A = T + (k - T) * 6 * w)
              : 2 * w < 1
                ? (A = k)
                : 3 * w < 2
                  ? (A = T + (k - T) * (2 / 3 - w) * 6)
                  : (A = T),
            (R[M] = A * 255);
        return {
          r: Math.round(R[0]),
          g: Math.round(R[1]),
          b: Math.round(R[2]),
          a: 1,
        };
      }
    },
    haveIntersection(d, m) {
      return !(
        m.x > d.x + d.width ||
        m.x + m.width < d.x ||
        m.y > d.y + d.height ||
        m.y + m.height < d.y
      );
    },
    cloneObject(d) {
      var m = {};
      for (var S in d)
        this._isPlainObject(d[S])
          ? (m[S] = this.cloneObject(d[S]))
          : this._isArray(d[S])
            ? (m[S] = this.cloneArray(d[S]))
            : (m[S] = d[S]);
      return m;
    },
    cloneArray(d) {
      return d.slice(0);
    },
    degToRad(d) {
      return d * o;
    },
    radToDeg(d) {
      return d * l;
    },
    _degToRad(d) {
      return (
        n.Util.warn(
          "Util._degToRad is removed. Please use public Util.degToRad instead."
        ),
        n.Util.degToRad(d)
      );
    },
    _radToDeg(d) {
      return (
        n.Util.warn(
          "Util._radToDeg is removed. Please use public Util.radToDeg instead."
        ),
        n.Util.radToDeg(d)
      );
    },
    _getRotation(d) {
      return t.Konva.angleDeg ? n.Util.radToDeg(d) : d;
    },
    _capitalize(d) {
      return d.charAt(0).toUpperCase() + d.slice(1);
    },
    throw(d) {
      throw new Error(f + d);
    },
    error(d) {
      console.error(f + d);
    },
    warn(d) {
      t.Konva.showWarnings && console.warn(g + d);
    },
    each(d, m) {
      for (var S in d) m(S, d[S]);
    },
    _inRange(d, m, S) {
      return m <= d && d < S;
    },
    _getProjectionToSegment(d, m, S, P, E, C) {
      var k,
        w,
        A,
        T = (d - S) * (d - S) + (m - P) * (m - P);
      if (T == 0) (k = d), (w = m), (A = (E - S) * (E - S) + (C - P) * (C - P));
      else {
        var R = ((E - d) * (S - d) + (C - m) * (P - m)) / T;
        R < 0
          ? ((k = d), (w = m), (A = (d - E) * (d - E) + (m - C) * (m - C)))
          : R > 1
            ? ((k = S), (w = P), (A = (S - E) * (S - E) + (P - C) * (P - C)))
            : ((k = d + R * (S - d)),
              (w = m + R * (P - m)),
              (A = (k - E) * (k - E) + (w - C) * (w - C)));
      }
      return [k, w, A];
    },
    _getProjectionToLine(d, m, S) {
      var P = n.Util.cloneObject(d),
        E = Number.MAX_VALUE;
      return (
        m.forEach(function (C, k) {
          if (!(!S && k === m.length - 1)) {
            var w = m[(k + 1) % m.length],
              A = n.Util._getProjectionToSegment(C.x, C.y, w.x, w.y, d.x, d.y),
              T = A[0],
              R = A[1],
              M = A[2];
            M < E && ((P.x = T), (P.y = R), (E = M));
          }
        }),
        P
      );
    },
    _prepareArrayForTween(d, m, S) {
      var P,
        E = [],
        C = [];
      if (d.length > m.length) {
        var k = m;
        (m = d), (d = k);
      }
      for (P = 0; P < d.length; P += 2) E.push({ x: d[P], y: d[P + 1] });
      for (P = 0; P < m.length; P += 2) C.push({ x: m[P], y: m[P + 1] });
      var w = [];
      return (
        C.forEach(function (A) {
          var T = n.Util._getProjectionToLine(A, E, S);
          w.push(T.x), w.push(T.y);
        }),
        w
      );
    },
    _prepareToStringify(d) {
      var m;
      d.visitedByCircularReferenceRemoval = !0;
      for (var S in d)
        if (d.hasOwnProperty(S) && d[S] && typeof d[S] == "object") {
          if (
            ((m = Object.getOwnPropertyDescriptor(d, S)),
            d[S].visitedByCircularReferenceRemoval || n.Util._isElement(d[S]))
          )
            if (m.configurable) delete d[S];
            else return null;
          else if (n.Util._prepareToStringify(d[S]) === null)
            if (m.configurable) delete d[S];
            else return null;
        }
      return delete d.visitedByCircularReferenceRemoval, d;
    },
    _assign(d, m) {
      for (var S in m) d[S] = m[S];
      return d;
    },
    _getFirstPointerId(d) {
      return d.touches ? d.changedTouches[0].identifier : d.pointerId || 999;
    },
    releaseCanvas(...d) {
      t.Konva.releaseCanvasOnDestroy &&
        d.forEach((m) => {
          (m.width = 0), (m.height = 0);
        });
    },
    drawRoundedRectPath(d, m, S, P) {
      let E = 0,
        C = 0,
        k = 0,
        w = 0;
      typeof P == "number"
        ? (E = C = k = w = Math.min(P, m / 2, S / 2))
        : ((E = Math.min(P[0] || 0, m / 2, S / 2)),
          (C = Math.min(P[1] || 0, m / 2, S / 2)),
          (w = Math.min(P[2] || 0, m / 2, S / 2)),
          (k = Math.min(P[3] || 0, m / 2, S / 2))),
        d.moveTo(E, 0),
        d.lineTo(m - C, 0),
        d.arc(m - C, C, C, (Math.PI * 3) / 2, 0, !1),
        d.lineTo(m, S - w),
        d.arc(m - w, S - w, w, 0, Math.PI / 2, !1),
        d.lineTo(k, S),
        d.arc(k, S - k, k, Math.PI / 2, Math.PI, !1),
        d.lineTo(0, E),
        d.arc(E, E, E, Math.PI, (Math.PI * 3) / 2, !1);
    },
  };
})(ct);
var ot = {},
  K = {},
  I = {};
Object.defineProperty(I, "__esModule", { value: !0 });
I.getComponentValidator =
  I.getBooleanValidator =
  I.getNumberArrayValidator =
  I.getFunctionValidator =
  I.getStringOrGradientValidator =
  I.getStringValidator =
  I.getNumberOrAutoValidator =
  I.getNumberOrArrayOfNumbersValidator =
  I.getNumberValidator =
  I.alphaComponent =
  I.RGBComponent =
    void 0;
const te = W,
  dt = ct;
function ee(n) {
  return dt.Util._isString(n)
    ? '"' + n + '"'
    : Object.prototype.toString.call(n) === "[object Number]" ||
        dt.Util._isBoolean(n)
      ? n
      : Object.prototype.toString.call(n);
}
function ah(n) {
  return n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
}
I.RGBComponent = ah;
function sh(n) {
  return n > 1 ? 1 : n < 1e-4 ? 1e-4 : n;
}
I.alphaComponent = sh;
function oh() {
  if (te.Konva.isUnminified)
    return function (n, t) {
      return (
        dt.Util._isNumber(n) ||
          dt.Util.warn(
            ee(n) +
              ' is a not valid value for "' +
              t +
              '" attribute. The value should be a number.'
          ),
        n
      );
    };
}
I.getNumberValidator = oh;
function lh(n) {
  if (te.Konva.isUnminified)
    return function (t, e) {
      let r = dt.Util._isNumber(t),
        i = dt.Util._isArray(t) && t.length == n;
      return (
        !r &&
          !i &&
          dt.Util.warn(
            ee(t) +
              ' is a not valid value for "' +
              e +
              '" attribute. The value should be a number or Array<number>(' +
              n +
              ")"
          ),
        t
      );
    };
}
I.getNumberOrArrayOfNumbersValidator = lh;
function hh() {
  if (te.Konva.isUnminified)
    return function (n, t) {
      var e = dt.Util._isNumber(n),
        r = n === "auto";
      return (
        e ||
          r ||
          dt.Util.warn(
            ee(n) +
              ' is a not valid value for "' +
              t +
              '" attribute. The value should be a number or "auto".'
          ),
        n
      );
    };
}
I.getNumberOrAutoValidator = hh;
function ch() {
  if (te.Konva.isUnminified)
    return function (n, t) {
      return (
        dt.Util._isString(n) ||
          dt.Util.warn(
            ee(n) +
              ' is a not valid value for "' +
              t +
              '" attribute. The value should be a string.'
          ),
        n
      );
    };
}
I.getStringValidator = ch;
function dh() {
  if (te.Konva.isUnminified)
    return function (n, t) {
      const e = dt.Util._isString(n),
        r =
          Object.prototype.toString.call(n) === "[object CanvasGradient]" ||
          (n && n.addColorStop);
      return (
        e ||
          r ||
          dt.Util.warn(
            ee(n) +
              ' is a not valid value for "' +
              t +
              '" attribute. The value should be a string or a native gradient.'
          ),
        n
      );
    };
}
I.getStringOrGradientValidator = dh;
function uh() {
  if (te.Konva.isUnminified)
    return function (n, t) {
      return (
        dt.Util._isFunction(n) ||
          dt.Util.warn(
            ee(n) +
              ' is a not valid value for "' +
              t +
              '" attribute. The value should be a function.'
          ),
        n
      );
    };
}
I.getFunctionValidator = uh;
function fh() {
  if (te.Konva.isUnminified)
    return function (n, t) {
      const e = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      return (
        (e && n instanceof e) ||
          (dt.Util._isArray(n)
            ? n.forEach(function (r) {
                dt.Util._isNumber(r) ||
                  dt.Util.warn(
                    '"' +
                      t +
                      '" attribute has non numeric element ' +
                      r +
                      ". Make sure that all elements are numbers."
                  );
              })
            : dt.Util.warn(
                ee(n) +
                  ' is a not valid value for "' +
                  t +
                  '" attribute. The value should be a array of numbers.'
              )),
        n
      );
    };
}
I.getNumberArrayValidator = fh;
function gh() {
  if (te.Konva.isUnminified)
    return function (n, t) {
      var e = n === !0 || n === !1;
      return (
        e ||
          dt.Util.warn(
            ee(n) +
              ' is a not valid value for "' +
              t +
              '" attribute. The value should be a boolean.'
          ),
        n
      );
    };
}
I.getBooleanValidator = gh;
function ph(n) {
  if (te.Konva.isUnminified)
    return function (t, e) {
      return (
        t == null ||
          dt.Util.isObject(t) ||
          dt.Util.warn(
            ee(t) +
              ' is a not valid value for "' +
              e +
              '" attribute. The value should be an object with properties ' +
              n
          ),
        t
      );
    };
}
I.getComponentValidator = ph;
(function (n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.Factory = void 0);
  const t = ct,
    e = I;
  var r = "get",
    i = "set";
  n.Factory = {
    addGetterSetter(a, s, o, l, h) {
      n.Factory.addGetter(a, s, o),
        n.Factory.addSetter(a, s, l, h),
        n.Factory.addOverloadedGetterSetter(a, s);
    },
    addGetter(a, s, o) {
      var l = r + t.Util._capitalize(s);
      a.prototype[l] =
        a.prototype[l] ||
        function () {
          var h = this.attrs[s];
          return h === void 0 ? o : h;
        };
    },
    addSetter(a, s, o, l) {
      var h = i + t.Util._capitalize(s);
      a.prototype[h] || n.Factory.overWriteSetter(a, s, o, l);
    },
    overWriteSetter(a, s, o, l) {
      var h = i + t.Util._capitalize(s);
      a.prototype[h] = function (c) {
        return (
          o && c !== void 0 && c !== null && (c = o.call(this, c, s)),
          this._setAttr(s, c),
          l && l.call(this),
          this
        );
      };
    },
    addComponentsGetterSetter(a, s, o, l, h) {
      var c = o.length,
        v = t.Util._capitalize,
        g = r + v(s),
        f = i + v(s),
        u,
        p;
      a.prototype[g] = function () {
        var b = {};
        for (u = 0; u < c; u++) (p = o[u]), (b[p] = this.getAttr(s + v(p)));
        return b;
      };
      var _ = (0, e.getComponentValidator)(o);
      (a.prototype[f] = function (b) {
        var y = this.attrs[s],
          d;
        l && (b = l.call(this, b)), _ && _.call(this, b, s);
        for (d in b) b.hasOwnProperty(d) && this._setAttr(s + v(d), b[d]);
        return (
          b ||
            o.forEach((m) => {
              this._setAttr(s + v(m), void 0);
            }),
          this._fireChangeEvent(s, y, b),
          h && h.call(this),
          this
        );
      }),
        n.Factory.addOverloadedGetterSetter(a, s);
    },
    addOverloadedGetterSetter(a, s) {
      var o = t.Util._capitalize(s),
        l = i + o,
        h = r + o;
      a.prototype[s] = function () {
        return arguments.length ? (this[l](arguments[0]), this) : this[h]();
      };
    },
    addDeprecatedGetterSetter(a, s, o, l) {
      t.Util.error("Adding deprecated " + s);
      var h = r + t.Util._capitalize(s),
        c =
          s +
          " property is deprecated and will be removed soon. Look at Konva change log for more information.";
      (a.prototype[h] = function () {
        t.Util.error(c);
        var v = this.attrs[s];
        return v === void 0 ? o : v;
      }),
        n.Factory.addSetter(a, s, l, function () {
          t.Util.error(c);
        }),
        n.Factory.addOverloadedGetterSetter(a, s);
    },
    backCompat(a, s) {
      t.Util.each(s, function (o, l) {
        var h = a.prototype[l],
          c = r + t.Util._capitalize(o),
          v = i + t.Util._capitalize(o);
        function g() {
          h.apply(this, arguments),
            t.Util.error(
              '"' +
                o +
                '" method is deprecated and will be removed soon. Use ""' +
                l +
                '" instead.'
            );
        }
        (a.prototype[o] = g), (a.prototype[c] = g), (a.prototype[v] = g);
      });
    },
    afterSetFilter() {
      this._filterUpToDate = !1;
    },
  };
})(K);
var It = {},
  Jt = {};
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.HitContext = Jt.SceneContext = Jt.Context = void 0;
const Us = ct,
  vh = W;
function mh(n) {
  var t = [],
    e = n.length,
    r = Us.Util,
    i,
    a;
  for (i = 0; i < e; i++)
    (a = n[i]),
      r._isNumber(a)
        ? (a = Math.round(a * 1e3) / 1e3)
        : r._isString(a) || (a = a + ""),
      t.push(a);
  return t;
}
var Ca = ",",
  _h = "(",
  yh = ")",
  bh = "([",
  Sh = "])",
  Ch = ";",
  wh = "()",
  xh = "=",
  wa = [
    "arc",
    "arcTo",
    "beginPath",
    "bezierCurveTo",
    "clearRect",
    "clip",
    "closePath",
    "createLinearGradient",
    "createPattern",
    "createRadialGradient",
    "drawImage",
    "ellipse",
    "fill",
    "fillText",
    "getImageData",
    "createImageData",
    "lineTo",
    "moveTo",
    "putImageData",
    "quadraticCurveTo",
    "rect",
    "roundRect",
    "restore",
    "rotate",
    "save",
    "scale",
    "setLineDash",
    "setTransform",
    "stroke",
    "strokeText",
    "transform",
    "translate",
  ],
  Ph = [
    "fillStyle",
    "strokeStyle",
    "shadowColor",
    "shadowBlur",
    "shadowOffsetX",
    "shadowOffsetY",
    "letterSpacing",
    "lineCap",
    "lineDashOffset",
    "lineJoin",
    "lineWidth",
    "miterLimit",
    "direction",
    "font",
    "textAlign",
    "textBaseline",
    "globalAlpha",
    "globalCompositeOperation",
    "imageSmoothingEnabled",
  ];
const kh = 100;
class ai {
  constructor(t) {
    (this.canvas = t),
      vh.Konva.enableTrace && ((this.traceArr = []), this._enableTrace());
  }
  fillShape(t) {
    t.fillEnabled() && this._fill(t);
  }
  _fill(t) {}
  strokeShape(t) {
    t.hasStroke() && this._stroke(t);
  }
  _stroke(t) {}
  fillStrokeShape(t) {
    t.attrs.fillAfterStrokeEnabled
      ? (this.strokeShape(t), this.fillShape(t))
      : (this.fillShape(t), this.strokeShape(t));
  }
  getTrace(t, e) {
    var r = this.traceArr,
      i = r.length,
      a = "",
      s,
      o,
      l,
      h;
    for (s = 0; s < i; s++)
      (o = r[s]),
        (l = o.method),
        l
          ? ((h = o.args),
            (a += l),
            t
              ? (a += wh)
              : Us.Util._isArray(h[0])
                ? (a += bh + h.join(Ca) + Sh)
                : (e &&
                    (h = h.map((c) =>
                      typeof c == "number" ? Math.floor(c) : c
                    )),
                  (a += _h + h.join(Ca) + yh)))
          : ((a += o.property), t || (a += xh + o.val)),
        (a += Ch);
    return a;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(t) {
    var e = this.traceArr,
      r;
    e.push(t), (r = e.length), r >= kh && e.shift();
  }
  reset() {
    var t = this.getCanvas().getPixelRatio();
    this.setTransform(1 * t, 0, 0, 1 * t, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(t) {
    var e = this.getCanvas();
    t
      ? this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0)
      : this.clearRect(
          0,
          0,
          e.getWidth() / e.pixelRatio,
          e.getHeight() / e.pixelRatio
        );
  }
  _applyLineCap(t) {
    const e = t.attrs.lineCap;
    e && this.setAttr("lineCap", e);
  }
  _applyOpacity(t) {
    var e = t.getAbsoluteOpacity();
    e !== 1 && this.setAttr("globalAlpha", e);
  }
  _applyLineJoin(t) {
    const e = t.attrs.lineJoin;
    e && this.setAttr("lineJoin", e);
  }
  setAttr(t, e) {
    this._context[t] = e;
  }
  arc(t, e, r, i, a, s) {
    this._context.arc(t, e, r, i, a, s);
  }
  arcTo(t, e, r, i, a) {
    this._context.arcTo(t, e, r, i, a);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(t, e, r, i, a, s) {
    this._context.bezierCurveTo(t, e, r, i, a, s);
  }
  clearRect(t, e, r, i) {
    this._context.clearRect(t, e, r, i);
  }
  clip(...t) {
    this._context.clip.apply(this._context, t);
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(t, e) {
    var r = arguments;
    if (r.length === 2) return this._context.createImageData(t, e);
    if (r.length === 1) return this._context.createImageData(t);
  }
  createLinearGradient(t, e, r, i) {
    return this._context.createLinearGradient(t, e, r, i);
  }
  createPattern(t, e) {
    return this._context.createPattern(t, e);
  }
  createRadialGradient(t, e, r, i, a, s) {
    return this._context.createRadialGradient(t, e, r, i, a, s);
  }
  drawImage(t, e, r, i, a, s, o, l, h) {
    var c = arguments,
      v = this._context;
    c.length === 3
      ? v.drawImage(t, e, r)
      : c.length === 5
        ? v.drawImage(t, e, r, i, a)
        : c.length === 9 && v.drawImage(t, e, r, i, a, s, o, l, h);
  }
  ellipse(t, e, r, i, a, s, o, l) {
    this._context.ellipse(t, e, r, i, a, s, o, l);
  }
  isPointInPath(t, e, r, i) {
    return r
      ? this._context.isPointInPath(r, t, e, i)
      : this._context.isPointInPath(t, e, i);
  }
  fill(...t) {
    this._context.fill.apply(this._context, t);
  }
  fillRect(t, e, r, i) {
    this._context.fillRect(t, e, r, i);
  }
  strokeRect(t, e, r, i) {
    this._context.strokeRect(t, e, r, i);
  }
  fillText(t, e, r, i) {
    i ? this._context.fillText(t, e, r, i) : this._context.fillText(t, e, r);
  }
  measureText(t) {
    return this._context.measureText(t);
  }
  getImageData(t, e, r, i) {
    return this._context.getImageData(t, e, r, i);
  }
  lineTo(t, e) {
    this._context.lineTo(t, e);
  }
  moveTo(t, e) {
    this._context.moveTo(t, e);
  }
  rect(t, e, r, i) {
    this._context.rect(t, e, r, i);
  }
  roundRect(t, e, r, i, a) {
    this._context.roundRect(t, e, r, i, a);
  }
  putImageData(t, e, r) {
    this._context.putImageData(t, e, r);
  }
  quadraticCurveTo(t, e, r, i) {
    this._context.quadraticCurveTo(t, e, r, i);
  }
  restore() {
    this._context.restore();
  }
  rotate(t) {
    this._context.rotate(t);
  }
  save() {
    this._context.save();
  }
  scale(t, e) {
    this._context.scale(t, e);
  }
  setLineDash(t) {
    this._context.setLineDash
      ? this._context.setLineDash(t)
      : "mozDash" in this._context
        ? (this._context.mozDash = t)
        : "webkitLineDash" in this._context &&
          (this._context.webkitLineDash = t);
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(t, e, r, i, a, s) {
    this._context.setTransform(t, e, r, i, a, s);
  }
  stroke(t) {
    t ? this._context.stroke(t) : this._context.stroke();
  }
  strokeText(t, e, r, i) {
    this._context.strokeText(t, e, r, i);
  }
  transform(t, e, r, i, a, s) {
    this._context.transform(t, e, r, i, a, s);
  }
  translate(t, e) {
    this._context.translate(t, e);
  }
  _enableTrace() {
    var t = this,
      e = wa.length,
      r = this.setAttr,
      i,
      a,
      s = function (o) {
        var l = t[o],
          h;
        t[o] = function () {
          return (
            (a = mh(Array.prototype.slice.call(arguments, 0))),
            (h = l.apply(t, arguments)),
            t._trace({ method: o, args: a }),
            h
          );
        };
      };
    for (i = 0; i < e; i++) s(wa[i]);
    t.setAttr = function () {
      r.apply(t, arguments);
      var o = arguments[0],
        l = arguments[1];
      (o === "shadowOffsetX" || o === "shadowOffsetY" || o === "shadowBlur") &&
        (l = l / this.canvas.getPixelRatio()),
        t._trace({ property: o, val: l });
    };
  }
  _applyGlobalCompositeOperation(t) {
    const e = t.attrs.globalCompositeOperation;
    var r = !e || e === "source-over";
    r || this.setAttr("globalCompositeOperation", e);
  }
}
Jt.Context = ai;
Ph.forEach(function (n) {
  Object.defineProperty(ai.prototype, n, {
    get() {
      return this._context[n];
    },
    set(t) {
      this._context[n] = t;
    },
  });
});
class Ah extends ai {
  constructor(t, { willReadFrequently: e = !1 } = {}) {
    super(t),
      (this._context = t._canvas.getContext("2d", { willReadFrequently: e }));
  }
  _fillColor(t) {
    var e = t.fill();
    this.setAttr("fillStyle", e), t._fillFunc(this);
  }
  _fillPattern(t) {
    this.setAttr("fillStyle", t._getFillPattern()), t._fillFunc(this);
  }
  _fillLinearGradient(t) {
    var e = t._getLinearGradient();
    e && (this.setAttr("fillStyle", e), t._fillFunc(this));
  }
  _fillRadialGradient(t) {
    const e = t._getRadialGradient();
    e && (this.setAttr("fillStyle", e), t._fillFunc(this));
  }
  _fill(t) {
    const e = t.fill(),
      r = t.getFillPriority();
    if (e && r === "color") {
      this._fillColor(t);
      return;
    }
    const i = t.getFillPatternImage();
    if (i && r === "pattern") {
      this._fillPattern(t);
      return;
    }
    const a = t.getFillLinearGradientColorStops();
    if (a && r === "linear-gradient") {
      this._fillLinearGradient(t);
      return;
    }
    const s = t.getFillRadialGradientColorStops();
    if (s && r === "radial-gradient") {
      this._fillRadialGradient(t);
      return;
    }
    e
      ? this._fillColor(t)
      : i
        ? this._fillPattern(t)
        : a
          ? this._fillLinearGradient(t)
          : s && this._fillRadialGradient(t);
  }
  _strokeLinearGradient(t) {
    const e = t.getStrokeLinearGradientStartPoint(),
      r = t.getStrokeLinearGradientEndPoint(),
      i = t.getStrokeLinearGradientColorStops(),
      a = this.createLinearGradient(e.x, e.y, r.x, r.y);
    if (i) {
      for (var s = 0; s < i.length; s += 2) a.addColorStop(i[s], i[s + 1]);
      this.setAttr("strokeStyle", a);
    }
  }
  _stroke(t) {
    var e = t.dash(),
      r = t.getStrokeScaleEnabled();
    if (t.hasStroke()) {
      if (!r) {
        this.save();
        var i = this.getCanvas().getPixelRatio();
        this.setTransform(i, 0, 0, i, 0, 0);
      }
      this._applyLineCap(t),
        e &&
          t.dashEnabled() &&
          (this.setLineDash(e), this.setAttr("lineDashOffset", t.dashOffset())),
        this.setAttr("lineWidth", t.strokeWidth()),
        t.getShadowForStrokeEnabled() ||
          this.setAttr("shadowColor", "rgba(0,0,0,0)");
      var a = t.getStrokeLinearGradientColorStops();
      a
        ? this._strokeLinearGradient(t)
        : this.setAttr("strokeStyle", t.stroke()),
        t._strokeFunc(this),
        r || this.restore();
    }
  }
  _applyShadow(t) {
    var e,
      r,
      i,
      a = (e = t.getShadowRGBA()) !== null && e !== void 0 ? e : "black",
      s = (r = t.getShadowBlur()) !== null && r !== void 0 ? r : 5,
      o =
        (i = t.getShadowOffset()) !== null && i !== void 0 ? i : { x: 0, y: 0 },
      l = t.getAbsoluteScale(),
      h = this.canvas.getPixelRatio(),
      c = l.x * h,
      v = l.y * h;
    this.setAttr("shadowColor", a),
      this.setAttr("shadowBlur", s * Math.min(Math.abs(c), Math.abs(v))),
      this.setAttr("shadowOffsetX", o.x * c),
      this.setAttr("shadowOffsetY", o.y * v);
  }
}
Jt.SceneContext = Ah;
class Th extends ai {
  constructor(t) {
    super(t),
      (this._context = t._canvas.getContext("2d", { willReadFrequently: !0 }));
  }
  _fill(t) {
    this.save(),
      this.setAttr("fillStyle", t.colorKey),
      t._fillFuncHit(this),
      this.restore();
  }
  strokeShape(t) {
    t.hasHitStroke() && this._stroke(t);
  }
  _stroke(t) {
    if (t.hasHitStroke()) {
      const a = t.getStrokeScaleEnabled();
      if (!a) {
        this.save();
        var e = this.getCanvas().getPixelRatio();
        this.setTransform(e, 0, 0, e, 0, 0);
      }
      this._applyLineCap(t);
      var r = t.hitStrokeWidth(),
        i = r === "auto" ? t.strokeWidth() : r;
      this.setAttr("lineWidth", i),
        this.setAttr("strokeStyle", t.colorKey),
        t._strokeFuncHit(this),
        a || this.restore();
    }
  }
}
Jt.HitContext = Th;
Object.defineProperty(It, "__esModule", { value: !0 });
It.HitCanvas = It.SceneCanvas = It.Canvas = void 0;
const Jr = ct,
  Bs = Jt,
  Vs = W,
  Eh = K,
  Rh = I;
var Ur;
function Fh() {
  if (Ur) return Ur;
  var n = Jr.Util.createCanvasElement(),
    t = n.getContext("2d");
  return (
    (Ur = (function () {
      var e = Vs.Konva._global.devicePixelRatio || 1,
        r =
          t.webkitBackingStorePixelRatio ||
          t.mozBackingStorePixelRatio ||
          t.msBackingStorePixelRatio ||
          t.oBackingStorePixelRatio ||
          t.backingStorePixelRatio ||
          1;
      return e / r;
    })()),
    Jr.Util.releaseCanvas(n),
    Ur
  );
}
class si {
  constructor(t) {
    (this.pixelRatio = 1),
      (this.width = 0),
      (this.height = 0),
      (this.isCache = !1);
    var e = t || {},
      r = e.pixelRatio || Vs.Konva.pixelRatio || Fh();
    (this.pixelRatio = r),
      (this._canvas = Jr.Util.createCanvasElement()),
      (this._canvas.style.padding = "0"),
      (this._canvas.style.margin = "0"),
      (this._canvas.style.border = "0"),
      (this._canvas.style.background = "transparent"),
      (this._canvas.style.position = "absolute"),
      (this._canvas.style.top = "0"),
      (this._canvas.style.left = "0");
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(t) {
    var e = this.pixelRatio;
    (this.pixelRatio = t),
      this.setSize(this.getWidth() / e, this.getHeight() / e);
  }
  setWidth(t) {
    (this.width = this._canvas.width = t * this.pixelRatio),
      (this._canvas.style.width = t + "px");
    var e = this.pixelRatio,
      r = this.getContext()._context;
    r.scale(e, e);
  }
  setHeight(t) {
    (this.height = this._canvas.height = t * this.pixelRatio),
      (this._canvas.style.height = t + "px");
    var e = this.pixelRatio,
      r = this.getContext()._context;
    r.scale(e, e);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(t, e) {
    this.setWidth(t || 0), this.setHeight(e || 0);
  }
  toDataURL(t, e) {
    try {
      return this._canvas.toDataURL(t, e);
    } catch {
      try {
        return this._canvas.toDataURL();
      } catch (i) {
        return (
          Jr.Util.error(
            "Unable to get data URL. " +
              i.message +
              " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."
          ),
          ""
        );
      }
    }
  }
}
It.Canvas = si;
Eh.Factory.addGetterSetter(
  si,
  "pixelRatio",
  void 0,
  (0, Rh.getNumberValidator)()
);
class Mh extends si {
  constructor(t = { width: 0, height: 0, willReadFrequently: !1 }) {
    super(t),
      (this.context = new Bs.SceneContext(this, {
        willReadFrequently: t.willReadFrequently,
      })),
      this.setSize(t.width, t.height);
  }
}
It.SceneCanvas = Mh;
class Nh extends si {
  constructor(t = { width: 0, height: 0 }) {
    super(t),
      (this.hitCanvas = !0),
      (this.context = new Bs.HitContext(this)),
      this.setSize(t.width, t.height);
  }
}
It.HitCanvas = Nh;
var oi = {};
(function (n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.DD = void 0);
  const t = W,
    e = ct;
  (n.DD = {
    get isDragging() {
      var r = !1;
      return (
        n.DD._dragElements.forEach((i) => {
          i.dragStatus === "dragging" && (r = !0);
        }),
        r
      );
    },
    justDragged: !1,
    get node() {
      var r;
      return (
        n.DD._dragElements.forEach((i) => {
          r = i.node;
        }),
        r
      );
    },
    _dragElements: new Map(),
    _drag(r) {
      const i = [];
      n.DD._dragElements.forEach((a, s) => {
        const { node: o } = a,
          l = o.getStage();
        l.setPointersPositions(r),
          a.pointerId === void 0 &&
            (a.pointerId = e.Util._getFirstPointerId(r));
        const h = l._changedPointerPositions.find((g) => g.id === a.pointerId);
        if (h) {
          if (a.dragStatus !== "dragging") {
            var c = o.dragDistance(),
              v = Math.max(
                Math.abs(h.x - a.startPointerPos.x),
                Math.abs(h.y - a.startPointerPos.y)
              );
            if (v < c || (o.startDrag({ evt: r }), !o.isDragging())) return;
          }
          o._setDragPosition(r, a), i.push(o);
        }
      }),
        i.forEach((a) => {
          a.fire("dragmove", { type: "dragmove", target: a, evt: r }, !0);
        });
    },
    _endDragBefore(r) {
      const i = [];
      n.DD._dragElements.forEach((a) => {
        const { node: s } = a,
          o = s.getStage();
        if (
          (r && o.setPointersPositions(r),
          !o._changedPointerPositions.find((c) => c.id === a.pointerId))
        )
          return;
        (a.dragStatus === "dragging" || a.dragStatus === "stopped") &&
          ((n.DD.justDragged = !0),
          (t.Konva._mouseListenClick = !1),
          (t.Konva._touchListenClick = !1),
          (t.Konva._pointerListenClick = !1),
          (a.dragStatus = "stopped"));
        const h =
          a.node.getLayer() || (a.node instanceof t.Konva.Stage && a.node);
        h && i.indexOf(h) === -1 && i.push(h);
      }),
        i.forEach((a) => {
          a.draw();
        });
    },
    _endDragAfter(r) {
      n.DD._dragElements.forEach((i, a) => {
        i.dragStatus === "stopped" &&
          i.node.fire(
            "dragend",
            { type: "dragend", target: i.node, evt: r },
            !0
          ),
          i.dragStatus !== "dragging" && n.DD._dragElements.delete(a);
      });
    },
  }),
    t.Konva.isBrowser &&
      (window.addEventListener("mouseup", n.DD._endDragBefore, !0),
      window.addEventListener("touchend", n.DD._endDragBefore, !0),
      window.addEventListener("mousemove", n.DD._drag),
      window.addEventListener("touchmove", n.DD._drag),
      window.addEventListener("mouseup", n.DD._endDragAfter, !1),
      window.addEventListener("touchend", n.DD._endDragAfter, !1));
})(oi);
Object.defineProperty(ot, "__esModule", { value: !0 });
ot.Node = void 0;
const X = ct,
  Er = K,
  hr = It,
  oe = W,
  Gt = oi,
  pt = I;
var Wr = "absoluteOpacity",
  Br = "allEventListeners",
  Kt = "absoluteTransform",
  xa = "absoluteScale",
  Se = "canvas",
  Oh = "Change",
  Gh = "children",
  Lh = "konva",
  xn = "listening",
  Pa = "mouseenter",
  ka = "mouseleave",
  Aa = "set",
  Ta = "Shape",
  Kr = " ",
  Ea = "stage",
  le = "transform",
  Dh = "Stage",
  Pn = "visible",
  Ih = [
    "xChange.konva",
    "yChange.konva",
    "scaleXChange.konva",
    "scaleYChange.konva",
    "skewXChange.konva",
    "skewYChange.konva",
    "rotationChange.konva",
    "offsetXChange.konva",
    "offsetYChange.konva",
    "transformsEnabledChange.konva",
  ].join(Kr);
let Uh = 1;
class H {
  constructor(t) {
    (this._id = Uh++),
      (this.eventListeners = {}),
      (this.attrs = {}),
      (this.index = 0),
      (this._allEventListeners = null),
      (this.parent = null),
      (this._cache = new Map()),
      (this._attachedDepsListeners = new Map()),
      (this._lastPos = null),
      (this._batchingTransformChange = !1),
      (this._needClearTransformCache = !1),
      (this._filterUpToDate = !1),
      (this._isUnderCache = !1),
      (this._dragEventId = null),
      (this._shouldFireChangeEvents = !1),
      this.setAttrs(t),
      (this._shouldFireChangeEvents = !0);
  }
  hasChildren() {
    return !1;
  }
  _clearCache(t) {
    (t === le || t === Kt) && this._cache.get(t)
      ? (this._cache.get(t).dirty = !0)
      : t
        ? this._cache.delete(t)
        : this._cache.clear();
  }
  _getCache(t, e) {
    var r = this._cache.get(t),
      i = t === le || t === Kt,
      a = r === void 0 || (i && r.dirty === !0);
    return a && ((r = e.call(this)), this._cache.set(t, r)), r;
  }
  _calculate(t, e, r) {
    if (!this._attachedDepsListeners.get(t)) {
      const i = e.map((a) => a + "Change.konva").join(Kr);
      this.on(i, () => {
        this._clearCache(t);
      }),
        this._attachedDepsListeners.set(t, !0);
    }
    return this._getCache(t, r);
  }
  _getCanvasCache() {
    return this._cache.get(Se);
  }
  _clearSelfAndDescendantCache(t) {
    this._clearCache(t), t === Kt && this.fire("absoluteTransformChange");
  }
  clearCache() {
    if (this._cache.has(Se)) {
      const { scene: t, filter: e, hit: r } = this._cache.get(Se);
      X.Util.releaseCanvas(t, e, r), this._cache.delete(Se);
    }
    return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
  }
  cache(t) {
    var e = t || {},
      r = {};
    (e.x === void 0 ||
      e.y === void 0 ||
      e.width === void 0 ||
      e.height === void 0) &&
      (r = this.getClientRect({
        skipTransform: !0,
        relativeTo: this.getParent() || void 0,
      }));
    var i = Math.ceil(e.width || r.width),
      a = Math.ceil(e.height || r.height),
      s = e.pixelRatio,
      o = e.x === void 0 ? Math.floor(r.x) : e.x,
      l = e.y === void 0 ? Math.floor(r.y) : e.y,
      h = e.offset || 0,
      c = e.drawBorder || !1,
      v = e.hitCanvasPixelRatio || 1;
    if (!i || !a) {
      X.Util.error(
        "Can not cache the node. Width or height of the node equals 0. Caching is skipped."
      );
      return;
    }
    const g = Math.abs(Math.round(r.x) - o) > 0.5 ? 1 : 0,
      f = Math.abs(Math.round(r.y) - l) > 0.5 ? 1 : 0;
    (i += h * 2 + g), (a += h * 2 + f), (o -= h), (l -= h);
    var u = new hr.SceneCanvas({ pixelRatio: s, width: i, height: a }),
      p = new hr.SceneCanvas({
        pixelRatio: s,
        width: 0,
        height: 0,
        willReadFrequently: !0,
      }),
      _ = new hr.HitCanvas({ pixelRatio: v, width: i, height: a }),
      b = u.getContext(),
      y = _.getContext();
    return (
      (_.isCache = !0),
      (u.isCache = !0),
      this._cache.delete(Se),
      (this._filterUpToDate = !1),
      e.imageSmoothingEnabled === !1 &&
        ((u.getContext()._context.imageSmoothingEnabled = !1),
        (p.getContext()._context.imageSmoothingEnabled = !1)),
      b.save(),
      y.save(),
      b.translate(-o, -l),
      y.translate(-o, -l),
      (this._isUnderCache = !0),
      this._clearSelfAndDescendantCache(Wr),
      this._clearSelfAndDescendantCache(xa),
      this.drawScene(u, this),
      this.drawHit(_, this),
      (this._isUnderCache = !1),
      b.restore(),
      y.restore(),
      c &&
        (b.save(),
        b.beginPath(),
        b.rect(0, 0, i, a),
        b.closePath(),
        b.setAttr("strokeStyle", "red"),
        b.setAttr("lineWidth", 5),
        b.stroke(),
        b.restore()),
      this._cache.set(Se, { scene: u, filter: p, hit: _, x: o, y: l }),
      this._requestDraw(),
      this
    );
  }
  isCached() {
    return this._cache.has(Se);
  }
  getClientRect(t) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(t, e) {
    var r = [
        { x: t.x, y: t.y },
        { x: t.x + t.width, y: t.y },
        { x: t.x + t.width, y: t.y + t.height },
        { x: t.x, y: t.y + t.height },
      ],
      i = 1 / 0,
      a = 1 / 0,
      s = -1 / 0,
      o = -1 / 0,
      l = this.getAbsoluteTransform(e);
    return (
      r.forEach(function (h) {
        var c = l.point(h);
        i === void 0 && ((i = s = c.x), (a = o = c.y)),
          (i = Math.min(i, c.x)),
          (a = Math.min(a, c.y)),
          (s = Math.max(s, c.x)),
          (o = Math.max(o, c.y));
      }),
      { x: i, y: a, width: s - i, height: o - a }
    );
  }
  _drawCachedSceneCanvas(t) {
    t.save(), t._applyOpacity(this), t._applyGlobalCompositeOperation(this);
    const e = this._getCanvasCache();
    t.translate(e.x, e.y);
    var r = this._getCachedSceneCanvas(),
      i = r.pixelRatio;
    t.drawImage(r._canvas, 0, 0, r.width / i, r.height / i), t.restore();
  }
  _drawCachedHitCanvas(t) {
    var e = this._getCanvasCache(),
      r = e.hit;
    t.save(),
      t.translate(e.x, e.y),
      t.drawImage(
        r._canvas,
        0,
        0,
        r.width / r.pixelRatio,
        r.height / r.pixelRatio
      ),
      t.restore();
  }
  _getCachedSceneCanvas() {
    var t = this.filters(),
      e = this._getCanvasCache(),
      r = e.scene,
      i = e.filter,
      a = i.getContext(),
      s,
      o,
      l,
      h;
    if (t) {
      if (!this._filterUpToDate) {
        var c = r.pixelRatio;
        i.setSize(r.width / r.pixelRatio, r.height / r.pixelRatio);
        try {
          for (
            s = t.length,
              a.clear(),
              a.drawImage(r._canvas, 0, 0, r.getWidth() / c, r.getHeight() / c),
              o = a.getImageData(0, 0, i.getWidth(), i.getHeight()),
              l = 0;
            l < s;
            l++
          ) {
            if (((h = t[l]), typeof h != "function")) {
              X.Util.error(
                "Filter should be type of function, but got " +
                  typeof h +
                  " instead. Please check correct filters"
              );
              continue;
            }
            h.call(this, o), a.putImageData(o, 0, 0);
          }
        } catch (v) {
          X.Util.error(
            "Unable to apply filter. " +
              v.message +
              " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html."
          );
        }
        this._filterUpToDate = !0;
      }
      return i;
    }
    return r;
  }
  on(t, e) {
    if ((this._cache && this._cache.delete(Br), arguments.length === 3))
      return this._delegate.apply(this, arguments);
    var r = t.split(Kr),
      i = r.length,
      a,
      s,
      o,
      l,
      h;
    for (a = 0; a < i; a++)
      (s = r[a]),
        (o = s.split(".")),
        (l = o[0]),
        (h = o[1] || ""),
        this.eventListeners[l] || (this.eventListeners[l] = []),
        this.eventListeners[l].push({ name: h, handler: e });
    return this;
  }
  off(t, e) {
    var r = (t || "").split(Kr),
      i = r.length,
      a,
      s,
      o,
      l,
      h,
      c;
    if ((this._cache && this._cache.delete(Br), !t))
      for (s in this.eventListeners) this._off(s);
    for (a = 0; a < i; a++)
      if (((o = r[a]), (l = o.split(".")), (h = l[0]), (c = l[1]), h))
        this.eventListeners[h] && this._off(h, c, e);
      else for (s in this.eventListeners) this._off(s, c, e);
    return this;
  }
  dispatchEvent(t) {
    var e = { target: this, type: t.type, evt: t };
    return this.fire(t.type, e), this;
  }
  addEventListener(t, e) {
    return (
      this.on(t, function (r) {
        e.call(this, r.evt);
      }),
      this
    );
  }
  removeEventListener(t) {
    return this.off(t), this;
  }
  _delegate(t, e, r) {
    var i = this;
    this.on(t, function (a) {
      for (var s = a.target.findAncestors(e, !0, i), o = 0; o < s.length; o++)
        (a = X.Util.cloneObject(a)), (a.currentTarget = s[o]), r.call(s[o], a);
    });
  }
  remove() {
    return (
      this.isDragging() && this.stopDrag(),
      Gt.DD._dragElements.delete(this._id),
      this._remove(),
      this
    );
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(Kt),
      this._clearSelfAndDescendantCache(Wr),
      this._clearSelfAndDescendantCache(xa),
      this._clearSelfAndDescendantCache(Ea),
      this._clearSelfAndDescendantCache(Pn),
      this._clearSelfAndDescendantCache(xn);
  }
  _remove() {
    this._clearCaches();
    var t = this.getParent();
    t &&
      t.children &&
      (t.children.splice(this.index, 1),
      t._setChildrenIndices(),
      (this.parent = null));
  }
  destroy() {
    return this.remove(), this.clearCache(), this;
  }
  getAttr(t) {
    var e = "get" + X.Util._capitalize(t);
    return X.Util._isFunction(this[e]) ? this[e]() : this.attrs[t];
  }
  getAncestors() {
    for (var t = this.getParent(), e = []; t; ) e.push(t), (t = t.getParent());
    return e;
  }
  getAttrs() {
    return this.attrs || {};
  }
  setAttrs(t) {
    return (
      this._batchTransformChanges(() => {
        var e, r;
        if (!t) return this;
        for (e in t)
          e !== Gh &&
            ((r = Aa + X.Util._capitalize(e)),
            X.Util._isFunction(this[r])
              ? this[r](t[e])
              : this._setAttr(e, t[e]));
      }),
      this
    );
  }
  isListening() {
    return this._getCache(xn, this._isListening);
  }
  _isListening(t) {
    if (!this.listening()) return !1;
    const r = this.getParent();
    return r && r !== t && this !== t ? r._isListening(t) : !0;
  }
  isVisible() {
    return this._getCache(Pn, this._isVisible);
  }
  _isVisible(t) {
    if (!this.visible()) return !1;
    const r = this.getParent();
    return r && r !== t && this !== t ? r._isVisible(t) : !0;
  }
  shouldDrawHit(t, e = !1) {
    if (t) return this._isVisible(t) && this._isListening(t);
    var r = this.getLayer(),
      i = !1;
    Gt.DD._dragElements.forEach((s) => {
      s.dragStatus === "dragging" &&
        (s.node.nodeType === "Stage" || s.node.getLayer() === r) &&
        (i = !0);
    });
    var a =
      !e && !oe.Konva.hitOnDragEnabled && (i || oe.Konva.isTransforming());
    return this.isListening() && this.isVisible() && !a;
  }
  show() {
    return this.visible(!0), this;
  }
  hide() {
    return this.visible(!1), this;
  }
  getZIndex() {
    return this.index || 0;
  }
  getAbsoluteZIndex() {
    var t = this.getDepth(),
      e = this,
      r = 0,
      i,
      a,
      s,
      o;
    function l(c) {
      for (i = [], a = c.length, s = 0; s < a; s++)
        (o = c[s]),
          r++,
          o.nodeType !== Ta && (i = i.concat(o.getChildren().slice())),
          o._id === e._id && (s = a);
      i.length > 0 && i[0].getDepth() <= t && l(i);
    }
    const h = this.getStage();
    return e.nodeType !== Dh && h && l(h.getChildren()), r;
  }
  getDepth() {
    for (var t = 0, e = this.parent; e; ) t++, (e = e.parent);
    return t;
  }
  _batchTransformChanges(t) {
    (this._batchingTransformChange = !0),
      t(),
      (this._batchingTransformChange = !1),
      this._needClearTransformCache &&
        (this._clearCache(le), this._clearSelfAndDescendantCache(Kt)),
      (this._needClearTransformCache = !1);
  }
  setPosition(t) {
    return (
      this._batchTransformChanges(() => {
        this.x(t.x), this.y(t.y);
      }),
      this
    );
  }
  getPosition() {
    return { x: this.x(), y: this.y() };
  }
  getRelativePointerPosition() {
    const t = this.getStage();
    if (!t) return null;
    var e = t.getPointerPosition();
    if (!e) return null;
    var r = this.getAbsoluteTransform().copy();
    return r.invert(), r.point(e);
  }
  getAbsolutePosition(t) {
    let e = !1,
      r = this.parent;
    for (; r; ) {
      if (r.isCached()) {
        e = !0;
        break;
      }
      r = r.parent;
    }
    e && !t && (t = !0);
    var i = this.getAbsoluteTransform(t).getMatrix(),
      a = new X.Transform(),
      s = this.offset();
    return (a.m = i.slice()), a.translate(s.x, s.y), a.getTranslation();
  }
  setAbsolutePosition(t) {
    const { x: e, y: r, ...i } = this._clearTransform();
    (this.attrs.x = e), (this.attrs.y = r), this._clearCache(le);
    var a = this._getAbsoluteTransform().copy();
    return (
      a.invert(),
      a.translate(t.x, t.y),
      (t = {
        x: this.attrs.x + a.getTranslation().x,
        y: this.attrs.y + a.getTranslation().y,
      }),
      this._setTransform(i),
      this.setPosition({ x: t.x, y: t.y }),
      this._clearCache(le),
      this._clearSelfAndDescendantCache(Kt),
      this
    );
  }
  _setTransform(t) {
    var e;
    for (e in t) this.attrs[e] = t[e];
  }
  _clearTransform() {
    var t = {
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      scaleX: this.scaleX(),
      scaleY: this.scaleY(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      skewX: this.skewX(),
      skewY: this.skewY(),
    };
    return (
      (this.attrs.x = 0),
      (this.attrs.y = 0),
      (this.attrs.rotation = 0),
      (this.attrs.scaleX = 1),
      (this.attrs.scaleY = 1),
      (this.attrs.offsetX = 0),
      (this.attrs.offsetY = 0),
      (this.attrs.skewX = 0),
      (this.attrs.skewY = 0),
      t
    );
  }
  move(t) {
    var e = t.x,
      r = t.y,
      i = this.x(),
      a = this.y();
    return (
      e !== void 0 && (i += e),
      r !== void 0 && (a += r),
      this.setPosition({ x: i, y: a }),
      this
    );
  }
  _eachAncestorReverse(t, e) {
    var r = [],
      i = this.getParent(),
      a,
      s;
    if (!(e && e._id === this._id)) {
      for (r.unshift(this); i && (!e || i._id !== e._id); )
        r.unshift(i), (i = i.parent);
      for (a = r.length, s = 0; s < a; s++) t(r[s]);
    }
  }
  rotate(t) {
    return this.rotation(this.rotation() + t), this;
  }
  moveToTop() {
    if (!this.parent)
      return (
        X.Util.warn("Node has no parent. moveToTop function is ignored."), !1
      );
    var t = this.index,
      e = this.parent.getChildren().length;
    return t < e - 1
      ? (this.parent.children.splice(t, 1),
        this.parent.children.push(this),
        this.parent._setChildrenIndices(),
        !0)
      : !1;
  }
  moveUp() {
    if (!this.parent)
      return X.Util.warn("Node has no parent. moveUp function is ignored."), !1;
    var t = this.index,
      e = this.parent.getChildren().length;
    return t < e - 1
      ? (this.parent.children.splice(t, 1),
        this.parent.children.splice(t + 1, 0, this),
        this.parent._setChildrenIndices(),
        !0)
      : !1;
  }
  moveDown() {
    if (!this.parent)
      return (
        X.Util.warn("Node has no parent. moveDown function is ignored."), !1
      );
    var t = this.index;
    return t > 0
      ? (this.parent.children.splice(t, 1),
        this.parent.children.splice(t - 1, 0, this),
        this.parent._setChildrenIndices(),
        !0)
      : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return (
        X.Util.warn("Node has no parent. moveToBottom function is ignored."), !1
      );
    var t = this.index;
    return t > 0
      ? (this.parent.children.splice(t, 1),
        this.parent.children.unshift(this),
        this.parent._setChildrenIndices(),
        !0)
      : !1;
  }
  setZIndex(t) {
    if (!this.parent)
      return (
        X.Util.warn("Node has no parent. zIndex parameter is ignored."), this
      );
    (t < 0 || t >= this.parent.children.length) &&
      X.Util.warn(
        "Unexpected value " +
          t +
          " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " +
          (this.parent.children.length - 1) +
          "."
      );
    var e = this.index;
    return (
      this.parent.children.splice(e, 1),
      this.parent.children.splice(t, 0, this),
      this.parent._setChildrenIndices(),
      this
    );
  }
  getAbsoluteOpacity() {
    return this._getCache(Wr, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    var t = this.opacity(),
      e = this.getParent();
    return e && !e._isUnderCache && (t *= e.getAbsoluteOpacity()), t;
  }
  moveTo(t) {
    return this.getParent() !== t && (this._remove(), t.add(this)), this;
  }
  toObject() {
    var t = this.getAttrs(),
      e,
      r,
      i,
      a,
      s;
    const o = { attrs: {}, className: this.getClassName() };
    for (e in t)
      (r = t[e]),
        (s =
          X.Util.isObject(r) &&
          !X.Util._isPlainObject(r) &&
          !X.Util._isArray(r)),
        !s &&
          ((i = typeof this[e] == "function" && this[e]),
          delete t[e],
          (a = i ? i.call(this) : null),
          (t[e] = r),
          a !== r && (o.attrs[e] = r));
    return X.Util._prepareToStringify(o);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(t, e, r) {
    var i = [];
    e && this._isMatch(t) && i.push(this);
    for (var a = this.parent; a; ) {
      if (a === r) return i;
      a._isMatch(t) && i.push(a), (a = a.parent);
    }
    return i;
  }
  isAncestorOf(t) {
    return !1;
  }
  findAncestor(t, e, r) {
    return this.findAncestors(t, e, r)[0];
  }
  _isMatch(t) {
    if (!t) return !1;
    if (typeof t == "function") return t(this);
    var e = t.replace(/ /g, "").split(","),
      r = e.length,
      i,
      a;
    for (i = 0; i < r; i++)
      if (
        ((a = e[i]),
        X.Util.isValidSelector(a) ||
          (X.Util.warn(
            'Selector "' +
              a +
              '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'
          ),
          X.Util.warn(
            'If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'
          ),
          X.Util.warn("Konva is awesome, right?")),
        a.charAt(0) === "#")
      ) {
        if (this.id() === a.slice(1)) return !0;
      } else if (a.charAt(0) === ".") {
        if (this.hasName(a.slice(1))) return !0;
      } else if (this.className === a || this.nodeType === a) return !0;
    return !1;
  }
  getLayer() {
    var t = this.getParent();
    return t ? t.getLayer() : null;
  }
  getStage() {
    return this._getCache(Ea, this._getStage);
  }
  _getStage() {
    var t = this.getParent();
    return t ? t.getStage() : null;
  }
  fire(t, e = {}, r) {
    return (
      (e.target = e.target || this),
      r ? this._fireAndBubble(t, e) : this._fire(t, e),
      this
    );
  }
  getAbsoluteTransform(t) {
    return t
      ? this._getAbsoluteTransform(t)
      : this._getCache(Kt, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(t) {
    var e;
    if (t)
      return (
        (e = new X.Transform()),
        this._eachAncestorReverse(function (i) {
          var a = i.transformsEnabled();
          a === "all"
            ? e.multiply(i.getTransform())
            : a === "position" &&
              e.translate(i.x() - i.offsetX(), i.y() - i.offsetY());
        }, t),
        e
      );
    (e = this._cache.get(Kt) || new X.Transform()),
      this.parent ? this.parent.getAbsoluteTransform().copyInto(e) : e.reset();
    var r = this.transformsEnabled();
    if (r === "all") e.multiply(this.getTransform());
    else if (r === "position") {
      const i = this.attrs.x || 0,
        a = this.attrs.y || 0,
        s = this.attrs.offsetX || 0,
        o = this.attrs.offsetY || 0;
      e.translate(i - s, a - o);
    }
    return (e.dirty = !1), e;
  }
  getAbsoluteScale(t) {
    for (var e = this; e; ) e._isUnderCache && (t = e), (e = e.getParent());
    const i = this.getAbsoluteTransform(t).decompose();
    return { x: i.scaleX, y: i.scaleY };
  }
  getAbsoluteRotation() {
    return this.getAbsoluteTransform().decompose().rotation;
  }
  getTransform() {
    return this._getCache(le, this._getTransform);
  }
  _getTransform() {
    var t,
      e,
      r = this._cache.get(le) || new X.Transform();
    r.reset();
    var i = this.x(),
      a = this.y(),
      s = oe.Konva.getAngle(this.rotation()),
      o = (t = this.attrs.scaleX) !== null && t !== void 0 ? t : 1,
      l = (e = this.attrs.scaleY) !== null && e !== void 0 ? e : 1,
      h = this.attrs.skewX || 0,
      c = this.attrs.skewY || 0,
      v = this.attrs.offsetX || 0,
      g = this.attrs.offsetY || 0;
    return (
      (i !== 0 || a !== 0) && r.translate(i, a),
      s !== 0 && r.rotate(s),
      (h !== 0 || c !== 0) && r.skew(h, c),
      (o !== 1 || l !== 1) && r.scale(o, l),
      (v !== 0 || g !== 0) && r.translate(-1 * v, -1 * g),
      (r.dirty = !1),
      r
    );
  }
  clone(t) {
    var e = X.Util.cloneObject(this.attrs),
      r,
      i,
      a,
      s,
      o;
    for (r in t) e[r] = t[r];
    var l = new this.constructor(e);
    for (r in this.eventListeners)
      for (i = this.eventListeners[r], a = i.length, s = 0; s < a; s++)
        (o = i[s]),
          o.name.indexOf(Lh) < 0 &&
            (l.eventListeners[r] || (l.eventListeners[r] = []),
            l.eventListeners[r].push(o));
    return l;
  }
  _toKonvaCanvas(t) {
    t = t || {};
    var e = this.getClientRect(),
      r = this.getStage(),
      i = t.x !== void 0 ? t.x : Math.floor(e.x),
      a = t.y !== void 0 ? t.y : Math.floor(e.y),
      s = t.pixelRatio || 1,
      o = new hr.SceneCanvas({
        width: t.width || Math.ceil(e.width) || (r ? r.width() : 0),
        height: t.height || Math.ceil(e.height) || (r ? r.height() : 0),
        pixelRatio: s,
      }),
      l = o.getContext();
    const h = new hr.SceneCanvas({
      width: o.width / o.pixelRatio + Math.abs(i),
      height: o.height / o.pixelRatio + Math.abs(a),
      pixelRatio: o.pixelRatio,
    });
    return (
      t.imageSmoothingEnabled === !1 && (l._context.imageSmoothingEnabled = !1),
      l.save(),
      (i || a) && l.translate(-1 * i, -1 * a),
      this.drawScene(o, void 0, h),
      l.restore(),
      o
    );
  }
  toCanvas(t) {
    return this._toKonvaCanvas(t)._canvas;
  }
  toDataURL(t) {
    t = t || {};
    var e = t.mimeType || null,
      r = t.quality || null,
      i = this._toKonvaCanvas(t).toDataURL(e, r);
    return t.callback && t.callback(i), i;
  }
  toImage(t) {
    return new Promise((e, r) => {
      try {
        const i = t == null ? void 0 : t.callback;
        i && delete t.callback,
          X.Util._urlToImage(this.toDataURL(t), function (a) {
            e(a), i == null || i(a);
          });
      } catch (i) {
        r(i);
      }
    });
  }
  toBlob(t) {
    return new Promise((e, r) => {
      try {
        const i = t == null ? void 0 : t.callback;
        i && delete t.callback,
          this.toCanvas(t).toBlob(
            (a) => {
              e(a), i == null || i(a);
            },
            t == null ? void 0 : t.mimeType,
            t == null ? void 0 : t.quality
          );
      } catch (i) {
        r(i);
      }
    });
  }
  setSize(t) {
    return this.width(t.width), this.height(t.height), this;
  }
  getSize() {
    return { width: this.width(), height: this.height() };
  }
  getClassName() {
    return this.className || this.nodeType;
  }
  getType() {
    return this.nodeType;
  }
  getDragDistance() {
    return this.attrs.dragDistance !== void 0
      ? this.attrs.dragDistance
      : this.parent
        ? this.parent.getDragDistance()
        : oe.Konva.dragDistance;
  }
  _off(t, e, r) {
    var i = this.eventListeners[t],
      a,
      s,
      o;
    for (a = 0; a < i.length; a++)
      if (
        ((s = i[a].name),
        (o = i[a].handler),
        (s !== "konva" || e === "konva") && (!e || s === e) && (!r || r === o))
      ) {
        if ((i.splice(a, 1), i.length === 0)) {
          delete this.eventListeners[t];
          break;
        }
        a--;
      }
  }
  _fireChangeEvent(t, e, r) {
    this._fire(t + Oh, { oldVal: e, newVal: r });
  }
  addName(t) {
    if (!this.hasName(t)) {
      var e = this.name(),
        r = e ? e + " " + t : t;
      this.name(r);
    }
    return this;
  }
  hasName(t) {
    if (!t) return !1;
    const e = this.name();
    if (!e) return !1;
    var r = (e || "").split(/\s/g);
    return r.indexOf(t) !== -1;
  }
  removeName(t) {
    var e = (this.name() || "").split(/\s/g),
      r = e.indexOf(t);
    return r !== -1 && (e.splice(r, 1), this.name(e.join(" "))), this;
  }
  setAttr(t, e) {
    var r = this[Aa + X.Util._capitalize(t)];
    return X.Util._isFunction(r) ? r.call(this, e) : this._setAttr(t, e), this;
  }
  _requestDraw() {
    if (oe.Konva.autoDrawEnabled) {
      const t = this.getLayer() || this.getStage();
      t == null || t.batchDraw();
    }
  }
  _setAttr(t, e) {
    var r = this.attrs[t];
    (r === e && !X.Util.isObject(e)) ||
      (e == null ? delete this.attrs[t] : (this.attrs[t] = e),
      this._shouldFireChangeEvents && this._fireChangeEvent(t, r, e),
      this._requestDraw());
  }
  _setComponentAttr(t, e, r) {
    var i;
    r !== void 0 &&
      ((i = this.attrs[t]),
      i || (this.attrs[t] = this.getAttr(t)),
      (this.attrs[t][e] = r),
      this._fireChangeEvent(t, i, r));
  }
  _fireAndBubble(t, e, r) {
    e && this.nodeType === Ta && (e.target = this);
    var i =
      (t === Pa || t === ka) &&
      ((r && (this === r || (this.isAncestorOf && this.isAncestorOf(r)))) ||
        (this.nodeType === "Stage" && !r));
    if (!i) {
      this._fire(t, e);
      var a =
        (t === Pa || t === ka) &&
        r &&
        r.isAncestorOf &&
        r.isAncestorOf(this) &&
        !r.isAncestorOf(this.parent);
      ((e && !e.cancelBubble) || !e) &&
        this.parent &&
        this.parent.isListening() &&
        !a &&
        (r && r.parent
          ? this._fireAndBubble.call(this.parent, t, e, r)
          : this._fireAndBubble.call(this.parent, t, e));
    }
  }
  _getProtoListeners(t) {
    var e, r, i;
    const a = (e = this._cache.get(Br)) !== null && e !== void 0 ? e : {};
    let s = a == null ? void 0 : a[t];
    if (s === void 0) {
      s = [];
      let o = Object.getPrototypeOf(this);
      for (; o; ) {
        const l =
          (i =
            (r = o.eventListeners) === null || r === void 0 ? void 0 : r[t]) !==
            null && i !== void 0
            ? i
            : [];
        s.push(...l), (o = Object.getPrototypeOf(o));
      }
      (a[t] = s), this._cache.set(Br, a);
    }
    return s;
  }
  _fire(t, e) {
    (e = e || {}), (e.currentTarget = this), (e.type = t);
    const r = this._getProtoListeners(t);
    if (r) for (var i = 0; i < r.length; i++) r[i].handler.call(this, e);
    const a = this.eventListeners[t];
    if (a) for (var i = 0; i < a.length; i++) a[i].handler.call(this, e);
  }
  draw() {
    return this.drawScene(), this.drawHit(), this;
  }
  _createDragElement(t) {
    var e = t ? t.pointerId : void 0,
      r = this.getStage(),
      i = this.getAbsolutePosition();
    if (r) {
      var a = r._getPointerById(e) || r._changedPointerPositions[0] || i;
      Gt.DD._dragElements.set(this._id, {
        node: this,
        startPointerPos: a,
        offset: { x: a.x - i.x, y: a.y - i.y },
        dragStatus: "ready",
        pointerId: e,
      });
    }
  }
  startDrag(t, e = !0) {
    Gt.DD._dragElements.has(this._id) || this._createDragElement(t);
    const r = Gt.DD._dragElements.get(this._id);
    (r.dragStatus = "dragging"),
      this.fire(
        "dragstart",
        { type: "dragstart", target: this, evt: t && t.evt },
        e
      );
  }
  _setDragPosition(t, e) {
    const r = this.getStage()._getPointerById(e.pointerId);
    if (r) {
      var i = { x: r.x - e.offset.x, y: r.y - e.offset.y },
        a = this.dragBoundFunc();
      if (a !== void 0) {
        const s = a.call(this, i, t);
        s
          ? (i = s)
          : X.Util.warn(
              "dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc."
            );
      }
      (!this._lastPos || this._lastPos.x !== i.x || this._lastPos.y !== i.y) &&
        (this.setAbsolutePosition(i), this._requestDraw()),
        (this._lastPos = i);
    }
  }
  stopDrag(t) {
    const e = Gt.DD._dragElements.get(this._id);
    e && (e.dragStatus = "stopped"),
      Gt.DD._endDragBefore(t),
      Gt.DD._endDragAfter(t);
  }
  setDraggable(t) {
    this._setAttr("draggable", t), this._dragChange();
  }
  isDragging() {
    const t = Gt.DD._dragElements.get(this._id);
    return t ? t.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(),
      this.on("mousedown.konva touchstart.konva", function (t) {
        var e = t.evt.button !== void 0,
          r = !e || oe.Konva.dragButtons.indexOf(t.evt.button) >= 0;
        if (r && !this.isDragging()) {
          var i = !1;
          Gt.DD._dragElements.forEach((a) => {
            this.isAncestorOf(a.node) && (i = !0);
          }),
            i || this._createDragElement(t);
        }
      });
  }
  _dragChange() {
    if (this.attrs.draggable) this._listenDrag();
    else {
      this._dragCleanup();
      var t = this.getStage();
      if (!t) return;
      const e = Gt.DD._dragElements.get(this._id),
        r = e && e.dragStatus === "dragging",
        i = e && e.dragStatus === "ready";
      r ? this.stopDrag() : i && Gt.DD._dragElements.delete(this._id);
    }
  }
  _dragCleanup() {
    this.off("mousedown.konva"), this.off("touchstart.konva");
  }
  isClientRectOnScreen(t = { x: 0, y: 0 }) {
    const e = this.getStage();
    if (!e) return !1;
    const r = {
      x: -t.x,
      y: -t.y,
      width: e.width() + 2 * t.x,
      height: e.height() + 2 * t.y,
    };
    return X.Util.haveIntersection(r, this.getClientRect());
  }
  static create(t, e) {
    return X.Util._isString(t) && (t = JSON.parse(t)), this._createNode(t, e);
  }
  static _createNode(t, e) {
    var r = H.prototype.getClassName.call(t),
      i = t.children,
      a,
      s,
      o;
    e && (t.attrs.container = e),
      oe.Konva[r] ||
        (X.Util.warn(
          'Can not find a node with class name "' +
            r +
            '". Fallback to "Shape".'
        ),
        (r = "Shape"));
    const l = oe.Konva[r];
    if (((a = new l(t.attrs)), i))
      for (s = i.length, o = 0; o < s; o++) a.add(H._createNode(i[o]));
    return a;
  }
}
ot.Node = H;
H.prototype.nodeType = "Node";
H.prototype._attrsAffectingSize = [];
H.prototype.eventListeners = {};
H.prototype.on.call(H.prototype, Ih, function () {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(le), this._clearSelfAndDescendantCache(Kt);
});
H.prototype.on.call(H.prototype, "visibleChange.konva", function () {
  this._clearSelfAndDescendantCache(Pn);
});
H.prototype.on.call(H.prototype, "listeningChange.konva", function () {
  this._clearSelfAndDescendantCache(xn);
});
H.prototype.on.call(H.prototype, "opacityChange.konva", function () {
  this._clearSelfAndDescendantCache(Wr);
});
const rt = Er.Factory.addGetterSetter;
rt(H, "zIndex");
rt(H, "absolutePosition");
rt(H, "position");
rt(H, "x", 0, (0, pt.getNumberValidator)());
rt(H, "y", 0, (0, pt.getNumberValidator)());
rt(H, "globalCompositeOperation", "source-over", (0, pt.getStringValidator)());
rt(H, "opacity", 1, (0, pt.getNumberValidator)());
rt(H, "name", "", (0, pt.getStringValidator)());
rt(H, "id", "", (0, pt.getStringValidator)());
rt(H, "rotation", 0, (0, pt.getNumberValidator)());
Er.Factory.addComponentsGetterSetter(H, "scale", ["x", "y"]);
rt(H, "scaleX", 1, (0, pt.getNumberValidator)());
rt(H, "scaleY", 1, (0, pt.getNumberValidator)());
Er.Factory.addComponentsGetterSetter(H, "skew", ["x", "y"]);
rt(H, "skewX", 0, (0, pt.getNumberValidator)());
rt(H, "skewY", 0, (0, pt.getNumberValidator)());
Er.Factory.addComponentsGetterSetter(H, "offset", ["x", "y"]);
rt(H, "offsetX", 0, (0, pt.getNumberValidator)());
rt(H, "offsetY", 0, (0, pt.getNumberValidator)());
rt(H, "dragDistance", null, (0, pt.getNumberValidator)());
rt(H, "width", 0, (0, pt.getNumberValidator)());
rt(H, "height", 0, (0, pt.getNumberValidator)());
rt(H, "listening", !0, (0, pt.getBooleanValidator)());
rt(H, "preventDefault", !0, (0, pt.getBooleanValidator)());
rt(H, "filters", null, function (n) {
  return (this._filterUpToDate = !1), n;
});
rt(H, "visible", !0, (0, pt.getBooleanValidator)());
rt(H, "transformsEnabled", "all", (0, pt.getStringValidator)());
rt(H, "size");
rt(H, "dragBoundFunc");
rt(H, "draggable", !1, (0, pt.getBooleanValidator)());
Er.Factory.backCompat(H, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation",
});
var Pe = {};
Object.defineProperty(Pe, "__esModule", { value: !0 });
Pe.Container = void 0;
const Ze = K,
  rn = ot,
  li = I;
let ke = class extends rn.Node {
  constructor() {
    super(...arguments), (this.children = []);
  }
  getChildren(t) {
    if (!t) return this.children || [];
    const e = this.children || [];
    var r = [];
    return (
      e.forEach(function (i) {
        t(i) && r.push(i);
      }),
      r
    );
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    return (
      this.getChildren().forEach((t) => {
        (t.parent = null), (t.index = 0), t.remove();
      }),
      (this.children = []),
      this._requestDraw(),
      this
    );
  }
  destroyChildren() {
    return (
      this.getChildren().forEach((t) => {
        (t.parent = null), (t.index = 0), t.destroy();
      }),
      (this.children = []),
      this._requestDraw(),
      this
    );
  }
  add(...t) {
    if (t.length === 0) return this;
    if (t.length > 1) {
      for (var e = 0; e < t.length; e++) this.add(t[e]);
      return this;
    }
    const r = t[0];
    return r.getParent()
      ? (r.moveTo(this), this)
      : (this._validateAdd(r),
        (r.index = this.getChildren().length),
        (r.parent = this),
        r._clearCaches(),
        this.getChildren().push(r),
        this._fire("add", { child: r }),
        this._requestDraw(),
        this);
  }
  destroy() {
    return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
  }
  find(t) {
    return this._generalFind(t, !1);
  }
  findOne(t) {
    var e = this._generalFind(t, !0);
    return e.length > 0 ? e[0] : void 0;
  }
  _generalFind(t, e) {
    var r = [];
    return (
      this._descendants((i) => {
        const a = i._isMatch(t);
        return a && r.push(i), !!(a && e);
      }),
      r
    );
  }
  _descendants(t) {
    let e = !1;
    const r = this.getChildren();
    for (const i of r) {
      if (((e = t(i)), e)) return !0;
      if (i.hasChildren() && ((e = i._descendants(t)), e)) return !0;
    }
    return !1;
  }
  toObject() {
    var t = rn.Node.prototype.toObject.call(this);
    return (
      (t.children = []),
      this.getChildren().forEach((e) => {
        t.children.push(e.toObject());
      }),
      t
    );
  }
  isAncestorOf(t) {
    for (var e = t.getParent(); e; ) {
      if (e._id === this._id) return !0;
      e = e.getParent();
    }
    return !1;
  }
  clone(t) {
    var e = rn.Node.prototype.clone.call(this, t);
    return (
      this.getChildren().forEach(function (r) {
        e.add(r.clone());
      }),
      e
    );
  }
  getAllIntersections(t) {
    var e = [];
    return (
      this.find("Shape").forEach((r) => {
        r.isVisible() && r.intersects(t) && e.push(r);
      }),
      e
    );
  }
  _clearSelfAndDescendantCache(t) {
    var e;
    super._clearSelfAndDescendantCache(t),
      !this.isCached() &&
        ((e = this.children) === null ||
          e === void 0 ||
          e.forEach(function (r) {
            r._clearSelfAndDescendantCache(t);
          }));
  }
  _setChildrenIndices() {
    var t;
    (t = this.children) === null ||
      t === void 0 ||
      t.forEach(function (e, r) {
        e.index = r;
      }),
      this._requestDraw();
  }
  drawScene(t, e, r) {
    var i = this.getLayer(),
      a = t || (i && i.getCanvas()),
      s = a && a.getContext(),
      o = this._getCanvasCache(),
      l = o && o.scene,
      h = a && a.isCache;
    if (!this.isVisible() && !h) return this;
    if (l) {
      s.save();
      var c = this.getAbsoluteTransform(e).getMatrix();
      s.transform(c[0], c[1], c[2], c[3], c[4], c[5]),
        this._drawCachedSceneCanvas(s),
        s.restore();
    } else this._drawChildren("drawScene", a, e, r);
    return this;
  }
  drawHit(t, e) {
    if (!this.shouldDrawHit(e)) return this;
    var r = this.getLayer(),
      i = t || (r && r.hitCanvas),
      a = i && i.getContext(),
      s = this._getCanvasCache(),
      o = s && s.hit;
    if (o) {
      a.save();
      var l = this.getAbsoluteTransform(e).getMatrix();
      a.transform(l[0], l[1], l[2], l[3], l[4], l[5]),
        this._drawCachedHitCanvas(a),
        a.restore();
    } else this._drawChildren("drawHit", i, e);
    return this;
  }
  _drawChildren(t, e, r, i) {
    var a,
      s = e && e.getContext(),
      o = this.clipWidth(),
      l = this.clipHeight(),
      h = this.clipFunc(),
      c = (typeof o == "number" && typeof l == "number") || h;
    const v = r === this;
    if (c) {
      s.save();
      var g = this.getAbsoluteTransform(r),
        f = g.getMatrix();
      s.transform(f[0], f[1], f[2], f[3], f[4], f[5]), s.beginPath();
      let b;
      if (h) b = h.call(this, s, this);
      else {
        var u = this.clipX(),
          p = this.clipY();
        s.rect(u || 0, p || 0, o, l);
      }
      s.clip.apply(s, b),
        (f = g.copy().invert().getMatrix()),
        s.transform(f[0], f[1], f[2], f[3], f[4], f[5]);
    }
    var _ =
      !v &&
      this.globalCompositeOperation() !== "source-over" &&
      t === "drawScene";
    _ && (s.save(), s._applyGlobalCompositeOperation(this)),
      (a = this.children) === null ||
        a === void 0 ||
        a.forEach(function (b) {
          b[t](e, r, i);
        }),
      _ && s.restore(),
      c && s.restore();
  }
  getClientRect(t = {}) {
    var e,
      r = t.skipTransform,
      i = t.relativeTo,
      a,
      s,
      o,
      l,
      h = { x: 1 / 0, y: 1 / 0, width: 0, height: 0 },
      c = this;
    (e = this.children) === null ||
      e === void 0 ||
      e.forEach(function (p) {
        if (p.visible()) {
          var _ = p.getClientRect({
            relativeTo: c,
            skipShadow: t.skipShadow,
            skipStroke: t.skipStroke,
          });
          (_.width === 0 && _.height === 0) ||
            (a === void 0
              ? ((a = _.x),
                (s = _.y),
                (o = _.x + _.width),
                (l = _.y + _.height))
              : ((a = Math.min(a, _.x)),
                (s = Math.min(s, _.y)),
                (o = Math.max(o, _.x + _.width)),
                (l = Math.max(l, _.y + _.height))));
        }
      });
    for (var v = this.find("Shape"), g = !1, f = 0; f < v.length; f++) {
      var u = v[f];
      if (u._isVisible(this)) {
        g = !0;
        break;
      }
    }
    return (
      g && a !== void 0
        ? (h = { x: a, y: s, width: o - a, height: l - s })
        : (h = { x: 0, y: 0, width: 0, height: 0 }),
      r ? h : this._transformedRect(h, i)
    );
  }
};
Pe.Container = ke;
Ze.Factory.addComponentsGetterSetter(ke, "clip", ["x", "y", "width", "height"]);
Ze.Factory.addGetterSetter(ke, "clipX", void 0, (0, li.getNumberValidator)());
Ze.Factory.addGetterSetter(ke, "clipY", void 0, (0, li.getNumberValidator)());
Ze.Factory.addGetterSetter(
  ke,
  "clipWidth",
  void 0,
  (0, li.getNumberValidator)()
);
Ze.Factory.addGetterSetter(
  ke,
  "clipHeight",
  void 0,
  (0, li.getNumberValidator)()
);
Ze.Factory.addGetterSetter(ke, "clipFunc");
var zs = {},
  Mt = {};
Object.defineProperty(Mt, "__esModule", { value: !0 });
Mt.releaseCapture =
  Mt.setPointerCapture =
  Mt.hasPointerCapture =
  Mt.createEvent =
  Mt.getCapturedShape =
    void 0;
const Bh = W,
  br = new Map(),
  Hs = Bh.Konva._global.PointerEvent !== void 0;
function Vh(n) {
  return br.get(n);
}
Mt.getCapturedShape = Vh;
function Dn(n) {
  return { evt: n, pointerId: n.pointerId };
}
Mt.createEvent = Dn;
function zh(n, t) {
  return br.get(n) === t;
}
Mt.hasPointerCapture = zh;
function Hh(n, t) {
  $s(n),
    t.getStage() &&
      (br.set(n, t),
      Hs &&
        t._fire(
          "gotpointercapture",
          Dn(new PointerEvent("gotpointercapture"))
        ));
}
Mt.setPointerCapture = Hh;
function $s(n, t) {
  const e = br.get(n);
  if (!e) return;
  const r = e.getStage();
  r && r.content,
    br.delete(n),
    Hs &&
      e._fire("lostpointercapture", Dn(new PointerEvent("lostpointercapture")));
}
Mt.releaseCapture = $s;
(function (n) {
  Object.defineProperty(n, "__esModule", { value: !0 }),
    (n.Stage = n.stages = void 0);
  const t = ct,
    e = K,
    r = Pe,
    i = W,
    a = It,
    s = oi,
    o = W,
    l = Mt;
  var h = "Stage",
    c = "string",
    v = "px",
    g = "mouseout",
    f = "mouseleave",
    u = "mouseover",
    p = "mouseenter",
    _ = "mousemove",
    b = "mousedown",
    y = "mouseup",
    d = "pointermove",
    m = "pointerdown",
    S = "pointerup",
    P = "pointercancel",
    E = "lostpointercapture",
    C = "pointerout",
    k = "pointerleave",
    w = "pointerover",
    A = "pointerenter",
    T = "contextmenu",
    R = "touchstart",
    M = "touchend",
    F = "touchmove",
    O = "touchcancel",
    D = "wheel",
    U = 5,
    V = [
      [p, "_pointerenter"],
      [b, "_pointerdown"],
      [_, "_pointermove"],
      [y, "_pointerup"],
      [f, "_pointerleave"],
      [R, "_pointerdown"],
      [F, "_pointermove"],
      [M, "_pointerup"],
      [O, "_pointercancel"],
      [u, "_pointerover"],
      [D, "_wheel"],
      [T, "_contextmenu"],
      [m, "_pointerdown"],
      [d, "_pointermove"],
      [S, "_pointerup"],
      [P, "_pointercancel"],
      [E, "_lostpointercapture"],
    ];
  const G = {
      mouse: {
        [C]: g,
        [k]: f,
        [w]: u,
        [A]: p,
        [d]: _,
        [m]: b,
        [S]: y,
        [P]: "mousecancel",
        pointerclick: "click",
        pointerdblclick: "dblclick",
      },
      touch: {
        [C]: "touchout",
        [k]: "touchleave",
        [w]: "touchover",
        [A]: "touchenter",
        [d]: F,
        [m]: R,
        [S]: M,
        [P]: O,
        pointerclick: "tap",
        pointerdblclick: "dbltap",
      },
      pointer: {
        [C]: C,
        [k]: k,
        [w]: w,
        [A]: A,
        [d]: d,
        [m]: m,
        [S]: S,
        [P]: P,
        pointerclick: "pointerclick",
        pointerdblclick: "pointerdblclick",
      },
    },
    L = (lt) =>
      lt.indexOf("pointer") >= 0
        ? "pointer"
        : lt.indexOf("touch") >= 0
          ? "touch"
          : "mouse",
    z = (lt) => {
      const x = L(lt);
      if (x === "pointer") return i.Konva.pointerEventsEnabled && G.pointer;
      if (x === "touch") return G.touch;
      if (x === "mouse") return G.mouse;
    };
  function at(lt = {}) {
    return (
      (lt.clipFunc || lt.clipWidth || lt.clipHeight) &&
        t.Util.warn(
          "Stage does not support clipping. Please use clip for Layers or Groups."
        ),
      lt
    );
  }
  const Z =
    "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
  n.stages = [];
  class Ct extends r.Container {
    constructor(x) {
      super(at(x)),
        (this._pointerPositions = []),
        (this._changedPointerPositions = []),
        this._buildDOM(),
        this._bindContentEvents(),
        n.stages.push(this),
        this.on("widthChange.konva heightChange.konva", this._resizeDOM),
        this.on("visibleChange.konva", this._checkVisibility),
        this.on(
          "clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva",
          () => {
            at(this.attrs);
          }
        ),
        this._checkVisibility();
    }
    _validateAdd(x) {
      const N = x.getType() === "Layer",
        B = x.getType() === "FastLayer";
      N || B || t.Util.throw("You may only add layers to the stage.");
    }
    _checkVisibility() {
      if (!this.content) return;
      const x = this.visible() ? "" : "none";
      this.content.style.display = x;
    }
    setContainer(x) {
      if (typeof x === c) {
        if (x.charAt(0) === ".") {
          var N = x.slice(1);
          x = document.getElementsByClassName(N)[0];
        } else {
          var B;
          x.charAt(0) !== "#" ? (B = x) : (B = x.slice(1)),
            (x = document.getElementById(B));
        }
        if (!x) throw "Can not find container in document with id " + B;
      }
      return (
        this._setAttr("container", x),
        this.content &&
          (this.content.parentElement &&
            this.content.parentElement.removeChild(this.content),
          x.appendChild(this.content)),
        this
      );
    }
    shouldDrawHit() {
      return !0;
    }
    clear() {
      var x = this.children,
        N = x.length,
        B;
      for (B = 0; B < N; B++) x[B].clear();
      return this;
    }
    clone(x) {
      return (
        x || (x = {}),
        (x.container = typeof document < "u" && document.createElement("div")),
        r.Container.prototype.clone.call(this, x)
      );
    }
    destroy() {
      super.destroy();
      var x = this.content;
      x && t.Util._isInDocument(x) && this.container().removeChild(x);
      var N = n.stages.indexOf(this);
      return (
        N > -1 && n.stages.splice(N, 1),
        t.Util.releaseCanvas(
          this.bufferCanvas._canvas,
          this.bufferHitCanvas._canvas
        ),
        this
      );
    }
    getPointerPosition() {
      const x = this._pointerPositions[0] || this._changedPointerPositions[0];
      return x ? { x: x.x, y: x.y } : (t.Util.warn(Z), null);
    }
    _getPointerById(x) {
      return this._pointerPositions.find((N) => N.id === x);
    }
    getPointersPositions() {
      return this._pointerPositions;
    }
    getStage() {
      return this;
    }
    getContent() {
      return this.content;
    }
    _toKonvaCanvas(x) {
      (x = x || {}),
        (x.x = x.x || 0),
        (x.y = x.y || 0),
        (x.width = x.width || this.width()),
        (x.height = x.height || this.height());
      var N = new a.SceneCanvas({
          width: x.width,
          height: x.height,
          pixelRatio: x.pixelRatio || 1,
        }),
        B = N.getContext()._context,
        st = this.children;
      return (
        (x.x || x.y) && B.translate(-1 * x.x, -1 * x.y),
        st.forEach(function (tt) {
          if (tt.isVisible()) {
            var ft = tt._toKonvaCanvas(x);
            B.drawImage(
              ft._canvas,
              x.x,
              x.y,
              ft.getWidth() / ft.getPixelRatio(),
              ft.getHeight() / ft.getPixelRatio()
            );
          }
        }),
        N
      );
    }
    getIntersection(x) {
      if (!x) return null;
      var N = this.children,
        B = N.length,
        st = B - 1,
        tt;
      for (tt = st; tt >= 0; tt--) {
        const ft = N[tt].getIntersection(x);
        if (ft) return ft;
      }
      return null;
    }
    _resizeDOM() {
      var x = this.width(),
        N = this.height();
      this.content &&
        ((this.content.style.width = x + v),
        (this.content.style.height = N + v)),
        this.bufferCanvas.setSize(x, N),
        this.bufferHitCanvas.setSize(x, N),
        this.children.forEach((B) => {
          B.setSize({ width: x, height: N }), B.draw();
        });
    }
    add(x, ...N) {
      if (arguments.length > 1) {
        for (var B = 0; B < arguments.length; B++) this.add(arguments[B]);
        return this;
      }
      super.add(x);
      var st = this.children.length;
      return (
        st > U &&
          t.Util.warn(
            "The stage has " +
              st +
              " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."
          ),
        x.setSize({ width: this.width(), height: this.height() }),
        x.draw(),
        i.Konva.isBrowser && this.content.appendChild(x.canvas._canvas),
        this
      );
    }
    getParent() {
      return null;
    }
    getLayer() {
      return null;
    }
    hasPointerCapture(x) {
      return l.hasPointerCapture(x, this);
    }
    setPointerCapture(x) {
      l.setPointerCapture(x, this);
    }
    releaseCapture(x) {
      l.releaseCapture(x, this);
    }
    getLayers() {
      return this.children;
    }
    _bindContentEvents() {
      i.Konva.isBrowser &&
        V.forEach(([x, N]) => {
          this.content.addEventListener(
            x,
            (B) => {
              this[N](B);
            },
            { passive: !1 }
          );
        });
    }
    _pointerenter(x) {
      this.setPointersPositions(x);
      const N = z(x.type);
      N &&
        this._fire(N.pointerenter, {
          evt: x,
          target: this,
          currentTarget: this,
        });
    }
    _pointerover(x) {
      this.setPointersPositions(x);
      const N = z(x.type);
      N &&
        this._fire(N.pointerover, {
          evt: x,
          target: this,
          currentTarget: this,
        });
    }
    _getTargetShape(x) {
      let N = this[x + "targetShape"];
      return N && !N.getStage() && (N = null), N;
    }
    _pointerleave(x) {
      const N = z(x.type),
        B = L(x.type);
      if (N) {
        this.setPointersPositions(x);
        var st = this._getTargetShape(B),
          tt =
            !(i.Konva.isDragging() || i.Konva.isTransforming()) ||
            i.Konva.hitOnDragEnabled;
        st && tt
          ? (st._fireAndBubble(N.pointerout, { evt: x }),
            st._fireAndBubble(N.pointerleave, { evt: x }),
            this._fire(N.pointerleave, {
              evt: x,
              target: this,
              currentTarget: this,
            }),
            (this[B + "targetShape"] = null))
          : tt &&
            (this._fire(N.pointerleave, {
              evt: x,
              target: this,
              currentTarget: this,
            }),
            this._fire(N.pointerout, {
              evt: x,
              target: this,
              currentTarget: this,
            })),
          (this.pointerPos = null),
          (this._pointerPositions = []);
      }
    }
    _pointerdown(x) {
      const N = z(x.type),
        B = L(x.type);
      if (N) {
        this.setPointersPositions(x);
        var st = !1;
        this._changedPointerPositions.forEach((tt) => {
          var ft = this.getIntersection(tt);
          if (
            ((s.DD.justDragged = !1),
            (i.Konva["_" + B + "ListenClick"] = !0),
            !ft || !ft.isListening())
          ) {
            this[B + "ClickStartShape"] = void 0;
            return;
          }
          i.Konva.capturePointerEventsEnabled && ft.setPointerCapture(tt.id),
            (this[B + "ClickStartShape"] = ft),
            ft._fireAndBubble(N.pointerdown, { evt: x, pointerId: tt.id }),
            (st = !0);
          const Ot = x.type.indexOf("touch") >= 0;
          ft.preventDefault() && x.cancelable && Ot && x.preventDefault();
        }),
          st ||
            this._fire(N.pointerdown, {
              evt: x,
              target: this,
              currentTarget: this,
              pointerId: this._pointerPositions[0].id,
            });
      }
    }
    _pointermove(x) {
      const N = z(x.type),
        B = L(x.type);
      if (!N) return;
      i.Konva.isDragging() &&
        s.DD.node.preventDefault() &&
        x.cancelable &&
        x.preventDefault(),
        this.setPointersPositions(x);
      var st =
        !(i.Konva.isDragging() || i.Konva.isTransforming()) ||
        i.Konva.hitOnDragEnabled;
      if (!st) return;
      var tt = {};
      let ft = !1;
      var Ot = this._getTargetShape(B);
      this._changedPointerPositions.forEach((ne) => {
        const it = l.getCapturedShape(ne.id) || this.getIntersection(ne),
          Ne = ne.id,
          $t = { evt: x, pointerId: Ne };
        var Oe = Ot !== it;
        if (
          (Oe &&
            Ot &&
            (Ot._fireAndBubble(N.pointerout, { ...$t }, it),
            Ot._fireAndBubble(N.pointerleave, { ...$t }, it)),
          it)
        ) {
          if (tt[it._id]) return;
          tt[it._id] = !0;
        }
        it && it.isListening()
          ? ((ft = !0),
            Oe &&
              (it._fireAndBubble(N.pointerover, { ...$t }, Ot),
              it._fireAndBubble(N.pointerenter, { ...$t }, Ot),
              (this[B + "targetShape"] = it)),
            it._fireAndBubble(N.pointermove, { ...$t }))
          : Ot &&
            (this._fire(N.pointerover, {
              evt: x,
              target: this,
              currentTarget: this,
              pointerId: Ne,
            }),
            (this[B + "targetShape"] = null));
      }),
        ft ||
          this._fire(N.pointermove, {
            evt: x,
            target: this,
            currentTarget: this,
            pointerId: this._changedPointerPositions[0].id,
          });
    }
    _pointerup(x) {
      const N = z(x.type),
        B = L(x.type);
      if (!N) return;
      this.setPointersPositions(x);
      const st = this[B + "ClickStartShape"],
        tt = this[B + "ClickEndShape"];
      var ft = {};
      let Ot = !1;
      this._changedPointerPositions.forEach((ne) => {
        const it = l.getCapturedShape(ne.id) || this.getIntersection(ne);
        if (it) {
          if ((it.releaseCapture(ne.id), ft[it._id])) return;
          ft[it._id] = !0;
        }
        const Ne = ne.id,
          $t = { evt: x, pointerId: Ne };
        let Oe = !1;
        i.Konva["_" + B + "InDblClickWindow"]
          ? ((Oe = !0), clearTimeout(this[B + "DblTimeout"]))
          : s.DD.justDragged ||
            ((i.Konva["_" + B + "InDblClickWindow"] = !0),
            clearTimeout(this[B + "DblTimeout"])),
          (this[B + "DblTimeout"] = setTimeout(function () {
            i.Konva["_" + B + "InDblClickWindow"] = !1;
          }, i.Konva.dblClickWindow)),
          it && it.isListening()
            ? ((Ot = !0),
              (this[B + "ClickEndShape"] = it),
              it._fireAndBubble(N.pointerup, { ...$t }),
              i.Konva["_" + B + "ListenClick"] &&
                st &&
                st === it &&
                (it._fireAndBubble(N.pointerclick, { ...$t }),
                Oe &&
                  tt &&
                  tt === it &&
                  it._fireAndBubble(N.pointerdblclick, { ...$t })))
            : ((this[B + "ClickEndShape"] = null),
              i.Konva["_" + B + "ListenClick"] &&
                this._fire(N.pointerclick, {
                  evt: x,
                  target: this,
                  currentTarget: this,
                  pointerId: Ne,
                }),
              Oe &&
                this._fire(N.pointerdblclick, {
                  evt: x,
                  target: this,
                  currentTarget: this,
                  pointerId: Ne,
                }));
      }),
        Ot ||
          this._fire(N.pointerup, {
            evt: x,
            target: this,
            currentTarget: this,
            pointerId: this._changedPointerPositions[0].id,
          }),
        (i.Konva["_" + B + "ListenClick"] = !1),
        x.cancelable && B !== "touch" && x.preventDefault();
    }
    _contextmenu(x) {
      this.setPointersPositions(x);
      var N = this.getIntersection(this.getPointerPosition());
      N && N.isListening()
        ? N._fireAndBubble(T, { evt: x })
        : this._fire(T, { evt: x, target: this, currentTarget: this });
    }
    _wheel(x) {
      this.setPointersPositions(x);
      var N = this.getIntersection(this.getPointerPosition());
      N && N.isListening()
        ? N._fireAndBubble(D, { evt: x })
        : this._fire(D, { evt: x, target: this, currentTarget: this });
    }
    _pointercancel(x) {
      this.setPointersPositions(x);
      const N =
        l.getCapturedShape(x.pointerId) ||
        this.getIntersection(this.getPointerPosition());
      N && N._fireAndBubble(S, l.createEvent(x)), l.releaseCapture(x.pointerId);
    }
    _lostpointercapture(x) {
      l.releaseCapture(x.pointerId);
    }
    setPointersPositions(x) {
      var N = this._getContentPosition(),
        B = null,
        st = null;
      (x = x || window.event),
        x.touches !== void 0
          ? ((this._pointerPositions = []),
            (this._changedPointerPositions = []),
            Array.prototype.forEach.call(x.touches, (tt) => {
              this._pointerPositions.push({
                id: tt.identifier,
                x: (tt.clientX - N.left) / N.scaleX,
                y: (tt.clientY - N.top) / N.scaleY,
              });
            }),
            Array.prototype.forEach.call(
              x.changedTouches || x.touches,
              (tt) => {
                this._changedPointerPositions.push({
                  id: tt.identifier,
                  x: (tt.clientX - N.left) / N.scaleX,
                  y: (tt.clientY - N.top) / N.scaleY,
                });
              }
            ))
          : ((B = (x.clientX - N.left) / N.scaleX),
            (st = (x.clientY - N.top) / N.scaleY),
            (this.pointerPos = { x: B, y: st }),
            (this._pointerPositions = [
              { x: B, y: st, id: t.Util._getFirstPointerId(x) },
            ]),
            (this._changedPointerPositions = [
              { x: B, y: st, id: t.Util._getFirstPointerId(x) },
            ]));
    }
    _setPointerPosition(x) {
      t.Util.warn(
        'Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'
      ),
        this.setPointersPositions(x);
    }
    _getContentPosition() {
      if (!this.content || !this.content.getBoundingClientRect)
        return { top: 0, left: 0, scaleX: 1, scaleY: 1 };
      var x = this.content.getBoundingClientRect();
      return {
        top: x.top,
        left: x.left,
        scaleX: x.width / this.content.clientWidth || 1,
        scaleY: x.height / this.content.clientHeight || 1,
      };
    }
    _buildDOM() {
      if (
        ((this.bufferCanvas = new a.SceneCanvas({
          width: this.width(),
          height: this.height(),
        })),
        (this.bufferHitCanvas = new a.HitCanvas({
          pixelRatio: 1,
          width: this.width(),
          height: this.height(),
        })),
        !!i.Konva.isBrowser)
      ) {
        var x = this.container();
        if (!x) throw "Stage has no container. A container is required.";
        (x.innerHTML = ""),
          (this.content = document.createElement("div")),
          (this.content.style.position = "relative"),
          (this.content.style.userSelect = "none"),
          (this.content.className = "konvajs-content"),
          this.content.setAttribute("role", "presentation"),
          x.appendChild(this.content),
          this._resizeDOM();
      }
    }
    cache() {
      return (
        t.Util.warn(
          "Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."
        ),
        this
      );
    }
    clearCache() {
      return this;
    }
    batchDraw() {
      return (
        this.getChildren().forEach(function (x) {
          x.batchDraw();
        }),
        this
      );
    }
  }
  (n.Stage = Ct),
    (Ct.prototype.nodeType = h),
    (0, o._registerNode)(Ct),
    e.Factory.addGetterSetter(Ct, "container"),
    i.Konva.isBrowser &&
      document.addEventListener("visibilitychange", () => {
        n.stages.forEach((lt) => {
          lt.batchDraw();
        });
      });
})(zs);
var Rr = {},
  yt = {};
(function (n) {
  Object.defineProperty(n, "__esModule", { value: !0 }),
    (n.Shape = n.shapes = void 0);
  const t = W,
    e = ct,
    r = K,
    i = ot,
    a = I,
    s = W,
    o = Mt;
  var l = "hasShadow",
    h = "shadowRGBA",
    c = "patternImage",
    v = "linearGradient",
    g = "radialGradient";
  let f;
  function u() {
    return f || ((f = e.Util.createCanvasElement().getContext("2d")), f);
  }
  n.shapes = {};
  function p(k) {
    const w = this.attrs.fillRule;
    w ? k.fill(w) : k.fill();
  }
  function _(k) {
    k.stroke();
  }
  function b(k) {
    k.fill();
  }
  function y(k) {
    k.stroke();
  }
  function d() {
    this._clearCache(l);
  }
  function m() {
    this._clearCache(h);
  }
  function S() {
    this._clearCache(c);
  }
  function P() {
    this._clearCache(v);
  }
  function E() {
    this._clearCache(g);
  }
  class C extends i.Node {
    constructor(w) {
      super(w);
      let A;
      for (; (A = e.Util.getRandomColor()), !(A && !(A in n.shapes)); );
      (this.colorKey = A), (n.shapes[A] = this);
    }
    getContext() {
      return (
        e.Util.warn(
          "shape.getContext() method is deprecated. Please do not use it."
        ),
        this.getLayer().getContext()
      );
    }
    getCanvas() {
      return (
        e.Util.warn(
          "shape.getCanvas() method is deprecated. Please do not use it."
        ),
        this.getLayer().getCanvas()
      );
    }
    getSceneFunc() {
      return this.attrs.sceneFunc || this._sceneFunc;
    }
    getHitFunc() {
      return this.attrs.hitFunc || this._hitFunc;
    }
    hasShadow() {
      return this._getCache(l, this._hasShadow);
    }
    _hasShadow() {
      return (
        this.shadowEnabled() &&
        this.shadowOpacity() !== 0 &&
        !!(
          this.shadowColor() ||
          this.shadowBlur() ||
          this.shadowOffsetX() ||
          this.shadowOffsetY()
        )
      );
    }
    _getFillPattern() {
      return this._getCache(c, this.__getFillPattern);
    }
    __getFillPattern() {
      if (this.fillPatternImage()) {
        var w = u();
        const A = w.createPattern(
          this.fillPatternImage(),
          this.fillPatternRepeat() || "repeat"
        );
        if (A && A.setTransform) {
          const T = new e.Transform();
          T.translate(this.fillPatternX(), this.fillPatternY()),
            T.rotate(t.Konva.getAngle(this.fillPatternRotation())),
            T.scale(this.fillPatternScaleX(), this.fillPatternScaleY()),
            T.translate(
              -1 * this.fillPatternOffsetX(),
              -1 * this.fillPatternOffsetY()
            );
          const R = T.getMatrix(),
            M =
              typeof DOMMatrix > "u"
                ? { a: R[0], b: R[1], c: R[2], d: R[3], e: R[4], f: R[5] }
                : new DOMMatrix(R);
          A.setTransform(M);
        }
        return A;
      }
    }
    _getLinearGradient() {
      return this._getCache(v, this.__getLinearGradient);
    }
    __getLinearGradient() {
      var w = this.fillLinearGradientColorStops();
      if (w) {
        for (
          var A = u(),
            T = this.fillLinearGradientStartPoint(),
            R = this.fillLinearGradientEndPoint(),
            M = A.createLinearGradient(T.x, T.y, R.x, R.y),
            F = 0;
          F < w.length;
          F += 2
        )
          M.addColorStop(w[F], w[F + 1]);
        return M;
      }
    }
    _getRadialGradient() {
      return this._getCache(g, this.__getRadialGradient);
    }
    __getRadialGradient() {
      var w = this.fillRadialGradientColorStops();
      if (w) {
        for (
          var A = u(),
            T = this.fillRadialGradientStartPoint(),
            R = this.fillRadialGradientEndPoint(),
            M = A.createRadialGradient(
              T.x,
              T.y,
              this.fillRadialGradientStartRadius(),
              R.x,
              R.y,
              this.fillRadialGradientEndRadius()
            ),
            F = 0;
          F < w.length;
          F += 2
        )
          M.addColorStop(w[F], w[F + 1]);
        return M;
      }
    }
    getShadowRGBA() {
      return this._getCache(h, this._getShadowRGBA);
    }
    _getShadowRGBA() {
      if (this.hasShadow()) {
        var w = e.Util.colorToRGBA(this.shadowColor());
        if (w)
          return (
            "rgba(" +
            w.r +
            "," +
            w.g +
            "," +
            w.b +
            "," +
            w.a * (this.shadowOpacity() || 1) +
            ")"
          );
      }
    }
    hasFill() {
      return this._calculate(
        "hasFill",
        [
          "fillEnabled",
          "fill",
          "fillPatternImage",
          "fillLinearGradientColorStops",
          "fillRadialGradientColorStops",
        ],
        () =>
          this.fillEnabled() &&
          !!(
            this.fill() ||
            this.fillPatternImage() ||
            this.fillLinearGradientColorStops() ||
            this.fillRadialGradientColorStops()
          )
      );
    }
    hasStroke() {
      return this._calculate(
        "hasStroke",
        [
          "strokeEnabled",
          "strokeWidth",
          "stroke",
          "strokeLinearGradientColorStops",
        ],
        () =>
          this.strokeEnabled() &&
          this.strokeWidth() &&
          !!(this.stroke() || this.strokeLinearGradientColorStops())
      );
    }
    hasHitStroke() {
      const w = this.hitStrokeWidth();
      return w === "auto" ? this.hasStroke() : this.strokeEnabled() && !!w;
    }
    intersects(w) {
      var A = this.getStage();
      if (!A) return !1;
      const T = A.bufferHitCanvas;
      return (
        T.getContext().clear(),
        this.drawHit(T, void 0, !0),
        T.context.getImageData(Math.round(w.x), Math.round(w.y), 1, 1).data[3] >
          0
      );
    }
    destroy() {
      return (
        i.Node.prototype.destroy.call(this),
        delete n.shapes[this.colorKey],
        delete this.colorKey,
        this
      );
    }
    _useBufferCanvas(w) {
      var A;
      if (
        !((A = this.attrs.perfectDrawEnabled) !== null && A !== void 0 ? A : !0)
      )
        return !1;
      const R = w || this.hasFill(),
        M = this.hasStroke(),
        F = this.getAbsoluteOpacity() !== 1;
      if (R && M && F) return !0;
      const O = this.hasShadow(),
        D = this.shadowForStrokeEnabled();
      return !!(R && M && O && D);
    }
    setStrokeHitEnabled(w) {
      e.Util.warn(
        "strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."
      ),
        w ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
    }
    getStrokeHitEnabled() {
      return this.hitStrokeWidth() !== 0;
    }
    getSelfRect() {
      var w = this.size();
      return {
        x: this._centroid ? -w.width / 2 : 0,
        y: this._centroid ? -w.height / 2 : 0,
        width: w.width,
        height: w.height,
      };
    }
    getClientRect(w = {}) {
      let A = !1,
        T = this.getParent();
      for (; T; ) {
        if (T.isCached()) {
          A = !0;
          break;
        }
        T = T.getParent();
      }
      const R = w.skipTransform,
        M = w.relativeTo || (A && this.getStage()) || void 0,
        F = this.getSelfRect(),
        D = (!w.skipStroke && this.hasStroke() && this.strokeWidth()) || 0,
        U = F.width + D,
        V = F.height + D,
        G = !w.skipShadow && this.hasShadow(),
        L = G ? this.shadowOffsetX() : 0,
        z = G ? this.shadowOffsetY() : 0,
        at = U + Math.abs(L),
        Z = V + Math.abs(z),
        Ct = (G && this.shadowBlur()) || 0,
        lt = at + Ct * 2,
        x = Z + Ct * 2,
        N = {
          width: lt,
          height: x,
          x: -(D / 2 + Ct) + Math.min(L, 0) + F.x,
          y: -(D / 2 + Ct) + Math.min(z, 0) + F.y,
        };
      return R ? N : this._transformedRect(N, M);
    }
    drawScene(w, A, T) {
      var R = this.getLayer(),
        M = w || R.getCanvas(),
        F = M.getContext(),
        O = this._getCanvasCache(),
        D = this.getSceneFunc(),
        U = this.hasShadow(),
        V,
        G,
        L = M.isCache,
        z = A === this;
      if (!this.isVisible() && !z) return this;
      if (O) {
        F.save();
        var at = this.getAbsoluteTransform(A).getMatrix();
        return (
          F.transform(at[0], at[1], at[2], at[3], at[4], at[5]),
          this._drawCachedSceneCanvas(F),
          F.restore(),
          this
        );
      }
      if (!D) return this;
      if ((F.save(), this._useBufferCanvas() && !L)) {
        V = this.getStage();
        const lt = T || V.bufferCanvas;
        (G = lt.getContext()), G.clear(), G.save(), G._applyLineJoin(this);
        var Z = this.getAbsoluteTransform(A).getMatrix();
        G.transform(Z[0], Z[1], Z[2], Z[3], Z[4], Z[5]),
          D.call(this, G, this),
          G.restore();
        var Ct = lt.pixelRatio;
        U && F._applyShadow(this),
          F._applyOpacity(this),
          F._applyGlobalCompositeOperation(this),
          F.drawImage(lt._canvas, 0, 0, lt.width / Ct, lt.height / Ct);
      } else {
        if ((F._applyLineJoin(this), !z)) {
          var Z = this.getAbsoluteTransform(A).getMatrix();
          F.transform(Z[0], Z[1], Z[2], Z[3], Z[4], Z[5]),
            F._applyOpacity(this),
            F._applyGlobalCompositeOperation(this);
        }
        U && F._applyShadow(this), D.call(this, F, this);
      }
      return F.restore(), this;
    }
    drawHit(w, A, T = !1) {
      if (!this.shouldDrawHit(A, T)) return this;
      var R = this.getLayer(),
        M = w || R.hitCanvas,
        F = M && M.getContext(),
        O = this.hitFunc() || this.sceneFunc(),
        D = this._getCanvasCache(),
        U = D && D.hit;
      if (
        (this.colorKey ||
          e.Util.warn(
            "Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"
          ),
        U)
      ) {
        F.save();
        var V = this.getAbsoluteTransform(A).getMatrix();
        return (
          F.transform(V[0], V[1], V[2], V[3], V[4], V[5]),
          this._drawCachedHitCanvas(F),
          F.restore(),
          this
        );
      }
      if (!O) return this;
      if ((F.save(), F._applyLineJoin(this), !(this === A))) {
        var L = this.getAbsoluteTransform(A).getMatrix();
        F.transform(L[0], L[1], L[2], L[3], L[4], L[5]);
      }
      return O.call(this, F, this), F.restore(), this;
    }
    drawHitFromCache(w = 0) {
      var A = this._getCanvasCache(),
        T = this._getCachedSceneCanvas(),
        R = A.hit,
        M = R.getContext(),
        F = R.getWidth(),
        O = R.getHeight(),
        D,
        U,
        V,
        G,
        L,
        z;
      M.clear(), M.drawImage(T._canvas, 0, 0, F, O);
      try {
        for (
          D = M.getImageData(0, 0, F, O),
            U = D.data,
            V = U.length,
            G = e.Util._hexToRgb(this.colorKey),
            L = 0;
          L < V;
          L += 4
        )
          (z = U[L + 3]),
            z > w
              ? ((U[L] = G.r),
                (U[L + 1] = G.g),
                (U[L + 2] = G.b),
                (U[L + 3] = 255))
              : (U[L + 3] = 0);
        M.putImageData(D, 0, 0);
      } catch (at) {
        e.Util.error(
          "Unable to draw hit graph from cached scene canvas. " + at.message
        );
      }
      return this;
    }
    hasPointerCapture(w) {
      return o.hasPointerCapture(w, this);
    }
    setPointerCapture(w) {
      o.setPointerCapture(w, this);
    }
    releaseCapture(w) {
      o.releaseCapture(w, this);
    }
  }
  (n.Shape = C),
    (C.prototype._fillFunc = p),
    (C.prototype._strokeFunc = _),
    (C.prototype._fillFuncHit = b),
    (C.prototype._strokeFuncHit = y),
    (C.prototype._centroid = !1),
    (C.prototype.nodeType = "Shape"),
    (0, s._registerNode)(C),
    (C.prototype.eventListeners = {}),
    C.prototype.on.call(
      C.prototype,
      "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",
      d
    ),
    C.prototype.on.call(
      C.prototype,
      "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva",
      m
    ),
    C.prototype.on.call(
      C.prototype,
      "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva",
      S
    ),
    C.prototype.on.call(
      C.prototype,
      "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva",
      P
    ),
    C.prototype.on.call(
      C.prototype,
      "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva",
      E
    ),
    r.Factory.addGetterSetter(
      C,
      "stroke",
      void 0,
      (0, a.getStringOrGradientValidator)()
    ),
    r.Factory.addGetterSetter(C, "strokeWidth", 2, (0, a.getNumberValidator)()),
    r.Factory.addGetterSetter(C, "fillAfterStrokeEnabled", !1),
    r.Factory.addGetterSetter(
      C,
      "hitStrokeWidth",
      "auto",
      (0, a.getNumberOrAutoValidator)()
    ),
    r.Factory.addGetterSetter(
      C,
      "strokeHitEnabled",
      !0,
      (0, a.getBooleanValidator)()
    ),
    r.Factory.addGetterSetter(
      C,
      "perfectDrawEnabled",
      !0,
      (0, a.getBooleanValidator)()
    ),
    r.Factory.addGetterSetter(
      C,
      "shadowForStrokeEnabled",
      !0,
      (0, a.getBooleanValidator)()
    ),
    r.Factory.addGetterSetter(C, "lineJoin"),
    r.Factory.addGetterSetter(C, "lineCap"),
    r.Factory.addGetterSetter(C, "sceneFunc"),
    r.Factory.addGetterSetter(C, "hitFunc"),
    r.Factory.addGetterSetter(C, "dash"),
    r.Factory.addGetterSetter(C, "dashOffset", 0, (0, a.getNumberValidator)()),
    r.Factory.addGetterSetter(
      C,
      "shadowColor",
      void 0,
      (0, a.getStringValidator)()
    ),
    r.Factory.addGetterSetter(C, "shadowBlur", 0, (0, a.getNumberValidator)()),
    r.Factory.addGetterSetter(
      C,
      "shadowOpacity",
      1,
      (0, a.getNumberValidator)()
    ),
    r.Factory.addComponentsGetterSetter(C, "shadowOffset", ["x", "y"]),
    r.Factory.addGetterSetter(
      C,
      "shadowOffsetX",
      0,
      (0, a.getNumberValidator)()
    ),
    r.Factory.addGetterSetter(
      C,
      "shadowOffsetY",
      0,
      (0, a.getNumberValidator)()
    ),
    r.Factory.addGetterSetter(C, "fillPatternImage"),
    r.Factory.addGetterSetter(
      C,
      "fill",
      void 0,
      (0, a.getStringOrGradientValidator)()
    ),
    r.Factory.addGetterSetter(
      C,
      "fillPatternX",
      0,
      (0, a.getNumberValidator)()
    ),
    r.Factory.addGetterSetter(
      C,
      "fillPatternY",
      0,
      (0, a.getNumberValidator)()
    ),
    r.Factory.addGetterSetter(C, "fillLinearGradientColorStops"),
    r.Factory.addGetterSetter(C, "strokeLinearGradientColorStops"),
    r.Factory.addGetterSetter(C, "fillRadialGradientStartRadius", 0),
    r.Factory.addGetterSetter(C, "fillRadialGradientEndRadius", 0),
    r.Factory.addGetterSetter(C, "fillRadialGradientColorStops"),
    r.Factory.addGetterSetter(C, "fillPatternRepeat", "repeat"),
    r.Factory.addGetterSetter(C, "fillEnabled", !0),
    r.Factory.addGetterSetter(C, "strokeEnabled", !0),
    r.Factory.addGetterSetter(C, "shadowEnabled", !0),
    r.Factory.addGetterSetter(C, "dashEnabled", !0),
    r.Factory.addGetterSetter(C, "strokeScaleEnabled", !0),
    r.Factory.addGetterSetter(C, "fillPriority", "color"),
    r.Factory.addComponentsGetterSetter(C, "fillPatternOffset", ["x", "y"]),
    r.Factory.addGetterSetter(
      C,
      "fillPatternOffsetX",
      0,
      (0, a.getNumberValidator)()
    ),
    r.Factory.addGetterSetter(
      C,
      "fillPatternOffsetY",
      0,
      (0, a.getNumberValidator)()
    ),
    r.Factory.addComponentsGetterSetter(C, "fillPatternScale", ["x", "y"]),
    r.Factory.addGetterSetter(
      C,
      "fillPatternScaleX",
      1,
      (0, a.getNumberValidator)()
    ),
    r.Factory.addGetterSetter(
      C,
      "fillPatternScaleY",
      1,
      (0, a.getNumberValidator)()
    ),
    r.Factory.addComponentsGetterSetter(C, "fillLinearGradientStartPoint", [
      "x",
      "y",
    ]),
    r.Factory.addComponentsGetterSetter(C, "strokeLinearGradientStartPoint", [
      "x",
      "y",
    ]),
    r.Factory.addGetterSetter(C, "fillLinearGradientStartPointX", 0),
    r.Factory.addGetterSetter(C, "strokeLinearGradientStartPointX", 0),
    r.Factory.addGetterSetter(C, "fillLinearGradientStartPointY", 0),
    r.Factory.addGetterSetter(C, "strokeLinearGradientStartPointY", 0),
    r.Factory.addComponentsGetterSetter(C, "fillLinearGradientEndPoint", [
      "x",
      "y",
    ]),
    r.Factory.addComponentsGetterSetter(C, "strokeLinearGradientEndPoint", [
      "x",
      "y",
    ]),
    r.Factory.addGetterSetter(C, "fillLinearGradientEndPointX", 0),
    r.Factory.addGetterSetter(C, "strokeLinearGradientEndPointX", 0),
    r.Factory.addGetterSetter(C, "fillLinearGradientEndPointY", 0),
    r.Factory.addGetterSetter(C, "strokeLinearGradientEndPointY", 0),
    r.Factory.addComponentsGetterSetter(C, "fillRadialGradientStartPoint", [
      "x",
      "y",
    ]),
    r.Factory.addGetterSetter(C, "fillRadialGradientStartPointX", 0),
    r.Factory.addGetterSetter(C, "fillRadialGradientStartPointY", 0),
    r.Factory.addComponentsGetterSetter(C, "fillRadialGradientEndPoint", [
      "x",
      "y",
    ]),
    r.Factory.addGetterSetter(C, "fillRadialGradientEndPointX", 0),
    r.Factory.addGetterSetter(C, "fillRadialGradientEndPointY", 0),
    r.Factory.addGetterSetter(C, "fillPatternRotation", 0),
    r.Factory.addGetterSetter(
      C,
      "fillRule",
      void 0,
      (0, a.getStringValidator)()
    ),
    r.Factory.backCompat(C, {
      dashArray: "dash",
      getDashArray: "getDash",
      setDashArray: "getDash",
      drawFunc: "sceneFunc",
      getDrawFunc: "getSceneFunc",
      setDrawFunc: "setSceneFunc",
      drawHitFunc: "hitFunc",
      getDrawHitFunc: "getHitFunc",
      setDrawHitFunc: "setHitFunc",
    });
})(yt);
Object.defineProperty(Rr, "__esModule", { value: !0 });
Rr.Layer = void 0;
const Wt = ct,
  nn = Pe,
  Ie = ot,
  In = K,
  Ra = It,
  $h = I,
  jh = yt,
  Wh = W;
var Kh = "#",
  Yh = "beforeDraw",
  Xh = "draw",
  js = [
    { x: 0, y: 0 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 },
  ],
  qh = js.length;
let tr = class extends nn.Container {
  constructor(t) {
    super(t),
      (this.canvas = new Ra.SceneCanvas()),
      (this.hitCanvas = new Ra.HitCanvas({ pixelRatio: 1 })),
      (this._waitingForDraw = !1),
      this.on("visibleChange.konva", this._checkVisibility),
      this._checkVisibility(),
      this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled),
      this._setSmoothEnabled();
  }
  createPNGStream() {
    return this.canvas._canvas.createPNGStream();
  }
  getCanvas() {
    return this.canvas;
  }
  getNativeCanvasElement() {
    return this.canvas._canvas;
  }
  getHitCanvas() {
    return this.hitCanvas;
  }
  getContext() {
    return this.getCanvas().getContext();
  }
  clear(t) {
    return (
      this.getContext().clear(t),
      this.getHitCanvas().getContext().clear(t),
      this
    );
  }
  setZIndex(t) {
    super.setZIndex(t);
    var e = this.getStage();
    return (
      e &&
        e.content &&
        (e.content.removeChild(this.getNativeCanvasElement()),
        t < e.children.length - 1
          ? e.content.insertBefore(
              this.getNativeCanvasElement(),
              e.children[t + 1].getCanvas()._canvas
            )
          : e.content.appendChild(this.getNativeCanvasElement())),
      this
    );
  }
  moveToTop() {
    Ie.Node.prototype.moveToTop.call(this);
    var t = this.getStage();
    return (
      t &&
        t.content &&
        (t.content.removeChild(this.getNativeCanvasElement()),
        t.content.appendChild(this.getNativeCanvasElement())),
      !0
    );
  }
  moveUp() {
    var t = Ie.Node.prototype.moveUp.call(this);
    if (!t) return !1;
    var e = this.getStage();
    return !e || !e.content
      ? !1
      : (e.content.removeChild(this.getNativeCanvasElement()),
        this.index < e.children.length - 1
          ? e.content.insertBefore(
              this.getNativeCanvasElement(),
              e.children[this.index + 1].getCanvas()._canvas
            )
          : e.content.appendChild(this.getNativeCanvasElement()),
        !0);
  }
  moveDown() {
    if (Ie.Node.prototype.moveDown.call(this)) {
      var t = this.getStage();
      if (t) {
        var e = t.children;
        t.content &&
          (t.content.removeChild(this.getNativeCanvasElement()),
          t.content.insertBefore(
            this.getNativeCanvasElement(),
            e[this.index + 1].getCanvas()._canvas
          ));
      }
      return !0;
    }
    return !1;
  }
  moveToBottom() {
    if (Ie.Node.prototype.moveToBottom.call(this)) {
      var t = this.getStage();
      if (t) {
        var e = t.children;
        t.content &&
          (t.content.removeChild(this.getNativeCanvasElement()),
          t.content.insertBefore(
            this.getNativeCanvasElement(),
            e[1].getCanvas()._canvas
          ));
      }
      return !0;
    }
    return !1;
  }
  getLayer() {
    return this;
  }
  remove() {
    var t = this.getNativeCanvasElement();
    return (
      Ie.Node.prototype.remove.call(this),
      t &&
        t.parentNode &&
        Wt.Util._isInDocument(t) &&
        t.parentNode.removeChild(t),
      this
    );
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: t, height: e }) {
    return (
      this.canvas.setSize(t, e),
      this.hitCanvas.setSize(t, e),
      this._setSmoothEnabled(),
      this
    );
  }
  _validateAdd(t) {
    var e = t.getType();
    e !== "Group" &&
      e !== "Shape" &&
      Wt.Util.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(t) {
    return (
      (t = t || {}),
      (t.width = t.width || this.getWidth()),
      (t.height = t.height || this.getHeight()),
      (t.x = t.x !== void 0 ? t.x : this.x()),
      (t.y = t.y !== void 0 ? t.y : this.y()),
      Ie.Node.prototype._toKonvaCanvas.call(this, t)
    );
  }
  _checkVisibility() {
    this.visible()
      ? (this.canvas._canvas.style.display = "block")
      : (this.canvas._canvas.style.display = "none");
  }
  _setSmoothEnabled() {
    this.getContext()._context.imageSmoothingEnabled =
      this.imageSmoothingEnabled();
  }
  getWidth() {
    if (this.parent) return this.parent.width();
  }
  setWidth() {
    Wt.Util.warn(
      'Can not change width of layer. Use "stage.width(value)" function instead.'
    );
  }
  getHeight() {
    if (this.parent) return this.parent.height();
  }
  setHeight() {
    Wt.Util.warn(
      'Can not change height of layer. Use "stage.height(value)" function instead.'
    );
  }
  batchDraw() {
    return (
      this._waitingForDraw ||
        ((this._waitingForDraw = !0),
        Wt.Util.requestAnimFrame(() => {
          this.draw(), (this._waitingForDraw = !1);
        })),
      this
    );
  }
  getIntersection(t) {
    if (!this.isListening() || !this.isVisible()) return null;
    for (var e = 1, r = !1; ; ) {
      for (let i = 0; i < qh; i++) {
        const a = js[i],
          s = this._getIntersection({ x: t.x + a.x * e, y: t.y + a.y * e }),
          o = s.shape;
        if (o) return o;
        if (((r = !!s.antialiased), !s.antialiased)) break;
      }
      if (r) e += 1;
      else return null;
    }
  }
  _getIntersection(t) {
    const e = this.hitCanvas.pixelRatio,
      r = this.hitCanvas.context.getImageData(
        Math.round(t.x * e),
        Math.round(t.y * e),
        1,
        1
      ).data,
      i = r[3];
    if (i === 255) {
      const a = Wt.Util._rgbToHex(r[0], r[1], r[2]),
        s = jh.shapes[Kh + a];
      return s ? { shape: s } : { antialiased: !0 };
    } else if (i > 0) return { antialiased: !0 };
    return {};
  }
  drawScene(t, e) {
    var r = this.getLayer(),
      i = t || (r && r.getCanvas());
    return (
      this._fire(Yh, { node: this }),
      this.clearBeforeDraw() && i.getContext().clear(),
      nn.Container.prototype.drawScene.call(this, i, e),
      this._fire(Xh, { node: this }),
      this
    );
  }
  drawHit(t, e) {
    var r = this.getLayer(),
      i = t || (r && r.hitCanvas);
    return (
      r && r.clearBeforeDraw() && r.getHitCanvas().getContext().clear(),
      nn.Container.prototype.drawHit.call(this, i, e),
      this
    );
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(t) {
    Wt.Util.warn(
      "hitGraphEnabled method is deprecated. Please use layer.listening() instead."
    ),
      this.listening(t);
  }
  getHitGraphEnabled(t) {
    return (
      Wt.Util.warn(
        "hitGraphEnabled method is deprecated. Please use layer.listening() instead."
      ),
      this.listening()
    );
  }
  toggleHitCanvas() {
    if (!(!this.parent || !this.parent.content)) {
      var t = this.parent,
        e = !!this.hitCanvas._canvas.parentNode;
      e
        ? t.content.removeChild(this.hitCanvas._canvas)
        : t.content.appendChild(this.hitCanvas._canvas);
    }
  }
  destroy() {
    return (
      Wt.Util.releaseCanvas(
        this.getNativeCanvasElement(),
        this.getHitCanvas()._canvas
      ),
      super.destroy()
    );
  }
};
Rr.Layer = tr;
tr.prototype.nodeType = "Layer";
(0, Wh._registerNode)(tr);
In.Factory.addGetterSetter(tr, "imageSmoothingEnabled", !0);
In.Factory.addGetterSetter(tr, "clearBeforeDraw", !0);
In.Factory.addGetterSetter(
  tr,
  "hitGraphEnabled",
  !0,
  (0, $h.getBooleanValidator)()
);
var hi = {};
Object.defineProperty(hi, "__esModule", { value: !0 });
hi.FastLayer = void 0;
const Qh = ct,
  Jh = Rr,
  Zh = W;
class Un extends Jh.Layer {
  constructor(t) {
    super(t),
      this.listening(!1),
      Qh.Util.warn(
        'Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.'
      );
  }
}
hi.FastLayer = Un;
Un.prototype.nodeType = "FastLayer";
(0, Zh._registerNode)(Un);
var er = {};
Object.defineProperty(er, "__esModule", { value: !0 });
er.Group = void 0;
const tc = ct,
  ec = Pe,
  rc = W;
class Bn extends ec.Container {
  _validateAdd(t) {
    var e = t.getType();
    e !== "Group" &&
      e !== "Shape" &&
      tc.Util.throw("You may only add groups and shapes to groups.");
  }
}
er.Group = Bn;
Bn.prototype.nodeType = "Group";
(0, rc._registerNode)(Bn);
var rr = {};
Object.defineProperty(rr, "__esModule", { value: !0 });
rr.Animation = void 0;
const an = W,
  Fa = ct,
  sn = (function () {
    return an.glob.performance && an.glob.performance.now
      ? function () {
          return an.glob.performance.now();
        }
      : function () {
          return new Date().getTime();
        };
  })();
class Bt {
  constructor(t, e) {
    (this.id = Bt.animIdCounter++),
      (this.frame = { time: 0, timeDiff: 0, lastTime: sn(), frameRate: 0 }),
      (this.func = t),
      this.setLayers(e);
  }
  setLayers(t) {
    let e = [];
    return t && (e = Array.isArray(t) ? t : [t]), (this.layers = e), this;
  }
  getLayers() {
    return this.layers;
  }
  addLayer(t) {
    const e = this.layers,
      r = e.length;
    for (let i = 0; i < r; i++) if (e[i]._id === t._id) return !1;
    return this.layers.push(t), !0;
  }
  isRunning() {
    const e = Bt.animations,
      r = e.length;
    for (let i = 0; i < r; i++) if (e[i].id === this.id) return !0;
    return !1;
  }
  start() {
    return (
      this.stop(),
      (this.frame.timeDiff = 0),
      (this.frame.lastTime = sn()),
      Bt._addAnimation(this),
      this
    );
  }
  stop() {
    return Bt._removeAnimation(this), this;
  }
  _updateFrameObject(t) {
    (this.frame.timeDiff = t - this.frame.lastTime),
      (this.frame.lastTime = t),
      (this.frame.time += this.frame.timeDiff),
      (this.frame.frameRate = 1e3 / this.frame.timeDiff);
  }
  static _addAnimation(t) {
    this.animations.push(t), this._handleAnimation();
  }
  static _removeAnimation(t) {
    const e = t.id,
      r = this.animations,
      i = r.length;
    for (let a = 0; a < i; a++)
      if (r[a].id === e) {
        this.animations.splice(a, 1);
        break;
      }
  }
  static _runFrames() {
    const t = {},
      e = this.animations;
    for (let r = 0; r < e.length; r++) {
      const i = e[r],
        a = i.layers,
        s = i.func;
      i._updateFrameObject(sn());
      const o = a.length;
      let l;
      if ((s ? (l = s.call(i, i.frame) !== !1) : (l = !0), !!l))
        for (let h = 0; h < o; h++) {
          const c = a[h];
          c._id !== void 0 && (t[c._id] = c);
        }
    }
    for (let r in t) t.hasOwnProperty(r) && t[r].batchDraw();
  }
  static _animationLoop() {
    const t = Bt;
    t.animations.length
      ? (t._runFrames(), Fa.Util.requestAnimFrame(t._animationLoop))
      : (t.animRunning = !1);
  }
  static _handleAnimation() {
    this.animRunning ||
      ((this.animRunning = !0), Fa.Util.requestAnimFrame(this._animationLoop));
  }
}
rr.Animation = Bt;
Bt.animations = [];
Bt.animIdCounter = 0;
Bt.animRunning = !1;
var Ws = {};
(function (n) {
  Object.defineProperty(n, "__esModule", { value: !0 }),
    (n.Easings = n.Tween = void 0);
  const t = ct,
    e = rr,
    r = ot,
    i = W;
  var a = { node: 1, duration: 1, easing: 1, onFinish: 1, yoyo: 1 },
    s = 1,
    o = 2,
    l = 3,
    h = 0,
    c = ["fill", "stroke", "shadowColor"];
  class v {
    constructor(u, p, _, b, y, d, m) {
      (this.prop = u),
        (this.propFunc = p),
        (this.begin = b),
        (this._pos = b),
        (this.duration = d),
        (this._change = 0),
        (this.prevPos = 0),
        (this.yoyo = m),
        (this._time = 0),
        (this._position = 0),
        (this._startTime = 0),
        (this._finish = 0),
        (this.func = _),
        (this._change = y - this.begin),
        this.pause();
    }
    fire(u) {
      var p = this[u];
      p && p();
    }
    setTime(u) {
      u > this.duration
        ? this.yoyo
          ? ((this._time = this.duration), this.reverse())
          : this.finish()
        : u < 0
          ? this.yoyo
            ? ((this._time = 0), this.play())
            : this.reset()
          : ((this._time = u), this.update());
    }
    getTime() {
      return this._time;
    }
    setPosition(u) {
      (this.prevPos = this._pos), this.propFunc(u), (this._pos = u);
    }
    getPosition(u) {
      return (
        u === void 0 && (u = this._time),
        this.func(u, this.begin, this._change, this.duration)
      );
    }
    play() {
      (this.state = o),
        (this._startTime = this.getTimer() - this._time),
        this.onEnterFrame(),
        this.fire("onPlay");
    }
    reverse() {
      (this.state = l),
        (this._time = this.duration - this._time),
        (this._startTime = this.getTimer() - this._time),
        this.onEnterFrame(),
        this.fire("onReverse");
    }
    seek(u) {
      this.pause(), (this._time = u), this.update(), this.fire("onSeek");
    }
    reset() {
      this.pause(), (this._time = 0), this.update(), this.fire("onReset");
    }
    finish() {
      this.pause(),
        (this._time = this.duration),
        this.update(),
        this.fire("onFinish");
    }
    update() {
      this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
    }
    onEnterFrame() {
      var u = this.getTimer() - this._startTime;
      this.state === o
        ? this.setTime(u)
        : this.state === l && this.setTime(this.duration - u);
    }
    pause() {
      (this.state = s), this.fire("onPause");
    }
    getTimer() {
      return new Date().getTime();
    }
  }
  class g {
    constructor(u) {
      var p = this,
        _ = u.node,
        b = _._id,
        y,
        d = u.easing || n.Easings.Linear,
        m = !!u.yoyo,
        S;
      typeof u.duration > "u"
        ? (y = 0.3)
        : u.duration === 0
          ? (y = 0.001)
          : (y = u.duration),
        (this.node = _),
        (this._id = h++);
      var P =
        _.getLayer() || (_ instanceof i.Konva.Stage ? _.getLayers() : null);
      P ||
        t.Util.error(
          "Tween constructor have `node` that is not in a layer. Please add node into layer first."
        ),
        (this.anim = new e.Animation(function () {
          p.tween.onEnterFrame();
        }, P)),
        (this.tween = new v(
          S,
          function (E) {
            p._tweenFunc(E);
          },
          d,
          0,
          1,
          y * 1e3,
          m
        )),
        this._addListeners(),
        g.attrs[b] || (g.attrs[b] = {}),
        g.attrs[b][this._id] || (g.attrs[b][this._id] = {}),
        g.tweens[b] || (g.tweens[b] = {});
      for (S in u) a[S] === void 0 && this._addAttr(S, u[S]);
      this.reset(),
        (this.onFinish = u.onFinish),
        (this.onReset = u.onReset),
        (this.onUpdate = u.onUpdate);
    }
    _addAttr(u, p) {
      var _ = this.node,
        b = _._id,
        y,
        d,
        m,
        S,
        P,
        E,
        C,
        k;
      if (
        ((m = g.tweens[b][u]),
        m && delete g.attrs[b][m][u],
        (y = _.getAttr(u)),
        t.Util._isArray(p))
      )
        if (
          ((d = []),
          (P = Math.max(p.length, y.length)),
          u === "points" &&
            p.length !== y.length &&
            (p.length > y.length
              ? ((C = y), (y = t.Util._prepareArrayForTween(y, p, _.closed())))
              : ((E = p),
                (p = t.Util._prepareArrayForTween(p, y, _.closed())))),
          u.indexOf("fill") === 0)
        )
          for (S = 0; S < P; S++)
            if (S % 2 === 0) d.push(p[S] - y[S]);
            else {
              var w = t.Util.colorToRGBA(y[S]);
              (k = t.Util.colorToRGBA(p[S])),
                (y[S] = w),
                d.push({
                  r: k.r - w.r,
                  g: k.g - w.g,
                  b: k.b - w.b,
                  a: k.a - w.a,
                });
            }
        else for (S = 0; S < P; S++) d.push(p[S] - y[S]);
      else
        c.indexOf(u) !== -1
          ? ((y = t.Util.colorToRGBA(y)),
            (k = t.Util.colorToRGBA(p)),
            (d = { r: k.r - y.r, g: k.g - y.g, b: k.b - y.b, a: k.a - y.a }))
          : (d = p - y);
      (g.attrs[b][this._id][u] = {
        start: y,
        diff: d,
        end: p,
        trueEnd: E,
        trueStart: C,
      }),
        (g.tweens[b][u] = this._id);
    }
    _tweenFunc(u) {
      var p = this.node,
        _ = g.attrs[p._id][this._id],
        b,
        y,
        d,
        m,
        S,
        P,
        E,
        C;
      for (b in _) {
        if (
          ((y = _[b]),
          (d = y.start),
          (m = y.diff),
          (C = y.end),
          t.Util._isArray(d))
        )
          if (
            ((S = []),
            (E = Math.max(d.length, C.length)),
            b.indexOf("fill") === 0)
          )
            for (P = 0; P < E; P++)
              P % 2 === 0
                ? S.push((d[P] || 0) + m[P] * u)
                : S.push(
                    "rgba(" +
                      Math.round(d[P].r + m[P].r * u) +
                      "," +
                      Math.round(d[P].g + m[P].g * u) +
                      "," +
                      Math.round(d[P].b + m[P].b * u) +
                      "," +
                      (d[P].a + m[P].a * u) +
                      ")"
                  );
          else for (P = 0; P < E; P++) S.push((d[P] || 0) + m[P] * u);
        else
          c.indexOf(b) !== -1
            ? (S =
                "rgba(" +
                Math.round(d.r + m.r * u) +
                "," +
                Math.round(d.g + m.g * u) +
                "," +
                Math.round(d.b + m.b * u) +
                "," +
                (d.a + m.a * u) +
                ")")
            : (S = d + m * u);
        p.setAttr(b, S);
      }
    }
    _addListeners() {
      (this.tween.onPlay = () => {
        this.anim.start();
      }),
        (this.tween.onReverse = () => {
          this.anim.start();
        }),
        (this.tween.onPause = () => {
          this.anim.stop();
        }),
        (this.tween.onFinish = () => {
          var u = this.node,
            p = g.attrs[u._id][this._id];
          p.points && p.points.trueEnd && u.setAttr("points", p.points.trueEnd),
            this.onFinish && this.onFinish.call(this);
        }),
        (this.tween.onReset = () => {
          var u = this.node,
            p = g.attrs[u._id][this._id];
          p.points && p.points.trueStart && u.points(p.points.trueStart),
            this.onReset && this.onReset();
        }),
        (this.tween.onUpdate = () => {
          this.onUpdate && this.onUpdate.call(this);
        });
    }
    play() {
      return this.tween.play(), this;
    }
    reverse() {
      return this.tween.reverse(), this;
    }
    reset() {
      return this.tween.reset(), this;
    }
    seek(u) {
      return this.tween.seek(u * 1e3), this;
    }
    pause() {
      return this.tween.pause(), this;
    }
    finish() {
      return this.tween.finish(), this;
    }
    destroy() {
      var u = this.node._id,
        p = this._id,
        _ = g.tweens[u],
        b;
      this.pause();
      for (b in _) delete g.tweens[u][b];
      delete g.attrs[u][p];
    }
  }
  (n.Tween = g),
    (g.attrs = {}),
    (g.tweens = {}),
    (r.Node.prototype.to = function (f) {
      var u = f.onFinish;
      (f.node = this),
        (f.onFinish = function () {
          this.destroy(), u && u();
        });
      var p = new g(f);
      p.play();
    }),
    (n.Easings = {
      BackEaseIn(f, u, p, _) {
        var b = 1.70158;
        return p * (f /= _) * f * ((b + 1) * f - b) + u;
      },
      BackEaseOut(f, u, p, _) {
        var b = 1.70158;
        return p * ((f = f / _ - 1) * f * ((b + 1) * f + b) + 1) + u;
      },
      BackEaseInOut(f, u, p, _) {
        var b = 1.70158;
        return (f /= _ / 2) < 1
          ? (p / 2) * (f * f * (((b *= 1.525) + 1) * f - b)) + u
          : (p / 2) * ((f -= 2) * f * (((b *= 1.525) + 1) * f + b) + 2) + u;
      },
      ElasticEaseIn(f, u, p, _, b, y) {
        var d = 0;
        return f === 0
          ? u
          : (f /= _) === 1
            ? u + p
            : (y || (y = _ * 0.3),
              !b || b < Math.abs(p)
                ? ((b = p), (d = y / 4))
                : (d = (y / (2 * Math.PI)) * Math.asin(p / b)),
              -(
                b *
                Math.pow(2, 10 * (f -= 1)) *
                Math.sin(((f * _ - d) * (2 * Math.PI)) / y)
              ) + u);
      },
      ElasticEaseOut(f, u, p, _, b, y) {
        var d = 0;
        return f === 0
          ? u
          : (f /= _) === 1
            ? u + p
            : (y || (y = _ * 0.3),
              !b || b < Math.abs(p)
                ? ((b = p), (d = y / 4))
                : (d = (y / (2 * Math.PI)) * Math.asin(p / b)),
              b *
                Math.pow(2, -10 * f) *
                Math.sin(((f * _ - d) * (2 * Math.PI)) / y) +
                p +
                u);
      },
      ElasticEaseInOut(f, u, p, _, b, y) {
        var d = 0;
        return f === 0
          ? u
          : (f /= _ / 2) === 2
            ? u + p
            : (y || (y = _ * (0.3 * 1.5)),
              !b || b < Math.abs(p)
                ? ((b = p), (d = y / 4))
                : (d = (y / (2 * Math.PI)) * Math.asin(p / b)),
              f < 1
                ? -0.5 *
                    (b *
                      Math.pow(2, 10 * (f -= 1)) *
                      Math.sin(((f * _ - d) * (2 * Math.PI)) / y)) +
                  u
                : b *
                    Math.pow(2, -10 * (f -= 1)) *
                    Math.sin(((f * _ - d) * (2 * Math.PI)) / y) *
                    0.5 +
                  p +
                  u);
      },
      BounceEaseOut(f, u, p, _) {
        return (f /= _) < 1 / 2.75
          ? p * (7.5625 * f * f) + u
          : f < 2 / 2.75
            ? p * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + u
            : f < 2.5 / 2.75
              ? p * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + u
              : p * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + u;
      },
      BounceEaseIn(f, u, p, _) {
        return p - n.Easings.BounceEaseOut(_ - f, 0, p, _) + u;
      },
      BounceEaseInOut(f, u, p, _) {
        return f < _ / 2
          ? n.Easings.BounceEaseIn(f * 2, 0, p, _) * 0.5 + u
          : n.Easings.BounceEaseOut(f * 2 - _, 0, p, _) * 0.5 + p * 0.5 + u;
      },
      EaseIn(f, u, p, _) {
        return p * (f /= _) * f + u;
      },
      EaseOut(f, u, p, _) {
        return -p * (f /= _) * (f - 2) + u;
      },
      EaseInOut(f, u, p, _) {
        return (f /= _ / 2) < 1
          ? (p / 2) * f * f + u
          : (-p / 2) * (--f * (f - 2) - 1) + u;
      },
      StrongEaseIn(f, u, p, _) {
        return p * (f /= _) * f * f * f * f + u;
      },
      StrongEaseOut(f, u, p, _) {
        return p * ((f = f / _ - 1) * f * f * f * f + 1) + u;
      },
      StrongEaseInOut(f, u, p, _) {
        return (f /= _ / 2) < 1
          ? (p / 2) * f * f * f * f * f + u
          : (p / 2) * ((f -= 2) * f * f * f * f + 2) + u;
      },
      Linear(f, u, p, _) {
        return (p * f) / _ + u;
      },
    });
})(Ws);
(function (n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.Konva = void 0);
  const t = W,
    e = ct,
    r = ot,
    i = Pe,
    a = zs,
    s = Rr,
    o = hi,
    l = er,
    h = oi,
    c = yt,
    v = rr,
    g = Ws,
    f = Jt,
    u = It;
  (n.Konva = e.Util._assign(t.Konva, {
    Util: e.Util,
    Transform: e.Transform,
    Node: r.Node,
    Container: i.Container,
    Stage: a.Stage,
    stages: a.stages,
    Layer: s.Layer,
    FastLayer: o.FastLayer,
    Group: l.Group,
    DD: h.DD,
    Shape: c.Shape,
    shapes: c.shapes,
    Animation: v.Animation,
    Tween: g.Tween,
    Easings: g.Easings,
    Context: f.Context,
    Canvas: u.Canvas,
  })),
    (n.default = n.Konva);
})(Is);
var ci = {};
Object.defineProperty(ci, "__esModule", { value: !0 });
ci.Arc = void 0;
const di = K,
  ic = yt,
  Ma = W,
  ui = I,
  nc = W;
class re extends ic.Shape {
  _sceneFunc(t) {
    var e = Ma.Konva.getAngle(this.angle()),
      r = this.clockwise();
    t.beginPath(),
      t.arc(0, 0, this.outerRadius(), 0, e, r),
      t.arc(0, 0, this.innerRadius(), e, 0, !r),
      t.closePath(),
      t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
  getSelfRect() {
    const t = this.innerRadius(),
      e = this.outerRadius(),
      r = this.clockwise(),
      i = Ma.Konva.getAngle(r ? 360 - this.angle() : this.angle()),
      a = Math.cos(Math.min(i, Math.PI)),
      s = 1,
      o = Math.sin(Math.min(Math.max(Math.PI, i), (3 * Math.PI) / 2)),
      l = Math.sin(Math.min(i, Math.PI / 2)),
      h = a * (a > 0 ? t : e),
      c = s * e,
      v = o * (o > 0 ? t : e),
      g = l * (l > 0 ? e : t);
    return { x: h, y: r ? -1 * g : v, width: c - h, height: g - v };
  }
}
ci.Arc = re;
re.prototype._centroid = !0;
re.prototype.className = "Arc";
re.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, nc._registerNode)(re);
di.Factory.addGetterSetter(re, "innerRadius", 0, (0, ui.getNumberValidator)());
di.Factory.addGetterSetter(re, "outerRadius", 0, (0, ui.getNumberValidator)());
di.Factory.addGetterSetter(re, "angle", 0, (0, ui.getNumberValidator)());
di.Factory.addGetterSetter(re, "clockwise", !1, (0, ui.getBooleanValidator)());
var fi = {},
  Fr = {};
Object.defineProperty(Fr, "__esModule", { value: !0 });
Fr.Line = void 0;
const gi = K,
  ac = yt,
  Ks = I,
  sc = W;
function kn(n, t, e, r, i, a, s) {
  var o = Math.sqrt(Math.pow(e - n, 2) + Math.pow(r - t, 2)),
    l = Math.sqrt(Math.pow(i - e, 2) + Math.pow(a - r, 2)),
    h = (s * o) / (o + l),
    c = (s * l) / (o + l),
    v = e - h * (i - n),
    g = r - h * (a - t),
    f = e + c * (i - n),
    u = r + c * (a - t);
  return [v, g, f, u];
}
function Na(n, t) {
  var e = n.length,
    r = [],
    i,
    a;
  for (i = 2; i < e - 2; i += 2)
    (a = kn(n[i - 2], n[i - 1], n[i], n[i + 1], n[i + 2], n[i + 3], t)),
      !isNaN(a[0]) &&
        (r.push(a[0]),
        r.push(a[1]),
        r.push(n[i]),
        r.push(n[i + 1]),
        r.push(a[2]),
        r.push(a[3]));
  return r;
}
let ve = class extends ac.Shape {
  constructor(t) {
    super(t),
      this.on(
        "pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva",
        function () {
          this._clearCache("tensionPoints");
        }
      );
  }
  _sceneFunc(t) {
    var e = this.points(),
      r = e.length,
      i = this.tension(),
      a = this.closed(),
      s = this.bezier(),
      o,
      l,
      h;
    if (r) {
      if ((t.beginPath(), t.moveTo(e[0], e[1]), i !== 0 && r > 4)) {
        for (
          o = this.getTensionPoints(),
            l = o.length,
            h = a ? 0 : 4,
            a || t.quadraticCurveTo(o[0], o[1], o[2], o[3]);
          h < l - 2;

        )
          t.bezierCurveTo(o[h++], o[h++], o[h++], o[h++], o[h++], o[h++]);
        a || t.quadraticCurveTo(o[l - 2], o[l - 1], e[r - 2], e[r - 1]);
      } else if (s)
        for (h = 2; h < r; )
          t.bezierCurveTo(e[h++], e[h++], e[h++], e[h++], e[h++], e[h++]);
      else for (h = 2; h < r; h += 2) t.lineTo(e[h], e[h + 1]);
      a ? (t.closePath(), t.fillStrokeShape(this)) : t.strokeShape(this);
    }
  }
  getTensionPoints() {
    return this._getCache("tensionPoints", this._getTensionPoints);
  }
  _getTensionPoints() {
    return this.closed()
      ? this._getTensionPointsClosed()
      : Na(this.points(), this.tension());
  }
  _getTensionPointsClosed() {
    var t = this.points(),
      e = t.length,
      r = this.tension(),
      i = kn(t[e - 2], t[e - 1], t[0], t[1], t[2], t[3], r),
      a = kn(t[e - 4], t[e - 3], t[e - 2], t[e - 1], t[0], t[1], r),
      s = Na(t, r),
      o = [i[2], i[3]]
        .concat(s)
        .concat([
          a[0],
          a[1],
          t[e - 2],
          t[e - 1],
          a[2],
          a[3],
          i[0],
          i[1],
          t[0],
          t[1],
        ]);
    return o;
  }
  getWidth() {
    return this.getSelfRect().width;
  }
  getHeight() {
    return this.getSelfRect().height;
  }
  getSelfRect() {
    var t = this.points();
    if (t.length < 4)
      return { x: t[0] || 0, y: t[1] || 0, width: 0, height: 0 };
    this.tension() !== 0
      ? (t = [
          t[0],
          t[1],
          ...this._getTensionPoints(),
          t[t.length - 2],
          t[t.length - 1],
        ])
      : (t = this.points());
    for (
      var e = t[0], r = t[0], i = t[1], a = t[1], s, o, l = 0;
      l < t.length / 2;
      l++
    )
      (s = t[l * 2]),
        (o = t[l * 2 + 1]),
        (e = Math.min(e, s)),
        (r = Math.max(r, s)),
        (i = Math.min(i, o)),
        (a = Math.max(a, o));
    return { x: e, y: i, width: r - e, height: a - i };
  }
};
Fr.Line = ve;
ve.prototype.className = "Line";
ve.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
(0, sc._registerNode)(ve);
gi.Factory.addGetterSetter(ve, "closed", !1);
gi.Factory.addGetterSetter(ve, "bezier", !1);
gi.Factory.addGetterSetter(ve, "tension", 0, (0, Ks.getNumberValidator)());
gi.Factory.addGetterSetter(ve, "points", [], (0, Ks.getNumberArrayValidator)());
var ir = {},
  Ys = {};
(function (n) {
  Object.defineProperty(n, "__esModule", { value: !0 }),
    (n.t2length =
      n.getQuadraticArcLength =
      n.getCubicArcLength =
      n.binomialCoefficients =
      n.cValues =
      n.tValues =
        void 0),
    (n.tValues = [
      [],
      [],
      [-0.5773502691896257, 0.5773502691896257],
      [0, -0.7745966692414834, 0.7745966692414834],
      [
        -0.33998104358485626, 0.33998104358485626, -0.8611363115940526,
        0.8611363115940526,
      ],
      [
        0, -0.5384693101056831, 0.5384693101056831, -0.906179845938664,
        0.906179845938664,
      ],
      [
        0.6612093864662645, -0.6612093864662645, -0.2386191860831969,
        0.2386191860831969, -0.932469514203152, 0.932469514203152,
      ],
      [
        0, 0.4058451513773972, -0.4058451513773972, -0.7415311855993945,
        0.7415311855993945, -0.9491079123427585, 0.9491079123427585,
      ],
      [
        -0.1834346424956498, 0.1834346424956498, -0.525532409916329,
        0.525532409916329, -0.7966664774136267, 0.7966664774136267,
        -0.9602898564975363, 0.9602898564975363,
      ],
      [
        0, -0.8360311073266358, 0.8360311073266358, -0.9681602395076261,
        0.9681602395076261, -0.3242534234038089, 0.3242534234038089,
        -0.6133714327005904, 0.6133714327005904,
      ],
      [
        -0.14887433898163122, 0.14887433898163122, -0.4333953941292472,
        0.4333953941292472, -0.6794095682990244, 0.6794095682990244,
        -0.8650633666889845, 0.8650633666889845, -0.9739065285171717,
        0.9739065285171717,
      ],
      [
        0, -0.26954315595234496, 0.26954315595234496, -0.5190961292068118,
        0.5190961292068118, -0.7301520055740494, 0.7301520055740494,
        -0.8870625997680953, 0.8870625997680953, -0.978228658146057,
        0.978228658146057,
      ],
      [
        -0.1252334085114689, 0.1252334085114689, -0.3678314989981802,
        0.3678314989981802, -0.5873179542866175, 0.5873179542866175,
        -0.7699026741943047, 0.7699026741943047, -0.9041172563704749,
        0.9041172563704749, -0.9815606342467192, 0.9815606342467192,
      ],
      [
        0, -0.2304583159551348, 0.2304583159551348, -0.44849275103644687,
        0.44849275103644687, -0.6423493394403402, 0.6423493394403402,
        -0.8015780907333099, 0.8015780907333099, -0.9175983992229779,
        0.9175983992229779, -0.9841830547185881, 0.9841830547185881,
      ],
      [
        -0.10805494870734367, 0.10805494870734367, -0.31911236892788974,
        0.31911236892788974, -0.5152486363581541, 0.5152486363581541,
        -0.6872929048116855, 0.6872929048116855, -0.827201315069765,
        0.827201315069765, -0.9284348836635735, 0.9284348836635735,
        -0.9862838086968123, 0.9862838086968123,
      ],
      [
        0, -0.20119409399743451, 0.20119409399743451, -0.3941513470775634,
        0.3941513470775634, -0.5709721726085388, 0.5709721726085388,
        -0.7244177313601701, 0.7244177313601701, -0.8482065834104272,
        0.8482065834104272, -0.937273392400706, 0.937273392400706,
        -0.9879925180204854, 0.9879925180204854,
      ],
      [
        -0.09501250983763744, 0.09501250983763744, -0.2816035507792589,
        0.2816035507792589, -0.45801677765722737, 0.45801677765722737,
        -0.6178762444026438, 0.6178762444026438, -0.755404408355003,
        0.755404408355003, -0.8656312023878318, 0.8656312023878318,
        -0.9445750230732326, 0.9445750230732326, -0.9894009349916499,
        0.9894009349916499,
      ],
      [
        0, -0.17848418149584785, 0.17848418149584785, -0.3512317634538763,
        0.3512317634538763, -0.5126905370864769, 0.5126905370864769,
        -0.6576711592166907, 0.6576711592166907, -0.7815140038968014,
        0.7815140038968014, -0.8802391537269859, 0.8802391537269859,
        -0.9506755217687678, 0.9506755217687678, -0.9905754753144174,
        0.9905754753144174,
      ],
      [
        -0.0847750130417353, 0.0847750130417353, -0.2518862256915055,
        0.2518862256915055, -0.41175116146284263, 0.41175116146284263,
        -0.5597708310739475, 0.5597708310739475, -0.6916870430603532,
        0.6916870430603532, -0.8037049589725231, 0.8037049589725231,
        -0.8926024664975557, 0.8926024664975557, -0.9558239495713977,
        0.9558239495713977, -0.9915651684209309, 0.9915651684209309,
      ],
      [
        0, -0.16035864564022537, 0.16035864564022537, -0.31656409996362983,
        0.31656409996362983, -0.46457074137596094, 0.46457074137596094,
        -0.600545304661681, 0.600545304661681, -0.7209661773352294,
        0.7209661773352294, -0.8227146565371428, 0.8227146565371428,
        -0.9031559036148179, 0.9031559036148179, -0.96020815213483,
        0.96020815213483, -0.9924068438435844, 0.9924068438435844,
      ],
      [
        -0.07652652113349734, 0.07652652113349734, -0.22778585114164507,
        0.22778585114164507, -0.37370608871541955, 0.37370608871541955,
        -0.5108670019508271, 0.5108670019508271, -0.636053680726515,
        0.636053680726515, -0.7463319064601508, 0.7463319064601508,
        -0.8391169718222188, 0.8391169718222188, -0.912234428251326,
        0.912234428251326, -0.9639719272779138, 0.9639719272779138,
        -0.9931285991850949, 0.9931285991850949,
      ],
      [
        0, -0.1455618541608951, 0.1455618541608951, -0.2880213168024011,
        0.2880213168024011, -0.4243421202074388, 0.4243421202074388,
        -0.5516188358872198, 0.5516188358872198, -0.6671388041974123,
        0.6671388041974123, -0.7684399634756779, 0.7684399634756779,
        -0.8533633645833173, 0.8533633645833173, -0.9200993341504008,
        0.9200993341504008, -0.9672268385663063, 0.9672268385663063,
        -0.9937521706203895, 0.9937521706203895,
      ],
      [
        -0.06973927331972223, 0.06973927331972223, -0.20786042668822127,
        0.20786042668822127, -0.34193582089208424, 0.34193582089208424,
        -0.469355837986757, 0.469355837986757, -0.5876404035069116,
        0.5876404035069116, -0.6944872631866827, 0.6944872631866827,
        -0.7878168059792081, 0.7878168059792081, -0.8658125777203002,
        0.8658125777203002, -0.926956772187174, 0.926956772187174,
        -0.9700604978354287, 0.9700604978354287, -0.9942945854823992,
        0.9942945854823992,
      ],
      [
        0, -0.1332568242984661, 0.1332568242984661, -0.26413568097034495,
        0.26413568097034495, -0.3903010380302908, 0.3903010380302908,
        -0.5095014778460075, 0.5095014778460075, -0.6196098757636461,
        0.6196098757636461, -0.7186613631319502, 0.7186613631319502,
        -0.8048884016188399, 0.8048884016188399, -0.8767523582704416,
        0.8767523582704416, -0.9329710868260161, 0.9329710868260161,
        -0.9725424712181152, 0.9725424712181152, -0.9947693349975522,
        0.9947693349975522,
      ],
      [
        -0.06405689286260563, 0.06405689286260563, -0.1911188674736163,
        0.1911188674736163, -0.3150426796961634, 0.3150426796961634,
        -0.4337935076260451, 0.4337935076260451, -0.5454214713888396,
        0.5454214713888396, -0.6480936519369755, 0.6480936519369755,
        -0.7401241915785544, 0.7401241915785544, -0.820001985973903,
        0.820001985973903, -0.8864155270044011, 0.8864155270044011,
        -0.9382745520027328, 0.9382745520027328, -0.9747285559713095,
        0.9747285559713095, -0.9951872199970213, 0.9951872199970213,
      ],
    ]),
    (n.cValues = [
      [],
      [],
      [1, 1],
      [0.8888888888888888, 0.5555555555555556, 0.5555555555555556],
      [
        0.6521451548625461, 0.6521451548625461, 0.34785484513745385,
        0.34785484513745385,
      ],
      [
        0.5688888888888889, 0.47862867049936647, 0.47862867049936647,
        0.23692688505618908, 0.23692688505618908,
      ],
      [
        0.3607615730481386, 0.3607615730481386, 0.46791393457269104,
        0.46791393457269104, 0.17132449237917036, 0.17132449237917036,
      ],
      [
        0.4179591836734694, 0.3818300505051189, 0.3818300505051189,
        0.27970539148927664, 0.27970539148927664, 0.1294849661688697,
        0.1294849661688697,
      ],
      [
        0.362683783378362, 0.362683783378362, 0.31370664587788727,
        0.31370664587788727, 0.22238103445337448, 0.22238103445337448,
        0.10122853629037626, 0.10122853629037626,
      ],
      [
        0.3302393550012598, 0.1806481606948574, 0.1806481606948574,
        0.08127438836157441, 0.08127438836157441, 0.31234707704000286,
        0.31234707704000286, 0.26061069640293544, 0.26061069640293544,
      ],
      [
        0.29552422471475287, 0.29552422471475287, 0.26926671930999635,
        0.26926671930999635, 0.21908636251598204, 0.21908636251598204,
        0.1494513491505806, 0.1494513491505806, 0.06667134430868814,
        0.06667134430868814,
      ],
      [
        0.2729250867779006, 0.26280454451024665, 0.26280454451024665,
        0.23319376459199048, 0.23319376459199048, 0.18629021092773426,
        0.18629021092773426, 0.1255803694649046, 0.1255803694649046,
        0.05566856711617366, 0.05566856711617366,
      ],
      [
        0.24914704581340277, 0.24914704581340277, 0.2334925365383548,
        0.2334925365383548, 0.20316742672306592, 0.20316742672306592,
        0.16007832854334622, 0.16007832854334622, 0.10693932599531843,
        0.10693932599531843, 0.04717533638651183, 0.04717533638651183,
      ],
      [
        0.2325515532308739, 0.22628318026289723, 0.22628318026289723,
        0.2078160475368885, 0.2078160475368885, 0.17814598076194574,
        0.17814598076194574, 0.13887351021978725, 0.13887351021978725,
        0.09212149983772845, 0.09212149983772845, 0.04048400476531588,
        0.04048400476531588,
      ],
      [
        0.2152638534631578, 0.2152638534631578, 0.2051984637212956,
        0.2051984637212956, 0.18553839747793782, 0.18553839747793782,
        0.15720316715819355, 0.15720316715819355, 0.12151857068790319,
        0.12151857068790319, 0.08015808715976021, 0.08015808715976021,
        0.03511946033175186, 0.03511946033175186,
      ],
      [
        0.2025782419255613, 0.19843148532711158, 0.19843148532711158,
        0.1861610000155622, 0.1861610000155622, 0.16626920581699392,
        0.16626920581699392, 0.13957067792615432, 0.13957067792615432,
        0.10715922046717194, 0.10715922046717194, 0.07036604748810812,
        0.07036604748810812, 0.03075324199611727, 0.03075324199611727,
      ],
      [
        0.1894506104550685, 0.1894506104550685, 0.18260341504492358,
        0.18260341504492358, 0.16915651939500254, 0.16915651939500254,
        0.14959598881657674, 0.14959598881657674, 0.12462897125553388,
        0.12462897125553388, 0.09515851168249279, 0.09515851168249279,
        0.062253523938647894, 0.062253523938647894, 0.027152459411754096,
        0.027152459411754096,
      ],
      [
        0.17944647035620653, 0.17656270536699264, 0.17656270536699264,
        0.16800410215645004, 0.16800410215645004, 0.15404576107681028,
        0.15404576107681028, 0.13513636846852548, 0.13513636846852548,
        0.11188384719340397, 0.11188384719340397, 0.08503614831717918,
        0.08503614831717918, 0.0554595293739872, 0.0554595293739872,
        0.02414830286854793, 0.02414830286854793,
      ],
      [
        0.1691423829631436, 0.1691423829631436, 0.16427648374583273,
        0.16427648374583273, 0.15468467512626524, 0.15468467512626524,
        0.14064291467065065, 0.14064291467065065, 0.12255520671147846,
        0.12255520671147846, 0.10094204410628717, 0.10094204410628717,
        0.07642573025488905, 0.07642573025488905, 0.0497145488949698,
        0.0497145488949698, 0.02161601352648331, 0.02161601352648331,
      ],
      [
        0.1610544498487837, 0.15896884339395434, 0.15896884339395434,
        0.15276604206585967, 0.15276604206585967, 0.1426067021736066,
        0.1426067021736066, 0.12875396253933621, 0.12875396253933621,
        0.11156664554733399, 0.11156664554733399, 0.09149002162245,
        0.09149002162245, 0.06904454273764123, 0.06904454273764123,
        0.0448142267656996, 0.0448142267656996, 0.019461788229726478,
        0.019461788229726478,
      ],
      [
        0.15275338713072584, 0.15275338713072584, 0.14917298647260374,
        0.14917298647260374, 0.14209610931838204, 0.14209610931838204,
        0.13168863844917664, 0.13168863844917664, 0.11819453196151841,
        0.11819453196151841, 0.10193011981724044, 0.10193011981724044,
        0.08327674157670475, 0.08327674157670475, 0.06267204833410907,
        0.06267204833410907, 0.04060142980038694, 0.04060142980038694,
        0.017614007139152118, 0.017614007139152118,
      ],
      [
        0.14608113364969041, 0.14452440398997005, 0.14452440398997005,
        0.13988739479107315, 0.13988739479107315, 0.13226893863333747,
        0.13226893863333747, 0.12183141605372853, 0.12183141605372853,
        0.10879729916714838, 0.10879729916714838, 0.09344442345603386,
        0.09344442345603386, 0.0761001136283793, 0.0761001136283793,
        0.057134425426857205, 0.057134425426857205, 0.036953789770852494,
        0.036953789770852494, 0.016017228257774335, 0.016017228257774335,
      ],
      [
        0.13925187285563198, 0.13925187285563198, 0.13654149834601517,
        0.13654149834601517, 0.13117350478706238, 0.13117350478706238,
        0.12325237681051242, 0.12325237681051242, 0.11293229608053922,
        0.11293229608053922, 0.10041414444288096, 0.10041414444288096,
        0.08594160621706773, 0.08594160621706773, 0.06979646842452049,
        0.06979646842452049, 0.052293335152683286, 0.052293335152683286,
        0.03377490158481415, 0.03377490158481415, 0.0146279952982722,
        0.0146279952982722,
      ],
      [
        0.13365457218610619, 0.1324620394046966, 0.1324620394046966,
        0.12890572218808216, 0.12890572218808216, 0.12304908430672953,
        0.12304908430672953, 0.11499664022241136, 0.11499664022241136,
        0.10489209146454141, 0.10489209146454141, 0.09291576606003515,
        0.09291576606003515, 0.07928141177671895, 0.07928141177671895,
        0.06423242140852585, 0.06423242140852585, 0.04803767173108467,
        0.04803767173108467, 0.030988005856979445, 0.030988005856979445,
        0.013411859487141771, 0.013411859487141771,
      ],
      [
        0.12793819534675216, 0.12793819534675216, 0.1258374563468283,
        0.1258374563468283, 0.12167047292780339, 0.12167047292780339,
        0.1155056680537256, 0.1155056680537256, 0.10744427011596563,
        0.10744427011596563, 0.09761865210411388, 0.09761865210411388,
        0.08619016153195327, 0.08619016153195327, 0.0733464814110803,
        0.0733464814110803, 0.05929858491543678, 0.05929858491543678,
        0.04427743881741981, 0.04427743881741981, 0.028531388628933663,
        0.028531388628933663, 0.0123412297999872, 0.0123412297999872,
      ],
    ]),
    (n.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
  const t = (s, o, l) => {
    let h, c, v;
    (h = l / 2), (c = 0);
    for (let f = 0; f < 20; f++)
      (v = h * n.tValues[20][f] + h), (c += n.cValues[20][f] * r(s, o, v));
    return h * c;
  };
  n.getCubicArcLength = t;
  const e = (s, o, l) => {
    l === void 0 && (l = 1);
    const h = s[0] - 2 * s[1] + s[2],
      c = o[0] - 2 * o[1] + o[2],
      v = 2 * s[1] - 2 * s[0],
      g = 2 * o[1] - 2 * o[0],
      f = 4 * (h * h + c * c),
      u = 4 * (h * v + c * g),
      p = v * v + g * g;
    if (f === 0)
      return l * Math.sqrt(Math.pow(s[2] - s[0], 2) + Math.pow(o[2] - o[0], 2));
    const _ = u / (2 * f),
      b = p / f,
      y = l + _,
      d = b - _ * _,
      m = y * y + d > 0 ? Math.sqrt(y * y + d) : 0,
      S = _ * _ + d > 0 ? Math.sqrt(_ * _ + d) : 0,
      P =
        _ + Math.sqrt(_ * _ + d) !== 0
          ? d * Math.log(Math.abs((y + m) / (_ + S)))
          : 0;
    return (Math.sqrt(f) / 2) * (y * m - _ * S + P);
  };
  n.getQuadraticArcLength = e;
  function r(s, o, l) {
    const h = i(1, l, s),
      c = i(1, l, o),
      v = h * h + c * c;
    return Math.sqrt(v);
  }
  const i = (s, o, l) => {
      const h = l.length - 1;
      let c, v;
      if (h === 0) return 0;
      if (s === 0) {
        v = 0;
        for (let g = 0; g <= h; g++)
          v +=
            n.binomialCoefficients[h][g] *
            Math.pow(1 - o, h - g) *
            Math.pow(o, g) *
            l[g];
        return v;
      } else {
        c = new Array(h);
        for (let g = 0; g < h; g++) c[g] = h * (l[g + 1] - l[g]);
        return i(s - 1, o, c);
      }
    },
    a = (s, o, l) => {
      let h = 1,
        c = s / o,
        v = (s - l(c)) / o,
        g = 0;
      for (; h > 0.001; ) {
        const f = l(c + v),
          u = Math.abs(s - f) / o;
        if (u < h) (h = u), (c += v);
        else {
          const p = l(c - v),
            _ = Math.abs(s - p) / o;
          _ < h ? ((h = _), (c -= v)) : (v /= 2);
        }
        if ((g++, g > 500)) break;
      }
      return c;
    };
  n.t2length = a;
})(Ys);
Object.defineProperty(ir, "__esModule", { value: !0 });
ir.Path = void 0;
const oc = K,
  lc = yt,
  hc = W,
  Ue = Ys;
class _t extends lc.Shape {
  constructor(t) {
    super(t),
      (this.dataArray = []),
      (this.pathLength = 0),
      this._readDataAttribute(),
      this.on("dataChange.konva", function () {
        this._readDataAttribute();
      });
  }
  _readDataAttribute() {
    (this.dataArray = _t.parsePathData(this.data())),
      (this.pathLength = _t.getPathLength(this.dataArray));
  }
  _sceneFunc(t) {
    var e = this.dataArray;
    t.beginPath();
    for (var r = !1, i = 0; i < e.length; i++) {
      var a = e[i].command,
        s = e[i].points;
      switch (a) {
        case "L":
          t.lineTo(s[0], s[1]);
          break;
        case "M":
          t.moveTo(s[0], s[1]);
          break;
        case "C":
          t.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]);
          break;
        case "Q":
          t.quadraticCurveTo(s[0], s[1], s[2], s[3]);
          break;
        case "A":
          var o = s[0],
            l = s[1],
            h = s[2],
            c = s[3],
            v = s[4],
            g = s[5],
            f = s[6],
            u = s[7],
            p = h > c ? h : c,
            _ = h > c ? 1 : h / c,
            b = h > c ? c / h : 1;
          t.translate(o, l),
            t.rotate(f),
            t.scale(_, b),
            t.arc(0, 0, p, v, v + g, 1 - u),
            t.scale(1 / _, 1 / b),
            t.rotate(-f),
            t.translate(-o, -l);
          break;
        case "z":
          (r = !0), t.closePath();
          break;
      }
    }
    !r && !this.hasFill() ? t.strokeShape(this) : t.fillStrokeShape(this);
  }
  getSelfRect() {
    var t = [];
    this.dataArray.forEach(function (h) {
      if (h.command === "A") {
        var c = h.points[4],
          v = h.points[5],
          g = h.points[4] + v,
          f = Math.PI / 180;
        if ((Math.abs(c - g) < f && (f = Math.abs(c - g)), v < 0))
          for (let u = c - f; u > g; u -= f) {
            const p = _t.getPointOnEllipticalArc(
              h.points[0],
              h.points[1],
              h.points[2],
              h.points[3],
              u,
              0
            );
            t.push(p.x, p.y);
          }
        else
          for (let u = c + f; u < g; u += f) {
            const p = _t.getPointOnEllipticalArc(
              h.points[0],
              h.points[1],
              h.points[2],
              h.points[3],
              u,
              0
            );
            t.push(p.x, p.y);
          }
      } else if (h.command === "C")
        for (let u = 0; u <= 1; u += 0.01) {
          const p = _t.getPointOnCubicBezier(
            u,
            h.start.x,
            h.start.y,
            h.points[0],
            h.points[1],
            h.points[2],
            h.points[3],
            h.points[4],
            h.points[5]
          );
          t.push(p.x, p.y);
        }
      else t = t.concat(h.points);
    });
    for (
      var e = t[0], r = t[0], i = t[1], a = t[1], s, o, l = 0;
      l < t.length / 2;
      l++
    )
      (s = t[l * 2]),
        (o = t[l * 2 + 1]),
        isNaN(s) || ((e = Math.min(e, s)), (r = Math.max(r, s))),
        isNaN(o) || ((i = Math.min(i, o)), (a = Math.max(a, o)));
    return { x: e, y: i, width: r - e, height: a - i };
  }
  getLength() {
    return this.pathLength;
  }
  getPointAtLength(t) {
    return _t.getPointAtLengthOfDataArray(t, this.dataArray);
  }
  static getLineLength(t, e, r, i) {
    return Math.sqrt((r - t) * (r - t) + (i - e) * (i - e));
  }
  static getPathLength(t) {
    let e = 0;
    for (var r = 0; r < t.length; ++r) e += t[r].pathLength;
    return e;
  }
  static getPointAtLengthOfDataArray(t, e) {
    var r,
      i = 0,
      a = e.length;
    if (!a) return null;
    for (; i < a && t > e[i].pathLength; ) (t -= e[i].pathLength), ++i;
    if (i === a) return (r = e[i - 1].points.slice(-2)), { x: r[0], y: r[1] };
    if (t < 0.01) return (r = e[i].points.slice(0, 2)), { x: r[0], y: r[1] };
    var s = e[i],
      o = s.points;
    switch (s.command) {
      case "L":
        return _t.getPointOnLine(t, s.start.x, s.start.y, o[0], o[1]);
      case "C":
        return _t.getPointOnCubicBezier(
          (0, Ue.t2length)(t, _t.getPathLength(e), (p) =>
            (0, Ue.getCubicArcLength)(
              [s.start.x, o[0], o[2], o[4]],
              [s.start.y, o[1], o[3], o[5]],
              p
            )
          ),
          s.start.x,
          s.start.y,
          o[0],
          o[1],
          o[2],
          o[3],
          o[4],
          o[5]
        );
      case "Q":
        return _t.getPointOnQuadraticBezier(
          (0, Ue.t2length)(t, _t.getPathLength(e), (p) =>
            (0, Ue.getQuadraticArcLength)(
              [s.start.x, o[0], o[2]],
              [s.start.y, o[1], o[3]],
              p
            )
          ),
          s.start.x,
          s.start.y,
          o[0],
          o[1],
          o[2],
          o[3]
        );
      case "A":
        var l = o[0],
          h = o[1],
          c = o[2],
          v = o[3],
          g = o[4],
          f = o[5],
          u = o[6];
        return (
          (g += (f * t) / s.pathLength),
          _t.getPointOnEllipticalArc(l, h, c, v, g, u)
        );
    }
    return null;
  }
  static getPointOnLine(t, e, r, i, a, s, o) {
    (s = s ?? e), (o = o ?? r);
    const l = this.getLineLength(e, r, i, a);
    if (l < 1e-10) return { x: e, y: r };
    if (i === e) return { x: s, y: o + (a > r ? t : -t) };
    const h = (a - r) / (i - e),
      c = Math.sqrt((t * t) / (1 + h * h)) * (i < e ? -1 : 1),
      v = h * c;
    if (Math.abs(o - r - h * (s - e)) < 1e-10) return { x: s + c, y: o + v };
    const g = ((s - e) * (i - e) + (o - r) * (a - r)) / (l * l),
      f = e + g * (i - e),
      u = r + g * (a - r),
      p = this.getLineLength(s, o, f, u),
      _ = Math.sqrt(t * t - p * p),
      b = Math.sqrt((_ * _) / (1 + h * h)) * (i < e ? -1 : 1),
      y = h * b;
    return { x: f + b, y: u + y };
  }
  static getPointOnCubicBezier(t, e, r, i, a, s, o, l, h) {
    function c(_) {
      return _ * _ * _;
    }
    function v(_) {
      return 3 * _ * _ * (1 - _);
    }
    function g(_) {
      return 3 * _ * (1 - _) * (1 - _);
    }
    function f(_) {
      return (1 - _) * (1 - _) * (1 - _);
    }
    var u = l * c(t) + s * v(t) + i * g(t) + e * f(t),
      p = h * c(t) + o * v(t) + a * g(t) + r * f(t);
    return { x: u, y: p };
  }
  static getPointOnQuadraticBezier(t, e, r, i, a, s, o) {
    function l(f) {
      return f * f;
    }
    function h(f) {
      return 2 * f * (1 - f);
    }
    function c(f) {
      return (1 - f) * (1 - f);
    }
    var v = s * l(t) + i * h(t) + e * c(t),
      g = o * l(t) + a * h(t) + r * c(t);
    return { x: v, y: g };
  }
  static getPointOnEllipticalArc(t, e, r, i, a, s) {
    var o = Math.cos(s),
      l = Math.sin(s),
      h = { x: r * Math.cos(a), y: i * Math.sin(a) };
    return { x: t + (h.x * o - h.y * l), y: e + (h.x * l + h.y * o) };
  }
  static parsePathData(t) {
    if (!t) return [];
    var e = t,
      r = [
        "m",
        "M",
        "l",
        "L",
        "v",
        "V",
        "h",
        "H",
        "z",
        "Z",
        "c",
        "C",
        "q",
        "Q",
        "t",
        "T",
        "s",
        "S",
        "a",
        "A",
      ];
    e = e.replace(new RegExp(" ", "g"), ",");
    for (var i = 0; i < r.length; i++)
      e = e.replace(new RegExp(r[i], "g"), "|" + r[i]);
    var a = e.split("|"),
      s = [],
      o = [],
      l = 0,
      h = 0,
      c = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi,
      v;
    for (i = 1; i < a.length; i++) {
      var g = a[i],
        f = g.charAt(0);
      for (g = g.slice(1), o.length = 0; (v = c.exec(g)); ) o.push(v[0]);
      for (var u = [], p = 0, _ = o.length; p < _; p++) {
        if (o[p] === "00") {
          u.push(0, 0);
          continue;
        }
        var b = parseFloat(o[p]);
        isNaN(b) ? u.push(0) : u.push(b);
      }
      for (; u.length > 0 && !isNaN(u[0]); ) {
        var y = "",
          d = [],
          m = l,
          S = h,
          P,
          E,
          C,
          k,
          w,
          A,
          T,
          R,
          M,
          F;
        switch (f) {
          case "l":
            (l += u.shift()), (h += u.shift()), (y = "L"), d.push(l, h);
            break;
          case "L":
            (l = u.shift()), (h = u.shift()), d.push(l, h);
            break;
          case "m":
            var O = u.shift(),
              D = u.shift();
            if (
              ((l += O),
              (h += D),
              (y = "M"),
              s.length > 2 && s[s.length - 1].command === "z")
            ) {
              for (var U = s.length - 2; U >= 0; U--)
                if (s[U].command === "M") {
                  (l = s[U].points[0] + O), (h = s[U].points[1] + D);
                  break;
                }
            }
            d.push(l, h), (f = "l");
            break;
          case "M":
            (l = u.shift()),
              (h = u.shift()),
              (y = "M"),
              d.push(l, h),
              (f = "L");
            break;
          case "h":
            (l += u.shift()), (y = "L"), d.push(l, h);
            break;
          case "H":
            (l = u.shift()), (y = "L"), d.push(l, h);
            break;
          case "v":
            (h += u.shift()), (y = "L"), d.push(l, h);
            break;
          case "V":
            (h = u.shift()), (y = "L"), d.push(l, h);
            break;
          case "C":
            d.push(u.shift(), u.shift(), u.shift(), u.shift()),
              (l = u.shift()),
              (h = u.shift()),
              d.push(l, h);
            break;
          case "c":
            d.push(l + u.shift(), h + u.shift(), l + u.shift(), h + u.shift()),
              (l += u.shift()),
              (h += u.shift()),
              (y = "C"),
              d.push(l, h);
            break;
          case "S":
            (E = l),
              (C = h),
              (P = s[s.length - 1]),
              P.command === "C" &&
                ((E = l + (l - P.points[2])), (C = h + (h - P.points[3]))),
              d.push(E, C, u.shift(), u.shift()),
              (l = u.shift()),
              (h = u.shift()),
              (y = "C"),
              d.push(l, h);
            break;
          case "s":
            (E = l),
              (C = h),
              (P = s[s.length - 1]),
              P.command === "C" &&
                ((E = l + (l - P.points[2])), (C = h + (h - P.points[3]))),
              d.push(E, C, l + u.shift(), h + u.shift()),
              (l += u.shift()),
              (h += u.shift()),
              (y = "C"),
              d.push(l, h);
            break;
          case "Q":
            d.push(u.shift(), u.shift()),
              (l = u.shift()),
              (h = u.shift()),
              d.push(l, h);
            break;
          case "q":
            d.push(l + u.shift(), h + u.shift()),
              (l += u.shift()),
              (h += u.shift()),
              (y = "Q"),
              d.push(l, h);
            break;
          case "T":
            (E = l),
              (C = h),
              (P = s[s.length - 1]),
              P.command === "Q" &&
                ((E = l + (l - P.points[0])), (C = h + (h - P.points[1]))),
              (l = u.shift()),
              (h = u.shift()),
              (y = "Q"),
              d.push(E, C, l, h);
            break;
          case "t":
            (E = l),
              (C = h),
              (P = s[s.length - 1]),
              P.command === "Q" &&
                ((E = l + (l - P.points[0])), (C = h + (h - P.points[1]))),
              (l += u.shift()),
              (h += u.shift()),
              (y = "Q"),
              d.push(E, C, l, h);
            break;
          case "A":
            (k = u.shift()),
              (w = u.shift()),
              (A = u.shift()),
              (T = u.shift()),
              (R = u.shift()),
              (M = l),
              (F = h),
              (l = u.shift()),
              (h = u.shift()),
              (y = "A"),
              (d = this.convertEndpointToCenterParameterization(
                M,
                F,
                l,
                h,
                T,
                R,
                k,
                w,
                A
              ));
            break;
          case "a":
            (k = u.shift()),
              (w = u.shift()),
              (A = u.shift()),
              (T = u.shift()),
              (R = u.shift()),
              (M = l),
              (F = h),
              (l += u.shift()),
              (h += u.shift()),
              (y = "A"),
              (d = this.convertEndpointToCenterParameterization(
                M,
                F,
                l,
                h,
                T,
                R,
                k,
                w,
                A
              ));
            break;
        }
        s.push({
          command: y || f,
          points: d,
          start: { x: m, y: S },
          pathLength: this.calcLength(m, S, y || f, d),
        });
      }
      (f === "z" || f === "Z") &&
        s.push({ command: "z", points: [], start: void 0, pathLength: 0 });
    }
    return s;
  }
  static calcLength(t, e, r, i) {
    var a,
      s,
      o,
      l,
      h = _t;
    switch (r) {
      case "L":
        return h.getLineLength(t, e, i[0], i[1]);
      case "C":
        return (0, Ue.getCubicArcLength)(
          [t, i[0], i[2], i[4]],
          [e, i[1], i[3], i[5]],
          1
        );
      case "Q":
        return (0, Ue.getQuadraticArcLength)(
          [t, i[0], i[2]],
          [e, i[1], i[3]],
          1
        );
      case "A":
        a = 0;
        var c = i[4],
          v = i[5],
          g = i[4] + v,
          f = Math.PI / 180;
        if (
          (Math.abs(c - g) < f && (f = Math.abs(c - g)),
          (s = h.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], c, 0)),
          v < 0)
        )
          for (l = c - f; l > g; l -= f)
            (o = h.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], l, 0)),
              (a += h.getLineLength(s.x, s.y, o.x, o.y)),
              (s = o);
        else
          for (l = c + f; l < g; l += f)
            (o = h.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], l, 0)),
              (a += h.getLineLength(s.x, s.y, o.x, o.y)),
              (s = o);
        return (
          (o = h.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], g, 0)),
          (a += h.getLineLength(s.x, s.y, o.x, o.y)),
          a
        );
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(t, e, r, i, a, s, o, l, h) {
    var c = h * (Math.PI / 180),
      v = (Math.cos(c) * (t - r)) / 2 + (Math.sin(c) * (e - i)) / 2,
      g = (-1 * Math.sin(c) * (t - r)) / 2 + (Math.cos(c) * (e - i)) / 2,
      f = (v * v) / (o * o) + (g * g) / (l * l);
    f > 1 && ((o *= Math.sqrt(f)), (l *= Math.sqrt(f)));
    var u = Math.sqrt(
      (o * o * (l * l) - o * o * (g * g) - l * l * (v * v)) /
        (o * o * (g * g) + l * l * (v * v))
    );
    a === s && (u *= -1), isNaN(u) && (u = 0);
    var p = (u * o * g) / l,
      _ = (u * -l * v) / o,
      b = (t + r) / 2 + Math.cos(c) * p - Math.sin(c) * _,
      y = (e + i) / 2 + Math.sin(c) * p + Math.cos(c) * _,
      d = function (w) {
        return Math.sqrt(w[0] * w[0] + w[1] * w[1]);
      },
      m = function (w, A) {
        return (w[0] * A[0] + w[1] * A[1]) / (d(w) * d(A));
      },
      S = function (w, A) {
        return (w[0] * A[1] < w[1] * A[0] ? -1 : 1) * Math.acos(m(w, A));
      },
      P = S([1, 0], [(v - p) / o, (g - _) / l]),
      E = [(v - p) / o, (g - _) / l],
      C = [(-1 * v - p) / o, (-1 * g - _) / l],
      k = S(E, C);
    return (
      m(E, C) <= -1 && (k = Math.PI),
      m(E, C) >= 1 && (k = 0),
      s === 0 && k > 0 && (k = k - 2 * Math.PI),
      s === 1 && k < 0 && (k = k + 2 * Math.PI),
      [b, y, o, l, P, k, c, s]
    );
  }
}
ir.Path = _t;
_t.prototype.className = "Path";
_t.prototype._attrsAffectingSize = ["data"];
(0, hc._registerNode)(_t);
oc.Factory.addGetterSetter(_t, "data");
Object.defineProperty(fi, "__esModule", { value: !0 });
fi.Arrow = void 0;
const pi = K,
  cc = Fr,
  Xs = I,
  dc = W,
  Oa = ir;
class Ae extends cc.Line {
  _sceneFunc(t) {
    super._sceneFunc(t);
    var e = Math.PI * 2,
      r = this.points(),
      i = r,
      a = this.tension() !== 0 && r.length > 4;
    a && (i = this.getTensionPoints());
    var s = this.pointerLength(),
      o = r.length,
      l,
      h;
    if (a) {
      const g = [
          i[i.length - 4],
          i[i.length - 3],
          i[i.length - 2],
          i[i.length - 1],
          r[o - 2],
          r[o - 1],
        ],
        f = Oa.Path.calcLength(i[i.length - 4], i[i.length - 3], "C", g),
        u = Oa.Path.getPointOnQuadraticBezier(
          Math.min(1, 1 - s / f),
          g[0],
          g[1],
          g[2],
          g[3],
          g[4],
          g[5]
        );
      (l = r[o - 2] - u.x), (h = r[o - 1] - u.y);
    } else (l = r[o - 2] - r[o - 4]), (h = r[o - 1] - r[o - 3]);
    var c = (Math.atan2(h, l) + e) % e,
      v = this.pointerWidth();
    this.pointerAtEnding() &&
      (t.save(),
      t.beginPath(),
      t.translate(r[o - 2], r[o - 1]),
      t.rotate(c),
      t.moveTo(0, 0),
      t.lineTo(-s, v / 2),
      t.lineTo(-s, -v / 2),
      t.closePath(),
      t.restore(),
      this.__fillStroke(t)),
      this.pointerAtBeginning() &&
        (t.save(),
        t.beginPath(),
        t.translate(r[0], r[1]),
        a
          ? ((l = (i[0] + i[2]) / 2 - r[0]), (h = (i[1] + i[3]) / 2 - r[1]))
          : ((l = r[2] - r[0]), (h = r[3] - r[1])),
        t.rotate((Math.atan2(-h, -l) + e) % e),
        t.moveTo(0, 0),
        t.lineTo(-s, v / 2),
        t.lineTo(-s, -v / 2),
        t.closePath(),
        t.restore(),
        this.__fillStroke(t));
  }
  __fillStroke(t) {
    var e = this.dashEnabled();
    e && ((this.attrs.dashEnabled = !1), t.setLineDash([])),
      t.fillStrokeShape(this),
      e && (this.attrs.dashEnabled = !0);
  }
  getSelfRect() {
    const t = super.getSelfRect(),
      e = this.pointerWidth() / 2;
    return {
      x: t.x - e,
      y: t.y - e,
      width: t.width + e * 2,
      height: t.height + e * 2,
    };
  }
}
fi.Arrow = Ae;
Ae.prototype.className = "Arrow";
(0, dc._registerNode)(Ae);
pi.Factory.addGetterSetter(
  Ae,
  "pointerLength",
  10,
  (0, Xs.getNumberValidator)()
);
pi.Factory.addGetterSetter(
  Ae,
  "pointerWidth",
  10,
  (0, Xs.getNumberValidator)()
);
pi.Factory.addGetterSetter(Ae, "pointerAtBeginning", !1);
pi.Factory.addGetterSetter(Ae, "pointerAtEnding", !0);
var vi = {};
Object.defineProperty(vi, "__esModule", { value: !0 });
vi.Circle = void 0;
const uc = K,
  fc = yt,
  gc = I,
  pc = W;
let nr = class extends fc.Shape {
  _sceneFunc(t) {
    t.beginPath(),
      t.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1),
      t.closePath(),
      t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius() !== t / 2 && this.radius(t / 2);
  }
  setHeight(t) {
    this.radius() !== t / 2 && this.radius(t / 2);
  }
};
vi.Circle = nr;
nr.prototype._centroid = !0;
nr.prototype.className = "Circle";
nr.prototype._attrsAffectingSize = ["radius"];
(0, pc._registerNode)(nr);
uc.Factory.addGetterSetter(nr, "radius", 0, (0, gc.getNumberValidator)());
var mi = {};
Object.defineProperty(mi, "__esModule", { value: !0 });
mi.Ellipse = void 0;
const Vn = K,
  vc = yt,
  qs = I,
  mc = W;
class me extends vc.Shape {
  _sceneFunc(t) {
    var e = this.radiusX(),
      r = this.radiusY();
    t.beginPath(),
      t.save(),
      e !== r && t.scale(1, r / e),
      t.arc(0, 0, e, 0, Math.PI * 2, !1),
      t.restore(),
      t.closePath(),
      t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radiusX() * 2;
  }
  getHeight() {
    return this.radiusY() * 2;
  }
  setWidth(t) {
    this.radiusX(t / 2);
  }
  setHeight(t) {
    this.radiusY(t / 2);
  }
}
mi.Ellipse = me;
me.prototype.className = "Ellipse";
me.prototype._centroid = !0;
me.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
(0, mc._registerNode)(me);
Vn.Factory.addComponentsGetterSetter(me, "radius", ["x", "y"]);
Vn.Factory.addGetterSetter(me, "radiusX", 0, (0, qs.getNumberValidator)());
Vn.Factory.addGetterSetter(me, "radiusY", 0, (0, qs.getNumberValidator)());
var _i = {};
Object.defineProperty(_i, "__esModule", { value: !0 });
_i.Image = void 0;
const on = ct,
  Te = K,
  _c = yt,
  yc = W,
  Mr = I;
class Lt extends _c.Shape {
  constructor(t) {
    super(t),
      this.on("imageChange.konva", () => {
        this._setImageLoad();
      }),
      this._setImageLoad();
  }
  _setImageLoad() {
    const t = this.image();
    (t && t.complete) ||
      (t && t.readyState === 4) ||
      (t &&
        t.addEventListener &&
        t.addEventListener("load", () => {
          this._requestDraw();
        }));
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _sceneFunc(t) {
    const e = this.getWidth(),
      r = this.getHeight(),
      i = this.cornerRadius(),
      a = this.attrs.image;
    let s;
    if (a) {
      const o = this.attrs.cropWidth,
        l = this.attrs.cropHeight;
      o && l
        ? (s = [a, this.cropX(), this.cropY(), o, l, 0, 0, e, r])
        : (s = [a, 0, 0, e, r]);
    }
    (this.hasFill() || this.hasStroke() || i) &&
      (t.beginPath(),
      i ? on.Util.drawRoundedRectPath(t, e, r, i) : t.rect(0, 0, e, r),
      t.closePath(),
      t.fillStrokeShape(this)),
      a && (i && t.clip(), t.drawImage.apply(t, s));
  }
  _hitFunc(t) {
    var e = this.width(),
      r = this.height(),
      i = this.cornerRadius();
    t.beginPath(),
      i ? on.Util.drawRoundedRectPath(t, e, r, i) : t.rect(0, 0, e, r),
      t.closePath(),
      t.fillStrokeShape(this);
  }
  getWidth() {
    var t, e;
    return (t = this.attrs.width) !== null && t !== void 0
      ? t
      : (e = this.image()) === null || e === void 0
        ? void 0
        : e.width;
  }
  getHeight() {
    var t, e;
    return (t = this.attrs.height) !== null && t !== void 0
      ? t
      : (e = this.image()) === null || e === void 0
        ? void 0
        : e.height;
  }
  static fromURL(t, e, r = null) {
    var i = on.Util.createImageElement();
    (i.onload = function () {
      var a = new Lt({ image: i });
      e(a);
    }),
      (i.onerror = r),
      (i.crossOrigin = "Anonymous"),
      (i.src = t);
  }
}
_i.Image = Lt;
Lt.prototype.className = "Image";
(0, yc._registerNode)(Lt);
Te.Factory.addGetterSetter(
  Lt,
  "cornerRadius",
  0,
  (0, Mr.getNumberOrArrayOfNumbersValidator)(4)
);
Te.Factory.addGetterSetter(Lt, "image");
Te.Factory.addComponentsGetterSetter(Lt, "crop", ["x", "y", "width", "height"]);
Te.Factory.addGetterSetter(Lt, "cropX", 0, (0, Mr.getNumberValidator)());
Te.Factory.addGetterSetter(Lt, "cropY", 0, (0, Mr.getNumberValidator)());
Te.Factory.addGetterSetter(Lt, "cropWidth", 0, (0, Mr.getNumberValidator)());
Te.Factory.addGetterSetter(Lt, "cropHeight", 0, (0, Mr.getNumberValidator)());
var Ke = {};
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.Tag = Ke.Label = void 0;
const yi = K,
  bc = yt,
  Sc = er,
  zn = I,
  Qs = W;
var Js = [
    "fontFamily",
    "fontSize",
    "fontStyle",
    "padding",
    "lineHeight",
    "text",
    "width",
    "height",
    "pointerDirection",
    "pointerWidth",
    "pointerHeight",
  ],
  Cc = "Change.konva",
  wc = "none",
  An = "up",
  Tn = "right",
  En = "down",
  Rn = "left",
  xc = Js.length;
class Hn extends Sc.Group {
  constructor(t) {
    super(t),
      this.on("add.konva", function (e) {
        this._addListeners(e.child), this._sync();
      });
  }
  getText() {
    return this.find("Text")[0];
  }
  getTag() {
    return this.find("Tag")[0];
  }
  _addListeners(t) {
    var e = this,
      r,
      i = function () {
        e._sync();
      };
    for (r = 0; r < xc; r++) t.on(Js[r] + Cc, i);
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    var t = this.getText(),
      e = this.getTag(),
      r,
      i,
      a,
      s,
      o,
      l,
      h;
    if (t && e) {
      switch (
        ((r = t.width()),
        (i = t.height()),
        (a = e.pointerDirection()),
        (s = e.pointerWidth()),
        (h = e.pointerHeight()),
        (o = 0),
        (l = 0),
        a)
      ) {
        case An:
          (o = r / 2), (l = -1 * h);
          break;
        case Tn:
          (o = r + s), (l = i / 2);
          break;
        case En:
          (o = r / 2), (l = i + h);
          break;
        case Rn:
          (o = -1 * s), (l = i / 2);
          break;
      }
      e.setAttrs({ x: -1 * o, y: -1 * l, width: r, height: i }),
        t.setAttrs({ x: -1 * o, y: -1 * l });
    }
  }
}
Ke.Label = Hn;
Hn.prototype.className = "Label";
(0, Qs._registerNode)(Hn);
class Ee extends bc.Shape {
  _sceneFunc(t) {
    var e = this.width(),
      r = this.height(),
      i = this.pointerDirection(),
      a = this.pointerWidth(),
      s = this.pointerHeight(),
      o = this.cornerRadius();
    let l = 0,
      h = 0,
      c = 0,
      v = 0;
    typeof o == "number"
      ? (l = h = c = v = Math.min(o, e / 2, r / 2))
      : ((l = Math.min(o[0] || 0, e / 2, r / 2)),
        (h = Math.min(o[1] || 0, e / 2, r / 2)),
        (v = Math.min(o[2] || 0, e / 2, r / 2)),
        (c = Math.min(o[3] || 0, e / 2, r / 2))),
      t.beginPath(),
      t.moveTo(l, 0),
      i === An &&
        (t.lineTo((e - a) / 2, 0),
        t.lineTo(e / 2, -1 * s),
        t.lineTo((e + a) / 2, 0)),
      t.lineTo(e - h, 0),
      t.arc(e - h, h, h, (Math.PI * 3) / 2, 0, !1),
      i === Tn &&
        (t.lineTo(e, (r - s) / 2),
        t.lineTo(e + a, r / 2),
        t.lineTo(e, (r + s) / 2)),
      t.lineTo(e, r - v),
      t.arc(e - v, r - v, v, 0, Math.PI / 2, !1),
      i === En &&
        (t.lineTo((e + a) / 2, r),
        t.lineTo(e / 2, r + s),
        t.lineTo((e - a) / 2, r)),
      t.lineTo(c, r),
      t.arc(c, r - c, c, Math.PI / 2, Math.PI, !1),
      i === Rn &&
        (t.lineTo(0, (r + s) / 2),
        t.lineTo(-1 * a, r / 2),
        t.lineTo(0, (r - s) / 2)),
      t.lineTo(0, l),
      t.arc(l, l, l, Math.PI, (Math.PI * 3) / 2, !1),
      t.closePath(),
      t.fillStrokeShape(this);
  }
  getSelfRect() {
    var t = 0,
      e = 0,
      r = this.pointerWidth(),
      i = this.pointerHeight(),
      a = this.pointerDirection(),
      s = this.width(),
      o = this.height();
    return (
      a === An
        ? ((e -= i), (o += i))
        : a === En
          ? (o += i)
          : a === Rn
            ? ((t -= r * 1.5), (s += r))
            : a === Tn && (s += r * 1.5),
      { x: t, y: e, width: s, height: o }
    );
  }
}
Ke.Tag = Ee;
Ee.prototype.className = "Tag";
(0, Qs._registerNode)(Ee);
yi.Factory.addGetterSetter(Ee, "pointerDirection", wc);
yi.Factory.addGetterSetter(Ee, "pointerWidth", 0, (0, zn.getNumberValidator)());
yi.Factory.addGetterSetter(
  Ee,
  "pointerHeight",
  0,
  (0, zn.getNumberValidator)()
);
yi.Factory.addGetterSetter(
  Ee,
  "cornerRadius",
  0,
  (0, zn.getNumberOrArrayOfNumbersValidator)(4)
);
var Nr = {};
Object.defineProperty(Nr, "__esModule", { value: !0 });
Nr.Rect = void 0;
const Pc = K,
  kc = yt,
  Ac = W,
  Tc = ct,
  Ec = I;
class bi extends kc.Shape {
  _sceneFunc(t) {
    var e = this.cornerRadius(),
      r = this.width(),
      i = this.height();
    t.beginPath(),
      e ? Tc.Util.drawRoundedRectPath(t, r, i, e) : t.rect(0, 0, r, i),
      t.closePath(),
      t.fillStrokeShape(this);
  }
}
Nr.Rect = bi;
bi.prototype.className = "Rect";
(0, Ac._registerNode)(bi);
Pc.Factory.addGetterSetter(
  bi,
  "cornerRadius",
  0,
  (0, Ec.getNumberOrArrayOfNumbersValidator)(4)
);
var Si = {};
Object.defineProperty(Si, "__esModule", { value: !0 });
Si.RegularPolygon = void 0;
const Zs = K,
  Rc = yt,
  to = I,
  Fc = W;
class Re extends Rc.Shape {
  _sceneFunc(t) {
    const e = this._getPoints();
    t.beginPath(), t.moveTo(e[0].x, e[0].y);
    for (var r = 1; r < e.length; r++) t.lineTo(e[r].x, e[r].y);
    t.closePath(), t.fillStrokeShape(this);
  }
  _getPoints() {
    const t = this.attrs.sides,
      e = this.attrs.radius || 0,
      r = [];
    for (var i = 0; i < t; i++)
      r.push({
        x: e * Math.sin((i * 2 * Math.PI) / t),
        y: -1 * e * Math.cos((i * 2 * Math.PI) / t),
      });
    return r;
  }
  getSelfRect() {
    const t = this._getPoints();
    var e = t[0].x,
      r = t[0].y,
      i = t[0].x,
      a = t[0].y;
    return (
      t.forEach((s) => {
        (e = Math.min(e, s.x)),
          (r = Math.max(r, s.x)),
          (i = Math.min(i, s.y)),
          (a = Math.max(a, s.y));
      }),
      { x: e, y: i, width: r - e, height: a - i }
    );
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius(t / 2);
  }
  setHeight(t) {
    this.radius(t / 2);
  }
}
Si.RegularPolygon = Re;
Re.prototype.className = "RegularPolygon";
Re.prototype._centroid = !0;
Re.prototype._attrsAffectingSize = ["radius"];
(0, Fc._registerNode)(Re);
Zs.Factory.addGetterSetter(Re, "radius", 0, (0, to.getNumberValidator)());
Zs.Factory.addGetterSetter(Re, "sides", 0, (0, to.getNumberValidator)());
var Ci = {};
Object.defineProperty(Ci, "__esModule", { value: !0 });
Ci.Ring = void 0;
const eo = K,
  Mc = yt,
  ro = I,
  Nc = W;
var Ga = Math.PI * 2;
class Fe extends Mc.Shape {
  _sceneFunc(t) {
    t.beginPath(),
      t.arc(0, 0, this.innerRadius(), 0, Ga, !1),
      t.moveTo(this.outerRadius(), 0),
      t.arc(0, 0, this.outerRadius(), Ga, 0, !0),
      t.closePath(),
      t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
}
Ci.Ring = Fe;
Fe.prototype.className = "Ring";
Fe.prototype._centroid = !0;
Fe.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, Nc._registerNode)(Fe);
eo.Factory.addGetterSetter(Fe, "innerRadius", 0, (0, ro.getNumberValidator)());
eo.Factory.addGetterSetter(Fe, "outerRadius", 0, (0, ro.getNumberValidator)());
var wi = {};
Object.defineProperty(wi, "__esModule", { value: !0 });
wi.Sprite = void 0;
const Me = K,
  Oc = yt,
  Gc = rr,
  io = I,
  Lc = W;
class Ht extends Oc.Shape {
  constructor(t) {
    super(t),
      (this._updated = !0),
      (this.anim = new Gc.Animation(() => {
        var e = this._updated;
        return (this._updated = !1), e;
      })),
      this.on("animationChange.konva", function () {
        this.frameIndex(0);
      }),
      this.on("frameIndexChange.konva", function () {
        this._updated = !0;
      }),
      this.on("frameRateChange.konva", function () {
        this.anim.isRunning() &&
          (clearInterval(this.interval), this._setInterval());
      });
  }
  _sceneFunc(t) {
    var e = this.animation(),
      r = this.frameIndex(),
      i = r * 4,
      a = this.animations()[e],
      s = this.frameOffsets(),
      o = a[i + 0],
      l = a[i + 1],
      h = a[i + 2],
      c = a[i + 3],
      v = this.image();
    if (
      ((this.hasFill() || this.hasStroke()) &&
        (t.beginPath(),
        t.rect(0, 0, h, c),
        t.closePath(),
        t.fillStrokeShape(this)),
      v)
    )
      if (s) {
        var g = s[e],
          f = r * 2;
        t.drawImage(v, o, l, h, c, g[f + 0], g[f + 1], h, c);
      } else t.drawImage(v, o, l, h, c, 0, 0, h, c);
  }
  _hitFunc(t) {
    var e = this.animation(),
      r = this.frameIndex(),
      i = r * 4,
      a = this.animations()[e],
      s = this.frameOffsets(),
      o = a[i + 2],
      l = a[i + 3];
    if ((t.beginPath(), s)) {
      var h = s[e],
        c = r * 2;
      t.rect(h[c + 0], h[c + 1], o, l);
    } else t.rect(0, 0, o, l);
    t.closePath(), t.fillShape(this);
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _setInterval() {
    var t = this;
    this.interval = setInterval(function () {
      t._updateIndex();
    }, 1e3 / this.frameRate());
  }
  start() {
    if (!this.isRunning()) {
      var t = this.getLayer();
      this.anim.setLayers(t), this._setInterval(), this.anim.start();
    }
  }
  stop() {
    this.anim.stop(), clearInterval(this.interval);
  }
  isRunning() {
    return this.anim.isRunning();
  }
  _updateIndex() {
    var t = this.frameIndex(),
      e = this.animation(),
      r = this.animations(),
      i = r[e],
      a = i.length / 4;
    t < a - 1 ? this.frameIndex(t + 1) : this.frameIndex(0);
  }
}
wi.Sprite = Ht;
Ht.prototype.className = "Sprite";
(0, Lc._registerNode)(Ht);
Me.Factory.addGetterSetter(Ht, "animation");
Me.Factory.addGetterSetter(Ht, "animations");
Me.Factory.addGetterSetter(Ht, "frameOffsets");
Me.Factory.addGetterSetter(Ht, "image");
Me.Factory.addGetterSetter(Ht, "frameIndex", 0, (0, io.getNumberValidator)());
Me.Factory.addGetterSetter(Ht, "frameRate", 17, (0, io.getNumberValidator)());
Me.Factory.backCompat(Ht, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex",
});
var xi = {};
Object.defineProperty(xi, "__esModule", { value: !0 });
xi.Star = void 0;
const $n = K,
  Dc = yt,
  jn = I,
  Ic = W;
class _e extends Dc.Shape {
  _sceneFunc(t) {
    var e = this.innerRadius(),
      r = this.outerRadius(),
      i = this.numPoints();
    t.beginPath(), t.moveTo(0, 0 - r);
    for (var a = 1; a < i * 2; a++) {
      var s = a % 2 === 0 ? r : e,
        o = s * Math.sin((a * Math.PI) / i),
        l = -1 * s * Math.cos((a * Math.PI) / i);
      t.lineTo(o, l);
    }
    t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
}
xi.Star = _e;
_e.prototype.className = "Star";
_e.prototype._centroid = !0;
_e.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, Ic._registerNode)(_e);
$n.Factory.addGetterSetter(_e, "numPoints", 5, (0, jn.getNumberValidator)());
$n.Factory.addGetterSetter(_e, "innerRadius", 0, (0, jn.getNumberValidator)());
$n.Factory.addGetterSetter(_e, "outerRadius", 0, (0, jn.getNumberValidator)());
var we = {};
Object.defineProperty(we, "__esModule", { value: !0 });
we.Text = we.stringToArray = void 0;
const Fn = ct,
  kt = K,
  Uc = yt,
  ln = W,
  ye = I,
  Bc = W;
function no(n) {
  return Array.from(n);
}
we.stringToArray = no;
var Be = "auto",
  Vc = "center",
  ao = "inherit",
  cr = "justify",
  zc = "Change.konva",
  Hc = "2d",
  La = "-",
  so = "left",
  $c = "text",
  jc = "Text",
  Wc = "top",
  Kc = "bottom",
  Da = "middle",
  oo = "normal",
  Yc = "px ",
  Vr = " ",
  Xc = "right",
  Ia = "rtl",
  qc = "word",
  Qc = "char",
  Ua = "none",
  hn = "…",
  lo = [
    "direction",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontVariant",
    "padding",
    "align",
    "verticalAlign",
    "lineHeight",
    "text",
    "width",
    "height",
    "wrap",
    "ellipsis",
    "letterSpacing",
  ],
  Jc = lo.length;
function Zc(n) {
  return n
    .split(",")
    .map((t) => {
      t = t.trim();
      const e = t.indexOf(" ") >= 0,
        r = t.indexOf('"') >= 0 || t.indexOf("'") >= 0;
      return e && !r && (t = `"${t}"`), t;
    })
    .join(", ");
}
var zr;
function cn() {
  return zr || ((zr = Fn.Util.createCanvasElement().getContext(Hc)), zr);
}
function t0(n) {
  n.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function e0(n) {
  n.setAttr("miterLimit", 2),
    n.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function r0(n) {
  return (
    (n = n || {}),
    !n.fillLinearGradientColorStops &&
      !n.fillRadialGradientColorStops &&
      !n.fillPatternImage &&
      (n.fill = n.fill || "black"),
    n
  );
}
let ut = class extends Uc.Shape {
  constructor(t) {
    super(r0(t)), (this._partialTextX = 0), (this._partialTextY = 0);
    for (var e = 0; e < Jc; e++) this.on(lo[e] + zc, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(t) {
    var e = this.textArr,
      r = e.length;
    if (this.text()) {
      var i = this.padding(),
        a = this.fontSize(),
        s = this.lineHeight() * a,
        o = this.verticalAlign(),
        l = this.direction(),
        h = 0,
        c = this.align(),
        v = this.getWidth(),
        g = this.letterSpacing(),
        f = this.fill(),
        u = this.textDecoration(),
        p = u.indexOf("underline") !== -1,
        _ = u.indexOf("line-through") !== -1,
        b;
      l = l === ao ? t.direction : l;
      var y = s / 2,
        d = Da;
      if (ln.Konva._fixTextRendering) {
        var m = this.measureSize("M");
        (d = "alphabetic"),
          (y =
            (m.fontBoundingBoxAscent - m.fontBoundingBoxDescent) / 2 + s / 2);
      }
      var S = 0,
        P = 0;
      for (
        l === Ia && t.setAttr("direction", l),
          t.setAttr("font", this._getContextFont()),
          t.setAttr("textBaseline", d),
          t.setAttr("textAlign", so),
          o === Da
            ? (h = (this.getHeight() - r * s - i * 2) / 2)
            : o === Kc && (h = this.getHeight() - r * s - i * 2),
          t.translate(i, h + i),
          b = 0;
        b < r;
        b++
      ) {
        var S = 0,
          P = 0,
          E = e[b],
          C = E.text,
          k = E.width,
          w = E.lastInParagraph,
          A,
          T,
          R;
        if (
          (t.save(),
          c === Xc
            ? (S += v - k - i * 2)
            : c === Vc && (S += (v - k - i * 2) / 2),
          p)
        ) {
          t.save(), t.beginPath();
          let V = ln.Konva._fixTextRendering
            ? Math.round(a / 4)
            : Math.round(a / 2);
          const G = S,
            L = y + P + V;
          t.moveTo(G, L),
            (A = C.split(" ").length - 1),
            (T = A === 0),
            (R = c === cr && !w ? v - i * 2 : k),
            t.lineTo(G + Math.round(R), L),
            (t.lineWidth = a / 15);
          const z = this._getLinearGradient();
          (t.strokeStyle = z || f), t.stroke(), t.restore();
        }
        if (_) {
          t.save(), t.beginPath();
          let V = ln.Konva._fixTextRendering ? -Math.round(a / 4) : 0;
          t.moveTo(S, y + P + V),
            (A = C.split(" ").length - 1),
            (T = A === 0),
            (R = c === cr && w && !T ? v - i * 2 : k),
            t.lineTo(S + Math.round(R), y + P + V),
            (t.lineWidth = a / 15);
          const G = this._getLinearGradient();
          (t.strokeStyle = G || f), t.stroke(), t.restore();
        }
        if (l !== Ia && (g !== 0 || c === cr)) {
          A = C.split(" ").length - 1;
          for (var M = no(C), F = 0; F < M.length; F++) {
            var O = M[F];
            O === " " && !w && c === cr && (S += (v - i * 2 - k) / A),
              (this._partialTextX = S),
              (this._partialTextY = y + P),
              (this._partialText = O),
              t.fillStrokeShape(this),
              (S += this.measureSize(O).width + g);
          }
        } else
          g !== 0 && t.setAttr("letterSpacing", `${g}px`),
            (this._partialTextX = S),
            (this._partialTextY = y + P),
            (this._partialText = C),
            t.fillStrokeShape(this);
        t.restore(), r > 1 && (y += s);
      }
    }
  }
  _hitFunc(t) {
    var e = this.getWidth(),
      r = this.getHeight();
    t.beginPath(), t.rect(0, 0, e, r), t.closePath(), t.fillStrokeShape(this);
  }
  setText(t) {
    var e = Fn.Util._isString(t) ? t : t == null ? "" : t + "";
    return this._setAttr($c, e), this;
  }
  getWidth() {
    var t = this.attrs.width === Be || this.attrs.width === void 0;
    return t ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    var t = this.attrs.height === Be || this.attrs.height === void 0;
    return t
      ? this.fontSize() * this.textArr.length * this.lineHeight() +
          this.padding() * 2
      : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return (
      Fn.Util.warn(
        "text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."
      ),
      this.textHeight
    );
  }
  measureSize(t) {
    var e = cn(),
      r = this.fontSize(),
      i;
    return (
      e.save(),
      (e.font = this._getContextFont()),
      (i = e.measureText(t)),
      e.restore(),
      {
        actualBoundingBoxAscent: i.actualBoundingBoxAscent,
        actualBoundingBoxDescent: i.actualBoundingBoxDescent,
        actualBoundingBoxLeft: i.actualBoundingBoxLeft,
        actualBoundingBoxRight: i.actualBoundingBoxRight,
        alphabeticBaseline: i.alphabeticBaseline,
        emHeightAscent: i.emHeightAscent,
        emHeightDescent: i.emHeightDescent,
        fontBoundingBoxAscent: i.fontBoundingBoxAscent,
        fontBoundingBoxDescent: i.fontBoundingBoxDescent,
        hangingBaseline: i.hangingBaseline,
        ideographicBaseline: i.ideographicBaseline,
        width: i.width,
        height: r,
      }
    );
  }
  _getContextFont() {
    return (
      this.fontStyle() +
      Vr +
      this.fontVariant() +
      Vr +
      (this.fontSize() + Yc) +
      Zc(this.fontFamily())
    );
  }
  _addTextLine(t) {
    this.align() === cr && (t = t.trim());
    var r = this._getTextWidth(t);
    return this.textArr.push({ text: t, width: r, lastInParagraph: !1 });
  }
  _getTextWidth(t) {
    var e = this.letterSpacing(),
      r = t.length;
    return cn().measureText(t).width + (r ? e * (r - 1) : 0);
  }
  _setTextData() {
    var t = this.text().split(`
`),
      e = +this.fontSize(),
      r = 0,
      i = this.lineHeight() * e,
      a = this.attrs.width,
      s = this.attrs.height,
      o = a !== Be && a !== void 0,
      l = s !== Be && s !== void 0,
      h = this.padding(),
      c = a - h * 2,
      v = s - h * 2,
      g = 0,
      f = this.wrap(),
      u = f !== Ua,
      p = f !== Qc && u,
      _ = this.ellipsis();
    (this.textArr = []), (cn().font = this._getContextFont());
    for (
      var b = _ ? this._getTextWidth(hn) : 0, y = 0, d = t.length;
      y < d;
      ++y
    ) {
      var m = t[y],
        S = this._getTextWidth(m);
      if (o && S > c)
        for (; m.length > 0; ) {
          for (var P = 0, E = m.length, C = "", k = 0; P < E; ) {
            var w = (P + E) >>> 1,
              A = m.slice(0, w + 1),
              T = this._getTextWidth(A) + b;
            T <= c ? ((P = w + 1), (C = A), (k = T)) : (E = w);
          }
          if (C) {
            if (p) {
              var R,
                M = m[C.length],
                F = M === Vr || M === La;
              F && k <= c
                ? (R = C.length)
                : (R = Math.max(C.lastIndexOf(Vr), C.lastIndexOf(La)) + 1),
                R > 0 &&
                  ((P = R), (C = C.slice(0, P)), (k = this._getTextWidth(C)));
            }
            (C = C.trimRight()),
              this._addTextLine(C),
              (r = Math.max(r, k)),
              (g += i);
            var O = this._shouldHandleEllipsis(g);
            if (O) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            if (
              ((m = m.slice(P)),
              (m = m.trimLeft()),
              m.length > 0 && ((S = this._getTextWidth(m)), S <= c))
            ) {
              this._addTextLine(m), (g += i), (r = Math.max(r, S));
              break;
            }
          } else break;
        }
      else
        this._addTextLine(m),
          (g += i),
          (r = Math.max(r, S)),
          this._shouldHandleEllipsis(g) &&
            y < d - 1 &&
            this._tryToAddEllipsisToLastLine();
      if (
        (this.textArr[this.textArr.length - 1] &&
          (this.textArr[this.textArr.length - 1].lastInParagraph = !0),
        l && g + i > v)
      )
        break;
    }
    (this.textHeight = e), (this.textWidth = r);
  }
  _shouldHandleEllipsis(t) {
    var e = +this.fontSize(),
      r = this.lineHeight() * e,
      i = this.attrs.height,
      a = i !== Be && i !== void 0,
      s = this.padding(),
      o = i - s * 2,
      l = this.wrap(),
      h = l !== Ua;
    return !h || (a && t + r > o);
  }
  _tryToAddEllipsisToLastLine() {
    var t = this.attrs.width,
      e = t !== Be && t !== void 0,
      r = this.padding(),
      i = t - r * 2,
      a = this.ellipsis(),
      s = this.textArr[this.textArr.length - 1];
    if (!(!s || !a)) {
      if (e) {
        var o = this._getTextWidth(s.text + hn) < i;
        o || (s.text = s.text.slice(0, s.text.length - 3));
      }
      this.textArr.splice(this.textArr.length - 1, 1),
        this._addTextLine(s.text + hn);
    }
  }
  getStrokeScaleEnabled() {
    return !0;
  }
  _useBufferCanvas() {
    const t =
        this.textDecoration().indexOf("underline") !== -1 ||
        this.textDecoration().indexOf("line-through") !== -1,
      e = this.hasShadow();
    return t && e ? !0 : super._useBufferCanvas();
  }
};
we.Text = ut;
ut.prototype._fillFunc = t0;
ut.prototype._strokeFunc = e0;
ut.prototype.className = jc;
ut.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing",
];
(0, Bc._registerNode)(ut);
kt.Factory.overWriteSetter(ut, "width", (0, ye.getNumberOrAutoValidator)());
kt.Factory.overWriteSetter(ut, "height", (0, ye.getNumberOrAutoValidator)());
kt.Factory.addGetterSetter(ut, "direction", ao);
kt.Factory.addGetterSetter(ut, "fontFamily", "Arial");
kt.Factory.addGetterSetter(ut, "fontSize", 12, (0, ye.getNumberValidator)());
kt.Factory.addGetterSetter(ut, "fontStyle", oo);
kt.Factory.addGetterSetter(ut, "fontVariant", oo);
kt.Factory.addGetterSetter(ut, "padding", 0, (0, ye.getNumberValidator)());
kt.Factory.addGetterSetter(ut, "align", so);
kt.Factory.addGetterSetter(ut, "verticalAlign", Wc);
kt.Factory.addGetterSetter(ut, "lineHeight", 1, (0, ye.getNumberValidator)());
kt.Factory.addGetterSetter(ut, "wrap", qc);
kt.Factory.addGetterSetter(ut, "ellipsis", !1, (0, ye.getBooleanValidator)());
kt.Factory.addGetterSetter(
  ut,
  "letterSpacing",
  0,
  (0, ye.getNumberValidator)()
);
kt.Factory.addGetterSetter(ut, "text", "", (0, ye.getStringValidator)());
kt.Factory.addGetterSetter(ut, "textDecoration", "");
var Pi = {};
Object.defineProperty(Pi, "__esModule", { value: !0 });
Pi.TextPath = void 0;
const dn = ct,
  Ut = K,
  i0 = yt,
  dr = ir,
  un = we,
  ho = I,
  n0 = W;
var a0 = "",
  co = "normal";
function uo(n) {
  n.fillText(this.partialText, 0, 0);
}
function fo(n) {
  n.strokeText(this.partialText, 0, 0);
}
class bt extends i0.Shape {
  constructor(t) {
    super(t),
      (this.dummyCanvas = dn.Util.createCanvasElement()),
      (this.dataArray = []),
      this._readDataAttribute(),
      this.on("dataChange.konva", function () {
        this._readDataAttribute(), this._setTextData();
      }),
      this.on(
        "textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva",
        this._setTextData
      ),
      this._setTextData();
  }
  _getTextPathLength() {
    return dr.Path.getPathLength(this.dataArray);
  }
  _getPointAtLength(t) {
    if (!this.attrs.data) return null;
    const e = this.pathLength;
    return t - 1 > e
      ? null
      : dr.Path.getPointAtLengthOfDataArray(t, this.dataArray);
  }
  _readDataAttribute() {
    (this.dataArray = dr.Path.parsePathData(this.attrs.data)),
      (this.pathLength = this._getTextPathLength());
  }
  _sceneFunc(t) {
    t.setAttr("font", this._getContextFont()),
      t.setAttr("textBaseline", this.textBaseline()),
      t.setAttr("textAlign", "left"),
      t.save();
    var e = this.textDecoration(),
      r = this.fill(),
      i = this.fontSize(),
      a = this.glyphInfo;
    e === "underline" && t.beginPath();
    for (var s = 0; s < a.length; s++) {
      t.save();
      var o = a[s].p0;
      t.translate(o.x, o.y),
        t.rotate(a[s].rotation),
        (this.partialText = a[s].text),
        t.fillStrokeShape(this),
        e === "underline" &&
          (s === 0 && t.moveTo(0, i / 2 + 1), t.lineTo(i, i / 2 + 1)),
        t.restore();
    }
    e === "underline" &&
      ((t.strokeStyle = r), (t.lineWidth = i / 20), t.stroke()),
      t.restore();
  }
  _hitFunc(t) {
    t.beginPath();
    var e = this.glyphInfo;
    if (e.length >= 1) {
      var r = e[0].p0;
      t.moveTo(r.x, r.y);
    }
    for (var i = 0; i < e.length; i++) {
      var a = e[i].p1;
      t.lineTo(a.x, a.y);
    }
    t.setAttr("lineWidth", this.fontSize()),
      t.setAttr("strokeStyle", this.colorKey),
      t.stroke();
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return (
      dn.Util.warn(
        "text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."
      ),
      this.textHeight
    );
  }
  setText(t) {
    return un.Text.prototype.setText.call(this, t);
  }
  _getContextFont() {
    return un.Text.prototype._getContextFont.call(this);
  }
  _getTextSize(t) {
    var e = this.dummyCanvas,
      r = e.getContext("2d");
    r.save(), (r.font = this._getContextFont());
    var i = r.measureText(t);
    return (
      r.restore(),
      { width: i.width, height: parseInt(`${this.fontSize()}`, 10) }
    );
  }
  _setTextData() {
    const { width: t, height: e } = this._getTextSize(this.attrs.text);
    if (
      ((this.textWidth = t),
      (this.textHeight = e),
      (this.glyphInfo = []),
      !this.attrs.data)
    )
      return null;
    const r = this.letterSpacing(),
      i = this.align(),
      a = this.kerningFunc(),
      s = Math.max(
        this.textWidth + ((this.attrs.text || "").length - 1) * r,
        0
      );
    let o = 0;
    i === "center" && (o = Math.max(0, this.pathLength / 2 - s / 2)),
      i === "right" && (o = Math.max(0, this.pathLength - s));
    const l = (0, un.stringToArray)(this.text());
    let h = o;
    for (var c = 0; c < l.length; c++) {
      const v = this._getPointAtLength(h);
      if (!v) return;
      let g = this._getTextSize(l[c]).width + r;
      if (l[c] === " " && i === "justify") {
        const y = this.text().split(" ").length - 1;
        g += (this.pathLength - s) / y;
      }
      const f = this._getPointAtLength(h + g);
      if (!f) return;
      const u = dr.Path.getLineLength(v.x, v.y, f.x, f.y);
      let p = 0;
      if (a)
        try {
          p = a(l[c - 1], l[c]) * this.fontSize();
        } catch {
          p = 0;
        }
      (v.x += p), (f.x += p), (this.textWidth += p);
      const _ = dr.Path.getPointOnLine(p + u / 2, v.x, v.y, f.x, f.y),
        b = Math.atan2(f.y - v.y, f.x - v.x);
      this.glyphInfo.push({
        transposeX: _.x,
        transposeY: _.y,
        text: l[c],
        rotation: b,
        p0: v,
        p1: f,
      }),
        (h += g);
    }
  }
  getSelfRect() {
    if (!this.glyphInfo.length) return { x: 0, y: 0, width: 0, height: 0 };
    var t = [];
    this.glyphInfo.forEach(function (c) {
      t.push(c.p0.x), t.push(c.p0.y), t.push(c.p1.x), t.push(c.p1.y);
    });
    for (
      var e = t[0] || 0,
        r = t[0] || 0,
        i = t[1] || 0,
        a = t[1] || 0,
        s,
        o,
        l = 0;
      l < t.length / 2;
      l++
    )
      (s = t[l * 2]),
        (o = t[l * 2 + 1]),
        (e = Math.min(e, s)),
        (r = Math.max(r, s)),
        (i = Math.min(i, o)),
        (a = Math.max(a, o));
    var h = this.fontSize();
    return { x: e - h / 2, y: i - h / 2, width: r - e + h, height: a - i + h };
  }
  destroy() {
    return dn.Util.releaseCanvas(this.dummyCanvas), super.destroy();
  }
}
Pi.TextPath = bt;
bt.prototype._fillFunc = uo;
bt.prototype._strokeFunc = fo;
bt.prototype._fillFuncHit = uo;
bt.prototype._strokeFuncHit = fo;
bt.prototype.className = "TextPath";
bt.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
(0, n0._registerNode)(bt);
Ut.Factory.addGetterSetter(bt, "data");
Ut.Factory.addGetterSetter(bt, "fontFamily", "Arial");
Ut.Factory.addGetterSetter(bt, "fontSize", 12, (0, ho.getNumberValidator)());
Ut.Factory.addGetterSetter(bt, "fontStyle", co);
Ut.Factory.addGetterSetter(bt, "align", "left");
Ut.Factory.addGetterSetter(
  bt,
  "letterSpacing",
  0,
  (0, ho.getNumberValidator)()
);
Ut.Factory.addGetterSetter(bt, "textBaseline", "middle");
Ut.Factory.addGetterSetter(bt, "fontVariant", co);
Ut.Factory.addGetterSetter(bt, "text", a0);
Ut.Factory.addGetterSetter(bt, "textDecoration", null);
Ut.Factory.addGetterSetter(bt, "kerningFunc", null);
var ki = {};
Object.defineProperty(ki, "__esModule", { value: !0 });
ki.Transformer = void 0;
const et = ct,
  J = K,
  Ba = ot,
  s0 = yt,
  o0 = Nr,
  Va = er,
  Dt = W,
  be = I,
  l0 = W;
var go = "tr-konva",
  h0 = [
    "resizeEnabledChange",
    "rotateAnchorOffsetChange",
    "rotateEnabledChange",
    "enabledAnchorsChange",
    "anchorSizeChange",
    "borderEnabledChange",
    "borderStrokeChange",
    "borderStrokeWidthChange",
    "borderDashChange",
    "anchorStrokeChange",
    "anchorStrokeWidthChange",
    "anchorFillChange",
    "anchorCornerRadiusChange",
    "ignoreStrokeChange",
    "anchorStyleFuncChange",
  ]
    .map((n) => n + `.${go}`)
    .join(" "),
  za = "nodesRect",
  c0 = [
    "widthChange",
    "heightChange",
    "scaleXChange",
    "scaleYChange",
    "skewXChange",
    "skewYChange",
    "rotationChange",
    "offsetXChange",
    "offsetYChange",
    "transformsEnabledChange",
    "strokeWidthChange",
  ],
  d0 = {
    "top-left": -45,
    "top-center": 0,
    "top-right": 45,
    "middle-right": -90,
    "middle-left": 90,
    "bottom-left": -135,
    "bottom-center": 180,
    "bottom-right": 135,
  };
const u0 = "ontouchstart" in Dt.Konva._global;
function f0(n, t, e) {
  if (n === "rotater") return e;
  t += et.Util.degToRad(d0[n] || 0);
  var r = ((et.Util.radToDeg(t) % 360) + 360) % 360;
  return et.Util._inRange(r, 315 + 22.5, 360) || et.Util._inRange(r, 0, 22.5)
    ? "ns-resize"
    : et.Util._inRange(r, 45 - 22.5, 45 + 22.5)
      ? "nesw-resize"
      : et.Util._inRange(r, 90 - 22.5, 90 + 22.5)
        ? "ew-resize"
        : et.Util._inRange(r, 135 - 22.5, 135 + 22.5)
          ? "nwse-resize"
          : et.Util._inRange(r, 180 - 22.5, 180 + 22.5)
            ? "ns-resize"
            : et.Util._inRange(r, 225 - 22.5, 225 + 22.5)
              ? "nesw-resize"
              : et.Util._inRange(r, 270 - 22.5, 270 + 22.5)
                ? "ew-resize"
                : et.Util._inRange(r, 315 - 22.5, 315 + 22.5)
                  ? "nwse-resize"
                  : (et.Util.error(
                      "Transformer has unknown angle for cursor detection: " + r
                    ),
                    "pointer");
}
var Zr = [
    "top-left",
    "top-center",
    "top-right",
    "middle-right",
    "middle-left",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ],
  Ha = 1e8;
function g0(n) {
  return {
    x:
      n.x +
      (n.width / 2) * Math.cos(n.rotation) +
      (n.height / 2) * Math.sin(-n.rotation),
    y:
      n.y +
      (n.height / 2) * Math.cos(n.rotation) +
      (n.width / 2) * Math.sin(n.rotation),
  };
}
function po(n, t, e) {
  const r = e.x + (n.x - e.x) * Math.cos(t) - (n.y - e.y) * Math.sin(t),
    i = e.y + (n.x - e.x) * Math.sin(t) + (n.y - e.y) * Math.cos(t);
  return { ...n, rotation: n.rotation + t, x: r, y: i };
}
function p0(n, t) {
  const e = g0(n);
  return po(n, t, e);
}
function v0(n, t, e) {
  let r = t;
  for (let i = 0; i < n.length; i++) {
    const a = Dt.Konva.getAngle(n[i]),
      s = Math.abs(a - t) % (Math.PI * 2);
    Math.min(s, Math.PI * 2 - s) < e && (r = a);
  }
  return r;
}
let Mn = 0;
class q extends Va.Group {
  constructor(t) {
    super(t),
      (this._movingAnchorName = null),
      (this._transforming = !1),
      this._createElements(),
      (this._handleMouseMove = this._handleMouseMove.bind(this)),
      (this._handleMouseUp = this._handleMouseUp.bind(this)),
      (this.update = this.update.bind(this)),
      this.on(h0, this.update),
      this.getNode() && this.update();
  }
  attachTo(t) {
    return this.setNode(t), this;
  }
  setNode(t) {
    return (
      et.Util.warn(
        "tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."
      ),
      this.setNodes([t])
    );
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  _getEventNamespace() {
    return go + this._id;
  }
  setNodes(t = []) {
    this._nodes && this._nodes.length && this.detach();
    const e = t.filter((i) =>
      i.isAncestorOf(this)
        ? (et.Util.error(
            "Konva.Transformer cannot be an a child of the node you are trying to attach"
          ),
          !1)
        : !0
    );
    (this._nodes = t = e),
      t.length === 1 && this.useSingleNodeRotation()
        ? this.rotation(t[0].getAbsoluteRotation())
        : this.rotation(0),
      this._nodes.forEach((i) => {
        const a = () => {
            this.nodes().length === 1 &&
              this.useSingleNodeRotation() &&
              this.rotation(this.nodes()[0].getAbsoluteRotation()),
              this._resetTransformCache(),
              !this._transforming && !this.isDragging() && this.update();
          },
          s = i._attrsAffectingSize
            .map((o) => o + "Change." + this._getEventNamespace())
            .join(" ");
        i.on(s, a),
          i.on(c0.map((o) => o + `.${this._getEventNamespace()}`).join(" "), a),
          i.on(`absoluteTransformChange.${this._getEventNamespace()}`, a),
          this._proxyDrag(i);
      }),
      this._resetTransformCache();
    var r = !!this.findOne(".top-left");
    return r && this.update(), this;
  }
  _proxyDrag(t) {
    let e;
    t.on(`dragstart.${this._getEventNamespace()}`, (r) => {
      (e = t.getAbsolutePosition()),
        !this.isDragging() &&
          t !== this.findOne(".back") &&
          this.startDrag(r, !1);
    }),
      t.on(`dragmove.${this._getEventNamespace()}`, (r) => {
        if (!e) return;
        const i = t.getAbsolutePosition(),
          a = i.x - e.x,
          s = i.y - e.y;
        this.nodes().forEach((o) => {
          if (o === t || o.isDragging()) return;
          const l = o.getAbsolutePosition();
          o.setAbsolutePosition({ x: l.x + a, y: l.y + s }), o.startDrag(r);
        }),
          (e = null);
      });
  }
  getNodes() {
    return this._nodes || [];
  }
  getActiveAnchor() {
    return this._movingAnchorName;
  }
  detach() {
    this._nodes &&
      this._nodes.forEach((t) => {
        t.off("." + this._getEventNamespace());
      }),
      (this._nodes = []),
      this._resetTransformCache();
  }
  _resetTransformCache() {
    this._clearCache(za),
      this._clearCache("transform"),
      this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache(za, this.__getNodeRect);
  }
  __getNodeShape(t, e = this.rotation(), r) {
    var i = t.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke(),
      }),
      a = t.getAbsoluteScale(r),
      s = t.getAbsolutePosition(r),
      o = i.x * a.x - t.offsetX() * a.x,
      l = i.y * a.y - t.offsetY() * a.y;
    const h =
        (Dt.Konva.getAngle(t.getAbsoluteRotation()) + Math.PI * 2) %
        (Math.PI * 2),
      c = {
        x: s.x + o * Math.cos(h) + l * Math.sin(-h),
        y: s.y + l * Math.cos(h) + o * Math.sin(h),
        width: i.width * a.x,
        height: i.height * a.y,
        rotation: h,
      };
    return po(c, -Dt.Konva.getAngle(e), { x: 0, y: 0 });
  }
  __getNodeRect() {
    var t = this.getNode();
    if (!t) return { x: -Ha, y: -Ha, width: 0, height: 0, rotation: 0 };
    const e = [];
    this.nodes().map((h) => {
      const c = h.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke(),
      });
      var v = [
          { x: c.x, y: c.y },
          { x: c.x + c.width, y: c.y },
          { x: c.x + c.width, y: c.y + c.height },
          { x: c.x, y: c.y + c.height },
        ],
        g = h.getAbsoluteTransform();
      v.forEach(function (f) {
        var u = g.point(f);
        e.push(u);
      });
    });
    const r = new et.Transform();
    r.rotate(-Dt.Konva.getAngle(this.rotation()));
    var i = 1 / 0,
      a = 1 / 0,
      s = -1 / 0,
      o = -1 / 0;
    e.forEach(function (h) {
      var c = r.point(h);
      i === void 0 && ((i = s = c.x), (a = o = c.y)),
        (i = Math.min(i, c.x)),
        (a = Math.min(a, c.y)),
        (s = Math.max(s, c.x)),
        (o = Math.max(o, c.y));
    }),
      r.invert();
    const l = r.point({ x: i, y: a });
    return {
      x: l.x,
      y: l.y,
      width: s - i,
      height: o - a,
      rotation: Dt.Konva.getAngle(this.rotation()),
    };
  }
  getX() {
    return this._getNodeRect().x;
  }
  getY() {
    return this._getNodeRect().y;
  }
  getWidth() {
    return this._getNodeRect().width;
  }
  getHeight() {
    return this._getNodeRect().height;
  }
  _createElements() {
    this._createBack(),
      Zr.forEach((t) => {
        this._createAnchor(t);
      }),
      this._createAnchor("rotater");
  }
  _createAnchor(t) {
    var e = new o0.Rect({
        stroke: "rgb(0, 161, 255)",
        fill: "white",
        strokeWidth: 1,
        name: t + " _anchor",
        dragDistance: 0,
        draggable: !0,
        hitStrokeWidth: u0 ? 10 : "auto",
      }),
      r = this;
    e.on("mousedown touchstart", function (i) {
      r._handleMouseDown(i);
    }),
      e.on("dragstart", (i) => {
        e.stopDrag(), (i.cancelBubble = !0);
      }),
      e.on("dragend", (i) => {
        i.cancelBubble = !0;
      }),
      e.on("mouseenter", () => {
        var i = Dt.Konva.getAngle(this.rotation()),
          a = this.rotateAnchorCursor(),
          s = f0(t, i, a);
        e.getStage().content && (e.getStage().content.style.cursor = s),
          (this._cursorChange = !0);
      }),
      e.on("mouseout", () => {
        e.getStage().content && (e.getStage().content.style.cursor = ""),
          (this._cursorChange = !1);
      }),
      this.add(e);
  }
  _createBack() {
    var t = new s0.Shape({
      name: "back",
      width: 0,
      height: 0,
      draggable: !0,
      sceneFunc(e, r) {
        var i = r.getParent(),
          a = i.padding();
        e.beginPath(),
          e.rect(-a, -a, r.width() + a * 2, r.height() + a * 2),
          e.moveTo(r.width() / 2, -a),
          i.rotateEnabled() &&
            i.rotateLineVisible() &&
            e.lineTo(
              r.width() / 2,
              -i.rotateAnchorOffset() * et.Util._sign(r.height()) - a
            ),
          e.fillStrokeShape(r);
      },
      hitFunc: (e, r) => {
        if (this.shouldOverdrawWholeArea()) {
          var i = this.padding();
          e.beginPath(),
            e.rect(-i, -i, r.width() + i * 2, r.height() + i * 2),
            e.fillStrokeShape(r);
        }
      },
    });
    this.add(t),
      this._proxyDrag(t),
      t.on("dragstart", (e) => {
        e.cancelBubble = !0;
      }),
      t.on("dragmove", (e) => {
        e.cancelBubble = !0;
      }),
      t.on("dragend", (e) => {
        e.cancelBubble = !0;
      }),
      this.on("dragmove", (e) => {
        this.update();
      });
  }
  _handleMouseDown(t) {
    if (!this._transforming) {
      this._movingAnchorName = t.target.name().split(" ")[0];
      var e = this._getNodeRect(),
        r = e.width,
        i = e.height,
        a = Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2));
      (this.sin = Math.abs(i / a)),
        (this.cos = Math.abs(r / a)),
        typeof window < "u" &&
          (window.addEventListener("mousemove", this._handleMouseMove),
          window.addEventListener("touchmove", this._handleMouseMove),
          window.addEventListener("mouseup", this._handleMouseUp, !0),
          window.addEventListener("touchend", this._handleMouseUp, !0)),
        (this._transforming = !0);
      var s = t.target.getAbsolutePosition(),
        o = t.target.getStage().getPointerPosition();
      (this._anchorDragOffset = { x: o.x - s.x, y: o.y - s.y }),
        Mn++,
        this._fire("transformstart", { evt: t.evt, target: this.getNode() }),
        this._nodes.forEach((l) => {
          l._fire("transformstart", { evt: t.evt, target: l });
        });
    }
  }
  _handleMouseMove(t) {
    var e,
      r,
      i,
      a = this.findOne("." + this._movingAnchorName),
      s = a.getStage();
    s.setPointersPositions(t);
    const o = s.getPointerPosition();
    let l = {
      x: o.x - this._anchorDragOffset.x,
      y: o.y - this._anchorDragOffset.y,
    };
    const h = a.getAbsolutePosition();
    this.anchorDragBoundFunc() && (l = this.anchorDragBoundFunc()(h, l, t)),
      a.setAbsolutePosition(l);
    const c = a.getAbsolutePosition();
    if (!(h.x === c.x && h.y === c.y)) {
      if (this._movingAnchorName === "rotater") {
        var v = this._getNodeRect();
        (e = a.x() - v.width / 2), (r = -a.y() + v.height / 2);
        let R = Math.atan2(-r, e) + Math.PI / 2;
        v.height < 0 && (R -= Math.PI);
        var g = Dt.Konva.getAngle(this.rotation());
        const M = g + R,
          F = Dt.Konva.getAngle(this.rotationSnapTolerance()),
          D = v0(this.rotationSnaps(), M, F) - v.rotation,
          U = p0(v, D);
        this._fitNodesInto(U, t);
        return;
      }
      var f = this.shiftBehavior(),
        u;
      f === "inverted"
        ? (u = this.keepRatio() && !t.shiftKey)
        : f === "none"
          ? (u = this.keepRatio())
          : (u = this.keepRatio() || t.shiftKey);
      var d = this.centeredScaling() || t.altKey;
      if (this._movingAnchorName === "top-left") {
        if (u) {
          var p = d
            ? { x: this.width() / 2, y: this.height() / 2 }
            : {
                x: this.findOne(".bottom-right").x(),
                y: this.findOne(".bottom-right").y(),
              };
          i = Math.sqrt(Math.pow(p.x - a.x(), 2) + Math.pow(p.y - a.y(), 2));
          var _ = this.findOne(".top-left").x() > p.x ? -1 : 1,
            b = this.findOne(".top-left").y() > p.y ? -1 : 1;
          (e = i * this.cos * _),
            (r = i * this.sin * b),
            this.findOne(".top-left").x(p.x - e),
            this.findOne(".top-left").y(p.y - r);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(a.y());
      else if (this._movingAnchorName === "top-right") {
        if (u) {
          var p = d
            ? { x: this.width() / 2, y: this.height() / 2 }
            : {
                x: this.findOne(".bottom-left").x(),
                y: this.findOne(".bottom-left").y(),
              };
          i = Math.sqrt(Math.pow(a.x() - p.x, 2) + Math.pow(p.y - a.y(), 2));
          var _ = this.findOne(".top-right").x() < p.x ? -1 : 1,
            b = this.findOne(".top-right").y() > p.y ? -1 : 1;
          (e = i * this.cos * _),
            (r = i * this.sin * b),
            this.findOne(".top-right").x(p.x + e),
            this.findOne(".top-right").y(p.y - r);
        }
        var y = a.position();
        this.findOne(".top-left").y(y.y), this.findOne(".bottom-right").x(y.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(a.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(a.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (u) {
          var p = d
            ? { x: this.width() / 2, y: this.height() / 2 }
            : {
                x: this.findOne(".top-right").x(),
                y: this.findOne(".top-right").y(),
              };
          i = Math.sqrt(Math.pow(p.x - a.x(), 2) + Math.pow(a.y() - p.y, 2));
          var _ = p.x < a.x() ? -1 : 1,
            b = a.y() < p.y ? -1 : 1;
          (e = i * this.cos * _),
            (r = i * this.sin * b),
            a.x(p.x - e),
            a.y(p.y + r);
        }
        (y = a.position()),
          this.findOne(".top-left").x(y.x),
          this.findOne(".bottom-right").y(y.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(a.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (u) {
          var p = d
            ? { x: this.width() / 2, y: this.height() / 2 }
            : {
                x: this.findOne(".top-left").x(),
                y: this.findOne(".top-left").y(),
              };
          i = Math.sqrt(Math.pow(a.x() - p.x, 2) + Math.pow(a.y() - p.y, 2));
          var _ = this.findOne(".bottom-right").x() < p.x ? -1 : 1,
            b = this.findOne(".bottom-right").y() < p.y ? -1 : 1;
          (e = i * this.cos * _),
            (r = i * this.sin * b),
            this.findOne(".bottom-right").x(p.x + e),
            this.findOne(".bottom-right").y(p.y + r);
        }
      } else
        console.error(
          new Error(
            "Wrong position argument of selection resizer: " +
              this._movingAnchorName
          )
        );
      var d = this.centeredScaling() || t.altKey;
      if (d) {
        var m = this.findOne(".top-left"),
          S = this.findOne(".bottom-right"),
          P = m.x(),
          E = m.y(),
          C = this.getWidth() - S.x(),
          k = this.getHeight() - S.y();
        S.move({ x: -P, y: -E }), m.move({ x: C, y: k });
      }
      var w = this.findOne(".top-left").getAbsolutePosition();
      (e = w.x), (r = w.y);
      var A = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(),
        T = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto(
        {
          x: e,
          y: r,
          width: A,
          height: T,
          rotation: Dt.Konva.getAngle(this.rotation()),
        },
        t
      );
    }
  }
  _handleMouseUp(t) {
    this._removeEvents(t);
  }
  getAbsoluteTransform() {
    return this.getTransform();
  }
  _removeEvents(t) {
    var e;
    if (this._transforming) {
      (this._transforming = !1),
        typeof window < "u" &&
          (window.removeEventListener("mousemove", this._handleMouseMove),
          window.removeEventListener("touchmove", this._handleMouseMove),
          window.removeEventListener("mouseup", this._handleMouseUp, !0),
          window.removeEventListener("touchend", this._handleMouseUp, !0));
      var r = this.getNode();
      Mn--,
        this._fire("transformend", { evt: t, target: r }),
        (e = this.getLayer()) === null || e === void 0 || e.batchDraw(),
        r &&
          this._nodes.forEach((i) => {
            var a;
            i._fire("transformend", { evt: t, target: i }),
              (a = i.getLayer()) === null || a === void 0 || a.batchDraw();
          }),
        (this._movingAnchorName = null);
    }
  }
  _fitNodesInto(t, e) {
    var r = this._getNodeRect();
    const i = 1;
    if (et.Util._inRange(t.width, -this.padding() * 2 - i, i)) {
      this.update();
      return;
    }
    if (et.Util._inRange(t.height, -this.padding() * 2 - i, i)) {
      this.update();
      return;
    }
    var a = new et.Transform();
    if (
      (a.rotate(Dt.Konva.getAngle(this.rotation())),
      this._movingAnchorName &&
        t.width < 0 &&
        this._movingAnchorName.indexOf("left") >= 0)
    ) {
      const g = a.point({ x: -this.padding() * 2, y: 0 });
      (t.x += g.x),
        (t.y += g.y),
        (t.width += this.padding() * 2),
        (this._movingAnchorName = this._movingAnchorName.replace(
          "left",
          "right"
        )),
        (this._anchorDragOffset.x -= g.x),
        (this._anchorDragOffset.y -= g.y);
    } else if (
      this._movingAnchorName &&
      t.width < 0 &&
      this._movingAnchorName.indexOf("right") >= 0
    ) {
      const g = a.point({ x: this.padding() * 2, y: 0 });
      (this._movingAnchorName = this._movingAnchorName.replace(
        "right",
        "left"
      )),
        (this._anchorDragOffset.x -= g.x),
        (this._anchorDragOffset.y -= g.y),
        (t.width += this.padding() * 2);
    }
    if (
      this._movingAnchorName &&
      t.height < 0 &&
      this._movingAnchorName.indexOf("top") >= 0
    ) {
      const g = a.point({ x: 0, y: -this.padding() * 2 });
      (t.x += g.x),
        (t.y += g.y),
        (this._movingAnchorName = this._movingAnchorName.replace(
          "top",
          "bottom"
        )),
        (this._anchorDragOffset.x -= g.x),
        (this._anchorDragOffset.y -= g.y),
        (t.height += this.padding() * 2);
    } else if (
      this._movingAnchorName &&
      t.height < 0 &&
      this._movingAnchorName.indexOf("bottom") >= 0
    ) {
      const g = a.point({ x: 0, y: this.padding() * 2 });
      (this._movingAnchorName = this._movingAnchorName.replace(
        "bottom",
        "top"
      )),
        (this._anchorDragOffset.x -= g.x),
        (this._anchorDragOffset.y -= g.y),
        (t.height += this.padding() * 2);
    }
    if (this.boundBoxFunc()) {
      const g = this.boundBoxFunc()(r, t);
      g
        ? (t = g)
        : et.Util.warn(
            "boundBoxFunc returned falsy. You should return new bound rect from it!"
          );
    }
    const s = 1e7,
      o = new et.Transform();
    o.translate(r.x, r.y),
      o.rotate(r.rotation),
      o.scale(r.width / s, r.height / s);
    const l = new et.Transform(),
      h = t.width / s,
      c = t.height / s;
    this.flipEnabled() === !1
      ? (l.translate(t.x, t.y),
        l.rotate(t.rotation),
        l.translate(t.width < 0 ? t.width : 0, t.height < 0 ? t.height : 0),
        l.scale(Math.abs(h), Math.abs(c)))
      : (l.translate(t.x, t.y), l.rotate(t.rotation), l.scale(h, c));
    const v = l.multiply(o.invert());
    this._nodes.forEach((g) => {
      var f;
      const u = g.getParent().getAbsoluteTransform(),
        p = g.getTransform().copy();
      p.translate(g.offsetX(), g.offsetY());
      const _ = new et.Transform();
      _.multiply(u.copy().invert()).multiply(v).multiply(u).multiply(p);
      const b = _.decompose();
      g.setAttrs(b),
        (f = g.getLayer()) === null || f === void 0 || f.batchDraw();
    }),
      this.rotation(et.Util._getRotation(t.rotation)),
      this._nodes.forEach((g) => {
        this._fire("transform", { evt: e, target: g }),
          g._fire("transform", { evt: e, target: g });
      }),
      this._resetTransformCache(),
      this.update(),
      this.getLayer().batchDraw();
  }
  forceUpdate() {
    this._resetTransformCache(), this.update();
  }
  _batchChangeChild(t, e) {
    this.findOne(t).setAttrs(e);
  }
  update() {
    var t,
      e = this._getNodeRect();
    this.rotation(et.Util._getRotation(e.rotation));
    var r = e.width,
      i = e.height,
      a = this.enabledAnchors(),
      s = this.resizeEnabled(),
      o = this.padding(),
      l = this.anchorSize();
    const h = this.find("._anchor");
    h.forEach((v) => {
      v.setAttrs({
        width: l,
        height: l,
        offsetX: l / 2,
        offsetY: l / 2,
        stroke: this.anchorStroke(),
        strokeWidth: this.anchorStrokeWidth(),
        fill: this.anchorFill(),
        cornerRadius: this.anchorCornerRadius(),
      });
    }),
      this._batchChangeChild(".top-left", {
        x: 0,
        y: 0,
        offsetX: l / 2 + o,
        offsetY: l / 2 + o,
        visible: s && a.indexOf("top-left") >= 0,
      }),
      this._batchChangeChild(".top-center", {
        x: r / 2,
        y: 0,
        offsetY: l / 2 + o,
        visible: s && a.indexOf("top-center") >= 0,
      }),
      this._batchChangeChild(".top-right", {
        x: r,
        y: 0,
        offsetX: l / 2 - o,
        offsetY: l / 2 + o,
        visible: s && a.indexOf("top-right") >= 0,
      }),
      this._batchChangeChild(".middle-left", {
        x: 0,
        y: i / 2,
        offsetX: l / 2 + o,
        visible: s && a.indexOf("middle-left") >= 0,
      }),
      this._batchChangeChild(".middle-right", {
        x: r,
        y: i / 2,
        offsetX: l / 2 - o,
        visible: s && a.indexOf("middle-right") >= 0,
      }),
      this._batchChangeChild(".bottom-left", {
        x: 0,
        y: i,
        offsetX: l / 2 + o,
        offsetY: l / 2 - o,
        visible: s && a.indexOf("bottom-left") >= 0,
      }),
      this._batchChangeChild(".bottom-center", {
        x: r / 2,
        y: i,
        offsetY: l / 2 - o,
        visible: s && a.indexOf("bottom-center") >= 0,
      }),
      this._batchChangeChild(".bottom-right", {
        x: r,
        y: i,
        offsetX: l / 2 - o,
        offsetY: l / 2 - o,
        visible: s && a.indexOf("bottom-right") >= 0,
      }),
      this._batchChangeChild(".rotater", {
        x: r / 2,
        y: -this.rotateAnchorOffset() * et.Util._sign(i) - o,
        visible: this.rotateEnabled(),
      }),
      this._batchChangeChild(".back", {
        width: r,
        height: i,
        visible: this.borderEnabled(),
        stroke: this.borderStroke(),
        strokeWidth: this.borderStrokeWidth(),
        dash: this.borderDash(),
        x: 0,
        y: 0,
      });
    const c = this.anchorStyleFunc();
    c &&
      h.forEach((v) => {
        c(v);
      }),
      (t = this.getLayer()) === null || t === void 0 || t.batchDraw();
  }
  isTransforming() {
    return this._transforming;
  }
  stopTransform() {
    if (this._transforming) {
      this._removeEvents();
      var t = this.findOne("." + this._movingAnchorName);
      t && t.stopDrag();
    }
  }
  destroy() {
    return (
      this.getStage() &&
        this._cursorChange &&
        this.getStage().content &&
        (this.getStage().content.style.cursor = ""),
      Va.Group.prototype.destroy.call(this),
      this.detach(),
      this._removeEvents(),
      this
    );
  }
  toObject() {
    return Ba.Node.prototype.toObject.call(this);
  }
  clone(t) {
    var e = Ba.Node.prototype.clone.call(this, t);
    return e;
  }
  getClientRect() {
    return this.nodes().length > 0
      ? super.getClientRect()
      : { x: 0, y: 0, width: 0, height: 0 };
  }
}
ki.Transformer = q;
q.isTransforming = () => Mn > 0;
function m0(n) {
  return (
    n instanceof Array ||
      et.Util.warn("enabledAnchors value should be an array"),
    n instanceof Array &&
      n.forEach(function (t) {
        Zr.indexOf(t) === -1 &&
          et.Util.warn(
            "Unknown anchor name: " +
              t +
              ". Available names are: " +
              Zr.join(", ")
          );
      }),
    n || []
  );
}
q.prototype.className = "Transformer";
(0, l0._registerNode)(q);
J.Factory.addGetterSetter(q, "enabledAnchors", Zr, m0);
J.Factory.addGetterSetter(q, "flipEnabled", !0, (0, be.getBooleanValidator)());
J.Factory.addGetterSetter(q, "resizeEnabled", !0);
J.Factory.addGetterSetter(q, "anchorSize", 10, (0, be.getNumberValidator)());
J.Factory.addGetterSetter(q, "rotateEnabled", !0);
J.Factory.addGetterSetter(q, "rotateLineVisible", !0);
J.Factory.addGetterSetter(q, "rotationSnaps", []);
J.Factory.addGetterSetter(
  q,
  "rotateAnchorOffset",
  50,
  (0, be.getNumberValidator)()
);
J.Factory.addGetterSetter(q, "rotateAnchorCursor", "crosshair");
J.Factory.addGetterSetter(
  q,
  "rotationSnapTolerance",
  5,
  (0, be.getNumberValidator)()
);
J.Factory.addGetterSetter(q, "borderEnabled", !0);
J.Factory.addGetterSetter(q, "anchorStroke", "rgb(0, 161, 255)");
J.Factory.addGetterSetter(
  q,
  "anchorStrokeWidth",
  1,
  (0, be.getNumberValidator)()
);
J.Factory.addGetterSetter(q, "anchorFill", "white");
J.Factory.addGetterSetter(
  q,
  "anchorCornerRadius",
  0,
  (0, be.getNumberValidator)()
);
J.Factory.addGetterSetter(q, "borderStroke", "rgb(0, 161, 255)");
J.Factory.addGetterSetter(
  q,
  "borderStrokeWidth",
  1,
  (0, be.getNumberValidator)()
);
J.Factory.addGetterSetter(q, "borderDash");
J.Factory.addGetterSetter(q, "keepRatio", !0);
J.Factory.addGetterSetter(q, "shiftBehavior", "default");
J.Factory.addGetterSetter(q, "centeredScaling", !1);
J.Factory.addGetterSetter(q, "ignoreStroke", !1);
J.Factory.addGetterSetter(q, "padding", 0, (0, be.getNumberValidator)());
J.Factory.addGetterSetter(q, "node");
J.Factory.addGetterSetter(q, "nodes");
J.Factory.addGetterSetter(q, "boundBoxFunc");
J.Factory.addGetterSetter(q, "anchorDragBoundFunc");
J.Factory.addGetterSetter(q, "anchorStyleFunc");
J.Factory.addGetterSetter(q, "shouldOverdrawWholeArea", !1);
J.Factory.addGetterSetter(q, "useSingleNodeRotation", !0);
J.Factory.backCompat(q, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors",
});
var Ai = {};
Object.defineProperty(Ai, "__esModule", { value: !0 });
Ai.Wedge = void 0;
const Ti = K,
  _0 = yt,
  y0 = W,
  vo = I,
  b0 = W;
class ie extends _0.Shape {
  _sceneFunc(t) {
    t.beginPath(),
      t.arc(
        0,
        0,
        this.radius(),
        0,
        y0.Konva.getAngle(this.angle()),
        this.clockwise()
      ),
      t.lineTo(0, 0),
      t.closePath(),
      t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius(t / 2);
  }
  setHeight(t) {
    this.radius(t / 2);
  }
}
Ai.Wedge = ie;
ie.prototype.className = "Wedge";
ie.prototype._centroid = !0;
ie.prototype._attrsAffectingSize = ["radius"];
(0, b0._registerNode)(ie);
Ti.Factory.addGetterSetter(ie, "radius", 0, (0, vo.getNumberValidator)());
Ti.Factory.addGetterSetter(ie, "angle", 0, (0, vo.getNumberValidator)());
Ti.Factory.addGetterSetter(ie, "clockwise", !1);
Ti.Factory.backCompat(ie, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle",
});
var Ei = {};
Object.defineProperty(Ei, "__esModule", { value: !0 });
Ei.Blur = void 0;
const $a = K,
  S0 = ot,
  C0 = I;
function ja() {
  (this.r = 0), (this.g = 0), (this.b = 0), (this.a = 0), (this.next = null);
}
var w0 = [
    512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292,
    512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292,
    273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259,
    496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292,
    282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373,
    364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259,
    507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381,
    374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292,
    287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461,
    454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373,
    368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309,
    305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259,
    257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442,
    437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
    377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332,
    329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292,
    289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259,
  ],
  x0 = [
    9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17,
    17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19,
    19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24,
  ];
function P0(n, t) {
  var e = n.data,
    r = n.width,
    i = n.height,
    a,
    s,
    o,
    l,
    h,
    c,
    v,
    g,
    f,
    u,
    p,
    _,
    b,
    y,
    d,
    m,
    S,
    P,
    E,
    C,
    k,
    w,
    A,
    T,
    R = t + t + 1,
    M = r - 1,
    F = i - 1,
    O = t + 1,
    D = (O * (O + 1)) / 2,
    U = new ja(),
    V = null,
    G = U,
    L = null,
    z = null,
    at = w0[t],
    Z = x0[t];
  for (o = 1; o < R; o++) (G = G.next = new ja()), o === O && (V = G);
  for (G.next = U, v = c = 0, s = 0; s < i; s++) {
    for (
      m = S = P = E = g = f = u = p = 0,
        _ = O * (C = e[c]),
        b = O * (k = e[c + 1]),
        y = O * (w = e[c + 2]),
        d = O * (A = e[c + 3]),
        g += D * C,
        f += D * k,
        u += D * w,
        p += D * A,
        G = U,
        o = 0;
      o < O;
      o++
    )
      (G.r = C), (G.g = k), (G.b = w), (G.a = A), (G = G.next);
    for (o = 1; o < O; o++)
      (l = c + ((M < o ? M : o) << 2)),
        (g += (G.r = C = e[l]) * (T = O - o)),
        (f += (G.g = k = e[l + 1]) * T),
        (u += (G.b = w = e[l + 2]) * T),
        (p += (G.a = A = e[l + 3]) * T),
        (m += C),
        (S += k),
        (P += w),
        (E += A),
        (G = G.next);
    for (L = U, z = V, a = 0; a < r; a++)
      (e[c + 3] = A = (p * at) >> Z),
        A !== 0
          ? ((A = 255 / A),
            (e[c] = ((g * at) >> Z) * A),
            (e[c + 1] = ((f * at) >> Z) * A),
            (e[c + 2] = ((u * at) >> Z) * A))
          : (e[c] = e[c + 1] = e[c + 2] = 0),
        (g -= _),
        (f -= b),
        (u -= y),
        (p -= d),
        (_ -= L.r),
        (b -= L.g),
        (y -= L.b),
        (d -= L.a),
        (l = (v + ((l = a + t + 1) < M ? l : M)) << 2),
        (m += L.r = e[l]),
        (S += L.g = e[l + 1]),
        (P += L.b = e[l + 2]),
        (E += L.a = e[l + 3]),
        (g += m),
        (f += S),
        (u += P),
        (p += E),
        (L = L.next),
        (_ += C = z.r),
        (b += k = z.g),
        (y += w = z.b),
        (d += A = z.a),
        (m -= C),
        (S -= k),
        (P -= w),
        (E -= A),
        (z = z.next),
        (c += 4);
    v += r;
  }
  for (a = 0; a < r; a++) {
    for (
      S = P = E = m = f = u = p = g = 0,
        c = a << 2,
        _ = O * (C = e[c]),
        b = O * (k = e[c + 1]),
        y = O * (w = e[c + 2]),
        d = O * (A = e[c + 3]),
        g += D * C,
        f += D * k,
        u += D * w,
        p += D * A,
        G = U,
        o = 0;
      o < O;
      o++
    )
      (G.r = C), (G.g = k), (G.b = w), (G.a = A), (G = G.next);
    for (h = r, o = 1; o <= t; o++)
      (c = (h + a) << 2),
        (g += (G.r = C = e[c]) * (T = O - o)),
        (f += (G.g = k = e[c + 1]) * T),
        (u += (G.b = w = e[c + 2]) * T),
        (p += (G.a = A = e[c + 3]) * T),
        (m += C),
        (S += k),
        (P += w),
        (E += A),
        (G = G.next),
        o < F && (h += r);
    for (c = a, L = U, z = V, s = 0; s < i; s++)
      (l = c << 2),
        (e[l + 3] = A = (p * at) >> Z),
        A > 0
          ? ((A = 255 / A),
            (e[l] = ((g * at) >> Z) * A),
            (e[l + 1] = ((f * at) >> Z) * A),
            (e[l + 2] = ((u * at) >> Z) * A))
          : (e[l] = e[l + 1] = e[l + 2] = 0),
        (g -= _),
        (f -= b),
        (u -= y),
        (p -= d),
        (_ -= L.r),
        (b -= L.g),
        (y -= L.b),
        (d -= L.a),
        (l = (a + ((l = s + O) < F ? l : F) * r) << 2),
        (g += m += L.r = e[l]),
        (f += S += L.g = e[l + 1]),
        (u += P += L.b = e[l + 2]),
        (p += E += L.a = e[l + 3]),
        (L = L.next),
        (_ += C = z.r),
        (b += k = z.g),
        (y += w = z.b),
        (d += A = z.a),
        (m -= C),
        (S -= k),
        (P -= w),
        (E -= A),
        (z = z.next),
        (c += r);
  }
}
const k0 = function (t) {
  var e = Math.round(this.blurRadius());
  e > 0 && P0(t, e);
};
Ei.Blur = k0;
$a.Factory.addGetterSetter(
  S0.Node,
  "blurRadius",
  0,
  (0, C0.getNumberValidator)(),
  $a.Factory.afterSetFilter
);
var Ri = {};
Object.defineProperty(Ri, "__esModule", { value: !0 });
Ri.Brighten = void 0;
const Wa = K,
  A0 = ot,
  T0 = I,
  E0 = function (n) {
    var t = this.brightness() * 255,
      e = n.data,
      r = e.length,
      i;
    for (i = 0; i < r; i += 4) (e[i] += t), (e[i + 1] += t), (e[i + 2] += t);
  };
Ri.Brighten = E0;
Wa.Factory.addGetterSetter(
  A0.Node,
  "brightness",
  0,
  (0, T0.getNumberValidator)(),
  Wa.Factory.afterSetFilter
);
var Fi = {};
Object.defineProperty(Fi, "__esModule", { value: !0 });
Fi.Contrast = void 0;
const Ka = K,
  R0 = ot,
  F0 = I,
  M0 = function (n) {
    var t = Math.pow((this.contrast() + 100) / 100, 2),
      e = n.data,
      r = e.length,
      i = 150,
      a = 150,
      s = 150,
      o;
    for (o = 0; o < r; o += 4)
      (i = e[o]),
        (a = e[o + 1]),
        (s = e[o + 2]),
        (i /= 255),
        (i -= 0.5),
        (i *= t),
        (i += 0.5),
        (i *= 255),
        (a /= 255),
        (a -= 0.5),
        (a *= t),
        (a += 0.5),
        (a *= 255),
        (s /= 255),
        (s -= 0.5),
        (s *= t),
        (s += 0.5),
        (s *= 255),
        (i = i < 0 ? 0 : i > 255 ? 255 : i),
        (a = a < 0 ? 0 : a > 255 ? 255 : a),
        (s = s < 0 ? 0 : s > 255 ? 255 : s),
        (e[o] = i),
        (e[o + 1] = a),
        (e[o + 2] = s);
  };
Fi.Contrast = M0;
Ka.Factory.addGetterSetter(
  R0.Node,
  "contrast",
  0,
  (0, F0.getNumberValidator)(),
  Ka.Factory.afterSetFilter
);
var Mi = {};
Object.defineProperty(Mi, "__esModule", { value: !0 });
Mi.Emboss = void 0;
const fe = K,
  Ni = ot,
  N0 = ct,
  mo = I,
  O0 = function (n) {
    var t = this.embossStrength() * 10,
      e = this.embossWhiteLevel() * 255,
      r = this.embossDirection(),
      i = this.embossBlend(),
      a = 0,
      s = 0,
      o = n.data,
      l = n.width,
      h = n.height,
      c = l * 4,
      v = h;
    switch (r) {
      case "top-left":
        (a = -1), (s = -1);
        break;
      case "top":
        (a = -1), (s = 0);
        break;
      case "top-right":
        (a = -1), (s = 1);
        break;
      case "right":
        (a = 0), (s = 1);
        break;
      case "bottom-right":
        (a = 1), (s = 1);
        break;
      case "bottom":
        (a = 1), (s = 0);
        break;
      case "bottom-left":
        (a = 1), (s = -1);
        break;
      case "left":
        (a = 0), (s = -1);
        break;
      default:
        N0.Util.error("Unknown emboss direction: " + r);
    }
    do {
      var g = (v - 1) * c,
        f = a;
      v + f < 1 && (f = 0), v + f > h && (f = 0);
      var u = (v - 1 + f) * l * 4,
        p = l;
      do {
        var _ = g + (p - 1) * 4,
          b = s;
        p + b < 1 && (b = 0), p + b > l && (b = 0);
        var y = u + (p - 1 + b) * 4,
          d = o[_] - o[y],
          m = o[_ + 1] - o[y + 1],
          S = o[_ + 2] - o[y + 2],
          P = d,
          E = P > 0 ? P : -P,
          C = m > 0 ? m : -m,
          k = S > 0 ? S : -S;
        if ((C > E && (P = m), k > E && (P = S), (P *= t), i)) {
          var w = o[_] + P,
            A = o[_ + 1] + P,
            T = o[_ + 2] + P;
          (o[_] = w > 255 ? 255 : w < 0 ? 0 : w),
            (o[_ + 1] = A > 255 ? 255 : A < 0 ? 0 : A),
            (o[_ + 2] = T > 255 ? 255 : T < 0 ? 0 : T);
        } else {
          var R = e - P;
          R < 0 ? (R = 0) : R > 255 && (R = 255),
            (o[_] = o[_ + 1] = o[_ + 2] = R);
        }
      } while (--p);
    } while (--v);
  };
Mi.Emboss = O0;
fe.Factory.addGetterSetter(
  Ni.Node,
  "embossStrength",
  0.5,
  (0, mo.getNumberValidator)(),
  fe.Factory.afterSetFilter
);
fe.Factory.addGetterSetter(
  Ni.Node,
  "embossWhiteLevel",
  0.5,
  (0, mo.getNumberValidator)(),
  fe.Factory.afterSetFilter
);
fe.Factory.addGetterSetter(
  Ni.Node,
  "embossDirection",
  "top-left",
  null,
  fe.Factory.afterSetFilter
);
fe.Factory.addGetterSetter(
  Ni.Node,
  "embossBlend",
  !1,
  null,
  fe.Factory.afterSetFilter
);
var Oi = {};
Object.defineProperty(Oi, "__esModule", { value: !0 });
Oi.Enhance = void 0;
const Ya = K,
  G0 = ot,
  L0 = I;
function fn(n, t, e, r, i) {
  var a = e - t,
    s = i - r,
    o;
  return a === 0
    ? r + s / 2
    : s === 0
      ? r
      : ((o = (n - t) / a), (o = s * o + r), o);
}
const D0 = function (n) {
  var t = n.data,
    e = t.length,
    r = t[0],
    i = r,
    a,
    s = t[1],
    o = s,
    l,
    h = t[2],
    c = h,
    v,
    g,
    f = this.enhance();
  if (f !== 0) {
    for (g = 0; g < e; g += 4)
      (a = t[g + 0]),
        a < r ? (r = a) : a > i && (i = a),
        (l = t[g + 1]),
        l < s ? (s = l) : l > o && (o = l),
        (v = t[g + 2]),
        v < h ? (h = v) : v > c && (c = v);
    i === r && ((i = 255), (r = 0)),
      o === s && ((o = 255), (s = 0)),
      c === h && ((c = 255), (h = 0));
    var u, p, _, b, y, d, m, S, P;
    for (
      f > 0
        ? ((p = i + f * (255 - i)),
          (_ = r - f * (r - 0)),
          (y = o + f * (255 - o)),
          (d = s - f * (s - 0)),
          (S = c + f * (255 - c)),
          (P = h - f * (h - 0)))
        : ((u = (i + r) * 0.5),
          (p = i + f * (i - u)),
          (_ = r + f * (r - u)),
          (b = (o + s) * 0.5),
          (y = o + f * (o - b)),
          (d = s + f * (s - b)),
          (m = (c + h) * 0.5),
          (S = c + f * (c - m)),
          (P = h + f * (h - m))),
        g = 0;
      g < e;
      g += 4
    )
      (t[g + 0] = fn(t[g + 0], r, i, _, p)),
        (t[g + 1] = fn(t[g + 1], s, o, d, y)),
        (t[g + 2] = fn(t[g + 2], h, c, P, S));
  }
};
Oi.Enhance = D0;
Ya.Factory.addGetterSetter(
  G0.Node,
  "enhance",
  0,
  (0, L0.getNumberValidator)(),
  Ya.Factory.afterSetFilter
);
var Gi = {};
Object.defineProperty(Gi, "__esModule", { value: !0 });
Gi.Grayscale = void 0;
const I0 = function (n) {
  var t = n.data,
    e = t.length,
    r,
    i;
  for (r = 0; r < e; r += 4)
    (i = 0.34 * t[r] + 0.5 * t[r + 1] + 0.16 * t[r + 2]),
      (t[r] = i),
      (t[r + 1] = i),
      (t[r + 2] = i);
};
Gi.Grayscale = I0;
var Li = {};
Object.defineProperty(Li, "__esModule", { value: !0 });
Li.HSL = void 0;
const Ye = K,
  Wn = ot,
  Kn = I;
Ye.Factory.addGetterSetter(
  Wn.Node,
  "hue",
  0,
  (0, Kn.getNumberValidator)(),
  Ye.Factory.afterSetFilter
);
Ye.Factory.addGetterSetter(
  Wn.Node,
  "saturation",
  0,
  (0, Kn.getNumberValidator)(),
  Ye.Factory.afterSetFilter
);
Ye.Factory.addGetterSetter(
  Wn.Node,
  "luminance",
  0,
  (0, Kn.getNumberValidator)(),
  Ye.Factory.afterSetFilter
);
const U0 = function (n) {
  var t = n.data,
    e = t.length,
    r = 1,
    i = Math.pow(2, this.saturation()),
    a = Math.abs(this.hue() + 360) % 360,
    s = this.luminance() * 127,
    o,
    l = r * i * Math.cos((a * Math.PI) / 180),
    h = r * i * Math.sin((a * Math.PI) / 180),
    c = 0.299 * r + 0.701 * l + 0.167 * h,
    v = 0.587 * r - 0.587 * l + 0.33 * h,
    g = 0.114 * r - 0.114 * l - 0.497 * h,
    f = 0.299 * r - 0.299 * l - 0.328 * h,
    u = 0.587 * r + 0.413 * l + 0.035 * h,
    p = 0.114 * r - 0.114 * l + 0.293 * h,
    _ = 0.299 * r - 0.3 * l + 1.25 * h,
    b = 0.587 * r - 0.586 * l - 1.05 * h,
    y = 0.114 * r + 0.886 * l - 0.2 * h,
    d,
    m,
    S,
    P;
  for (o = 0; o < e; o += 4)
    (d = t[o + 0]),
      (m = t[o + 1]),
      (S = t[o + 2]),
      (P = t[o + 3]),
      (t[o + 0] = c * d + v * m + g * S + s),
      (t[o + 1] = f * d + u * m + p * S + s),
      (t[o + 2] = _ * d + b * m + y * S + s),
      (t[o + 3] = P);
};
Li.HSL = U0;
var Di = {};
Object.defineProperty(Di, "__esModule", { value: !0 });
Di.HSV = void 0;
const Xe = K,
  Yn = ot,
  Xn = I,
  B0 = function (n) {
    var t = n.data,
      e = t.length,
      r = Math.pow(2, this.value()),
      i = Math.pow(2, this.saturation()),
      a = Math.abs(this.hue() + 360) % 360,
      s,
      o = r * i * Math.cos((a * Math.PI) / 180),
      l = r * i * Math.sin((a * Math.PI) / 180),
      h = 0.299 * r + 0.701 * o + 0.167 * l,
      c = 0.587 * r - 0.587 * o + 0.33 * l,
      v = 0.114 * r - 0.114 * o - 0.497 * l,
      g = 0.299 * r - 0.299 * o - 0.328 * l,
      f = 0.587 * r + 0.413 * o + 0.035 * l,
      u = 0.114 * r - 0.114 * o + 0.293 * l,
      p = 0.299 * r - 0.3 * o + 1.25 * l,
      _ = 0.587 * r - 0.586 * o - 1.05 * l,
      b = 0.114 * r + 0.886 * o - 0.2 * l,
      y,
      d,
      m,
      S;
    for (s = 0; s < e; s += 4)
      (y = t[s + 0]),
        (d = t[s + 1]),
        (m = t[s + 2]),
        (S = t[s + 3]),
        (t[s + 0] = h * y + c * d + v * m),
        (t[s + 1] = g * y + f * d + u * m),
        (t[s + 2] = p * y + _ * d + b * m),
        (t[s + 3] = S);
  };
Di.HSV = B0;
Xe.Factory.addGetterSetter(
  Yn.Node,
  "hue",
  0,
  (0, Xn.getNumberValidator)(),
  Xe.Factory.afterSetFilter
);
Xe.Factory.addGetterSetter(
  Yn.Node,
  "saturation",
  0,
  (0, Xn.getNumberValidator)(),
  Xe.Factory.afterSetFilter
);
Xe.Factory.addGetterSetter(
  Yn.Node,
  "value",
  0,
  (0, Xn.getNumberValidator)(),
  Xe.Factory.afterSetFilter
);
var Ii = {};
Object.defineProperty(Ii, "__esModule", { value: !0 });
Ii.Invert = void 0;
const V0 = function (n) {
  var t = n.data,
    e = t.length,
    r;
  for (r = 0; r < e; r += 4)
    (t[r] = 255 - t[r]),
      (t[r + 1] = 255 - t[r + 1]),
      (t[r + 2] = 255 - t[r + 2]);
};
Ii.Invert = V0;
var Ui = {};
Object.defineProperty(Ui, "__esModule", { value: !0 });
Ui.Kaleidoscope = void 0;
const ti = K,
  _o = ot,
  Xa = ct,
  yo = I;
var z0 = function (n, t, e) {
    var r = n.data,
      i = t.data,
      a = n.width,
      s = n.height,
      o = e.polarCenterX || a / 2,
      l = e.polarCenterY || s / 2,
      h,
      c,
      v,
      g = 0,
      f = 0,
      u = 0,
      p = 0,
      _,
      b = Math.sqrt(o * o + l * l);
    (c = a - o),
      (v = s - l),
      (_ = Math.sqrt(c * c + v * v)),
      (b = _ > b ? _ : b);
    var y = s,
      d = a,
      m,
      S,
      P = ((360 / d) * Math.PI) / 180,
      E,
      C;
    for (S = 0; S < d; S += 1)
      for (E = Math.sin(S * P), C = Math.cos(S * P), m = 0; m < y; m += 1)
        (c = Math.floor(o + ((b * m) / y) * C)),
          (v = Math.floor(l + ((b * m) / y) * E)),
          (h = (v * a + c) * 4),
          (g = r[h + 0]),
          (f = r[h + 1]),
          (u = r[h + 2]),
          (p = r[h + 3]),
          (h = (S + m * a) * 4),
          (i[h + 0] = g),
          (i[h + 1] = f),
          (i[h + 2] = u),
          (i[h + 3] = p);
  },
  H0 = function (n, t, e) {
    var r = n.data,
      i = t.data,
      a = n.width,
      s = n.height,
      o = e.polarCenterX || a / 2,
      l = e.polarCenterY || s / 2,
      h,
      c,
      v,
      g,
      f,
      u = 0,
      p = 0,
      _ = 0,
      b = 0,
      y,
      d = Math.sqrt(o * o + l * l);
    (c = a - o),
      (v = s - l),
      (y = Math.sqrt(c * c + v * v)),
      (d = y > d ? y : d);
    var m = s,
      S = a,
      P,
      E,
      C = 0,
      k,
      w;
    for (c = 0; c < a; c += 1)
      for (v = 0; v < s; v += 1)
        (g = c - o),
          (f = v - l),
          (P = (Math.sqrt(g * g + f * f) * m) / d),
          (E = ((Math.atan2(f, g) * 180) / Math.PI + 360 + C) % 360),
          (E = (E * S) / 360),
          (k = Math.floor(E)),
          (w = Math.floor(P)),
          (h = (w * a + k) * 4),
          (u = r[h + 0]),
          (p = r[h + 1]),
          (_ = r[h + 2]),
          (b = r[h + 3]),
          (h = (v * a + c) * 4),
          (i[h + 0] = u),
          (i[h + 1] = p),
          (i[h + 2] = _),
          (i[h + 3] = b);
  };
const $0 = function (n) {
  var t = n.width,
    e = n.height,
    r,
    i,
    a,
    s,
    o,
    l,
    h,
    c,
    v,
    g,
    f = Math.round(this.kaleidoscopePower()),
    u = Math.round(this.kaleidoscopeAngle()),
    p = Math.floor((t * (u % 360)) / 360);
  if (!(f < 1)) {
    var _ = Xa.Util.createCanvasElement();
    (_.width = t), (_.height = e);
    var b = _.getContext("2d").getImageData(0, 0, t, e);
    Xa.Util.releaseCanvas(_),
      z0(n, b, { polarCenterX: t / 2, polarCenterY: e / 2 });
    for (var y = t / Math.pow(2, f); y <= 8; ) (y = y * 2), (f -= 1);
    y = Math.ceil(y);
    var d = y,
      m = 0,
      S = d,
      P = 1;
    for (p + y > t && ((m = d), (S = 0), (P = -1)), i = 0; i < e; i += 1)
      for (r = m; r !== S; r += P)
        (a = Math.round(r + p) % t),
          (v = (t * i + a) * 4),
          (o = b.data[v + 0]),
          (l = b.data[v + 1]),
          (h = b.data[v + 2]),
          (c = b.data[v + 3]),
          (g = (t * i + r) * 4),
          (b.data[g + 0] = o),
          (b.data[g + 1] = l),
          (b.data[g + 2] = h),
          (b.data[g + 3] = c);
    for (i = 0; i < e; i += 1)
      for (d = Math.floor(y), s = 0; s < f; s += 1) {
        for (r = 0; r < d + 1; r += 1)
          (v = (t * i + r) * 4),
            (o = b.data[v + 0]),
            (l = b.data[v + 1]),
            (h = b.data[v + 2]),
            (c = b.data[v + 3]),
            (g = (t * i + d * 2 - r - 1) * 4),
            (b.data[g + 0] = o),
            (b.data[g + 1] = l),
            (b.data[g + 2] = h),
            (b.data[g + 3] = c);
        d *= 2;
      }
    H0(b, n, { polarRotation: 0 });
  }
};
Ui.Kaleidoscope = $0;
ti.Factory.addGetterSetter(
  _o.Node,
  "kaleidoscopePower",
  2,
  (0, yo.getNumberValidator)(),
  ti.Factory.afterSetFilter
);
ti.Factory.addGetterSetter(
  _o.Node,
  "kaleidoscopeAngle",
  0,
  (0, yo.getNumberValidator)(),
  ti.Factory.afterSetFilter
);
var Bi = {};
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.Mask = void 0;
const qa = K,
  j0 = ot,
  W0 = I;
function Hr(n, t, e) {
  var r = (e * n.width + t) * 4,
    i = [];
  return i.push(n.data[r++], n.data[r++], n.data[r++], n.data[r++]), i;
}
function ur(n, t) {
  return Math.sqrt(
    Math.pow(n[0] - t[0], 2) +
      Math.pow(n[1] - t[1], 2) +
      Math.pow(n[2] - t[2], 2)
  );
}
function K0(n) {
  for (var t = [0, 0, 0], e = 0; e < n.length; e++)
    (t[0] += n[e][0]), (t[1] += n[e][1]), (t[2] += n[e][2]);
  return (t[0] /= n.length), (t[1] /= n.length), (t[2] /= n.length), t;
}
function Y0(n, t) {
  var e = Hr(n, 0, 0),
    r = Hr(n, n.width - 1, 0),
    i = Hr(n, 0, n.height - 1),
    a = Hr(n, n.width - 1, n.height - 1),
    s = t || 10;
  if (ur(e, r) < s && ur(r, a) < s && ur(a, i) < s && ur(i, e) < s) {
    for (var o = K0([r, e, a, i]), l = [], h = 0; h < n.width * n.height; h++) {
      var c = ur(o, [n.data[h * 4], n.data[h * 4 + 1], n.data[h * 4 + 2]]);
      l[h] = c < s ? 0 : 255;
    }
    return l;
  }
}
function X0(n, t) {
  for (var e = 0; e < n.width * n.height; e++) n.data[4 * e + 3] = t[e];
}
function q0(n, t, e) {
  for (
    var r = [1, 1, 1, 1, 0, 1, 1, 1, 1],
      i = Math.round(Math.sqrt(r.length)),
      a = Math.floor(i / 2),
      s = [],
      o = 0;
    o < e;
    o++
  )
    for (var l = 0; l < t; l++) {
      for (var h = o * t + l, c = 0, v = 0; v < i; v++)
        for (var g = 0; g < i; g++) {
          var f = o + v - a,
            u = l + g - a;
          if (f >= 0 && f < e && u >= 0 && u < t) {
            var p = f * t + u,
              _ = r[v * i + g];
            c += n[p] * _;
          }
        }
      s[h] = c === 255 * 8 ? 255 : 0;
    }
  return s;
}
function Q0(n, t, e) {
  for (
    var r = [1, 1, 1, 1, 1, 1, 1, 1, 1],
      i = Math.round(Math.sqrt(r.length)),
      a = Math.floor(i / 2),
      s = [],
      o = 0;
    o < e;
    o++
  )
    for (var l = 0; l < t; l++) {
      for (var h = o * t + l, c = 0, v = 0; v < i; v++)
        for (var g = 0; g < i; g++) {
          var f = o + v - a,
            u = l + g - a;
          if (f >= 0 && f < e && u >= 0 && u < t) {
            var p = f * t + u,
              _ = r[v * i + g];
            c += n[p] * _;
          }
        }
      s[h] = c >= 255 * 4 ? 255 : 0;
    }
  return s;
}
function J0(n, t, e) {
  for (
    var r = [
        0.1111111111111111, 0.1111111111111111, 0.1111111111111111,
        0.1111111111111111, 0.1111111111111111, 0.1111111111111111,
        0.1111111111111111, 0.1111111111111111, 0.1111111111111111,
      ],
      i = Math.round(Math.sqrt(r.length)),
      a = Math.floor(i / 2),
      s = [],
      o = 0;
    o < e;
    o++
  )
    for (var l = 0; l < t; l++) {
      for (var h = o * t + l, c = 0, v = 0; v < i; v++)
        for (var g = 0; g < i; g++) {
          var f = o + v - a,
            u = l + g - a;
          if (f >= 0 && f < e && u >= 0 && u < t) {
            var p = f * t + u,
              _ = r[v * i + g];
            c += n[p] * _;
          }
        }
      s[h] = c;
    }
  return s;
}
const Z0 = function (n) {
  var t = this.threshold(),
    e = Y0(n, t);
  return (
    e &&
      ((e = q0(e, n.width, n.height)),
      (e = Q0(e, n.width, n.height)),
      (e = J0(e, n.width, n.height)),
      X0(n, e)),
    n
  );
};
Bi.Mask = Z0;
qa.Factory.addGetterSetter(
  j0.Node,
  "threshold",
  0,
  (0, W0.getNumberValidator)(),
  qa.Factory.afterSetFilter
);
var Vi = {};
Object.defineProperty(Vi, "__esModule", { value: !0 });
Vi.Noise = void 0;
const Qa = K,
  td = ot,
  ed = I,
  rd = function (n) {
    var t = this.noise() * 255,
      e = n.data,
      r = e.length,
      i = t / 2,
      a;
    for (a = 0; a < r; a += 4)
      (e[a + 0] += i - 2 * i * Math.random()),
        (e[a + 1] += i - 2 * i * Math.random()),
        (e[a + 2] += i - 2 * i * Math.random());
  };
Vi.Noise = rd;
Qa.Factory.addGetterSetter(
  td.Node,
  "noise",
  0.2,
  (0, ed.getNumberValidator)(),
  Qa.Factory.afterSetFilter
);
var zi = {};
Object.defineProperty(zi, "__esModule", { value: !0 });
zi.Pixelate = void 0;
const Ja = K,
  id = ct,
  nd = ot,
  ad = I,
  sd = function (n) {
    var t = Math.ceil(this.pixelSize()),
      e = n.width,
      r = n.height,
      i,
      a,
      s,
      o,
      l,
      h,
      c,
      v = Math.ceil(e / t),
      g = Math.ceil(r / t),
      f,
      u,
      p,
      _,
      b,
      y,
      d,
      m = n.data;
    if (t <= 0) {
      id.Util.error("pixelSize value can not be <= 0");
      return;
    }
    for (b = 0; b < v; b += 1)
      for (y = 0; y < g; y += 1) {
        for (
          o = 0,
            l = 0,
            h = 0,
            c = 0,
            f = b * t,
            u = f + t,
            p = y * t,
            _ = p + t,
            d = 0,
            i = f;
          i < u;
          i += 1
        )
          if (!(i >= e))
            for (a = p; a < _; a += 1)
              a >= r ||
                ((s = (e * a + i) * 4),
                (o += m[s + 0]),
                (l += m[s + 1]),
                (h += m[s + 2]),
                (c += m[s + 3]),
                (d += 1));
        for (o = o / d, l = l / d, h = h / d, c = c / d, i = f; i < u; i += 1)
          if (!(i >= e))
            for (a = p; a < _; a += 1)
              a >= r ||
                ((s = (e * a + i) * 4),
                (m[s + 0] = o),
                (m[s + 1] = l),
                (m[s + 2] = h),
                (m[s + 3] = c));
      }
  };
zi.Pixelate = sd;
Ja.Factory.addGetterSetter(
  nd.Node,
  "pixelSize",
  8,
  (0, ad.getNumberValidator)(),
  Ja.Factory.afterSetFilter
);
var Hi = {};
Object.defineProperty(Hi, "__esModule", { value: !0 });
Hi.Posterize = void 0;
const Za = K,
  od = ot,
  ld = I,
  hd = function (n) {
    var t = Math.round(this.levels() * 254) + 1,
      e = n.data,
      r = e.length,
      i = 255 / t,
      a;
    for (a = 0; a < r; a += 1) e[a] = Math.floor(e[a] / i) * i;
  };
Hi.Posterize = hd;
Za.Factory.addGetterSetter(
  od.Node,
  "levels",
  0.5,
  (0, ld.getNumberValidator)(),
  Za.Factory.afterSetFilter
);
var $i = {};
Object.defineProperty($i, "__esModule", { value: !0 });
$i.RGB = void 0;
const ei = K,
  qn = ot,
  cd = I,
  dd = function (n) {
    var t = n.data,
      e = t.length,
      r = this.red(),
      i = this.green(),
      a = this.blue(),
      s,
      o;
    for (s = 0; s < e; s += 4)
      (o = (0.34 * t[s] + 0.5 * t[s + 1] + 0.16 * t[s + 2]) / 255),
        (t[s] = o * r),
        (t[s + 1] = o * i),
        (t[s + 2] = o * a),
        (t[s + 3] = t[s + 3]);
  };
$i.RGB = dd;
ei.Factory.addGetterSetter(qn.Node, "red", 0, function (n) {
  return (this._filterUpToDate = !1), n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
});
ei.Factory.addGetterSetter(qn.Node, "green", 0, function (n) {
  return (this._filterUpToDate = !1), n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
});
ei.Factory.addGetterSetter(
  qn.Node,
  "blue",
  0,
  cd.RGBComponent,
  ei.Factory.afterSetFilter
);
var ji = {};
Object.defineProperty(ji, "__esModule", { value: !0 });
ji.RGBA = void 0;
const Sr = K,
  Wi = ot,
  ud = I,
  fd = function (n) {
    var t = n.data,
      e = t.length,
      r = this.red(),
      i = this.green(),
      a = this.blue(),
      s = this.alpha(),
      o,
      l;
    for (o = 0; o < e; o += 4)
      (l = 1 - s),
        (t[o] = r * s + t[o] * l),
        (t[o + 1] = i * s + t[o + 1] * l),
        (t[o + 2] = a * s + t[o + 2] * l);
  };
ji.RGBA = fd;
Sr.Factory.addGetterSetter(Wi.Node, "red", 0, function (n) {
  return (this._filterUpToDate = !1), n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
});
Sr.Factory.addGetterSetter(Wi.Node, "green", 0, function (n) {
  return (this._filterUpToDate = !1), n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
});
Sr.Factory.addGetterSetter(
  Wi.Node,
  "blue",
  0,
  ud.RGBComponent,
  Sr.Factory.afterSetFilter
);
Sr.Factory.addGetterSetter(Wi.Node, "alpha", 1, function (n) {
  return (this._filterUpToDate = !1), n > 1 ? 1 : n < 0 ? 0 : n;
});
var Ki = {};
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.Sepia = void 0;
const gd = function (n) {
  var t = n.data,
    e = t.length,
    r,
    i,
    a,
    s;
  for (r = 0; r < e; r += 4)
    (i = t[r + 0]),
      (a = t[r + 1]),
      (s = t[r + 2]),
      (t[r + 0] = Math.min(255, i * 0.393 + a * 0.769 + s * 0.189)),
      (t[r + 1] = Math.min(255, i * 0.349 + a * 0.686 + s * 0.168)),
      (t[r + 2] = Math.min(255, i * 0.272 + a * 0.534 + s * 0.131));
};
Ki.Sepia = gd;
var Yi = {};
Object.defineProperty(Yi, "__esModule", { value: !0 });
Yi.Solarize = void 0;
const pd = function (n) {
  var t = n.data,
    e = n.width,
    r = n.height,
    i = e * 4,
    a = r;
  do {
    var s = (a - 1) * i,
      o = e;
    do {
      var l = s + (o - 1) * 4,
        h = t[l],
        c = t[l + 1],
        v = t[l + 2];
      h > 127 && (h = 255 - h),
        c > 127 && (c = 255 - c),
        v > 127 && (v = 255 - v),
        (t[l] = h),
        (t[l + 1] = c),
        (t[l + 2] = v);
    } while (--o);
  } while (--a);
};
Yi.Solarize = pd;
var Xi = {};
Object.defineProperty(Xi, "__esModule", { value: !0 });
Xi.Threshold = void 0;
const ts = K,
  vd = ot,
  md = I,
  _d = function (n) {
    var t = this.threshold() * 255,
      e = n.data,
      r = e.length,
      i;
    for (i = 0; i < r; i += 1) e[i] = e[i] < t ? 0 : 255;
  };
Xi.Threshold = _d;
ts.Factory.addGetterSetter(
  vd.Node,
  "threshold",
  0.5,
  (0, md.getNumberValidator)(),
  ts.Factory.afterSetFilter
);
Object.defineProperty(ni, "__esModule", { value: !0 });
ni.Konva = void 0;
const es = Is,
  yd = ci,
  bd = fi,
  Sd = vi,
  Cd = mi,
  wd = _i,
  rs = Ke,
  xd = Fr,
  Pd = ir,
  kd = Nr,
  Ad = Si,
  Td = Ci,
  Ed = wi,
  Rd = xi,
  Fd = we,
  Md = Pi,
  Nd = ki,
  Od = Ai,
  Gd = Ei,
  Ld = Ri,
  Dd = Fi,
  Id = Mi,
  Ud = Oi,
  Bd = Gi,
  Vd = Li,
  zd = Di,
  Hd = Ii,
  $d = Ui,
  jd = Bi,
  Wd = Vi,
  Kd = zi,
  Yd = Hi,
  Xd = $i,
  qd = ji,
  Qd = Ki,
  Jd = Yi,
  Zd = Xi;
ni.Konva = es.Konva.Util._assign(es.Konva, {
  Arc: yd.Arc,
  Arrow: bd.Arrow,
  Circle: Sd.Circle,
  Ellipse: Cd.Ellipse,
  Image: wd.Image,
  Label: rs.Label,
  Tag: rs.Tag,
  Line: xd.Line,
  Path: Pd.Path,
  Rect: kd.Rect,
  RegularPolygon: Ad.RegularPolygon,
  Ring: Td.Ring,
  Sprite: Ed.Sprite,
  Star: Rd.Star,
  Text: Fd.Text,
  TextPath: Md.TextPath,
  Transformer: Nd.Transformer,
  Wedge: Od.Wedge,
  Filters: {
    Blur: Gd.Blur,
    Brighten: Ld.Brighten,
    Contrast: Dd.Contrast,
    Emboss: Id.Emboss,
    Enhance: Ud.Enhance,
    Grayscale: Bd.Grayscale,
    HSL: Vd.HSL,
    HSV: zd.HSV,
    Invert: Hd.Invert,
    Kaleidoscope: $d.Kaleidoscope,
    Mask: jd.Mask,
    Noise: Wd.Noise,
    Pixelate: Kd.Pixelate,
    Posterize: Yd.Posterize,
    RGB: Xd.RGB,
    RGBA: qd.RGBA,
    Sepia: Qd.Sepia,
    Solarize: Jd.Solarize,
    Threshold: Zd.Threshold,
  },
});
var tu = Ln.exports;
Object.defineProperty(tu, "__esModule", { value: !0 });
const eu = ni;
Ln.exports = eu.Konva;
var ru = Ln.exports;
const Or = nh(ru),
  iu = [
    "mouseover",
    "mouseout",
    "mouseenter",
    "mouseleave",
    "mousemove",
    "mousedown",
    "mouseup",
    "wheel",
    "click",
    "dblclick",
    "touchstart",
    "touchmove",
    "touchend",
    "tap",
    "dbltap",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointercancel",
    "pointerover",
    "pointerenter",
    "pointerout",
    "pointerleave",
    "pointerclick",
    "pointerdblclick",
    "dragstart",
    "dragmove",
    "dragend",
    "transformstart",
    "transform",
    "transformend",
  ];
function Gr(n, t) {
  iu.forEach((e) => {
    t.on(e, (r) => {
      n(e, r, { cancelable: !0 }) || (r.cancelBubble = !0);
    });
  });
}
const ri = [
  "svelte-konva-stage",
  "svelte-konva-layer",
  "svelte-konva-group",
  "svelte-konva-label",
];
var Cr;
(function (n) {
  (n[(n.Stage = 0)] = "Stage"),
    (n[(n.Layer = 1)] = "Layer"),
    (n[(n.Group = 2)] = "Group"),
    (n[(n.Label = 3)] = "Label");
})(Cr || (Cr = {}));
const nu =
    "svelte-konva: Component does not have any parent container. Please make sure that the component is wrapped inside a Layer or Group.",
  au = "svelte-konva: A Layer needs to have a Stage as parent.";
function bo(n, t) {
  ri.forEach((e) => {
    gr(e, null);
  }),
    gr(ri[n], t);
}
function Qn() {
  for (let n = 1; n < 4; n++) {
    const t = mr(ri[n]);
    if (t) return t;
  }
  throw new Error(nu);
}
function su() {
  const n = mr(ri[Cr.Stage]);
  if (n) return n;
  throw new Error(au);
}
function Zt(n, t) {
  for (const e in n)
    Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
}
function ou(n, t, e) {
  let r,
    { config: i } = t,
    { handle: a = new Or.Circle(i) } = t,
    { staticConfig: s = !1 } = t,
    o = Qn();
  Nt(n, o, (h) => e(4, (r = h)));
  let l = Tr();
  return (
    xe(() => {
      r.add(a),
        s ||
          (a.on("transformend", () => {
            Zt(i, a.getAttrs()), e(1, i);
          }),
          a.on("dragend", () => {
            Zt(i, a.getAttrs()), e(1, i);
          })),
        Gr(l, a);
    }),
    Qe(() => {
      a.destroy();
    }),
    (n.$$set = (h) => {
      "config" in h && e(1, (i = h.config)),
        "handle" in h && e(2, (a = h.handle)),
        "staticConfig" in h && e(3, (s = h.staticConfig));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 6 && a.setAttrs(i);
    }),
    [o, i, a, s]
  );
}
class lu extends Rt {
  constructor(t) {
    super(),
      Et(this, t, ou, null, Pt, { config: 1, handle: 2, staticConfig: 3 });
  }
}
function is(n) {
  let t;
  const e = n[6].default,
    r = xr(e, n, n[5], null);
  return {
    c() {
      r && r.c();
    },
    m(i, a) {
      r && r.m(i, a), (t = !0);
    },
    p(i, a) {
      r &&
        r.p &&
        (!t || a & 32) &&
        kr(r, e, i, i[5], t ? Pr(e, i[5], a, null) : Ar(i[5]), null);
    },
    i(i) {
      t || ($(r, i), (t = !0));
    },
    o(i) {
      Y(r, i), (t = !1);
    },
    d(i) {
      r && r.d(i);
    },
  };
}
function hu(n) {
  let t,
    e,
    r = n[0] && is(n);
  return {
    c() {
      r && r.c(), (t = pe());
    },
    m(i, a) {
      r && r.m(i, a), gt(i, t, a), (e = !0);
    },
    p(i, [a]) {
      i[0]
        ? r
          ? (r.p(i, a), a & 1 && $(r, 1))
          : ((r = is(i)), r.c(), $(r, 1), r.m(t.parentNode, t))
        : r &&
          (Vt(),
          Y(r, 1, 1, () => {
            r = null;
          }),
          zt());
    },
    i(i) {
      e || ($(r), (e = !0));
    },
    o(i) {
      Y(r), (e = !1);
    },
    d(i) {
      i && ht(t), r && r.d(i);
    },
  };
}
function cu(n, t, e) {
  let r,
    { $$slots: i = {}, $$scope: a } = t,
    { config: s = {} } = t,
    { handle: o = new Or.Layer(s) } = t,
    { staticConfig: l = !1 } = t,
    h = qt(null),
    c = Tr(),
    v = !1,
    g = su();
  return (
    Nt(n, g, (f) => e(7, (r = f))),
    xe(() => {
      r.add(o),
        l ||
          (o.on("transformend", () => {
            Zt(s, o.getAttrs()), e(2, s);
          }),
          o.on("dragend", () => {
            Zt(s, o.getAttrs()), e(2, s);
          })),
        Gr(c, o),
        h.set(o),
        e(0, (v = !0));
    }),
    Qe(() => {
      o && o.destroy();
    }),
    bo(Cr.Layer, h),
    (n.$$set = (f) => {
      "config" in f && e(2, (s = f.config)),
        "handle" in f && e(3, (o = f.handle)),
        "staticConfig" in f && e(4, (l = f.staticConfig)),
        "$$scope" in f && e(5, (a = f.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 12 && o && o.setAttrs(s);
    }),
    [v, g, s, o, l, a, i]
  );
}
class du extends Rt {
  constructor(t) {
    super(), Et(this, t, cu, hu, Pt, { config: 2, handle: 3, staticConfig: 4 });
  }
}
function uu(n, t, e) {
  let r,
    { config: i } = t,
    { handle: a = new Or.Line(i) } = t,
    { staticConfig: s = !1 } = t,
    o = Qn();
  Nt(n, o, (h) => e(4, (r = h)));
  let l = Tr();
  return (
    xe(() => {
      r.add(a),
        s ||
          (a.on("transformend", () => {
            Zt(i, a.getAttrs()), e(1, i);
          }),
          a.on("dragend", () => {
            Zt(i, a.getAttrs()), e(1, i);
          })),
        Gr(l, a);
    }),
    Qe(() => {
      a.destroy();
    }),
    (n.$$set = (h) => {
      "config" in h && e(1, (i = h.config)),
        "handle" in h && e(2, (a = h.handle)),
        "staticConfig" in h && e(3, (s = h.staticConfig));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 6 && a.setAttrs(i);
    }),
    [o, i, a, s]
  );
}
class fu extends Rt {
  constructor(t) {
    super(),
      Et(this, t, uu, null, Pt, { config: 1, handle: 2, staticConfig: 3 });
  }
}
function ns(n) {
  let t;
  const e = n[7].default,
    r = xr(e, n, n[6], null);
  return {
    c() {
      r && r.c();
    },
    m(i, a) {
      r && r.m(i, a), (t = !0);
    },
    p(i, a) {
      r &&
        r.p &&
        (!t || a & 64) &&
        kr(r, e, i, i[6], t ? Pr(e, i[6], a, null) : Ar(i[6]), null);
    },
    i(i) {
      t || ($(r, i), (t = !0));
    },
    o(i) {
      Y(r, i), (t = !1);
    },
    d(i) {
      r && r.d(i);
    },
  };
}
function gu(n) {
  let t,
    e,
    r = n[1] && ns(n),
    i = [n[2]],
    a = {};
  for (let s = 0; s < i.length; s += 1) a = ue(a, i[s]);
  return {
    c() {
      (t = mt("div")), r && r.c(), ea(t, a);
    },
    m(s, o) {
      gt(s, t, o), r && r.m(t, null), n[8](t), (e = !0);
    },
    p(s, [o]) {
      s[1]
        ? r
          ? (r.p(s, o), o & 2 && $(r, 1))
          : ((r = ns(s)), r.c(), $(r, 1), r.m(t, null))
        : r &&
          (Vt(),
          Y(r, 1, 1, () => {
            r = null;
          }),
          zt()),
        ea(t, (a = mn(i, [o & 4 && s[2]])));
    },
    i(s) {
      e || ($(r), (e = !0));
    },
    o(s) {
      Y(r), (e = !1);
    },
    d(s) {
      s && ht(t), r && r.d(), n[8](null);
    },
  };
}
function pu(n, t, e) {
  const r = ["config", "handle", "staticConfig"];
  let i = ta(t, r),
    { $$slots: a = {}, $$scope: s } = t,
    { config: o } = t,
    { handle: l = null } = t,
    { staticConfig: h = !1 } = t,
    c = qt(null),
    v,
    g = Tr(),
    f = !1;
  xe(() => {
    e(4, (l = new Or.Stage({ container: v, ...o }))),
      h ||
        l.on("dragend", () => {
          Zt(o, l.getAttrs()), e(3, o);
        }),
      Gr(g, l),
      c.set(l),
      e(1, (f = !0));
  }),
    Qe(() => {
      l && l.destroy();
    }),
    bo(Cr.Stage, c);
  function u(p) {
    _r[p ? "unshift" : "push"](() => {
      (v = p), e(0, v);
    });
  }
  return (
    (n.$$set = (p) => {
      (t = ue(ue({}, t), gn(p))),
        e(2, (i = ta(t, r))),
        "config" in p && e(3, (o = p.config)),
        "handle" in p && e(4, (l = p.handle)),
        "staticConfig" in p && e(5, (h = p.staticConfig)),
        "$$scope" in p && e(6, (s = p.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 24 && l && l.setAttrs(o);
    }),
    [v, f, i, o, l, h, s, a, u]
  );
}
class vu extends Rt {
  constructor(t) {
    super(), Et(this, t, pu, gu, Pt, { config: 3, handle: 4, staticConfig: 5 });
  }
}
function mu(n, t, e) {
  let r,
    { config: i } = t,
    { handle: a = new Or.Text(i) } = t,
    { staticConfig: s = !1 } = t,
    o = Qn();
  Nt(n, o, (h) => e(4, (r = h)));
  let l = Tr();
  return (
    xe(() => {
      r.add(a),
        s ||
          (a.on("transformend", () => {
            Zt(i, a.getAttrs()), e(1, i);
          }),
          a.on("dragend", () => {
            Zt(i, a.getAttrs()), e(1, i);
          })),
        Gr(l, a);
    }),
    Qe(() => {
      a.destroy();
    }),
    (n.$$set = (h) => {
      "config" in h && e(1, (i = h.config)),
        "handle" in h && e(2, (a = h.handle)),
        "staticConfig" in h && e(3, (s = h.staticConfig));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 6 && a.setAttrs(i);
    }),
    [o, i, a, s]
  );
}
class So extends Rt {
  constructor(t) {
    super(),
      Et(this, t, mu, null, Pt, { config: 1, handle: 2, staticConfig: 3 });
  }
}
const pr = qt([]),
  ii = qt(0),
  Qt = 300,
  de = 300,
  Co = (n, t, e) => {
    pr.update((r) => {
      const i = [...r];
      return (i[e] = { x: Number(n), y: Number(t), letter: i[e].letter }), i;
    });
  },
  wo = (n, t, e, r) => {
    const i = e - n,
      a = r - t;
    return Math.sqrt(i * i + a * a);
  },
  _u = (n, t, e, r) => {
    const i = t.x - n.x,
      a = t.y - n.y,
      s = i / e,
      o = a / e;
    return { x: n.x + s * r, y: n.y + o * r, letter: "" };
  };
function yu(n) {
  let t, e, r, i, a, s, o, l, h, c, v, g, f, u, p, _, b;
  return {
    c() {
      (t = mt("div")),
        (t.textContent = `${n[3].letter}`),
        (e = Ft()),
        (r = mt("div")),
        (i = mt("p")),
        (i.textContent = "x"),
        (a = Ft()),
        (s = mt("input")),
        (o = Ft()),
        (l = mt("p")),
        (l.textContent = "y"),
        (h = Ft()),
        (c = mt("input")),
        (v = Ft()),
        (g = mt("div")),
        (f = mt("h4")),
        (f.textContent = `${n[4]}:`),
        (u = Ft()),
        (p = mt("input")),
        St(t, "class", "flex justify-center items-center m-2"),
        St(
          s,
          "class",
          "w-36 border-2 border-gray-300 focus:border-blue-500 rounded-md p-1"
        ),
        St(s, "type", "number"),
        St(s, "placeholder", "Tilføj x værdi"),
        St(
          c,
          "class",
          "w-36 border-2 border-gray-300 focus:border-blue-500 rounded-md p-1"
        ),
        St(c, "type", "number"),
        St(c, "placeholder", "Tilføj y værdi"),
        St(
          p,
          "class",
          "w-36 border-2 border-gray-300 focus:border-blue-500 rounded-md p-1"
        ),
        St(p, "type", "number"),
        St(g, "class", "flex flexrow"),
        St(r, "class", "flex flex-row");
    },
    m(y, d) {
      gt(y, t, d),
        gt(y, e, d),
        gt(y, r, d),
        vt(r, i),
        vt(r, a),
        vt(r, s),
        he(s, n[0]),
        vt(r, o),
        vt(r, l),
        vt(r, h),
        vt(r, c),
        he(c, n[1]),
        vt(r, v),
        vt(r, g),
        vt(g, f),
        vt(g, u),
        vt(g, p),
        he(p, n[2]),
        _ ||
          ((b = [
            fr(s, "input", n[8]),
            fr(c, "input", n[9]),
            fr(p, "input", n[10]),
            fr(p, "change", n[5]),
          ]),
          (_ = !0));
    },
    p(y, [d]) {
      d & 1 && He(s.value) !== y[0] && he(s, y[0]),
        d & 2 && He(c.value) !== y[1] && he(c, y[1]),
        d & 4 && He(p.value) !== y[2] && he(p, y[2]);
    },
    i: Q,
    o: Q,
    d(y) {
      y && (ht(t), ht(e), ht(r)), (_ = !1), ge(b);
    },
  };
}
function bu(n, t, e) {
  let r;
  Nt(n, pr, (y) => e(12, (r = y)));
  let { x: i = 0 } = t,
    { y: a = 0 } = t,
    { letter: s = "" } = t,
    { index: o = 0 } = t;
  const l = (o + 1) % r.length;
  let h = r[o],
    c = r[l],
    v = wo(h.x, h.y, c.x, c.y),
    g = v;
  const f = r[o].letter + "-" + r[l].letter,
    u = () => {
      const y = _u(r[o], r[l], g, v);
      console.log("prevDistance: " + g, "new distance" + v),
        console.log("new coordinates: " + y.x + " " + y.y),
        Co(y.x, y.y, l),
        (g = v);
    };
  function p() {
    (i = He(this.value)), e(0, i);
  }
  function _() {
    (a = He(this.value)), e(1, a);
  }
  function b() {
    (v = He(this.value)), e(2, v);
  }
  return (
    (n.$$set = (y) => {
      "x" in y && e(0, (i = y.x)),
        "y" in y && e(1, (a = y.y)),
        "letter" in y && e(6, (s = y.letter)),
        "index" in y && e(7, (o = y.index));
    }),
    [i, a, v, h, f, u, s, o, p, _, b]
  );
}
class Su extends Rt {
  constructor(t) {
    super(), Et(this, t, bu, yu, Pt, { x: 0, y: 1, letter: 6, index: 7 });
  }
}
function Cu(n) {
  let t,
    e,
    r,
    i,
    a = {
      config: {
        x: Qt,
        y: de,
        points: [n[0].x, -n[0].y, n[1].x, -n[1].y],
        tension: 0.5,
        closed: !0,
        stroke: "black",
        fillLinearGradientStartPoint: { x: -50, y: -50 },
        fillLinearGradientEndPoint: { x: 50, y: 50 },
        fillLinearGradientColorStops: [0, "red", 1, "yellow"],
      },
    };
  (t = new fu({ props: a })), n[6](t);
  let s = { config: { x: n[5].x - 8, y: n[5].y, text: n[4] + " cm" } };
  return (
    (r = new So({ props: s })),
    n[7](r),
    {
      c() {
        At(t.$$.fragment), (e = Ft()), At(r.$$.fragment);
      },
      m(o, l) {
        wt(t, o, l), gt(o, e, l), wt(r, o, l), (i = !0);
      },
      p(o, [l]) {
        const h = {};
        l & 3 &&
          (h.config = {
            x: Qt,
            y: de,
            points: [o[0].x, -o[0].y, o[1].x, -o[1].y],
            tension: 0.5,
            closed: !0,
            stroke: "black",
            fillLinearGradientStartPoint: { x: -50, y: -50 },
            fillLinearGradientEndPoint: { x: 50, y: 50 },
            fillLinearGradientColorStops: [0, "red", 1, "yellow"],
          }),
          t.$set(h);
        const c = {};
        l & 48 && (c.config = { x: o[5].x - 8, y: o[5].y, text: o[4] + " cm" }),
          r.$set(c);
      },
      i(o) {
        i || ($(t.$$.fragment, o), $(r.$$.fragment, o), (i = !0));
      },
      o(o) {
        Y(t.$$.fragment, o), Y(r.$$.fragment, o), (i = !1);
      },
      d(o) {
        o && ht(e), n[6](null), xt(t, o), n[7](null), xt(r, o);
      },
    }
  );
}
function wu(n, t, e) {
  let r,
    i,
    { point1: a = { x: 0, y: 0, letter: "" } } = t,
    { point2: s = { x: 0, y: 0, letter: "" } } = t,
    o,
    l;
  xe(() => {
    setTimeout(() => {
      (l && o) || console.error("Konva nodes are not initialized.");
    }, 10);
  });
  function h(v) {
    _r[v ? "unshift" : "push"](() => {
      (o = v), e(2, o);
    });
  }
  function c(v) {
    _r[v ? "unshift" : "push"](() => {
      (l = v), e(3, l);
    });
  }
  return (
    (n.$$set = (v) => {
      "point1" in v && e(0, (a = v.point1)),
        "point2" in v && e(1, (s = v.point2));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 3 &&
        e(5, (r = { x: (a.x + s.x) / 2 + Qt, y: (-a.y - s.y) / 2 + de })),
        n.$$.dirty & 3 && e(4, (i = wo(a.x, a.y, s.x, s.y)));
    }),
    [a, s, o, l, i, r, h, c]
  );
}
class xu extends Rt {
  constructor(t) {
    super(), Et(this, t, wu, Cu, Pt, { point1: 0, point2: 1 });
  }
}
function Pu(n) {
  let t, e, r, i, a, s;
  return {
    c() {
      (t = mt("div")),
        (e = mt("h4")),
        (e.textContent = "Antal hjørner:"),
        (r = Ft()),
        (i = mt("input")),
        St(i, "placeholder", "antal hjørner"),
        St(t, "class", "flex flex-col justify-center items-center m-10");
    },
    m(o, l) {
      gt(o, t, l),
        vt(t, e),
        vt(t, r),
        vt(t, i),
        he(i, n[0]),
        a || ((s = fr(i, "input", n[1])), (a = !0));
    },
    p(o, [l]) {
      l & 1 && i.value !== o[0] && he(i, o[0]);
    },
    i: Q,
    o: Q,
    d(o) {
      o && ht(t), (a = !1), s();
    },
  };
}
function ku(n, t, e) {
  let r;
  Nt(n, ii, (a) => e(0, (r = a)));
  function i() {
    (r = this.value), ii.set(r);
  }
  return [r, i];
}
class Au extends Rt {
  constructor(t) {
    super(), Et(this, t, ku, Pu, Pt, {});
  }
}
function Tu(n) {
  let t, e, r, i;
  return (
    (t = new So({
      props: {
        config: { x: Qt + n[0].x - 4, y: de - n[0].y + 12, text: n[0].letter },
      },
    })),
    (r = new lu({
      props: {
        config: {
          x: Qt + n[0].x,
          y: de - n[0].y,
          radius: 10,
          stroke: "red",
          strokeWidth: 5,
          draggable: !0,
        },
      },
    })),
    r.$on("dragend", n[1]),
    {
      c() {
        At(t.$$.fragment), (e = Ft()), At(r.$$.fragment);
      },
      m(a, s) {
        wt(t, a, s), gt(a, e, s), wt(r, a, s), (i = !0);
      },
      p(a, [s]) {
        const o = {};
        s & 1 &&
          (o.config = {
            x: Qt + a[0].x - 4,
            y: de - a[0].y + 12,
            text: a[0].letter,
          }),
          t.$set(o);
        const l = {};
        s & 1 &&
          (l.config = {
            x: Qt + a[0].x,
            y: de - a[0].y,
            radius: 10,
            stroke: "red",
            strokeWidth: 5,
            draggable: !0,
          }),
          r.$set(l);
      },
      i(a) {
        i || ($(t.$$.fragment, a), $(r.$$.fragment, a), (i = !0));
      },
      o(a) {
        Y(t.$$.fragment, a), Y(r.$$.fragment, a), (i = !1);
      },
      d(a) {
        a && ht(e), xt(t, a), xt(r, a);
      },
    }
  );
}
function Eu(n, t, e) {
  let { cornerPoint: r = { x: 0, y: 0, letter: "" } } = t,
    { index: i = 0 } = t;
  const a = (s) => {
    const o = s.detail.target.x(),
      l = s.detail.target.y();
    console.log("x us : " + o, "y is :" + l),
      console.log("x offset is;: " + Qt),
      Co(o - Qt, de - l, i),
      console.log("you even here?");
  };
  return (
    (n.$$set = (s) => {
      "cornerPoint" in s && e(0, (r = s.cornerPoint)),
        "index" in s && e(2, (i = s.index));
    }),
    [r, a, i]
  );
}
class Ru extends Rt {
  constructor(t) {
    super(), Et(this, t, Eu, Tu, Pt, { cornerPoint: 0, index: 2 });
  }
}
const qi = { x: 0, y: 0, letter: "A" },
  Fu = { x: 100, y: 0, letter: "B" },
  Mu = { x: 100, y: 100, letter: "C" },
  Nu = { x: 200, y: 100, letter: "D" },
  Ou = { x: 200, y: 200, letter: "E" },
  Gu = { x: 0, y: 200, letter: "F" },
  Lu = [qi, Fu, Mu, Nu, Ou, Gu],
  Jn = { x: 200, y: 0, letter: "B" },
  Du = { x: 100, y: 250, letter: "D" },
  Iu = [
    qi,
    Jn,
    { x: 200, y: 200, letter: "C" },
    Du,
    { x: 0, y: 200, letter: "E" },
  ],
  Uu = [qi, Jn, { x: 200, y: 200, letter: "C" }, { x: 0, y: 200, letter: "D" }],
  Bu = [qi, Jn, { x: 200, y: 200, letter: "C" }];
function as(n, t, e) {
  const r = n.slice();
  return (r[5] = t[e].x), (r[6] = t[e].y), (r[8] = e), r;
}
function ss(n, t, e) {
  const r = n.slice();
  return (r[5] = t[e].x), (r[6] = t[e].y), (r[8] = e), r;
}
function os(n) {
  let t, e, r, i;
  return (
    (t = new xu({
      props: { point1: n[0][n[8]], point2: n[0][(n[8] + 1) % n[0].length] },
    })),
    (r = new Ru({ props: { cornerPoint: n[0][n[8]], index: n[8] } })),
    {
      c() {
        At(t.$$.fragment), (e = Ft()), At(r.$$.fragment);
      },
      m(a, s) {
        wt(t, a, s), gt(a, e, s), wt(r, a, s), (i = !0);
      },
      p(a, s) {
        const o = {};
        s & 1 && (o.point1 = a[0][a[8]]),
          s & 1 && (o.point2 = a[0][(a[8] + 1) % a[0].length]),
          t.$set(o);
        const l = {};
        s & 1 && (l.cornerPoint = a[0][a[8]]), r.$set(l);
      },
      i(a) {
        i || ($(t.$$.fragment, a), $(r.$$.fragment, a), (i = !0));
      },
      o(a) {
        Y(t.$$.fragment, a), Y(r.$$.fragment, a), (i = !1);
      },
      d(a) {
        a && ht(e), xt(t, a), xt(r, a);
      },
    }
  );
}
function Vu(n) {
  let t,
    e,
    r = Qr(n[0]),
    i = [];
  for (let s = 0; s < r.length; s += 1) i[s] = os(ss(n, r, s));
  const a = (s) =>
    Y(i[s], 1, 1, () => {
      i[s] = null;
    });
  return {
    c() {
      for (let s = 0; s < i.length; s += 1) i[s].c();
      t = pe();
    },
    m(s, o) {
      for (let l = 0; l < i.length; l += 1) i[l] && i[l].m(s, o);
      gt(s, t, o), (e = !0);
    },
    p(s, o) {
      if (o & 1) {
        r = Qr(s[0]);
        let l;
        for (l = 0; l < r.length; l += 1) {
          const h = ss(s, r, l);
          i[l]
            ? (i[l].p(h, o), $(i[l], 1))
            : ((i[l] = os(h)), i[l].c(), $(i[l], 1), i[l].m(t.parentNode, t));
        }
        for (Vt(), l = r.length; l < i.length; l += 1) a(l);
        zt();
      }
    },
    i(s) {
      if (!e) {
        for (let o = 0; o < r.length; o += 1) $(i[o]);
        e = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let o = 0; o < i.length; o += 1) Y(i[o]);
      e = !1;
    },
    d(s) {
      s && ht(t), _s(i, s);
    },
  };
}
function zu(n) {
  let t, e;
  return (
    (t = new du({
      props: { $$slots: { default: [Vu] }, $$scope: { ctx: n } },
    })),
    {
      c() {
        At(t.$$.fragment);
      },
      m(r, i) {
        wt(t, r, i), (e = !0);
      },
      p(r, i) {
        const a = {};
        i & 1025 && (a.$$scope = { dirty: i, ctx: r }), t.$set(a);
      },
      i(r) {
        e || ($(t.$$.fragment, r), (e = !0));
      },
      o(r) {
        Y(t.$$.fragment, r), (e = !1);
      },
      d(r) {
        xt(t, r);
      },
    }
  );
}
function ls(n) {
  let t, e, r, i;
  return (
    (e = new Su({ props: { x: n[5], y: n[6], index: n[8] } })),
    {
      c() {
        (t = mt("div")), At(e.$$.fragment), (r = Ft());
      },
      m(a, s) {
        gt(a, t, s), wt(e, t, null), vt(t, r), (i = !0);
      },
      p(a, s) {
        const o = {};
        s & 1 && (o.x = a[5]), s & 1 && (o.y = a[6]), e.$set(o);
      },
      i(a) {
        i || ($(e.$$.fragment, a), (i = !0));
      },
      o(a) {
        Y(e.$$.fragment, a), (i = !1);
      },
      d(a) {
        a && ht(t), xt(e);
      },
    }
  );
}
function Hu(n) {
  let t, e, r, i, a, s, o, l;
  (t = new Au({})),
    (a = new vu({
      props: {
        config: { width: window.innerWidth / 2, height: window.innerHeight },
        $$slots: { default: [zu] },
        $$scope: { ctx: n },
      },
    }));
  let h = Qr(n[0]),
    c = [];
  for (let g = 0; g < h.length; g += 1) c[g] = ls(as(n, h, g));
  const v = (g) =>
    Y(c[g], 1, 1, () => {
      c[g] = null;
    });
  return {
    c() {
      At(t.$$.fragment),
        (e = Ft()),
        (r = mt("div")),
        (i = mt("div")),
        At(a.$$.fragment),
        (s = Ft()),
        (o = mt("div"));
      for (let g = 0; g < c.length; g += 1) c[g].c();
      St(i, "class", "flex"),
        St(o, "class", "flex-col"),
        St(r, "class", "flex flex-row");
    },
    m(g, f) {
      wt(t, g, f),
        gt(g, e, f),
        gt(g, r, f),
        vt(r, i),
        wt(a, i, null),
        vt(r, s),
        vt(r, o);
      for (let u = 0; u < c.length; u += 1) c[u] && c[u].m(o, null);
      l = !0;
    },
    p(g, [f]) {
      const u = {};
      if ((f & 1025 && (u.$$scope = { dirty: f, ctx: g }), a.$set(u), f & 1)) {
        h = Qr(g[0]);
        let p;
        for (p = 0; p < h.length; p += 1) {
          const _ = as(g, h, p);
          c[p]
            ? (c[p].p(_, f), $(c[p], 1))
            : ((c[p] = ls(_)), c[p].c(), $(c[p], 1), c[p].m(o, null));
        }
        for (Vt(), p = h.length; p < c.length; p += 1) v(p);
        zt();
      }
    },
    i(g) {
      if (!l) {
        $(t.$$.fragment, g), $(a.$$.fragment, g);
        for (let f = 0; f < h.length; f += 1) $(c[f]);
        l = !0;
      }
    },
    o(g) {
      Y(t.$$.fragment, g), Y(a.$$.fragment, g), (c = c.filter(Boolean));
      for (let f = 0; f < c.length; f += 1) Y(c[f]);
      l = !1;
    },
    d(g) {
      g && (ht(e), ht(r)), xt(t, g), xt(a), _s(c, g);
    },
  };
}
function $u(n, t, e) {
  let r, i;
  return (
    Nt(n, ii, (a) => e(1, (r = a))),
    Nt(n, pr, (a) => e(0, (i = a))),
    (n.$$.update = () => {
      n.$$.dirty & 2 &&
        ii.subscribe((a) => {
          if (!isNaN(a)) {
            let s = [];
            r == 6 && (s = Lu),
              r == 5 && (s = Iu),
              r == 4 && (s = Uu),
              r == 3 && (s = Bu),
              pr.update(() => s);
          }
        });
    }),
    pr.subscribe((a) => {}),
    [i, r]
  );
}
class ju extends Rt {
  constructor(t) {
    super(), Et(this, t, $u, Hu, Pt, {});
  }
}
function Wu(n) {
  let t, e;
  return (
    (t = new al({ props: { path: "/", component: ju } })),
    {
      c() {
        At(t.$$.fragment);
      },
      m(r, i) {
        wt(t, r, i), (e = !0);
      },
      p: Q,
      i(r) {
        e || ($(t.$$.fragment, r), (e = !0));
      },
      o(r) {
        Y(t.$$.fragment, r), (e = !1);
      },
      d(r) {
        xt(t, r);
      },
    }
  );
}
function Ku(n) {
  let t, e;
  return (
    (t = new pl({
      props: { $$slots: { default: [Wu] }, $$scope: { ctx: n } },
    })),
    {
      c() {
        At(t.$$.fragment);
      },
      m(r, i) {
        wt(t, r, i), (e = !0);
      },
      p(r, [i]) {
        const a = {};
        i & 1 && (a.$$scope = { dirty: i, ctx: r }), t.$set(a);
      },
      i(r) {
        e || ($(t.$$.fragment, r), (e = !0));
      },
      o(r) {
        Y(t.$$.fragment, r), (e = !1);
      },
      d(r) {
        xt(t, r);
      },
    }
  );
}
class Yu extends Rt {
  constructor(t) {
    super(), Et(this, t, null, Ku, Pt, {});
  }
}
function Xu(n) {
  let t, e, r;
  return (
    (e = new Yu({})),
    {
      c() {
        (t = mt("main")), At(e.$$.fragment);
      },
      m(i, a) {
        gt(i, t, a), wt(e, t, null), (r = !0);
      },
      p: Q,
      i(i) {
        r || ($(e.$$.fragment, i), (r = !0));
      },
      o(i) {
        Y(e.$$.fragment, i), (r = !1);
      },
      d(i) {
        i && ht(t), xt(e);
      },
    }
  );
}
class qu extends Rt {
  constructor(t) {
    super(), Et(this, t, null, Xu, Pt, {});
  }
}
new qu({ target: document.getElementById("app") });
