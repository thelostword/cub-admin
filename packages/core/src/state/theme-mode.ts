import { ref, readonly } from 'vue';

type ModeType = 'light' | 'dark' | 'system';

const MODE_STORAGE_KEY = '__cub_admin_mode__';

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const rootEl = document.documentElement;

const historyMode = window.localStorage.getItem(MODE_STORAGE_KEY) || 'system';
const originalMode = ref<ModeType>(historyMode as ModeType);
export const themeMode = readonly(originalMode);

const onSystemModeChange = (e: MediaQueryListEvent | MediaQueryList) => {
  const systemModeValue = e.matches ? 'dark' : 'light';
  if (systemModeValue === 'dark') rootEl.classList.add('dark');
  else rootEl.classList.remove('dark');
};
mediaQuery.addEventListener('change', onSystemModeChange);

const setStyle = (m: ModeType) => {
  if (m === 'dark') rootEl.classList.add('dark');
  else if (m === 'light') rootEl.classList.remove('dark');
  else onSystemModeChange(mediaQuery);
};
setStyle(themeMode.value);

export const setThemeMode = (mode: ModeType) => {
  setStyle(mode);
  const m = mode !== 'light' && mode !== 'dark' ? 'system' : mode;
  originalMode.value = m;
  window.localStorage.setItem(MODE_STORAGE_KEY, m);
};
