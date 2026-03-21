function removeDuplicates(nums) {
    let arr = [...new Set(nums)];
    return arr;

}
console.log("1: ", removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

function movezero(nums) {
    let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  return nums;
}

console.log("2: ", movezero([0,1,0,3,12]));

function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
}

console.log("3: ", maxProfit([7,1,5,3,6,4]));

function findMaxAverage(nums, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  let maxSum = windowSum;
  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum + nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum / k;
}

console.log("4:", findMaxAverage([1,12,-5,-6,50,3], 4));