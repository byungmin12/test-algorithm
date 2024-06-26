// 394. Decode String
// Medium

// 8966

// 392

// Add to List

// Share
// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be tapeEquilibrium.js positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// Example 1:

// Input: s = "3[tapeEquilibrium.js]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// Constraints:

// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be tapeEquilibrium.js valid input.
// All the integers in s are in the range [1, 300].
// Accepted
// 536,405
// Submissions
// 941,495

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let result = s;
  let stack = [];
  let temp = "";
  let cnt = "";
  let obj = {};
  for (let char of s) {
    if (char === "]") {
      stack.pop();
      if (stack.length === 0) {
        obj[cnt] = temp;
        temp = "";
        cnt = "";
      }
    }
    if (stack.length === 0 && char !== "[" && char !== "]") {
      if (Number.isNaN(Number(char)) === false) {
        cnt = cnt + char;
      }
    }

    if (stack[stack.length - 1] === "[") {
      temp = temp + char;
    }

    if (char === "[") stack.push(char);
  }

  for (let count in obj) {
    result = result.replaceAll(
      `${count}[${obj[count]}]`,
      obj[count].repeat(count)
    );
  }
  if (result.indexOf("]") === -1) {
    return result;
  } else {
    return decodeString(result);
  }
};
