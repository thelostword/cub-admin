import { cloneDeep } from 'lodash-es';
import { resolvePath } from './utils';
import type {
  MenuRecord, CubRouteRecordRaw, CubSubRouteRecordRaw, RegisterRoutesModuleName,
} from '../typescript';
import { menus } from '../store';

// ------------------------- 菜单处理逻辑 START -----------------------------
let count = 0;
const routeToMenu = (route: CubRouteRecordRaw | CubSubRouteRecordRaw, basePath = '/'): MenuRecord => {
  const children: MenuRecord[] = [];
  if (route.children?.length) {
    if (route.children.length === 1) return routeToMenu(route.children[0], resolvePath(basePath, route.path));
    for (const scope of route.children) {
      if (!scope.meta?.onlyRoute) {
        children.push(routeToMenu(scope, resolvePath(basePath, route.path)));
      }
    }
  }
  let path = resolvePath(basePath, route.path);
  path = children.length ? `${path}|${count += 1}` : path;

  return {
    name: route.meta?.title || path,
    path,
    icon: route.meta?.icon,
    sort: route.meta?.sort ?? 999,
    badge: route.meta?.badge,
    children: children.sort((a, b) => a.sort - b.sort),
  };
};

const menusMap: { [key: RegisterRoutesModuleName]: MenuRecord[] | undefined } = {};
/**
 * 菜单生成
 * @param name 模块名
 * @param routes 路由
 */
export const generateMenus = (name: RegisterRoutesModuleName, routes: CubRouteRecordRaw[]) => {
  const thatMenus = routes.map((route) => routeToMenu(route));
  menus.push(...thatMenus);
  menus.sort((a, b) => a.sort - b.sort);
  menusMap[name] = thatMenus;
};

/**
 * 菜单拆卸
 * @param name 模块名
 * @returns
 */
export const subductionMenus = (name: RegisterRoutesModuleName) => {
  const thatMenus = cloneDeep(menus);
  if (name === '*') {
    Reflect.ownKeys(menusMap).forEach((key) => {
      menusMap[key]?.forEach((topMenu) => {
        const ndx = thatMenus.findIndex((m) => m.name === topMenu.name);
        thatMenus.splice(ndx >>> 0, 1);
      });
      if (menusMap[key]?.length) menusMap[key]!.length = 0;
    });
    menus.splice(0, menus.length, ...thatMenus);
    return;
  }
  menusMap[name]?.forEach((topMenu) => {
    const ndx = thatMenus.findIndex((m) => m.name === topMenu.name);
    thatMenus.splice(ndx >>> 0, 1);
  });
  menus.splice(0, menus.length, ...thatMenus);
  if (menusMap[name]?.length) menusMap[name]!.length = 0;
};
// ------------------------- 菜单处理逻辑 END -----------------------------
