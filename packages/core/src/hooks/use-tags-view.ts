import type { RouteLocationNormalized } from 'vue-router';
import { useRouter } from 'vue-router';
import { tags } from '../store';
import {
  addTag,
  removeTag,
  removeOtherTags,
  clearTags,
} from '../utils/tags';
import { removeCache, removeOtherCaches, clearCaches } from '../utils/cache';

export const useTagsView = () => {
  const router = useRouter();
  const { currentRoute } = router;
  addTag(currentRoute.value);

  router.beforeEach((to) => {
    addTag(to);
  });

  const isActive = (route?: RouteLocationNormalized) => currentRoute.value.path === route?.path;

  const switchTo = (index: number) => {
    const targetTag = tags[index];
    if (!targetTag) {
      router.push('/');
      return;
    }
    router.push(targetTag.fullPath || targetTag.path);
  };

  const onClose = (route?: RouteLocationNormalized) => {
    const thatRoute = route || currentRoute.value;
    const ndx = tags.findIndex(({ path }) => thatRoute.path === path);

    removeTag(thatRoute);
    removeCache(thatRoute);
    if (isActive(thatRoute)) switchTo(ndx - 1 < 0 ? 0 : ndx - 1);
  };

  const onCloseOthers = (route?: RouteLocationNormalized) => {
    const thatRoute = route || currentRoute.value;
    removeOtherTags(thatRoute);
    removeOtherCaches(thatRoute);
  };

  const onCloseAll = () => {
    clearTags();
    clearCaches();
    if (!currentRoute.value.meta?.affix && typeof currentRoute.value.meta?.affix !== 'number') switchTo(0);
  };

  const onRefresh = () => {
    const { fullPath } = currentRoute.value;
    removeCache(currentRoute.value);
    router.replace({
      path: `/redirect/${window.encodeURIComponent(fullPath)}`,
    });
  };

  return {
    onClose,
    onCloseOthers,
    onCloseAll,
    isActive,
    onRefresh,
  };
};
