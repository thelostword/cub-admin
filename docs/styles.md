# 主题样式

Cub Admin 使用 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来控制主题样式

## css变量及默认值

```css
:root {
  /* 页面背景色 */
  --cub-page-bg-color: #f2f3f5;

  /* header 高度 */
  --cub-header-height: 50px;
  /* header 背景色 */
  --cub-header-bg-color: #24292f;
  /* header 文字颜色 */
  --cub-header-text-color: white;

  /* logo 高度 */
  --cub-logo-height: var(--cub-header-height);
  /* logo 背景色 */
  --cub-logo-bg-color: var(--cub-header-bg-color);
  /* logo 文字颜色 */
  --cub-logo-text-color: var(--cub-header-text-color);

  /* 顶部mixed菜单hover背景色 */
  --cub-top-menu-item-hover-bg-color: var(--el-color-primary);
  /* 顶部mixed菜单hover文字颜色 */
  --cub-top-menu-item-hover-text-color: white;
  /* 顶部mixed菜单激活背景色 */
  --cub-top-menu-item-active-bg-color: transparent;
  /* 顶部mixed菜单激活文字颜色 */
  --cub-top-menu-item-active-text-color: var(--el-color-primary);

  /* sidebar 宽度 */
  --cub-sidebar-width: 200px;
  /* sidebar 背景色 */
  --cub-sidebar-bg-color: white;
  /* sidebar 阴影颜色 */
  --cub-sidebar-shadow-color: rgba(0,0,0,.08);

  /* tagsView 高度 */
  --cub-tagsView-height: 38px;
  /* tagsView 背景色 */
  --cub-tagsView-bg-color: white;
  /* tagsView 阴影颜色 */
  --cub-tagsView-shadow-color: rgba(0,0,0,.08);
  /* tagsView 文字颜色 */
  --cub-tagsView-text-color: var(--el-text-color-primary);
  /* tagsViewItem 背景色 */
  --cub-tagsView-item-bg-color: var(--el-color-info-light-8);
  /* tagsViewItem 文字颜色 */
  --cub-tagsView-item-text-color: var(--cub-tagsView-text-color);
  /* tagsViewItem 选中状态背景色 */
  --cub-tagsView-item-active-bg-color: var(--el-color-primary);
  /* tagsViewItem 选中状态文字颜色 */
  --cub-tagsView-item-active-text-color: var(--el-color-white);
}

/* 对应的暗色模式 */
html.dark {
  // page
  --cub-page-bg-color: #010409;

  // header
  --cub-header-bg-color: #010409;
  --cub-header-text-color: white;

  // sidebar
  --cub-sidebar-bg-color: #0D1117;
  --cub-sidebar-shadow-color: rgba(255,255,255,.2);

  // tagsView
  --cub-tagsView-bg-color: #161b22;
  --cub-tagsView-shadow-color: rgba(255,255,255,.2);
}
```

## 动态主题
按下方示例来达到动态切换全局样式
```vue

<template>
  <CubLayout :class="theme" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CubLayout } from 'cub-admin';

const theme = ref('theme1');
</script>

<style>
/* 主题1 */
.theme1 {
  /* ... */
}
.dark .theme1 {
  /* ... */
}

/* 主题2 */
.theme2 {
  /* ... */
}
.dark .theme2 {
  /* ... */
}
</style>
```


