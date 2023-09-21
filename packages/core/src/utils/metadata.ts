// eslint-disable-next-line import/no-relative-packages
import { name, version } from '../../../../package.json';

// eslint-disable-next-line no-console
console.info(
  `%cBuilt with%c${name}@v${version}%c🚀`,
  'padding: 2px 5px; background-color: #fb7299; font-weight: bold; color: #fff;',
  'padding: 2px 8px; background-color: #00c0ff; font-weight: bold; color: #fff;',
  'padding: 0 4px; font-size: 16px;',
);
