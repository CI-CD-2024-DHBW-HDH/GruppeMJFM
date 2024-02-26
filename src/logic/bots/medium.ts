import { getBlanks, invertPlayer, type Field } from "../game";
import { randomBlankFieldMove, randomMove, winningMove } from "./bot";

// the medium bot plays a wiining move, if it can
// or blocks the opponent from winning
// or plays the center field if it can
// otherwise it plays a random move
export function mediumMove(board: Field[], own: Field): number {
  return -1
}

// this bot just tries to block a win
// otherwise it plays a random move
export function pettyMove(board: Field[], own: Field): number {
  let nextWinningMove = winningMove(board, invertPlayer(own));

  if (nextWinningMove == -1) {
    return randomBlankFieldMove(board);
  }

  return nextWinningMove
}
