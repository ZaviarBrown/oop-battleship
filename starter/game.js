const Board = require("./board");
const Player = require("./humanPlayer");

class BattleshipGame {
  constructor(player1, numRows, numCols, numShips) {
    // TODO: Set up constructor to store reference to the humanPlayer and
    // instantiate a new instance of the Board class and set it to this.board.
    // Remember to import your Board class.
    this.numRows = numRows;
    this.numCols = numCols;
    this.numShips = numShips;
    this.board = new Board(this.numRows, this.numCols, this.numShips);
    curPlayer = new Player;
  }

  playTurn() {
    // TODO: Display the state of the game and ask for the users input.
    this.board.display();
    curPlayer.getMove();
  }

  displayStatus() {
    // TODO: Display the current state of the game to the player.
  }

  processMove() {
    // TODO: Detemerine if the move is valid. If so, invoke the attack method on
    //     the board instance and increment this.turns by 1. If the game is over,
    //     display the final status of the game and end the game. If not, play
    //     another turn. If the move is invalid, ask the player to input a valid
    //     position and play another turn.
    
  }
}

module.exports = BattleshipGame;
