import { sum } from './sum'

describe('sum', () => {
  it('sums two numbers', () => {
    expect(sum(1, 2)).toEqual(3)
  })
})
