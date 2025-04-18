---
outline: deep
---

# commitlint

[commitlint](https://commitlint.js.org) 是一个强大的工具，用于检查 git 提交信息是否符合特定格式规范。使用标准化的提交信息格式可以自动生成清晰的变更日志，并使团队更容易理解每次提交的目的

## 安装

::: info 前置条件
安装前确保你已经初始化了 git 仓库 (git init)
:::

安装 `commitlint` 核心依赖 `@commitlint/config-conventional` 、 `@commitlint/cli`
::: code-group

```sh [npm]
npm install --save-dev @commitlint/{cli,config-conventional}
```

```sh [npm (Windows)]
npm install --save-dev @commitlint/config-conventional @commitlint/cli
```

```sh [pnpm]
pnpm add --save-dev @commitlint/{cli,config-conventional}
```

```sh [pnpm (Windows)]
pnpm add --save-dev @commitlint/config-conventional @commitlint/cli
```

:::

第二步：安装 FrontLint 预设配置 `@frontlint/commitlint`
::: code-group

```sh [npm]
npm install --save-dev @frontlint/commitlint
```

```sh [pnpm]
pnpm add --save-dev @frontlint/commitlint
```

:::

## 使用

### 基础配置

创建配置文件 ，继承 FrontLint 的规则预设：
::: code-group

```ts [commitlint.config.ts]
export default {
  extends: '@frontlint/commitlint',
}
```

```js [commitlint.config.js]
module.exports = {
  extends: '@frontlint/commitlint',
}
```

:::

### 自定义配置

如需自定义规则，可以在配置文件中添加规则：

```ts
export default {
  extends: '@frontlint/commitlint',
  rules: {
    'body-max-line-length': [2, 'always', 200],
    // 添加更多自定义规则...
  },
}
```

## 与 husky 集成

```bash
# 安装 husky
npm install --save-dev husky

# 初始化 husky
npx husky init

# 添加 commit-msg 钩子
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

## 提交信息格式指南

FrontLint 预设遵循 Angular 提交规范，格式如下：

```
<类型>[可选作用域]: <描述>

[可选正文]

[可选脚注]
```

类型说明

- feat: 新功能
- fix: 修复缺陷
- docs: 文档更新
- style: 代码样式调整（不影响功能）
- refactor: 重构代码
- perf: 性能优化
- test: 添加或修改测试
- build: 构建系统或外部依赖变更
- ci: ci 配置或脚本变更
- chore: 其他不修改源码或测试的变更

通过 [commitlint](https://commitlint.js.org) 强制执行提交信息规范，你的项目将拥有更加清晰和结构化的提交历史。
