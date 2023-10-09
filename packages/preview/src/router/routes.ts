import type { RouteRecordRaw } from 'vue-router';
import Layout from '../layout/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home/index',
  },
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: 'index', name: 'HOME1', component: () => import('../views/index.vue'), meta: { title: '首页', affix: true },
      },
    ],
  },
  // {
  //   path: '/demo',
  //   name: 'Demo',
  //   component: Layout,
  //   children: [
  //     { path: 'demo1', name: Symbol(), component: () => import('../views/demo1.vue') },
  //     { path: 'demo2', name: Symbol(), component: () => import('../views/demo2.vue') },
  //     { path: 'demo3', name: Symbol(), component: () => import('../views/demo3.vue') },
  //     { path: 'demo4', component: () => import('../views/demo4.vue') },
  //   ],
  // },
];

export default routes;
