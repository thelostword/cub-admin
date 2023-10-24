import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.f74298a7.js";const u=JSON.parse('{"title":"API","description":"","frontmatter":{},"headers":[],"relativePath":"api.md","filePath":"api.md"}'),e={name:"api.md"},p=l(`<h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h1><h2 id="侧边栏展开-折叠" tabindex="-1">侧边栏展开/折叠 <a class="header-anchor" href="#侧边栏展开-折叠" aria-label="Permalink to &quot;侧边栏展开/折叠&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { isCollapse, toggleCollapse } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;cub-admin&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { isCollapse, toggleCollapse } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;cub-admin&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><h2 id="主题色" tabindex="-1">主题色 <a class="header-anchor" href="#主题色" aria-label="Permalink to &quot;主题色&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { primaryColor, setPrimaryColor } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;cub-admin&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 打印当前主题色</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(primaryColor.value);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置主题色， 注意无法直接使用 \`primaryColor.value = &#39;red&#39;\` 来进行修改</span></span>
<span class="line"><span style="color:#B392F0;">setPrimaryColor</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { primaryColor, setPrimaryColor } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;cub-admin&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 打印当前主题色</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(primaryColor.value);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置主题色， 注意无法直接使用 \`primaryColor.value = &#39;red&#39;\` 来进行修改</span></span>
<span class="line"><span style="color:#6F42C1;">setPrimaryColor</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="主题模式" tabindex="-1">主题模式 <a class="header-anchor" href="#主题模式" aria-label="Permalink to &quot;主题模式&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { themeMode, setThemeMode } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;cub-admin&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 打印当前主题模式类型</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(themeMode.value);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置主题模式， 注意无法直接使用 \`themeMode.value = &#39;light&#39;\` 来进行修改</span></span>
<span class="line"><span style="color:#B392F0;">setThemeMode</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;light&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// &#39;light&#39; | &#39;dark&#39; | &#39;system&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { themeMode, setThemeMode } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;cub-admin&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 打印当前主题模式类型</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(themeMode.value);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置主题模式， 注意无法直接使用 \`themeMode.value = &#39;light&#39;\` 来进行修改</span></span>
<span class="line"><span style="color:#6F42C1;">setThemeMode</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;light&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// &#39;light&#39; | &#39;dark&#39; | &#39;system&#39;</span></span></code></pre></div><h2 id="tagsview-标签栏" tabindex="-1">tagsView 标签栏 <a class="header-anchor" href="#tagsview-标签栏" aria-label="Permalink to &quot;tagsView 标签栏&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 待补充</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 待补充</span></span></code></pre></div><h2 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to &quot;缓存&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 待补充</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 待补充</span></span></code></pre></div><h2 id="菜单" tabindex="-1">菜单 <a class="header-anchor" href="#菜单" aria-label="Permalink to &quot;菜单&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 待补充</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 待补充</span></span></code></pre></div>`,13),o=[p];function t(c,r,i,d,y,h){return a(),n("div",null,o)}const m=s(e,[["render",t]]);export{u as __pageData,m as default};