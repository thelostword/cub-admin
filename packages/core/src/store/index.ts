import { reactive, shallowReactive } from 'vue';
import type { Component } from 'vue';
import type { Router, RouteLocationNormalized } from 'vue-router';
import type { MenuRecord } from '../typescript';

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
export const subMenus: MenuRecord[] = shallowReactive<MenuRecord[]>([]);
export const cache: string[] = reactive<string[]>([]);
export const wrapperMap: Map<string, Component> = new Map();
