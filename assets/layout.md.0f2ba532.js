import{_ as s,o as t,c as a,Q as l}from"./chunks/framework.f74298a7.js";const u=JSON.parse('{"title":"Layouts","description":"","frontmatter":{},"headers":[],"relativePath":"layout.md","filePath":"layout.md"}'),o={name:"layout.md"},n=l(`<h1 id="layouts" tabindex="-1">Layouts <a class="header-anchor" href="#layouts" aria-label="Permalink to &quot;Layouts&quot;">​</a></h1><p>系统布局</p><ul><li><a href="#usage">CubLayout</a> 经典布局</li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">CubLayout</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { CubLayout } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;cub-admin&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">CubLayout</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { CubLayout } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;cub-admin&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>noTagsView</td><td>不显示tagsView标签栏</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>noCache</td><td>不缓存，为true时，路由元信息中未配置noCache的页面组件也将不再缓存</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>logo</td><td>系统logo，参数为 <code>{ isCollapse }</code></td></tr><tr><td>sideMenuBefore</td><td>菜单顶部插槽，参数为 <code>{ isCollapse }</code></td></tr><tr><td>sideMenuAfter</td><td>菜单底部插槽，参数为 <code>{ isCollapse }</code></td></tr><tr><td>headerLeft</td><td>header左边插入的内容</td></tr><tr><td>headerTools</td><td>header工具栏</td></tr><tr><td>headerRight</td><td>header最右边插入的内容，一般放置头像等内容</td></tr><tr><td>tagsView</td><td>自定义tagsView标签栏</td></tr><tr><td>mainBefore</td><td>主内容区之前插入的内容</td></tr><tr><td>mainAfter</td><td>主内容区之后插入的内容</td></tr></tbody></table>`,9),e=[n];function p(r,c,d,i,y,E){return t(),a("div",null,e)}const g=s(o,[["render",p]]);export{u as __pageData,g as default};