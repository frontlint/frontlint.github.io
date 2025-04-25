import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier'
import importPlugin from 'eslint-plugin-import'
import rules from './rules'

export const prettierConfig = {
  plugins: {
    prettier,
  },
  rules: {
    'prettier/prettier': 'error',
  },
}

export default defineConfig([
  {
    files: ['**/*.js'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    ignores: ['node_modules/**'],
  },
  {
    rules,
    plugins: {
      import: importPlugin,
    },
  },
  prettierConfig,
])
