/**
 * DSA - LeetCode Easy
 * 1) Two Sum (hash map)
 * 2) Contains Duplicate (hash set)
 */

// Two Sum
function twoSum(nums, target) {
  if (!Array.isArray(nums)) throw new TypeError("nums must be an array");
  if (typeof target !== "number" || !Number.isFinite(target)) throw new TypeError("target must be a finite number");

  const seen = new Map(); // value -> index
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (typeof n !== "number" || !Number.isFinite(n)) {
      throw new TypeError("nums must contain only finite numbers");
    }

    const need = target - n;
    if (seen.has(need)) {
      return [seen.get(need), i];
    }

    seen.set(n, i);
  }

  return []; // nếu đề bài đảm bảo có đáp án thì dòng này không dùng tới
}

// Contains Duplicate
function containsDuplicate(nums) {
  if (!Array.isArray(nums)) throw new TypeError("nums must be an array");

  const seen = new Set();
  for (const n of nums) {
    if (seen.has(n)) return true;
    seen.add(n);
  }
  return false;
}

if (typeof require !== "undefined" && require.main === module) {
  console.log("twoSum([2,7,11,15], 9) =>", twoSum([2, 7, 11, 15], 9));
  console.log("containsDuplicate([1,2,3,1]) =>", containsDuplicate([1, 2, 3, 1]));
  console.log("containsDuplicate([1,2,3,4]) =>", containsDuplicate([1, 2, 3, 4]));
}

module.exports = { twoSum, containsDuplicate };
