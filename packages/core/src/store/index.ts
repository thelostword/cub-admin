import { reactive, shallowReactive } from 'vue';
import type { RouteLocationNormalized } from 'vue-router';
import type { MenuRecord } from '../typescript';

type Cache = {
  permanent: string[];
  dynamic: string[];
};

export const tags: RouteLocationNormalized[] = reactive<RouteLocationNormalized[]>([]);
export const menus: MenuRecord[] = shallowReactive<MenuRecord[]>([]);
export const cache: Cache = reactive<Cache>({
  permanent: [],
  dynamic: [],
});

export default {
  tags,
  cache,
  menus,
};
