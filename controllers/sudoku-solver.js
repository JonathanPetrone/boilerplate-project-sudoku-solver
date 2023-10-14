let puzzleString = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'

let row = "a"
let column = "1"
let value = 8

const rowsTemplate = {
  a: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  b: [9, 10, 11, 12, 13, 14, 15, 16, 17],
  c: [18, 19, 20, 21, 22, 23, 24, 25, 26],
  d: [27, 28, 29, 30, 31, 32, 33, 34, 35],
  e: [36, 37, 38, 39, 40, 41, 42, 43, 44],
  f: [45, 46, 47, 48, 49, 50, 51, 52, 53],
  g: [54, 55, 56, 57, 58, 59, 60, 61, 62],
  h: [63, 64, 65, 66, 67, 68, 69, 70, 71],
  i: [72, 73, 74, 75, 76, 77, 78, 79, 80]
}

const columnTemplate = {
  1: [0, 9, 18, 27, 36, 45, 54, 63, 72],
  2: [1, 10, 19, 28, 37, 46, 55, 64, 73],
  3: [2, 11, 20, 29, 38, 47, 56, 65, 74],
  4: [3, 12, 21, 30, 39, 48, 57, 66, 75],
  5: [4, 13, 22, 31, 40, 49, 58, 67, 76],
  6: [5, 14, 23, 32, 41, 50, 59, 68, 77],
  7: [6, 15, 24, 33, 42, 51, 60, 69, 78],
  8: [7, 16, 25, 34, 43, 52, 61, 70, 79],
  9: [8, 17, 26, 35, 44, 53, 62, 71, 80]
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

