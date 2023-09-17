import type { RouteLocationNormalized } from 'vue-router';
import { cache } from '../store';

export const addCache = (route: RouteLocationNormalized) => {
  if (!route.name) return;
  if (route.meta?.noCache) return;
  if (cache.dynamic.includes(route.name as string)) return;
  cache.dynamic.push(route.name as string);

  if (route.meta?.affix && !cache.permanent.includes(route.name as string)) {
    cache.permanent.push(route.name as string);
  }
};

export const removeCache = (route: RouteLocationNormalized) => {
  if (!route.name) return;
  if (cache.permanent.includes(route.name as string)) return;
  const ndx = cache.dynamic.findIndex((name) => name === route.name);
  cache.dynamic.splice(ndx >>> 0, 1);
};

export const removeOtherCaches = (route: RouteLocationNormalized) => {
  if (!route.name) return;
  if (cache.permanent.includes(route.name as string)) cache.dynamic = [...cache.permanent];
  else cache.dynamic = [...cache.permanent, route.name as string];
};

export const clearCaches = () => {
  cache.dynamic = [...cache.permanent];
};
