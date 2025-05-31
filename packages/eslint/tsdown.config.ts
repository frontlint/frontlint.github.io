import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src'],
  format: ['esm', 'cjs'],
  clean: true,
  minify: false,
  external: [
    'eslint',
    'eslint/config',
    '@eslint/config',
    '@eslint/js',
    'typescript-eslint',
    'eslint-plugin-import',
    'eslint-plugin-prettier',
    'eslint-config-love',
    'globals',
    // vue
    'eslint-plugin-vue',
    '@vue/eslint-config-prettier',
    '@vue/eslint-config-prettier/skip-formatting',
    '@vue/eslint-config-typescript',
    'eslint-plugin-oxlint',
    'eslint-plugin-vitest',
    'eslint-plugin-cypress',
    'eslint-plugin-cypress/flat',
    '@vitest/eslint-plugin',
    // react
    'eslint-plugin-react-refresh',
    'eslint-plugin-react-hooks',
    'jiti',
    /^node:/,
  ],
  dts: true,
  outputOptions: {
    exports: 'named',
  },
})
