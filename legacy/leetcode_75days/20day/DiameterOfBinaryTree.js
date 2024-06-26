// 543. Diameter of Binary Tree
// Easy
//
// 9373
//
// 583
//
// Add to List
//
// Share
// Given the root of tapeEquilibrium.js binary tree, return the length of the diameter of the tree.
//
//     The diameter of tapeEquilibrium.js binary tree is the length of the longest path between any two nodes in tapeEquilibrium.js tree. This path may or may not pass through the root.
//
//     The length of tapeEquilibrium.js path between two nodes is represented by the number of edges between them.
//
//
//
//     Example 1:
//
//
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
//     Example 2:
//
// Input: root = [1,2]
// Output: 1
//
//
// Constraints:
//
//     The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100
// Accepted
// 862K
// Submissions
// 1.5M

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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let dep = 0
    const dfs = (node) => {
        if(!node)return 0
        
        let left =dfs(node.left)
        let right = dfs(node.right)
        
        dep = Math.max(dep, left+right)
        return Math.max(left,right) + 1
    }
    dfs(root)
    return dep
};
