import type { RouteLocationNormalized } from 'vue-router';
import { tags } from '../store';

export const addTag = (route: RouteLocationNormalized) => {
  if (!route.meta.title || !route.name) return;
  if (route.meta.noTag) return;
  if (tags.some(({ path }) => path === route.path)) return;
  const currentIndex = +(route.meta.affix ?? 999);

  if (route.meta.affix === true || typeof route.meta.affix === 'number') {
    if (tags.length === 0 || currentIndex <= +(tags[0].meta.affix ?? 999)) {
      tags.unshift(route);
    } else {
      const insertIndex = tags.findIndex((item) => +(item.meta.affix ?? 999) > currentIndex);
      if (insertIndex === -1) {
        tags.push(route);
      } else {
        tags.splice(insertIndex, 0, route);
      }
    }
  } else tags.push(route);
};

export const removeTag = (route: RouteLocationNormalized, force: boolean = false) => {
  if (route.meta?.affix && !force) return;
  const index = tags.findIndex(({ path }) => path === route.path);
  tags.splice(index >>> 0, 1);
};

export const removeOtherTags = (route: RouteLocationNormalized) => {
  const newTags = tags.filter(({ path, meta }) => !!meta.affix || path === route.path);
  tags.splice(0, tags.length, ...newTags);
};

export const clearTags = () => {
  const newTags = tags.filter(({ meta }) => !!meta.affix);
  tags.splice(0, tags.length, ...newTags);
};
