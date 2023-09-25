import type { Component } from 'vue';
import type { RouteRecordRaw, RouteRecordName } from 'vue-router';
import type {
  SetupOptions, CubRouteRecordRaw, CubSubRouteRecordRaw, RegisterOptions, RegisterRoutesOptions, RegisterRoutesModuleName,
} from '../typescript';
import { generateMenus, subductionMenus } from './menus';
import { basicPages, NotFoundPage } from '../pages';
import { resolvePath } from './utils';
import { addTag } from './tags';
import { initState } from '../store';

const BasicRouteName = '__CUB_BASIC_ROUTES__';

// ------------------------- routes 配置处理方法 START -----------------------------
const flattenRoutes = (routes: (CubRouteRecordRaw | CubSubRouteRecordRaw)[], parentPath: string) => routes.reduce((result: (CubRouteRecordRaw | CubSubRouteRecordRaw)[], route) => {
  const path = resolvePath(parentPath, route.path);
  if (route.children) {
    result.push(...flattenRoutes(route.children, path));
  } else {
    const flattenedNode: CubSubRouteRecordRaw = { ...route, path };
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
  initState.layout = options.layout;
  initState.router = options.router;

  if (!initState.layout) throw new Error('The "setupCubAdmin" method is missing the "layout" parameter!');
  if (!initState.router) throw new Error('The "setupCubAdmin" method is missing the "router" parameter!');

  initState.router.addRoute({
    path: '/',
    component: initState.layout,
    name: BasicRouteName,
    meta: {
      title: 'System Basic Routes',
    },
    children: [],
  });
  basicPages.forEach((route) => {
    initState.router!.addRoute(BasicRouteName, route);
  });
  initState.router.addRoute(BasicRouteName, NotFoundPage);

  const routes = initState.router.getRoutes();
  const affixRoutes = routes.filter((route) => route.meta?.affix === true || typeof route.meta?.affix === 'number');
  affixRoutes.forEach((item) => {
    addTag(item as any);
  });
};

// ------------------------- Routes Registration and Unregistration START -----------------------------
const routesCallStack: { [key: RegisterRoutesModuleName]: (() => void)[] | undefined } = {};
const defaultRoutesStackName = Symbol();
let routeAddCounter = 0;
export const registerRoutes = (...args: RegisterOptions) => new Promise((resolve, reject) => {
  try {
    if (!initState.router || !initState.layout) throw new Error('"setupCubAdmin" method must be called once before getting started!');
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
        if (component === 'CubLayout') return initState.layout;
        return modules[`${viewsPath}${component}`]?.default;
      }
      return component;
    };
    const addRoutes = (routes: (CubRouteRecordRaw | CubSubRouteRecordRaw)[], parentName?: RouteRecordName) => {
      routes.forEach((item) => {
        if (!item.meta?.onlyMenu && item.path && item.component) {
          const component = getComponent(item.component);
          if (!component) throw new Error('Component Not Found, Please Check if the Component Path Configuration is Correct.');
          const route = {
            ...item,
            name: item.component === 'CubLayout' ? `CubLayout|${routeAddCounter += 1}` : (item.name || `CubRoute|${routeAddCounter += 1}`),
            component,
            children: undefined,
          };
          if (!routesCallStack[name]) routesCallStack[name] = [];
          if (parentName) {
            routesCallStack[name]!.push(initState.router!.addRoute(parentName, route as RouteRecordRaw));
          } else {
            routesCallStack[name]!.push(initState.router!.addRoute(route as RouteRecordRaw));
          }
          if (item.children?.length) addRoutes(item.children, route.name);
        }
      });
    };
    initState.router.removeRoute(NotFoundPage.name!);
    addRoutes(transformRoutes(allRoutes));
    initState.router.addRoute(BasicRouteName, NotFoundPage);

    generateMenus(name, allRoutes);

    const routes = initState.router.getRoutes();
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
