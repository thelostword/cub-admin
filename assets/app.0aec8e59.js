import{s as o,a1 as p,a2 as i,a3 as u,a4 as c,a5 as l,a6 as d,a7 as f,a8 as m,a9 as h,aa as A,V as g,d as P,u as v,j as y,y as w,ab as C,ac as R,ad as _,ae as b}from"./chunks/framework.01af844e.js";import{t as E}from"./chunks/theme.5871df5c.js";const D={...E};function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=r(D),T=P({name:"VitePressApp",setup(){const{site:e}=v();return y(()=>{w(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),C(),R(),_(),s.setup&&s.setup(),()=>b(s.Layout)}});async function j(){const e=S(),a=O();a.provide(i,e);const t=u(e.route);return a.provide(c,t),a.component("Content",l),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:f}),{app:a,router:e,data:t}}function O(){return m(T)}function S(){let e=o,a;return h(t=>{let n=A(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),o&&(e=!1),g(()=>import(n),[])):null},s.NotFound)}o&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{j as createApp};
