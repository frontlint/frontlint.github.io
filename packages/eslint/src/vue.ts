import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import { Config as TSCONFIG } from 'typescript-eslint'
// import pluginVitest from '@vitest/eslint-plugin'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import pluginCypress from 'eslint-plugin-cypress/flat'
import pluginOxlint from 'eslint-plugin-oxlint'
// import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import prettier from 'eslint-plugin-prettier'
// import love from 'eslint-config-love'
import { Linter } from 'eslint'
// @ts-expect-error: The 'eslint-plugin-import' module does not have TypeScript typings
import importPlugin from 'eslint-plugin-import'
import rules from './rules'

type Config = (Linter.Config<Linter.RulesRecord> | Linter.FlatConfig[])[]

export function defineConfig(
  config: Config = [],
  options: {
    vitest?: boolean
    cypress?: boolean
    rules?: Linter.RulesRecord
  } = {
    vitest: true,
    cypress: true,
    rules: {},
  },
): TSCONFIG {
  const baseConfig: Config = [
    {
      name: 'app/files-to-lint',
      files: ['**/*.{ts,mts,tsx,vue}'],
    },

    globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommended,
    {
      files: ['**/*.{ts,mts,tsx,vue}'],
      rules: {
        ...rules,
        ...options?.rules,
      },
    },
    ...pluginOxlint.configs['flat/recommended'],
    {
      files: ['**/*.{ts,mts,tsx,vue}'],

      plugins: {
        import: importPlugin,
        prettier,
      },
      rules: {
        'prettier/prettier': 'error',
      },
    },
    // skipFormatting,
  ]
  if (options?.vitest) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const pluginVitest = require('@vitest/eslint-plugin')

    config.push({
      ...pluginVitest.configs.recommended,
      files: ['src/**/__tests__/*'],
    })
  }
  if (options?.cypress) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const pluginCypress = require('eslint-plugin-cypress/flat')

    config.push({
      ...pluginCypress.configs.recommended,
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
    })
  }
  config = [...baseConfig, ...config]

  return defineConfigWithVueTs(...config)
}
export default defineConfig([], {
  vitest: false,
  cypress: false,
}) as TSCONFIG
