const add = require('./add.js')

describe('adding two numbers', () => {
  it('returns a number', () => {
    const result = add(2, 2)
    expect(result).toEqual(4)
  })

  it('errors on non-numbers', () => {
    expect(() => {
      add('2', 2)
    }).toThrow()

    expect(() => {
      add(2, '2')
    }).toThrow();
  })

  it('adds negative numbers', () => {
    const result = add(-2, -2)
    expect(result).toEqual(-4)
  })

  it('adds decimal numbers', () => {
    const result = add(2.2, 2.2)
    expect(result).toEqual(4.4)
  })

  it('adds large numbers', () => {
    const result = add(Number.MAX_SAFE_INTEGER, 1)
    expect(result).toEqual(9007199254740992)
  })
})