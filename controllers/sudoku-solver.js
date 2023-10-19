let puzzleString = '1.5..2.84..63.12.7.24.5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'

let row = "a"
let column = "1"
let value = 1

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


const numbers = [1,2,3,4,5,6,7,8,9];

class SudokuSolver {

  constructor(rowsTemplate, columnTemplate, regionTemplate) {
    this.rowsTemplate = rowsTemplate;
    this.columnTemplate = columnTemplate;
    this.regionTemplate = regionTemplate;
  }

  validate(puzzleString) {
    if(puzzleString.length != 81 ){
      console.log("string has more or less than 81 characters")
      return false;
    } else {
      console.log("string has 81 characters")
    }

    const regex = /[^0-9.]/
    const notValid = puzzleString.match(regex);

    if(notValid){
      console.log("string has unallowed characters")
      return false;
    }

    // check row for validation
    for (const row in rowsTemplate) {
      let arrayOfNumbers = [];

      for (let element of rowsTemplate[row]) { // Iterate through elements in the row
        let value = puzzleString.charAt(element);
    
        if (value !== '.' && arrayOfNumbers.includes(value)) {
          console.log(`Duplicate number ${value} in row ${row}`);
          return false; // If duplicate found, return false
        }
        arrayOfNumbers.push(value);
        console.log(arrayOfNumbers)
      }
      // Reset the array for the next row iteration
      arrayOfNumbers = [];
    }

    // check col for validation
    for (const col in columnTemplate) {
      let arrayOfNumbers = [];

      for (let element of columnTemplate[col]) { // Iterate through elements in the row
        let value = puzzleString.charAt(element);
    
        if (value !== '.' && arrayOfNumbers.includes(value)) {
          console.log(`Duplicate number ${value} in col ${col}`);
          return false; // If duplicate found, return false
        }
        arrayOfNumbers.push(value);
      }
      // Reset the array for the next row iteration
      arrayOfNumbers = [];
    }

    // check region for validation
    for (const region in regionTemplate) {
      let arrayOfNumbers = [];

      for (let element of regionTemplate[region]) { // Iterate through elements in the row
        let value = puzzleString.charAt(element);
    
        if (value !== '.' && arrayOfNumbers.includes(value)) {
          console.log(`Duplicate number ${value} in region ${region}`);
          return false; // If duplicate found, return false
        }
        arrayOfNumbers.push(value);
      }
      // Reset the array for the next row iteration
      arrayOfNumbers = [];
    }

    return true
  }

  checkRowPlacement(puzzleString, row, column, value) {

    // displays the index of "sudoku-squares" inside a row
    const checkRow = rowsTemplate[row];

    // for storing the numbers
    let rowNumbers = [];

    // This code is collecting characters from the puzzleString at the specified indexes in the checkRow array and stores them in the rowNumbers array.
    for (let index of checkRow) {
      if (index >= 0 && index < puzzleString.length) {
        rowNumbers.push(puzzleString.charAt(index));
      } else {
        rowNumbers.push(null);
      }
    }
    
    //console.log("\n" + `These are the numbers in row_${row}`);
    //console.log(rowNumbers);
    

    // Convert rowNumbers to a Set for efficient look-up
    const characterSet = new Set(rowNumbers.filter(item => !isNaN(item)).map(Number));

    // Filter numbers to include only elements not found in characterSet
    const resultArray = numbers.filter(item => !characterSet .has(item));
    
    //console.log("\n" + `These are the numbers left to placed in row_${row}`);
    console.log(resultArray);
    //console.log("\n" + "______________________________" + "\n");

    return resultArray;
  }

  checkColPlacement(puzzleString, row, column, value) {
    const checkCol = columnTemplate[column];

    let colNumbers = [];

    for (let index of checkCol) {
      if (index >= 0 && index < puzzleString.length) {
        colNumbers.push(puzzleString.charAt(index));
      } else {
        colNumbers.push(null);
      }
    }
    
    // console.log(`These are the numbers in col_${column}`);
    // console.log(colNumbers)

    // Convert colNumbers to a Set for efficient look-up
    const characterSet = new Set(colNumbers.filter(item => !isNaN(item)).map(Number));

    // Filter numbers to include only elements not found in characterSet
    const resultArray = numbers.filter(item => !characterSet .has(item));
    
    //console.log("\n" + `These are the numbers left to placed in col_${column}`);
    //console.log(resultArray);
    //console.log("\n" + "______________________________" + "\n");

    return resultArray;

  }

