// dynammic programming solution: runs in O(n) time and O(1) space
var maxProfit = function(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (var x = 1; x < prices.length; x++) {
    if (minPrice > prices[x]) {
      minPrice = prices[x];
    } else if (maxProfit < prices[x] - minPrice) {
      maxProfit = prices[x] - minPrice;
    }
  }
  return maxProfit;
};


// brute force solution: runs in O(n^2) time and O(1) space
var maxProfitBF = function(prices) {
  let maxP = 0;
  for (var x = 0; x < prices.length - 1; x++) {
    for (var y = x+1; y < prices.length; y++) {
      let possibleP = prices[y] - prices[x];
      if (possibleP > maxP) {
        maxP = possibleP;
      }
    }
  }
  return maxP;
}

console.log(maxProfit([7,1,5,3,6,4]));

