import { defineComponent, h } from 'vue';
import { useRouter } from 'vue-router';
import { removeTag } from '../utils/tags';

export default defineComponent({
  name: 'CubPageNotFound',
  setup() {
    const router = useRouter();

    return () => h('div', {}, [
      h('span', {
        onclick: () => {
          router.back();
          removeTag(router.currentRoute.value);
        },
      }, '返回上一页'),
    ]);
  },
});
