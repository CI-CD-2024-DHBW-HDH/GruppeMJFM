import { getBlanks, invertPlayer, Field } from "../game";
import { randomBlankFieldMove, randomMove, winningMove } from "./bot";

// the medium bot plays a wiining move, if it can
// or blocks the opponent from winning
// or plays the center field if it can
// otherwise it plays a random move
export function mediumMove(board: Field[], own: Field): number {

  if (winningMove(board, own) !== -1) {

    return winningMove(board, own); 
  } else {
    let wing = winningMove(board, invertPlayer(own));
    console.log(wing);
    

    if (winningMove(board, invertPlayer(own)) !== -1) {
      return winningMove(board, invertPlayer(own));
    } else {
      
    if(board[4]==0){
      return 4;
    }else{

    while(true){
      let x = randomMove(9);
      if (board[x]== 0){
        return x;
        break
      }

    }
    
  }
  return -1
}
}
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
