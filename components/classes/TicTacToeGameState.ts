export class TicTacToeGameState {
    /* 
        The board is laid out in rows of 3
        0,1,2
        3,4,5
        6,7,8 
    */
    /** The board spaces 0-8 state: '' or 'x' or 'o' */
    board: string[];
    /** The player that won the game: '' or 'x' or 'o' */
    winner: string;
    /** The current player: 'x' or 'o' */
    turn: string;

    constructor() {
        this.board = Array(9).fill('');
        this.winner = '';
        this.turn = 'x';  
    }
}