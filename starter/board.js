class Board {
  constructor(numRows, numCols, numShips) {
    this.numRows = numRows;
    this.numCols = numCols;
    this.numShips = numShips;
    this.grid = this.populateGrid();
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
  }

  populateGrid() {
    let totalSpaces = this.numRows * this.numCols;
    let shipArr = [];
    while (shipArr.length < this.numShips) {
      let ship = Math.floor(Math.random() * (totalSpaces))
      if (!shipArr.includes(ship)) {
        shipArr.push(ship);
      }
    }
    let counter = 0;
    const gridArr = [];
    for (let i = 0; i < this.numRows; i++) {
      gridArr.push([]);
      for (let j = 0; j <= this.numCols - 1; j++) {
        counter++;
        if (shipArr.includes(counter)) {
          gridArr[i].push('s');
        } else {
          gridArr[i].push(null);
        }        
      }  
    }  
    console.log(shipArr);
    console.log(gridArr);                                                                            
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
  }

  attack() {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
  }
}

let testBoard = new Board(4, 4, 4);
// testBoard.populateGrid();

module.exports = Board;
