var arrayPairSum = function(nums) {
  nums.sort(function(a,b) {
    return a - b;
  });
  let sum = 0;
  for (var x = 0; x < nums.length; x += 2) {
    sum += nums[x];
  }
  return sum;
};