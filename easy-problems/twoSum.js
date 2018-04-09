var twoSum = function(nums, target) {
  let numsObj = {};
  for (var z = 0; z < nums.length; z++){
    numsObj[nums[z]] = z;
  }
  for (var x = 0; x < nums.length; x++) {
    var secondT = target - nums[x];
    if (numsObj[secondT]) {
      return [x, numsObj[secondT]];
    }
  }
};