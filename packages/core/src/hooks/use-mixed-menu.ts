import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { isURL } from '@cub-admin/utils';
import { menus, subMenus } from '../store';

export const isMixedMenu = ref(false);

export function useMixedMenu() {
  const topMenuActivePath = ref('/');

  isMixedMenu.value = true;

  const router = useRouter();
  const { currentRoute } = router;

  const navigateTo = (path: string) => {
    if (isURL(path)) {
      window.open(path, '_blank');
      return;
    }
    router.push(path);
  };

  const matchMenu = () => {
    const menu = menus.find((item) => item.path === currentRoute.value.matched[0].path);
    if (!menu) {
      subMenus.splice(0, subMenus.length);
      topMenuActivePath.value = '/';
      return;
    }
    const children = menu.children?.length ? menu.children : [menu];
    subMenus.splice(0, subMenus.length, ...children);
    topMenuActivePath.value = menu.path;
  };

  watch(() => currentRoute.value.fullPath, matchMenu);
  watch(menus, matchMenu, { immediate: true });

  const onSwitch = (path: string) => {
    if (topMenuActivePath.value === path) return;
    const menu = menus.find((item) => item.path === path)!;
    const children = menu.children?.length ? menu.children : [menu];
    subMenus.splice(0, subMenus.length, ...children);
    topMenuActivePath.value = menu.path;
    if (children.length === 1) navigateTo(children[0].path);
  };

  return {
    topMenuActivePath,
    onSwitch,
  };
}
