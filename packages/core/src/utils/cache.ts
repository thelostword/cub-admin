import { cache, wrapperMap } from '../store';

export const addCache = (fullPath: string) => {
  if (cache.includes(fullPath)) return;
  cache.push(fullPath);
};

export const removeCache = (fullPath: string) => {
  const ndx = cache.findIndex((path) => path === fullPath);
  cache.splice(ndx >>> 0, 1);
  wrapperMap.delete(fullPath);
};

export const removeOtherCaches = (fullPath: string) => {
  cache.forEach((path) => {
    if (path !== fullPath) wrapperMap.delete(path);
  });
  cache.splice(0, cache.length, fullPath);
};

export const clearCaches = () => {
  cache.splice(0, cache.length);
  wrapperMap.clear();
};
