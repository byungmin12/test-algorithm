// 121. Best Time to Buy and Sell Stock// Easy//// 18294//// 586//// Add to List//// Share// You are given an array prices where prices[i] is the price of tapeEquilibrium.js given stock on the ith day.////     You want to maximize your profit by choosing tapeEquilibrium.js single day to buy one stock and choosing tapeEquilibrium.js different day in the future to sell that stock.////     Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.//////// Example 1://// Input: prices = [7,1,5,3,6,4]// Output: 5// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.//     Example 2://// Input: prices = [7,6,4,3,1]// Output: 0// Explanation: In this case, no transactions are done and the max profit = 0.////// Constraints:////     1 <= prices.length <= 105// 0 <= prices[i] <= 104// Accepted// 2.4M// Submissions// 4.5M/** * @param {number[]} prices * @return {number} */var maxProfit = function(prices) {    let maxium = 0    // for(let i = 0, length = prices.length ; i<length ; i++){    //     let buy = prices[i]    //     let sell = Math.max(...prices.slice(i))    //     if(maxium < sell - buy) maxium =sell - buy    // }    let buy = prices[0]    for(let i = 1, length = prices.length ; i<length ; i++){        let sell = prices[i]        maxium = Math.max(maxium , sell - buy)        if(buy >  prices[i]) buy = prices[i]    }    return maxium};