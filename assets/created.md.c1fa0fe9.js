import{o as n,c as a,k as s,F as t,D as c,l as r,Q as o,a as E,t as p}from"./chunks/framework.01af844e.js";const y={"@element-plus/icons-vue":"^2.1.0","@vueuse/core":"^10.3.0","element-plus":"^2.3.8","lodash-es":"^4.17.21",vue:"^3.2.0","vue-router":"^4.2.4"},i=o('<h1 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h1><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cub-admin@alpha</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cub-admin@alpha</span></span></code></pre></div>',3),h={class:"danger custom-block"},u=s("p",{class:"custom-block-title"},"必须的前置依赖项",-1),g=o(`<h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><ul><li>App.vue</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- App.vue --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">el-config-provider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">router-view</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">el-config-provider</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- App.vue --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">el-config-provider</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">router-view</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">el-config-provider</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ul><li>main.js</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;element-plus/dist/index.css&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;element-plus/theme-chalk/dark/css-vars.css&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;cub-admin/dist/style.css&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ElementPlus </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;element-plus&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> App </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./App.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> router </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./router&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(router);</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(ElementPlus);</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;element-plus/dist/index.css&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;element-plus/theme-chalk/dark/css-vars.css&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;cub-admin/dist/style.css&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ElementPlus </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;element-plus&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> App </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./App.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> router </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(router);</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(ElementPlus);</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><ul><li>/layout/Layout.vue</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- layout/Layout.vue --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">CubLayout</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { CubLayout } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;cub-admin&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- layout/Layout.vue --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line highlighted"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">CubLayout</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { CubLayout } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;cub-admin&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ul><li>/router/index.js</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createRouter, createWebHashHistory } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue-router&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { setupCubAdmin, registerRoutes, unregisterRoutes } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;cub-admin&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> routes </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./routes&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { routes </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> dRoutes, routes1 } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./dRoutes&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> CubLayout </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../layout/index.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createRouter</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  history: </span><span style="color:#B392F0;">createWebHashHistory</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  routes,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> router;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6A737D;">// 必须在使用 registerRoutes 方法之前调用一次此方法</span></span>
<span class="line highlighted"><span style="color:#B392F0;">setupCubAdmin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  layout: CubLayout,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  router,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6A737D;">// 3s 后注册 &quot;demo&quot; 路由</span></span>
<span class="line highlighted"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">registerRoutes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;demo&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    routes: routes1,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    viewsPath: </span><span style="color:#9ECBFF;">&#39;/src/views&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    modules: </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">glob</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/src/views/**/*.vue&#39;</span><span style="color:#E1E4E8;">, { eager: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  });</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6A737D;">// 5s 后卸载 &quot;demo&quot; 模块路由</span></span>
<span class="line highlighted"><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">unregisterRoutes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;demo&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">}, </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> register </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">beforeEach</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">register) {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 一般使用此方式注册动态路由</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">registerRoutes</span><span style="color:#E1E4E8;">({</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      routes: dRoutes,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      viewsPath: </span><span style="color:#9ECBFF;">&#39;/src/views&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      modules: </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">glob</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/src/views/**/*.vue&#39;</span><span style="color:#E1E4E8;">, { eager: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    register </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> to.fullPath;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createRouter, createWebHashHistory } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { setupCubAdmin, registerRoutes, unregisterRoutes } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;cub-admin&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> routes </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./routes&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { routes </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> dRoutes, routes1 } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./dRoutes&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> CubLayout </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../layout/index.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  history: </span><span style="color:#6F42C1;">createWebHashHistory</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">  routes,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> router;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6A737D;">// 必须在使用 registerRoutes 方法之前调用一次此方法</span></span>
<span class="line highlighted"><span style="color:#6F42C1;">setupCubAdmin</span><span style="color:#24292E;">({</span></span>
<span class="line highlighted"><span style="color:#24292E;">  layout: CubLayout,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  router,</span></span>
<span class="line highlighted"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6A737D;">// 3s 后注册 &quot;demo&quot; 路由</span></span>
<span class="line highlighted"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">registerRoutes</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;demo&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    routes: routes1,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    viewsPath: </span><span style="color:#032F62;">&#39;/src/views&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    modules: </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">glob</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/src/views/**/*.vue&#39;</span><span style="color:#24292E;">, { eager: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }),</span></span>
<span class="line highlighted"><span style="color:#24292E;">  });</span></span>
<span class="line highlighted"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6A737D;">// 5s 后卸载 &quot;demo&quot; 模块路由</span></span>
<span class="line highlighted"><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">unregisterRoutes</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;demo&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line highlighted"><span style="color:#24292E;">}, </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> register </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">beforeEach</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">to</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">register) {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 一般使用此方式注册动态路由</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">registerRoutes</span><span style="color:#24292E;">({</span></span>
<span class="line highlighted"><span style="color:#24292E;">      routes: dRoutes,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      viewsPath: </span><span style="color:#032F62;">&#39;/src/views&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      modules: </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">glob</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/src/views/**/*.vue&#39;</span><span style="color:#24292E;">, { eager: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }),</span></span>
<span class="line highlighted"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    register </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> to.fullPath;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,9),v=JSON.parse('{"title":"快速上手","description":"","frontmatter":{},"headers":[],"relativePath":"created.md","filePath":"created.md"}'),d={name:"created.md"},D=Object.assign(d,{setup(F){return(m,A)=>(n(),a("div",null,[i,s("div",h,[u,s("ul",null,[(n(!0),a(t,null,c(r(y),(e,l)=>(n(),a("li",{key:l},[E(p(l)+" ",1),s("code",null,p(e),1)]))),128))])]),g]))}});export{v as __pageData,D as default};
