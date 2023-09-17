// eslint-disable-next-line import/no-relative-packages
import pkg from '../../../../package.json';

export const metadata = {
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  author: pkg.author,
  license: pkg.license,
  homepage: pkg.homepage,
  devDependencies: pkg.devDependencies,
  peerDependencies: pkg.peerDependencies,
};

// eslint-disable-next-line no-console
console.info(
  `%cBuilt with%c${pkg.name}@v${pkg.version}%c🚀`,
  'padding: 2px 5px; background-color: #fb7299; font-weight: bold; color: #fff;',
  'padding: 2px 8px; background-color: #00c0ff; font-weight: bold; color: #fff;',
  'padding: 0 4px; font-size: 16px;',
);
