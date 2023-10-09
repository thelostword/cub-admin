import { createRouter, createWebHashHistory } from 'vue-router';
import { setupCubAdmin, registerRoutes } from '@cub-admin/core';
import routes from './routes';
import { routes as dRoutes, routes1 } from './dRoutes';
import CubLayout from '../layout/index.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

setupCubAdmin({
  layout: CubLayout,
  router,
});

setTimeout(() => {
  registerRoutes('demo', {
    routes: routes1,
    viewsPath: '/src/views',
    modules: import.meta.glob('/src/views/**/*.vue', { eager: true }),
  });
}, 3000);

let register = false;
router.beforeEach(async (to) => {
  if (!register) {
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
