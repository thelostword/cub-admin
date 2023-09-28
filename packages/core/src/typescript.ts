import type { Component } from 'vue';
import type { BadgeProps } from 'element-plus';
import type {
  RouteRecordRaw,
  RouteComponent,
  Router,
  RouteMeta,
} from 'vue-router';

export type NativeType = null | number | string | boolean | symbol | Function;
export type NonEmptyArray<T> = [T, ...T[]];

export type InferDefault<P, T> = ((props: P) => T & {}) | (T extends NativeType ? T : never);
export type InferDefaults<T> = {
  [K in keyof T]?: InferDefault<T, T[K]>;
};

export type MenuRecord = {
  /**
   * 菜单名称
   */
  name: string;
  /**
   * 菜单路径
   */
  path: string;
  /**
   * 菜单图标
   */
  icon?: string | Component;
  /**
   * 菜单排序
   */
  sort: number;
  /**
   * badge 配置 同 el-badge props
   */
  badge?: { -readonly [K in keyof BadgeProps]?: BadgeProps[K] };
  /**
   * 子菜单
   */
  children?: MenuRecord[];
};

type Lazy<T> = () => Promise<T>;
type RawRouteComponent = RouteComponent | Lazy<RouteComponent>;

type CubRouteRecordRawBasic = Omit<RouteRecordRaw, 'path' | 'component' | 'components' | 'children' | 'meta'> & { meta: RouteMeta };
/** 子路由有 children */
type CubSubRouteRecordRaw1 = {
  path?: string;
  component?: undefined;
  children: CubSubRouteRecordRaw[];
};
/** 子路由无 children */
type CubSubRouteRecordRaw2 = {
  path: string;
  component?: string | RawRouteComponent;
  children?: undefined;
};

/** 有 children */
type CubRouteRecordRaw1 = {
  path: string;
  component: string | RawRouteComponent;
  children: CubSubRouteRecordRaw[];
};
/** 无 children */
type CubRouteRecordRaw2 = {
  path: string;
  component?: RawRouteComponent;
  children?: undefined;
};
/**
 * 子路由配置
 */
export type CubSubRouteRecordRaw = CubRouteRecordRawBasic & (CubSubRouteRecordRaw1 | CubSubRouteRecordRaw2);

/**
 * 路由配置
 */
export type CubRouteRecordRaw = CubRouteRecordRawBasic & (CubRouteRecordRaw1 | CubRouteRecordRaw2);

export type SetupOptions = {
  /**
   * layout 组件，当component为CubLayout时使用的布局组件
   */
  layout: RouteComponent;
  /**
   * 路由实例
   */
  router: Router;
  /**
   * 最大缓存
   */
  maxCacheSize?: number;
};

/**
 * 注册路由
 */
export type RegisterRoutesOptions = {
  /**
   * 路由配置
   */
  routes: CubRouteRecordRaw[];
  /**
   * 页面所在文件夹路径
   */
  viewsPath: string
  /**
   *
   */
  modules: Record<string, { default: () => Component }>;
};

/**
 * 路由模块名
 */
export type RegisterRoutesModuleName = string | symbol;
export type RegisterOptions = [RegisterRoutesModuleName, RegisterRoutesOptions] | [RegisterRoutesOptions];
