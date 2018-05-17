// bitwise solution
// O(n) time
// O(1) space

var singleNumber = function(nums) {
  let result = nums[0];
  for (var i = 1; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};