import { Field, getBlanks } from '../game'
import { randomBlankFieldMove, randomMove, winningMove } from './bot'

// the easy bot plays a winning move, if it can
// otherwise, it plays a random move
export function easyMove (board: Field[], own: Field): number {
  const blankFields = getBlanks(board)
  const nextWinningMove = winningMove(board, own)

  if (nextWinningMove === -1) {
    return randomBlankFieldMove(board)
  }

  return nextWinningMove
}
