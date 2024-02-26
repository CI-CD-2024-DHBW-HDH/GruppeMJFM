import { Field, getBlanks } from "../game";
import { randomMove, winningMove } from "./bot";

// the easy bot plays a winning move, if it can
// otherwise, it plays a random move
export function easyMove(board: Field[], own: Field): number {
  const blankFields = getBlanks(board);
  let nextWinningMove = winningMove(board, own);

  // place random move 
  if (nextWinningMove == -1) {
    let nextRandomMove = -1;
    let isFree = false;

    while(!isFree) {
      nextRandomMove = randomMove(9)

      isFree = blankFields.indexOf(nextRandomMove) < 0;
    }

    return nextRandomMove;
  }


  return nextWinningMove;
}
