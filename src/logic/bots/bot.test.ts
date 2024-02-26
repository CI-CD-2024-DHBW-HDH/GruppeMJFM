/* eslint-disable no-undef */
import { check } from 'yargs'
import { Field, Mode } from '../game'
import { moveWithMode, checkLine, randomMove, randomBlankFieldMove, winningMove } from './bot'
import { easyMove } from './easy'
import { hardMove } from './hard'
import { mediumMove, pettyMove } from './medium'
import { execPath } from 'process'
import { DIFF_EQUAL } from 'jest-diff'

describe('move mode', () => {
  it('easy mode', () => {
    const modeMethode = moveWithMode(Mode.EASY)
    expect(modeMethode).toBe(easyMove)
  })
  it('pettymode', () => {
    const modeMethode = moveWithMode(Mode.PETTY)
    expect(modeMethode).toBe(pettyMove)
  })
  it('medium mode', () => {
    const modeMethode = moveWithMode(Mode.MEDIUM)
    expect(modeMethode).toBe(mediumMove)
  })
  it('hard mode', () => {
    const modeMethode = moveWithMode(Mode.HARD)
    expect(modeMethode).toBe(hardMove)
  })
  it('rest modes', () => {
    let modeMethode = moveWithMode(Mode.HUMAN)
    expect(modeMethode).toBe(undefined)

    modeMethode = moveWithMode(Mode.ONLINE)
    expect(modeMethode).toBe(undefined)
  })
})

describe('check line', () => {
  it('constellation 0', () => {
    const board = [
      Field.EMPTY,
      Field.PLAYER1,
      Field.PLAYER1
    ]

    const result = checkLine(board, Field.PLAYER1)
    expect(result).toBe(0)
  })
  it('constellation 1', () => {
    const board = [
      Field.PLAYER1,
      Field.EMPTY,
      Field.PLAYER1
    ]

    const result = checkLine(board, Field.PLAYER1)
    expect(result).toBe(1)
  })
  it('constellation 2', () => {
    const board = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.EMPTY
    ]

    const result = checkLine(board, Field.PLAYER1)
    expect(result).toBe(2)
  })
  it('constellation 2 wrong player', () => {
    const board = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.EMPTY
    ]

    const result = checkLine(board, Field.PLAYER2)
    expect(result).toBe(-1)
  })
})

describe('random move', () => {
  it('random number in range', () => {
    const bounds = 9

    for (let i = 0; i < 100; i++) {
      const result = randomMove(bounds)
      expect(result).toBeGreaterThanOrEqual(0)
      expect(result).toBeLessThanOrEqual(bounds)
    }
  })
})

describe('random blank field move', () => {
  it('random move in blanks', () => {
    const board = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.EMPTY,
      Field.PLAYER1,
      Field.PLAYER1,
      Field.PLAYER1,
      Field.EMPTY,
      Field.PLAYER1,
      Field.EMPTY
    ]

    for (let i = 0; i < 100; i++) {
      const result = randomBlankFieldMove(board)
      expect(board[result]).toBe(Field.EMPTY)
    }
  })
})

describe('winningmove', () => {
  it('no winning', () => {
    const board = [
      Field.EMPTY,
      Field.PLAYER1,
      Field.PLAYER2
    ]
    const result = winningMove(board, board[1])
    expect(result).toBe(-1)
  })

  it('winning at 3 player1', () => {
    const board = [
      Field.PLAYER1,
      Field.PLAYER1,
      Field.EMPTY
    ]
    const result = winningMove(board, Field.PLAYER1)
    expect(result).toBe(2)
  })
  it('winning at 3 player 2', () => {
    const board = [
      Field.PLAYER2,
      Field.PLAYER2,
      Field.EMPTY
    ]
    const result = winningMove(board, Field.PLAYER2)
    expect(result).toBe(2)
  })
  it('winning at 5 player 2', () => {
    const board = [
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.PLAYER2,
      Field.PLAYER2,
      Field.EMPTY
    ]
    const result = winningMove(board, Field.PLAYER2)
    expect(result).toBe(5)
  })
  it('winning at 8 player 2', () => {
    const board = [
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.PLAYER2,
      Field.PLAYER2,
      Field.EMPTY
    ]
    const result = winningMove(board, Field.PLAYER2)
    expect(result).toBe(8)
  })

  it('winning at 6 player 2', () => {
    const board = [
      Field.PLAYER2,
      Field.EMPTY,
      Field.EMPTY,
      Field.PLAYER2,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY
    ]
    const result = winningMove(board, Field.PLAYER2)
    expect(result).toBe(6)
  })

  it('winning at 4 player 2', () => {
    const board = [
      Field.PLAYER2,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.PLAYER2,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY,
      Field.EMPTY
    ]

    const result = winningMove(board, Field.PLAYER2)
    expect(result).toBe(8)
  })
})
