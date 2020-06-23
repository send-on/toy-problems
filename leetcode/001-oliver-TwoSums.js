/* 
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example:

Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function (nums, target) {
  // given array of nums, target integer
  // return element number that adds up to target

  // save i, and iterate through i+1
  // if adds up, return i and y

  for (let i = 0; i < nums.length; i++) {
    for (let y = i + 1; y < nums.length; y++) {
      if (nums[i] + nums[y] === target) {
        return [i, y];
      }
    }
  }
};
