import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint, { ConfigArray } from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import love from 'eslint-config-love'
// @ts-expect-error: The 'eslint-plugin-import' module does not have TypeScript typings
import importPlugin from 'eslint-plugin-import'
import rules from './rules'

const config: ConfigArray = tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2025,
      globals: globals.browser,
    },
    ...love,
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'error',
      ...rules,
    },
  },
)
export default config