  checkRegionPlacement(puzzleString, row, column, value) {

    const sharedNumber = rowsTemplate[row].filter(cell => columnTemplate[column].includes(cell));
    console.log(sharedNumber);
    const numberAtSquare = puzzleString[sharedNumber];
    console.log(numberAtSquare);
    let tryColumn = sudokuSolver.checkColPlacement(puzzleString, row, column, value);
    const validCol = tryColumn.includes(numberAtSquare);
    console.log(validCol);

    let numOfRegion;

    if (sharedNumber.length > 0) {
      // Extract the shared number
      const number = sharedNumber[0];
      // console.log(`Shared number: ${number}`);
      
      // Find in which region the shared number is
      for (const region in regionTemplate) {
        if (regionTemplate[region].includes(number)) {
          console.log(`Shared number is in region ${region}`);
          numOfRegion = region;
          break;
        }
      }
    } else {
      console.log("No shared number found.");
    }

    const checkRegion = regionTemplate[numOfRegion];

    let regionNumbers = [];

    for (let index of checkRegion) {
      if (index >= 0 && index < puzzleString.length) {
        regionNumbers.push(puzzleString.charAt(index));
      } else {
        regionNumbers.push(null);
      }
    }
    
    //console.log(`These are the numbers in region_${numOfRegion}`);
    //console.log(regionNumbers);

    // Convert selectedCharacters to a Set for efficient look-up
    const characterSet = new Set(regionNumbers.filter(item => !isNaN(item)).map(Number));

    // Filter numbers to include only elements not found in set2
    const resultArray = numbers.filter(item => !characterSet .has(item));
    
    // console.log("\n" + `These are the numbers left to placed in region_${numOfRegion}`);
    // console.log(resultArray);
    // console.log("\n" + "______________________________" + "\n");

    return resultArray;
  }

  checkSquare(puzzleString, row, column, value){

    const validRowNumbers = sudokuSolver.checkRowPlacement(puzzleString, row, column, value);
    const validColNumbers = sudokuSolver.checkColPlacement(puzzleString, row, column, value);
    const validRegionNumbers = sudokuSolver.checkRegionPlacement(puzzleString, row, column, value);

    //console.log(validRowNumbers)
    //console.log(validColNumbers)
    //console.log(validRegionNumbers)

    const validNumbersInSquare = validRowNumbers.filter(number => validColNumbers.includes(number) && validRegionNumbers.includes(number));

    if (validNumbersInSquare.length > 0) {
      console.log("\n" + `Valid numbers in row_${row} col_${column}: ${validNumbersInSquare}`);
    } else {
      console.log("\n" + `No valid numbers in row_${row} col_${column}`);
    }

    return validNumbersInSquare
  }

  validNumber(puzzleString, row, column, value) {
    const validation = sudokuSolver.validate(puzzleString)

    if(validation == false){
      console.log("validation failed during solving");
      return false
    }

    const checkValidNumbers = sudokuSolver.checkSquare(puzzleString, row, column, value);
    
    // Extract shared numbers from rowsTemplate and columnTemplate
    const sharedNumber = rowsTemplate[row].filter(cell => columnTemplate[column].includes(cell));
    
    // Initialize numberAtSquare as undefined
    let numberAtSquare;
  
    // Check if there's a shared number and get the value from puzzleString
    if (sharedNumber.length > 0) {
      const rowIndex = sharedNumber[0]; // Assuming it's the row index
      numberAtSquare = puzzleString.charAt(rowIndex);
    }
  
    // Check if `numberAtSquare` is a number (not undefined) and not already in `validNumbers`
    if (!isNaN(numberAtSquare)) {
      checkValidNumbers.push(numberAtSquare);
    }
    
    let found = false

    for (const number of checkValidNumbers) {
      if (number == value) {
        console.log("The array contains " + number);
        found = true;
        break;
      }
    }
  
    if (found) {
      console.log(`The validNumbers contain ${value}.`);
      return true;
    } else {
      console.log(`The validNumbers do not contain ${value}.`);
      return false;
    }
  }

  validRow(puzzleString, row, column, value) {

    const validation = sudokuSolver.validate(puzzleString)

    if(validation == false){
      console.log("validation failed during solving");
      return false
    }

    const checkValidNumbers = sudokuSolver.checkRowPlacement(puzzleString, row, column, value);
    
    // Extract shared numbers from rowsTemplate and columnTemplate
    const sharedNumber = rowsTemplate[row].filter(cell => columnTemplate[column].includes(cell));
    
    // Initialize numberAtSquare as undefined
    let numberAtSquare;
  
    // Check if there's a shared number and get the value from puzzleString
    if (sharedNumber.length > 0) {
      const rowIndex = sharedNumber[0]; // Assuming it's the row index
      numberAtSquare = puzzleString.charAt(rowIndex);
    }
  
    // Check if `numberAtSquare` is a number (not undefined) and not already in `validNumbers`
    if (!isNaN(numberAtSquare)) {
      checkValidNumbers.push(numberAtSquare);
    }
    
    let found = false

    for (const number of checkValidNumbers) {
      if (number == value) {
        console.log("The array contains " + number);
        found = true;
        break;
      }
    }
  
    if (found) {
      console.log(`The validNumbers contain ${value}.`);
      return true;
    } else {
      console.log(`The validNumbers do not contain ${value}.`);
      return false;
    }
  }

