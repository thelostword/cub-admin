import { reactive, shallowReactive } from 'vue';
import type { Component } from 'vue';
import type { RouteLocationNormalized } from 'vue-router';
import type { MenuRecord, SetupOptions } from '../typescript';

type SetupOptionsRequired = {
  [K in keyof SetupOptions]-?: SetupOptions[K];
};

/**
 * 运行前必须要的参数
 */
export const initState: SetupOptionsRequired = {
  layout: undefined!,
  router: undefined!,
  maxCacheSize: 10,
};
export const tags: RouteLocationNormalized[] = shallowReactive<RouteLocationNormalized[]>([]);
export const menus: MenuRecord[] = shallowReactive<MenuRecord[]>([]);
export const subMenus: MenuRecord[] = shallowReactive<MenuRecord[]>([]);
export const cache: string[] = reactive<string[]>([]);
export const wrapperMap: Map<string, Component> = new Map();
