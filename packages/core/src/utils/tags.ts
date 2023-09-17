import type { RouteLocationNormalized } from 'vue-router';
import store from '../store';

export const addTag = (route: RouteLocationNormalized) => {
  if (!route.meta?.title || !route.name) return;
  if (route.meta?.noTag) return;
  if (store.tags.some(({ path }) => path === route.path)) return;
  const currentIndex = +(route.meta.affix ?? 999);

  if (route.meta.affix === true || typeof route.meta.affix === 'number') {
    if (store.tags.length === 0 || currentIndex <= +(store.tags[0].meta.affix ?? 999)) {
      store.tags.unshift(route);
    } else {
      const insertIndex = store.tags.findIndex((item) => +(item.meta.affix ?? 999) > currentIndex);
      if (insertIndex === -1) {
        store.tags.push(route);
      } else {
        store.tags.splice(insertIndex, 0, route);
      }
    }
  } else store.tags.push(route);
};

export const removeTag = (route: RouteLocationNormalized) => {
  if (route.meta?.affix) return;
  const index = store.tags.findIndex(({ path }) => path === route.path);
  store.tags.splice(index >>> 0, 1);
};

export const removeOtherTags = (route: RouteLocationNormalized) => {
  store.tags = store.tags.filter(({ path, meta }) => !!meta?.affix || path === route.path);
};

export const clearTags = () => {
  store.tags = store.tags.filter(({ meta }) => !!meta?.affix);
};
