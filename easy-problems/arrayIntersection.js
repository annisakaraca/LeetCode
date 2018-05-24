// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that
// you cannot load all elements into the memory at once?


// O(N+M) time and space complexity
var intersect = function(nums1, nums2) {
  // build hash table from nums1
  let elements = {};
  for (var x = 0; x < nums1.length; x++) {
    if (elements[nums1[x]]) {
      elements[nums1[x]]++;
    } else {
      elements[nums1[x]] = 1;
    }
  }
  
  let arr = [];
  // build return arr by traversing through nums2 and comparing to ht
  for (var y = 0; y < nums2.length; y++) {
    if (elements[nums2[y]]){
      elements[nums2[y]]--;
      arr.push(nums2[y]);
    }
  }
  
  return arr; 
};


// solution for sorted array inputs
// O(N) time and space complexity
var sortedIntersect = function(nums1, nums2) {
  let arr = [];
  let x = 0;
  let y = 0;
  while (x < nums1.length && y < nums2.length) {
    if (nums1[x] === nums2[y]) {
      arr.push(nums1[x]);
      x++;
      y++;
    } else if (nums1[x] > nums2[x]) {
      x++;
    } else {
      y++
    }
  }
  return arr;
}