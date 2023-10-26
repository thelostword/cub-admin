import { useRouter } from 'vue-router';
import { addCache } from '../utils/cache';

export function useCache(noCache: boolean) {
  const router = useRouter();
  router.beforeEach((to) => {
    if (!noCache || !to.meta.noCache) {
      addCache(to.path);
    }
  });
}