  validColumn(puzzleString, row, column, value) {
    const checkValidNumbers = sudokuSolver.checkColPlacement(puzzleString, row, column, value);
    
    const validation = sudokuSolver.validate(puzzleString)

    if(validation == false){
      console.log("validation failed during solving");
      return false
    }

    // Extract shared numbers from rowsTemplate and columnTemplate
    const sharedNumber = rowsTemplate[row].filter(cell => columnTemplate[column].includes(cell));
    
    // Initialize numberAtSquare as undefined
    let numberAtSquare;
  
    // Check if there's a shared number and get the value from puzzleString
    if (sharedNumber.length > 0) {
      const rowIndex = sharedNumber[0]; // Assuming it's the row index
      numberAtSquare = puzzleString.charAt(rowIndex);
    }
  
    // Check if `numberAtSquare` is a number (not undefined) and not already in `validNumbers`
    if (!isNaN(numberAtSquare)) {
      checkValidNumbers.push(numberAtSquare);
    }
    
    let found = false

    for (const number of checkValidNumbers) {
      if (number == value) {
        console.log("The array contains " + number);
        found = true;
        break;
      }
    }
  
    if (found) {
      console.log(`The validNumbers contain ${value}.`);
      return true;
    } else {
      console.log(`The validNumbers do not contain ${value}.`);
      return false;
    }
  }

  validRegion(puzzleString, row, column, value) {

    const validation = sudokuSolver.validate(puzzleString)

    if(validation == false){
      console.log("validation failed during solving");
      return false
    }

    const checkValidNumbers = sudokuSolver.checkRegionPlacement(puzzleString, row, column, value);
    
    // Extract shared numbers from rowsTemplate and columnTemplate
    const sharedNumber = rowsTemplate[row].filter(cell => columnTemplate[column].includes(cell));
    
    // Initialize numberAtSquare as undefined
    let numberAtSquare;
  
    // Check if there's a shared number and get the value from puzzleString
    if (sharedNumber.length > 0) {
      const rowIndex = sharedNumber[0]; // Assuming it's the row index
      numberAtSquare = puzzleString.charAt(rowIndex);
    }
  
    // Check if `numberAtSquare` is a number (not undefined) and not already in `validNumbers`
    if (!isNaN(numberAtSquare)) {
      checkValidNumbers.push(numberAtSquare);
    }
    
    let found = false

    for (const number of checkValidNumbers) {
      if (number == value) {
        console.log("The array contains " + number);
        found = true;
        break;
      }
    }
  
    if (found) {
      console.log(`The validNumbers contain ${value}.`);
      return true;
    } else {
      console.log(`The validNumbers do not contain ${value}.`);
      return false;
    }
  }

  solve(puzzleString) {
    
    const validation = sudokuSolver.validate(puzzleString)

    if(validation == false){
      console.log("validation failed during solving");
      return false
    }


    let triesToSolve = 0;

    while (puzzleString.includes('.')) {

    for (const region in regionTemplate) {
      // console.log(`Region ${region} has these indexes ${regionTemplate[region]}`);

      const checkRegion = regionTemplate[region];

      let regionNumbers = [];

      for (let index of checkRegion) {
      if (index >= 0 && index < puzzleString.length) {
        regionNumbers.push(puzzleString.charAt(index));
      } else {
        regionNumbers.push(null);
      }
    }
      console.log(`Region ${region} has these numbers ${regionNumbers}`);

      for (const number in regionNumbers){
        if(regionNumbers[number] == "."){
          const squareToCheck = regionTemplate[region][number];
          let regionForSquare = region
          let rowForSquare;
          let colForSquare;

          console.log(`there is a dot at index: ${number} of Region ${region} and the square number is ${squareToCheck}`)

          for (const row in rowsTemplate) {
            if (rowsTemplate[row].includes(squareToCheck)) {
              rowForSquare = row
              console.log(`the row is ${rowForSquare}`)
              break;
            }
          }
          
          for (const column in columnTemplate) {
            if (columnTemplate[column].includes(squareToCheck)) {
              colForSquare = column
              console.log(`the column is ${colForSquare}`)
              break;
            }
          }

          console.log(`the region is ${regionForSquare}`)
          const validNumbersInSquare = sudokuSolver.checkSquare(puzzleString, rowForSquare, colForSquare, value)
          console.log("here are the numbers for this " + validNumbersInSquare);
          if (validNumbersInSquare.length === 1) {
            console.log('There is only one valid number in the array, adding it to the puzzleString');
            const numberToAdd = validNumbersInSquare[0];
            console.log(numberToAdd)

            // Convert the string to an array
            let puzzleArray = puzzleString.split('');

            // Change the second character to '3' (index 1 because JavaScript uses 0-based indexing)
            puzzleArray[squareToCheck] = numberToAdd;

            // Convert the array back to a string
            puzzleString = puzzleArray.join('');

          } else {
            console.log('There are more than one valid number');
          }

          console.log(puzzleString);
          triesToSolve++

          if (triesToSolve > 100){
            console.log("couldn't solve")
            return "false"
          }
        }
      }
    }
  }
    console.log(`here is the solution: ${puzzleString}`)
    return puzzleString

  }
}

const sudokuSolver = new SudokuSolver();
/*const validate = sudokuSolver.validate(puzzleString);

    if(validate == false){
      console.log("all is not good")
    } else {
      console.log("all is good")
    }
*/
sudokuSolver.validColumn(puzzleString, row, column, value);
//sudokuSolver.solve(puzzleString);


module.exports = SudokuSolver;

