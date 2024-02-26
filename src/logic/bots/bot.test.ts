import { winningMove } from "./bot"
import { Field } from "../game"

describe("winningmove", ()=> {
    
    it("no winning", ()=> {
        const board = [
            Field.EMPTY,
            Field.PLAYER1,
            Field.PLAYER2
        ]
        const result = winningMove(board, board[1])
        expect(result).toBe(-1);
    })

    it("winning at 3 player1", ()=> {
        const board = [
            Field.PLAYER1,
            Field.PLAYER1,
            Field.EMPTY
        ]
        const result = winningMove(board, Field.PLAYER1)
        expect(result).toBe(2);
    })
    it("winning at 3 player 2", ()=> {
        const board = [
            Field.PLAYER2,
            Field.PLAYER2,
            Field.EMPTY
        ]
        const result = winningMove(board, Field.PLAYER2)
        expect(result).toBe(2);
    })
    it("winning at 5 player 2", ()=> {
        const board = [
            Field.EMPTY,
            Field.EMPTY,
            Field.EMPTY,
            Field.PLAYER2,
            Field.PLAYER2,
            Field.EMPTY,
        ]
        const result = winningMove(board, Field.PLAYER2)
        expect(result).toBe(5);
    })
    it("winning at 8 player 2", ()=> {
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
        expect(result).toBe(8);
    })

    it("winning at 6 player 2", ()=> {
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
        expect(result).toBe(6);
    })

    it("winning at 4 player 2", ()=> {
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
        expect(result).toBe(8);
    })


})