# 动态路由

## 路由注册
```js
import { registerRoutes } from 'cub-admin';

const routes = [];

// 注册路由
registerRoutes({
  routes,
  viewsPath: '/src/views',
  modules: import.meta.glob('/src/views/**/*.vue', { eager: true }),
});

// 分模块注册
registerRoutes('module1', {
  routes: [
    // ...
  ],
  viewsPath: '/src/views',
  modules: import.meta.glob('/src/views/**/*.vue', { eager: true }),
});

```
注册路由后会生成对应菜单，菜单结构同[路由配置](#路由配置)。


## 路由卸载
```ts
import { unregisterRoutes } from 'cub-admin';

// 卸载默认模块的路由
unregisterRoutes();

// 卸载指定模块的路由
unregisterRoutes('module1');

// 卸载全部通过 registerRoutes 方法注册的路由
unregisterRoutes('*');
```
路由卸载后，对应菜单也会移除。


## 路由配置

#### 一级路由
```ts
type CubRouteRecordRaw = Omit<RouteRecordRaw, 'component' | 'components' | 'children'>
& ({
  component: string | RawRouteComponent;
  components?: undefined;
  children: CubSubRouteRecordRaw[];
} | {
  component: string | RawRouteComponent;
  components?: undefined;
  children?: undefined;
} | {
  component?: undefined;
  components?: undefined;
  children?: undefined;
});
```

#### 子级路由
```ts
type CubSubRouteRecordRaw = Omit<RouteRecordRaw, 'component' | 'components' | 'children'>
& ({
  component: string | RawRouteComponent;
  components?: undefined;
  children: CubSubRouteRecordRaw[];
} | {
  component: string | RawRouteComponent;
  components?: undefined;
  children?: undefined;
} | {
  component?: undefined;
  components?: undefined;
  children?: CubSubRouteRecordRaw[];
});
```

#### 路由元信息
```ts
interface RouteMeta {
  /**
 * 页面标题名称
 */
  title: string;
  /**
 * 菜单图标
 */
  icon?: string | Component;
  /**
 * 不缓存
 * @default false
 */
  noCache?: boolean;
  /**
 * 不在标签栏显示
 * @default false
 */
  noTag?: boolean;
  /**
 * 只注册路由，不添加菜单
 */
  onlyRoute?: boolean;
  /**
 * 只添加菜单，不注册路由
 */
  onlyMenu?: boolean;
  /**
 * 是否固定在tagsView标签栏
 * @default false
 */
  affix?: boolean;
  /**
 * 菜单排序
 */
  sort?: number;
  /**
 * badge 配置信息，同 el-badge props配置
 */
  badge?: { -readonly [K in keyof BadgeProps]?: BadgeProps[K] };
}
```


## 基础配置示例
```ts
import type { CubRouteRecordRaw } from 'cub-admin';

// 基础配置示例
const routes: CubRouteRecordRaw[] = [
  {
    path: '/demo',
    component: 'CubLayout',
    meta: {
      title: 'Demo示例页面',
    },
    children: [
      {
        path: '1',
        component: '/demo1.vue',
        meta: {
          title: 'Demo1',
        },
      },
      {
        path: '2',
        meta: {
          title: 'Demo2',
        },
        children: [
          path: '2-1',
          component: '/demo2-1.vue',
          meta: {
            title: 'Demo2-1',
          },
        ]
      },
    ]
  },
  // 外部链接
  {
    path: 'https://github.com',
    meta: {
      title: 'GitHub',
      icon: Plus,
    },
  },
]
```
:::warning 注意
必须在页面组件中定义 `name` 属性！，并且保证 `name` 唯一
:::
#### 对应的目录结构
```text
|———router
└───views
│   │   demo1.vue
│   │   demo2-1.vue
|—— ...
```
