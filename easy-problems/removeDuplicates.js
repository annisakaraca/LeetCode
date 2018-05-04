// Given a sorted array nums, remove the duplicates in-place 
// such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this
// by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements 
// of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.
// Example 2:

// Given nums = [0,0,1,1,1,2,2,3,3,4],

// Your function should return length = 5, with the first five elements
// of nums being modified to 0, 1, 2, 3, and 4 respectively.

// It doesn't matter what values are set beyond the returned length.


// naive solution: modify array to delete each duplicate as you encounter it
// time complexity: O(n^2), space complexity: O(1)

var removeDuplicates = function(nums) {
  let cN = 0;
  let p = 1;
  while (p <= nums.length) {
    if (nums[cN] === nums[p]) {
      nums.splice(p, 1);
    } else {
      cN = p;
      p++;
    }
  }
  return nums.length;
};


// optimal solution: rewrite first x elements (where x is number of unique elements in nums)
// time complexity: O(n), space complexity: O(1)

var removeDups = function(nums) {
  let cn = 0;
  let p = 1;
  while (p < nums.length) {
    if (nums[cn] === nums[p]) {
      p++;
    } else {
      nums[cn + 1] = nums[p];
      cn = p;
      p++;
    }
  }
  return cn + 1;
}