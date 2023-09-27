import { useRouter } from 'vue-router';
import { addCache, removeCache } from '../utils/cache';
import { cache } from '../store';

export function useCache(noCache: boolean, noTagsView: boolean) {
  const router = useRouter();
  router.beforeEach((to) => {
    if (!to.meta?.noCache || !noCache) {
      addCache(to.fullPath);
    }
  });
  // TODO 缓存超出限制后，清除其中最不活跃的组件缓存
  router.afterEach((_, from) => {
    if (noTagsView && cache.length > 10) {
      removeCache(from.path);
    }
  });
}
