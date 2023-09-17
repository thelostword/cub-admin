import { defineComponent as m, openBlock as l, createElementBlock as i, createElementVNode as d, createBlock as g, unref as s, withCtx as p, withKeys as H, createVNode as b, shallowRef as L, nextTick as M, Fragment as S, renderList as B, createTextVNode as D, toDisplayString as z, resolveDynamicComponent as I, ref as P, renderSlot as w, createCommentVNode as O } from "vue";
import { useFullscreen as T } from "@vueuse/core";
import { ElTooltip as K, ElIcon as F, ElDropdown as N, ElDropdownMenu as R, ElDropdownItem as j, ElColorPicker as A } from "element-plus";
import f from "color";
import { _ as V } from "./_plugin-vue_export-helper-dad06003.js";
const G = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, Y = /* @__PURE__ */ d(
  "path",
  {
    d: "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), Q = [Y], U = m({
  name: "ComputerFilled",
  render: function(e, t) {
    return l(), i("svg", G, Q);
  }
}), q = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, J = /* @__PURE__ */ d(
  "path",
  {
    d: "M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), W = [J], X = m({
  name: "DarkModeFilled",
  render: function(e, t) {
    return l(), i("svg", q, W);
  }
}), Z = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, ee = /* @__PURE__ */ d(
  "path",
  {
    d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), te = [ee], oe = m({
  name: "FullscreenExitFilled",
  render: function(e, t) {
    return l(), i("svg", Z, te);
  }
}), ne = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, le = /* @__PURE__ */ d(
  "path",
  {
    d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), re = [le], se = m({
  name: "FullscreenFilled",
  render: function(e, t) {
    return l(), i("svg", ne, re);
  }
}), ce = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, ae = /* @__PURE__ */ d(
  "path",
  {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), ie = [ae], de = m({
  name: "LightModeFilled",
  render: function(e, t) {
    return l(), i("svg", ce, ie);
  }
}), ke = /* @__PURE__ */ m({
  __name: "cub-fullscreen",
  setup(h) {
    const { isFullscreen: e, toggle: t } = T();
    return (u, a) => (l(), g(s(K), {
      trigger: "hover",
      content: s(e) ? "退出全屏" : "全屏",
      enterable: !1,
      effect: "light"
    }, {
      default: p(() => [
        d("div", {
          class: "cub-fullscreen-btn cub-flex cub-items-center cub-justify-center cub-p-1 cub-rounded-sm hover:cub-bg-white hover:cub-bg-opacity-5 cub-transition-all",
          role: "button",
          tabindex: "0",
          onClick: a[0] || (a[0] = (r) => s(t)()),
          onKeyup: a[1] || (a[1] = H((r) => s(t)(), ["enter"]))
        }, [
          b(s(F), {
            size: 26,
            color: "var(--cub-header-text-color)"
          }, {
            default: p(() => [
              s(e) ? (l(), g(s(oe), { key: 1 })) : (l(), g(s(se), { key: 0 }))
            ]),
            _: 1
          })
        ], 32)
      ]),
      _: 1
    }, 8, ["content"]));
  }
}), ue = { class: "cub-mode-switch-btn cub-flex cub-items-center cub-justify-center cub-py-1 cub-px-1.5" }, k = "__cub_admin_mode", Ee = /* @__PURE__ */ m({
  __name: "cub-mode-switch",
  setup(h) {
    const e = [
      {
        name: "跟随系统",
        value: "system",
        icon: U
      },
      {
        name: "亮色模式",
        value: "light",
        icon: de
      },
      {
        name: "暗色模式",
        value: "dark",
        icon: X
      }
    ], t = L(e[0]), u = (o) => {
      if (t.value.value !== "system")
        return;
      const c = document.documentElement;
      (o.matches ? "dark" : "light") === "dark" ? c.classList.add("dark") : c.classList.remove("dark");
    }, a = window.matchMedia("(prefers-color-scheme: dark)"), r = (o, c = !1) => {
      t.value = e.find((x) => x.value === o), c && window.localStorage.setItem(k, o);
      const n = document.documentElement;
      o === "dark" ? n.classList.add("dark") : o === "light" ? n.classList.remove("dark") : u(a);
    }, v = window.localStorage.getItem(k) || "system";
    return M(() => {
      r(v);
    }), a.addEventListener("change", u), (o, c) => (l(), g(s(N), {
      onCommand: c[0] || (c[0] = (n) => r(n, !0))
    }, {
      dropdown: p(() => [
        b(s(R), null, {
          default: p(() => [
            (l(), i(S, null, B(e, (n) => b(s(j), {
              key: n.value,
              command: n.value,
              disabled: t.value.value === n.value,
              icon: n.icon
            }, {
              default: p(() => [
                D(z(n.name), 1)
              ]),
              _: 2
            }, 1032, ["command", "disabled", "icon"])), 64))
          ]),
          _: 1
        })
      ]),
      default: p(() => [
        d("div", ue, [
          b(s(F), {
            size: 22,
            color: "var(--cub-header-text-color)"
          }, {
            default: p(() => [
              (l(), g(I(t.value.icon)))
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }));
  }
}), me = { class: "cub-primary-color-change-btn cub-p-1 primary-color" }, E = "__cub_admin_primary_color", he = /* @__PURE__ */ m({
  __name: "cub-primary-color-change",
  setup(h) {
    const e = [
      "#409EFF",
      "rgb(24, 144, 255)",
      "rgb(245, 34, 45)",
      "rgb(250, 84, 28)",
      "rgb(250, 173, 20)",
      "rgb(19, 194, 194)",
      "rgb(82, 196, 26)",
      "rgb(47, 84, 235)",
      "rgb(114, 46, 209)",
      "#F09199",
      "#00c0ff",
      "#fb7299"
    ], t = window.localStorage.getItem(E) || e[0], u = P(t), a = (r) => {
      if (!r)
        return;
      const v = document.documentElement, o = f(r).lightness();
      let c = `--el-color-primary: ${r};`, n = `--el-color-primary: ${r};`;
      [3, 5, 7, 8, 9].forEach((_) => {
        const $ = f(r).lightness(o + (100 - o) * (_ / 10)).hex();
        $ && (c += `--el-color-primary-light-${_}: ${$};`);
        const C = f(r).lightness(o - o * (_ / 10)).hex();
        C && (n += `--el-color-primary-light-${_}: ${C};`);
      });
      {
        const _ = f(r).lightness(o - o * 0.2).hex();
        _ && (c += `--el-color-primary-dark-2: ${_};`, n += `--el-color-primary-dark-2: ${_};`);
      }
      const y = document.createElement("style");
      y.textContent = `.cub-primary-color {${c}} .dark.cub-primary-color{${n}}`, document.head.appendChild(y), v.classList.add("cub-primary-color"), window.localStorage.setItem(E, r || "");
    };
    return M(() => {
      a(t);
    }), (r, v) => (l(), i("div", me, [
      b(s(A), {
        modelValue: u.value,
        "onUpdate:modelValue": v[0] || (v[0] = (o) => u.value = o),
        label: "修改主题色",
        predefine: e,
        onChange: a
      }, null, 8, ["modelValue"])
    ]));
  }
});
const Me = /* @__PURE__ */ V(he, [["__scopeId", "data-v-fc074794"]]), _e = { class: "cub-page-header cub-p-3" }, pe = { class: "cub-flex cub-justify-between cub-gap-5" }, ve = { class: "cub-inline-flex cub-items-center cub-gap-x-5" }, ge = {
  key: 1,
  class: "cub-text-xl cub-font-bold"
}, be = {
  key: 0,
  class: "cub-mt-4"
}, we = /* @__PURE__ */ m({
  __name: "cub-page-header",
  props: {
    title: {}
  },
  setup(h) {
    return (e, t) => {
      var u;
      return l(), i("div", _e, [
        d("div", pe, [
          d("div", ve, [
            e.$slots.title ? w(e.$slots, "title", { key: 0 }, void 0, !0) : (l(), i("h1", ge, z(e.title || ((u = e.$route.meta) == null ? void 0 : u.title)), 1)),
            w(e.$slots, "extra", {}, void 0, !0)
          ]),
          d("div", null, [
            w(e.$slots, "right", {}, void 0, !0)
          ])
        ]),
        e.$slots.default ? (l(), i("div", be, [
          w(e.$slots, "default", {}, void 0, !0)
        ])) : O("", !0)
      ]);
    };
  }
});
const ze = /* @__PURE__ */ V(we, [["__scopeId", "data-v-160135b1"]]);
export {
  ke as CubFullscreen,
  Ee as CubModeSwitch,
  ze as CubPageHeader,
  Me as CubPrimaryColorChange
};
