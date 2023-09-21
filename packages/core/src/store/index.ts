import { reactive, shallowReactive } from 'vue';
import type { Component } from 'vue';
import type { Router, RouteLocationNormalized } from 'vue-router';
import type { MenuRecord } from '../typescript';

type Cache = {
  permanent: string[];
  dynamic: string[];
};

type InitState = {
  /**
   * layout 组件
   */
  layout?: Component;
  /**
   * router 实例
   */
  router?: Router;
  /**
   * 要使用的UI库名称
   * @default "element-plus"
   */
  ui?: 'element-plus'
};
/**
 * 运行前必须要的参数
 */
export const initState: InitState = {
  layout: undefined,
  router: undefined,
  ui: 'element-plus',
};

export const tags: RouteLocationNormalized[] = shallowReactive<RouteLocationNormalized[]>([]);
export const menus: MenuRecord[] = shallowReactive<MenuRecord[]>([]);
export const cache: Cache = reactive<Cache>({
  permanent: [],
  dynamic: [],
});

// export default {
//   tags,
//   cache,
//   menus,
// };
