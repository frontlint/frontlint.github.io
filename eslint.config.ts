import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'

export default tseslint.config([
  {
    ignores: [
      'node_modules/**',
      'packages/*/node_modules',
      'packages/*/dist',
      'docs/.vitepress/cache',
    ],
  },
  tseslint.configs.recommended,
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
])
