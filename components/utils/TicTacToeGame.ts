import { TicTacToeGameState } from "../classes/TicTacToeGameState";

export default class TicTacToeGame {
    static onClick = (game: TicTacToeGameState, index: number): TicTacToeGameState => {
        let result: TicTacToeGameState = game;
        if (game.winner === '') {
            //Clone the game object
            result = {
                board : game.board.slice(),
                turn : game.turn,
                winner: ''
            }
            //Mark the move
            result.board[index] = game.turn;
            //Check for a winner
            result.winner = TicTacToeGame.checkWinner(result.board, game.turn);
            //If nobody won, set next turn
            if (result.winner === '') {
                result.turn = TicTacToeGame.nextTurn(game.turn);
            }
        }
        //Return the new (or existing) game object
        return result;
    }

    //Manually checking for the winner
    static checkWinner = (board: string[], turn: string): string => {
        if (
            (turn === board[0] && turn === board[1] && turn === board[2]) ||
            (turn === board[3] && turn === board[4] && turn === board[5]) ||
            (turn === board[6] && turn === board[7] && turn === board[8]) ||
            (turn === board[0] && turn === board[3] && turn === board[6]) ||
            (turn === board[1] && turn === board[4] && turn === board[7]) ||
            (turn === board[2] && turn === board[5] && turn === board[8]) ||
            (turn === board[0] && turn === board[4] && turn === board[8]) ||
            (turn === board[2] && turn === board[4] && turn === board[6])) {
            console.log(turn, " WINS");
            return turn;
        } else {
            return '';
        }
    }

    //Change to the other player's turn
    static nextTurn = (turn: string): string => {
         return (turn === 'x') ? 'o' : 'x';
    }

    static init = (): TicTacToeGameState => {
        return {
            board: [],
            winner: '',
            turn: 'x'
        }
    }
}