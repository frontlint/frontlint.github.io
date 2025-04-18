import type { Config } from 'stylelint'

const config: Config = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    // 定义属性声明顺序规则
    'order/properties-order': [
      // 定位
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'inset',

      // 布局
      'display',
      'flex',
      'flex-direction',
      'flex-wrap',
      'flex-flow',
      'justify-content',
      'align-items',
      'align-content',
      'grid',
      'grid-template',
      'grid-template-columns',
      'grid-template-rows',

      // 尺寸
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',

      // 外边距
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',

      // 内边距
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',

      // 边框
      'border',
      'border-width',
      'border-style',
      'border-color',
      'border-radius',

      // 背景
      'background',
      'background-color',
      'background-image',
      'background-position',
      'background-repeat',
      'background-size',

      // 文本
      'color',
      'font',
      'font-size',
      'font-family',
      'font-weight',
      'text-align',
      'text-decoration',
      'line-height',
      'letter-spacing',

      // 其他视觉效果
      'opacity',
      'box-shadow',
      'transform',
      'transition',
      'animation',
    ],
  },
}
export default config
