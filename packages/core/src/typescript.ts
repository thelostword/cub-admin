import type { Component } from 'vue';
import type { BadgeProps } from 'element-plus';
import type { RouteRecordRaw, RouteComponent, Router } from 'vue-router';

export type CustomSize = string | number;
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

/**
 * 子路由配置
 */
export type CubSubRouteRecordRaw = Omit<RouteRecordRaw, 'component' | 'children'>
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

/**
 * 路由配置
 */
export type CubRouteRecordRaw = Omit<RouteRecordRaw, 'component' | 'components' | 'children'>
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

export type EagerGlobModule = {
  [path: string]: {
    default: () => Component
  };
};

export type SetupOptions = {
  layout: RouteComponent;
  router: Router;
};

/**
 * 注册路由
 */
export type RegisterRoutesOptions = {
  routes: CubRouteRecordRaw[];
  viewsPath: string
  modules: EagerGlobModule;
};

/**
 * 路由模块名
 */
export type RegisterRoutesModuleName = string | symbol;
export type RegisterOptions = [RegisterRoutesModuleName, RegisterRoutesOptions] | [RegisterRoutesOptions];

type EventKey = symbol | undefined;
export type RegisterArgs = {
  options: RegisterOptions;
  eventKey: EventKey;
};
