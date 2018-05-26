var isValidSudoku = function(board) {
  // check each row
  for (var x = 0; x < 9; x++){
    let row = {};
    for (var y = 0; y < 9; y++) {
      if (row[board[x][y]] && board[x][y] !== ".") {
        return false;
      } else {
        row[board[x][y]] = true;
      }
    }
  }
  
  // check each column
  for (var b = 0; b < 9; b++){
    let column = {};
    for (var a = 0; a < 9; a++) {
      if (column[board[a][b]] && board[a][b] !== ".") {
        return false;
      } else {
        column[board[a][b]] = true;
      }
    }
  }
  
  // check each square
  for (var z = 0; z < 3; z++) {
    for (var x = 0; x < 3; x++) {
      // iterate through 9 squares in the 9 larger squares
      let square = {};
      for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 3; c++) {
          if (square[board[r + (3*z)][c + (3*x)]] && board[r + (3*z)][c + (3*x)] !== "."){
            return false;
          } else {
            square[board[r + (3*z)][c + (3*x)]] = true;
          }
        }
      }
    }
  }
  return true;    
};


let game = [[".",".","4",".",".",".","6","3","."],
            [".",".",".",".",".",".",".",".","."],
            ["5",".",".",".",".",".",".","9","."],
            [".",".",".","5","6",".",".",".","."],
            ["4",".","3",".",".",".",".",".","1"],
            [".",".",".","7",".",".",".",".","."],
            [".",".",".","5",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".","."]]
let test = isValidSudoku(game);
console.log(test);