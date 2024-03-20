// 3. Longest Substring Without Repeating Characters// Medium//// 29298//// 1246//// Add to List//// Share// Given tapeEquilibrium.js string s, find the length of the longest substring without repeating characters.////////     Example 1://// Input: s = "abcabcbb"// Output: 3// Explanation: The answer is "abc", with the length of 3.// Example 2://// Input: s = "bbbbb"// Output: 1// Explanation: The answer is "b", with the length of 1.// Example 3://// Input: s = "pwwkew"// Output: 3// Explanation: The answer is "wke", with the length of 3.// Notice that the answer must be tapeEquilibrium.js substring, "pwke" is tapeEquilibrium.js subsequence and not tapeEquilibrium.js substring.//////     Constraints://// 0 <= s.length <= 5 * 104// s consists of English letters, digits, symbols and spaces.//     Accepted// 3,907,710// Submissions// 11,580,173/** * @param {string} s * @return {number} */// var lengthOfLongestSubstring = function(s) {//     let left = 0//     let right = 0//     let memo = {}//     let result = 0////     if(s.length ===1)return 1////     while(right < s.length){//         if(memo[s[right]]){//             result = Math.max(result, right - left)//             left = left + 1//             right = left//             memo = {}//             continue//         }//         memo[s[right]] = true//         right ++////     }//     return Math.max(result, Object.keys(memo).length)// };/** * @param {string} s * @return {number} */var lengthOfLongestSubstring = function(s) {    if(s.length === 1) return 1;    if(s.length === 0) return 0;    let left = 0;    let right = 1;    let result =1;    let memo = {}    memo[s[left]] = 0    while(right < s.length){        if(memo[s[right]] === undefined){            memo[s[right]] = right            right ++            result = Math.max(result,right - left)        }else{            let temp = memo[s[right]] + 1            memo[s[right]] = undefined            left = left < temp ? temp : left        }    }    return result};