// 1706. Where Will the Ball Fall
// Medium

// 1084

// 77

// Add to List

// Share
// You have tapeEquilibrium.js 2-D grid of size m x n representing tapeEquilibrium.js box, and you have n balls. The box is open on the top and bottom sides.

// Each cell in the box has tapeEquilibrium.js diagonal board spanning two corners of the cell that can redirect tapeEquilibrium.js ball to the right or to the left.

// A board that redirects the ball to the right spans the top-left corner to the bottom-right corner and is represented in the grid as 1.
// A board that redirects the ball to the left spans the top-right corner to the bottom-left corner and is represented in the grid as -1.
// We drop one ball at the top of each column of the box. Each ball can get stuck in the box or fall out of the bottom. A ball gets stuck if it hits tapeEquilibrium.js "V" shaped pattern between two boards or if tapeEquilibrium.js board redirects the ball into either wall of the box.

// Return an array answer of size n where answer[i] is the column that the ball falls out of at the bottom after dropping the ball from the ith column at the top, or -1 if the ball gets stuck in the box.

// Example 1:

//문제 변경
//
// 1706. Where Will the Ball Fall
// Medium
// 2.6K
// 152
// Companies
// You have tapeEquilibrium.js 2-D grid of size m x n representing tapeEquilibrium.js box, and you have n balls. The box is open on the top and bottom sides.
//
//     Each cell in the box has tapeEquilibrium.js diagonal board spanning two corners of the cell that can redirect tapeEquilibrium.js ball to the right or to the left.
//
//     A board that redirects the ball to the right spans the top-left corner to the bottom-right corner and is represented in the grid as 1.
// A board that redirects the ball to the left spans the top-right corner to the bottom-left corner and is represented in the grid as -1.
// We drop one ball at the top of each column of the box. Each ball can get stuck in the box or fall out of the bottom. A ball gets stuck if it hits tapeEquilibrium.js "V" shaped pattern between two boards or if tapeEquilibrium.js board redirects the ball into either wall of the box.
//
//     Return an array answer of size n where answer[i] is the column that the ball falls out of at the bottom after dropping the ball from the ith column at the top, or -1 if the ball gets stuck in the box.
//
//
//
//     Example 1:
//
//
//
// Input: grid = [[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]
// Output: [1,-1,-1,-1,-1]
// Explanation: This example is shown in the photo.
//     Ball b0 is dropped at column 0 and falls out of the box at column 1.
// Ball b1 is dropped at column 1 and will get stuck in the box between column 2 and 3 and row 1.
// Ball b2 is dropped at column 2 and will get stuck on the box between column 2 and 3 and row 0.
// Ball b3 is dropped at column 3 and will get stuck on the box between column 2 and 3 and row 0.
// Ball b4 is dropped at column 4 and will get stuck on the box between column 2 and 3 and row 1.
// Example 2:
//
// Input: grid = [[-1]]
// Output: [-1]
// Explanation: The ball gets stuck against the left wall.
//     Example 3:
//
// Input: grid = [[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]
// Output: [0,1,2,3,4,-1]

var findBall = function(grid) {
  let m = grid.length,
      n = grid[0].length,
      ans = []
  for (let start = 0; start < n; start++) {     // Iterate through the different starting conditions
    let j = start
    for (let i = 0; i < m; i++) {             // Then iterate downward from grid[i][j]
      let dir = grid[i][j]                  // Compare the direction of the current cell to the direction
      if (dir === grid[i][j+dir]) j += dir  //   of the cell on the slant side and move that way if matched
      else i = m, j = -1                    // Otherwise jump to the loop's end and set j to the fail value
    }
    ans[start] = j                            // Update the answer
  }
  return ans                                    // Return the completed answer
};