import { Field, getBlanks, isPlayer, Mode, won } from "../game";
import { easyMove } from "./easy";
import { hardMove } from "./hard";
import { mediumMove, pettyMove } from "./medium";

export interface BotMove {
  (board: Field[], own: Field): number;
}

export function moveWithMode(mode: Mode): BotMove | undefined {
  switch (mode) {
    case Mode.EASY:
      return easyMove;
    case Mode.PETTY:
      return pettyMove;
    case Mode.MEDIUM:
      return mediumMove;
    case Mode.HARD:
      return hardMove;
    case Mode.HUMAN || Mode.ONLINE:
      return undefined;
    default:
      return undefined;
  }
}

// winningMove returns a move player can play to win
// if there is no winning move, it returns -1
export function winningMove(board: Field[], player: Field): number {
  var number = 0;
  // horizontal
  number = checkLine(board.slice(0, 3), player);
  if (number >= 0) return number;
  number = checkLine(board.slice(3, 6), player);
  if (number >= 0) return number + 3;
  number = checkLine(board.slice(6, 9), player);
  if (number >= 0) return number + 6;

  // vertical
  number = checkLine([board[0], board[3], board[6]], player);
  if (number >= 0) return number * 3;
  number = checkLine([board[1], board[4], board[7]], player);
  if (number >= 0) return number * 3 + 1;
  number = checkLine([board[2], board[5], board[8]], player);
  if (number >= 0) return number * 3 + 2;

  // diagonal
  number = checkLine([board[0], board[4], board[8]], player);
  if (number >= 0) return number * 4;
  number = checkLine([board[2], board[4], board[6]], player);
  if (number >= 0) return number * 2 + 2;

  return -1;
}

function checkLine(subBoard: Field[], player: Field): number {
  if (
    subBoard[0] === player &&
    subBoard[1] === player &&
    subBoard[2] === Field.EMPTY
  )
    return 2;
  if (
    subBoard[0] === player &&
    subBoard[2] === player &&
    subBoard[1] === Field.EMPTY
  )
    return 1;
  if (
    subBoard[1] === player &&
    subBoard[2] === player &&
    subBoard[0] === Field.EMPTY
  )
    return 0;
  return -1;
}

export function randomMove(bounds: number): number {
  return Math.floor(Math.random() * bounds);
}

export function randomBlankFieldMove(board: Field[]) {
  const blankFields = getBlanks(board);
  if(!blankFields.length) {
    return -1;
  }

  // place random move

  let nextRandomMove = -1;
  let isFree = false;

  while (!isFree) {
    nextRandomMove = randomMove(9);

    isFree = blankFields.indexOf(nextRandomMove) >= 0;
  }

  return nextRandomMove;
}
