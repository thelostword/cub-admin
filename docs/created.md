# 快速上手

<script setup>
import { peerDependencies } from '../package.json';
</script>

## 安装依赖
```bash
pnpm add cub-admin
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
```vue
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

