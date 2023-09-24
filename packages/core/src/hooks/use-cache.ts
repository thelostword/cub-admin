import { useRouter } from 'vue-router';
import { addCache } from '../utils/cache';

export function useCache(noCache: boolean) {
  if (noCache === true) return;
  const router = useRouter();
  router.beforeEach((to) => {
    if (to.meta?.noCache !== true) {
      addCache(to.fullPath);
    }
  });
}
