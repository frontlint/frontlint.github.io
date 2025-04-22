# @frontlint/stylelint

[stylelint](https://stylelint.io) 是一个强大的 CSS 代码检查工具，用于强制执行一致的代码风格，避免样式错误并提高代码质量。通过自定义规则集，可以确保团队遵循统一的 CSS 编码标准

## 安装

首先安装 `stylelint`

```bash
npm i stylelint -D
```

安装 `FrontLint` 的 `stylelint` 预设配置，它提供了开箱即用的最佳实践规则：

```bash
npm i @frontlint/stylelint
```

## 配置

创建 `.stylelintrc.js` 文件在项目根目录：

```js
export default {
  extends: ['@frontlint/stylelint'],
}
```

如需自定义规则，可以覆盖默认配置：

```js
export default {
  extends: ['@frontlint/stylelint'],
  ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/coverage/**'],
  rules: {
    'color-hex-case': 'lower',
    'selector-class-pattern': null,
  },
}
```

## 使用方式

### 命令行使用

添加以下脚本到 `package.json`：

```json
{
  "scripts": {
    "lint:style": "stylelint '**/*.{css,scss}'",
    "lint:style:fix": "stylelint '**/*.{css,scss}' --fix"
  }
}
```

运行检查：

```bash
npm run lint:style
```

运行修复

```bash
npm run lint:style:fix
```

### 编辑器集成

1. 安装 [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) 扩展
2. 添加 VS Code 配置：

```json
// .vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
  "editor.formatOnSave": true,
  "stylelint.validate": ["css", "scss", "less"]
}
```

## 规则

### stylelint-config-standard

[`stylelint-config-standard`](https://www.npmjs.com/package/stylelint-config-standard) 是 `stylelint` 官方推荐的标准配置集，它实现了业界认可的 `css` 编码约定。`FrontLint` 使用这个配置作为基础，并进行了扩展

#### 语法错误检测

```css
/* 错误示例 - 缺少分号 */
.element {
  color: #333
  margin: 10px;
}

/* 正确示例 */
.element {
  color: #333;
  margin: 10px;
}
```

#### 格式规范

强制执行一致的格式约定：

- 缩进规则（2空格）
- 空格使用规范
- 换行规则
- 颜色格式规范

```css
/* 不符合规范 */
.element {
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
}

/* 符合规范 */
.element {
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
}
```

#### 命名约定

确保选择器和类名遵循一致的命名模式：

```css
/* 不推荐 */
.userProfileContainer {
  /* 驼峰式命名 */
  display: flex;
}

/* 推荐 - 使用连字符分隔 */
.user-profile-container {
  display: flex;
}
```

#### 限制功能

防止使用过时或存在兼容性问题的特性：

```css
/* 不推荐 - 旧的IE滤镜 */
.element {
  filter: progid:DXImageTransform.Microsoft.gradient(...);
}
```

#### 值验证

验证属性值是否符合规范：

```css
/* 错误 - 无效的颜色值 */
.element {
  color: #xyz;
}

/* 错误 - 无效的长度单位 */
.element {
  width: 50pixels;
}
```

#### 冗余检测

检测和报告冗余或重复的声明：

```css
/* 冗余示例 */
.element {
  margin-top: 10px;
  margin-top: 20px; /* 重复声明 */
}
```

#### stylelint-config-standard-scss

当启用 `scss` 选项时，FrontLint 会使用 [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss) 配置，它扩展了标准配置并添加了对 `scss` 语法的支持：

- 嵌套规则验证
- 变量命名规范
- `@mixin` 和 `@include` 使用规则
- 占位符选择器规范

### stylelint-order

`FrontLint` 使用 `stylelint-order` 插件强制执行 CSS 属性的特定排序，提高代码一致性和可读性。属性按照以下逻辑分组排序：

- 定位属性（position, top, z-index等）
- 布局属性（display, flex等）
- 尺寸属性（width, height等）
- 边距属性（margin, padding）
- 边框属性（border, border-radius）
- 背景属性（background等）
- 文本属性（color, font等）
- 其他视觉效果（opacity, transform等）

这种排序方式遵循"从外到内"的原则，使代码结构更符合元素渲染的逻辑顺序。

<details>
<summary>顺序规则</summary>

```ts
// 顺序规则
export default [
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
]
```

</details>
