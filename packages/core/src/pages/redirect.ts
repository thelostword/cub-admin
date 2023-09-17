import { defineComponent, h } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'CubPageRedirect',
  setup() {
    const router = useRouter();

    const { params } = router.currentRoute.value;
    router.replace({
      path: window.decodeURIComponent(params.path as string) || '/',
    });

    return () => h('span');
  },
});
