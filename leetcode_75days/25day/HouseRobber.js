// 198. House Robber// Medium//// 14687//// 297//// Add to List//// Share// You are tapeEquilibrium.js professional robber planning to rob houses along tapeEquilibrium.js street. Each house has tapeEquilibrium.js certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.////     Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.////////     Example 1://// Input: nums = [1,2,3,1]// Output: 4// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).//     Total amount you can rob = 1 + 3 = 4.// Example 2://// Input: nums = [2,7,9,3,1]// Output: 12// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).//     Total amount you can rob = 2 + 9 + 1 = 12.////// Constraints:////     1 <= nums.length <= 100// 0 <= nums[i] <= 400// Accepted// 1,336,434// Submissions// 2,755,909/** * @param {number[]} nums * @return {number} * 재귀문을 활용한 풀이 */var rob = function(nums) {    let memo = []    let recursive = (idx) => {        if(idx > nums.length -1) {return 0}        if(memo[idx] !==undefined){return memo[idx]}        memo[idx] = Math.max(recursive(idx+2)+ nums[idx], recursive(idx+1))        return memo[idx]    }    return recursive(0)};const rob2 = function(nums) {    if(!nums.length)return 0    if(nums.length===1)return nums[0]    if(nums.length===2)return Math.max(nums[0],nums[1])    let twoBefore = nums[0]    let oneBefore = Math.max(nums[0],nums[1])    for(let i =2; i<nums.length; i++){        const cur = Math.max(twoBefore + nums[i], oneBefore)        twoBefore = oneBefore        oneBefore = cur    }    return oneBefore};