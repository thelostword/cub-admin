require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-airbnb-with-typescript',
    '@vue/eslint-config-airbnb-with-typescript/allow-jsx-in-vue',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'vue/multi-word-component-names': 0,
    'import/prefer-default-export': 0,
    'symbol-description': 0,
    'vue/max-len': 0,
    'no-restricted-syntax': 0,
    'no-bitwise': 0,
  },
};
