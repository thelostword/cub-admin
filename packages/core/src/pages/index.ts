import type { RouteRecordRaw } from 'vue-router';

export const basicPages: RouteRecordRaw[] = [
  {
    path: '/redirect/:path(.*)*',
    name: Symbol(),
    component: () => import('./redirect'),
    meta: {
      title: '重定向',
      noCache: true,
      noTag: true,
    },
  },
];

export const NotFoundPage: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: Symbol(),
  component: () => import('./not-found'),
  meta: {
    title: '404',
    noCache: true,
    noTag: true,
  },
};
