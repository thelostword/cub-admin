<p align="center">
  <img src="./docs/public/logo.svg" width="200px" />
</p>

<h1 align="center">Cub Admin</h1>
<p align="center">中后台管理系统前端基础库，基于Vue、vue-router、element-plus构建。</p>

[【在线预览】cub-admin-template](https://thelostword.github.io/cub-admin-template/)

### 如何使用

``` sh
pnpm add cub-admin

# 安装前置依赖
pnpm add vue vue-router element-plus
```

main.js
``` js
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'cub-admin/dist/style.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');
```

layout.vue
``` vue
<template>
  <CubLayout />
</template>

<script setup>
import { CubLayout } from 'cub-admin';
</script>
```

### 功能
- [x] 经典布局
- [ ] 多布局
- [x] 动态路由/菜单
- [x] 页面缓存
- [x] tagsView
- [x] 模式切换
- [x] 主题色修改
- [ ] 主题样式切换
- [x] 自定义主题样式
- [ ] 多UI库支持
- [ ] i18n
