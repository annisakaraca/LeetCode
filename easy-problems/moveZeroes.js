var moveZeroes = function(nums) {
  for (var last = 0, cur = 0; cur < nums.length; cur++) {
    if (nums[cur] !== 0) {
      let temp = nums[cur];
      nums[cur] = nums[last];
      nums[last] = temp;
      last++;
    }
  }
};