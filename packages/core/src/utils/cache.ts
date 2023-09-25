import { cache, wrapperMap } from '../store';

export const addCache = (path: string) => {
  if (cache.includes(path)) return;
  cache.push(path);
};

export const removeCache = (path: string) => {
  const ndx = cache.findIndex((_path) => _path === path);
  cache.splice(ndx >>> 0, 1);
  wrapperMap.delete(path);
};

export const removeOtherCaches = (path: string) => {
  cache.forEach((_path) => {
    if (_path !== path) wrapperMap.delete(_path);
  });
  cache.splice(0, cache.length, path);
};

export const clearCaches = () => {
  cache.splice(0, cache.length);
  wrapperMap.clear();
};
