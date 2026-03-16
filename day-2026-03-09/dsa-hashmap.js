// Bài 1: Two Sum (LeetCode #1)
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// ⚠️ Giải bằng hash map O(n), KHÔNG dùng nested loops O(n²)
function twoSum(nums, target) {
    // Your code
    const map = new Map(); // lưu: value -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
}
console.log("1 - Test 1:", twoSum([2, 7, 11, 15], 9));
console.log("1 - Test 2:", twoSum([3, 2, 4], 6));
// Bài 2: Valid Anagram (LeetCode #242)
// Input: s = "anagram", t = "nagaram" → true
// Input: s = "rat", t = "car" → false
// HINT: đếm frequency mỗi ký tự
function isAnagram(s, t) {
    // Your code
    if (s.length !== t.length) return false;

    const freq = {};

    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (const char of t) {
        if (!freq[char]) {
            return false;
        }
        freq[char]--;
    }

    return true;
}
console.log("2 - Test 1:", isAnagram("anagram", "nagaram"));
console.log("2 - Test 2:", isAnagram("rat", "car"));

// Bài 3: First Unique Character (LeetCode #387)
// Input: "loveleetcode" → 2 (ký tự 'v')
// Input: "aabb" → -1
function firstUniqChar(s) {
    // Your code
    const freq = {};

    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) {
            return i;
        }
    }

    return -1;
}
console.log("3 - Test 1:", firstUniqChar("loveleetcode"));
console.log("3 - Test 2:", firstUniqChar("aabb"));
// Bài 4: Ransom Note (LeetCode #383)
// Input: ransomNote = "aa", magazine = "aab" → true
// Input: ransomNote = "aa", magazine = "ab" → false
function canConstruct(ransomNote, magazine) {
    // Your code
    const freq = {};

    for (const char of magazine) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (const char of ransomNote) {
        if (!freq[char]) {
            return false;
        }
        freq[char]--;
    }

    return true;
}
console.log("4 - Test 1:", canConstruct("aa", "aab"));
console.log("4 - Test 2:", canConstruct("aa", "ab"));
// Bài 5 (MEDIUM): Group Anagrams (LeetCode #49)
// Input: ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
// HINT: sort mỗi word → làm key
function groupAnagrams(strs) {
    // Your code
    const map = new Map();

    for (const word of strs) {
        const key = word.split("").sort().join("");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    return [...map.values()];
}

console.log("5 - Test 1:", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log("5 - Test 2:", groupAnagrams(["abc", "bca", "cab", "xyz", "zyx", "foo"]));
