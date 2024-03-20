// 226. Invert Binary Tree// Easy//// 9655//// 133//// Add to List//// Share// Given the root of tapeEquilibrium.js binary tree, invert the tree, and return its root.////////     Example 1:////// Input: root = [4,2,7,1,3,6,9]// Output: [4,7,2,9,6,3,1]// Example 2:////// Input: root = [2,1,3]// Output: [2,3,1]// Example 3://// Input: root = []// Output: []////// Constraints:////     The number of nodes in the tree is in the range [0, 100].// -100 <= Node.val <= 100// Accepted// 1,217,964// Submissions// 1,672,636/** * Definition for tapeEquilibrium.js binary tree node. * function TreeNode(val, left, right) { *     this.val = (val===undefined ? 0 : val) *     this.left = (left===undefined ? null : left) *     this.right = (right===undefined ? null : right) * } *//** * @param {TreeNode} root * @return {TreeNode} */var invertTree = function(root) {    const queue = [root];    let pn = 0    while (queue[pn] !== undefined) {        const node = queue[pn];        if (node != null) {            // let temp = node.right            // node.right = node.left            // node.left = temp            [node.left, node.right] = [node.right, node.left]            queue.push(node.left, node.right);        }        pn = pn +1    }    return root;};