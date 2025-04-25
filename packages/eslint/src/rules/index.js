/**
 * ESLint 规则配置
 * @type {import('eslint').Linter.RulesRecord}
 */
const rules = {
  'no-var': 'error',
  'prefer-const': 'error',
  //  强制使用驼峰
  camelcase: [
    'error',
    {
      properties: 'always', // 强制属性名使用驼峰
      ignoreDestructuring: false, // 检查解构标识符
      ignoreImports: false, // 检查 ES6 导入
      ignoreGlobals: false, // 检查全局变量
      allow: [], // 允许的特殊命名（如正则表达式匹配）
    },
  ],
  'no-use-before-define': 'error',
  'no-multi-assign': 'error',
  quotes: [
    'error',
    'single', // 使用单引号
    {
      avoidEscape: true, // 允许字符串中使用单引号
      allowTemplateLiterals: false, // 不允许使用模板字符串
    },
  ],
  'prefer-template': 'error', // 强制使用模板字符串而不是字符串连接
  'object-shorthand': 'error', // 强制使用简写对象字面量
  'no-new-func': 'error', // 禁止使用 Function 构造函数
  'prefer-arrow-callback': 'error', // 强制使用箭头函数作为回调
  'max-params': [
    'error',
    {
      max: 5, // 函数参数最大数量
    },
  ],
  'dot-notation': 'error',
  eqeqeq: 'error', // 强制使用 === 和 !==
  'no-unneeded-ternary': 'error', // 禁止不必要的三元表达式
  'no-else-return': 'error', // 禁止 else 语句中有 return
  'spaced-comment': 'error', // 强制注释前有空格
  // 'no-warning-comments': 'error', // 禁止警告注释
  'import/order': 'error',
}

export default rules
