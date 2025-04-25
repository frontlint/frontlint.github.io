import tseslint, { ConfigArray } from 'typescript-eslint'
import eslint from '@eslint/js'
// @ts-expect-error: The 'eslint-plugin-import' module does not have TypeScript typings
import importPlugin from 'eslint-plugin-import'
import love from 'eslint-config-love'
import prettier from 'eslint-plugin-prettier'
import rules from './rules'

const config: ConfigArray = tseslint.config([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    plugins: {
      import: importPlugin,
    },
    ...love,
    rules,
  },
  {
    files: ['**/*.ts', '**/*.js'],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
])
export default config
