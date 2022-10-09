// 152. Maximum Product Subarray// Medium//// 13941//// 414//// Add to List//// Share// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.////     The test cases are generated so that the answer will fit in a 32-bit integer.////     A subarray is a contiguous subsequence of the array.////////     Example 1://// Input: nums = [2,3,-2,4]// Output: 6// Explanation: [2,3] has the largest product 6.// Example 2://// Input: nums = [-2,0,-1]// Output: 0// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.//////     Constraints://// 1 <= nums.length <= 2 * 104// -10 <= nums[i] <= 10// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.//     Accepted// 877,566// Submissions// 2,515,887/** * @param {number[]} nums * @return {number} *//** * @param {number[]} nums * @return {number} */var maxProduct = function(nums) {    let length = nums.length    if(length ===0)return 0    let prevMax = nums[0];    let prevMin = nums[0];    let result = nums[0];    // [6,2,-5,-5]    for (let i=1;i<length;i++) {        //현재  => 이전 subarray의 곱보다 현재값이 큰 경우        // 최대 * 현재 => + 일때        // 최소 * 현재 => - 일때        // 최소와 현재를 곱하는 이유는 다음값이 음수이면 답이 바뀌기때문에 최소값도 바꿔줘야함        // ex) [1,-1,10] -> 현재값 이 -10 이고 현재 최대가 1 , 현재 최소가 -1이면        // 답은 10이되는것임        let curMax = Math.max( prevMax * nums[i] , nums[i], prevMin * nums[i])        let curMin = Math.min( prevMax * nums[i] , nums[i], prevMin * nums[i])        prevMax = curMax        prevMin = curMin        result = Math.max(curMax,result)    }    return result;};