import { shallowReactive as we, defineComponent as S, h as Y, reactive as fe, getCurrentInstance as _e, ref as H, resolveComponent as J, openBlock as h, createBlock as y, unref as d, withCtx as p, resolveDynamicComponent as q, createCommentVNode as L, createElementVNode as w, toDisplayString as G, mergeProps as oe, createElementBlock as E, Fragment as te, renderList as ne, inject as me, computed as Ce, createVNode as b, withKeys as Q, withDirectives as re, vShow as ie, onMounted as Re, normalizeClass as W, withModifiers as xe, createTextVNode as z, mergeDefaults as ke, provide as Ae, renderSlot as M, Transition as Ee, KeepAlive as Te, pushScopeId as Se, popScopeId as $e } from "vue";
import { ElSubMenu as De, ElIcon as K, ElBadge as ce, ElMenuItem as Me, ElScrollbar as pe, ElMenu as Le, ElDropdown as je, ElDropdownMenu as Ie, ElDropdownItem as V, ElMessage as Pe } from "element-plus";
import { useRouter as $ } from "vue-router";
import { i as he } from "./emitter-70839255.js";
import { cloneDeep as ze } from "lodash-es";
import Ve from "mitt";
import { Expand as Ke, Fold as Be, Close as Ne } from "@element-plus/icons-vue";
import { _ as be } from "./_plugin-vue_export-helper-dad06003.js";
function k(n) {
  if (typeof n != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(n));
}
function le(n, e) {
  for (var t = "", s = 0, o = -1, i = 0, r, l = 0; l <= n.length; ++l) {
    if (l < n.length)
      r = n.charCodeAt(l);
    else {
      if (r === 47)
        break;
      r = 47;
    }
    if (r === 47) {
      if (!(o === l - 1 || i === 1))
        if (o !== l - 1 && i === 2) {
          if (t.length < 2 || s !== 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
            if (t.length > 2) {
              var c = t.lastIndexOf("/");
              if (c !== t.length - 1) {
                c === -1 ? (t = "", s = 0) : (t = t.slice(0, c), s = t.length - 1 - t.lastIndexOf("/")), o = l, i = 0;
                continue;
              }
            } else if (t.length === 2 || t.length === 1) {
              t = "", s = 0, o = l, i = 0;
              continue;
            }
          }
          e && (t.length > 0 ? t += "/.." : t = "..", s = 2);
        } else
          t.length > 0 ? t += "/" + n.slice(o + 1, l) : t = n.slice(o + 1, l), s = l - o - 1;
      o = l, i = 0;
    } else
      r === 46 && i !== -1 ? ++i : i = -1;
  }
  return t;
}
function Fe(n, e) {
  var t = e.dir || e.root, s = e.base || (e.name || "") + (e.ext || "");
  return t ? t === e.root ? t + s : t + n + s : s;
}
var j = {
  // path.resolve([from ...], to)
  resolve: function() {
    for (var e = "", t = !1, s, o = arguments.length - 1; o >= -1 && !t; o--) {
      var i;
      o >= 0 ? i = arguments[o] : (s === void 0 && (s = process.cwd()), i = s), k(i), i.length !== 0 && (e = i + "/" + e, t = i.charCodeAt(0) === 47);
    }
    return e = le(e, !t), t ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
  },
  normalize: function(e) {
    if (k(e), e.length === 0)
      return ".";
    var t = e.charCodeAt(0) === 47, s = e.charCodeAt(e.length - 1) === 47;
    return e = le(e, !t), e.length === 0 && !t && (e = "."), e.length > 0 && s && (e += "/"), t ? "/" + e : e;
  },
  isAbsolute: function(e) {
    return k(e), e.length > 0 && e.charCodeAt(0) === 47;
  },
  join: function() {
    if (arguments.length === 0)
      return ".";
    for (var e, t = 0; t < arguments.length; ++t) {
      var s = arguments[t];
      k(s), s.length > 0 && (e === void 0 ? e = s : e += "/" + s);
    }
    return e === void 0 ? "." : j.normalize(e);
  },
  relative: function(e, t) {
    if (k(e), k(t), e === t || (e = j.resolve(e), t = j.resolve(t), e === t))
      return "";
    for (var s = 1; s < e.length && e.charCodeAt(s) === 47; ++s)
      ;
    for (var o = e.length, i = o - s, r = 1; r < t.length && t.charCodeAt(r) === 47; ++r)
      ;
    for (var l = t.length, c = l - r, f = i < c ? i : c, u = -1, a = 0; a <= f; ++a) {
      if (a === f) {
        if (c > f) {
          if (t.charCodeAt(r + a) === 47)
            return t.slice(r + a + 1);
          if (a === 0)
            return t.slice(r + a);
        } else
          i > f && (e.charCodeAt(s + a) === 47 ? u = a : a === 0 && (u = 0));
        break;
      }
      var m = e.charCodeAt(s + a), g = t.charCodeAt(r + a);
      if (m !== g)
        break;
      m === 47 && (u = a);
    }
    var C = "";
    for (a = s + u + 1; a <= o; ++a)
      (a === o || e.charCodeAt(a) === 47) && (C.length === 0 ? C += ".." : C += "/..");
    return C.length > 0 ? C + t.slice(r + u) : (r += u, t.charCodeAt(r) === 47 && ++r, t.slice(r));
  },
  _makeLong: function(e) {
    return e;
  },
  dirname: function(e) {
    if (k(e), e.length === 0)
      return ".";
    for (var t = e.charCodeAt(0), s = t === 47, o = -1, i = !0, r = e.length - 1; r >= 1; --r)
      if (t = e.charCodeAt(r), t === 47) {
        if (!i) {
          o = r;
          break;
        }
      } else
        i = !1;
    return o === -1 ? s ? "/" : "." : s && o === 1 ? "//" : e.slice(0, o);
  },
  basename: function(e, t) {
    if (t !== void 0 && typeof t != "string")
      throw new TypeError('"ext" argument must be a string');
    k(e);
    var s = 0, o = -1, i = !0, r;
    if (t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t.length === e.length && t === e)
        return "";
      var l = t.length - 1, c = -1;
      for (r = e.length - 1; r >= 0; --r) {
        var f = e.charCodeAt(r);
        if (f === 47) {
          if (!i) {
            s = r + 1;
            break;
          }
        } else
          c === -1 && (i = !1, c = r + 1), l >= 0 && (f === t.charCodeAt(l) ? --l === -1 && (o = r) : (l = -1, o = c));
      }
      return s === o ? o = c : o === -1 && (o = e.length), e.slice(s, o);
    } else {
      for (r = e.length - 1; r >= 0; --r)
        if (e.charCodeAt(r) === 47) {
          if (!i) {
            s = r + 1;
            break;
          }
        } else
          o === -1 && (i = !1, o = r + 1);
      return o === -1 ? "" : e.slice(s, o);
    }
  },
  extname: function(e) {
    k(e);
    for (var t = -1, s = 0, o = -1, i = !0, r = 0, l = e.length - 1; l >= 0; --l) {
      var c = e.charCodeAt(l);
      if (c === 47) {
        if (!i) {
          s = l + 1;
          break;
        }
        continue;
      }
      o === -1 && (i = !1, o = l + 1), c === 46 ? t === -1 ? t = l : r !== 1 && (r = 1) : t !== -1 && (r = -1);
    }
    return t === -1 || o === -1 || // We saw a non-dot character immediately before the dot
    r === 0 || // The (right-most) trimmed path component is exactly '..'
    r === 1 && t === o - 1 && t === s + 1 ? "" : e.slice(t, o);
  },
  format: function(e) {
    if (e === null || typeof e != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
    return Fe("/", e);
  },
  parse: function(e) {
    k(e);
    var t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return t;
    var s = e.charCodeAt(0), o = s === 47, i;
    o ? (t.root = "/", i = 1) : i = 0;
    for (var r = -1, l = 0, c = -1, f = !0, u = e.length - 1, a = 0; u >= i; --u) {
      if (s = e.charCodeAt(u), s === 47) {
        if (!f) {
          l = u + 1;
          break;
        }
        continue;
      }
      c === -1 && (f = !1, c = u + 1), s === 46 ? r === -1 ? r = u : a !== 1 && (a = 1) : r !== -1 && (a = -1);
    }
    return r === -1 || c === -1 || // We saw a non-dot character immediately before the dot
    a === 0 || // The (right-most) trimmed path component is exactly '..'
    a === 1 && r === c - 1 && r === l + 1 ? c !== -1 && (l === 0 && o ? t.base = t.name = e.slice(1, c) : t.base = t.name = e.slice(l, c)) : (l === 0 && o ? (t.name = e.slice(1, r), t.base = e.slice(1, c)) : (t.name = e.slice(l, r), t.base = e.slice(l, c)), t.ext = e.slice(r, c)), l > 0 ? t.dir = e.slice(0, l - 1) : o && (t.dir = "/"), t;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
j.posix = j;
var Ue = j;
const N = (n, e) => he(n) ? n : Ue.resolve(e, n), I = we({
  menus: []
}), X = (n, e = "/") => {
  var o, i, r, l, c, f;
  const t = [];
  if ((o = n.children) != null && o.length) {
    if (n.children.length === 1)
      return X(n.children[0], N(n.path, e));
    for (const u of n.children)
      (i = u.meta) != null && i.onlyRoute || t.push(X(u, N(n.path, e)));
  }
  const s = N(n.path, e);
  return {
    name: ((r = n.meta) == null ? void 0 : r.title) || "No Menu Name",
    path: s,
    icon: (l = n.meta) == null ? void 0 : l.icon,
    sort: ((c = n.meta) == null ? void 0 : c.sort) ?? 999,
    badge: (f = n.meta) == null ? void 0 : f.badge,
    children: t.sort((u, a) => u.sort - a.sort)
  };
}, T = {}, Oe = (n, e) => {
  const t = e.map((s) => X(s));
  I.menus = [...I.menus, ...t].sort((s, o) => s.sort - o.sort), T[n] = t;
}, Ye = (n) => {
  var t, s;
  const e = ze(I.menus);
  if (n === "*") {
    Reflect.ownKeys(T).forEach((o) => {
      var i, r;
      (i = T[o]) == null || i.forEach((l) => {
        const c = e.findIndex((f) => f.name === l.name);
        e.splice(c >>> 0, 1);
      }), (r = T[o]) != null && r.length && (T[o].length = 0);
    }), I.menus = e;
    return;
  }
  (t = T[n]) == null || t.forEach((o) => {
    const i = e.findIndex((r) => r.name === o.name);
    e.splice(i >>> 0, 1);
  }), I.menus = e, (s = T[n]) != null && s.length && (T[n].length = 0);
}, Z = Symbol(), ee = Symbol(), He = /* @__PURE__ */ new Map(), P = Ve(He), ae = S({
  name: "CubPageRedirect",
  setup() {
    const n = $(), { params: e } = n.currentRoute.value;
    return n.replace({
      path: window.decodeURIComponent(e.path) || "/"
    }), () => Y("span");
  }
}), _ = fe({
  dynamic: []
}), U = (n, e = !1) => {
  var t, s;
  !((t = n.meta) != null && t.title) || !n.name || (s = n.meta) != null && s.noTag || _.dynamic.some(({ path: o }) => o === n.path) || (e ? _.dynamic.unshift(n) : _.dynamic.push(n));
}, ge = (n) => {
  var t;
  if ((t = n.meta) != null && t.affix)
    return;
  const e = _.dynamic.findIndex(({ path: s }) => s === n.path);
  _.dynamic.splice(e >>> 0, 1);
}, Je = (n) => {
  _.dynamic = _.dynamic.filter(({ path: e, meta: t }) => !!(t != null && t.affix) || e === n.path);
}, qe = () => {
  _.dynamic = _.dynamic.filter(({ meta: n }) => !!(n != null && n.affix));
}, ue = S({
  name: "CubPageNotFound",
  setup() {
    const n = $();
    return () => Y("div", {}, [
      Y("span", {
        onclick: () => {
          n.back(), ge(n.currentRoute.value);
        }
      }, "返回上一页")
    ]);
  }
}), Ge = [
  {
    path: "/",
    component: "CubLayout",
    name: "CubBasicRoutes",
    meta: {
      title: "系统基础路由"
    },
    children: [
      {
        path: "redirect/:path(.*)*",
        component: ae,
        name: ae.name,
        meta: {
          title: "重定向",
          noCache: !0,
          noTag: !0
        }
      },
      {
        path: "/:pathMatch(.*)*",
        name: ue.name,
        component: ue,
        meta: {
          title: "404",
          noCache: !0
        }
      }
    ]
  }
], x = {
  firstRegisterRoutesTriggeredArgs: 0,
  firstRegisterRoutesDone: 0
}, ve = (n, e) => n.reduce((t, s) => {
  const o = N(s.path, e);
  if (s.children)
    t.push(...ve(s.children, o));
  else {
    const i = {
      ...s,
      path: o
    };
    t.push(i);
  }
  return t;
}, []), Qe = (n) => {
  var e;
  return (e = n.children) != null && e.length ? {
    ...n,
    children: ve(n.children, n.path)
  } : n;
}, We = (n) => n.map((e) => Qe(e)), R = {}, ye = Symbol();
function Xe() {
  const n = $(), e = _e();
  let t = !0;
  P.on(Z, (s) => {
    let o = ye, i;
    s && s.length === 2 ? [o, i] = s : [i] = s;
    const { modules: r, viewsPath: l, routes: c } = i, f = (a) => {
      var m, g;
      return typeof a == "string" ? a === "CubLayout" ? (m = e == null ? void 0 : e.parent) == null ? void 0 : m.type : (g = r[`${l}${a}`]) == null ? void 0 : g.default : a;
    }, u = (a, m) => {
      a.forEach((g) => {
        var C, D;
        if (!((C = g.meta) != null && C.onlyMenu) && g.path && g.component) {
          const F = f(g.component);
          if (!F)
            throw new Error("未找到组件, 请检查组件路径配置是否正确");
          const B = {
            ...g,
            name: g.component === "CubLayout" ? `CL|${Math.random().toString(32).substring(2, 12)}` : F.name,
            component: F,
            children: void 0
          };
          if (!B.name)
            throw new Error('The page component must explicitly declare the "name" property.');
          R[o] || (R[o] = []), m ? R[o].push(n.addRoute(m, B)) : R[o].push(n.addRoute(B)), (D = g.children) != null && D.length && u(g.children, B.name);
        }
      });
    };
    t && (t = !1, u(Ge)), u(We(c)), x.firstRegisterRoutesDone === 0 && (x.firstRegisterRoutesDone = 1), P.emit(ee), Oe(o, c);
  }), x.firstRegisterRoutesTriggeredArgs && (x.firstRegisterRoutesTriggeredArgs.forEach((s) => {
    P.emit(Z, s);
  }), x.firstRegisterRoutesTriggeredArgs = void 0);
}
const nn = (...n) => {
  x.firstRegisterRoutesTriggeredArgs !== void 0 && (x.firstRegisterRoutesTriggeredArgs === 0 ? x.firstRegisterRoutesTriggeredArgs = [n] : x.firstRegisterRoutesTriggeredArgs.push(n)), P.emit(Z, n);
}, sn = (n = ye) => {
  var e, t;
  if (Ye(n), n === "*") {
    Reflect.ownKeys(R).forEach((s) => {
      var o, i;
      (o = R[s]) == null || o.forEach((r) => r()), (i = R[s]) != null && i.length && (R[s].length = 0);
    });
    return;
  }
  (e = R[n]) == null || e.forEach((s) => s()), (t = R[n]) != null && t.length && (R[n].length = 0);
};
function Ze() {
  const n = H(!1);
  return {
    isCollapse: n,
    toggleCollapse: (t) => {
      typeof t == "boolean" ? n.value = t : n.value = !n.value;
    }
  };
}
const O = {
  ...Ze()
}, se = Symbol("layout.injection.key"), v = fe({
  permanent: [],
  dynamic: []
}), et = (n) => {
  var e, t;
  n.name && ((e = n.meta) != null && e.noCache || v.dynamic.includes(n.name) || (v.dynamic.push(n.name), (t = n.meta) != null && t.affix && !v.permanent.includes(n.name) && v.permanent.push(n.name)));
}, de = (n) => {
  if (!n.name || v.permanent.includes(n.name))
    return;
  const e = v.dynamic.findIndex((t) => t === n.name);
  v.dynamic.splice(e >>> 0, 1);
}, tt = (n) => {
  n.name && (v.permanent.includes(n.name) ? v.dynamic = [...v.permanent] : v.dynamic = [...v.permanent, n.name]);
}, nt = () => {
  v.dynamic = [...v.permanent];
}, st = "cub-admin", ot = "0.0.1-alpha.3", rt = "从0开始的中后台管理系统搭建", it = [
  "cub-admin",
  "cub-admin-plus",
  "vue-admin",
  "admin",
  "vue",
  "element-plus"
], ct = "https://github.com/thelostword/cub-admin", lt = {}, at = "MIT", ut = {
  name: "losting",
  email: "thelostword@163.com",
  url: "https://github.com/thelostword"
}, dt = {
  type: "git",
  url: "https://github.com/thelostword/cub-admin.git"
}, ft = [
  "packages.json",
  "README.md",
  "LICENSE",
  "dist"
], mt = "module", pt = {
  ".": {
    types: "./dist/core.d.ts",
    import: "./dist/core.js"
  },
  "./core": {
    types: "./dist/core.d.ts",
    import: "./dist/core.js"
  },
  "./components": {
    types: "./dist/components.d.ts",
    import: "./dist/components.js"
  },
  "./utils": {
    types: "./dist/utils.d.ts",
    import: "./dist/utils.js"
  },
  "./*": "./*"
}, ht = "pnpm@8.6.0", bt = {
  preinstall: "npx only-allow pnpm",
  prepare: "husky install",
  dev: "pnpm preview dev",
  build: "vue-tsc && vite build",
  preview: "pnpm --filter=preview",
  commit: "git-cz",
  "release:alpha": "release-it --preRelease=alpha",
  "release:beta": "release-it --preRelease=beta",
  release: "release-it"
}, gt = {
  color: "^4.2.3",
  mitt: "^3.0.1"
}, vt = {
  "@commitlint/cli": "^17.6.6",
  "@commitlint/config-conventional": "^17.6.6",
  "@commitlint/cz-commitlint": "^17.5.0",
  "@cub-admin/components": "workspace:^",
  "@cub-admin/core": "workspace:^",
  "@cub-admin/utils": "workspace:^",
  "@element-plus/icons-vue": "^2.1.0",
  "@release-it/conventional-changelog": "^7.0.0",
  "@rushstack/eslint-patch": "^1.3.2",
  "@types/color": "^3.0.4",
  "@types/lodash-es": "^4.17.9",
  "@types/path-browserify": "^1.0.0",
  "@unocss/reset": "^0.53.5",
  "@vicons/material": "^0.12.0",
  "@vitejs/plugin-vue": "^4.2.3",
  "@vue/eslint-config-airbnb-with-typescript": "^7.0.0",
  "@vueuse/core": "^10.3.0",
  commitizen: "^4.3.0",
  "element-plus": "^2.3.8",
  husky: "^8.0.3",
  lexical: "^0.12.0",
  "lint-staged": "^13.2.3",
  "lodash-es": "^4.17.21",
  "path-browserify": "^1.0.1",
  "release-it": "^16.1.5",
  sass: "^1.63.6",
  typescript: "^5.0.2",
  unocss: "^0.53.5",
  "unplugin-vue-setup-extend-plus": "^1.0.0",
  vite: "^4.4.0",
  "vite-plugin-dts": "^3.5.3",
  "vite-svg-loader": "^4.0.0",
  vue: "^3.3.4",
  "vue-router": "^4.2.4",
  "vue-tsc": "^1.8.3"
}, yt = {
  "@element-plus/icons-vue": "^2.1.0",
  "@vueuse/core": "^10.3.0",
  "element-plus": "^2.3.8",
  "lodash-es": "^4.17.21",
  vue: "^3.2.0",
  "vue-router": "^4.2.4"
}, wt = {
  commitizen: {
    path: "@commitlint/cz-commitlint"
  }
}, A = {
  name: st,
  version: ot,
  description: rt,
  keywords: it,
  homepage: ct,
  bugs: lt,
  license: at,
  author: ut,
  repository: dt,
  files: ft,
  type: mt,
  exports: pt,
  packageManager: ht,
  scripts: bt,
  dependencies: gt,
  devDependencies: vt,
  peerDependencies: yt,
  "lint-staged": {
    "{packages,preview}/**/*.{vue,ts,tsx,js,cjs,mjs}": "eslint --fix"
  },
  config: wt
}, on = {
  name: A.name,
  version: A.version,
  description: A.description,
  author: A.author,
  license: A.license,
  homepage: A.homepage,
  devDependencies: A.devDependencies,
  peerDependencies: A.peerDependencies
};
console.info(
  `%cBuilt with%c${A.name}@v${A.version}%c🚀`,
  "padding: 2px 5px; background-color: #fb7299; font-weight: bold; color: #fff;",
  "padding: 2px 8px; background-color: #00c0ff; font-weight: bold; color: #fff;",
  "padding: 0 4px; font-size: 16px;"
);
const _t = /* @__PURE__ */ S({
  __name: "cub-menu-item",
  props: {
    menu: {}
  },
  setup(n) {
    return (e, t) => {
      var o;
      const s = J("CubMenuItem", !0);
      return (o = e.menu.children) != null && o.length ? (h(), y(d(De), {
        key: 0,
        index: e.menu.path
      }, {
        title: p(() => [
          e.menu.icon ? (h(), y(d(K), { key: 0 }, {
            default: p(() => [
              (h(), y(q(e.menu.icon)))
            ]),
            _: 1
          })) : L("", !0),
          w("span", null, G(e.menu.name), 1),
          e.menu.badge ? (h(), y(d(ce), oe({ key: 1 }, e.menu.badge, { class: "cub-menu-badge cub-inline-flex" }), null, 16)) : L("", !0)
        ]),
        default: p(() => [
          (h(!0), E(te, null, ne(e.menu.children, (i) => (h(), y(s, {
            key: i.path,
            menu: i
          }, null, 8, ["menu"]))), 128))
        ]),
        _: 1
      }, 8, ["index"])) : (h(), y(d(Me), {
        key: 1,
        index: e.menu.path
      }, {
        title: p(() => [
          w("span", null, G(e.menu.name), 1),
          e.menu.badge ? (h(), y(d(ce), oe({ key: 0 }, e.menu.badge, { class: "cub-menu-badge cub-inline-flex" }), null, 16)) : L("", !0)
        ]),
        default: p(() => [
          e.menu.icon ? (h(), y(d(K), { key: 0 }, {
            default: p(() => [
              (h(), y(q(e.menu.icon)))
            ]),
            _: 1
          })) : L("", !0)
        ]),
        _: 1
      }, 8, ["index"]));
    };
  }
}), Ct = /* @__PURE__ */ S({
  __name: "cub-menu",
  setup(n) {
    const { isCollapse: e } = me(se), t = $(), s = Ce(() => t.currentRoute.value.path), o = (i) => {
      if (he(i)) {
        window.open(i, "_blank");
        return;
      }
      t.push({ path: i });
    };
    return (i, r) => (h(), y(d(pe), {
      height: "calc(100vh - var(--cub-logo-height))",
      "wrap-class": "cub-menu-wrap",
      "view-class": "cub-menu-view"
    }, {
      default: p(() => [
        b(d(Le), {
          class: "cub-menu cub-border-none",
          collapse: d(e),
          "collapse-transition": !1,
          "default-active": s.value,
          onSelect: o
        }, {
          default: p(() => [
            (h(!0), E(te, null, ne(d(I).menus, (l) => (h(), y(_t, {
              key: l.path,
              menu: l
            }, null, 8, ["menu"]))), 128))
          ]),
          _: 1
        }, 8, ["collapse", "default-active"])
      ]),
      _: 1
    }));
  }
}), Rt = {
  showTagsView: !0,
  noCache: !1
}, xt = /* @__PURE__ */ S({
  __name: "collapse-btn",
  setup(n) {
    const { isCollapse: e, toggleCollapse: t } = me(se);
    return (s, o) => (h(), E("div", {
      role: "button",
      tabindex: "0",
      class: "cub-collapse cub-flex cub-items-center cub-justify-center cub-px-1 cub-py-1.5 cub-rounded-sm hover:cub-bg-white hover:cub-bg-opacity-5 cub-transition-all",
      onClick: o[0] || (o[0] = (i) => d(t)()),
      onKeyup: o[1] || (o[1] = Q((i) => d(t)(), ["enter"]))
    }, [
      b(d(K), {
        size: 24,
        color: "var(--cub-header-text-color)"
      }, {
        default: p(() => [
          re(b(d(Ke), null, null, 512), [
            [ie, d(e)]
          ]),
          re(b(d(Be), null, null, 512), [
            [ie, !d(e)]
          ])
        ]),
        _: 1
      })
    ], 32));
  }
}), kt = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, At = /* @__PURE__ */ w(
  "path",
  {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), Et = [At], Tt = S({
  name: "MoreVertFilled",
  render: function(e, t) {
    return h(), E("svg", kt, Et);
  }
}), St = () => {
  const n = $(), { currentRoute: e } = n;
  U(e.value), P.on(ee, () => {
    n.getRoutes().filter((u) => {
      var a;
      return ((a = u.meta) == null ? void 0 : a.affix) === !0;
    }).sort((u, a) => {
      var m, g;
      return +(((m = u.meta) == null ? void 0 : m.sort) ?? 999) - +(((g = a.meta) == null ? void 0 : g.sort) ?? 999);
    }).forEach((u) => {
      U(u);
    });
  }), x.firstRegisterRoutesDone && (P.emit(ee), x.firstRegisterRoutesDone = void 0), n.beforeEach((c) => {
    U(c);
  });
  const t = (c) => e.value.path === (c == null ? void 0 : c.path), s = (c) => {
    const f = _.dynamic[c];
    if (!f) {
      n.push("/");
      return;
    }
    n.push(f.fullPath || f.path);
  };
  return {
    onClose: (c) => {
      const f = c || e.value, u = _.dynamic.findIndex(({ path: a }) => f.path === a);
      ge(f), de(f), t(f) && s(u - 1 < 0 ? 0 : u - 1);
    },
    onCloseOthers: (c) => {
      const f = c || e.value;
      Je(f), tt(f);
    },
    onCloseAll: () => {
      var c;
      qe(), nt(), (c = e.value.meta) != null && c.affix || s(0);
    },
    isActive: t,
    onRefresh: () => {
      const { fullPath: c } = e.value;
      de(e.value), n.replace({
        path: `/redirect/${window.encodeURIComponent(c)}`
      });
    }
  };
}, $t = {
  class: "cub-tags cub-w-full cub-flex cub-items-center cub-justify-between cub-gap-x-2",
  role: "navigation"
}, Dt = ["aria-selected", "onClick", "onKeyup"], Mt = { class: "cub-text-sm" }, Lt = ["onClick", "onKeyup"], jt = { class: "cub-flex cub-items-center cub-justify-center cub-p-1 cub-rounded hover:cub-bg-black hover:cub-bg-opacity-5 cub-transition-all" }, It = /* @__PURE__ */ S({
  __name: "cub-tags-view",
  setup(n) {
    const {
      onClose: e,
      onCloseOthers: t,
      onCloseAll: s,
      isActive: o,
      onRefresh: i
    } = St(), r = $(), l = H(), c = H(0);
    Re(() => {
      let u = 0;
      l.value.$el.addEventListener("wheel", (a) => {
        a.deltaY !== 0 && (u += a.deltaY, u < 0 ? u = 0 : u > c.value + a.deltaY && (u = c.value), l.value.setScrollLeft(u), a.preventDefault());
      });
    });
    const f = (u) => {
      switch (Pe(`click on item ${u}`), u) {
        case "close":
          e();
          break;
        case "close-other":
          t();
          break;
        case "close-all":
          s();
          break;
        case "refresh":
          i();
          break;
        case "reload":
          window.location.reload();
          break;
      }
    };
    return (u, a) => (h(), E("div", $t, [
      b(d(pe), {
        ref_key: "scroll",
        ref: l,
        "wrap-class": "cub-tags-wrap cub-py-1 cub-pl-1",
        "view-class": "cub-tags-view cub-flex cub-gap-x-1 cub-w-full cub-h-full",
        tag: "ul",
        onScroll: a[0] || (a[0] = (m) => c.value = m.scrollLeft)
      }, {
        default: p(() => [
          (h(!0), E(te, null, ne(d(_).dynamic, (m) => {
            var g, C;
            return h(), E("li", {
              key: m.fullPath,
              tabindex: "0",
              class: W(["cub-tags-view-item group cub-flex-shrink-0 cub-h-full cub-px-2 cub-py-1 cub-flex cub-items-center cub-justify-center cub-gap-x-1 cub-cursor-pointer cub-select-none", d(o)(m) ? "before:cub-content-[''] before:cub-inline-block before:cub-w-2 before:cub-h-2 before:cub-bg-white before:cub-rounded-full active" : ""]),
              "aria-selected": d(o)(m),
              onClick: (D) => d(r).push(m.path),
              onKeyup: Q((D) => d(r).push(m.path), ["enter"])
            }, [
              w("span", Mt, G((g = m.meta) == null ? void 0 : g.title), 1),
              (C = m.meta) != null && C.affix ? L("", !0) : (h(), E("div", {
                key: 0,
                role: "button",
                tabindex: "0",
                class: W(["cub-flex cub-items-center cub-justify-center cub-py-0.5 cub-w-4 cub-h-4 cub-rounded-full cub-transition-all hover:cub-bg-black hover:cub-bg-opacity-15", { "cub-opacity-0 group-hover:cub-opacity-100": !d(o)(m) }]),
                onClick: xe((D) => d(e)(m), ["stop"]),
                onKeyup: Q((D) => d(e)(m), ["enter"])
              }, [
                b(d(K), {
                  size: 12,
                  class: "cub-transition-colors"
                }, {
                  default: p(() => [
                    b(d(Ne))
                  ]),
                  _: 1
                })
              ], 42, Lt))
            ], 42, Dt);
          }), 128))
        ]),
        _: 1
      }, 512),
      b(d(je), {
        class: "cub-mr-1",
        trigger: "click",
        onCommand: f
      }, {
        dropdown: p(() => [
          b(d(Ie), null, {
            default: p(() => [
              b(d(V), { command: "close" }, {
                default: p(() => [
                  z(" 关闭本页 ")
                ]),
                _: 1
              }),
              b(d(V), { command: "close-other" }, {
                default: p(() => [
                  z(" 关闭其他 ")
                ]),
                _: 1
              }),
              b(d(V), { command: "close-all" }, {
                default: p(() => [
                  z(" 关闭全部 ")
                ]),
                _: 1
              }),
              b(d(V), {
                divided: "",
                command: "refresh"
              }, {
                default: p(() => [
                  z(" 刷新本页 ")
                ]),
                _: 1
              }),
              b(d(V), { command: "reload" }, {
                default: p(() => [
                  z(" 重新加载 ")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        default: p(() => [
          w("div", jt, [
            b(d(K), {
              color: "var(--cub-tagsView-text-color)",
              size: 20
            }, {
              default: p(() => [
                b(d(Tt))
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })
    ]));
  }
});
const Pt = /* @__PURE__ */ be(It, [["__scopeId", "data-v-36d3ab6d"]]);
function zt(n) {
  if (n)
    return;
  $().beforeEach((t) => {
    et(t);
  });
}
const Vt = (n) => (Se("data-v-1ebf7f1f"), n = n(), $e(), n), Kt = { class: "cub-layout cub-w-screen cub-h-screen cub-overflow-hidden cub-flex" }, Bt = { class: "cub-logo cub-overflow-hidden" }, Nt = /* @__PURE__ */ Vt(() => /* @__PURE__ */ w("text", { class: "cub-flex cub-items-center cub-justify-center cub-h-full cub-font-bold cub-text-xl" }, " Logo Here ", -1)), Ft = { class: "cub-flex-1 cub-overflow-hidden" }, Ut = { class: "cub-header cub-flex cub-items-center cub-justify-between cub-px-2 cub-gap-x-5 cub-select-none" }, Ot = { class: "cub-flex-1 cub-flex cub-items-center cub-justify-end cub-gap-x-5" }, Yt = { class: "cub-flex-1" }, Ht = { class: "cub-header-tools cub-flex cub-items-center cub-gap-x-3" }, Jt = /* @__PURE__ */ S({
  __name: "layout",
  props: ke({
    showTagsView: { type: Boolean },
    noCache: { type: Boolean }
  }, Rt),
  setup(n) {
    const e = n;
    return Ae(se, O), Xe(), zt(e.noCache), (t, s) => {
      const o = J("router-view"), i = J("ElScrollbar");
      return h(), E("div", Kt, [
        w("div", {
          class: W(["cub-sidebar cub-flex-shrink-0 cub-select-none cub-shadow-sm cub-overflow-hidden", { "cub-sidebar--collapse": d(O).isCollapse.value }])
        }, [
          w("div", Bt, [
            M(t.$slots, "logo", {
              isCollapse: d(O).isCollapse.value
            }, () => [
              Nt
            ], !0)
          ]),
          b(Ct)
        ], 2),
        w("div", Ft, [
          w("header", Ut, [
            b(xt),
            w("div", Ot, [
              w("div", Yt, [
                M(t.$slots, "headerLeft", {}, void 0, !0)
              ]),
              w("div", Ht, [
                M(t.$slots, "headerTools", {}, void 0, !0)
              ]),
              M(t.$slots, "headerRight", {}, void 0, !0)
            ])
          ]),
          t.showTagsView ? (h(), y(Pt, { key: 0 })) : L("", !0),
          b(i, {
            height: `calc(100vh - var(--cub-header-height)${t.showTagsView ? " - var(--cub-tagsView-height)" : ""}`,
            tag: "main",
            "view-class": "cub-main cub-h-full"
          }, {
            default: p(() => [
              M(t.$slots, "mainBefore", {}, void 0, !0),
              b(o, null, {
                default: p(({ Component: r, route: l }) => [
                  b(Ee, {
                    name: "fade",
                    mode: "out-in"
                  }, {
                    default: p(() => [
                      (h(), y(Te, {
                        include: d(v).dynamic
                      }, [
                        (h(), y(q(r), {
                          key: l.path
                        }))
                      ], 1032, ["include"]))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              }),
              M(t.$slots, "mainAfter", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["height"])
        ])
      ]);
    };
  }
});
const rn = /* @__PURE__ */ be(Jt, [["__scopeId", "data-v-1ebf7f1f"]]);
export {
  rn as CubLayout,
  et as addCache,
  U as addTag,
  v as cache,
  nt as clearCaches,
  qe as clearTags,
  se as CubInjectionKey,
  on as metadata,
  nn as registerRoutes,
  de as removeCache,
  tt as removeOtherCaches,
  Je as removeOtherTags,
  ge as removeTag,
  _ as tags,
  sn as unregisterRoutes
};
