// 1. Given a binary array nums, return the maximum number of consecutive
// 1's in the array.
// Input: nums = [1,1,0,1,1,1,0,0,0,1,1,1,1,1]
// Output: 5

// Function
// For Loop
// Condition
function maxOnes(nums) {
  return nums.reduce(
    (max, current) => {
      if (current) {
        max.count++;
        max.max = Math.max(max.max, max.count);
      } else {
        max.count = 0;
      }
      return max;
    },
    { count: 0, max: 0 }
  ).max;
}

const result = maxOnes([1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1]);

console.log(result);

// export default getLongestSequenceOfOnes;
