import { describe, it, expect } from 'vitest'
import stylelint from 'stylelint'
import config from '../src/index'

describe('stylelint', () => {
  it('should report errors for invalid CSS', async () => {
    const result = await stylelint.lint({
      code: `
        .test {
          color: red;
          position: absolute;  /* 属性顺序错误 */
          unknown: value;      /* 未知属性 */
        }
      `,
      config,
    })

    expect(result.errored).toBe(true)
    expect(result.results[0].warnings.length).toBeGreaterThan(0)

    // 检查是否有未知属性警告
    const unknownPropWarning = result.results[0].warnings.some((warning) =>
      warning.text.includes('unknown'),
    )
    expect(unknownPropWarning).toBe(true)
  })

  it('should validate correct CSS with no errors', async () => {
    const result = await stylelint.lint({
      code: `
        .test {
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          background-color: white;
          color: #333;
        }
      `,
      config,
    })
    expect(result.errored).toBe(false)
    expect(result.results[0].warnings).toHaveLength(0)
  })
  it('should check property order', async () => {
    const result = await stylelint.lint({
      code: `
        .test {
          color: blue;       /* 应该在后面 */
          position: fixed;   /* 应该在前面 */
        }
      `,
      config,
    })

    const orderWarning = result.results[0].warnings.some(
      (warning) => warning.rule === 'order/properties-order',
    )

    expect(orderWarning).toBe(true)
  })
  it('should validate CSS with variables and modern syntax', async () => {
    const result = await stylelint.lint({
      code: `
        :root {
          --primary-color: #007bff;
        }
        
        .modern {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          color: var(--primary-color);
        }
      `,
      config,
    })

    expect(result.errored).toBe(false)
  })
})
