# Layouts

系统布局

- [CubLayout](#usage) 经典布局

## Usage
```vue
<template>
  <CubLayout />
</template>

<script setup lang="ts">
import { CubLayout } from 'cub-admin';
</script>
```

## Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| noTagsView | 不显示tagsView标签栏 | boolean | - | false |
| noCache | 不缓存，为true时，路由元信息中未配置noCache的页面组件也将不再缓存 | boolean | - | false |


## Slots
| name | 说明 |
| --- | --- |
| logo | 系统logo，参数为 `{ isCollapse }` |
| headerLeft | header左边插入的内容 |
| headerTools | header工具栏 |
| headerRight | header最右边插入的内容，一般放置头像等内容 |
| mainBefore | 主内容区之前插入的内容 |
| mainAfter | 主内容区之后插入的内容 |
