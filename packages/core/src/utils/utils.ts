import { resolve } from 'path-browserify';
import { isURL } from '@cub-admin/utils';

export const resolvePath = (basePath: string, path: string) => {
  if (isURL(path)) return path;
  return resolve(basePath || '/', path);
};
