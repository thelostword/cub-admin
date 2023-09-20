import type { Component } from 'vue';
import type { Router, RouteRecordRaw } from 'vue-router';
import type {
  SetupOptions, CubRouteRecordRaw, CubSubRouteRecordRaw, RegisterOptions, RegisterRoutesOptions, RegisterRoutesModuleName,
} from '../typescript';
import { generateMenus, subductionMenus } from './menus';
import { basicPages, NotFoundPage } from '../pages';
import { resolvePath } from './utils';
import { addTag } from './tags';

let CubLayout: Component;
let router: Router;
const BasicRouteName = 'CubBasicRoutes';

// ------------------------- routes 配置处理方法 START -----------------------------
const flattenRoutes = (routes: (CubRouteRecordRaw | CubSubRouteRecordRaw)[], parentPath: string) => routes.reduce((result: (CubRouteRecordRaw | CubSubRouteRecordRaw)[], route) => {
  const path = resolvePath(route.path, parentPath);
  if (route.children) {
    result.push(...flattenRoutes(route.children, path));
  } else {
    const flattenedNode: CubSubRouteRecordRaw = {
      ...route,
      path,
    };
    result.push(flattenedNode);
  }
  return result;
}, []);

const flattenDeepRoute = (route: CubRouteRecordRaw) => {
  if (route.children?.length) {
    return {
      ...route,
      children: flattenRoutes(route.children, route.path),
    };
  }
  return route;
};
const transformRoutes = (routes: CubRouteRecordRaw[]) => routes.map((route) => flattenDeepRoute(route));
// ------------------------- routes 配置处理方法 END -----------------------------

export const setupCubAdmin = (options: SetupOptions) => {
  CubLayout = options.layout;
  router = options.router;

  router.addRoute({
    path: '/',
    component: CubLayout,
    name: BasicRouteName,
    meta: {
      title: 'System Basic Routes',
    },
    children: [],
  });
  basicPages.forEach((route) => {
    router.addRoute(BasicRouteName, route);
  });
  router.addRoute(BasicRouteName, NotFoundPage);

  const routes = router.getRoutes();
  const affixRoutes = routes.filter((route) => route.meta?.affix === true || typeof route.meta?.affix === 'number');
  affixRoutes.forEach((item) => {
    addTag(item as any);
  });
};

// ------------------------- Routes Registration and Unregistration START -----------------------------
const routesCallStack: { [key: RegisterRoutesModuleName]: (() => void)[] | undefined } = {};
const defaultRoutesStackName = Symbol();
let layoutUseCounter = 0;
export const registerRoutes = (...args: RegisterOptions) => new Promise((resolve, reject) => {
  try {
    if (!router || !CubLayout) throw new Error('"setupCubAdmin" method must be called once before getting started!');
    let name: RegisterRoutesModuleName = defaultRoutesStackName;
    let options: RegisterRoutesOptions;
    if (args && args.length === 2) {
      [name, options] = args;
    } else {
      [options] = args;
    }
    const { modules, viewsPath, routes: allRoutes } = options;

    const getComponent = (component: string | Component) => {
      if (typeof component === 'string') {
        if (component === 'CubLayout') return CubLayout;
        return modules[`${viewsPath}${component}`]?.default;
      }
      return component;
    };
    const addRoutes = (routes: (CubRouteRecordRaw | CubSubRouteRecordRaw)[], parentName?: string) => {
      routes.forEach((item) => {
        if (!item.meta?.onlyMenu && item.path && item.component) {
          const component = getComponent(item.component);
          if (!component) throw new Error('Component Not Found, Please Check if the Component Path Configuration is Correct.');
          const route = {
            ...item,
            name: item.component === 'CubLayout' ? `CubLayout|${layoutUseCounter += 1}` : component.name,
            component,
            children: undefined,
          };
          if (!route.name) throw new Error('The "name" of the page component must be explicitly defined');
          if (!routesCallStack[name]) routesCallStack[name] = [];
          if (parentName) {
            routesCallStack[name]!.push(router.addRoute(parentName, route as RouteRecordRaw));
          } else {
            routesCallStack[name]!.push(router.addRoute(route as RouteRecordRaw));
          }
          if (item.children?.length) addRoutes(item.children, route.name);
        }
      });
    };
    router.removeRoute(NotFoundPage.name!);
    addRoutes(transformRoutes(allRoutes));
    router.addRoute(BasicRouteName, NotFoundPage);

    generateMenus(name, allRoutes);

    const routes = router.getRoutes();
    const affixRoutes = routes.filter((route) => route.meta?.affix === true || typeof route.meta?.affix === 'number');
    affixRoutes.forEach((item) => {
      addTag(item as any);
    });
    resolve(undefined);
  } catch (err) {
    reject(err);
  }
});

export const unregisterRoutes = (name: RegisterRoutesModuleName = defaultRoutesStackName) => {
  subductionMenus(name);
  if (name === '*') {
    Reflect.ownKeys(routesCallStack).forEach((key) => {
      routesCallStack[key]?.forEach((r) => r());
      if (routesCallStack[key]?.length) routesCallStack[key]!.length = 0;
    });
    return;
  }
  routesCallStack[name]?.forEach((r) => r());
  if (routesCallStack[name]?.length) routesCallStack[name]!.length = 0;
};
// ------------------------- Routes Registration and Unregistration END -----------------------------
