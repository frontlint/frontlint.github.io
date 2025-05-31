import type { Config } from 'stylelint'
import type stylelint from 'stylelint'
import orderConfig from './properties-order'

export interface StylelintConfig {
  scss?: boolean
  order?: boolean
}

export function defineConfig(
  config: StylelintConfig = {
    scss: true,
    order: true,
  },
): Config & {
  extends: string[]
  plugins: Array<string | stylelint.Plugin>
  rules: Record<string, stylelint.ConfigRuleSettings<unknown, object>>
} {
  const stylelintConfig: Config & {
    extends: string[]
    plugins: Array<string | stylelint.Plugin>
    rules: Record<string, stylelint.ConfigRuleSettings<unknown, object>>
  } = {
    extends: ['stylelint-config-standard'],
    ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/coverage/**'],
    plugins: [],
    rules: {},
  }
  if (config.scss ?? false) {
    stylelintConfig.extends = ['stylelint-config-standard-scss']
  }
  if (config.order ?? false) {
    stylelintConfig.plugins.push('stylelint-order')
    stylelintConfig.rules['order/properties-order'] = orderConfig
  }

  return stylelintConfig
}

const stylelintConfig: Config = {
  extends: ['stylelint-config-standard-scss'],
  ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/coverage/**'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-order': orderConfig,
  },
}
export default stylelintConfig
