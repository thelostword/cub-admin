import { useRouter } from 'vue-router';
import { addCache } from '../utils/cache';

export function useCache(noCache: boolean) {
  const router = useRouter();
  router.beforeEach((to) => {
    if (!to.meta.noCache || !noCache) {
      addCache(to.path);
    }
  });
}
