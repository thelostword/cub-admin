# 快速上手

<script setup>
import { peerDependencies } from '../package.json';
</script>

## 安装依赖
```bash
pnpm add cub-admin@alpha
```
:::danger 必须的前置依赖项
<ul>
  <li v-for="(version, name) in peerDependencies" :key="name">{{ name }} <code>{{ version }}</code></li>
</ul>
:::


## 使用

- App.vue
```vue
<!-- App.vue -->
<template>
  <el-config-provider>
    <router-view />
  </el-config-provider>
</template>

<script setup>
</script>
```

- main.js
```js{4}
// main.js
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'cub-admin/dist/style.css';
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount('#app');
```

- /layout/Layout.vue
```vue{3,7}
<!-- layout/Layout.vue -->
<template>
  <CubLayout />
</template>

<script setup>
import { CubLayout } from 'cub-admin';
</script>

<style lang="scss" scoped>
</style>
```

- /router/index.js
```js{2,14-18,20-27,29-32,37-42}
import { createRouter, createWebHashHistory } from 'vue-router';
import { setupCubAdmin, registerRoutes, unregisterRoutes } from 'cub-admin';
import routes from './routes';
import { routes as dRoutes, routes1 } from './dRoutes';
import CubLayout from '../layout/index.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

// 必须在使用 registerRoutes 方法之前调用一次此方法
setupCubAdmin({
  layout: CubLayout,
  router,
});

// 3s 后注册 "demo" 路由
setTimeout(() => {
  registerRoutes('demo', {
    routes: routes1,
    viewsPath: '/src/views',
    modules: import.meta.glob('/src/views/**/*.vue', { eager: true }),
  });
}, 3000);

// 5s 后卸载 "demo" 模块路由
setTimeout(() => {
  unregisterRoutes('demo');
}, 5000);

let register = false;
router.beforeEach(async (to) => {
  if (!register) {
    // 一般使用此方式注册动态路由
    await registerRoutes({
      routes: dRoutes,
      viewsPath: '/src/views',
      modules: import.meta.glob('/src/views/**/*.vue', { eager: true }),
    });
    register = true;
    return to.fullPath;
  }
  return true;
});

```
