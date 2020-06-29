/*
Given a 32 - bit signed integer, reverse digits of an integer.

  Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32 - bit signed integer range: [−231, 231 − 1].For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

var reverse = function (x) {
  // turn input into a string and split into array
  // return reverse chars as string
  // join and parseint

  let arr = JSON.stringify(x).split("");
  let reverseArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  if (parseInt(reverseArr.join("")) > 2147483647) {
    return 0;
  }
  if (arr[0] === "-") {
    return parseInt(reverseArr.join("")) * -1;
  } else {
    return parseInt(reverseArr.join(""));
  }
};