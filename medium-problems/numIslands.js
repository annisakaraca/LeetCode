// Given a 2d grid map of '1's (land) and '0's (water), count the
// number of islands. An island is surrounded by water and is formed 
// by connecting adjacent lands horizontally or vertically. You may 
// assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3


var numIslands = function(grid) {
  var count = 0;
  for (var x = 0; x < grid.length; x++) {
    for (var y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === "1") {
        grid = investigateIsland(x, y, grid);
        count++;
      }
    }
  }
  return count;
};

var investigateIsland = function(x, y, map) {
  map[x][y] = "-1";
  if (map[x][y+1] === "1") {
    map = investigateIsland(x, y+1, map);
  }
  if (map[x+1] !== undefined && map[x+1][y] === "1") {
    map = investigateIsland(x+1, y, map);
  }
  if (map[x][y-1] === "1") {
    map = investigateIsland(x, y-1, map);
  }
  if (map[x-1] !== undefined && map[x-1][y] === "1") {
    map = investigateIsland(x-1, y, map);
  }
  return map;
}

// tests
// let map = ([
//   [1, 1, 0, 0, 0],
//   [1, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 0, 1, 1],
//   [0, 0, 0, 1, 1]
//   ]);
let map = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
let result = numIslands(map);
console.log(result);