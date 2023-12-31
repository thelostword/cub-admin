import type { CubRouteRecordRaw } from '@cub-admin/core';
import { Plus } from '@element-plus/icons-vue';

export const routes: CubRouteRecordRaw[] = [
  {
    path: '/home',
    component: 'CubLayout',
    meta: { title: '首页', onlyMenu: true, sort: 0 },
    children: [
      {
        path: 'index', meta: { title: '首页', affix: true, onlyMenu: true },
      },
    ],
  },
  {
    path: '/demo',
    component: 'CubLayout',
    meta: {
      title: 'Demo示例页面',
      icon: Plus,
      sort: 7,
    },
    children: [
      {
        path: 'demo1',
        component: '/demo1.vue',
        meta: {
          title: 'Demo1',
          icon: Plus,
          badge: {
            value: 'NEW',
          },
        },
      },
      {
        // 空路径测试
        path: '',
        meta: { title: '三级路由' },
        children: [
          {
            path: 'demo4',
            component: '/demo4.vue',
            meta: {
              title: 'Demo4',
              icon: Plus,
              affix: 2,
            },
          },
          {
            path: 'demo2/:id',
            component: '/demo2.vue',
            meta: {
              title: 'Demo2',
              icon: Plus,
              sort: 1,
              onlyRoute: true,
            },
          },
          {
            path: 'demo2/1111',
            meta: {
              title: 'Demo1-2',
              icon: Plus,
              onlyMenu: true,
            },
          },
          {
            path: 'demo2/2222?name=112&age=28',
            meta: {
              title: 'Demo1-1',
              icon: Plus,
              onlyMenu: true,
            },
          },
          {
            path: 'demo2/33333',
            meta: {
              title: 'Demo1-2',
              icon: Plus,
              onlyMenu: true,
            },
          },
        ],
      },
    ],
  },
  {
    path: 'https://github.com',
    meta: {
      title: 'GitHub',
      icon: Plus,
    },
  },
];

export const routes1: CubRouteRecordRaw[] = [
  {
    path: 'https://github.com',
    meta: {
      title: 'GitHub1111',
      icon: Plus,
      sort: -1,
    },
  },
  {
    path: '/',
    component: 'CubLayout',
    meta: {
      title: 'test页面',
      icon: Plus,
      sort: 7,
    },
    children: [
      {
        path: 'demo1',
        component: '/demo3.vue',
        meta: {
          title: 'Demo1',
          icon: Plus,
          affix: 1,
        },
      },
      {
        path: 'demo3',
        meta: {
          title: 'Demo12',
          icon: Plus,
          onlyMenu: true,
        },
      },
    ],
  },
];
