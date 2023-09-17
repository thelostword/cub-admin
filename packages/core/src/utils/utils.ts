import { resolve } from 'path-browserify';
import { isURL } from '@cub-admin/utils';

export const resolvePath = (path: string, basePath: string) => {
  if (isURL(path)) return path;
  return resolve(basePath, path);
};
