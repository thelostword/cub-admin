import { cache, wrapperMap, initState } from '../store';

export const addCache = (path: string) => {
  const ndx = cache.findIndex((_path) => _path === path);
  if (ndx !== -1) cache.splice(ndx, 1);
  cache.push(path);
  if (cache.length > initState.maxCacheSize) wrapperMap.delete(cache.shift()!);
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
