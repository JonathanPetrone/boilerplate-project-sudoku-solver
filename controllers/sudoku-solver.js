let puzzleString = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'

let row = "a"
let column = "1"

const rowsTemplate = {
  a: [0, 8],
  b: [9, 17],
  c: [18, 26],
  d: [27, 35],
  e: [36, 44],
  f: [45, 53],
  g: [54, 62],
  h: [63, 71],
  i: [72, 80]
}

const columnTemplate = {
  1: [0],
  2: [1],
  3: [2],
  4: [3],
  5: [4],
  6: [5],
  7: [6],
  8: [7],
  9: [8]
}

const regionTemplate = {
  1: [0, 1, 2, 9, 10, 11, 18, 19, 20],
  2: [3, 4, 5, 12, 13, 14, 21, 22, 23],
  3: [6, 7, 8, 15, 16, 17, 24, 25, 26],
  4: [27, 28, 29, 36, 37, 38, 45, 46, 47],
  5: [30, 31, 32, 39, 40, 41, 48, 49, 50],
  6: [33, 34, 35, 42, 43, 44, 51, 52, 53],
  7: [54, 55, 56, 63, 64, 65, 72, 73, 74],
  8: [57, 58, 59, 66, 67, 68, 75, 76, 77],
  9: [60, 61, 62, 69, 70, 71, 78, 79, 80]
}


class SudokuSolver {

  validate(puzzleString) {
    if(puzzleString.length != 81 ){
      console.log("string has more or less than 81 characters")
    } else {
      console.log("string has 81 characters")
    }

    const regex = /[^0-9.]/
    const notValid = puzzleString.match(regex);

    if(notValid){
      console.log("string has unallowed characters")
    }


  }

  checkRowPlacement(puzzleString, row, column, value) {


  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    
  }
}

const sudokuSolver = new SudokuSolver();

sudokuSolver.validate(puzzleString);


module.exports = SudokuSolver;

