// Bài 1: Two Sum (LeetCode #1)
// Cho mảng số nguyên và target, tìm 2 chỉ số (index) của 2 số cộng lại = target.
// Input: nums = [2, 7, 11, 15], target = 9 → Output: [0, 1]
// ⚠️ Phải dùng Hash Map (Object/Map), không được dùng 2 vòng lặp lồng nhau.
function twoSum(nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
  return null;
}
console.log("1:", twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log("1:", twoSum([3, 2, 4], 6)); // [1, 2]
console.log("1:", twoSum([3, 3], 6)); // [0, 1]

// Bài 2: Group Anagrams (LeetCode #49)
// Nhóm các từ đảo chữ (anagram) lại với nhau.
// Input: ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]] ← thứ tự nhóm không quan trọng
// Gợi ý: Key của HashMap = các chữ cái đã sort ("eat" → "aet", "tea" → "aet").
function groupAnagrams(strs) {
  // Your code
    const anagramMap = {};
    for (const str of strs) {
      const sorted = str.split('').sort().join('');
      if (!anagramMap[sorted]) {
        anagramMap[sorted] = [];
      }
      anagramMap[sorted].push(str);
    }
    return Object.values(anagramMap);

}
console.log("2:", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));