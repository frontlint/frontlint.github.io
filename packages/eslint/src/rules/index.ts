import { Linter } from 'eslint'
import baseRules from './index.js'

const rules: Linter.RulesRecord = {
  ...baseRules,
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/no-unsafe-argument': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
}
export default rules
