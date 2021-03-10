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
      let ship = Math.floor(Math.random() * (totalSpaces)) + 1;
      if (!shipArr.includes(ship)) {
        shipArr.push(ship);
      }
    }
    let counter = 0;
    const gridArr = [];
    for (let i = 0; i < this.numRows ; i++) {
      gridArr.push([]);
      for (let j = 0; j < this.numCols; j++) {
        counter++;
        if (shipArr.includes(counter)) {
          gridArr[i].push('s');
        } else {
          gridArr[i].push(null);
        }
      }
    }
    // console.log(shipArr);
    // console.log(gridArr);
    return gridArr;
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
  }

  display() {
    console.table(this.grid);
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
    let shipCounter = 0;

    this.grid.forEach(element => {
      for (let i = 0; i < element.length; i++) {
        if (element[i] === "s") {
          shipCounter++;
        }
      }
    });
    console.log(shipCounter);
    return shipCounter;
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
    let row = pos[0];
    let column = pos[1];
    if (row > this.numRows || column > this.numCols) {
      return false;
    } else if (this.grid[row][column] === "x" || this.grid[row][column] === "h") {
        return false;
    } else {
      return true;
    }

  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
    let gameEnd = true;
    this.grid.forEach(element => {
      for(let i = 0; i < element.length; i++) {
        if (element[i] === "s") {
          console.log(element[i]);
          gameEnd = false;
        };
      }
    });
    return gameEnd;
  }

  attack(pos) {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
    let row = pos[0];
    let column = pos[1];
    if (this.grid[row][column] === "s") {
      this.grid[row][column] = "h";
    } else {
      this.grid[row][column] = "x";
    }
    this.display();
  }

}

let testBoard = new Board(4, 4, 15);
// testBoard.populateGrid();
testBoard.display();
testBoard.count();
testBoard.attack([1, 2]);

module.exports = Board;
