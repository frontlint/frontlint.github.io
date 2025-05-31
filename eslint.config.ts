import tslint from 'typescript-eslint'
import config from './packages/eslint/src/ts'

export default tslint.config([
  ...config,
  {
    ignores: [
      'node_modules/**',
      'packages/*/node_modules',
      'packages/*/dist',
      'docs/.vitepress/cache',
      'packages/*/coverage',
      'dist/**',
    ],
  },
])
