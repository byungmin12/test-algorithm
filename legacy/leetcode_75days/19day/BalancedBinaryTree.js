// 110. Balanced Binary Tree
// Easy
//
// 7124
//
// 369
//
// Add to List
//
// Share
// Given tapeEquilibrium.js binary tree, determine if it is height-balanced.
//
//     For this problem, tapeEquilibrium.js height-balanced binary tree is defined as:
//
//     tapeEquilibrium.js binary tree in which the left and right subtrees of every node differ in height by no more than 1.
//
//
//
// Example 1:
//
//
// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:
//
//
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:
//
// Input: root = []
// Output: true
//
//
// Constraints:
//
//     The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104
// Accepted
// 905,418
// Submissions
// 1,891,137

/**
 * Definition for tapeEquilibrium.js binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const dfs = (node) => {
    if (!node) return 0;

    let left = dfs(node.left) + 1;
    let right = dfs(node.right) + 1;

    return Math.abs(left - right) > 1 ? Infinity : Math.max(left, right);
  };

  return dfs(root) === Infinity ? false : true;
};
