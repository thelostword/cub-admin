import { ref, watch } from 'vue';

type ModeType = 'light' | 'dark' | 'system';

const MODE_STORAGE_KEY = '__cub_admin_mode__';

const historyMode = window.localStorage.getItem(MODE_STORAGE_KEY) || 'system';
const rootEl = document.documentElement;
const mode = ref<ModeType>(historyMode as ModeType);

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const handleSystemModeChange = (e: MediaQueryListEvent | MediaQueryList) => {
  const systemModeValue = e.matches ? 'dark' : 'light';
  if (systemModeValue === 'dark') rootEl.classList.add('dark');
  else rootEl.classList.remove('dark');
};
mediaQuery.addEventListener('change', handleSystemModeChange);

const setStyle = (m: ModeType) => {
  if (m === 'dark') rootEl.classList.add('dark');
  else if (m === 'light') rootEl.classList.remove('dark');
  else handleSystemModeChange(mediaQuery);
};

type CallFunc = (mode: ModeType) => void;
const callStack: CallFunc[] = [];

export function useMode() {
  const onChanged = (cb: CallFunc) => {
    if (typeof cb === 'function') callStack.push(cb);
  };
  watch(mode, (newMode, oldMode) => {
    if (newMode !== oldMode) {
      setStyle(newMode);
      window.localStorage.setItem(MODE_STORAGE_KEY, newMode);
      callStack.forEach((cb) => cb(newMode));
    }
  });
  setStyle(mode.value);
  return {
    mode,
    onChanged,
  };
}
