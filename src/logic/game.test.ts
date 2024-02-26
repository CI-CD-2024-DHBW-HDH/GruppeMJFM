/* eslint-disable no-undef */
import { Field, won } from './game'

describe('won', () => {
  it('player1 won', () => {
    const result = won([1, 1, 1, 0, 0, 0, 0, 0, 0])
    expect(result).toBe(Field.PLAYER1)
  })
  it('player2 won', () => {
    const result = won([0, 0, 0, 2, 2, 2, 0, 0, 0])
    expect(result).toBe(Field.PLAYER2)
  })
  it('draw', () => {
    const result = won([0, 0, 0, 0, 0, 0, 0, 0, 0])
    expect(result).toBe(Field.EMPTY)
  })
})
