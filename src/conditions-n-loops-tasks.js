/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const one = a >= b ? a : b;
  const res = one >= c ? one : c;
  return res;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) return false;
  return a === b || a === c || b === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let res = '';
  let n = num;

  let tens = 0;
  while (n >= 10) {
    tens += 1;
    n -= 10;
  }
  if (tens === 1) res += 'X';
  else if (tens === 2) res += 'XX';
  else if (tens === 3) res += 'XXX';

  switch (n) {
    case 0:
      break;
    case 1:
      res += 'I';
      break;
    case 2:
      res += 'II';
      break;
    case 3:
      res += 'III';
      break;
    case 4:
      res += 'IV';
      break;
    case 5:
      res += 'V';
      break;
    case 6:
      res += 'VI';
      break;
    case 7:
      res += 'VII';
      break;
    case 8:
      res += 'VIII';
      break;
    case 9:
      res += 'IX';
      break;
    default:
      break;
  }

  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  let i = 0;

  while (i < numberStr.length) {
    let word = '';

    switch (numberStr[i]) {
      case '0':
        word += 'zero';
        break;
      case '1':
        word += 'one';
        break;
      case '2':
        word += 'two';
        break;
      case '3':
        word += 'three';
        break;
      case '4':
        word += 'four';
        break;
      case '5':
        word += 'five';
        break;
      case '6':
        word += 'six';
        break;
      case '7':
        word += 'seven';
        break;
      case '8':
        word += 'eight';
        break;
      case '9':
        word += 'nine';
        break;
      case '-':
        word += 'minus';
        break;
      case '.':
      case ',':
        word += 'point';
        break;
      default:
        break;
    }

    if (word) {
      if (res !== '') res += ' ';
      res += word;
    }

    i += 1;
  }

  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
} /**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let i = 0;

  while (i < str.length) {
    if (str[i] === letter) {
      return i;
    }
    i += 1;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let n = num;

  while (n > 0) {
    const last = n % 10;
    if (last === digit) {
      return true;
    }
    n = (n - last) / 10;
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let i = 0;

  while (i < arr.length) {
    let leftSum = 0;
    let rightSum = 0;

    let j = 0;
    while (j < i) {
      leftSum += arr[j];
      j += 1;
    }

    let k = i + 1;
    while (k < arr.length) {
      rightSum += arr[k];
      k += 1;
    }

    if (leftSum === rightSum) {
      return i;
    }

    i += 1;
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const n = size;
  const matrix = [];

  let i = 0;
  while (i < n) {
    matrix[i] = [];
    let j = 0;
    while (j < n) {
      matrix[i][j] = 0;
      j += 1;
    }
    i += 1;
  }

  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  let num = 1;
  const total = n * n;

  while (num <= total) {
    let col = left;
    while (col <= right && num <= total) {
      matrix[top][col] = num;
      num += 1;
      col += 1;
    }
    top += 1;

    let row = top;
    while (row <= bottom && num <= total) {
      matrix[row][right] = num;
      num += 1;
      row += 1;
    }
    right -= 1;

    col = right;
    while (col >= left && num <= total) {
      matrix[bottom][col] = num;
      num += 1;
      col -= 1;
    }
    bottom -= 1;

    row = bottom;
    while (row >= top && num <= total) {
      matrix[row][left] = num;
      num += 1;
      row -= 1;
    }
    left += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * No use of Array or String methods allowed.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 */
function rotateMatrix(matrix) {
  const m = matrix;
  const n = m.length;

  let i = 0;
  while (i < n) {
    let j = i + 1;
    while (j < n) {
      const temp = m[i][j];
      m[i][j] = m[j][i];
      m[j][i] = temp;
      j += 1;
    }
    i += 1;
  }

  i = 0;
  while (i < n) {
    let left = 0;
    let right = n - 1;
    while (left < right) {
      const temp = m[i][left];
      m[i][left] = m[i][right];
      m[i][right] = temp;
      left += 1;
      right -= 1;
    }
    i += 1;
  }

  return m;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const a = arr;
  function quickSort(left, right) {
    if (left >= right) return;

    const pivotIndex = Math.floor((left + right) / 2);
    const pivot = a[pivotIndex];

    let i = left;
    let j = right;

    while (i <= j) {
      while (a[i] < pivot) i += 1;
      while (a[j] > pivot) j -= 1;

      if (i <= j) {
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i += 1;
        j -= 1;
      }
    }

    if (left < j) quickSort(left, j);
    if (i < right) quickSort(i, right);
  }

  quickSort(0, a.length - 1);
  return a;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  if (iterations === 0 || str.length <= 1) return str;

  const n = str.length;

  function shuffleOnce(s) {
    let even = '';
    let odd = '';

    let i = 0;
    while (i < n) {
      const ch = s[i];
      if (i % 2 === 0) {
        even += ch;
      } else {
        odd += ch;
      }
      i += 1;
    }

    return even + odd;
  }

  let result = str;
  const seen = {};
  let step = 0;

  while (step < iterations) {
    if (seen[result]) {
      const cycleLength = step - seen[result];
      const remaining = (iterations - step) % cycleLength;

      let k = 0;
      while (k < remaining) {
        result = shuffleOnce(result);
        k += 1;
      }
      return result;
    }

    seen[result] = step;
    result = shuffleOnce(result);
    step += 1;
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(number) {
  const digits = [];
  let temp = number;
  while (temp > 0) {
    const digit = temp % 10;
    digits[digits.length] = digit;
    temp = (temp - digit) / 10;
  }

  let left = 0;
  let right = digits.length - 1;
  while (left < right) {
    const t = digits[left];
    digits[left] = digits[right];
    digits[right] = t;
    left += 1;
    right -= 1;
  }

  const n = digits.length;
  let i = n - 2;

  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i < 0) return number;

  let j = n - 1;
  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  const tempSwap = digits[i];
  digits[i] = digits[j];
  digits[j] = tempSwap;

  left = i + 1;
  right = n - 1;
  while (left < right) {
    const t = digits[left];
    digits[left] = digits[right];
    digits[right] = t;
    left += 1;
    right -= 1;
  }

  let result = 0;
  let k = 0;
  while (k < n) {
    result = result * 10 + digits[k];
    k += 1;
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
