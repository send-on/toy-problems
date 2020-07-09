/*
ZigZag Conversion
Medium

1666

4594

Add to List

Share
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I

*/

var convert = function (s, numRows) {
  if (numRows <= 1) return s
  // Create an array and an numRows array elements
  /*
  [
  [[0,0], [0,1], [0,2], [0,3]],
  [[1,0], [0,1], [0,2], [0,3]],
  [[2,0], [2,1], [2,2], [2,3]],
  [[3,0], [3,1], [3,2], [3,3]],
  ]
  */
  // set position tuple [row, col]
  // Rules:
  // Go down (pos = [row+1, col]) until no more rows
  // If no more rows, goDown = false
  // if !goDown, pos = [row-1, col+1]

  // Create template
  var arr = [];

  for (let i = 0; i < numRows; i++) {
    arr.push([])
  }

  const zigZag = (arr, row = 0, col = 0, i = 0, isDown = true) => {
    // exit with no more chars
    if (!s[i]) {
      // flatten each array and return string
      for (let y = 0; y < arr.length; y++) {
        arr[y] = arr[y].join("");
      }
      arr = arr.join("")
      return arr;
    }



    if (s[i]) {
      if (isDown) {
        // check if bottom
        if (!arr[row + 1]) { // if isDown and bottom row
          zigZag(arr, row, col, i, !isDown);
        } else {
          // draw down
          arr[row][col] = s[i]; // arr[row][col] = 
          row++; // move row down
          zigZag(arr, row, col, i + 1, isDown);
        }
      } else { // if !isDown
        // check it top
        if (!arr[row - 1]) {
          zigZag(arr, row, col, i, !isDown);
        } else {
          // go up
          arr[row][col] = s[i];
          row--;
          col++;
          zigZag(arr, row, col, i + 1, isDown);
        }
      }
    }
    return arr
  }

  let final = zigZag(arr, 0, 0, 0, true).join("");
  console.log(final)
  return final
}