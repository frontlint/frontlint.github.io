---
outline: deep
---

# markdownlint

[markdownlint](https://github.com/DavidAnson/markdownlint) 是一个风格检查和规范工具，可帮助确保 Markdown 文档的一致性与可读性。FrontLint 提供了一套预配置的 markdownlint 规则，让你快速集成到项目中。

## 安装

安装 `markdownlint-cli` 和 `@frontlint/markdownconfig`

```bash
npm i @frontlint/markdownconfig markdownlint-cli -D
```

## 使用

### 基础配置

在 `.markdownlint.json` 中继承本包

```json
{
  "extends": "@frontlint/markdownconfig"
}
```

### 自定义规则

需要自定义规则时，可在配置中覆盖特定规则：

```json
{
  "extends": "@frontlint/markdownconfig",
  "line-length": {
    "line_length": 120
  },
  "no-inline-html": false
}
```

## 相关资源

- [markdownlint-cli 官方文档](https://github.com/igorshubovych/markdownlint-cli)
- [markdownlint 规则列表](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md)

这些配置可以帮助团队保持一致的文档风格，提高文档可读性和协作效率。
